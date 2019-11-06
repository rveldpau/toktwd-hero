//Constants Imports
const hairColors = require('./constants/hairColors');
const colors = require('./constants/colors');
const genders = require('./constants/genders');
const skinColors = require("./constants/skinColors");

module.exports = {
    //Content goes here
    name:"Super Chris",
    gender: genders.male,
    hair: hairColors.brown,
    skin: skinColors.fair,
    costume: {
        color: colors.red
    },
    stats: {
        powers:[ "IT Magic"],
        weaknesses: [ "Memory Loss"]
    },
    associations: {
        sidekick: "Ananda Wonder",
        enemy: "Microsoft"
    }
    
}