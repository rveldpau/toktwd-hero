//Constants Imports
import hairColors from './constants/hairColors';
import colors from './constants/colors';
import genders from './constants/genders';
import skinColors from './constants/skinColors';

export default ({
    //Content goes here
    name: "",
    gender: genders.male,
    hair: hairColors.blonde,
    skin: skinColors.fair,
    costume: {
        color: colors.pink
    },
    stats: {
        powers: [],
        weaknesses: []
    },
    associations: {
        sidekick: {
            name: "",
            gender: genders.female,
            hair: hairColors.blonde,
            skin: skinColors.fair,
            costume: {
                color: colors.purple
            },
            stats: {
                powers: [],
                weaknesses: []
            },
            backstory: ""
        },
        enemy: {
            name: "",
            gender: genders.male,
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
    backstory: ""

})