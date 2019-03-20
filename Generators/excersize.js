//example 1

const engineeringTeam = {
	size : 3,
  department : "GSTHero",
  lead : "sanket",
  manager : "sweety",
  engineer : "santosh"
};

function *teamIterator(team){
	yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for(let name of teamIterator(engineeringTeam)){
	names.push(name);
}
names
