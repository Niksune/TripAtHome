//Game ( "Harem" or "TripAtHome" )
var game = "TripAtHome";

var vegetablesEaten = 0;

//Character stats
var endurance = 10;
var eyesight = 10;
var dexterity = 10;
var luck = 1;

// Ressources
var vegetables = 45;
var golds = 0;
var pearls = 0;

//Ressource incrementation
var incrementationVegetable = 1;

//Garden boost extensions
var gardenBoostsAcquired = new Array(0,0,0);

//Inventory
var pickaxeEquiped = 0;
var lightEquiped = 0;
var trinketEquiped = 0;

//Item's prices
var vegetableBoostPrice = 5;
var buyGoldPrice = 10;
var buyRequestPrice = 15;
var littleMinePrice = 5;
var mediumMinePrice = 30;
var largeMinePrice = 50;

//Accessing shops prices
var accessMinishopPrice = 20;
var accessDoormartPrice = 20;
var accessAlphacraftersPrice = 20;

//Mine's prices
var minePrices = new Array();
minePrices['little'] = new Array(5,0,0);
minePrices['medium'] = new Array(30,0,0);
minePrices['large'] = new Array(50,0,0);

//Summon main features
//Print prices
function main () {

	bigUpdate();
	$('#vegetableBoostPrice').html(vegetableBoostPrice);
	$('#buyGoldPrice').html(buyGoldPrice);
	$('#buyRequestPrice').html(buyRequestPrice);
	$('#littleMinePrice').html(minePrices['little'][0]);
	$('#mediumMinePrice').html(minePrices['medium'][0]);
	$('#largeMinePrice').html(minePrices['large'][0]);
	incrementRessources();

}

//To update all
function bigUpdate() {
	updateInventory();
	updateStats();
	updateRessources();
	updateShops();
}

//Autocall every second, increment vegetables
function incrementRessources () {

	vegetables += incrementationVegetable;
	updateRessources();
	if(vegetables >= vegetableBoostPrice)
		$('#vegetableBoostSpan').show();
	if(vegetables >= buyGoldPrice)
		$('#buyGoldSpan').show();
	if(vegetables >= buyRequestPrice)
	{
		$('#buyRequestSpan').show();
		$('#imageBoard').show();
	}
	if(vegetables >= minePrices['little'][0])
		$('#littleMineSpan').show();
	if(vegetables >= minePrices['medium'][0])
		$('#mediumMineSpan').show();
	if(vegetables >= minePrices['large'][0])
		$('#largeMineSpan').show();

	setTimeout('incrementRessources()',1000);

}

//Refresh the display of ressources
//And makes options appear
function updateRessources () {

	$('#nbVegetable').html(vegetables);
	if(golds > 0)
		$('#Golds').show();
	$('#nbGold').html(golds);	
	if(pearls > 0)
		$('#Pearls').show();
	$('#nbPearl').html(pearls);	
	
	if(vegetables >= accessMinishopPrice)
		$('#minishop').show();
	if(golds >= 1)
		$('#doormart').show();
	if(pearls >= 1)
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
function checkPay(costVegetable, costGold, costPearl) {

	if(vegetables>=costVegetable && golds>=costGold && pearls>=costPearl)
	{
		vegetables -= costVegetable;
		golds -= costGold;
		pearls -= costPearl;
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

	if(vegetables>=arrayCost[0] && golds>=arrayCost[1] && pearls>=arrayCost[2])
	{
		vegetables -= arrayCost[0];
		golds -= arrayCost[1];
		pearls -= arrayCost[2];
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
	endurance = 10 + pickaxeStats[pickaxeEquiped] + Math.ceil(Math.sqrt(vegetablesEaten));
	vegetables = 0;
	
	bigUpdate();

}

//Boosts Vegetables production
function vegetableBoost () {

	if(checkPay(vegetableBoostPrice,0,0)) {
		incrementationVegetable += 1;
		$('#Messages').html("Gather faster Vegetables !");
	}
	
	updateRessources();

}

//Buys an hope
function buyGold () {

	if(checkPay(buyGoldPrice,0,0)){
		$('#Golds').show();
		golds += 1;
		$('#Messages').html("With enough Vegetables, you can find an Gold Coin ! ");
	}
	
	updateRessources();

}


//Gets a picture
function buyRequest () {

	if(checkPay(buyRequestPrice,0,0)){
		image = getData('',game+"/requeteur.php");
		chaine = 
		$('#imageBoard').html("<img src='"+image+"'/>");
		$('#Messages').html("Have fun, you well deserved it... ");
	}
	
	updateRessources();

}

//Buys a mining session
function buyMine(mineSize) {

	if(checkPay(minePrices[mineSize][0],0,0))
		mine(mineSize);

	updateRessources();
	
}

//Calls the requestors in PHP
function getData(param, page) {
		var XhrObj = new XMLHttpRequest(); //Mozilla
		XhrObj.open("POST", page, false);
		XhrObj.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		XhrObj.send(param);
		if (XhrObj.readyState == 4 && XhrObj.status == 200) return XhrObj.responseText;
		else alert("erreur ajax :"+XhrObj.readyState+","+XhrObj.status);
}

