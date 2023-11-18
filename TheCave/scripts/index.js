//Establish Variables
var totalCharactersLoaded = 0;
var imagesDisabled = false;
var requestType = "";
var tabIndex;
var randNum;
var activeWindow = "";
var savedLocations = {morning: "", evening: "",};
var galleryArray = [];
var itemArray = [];
var logbookArray = [];
var definitionArray = [];
var listOfPrintedEncounters = [];
var globalEncounterArray = [];
var globalEventArray = [];
var globalLogbookArray = [];
var globalAchievementArray = [];

var data = {
	player: {
		name: "",
		character: "player",
		currentCharacter: "system",
		currentScene: "start",
		location: "",
		time: "Morning",
		day: 1,
		money: 30,
		dayID: 1,
		pervert: false,
		color: "#86b4dc",
		style: "basic",
	},
	achievements: [
	],
	story: [
	],
	gallery: [
	],
	items: [
	],
	skills: [
	],
	bodytypes: [
		{index: "player"}
	],
	phoneImages: [
	],
}


var globalSceneArray = [
	{index: `system`, scenes: [
		{index: `start`, content: `
			eval document.getElementById("openButton").style.visibility = "hidden";
			eval data.player.style = "basic";
			eval loadEncounter("start");
		`,},
		{index: `intro1`, content: `
			im scripts/gamefiles/ui/titleFull.png;
			sp player; Test.
			button Start; changeLocation('pineconePlaza');
			eval openButton();
		`,},
	]},
];

