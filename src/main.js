var roleHarvester = require('roles_role.harvester');
var roleUpgrader = require('roles_role.upgrader');
var roleBuilder = require('roles_role.builder');
var creepMaintainer = require('maintenance_creeps');

module.exports.loop = function () {

    // This will send emails to you when executed.
    // Game.notify(`Does this show? User bb4`);

    creepMaintainer.run();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        //console.log("creep " + JSON.stringify(creep.memory));

        switch (creep.memory.role) {
            case 'harvester':
                roleHarvester.run(creep);
                break;
            case 'upgrader':
                roleUpgrader.run(creep);
                break;
            case 'builder':
                roleBuilder.run(creep);
                break;
            default: throw new Error("Unexpected role: " + creep.memory.role);
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