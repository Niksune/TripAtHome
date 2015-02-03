<?php

	//Cr�ateur de requ�tes
	//En entr�e un tableau contenant les mots clefs
	//En sortie un array contenant la requ�tes (forme : https://e621.net/post/index.xml?tags=sonic_the_hedgehog+solo+rating:safe)
	function requestCreator(array $criterias) {

		$request = 'https://e621.net/post/index.xml?tags='.$criterias[0];
		
		foreach ($criterias as $value) {
		
			if($value == $criterias[0])
				continue;
				
			$request = $request.'+'.$value;
		}

		return $request;
	}

?>