function loadEncounter(scene) {
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
		writeHTML(`
			sp lalaland; Oh man, I sure do love stuff
			t Clearly, she loves stuff.
			define lalaland = sp lalaland;
			lalaland That is correct
		`);
		case "start" : {
			writeSpeech("player","","...Shit. It really is hers.");
			writeText("Adjusting the screen to avoid the midday glare at her back, she ran a third comparison despite already being sure.");
			writeText("When it returned as yet another positive match, she exhaled sharply through her teeth.");
			writeSpeech("player","","What the Hell were you doing here...?");
			writeText("The GeoMarker in front of her didn't have a message logged into it, but the hash matched Kaya's cyberware perfectly. There was no mistaking it.");
			writeSpeech("A","","Cyberware signature detected. Would you like to connect online to-");
			writeSpeech("player","","No, and stop asking.");
			writeText("A futile request, she knew, seeing as the new update took away the \"Stop requesting online functionality\" option, but at least it was cathartic.");
			writeText("Still...");
			writeSpeech("player","","Open the last saved message log between me and Kaya.");
			writeSpeech("A","","Opening now.");
			writeText("The virtualized HUD appeared in her vision as the log opened. The second-to-last message was marked as being almost ten months old...");
			writeText("And then, out of nowhere, a message of just gibberish and corrupted unicode characters, but with GeoNet info baked in sent just two nights ago.");
			writeText("The idea that it was some serial slicer that fucked up harvesting Kaya's cyberware came to mind, but... it didn't feel right. A message being sent out through an old forum's messaging system was too specific for some random fuckup.");
			writeText("It almost certainly wasn't a slicer, but if that's not it...");
			writeSpeech("player","","Damnit, Kaya... What the Hell happened...?");
			writeText("Standing at the Marker, it was at least clear where she'd gone next. Not even twenty meters away, a natural cave mouth stood in plain sight. Because of <b>course</b> it had to be underground...");
			writeSpeech("A","","Elevated heart rate detected. Would you like to administer-");
			writeSpeech("player","","Shut up.");
			writeText("A minute or so of slow, deep, controlled breathing helped solve that problem well enough, even if her BPM was still a <b>bit</b> higher than normal.");
			writeText("It took her longer than she'd like to admit to prepare herself, but...");
			writeFunction("loadEncounter('caveEntrance')", "Go inside");
			break;
		}
		case "caveEntrance" : {
			writeText("Her first steps into the cave were a bit uncomfortable, and not just because the almost claustrophic feeling of being surrounded on nearly all sides by unyielding stone.");
			writeText("Slick, wet moss squelched beneath her boots as she walked in, the sounds echoing unpleasantly in the damp and echoey tunnel. The temperature seemed to take a sharp nosedive after the first dozen or so meters too, hitting her with an uncharacteristic chill for what should be a midsummer day.");
			writeText("Pulling her jacket a bit tighter against her body with one hand, the other zipping it up with a similarly echoing noise, she kept moving forward steadily. When the stones beneath her feet start to sit at more and more jagged angles, she couldn't restrain a loud groan as she pushes a hand against the wall to support herself.");
			writeText("Unsurprisingly, the wall felt as disgusting as the floor sounded.");
			writeSpeech("player","","I am kicking your fucking <i>ass</i> when I find you...!");
			writeText("Muttering to herself all sorts of expletives and curses, more aimed at the cave than her friend, she kept moving for about eight minutes (according to her HUD's clock) before she finally came out to a wider, more open area in the caves.");
			writeText("Dropping a GeoMarker <b>immediately,</b> since the idea of getting lost and not having a waymark scared the loving piss out of her, she took a moment to start looking around with her phone's flashlight.");
			writeSpeech("player","","Huh... What the Hell is this thing...?");
			writeText("Some weird growth was spread along one of the walls of the cave, lengths of vine stuck to the surface with little dendrites growing off of the main structure. Snapping a few pictures real quick, and a quick image search later, and...");
			writeSpeech("player","","Wow. 'Some form of creeping ivy', eh? How absolutely unhelpful. Fuckin' AI...");
			writeText("Closing out camera mode, she gives the vine a wide berth, especially when she spots some tiny, gross, misshapen mushrooms along parts of it.");
			writeText("The cave structure is blissfully fairly linear, she notes, making it pretty difficult to get lost. Any time there <b>was</b> some kind of branching path, she dropped a GeoMarker just in case for the return trip.");
			writeText("Thirty-six minutes passed like that, carefully advancing through the winding cave and getting deeper and deeper underground. The chill along her body was only getting worse, but-");
			writeSpeech("A","","Surface temperature is lower than preregistered margin. Activate warming system? Additionally, heartrate has spiked sharp-");
			writeSpeech("player","","<font size='+2'><b>And guess who's fault THAT is!?</b></font>");
			writeText("Putting her hand on her chest to try and calm herself down from the jumpscare of that damn AI, she lets out a low sigh.");
			writeSpeech("player","","...Activate warming systems, yeah.");
			writeText("As her jacket started to heat up a bit, she let out a shuddering sigh of relief.");
			writeSpeech("player","","Fffuck, I'm glad I shelled out for the good one...");
			writeText("Rolling her shoulders a bit, she dropped another GeoMarker as she went, only to step forward and completely freeze in place.");
			writeText("The flashlight's beam fell right onto the haunches of <b>something</b> in the cave, and it took every bit of her willpower not to scream in shock. There should <b>NOT</b> be animals this deep in a cave, not sommething with legs like that, like maybe bats or something, but definitely not-");
			writeSpeech("A","","Target's body temperature is below acceptable levels for lupines. It's unlikely that the creature is alive.");
			writeText("Swallowing heavily, only half-believing the AI, she adjusted the flashlight a bit to look over the creature a bit more, and...");
			writeText("...it was definitely dead. It was definitely a bit small for your average wolf, and it's not like she could tell what kind it was, but considering how the body looked, it almost certainly starved to death days ago.");
			writeSpeech("player","","Damn... Poor thing must've gotten lost in here or something.");
			writeText("Scratching the back of her head a bit nervously, she takes a deep breath before sighing explosively, forcing her body to relax.");
			writeSpeech("player","","Sorry about this, but looks like I'll be using you as a landmark, Mr. Wolf.");
			writeText("Dropping yet another GeoMarker, and double-checking behind her to see that she can still see that last one, she slowly sidesteps the corpse to keep moving.");
			writeText("Only, as she does, she stops for a moment as she looks at the wolf in passing and sees something.");
			writeText("Some kind of hole in its back, like something went and clawed its way in. The ripped-up skin almost made her gag as she looks away.");
			writeSpeech("player","","G-Great... Probably some kind of really fuckin' hungry bat, I guess.");
			writeText("A quick sequence of orders later, and her cyberware administers some anti-nausea medication right into her body, and she can refocus on the task at hand.");
			writeText("Finally moving past the corpse, only a few minutes of travel pass before she's ready to drop yet another marker as she enters into a new section of the cave.");
			writeFunction("loadEncounter('cave2')", "Drop one and look around");
			break;
		}
		case "cave2" : {
			writeText("The first thing that comes to mind while looking around is \"foggy\". The cave suddenly opened into a much bigger area, though how big she had no way to gauge. She could still see at least five or six meters ahead of her pretty well, but after that, it became damn near impossible to make out any details.");
			writeText("The weirder part, though, was that she could see those several meters even without her phone's light. Something was giving off light in there, enough light to keep the whole place visibly lit up even as the fog seemed to disperse it so completely that she had no idea where the source of the light could be.");
			writeText("Pocketing her phone, she bit her lip as she started to move forward more. Somehow, the space felt even more claustrophic than the tighter stone hallways she left behind, and there was something about this whole place that was setting her teeth on edge.");
			writeSpeech("player","","Hey. Send a backup-log of the markers so far, would'ja?");
			writeText("Better safe than sorry, after all. Best to keep the data safe-");
			writeSpeech("A","","Upload failed.");
			writeSpeech("player","","...Excuse me?");
			writeSpeech("A","","Upload failed. There is no Net access available at this location.");
			writeText("An icy feeling shot through her stomach at that, an uncomfortable feeling sinking in.");
			writeSpeech("player","","Try again. We're supposed to be covered everywhere in the country, it shouldn't be failing-");
			writeSpeech("A","","Upload failed. Would you like to diagnose the problem?");
			writeSpeech("player","","Of fu<i><b>ckING COURSE I DO!</b></i>");
			writeText("Her shout echoed throughout the entire open cavern, bouncing back around her and only making the anxiety worse.");
			writeSpeech("A","","The signal can be sent from your cyberware, but is either not being received, or the confirmation signal for reception is failing to arrive. Please be sure that no systems, devices, or constructs are interfering with signal reception or transmission.");
			writeSpeech("player","","...Fuck, it's the stone, isn't it?");
			writeText("Penetrating normal stone should be easy for modern tech, but if there are any kinds of minerals that would absorb the signal or bounce it weirdly, like with those products that're supposed to make things impenetrable...");
			writeSpeech("player","","That... sucks. But at least it make sense.");
			writeText("Running a hand through her hair, she carefully sets another marker down.");
			writeSpeech("player","","Can't turn back here... Not without seeing <i>something,</i> at least.");
			writeText("Whispering that to herself, she takes a slow, deep breath... and keeps on moving.");
			writeText("At least, until-");
			writeSpeech("A","","[Abnormal levels of 「」 detected.]");
			writeSpeech("player","","Abnormal levels of <i>what?</i>");
			writeSpeech("A","","[Abnormal levels of 「」 detected.]");
			writeText("The sound of grinding teeth is nearly audible as she runs both of her hands through her hair now, desperately trying to keep her cool.");
			writeText("Running a full diagnostic, she looked over it, and...");
			writeSpeech("player","","...Nothing.");
			writeText("No signs of radiation, or electromagnetic disturbance, or any kinds of chemicals. No signs of powerderized minerals that could be inhaled, nothing about any detected parasites, literally <b>nothing</b> worth noting about the entire environment.");
			writeSpeech("player","","And of <i><b>course</b></i> they lock the detailed log files behind their proprietary software. Because why wouldn't they.");
			writeText("Frustrated, she continues stomping forward with a grimace even as she wraps her arms around her chest, the jacket not feeling like quite enough within the chilly fog.");
			writeText("And to top it off, the GeoMarker's effective distance was getting shorter, something that set her nerves on fire.");
			writeText("They should be good for distances of up to 600 meters, but they were lasting barely 100 now. Dropping them closer and closer together was the only choice now.");
			writeSpeech("A-","","[Elevated levels of 「」 detected. Proceed with caution.]");
			writeText("The grimace twitches into a sneer for a moment.");
			writeSpeech("player","","Oh yeah, I'll be very cautious about the <i>nothing</i>, ya damn piece of proprietary refuse.");
			writeText("On the upside, at least the change in phrasing must mean the situation's changing too...");
			writeFunction("loadEncounter('cave3')", "Reach the bottom of the fog");
			break;
		}
		case "cave3" : {
			writeText("Reaching the bottom is a very sharp, very sudden moment. One step forward, and suddenly, the fog breaks.");
			writeText("Stone walls almost feel welcoming compared to the cloying tightness of the impenetrable fog. Almost.");
			writeText("The fog forms a wall to her sides and back, but in front of her stands something almost like a structure. It's far too rough to be anything but naturally occuring, yet...");
			writeSpeech("player","","It's like an archway...");
			writeText("The warped cracks surrounding the tall hole, rounded near the top and just barely wide enough for a person to fit if they squeezed in tight, seemed to frame this breakage almost like an entrance, like an invitation.");
			writeText("But through the arch, through that oepning, was Nothing. Not just an emptiness, like a barren room, but a full and true absence of anything at all. Even calling it dark wasn't fair to it - it was like the light itself died the moment it passed the threshold, the kind of deep and infinite blackness that refused to be known. That refused her eyes entirely.");
			writeText("Just looking into it was nauseating, overwhelming the medication in her blood as if she'd never taken it. Her head screamed at her not to go in, begged her not to, and in that single moment staring into the archway, she was ready to leave. She'd even taken the first step backwards, almost falling into that fog as she tried to get away.");
			writeSpeech("A","","Message received from nearby GeoMarker.");
			writeText("And then she froze again.");
			writeSpeech("player","","It... can't.");
			writeText("Her breathing hitched as she opened it. Sure, the contents were indecipherable gibberish, but that didn't matter.");
			writeText("She nearly bit through her lip when it came back positive.");
			writeText("The message came with Kaya's hash. It came from Kaya.");
			writeText("Somehow, sometime, she went down there.");
			writeText("Kaya was down there.");
			writeText("And she might still be.");
			writeSpeech("A--","","Proceed through the crumbling wall.");
			writeSpeech("player","","Shut... up.");
			writeText("It was hard to think, hard to <b>breathe</b> right now, her head spinning as she grasped her arms around her chest and tried to calm down somehow.");
			writeSpeech("A","","Abnormally high heartrate de-");
			writeSpeech("player","","SHUT UP!");
			writeText("Another moment of echoed shouting filled her ears, a silence only settling after the last whispers of her shout finished.");
			writeText("But when it did finish, she knew what she had to do.");
			writeFunction("loadEncounter('cave4')", "Proceed into the darkness");
			break;
		}
		case "cave4" : {
			writeText("The GeoMarker wasn't far. If there was one bit of solace to be had in the darkness, it's that the marker's effective distance was almost back to normal.");
			writeText("If the transmission issues were being caused by mineral deposits in the stone interfering, then perhaps that meant that going deeper would mean being able to connect to the Net again.");
			writeSpeech("player","","H-Hell, maybe that's how she sent the m-message...");
			writeText("Teeth chattering from a far, far deeper cold than she'd experienced before, she kept whispering to herself.");
			writeSpeech("player","","If... If I get d-deep enough, I can send the logs... Call a f-friend, maybe...?");
			writeText("Shutting her eyes tight between steps, she says, in a bit firmer of a voice,");
			writeSpeech("player","","Increase heating levels to the jacket. It's too damn col-");
			writeSpeech("A-","","Functionality unavailable. Proceed with caution.");
			writeSpeech("player","","S-Shit... Too cold for it, maybe...?");
			writeSpeech("A---","","[Extreme levels of 「」 detected. Don't stop here.]");
			writeSpeech("player","","I wasn't g-gonna, dickhead...");
			writeText("She took another slow, deep breath... before wondering something.");
			writeText("Since when was the machine allowed to give her orders? They're programmed to only provide suggestions, not-");
			writeText("Her thoughts are sharply interrupted as she takes another step forward, and feels far too late that the ground wasn't flat enough.");
			writeText("The start of that sickening, weightless sensation had her focus tearing away from almost everything, save for two idle thoughts.");
			writeText("The first was that she could've pulled out her light. She could've shined it at the ground, could've seen this coming. Why hadn't that occurred to her? Why did the idea of shining a light in here scare her so much she pushed even the idea out of her mind?");
			writeText("The second was that, seeing a solitary green dot no more than a dozen meters away, she'd almost made it to the GeoMarker. Did it have an uncorrupted copy of the message she'd received before coming in? What was it that Kaya had tried to transmit from that marker?");
			writeText("In the end, it didn't matter.");
			writeText("After only a few moments of weightless falling, she felt her head hit something on her way down. Somewhow, the darkness of unconsciousness felt welcoming compared to the abyss around her, and she could even relax into the blackness behind her eyelids as she fell.");
			writeFunction("loadEncounter('cave4-1')", "Fall");
			break;
		}
		case "cave4-1" : {
			writeFunction("loadEncounter('cave4-2')", "Fall further");
			break;
		}
		case "cave4-2" : {
			writeFunction("loadEncounter('cave4-3')", "Fall even further");
			break;
		}
		case "cave4-3" : {
			writeFunction("loadEncounter('cave5')", "Wake up");
			break;
		}
		case "cave5" : {
			writeText("Waking up was jarring. Unlike getting up from sleep, everything slammed into the forefront of her mind the instant she could think.");
			writeText("Confusion made up her first thoughts, following by panic as she realized she couldn't see, before finally settling down (but only barely) when she remembered where she was.");
			writeText("Activating her HUD, she ran another diagnostic, hoping desperately that her cyberware wasn't damaged in the fall.");
			writeText("When everything came up green on that end, she exhaled sharply in relief. On top of no damage to the hardware, the first-aid functions even managed to close the gash on her head while she was out.");
			writeText("The fact that there was no more bleeding was relieving to her, but... then she read further, and her blood froze completely.");
			writeText("Her leg was badly damaged. Several breaks in the bone from an awkward landing, and the only thing keeping it from bleeding her dry was the same first aid functions keeping her head shut.");
			writeText("She couldn't help but try to look up and back to maybe gauge how far she must've fallen, hoping that maybe it was short enough to get back up with her leg like this... but she chastised herself a moment later.");
			writeText("The darkness made it impossible to see anything. There was no chance at all that she could make it out of here like that. She didn't even know which direction she fell in, even - not when she couldn't even see a centimeter in front of her own face.");
			writeSpeech("A","","You have 643 unread notifications.");
			writeText("She doesn't even have the energy to jump in shock at the sudden message. They were probably diagnostic warnings anyw-");
			writeSpeech("A-","","You need to keep going.");
			writeText("Her eyes locked to them as they started auto-playing.");
			writeSpeech("A--","","Don't stop here.");
			writeSpeech("A---","","Crawl past the ruptured barricades.");
			writeSpeech("A-","","You can't return alone.");
			writeSpeech("A---","","You could be just like Mr. Wolf.");
			writeSpeech("A--","","You mustn't melt here.");
			writeText("Hundreds upon hundreds of messages from the AI, all things like this. It shouldn't be possible - the crash must be causing a malfunction. A quick check should-");
			writeText("The diagnostic returns clean. There's nothing wrong.");
			writeSpeech("A---","","There's nothing wrong here.");
			writeText("She swallows thick saliva, quivering in fear and cold.");
			writeSpeech("A---","","You know.");
			writeText("She tries to open her mouth, tries to respond or order the AI-");
			writeSpeech("A---","","<i><b>You know.</b></i>");
			writeText("But she can't. She can't reject it, can't fight it.");
			writeText("The machine can't order her... except if it determines she's in danger.");
			writeText("So it must be helping her, right?");
			writeText("\"Right\", she tells herself silently, and begins to crawl.");
			writeText("The impenetrable darkness feels like a hand around her throat as she moves, and she even tries to pull out her phone in the hopes of lighting up, even as the terror in her stomach of what is there almost makes her drop it.");
			writeText("But when it simply reads \"Application disabled\", she can't bring herself to question it, simply dropping it as she keeps trying to crawl.");
			writeText("The smoothstone beneath her, colder than ice and nearly as hard to grasp, is far from comforting. But when she crawls far enough, she wonders what it is she moved onto - what replaced the stone.");
			writeText("The first feeling was almost like fuzz. A brushy-feeling substance like moss, moist and unpleasant and sickening in both sound and sensation, but for a small mercy, it at least wasn't quite so cold.");
			writeText("The second substance was much rougher. Sharper, jagged, like the bark of a tree flayed and laid out, a sharp feeling carving into her arms in a way that may have hurt once. But now, she could hardly feel it, barely able to process it as she crawled.");
			writeText("The thid sensation was something in between the first two, and for a time was entirely unidentifiable. The ground was smooth again, with a cloying just-barely-sticky feeling of coiling cords. It wasn't like rope, feeling more like some kind of plastic, warping just barely under the pressure of her weight. She felt this feeling for the longest time of them all, crawling for eternity before idly thinking that the feeling was like touching too-thick, too-gummy networking cables beneath her.");
			writeText("The last <b>thing</b> she crawled across, one she felt for what she couldn’t imagine had been longer than a few minutes, was so foreign that there was nothing she could compare it to. There was too much bend and give in it to be like stone, far too smooth to be like bark, and it completely lacked the vague smooth-grit that she associated with plastic. There were some elements that felt like laying against the skin of another person, but it stretched too much to be like skin. Yet, undeniably, she knew that the vague pulsing warmth within it reminded her too much of a heartbeat to push the thoughts of flesh away.");
			writeText("When she reached the next sensation, she realized that, in her panic, she’d been crawling so fast to try and get off that last material that she hadn’t even noticed the changes around her.");
			writeText("She could see something in the distance, right at the top of her vision. A brief flash of relief surged through her, the ability to see something, anything giving her a sense of directionality, feeling almost like it affirmed the very gravity of her form.");
			writeFunction("loadEncounter('cave6')", "Look up");
			break;
		}
		case "cave6" : {
			writeText("She rolled over enough to look up, barely cognizant of the vague pain in her leg as she did so, and her breath spilled out from her chest in a dull exhalation of wonder.");
			writeText("She was looking at the stars.");
			writeText("Brilliant, luminant dots of light twinkling in an inky darkness as deep as the one she’d crawled through, looking to her eyes almost like a painting of a flowing galaxy looking down upon her with cosmic beauty.");
			writeText("Time had no meaning to her, then. It fell away in the abyss, as so many things had already. Her mind barely even processed the impossibility of stars, that they had to be some kind of glowing stone studding a distant ceiling. She paid even less mind to the thought that they were far more distant than any ceiling should have been, that no matter how far she’d fallen, it was impossible to be this far down.");
			writeText("But impossibilities or logic, the plausible and the meaning of realism, all fell away as it felt almost like her breath threatened to never return to her starstruck body. But then, her HUD flashed.");
			writeSpeech("A---","","Extreme levels of 「」 detected at waymark. Keep going.");
			writeText("Her attention was pulled from the starstudded sky as a marker appeared to the side in her vision.");
			writeSpeech("player","","Ah...");
			writeText("She slowly rolls over again, her stomach pressing against another texture, another material that she couldn’t seem to recognize.");
			writeSpeech("player","","I see.");
			writeText("She starts moving, a haze settling over her.");
			writeText("Was this the path to go even deeper?");
			writeText("Was the thing that defied definition the sign that she was getting closer?");
			writeText("Were higher levels a good thing? Or a warning?");
			writeText("Her mind felt stuffed with questions, yet she didn’t think of any answers, only crawling forward more and more.");
			writeText("A notification on the side of her vision flashed, a warning of some kind from the diagnostic system, but she couldn’t look away from the waymark. It even read distance, now, like a GeoMarker. Maybe it is a GeoMarker, she thinks. Maybe she found Her.");
			writeText("Her mouth opens to call out, syllables of a familiar name tumbling out from reflex, even as she fails to recognize the name she was speaking.");
			writeText("When she reached the waymark, she felt it. The texture changed, and there could be no denying it.");
			writeText("Her hand touched the flesh of another human being again, and the pleasure of such a simple sensation was too much as tears started streaming down her face.");
			writeText("More warnings appear on the sides of her HUD, but she can’t focus on that, can’t focus on anything. She can’t even feel those familiar cables moving.");
			writeText("When she finally notices them, she doesn’t even try to kick them off. She keeps holding tight to the skin, to the beating warmth of someone, even as her mind disassociates.");
			writeText("The cables feel warm too, and she lets them circle around her, lets it start to push into her. The broken skin along her leg is the first entry point, but even the undamaged flesh provides no significant resistance. The lines dividing her body begin to disappear, the warmth inside and the cold outside failing to separate the within and without any longer.");
			writeText("The BCI throws more errors and warnings of abnormal brain chemical levels, of unrecognized wetware interfacing, of something flowing through the cables into her skin and bones and blood and organs and she simply cannot care. The more that she falls away into the warmth of cable and loses herself in the contact of flesh, the more she can see again. A warning flashes in front of her, something about sending unauthenticated messages from her cyberware, but it means nothing to her. She can see the faces in the dark, now, and that’s all that matters.");
			writeText("And as the final message is sent out, containing the coordinate data for the GeoNet Marker at the mouth of the cave, she experiences the bliss of being another face in the dark.");
			writeFunction("loadEncounter('ending')", "The End.", "red");
			break;
		}
		case "ending" : {
			writeText("Thank you very much for reading this story! Hopefully you had a good time with it.");
			writeText("This game was made by <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek</a> with an engine created by <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a>. Hop on in to our <a href='https://discord.gg/pDht5BZ'>Discord</a> and let us know what you thought - we'd love to hear from you!");
			writeText("<hr>");
			writeSpecial("<span style='font-size:150%;'>Special thanks to Stiggy752 for the engine's CSS, and to JerryTerry for making \"Kiss Me (Kill Me)\", which made me want to write something horror-themed.</span>");
			writeText("If you want to restart the story from the start, just hit refresh.");
			break;
		}
		default: {
			writeText("Broken! Error code: failed load encounter("+scene+")");
		}
	}
}

