//Access to shops
var accessMinishop = 0;
var accessDoormart = 0;
var accessAlphacrafters = 0;

//Item's names
var pickaxeNames = {0:"None", 1:"Old Pickaxe", 2:"Iron Pickaxe", 3:"Steel Pickaxe", 4:"Adamantium Pickaxe", 5:"Runic Pickaxe", 6:"Master Pickaxe"};
var lightNames = {0:"None", 1:"Torch", 2:"Lamp", 3:"Headlamp", 4:"Light Stone", 5:"Bionic Eye", 6:"Little Sun"};
var trinketNames = {0:"None", 1:"Little Charm", 2:"Four-leaf Clover", 3:"Talisman", 4:"Seal", 5:"Artefact", 6:"Gods Blessing"};
var gardeningBoostNames = {0:"Doubles Fields", 1:"Harvester Robot", 2:"Magical Worker"};

//Item's prices
var pickaxePrices = {1: new Array(50,0,0), 2: new Array(200,1,0), 3: new Array(200,30,0), 4: new Array(0,50,2), 5: new Array(0,0,50), 6: new Array(666,666,666)};
var lightPrices = {1: new Array(50,0,0), 2: new Array(200,1,0), 3: new Array(200,30,0), 4: new Array(0,50,2), 5: new Array(0,0,50), 6: new Array(666,666,666)};
var trinketPrices = {1: new Array(100,0,0), 2: new Array(300,2,0), 3: new Array(300,50,0), 4: new Array(500,50,5), 5: new Array(100,100,100), 6: new Array(1666,1666,1666)};
var gardeningBoostPrices = {0: new Array(250,1,0), 1: new Array(300,40,2), 2: new Array(66,66,66)};

//Item's stats
var pickaxeStats = {0: 0, 1: 5, 2: 10, 3: 20, 4: 30, 5: 60, 6: 100};
var lightStats = {0: 0, 1: 5, 2: 10, 3: 20, 4: 30, 5: 60, 6: 100};
var trinketStats = {0: 0, 1: 1, 2: 2, 3: 3, 4: 5, 5: 7, 6: 10};

