//Constants Imports
import hairColors from './constants/hairColors';
import colors from './constants/colors';
import genders from './constants/genders';
import skinColors from './constants/skinColors';

export default ({
    //Content goes here
    name:"",
    gender: genders.male,
    hair: hairColors.black,
    skin: skinColors.olive,
    costume: {
        color: colors.purple
    },
    stats: {
        powers:[],
        weaknesses: []
    },
    associations: {
        //sidekick: "" ,
        // enemy: ""
    },
    backstory: ""
    
})