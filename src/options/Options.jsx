import genders from '../model/constants/genders'
import hairColors from '../model/constants/hairColors'
import skinColors from '../model/constants/skinColors'
import colors, { costumeFilter } from '../model/constants/colors'

// Everything not being shown off in a section uses these.
const defaults = { skin: skinColors.medium, hair: hairColors.brown, color: colors.blue }

const sections = [
  { title: "Gender", values: genders, look: (value) => ({ gender: value }) },
  { title: "Hair", values: hairColors, look: (value) => ({ hair: value }) },
  { title: "Skin", values: skinColors, look: (value) => ({ skin: value }) },
  { title: "Costume", values: colors, look: (value) => ({ color: value }) },
]

// "darkBrown" -> "Dark brown"
const label = (key) => {
  const words = key.replace(/([A-Z])/g, " $1").toLowerCase()
  return words[0].toUpperCase() + words.slice(1)
}

function Figure({ gender, skin, hair, color }) {
  return <div className={`figure ${gender}`}>
    <img src={`/images/${gender}-skin-${skin}.png`} alt="" />
    <img src={`/images/${gender}-hair-${hair}.png`} alt="" />
    <img src={`/images/${gender}-outfit.png`} alt="" style={{ filter: costumeFilter(color) }} />
  </div>
}

export default function Options() {
  return <main>
    <h1>Pick your look!</h1>

    <div className="sections">
      {sections.map((section) =>
        <section key={section.title} className={section.title.toLowerCase()}>
          <h2>{section.title}</h2>
          <div className="choices">
            {Object.entries(section.values).map(([key, value]) =>
              <div key={key} className="choice">
                <div className="figures">
                  {section.title === "Gender"
                    ? <Figure {...defaults} gender={value} />
                    : Object.values(genders).map((gender) =>
                      <Figure key={gender} {...defaults} gender={gender} {...section.look(value)} />)}
                </div>
                <span className="name">{label(key)}</span>
              </div>)}
          </div>
        </section>)}
    </div>
  </main>
}
