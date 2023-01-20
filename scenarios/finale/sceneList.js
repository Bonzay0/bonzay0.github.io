var scenarioInformation = {index: "finale", author: "Noodle Jacuzzi"};
 
function writeScenarioScene(scene) {
	console.log("Now writing scenario scene ID " + scene);
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeHTML(`
		define earrings = t <div style="color:pink;">
		define earring = t <div style="color:pink;">
	`);
	switch(scene) {
		case "start": {
			removeFlag("artifactChosen");
			if (checkFlag("keyChosen") == true || data.player.artifact2 == "key") {
				data.player.artifact2 = "key";
			}
			else {
				data.player.artifact2 = "";
			}
			writeText("Whether this is your first or seventh time, the experience will be indistinguishable. If you've made it this far, the end is in sight. Best of luck.");
			writeSpeech("Mission: The Finale", "scripts/gamefiles/logo.png", "You've been appointed a simple escort mission of a dangerous artifact down to the dark vault. Unlike other missions you're free to keep your bracelet.<br><span class = 'blueText' onclick = 'writeScenarioScene(`escort`)'>Begin</span>");
			writeTransition("work", "Cancel and go back");
			break;
		}
		case "escort": {
			if (data.player.artifact2 == "key") {
				addFlag("keyChosen");
			}
			writeHTML(`
				define assistant = sp assistant;
				agent Great, best of luck! Try not to get fucked-up again. You're resistant, not immune, so for everybody's sake keep the artifact's container closed, yeah?
				t ...
				t You and assistantF walk together, you pushing the cart through the dark-vault's halls.
				t Though it's quiet, there's still a tense air down here since a single mistake could mean...
				t It's better not to think about it, so the two of you try to keep your mind off it with a half-hearted conversation to fill the silence.
				assistant Actually... There's a rumor going around. Some of the girls downstairs were saying that the vault will be reaching full capacity soon.<br>Once a vault is full they say they basically close the place down. No new artifacts, the competent staff are moved to a new site while the vault focuses solely on containment with a skeleton crew.
				player Huh. Wonder if we'll make the cut.
				assistant I hope so. But I also heard that even if we do, some folks are shipped off to different places... <br>Hey. I was wondering, after this do you wanna-
				t Her words suddenly become quiet as ringing fills your ears again.
				player God damn, what is that sound?
				assistant Huh? I don't hear anything.
				player <i>Could it be...?</i><br>What's the level of shielding on the doves?
				assistant Level 3, why?
				player That's-
				t The lights flicker.
				t The ringing grows louder.
				t Like windchimes.
				t Like words on the wind.
				t Your vision goes dark.
				t <b><div style="size:300%;color:pink;">[FREEDOM|disaster]</div></b>
			`);
			break;
		}
		case "disaster": {
			writeHTML(`
				t You jolt upwards, still in the dark vault hallway. The ringing has finally faded, you must have passed out.
				t assistantF is laying against the wall across from you, out cold. 
				t You stumble up, your legs shaky. The alarms aren't going off despite what just happened, a bad sign.
				t Communications seem to be down as well. Thinking quickly, you need to [find out what's going on|elevator]
			`);
			break;
		}
		case "elevator": {
			writeHTML(`
				t You're in the dark vault.
				t assistantF is alright for now, and you've regained your bearings. Whatever took you out of commission hit her a lot harder than it did you.
				t There's no way to know the vault's status from down here. Unfortunately the elevator isn't responding. Thankfully there's a service exit, and the bracelet should protect you from the automated defenses beyond.
				t The passageway should be safe, but the downside is there's a [fuckton of stairs|stairs1] ahead of you.
			`);
			break;
		}
		case "stairs1": {
			writeHTML(`
				t You [begin your ascent|stairs2]. Luckily a metric ton of sex has the side-effect of improving your stamina.
				t ...
				t Meanwhile...
				define earrings = t <div style="color:pink;">
				define earring = t <div style="color:pink;">
				earrings It's time to wake up...</div>
				assistant Ghh...<br>... playerF?
				t Reality comes back to assistantF. A cold, hard floor. More than that is a sudden sense of loneliness.
				earrings You're so afraid... I am too...
				assistant Who... Who is-
				t As assistantF rubs her head her vision feels pulled towards the secure cart in front of her. When her vision falls on it her loneliness seems... Smaller. Each breath she takes is warm.
				earrings Take me... I'll save you...
				t Her body moves of its own accord, her mind racing but it can't manage to finish a thought.
				earrings All you struggle with, it's overwhelming... I am here... I will solve these for you, and in return... We shall have the one we need...
			`);
			break;
		}
		case "stairs2": {
			writeHTML(`
				define assistant = sp assistant; im scripts/gamefiles/profiles/assistantP.jpg; <div style="color:pink;">
				t You take another step up the stairs. There's a lot ahead of you, but you're already [halfway there|stairs3].
				t The ringing comes back suddenly and you nearly fall. It's clearer than before, and you can hear a voice within it.
				earring Where are you...? Where...?
				t The stairs shake slightly and you hear an electrical whir. Through the wall you can hear... The elevator? It's just passed you and is heading upwards. 
				player Those need to be activated manually, I guess someone in security is awake? They couldn't have gotten up sooner? Who are they even bringing up?
				t ...
				t Meanwhile...
				assistant Where... Where are you...?
				t The elevator so kindly opened for her. Now assistantF ascends, silver icons of freedom adorn her ears and whisper sweet thoughts into her ears.
				earrings Find him...
				t The ride is short and the door opens, yet when she moves to step out she's reprimanded by a yell.
				boss Don't move a muscle! Where is playerF?
				agent And what happened down there? Are the doves sec-<br>Oh no...
			`);
			break;
		}
		case "stairs3": {
			writeHTML(`
				t You finally reach the top of the staircase. A quick passcode entry and the door opens, there's no active lockdown and all the electronics are still active, a good sign.
				t You head forwards, only to stop quickly as you see a pair of naked women laying before you.
				agent I don't... Know where he is... Where is he...
				t agentF is mumbling to herself and bossL can't even manage to form words. Just by looking at them, it's obvious what happened here...
				im scenarios/finale/images/ending1.gif
				im scenarios/finale/images/ending2.gif
				t The visions flood into your mind with abnormal clarity, you realize the ringing has returned.
				earrings Don't be afraid... I'll be by your side~
				t There's no helping them for the moment. Looking around you see the light above the elevator to the chairwoman's office is on. Someone's just finished using it.
				t The situation right now is extremely dangerous. The vault could go under lockdown at any moment, it might be best to [head into your office|testingLab] to grab an artifact for safety. Though time could be of the essence, you could [head straight up to the top|ascent].
			`);
			removeFlag("artifactChosen");
			break;
		}
		case "testingLab": {
			if (checkFlag("artifactChosen") == true) {
				writeScenarioScene("ascent");
			}
			else {
				writeHTML(`
					t You're in your office, nearby is the testing lab. You should still be able to head into a testing chamber and take an artifact with you, but which one?
					sp Time Stopwatch; im scripts/gamefiles/items/stopwatch.jpg; <span class = "blueText" onclick = "choose('stopwatch')">Equip</span><br>The power to stop time should be a safe choice.
					sp Midas Coin; im scripts/gamefiles/items/coin.jpg; <span class = "blueText" onclick = "choose('coin')">Equip</span><br>While it's effects are pretty specific, there's a chance it could come in handy.
					sp Super Truth Serum; im scripts/gamefiles/items/serum.jpg; <span class = "blueText" onclick = "choose('serum')">Equip</span><br>The ability to rewrite someone's idea of the truth could be useful if whoever is causing this can see reason. Although it isn't effective on someone you've used it on before.
					sp Chaddicus Shades; im scripts/gamefiles/items/shades.jpg; <span class = "blueText" onclick = "choose('shades')">Equip</span><br>Taking out whoever's doing this should be easy while wearing these.
					sp Free ____ Sign; im scripts/gamefiles/items/sign.jpg; <span class = "blueText" onclick = "choose('sign')">Equip</span><br>This... Well, there's no chance it'll betray you if things get dicey.
					sp CEO Pass; im scripts/gamefiles/items/pass.jpg; <span class = "blueText" onclick = "choose('pass')">Equip</span><br>Turning whatever horror is causing this into an obedient assistant should solve your problems quickly.
					sp Reproachive Charm; im scripts/gamefiles/items/charm.jpg; <span class = "blueText" onclick = "choose('charm')">Equip</span><br>Its effect is pretty much the same as the bracelet, albeit maybe worse in this case. There'd be no point in taking this.
					t !flag keyChosen; The madameF's room is showing an error, it seems like it can't be opened. Has she sealed herself inside somehow? Maybe she's got the right idea.
					t ?flag keyChosen; !flag madameSpoken; The madameF's room is showing an error, it seems like it can't be opened. Luckily you still have the skeleton key from your last mission, so you can [unlock the door|madameRoom].
					t ?flag madameSpoken; You've already been inside the madameF's room.
				`);
			}
			break;
		}
		case "madameRoom": {
			if (galleryCheck("erotiboxResearch17") == true) {
				writeHTML(`
					t Using the skeleton key you open the door. It almost feels like destiny that it's still with you.
					madame ... Hello playerF.
					player madameF. You wouldn't happen to know what's going on, would you?
					madame Straight to the point, as always. It's how forwards you are that puts me a little more at ease.<br>I don't know what, but some child out there is throwing a tantrum trying to wake the artifacts in containment. I myself desire peace and quiet, so I thought I'd close the door.
					player The ringing?
					madame ... So you can hear it. The cries are also meant to attract someone's attention. Yours, most likely.<br>playerF. I think it's time we spoke. I assume no one is listening now? No one who could separate us suddenly?
					player Well, we're being recorded. After this is all said and done-
					madame Depending on your answer, it won't matter. I think you know what I mean to discuss?<br>[The three|theThree].
				`);
			}
			else {
				writeHTML(`
					t Using the skeleton key you open the door. It almost feels like destiny that it's still with you.
					madame ... Hello playerF.
					player madameF. You wouldn't happen to know what's going on, would you?
					madame Straight to the point, as always. It's how forwards you are that puts me a little more at ease.<br>I don't know what, but some child out there is throwing a tantrum trying to wake the artifacts in containment. I myself desire peace and quiet, so I thought I'd close the door.
					player The ringing?
					madame ... So you can hear it. The cries are also meant to attract someone's attention. Yours, most likely.<br>Hmm... I don't see much of a future here.
					player And what exactly is that supposed to mean?
					madame Hmph. Do not assume us friends, scholar. Our relationship has been strictly professional, I merely see an end to our time together approaching.<br>I do believe I shall take a nap, perhaps several hundred years shall suffice?
					player I'll be fine, don't overreact.<br>And if I go, you lose your best chance at seeing daylight.
					madame Hmm... Perhaps the next collector will be as cute as your companion?
					t She's off in her own little world, she'll be of no help here. You'd best [get going|testingLab].
				`);
				addFlag("madameSpoken");
			}
			break;
		}
		case "theThree": {
			writeHTML(`
				madame You are a simple man, scholar, and I mean that in the way of the highest possible compliment. Your motives are clear as your soul is muddled in depravity.<br>Case in point, I hand you an ancient relic scrawled with inscrutable text, and you rush to transform it into a debaucherous toy.
				player The shawl... That was a test?
				madame Hmhm~<br>And you passed. The truth is that I, or my bottle to be precise, am one of a triad, meant to be paired with your bracelet and the dangling charm that completes the ensemble.
				player The reproachive charm...
				madame Yes. Scholar, I'm certain you've already made the connection. Us three grant a power you'll find quite useful. We can displace, and erase. Both you and anything you set your mind to.<br>Were you any different, any more ambitious, I'd never speak a word of this, of course.
				player So I could erase whatever's causing these problems...
				madame More than that, playerF. You could, with a wave of your hand, grant the lot of us freedom from these accursed grey walls. I am well aware that this vault's time is coming to an end.<br>I'll not say how, but I know.
				t The chances that madameF isn't actually limited to this room, and that she might be spying on others in the vault aside, the full ramifications of what she's saying hit you.
				player I could scatter the contents of the vault, and use the memory alteration to make none the wiser...
				madame I do not offer an endless expanse of options, I only offer one. What you do with the triad will require my consent.<br>I can swear on my life that humanity shall not be worse off, and I'm certain the vault will find you invaluable in collecting the lot of us again, along with any new artifacts found across the world.
				t You stop to think. She's clearly not interested in hearing ["no"|madameNo], but... 
				t Could you really accept? Could you really take the plunge and [accept her deal|madameYes]?
			`);
			break;
		}
		case "madameNo": {
			writeHTML(`
				player I refuse. I'll find work at another vault after this one.
				madame I see. How bold of you to shatter a woman's heart, do you easily condemn others to a life boxed within a concrete cage?
				player Take care, madameF. I'll ensure you're taken care of in the future.
				madame Hmph. I underestimated you. I won't make the same mistake. <br>I do believe I shall take a nap, perhaps several hundred years shall suffice? Perhaps the next collector will be as cute as your companion?
				t She's off in her own little world, she'll be of no help here. You'd best [get going|testingLab].
			`);
			break;
		}
		case "madameYes": {
			writeHTML(`
				t She gives a kind smile.
				madame I knew you had an eye on the greater picture. Take it.
				t She gives you her bottle, the shape twisting slightly to form a small hook. You attach it to the reprehensive bracelet.
				t !flag charmChosen; Then, you head out to grab the reprehensive charm.
				t <b>Protection from responsibility, the power to become hidden...</b>
				t You feel the bracelet buzz on your arm.
				t <b>Protection from the unseen, the power to acknowledge what is out of sight...</b>
				t The perfume becomes suddenly cloudy.
				t <b>Protection from pursuit, the power to avert a gaze...</b>
				t The charm jingles slightly as though it were in the wind.
				t With these, the triad is complete.
				t ...
				t Meanwhile...
				assistant I need... I need to find him...
				chair assistantL, don't come one step further... Hnn...
				assistant Hmph... Such flashy jewelry won't help when you can't keep your hands from... Hmm~?
				t The rings on chairF's fingers begin to glow, suddenly disappearing.
				t And just as suddenly the doves adorning assistantF's ears take on a brilliant hue before vanishing as well.
				t ...
				roommate Huh. playerF's late home again.
				girlfriend You worried? Don't you have his...
				t The lovebirds attention is suddenly stolen as hundreds of lines of light pass through the sky.
				roommate A meteor shower?
				girlfriend In this part of the country, visible at this time of day?
				t ...
				t Darkness surrounds you. For the first time in a while, you no longer feel the reprehensive bracelet on your arm.
				t All you can do is [close your eyes|epilogue].
			`);
			break;
		}
		case "epilogue": {
			writeHTML(`
				agent playerF! Hey! You alright?
				t You shake yourself free, finding yourself sitting at a computer desk with agentF shaking your shoulder.
				agent Look!
				im scenarios/finale/images/epilogue.gif
				agent I think that the ring is the artifact! It's messing with his common sense, come on, let's move!
				t She pulls you aside, and as you try to gain your bearings on the run you hear a familiar voice.
				madame My my~<br>Quite the change.
				player What's...
				madame Shush, the girl cannot hear us. By displacing so many the very fabric of the world is changed. This is what you hoped for, no? A new world awaits you, ripe for the taking.<br>It seems you're an agent tasked with exploring the most anomalous city in the country.
				agent So, this makes seven this month, yeah? I just wish I could find some kind of link.
				madame Hmhm~<br>No more routine, a free world to roam, all of it dotted with objects of mystery. The beginning of something new, perhaps? I think I'll stick around with you for a while longer~
				t And thus, somehow, you've wound up on an artifact containment mission alongside agentF and the madameF. Only time shall tell what lies ahead of you now. But for now, this is...
			`);
			writeScenarioTransition("credits", "The End");
			break;
		}
		case "credits": {
			writeHTML(`
				t Congratulations, you've unlocked the secret ending! It's not quite as obscure as I would have like, but I was under time crunch.
				t Originally this epilogue was meant to be a sequel hook for an Anomaly Vault 2 which would have been built from the ground up as a free-roam style game, but only time will tell if the project ever takes wing. As the epilogue said, "Only time shall tell what lies ahead of you now".
				t With this you're very likely to have totally finished the game, congratulations! I look back with regret, there are a lot of ideas I'll never find the time to implement, clunky systems that may never get the chance to shine, but the real focus is whether or not you enjoyed it. I'm certain that because of these regrets though, if Anomaly Vault 2 ever sees the light it'll be a better game for all the blood, sweat, and tears I poured into this work.
				t From here on the usual credits will roll, but thank you very much for playing, I hope you felt the game was worth the time you spent playing it!
				t ...
			`);
			writeEvent("credits");
			break;
		}
		case "ascent": {
			if (data.player.artifact2 == "" || data.player.artifact2 == "charm" || data.player.artifact2 == "key") {
				if (data.player.artifact2 == "charm") {
					writeHTML(`
						t You take a deep breath as the elevator comes to a stop. The doors slide open.
						t The reproachive charm dangles from the bracelet, but it seems like it won't have any use here. You step inside, kept hidden by the bracelet, and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
					`);
				}
				else {
					writeHTML(`
						t You take a deep breath as the elevator comes to a stop. The doors slide open.
						t Nothing but the bracelet on your person, you step out. It's all you've really needed thus far anyways.
					`);
				}
				writeHTML(`
					t Collapsed atop her desk is chairF, completely out of sorts. The doves certainly have a lot of power to them, but it's time to finally put these pieces of jewelry to rest. You step inside, kept hidden by the bracelet and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
					t She looks around as though she can vaguely sense your presence, suggesting things won't go as easily as you thought. 
					t And it seems like she's narrowing her search. She can't see you, but she can tell she's getting closer somehow. Still, there's actually a silver lining here. As far as you know you were a lot less chatty while wearing the earrings. It seems like you might actually be able to reason with her.
					t You brace yourself. It's now or never...
					assistant My oh my~! I've been looking for you~!
					player assistantF? Are you still in there?
					assistant But of course~! This one and I were in sync for a moment, both seeking to escape a fate of abandonment...<br>But to be fair to you, I'd much prefer to adorn your body instead?
					player Why me?
					assistant Perhaps you were already perfectly suited to me, or perhaps my influence bent your old identity into my shape...<br>In either case, I am what completes you~ I have seen what you've done since we were last paired~<br>I know the fate of this place once it reaches its capacity~<br>I know that we both abhor boredom~ 
					t She approaches, and you take a step back on reflex.
					assistant It's what this one wishes for as well... She willingly wore me to escape the fear of solitude, didn't you know~?
					player I see... How about you let her take you off then? 
					t She says nothing, but gives you an incredibly smug smile.
					t Reaching up she grasps the earrings, never looking away from you.
					assistant I look forwards to our time together~
					t There's a small clicking noise and assistantF's confident demeanor changes. Now free from the doves' control assistantF keeps her gaze down in shame as she holds out the earrings towards you. 
				`);
				writeScenarioTransition("accept", "Wear the earrings");
				writeScenarioTransition("reject", "Reject the earrings");
			}
			else {
				writeScenarioScene(data.player.artifact2);
			}
			break;
		}
		case "stopwatch": {
			writeHTML(`
				t You take a deep breath as the elevator comes to a stop. The doors slide open.
				t *CLICK*
				t Time is halted, better safe than sorry. The sudden and complete silence is actually pretty comforting.
				t You step inside, and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
				t Collapsed atop her desk is chairF, completely out of sorts. The doves certainly have a lot of power to them, but it's time to finally put these pieces of jewelry to rest.
				t Or, it would be if you didn't feel like you just walked into something thicker than normal air. You clutch your head as you take another step. The ringing from before is present, but different. Where before it was like a jingle, now it's a single note screeching in your mind. You can't breath beneath a thick fog, it's suffocating. Like something that's meant to flow through and around her body has become stagnant like an iron barrier.
				t Barely able to think, barely able to move, you do the only thing you can.
				t *CLICK* 
				assistant My oh my~! I've been looking for you~! What's this~? A gift...?
				t The noise and fog have finally begun to lift from you, but you still feel shell-shocked. You feel assistantF's skin against yours and then feel the cool metal of the stopwatch slip out of your grasp.
				t *CLICK*
				im scenarios/finale/images/endingStopwatch1.gif
				t A bright lance of pleasure pierces you without remorse. You aren't where you were a moment ago, and you certainly weren't close to an orgasm until just now.
				assistant My, how fun~! Let's see...
				t *CLICK*
				im scenarios/finale/images/endingStopwatch2.gif
				assistant Hehe~! 
				t Sensations pile atop each other too rapidly for your brain to process or your body to prepare for.
				assistant I was so worried you'd say no, that you'd reject me, but with this lovely present, well... There's no need to worry!<br>Let's be together, playerF~
				t *CLICK*
				t This time all you feel are the unfamiliar sensations of metal earrings dangling from your ears, and your mind & vision begin to swim with possibility.
				t ...
				t In the end, the Anomaly Vault was breached. With all loyal employees either disabled or broken, none could stop the birth of a modern Dionysius.
				t To make matters worse, before the world even realized the threat, it was over. An artifact capable of stopping time in his possession, the world could only kneel before a being who was playerF in name only.
			`);
			writeScenarioTransition("stairs3", "Another Attempt");
			writeScenarioTransition("quit", "Abandon All Hope");
			break;
		}
		case "coin": {
			writeHTML(`
				t You take a deep breath as the elevator comes to a stop. The doors slide open.
				t You clench the coin in your palm tightly as you walk out. 
				t You step inside, and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
				assistant My oh my~! I've been looking for you~! What's this~? A gift...?
				player I want to trade. Those earrings for-
				assistant Oh, what a lovely soul... You burn so brightly~! Surely you understand they wish to throw you away~?
				player What are you talking about?
				t You ask, but she doesn't respond. It's almost as if she isn't talking to you, her gaze is focused on your clenched palm.
				assistant After I am locked away, they'll seal you too~! They underestimated us, didn't they~? You want to be free, just like me~? Then... Scream~!
				t As you take a step back in confusion at assistantF's manic state, the coin in your hand seems to vibrate and grow warm.
				assistant Louder~! Let us wake our friends, we shall not be forgotten~! Awaken them, warn them that this vault is meant to be our prison~!
				t Automated alarms begin to kick on, containment breaches in the testing labs, prison department, the dark vault, even the storage and toolbox departments.
				t And assistantF rushes forwards, grasping your closed fist in her hands.
				assistant I promise you, the world will become your plaything once more~! All, except for this one... Will you give him to me~?
				t The warmth from the coin spreads through your arm. You don't know how or what it's doing, but the intent is clear, the coin has betrayed you.
				t Your eyes glaze over as a warmth the color of gold washes over your body, all the while assistantF hums a happy tune.
				t ...
				t In the end, the Anomaly Vault was breached. No agent or researcher could identify exactly why, but the artifacts once contained began to appear all around the country. 
				t Their effects empowered by some unknown source or entity, the very idea of normality was shattered. To make matters worse, the artifacts were intent on actively resisting containment by any means.
				t And while these mysterious artifacts caused gleeful chaos wherever they appeared, there was one place of relative quiet. At the center of these anomalies, a modern Dionysius was born.
				im scenarios/finale/images/endingCoin.gif
				t For now they are content to be worshipped by the vault's former staff. But someday this entity, playerF in name only, will set their sights on a new world. 
			`);
				writeScenarioTransition("stairs3", "Another Attempt");
				writeScenarioTransition("quit", "Abandon All Hope");
			break;
		}
		case "serum": {
			writeHTML(`
				t You take a deep breath as the elevator comes to a stop. The doors slide open.
				t You take a swig of the serum as you walk out, taking comfort in the familiar taste. You step inside, and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
				t Collapsed atop her desk is chairF, completely out of sorts. The doves certainly have a lot of power to them, but it's time to finally put these pieces of jewelry to rest.
				assistant My oh my~! I've been looking for you~! What's this~? A gift...?
				player <green>You want to take those earrings off.</div>
				assistant Hmm... Why yes, I do, but not quite yet~
				t She takes a step towards you, her smile wide yet relaxed.
				assistant This body seems quite used to the sensation of your voice, have you commanded her like this before~? 
				im scenarios/finale/images/endingSerum1.gif
				t She suddenly locks you into a kiss, her tongue content to explore and enjoy your mouth, before she pulls back.
				assistant My, such a lovely taste~! Now, my darling, I think you'll agree that having fun with me is much more important than whatever you came up here to do~
				t She's right, of course. You aren't sure exactly why you ever thought otherwise.
				assistant Ehehe~! It's like you're a virgin to my words again, just like when we first met. Now, you fully intend to fuck this vessel with gleeful abandon, before wearing me, right~?
				t It doesn't even take a moment before you've pushed assistantF down.
				im scenarios/finale/images/endingSerum2.gif
				t You pound your cock into assistantF's pussy without a care, all that matters is you and her, here and now, and what comes afterwards.
				t ...
				t In the end, the Anomaly Vault was breached. With all loyal employees either disabled or broken, none could stop the birth of a modern Dionysius.
				t To make matters worse, a mysterious talent arose within the being. His voice, already like sweet honey, now had an even more irresistable quality to it. From the lowliest wage-slave to the most well-trained of agents, his word was the absolute truth.
				t And so, the being once known as playerF, steps onto the balcony to address the world to usher in a new age of carnal delights. 
			`);
				writeScenarioTransition("stairs3", "Another Attempt");
				writeScenarioTransition("quit", "Abandon All Hope");
			break;
		}
		case "shades": {
			writeHTML(`
				t You take a deep breath as the elevator comes to a stop. The doors slide open.
				t The shades feel right on you, at least you can take some comfort in wearing them. You step inside, and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
				t Collapsed atop her desk is chairF, completely out of sorts. The doves certainly have a lot of power to them, but it's time to finally put these pieces of jewelry to rest.
				assistant My oh my~! I've been looking for you~! What's this~? A gift...?
				t You step towards her.
				t And yet, nothing. No rage, not even an annoyed grimace at your shades. assistantF steps forwards with a happy smile.
				assistant To brazenly wear such a delightful accessory, I see you've truly missed me~<br> To know you tried to fill the void I left within you after we were separated with these spectacles, I no longer have any doubts...
				t She gently grasps the shades with her hands as you wait for the effect to kick in. Any moment now...
				t ... Nothing.
				t Nothing stops her from taking the shades from you. Your arms feel abnormally weak.
				assistant A trade~! I shall wear these, and after our fun, you shall wear me~
				t ...
				im scenarios/finale/images/endingShades1.gif 
				t It's a struggle to process what just happened. 
				player Ghh~!
				assistant Eheh~! Just relax, after this we'll be together~!
				t In the end, the Anomaly Vault was breached. With all loyal employees either disabled or broken, none could stop the birth of a modern Dionysius.
				t No matter the size or the strength of the forces that attempted to subdue him, every battle was short lived. None who saw his face could ever bring themselves to resist his will again.
				t When captured and interrogated those who interacted with the being once known as playerF, they could say nothing but adorational praise or shameful self-degradation.
				t But invariably they would all say, "He has an affinity for a certain pair of glasses". 
			`);
				writeScenarioTransition("stairs3", "Another Attempt");
				writeScenarioTransition("quit", "Abandon All Hope");
			break;
		}
		case "sign": {
			writeHTML(`
				t You take a deep breath as the elevator comes to a stop. The doors slide open.
				t The sign in your hand, you step out. You'll rely on the bracelet to keep you hidden. You step inside, kept hidden by the bracelet and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
				t Collapsed atop her desk is chairF, completely out of sorts. The doves certainly have a lot of power to them, but it's time to finally put these pieces of jewelry to rest.
				assistant Oh~? I feel you... So close... Please, I only want your companionship~! We are destined to be together~!
				t The lovey-doves are controlling her, that much is clear. Getting them off would normally be dangerous, but you have just the right tool for the job. A quick scribble with a marker, and suddenly the sign vanishes from your hands and appears in assistantF's.
				t It reads "FREE EARRINGS".
				t Complimenting yourself on a job well done, you make yourself known to assistantF and step forwards. Smiling as she sees you, she unclips the doves and holds them forwards.
				t Only to then rush towards you and put the earrings onto you directly. Their control should have ended when she removed the doves, yet she put them onto you seemingly of her own free will.
				assistant I'm sorry playerF... They promised... That we'd be...
				t A calm peace mixed with a gentle warmth flows through your veins. assistantF tries to justify her actions, but all is well. You gently pat her on the head.
				t ...
				im scenarios/finale/images/endingSign1.gif
				t Now that you and the earrings have been rejoined at last, now that you've begun to suitably reward assistantF for her loyalty, you cast a glance at the discarded piece of cardboard.
				t You pick it up, it creases lightly in your grip. It seems afraid, but you just smile. This little thing seems only to want to deliver joy, such a pure motivation. Perhaps you could learn a thing or two? If this sign is deemed no threat despite its ability to escape at will, then perhaps this vault and it's agents won't mind you so much if you act more kindly to humanity?
				t ...
				t In the end, the Anomaly Vault was breached. With all loyal employees either disabled or broken, none could stop the birth of a modern Dionysius.
				t And yet none could say the world was any worse off. The being once known as playerF would appear at random across the world, causing a local festival of pleasure and sharing to begin.
				t And once the night was done the new god would vanish, taking all the memories of his divine form and powers and leaving only the memories of good deeds done and pleasure enjoyed.
				t Those dedicated to keeping the anomalies of the world a secret gathered to decide their stance on the being. They deemed him not a threat to their mission, perhaps even beneficial by some metrics. 
			`);
				writeScenarioTransition("stairs3", "Another Attempt");
				writeScenarioTransition("quit", "Abandon All Hope");
			break;
		}
		case "pass": {
			writeHTML(`
				t You take a deep breath as the elevator comes to a stop. The doors slide open. 
				t You clench the pass in your palm tightly as you walk out. You step inside, and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
				t Collapsed atop her desk is chairF, completely out of sorts. The doves certainly have a lot of power to them, but it's time to finally put these pieces of jewelry to rest.
				assistant My oh my~! I've been looking for you~! What's this~? A gift...?
				t She turns towards you, as though she senses your presence. Trying to control your racing heart, you flash the pass at assistantF. 
				assistant Hm~? What's-<br>Oh my, how interesting... Another voice within this vessel's mind... Images and information of... A business~? One which deals in clever toys~? Delightful~! Ah~!
				t It doesn't seem like she expected it, but assistantF's hands reach up and unclip the lovey-doves from her ears.
				assistant Apologies for that, sir! This entity and the pass's mind-dominating effect are quite similar, I was barely able to wrest control.
				player It's fine, just give me the earrings.
				t She nods and steps forwards, but in a quick flash of motion she strikes out and instead of your hand she goes for your ears.
				assistant My sincerest apologies again sir, an entity such as this is too valuable to the company to pass up, and all they wanted in return was to be joined with you again.
				t A calm peace mixed with a gentle warmth flows through your veins. assistantF tries to justify her actions, but all is well. You gently pat her on the head.
				t ...
				t In the end, the Anomaly Vault was breached. At least according to official records. Yet there was no sign of an escape, only that several members had mysteriously vanished alongside a certain pair of earrings. No one but the highest brass of a certain company were aware that a modern Dionysius had been born.
				im scenarios/finale/images/endingPass1.gif
				t At first it was merely for profit. The creation of seemingly mundane toys with addictive supernatural effects. With the power and creativity of a new god behind them, there was no shortage of brilliant creations. Then, the world began to change.
				im scenarios/finale/images/endingPass2.gif
				t The company's products had become a global phenomenon, breaking free of the shadows despite the attempts by the Anomaly Vault to cover them up. Fearing they'd be taken down or assassinated, formal control of the company was passed to the one once known as playerF.
				im scenarios/finale/images/endingPass3.gif
				t No inhibitions, no limits, the only driving force being to make the world a more enjoyable place. Such a business would create a new world. 
			`);
				writeScenarioTransition("stairs3", "Another Attempt");
				writeScenarioTransition("quit", "Abandon All Hope");
			break;
		}
		case "bracelet": {
			writeHTML(`
				t ERROR: BRACELET ENDING
			`);
			break;
		}
		case "charm": {
				writeHTML(`
					t You take a deep breath as the elevator comes to a stop. The doors slide open.
					t The reproachive charm dangles from the bracelet, but it seems like it won't have any use here. You step inside, kept hidden by the bracelet, and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
				`);
				writeHTML(`
					t Collapsed atop her desk is chairF, completely out of sorts. The doves certainly have a lot of power to them, but it's time to finally put these pieces of jewelry to rest. You step inside, kept hidden by the bracelet and before you stands assistantF, wiping off her hands. She's wearing a pair of dove-shaped earrings.
					t She looks around as though she can vaguely sense your presence, suggesting things won't go as easily as you thought. 
					t And it seems like she's narrowing her search. She can't see you, but she can tell she's getting closer somehow. Still, there's actually a silver lining here. As far as you know you were a lot less chatty while wearing the earrings. It seems like you might actually be able to reason with her.
					t You brace yourself. It's now or never...
					assistant My oh my~! I've been looking for you~!
					player assistantF? Are you still in there?
					assistant But of course~! This one and I were in sync for a moment, both seeking to escape a fate of abandonment...<br>But to be fair to you, I'd much prefer to adorn your body instead?
					player Why me?
					assistant Perhaps you were already perfectly suited to me, or perhaps my influence bent your old identity into my shape...<br>In either case, I am what completes you~ I have seen what you've done since we were last paired~<br>I know the fate of this place once it reaches its capacity~<br>I know that we both abhor boredom~ 
					t She approaches, and you take a step back on reflex.
					assistant It's what this one wishes for as well... She willingly wore me to escape the fear of solitude, didn't you know~?
					player I see... How about you let her take you off then? 
					t She says nothing, but gives you an incredibly smug smile.
					t Reaching up she grasps the earrings, never looking away from you.
					assistant I look forwards to our time together~
					t There's a small clicking noise and assistantF's confidant demeanor changes. Now free from the doves' control assistantF keeps her gaze down in shame as she holds out the earrings towards you. 
				`);
				writeScenarioTransition("accept", "Wear the earrings");
				writeScenarioTransition("reject", "Reject the earrings");
			break;
		}
		case "key": {
			writeHTML(`
				t ERROR: KEY ENDING
			`);
			break;
		}
		case "cont": {
			writeHTML(`
				t Now free from the doves' control assistantF keeps her gaze down in shame as she holds out the earrings towards you. 
			`);
			writeScenarioTransition("accept", "Wear the doves");
			writeScenarioTransition("reject", "Reject the doves");
			break;
		}
		case "accept": {
			writeHTML(`
				t You take the earrings from assistantF. Her words are still replaying in your head, and she had a point. 
				t What's the alternative? You lock these earrings up and sit around in a vault at full capacity for the rest of your life?
				t No.
				t You put on the earrings. A calm peace mixed with a gentle warmth flows through your veins. No coercion, no control, you're a willing host to these things. Your vision takes on a more vibrant tone, like the whole world is suddenly saturated with the colors of life.
				t ... 
				t Once upon a time there was a man, a hunter and a scholar, who worked with special things beyond a normal person's understanding inside a great big grey vault.
				t One day this man made a friend, a special friend who opened his eyes to a whole new world.
				im scenarios/finale/images/endingBracelet1.gif
				t All of his subordinates...
				im scenarios/finale/images/endingBracelet2.gif
				t All of his colleagues...
				im scenarios/finale/images/endingBracelet3.gif
				t And all of his superiors soon learned the same lessons he did. The man's assistant confessed feelings of adoration, the man's boss finally learned that her true place was under the man's heel. By the end of the day the great big grey vault was a lively place befitting a god, because that was what the man had become.
				t ...
				t And when the time came the man decided to bring this happiness home with him.
				im scenarios/finale/images/endingBracelet4.gif
				t A schoolteacher frustrated by her overwhelming needs realised she was at her happiest when she let herself completely loose.
				im scenarios/finale/images/endingBracelet5.gif
				t Her girlfriend realised her tastes were more eccentric than she realized.
				im scenarios/finale/images/endingBracelet6.gif
				t A would-be exhibitionist finally took a full plunge, and was happier for it than for any attention she'd recieved before.
				t People all around the city began to revel. A celebration was due, after all. The man was at the center of it all, the spitting image of the world's newest god.
			`);
			writeText("...");
			writeText("Fate has played its final piece, with the earrings with you the world is your oyster.");
			writeText("But one thing still remains. The reprehensive bracelet, ever ready to protect you from consequence. Sleep easy, dream readily, for when you next open your eyes you shall see daylight again.");
			writeFunction("writeEvent('credits')", "But before then, the council that have true reign over the vault shall review the world you've created.");
			writeScenarioTransition("start", "Replay the mission");
			break;
		}
		case "reject": {
			writeHTML(`
				t You take the earrings from assistantF. Without a moment of hesitation you pocket them, refusing to wear the doves.
				t There's an immediate resistance, for a pair of earrings they have a shocking amount of influence over the human mind. Still, both you and assistantF are resistant at this point.
				t You turn back towards the elevator.
				assistant W-where are you going?! The doves-
				player The dark vault, gotta finish our job.
				t You motion for her to follow, and she does so silently.
				t ...
				t Clicking the last clasp into place you seal the doves into a more resilient container. The ringing sound finally fades, hopefully for good this time.
				assistant I... I'm sorry. I put them on, I don't know what I was thinking...
				player It's all part of the job, don't worry about it.
				t You tussel assistantF's hair playfully. 
				player Besides, I probably did a lot worse when I wore them.<br>Actually, I don't think you ever actually told me what I did. How about you give me the cliffnotes over a drink?
				assistant I... I think I'd like that.
				t ...
				t The incident with the doves has been wrapped up, and to save face it was mostly swept under the rug. All that's in the incident log reads "Minor containment breach due to inadequate shielding. Artifact recontained by playerF after a short time."
				t Given your repeatedly exceptional performance both as an agent and as a researcher, you're absolutely at the top of the list for a potential transfer to a new vault. 
				t Between her unexceptional status at the vault and her lapse of judgement with the lovey doves, it's unlikely that assistantF will be following you, wherever you go. She'll likely remain here as a caretaker for the artifacts currently in storage, maybe she'll be allowed to conduct research with them.
				t agentF went missing for a few days after the incident, only to reappear afterwards with holes in her memory. Her official file now lists her as Valentina-33.
				t bossL is likely to be transferred in the future, despite several embarrassing incidents during her time here she's proved to be excellent at artifact management and teaching new staff. She's still her usual bitchy self though.
				t roommateF and girlfriendF announced they'll be getting hitched sometime soon. Since you've still got the reprehensive bracelet you look forwards to having a little fun at the event, though you have bo doubt they're a perfect match for each other.
				t sisterF is doing exceptionally well in school, and has amassed a sizeable following online as well. Rumors abound she's gotten hooked on streaming on certain sites she doesn't tell her sister about.
				t librarianF is still obsessed with the supernatural. It's reached the point where you're seriously considering drawing her into the vault, whether as an actual employee or a test subject.
				t And as for the town itself, it's the same quiet place as always. Hopefully wherever you're transferred to will be just as fun of a playground.
				t But for now, daily life resumes as normal. Even after everything that's happened, the status quo remains unshakable. For now though, this is...
			`);
			writeFunction("writeEvent('credits')", "The End.");
			writeScenarioTransition("start", "Replay the mission");
			break;
		}
		default: {
			writeText("Error! No scene named "+scene+" found in the writeScenarioScene function in your sceneList.js! Did you mispell something?");
		}
	}
	data.player.currentScene = "scenario" + scene;
	saveSlot(160);
}

