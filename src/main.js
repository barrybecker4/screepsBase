const roleHarvester = require('roles_role.harvester');
const roleUpgrader = require('roles_role.upgrader');
const roleBuilder = require('roles_role.builder');
const creepMaintainer = require('maintenance_creepMaintainer');
const towerMaintainer = require('maintenance_towerMaintainer');

module.exports.loop = function () {

    // This will send emails to you when executed.
    // Game.notify(`Does this show? User bb4`);

    creepMaintainer.run();

    for (let name in Game.creeps) {
        const creep = Game.creeps[name];
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

    towerMaintainer.run();
}