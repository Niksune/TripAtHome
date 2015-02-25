//Global stats for mines
var difficultyFinding = {"little": 25, "medium": 40, "large": 70};

var timeMineMultiplier = {"little": 1.5, "medium": 1, "large": 0.75};

var mineRessources = new Array();
mineRessources['little'] = {"Silver": 25, "Gold": 40, "Platinum": 48, "Opal": 50};
mineRessources['medium'] = {"Platinum": 25, "Opal": 40, "Sapphire": 48, "Emerald": 50};
mineRessources['large'] = {"Sapphire": 25, "Emerald": 40, "Ruby": 48, "Diamond": 50};

var priceRessources = new Array();
priceRessources['Silver'] = new Array(50,0,0);
priceRessources['Gold'] = new Array(0,1,0);
priceRessources['Platinum'] = new Array(20,5,0);
priceRessources['Opal'] = new Array(0,0,1);
priceRessources['Sapphire'] = new Array(50,3,5);
priceRessources['Emerald'] = new Array(0,0,10);
priceRessources['Ruby'] = new Array(50,50,50);
priceRessources['Diamond'] = new Array(666,666,666);

var difficultyRessources = new Array();
difficultyRessources['Silver'] = 15;
difficultyRessources['Gold'] = 21;
difficultyRessources['Platinum'] = 33;
difficultyRessources['Opal'] = 40;
difficultyRessources['Sapphire'] = 55;
difficultyRessources['Emerald'] = 70;
difficultyRessources['Ruby'] = 80;
difficultyRessources['Diamond'] = 110;

var ressourcesGot = new Array();

var stockEyesight; //augmenting eyesight
var stockRessourceDifficulty; //augmenting difficulty in a vein
var stillMining;
var stockVein; //quantity of ressources mined in this vain
var ressourceMined; //ressource actually mined

//Main Mine
function mine(mineSize) {

	stillInMine = 1;
	
	$("#littleMineBut").prop('disabled', true);
	$("#mediumMineBut").prop('disabled', true);
	$("#largeMineBut").prop('disabled', true);
	
	ressourcesGot = {"Silver": 0, "Gold": 0, "Platinum": 0, "Opal": 0, "Sapphire": 0, "Emerald": 0, "Ruby": 0, "Diamond": 0};

	refreshRessources();
	
	$('#miningBoard').show();
	
	console.log('mineSize = '+mineSize);

	stockEyesight = eyesight;

	timeInMine = Math.floor((10 + endurance)*timeMineMultiplier[mineSize]);
	
	compteurMine(timeInMine);
	
	console.log('timeInMine = '+timeInMine);
	
	lookingForVein(mineSize);
}

//Functions called at the end of the mining
function endMining() {

	stillInMine = 0;
	
	$("#littleMineBut").prop('disabled', false);
	$("#mediumMineBut").prop('disabled', false);
	$("#largeMineBut").prop('disabled', false);

	$("#Messages").html("Mining finished !<br/>");
	
	totalValue = totalValuer();
	
	$("#Messages").html("You recolted a total of : "+totalValue[0]+" vegetables, "+totalValue[1]+" golds and "+totalValue[2]+" opals.");
	
	vegetables += totalValue[0];
	golds += totalValue[1];
	opals += totalValue[2];
	
	updateRessources();
	
	//$('#miningBoard').hide();
	
	console.log("StillInMine = "+stillInMine);

}

//Called when the character looks for a vein
function lookingForVein(mineSize) {

	$('#miningStatus').html("Looking for a vein");
	console.log("Looking for a vein");

	//draw for finding a vein
	if(difficultyDrawD20(stockEyesight,difficultyFinding[mineSize])) 
	{
		console.log("Mining a vein !");
		stockEyesight = eyesight;
		stockVein = 0;
		setTimeout('mineVein("'+mineSize+'")',2000);
	}
	else if(stillInMine)
	{
		stockEyesight += Math.ceil(eyesight/3);
		console.log('stockEyesight = '+stockEyesight);
		setTimeout(function() {
			lookingForVein(mineSize);
		},2000);
	}
}

