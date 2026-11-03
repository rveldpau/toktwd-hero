import './App.css'
import CopilotPrompt from './CopilotPrompt';
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
      <div className="main">
        <img className="background" />
        <div className="name-placard">
          <img className="background" />
          <span className="intro">Introducing...</span>
          <span className="name">
            {hero.name}
          </span>
        </div>
        <div className="hero-container">
          <div className={`hero ${hero.gender}`}>
            <img className="skin" />
            <img className="hair" />
            <img className="outfit" />
          </div>
        </div>
        {(hero.stats?.powers?.length > 0 || hero.stats?.weaknesses?.length > 0 || hero.associations?.sidekick || hero.associations?.enemy) &&
          <div className="details">
            {(hero.stats?.powers?.length > 0 || hero.stats?.weaknesses?.length > 0) && <div className="stats">
              {hero.stats?.powers?.length > 0 && <>
                <h1>Powers</h1>
                <span className="powers">{hero.stats.powers.join(", ")}</span>
              </>}
              {hero.stats?.weaknesses?.length > 0 && <>
                <h1>Weaknesses</h1>
                <span className="weaknesses">{hero.stats.weaknesses.join(", ")}</span>
              </>}
            </div>
            }
            <span className="associations">
              {hero.associations?.sidekick?.name && <div className="sidekick-container">
                <h1>Sidekick</h1>
                <span className="sidekick">{hero.associations.sidekick?.name}</span>
              </div>
              }
              {hero.associations?.enemy?.name && <div className="enemy-container">
                <h1>Arch-Nemesis</h1>
                <span className="enemy">{hero.associations.enemy?.name}</span>
              </div>
              }
            </span>
            {hero.backstory &&
              <div className="backstory">
                {hero.backstory}
              </div>
            }
          </div>
        }

      </div>
      {(hero.stats?.powers?.length > 0 && hero.name && hero.gender && hero.skin && hero.hair && hero.costume?.color && hero.backstory) && <CopilotPrompt hero={hero} />}
    </>
  )
}

export default App
