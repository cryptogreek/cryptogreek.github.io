var character = 'system';
var eventArray = [
	{index: "paperwork", name: "File Paperwork", location: 'playerOffice', time: "MorningEvening", 
	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 0, left: 0,}
];

var newItems = [ //If price is 0 it isn't for sale
	{name: "Butt", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/butt.jpg", description: ""},
	{name: "Ghost AR", 			key: true, 		price: 30, 	image: "scripts/gamefiles/items/ghostAR.jpg", description: "The brand new mobile game Ghost AR! Track ghosts around the city, collect them all and save the world from their ghastly threat! Open your phone and tap 'Ghost AR' after buying to play, uses art by Mazeran Pickerman."},
	{name: "Town Map", 			key: true, 		price: 20, 	image: "scripts/gamefiles/items/map.jpg", description: "Allows you to navigate around town more easily."},
	{name: "Hypnosis Textbook", key: true, 	price: 50, 	image: "scripts/gamefiles/items/hypnosisTextbook.jpg", description: "A textbook on hypnosis, you can read it at home to improve your skill."},
	{name: "Hacking Textbook", 	key: true, 	price: 50, 	image: "scripts/gamefiles/items/hackingTextbook.jpg", description: "A textbook on hacking, you can read it at home to improve your skill."},
	{name: "Counseling Textbook", key: true, 	price: 50, 	image: "scripts/gamefiles/items/counselingTextbook.jpg", description: "A textbook on counseling, you can read it at home to improve your skill."},
	{name: "Lady", 				key: true, 		price: 0, 	image: "scripts/gamefiles/profiles/lady.jpg", description: "For if you'd like to play as a cute lady. Unlocks the Lady character portrait. Aesthetic change only, art by Nusumenaihxseki"},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default. Tab appears below the map, button appears on the map itself
	{index: "paperwork", 	name: "File some Paperwork", 	location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 65, day: "both",},
	{index: "hotel", 	name: "Continue", 	location: 'hotel', 		time: "MorningEveningNight", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 40, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "gameConsole", 	name: "Game Console", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 72, day: "both",},
	{index: "wardrobe", 	name: "Wardrobe", 				location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 1, day: "both",},
	{index: "laptop", 		name: "Use the Computer", 		location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 5, day: "both",},
	{index: "skillBooks", 		name: "Read up on self-help", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 25, left: 25, day: "both",},
	{index: "styleBooks", 		name: "Read up on artistic styles", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 45, left: 45, day: "both",},
	//index: "gameBooks", 		name: "Read up on the latest trends", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 45, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'playerHouse', 		time: "MorningEvening", 			itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	
	{index: "nap", 			name: "Take a Nap", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "nap", 			name: "Wait", 			location: 'map', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 0, left: 0, day: "both",},
	{index: "newDay", 		name: "Go to Bed", 				location: 'playerHouse', 		time: "Night", 		itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "shop", 		name: "General Store", 			location: 'shoppingDistrict', 	time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 60, day: "both",},
	
	{index: "countryStart",
	name: "Check the bus schedule",
	location: 'street',
	time: "Morning",
	itemReq: "invitation",
	trustMin: 0,
	trustMax: 0,
	type: "button",
	top: 30,
	left: 30,
	day: "both",},
	
	{index: "countryBusride",
	name: "Take a bus out of the city",
	location: 'street',
	time: "MorningEvening",
	itemReq: "ticket", trustMin: 0, trustMax: 0, type: "button", top: 30, left: 30, day: "both",},
	{index: "countryBusride",
	name: "Take a bus out of the city",
	location: 'map',
	time: "MorningEvening",
	itemReq: "ticket", trustMin: 0, trustMax: 0, type: "button", top: 70, left: 70, day: "both",},
	
	{index: "cityBusride",
	name: "Take a bus back to the city",
	location: 'countryStation',
	time: "MorningEvening",
	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 30, left: 30, day: "both",},
	
	{index: "churchMorning",
	name: "Sleep",
	location: 'countryChurchRoom',
	time: "Night",
	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 65, day: "both",},
	{index: "nap",
	name: "Take a Nap",
	location: 'countryChurchRoom',
	time: "MorningEvening",
	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 65, day: "both",},
];

function writeEncounter(scene) {
	console.log('now writing encounter '+scene);
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	if (scene.includes("porn") || data.player.location == 'gallery') {
		document.getElementById('output').innerHTML = '';
	}
	switch (scene) {
		case "hotel": {
			if (checkFlag("demon", "hotelBad") == true) {
				loadEncounter("demon", "hotelBadFinish");
			}
			if (checkFlag("succubus", "hotelGood") == true) {
				loadEncounter("succubus", "hotelGoodFinish");
			}
			if (checkFlag("succubus", "hotelGood") != true && checkFlag("succubus", "hotelGood") != true) {
				writeText("You've encountered a bug! Somehow, you entered the hotel without triggering the hotel flags. Click this button to go home, and tell noodle what happened!");
				writeFunction("changeLocation('playerHouse')", "Go home")
			}
			break;
		}
		case "start": {
			//updateMenu();
			document.getElementById('playerImage').src = "scripts/gamefiles/characters/player.png";
			var bg = "images/locations/orchardA.png";
			document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
			writeBig("images/locations/orchardA.png");
			writeHTML(`sp test; Test.`);
			writeHTML(`button Start; changeLocation('pineconePlaza');`);
			break;
		}
		case "otherNotes": {
			writeText("If you are playing this game on a service such as gamcore or another hosted service, I recommend you play on <a href='https://noodlejacuzzi.neocities.org/'>My Index</a> instead. There are also links to a direct download of the game, as well as a list of cheat codes!");
			writeText("<hr>");
			writeText("Are <b>you</b> interested in getting your own character into Hentai University? Well, you're in luck! Hentai University v3 includes <b>Mod Support!</b> Hop over to the game's <a href='https://noodlejacuzzi.github.io/Hentai%20University%20Modding%20Tutorial/Tutorial.html'>Modding Tutorial</a> if you're interested.");
			writeText("<hr>");
			writeText("We're always open to comments or criticism. If you feel like school management would add a lot to the game, you'd like us to consider adding another artist, or you'd like to suggest content of your own, you can shoot us a message anywhere this game is posted. You can find the Patreon here: <a href='https://www.patreon.com/noodlejacuzzi'>Patreon Link</a>");
			writeText("You can also send us a message directly. Noodlejacuzzi is on discord (NoodleJacuzzi#4120) or you can send an email at noodlejacuzzi@gmail.com");
			writeText("Captain Cryptogreek can be messaged on his reddit account where he regularly posts captions. You can also shoot him an email if you'd like him to proofread or you'd like to commission his skills at cryptogreekcaptions@gmail.com");
			writeText("<hr>");
			writeText("This game is based (loosely) on the design of Hentai High School by Capta1n and the Hentai High School + project. However, there are no elements of school management or system of global corruption. The smaller scale means it will be more feasible to complete than either of those games.");
			writeText("As a content warning, this game features hypnosis and dubious consent between partners, and mostly depicts straight M/F sex. There are several male characters who have scenes depicting undoubtably homosexual content, but they universally have a twink/femboi bodytype and no specific character relationships are ever forced on the player. Finally, all characters are portrayed as being 18 or older. Every single character is a high-school graduate, and we currently don't intend to add any character who is underaged.");
			writeText("If you'd like to avoid any specific fetishes, each character's logbook page lists the fetishes their scenes cover. Keep in mind that, as you are a hypnotist, hypnosis/mind control is so common we won't list it in the tags.");
			writeText("<hr>");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("There is absolutely NO grinding required to enjoy this game. Please do not feel obligated to grind for money as it is passively generated over time, and the amount you earn over time increases as you play the game. For money and stats the optimal way to play is to simply wander the town and interact with characters you like. If you ever feel pressured to grind, I recommend using a cheat code from my index instead.");
			writeText("<hr>");
			writeText("Finally, there's also a <a href='https://tiermaker.com/create/hu-waifu-tier-list-1109129'>Tier List Maker</a> for the game. It could be a fun way to start a conversation on the discord. NoodleJacuzzi has already prepared an objectively correct one for your educational benefit:");
			writeBig("scripts/gamefiles/tierList.png");
			writeBig("scripts/gamefiles/alignmentChart.png");
			writeFunction("loadEncounter('system', 'start')", "Go back to the start");
			break;
		}
		case "artistList": {
			listArtists();
			writeFunction("loadEncounter('system', 'start')", "Go back to the start");
			break;
		}
		case "veganMenu": {
			if (data.player.vegetarian != true && data.player.carnivore != true) {
				writeSpecial("Currently neither vegetarian or carnivore mode are active. You are an omnivore who can lewd both sexes!");
			}
			if (data.player.vegetarian == true && data.player.carnivore == true) {
				writeSpecial("... You've disabled both male and female characters. Are you sure this is the right game for you?");
			}
			writeBig("images/locations/vegetarian.jpg");
			if (data.player.vegetarian == true) {
				writeSpecial("Vegetarian mode is active! Femboy / male characters will no longer appear.");
				writeFunction("loadEncounter('system', 'vegetarianToggle')", "Disable vegetarian mode");
			}
			else {
				writeFunction("loadEncounter('system', 'vegetarianToggle')", "Enable vegetarian mode");
			}
			writeBig("images/locations/carnivore.jpg");
			if (data.player.carnivore == true) {
				writeSpecial("Carnivore mode is active! Female characters will no longer appear. System-essential characters such as incubusF and principalF will still appear, but will have alternate interactions with no sex.");
				writeFunction("loadEncounter('system', 'carnivoreToggle')", "Disable carnivore mode");
			}
			else {
				writeFunction("loadEncounter('system', 'carnivoreToggle')", "Enable carnivore mode");
			}
			writeText("All of the artists who's works we've used have different styles, and all work is censored due to Japan's censorship laws. It is worth noting that each have their own appeal / flaws. Oreteki is a divisive artist due to his style of drawing labia lips, and Nagi Ichi's work is 90% M/M. If these features are a dealbreaker for you, consider avoiding characters by these artists.");
			writeFunction("loadEncounter('system', 'oretekiTest')", "See an Oreteki18kin example <br>(LONG LABIA LIPS/FLAPS)");
			writeFunction("loadEncounter('system', 'start')", "Go back");
			break;
		}
		case "vegetarianToggle": {
			if (data.player.vegetarian == true) {
				data.player.vegetarian = false;
			}
			else {
				data.player.vegetarian = true;
			}
			loadEncounter('system', 'veganMenu');
			break;
		}
		case "carnivoreToggle": {
			if (data.player.carnivore == true) {
				data.player.carnivore = false;
			}
			else {
				data.player.carnivore = true;
			}
			loadEncounter('system', 'veganMenu');
			break;
		}
		case "listTextbooks": {
			listTextbooks();
			break;
		}
		case "prologue": {
			writeText("Dear <input type='text' id='nameSubmission' value='Thomas'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few men have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			//writeText("- Yours, Principal "+data.story[8].fName+".");
			writeFunction("renamePlayer()", "Finish reading the paper");
			break;
		}
		case "prologueAlt": {
			data.player.gender = "woman";
			data.player.title = "Miss";
			data.player.honorific = "ma'am";
			if (checkBody("basil") != true) {
				var goof = {index: "basil", artist: "Art by Ishimura",};
				data.bodytypes.push(goof);
			}
			var pepsi = data.bodytypes.length-1;
			changeBody(pepsi);
			writeText("Dear <input type='text' id='nameSubmission' value='Tomara'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few women of your background have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			//writeText("- Yours, Principal "+data.story[8].fName+".");
			writeFunction("renamePlayer()", "Finish reading the paper");
			writeHTML(`
				t <b>Warning! Due to the nature of this game's images, many scenes will visually depict the main character as having a male body. While many images were not used in game and some have been cropped or editted to avoid clearly depicting a male player, some images which do this still remain.</b>
				t <b>This mode only changes your character's profile and logbook image, the pronouns characters use when referring to you, dialogue ("Geezer" becomes "Hag", "Master" becomes "Mistress", etc), and some scene descriptions. If you notice any misgenderings, or you'd like to use the Blacklist cheat to create an image blacklist of undesirable pictures, please contact Noodle Jacuzzi via discord, F95Zone, Hypnopics, or email at noodlejacuzzi@gmail.com</b>
			`);
			break;
		}
		case "prologue2": {
			writeBig("scripts/gamefiles/characters/"+data.player.character+".jpg", "Art by Ishimura");
			writeText("You are " + data.player.name + ", amateur hypnotist.");
			writeText("The time spent collecting and hypnotizing references almost wasn't worth it, especially with how long faking your credentials took. But it paid off in the end.");
			writeText("Today you'll be sliding right into your new position as a school counselor. Your direct supervisor is well under your control, so you have completely free range for as long as you play it safe.");
			writeText("The house is free too, so you could just sleep in all day and get paid every five days like clockwork. But there's a lot more on offer here to enjoy.");
			writeText("This town is a hotspot of beautiful women, and the school it surrounds is often referred to by its nickname.");
			writeText("<b>Hentai University</b>");
			writeFunction("changeLocation('playerHouse')", "Get Started");
			break;
		}
		case "oretekiTest": {
			writeBig("images/porn/5A-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/principal/070.jpg", "Art by Oreteki18Kin");
			writeFunction("loadEncounter('system', 'veganMenu')", "go back");
			break;
		}
		case "cheat": {
			writeCenteredText("You can enter cheat codes here. For example, use the code 'new name' to rename all of the game's other characters.");
			writeCenteredText("I keep a list of all of these on my patreon, go there, even if you aren't a patron, to find them.");
			writeCenteredText("Enter cheat code: <input type='text' id='cheatSubmission' value=''>");
			writeFunction("diagnostic()", "Submit");
			writeFunction("loadEncounter('system', 'gameConsole')", "Go back");
			break;
		}
		case "load": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Warning: Save before using. Enter the modded character's index EXACTLY or it will cause issues and you'll need to load the game.</p>
				<p class='centeredText'>As of v8 March 27th 2020, The mod characters by SlackerSavior have been fully added into the game. Type in <b>coach</b> below to load them into the game. Please keep in mind though that only Zoe and Amy have content.</p>
				<p class='centeredText'>Enter character's index: <input type="text" id="indexSubmission" value=""></p>
				<p class='choiceText' onclick='modCharacter()'>Submit</p>
			`;
			if (data.player.location == "") {
				writeFunction("writeEncounter('start')", "Finish");
			}
			else {
				writeFunction("writeEncounter('gameConsole')", "Finish");
			}
			break;
		}
		case "newDay": {
			if (data.player.location != scene) {
				randNum = getRandomInt(8);
				randNum += 1;
				data.player.dayID = randNum;
				console.log("Today's day ID is " + data.player.dayID);
				data.player.day += 1;
			}
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			if (data.player.fiend != null) {
				if (data.player.fiend.clicks < 10) {
					data.player.fiend.clicks = 10;
				}
			}
			data.player.time = "Morning";
			updateMenu();
			//checkDay();
			var specialEvent = false;
			//Checking for special events
			console.log("Now checking for special events for on day " + data.player.day);
			if (data.player.day == 3) {
				//specialEvent = true;
				//writeFunction("writeEvent('specialDay')", "Go to the special event");
				//writeTransition("playerHouse", "Skip the event");
			}
			if (checkTrust('succubus') > 70) {
				if (checkFlag('succubus', 'breakfast') == false) {
					specialEvent = "breakfast"; 
				}
			}
			if (checkTrust('fitboi') > 82 && checkFlag("fitboi", "morning") == false) {
				if (checkFlag('fitboi', 'morning') == false) {
					specialEvent = "shecream"; 
				}
			}
			if (checkTrust('succubus') > 77) {
				if (checkFlag('succubus', 'mission') == false) {
					specialEvent = "mission"; 
				}
			}
			var nurseReady = false;
			if (checkTrust("nurse") > 79 || checkTrust("nurse") == 3) {
				nurseReady = true;
			}
			var ojouReady = false
			if (checkTrust("ojou") > 79 || checkFlag("ojou", "incubus") == true) {
				ojouReady = true;
			}
			if (
				checkTrust("scarf") > 99 &&
				nurseReady == true &&
				checkTrust("president") > 99 &&
				checkTrust("mama") > 18 &&
				ojouReady == true &&
				checkTrust("instructor") > 1 &&
				checkTrust("pinstripe") > 1
			) {
				if (checkFlag('president', 'shadowCouncil') == false) {
					specialEvent = "shadowCouncil"; 
				}
			}
			if (checkTrust("gilf") == -3) {
				specialEvent = "morning1"; 
			}
			if (checkTrust("son") == 25) {
				specialEvent = "sonMorning"; 
			}
			if (checkTrust("papi") == 64) {
				specialEvent = "papiMorning"; 
			}
			if (checkFlag("mom", "mods") != true && data.player.day > 49) {
				addFlag("mom", "mods");
				specialEvent = "mods"; 
			}
			if (data.player.day == 100) {
				specialEvent = ""; 
			}
			if (checkTrust("wife") == 8) {
				specialEvent = "wifeCliffhanger"; 
			}
			if (checkTrust("fiend") == -1 && checkFlag("fiend", "activated") == true) {
				specialEvent = "fiendWakeup"; 
			}
			switch (specialEvent) {
				case "breakfast": 
					loadEncounter('succubus', 'breakfast');
				break;
				case "mission": 
					loadEncounter('succubus', 'missionStart');
				break;
				case "morning1": 
					loadEncounter('gilf', 'morning1');
				break;
				case "sonMorning": 
					loadEncounter('papi', 'sonMorning');
				break;
				case "papiMorning": 
					loadEncounter('papi', 'papiMorning');
				break;
				case "shadowCouncil": 
					loadEncounter('president', 'shadowCouncilA');
				break;
				case "shecream": 
					loadEncounter('fitboi', 'fitboiMorning');
				break;
				case "wifeCliffhanger": 
					loadEncounter('wife', 'wifeMorning');
				break;
				case "fiendWakeup": 
					loadEncounter('fiend', 'intro1');
				break;
				case "mods": 
					writeBig("scripts/gamefiles/images/v20.png");
					writeSpecial("You've played more than 50 days, amazing! Have you checked the game console for more characters by talented HU modders? Above are a few characters who were added in version 20!");
				default: {
					console.log("No events found");
					checkForPhone();
					if (data.player.day == 100) {
						writeSpecial("You've played 100 days, amazing! Thank you very much for playing so far, please be sure to back up your save though! You can do this by saving to a text string, or by saving to a .noodle file in the save menu!");
					}
					document.getElementById('output').innerHTML += `
						<div class="playerRoom">
							<img class="backgroundPicture" src="images/locations/newDayMorning.jpg" usemap="#roomMap">
						</div>
					`;
					if (checkFlag("mom", "megaEasy") == true) {
						printLocationButton(
							"Get out of bed", 
							40, 
							40, 
							"map", 
						);
					}
					else {
						printLocationButton(
							"Get out of bed", 
							40, 
							40, 
							"playerHouse", 
						);
					}
					if (checkFlag("mom", "megaEasy") != true) {
						var illegalLocations = "map, casino, beach, hotel, playerHouse";
						var morningLocation = "";
						var eveningLocation = "";
						for (locationIndex = 0; locationIndex < locationArray.length; locationIndex++) {
							if (locationArray[locationIndex].index == savedLocations.morning) {
								morningLocation = locationArray[locationIndex].name;
							}
							if (locationArray[locationIndex].index == savedLocations.evening) {
								eveningLocation = locationArray[locationIndex].name;
							}
						}
						if (savedLocations.morning != "" && illegalLocations.includes(savedLocations.morning) != true) {
							writeFunction("changeLocation('"+savedLocations.morning+"')", "Shortcut: "+morningLocation);
						}
						if (savedLocations.evening != "" && illegalLocations.includes(savedLocations.evening) != true && savedLocations.evening != savedLocations.morning) {
							writeFunction("changeLocation('"+savedLocations.evening+"')", "Shortcut: "+eveningLocation);
						}
						savedLocations.morning = "";
						savedLocations.evening = "";
					}
				}
			}
			if (data.player.day % 5 === 0) {
				var paybaby = 10 + data.player.counseling;
				writeSpecial("It's payday! $10 has been wired to your account.");
				if (data.player.counseling > 0) {
					writeSpecial("You've received an extra $" + data.player.counseling + " for being so skilled, you sly dog!");
				}
				if (checkFlag('starlet', 'porno') == true) {
					paybaby += 20;
					writeSpecial("You recieved an extra $20 from your appearance in porn!");
				}
				data.player.money += paybaby;
			}
			if (checkTrust('principal') == 40) {
				if (data.player.carnivore != true) {
					raiseTrust('principal', 1);
				}
			}
			var failureToRead = false;
			for (z = 0; z < data.story.length; z++) {
				if (data.story[z].unreadText ==true) {
					if (data.story[z].textEvent.includes("eward") != true) {
						failureToRead = true;
					}
				}
			}
			if (failureToRead == true) {
				reminderFontSize += 50;
				writeText("<span style='font-size: "+reminderFontSize+"%'>You have one or more unread text messages!</span>");
				document.getElementById('phoneButton').style.color = "#0F0";
			}
			else {
				reminderFontSize = 100;
			}
			break;
		}
		case "laptop": {
			var galleryFiltersAuthor = "";
			var galleryFiltersArtist = "";
			writeFunction("loadEncounter('system', 'porn')", "Look up porn");
			writeFunction("loadEncounter('system', 'gallery')", "View the gallery");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "porn": {
			if (data.player.time == "Night") {
				writeText("Looking out your window, you notice it's already night! You'll need to get some sleep.");
			writeFunction("changeLocation('playerHouse')", "Finish");
			}
			else {
				if (data.player.carnivore == "true") {
					writeText("Scrolling through the list, most videos uploaded to this porn site are straight. After a quick skim you don't find anything of note except for the personalized adds.")
				}
				else {
					writePorn();
				}
				writeFunction("loadEncounter('system', 'laptop')", "Go back");
				if (data.player.vegetarian != true && checkFlag("camboi", "stream") != true && data.player.day > 1) {
					popup();
				}
			}
			break;
		}
		case "gallery" : {
			data.player.location = 'gallery';
			generateGalleryNav();
			writeFunction("changeLocation('playerHouse')", "Finish up");
			break;
		}
		case "gameConsole": {
			writeFunction("loadEncounter('system', 'cheat')", "Enter cheat code");
			if (checkFlag("mom", "mods") != true) {
				writeFunction("loadEncounter('system', 'existingMods')", "Check out some included mods", "green");
			}
			else {
				writeFunction("loadEncounter('system', 'existingMods')", "Check out some included mods");
			}
			writeFunction("loadEncounter('system', 'load')", "Load an external mod character");
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "existingMods": {
			writeCenteredText("Here's a list of mods submitted on the Noodle's Jacuzzi discord server. Please keep in mind these may not be the latest versions of these characters, especially if you are playing a downloaded version of the game.");
			writeCenteredText("This list serves as a method for modders to have their characters uploaded and be made playable online, but please keep in mind that certain content, such as underage or bestiality content, shall not be hosted here. If you would like your characters uploaded to this list, please let me know via discord!");
			if (checkFlag("mom", "mods") != true) {
				addFlag("mom", "mods");
				checkForAchievements();
			}
			writeMed("images/sports/profile.jpg");
			writeCenteredText("Zoe & the volleyball team - SlackerSavior");
			writeCenteredText("Status - Multiple characters finished, several characters in-progress");
			writeFunction("", "SlackerSavior's characters are implemented into the game by default! Please drop by the discord or the f95zone thread if you'd like to give much-welcome feedback!");
			writeMed("images/intern/aceBoys.jpg");
			writeCenteredText("Dan Flint & Ace's other fembois");
			writeSpecial("Status - Multiple currently finished male characters by Ace! They have corruption content and Aaron has a crossdressing club scene too! Now including Leo as well!");
			writeFunction("writeEncounter('loadIntern')", "Load Ace's male characters, last updated 9/18/2023");
			writeMed("images/dropout/aceGirls.jpg");
			writeCenteredText("Ace's Girls");
			writeSpecial("Status - A brand new girl not pictured, the accountant of your dreams! Load today for a special preview of her!");
			writeFunction("writeEncounter('loadAceGirls')", "Load Ace's girls, last updated 3/31/2023");
			writeMed("images/ghost/profile.jpg");
			writeCenteredText("Sadako Yamamura - PenguinThunder");
			writeSpecial("Status - Currently Finished. Assumes you have progress with Gou, a male character. If you don't, the content might be confusing, but you don't <i>need</i> to understand Gou to follow the plot.");
			writeFunction("writeEncounter('loadGhost')", "Load Sadako Yamamura by PenguinThunder, last updated 12/16/2021");
			writeFunction("writeEncounter('gameConsole')", "Go back");
			break;
		}
		case "loadIntern": {
			var internLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "intern") {
					console.log(name+' found already in the data variable, aborting function');
					internLoaded = true;
				}
			}
			if (internLoaded == false) {
				var newCharacter = {index: "intern", fName: "Dan", lName: "Flint", trust: 0, encountered: false, textEvent: "", met: false, color: "#2388ED", author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/intern/profile.jpg;
					sp intern; internF internL has been added to the game!
				`);
			}
			else {
				writeText("internF has already been loaded.");
			}
			var seriousLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "serious") {
					console.log(name+' found already in the data variable, aborting function');
					seriousLoaded = true;
				}
			}
			if (seriousLoaded == false) {
				var newCharacter = {index: "serious", fName: "Aaron", lName: "Lucky", trust: 0, encountered: false, textEvent: "", met: false, color: '#338ABA', author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/serious/profile.jpg;
					sp serious; seriousF seriousL has been added to the game!
				`);
			}
			var hookerLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "hooker") {
					console.log(name+' found already in the data variable, aborting function');
					hookerLoaded = true;
				}
			}
			if (hookerLoaded == false) {
				var newCharacter = {index: "hooker", fName: "Leo", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#415062", author: "KH_Ace", artist: "Akagai", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/hooker/profile.jpg;
					sp hooker; hookerF hookerL has been added to the game!
				`);
			}
			else {
				writeText("seriousF has already been loaded.");
			}
			writeFunction("writeEncounter('gameConsole')", "Back to the console");
			break;
		}
		case "loadAceGirls": {
			var dropoutLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "dropout") {
					console.log(name+' found already in the data variable, aborting function');
					dropoutLoaded = true;
				}
			}
			if (dropoutLoaded == false) {
				var newCharacter = {index: "dropout", fName: "Chloe", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#50528F", author: "KH_Ace", artist: "Pastel Bitch", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/dropout/profile.jpg;
					sp dropout; dropoutF dropoutL has been added to the game!
				`);
			}
			else {
				writeText("dropoutF has already been loaded.");
			}
			var ayeyeLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "ayeye") {
					console.log(name+' found already in the data variable, aborting function');
					ayeyeLoaded = true;
				}
			}
			if (ayeyeLoaded == false) {
				var newCharacter = {index: "ayeye", fName: "Valery", lName: "Storm", trust: 0, encountered: false, textEvent: "", met: false, color: "#E37E7A", author: "KH_Ace", artist: "Silver Radish", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/ayeye/profile.jpg;
					sp ayeye; ayeyeF ayeyeL has been added to the game!
				`);
			}
			else {
				writeText("ayeyeF has already been loaded.");
			}
			var diamondsLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "diamonds") {
					console.log(name+' found already in the data variable, aborting function');
					diamondsLoaded = true;
				}
			}
			if (diamondsLoaded == false) {
				var newCharacter = {index: "diamonds", fName: "Ashley", lName: "Piece", trust: 0, encountered: false, textEvent: "", met: false, color: "#A737E3", author: "KH_Ace", artist: "Silver Radish", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/diamonds/profile.jpg;
					sp diamonds; diamondsF diamondsL has been added to the game!
				`);
			}
			else {
				writeText("diamondsF has already been loaded.");
			}
			var heartsLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "hearts") {
					console.log(name+' found already in the data variable, aborting function');
					heartsLoaded = true;
				}
			}
			if (heartsLoaded == false) {
				var newCharacter = {index: "hearts", fName: "Skye", lName: "Powers", trust: 0, encountered: false, textEvent: "", met: false, color: "#3F6971", author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/hearts/profile.jpg;
					sp hearts; heartsF heartsL has been added to the game!
				`);
			}
			var accountantLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "accountant") {
					console.log(name+' found already in the data variable, aborting function');
					accountantLoaded = true;
				}
			}
			if (accountantLoaded == false) {
				var newCharacter = {index: "accountant", fName: "Pamela", lName: "Light", trust: 0, encountered: false, textEvent: "", met: false, color: "#EF4E9B", author: "KH_Ace", artist: "Kitsuneyane", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/accountant/profile.jpg;
					sp accountant; accountantF accountantL has been added to the game!
				`);
			}
			else {
				writeText("accountantF has already been loaded.");
			}
			writeFunction("writeEncounter('gameConsole')", "Back to the console");
			break;
		}
		case "loadSerious": {
			document.getElementById('output').innerHTML += `
				<input type="text" id="indexSubmission" value="serious">
			`;
			modCharacter();
			break;
		}
		case "loadGhost": {
			var ghostLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "ghost") {
					console.log(name+' found already in the data variable, aborting function');
					ghostLoaded = true;
				}
			}
			if (ghostLoaded == false) {
				var newCharacter = {index: "ghost", fName: "Sadako", lName: "Yamamura", trust: 0, encountered: false, textEvent: "", met: false, color: "#2388ED", author: "Penguinthunder", artist: "Vanitas", textHistory: "", unreadText: false, gender: "female", };
				data.story.push(newCharacter);
				writeHTML(`
					im images/ghost/profile.jpg;
					sp ghost; ghostF ghostL has been added to the game!
				`);
			}
			else {
				writeText("ghostF has already been loaded.");
			}
			writeFunction("writeEncounter('gameConsole')", "Back to the console");
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "renamingRoom": {
			for (i = 0; i < data.story.length; i++) {
				writeMed("images/"+data.story[i].index+"/profile.jpg");
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
				writeFunction("resetProgress('"+data.story[i].index+"')", "Reset progress with "+data.story[i].fName);
			}
			writeFunction("renameEveryone()", "Rename characters");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "youwillcallme": {
			writeBig("scripts/gamefiles/characters/"+data.player.character+".jpg", "Art by Ishimura");
			writeText("You are <input type='text' id='nameSubmission' value='"+data.player.name+"'>");
			writeText("Those you've hypnotized call you <input type='text' id='nicknameSubmission' value='*Master'>");
			writeFunction("renameNickname()", "Continue");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "paperwork": {
			writeText("You can do paperwork here, earning some quick overtime cash based on your Counseling skill. Would you like to spend a few hours doing that?");
			writeFunction("loadEncounter('system', 'filing')", "Yes");
			writeFunction("changeLocation('playerOffice')", "No");
			break;
		}
		case "filing": {
			var moneyMade = 10 + data.player.counseling + data.player.counseling;
			passTime();
			data.player.money += moneyMade;
			updateMenu();
			writeText("You spent some time doing paperwork. It's a slow and boring job, but money is money after all. As a hypnotist aren't there better things to be doing though?");
			writeSpecial("You earned $" + moneyMade + "!");
			if (data.player.time != "Night") {
				writeFunction("changeLocation('playerOffice')", "Finish up");
			}
			else {
				writeFunction("changeLocation('playerHouse')", "It's getting late, head home");
			}
			break;
		}
		case "shopLoad": {
			writeFunction("loadEncounter('system','shop')", "test shop");
			break;
		}
		case "shop": {
			changeLocation('store');
			break;
		}
		case "nap": {
			passTime();
			changeLocation(data.player.location);
			break;
		}
		case "skillBooks": {
			updateMenu();
			writeHTML(`
				t It's not the most impressive of libraries, but it fits the school's atmosphere. There are a number of textbooks of all different types, but three catch your eye...
			`);
			if (checkFlag("mom", "lHypnos") != true) {
				writeFunction("loadEncounter('system', 'lHypnos')", "Read up on hypnosis");
			}
			if (checkFlag("mom", "lHack") != true) {
				writeFunction("loadEncounter('system', 'lHack')", "Read up on computer hacking");
			}
			if (checkFlag("mom", "lCoun") != true) {
				writeFunction("loadEncounter('system', 'lCoun')", "Read up on modern counseling techniques");
			}
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lHypnos": {
			writeHTML(`
				t You thoroughly read through the book on hypnosis. It's an older script, but the techniques are still useful. A section on 'sensitivity enhancement' is particularly interesting.
			`);
			writeSpecial("Your hypnosis skill has increased!");
			data.player.hypnosis += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lHack": {
			writeHTML(`
				t You thoroughly read through the book on hacking. It's an older script, but the techniques are still useful. A section on how to install system backdoors is particularly interesting.
			`);
			writeSpecial("Your hacking skill has increased!");
			data.player.hacking += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lCoun": {
			writeHTML(`
				t You thoroughly read through the book on counseling. It's an older script, but the techniques are still useful. A section on how improve your relationship with your employer is quite interesting.
			`);
			writeSpecial("Your counseling skill has increased! Since you're more talented, that obviously equates to a pay bump!");
			data.player.counseling += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "styleBooks": {
			writeHTML(`
				t The books here each have a different kind of visual flair, the selection is very chaotic.
				sp player; Interesting...
			`);
			writeFunction("loadEncounter('system', 'basicStyle')", "'The Basics - Written by Stiggy 752.'");
			writeFunction("loadEncounter('system', 'personaStyle')", "'Rebellion Against Rotten Adults - NoodleJacuzzi'");
			writeFunction("loadEncounter('system', 'royaltyStyle')", "'Chill Vaporwave Flows - NoodleJacuzzi'");
			writeFunction("loadEncounter('system', 'lobotomyStyle')", "'Lobotomization For Dummies - NoodleJacuzzi'");
			if (data.player.style == "persona") {
				writeFunction("loadEncounter('system', 'personaToggle')", "Toggle the funky UI font");
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			addFlag("mom", "style");
			//if (checkFlag("mom", "styleBooks") != true) {addFlag("mom", "styleBooks");}
			break;
		}
		case "personaToggle": {
			writeEncounter("styleBooks");
			if (checkFlag("mom", "personaOff") != true) {
				addFlag("mom", "personaOff");
				updateMenu();
				writeSpecial("Funky UI styling has been disabled!");
			}
			else {
				removeFlag("mom", "personaOff");
				updateMenu();
				writeSpecial("Funky UI styling has been enabled!");
			}
			break;
		}
		case "basicStyle": {
			data.player.style = "basic";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Basic' applied! Very special thank you to stiggy 752!");
			break;
		}
		case "personaStyle": {
			data.player.style = "persona";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Persona' applied!");
			if (data.player.gender == "man") {
				if (checkBody("joker") != true) {
					var goof = {index: "joker", artist: "Art by Shigenori Soejima",};
					data.bodytypes.push(goof);
					writeSpecial("The book's contents reminds you of the importance of freedom. You unlocked a new bodytype! Change via the wardrobe.");
				}
				else {
					goof = "null";
				}
			}
			else {
				if (checkBody("jokette") != true) {
					var goof = {index: "jokette", artist: "Art by gau aka ggg",};
					data.bodytypes.push(goof);
					writeSpecial("The book's contents reminds you of the importance of freedom. You unlocked a new bodytype! Change via the wardrobe.");
				}
				else {
					goof = "null";
				}
			}
			break;
		}
		case "royaltyStyle": {
			data.player.style = "royalty";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Royalty' applied!");
			break;
		}
		case "lobotomyStyle": {
			data.player.style = "lobotomy";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Lobotomy' applied!");
			break;
		}
		case "credits": {
			writeText("Incredible! Outstanding! You've reached one of Hentai University's endings!");
			writeText("This game was made by <a href='https://noodlejacuzzi.neocities.org/'>Noodle Jacuzzi</a> and <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek</a>. Hop on in to our <a href='https://discord.gg/pDht5BZ'>Discord</a> and let us know what you thought, we'd love to hear from you. You can also find a section dedicated to modding in there, maybe check that out? Be sure to show show your support for the members of the modding community of course if you do.");
			writeText("<hr>");
			writeCenteredText("<span style='font-size:300%;'>Special thanks to:</span>");
			writeSpecial("Stiggy752 for the game's CSS, Wild Bill/Master of Puppets for the game's save to file system, and to OrangeMaestro for his orange eyes helping find many of the typos that plagued this game. Other typo/bug-hunters I'd like to shout out are Atomic Goblin, Chomp, crnicu, DarkNico, DogsAreBetterThanCats, Dowee, Eintei, Goblin Boy, Master of Puppets, M M T, MustafaSerkan, Nico Fox, PancakeLoverAkechi, Papa Primus, Shbers, sinofsloth345, SlackerSavior, and all anonymous posters who posted bugs via the suggestion box. Thanks!");
			writeSpecial("And to @spectralworks_ for providing his art for a male version of hex maniac a ghost game reward!");
			writeText("<hr>");
			writeCenteredText("<span style='font-size:300%;'>And a huge thank you to all of my fantastic patrons:</span>");
			writeSpecial("Robbie, SlackerSavior, Here Not, Moony, Artemis McDaniel, Anthony Thompson, Gabriel Garcia, Victor Avila, Derek A Schroeder, PotatoCake, Jak, Chri, Justin mals, Joacho, Superzhul_HD, Kyo_Higanbana, Marcquest3, Habibi, Brendon Wrightson, Deus, David, Jason Budd, Justin Duyck, Pipsqueak, toby bowman, Jacob Lane, brodoe1, DRhost, Ben Nowak, Sergio Ramirez, A.X.J, Miner49r, simon, BlackKnight1945, Eylgar, Jesus Millan, Shaun, Supporter420, Novalis Silveratum, Stanley Cheong, Ripper, Bob, Rictor86, GoatBeards, Dezyego, Zane Dura, Na707, Devon McKenzie, Jazz, Selignite Verine, Christopher Fox, Panda, john, Maybenexttime, Xazzafrazz, Te Tule, Brian Graham, Manny Coutlakis, Yugo KUGA, mitchell cross, Danzema, LostSand, Ora494, Vikignir, Louts, Dylan, notornis, ArtemisAisu, Sealon, Brandon, that GUY, Elias, 4MinuteWarning, æž—å®¶è±ª, yami, jack spencer, Marco Wassmer, Badaxe, Justin Rinkema, Josh, R, Obi Santana, RiotÂ©_Â©, Eric, Theexplorer25, Toki, Wamboss, michael ramsay, Berger Lucas, scott, Anon, Sebastian Slinkard, Rikkmaery, PussySlayer69, John Willey, Ben Gale, Gabriel_the_wolf w, ThatRandomBystander, F.R.O.G., (K) Ham, Just_ Why, Yes No, Xander, Sky Seas, Asta A, Stebi Sanchez, itsme, Kristie, BlessingJester, Chase, Ben, Shark Mahoney, Bobissibob, KurimuzonAisu, BunyipInCorp Gaming, Jonathan, Antoni Alvarez, Ø¹Ù„ÙŠ Ø²ÙƒØ±ÙŠØ§, Sir BWM, Dozer20, Kevin Chang, MasterT941, Blake Sanders, Philipe Berube, Thatoneguy, Conrad Baker, Dan Lemard, Hummus, Nathan Brown, Travis Schulte, Gei_ Shippai, Mike Matthews, Feywolf24, VaultGuardian22, Andrew Kutis, Electric Peel, Jacob Young, jack spruce, Phaseus, clark diercks-lenn, Dawnsever, Ayo charlie, Al, Jon Gfsh, Kris H, kenneth garvin, JC, Danielf, Vashurima, brendan, Shirokage, Stonks, Lee Rigby, King Aries, Araxus, Yaboy2702284, jonesy1445, Lazarus Draken, Shadowwall123, Zratos, Satanbbad, Jose MuÃ±oz, G. O, Austin Hove, Patrick Buhalo, Neill R Toohey, Uncle, pepsi, Leon K, SmightySmiter, é™ˆ, ä»•ç§‘ ä½™, Crow The Frozen Shogun, MPZ_00, Grython, Max, WendigoAthdrivar, Lucas Laaksonen, matthew scarborough, Ryan Spindler-Hanowski, Tbnr Nuts, Hrasah, Johngoober, ClockZ -Tar-, cheeriermoss4, Ignorant Fool, nicol, Dan, beefboy, Evrett Varlan, Shadichaos, Jack Thompson, æ——æœ¨åƒ æ²’æœ‰, IDFK, Sean McKeon, None, James Petty, Pascal Nitsche, Marcus New, axzsd, ThatGuyWithTheFace, Candi-Stryper, Bob Sherran, Liam Connelly, Artheares, The Black Wolf, Bob, drollest foot892, Daddy Tsume, Hydrq, Ryan Towers, morgan hirst, The Frinky Dink Man, Lex Long, Nick Becker, Jack Masters, Jax Medema, john, Phillip A Brann, philthy, Blade, Jimboo, Zachary Webb, Demonin Koloman, abuse toast, dev, Thomas DeChon, Maxolution, Ville, BeatDem Cheeks, ren hero, Christian Lee, Anarion01, Jacob Atkins, meowy2, Ian Whitehead, Void Walker, Malachi Townsley, Mark Laner, Vault, legacy fletcher, unfading89, Konrad Tomanek, Tebachi, Dry_Garen, TCFish, Luke Lange, Squidy Cool Shoes, Lil boss, Divide, Cameron Chilton, buddy99, Dallas Wright, goi, gabriel briones, Joel Humphrey, Cdev57, Kyle Michael, Jesus millan Gonzalez, tyler wyser, fuckboi13, studly787, Nicholas Gerald, Nickson Schenk, sebastionLender, Youtube Account, Luis Orellana, Jamie, Fangrove, Asmo, dogsoneup, Michael Stone, Hyunsoo Lee, Big BNB, Jacob Damoiseaux, RidiculeCat, Damsolo14, asulus diablo, Max Bassiouni, Jaden Clark, Ard Galen, Omar Flores, Tired_Sup, BOK, Jamarion Blair, Snow, Ryker, tito, Shinikami, Nathaniel Grams, dalvin lopez, Dumcanem, Skygods, Henry Litten, Forde Wellman, sindre Elshaug, Alex, Shivane, Antoine Panaye, yjzyjz, Draconet547, kyle fenton, Juan Fernandez, qqss, Murray Anderson, raun q, sakkra83, ASSIRTIVlizard, Braedon Jasper, Callum Northedge, zafoche, asdf123, Kyle Jones, Yongjie Zhao, mahdeennave, è‡´è¿œ èˆ’, Dominic, Arkanian001, Neyafi, Cameron Farabee, Venomill, Zachary Schicker, J, Matthew Preston, DigiReave, FelloMello, Maxwell Dedmon, yannnan, Ary Toussaint, Sid Wolf, Lyko90, A Channel, joseph, dawson, Michael Graham, EgoDraconis, Petrichor, Justin, Sean sullivan, D'andre, David Outram, UziDoesIt, Ash mash, Calla Smith, Bastl, randol javier, Zach allen, Stan Manson, Carson Goodwin, Dragoon22, mitchellwolbert, xdrake100, undead270, ThatOtherGuy, Ashwinder, Storyteller, Minerve1, BINKS, Biblicallyaccuratepitbull, Genxin, Sean Morehead, Greatsage56 ., sb2017, john sparks, ggboomsky, CoolFlames, Bradley Herbert, SomebodyElse, Peter H, thesingleguy, Kethis Immortalis, Anton Schmidt, david thompson, Bleed1ngthunder, Eric Hslew, Vikteren, theoron, AnotherAccount333, Kaliden, Limitless, Geoff Heimos, Kieron Kow, Poison, AceSignus, ddkre, SmolFish, Harrison Russell Brasch, Markus Hansen, Leanerbike1363, Tanman, DarthMalak, Grim2011, Phanes, Scumstango, Dugelle, john smith, Your Husbando, Verillia tristari, ItsAllOgreNow, Jesse Greene, joe mulhall, joe, Jane, murgatroid99, Wild Bill, ChronosEdge, and brandon for funding this work! The patreon funds are split as Captain Cryptogreek has taken over as lead writer for the game.");
			writeText("<hr>");
			writeText("Thanks for playing! It'd really help to give feedback anywhere you can, either through a review or letting us know what you think. The game has an F95Zone thread <a href='https://f95zone.to/threads/hentai-university-v15-noodlejacuzzi.37312/'>HERE</a> and a hypnopics thread <a href='https://hypnopics-collective.net/smf_forum/index.php?topic=23881.0'>HERE</a>, and we also check the reddit threads posted for each release.");
			writeText("If you're shy though you can use this anonymous suggestion box <a href='https://forms.gle/ZrDFUzTu2f7pbVZe9'>HERE</a> to voice your thoughts!");
			writeFunction("changeLocation('playerHouse')", "Keep playing");
			writeText("<hr>");
			writeSpecial("Here's a list of authors who's written for the game:");
			writeSpeech("<a href = 'https://noodlejacuzzi.neocities.org/'>Noodle Jacuzzi</a>", "scripts/gamefiles/characters/noodle.jpg", "<b>Author of momF, Lana, tomgirlF, succubusF, and others.</b><br>I almost named myself Dwayne 'The Guac' Johnson.<br>Click my name to play my other games if you want.");
			writeSpeech("Cryptogreek", "scripts/gamefiles/characters/crypto.jpg", "<b>Author of kuroF, mistressF, maidF, mejiF, housekeepF, and others.</b><br>Thanks for enjoying the game my fellow degenerates!");
			writeSpeech("SlackerSavior", "scripts/gamefiles/characters/slacker.jpg", "<b>Author of sportsF, coachF, coldF, swimmerF, and orangeF.</b><br>I wanted to write 'Don't ask me for shit' here, but it felt a little too rude.<br>So feel free to ask, but don't expect results anytime soon.");
			writeSpeech("Ace", "scripts/gamefiles/characters/ace.jpg", "<b>Author of multiple mod characters accessible via the game console.</b><br>Ace here, finally made it to credits. Hope you enjoyed my characters too, feel free (actually obliged) to drop by Noodle’s discord and feed us some sweet, sweet reviews if you can, have a good day!");
			writeText("<hr>");
			listArtists();
			break;
		}
		case "porn0A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Lol what a stupid hat<br>Anonymous: Holy shit is that Angelica from Pop Pop girls?<br>Anonymous: Obviously not you fucking idiot, why would she be doing porn?<br>");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: You're living the life bro<br>Anonymous: Cat outfits are stupid (USER WAS BANNED FOR THIS POST)");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Isn't blackmail like this actually illegal?<br>Anonymous: Holy shit guys I think I go to the same school as her<br>Anonymous: Pics or it didn't happen");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-7.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Whoa holy shit is this a mod?<br>Anonymous: Sauce plz<br>Anonymous: Lurk moar dumbass<br>Anonymous: Is this actually programmed into the game?");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Wataya");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Nagi Ichi");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Master Maichin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "churchMorning": {
			if (data.player.location != scene) {
				randNum = getRandomInt(8);
				randNum += 1;
				data.player.dayID = randNum;
				console.log("Today's day ID is " + data.player.dayID);
				data.player.day += 1;
			}
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			data.player.time = "Morning";
			updateMenu();
			if (checkFlag("nunya", "nunya2") && checkFlag("blind", "blind2") && checkFlag("priest", "priest3") != true) {
				loadEncounter("priest", "priest3");
			}
			else {
				if (checkTrust("blind") == 80) {
					writeHTML(`
						t You lay down onto the bed. It faintly smells sweet, somehow. Hopefully it isn't perfumed with priestF's 'holy water' or something.
						t Still, your first day in the countryside has been pretty nice overall. Here's hoping the rest are just as peaceful.
						player Sleepytime... Zzz...
						t ...
						t You wake up to the sounds of birds chirping outside your window, and the sounds of femboy priests chirping outside your door.
						t You push the door open to greet your last remaining host.
						im images/priest/new - 058.jpg
						nunya So, this is the latest catch?
						priest Yes, nunyaF. An excellent find, of course! Revelation guided this lamb and *his gorgeous fleece to my city doorstep.
						player What on earth is the fleece in this metaphor?
						im images/priest/new - 059.jpg
						nunya Don't get stuck on his word choice, or we'll be here all day. nunyaF, senior priest here.
						priest Secondmost senior.<br>Ah, it's a wonderful feeling, to have the fruits of my labor mingle like this. 
						nunya I won't lie, *he's a decent catch. Good build, although *he could use a little moisturizer.
						im images/priest/new - 062.jpg
						nunya Still, *he looks pretty unassuming. Sexual stamina? Length? Oh, and girth, more importantly.
						priest All excellent. Full marks in every capacity.
						player Uh-
						im images/priest/new - 063.jpg
						nunya Mmm~<br>Excellent? Full marks?
						im images/priest/new - 064.jpg
						nunya Oh my oh my. I think we should maybe get to know each other a little then. You know, you slept through the morning sermon period, but I'm quite the theology expert. I could... Catch you up on some things.
						priest nunyaF, I believe you haven't said hello to blindF yet.
						nunya ... Good point. Man, you really know how to kill the mood, priestF. 
						priest To be fair you look ready to tear through your tights.
						nunya But not with my hands, ehehe~
						priest You should go, otherwise you'll walk in on blindF's morning image training.
						nunya Fine, fine. Hog his hog all to yourself for the morning. I swear, if blindF weren't so cute I'd slamfuck that liece of meat...
						t nunyaF walks off, muttering to herself, starting to walk bowlegged while giggling by the time she turns the corner.
						player ... Holy shit, you're the normal one here.
						priest In a perfect world I would be normal everywhere. That's what heaven is.
						player Riiiight.
						priest In any case, we have sermons in the morning. They last for an hour, I'll come get you so you don't miss them.
						player And if I decide to sleep in?
						priest Then blindF will cry. He won't hold it against you or do it openly of course, but he'll silently slip away to his room and sob into his pillow, careful to hold back the-
						player Alright! Geez, no wonder you were able to convince them to join your femboy church.
						priest Ehehe~<br>Well, I'm on morning garden duty today. Feel free to explore, or spend time with blindF or nunyaF. Or maybe you could visit little old me in the garden later?
						player Pfft, you're old news, pastor. I've got priests... Nuns? Nuns to seduce.
						priest Oh, my self esteem is in shambles~<br>Well, so long as I'm able to watch I don't mind~
					`);
				}
				else {
					writeHTML(`
						t The early morning arrives, and a knock at your door pulls you out from sleep into the land of the living.
						priest It's time for the morning sermon~!
						t ...
					`);
				}
				switch (checkTrust("blind")) {
					case 81: {
						writeHTML(`
							priest Members of the clergy, today I deliver unto you; revelation. We've discussed before what sort of tests our heavenly host might use to determine who is worthy of the hallowed grounds where angels tread, and I have discovered the answer.
							t blindF and nunyaF murmur in curiosity.
							priest I've taken your ideas to heart. It can't be a matter of faith, otherwise the angels would be unkind to the misguided. Unlikely. It can't be a matter chastity, otherwise the angels would be prudish. Impossible. THUS!
							t priestF swings his hand through the air for dramatic effect.
							priest I present to you the ultimate test even heaven surely relies upon! The shopping cart test! There is no obligation to return the cart, no punishment, there is only...
							t ...
							t After an hour of listening to priestF talk about how God judges people by whether they return their shopping carts, the morning sermon wraps up and the new day begins.
						`);
						break;
					}
					case 82: {
						writeHTML(`
							blind M-members of the clergy, for today's sermon I made this.
							t blindF holds up a slightly crumpled papercraft frog, placing it atop the speaker's podium.
							blind We'll have lots of time to learn and practice new skills once our work here is done, but I was thinking it would be nice to show the angels some crafts. S-so I asked priestF to bring some paper and...
							t ...
							t An hour of origami later, the morning sermon wraps and the day begins.
						`);
						break;
					}
					case 83: {
						writeHTML(`
							nunya Members of the esteemed clergy. Today I aim to ask, and answer through logical deduction, a simple question. Do angels wear shoes?
							t nunyaF pulls an old, worn-out blackboard and a well-used stick of chalk.
							nunya Let's cover the facts. We know that heaven has an endless hallway leading you wherever you'd like to go. We know heaven should be comfortable, and that there are some folks who pass away without clothes. Thus, we must conclude that the hallways of heaven are carpeted!
							t priestF and blindF let out soft "oooh"s and nod, transfixed.
							nunya However, carpeted floors would get sticky easily during sexual acts! Specifically, if I were unable to hold back outside of a room and began to rail an angel, or be railed myself, and one of us leaks all over the...
							t ...
							t After an hour of a very scientific presentation, the lecture wraps up, concluding that heaven must have either magical carpeting, infinitely productive maids, or shoes are provided on entry. With that, the sermon is over and the day begins.
						`);
						break;
					}
					case 84: {
						writeHTML(`
							priest Members of the clergy! Today, we are once again beset by a difficult question. One of us has been tempted recently by dark thoughts of dark thots. The counterpart to the grace above, the depravity below. I speak of course of... The temptation of the succubus (male).
							blind Oh my! It w-wasn't me!
							nunya Of course not, priestF just had a wet dream about 'purifying' a demon femboy again.
							priest Their identity shall remain anonymous! The point of today's lecture is to focus on preventative measures, to keep our hearts pure in preparation for the approaching rapture to angel boi paradise. I declare that we should aim to increase our afternoon masturbation timeslot!
							t ...
							t After an hour of debate over whether anal masturbation should replace the last five minutes of angel body image training, or the first five minutes of daily cardio workouts, the sermon wraps up and the new day begins.
						`);
						break;
					}
					case 85: {
						writeHTML(`
							blind H-hello members of the clergy. Today I'd like to talk about how heaven probably smells very nice. We talked about how it might smell like a person's favorite scent, but I was thinking that if it did, you couldn't have a good conversation about the smell. So...
							t blindF brings out a collection of air fresheners.
							blind I gathered up a few of these and thought they smelled really nice too. I realized while collecting them that if everything smelled like your favorite thing, then you'd miss out on scents you didn't know you liked...<br>Maybe we could bring these with us to heaven and help make rooms smell different?
							t ...
							t After an hour of comparing the benefits of a minty vs a vanilla tinge to heavenly air, the sermon wraps up and the new day begins.
						`);
						break;
					}
					case 86: {
						writeHTML(`
							nunya Alright clergy, it's time for a big question today. Today we're getting to the bottom of why angels used to be depicted as bizarre creatures that defy logical description, and if that's what they looked like, what might have caused the change to the vastly superior femboy image they have now.
							t nunyaF drops down a heavy binder notes onto the speaker's podium.
							nunya Now, I've done some research into the possibility of high rates of diagnosed schizophrenia among ancient priests, and how cultural perception of the divine may have shaped angelic body type preferences. But this has led me to an even more important question. If angels <i>are</i> influenced by human culture, how do we keep them from deciding to move away from their perfect, feminine frames?
							t ...
							t After an hour of debate on the theological bases of what 'wings' and 'rings of fire' might have been slang for thousands of years ago, the sermon wraps up concluding that whatever shape angels take next, all members of the clergy would still have sex with them provided they are still possible to be cuddled with afterwards. Thus, the new day begins.
						`);
						break;
					}
					case 87: {
						writeHTML(`
							priest Friends, clergy, the devout gathered here have been chosen for a divine mission. I believe it is finally time to renew our divine faith, and attempt to contact heaven once more. I understand any hesitancy, last time nunyaF had a minor panic attack comprehending the true nature of the universe, but I believe we've matured to the point that another attempt could be successful.
							t priestF hefts a mostly-full gallon jug labeled 'angel juice' onto the podium.
							priest As we all know, the last time I entered heaven I did so by consuming an entire gallon of narcotics. Given our financial limitations, I'm voting I take the plunge, and we have you three take notes...
							t ...
							t After an hour of... Something, the sermon is finished. Mostly. priestF is still mostly insensate and blindF and nunyaF are still taking notes of anything he manages to babble out. Thus, the new day begins.
						`);
						break;
					}
					case 88: {
						writeHTML(`
							blind Hello again clergy. Last night I had a dream where I was in a wheelchair being driven around by an angel. It was fun, so I was thinking that heaven should be wheelchair accessible. I know injuries are probably healed, and that sloth is something to be avoided, but it would still be nice for all the people who don't remember how to walk.
							t blindF pulls out a few sheets of paper.
							blind priestF helped me draw some pictures of my dream. I don't know if it was some kind of divine revelation, but it was really nice. If you think really hard about it you might have the dream too, so I'll try to remember some more of it...
							t ...
							t After an hour of blindF describing the feeling of the angel's hands patting his head from behind, the sermon wraps up and the new day begins.
						`);
						break;
					}
					case 89: {
						writeHTML(`
							nunya Alright clergy, today I did some thinking and it's time for us to really get to the bottom of what fashion trends are like in heaven. We've established that angels would probably think human clothes are adorable, and they have a preference for cute clothes themselves according to priestF's notes, so...
							t nunya pulls out a few sheets of paper and some rolls of fabric.
							nunya We need to settle this. Gothic lolita or french maid. Which is the dominant archetype? I've drawn up some reference images for us to compare, and I bought some cheap fabric so that blindF can weigh in on which might be the better texture. There's also the possibility that nurse uniforms could be a falling trend...
							t ...
							t After an hour of debate on whether gothic lolita is too heavily associated with the image of a fallen angel for it to be used as casual attire, the sermon eventually ends as the priests conclude that angels would definitely wear whatever you want them to if you ask nicely, and that both styles would look lovely on them. Thus, the new day begins.
						`);
						break;
					}
					case 90: {
						writeHTML(`
							priest Clergy! Today, my mind has been stricken blank by our heavenly host! Without a divinely inspired topic for today, I realize that our angelic voyeurs probably wish for us to sit in quiet contemplation, visualizing their perfect forms. Let us begin!
							t ... 
							t After an hour of perverted fantasization about angelic femboys, the 'sermon' is over and the priests all scatter for some quiet time alone. Thus, the new day begins.
						`);
						break;
					}
					case 91: {
						writeHTML(`
							blind H-hello again, clergy. Today I couldn't really think of a sermon, so instead I wrote down some notes on why I like hanging out with all of you. I can't read them, but writing them down helped me memorize them. So, first of all, I think you're all very nice...
							t ...
							t After about an hour of lovely compliments, ending with a discussion about how nice you smell, the sermon wraps up and the new day begins.
						`);
						break;
					}
					case 92: {
						writeHTML(`
							nunya Dutiful clergy, I'm still working on my primary thesis to get the nearby university of theology to accept the divine truth of femboy supremacy. Until then, I don't have anything proper prepared. So, today I'll just be reading some of my fanfiction.<br>*Ahem*<br>Divinely inspired by angelic dong, chapter...
							t ...
							t After an hour of a passionate dramatic reading of smut disguised as holy text, the sermon wraps up and the new day begins.
						`);
						break;
					}
				}
				raiseTrust("blind", 1);
				if (checkTrust("blind") == 93) {
					setTrust("blind", 90);
				}
			}
			writeHTML(`finish`);
			break;
		}
		case "countryStart": {
			writeHTML(`
				player This should be the right bus stop to get into the countryside. Man, it's great how public infrastructure here is so nice I can get a ride out to the sticks anytime I want. Expensive though...
				t <b>You can take a busride out into the country from the streets in the morning. Round trip tickets cost $15, and riding the bus will take up some time.</b>
				t <b>You'll need to find a place to sleep when you get there, and you won't be paid while off on vacation!</b>
				trans countryBusride; Take the bus to the countryside ?money 15;
				finish
			`);
			break;
		}
		case "countryBusride": {
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			if (data.player.money > 14) {
				data.player.money -= 15;
			}
			data.player.location = "countryStation";
			passTime();
			if (checkItem("invitation") == true) {
				removeItem("invitation");
				addItem("ticket", false, "scripts/gamefiles/items/ticket.jpg")
			}
			writeHTML(`
				t You pay for a ticket and take a busride out into the country.
				t Slowly, the air grows fresher and the mood around you grows somehow more relaxed. You're out of the big city now!
				finish
			`);
			break;
		}
		case "cityBusride": {
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			data.player.location = "street";
			passTime();
			writeHTML(`
				t You show the return ticket you bought and take a ride back into the city.
				t Slowly, the fresh country air you've gotten used to is replaced with the slightly stuffy scent of the big city. Time to hustle and bustle, you're back home!
				finish
			`);
			break;
		}
		default: {
			writeText("Broken! Error code: failed load encounter("+scene+")");
		}
	}
}

function wardrobeMouseOver(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(100%)"
}

function wardrobeMouseOut(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(50%)"
}

console.log('system.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEncounter(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			//writeFunction("changeLocation('playerHouse')", "Finish");
		}
		break;
	}
	case "check": {
		for (i = 0; i < encounterArray.length; i++) {
			if (encounterArray[i].location.includes(data.player.location)) {
				if (encounterArray[i].time.includes(data.player.time)) {
					if (encounterArray[i].itemReq != "") {
						if (checkItem(encounterArray[i].itemReq) == true) {
							if (encounterArray[i].type == "tab") {
								printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
							}
							else {
								printEncounterButton('system', encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
							}
						}
					}
					else {
					if (encounterArray[i].type == "tab") {
						printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
					}
						else {
							printEncounterButton('system', encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
						}
					}
				}
			}
		}
		break;
	}
	case "shop": {
		var shopItem = "";
		for (item = 0; item < newItems.length; item++) {
			console.log("generating item "+ item + ": " + newItems[item].name + newItems[item].description + newItems[item].image + newItems[item].price + newItems[item].key);
			if (newItems[item].price != 0) {
				if (newItems[item].key == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
							<p class = "shopName">`+newItems[item].name+`</p>
							<p class = "shopDesc">`+newItems[item].description+`</p>
							<p class = "shopPrice">$`+newItems[item].price+`</p>
							<img class ="shopImage" src="`+newItems[item].image+`">
						</div>
						<br>
					`;
				}
				else {
					if (checkItem(newItems[item].name) == false) {
						document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
								<p class = "shopName">`+newItems[item].name+`</p>
								<p class = "shopDesc">`+newItems[item].description+`</p>
								<p class = "shopPrice">$`+newItems[item].price+`</p>
								<img class ="shopImage" src="`+newItems[item].image+`">
							</div>
						<br>
						`;
					}
				}
			}
		}
		break;
	}
}

//Needs events for computer, wardrobe, textbooks, napping, and paperwork