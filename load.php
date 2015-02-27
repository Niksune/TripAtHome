<?php

	//Page that have to return the list of variables

	mysql_connect("localhost", "root", "") or die(mysql_error());
	mysql_select_db("games");
	
	$game = $_GET["game"];
	$gameID=$_GET["gameID"];
	
	//Load the datas
	$req=mysql_query('SELECT * FROM '.$game.' WHERE gameID = "'.$gameID.'"') or die(mysql_error());
		
	//Adapt in format var1,var2,var3
	$data = mysql_fetch_assoc($req);
	$answer = 
		$data["accessMinishop"].','.$data["accessDoormart"].','.$data["accessAlphacrafters"].','.$data["vegetablesEaten"].','.
		$data["endurance"].','.$data["eyesight"].','.$data["dexterity"].','.$data["luck"].','.
		$data["vegetables"].','.$data["golds"].','.$data["opals"].','.$data["incrementationVegetable"].','.
		$data["gardenBoostsAcquired0"].','.$data["gardenBoostsAcquired1"].','.$data["gardenBoostsAcquired2"].','.
		$data["pickaxeEquiped"].','.$data["lightEquiped"].','.$data["trinketEquiped"];
	
	mysql_close();
	
	//And prints the answer
	echo($answer);
	
	