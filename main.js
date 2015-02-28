//Game
var game = "Harem";
var gameID = 0;

//Character stats
var vegetablesEaten = 0;
var endurance = 10;
var eyesight = 10;
var dexterity = 10;
var luck = 1;

// Ressources
var vegetables = 0;
var golds = 0;
var opals = 0;

//Ressource incrementation
var incrementationVegetable = 1;

//Garden boost extensions
var gardenBoostsAcquired = new Array(0,0,0);

//Inventory
var pickaxeEquiped = 0;
var lightEquiped = 0;
var trinketEquiped = 0;

//Requesting prices
var littleRequestPrice = 20;
var mediumRequestPrice = 20;
var bigRequestPrice = 20;

//Accessing shops prices
var accessMinishopPrice = 5;
var accessDoormartPrice = 5;
var accessAlphacraftersPrice = 5;

//Mine's prices
var minePrices = new Array();
minePrices['little'] = new Array(10,0,0);
minePrices['medium'] = new Array(0,10,0);
minePrices['large'] = new Array(0,0,10);

//Summon main features
//Print prices
function main () {

	if($('#gameIDspan').html() != "none") {
		gameID=$('#gameIDspan').html();
		console.log(gameID);
		load();
	}

	bigUpdate();
	$('#titleScreen').html(game);
	$('#littleRequestPrice').html(littleRequestPrice);
	$('#mediumRequestPrice').html(mediumRequestPrice);
	$('#bigRequestPrice').html(bigRequestPrice);
	$('#littleMinePrice').html(minePrices['little'][0]);
	$('#mediumMinePrice').html(minePrices['medium'][1]);
	$('#largeMinePrice').html(minePrices['large'][2]);
	incrementRessources();

}

//Autocall every second, increment vegetables
function incrementRessources () {

	vegetables += incrementationVegetable;
	updateRessources();
	
	//If a item is buyable it displays
	if(vegetables >= littleRequestPrice)
	{
		$('#buyLittleRequestSpan').show();
		$('#requestBoard').show();
	}
	if(golds >= mediumRequestPrice)
	{
		$('#buyMediumRequestSpan').show();
		$('#requestBoard').show();
	}
	if(opals >= bigRequestPrice)
	{
		$('#buyBigRequestSpan').show();
		$('#requestBoard').show();
	}
	if(vegetables >= minePrices['little'][0])
		$('#littleMineSpan').show();
	if(golds >= minePrices['medium'][1])
		$('#mediumMineSpan').show();
	if(opals >= minePrices['large'][2])
		$('#largeMineSpan').show();

	setTimeout('incrementRessources()',1000);

}

//To update all visuals
function bigUpdate() {

	updateRessources();
	updateInventory();
	updateStats();
	updateShops();
	$("#vegetablesEaten").html(vegetablesEaten);;
}

//Refresh the display of ressources
//And makes options appear
function updateRessources () {

	$('#nbVegetable').html(vegetables);
	if(golds > 0)
		$('#Golds').show();
	$('#nbGold').html(golds);	
	if(opals > 0)
		$('#Opals').show();
	$('#nbOpal').html(opals);	
	
	if(vegetables >= accessMinishopPrice || accessMinishop)
		$('#minishop').show();
	if(golds >= 1 || accessDoormart)
		$('#doormart').show();
	if(opals >= 1 || accessAlphacrafters)
		$('#alphacrafters').show();

}

//Refresh the display of ressources
function updateInventory () {

	$('#spanPickaxe').html(pickaxeNames[pickaxeEquiped]);
	$('#spanLight').html(lightNames[lightEquiped]);
	$('#spanTrinket').html(trinketNames[trinketEquiped]);
	
}

//Refresh the display of ressources
function updateStats () {

	$('#spanEndurance').html(endurance);
	$('#spanEyesight').html(eyesight);
	$('#spanDexterity').html(dexterity);
	$('#spanLuck').html(luck);
	
}

//In case user wants to buy for too expensive
function cantPay () {

	$('#Messages').html("You don't have the ressources !");

}

//Check if the buyer can afford, return 0 if not
//If he cans, pays and return 1
function checkPay(costVegetable, costGold, costOpal) {

	if(vegetables>=costVegetable && golds>=costGold && opals>=costOpal)
	{
		vegetables -= costVegetable;
		golds -= costGold;
		opals -= costOpal;
		return 1;
	}
	else
	{
		cantPay();
		return 0;
	}
}

//Same function taking an array
function checkPayArray(arrayCost) {

	if(vegetables>=arrayCost[0] && golds>=arrayCost[1] && opals>=arrayCost[2])
	{
		vegetables -= arrayCost[0];
		golds -= arrayCost[1];
		opals -= arrayCost[2];
		return 1;
	}
	else
	{
		cantPay();
		return 0;
	}
}

//Eats your vegetables for Endurance
function eatVegetables () {

	vegetablesEaten += vegetables;
	$("#vegetablesEaten").html(vegetablesEaten);
	endurance = 10 + pickaxeStats[pickaxeEquiped] + Math.floor(Math.sqrt(vegetablesEaten));
	vegetables = 0;
	
	bigUpdate();

}

//Buys a request session
function buyRequest (requestType) {

	if(requestType){	
		if(checkPay(littleRequestPrice,0,0))
			request(requestType);
	}
	
	if(requestType==2){	
		if(checkPay(0,mediumRequestPrice,0))
			request(requestType);
	}
	
	if(requestType==3){	
		if(checkPay(0,0,bigRequestPrice))
			request(requestType);
	}
	
	updateRessources();
}

//Buys a mining session
function buyMine(mineSize) {

	if(checkPayArray(minePrices[mineSize]))
		mine(mineSize);
		
	updateRessources();
	
}
