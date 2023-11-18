var locationArray = [
	{index: "pineconePlaza", image: "pineconePlaza", name: "Pinecone Plaza", buttons: [
		{name: "Squids Make Inc.", top: 54, left: 66, type: "location", target: "squidsMakeInc", time: "MorningEvening",},
		{name: "Ivy & Oak General Store", top: 55, left: 20, type: "location", target: "store", time: "MorningEvening",},
		{name: "Riverside Road", top: 63, left: 0, type: "location", target: "riversideRoad", time: "MorningEvening",},
		{name: "Willow Walk", top: 63, left: 91, type: "location", target: "willowWalk", time: "MorningEvening",},
		{name: "Lavender Lane", top: 81, left: 40, type: "location", target: "lavenderLane", time: "MorningEvening",},
	],},
	{index: "squidsMakeInc", image: "interiorCarpenter", name: "Squids Make Inc.", buttons: [
		{name: "Head Outside", top: 63, left: 0, type: "location", target: "pineconePlaza", time: "MorningEvening",},
	],},
	{index: "store", image: "interiorShopkeep", name: "Ivy & Oak General Store", buttons: [
		{name: "Head Outside", top: 60, left: 0, type: "location", target: "pineconePlaza", time: "MorningEvening",},
	],},
	{index: "willowWalk", image: "willowWalk", name: "Willow Walk", buttons: [
		{name: "Pinecone Plaza", top: 80, left: 35, type: "location", target: "pineconePlaza", time: "MorningEvening",},
		{name: "Into the Woods", top: 56, left: 77, type: "location", target: "forestPath", time: "MorningEvening",},
	],},
	{index: "forestPath", image: "forestPath", name: "Forest Path", buttons: [
		{name: "Willow Walk", top: 78, left:47, type: "location", target: "willowWalk", time: "MorningEvening",},
		{name: "Head Deeper", top: 61, left: 88, type: "location", target: "forestWilderness", time: "MorningEvening",},
		{name: "Fruit Orchard", top: 43, left: 35, type: "location", target: "forestOrchard", time: "MorningEvening",},
	],},
	{index: "forestWilderness", image: "forestWilderness", name: "Forest Wilderness", buttons: [
		{name: "Back to the Path", top: 78, left: 43, type: "location", target: "forestPath", time: "MorningEvening",},
	],},
	{index: "forestOrchard", image: "forestOrchard", name: "Forest Orchard", buttons: [
		{name: "Back to the Path", top: 78, left: 37, type: "location", target: "forestPath", time: "MorningEvening",},
	],},
	{index: "riversideRoad", image: "riversideRoad", name: "Riverside Road", buttons: [
		{name: "Pinecone Plaza", top: 76, left: 55, type: "location", target: "pineconePlaza", time: "MorningEvening",},
		{name: "Head to the Lake", top: 52, left: 0, type: "location", target: "lakesideRetreat", time: "MorningEvening",},
	],},
	{index: "lakesideRetreat", image: "lakesideRetreat", name: "Lakeside Retreat", buttons: [
		{name: "Riverside Road", top: 77, left: 45, type: "location", target: "riversideRoad", time: "MorningEvening",},
		{name: "Lakeside Ruins", top: 49, left: 86, type: "location", target: "lakesideRuins", time: "MorningEvening",},
	],},
	{index: "lakesideRuins", image: "lakesideRuins", name: "Lakeside Ruins", buttons: [
		{name: "Back to the Lake", top: 80, left: 48, type: "location", target: "lakesideRetreat", time: "MorningEvening",},
	],},
	{index: "lavenderLane", image: "lavenderLane", name: "Lavender Lane", buttons: [
		{name: "Pinecone Plaza", top: 78, left: 34, type: "location", target: "pineconePlaza", time: "MorningEvening",},
		{name: "Your Home", top: 36, left: 41, type: "location", target: "playerExterior", time: "MorningEvening",},
		{name: "Green Gardens", top: 54, left: 85, type: "location", target: "greenGardens", time: "MorningEvening",},
	],},
	{index: "playerExterior", image: "exteriorClean", name: "Your Home (Exterior)", buttons: [
		{name: "Head Inside", top: 55, left: 42, type: "location", target: "playerHouse", time: "MorningEvening",},
		{name: "Lavender Lane", top: 76, left: 42, type: "location", target: "lavenderLane", time: "MorningEvening",},
	],},
	{index: "playerHouse", image: "interiorClean", name: "Your Home (Interior)", buttons: [
		{name: "Outside", top: 76, left: 42, type: "location", target: "playerExterior", time: "MorningEvening",},
	],},
	{index: "greenGardens", image: "greenGardens", name: "Green Gardens", buttons: [
		{name: "Lavender Lane", top: 78, left: 11, type: "location", target: "lavenderLane", time: "MorningEvening",},
	],},
];

