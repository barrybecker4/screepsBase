var roleHarvester = {

    run: function(creep) {
        if (creep.store.getFreeCapacity() > 0) {
            console.log("harvester freeCap: " + creep.store.getFreeCapacity());
            const sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                console.log("Not in range! moving there");
                creep.moveTo(sources[0], { visualizePathStyle: {stroke: '#ffaa00'} });
            }
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
            console.log("targets: " + targets.length);
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], { visualizePathStyle: {stroke: '#ffffff'} });
                }
            }
        }
	}
};

module.exports = roleHarvester;