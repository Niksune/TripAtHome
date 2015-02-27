<?php

	//Page that have to return the ID of the save

	mysql_connect("localhost", "root", "") or die(mysql_error());
	mysql_select_db("games");
	
	function randomString()
	{
		$characts    = 'abcdefghijklmnopqrstuvwxyz';
        $characts   .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';	
		$characts   .= '1234567890'; 
		$code_aleatoire      = ''; 

		for($i=0;$i < 5;$i++)    //5 est le nombre de caractères
		{ 
			$code_aleatoire .= substr($characts,rand()%(strlen($characts)),1); 
		}
		
		return $code_aleatoire;
	}
	
	$game = $_GET["game"];

	//If no gameID we must create one and be sure he is unique
	if($_GET["gameID"]=="0")
	{
		$new=1;
		$ok=0;
		while(!$ok)
		{
			$gameID=randomString();
			$result = mysql_query('SELECT COUNT(*) AS totalID FROM '.$game.' WHERE gameID = "'.$gameID.'"' ) or die(mysql_error());
			$donnees = mysql_fetch_array($result);
			if($donnees['totalID']==0)
			{
				$ok=1;
			}
		}
	}
	else
	{
		$gameID=$_GET["gameID"];
		$new=0;
	}
		
	//Saving or updating
	if($new)
	{
		$query='INSERT INTO '.$game.' VALUES("'.$gameID.'",
		"'.$_GET["accessMinishop"].'","'.$_GET["accessDoormart"].'","'.$_GET["accessAlphacrafters"].'","'.$_GET["vegetablesEaten"].'",
		"'.$_GET["endurance"].'","'.$_GET["eyesight"].'","'.$_GET["dexterity"].'","'.$_GET["luck"].'",
		"'.$_GET["vegetables"].'","'.$_GET["golds"].'","'.$_GET["opals"].'","'.$_GET["incrementationVegetable"].'",
		"'.$_GET["gardenBoostsAcquired0"].'","'.$_GET["gardenBoostsAcquired1"].'","'.$_GET["gardenBoostsAcquired2"].'",
		"'.$_GET["pickaxeEquiped"].'","'.$_GET["lightEquiped"].'","'.$_GET["trinketEquiped"].'"
		)';
	}
	else
	{
		$query='UPDATE '.$game.' SET
		accessMinishop="'.$_GET["accessMinishop"].'",accessDoormart="'.$_GET["accessDoormart"].'",accessAlphacrafters="'.$_GET["accessAlphacrafters"].'",vegetablesEaten="'.$_GET["vegetablesEaten"].'",
		endurance="'.$_GET["endurance"].'",eyesight="'.$_GET["eyesight"].'",dexterity="'.$_GET["dexterity"].'",luck="'.$_GET["luck"].'",
		vegetables="'.$_GET["vegetables"].'",golds="'.$_GET["golds"].'",opals="'.$_GET["opals"].'",incrementationVegetable="'.$_GET["incrementationVegetable"].'",
		gardenBoostsAcquired0="'.$_GET["gardenBoostsAcquired0"].'",gardenBoostsAcquired1="'.$_GET["gardenBoostsAcquired1"].'",gardenBoostsAcquired2="'.$_GET["gardenBoostsAcquired2"].'",
		pickaxeEquiped="'.$_GET["pickaxeEquiped"].'",lightEquiped="'.$_GET["lightEquiped"].'",trinketEquiped="'.$_GET["trinketEquiped"].'"
		WHERE gameID="'.$gameID.'"';
	}
	
	mysql_query($query) or die(mysql_error());
	
	mysql_close();
	
	//And don't forget to print the gameID
	echo($gameID);
	
	