function changeLocation(n) {
	var galleryFiltersAuthor = "";
	var galleryFiltersArtist = "";
	listOfPrintedEncounters = [];
	document.getElementById('output').innerHTML = '';
	
	var locationTarget = 'failed';
	for (i = 0; i < locationArray.length; i++) { //find the location target
		if (n == locationArray[i].index) {
			console.log('Location target found. Now loading location '+locationArray[i].index)
			locationTarget = i;
		}
	}
	if (locationTarget == 'failed') { //error message;
		if (data.player.currentScene == "start") {
			loadEncounter("system", "start");
		}
		else {
			document.getElementById('output').innerHTML = '';
			writeText("You encountered a bug! Error code: locationTargetFailed");
			writeText("Send me a message with where you were and what button you clicked on, thanks!");
			writeFunction("changeLocation('playerHouse')", "Go Back Home");
		}
	}
	else {
		var bg = "images/locations/" + locationArray[locationTarget].image +".png";
		changeBG(locationArray[locationTarget].bg);
		if (data.player.time == "Night" && data.player.location != "playerHouse") {
			returnHome();
		}
		else {
			var flavoring = "";
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<div class="backgroundBorder">
						<img class="backgroundPicture `+data.player.time+`" `+flavoring+` src="`+bg+`" usemap="#roomMap">
					</div>
				</div>
			`;
			data.player.location = n;
			//console.log(data.player.location);
			for (i = 0; i < locationArray[locationTarget].buttons.length; i++) {
				if (locationArray[locationTarget].buttons[i].time.includes(data.player.time)) {
					printLocationButton(
						locationArray[locationTarget].buttons[i].name, 
						locationArray[locationTarget].buttons[i].top, 
						locationArray[locationTarget].buttons[i].left, 
						locationArray[locationTarget].buttons[i].target, 
					);
				}
			}
			if (data.player.time != "Night" && data.player.location != "map" 
			&& checkItem("Town Map") == true) {
				printLocationButton(
					'Use Map', 
					0, 
					0, 
					'map', 
				);
			}
			if (n == "store") {
				loadShop();
			}
			else {
				checkForEncounters();
			}
		}
	}
	if (n == 'gallery') {
		document.getElementById('output').innerHTML = '';
		loadEvent('system', 'laptop');
	}
	wrapper.scrollTop = 0;
	document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
	updateMenu();
	data.player.currentScene = "";
	saveSlot(110);
	checkForAchievements();
}

function returnHome() {
	if (checkFlag("mom", "megaEasy") == true) {
		n = 'playerHouse';
		data.player.location = "playerHouse";
		changeLocation("playerHouse");
	}
	else {
		n = 'playerHouse';
		data.player.location = "playerHouse";
		writeText("The sun has set and the streetlights fizzle on. It'd be best to head home now, otherwise you'll have trouble getting up on time tomorrow.");
		writeFunction("changeLocation('playerHouse')", "Go Back Home");
	}
}

function printLocationButton(name, top, left, target) {
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='changeLocation("`+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%; border: 3px solid; border-radius: 0px;">`+name+`</div>
			`;
			break;
		}
		case "persona": {
			var ransomStringStart = name;
			ransomStringStart = ransomStringStart.toLowerCase();
			ransomStringStart = ransomStringStart.charAt(0).toUpperCase() + ransomStringStart.slice(1);
			console.log(ransomStringStart);
			var ransomStringEnd = "";
			if (ransomStringStart.charAt(2) == "g" || ransomStringStart.charAt(2) == "v") {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 1:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(5deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					console.log(ransomStringEnd);
					ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			else {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 1:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(-15deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					//console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					//console.log(ransomStringEnd);
						ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			if (checkFlag("mom", "personaOff")) {
				ransomStringEnd = name;
			}
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButtonPersona" onclick='changeLocation("`+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+ransomStringEnd+`</div>
			`;
			break;
		}
		default: {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='changeLocation("`+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+name+`</div>
			`;
		}
	}
}

function changeBG(n) {
	document.getElementById('wrapperBG').classList.remove("Morning");
	document.getElementById('wrapperBG').classList.remove("Evening");
	document.getElementById('wrapperBG').classList.remove("Night");
	document.getElementById('wrapperBG').style.backgroundImage = "url("+n+")";
	document.getElementById('wrapperBG').classList.add(data.player.time);
}