//Update shops display
function updateShops() {

	if(!accessMinishop){
		$("#minishop").html('<span id="accessMinishop" ><button id="accessMinishopBut" onclick="accessMinishopFct()">Access MiniShop</button> (cost : '+accessMinishopPrice+' Vegetables)</span><br/>');
	}
	else{
		stockHTML = "<b>MINISHOP</b><br/>";
		
		var i = 1;
		if(i > pickaxeEquiped) 
			stockHTML += '<div><span class="itemName">'+pickaxeNames[i]+'</span><span class="itemStat">'+pickaxeStats[i]+' Dexterity</span><span class="itemPrice">'+displayPrice(pickaxePrices[i])+'</span><button onclick="buyPickaxe('+i+')">Buy it !</button></div>';
		if(i > lightEquiped) 
			stockHTML += '<div><span class="itemName">'+lightNames[i]+'</span><span class="itemStat">'+lightStats[i]+' Eyesight</span><span class="itemPrice">'+displayPrice(lightPrices[i])+'</span><button onclick="buyLight('+i+')">Buy it !</button></div>';
		if(i > trinketEquiped) 
			stockHTML += '<div><span class="itemName">'+trinketNames[i]+'</span><span class="itemStat">'+trinketStats[i]+' Luck</span><span class="itemPrice">'+displayPrice(trinketPrices[i])+'</span><button onclick="buyTrinket('+i+')">Buy it !</button></div>';
		
		var i = 2;
		if(i > pickaxeEquiped) 
			stockHTML += '<div><span class="itemName">'+pickaxeNames[i]+'</span><span class="itemStat">'+pickaxeStats[i]+' Dexterity</span><span class="itemPrice">'+displayPrice(pickaxePrices[i])+'</span><button onclick="buyPickaxe('+i+')">Buy it !</button></div>';
		if(i > lightEquiped) 
			stockHTML += '<div><span class="itemName">'+lightNames[i]+'</span><span class="itemStat">'+lightStats[i]+' Eyesight</span><span class="itemPrice">'+displayPrice(lightPrices[i])+'</span><button onclick="buyLight('+i+')">Buy it !</button></div>';
		if(i > trinketEquiped) 
			stockHTML += '<div><span class="itemName">'+trinketNames[i]+'</span><span class="itemStat">'+trinketStats[i]+' Luck</span><span class="itemPrice">'+displayPrice(trinketPrices[i])+'</span><button onclick="buyTrinket('+i+')">Buy it !</button></div>';
		
		var i = 0;
		if(!gardenBoostsAcquired[i])
			stockHTML += '<div><span class="itemName">'+gardeningBoostNames[i]+'</span><span class="itemStat">Vegetables Prod X2</span><span class="itemPrice">'+displayPrice(gardeningBoostPrices[i])+'</span><button onclick="buyGuardeningBoost('+i+')">Buy it !</button></div>';
		
		$("#minishop").html(stockHTML);
	}	
	
	if(!accessDoormart){
		$("#doormart").html('<span id="accessDoormart" ><button id="accessDoormartBut" onclick="accessDoormartFct()">Access DoormMart</button> (cost : '+accessDoormartPrice+' Gold Coins)</span><br/>');
	}
	else{
		stockHTML = "<b>DOORMART</b><br/>";
		var i = 3;
		if(i > pickaxeEquiped) 
			stockHTML += '<div><span class="itemName">'+pickaxeNames[i]+'</span><span class="itemStat">'+pickaxeStats[i]+' Dexterity</span><span class="itemPrice">'+displayPrice(pickaxePrices[i])+'</span><button onclick="buyPickaxe('+i+')">Buy it !</button></div>';
		if(i > lightEquiped) 
			stockHTML += '<div><span class="itemName">'+lightNames[i]+'</span><span class="itemStat">'+lightStats[i]+' Eyesight</span><span class="itemPrice">'+displayPrice(lightPrices[i])+'</span><button onclick="buyLight('+i+')">Buy it !</button></div>';
		if(i > trinketEquiped) 
			stockHTML += '<div><span class="itemName">'+trinketNames[i]+'</span><span class="itemStat">'+trinketStats[i]+' Luck</span><span class="itemPrice">'+displayPrice(trinketPrices[i])+'</span><button onclick="buyTrinket('+i+')">Buy it !</button></div>';
		
		var i = 4;
		if(i > pickaxeEquiped) 
			stockHTML += '<div><span class="itemName">'+pickaxeNames[i]+'</span><span class="itemStat">'+pickaxeStats[i]+' Dexterity</span><span class="itemPrice">'+displayPrice(pickaxePrices[i])+'</span><button onclick="buyPickaxe('+i+')">Buy it !</button></div>';
		if(i > lightEquiped) 
			stockHTML += '<div><span class="itemName">'+lightNames[i]+'</span><span class="itemStat">'+lightStats[i]+' Eyesight</span><span class="itemPrice">'+displayPrice(lightPrices[i])+'</span><button onclick="buyLight('+i+')">Buy it !</button></div>';
		if(i > trinketEquiped) 
			stockHTML += '<div><span class="itemName">'+trinketNames[i]+'</span><span class="itemStat">'+trinketStats[i]+' Luck</span><span class="itemPrice">'+displayPrice(trinketPrices[i])+'</span><button onclick="buyTrinket('+i+')">Buy it !</button></div>';
		
		var i = 1;
		if(!gardenBoostsAcquired[i])
			stockHTML += '<div><span class="itemName">'+gardeningBoostNames[i]+'</span><span class="itemStat">Vegetables Prod X2</span><span class="itemPrice">'+displayPrice(gardeningBoostPrices[i])+'</span><button onclick="buyGuardeningBoost('+i+')">Buy it !</button></div>';
		
		$("#doormart").html(stockHTML);
	}	
	
	if(!accessAlphacrafters){
		$("#alphacrafters").html('<span id="accessAlphacrafters" ><button id="accessAlphacraftersBut" onclick="accessAlphacraftersFct()">Access Alpha Crafters</button> (cost : '+accessAlphacraftersPrice+' Pearls)</span><br/>');
	}
	else{
		stockHTML = "<b>ALPHA CRAFTERS</b><br/>";
		var i = 5;
		if(i > pickaxeEquiped) 
			stockHTML += '<div><span class="itemName">'+pickaxeNames[i]+'</span><span class="itemStat">'+pickaxeStats[i]+' Dexterity</span><span class="itemPrice">'+displayPrice(pickaxePrices[i])+'</span><button onclick="buyPickaxe('+i+')">Buy it !</button></div>';
		if(i > lightEquiped) 
			stockHTML += '<div><span class="itemName">'+lightNames[i]+'</span><span class="itemStat">'+lightStats[i]+' Eyesight</span><span class="itemPrice">'+displayPrice(lightPrices[i])+'</span><button onclick="buyLight('+i+')">Buy it !</button></div>';
		if(i > trinketEquiped) 
			stockHTML += '<div><span class="itemName">'+trinketNames[i]+'</span><span class="itemStat">'+trinketStats[i]+' Luck</span><span class="itemPrice">'+displayPrice(trinketPrices[i])+'</span><button onclick="buyTrinket('+i+')">Buy it !</button></div>';
		
		var i = 6;
		if(i > pickaxeEquiped) 
			stockHTML += '<div><span class="itemName">'+pickaxeNames[i]+'</span><span class="itemStat">'+pickaxeStats[i]+' Dexterity</span><span class="itemPrice">'+displayPrice(pickaxePrices[i])+'</span><button onclick="buyPickaxe('+i+')">Buy it !</button></div>';
		if(i > lightEquiped) 
			stockHTML += '<div><span class="itemName">'+lightNames[i]+'</span><span class="itemStat">'+lightStats[i]+' Eyesight</span><span class="itemPrice">'+displayPrice(lightPrices[i])+'</span><button onclick="buyLight('+i+')">Buy it !</button></div>';
		if(i > trinketEquiped) 
			stockHTML += '<div><span class="itemName">'+trinketNames[i]+'</span><span class="itemStat">'+trinketStats[i]+' Luck</span><span class="itemPrice">'+displayPrice(trinketPrices[i])+'</span><button onclick="buyTrinket('+i+')">Buy it !</button></div>';
	
		var i = 2;
		if(!gardenBoostsAcquired[i])
			stockHTML += '<div><span class="itemName">'+gardeningBoostNames[i]+'</span><span class="itemStat">Vegetables Prod X2</span><span class="itemPrice">'+displayPrice(gardeningBoostPrices[i])+'</span><button onclick="buyGuardeningBoost('+i+')">Buy it !</button></div>';
		
		$("#alphacrafters").html(stockHTML);
	}

}

