for(var name in Game.spawns) {
    var spawn = Game.spawns[name];
    spawn.memory.creepSpecs = {};
    //---------------------
    if(spawn.name == 'Spawn1') {
        spawn.memory.minPopulation = {
            'M-Miner': 2,
            'M-Helper': 2,
            'R-Repair': 1,
            'C-Carry': 6,
            'B-Helper': 1,
            'B-Builder': 1,
        };
        spawn.memory.creepSpecs['B-Helper'] = [CARRY, CARRY, MOVE, MOVE];
        spawn.memory.creepSpecs['B-Builder'] = [WORK, WORK, WORK, CARRY, MOVE];
        spawn.memory.creepSpecs['M-Miner'] = [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE];
        spawn.memory.creepSpecs['M-Helper'] = [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE];
        spawn.memory.creepSpecs['R-Repair'] = [WORK, CARRY, MOVE];
        spawn.memory.creepSpecs['C-Carry'] = [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
    }
    //---------------------
    else if(spawn.name == 'Spawn2') {
        spawn.memory.minPopulation = {
            'M-Miner': 2,
            'M-Helper': 2,
            'M-RunnerH': 1,
            'R-Repair': 1,
            'C-Trans': 1,
            'B-Helper': 1,
            'B-Builder': 1,
        };
        spawn.memory.creepSpecs['M-Miner'] = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE];
        spawn.memory.creepSpecs['M-Helper'] = [CARRY, CARRY, CARRY, MOVE, MOVE];
        spawn.memory.creepSpecs['M-RunnerH'] = [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        spawn.memory.creepSpecs['R-Repair'] = [WORK, CARRY, MOVE];
        spawn.memory.creepSpecs['C-Trans'] = [CARRY, CARRY, MOVE, MOVE];
        spawn.memory.creepSpecs['B-Helper'] = [CARRY, CARRY, MOVE, MOVE];
        spawn.memory.creepSpecs['B-Builder'] = [WORK, WORK, WORK, CARRY, MOVE];
    }
    //---------------------
    else if(spawn.name == 'Spawn3') {
        spawn.memory.minPopulation = {
            'M-Miner': 2,
            'M-Helper': 2,
            'R-Repair': 3,
            'F-Guard': 0,
            'F-Heal': 0,
        };
        spawn.memory.creepSpecs['M-Miner'] = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE];
        spawn.memory.creepSpecs['M-Helper'] = [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE];
        spawn.memory.creepSpecs['R-Repair'] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
        spawn.memory.creepSpecs['F-Guard'] = [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE , MOVE, MOVE];
        spawn.memory.creepSpecs['F-Heal'] = [HEAL, HEAL, HEAL, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
    }
        //---------------------
    else if(spawn.name == 'Spawn4') {
        count = 6
        spawn.memory.minPopulation = {
            'F-Guard': 3,
            'F-Heal': 1,
            'B-Helper': 2,
            'B-Builder': 2,
        };
        spawn.memory.creepSpecs['F-Guard'] = [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
        spawn.memory.creepSpecs['F-Heal'] = [HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
        spawn.memory.creepSpecs['B-Helper'] = [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE];
        spawn.memory.creepSpecs['B-Builder'] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE];

    }
};