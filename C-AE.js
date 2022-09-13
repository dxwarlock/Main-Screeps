"use strict";
module.exports = function(creep) {
    DX.SetHarv(creep);
    if(creep.memory.harv == 1 && creep.room.name == 'E7N2') {
        DX.FindEnergy(creep);
    } else if(creep.memory.harv == 0 && creep.room.name == 'E7N2') {
        DX.CreepMove(creep, Game.flags['AE']);
    } else if(creep.memory.harv == 1 && creep.room.name == 'E7N1') {
        DX.CreepMove(creep, Game.flags['AE1']);
    } else if(creep.memory.harv == 0 && creep.room.name == 'E7N1') {
        var link = creep.room.find(FIND_STRUCTURES, {
            filter: function(object) {
                if(object.structureType == STRUCTURE_LINK) return object;
            }
        });
        if(link[1]) {
            var target = link[1];
            if(!creep.pos.inRangeTo(target, 1)) DX.CreepMove(creep, target);
            else creep.transferEnergy(target);
        } //else DX.DropEneg(creep);
    }
};