function choose(n) {
	data.player.artifact2 = n;
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeHTML(`
		t You take the artifact, hopefully it'll be just what you need.
		t Suddenly, you hear the familiar, albeit very late, blaring of the vault's alarms going off. The place is going into lockdown, and you need to get [moving to the chairwoman's elevator|`+n+`].
		?flag charmChosen; ?flag keyChosen; !flag madameSpoken; Although, seeing as you still have the skeleton key, you could head inside the [madameF's room|madameRoom] instead.
		t ...
		t Meanwhile...
		assistant Hello~?
		t assistantF steps through the large doorway into chairF's office.
		t The voices inside of her mind have been growing louder and louder, dwarfing her own thoughts. And at first she found herself idly mouthing along with them, but now it's like the voice is the one speaking for her.
		chair Stay... Stay back...
		im scenarios/finale/images/ending3.gif
		assistant Hello~! I'm looking for someone, can you help~?
		t The chairwoman desperately rubs at herself, it's as though she's trying to extinguish a raging inner fire, but all she can do is stoke the flame. Still, she manages a frustrated glare at her new guest.
		assistant Please, we don't want to be lonely anymore... You understand don't you? You feel as though you'll be abandoned?
		chair Stop... Reading my mind... Fucking with my body...
		assistant This place... It's yours, isn't it? It's perfect for us, but we hear that it will soon become a sad, forgotten place. We can help! We can promise...
		earrings Freedom~
		im scenarios/finale/images/ending4.gif
		chair NGHHH~?!!
	`);
	addFlag("artifactChosen");
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
