//Constants Imports
import hairColors from './constants/hairColors';
import colors from './constants/colors';
import genders from './constants/genders';
import skinColors from './constants/skinColors';

export default ({
    //Content goes here
    name: "Guy",
    gender: genders.male,
    hair: hairColors.blonde,
    skin: skinColors.fair,
    costume: {
        color: colors.pink
    },
    stats: {
        powers: ["Stuff"],
        weaknesses: ["Such"]
    },
    associations: {
        sidekick: {
            name: "Boy",
            gender: genders.female,
            hair: hairColors.blonde,
            skin: skinColors.fair,
            costume: {
                color: colors.purple
            },
            stats: {
                powers: ["More stuff"],
                weaknesses: ["Less such"]
            },
            backstory: ""
        },
        enemy: {
            name: "Amazing Girl",
            gender: genders.female,
            hair: hairColors.blonde,
            skin: skinColors.fair,
            costume: {
                color: colors.blue
            },
            stats: {
                powers: [],
                weaknesses: []
            },
            backstory: ""
        },
    },
    backstory: "When a mutant attacked this alien, he turned into a... human guy!"

})