//Mines the vein (calls mineRessource to effectively getting the ressources)
//Gets back to looking for ressources in mineRessource
function mineVein(mineSize) {
	
	ressourceMined = determineRessource(mineSize);
	
	console.log("ressourceMined = "+ressourceMined);
	
	$('#miningStatus').html("Mining a vein : "+ressourceMined);
	
	stockRessourceDifficulty = difficultyRessources[ressourceMined];
	
	mineRessource(mineSize, ressourceMined);
}

//Get ressources until not finding more. One try each second
//Mines 1 ressource, try to get more and if yes, calls again the function
function mineRessource(mineSize, ressourceMined) {

	if(stillInMine)
	{
		ressourcesGot[ressourceMined] = ressourcesGot[ressourceMined] + 1;
		stockVein += 1;
		
		refreshRessources();
		
		if(difficultyDrawD20(dexterity, stockRessourceDifficulty))
		{
			stockRessourceDifficulty += Math.ceil(difficultyRessources[ressourceMined]/3);
			setTimeout(function() {
					mineRessource(mineSize, ressourceMined);
				},1000);
		}
		else
		{
			$("#Messages").html("You mined "+stockVein+" "+ressourceMined+" in this vein !");
			console.log("Finished mining "+ressourceMined);
			lookingForVein(mineSize);
		}
	}
	
}

//Return 1 if difficulty beaten, 0 otherwise
function difficultyDrawD20(stat, difficulty) {

	//Random between 1 to 20
	randomed = Math.floor(Math.random() * 20) + 1;

	if((stat+randomed)>difficulty)
	{
		console.log("randomed ("+randomed+") + stat("+stat+") VS difficulty ("+difficulty+") = VICTORY");
		return 1;
	}
	else
	{
		console.log("randomed ("+randomed+") + stat("+stat+") VS difficulty ("+difficulty+") = DEFEAT");
		return 0;
	}
}

//Return the name of the ressource found
function determineRessource(mineSize) {

	//Random is a value between luck+1 and 50
	randomed = Math.floor(Math.random() * 50) + 1;

	score = randomed + luck;
	
	if(score > 50)
		score = 50;
	
	console.log("Score at choosing ressource : "+score);
	
	locked = 1;
	
	$.each(mineRessources[mineSize], function( index, value ) {
		if(score <= value && locked)
		{
			ressource = index;
			locked = 0;
		}
	});
	
	return ressource;
}

//Indicate ressources found in this session in the div ressourcesFound
function refreshRessources() {

	ressourcesHTML = "Mined ressources : <br/>";

	$.each(ressourcesGot, function( index, value ) {
		console.log(index+" : "+value);
		if(value>0)
		{
			ressourcesHTML += index+" : "+value+"<br/>";
		}
	});
	
	var	totalValue = new Array();
	totalValue = totalValuer();
	
	ressourcesHTML += "Total value : "+totalValue[0]+" vegetables, "+totalValue[1]+" golds and "+totalValue[2]+" opals";
	
	$('#ressourcesFound').html(ressourcesHTML);

}

//Enter the array ressources found and returns an array with the total price
function totalValuer() {

	var totalValue = new Array(0,0,0);

	$.each(ressourcesGot, function( index, value ) {
		if(value>0)
		{
			totalValue[0] += value*priceRessources[index][0];
			totalValue[1] += value*priceRessources[index][1];
			totalValue[2] += value*priceRessources[index][2];
		}
	});

	return totalValue;
}

//refreshes compteur of time before living mine
function compteurMine(timeInMine) {

	timeLeft = timeInMine-1;
	
	console.log("Timeleft = "+timeLeft);

	if(timeInMine>0)
	{
		$("#timeLeftMining").html("<br/>Time left mining : "+timeInMine+" seconds");
		setTimeout("compteurMine("+timeLeft+")",1000);
	}
	else
		endMining();

}