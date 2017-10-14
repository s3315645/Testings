// Creating objects for Office(1) Scene
// sceneText object = 
// new lineObject(string speakerName, string textContent, optional file audioFile)

function lineObject(speakerName, textContent, audioFile) {
    this.speakerName = speakerName;
    this.textContent = textContent;
    this.audioFile = '';
}

var officeOneText = [];

officeOneText[0] = new lineObject("Walter", "Oh no, oh no, oh no! Late again. Detective Roger's going to kill me!");

officeOneText[1] = new lineObject("Walter", "Keys, keys where are my...huh? Why is the door ajar?"); 

officeOneText[2] = new lineObject("Walter", "Why is the office in disarray?");

officeOneText[3] = new lineObject("Walter", "Detective Roger, are you here? Detective Roger!!");

// Requires phone ring audioFile
officeOneText[4] = new lineObject("Walter", "What happened here??? This is a mess, who would do this? And where is the Detective?!");

officeOneText[5] = new lineObject("Walter", "Hello?");

officeOneText[6] = new lineObject("Sinister voice", "Hello Walter. I would say good morning, but I expect it hasn't proven to be a particularly good one for you so far, ha ha ha...");

officeOneText[7] = new lineObject("Walter", "Who is this??!");

officeOneText[8] = new lineObject("Sinister voice", "Well, now that's not important. What is important is the whereabouts of your beloved Detective Roger.");

officeOneText[9] = new lineObject("Walter", "Where is he? ? What have you done with him you creep?!!");

officeOneText[10] = new lineObject("Sinister voice", "Now, now, there's no need for name calling. I understand that you are the Detective's apprentice, and that Detective Roger has been passing on everything he knows about the craft of detection to you -");

officeOneText[11] = new lineObject("Walter", "How do you know that? Who are you???");

officeOneText[12] = new lineObject("Sinister voice", "You are very fortunate indeed to be in such a position. It is an enviable one, that's for sure. So, why don't we see just how worthy you are of the privilege? I'm going to give you 12 hours to find the Detective."); 

officeOneText[13] = new lineObject("Walter", "*gulps* And if I don't?");

officeOneText[14] = new lineObject("Sinister voice", "Well, do you by any chance remember the Gruesome Case of the Pickled Parrot?");

officeOneText[15] = new lineObject("Walter", "How could I forget, it was my first day on the job, it was...horrifying.");

officeOneText[16] = new lineObject("Sinister voice", "Ha ha! I'm sure it was. Well, we wouldn't want the Detective to meet the same fate as that parrot now, would we?");

officeOneText[17] = new lineObject("Walter", "What?! You monster, I'll find you and I'll, I'll....");

// Requires sound effect of phone hangup click
officeOneText[18] = new lineObject("Sinister voice", "What? Faint, like you did at the Pickled Parrot crime scene? Ha ha ha! Enough of this. The Detective's fate is in your hands. You have everything you need to find your precious Detective Roger...providing, that is, you're good enough.");

officeOneText[19] = new lineObject("Walter", "Oh no, oh no, oh no! What am I going to do?!! I don't know where to start. Detective Roger would know what to do...wait, what *would* Detective Roger do?"); 

officeOneText[20] = new lineObject("Walter", "Never disturb the crime scene. I'll look for clues, carefully."); 

officeOneText[21] = new lineObject("Walter", "Hmmm, why are there leaves on the ground? These are strange, in fact I can only recall ever having seen these in the park down on Baker Street."); 

officeOneText[22] = new lineObject("Walter", "What else do we have...well, look here, an ink smudge. I didn't leave that there, and it certainly wasn't the Detective."); 

officeOneText[23] = new lineObject("Walter", "It's the same colour as those typewriter ribbons the Detective imports from Venice - Paolo Veronese Green. He's very particular about it. I think he keeps the ribbons locked in the basement.");

officeOneText[24] = new lineObject("Walter", "There's a lot of mess here, but I can't see anything else out of the ordinary. I think I should follow the leads I’ve gathered so far."); 

officeOneText[25] = new lineObject("Walter", "Now, should I head to the Basement or the Park?");


