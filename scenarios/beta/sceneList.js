var scenarioInformation = {index: "beta", author: "Noodle Jacuzzi"};
 
function writeScenarioScene(scene) {
	console.log("Now writing scenario scene ID " + scene);
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	switch(scene) {
		case "start": {
			writeText("Whether this is your first or seventh time, the experience will be indistinguishable. Welcome, playerF.");
			writeSpeech("Mission: Beta Vault", "scripts/gamefiles/logo.png", "A vault has gone silent and is seemingly empty, and while most of the employees have escaped or been evacuated, the chairwoman remains somewhere inside.<br> Available artifacts: CEO Pass and Skeleton Key. You'll need access to at least one of them in order to begin the mission.");
			if (galleryCheck("passResearch1") == true) {
				writeSpeech("CEO Pass", "scripts/gamefiles/items/pass.jpg", "A small passcard typically used as a key. It was produced by an organization known as Seltsame Industries. When shown to someone it will rewrite their sense of self to make them act as an 'assistant' to whoever possesses the pass.");
				writeScenarioTransition("passSelection", "Take the CEO Pass");
			}
			writeSpeech("Skeleton Key", "scripts/gamefiles/items/key.jpg", "An artifact originating from Civil-War era America. Possesses abnormal unlocking powers such as being able to disable lock & pin based security on touch. Even locking mechanisms not designed for keys can be opened.");
			writeScenarioTransition("keySelection", "Take the Skeleton Key");
			removeFlag("succubusMet");
			removeFlag("succubusEnslaved");
			removeFlag("lockdownEnded");
			removeFlag("darkFlooded");
			removeFlag("doorOpen");
			removeFlag("passChosen");
			removeFlag("keyChosen");
			data.player.artifact1 = "bracelet";
			data.player.artifact2 = "";
			writeTransition("work", "Cancel and go back");
			break;
		}
		case "quit": {
			data.player.artifact1 = "bracelet";
			data.player.artifact2 = "";
			writeScene("work");
			break;
		}
		case "passSelection": {
			data.player.artifact1 = "pass";
			addFlag("passChosen");
			writeScenarioScene("summoningJeeves");
			break;
		}
		case "keySelection": {
			data.player.artifact1 = "key";
			addFlag("keyChosen");
			writeScenarioScene("summoningJeeves");
			break;
		}
		case "summoningJeeves": {
			if (data.player.artifact1 == "pass") {
				writeText("You take the CEO Pass and slip it into your pocket. While it won't help with electronic systems it'll help if you meet any of the staff. Hopefully if the prison's been breached it'll come in handy.");
			}
			if (data.player.artifact1 == "key") {
				writeText("You take the Skeleton Key and slip it into your pocket. It should give you full access to the vault's sealed chambers.");
			}
			writeSpeech("player", "", "I need a ride.");
			writeText("You hang up and before your phone is even in your pocket a familiar looking car comes around the corner. It stops for you and the back door swings open.");
			writeText("You climb inside and from the driver's seat Jeeves gives you a wave in the rear-view mirror.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "The beta vault, sir?");
			writeSpeech("player", "", "Yep. No rush.");
			writeText("You relax in your leather seat as the car chugs along.");
			writeScenarioTransition("missionBriefing", "Review the mission briefing dossier");
			writeScenarioTransition("artifactBriefing", "Review the dark vault artifacts briefing dossier");
			writeScenarioTransition("jeevesProposition", "Proposition Jeeves");
			writeScenarioTransition("vaultArrival", "Nap until you arrive at the beta vault");
			break;
		}
		case "missionBriefing": {
			writeText("Mission Name: Beta Vault Extraction");
			writeText("Vault Status: Total Breach, Low Risk, Rescue/Evacuation Authorized for VIPs");
			writeText("Notable High Risk Entities Contained: Valentina-32, Nursing Staff. Do not engage under any circumstances.");
			writeSpeech("player", "", "Man, not a lot to go on.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Perhaps they are taking advantage of your familiarity with your own workplace?");
			writeSpeech("player", "", "They're taking advantage of something alright.");
			writeScenarioTransition("artifactBriefing", "Review the dark vault artifacts briefing dossier");
			writeScenarioTransition("jeevesProposition", "Proposition Jeeves");
			writeScenarioTransition("vaultArrival", "Nap until you arrive at the beta vault");
			break;
		}
		case "artifactBriefing": {
			writeBig("scripts/gamefiles/items/charity.jpg");
			writeText("Code Name: Charity's Cage");
			writeText("Containment Status: Unknown");
			writeText("An artifact of unknown origin and composition. Only dangerous to subjects when both a male and female subject are present and interacting with the artifact.");
			writeText("Result: Obtain and confine to dark vault, low priority");
			writeBig("scripts/gamefiles/items/handMirror.jpg");
			writeText("Code Name: Perfectly Ordinary Dayz Are Reviewed");
			writeText("Containment Status: Unknown");
			writeText("An artifact created via the same means as the Antique Mirror. Currently set to the reality designated 'Perfectly Ordinary Dayz Are Reviewed'. Use of the mirror reveals highly confidential research data.");
			writeText("Result: Obtain and confine to dark vault or destroy, medium priority");
			writeSpeech("player", "", "Two artifacts this time.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "I can't recommend you pursue both at once, sir.");
			writeSpeech("player", "", "What's up? Got a bad feeling?");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "A good driver knows a dangerous road by instinct, sir.");
			writeSpeech("player", "", "Hmm. Well, it's not like I actually need these anyways, unless I wanted to research them.");
			writeScenarioTransition("missionBriefing", "Review the mission briefing dossier");
			writeScenarioTransition("jeevesProposition", "Proposition Jeeves");
			writeScenarioTransition("vaultArrival", "Nap until you arrive at the beta vault");
			break;
		}
		case "jeevesProposition": {
			writeSpeech("player", "", "I don't suppose you're open for a fling this time?");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Well, given the distance... I believe I can fit in an old fashion.");
			writeHTML(`
				t It takes a little bit of adjustment to get into the passenger seat, but once you do Jeeves undoes your fly with a surgical precision.
				im scenarios/beta/images/handjob1.gif
				t Without taking her eyes off the road, she silently goes to work. She doesn't say anything as her hand begins to stroke up and down, but just with her fingers alone she's leaving you unable to speak out either.
				t Her speed varies between different rhythms, each so consistently exact it's almost inhuman. It's like she can read your mind and knows exactly how to interpret every small twitch of your body better than you do.
			`);
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Just a bit longer, I think.");
			writeText("That time frame of “just a bit” is starting to feel like a blissful eternity. There really are no words for her technique besides 'divine'.");
			writeBig("scenarios/beta/images/handjob2.gif");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Ah, very good sir. Take care not to stain the upholstery. Wouldn't want the old girl to take a liking to your flavor, yeah?");
			writeText("Without hesitation once you've finished firing your load she raises her hand to lick it clean, before reaching into the glovebox for a container of hand sanitizer. All the while she hasn't taken her eyes away from the road.");
			writeScenarioTransition("vaultArrival", "You've arrived");
			break;
		}
		case "vaultArrival": {
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Sir? We've arrived.");
			writeText("You feel yourself gently nudged awake.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "I've gotten you as close as I can, sir. Unfortunately those walls are a lot stronger than the old girl's frame.");
			writeSpeech("player", "", "No problem, I was planning to walk inside anyways. Thank you, Jeeves. I'll call you when I need a ride back.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Thank you sir, take care yourself.");
			writeText("You've arrived. The building itself is wholly unremarkable, all that's left is to <span class = 'blueText' onclick = 'writeScenarioScene(`vaultEntrance`)'>head inside</span>.");
			break;
		}
		case "vaultEntrance": {
			writeHTML(`
				t You're standing in the general entrance area to this branch's vault. 
				t The place is disguised as some kind of general office building. Seems like the front was selling papers.
				t There's an elevator here, it should lead you up to the vault's supervision and control room. It's never that easy though, you wouldn't have been sent in here if things were simple. 
				t ?flag passChosen; !flag succubusMet; The elevator door is firmly shut and no amount of button-pushing will rectify that. You'd need superhuman strength to get inside, and even then you'd probably have to make your way up the service area afterwards.
				t ?flag passChosen; ?flag succubusMet; The elevator door is firmly shut and no amount of button-pushing will rectify that. Luckily you've got a partner with you who can do a [lot more than just push buttons|succubusDoor2].
				t ?flag keyChosen; !flag lockdownEnded; A quick test of the key doesn't open the elevator doors. Maybe the key only works when it's near the locking mechanism? Or perhaps the door is simply jammed shut.
				t ?flag keyChosen; ?flag lockdownEnded; With the lockdown ended, the [elevator's doors slide open as you approach|elevatorKeySuccess]. 
				t To keep pedestrians and other troublemakers out the path to the main area is kept under lock and key, but you already have the authority and the knowledge you need to get [inside the vault|vaultMainHall].
			`);
			break;
		}
		case "vaultMainHall": {
			writeHTML(`
				t You're in the main hall, sort of a junction point between major sections in the vault.
				t There's a path to the records department here, but given the situation it'd be best to ignore that area for now. Most vault record rooms extend for miles beneath the ground, hopefully you won't need to comb them for clues.
				t There's an accessway to the [general observation labs|testingLab] here. Systems are set to leave the passageway locked when not in use by an admin.
				t !flag succubusMet; You have a bad feeling about the [dark vault|succubusMet]. Your instincts are ringing some serious alarm bells.
				t ?flag succubusMet; There's a door to the [dark vault|darkVault] here, but it doesn't seem like there's much more of use in there.
				t Finally there's a path back to the [entrance|vaultEntrance] here.
			`);
			break;
		}
		case "testingLab": {
			writeHTML(`
				t You're in the vault's observation chamber, a bunch of rooms where they indirectly study artifacts to see if they're safe enough for human testing. Some of the artifacts you deal with for work were probably kept here first.
				t There are a few chambers currently or recently in use, they have datapads listing the status of what is or most recently was inside.
				t [Room 1 - Channel 13|channel37]
				t [Room 2 - Lovey Doves|doves]
				t [Room 3 - Charm Maker|charm]
				t [Room 4 - Lovely Weather Today|niceWeather]
				t [Room 5 - Netorare|netorare]
				t [Room 6 - Jellyfish|jellyfish]
			`);
			if (data.player.artifact1 == "key") {
				writeText("There's a seventh room, but the door's jammed and the datapad's not functional. Even with the key you can't get inside.");
				writeText("Farther down the hall is a [security room|securityRoom] meant for testing logs, but it should give you some control over the state of the vault.");
			}
			else {
				if (checkFlag("doorOpen") == true) {
					writeText("Thanks to your partner's help, you have access to the [seventh room|securityRoom].");
				}
				else {
					if (checkFlag("succubusMet") == true) {
						writeText("There's a seventh room, but the door's jammed and the datapad's not functional. Something tells you that if you point agentF at it, that [door |succubusDoor] won't be a problem for very long.");
					}
					else {
						writeText("There's a seventh room, but the door's jammed and the datapad's not functional. Even if you could unlock the door you can't get inside.");
					}
				}
				writeText("Farther down the hall is a security room meant for testing logs. Without a degree of security clearance it's of no use to you during the lockdown.");
			}
			writeText("Finally, you can head back to the [main lobby|vaultMainHall].");
			break;
		}
		case "channel37": {
			writeBig("scenarios/beta/images/channel37.jpg");
			writeText("Code Name: Channel 37");
			writeHTML(`
				t The device on the subject's head is a fully functional television set, and can be connected to via coaxial cable. Subject does not display adverse effects to programs and media created before the date of 1975, and media stylized to look like media from that time period. Subject behaves erratically when used as output for newer media.
				t When not in use subject's television screen may activate, displaying a grainy security feed of another anomaly within <s>the site</s> any cell in active vaults. While the feed is active the subject will behave exactly as the object pictured, including anomalous effects. Previous test show the ability to copy the time-halting effect of the time stopwatch, as well as the highly-dangerous capabilities of agentL-32.
				t STATUS: AWAITING TRANSFER TO ALPHA VAULT PRISON DEPARTMENT
			`);
			writeScenarioTransition("testingLab", "Close the File");
			break;
		}
		case "niceWeather": {
			writeBig("scenarios/beta/images/nice.jpg");
			writeText("Code Name: Channel 37");
			writeHTML(`
				t When a subject capable of vocalization stands in front of the projector, they will feel compelled to deliver a weather report in their native language. Humans of nearly every region as well as many animals such as dogs all have a different dialect and style of presentation.
				t The subject is aware of the effect, and human subjects can make decisions which appear to change the pattern of weather in a given region.
				t Prediction: Agent Carter predicted heavy rainfall across the Amazon Rainforest. <br>Result: Heavy rainfall for exactly the time specified, however there is no confirmation the artifact was responsible.
				t Prediction: Agent agentL-12 predicted stormy weather for the Death Valley region of California.<br>Result: An anomalous dry thunderstorm and weather patterns similar to a land-bound hurricane struck the specified region. No casualties.
				t Prediction: Agent Paw-Paw, Supervisor ------'s personal dog, predicted "Bark bark bark, bark bark.*pause* Bark. Bark?"<br>Result: No anomalous weather conditions found in the following week.
				t Prediction: Agent ------ predicted "it will rain cats and dogs, I'll be drowning in pussy tonight!"<br> Result: Bodycount unknown. Local region of ------ has been eliminated from global maps due to extensive time needed for cleanup. Agent ------ terminated and records expunged.
				t STATUS: UNSUITABLE FOR ALPHA VAULT RESEARCH
			`);
			writeScenarioTransition("testingLab", "Close the File");
			break;
		}
		case "cup": {
			writeBig("scenarios/beta/images/royalty.jpg");
			writeText("Code Name: Cup of Vaporwave");
			writeHTML(`
				t A series of cups marked with anomalous memetic cultural icon 956. Liquid water drunk from these cups becomes flavored and causes a variety of hallucinations ranging from visual distortion to endless looping sensation of permanent sunset. Overall sensations are harmless long-term, and are countered by similar anomalous drinking vessels. Least intrusive model approved for permanent induction into toolbox department.
				t Some cup models deemed unfit for transfer. These include flavors which caused auditory hallucinations of altered versions of popular songs to match an "80s asthetic" and a flavor which introduced lingo into subject's vocabulary like "radical" and "bodacious".
				t STATUS: TRANSFERRED TO ALPHA VAULT (TOOLBOX DEPARTMENT)
			`);
			writeScenarioTransition("testingLab", "Close the File");
			break;
		}
		case "charm": {
			writeText("IMAGE UNAVAILABLE - IMAGE NOT FOUND");
			writeText("Code Name: Old Charmmaker");
			writeHTML(`
				t Subject is an elderly man who could blink in and out of reality and awareness of others, and possesed the ability to cause others to become inpercieveable. Because he also possesed the ability to alter memories of human staff without direct contact, electronic automatic containment was the only available method.
				t Subject escaped captivity 37 times due to these abilities, no staff member on site is aware of any of these events. Subject was found later homeless and destitute possesing none of the abilities described above. After extensive interrogation no success has been made in recreating his abilities. Two of his admitted "creations", codenamed the reprehensive bracelet, and the reproachive charm were later obtained by field agents and display sections of the subject's previous capabilities.
				t While any attempts to recreate these charms has ended in failure, the subject has hinted that he created a third item which was lost while fleeing from the First Persian Empire. Studies are to be conducted to discern the subject's true age. He has also requested access to the vault's stock to find his three creations to "erase this damned hellhole". All requests have been denied.
				t STATUS: SUBJECT NON ANOMALOUS - CREATIONS TRANSFERRED TO ALPHA VAULT FOR FURTHER RESEARCH
			`);
			writeScenarioTransition("testingLab", "Close the File");
			break;
		}
		case "netorare": {
			writeText("IMAGE UNAVAILABLE - ALL IMAGES OF SUBJECT PURGED DUE TO POTENTIAL MEMETIC HAZARD");
			writeText("Code Name: Netorare");
			writeHTML(`
				t The phenomenon in which a human becomes sexually enamoured with the concept of losing a loved one or significant other to another party, either by the host's sexual incompetence or the third party's superior sexual proficiency. In most regards the phenomenon acts as any traditional fetish would.
				t The effect somehow completely bypasses a human's desire to sire progeny, which should be hard-wired by evolution to be the single most dominant trait a human possesses. The exact nature of the spread method is unknown, or why some humans become infected and others reject the memetic infection and become immune.
				t Earliest known records suggest erotic materials were produced as far back as the Bronze Age, and have been purposefully distributed multiple times throughout history to produce memetic infection amongst multiple populaces.
				t Despite widespread amnestics and containment procedures it is suggested that with the popularization of global communication nearly all of the planet's population has already become a vector. Containment is no longer feasible.
				t Current status is to ease tensions as best possible between infected and immune individuals to prevent global catastrophe or major civil war.
				t STATUS: UNCONTAINABLE
			`); 
			writeScenarioTransition("testingLab", "Close the File");
			break;
		}
		case "jellyfish": {
			writeText("IMAGE UNAVAILABLE - ALL IMAGES OF SUBJECT PURGED DUE TO POTENTIAL MEMETIC HAZARD");
			writeText("Code Name: Jellyfish");
			writeHTML(`
				t A bizzare aquatic creature that displays numerous animalous characteristics depending on breed. Some range from slightly to extremely anomalous. General public should be introduced to low-risk variants, but should not be made aware of dangerous breeds found off the coast of ----- ------. Numerous decoy breeds have already been deployed across the world's oceans with some of the less anomalous abilities the breed has manifested.
				t These anomalous effects include, but are not limited to:
				t The ability to survive without cerebral mechanism.
				t Immortality and regeneration of body tissue.
				t Secretion of toxin capable of extreme bodily damage. 
				t Communication via radio waves in an unknown dialect.
				t Teleportation between several unexplored dimensions.
				t Ability to survive in space and travel between star systems at .95 light speed. Surveillance via traditional methods impossible at these speeds.
				t STATUS: UNCONTAINABLE
			`);
			writeScenarioTransition("testingLab", "Close the File");
			break;
		}
		case "doves": {
			writeBig("scripts/gamefiles/items/doves.jpg");
			writeText("Code Name: Lovey Doves");
			writeHTML(`
				t A pair of clip-on earrings in the shape of doves. Known to have the ability to psychically manipulate subjects into wearing the earrings. From there experiments are inconclusive due to repeated security breaches suggesting the doves have a high level of sentient intelligence and highly amplified suggestive ability to seduce others.
				t When 'forced' into wearing the earrings, such as with an unwilling or sex-negative subject, the earrings would cause a near complete erasure of the host's personality. Due to the extreme risk posed by the earrings, study into what consitutes an acceptable host has been halted. 
				t Some speculation around a local legend in recovered area speculates the doves have been active multiple times in human history, nearly always spawning a local cult of fertility in the region. Early findings suggest a single figure took on the name 'Dionysus', and caused the Greek deity Dionysius to be formally entered into the pantheon usurping the established deity Hestia. Because of the potential security risk concerning the nature of the doves, all variations of the tale of Dionysius's ascent to the pantheon have been removed from all historical mythological records.
				t STATUS: UNDERGOING TRANSFER TO ALPHA VAULT
				t Addendum by Beta Vault Senior Researcher ------ Hellsing 2 Days Ago: 
				t "I suspect that the doves may continue to influence those who've worn them even after extensive memory alterations. I myself was never quite so... Curious, for lack of a better term, about carnal affairs. I believe several members of the vault have been compromised already as well.
				t Yet I know they won't take my warnings seriously. Call me a 'crackpot', will they? I don't know if this is the doves' influence on me, but each passing day I'm hoping to show them exactly how cracked I am. What's the worst they can do? Fire me?"
			`);
			writeScenarioTransition("testingLab", "Close the File");
			break;
		}
		case "succubusDoor": {
			writeHTML(`
				t You stand aside to see if agentF can open the door, and...
				t *SMASH*
				t ... She does. Yep, definitely not human. Still a big help though, because now you can [head inside|handMirrorRoom]. 
			`);
			break;
		}
		case "handMirrorRoom": {
			if (checkFlag("handMirror") == true) {
				writeHTML(`
					t You're in an artifact storage and testing lab. This one is meant to contain a hand mirror created via the Antique Mirror in your vault.
					t The pedestal is bare, you've already taken the antique mirror.
					t Thanks to your helper 'opening' the doorway for you, you can [leave|testingLab] as you please. 
				`);
			}
			else {
				writeHTML(`
					im scripts/gamefiles/items/handMirror.jpg
					t You're in an artifact storage and testing lab. This one is meant to contain a hand mirror created via the Antique Mirror in your vault.
					t On a pedestal atop a soft velvet pillow is the hand mirror. It should be safe to [take with you back home|handMirrorPickup], although since it's due for the dark vault you shouldn't use it for now.
					t Thanks to your helper 'opening' the doorway for you, you can [leave|testingLab] as you please. 
				`);
			}
			break;
		}
		case "handMirrorPickup": {
			addFlag('handMirror');
			data.player.color += "handMirror";
			writeScenarioScene("handMirrorRoom");
			writeSpecial("New dark vault artifact unlocked! You can research it after the mission, but be wary since the research has a very different tone compared to other artifacts!");
			break;
		}
		case "securityRoom": {
			writeHTML(`
				t You're in the testing lab security room.
				t ?flag passChosen; Unfortunately no amount of strength will give you any additional access here, especially during lockdown.
				t ?flag keyChosen; As you ponder exactly how you could insert the key into the terminal, the screen comes on. Apparently just waving the key around ended the system lockdown, which sounds like a bad pun, but you'll take what you get. Using the security console you can...
				t ?flag keyChosen; !flag lockdownEnded; [Connect the servers to the outside world and end the full lockdown|securityOverride].
				t ?flag keyChosen; !flag darkFlooded; [Flood the Dark Vault with knockout gas|securityFlood].
				t You can [head back outside|testingLab].
			`);
			break;
		}
		case "securityOverride": {
			writeHTML(`
				t With a beep, a boop, and a clickety-clack of the keys you send the alpha vault the all-green code. The only immediately noticable effect is that the AC kicks back on.
				t Normal security measures are still in place though, so there should be nothing to worry about.
				t ?flag keyChosen; !flag darkFlooded; [Flood the Dark Vault with knockout gas|securityFlood].
				t You can [head back outside|testingLab].
			`);
			addFlag("lockdownEnded");
			break;
		}
		case "securityFlood": {
			writeHTML(`
				t With a beep, a boop, and a clickety-clack of the keys you pump an absolute ton of gas into the dark vault before venting it out. According to the terminal at these levels the contents of the air in there could knock out seven and a quarter sperm whales.
				t Which is a really weird unit of measurement.
				t ?flag keyChosen; !flag lockdownEnded; [Connect the servers to the outside world and end the full lockdown|securityOverride].
				t You can [head back outside|testingLab].
			`);
			addFlag("darkFlooded");
			break;
		}
		case "succubusMet": {
			if (data.player.artifact1 == "key") {
				writeScenarioScene("succubusKey");
			}
			else {
				writeScenarioScene("succubusPass");
			}
			addFlag("succubusMet");
			break;
		}
		case "darkVault": {
			writeHTML(`
				t You're in this beta vault's dark vault. It seems like due to the size of the branch this place also doubles as the prison department. That's not usually a good plan.
				t Well, they probably learned that lesson the hard way.
				t The place is cold and dimly-lit, a lot less professional than your dark vault. The first thing you notice is a cell with the door hacked open, a log near the door reads ["SUBJECT: agentL-32"|succubusFile].
				t A few other doors of note read ["SUBJECT: Nursing Staff"|nursingFile] and "SUBJECT: Charity's Cage", although the data log on the latter is glitching out.
				t ?flag keyChosen; Using your skeleton key you could unlock the chambers and enter the [Charity's Cage room|charityRoom] or the [Nursing Staff room|nurseRoom].
				t ?flag passChosen; Both doors are sealed up tight though. The pass isn't helping you inside of these.
				t ?flag passChosen; agentF follows behind you, a little too quietly for your liking. She might not be human, but there's absolutely no chance she could make it through these doors herself. Maybe a disgruntled employee let her out?
				t ?flag darkFlooded; agentF, or whoever this is that looks like her is on the floor, totally conked out thanks to the gas you flooded the room with earlier.
				t You can head back to the [main hall|vaultMainHall] from here.
			`);
			break;
		}
		case "succubusPass": {
			writeHTML(`
				t The vault door slides open, nearly silent despite the size and weight. Sterile air rushes out from behind it. As you take a few steps inside you suddenly feel a cold sweat overtake you, and your hairs stand on end as you look around in a panic. 
				t Something is moving in here, and it's suddenly decided to move towards you.
				t You hold out your hand instinctively against the approaching shadow and close your eyes, bracing yourself.
				t ... For nothing. Not even a breeze hits you.
				t Peering through one eye you look towards the figure.
				player ... agentF?
				t She gives you a polite smile and a small bow. Looking at your hand you see you flashed the CEO pass at her by accident.
				player Good to know it's working, I guess. What are you doing down here?
				t She says nothing, total silence. It seems like she's actively listening though.
				t Suddenly she twitches. Behind her eyes you can see a hunger that makes your heart skip a beat, and for a moment you can feel her intent to attack you, only for her body to relax again.
				player Okay... Maybe you aren't the agentF I know. At least the pass is somewhat effective.
				t She seems loyal. <b>agentF is at your side!</b>
				t ... For now.
				t Given that she managed to escape confinement she probably has some means to navigate the facility. Hopefully she can help you out with finding the chairwoman. She's also entirely naked, which is nice.
				t On that subject, while you're an adventurous man, you <i>generally</i> try to avoid fucking women who wander prison departments naked. Maybe it'd be best to [explore the dark vault now|darkVault]. 
			`);
			break;
		}
		case "nursingFile": {
			writeText("IMAGE UNAVAILABLE - ALL IMAGES OF SUBJECT PURGED DUE TO EXTREME MEMETIC HAZARD");
			writeText("Code Name: Nursing Staff");
			writeHTML(`
				t A group of ------ dressed in antiquated, potentially fetishized ------- attire. All forms of traditional identification point towards a facility known as Quiet Mountain Hospital, however attempts to locate the facility have failed. Subjects were found sealed beneath the ------ Casino in West Virginia. Notably no anomalous behavior was detected in the casino except for a larger than usual amount of both Nishijin and Sankyo ------- machines.
				t Subjects have proved impossible to photograph and possess an extremely hazardous memetic effect. Individuals who have returned from their containment chamber offer varying descriptions, and have shown an aversion to focusing on the memories of the subjects long enough to create a detailed description. Due to the unknown nature of the memetic spread information on Nursing Staff is to be kept confidential.
				t STATUS: UNABLE TO TRANSFER
				t Addendum by Alpha Vault Chairwoman ----- chairL 139 Days Ago: 
				t "We have no room in our vault for a hole in the ground anyway. Consider this a write-off, and be grateful the subjects seem content not to move. Do keep the spread of rust in check though."
			`);
			writeScenarioTransition("darkVault", "Close the File");
			break;
		}
		case "succubusFile": {
			writeHTML(`im scripts/gamefiles/characters/agentD.jpg`);
			writeText("Code Name: agentL-32");
			writeHTML(`
				t Subject is the 32nd iteration of Agent agentL, compromised due to an interaction between her and the artifact known as the Lovey Doves after a sudden materialization inside the Escher Cabinet. After several failed attempts at personality restoration, including one in the alternate reality All Good Things Are Sexual Development, subject's mind was deemed unrecoverable.
				t After wearing the earrings but before containment subject is recorded to have remarked the following before her extreme change:
				t "What a shame. You certainly have the body, but you're just so dull! No offense, but I really need someone on my page if I'm going to be myself. Here, I'll try to help you out. I'm a bit out of practice though, so..."
				t All attempts at communication following the event have failed. Subject has shown several inhuman-level alterations to their physique since containment, including greatly increased strength and a nymphomania strong enough to drown out rational thought.
				t STATUS: AWAITING TRANSFER TO ALPHA VAULT PRISON DEPARTMENT
			`);
			writeScenarioTransition("darkVault", "Close the File");
			break;
		}
		case "succubusKey": {
			if (checkFlag("darkFlooded")) {
				writeScenarioScene("succubusGassed");
			}
			else {
				writeHTML(`
					t The vault door slides open, nearly silent despite the size and weight. Sterile air rushes out from behind it. As you take a few steps inside you suddenly feel a cold sweat overtake you, and your hairs stand on end as you look around in a panic. 
					t Something is moving in here, and it's suddenly decided to move towards you.
					t You hold out your hand instinctively against the approaching shadow and close your eyes, bracing yourself.
					t But it isn't enough, your whole body feels an impact like you've tackled by a linebacker and you quickly go from vertical to disorientatingly horizontal.
					t You don't have time to get your bearings. You hit the ground at some point and the sound of the impact is followed by the sound of fabric being torn. In the chaos you realize the figure who tackled you is... agentF? 
					t Her expression is an insane grin as her free hand explores your body, running along your chest and abdomen.
					t During your time at the vault you've been exposed to a half-dozen mentally-focused artifacts, items capable of attacking your mind from the foundations, making you rethink what's real. But that's different from what agentF is doing....
					im scenarios/beta/images/assault1.gif
					t Grasping your dick and rubbing against her soaked snatch, her approach is to smash against your willpower like an iron hammer.
					im scenarios/beta/images/assault2.gif
					t Brutal slapping sounds are causing your ears to ring. 
					t Your vision is spinning from the sudden exertion, but agentF grabs you by the chin to force you to look into her eyes as she increases her pace despite how you've already hit your limit.
					t Her crazed grin and viciously hungry consume you.
					t ...
					t Wet sounds echo through the halls. 
					im scenarios/beta/images/assault3.gif
					t You feel as though you should have passed the edge of conciousness long ago, yet the pleasure that pulses through you reminds you you're still awake, albeit only physically. Even now she still shows no signs of stopping. You grunt and thrust weakly, your body no longer responding to your mind as you're milked yet again. 
					t For you, this is your world now, but to the vault this whole ordeal will be a footnote on a failed mission report.
				`);
				writeText("BAD END");
				writeText("...");
				writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
				writeScenarioTransition("start", "Another Attempt");
				writeScenarioTransition("quit", "Abandon All Hope");
			}
			break;
		}
		case "succubusGassed": {
			writeHTML(`
				t The vault door slides open, nearly silent despite the size and weight. Sterile air rushes out from behind it, which is a relief given what you recently flooded the department with.
				t You step inside, and your foot bumps against something soft. Looking down, you see...
				player agentF?
				t Agent agentL, or someone who looks identical to her, is laying naked on the floor. 
				t Given where you are and what you're doing, it's probably best to [leave her be|darkVault]. You pretty vividly remember agentF saying she wasn't coming on the mission anyways. 
			`);
			break;
		}
		case "nurseRoom": {
			writeHTML(`
				t You're inside the nursing staff's room. Probably.
				t You aren't quite sure because there's a massive hole in the center, lined with what is probably rust. There wasn't any mention of a security breach in this room, maybe the hole itself is the prisoner? Or maybe it leads into a different dimension?
				t There's an extremely well-maintained ladder leading [down into the hole|nurseBadEnd]. That said, every rational instinct you've got is telling you this is probably a bad idea. It's very unlikely the gas you pumped in here made it into this room, let alone down there.
				t A wise man would [head back into the dark vault|darkVault].
			`);
			break;
		}
		case "nurseBadEnd": {
			writeHTML(`
				t You faintly smell the scent of copper and rust, although it's muted beneath the very human scent of sweat. 
				t It's quiet, although that's not the best word for it. The empty rooms you were standing in before were quiet, this room is oppressively silent. Not only that, but you'd swear something is moving in here.
				t You step into something with a little give, it's a lot softer than the hard metal the room's made of. You kneel down to inspect whatever's there, it seems like a pile of clothes. Tactical body armor, a heavy rifle, and a pair of goggles. It seems like a lucky score so you slip on the goggles and they've actually got a night-vision mode already active!
				t But when you look around the room you're just a second too slow in holding back a yelp. 
				im scenarios/beta/images/nurses1.gif
				t Surrounding you, moving together all at once are a number of nearly inhuman creatures. Their bodies move around you in an unnatural fashion, twisting and turning as if to rub as much of themselves against you as possible.
				t They tear at your clothes hard enough for you to hear an audible tear, but they're actually quite gentle with your body and skin, especially with one part of you in particular.
				t Everywhere they touch feels cool, like they're drawing energy from you. What's left in exchange is a twisting sensation like goosebumps which causes you to grit your teeth, especially once they've begun to indulge themselves with you.
				im scenarios/beta/images/nurses2.gif
				t It doesn't feel like you're brought to an orgasm, rather that one is stolen from you. The scents from before are overpowering you, like your senses of vision and balance are slipping away and your others are trying to grow to stabilize your mind. 
				im scenarios/beta/images/nurses3.gif
				t Yet even your sense of self gradually feels smaller as the creatures continue their twisted dance using your body to suit their hunger.
				t A stray hand against your face causes the goggles to be dislodged, stripping you of sight. Despite the pitch black room, you can still tell your vision is going dark.
				t All that's left of you will be a footnote on a failed mission report.
			`);
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			writeScenarioTransition("start", "Another Attempt");
			writeScenarioTransition("quit", "Abandon All Hope");
			break;
		}
		case "charityRoom": {
			if (checkFlag("charity") == true) {
				writeHTML(`
					t You're in the storage room for the artifact known as Charity's Cage. 
					t There's an empty metal box here, you already took Charity's Cage, it's safe and sound.
					t Thanks to your key you can enter and  [leave the room|darkVault] as you please. 
				`);
			}
			else {
				writeHTML(`
					im scripts/gamefiles/items/charity.jpg
					t You're in the storage room for the artifact known as Charity's Cage. 
					t The cage is sitting in a metal box, unlocked. It should be fine to [take home with you|charityTaken]. The file said it wasn't dangerous unless used by a man and a woman. Still, it's due for the dark vault, so probably best not to mess around with it here.
					t Thanks to your key you can enter and [leave the room|darkVault] as you please. 
				`);
			}
			break;
		}
		case "charityTaken": {
			addFlag("charity");
			data.player.color += "charity";
			writeScenarioScene("charityRoom");
			writeSpecial("New dark vault artifact unlocked! You can research it after the mission, but be wary since the research has a very different tone compared to other artifacts!");
			break;
		}
		case "elevatorRoom": {
			writeHTML(`
				t You're in the elevator's service passage, used in case of an electrical failure in the vault. Luckily the security systems aren't interested in taking potshots at you.
				t agentF sniffs at the air once you're both inside, and begins to ascend. You worry for a moment that the pass is failing, but so long as she's interested in something else you should be fine. Maybe there's some kind of snack you can give her to keep her loyal. Food for thought.
				t ?flag passChosen; From here you can ascend up to the [chairwoman's office|elevatorSuccubus]. 
			`);
			break;
		}
		case "succubusDoor2": {
			writeHTML(`
				t You stand aside to see if agentF can open the door, and...
				t *CRASH*
				t ... She does. Yep, definitely terrifying. Still a big help though, because now you can [head inside|elevatorRoom]. 
			`);
			break;
		}
		case "elevatorSuccubus": {
			writeHTML(`
				define ? = sp Chairwoman; im images/none.png;
				t You climb up the stairs, agentF at your side. Mostly. She's somehow a lot faster than you are, it's unclear where her energy is coning from, until she suddenly stops. She licks her lips and stares like a hawk at a bead of sweat that formed on your brow.
				player Maybe you should go on ahead. Make sure nothing's fucky up there.
				t After a moment her subservient nature returns, and she runs off ahead. You actually can't remember testing how long the effects of the pass actually worked.
				t ...
				t You take the final step up to the chairwoman's floor.
				player God damn... Disabling the elevator... Fucking...
				t You stop at the door, smashed open. You can hear very loud sounds of what can only be described as a B-grade porno on max volume from behind it. You step inside.
				im scenarios/beta/images/succubusFinish1.gif
				player Huh. Whatever you are, you're bisexual. Neat.<br>Hey, are you the chairwoman?
				? OUUUUGH~!
				player ... Cool. I'm here to rescue you. agentF, time to finish.
				t Wordlessly agentF nods in agreement, before changing positions.
				im scenarios/beta/images/succubusFinish2.gif
				player Well, I guess I could have worded that better. Fine, finish quickly, then we gotta get you back downstairs.
				t ...
				t Holding the sex-addled chairwoman in your arms you head back down to the lobby and use the pass to get agentF back into the dark vault. The moment the door closes you hear very loud banging through the door, and not the fun kind.
				t Still, a quick ride with Jeeves later, and you've delivered the chairwoman! Give yourself a congratulatory pat on the back... 
			`);
			writeScenarioTransition("finish", "Mission Successful!");
			break;
		}
		case "elevatorKeySuccess": {
			writeHTML(`
				define ? = sp Chairwoman; im images/none.png;
				t You step into the elevator, waiting patiently until you've reached the top. Thankfully you didn't need to take the stairs.
				t Striding forwards you arrive at the office door of the beta vault's chairwoman. It's locked, but your artifact solves that issue pretty quickly. Pushing open the door you see the chairwoman, half asleep at her desk. She looks tired, hungry, and more than a little disorientated.
				? Who...
				player Don't freak out, I'm a field agent here to rescue you. You the chairwoman?
				? Yes...<br>One of our researchers... She left a trap, caused a breach, and-
				player Conserve that energy and relax, I'll have you out of here in no time.
				t ...
				t Holding the weary chairwoman in your arms you head back down to the lobby. A pretty uneventful finale, but this probably won't be your last rodeo. The day's still young after all.
				t Still, a quick ride with Jeeves later, and you've delivered the chairwoman! Give yourself a congratulatory pat on the back...
			`);
			writeScenarioTransition("finish", "Mission Successful!");
			break;
		}
		case "finish": {
			writeHTML(`
				t Another mission successfully behind you!
				t ?flag passChosen; ?flag handMirror; Not only that, but you managed to score a new dark vault artifact. Whatever this hand mirror shows, it'll probably be at least a little interesting.
				t ?flag keyChosen; ?flag charity; Not only that, but you managed to score a new dark vault artifact. Still, despite just being a small metal cage the object in your pocket emits an almost ominous aura.
				t ...
				t Arriving back at the vault you're greeted by a few guests.
				agent Yo! Glad you make it back, anything interesting happen?
				player ?flag succubusMet; Well, I met-
				t ?flag succubusMet; You stop yourself. No telling how she'd react to knowing there's some kind of succubus-doppleganger back at the beta vault.
				player ... Not really, it was a pretty chill visit overall.
				assistant Nice!
				agent Yeah, an ordinary day is a good day in the field.<br>Again, good to see you back. Take care, alright? I think top brass has something in the works for you pretty soon.
				t !flag keyChosen; With that, she leaves.
				t ?flag keyChosen; She walks towards the exit, but stops to whisper something in your ear.
				agent ?flag keyChosen; Hey, don't go messing around with that key around here. Out security's a lot tighter than beta. I won't make you turn it in yet though.
				t ?flag keyChosen; And with a wink, she leaves.
			`);
			removeFlag("passChosen");
			removeFlag("keyChosen");
			removeFlag("succubusTesting");
			removeFlag("succubusEnslaved");
			removeFlag("securityDown");
			if (data.player.color.includes("betaComplete") != true) {
				data.player.color += "betaComplete";
			}
			if (data.player.artifact1 == "key") {
				data.player.artifact2 = "key";
			}
			data.player.artifact1 = "bracelet";
			writeTransition("office", "Finish");
			break;
		}
		default: {
			writeText("Error! No scene named "+scene+" found in the writeScenarioScene function in your sceneList.js! Did you mispell something?");
		}
	}
	data.player.currentScene = "scenario" + scene;
	saveSlot(160);
}

//Don't touch anything below this, or things will break.

switch (requestType) {
	case "load": {
		if (data.player.scenarios == null) {
			data.player.scenarios = [];
		}
		var scenarioCheck = false;
		for (i = 0; i < data.player.scenarios.length; i++) {
			if (data.player.scenarios[i].index == scenarioInformation.index) {
				scenarioCheck = true;
				data.player.scenarios[i].flags = "";
				data.player.scenarios[i].objectFlags = "";
			}
		}
		if (scenarioCheck == false) {
			console.log(scenarioCheck);
			var goof = {index: scenarioInformation.index, flags: "", objectFlags: ""};
			data.player.scenarios.push(goof);
		}
		data.player.currentScenario = scenarioInformation.index;
		writeText("Loaded correctly, all is well!");
		writeScenarioScene("start");
		break;
	}
	case "refreshed": {
		var placeholder = data.player.currentScene.replace("scenario", "");
		console.log("Loading scenario scene ID "+placeholder);
		writeScenarioScene(placeholder);
	}
}

function writeScenarioTransition(name, target) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="writeScenarioScene('` + name + `')">
			` + replaceCodenames(target) + `
		</p>
	`;
}
