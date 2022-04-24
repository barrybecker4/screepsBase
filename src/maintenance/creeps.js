// Replenish creeps if they expire
var creepMaintainer = {

    /**
     * One off scripts for console
     * Game.spawns['Spawn1'].spawnCreep( [WORK, WORK, CARRY, MOVE], 'harvester1', { memory:{ role: 'harvester' }} );
     * Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'harvester2', { memory:{ role: 'harvester' }} );
     * Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'builder1', { memory:{ role: 'builder' }} );
     * Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'upgrader1', { memory:{ role: 'upgrader' }} );
    */
    run: function() {
        const spawn = Game.spawns['Spawn1'];
        if (spawn && spawn.store.energe > 250) {

            if (!Game.creeps["harvester1"]) {
                spawn.spawnCreep( [WORK, CARRY, MOVE], 'harvester1', { memory:{ role: 'harvester' }} );
            }
            else if (!Game.creeps["builder1"]) {
                spawn.spawnCreep( [WORK, CARRY, MOVE], 'builder1', { memory:{ role: 'builder' }} );
            }
            else if (!Game.creeps["upgrader1"]) {
                spawn.spawnCreep( [WORK, CARRY, MOVE], 'upgrader1', { memory:{ role: 'upgrader' }} );
            }
            else if (!Game.creeps["harvester2"]) {
                spawn.spawnCreep( [WORK, CARRY, MOVE], 'harvester2', { memory:{ role: 'harvester' }} );
            }
        }
	  }
};

module.exports = creepMaintainer;