//If an access is bought
function accessMinishopFct(){
	if(checkPay(accessMinishopPrice,0,0))
	{
		accessMinishop = 1;
		bigUpdate();
	}
}
function accessDoormartFct(){
	if(checkPay(0,accessDoormartPrice,0))
	{
		accessDoormart = 1;
		bigUpdate();
	}
}
function accessAlphacraftersFct(){
	if(checkPay(0,0,accessAlphacraftersPrice))
	{
		accessAlphacrafters = 1;
		bigUpdate();
	}
}

//Makes html for prices with several ressources
function displayPrice(arrayPrices) {

	stockHTML = "";
	
	if(arrayPrices[0]==1)
		stockHTML += " 1 V ";
	else if(arrayPrices[0]>1)
		stockHTML += " "+arrayPrices[0]+" V ";
		
	if(arrayPrices[1]==1)
		stockHTML += " 1 G ";
	else if(arrayPrices[1]>1)
		stockHTML += " "+arrayPrices[1]+" G ";
		
	if(arrayPrices[2]==1)
		stockHTML += " 1 P ";
	else if(arrayPrices[2]>1)
		stockHTML += " "+arrayPrices[2]+" P ";
		
	return stockHTML;
}

//Buying functions
function buyPickaxe(number) {

	if(checkPayArray(pickaxePrices[number])){
		pickaxeEquiped = number;
		dexterity = 10 + pickaxeStats[number];
		bigUpdate();
	}

}
function buyLight(number) {

	if(checkPayArray(lightPrices[number])){
		lightEquiped = number;
		eyesight = 10 + lightStats[number];
		bigUpdate();
	}
}
function buyTrinket(number) {

	if(checkPayArray(trinketPrices[number])){
		trinketEquiped = number;
		luck = trinketStats[number];
		bigUpdate();
	}
}
function buyGuardeningBoost(number) {

	if(checkPayArray(gardeningBoostPrices[number])){
		gardenBoostsAcquired[number] = 1;
		incrementationVegetable *= 2;
		bigUpdate();
	}
}