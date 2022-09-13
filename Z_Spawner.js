module.exports = function(spawn) {
	for(var name in Game.spawns) {
		var spawn = Game.spawns[name];
		if(spawn.spawning == null) {
		    Memory.spawner.on = 0;
		    Memory.log[name] = Memory.log[name] || {};
		    Memory.log[name][name + 'spawning'] = {};
		}
		//build creeps----------------
		var roles = _.toArray(Object.keys(spawn.memory.minPopulation))
		for(var i in roles) {
			var role = roles[i];
			var creeps = _.filter(Memory.creeps, function(creep) {
				if(creep.role && (creep.spawn == spawn.name)) {
					return creep.role == role;
				}
			});
			if(creeps.length < spawn.memory.minPopulation[role] && Memory.spawner.on == 0) {
				var totalCost = DX.FindCost(spawn, role);
				//-----------
				var base = name + '_' + role.substring(0, 3).toUpperCase();
				var suffixn = 1;
				var title = base.concat(suffixn.toString());
				while(spawn.canCreateCreep(spawn.memory.creepSpecs[role], title) === -3) {
					suffixn = suffixn + 1;
					title = base.concat(suffixn.toString());
				}
				spawn.createCreep(spawn.memory.creepSpecs[role], title, {
					'role': role,
					'script': role,
					'spawn': spawn.name,
				});
				//----------
				Memory.spawner.on = 1;
				Memory.log[name][name + 'spawning'] = ['[' + name + ' ' + title + ': Cost ' + totalCost + ']'];
				break;
			}
		}
	}
};
