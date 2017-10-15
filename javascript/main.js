/* Luke - Hey team, this is just the pseudocode I wrote up for the minute; 
I'll probably break it down further to modularize the code, make it easier for everyone to do the individual parts
*/

/*HTML will be mostly just a box to hold the JS,
CSS holds the background image, which the JS will modify at need.
*/


	object saveGame{ //TODO - still needs thought

		var sceneFile //initialised to first story scene, we can overwrite that with the savegame if it exists.
		var clues[] //Once we have the proper list of these I guess we can just stick them here as some kind of boolean array for when they're collected. eg clues[1,1,1,0,1]
		var timeClock = 5minutes;
		var endReached = false;

	}
	
  
	object timer{  //TODO - this still needs thought. probably async?
		
	}


JS program.Main{ //This Main program simply sets up some global variables, enables graphics display and acts as a general menu
    
	initialise timer object //timer not yet revealed or started, just warming up the global variable for use. Async maybe?
	initialise saveGame object //Not entirely sure about the implementation of this yet, but I'm sure we have time to figure that out better
	initialise graphics area?
		
	do{
	
		titleFunction /*Goes to title, once title is clicked we engage the timer and display on screen, probably some background music here, and a sound effect of some kind on leaving,
						also probably needs to know if there's an active savegame and display a 'load previous attempt' button */
		story.Program(saveGame)
		
	}while(!end) //I don't know if we need a 'quit' function, if we do I suppose that'll go into the title? basically the title is just a stopping point from doing nothing to actually doing the story.
	
}

--

story.Program(saveGame){ //This method loads and loops through each scene element until it hits an end; and houses some other necessary variables

	new saveGameObject saveGame

	IF(saveGame.exists){ //overwrite saveGame data into variables

		this.saveGame.clues = saveGame.clues;
		this.saveGame.sceneFile = saveGame.sceneFile; 
		this.saveGame.timeClock = saveGame.timeClock;
		this.saveGame.endReached = saveGame.endReached;
		
		//probably another "are you ready?" clickthrough
	}

	do{

		this.saveGame = sceneFunction(sceneFile)
		saveGame(sceneFile, clues, timeClock)

	} while(!endReached)
}

---

scene.Function(sceneFile){  //This method unpacks the actual scene from a sceneFile, displays all the script and hands the background image to the image handler, then passes a link to the next sceneFile

    var scene = sceneFile 
    load scene.graphics //update background image
    load scene.audioBGAmbience //update background ambient noise
	 
    //iterate through script chunks + sound effects / whatever
	//Once the text chunks are all clear, we go to the decision that moves us to the next scene, probably some kind of buttons/graphics need to appear, we'll also need to check spec to see how manipulable those elements need to be.
	 
    IF(Scenefile.object.paths == 2) // Most scenes will only have 2 options for story movement, but if we end up with one with 3 or more it'd be best to plan for it.
	{
	 
		// display choices
		// get user input to select next scene
		// return new sceneFile
	 
    } 
    else
	{
	
		// display choices
	
		caseIF(//getUserInput)
		{ 
				
			case 1: //return selected scene
			case 2: //return selected scene
			case 3: //return selected scene

		}

	}
	
}	
		 
