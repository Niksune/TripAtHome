/* Variables to be saved
var accessMinishop = 0;
var accessDoormart = 0;
var accessAlphacrafters = 0;
var vegetablesEaten = 0;
var endurance = 10;
var eyesight = 10;
var dexterity = 10;
var luck = 1;
var vegetables = 500;
var golds = 0;
var opals = 0;
var incrementationVegetable = 1;
var gardenBoostsAcquired = new Array(0,0,0);
var pickaxeEquiped = 0;
var lightEquiped = 0;
var trinketEquiped = 0;
*/

//Main save function, gets the IDgame if it doesn't exists
function save() {
	gameID = saveRequest();
	$('#loadURL').html("To load your game, just go on the url : www.niksune.eu/"+game+"?gameID="+gameID);
}

//Saves on PHP
function saveRequest() {
		var XhrObj = new XMLHttpRequest(); //Mozilla
		
		var gameMinus = game.toLowerCase();
		
		var url = "save.php?game="+gameMinus+"&gameID="+gameID+
		"&accessMinishop="+accessMinishop+"&accessDoormart="+accessDoormart+"&accessAlphacrafters="+accessAlphacrafters+"&vegetablesEaten="+vegetablesEaten+
		"&endurance="+endurance+"&eyesight="+eyesight+"&dexterity="+dexterity+"&luck="+luck+
		"&vegetables="+vegetables+"&golds="+golds+"&opals="+opals+"&incrementationVegetable="+incrementationVegetable+
		"&gardenBoostsAcquired0="+gardenBoostsAcquired[0]+"&gardenBoostsAcquired1="+gardenBoostsAcquired[1]+"&gardenBoostsAcquired2="+gardenBoostsAcquired[2]+
		"&pickaxeEquiped="+pickaxeEquiped+"&lightEquiped="+lightEquiped+"&trinketEquiped="+trinketEquiped;
		
		console.log(url);
		
		XhrObj.open("GET", url, false);
		
		XhrObj.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		XhrObj.send('');
		if (XhrObj.readyState == 4 && XhrObj.status == 200) return XhrObj.responseText;
		else alert("erreur ajax :"+XhrObj.readyState+","+XhrObj.status);
}

//Load function
function load() {
	answer = loadRequest();
	console.log(answer);
	arrayVariables = answer.split(",");
	
	accessMinishop = Math.round(arrayVariables[0]);
	accessDoormart = Math.round(arrayVariables[1]);
	accessAlphacrafters = Math.round(arrayVariables[2]);
	vegetablesEaten = Math.round(arrayVariables[3]);
	endurance = Math.round(arrayVariables[4]);
	eyesight = Math.round(arrayVariables[5]);
	dexterity = Math.round(arrayVariables[6]);
	luck = Math.round(arrayVariables[7]);
	vegetables = Math.round(arrayVariables[8]);
	golds = Math.round(arrayVariables[9]);
	opals = Math.round(arrayVariables[10]);
	incrementationVegetable = Math.round(arrayVariables[11]);
	gardenBoostsAcquired = new Array(Math.round(arrayVariables[12]),Math.round(arrayVariables[13]),Math.round(arrayVariables[14]));
	pickaxeEquiped = Math.round(arrayVariables[15]);
	lightEquiped = Math.round(arrayVariables[16]);
	trinketEquiped = Math.round(arrayVariables[17]);
}

//Loads on PHP
function loadRequest() {
		var XhrObj = new XMLHttpRequest(); //Mozilla
		
		var gameMinus = game.toLowerCase();
		
		var url = "load.php?game="+gameMinus+"&gameID="+gameID;
		
		console.log(url);
		
		XhrObj.open("GET", url, false);
		
		XhrObj.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		XhrObj.send('');
		if (XhrObj.readyState == 4 && XhrObj.status == 200) return XhrObj.responseText;
		else alert("erreur ajax :"+XhrObj.readyState+","+XhrObj.status);
}