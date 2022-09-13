"use strict";
module.exports = function(creep) {
	DX.SetHarv(creep);
	var target = creep.room.storage
	if(creep.memory.harv == 1 && target.store.energy > 1000) {
		DX.CreepMove(creep, target);
		target.transferEnergy(creep);
	} else {
		if(Memory.rooms[creep.room.name].Links) {
			var target = Game.getObjectById(Memory.rooms[creep.room.name].Links.Link1);
			if(target) {
				if(!creep.pos.inRangeTo(target, 1)) DX.CreepMove(creep, target);
				else creep.transferEnergy(target);
			}
		}
	}
};