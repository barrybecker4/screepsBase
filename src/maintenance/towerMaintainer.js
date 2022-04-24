var towerMaintainer = {

    run: function() {

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
};

module.exports = towerMaintainer;