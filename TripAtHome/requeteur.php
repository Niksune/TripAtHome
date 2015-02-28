<?php

	//Fichier appelé par la fonction JS faisant les requètes.
	//Se doit de retourner l'url d'une image
	
	//Change an array of tags in a string comma separated
	function tagsToString(array $criterias) {
	
		$stringTags = "";
	
		foreach($criterias as $value)
		{
			if($value!="")
				$stringTags .= $value.",";
		}
		
		$stringTags = substr($stringTags, 0, -1);
		
		return $stringTags;
	}
	
	/*Gets the parameters*/
	
	//Request number
	if(isset($_GET["codeTags"]))
		$codeTags=$_GET["codeTags"];
	else
		$codeTags=1;
		
	//City
	if(isset($_GET["choice"]))
		$city=$_GET["choice"];
	else
		$city="barcelona";
		
	//day/night
	if(isset($_GET["option1"])) //0 : night, 1 : day, 2 : no care
		$dayNight=$_GET["option1"];
	else
		$dayNight="2";
		
	if($dayNight == 1)
		$dayNight = "day";
	elseif($dayNight == 0)
		$dayNight = "night";
	else
		$dayNight = "";
		
	//List of tags
	$tags = [
				[$city, $dayNight, "street"],
				[$city, $dayNight, "building"],
				[$city, $dayNight, "(church OR temple)"],
				[$city, $dayNight, "(monument OR statue)"],
				[$city, $dayNight, "(streetart OR tag)"],
				[$city, $dayNight, "(concert OR festival)"]
			];
		
	
	class Flickr { 
		private $apiKey = 'ad75c9d381aaff2c6fc1d7001bba0782'; 
		
		public function __construct() {
		} 
		
		public function search($query = null) { 
			$search = 'http://flickr.com/services/rest/?method=flickr.photos.search&api_key=' . $this->apiKey . '&text=' . urlencode($query) . '&per_page=50&format=php_serial'; 
			$result = file_get_contents($search); 
			$result = unserialize($result); 
			return $result; 
		} 
	}
	//Generate tags list
	$listTags = tagsToString($tags[$codeTags]);
	
	//Random between 0 to 20 to choose a random picture
	$postNumber = rand(0, 20);
	
	//Makes the request
	$Flickr = new Flickr; 
	$data = $Flickr->search($listTags);
	$photo=$data['photos']['photo'][$postNumber];
	
	//Makes the photo itself
	$url='http://farm' . $photo["farm"] . '.static.flickr.com/' . $photo["server"] . '/' . $photo["id"] . '_' . $photo["secret"] . '.jpg'; 
	
	//Saves the log
	$retourChariot = '
';
	date_default_timezone_set('Europe/Paris'); //Sets on Paris's time zone
	$logString = gmdate('m-d h:i:s').' : '.$listTags.' ; '.$postNumber.' ; '.$url.$retourChariot;
	$logString .= file_get_contents('log.txt');
	file_put_contents('log.txt',$logString);
	
	echo $url;
?>