import './App.css'
import hero from './model/hero'

function App() {

  if((hero.costume || {}).color !== undefined){
    document.documentElement.style.setProperty("--costume-hue",hero.costume.color + "deg")
    document.documentElement.style.setProperty("--background-hue",(hero.costume.color-90 < 0 ? 270 + hero.costume.color : hero.costume.color-90)  + "deg")
}


  document.documentElement.style.setProperty("--hair-img",`url(/images/${hero.gender}-hair-${hero.hair}.png)`)
  document.documentElement.style.setProperty("--skin-img",`url(/images/${hero.gender}-skin-${hero.skin}.png)`)

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
        <div class="details">
          <div class="stats">
            {hero.stats?.powers?.length > 0 && <>
              <h1>Powers</h1>
              <span class="powers">{hero.stats.powers.join(", ")}</span>
            </>}
            {hero.stats?.weaknesses?.length > 0 && <>
              <h1>Weaknesses</h1>
              <span class="weaknesses">{hero.stats.weaknesses.join(", ")}</span>
            </>}
          </div>
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
        </div>

      </div>
    </>
  )
}

export default App