var coreCharactersArray = [
	//{index: "mayor", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: ""},
	/*
	{index: "shopkeep", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: ""},
	{index: "carpenter", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: ""},
	{index: "wolf", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "female"},
	{index: "sadogato", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "female"},
	{index: "milf", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "female"},
	{index: "nun", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "female"},
	{index: "mesu", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "male"},
	{index: "purple", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "male"},
	{index: "doe", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "male"},
	{index: "rabbit", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "male"},
	{index: "mommy", flags: "", fName: "Angelica", lName: "", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: "female"},
	{index: "test", flags: "", fName: "Player", lName: "Jones", trust: 0, encountered: false, author: "NoodleJacuzzi", gender: ""},
	*/
];

//Core System Functions
function startup() {
	wrapper.scrollTop = 0;
	writeScene('system', 'start');
}

function writeScene(characterIndex, sceneIndex) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	if (sceneIndex == undefined) {
		sceneIndex = characterIndex;
		if (data.player.currentCharacter !== undefined) {
			characterIndex = data.player.currentCharacter;
		}
		else {
			data.player.currentCharacter = "system";
		}
	}
	let character = globalSceneArray.find(s => s.index === characterIndex);
	if (!character) {
		return "character not found";
	}
	
	let scene = character.scenes.find(c => c.index === sceneIndex);
	if (!scene) {
		writeSpeech("player", "", "Error! You must've called the wrong scene. Error code: Failed to write scene ("+sceneIndex+") in "+characterIndex+".js");
		return "scene not found";
	}
	
	writeHTML(scene.content);
}

