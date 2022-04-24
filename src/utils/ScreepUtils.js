
// Replenish creeps if they expire
var ScreepUtils = {
    moveToSource: function(creep) {
        const sources = creep.room.find(FIND_SOURCES);
        source = creep.name[creep.name.length - 1] == '2' ? sources[1] : sources[0];
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
	  }
};

module.exports = ScreepUtils;