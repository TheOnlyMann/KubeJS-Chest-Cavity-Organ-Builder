//Builder
function Organ(itemID) {
    this.itemID = itemID;
    this.pseudoOrgan = false;
    this.organScores = [];
}

Organ.prototype = {
    addScore: function(score, value) {
        this.organScores.push({'id': `chestcavity:${score}`, 'value': value});
        return this;
    },

    pseudo: function() {
        this.pseudoOrgan = true;
        return this
    },

    build: function() {
        return this;
    }
}

//Main
onEvent('server.datapack.high_priority', event => {
    function registerOrgan(organ) {
        const modid = organ.itemID.split('\:')[0]
        const item = organ.itemID.split('\:')[1]
        event.addJson(`kubejscavity:organs/${modid}/${item}.json`, organ)
    }
    function registerEntityAssignment(AssignmentID,entitytypeID,entitiesID) {
        event.addJson(`kubejscavity:entity_assignment/${AssignmentID}.json`,{
            'chestcavity' : entitytypeID,
            'entities' : entitiesID
        })
    }
    function registerTypes(TypeID,chestcavityjson){
        event.addJson(`kubejscavity:types/${TypeID}.json`,chestcavityjson)
    }
    function registerOrganTags(tagID,itemsID) {
        event.addJson(`kubejscavity:tags/items/${tagID}.json`,{
            'replace' : false,
            'values' : itemsID
        })
    }

    //Register your organs here!
    //Refer to https://github.com/Tigereye504/chestcavity/blob/master/src/main/java/net/tigereye/chestcavity/registration/CCOrganScores.java
    //for valid Organ Scores
    
    registerOrgan(new Organ('minecraft:beetroot').addScore('health', 10).addScore('speed', 10).build()) //example.
    registerOrgan(new Organ('kubejs:someorgan').addScore('health', 2).addScore('speed', 20).pseudo().build()) //pseudo organ example for kubejs item

    //can also build them like this
    registerOrgan(new Organ('minecraft:reetboot')
        .addScore('health', 10)
        .addScore('speed', 10)
        .build()
    )
    
    //Register Types
    registerTypes('typename',
    {
        "defaultChestCavity": [
            {"item": "chestcavity:muscle","position": 0},
            {"item": "chestcavity:rib","position": 1},
            {"item": "chestcavity:appendix","position": 2},
            {"item": "chestcavity:lung","position": 3},
            {"item": "chestcavity:heart","position": 4},
            {"item": "chestcavity:lung","position": 5},
        
            {"item": "chestcavity:rib","position": 7},
            {"item": "chestcavity:muscle","position": 8},
            {"item": "chestcavity:muscle","position": 9},
            {"item": "chestcavity:rib","position": 10},
            {"item": "chestcavity:spleen","position": 11},
            {"item": "chestcavity:kidney","position": 12},
            {"item": "chestcavity:spine","position": 13},
            {"item": "chestcavity:kidney","position": 14},
            {"item": "chestcavity:liver","position": 15},
            {"item": "chestcavity:rib","position": 16},
            {"item": "chestcavity:muscle","position": 17},
            {"item": "chestcavity:muscle","position": 18},
            {"item": "chestcavity:muscle","position": 19},
            {"item": "chestcavity:intestine","position": 20},
            {"item": "chestcavity:intestine","position": 21},
            {"item": "chestcavity:stomach","position": 22},
            {"item": "chestcavity:intestine","position": 23},
            {"item": "chestcavity:intestine","position": 24},
            {"item": "chestcavity:muscle","position": 25},
            {"item": "chestcavity:muscle","position": 26}
        ]
    })
    
    //Register Entities
    registerEntityAssignment('entityassignmenttype','chestcavity:types/(something)',[
        'minecraft:ass'
    ])
})
