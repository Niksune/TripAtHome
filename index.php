<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<title>Index</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body onload="main();">

	<div id="board">
		<div id="Vegetables">Vegetables : <span id="nbVegetable">0</span></div>
		<div id="Golds" style="display:none;">Gold Coins : <span id="nbGold">0</span></div>
		<div id="Opals" style="display:none;">Opals : <span id="nbOpal">0</span></div>
	</div>
	<div id="messageBoard">
		<span id="Messages">You're doing all good.</span>
	</div>
	<div id="miningBoard" style="display:none;">
		<span id="miningStatus">Not Mining</span>
		<span id="timeLeftMining"></span>
		<div id="ressourcesFound"></div>
	</div>
	<div id ="stats">
		<div id="Endurance">Endurance : <span id="spanEndurance"></span></div>
		<div id="Eyesight">Eyesight : <span id="spanEyesight"></span></div>
		<div id="Dexterity">Dexterity : <span id="spanDexterity"></span></div>
		<div id="Luck">Luck : <span id="spanLuck"></span></div>
	</div>
	<div id ="inventory">
		<div id="Pickaxe">Pickaxe : <span id="spanPickaxe"></span></div>
		<div id="Light">Light : <span id="spanLight"></span></div>
		<div id="Trinket">Trinket : <span id="spanTrinket"></span></div>
	</div>
	<div id="requestBoard">
	</div>
	<div id="actions">
		<span id="eatVegetablesSpan" ><button id="eatVegetablesBut" onclick="eatVegetables()">Eat your Vegetables</button> (Vegetables eaten : <span id="vegetablesEaten">0</span>)</span><br/>
		<span id="buyLittleRequestSpan" style="display:none;" ><button id="buyLittleRequestBut" onclick="buyRequest(1)">Buy a Little Request</button> (cost : <span id="littleRequestPrice">0</span> Vegetables)</span><br/>
		<span id="buyMediumRequestSpan" style="display:none;" ><button id="buyMediumRequestBut" onclick="buyRequest(2)">Buy a Medium Request</button> (cost : <span id="mediumRequestPrice">0</span> Gold Coins)</span><br/>
		<span id="buyBigRequestSpan" style="display:none;" ><button id="buyBigRequestBut" onclick="buyRequest(3)">Buy a Big Request</button> (cost : <span id="bigRequestPrice">0</span> Opals)</span><br/>
		<span id="littleMineSpan" style="display:none;" ><button id="littleMineBut" onclick="buyMine('little')">Mine in Little mine</button> (cost : <span id="littleMinePrice">0</span> Vegetables)</span><br/>
		<span id="mediumMineSpan" style="display:none;" ><button id="mediumMineBut" onclick="buyMine('medium')">Mine in Medium mine</button> (cost : <span id="mediumMinePrice">0</span> Gold Coins)</span><br/>
		<span id="largeMineSpan" style="display:none;" ><button id="largeMineBut" onclick="buyMine('large')">Mine in Large mine</button> (cost : <span id="largeMinePrice">0</span> Opals)</span>
	</div>
	<div id="shops">
		<div id="minishop" style="display:none;"></div>
		<div id="doormart" style="display:none;"></div>
		<div id="alphacrafters" style="display:none;"></div>
	</div>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script type="text/javascript" src="main.js"></script>
	<script type="text/javascript" src="shopping.js"></script>
	<script type="text/javascript" src="mine.js"></script>
	<script type="text/javascript" src="requesting.js"></script>
</body>

</html>