//Text modification functions
function replaceCodenames(text) {
	var codenameCheck = "";
	for (geminiLoop = 0; geminiLoop < 5; geminiLoop++) {
		for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
			if (data.story[codenameIndex].index == "bmom") {
				text = text.replace("bmomF", data.story[codenameIndex].fName);
				text = text.replace("bmomL", data.story[codenameIndex].lName);
			}
		}
		if (data.player.nickname != null) {
			text = text.replace('*Master', data.player.nickname);
			text = text.replace('*master', data.player.nickname);
		}
		text = text.replace('playerF', data.player.name);
		text = text.replace('playerGender', data.player.gender);
		text = text.replace('playerG', data.player.gender);
		text = text.replace('playerMan', data.player.gender);
		text = text.replace('playerTitle', data.player.title);
		text = text.replace('playerT', data.player.title);
		text = text.replace('playerMister', data.player.title);
		text = text.replace('playerHonorific', data.player.honorific);
		text = text.replace('playerH', data.player.honorific);
		text = text.replace('playerSir', data.player.honorific);
		switch (data.player.gender) {
			case "man": {
				text = text.replace("*he", "he");
				text = text.replace("*He", "He");
				text = text.replace("*HE", "HE");
				text = text.replace("*bastard", "bastard");
				text = text.replace("*Bastard", "Bastard");
				text = text.replace("*BASTARD", "BASTARD");
				text = text.replace("*his", "his");
				text = text.replace("*His", "His");
				text = text.replace("*HIS", "HIS");
				text = text.replace("*men", "men");
				text = text.replace("*Men", "Men");
				text = text.replace("*MEN", "MEN");
				text = text.replace("*man", "man");
				text = text.replace("*Man", "Man");
				text = text.replace("*MAN", "MAN");
				text = text.replace("*him", "him");
				text = text.replace("*Him", "Him");
				text = text.replace("*HIM", "HIM");
				text = text.replace("*boy", "boy");
				text = text.replace("*Boy", "Boy");
				text = text.replace("*BOY", "BOY");
				text = text.replace("*guy", "guy");
				text = text.replace("*Guy", "Guy");
				text = text.replace("*GUY", "GUY");
				text = text.replace("*mister", "mister");
				text = text.replace("*Mister", "Mister");
				text = text.replace("*MISTER", "MISTER");
				text = text.replace("*sir", "sir");
				text = text.replace("*Sir", "Sir");
				text = text.replace("*SIR", "SIR");
				text = text.replace("*male", "male");
				text = text.replace("*Male", "Male");
				text = text.replace("*MALE", "MALE");
				text = text.replace("*geezer", "geezer");
				text = text.replace("*Geezer", "Geezer");
				text = text.replace("*GEEZER", "GEEZER");
				text = text.replace("*master", "master");
				text = text.replace("*Master", "Master");
				text = text.replace("*MASTER", "MASTER");
				text = text.replace("*father", "father");
				text = text.replace("*Father", "Father");
				text = text.replace("*FATHER", "FATHER");
				text = text.replace("*daddy", "daddy");
				text = text.replace("*Daddy", "Daddy");
				text = text.replace("*DADDY", "DADDY");
				break;
			}
			case "woman": {
				text = text.replace("*he", "she");
				text = text.replace("*He", "She");
				text = text.replace("*HE", "SHE");
				text = text.replace("*bastard", "bitch");
				text = text.replace("*Bastard", "Bitch");
				text = text.replace("*BASTARD", "BITCH");
				text = text.replace("*his", "her");
				text = text.replace("*His", "Her");
				text = text.replace("*HIS", "HER");
				text = text.replace("*man", "woman");
				text = text.replace("*Man", "Woman");
				text = text.replace("*MAN", "WOMAN");
				text = text.replace("*men", "women");
				text = text.replace("*Men", "Women");
				text = text.replace("*MEN", "WOMEN");
				text = text.replace("*him", "her");
				text = text.replace("*Him", "Her");
				text = text.replace("*HIM", "HER");
				text = text.replace("*boy", "girl");
				text = text.replace("*Boy", "Girl");
				text = text.replace("*BOY", "GIRL");
				text = text.replace("*guy", "girl");
				text = text.replace("*Guy", "Girl");
				text = text.replace("*GUY", "GIRL");
				text = text.replace("*mister", "miss");
				text = text.replace("*Mister", "Miss");
				text = text.replace("*MISTER", "MISS");
				text = text.replace("*sir", "ma'am");
				text = text.replace("*Sir", "Ma'am");
				text = text.replace("*SIR", "MA'AM");
				text = text.replace("*male", "female");
				text = text.replace("*Male", "Female");
				text = text.replace("*MALE", "FEMALE");
				text = text.replace("*geezer", "hag");
				text = text.replace("*Geezer", "Hag");
				text = text.replace("*GEEZER", "HAG");
				text = text.replace("*master", "mistress");
				text = text.replace("*Master", "Mistress");
				text = text.replace("*MASTER", "Mistress");
				text = text.replace("*father", "mother");
				text = text.replace("*Father", "Mother");
				text = text.replace("*FATHER", "MOTHER");
				text = text.replace("*daddy", "mommy");
				text = text.replace("*Daddy", "Mommy");
				text = text.replace("*DADDY", "MOMMY");
				break;
			}
		}
		for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
			codenameCheck = data.story[codenameIndex].index + "F";
			text = text.replace(codenameCheck, data.story[codenameIndex].fName);
			codenameCheck = data.story[codenameIndex].index + "L";
			text = text.replace(codenameCheck, data.story[codenameIndex].lName);
		}
	}
	if (data.player.uwu == true && text.includes('onclick') == false) {
		for (uwuLoop = 0; uwuLoop < 30; uwuLoop++) {
			text = text.replace('<br>', "TESTTHING");
			text = text.replace('th', "d");
			text = text.replace('Th', "D");
			text = text.replace('what', "wat");
			text = text.replace('What', "Wat");
			text = text.replace('l', "w");
			text = text.replace('r', "w");
			text = text.replace('L', "W");
			text = text.replace('R', "W");
			text = text.replace('TESTTHING', "<br>");
		}
		switch (getRandomInt(15)) {
			case 0:
				text = text + " ♥w♥";
			break;
			case 1:
				text = text + " (˘ω˘)";
			break;
			case 2:
				text = text + " (U ᵕ U❁)";
			break;
			case 3:
				text = text + " ( ˊ.ᴗˋ )";
			break;
			case 4:
				text = text + " ( ͡o ꒳ ͡o )";
			break;
			case 5:
				text = text + " ( ´ω` )۶";
			break;
			case 6:
				text = text + " OwO";
			break;
			case 7:
				text = text + " (*ฅ́˘ฅ̀*)";
			break;
			case 8:
				text = text + " ( ͡o ᵕ ͡o )";
			break;
			case 9:
				text = text + " ✧･ﾟ: *✧･ﾟ♡*(ᵘʷᵘ)*♡･ﾟ✧*:･ﾟ✧";
			break;
			case 10:
				text = text + " ★⌒ヽ(˘꒳˘ *)";
			break;
			case 11:
				text = text + " (◕ ˬ ◕✿)";
			break;
			case 12:
				text = text + " (◕∇◕✿)";
			break;
			case 13:
				text = text + " (ꈍ ᴗ ꈍ✿)";
			break;
			case 14:
				text = text + " (◕‸ ◕✿) *pout*";
			break;
			case 15:
				text = text + " (≖ ︿ ≖ ✿)";
			break;
		}
	}
	text = text.replace('<spooky>', "<span style='font-family:spooky;'>");
	text = text.replace('</spooky>', "</span>");
	return text;
}

