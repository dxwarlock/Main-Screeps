var cpu = Game.cpu.getUsed();
var oldV = Memory.log.cpu['noteCPU'] || [0];
oldV.unshift(cpu);
if(oldV.length >= 5) oldV = oldV.slice(0, 5);
Memory.log.cpu['noteCPU'] = oldV;
var sum = oldV.reduce(function(a, b) {
    return a + b;
});
var max = _.max(oldV);
var min = _.min(oldV);
var avg = sum / oldV.length;
var creepsC = Object.keys(Game.creeps).length;
Memory.log.cpu['note'] = ['[Aver: ' + avg.toFixed(2) + ' Max: ' + max.toFixed(2) + ' Min: ' + min.toFixed(2) + ' Creeps:' + creepsC + ']'];
//--------------------------
if(Game.time % 5 === 0) {
    console.log('--'+Game.time+'--')
        var log = '';
        for(var i in Memory.log) {
            var notes = Memory.log[i];
            if(notes.note != undefined) log += ' ' + notes.note;
        }
        console.log(log);
    for(var Spawns in Memory.spawns) {
        var spawn = Game.spawns[Spawns];
        var roles = _.toArray(Object.keys(spawn.memory.minPopulation))
        Memory.log[Spawns] = Memory.log[Spawns] || {};
        var CurCreeps = _.filter(Memory.creeps, function(creep) {
            if(creep && (creep.spawn == spawn.name)) {
                return creep;
            }
        });
        var TotalNeeded = _.toArray(spawn.memory.minPopulation).reduce(function(a, b) {
            return a + b;
        });
        var CurCreeps = CurCreeps.length;
        var count = '[' + spawn.name + ': ' + CurCreeps + "/" + TotalNeeded + ']';
        Memory.log[Spawns][spawn.name + 'count'] = [count];
        var sPower = 0;
        var sPowerC = 0;
        var Power = Game.spawns[Spawns].room.energyAvailable;
        var PowerC = Game.spawns[Spawns].room.energyCapacityAvailable;
        if(Game.spawns[Spawns].room.storage) var sPower = Game.spawns[Spawns].room.storage.store.energy;
        if(Game.spawns[Spawns].room.storage) var sPowerC = Game.spawns[Spawns].room.storage.storeCapacity;
        if(Power + sPower == PowerC + sPowerC) {
            Memory.log.power['limit'] = 1;
        } else Memory.log.power['limit'] = 0;
        Memory.log[Spawns] = Memory.log[Spawns] || {};
        Memory.log[Spawns]['a' + Spawns + 'energy'] = Memory.log['a' + Spawns + 'energy'] || {};
        Memory.log[Spawns]['a' + Spawns + 'energy'] = ['[' + Spawns + ':' + Power + '/' + PowerC + ' - S:' + sPower + '/' + sPowerC + ']'];
        var log = '';
        for(var i in Memory.log[Spawns]) {
            var notes = Memory.log[Spawns][i];
            if(notes.length != undefined) log += ' ' + notes;
        }
        console.log(log);
    }
    console.log('------------')
};