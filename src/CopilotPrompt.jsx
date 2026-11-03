import { useState } from 'react'

const genderNouns = { male: "man", female: "woman" }

const list = (items) => items.length < 2
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`

// One or two sentences describing how a character looks and what they can do.
function describe(character) {
    const look = [
        character.skin && `${character.skin.replace("-", " ")} skin`,
        character.hair && `${character.hair} hair`,
    ].filter(Boolean)

    let text = `${character.name} is a ${genderNouns[character.gender] ?? "person"}`
    if (look.length) text += ` with ${list(look)}`
    if (character.costume?.color) text += `, wearing a ${character.costume.color} costume`
    text += "."

    const powers = character.stats?.powers ?? []
    const weaknesses = character.stats?.weaknesses ?? []
    if (powers.length) text += ` Show ${character.name} using their powers: ${list(powers)}.`
    if (weaknesses.length) text += ` Subtly hint at their weakness: ${list(weaknesses)}.`
    return text
}

function buildPrompt(hero) {
    const { sidekick, enemy } = hero.associations ?? {}
    const sections = [
        `Create a full comic book cover for issue #1 of a brand-new superhero series called "${hero.name}".`,

        "Style: classic American comic book cover art with bold ink outlines, vibrant saturated colors, "
        + "halftone shading, dramatic lighting and an energetic, dynamic composition. "
        + "Family-friendly and suitable for all ages. Portrait orientation.",

        `Cover layout: a large, bold title logo across the top that reads "${hero.name}", `
        + `a small "#1" issue badge in the top corner, and a short, exciting tagline in a banner near the bottom.`,

        `The hero (front and center, in a heroic action pose): ${describe(hero)}`,
    ]

    if (sidekick?.name) {
        sections.push(`The sidekick (beside the hero, ready for action): ${describe(sidekick)}`)
    }
    if (enemy?.name) {
        let villain = `The arch-nemesis (looming large and menacing in the background): ${describe(enemy)}`
        if (enemy.backstory) villain += ` Their story: ${enemy.backstory}`
        sections.push(villain)
    }
    if (hero.backstory) {
        sections.push(`Use the hero's origin story to inspire the setting and mood: ${hero.backstory}`)
    }

    sections.push("The only words on the cover should be the title, the issue number and the tagline, all spelled correctly.")
    return sections.join("\n\n")
}

export default function CopilotPrompt({ hero }) {
    const [copied, setCopied] = useState(false)
    const prompt = buildPrompt(hero)

    const copy = async () => {
        await navigator.clipboard.writeText(prompt)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return <div className="prompt">
        <b>Copilot Prompt:</b> <button onClick={copy}>{copied ? "Copied!" : "Copy"}</button>
        <p className="prompt-text">{prompt}</p>
    </div>
}