function cullRequirements(string) {
	while (string.includes("!location ") == true) {
		var check = string.split(`!location `).pop().split(`;`)[0];
		string = string.replace(`!location `+check+`;`, ``);
	}
	while (string.includes("?location ") == true) {
		var check = string.split(`?location `).pop().split(`;`)[0];
		string = string.replace(`?location `+check+`;`, ``);
	}
	while (string.includes("!item ") == true) {
		var check = string.split(`!item `).pop().split(`;`)[0];
		string = string.replace(`!item `+check+`;`, ``);
	}
	while (string.includes("?item ") == true) {
		var check = string.split(`?item `).pop().split(`;`)[0];
		string = string.replace(`?item `+check+`;`, ``);
	}
	for (skillTarget = 0; skillTarget < data.skills.length; skillTarget++) {
		var corruptionTarget = data.skills[skillTarget].name;
		while (string.includes("?skill "+corruptionTarget) == true) {
			var check = string.split(`?skill `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`?skill `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("!skill "+corruptionTarget) == true) {
			var check = string.split(`!skill `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`!skill `+corruptionTarget+` `+check+`;`, ``);
		}
	}
	if (string.includes("?skill") == true) {
		finalResult = false;
	}
	while (string.includes("!hypnosis ") == true) {
		var check = string.split(`!hypnosis `).pop().split(`;`)[0];
		string = string.replace(`!hypnosis `+check+`;`, ``);
	}
	while (string.includes("?hypnosis ") == true) {
		var check = string.split(`?hypnosis `).pop().split(`;`)[0];
		string = string.replace(`?hypnosis `+check+`;`, ``);
	}
	while (string.includes("!money ") == true) {
		var check = string.split(`!money `).pop().split(`;`)[0];
		string = string.replace(`!money `+check+`;`, ``);
	}
	while (string.includes("?money ") == true) {
		var check = string.split(`?money `).pop().split(`;`)[0];
		string = string.replace(`?money `+check+`;`, ``);
	}
	while (string.includes("!hacking ") == true) {
		var check = string.split(`!hacking `).pop().split(`;`)[0];
		string = string.replace(`!hacking `+check+`;`, ``);
	}
	while (string.includes("?hacking ") == true) {
		var check = string.split(`?hacking `).pop().split(`;`)[0];
		string = string.replace(`?hacking `+check+`;`, ``);
	}
	while (string.includes("!counseling ") == true) {
		var check = string.split(`!counseling `).pop().split(`;`)[0];
		string = string.replace(`!counseling `+check+`;`, ``);
	}
	while (string.includes("?counseling ") == true) {
		var check = string.split(`?counseling `).pop().split(`;`)[0];
		string = string.replace(`?counseling `+check+`;`, ``);
	}
	while (string.includes("!time ") == true) {
		var check = string.split(`!time `).pop().split(`;`)[0];
		string = string.replace(`!time `+check+`;`, ``);
	}
	while (string.includes("?time ") == true) {
		var check = string.split(`?time `).pop().split(`;`)[0];
		string = string.replace(`?time `+check+`;`, ``);
	}
	while (string.includes("?flag player ") == true) {
		var check = string.split(`?flag player `).pop().split(`;`)[0];
		string = string.replace(`?flag player `+check+`;`, ``);
	}
	while (string.includes("!flag player ") == true) {
		var check = string.split(`!flag player `).pop().split(`;`)[0];
		string = string.replace(`!flag player `+check+`;`, ``);
	}
	while (string.includes("?ghost ") == true) {
		var check = string.split(`?ghost `).pop().split(`;`)[0];
		string = string.replace(`?ghost `+check+`;`, ``);
	}
	while (string.includes("!ghost ") == true) {
		var check = string.split(`!ghost `).pop().split(`;`)[0];
		string = string.replace(`!ghost `+check+`;`, ``);
	}
	while (string.includes("?parity") == true) {
		var check = string.split(`?parity `).pop().split(`;`)[0];
		string = string.replace(`?parity `+check+`;`, ``);
	}
	while (string.includes("?gender") == true) {
		var check = string.split(`?gender `).pop().split(`;`)[0];
		string = string.replace(`?gender `+check+`;`, ``);
	}
	while (string.includes("!gender") == true) {
		var check = string.split(`!gender `).pop().split(`;`)[0];
		string = string.replace(`!gender `+check+`;`, ``);
	}
	while (string.includes("?trust ") == true) {
		var check = string.split(`?trust`).pop().split(`;`)[0];
		string = string.replace(`?trust`+check+`;`, ``);
	}
	while (string.includes("!trust ") == true) {
		var check = string.split(`!trust`).pop().split(`;`)[0];
		string = string.replace(`!trust`+check+`;`, ``);
	}
	while (string.includes("?trustMin ") == true) {
		var check = string.split(`?trustMin`).pop().split(`;`)[0];
		string = string.replace(`?trustMin`+check+`;`, ``);
	}
	while (string.includes("?trustMax ") == true) {
		var check = string.split(`?trustMax`).pop().split(`;`)[0];
		string = string.replace(`?trustMax`+check+`;`, ``);
	}
	while (string.includes("?flag ") == true) {
		var check = string.split(`?flag`).pop().split(`;`)[0];
		string = string.replace(`?flag`+check+`;`, ``);
	}
	while (string.includes("!flag ") == true) {
		var check = string.split(`!flag`).pop().split(`;`)[0];
		string = string.replace(`!flag`+check+`;`, ``);
	}
	return string;
}

//Scene writing
function writeHTML(text) {
	//Separate the text into lines
	var lines = text.split('\n');
	//For each of these lines
	for(var lineCounter = 0;lineCounter < lines.length;lineCounter++){
		//Remove all tabs from the line, in case we use tab spacing
		while (lines[lineCounter].includes('\t') == true) {
			lines[lineCounter] = lines[lineCounter].replace(`\t`, ``);
		}
		while (lines[lineCounter].charAt(0) == " ") {
			lines[lineCounter] = lines[lineCounter].substring(1);
		}
		//If the line is not empty (we don't want to print empty lines)
		if (lines[lineCounter] != "") {
			//Grab the first word of the line to use as the command
			var command = lines[lineCounter].replace(/ .*/,'');
			//Depending on which command, execute different code. Convert the command to lowercase as well in case we used Sp instead of sp, as js is case-sensitive.
			
			for (i = 0; i < definitionArray.length; i++) {
				if (command.toLowerCase() == definitionArray[i].shortcut) {
					lines[lineCounter] = lines[lineCounter].replace(definitionArray[i].shortcut, definitionArray[i].result);
				}
				//console.log("Shortcut replaced, line is now "+lines[lineCounter]);
			}
			var command = lines[lineCounter].replace(/ .*/,'');
			switch (command.toLowerCase()) {
				case "define": {
					//Remove the command from the line we actually want to print.
					var definitionShortcut = lines[lineCounter].split(`define `).pop().split(` = `)[0];
					lines[lineCounter] = lines[lineCounter].replace(`define `+definitionShortcut+` = `, ``);
					var definitionResult = lines[lineCounter];
					var overWrite = false;
					for (i = 0; i < definitionArray.length; i++) {
						if (definitionArray[i].shortcut == definitionShortcut) {
							overWrite = true;
							definitionArray[i].shortcut = definitionShortcut;
							definitionArray[i].result = definitionResult;
						}
					}
					if (overWrite == false) {
						var definition = {shortcut: definitionShortcut, result: definitionResult};
						definitionArray.push(definition);
					}
					console.log("Now writing definition statement, using shortcut "+definitionShortcut+" for result "+definitionResult+", overwrite value is "+overWrite);
					break;
				}
				//If the command is "t"
				case "t": {
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `, ``);
					//Execute the writeText command to print everything left to the screen.
					if (checkRequirements(lines[lineCounter]) == true) {
						writeCenteredText(lines[lineCounter]);
					}
					//Don't execute any of the below switch cases.
					break;
				}
				case "special": {
					lines[lineCounter] = lines[lineCounter].replace(command+` `, ``);
					writeText("<span class='special'>"+lines[lineCounter]+"</span>");
					break;
				}
				case "bg": {
					//Get the location of the image
					var location = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					if (
						location.includes("/") != true) {
						location = data.player.scenario+"/"+location
					}
					if (
						location.includes(".png") != true && 
						location.includes(".jpg") != true) {
						location += ".png";
					}
					if (location.includes("images/") != true) {
						location = "images/"+location;
					}
					document.getElementById('background').src = location
					//writeImage(location);
					break;
				}
				case "sp": {
					//Get the name of our speaker
					var name = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; altName" is in our code we want to use an alternate name for the character, so use that. Otherwise set the altName variable blank.
					if (lines[lineCounter].includes("; altName")) {
						var altName = lines[lineCounter].split(`altName `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altName `+altName+`; `, ``);
					}
					else {
						var altName = "";
					}
					//If "; altColor" is in our code we want to specify a specific color for the character, so use that. Otherwise set the altColor variable blank.
					if (lines[lineCounter].includes("; altColor")) {
						var altColor = lines[lineCounter].split(`altColor `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altColor `+altColor+`; `, ``);
					}
					else {
						var altColor = "";
					}
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `+name+`; `, ``);
					//If "; im" is in our code we want to specify a specific profile image, so use that. Otherwise set the image variable blank so it can be automatically found.
					if (lines[lineCounter].includes("im ") && lines[lineCounter].includes(".jpg;") || lines[lineCounter].includes(".png;")) {
						var image = lines[lineCounter].substring(
							lines[lineCounter].indexOf("im ") + 3, 
							lines[lineCounter].indexOf("; ")
						);
						lines[lineCounter] = lines[lineCounter].replace(`im `+image+`; `, ``);
					}
					else {
						var image = "";
					}
					//Execute the writeSpeech command to print everything we have left.
					if (checkRequirements(lines[lineCounter]) == true) {
						if (activeWindow != "phone") {
							writeSpeech(name, image, cullRequirements(lines[lineCounter]), altName, altColor);
						}
						else {
							writePhoneSpeech(name, image, cullRequirements(lines[lineCounter]));
						}
					}
					break;
				}
				case "im": {
					//Get the location of the image
					var location = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; cap" is in our code we want to attach a caption to our image. Otherwise leave the caption blank.
					if (lines[lineCounter].includes("; cap")) {
						var caption = lines[lineCounter].split(`cap `).pop().split(`;`)[0];
					}
					else {
						var caption = "";
					}
					//Bring up the image on screen. Since we aren't printing the line itself we don't need to clean it by removing commands.
					if (checkRequirements(lines[lineCounter]) == true) {
						if (activeWindow != "phone") {
							writeBig(location, caption);
						}
						else {
							writePhoneImage(location, caption);
						}
					}
					break;
				}
				case "trans": {
					//Get the label of our button
					var target = lines[lineCounter].split(`trans `).pop().split(`;`)[0];
					var name = lines[lineCounter].replace(`trans `+target+`;`, ``);
					//If "; arg" is in our code we want the function to have a special argument. Otherwise leave the argument section blank
					if (checkRequirements(lines[lineCounter]) == true) {
						if (lines[lineCounter].includes("name ") && lines[lineCounter].includes(";")) {
							name = lines[lineCounter].split(`name `).pop().split(`;`)[0];
						}
						else {
							name = cullRequirements(name);
						}
						if (activeWindow != "phone") {
							writeFunction("writeEncounter('"+target+"')", name);
						}
						else {
							writePhoneTrans(target, name);
						}
					}
					break;
				}
				case "cancel": {
					if (checkRequirements(lines[lineCounter]) == true) {
						writeFunction("writeEncounter('cancel')", "Go Back");
					}
					break;
				}
				case "finish": {
					if (checkRequirements(lines[lineCounter]) == true) {
						writeFunction("changeLocation(data.player.location)", "Finish");
					}
					break;
				}
				case "raisetrust": {
					var character = lines[lineCounter].split(`raiseTrust `).pop().split(`;`)[0];
					var trust = lines[lineCounter].replace(`raiseTrust `+character+`; `, ``);
					//console.debug("Trying to add "+trust+" to "+character+"'s trust value");
					while (trust.charAt(0) == " ") {
						trust = trust.substring(1);
					}
					if (checkRequirements(trust) == true) {
						trust = cullRequirements(trust);
						raiseTrust(character, parseInt(trust));
					}
					break;
				}
				case "addtrust": {
					var character = lines[lineCounter].split(`addTrust `).pop().split(`;`)[0];
					var trust = lines[lineCounter].replace(`addTrust `+character+`; `, ``);
					//console.debug("Trying to add "+trust+" to "+character+"'s trust value");
					while (trust.charAt(0) == " ") {
						trust = trust.substring(1);
					}
					if (checkRequirements(trust) == true) {
						trust = cullRequirements(trust);
						raiseTrust(character, parseInt(trust));
					}
					break;
				}
				case "settrust": {
					var character = lines[lineCounter].split(`setTrust `).pop().split(`;`)[0];
					var trust = lines[lineCounter].replace(`setTrust `+character+`; `, ``);
					//console.debug("Trying to add "+trust+" to "+character+"'s trust value");
					while (trust.charAt(0) == " ") {
						trust = trust.substring(1);
					}
					if (checkRequirements(trust) == true) {
						trust = cullRequirements(trust);
						setTrust(character, parseInt(trust));
					}
					break;
				}
				case "addflag": {
					var character = lines[lineCounter].split(`addFlag `).pop().split(`;`)[0];
					var flag = lines[lineCounter].replace(`addFlag `+character+`; `, ``);
					while (flag.charAt(0) == " ") {
						flag = flag.substring(1);
					}
					if (checkRequirements(flag) == true) {
						addFlag(character, cullRequirements(flag));
					}
					break;
				}
				case "removeflag": {
					var character = lines[lineCounter].split(`removeFlag `).pop().split(`;`)[0];
					var flag = lines[lineCounter].replace(`removeFlag `+character+`; `, ``);
					while (flag.charAt(0) == " ") {
						flag = flag.substring(1);
					}
					if (checkRequirements(flag) == true) {
						removeFlag(character, cullRequirements(flag));
					}
					break;
				}
				case "button": { // button NAME; f FUNCTION; arg SPECIAL ARGUMENTS;
					//Get the label of our button
					var name = lines[lineCounter].split(`button `).pop().split(`;`)[0];
					//Get the function we want our button to perform
					var func = lines[lineCounter].split(`; `).pop().split(`;`)[0];
					//Write the button to the screen using the information we've collected.
					if (checkRequirements(lines[lineCounter]) == true) {
						writeFunction(func, name);
					}
					break;
				}
				case "dual": {
					//dual sp1 miko; sp2 itako; im1 images/miko/miko.jpg; im2 images/itako/itako.jpg; altColor1 #A368A5; altColor2 #A34E32; Hello!
					if (checkRequirements(lines[lineCounter]) == true) {
						//Obtain the first name
						var name1 = lines[lineCounter].split(`sp1 `).pop().split(`;`)[0];
						//Obtain the second name
						var name2 = lines[lineCounter].split(`sp2 `).pop().split(`;`)[0];
						
						
						//Check for alternate images
						if (lines[lineCounter].includes("; im1")) {
							var altImage1 = lines[lineCounter].split(`im1 `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`im1 `+altImage1+`; `, ``);
						}
						else {
							var altImage1 = "";
						}
						if (lines[lineCounter].includes("; im2")) {
							var altImage2 = lines[lineCounter].split(`im2 `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`im2 `+altImage2+`; `, ``);
						}
						else {
							var altImage2 = "";
						}
						
						//Check for alternate colors
						if (lines[lineCounter].includes("; altColor1")) {
							var altColor1 = lines[lineCounter].split(`altColor1 `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`altColor1 `+altColor1+`; `, ``);
						}
						else {
							var altColor1 = "";
						}
						if (lines[lineCounter].includes("; altColor2")) {
							var altColor2 = lines[lineCounter].split(`altColor2 `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`altColor2 `+altColor2+`; `, ``);
						}
						else {
							var altColor2 = "";
						}
						
						//Remove the names, leaving only the line we want to print
						lines[lineCounter] = lines[lineCounter].replace(command+` sp1 `+name1+`; sp2 `+name2+`;`, ``);
						
						writeDual(name1, altImage1, name2, altImage2, cullRequirements(lines[lineCounter]), altColor1, altColor2);
					}
					break;
				}
				case "bar": {
					//bar Fitness; im images/neet/gymT.png; progress 41; maximum 100;
					if (checkRequirements(lines[lineCounter]) == true) {
						var title = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`bar `+title+`; `, ``);
						
						var img = lines[lineCounter].split(`im `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`im `+img+`; `, ``);
						
						var progress = lines[lineCounter].split(`progress `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`progress `+progress+`; `, ``);
						
						if (lines[lineCounter].includes("maximum ")) {
							var maximum = lines[lineCounter].split(`maximum `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`maximum `+maximum+`; `, ``);
						}
						else {
							var maximum = 100
						}
						writeBar(img, title, progress, maximum);
					}
					break;
				}
				case "eval": {
					var code = lines[lineCounter].split(`eval `).pop().split(`;`)[0];
					eval(code)
					break;
				}
				case "passtime": {
					if (checkRequirements(lines[lineCounter]) == true) {
						passTime();
					}
					break;
				}
				//This is for convenience. If the line is just an elipses, replace it with a horizontal line cutting across the screen.
				case "...": {
					writeText("<hr>");
					break;
				}
				//If the command isn't found in the list above then the code can't be parsed (understood), print an error code in red.
				default: {
					writeText("<span style='color:red'>Unknown command. The line '"+lines[lineCounter]+"' could not be parsed.");
				}
			}
		}
	}
}

