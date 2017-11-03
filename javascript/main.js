	//global variable declaration

	const debug = false;
	var quit = false;

	
	//Initialising modules
	if(debug){document.getElementById("debug").innerHTML = "loading display.js";}
	var display = require('.display.js');
	if(debug){document.getElementById("debug").innerHTML = "loading novel.js";}
	var novel = require('novel.js');
	/* //TODO - Not yet built modules
	if(debug){document.getElementById("debug").innerHTML = "lodaing timer.js";}
	var timer = require('./timer.js');
	if(debug){document.getElementById("debug").innerHTML = "loading savegame.js";}
	var saveGame = require('./savegame.js');
	*/	
		
	function playScene(sceneObject){
		this.scene = sceneObject;
		
		let i = 0;

		//Scene Line loop
		
		while(i < scene.lines.length()){ 
			if(scene.lines[i].getBGIMG() !== ''){ display.displayImage(scene.lines[i].getBGIMG(), 'background'); }
			if(scene.lines[i].getleftimg() !== ''){ display.displayImage(scene.lines[i].getLeftIMG(), 'left'); }
			if(scene.lines[i].getrightimg() !== ''){ display.displayImage(scene.lines[i].getRightIMG(), 'right'); }
			if(scene.lines[i].getaudio() !== ''){ display.displayAudio(scene.lines[i].getAudio()); }
			display.displayText(scene.lines[i].getSpeakerName(), scene.lines[i].getSceneText()
			
			document.getElementById("catchclick").addEventListener("click", i++);
		}

			// Scene Transition
		if(scene.required_clue === ''){ //check for required clue
			if(scene.path2 === ''){ //check for automatic transition
				return scene.path1; // if automatic transition, return only path1
			} else {
				return display.displayDecision(scene.path1, scene.path2); // display decision options
			}
		} else{
			if(scene.altPath2 === ''{ // check for automatic transition for alternate paths
			   return scene.altPath1;
			} else { 
			   return display.displayDecision(scene.altPath1, scene.altPath2); // display alternate decision options
			}
		}
	}
	
	//The actual novel starts playing from here
	
	var currentScene = novel.getScene('title.js'); //first scene

	do{
		currentScene = playScene(currentScene); //calls playScene, updates currentScene as it plays through the loop
		//if (!timer.isrunning){timer.start()}; //assuming we run with the title as a 'scene'
		//Automatic Savegame? 
	
	}while(!quit)
		
	//timer.stop()
	//timer.reset()
	//Return to intro/menu? Thanks for playing!

