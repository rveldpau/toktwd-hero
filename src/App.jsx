import './App.css'
import { colorHue } from './model/constants/colors'
import hero from './model/hero'

function App() {

  if ((hero.costume || {}).color !== undefined) {
    const costumeColor = colorHue[hero.costume.color];
    document.documentElement.style.setProperty("--costume-hue", costumeColor + "deg")
    document.documentElement.style.setProperty("--background-hue", (costumeColor - 90 < 0 ? 270 + costumeColor : costumeColor - 90) + "deg")
  }


  document.documentElement.style.setProperty("--hair-img", `url(/images/${hero.gender}-hair-${hero.hair}.png)`)
  document.documentElement.style.setProperty("--skin-img", `url(/images/${hero.gender}-skin-${hero.skin}.png)`)

  return (
    <>
      <div class="main">
        <img class="background" />
        <div class="name-placard">
          <img class="background" />
          <span class="intro">Introducing...</span>
          <span class="name">
            {hero.name}
          </span>
        </div>
        <div class="hero-container">
          <div class={`hero ${hero.gender}`}>
            <img class="skin" />
            <img class="hair" />
            <img class="outfit" />
          </div>
        </div>
        {(hero.stats?.powers?.length > 0 || hero.stats?.weaknesses?.length > 0 || hero.associations?.sidekick || hero.associations?.enemy) &&
          <div class="details">
            {(hero.stats?.powers?.length > 0 || hero.stats?.weaknesses?.length > 0) && <div class="stats">
              {hero.stats?.powers?.length > 0 && <>
                <h1>Powers</h1>
                <span class="powers">{hero.stats.powers.join(", ")}</span>
              </>}
              {hero.stats?.weaknesses?.length > 0 && <>
                <h1>Weaknesses</h1>
                <span class="weaknesses">{hero.stats.weaknesses.join(", ")}</span>
              </>}
            </div>
            }
            <span class="associations">
              {hero.associations?.sidekick && <div class="sidekick-container">
                <h1>Sidekick</h1>
                <span class="sidekick">{hero.associations.sidekick}</span>
              </div>
              }
              {hero.associations?.enemy && <div class="enemy-container">
                <h1>Arch-Nemesis</h1>
                <span class="enemy">{hero.associations.enemy}</span>
              </div>
              }
            </span>
            {hero.backstory &&
              <div class="backstory">
                {hero.backstory}
              </div>
            }
          </div>
        }

      </div>
      {(hero.stats?.powers?.length > 0 && hero.name && hero.gender && hero.skin && hero.hair && hero.costume.color && hero.backstory ) && <div className='prompt'><b>Copilot Prompt:</b> 
        <span>You are a master comic character creator, the likes of Stan Lee.</span>
        <span> Create animage of a full comic cover of a new super-hero named {hero.name}.</span>
        <span>They are {hero.gender} with {hero.skin} skin, {hero.hair} hair and primarily wear {hero.costume.color}.</span>
        {hero.stats?.powers?.length > 0 && <span>They have the following powers: {hero.stats?.powers?.join(", ")}.</span>}
        {hero.backstory && <span>And this is their backstory: {hero.backstory}</span>}
      </div> }
    </>
  )
}

export default App
