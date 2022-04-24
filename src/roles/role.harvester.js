const ScreepUtils = require('utils_ScreepUtils');

var roleHarvester = {

    run: function(creep) {
        if (creep.store.getFreeCapacity() > 0) {
            ScreepUtils.moveToSource(creep);
        }
        else {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    console.log("structure: " + JSON.stringify(structure));
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });

            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.say("harv mv to strct")
                    creep.moveTo(targets[0], { visualizePathStyle: {stroke: '#ffffff'} });
                }
            }
            else {
                console.log("no targets");
            }
        }
	}
};

module.exports = roleHarvester;