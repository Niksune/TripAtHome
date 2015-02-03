<?php

	//Genere l'url permettant de tester la requete
	//Entrée : array de mots clefs
	//SOrtie : un string avec l'url
	function makeURL(array $criterias) {
	
		$url = "https://e621.net/post?tags=";
		
		$url = $url.$criterias[0];
	
		foreach ($criterias as $value)
		{
			if($value == $criterias[0])
				continue;
			$url= $url.'+'.$value;
		}
		
		return $url;
	
	}
