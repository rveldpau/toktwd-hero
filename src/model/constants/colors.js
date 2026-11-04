export default ({
    red: "red",
    orange: "orange",
    yellow: "yellow",
    gold: "gold",
    brown: "brown",
    green: "green",
    teal: "teal",
    lightBlue: "light blue",
    blue: "blue",
    navy: "navy",
    purple: "purple",
    pink: "pink",
    black: "black",
    silver: "silver",
    white: "white",
})

// The outfit image is red; each colour is made by rotating its hue.
export const colorHue = ({
    "red": 0,
    "orange": 57,
    "yellow": 64,
    "gold": 65,
    "brown": 60,
    "green": 110,
    "teal": 165,
    "light blue": 190,
    "blue": 200,
    "navy": 215,
    "purple": 280,
    "pink": 320,
    "black": 0,
    "silver": 0,
    "white": 0,
})

// Extra tweaks for colours that a hue change alone can't make.
const colorAdjust = ({
    "yellow": "brightness(3.4) saturate(1.6)",
    "gold": "brightness(2) saturate(0.85)",
    "orange": "brightness(2.4) saturate(1.6)",
    "light blue": "brightness(1.6) saturate(0.8)",
    "navy": "brightness(0.55)",
    "black": "grayscale(1) brightness(0.35)",
    "silver": "grayscale(1) brightness(2.6)",
    "white": "grayscale(1) brightness(4.5)",
})

export const costumeFilter = (color) =>
    `hue-rotate(${colorHue[color] ?? 0}deg) ${colorAdjust[color] ?? ""}`.trim()
