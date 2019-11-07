var heroes = (function() {
    var me = {};

    function onHeroLoad(data){
        if(data.name){
            $(".name").text(data.name);
            document.title = "Introducing " + data.name;
        }
        
        $(".hero").addClass(data.gender);
        if((data.costume || {}).color !== undefined){
            document.documentElement.style.setProperty("--costume-hue",data.costume.color + "deg")
            document.documentElement.style.setProperty("--background-hue",(data.costume.color-90 < 0 ? 270 + data.costume.color : data.costume.color-90)  + "deg")
        }

        document.documentElement.style.setProperty("--hair-img",`url(/images/${data.gender}-hair-${data.hair}.png)`)
        document.documentElement.style.setProperty("--skin-img",`url(/images/${data.gender}-skin-${data.skin}.png)`)
        
        var stats = data.stats || {};
        if(stats.powers){
            $(".stats .powers").text(stats.powers.join(", "));
        }
        
        if(stats.weaknesses){
            $(".stats .weaknesses").text(stats.weaknesses.join(", "));
        }

        var associations = data.associations || {};

        if(associations.sidekick || associations.enemy){
            $(".associations .sidekick").text(associations.sidekick);
            $(".associations .enemy").text(associations.enemy);
            if(!(associations.sidekick))
            {
                $(".associations .sidekick-container").hide();
            }
            if(!(associations.enemy))
            {
                $(".associations .enemy-container").hide();
            }
            
        }else{
            $(".associations").hide();
        }
        
    }

    function callApi(){
        $.get({
            url: "/hero",
            success: onHeroLoad
        })
    }

    me.init = function(){
        callApi();
    }

    return me;
})();

$(heroes.init);