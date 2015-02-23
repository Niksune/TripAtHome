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
		<div id="Pearls" style="display:none;">Pearls : <span id="nbPearl">0</span></div>
	</div>
	<div id="messageBoard">
		<span id="Messages">You're doing all good.</span>
	</div>
	<div id="miningBoard" style="display:none;">
		<span id="miningStatus">Not Mining</span>
		<span id="timeLeftMining"></span>
		<div id="ressourcesFound"></div>
	</div>
	<div id="actions">
		<span id="vegetableBoostSpan" style="display:none;" ><button id="vegetableBoostBut" onclick="vegetableBoost()">Boost Vegetables Production</button> (cost : <span id="vegetableBoostPrice">0</span> Vegetables)</span><br/>
		<span id="buyGoldSpan" style="display:none;" ><button id="buyGoldBut" onclick="buyGold()">Buy a Gold Coin</button> (cost : <span id="buyGoldPrice">0</span> Vegetables)</span><br/>
		<span id="buyRequestSpan" style="display:none;" ><button id="buyRequest" onclick="buyRequest()">Buy a Request</button> (cost : <span id="buyRequestPrice">0</span> Vegetables)</span><br/>
		<span id="littleMineSpan" style="display:none;" ><button id="littleMine" onclick="buyMine('little')">Mine in Little mine</button> (cost : <span id="littleMinePrice">0</span> Vegetables)</span><br/>
		<span id="mediumMineSpan" style="display:none;" ><button id="mediumMine" onclick="buyMine('medium')">Mine in Medium mine</button> (cost : <span id="mediumMinePrice">0</span> Vegetables)</span><br/>
		<span id="largeMineSpan" style="display:none;" ><button id="largeMine" onclick="buyMine('large')">Mine in Large mine</button> (cost : <span id="largeMinePrice">0</span> Vegetables)</span>
	</div>
	<div id="imageBoard" style="display:none;">
	</div>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script type="text/javascript" src="main.js"></script>
	<script type="text/javascript" src="mine.js"></script>
</body>

</html>
