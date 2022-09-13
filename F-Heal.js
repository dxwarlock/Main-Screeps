module.exports = function(creep) {
    var target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
        filter: function(object) {
            return object.hits < object.hitsMax;
        }
    });
    if(target) {
        creep.moveTo(target);
        creep.heal(target);
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