"use strict";
module.exports = function(creep) {
    var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
    if(targets.length > 0) {
        creep.rangedAttack(targets[0]);
        return;
    } else {
        var flag1 = Game.flags['Defend1'];
        var flag2 = Game.flags['Defend2'];
        if(creep.pos.inRangeTo(flag1, 1)) {
            creep.memory.flag = Game.flags['Defend2'];
        }
        else if(creep.pos.inRangeTo(flag2, 1)) {
            creep.memory.flag = Game.flags['Defend1'];
        }
        if(!creep.memory.flag) var target = Game.flags['Defend1'];
        else var target = Game.getObjectById(creep.memory.flag.id);
        DX.CreepMove(creep, target);
    }
};