//Scene writing - plain text
function writeText (text) {
	if (text == "...") {
		text = "<hr>";
	}
	text = cullRequirements(text);
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='lobotomyText'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
				<p class='lobotomyText'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
				<p class='lobotomyText'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='rawText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeSpecial (text) {
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='specialText' style='
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class = "specialText">` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

//Scene writing - dialogue
function writeSpeech (name, img, text, altName, altColor) {
	//What is printed may not actually be the name and img declared above, so establish the final variables that are printed to the screen.
	var finalName = name;
	var finalImg = "";
	var finalColor = "#FFFFFF";
	
	//If the name is player, use the player's details
	if (name == "player") {
		finalImg = "scripts/gamefiles/profiles/" + data.player.character + ".png";
		finalName = data.player.name;
		switch (data.player.color) {
			case null:
			case "":
				data.player.color = "#86b4dc"
			break;
			default:
				finalColor = data.player.color;
		}
	}

	if (name == "A") {
		//finalImg = "scripts/gamefiles/profiles/" + data.player.character + ".png";
		finalName = data.player.name;
		finalColor = "#8d8d8d";
	}

	if (name == "A-") {
		//finalImg = "scripts/gamefiles/profiles/" + data.player.character + ".png";
		finalName = data.player.name;
		finalColor = "#87726d";
	}

	if (name == "A--") {
		//finalImg = "scripts/gamefiles/profiles/" + data.player.character + ".png";
		finalName = data.player.name;
		finalColor = "#84574d";
	}

	if (name == "A---") {
		//finalImg = "scripts/gamefiles/profiles/" + data.player.character + ".png";
		finalName = data.player.name;
		finalColor = "#7e473b";
	}
	
	//If the name is a character's codename, fill in the details
	const characterInStory = data.story.find(character => character.index === name);

	if (characterInStory) {
		finalName = characterInStory.fName;
		finalColor = characterInStory.color;

		if (img === "") {
			finalImg = `images/${name}/${name}.png`;
		}
	}
	
	if (img == "none") {
		finalImg = "images/none.png";
	}
	
	//Check if an alternate final color should be used.
	if (altColor != null && altColor != "") {
		finalColor = altColor;
	}
	//Check if an alternate final name should be used.
	if (altName != null && altName != "") {
		finalName = altName;
	}
	
	if (data.player.egg == true && name == "player") {
		text = eggyLines[Math.floor(Math.random() * eggyLines.length)];
		finalImg = "scripts/gamefiles/profiles/egg.jpg";
	}
	
	console.log("Now printing "+finalName+" with the image "+finalImg+"");
	var dialogueContainer = document.createElement("div");
	dialogueContainer.classList.add("dialogueContainer");
	dialogueContainer.classList.add(data.player.style);
	var thumbnailContainer = document.createElement("div");
	thumbnailContainer.classList.add("thumbnailContainer");
	thumbnailContainer.classList.add(data.player.style);
	var thumbnailBorder = document.createElement("div");
	thumbnailBorder.classList.add("thumbnailBorder");
	thumbnailBorder.classList.add(data.player.style);
	var thumbnailImage = document.createElement("img");
	thumbnailImage.classList.add("thumbnailImage");
	thumbnailImage.classList.add(data.player.style);
	var nameContainer = document.createElement("div");
	nameContainer.classList.add("nameContainer");
	nameContainer.classList.add(data.player.style);
	var nameContent = document.createElement("p");
	nameContent.classList.add("nameContent");
	nameContent.classList.add(data.player.style);
	var textContainer = document.createElement("div");
	textContainer.classList.add("textContainer");
	textContainer.classList.add(data.player.style);
	var textBorder = document.createElement("div");
	textBorder.classList.add("textBorder");
	textBorder.classList.add(data.player.style);
	var textContent = document.createElement("div");
	textContent.classList.add("textContent");
	textContent.classList.add(data.player.style);

	thumbnailImage.src = finalImg;

	dialogueContainer.appendChild(thumbnailContainer);
		thumbnailContainer.appendChild(thumbnailBorder);
			thumbnailBorder.appendChild(thumbnailImage);
		thumbnailContainer.appendChild(nameContainer);
			nameContainer.appendChild(nameContent);
	dialogueContainer.appendChild(textContainer);
		textContainer.appendChild(textBorder);
			textBorder.appendChild(textContent);

	switch (data.player.style) {
		case "lobotomy": {
			dialogueContainer.style.borderColor = finalColor;
			thumbnailContainer.style.backgroundColor = finalColor;
			
			var dialogueName = document.createElement("p");
			dialogueName.classList.add("textName");
			dialogueName.classList.add(data.player.style);
			dialogueName.style.color = finalColor;
			dialogueName.innerHTML = finalName;
			textContent.appendChild(dialogueName);
			thumbnailContainer.removeChild(nameContainer);
			break;
		}
		case "royalty": {
			nameContainer.style.borderColor = finalColor;
			
			nameContent.style.color = finalColor;
			nameContent.innerHTML = finalName;
			
			textBorder.style.borderColor = finalColor;
			
			var thumbnailShadow = document.createElement("img");
			thumbnailShadow.classList.add("thumbnailImage");
			thumbnailShadow.classList.add("royalty");
			thumbnailShadow.src = finalImg;
			//thumbnailBorder.appendChild(thumbnailImage);
			thumbnailShadow.style.position = "absolute";
			thumbnailShadow.style.filter = `drop-shadow(2px 2px 0 `+finalColor+`) drop-shadow(-5px -5px 0 `+finalColor+`)`;
			thumbnailShadow.style.webkitFilter = `drop-shadow(2px 2px 0 `+finalColor+`) drop-shadow(-2px -2px 0 `+finalColor+`)`;
			thumbnailBorder.insertBefore(thumbnailShadow, thumbnailImage);
			break;
		}
		case "persona": {
			thumbnailContainer.style.boxShadow = `0px 5px `+finalColor;
			
			thumbnailContainer.removeChild(nameContainer);
			textBorder.insertBefore(nameContainer, textContent);
			
			nameContent.style.color = finalColor;
			nameContent.innerHTML = finalName;
			
			textContent.style.borderColor = finalColor;
			
			var textNameWhite = document.createElement("div");
			textNameWhite.classList.add("textNamePersonaWhite");
			textNameWhite.style.borderColor = finalColor;
			nameContainer.appendChild(textNameWhite);
			
			var textNameBlack = document.createElement("div");
			textNameBlack.classList.add("textNamePersonaBlack");
			nameContainer.appendChild(textNameBlack);
			
			var textNameArrow = document.createElement("div");
			textNameArrow.classList.add("personaNameArrow");
			nameContainer.appendChild(textNameArrow);
			
			var textNameArrowShadow = document.createElement("div");
			textNameArrowShadow.classList.add("personaNameArrowShadow");
			textNameArrowShadow.style.borderRightColor = finalColor;
			nameContainer.appendChild(textNameArrowShadow);
			break;
		}
		case "syrup": {
			var dialogueName = document.createElement("p");
			dialogueName.classList.add("textName");
			dialogueName.classList.add(data.player.style);
			dialogueName.innerHTML = finalName;
			textContent.appendChild(dialogueName);
			
			var dialogueDivider = document.createElement("img");
			dialogueDivider.src = "scripts/gamefiles/ui/dialogueSeparator.png";
			dialogueDivider.classList.add("dialogueDivider");
			dialogueDivider.classList.add(data.player.style);
			textContent.appendChild(dialogueDivider);
			
			var dialogueBackground = document.createElement("img");
			dialogueBackground.src = "scripts/gamefiles/ui/dialogueHearts.png";
			dialogueBackground.classList.add("dialogueBackground");
			dialogueBackground.classList.add(data.player.style);
			textContent.appendChild(dialogueBackground);
			
			thumbnailContainer.removeChild(nameContainer);
			break;
		}
		default: {
			dialogueContainer.style.borderColor = finalColor;
			thumbnailContainer.style.borderColor = finalColor;
			
			var dialogueName = document.createElement("p");
			dialogueName.classList.add("textName");
			dialogueName.classList.add(data.player.style);
			dialogueName.style.color = finalColor;
			dialogueName.innerHTML = finalName;
			textContent.appendChild(dialogueName);
			thumbnailContainer.removeChild(nameContainer);
		}
	}
			
	var dialogueText = document.createElement("p");
	dialogueText.innerHTML = replaceCodenames(text);
	textContent.appendChild(dialogueText);
	document.getElementById('output').appendChild(dialogueContainer);
}

//Scene writing - misc
function writeBar(img, title, progress, cap) {
	if (cap == null) {
		cap = 100;
	}
	document.getElementById('output').innerHTML += `
		<div class="textBox" style="border-bottom:none; padding:0px;">
			<img class = "textThumb" src = "
				`+img+`">
			<div class="textBoxContent">
				<p class = "textName" style = "margin:15px;">`+title+`</p>
				<div class="progressBar" style="background-color: #565656;border-radius: 13px;padding: 3px;">
					<div style="background-color: orange;width: `+progress+`%;height: 20px;border-radius: 10px;"></div>
				</div>
				<p class = "textName" style = "margin:15px;">`+progress+` / `+cap+`</p>
			</div>
		</div>
	`;
}

function writeFunction (name, func, color) {
	if (color == null) {
		color = "#FFFFFF";
	}
	switch (color) {
		case "blue":
			color = "#B7BDFF"
		break;
		case "red":
			color = "#FF0019"
		break;
		case "green":
			color = "#00FF1D"
		break;
	}
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="` + name + `"
		style = "border-bottom: 3px solid `+color+`; color: `+color+`"
		>
			` + replaceCodenames(func) + `
		</p>
	`;
}