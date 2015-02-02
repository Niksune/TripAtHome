<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<title>Index</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body onload="main();">

	<div id="board">
		<span id="BrokenDreams">Broken Dreams : <span id="nbBD">0</span></span><br/>
		<span id="Hopes" style="display:none;">Hopes : <span id="nbHopes">0</span></span>
	</div>
	<div id="messageBoard">
		<span id="Messages">You're doing all good.</span>
	</div>
	<div id="actions">
		<span id="BDBoostSpan" style="display:none;" ><button id="BDBoostBut" onclick="BDBoost()">Boost Broken Dreams Production</button> (cost : <span id="BDBoostPrice">0</span> Broken Dreams)</span><br/>
		<span id="buyHopeSpan" style="display:none;" ><button id="buyHopeBut" onclick="buyHope()">Buy a Hope</button> (cost : <span id="buyHopePrice">0</span> Broken Dreams)</span>
		
	</div>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="main.js"></script>
</body>

</html>
