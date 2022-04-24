// Replenish creeps if they expire

const basicConfig = [WORK, CARRY, MOVE];
const powerConfig = [WORK CARRY, CARRY, MOVE, MOVE];

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
        if (spawn && spawn.store.energy > 250) {

            const config = spawn.store.energy >= 350 ? powerConfig : basicConfig;

            if (!Game.creeps["harvester1"]) {
                spawn.spawnCreep( config, 'harvester1', { memory:{ role: 'harvester' }} );
            }
            else if (!Game.creeps["builder1"]) {
                spawn.spawnCreep( config, 'builder1', { memory:{ role: 'builder' }} );
            }
            else if (!Game.creeps["upgrader1"]) {
                spawn.spawnCreep( config, 'upgrader1', { memory:{ role: 'upgrader' }} );
            }
            else if (!Game.creeps["harvester2"]) {
                spawn.spawnCreep( config, 'harvester2', { memory:{ role: 'harvester' }} );
            }
            else if (!Game.creeps["builder2"]) {
                spawn.spawnCreep( config, 'builder2', { memory:{ role: 'builder' }} );
            }
            else if (!Game.creeps["upgrader2"]) {
                spawn.spawnCreep( config, 'upgrader2', { memory:{ role: 'upgrader' }} );
            }
        }
	  }
};

module.exports = creepMaintainer;