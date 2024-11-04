//Constants Imports
import hairColors from './constants/hairColors';
import colors from './constants/colors';
import genders from './constants/genders';
import skinColors from './constants/skinColors';

export default ({
    //Content goes here
    name:"The Rate-inator",
    gender: genders.male,
    hair: hairColors.black,
    skin: skinColors.fair,
    costume: {
        color: colors.red
    },
    stats: {
        powers:["Making things work"],
        weaknesses: [ "The process"]
    },
    associations: {
        sidekick: "The Recreation Vehicle",
        enemy: "Retirement"
    }
    
})