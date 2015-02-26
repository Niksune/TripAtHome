<?php

	//Créateur de requctes
	//En entrée un tableau contenant les mots clefs
	//En sortie un array contenant la requcte (forme : https://e621.net/post/index.xml?tags=sonic_the_hedgehog+solo+rating:safe)
	function requestCreator(array $criterias) {

		$request = 'https://e621.net/post/index.xml?tags='.$criterias[0];
		
		foreach ($criterias as $value) {
		
			if($value == $criterias[0])
				continue;
				
			$request = $request.'+'.$value;
		}
		
		return $request;
	}

	//A partir d'une requcte retourne l'image du premier post
	//En entrée un string contenant la requcte
	//En sortie l'URL de l'image
	function getImageURL($request,$number) {
	
		$xml = simplexml_load_file($request);
		return($xml->post[$number]["file_url"]);
	
	}
	
	//Renvoie le nombre de réponses correspondant r la recherche
	//Entrée : string requcte
	//Sortie : nombre
	function howMany($request){
	
		$xml = simplexml_load_file($request);
		return($xml["count"]);
	}
	
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
?>