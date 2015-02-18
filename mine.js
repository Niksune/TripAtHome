//Global stats for mines
var difficultyFinding = {"little": 50, "medium": 100, "large": 200};


//Main Mine
function mine(mineSize) {

	$('#miningBoard').show();

	lookingForVein(mineSize);

	endTimer = setTimeout("endMining()",endurance*1000);
}

//Functions called at the end of the mining
function endMining() {

	$("#Messages").html("Fini de miner");
	
	$('#miningBoard').hide();

}

//Called when the character looks for a vein
function lookingForVein(mineSize) {

	$('#miningStatus').html("Looking for a vein");
	
	//draw for finding a vein
	if(drawVein(mineSize)) 
		mineVein(mineSize);
	else
		setTimeout(function() {
			lookingForVein(mineSize);
		},2000);
	
}

//Draws to know if a vein is found or not
function drawVein(mineSize) {
	
	//Random between 1 to 100
	ran = Math.floor(Math.random() * 100) + 1;
	
	console.log('total drawn :'+(ran+wisdom)+' score wanted :'+difficultyFinding[mineSize]);
	
	if((ran+wisdom)>difficultyFinding[mineSize])
		return 1;
	else
		return 0;
	
}

//Mines the vein
function mineVein(mineSize) {

	$('#miningStatus').html("Mining a vein !");
	$('#Messages').html("You mined things !");

	console.log("things mined");
	
	lookingForVein(mineSize);
}
