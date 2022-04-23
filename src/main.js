var roleHarvester = require('roles_role.harvester');
var roleUpgrader = require('roles_role.upgrader');
var roleBuilder = require('roles_role.builder');

/**
 * One off scripts for console
 * Game.spawns['Spawn1'].spawnCreep( [WORK, WORK, CARRY, MOVE], 'harvester1', { memory:{ role: 'harvester' }} );
 * Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'harvester2', { memory:{ role: 'harvester' }} );
 * Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'builder1', { memory:{ role: 'builder' }} );
 * Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'upgrader1', { memory:{ role: 'upgrader' }} );
 *
 module.exports.loop = function () {
     var creep = Game.creeps['Harvester1'];
     var sources = creep.room.find(FIND_SOURCES);
     if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
         creep.moveTo(sources[0]);
     }
 }
 */
module.exports.loop = function () {

    // This will send emails to you when executed.
    // Game.notify(`Does this show? User bb4`);

    if (!Game.creeps["harvester1"]) {
        Game.spawns['Spawn1'].spawnCreep( [WORK, WORK, CARRY, MOVE], 'harvester1', { memory:{ role: 'harvester' }} );
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        console.log("creep " + JSON.stringify(creep.memory));
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }

    // Once the base is established we can create and maintain a tower.
    var tower = Game.getObjectById('7ae49ba57f35359f19916d70');
    if (tower) {
        const closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if (closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        const closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile);
        }
    }

}