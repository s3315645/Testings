	//global variable declaration

	const debug = true;
	var quit = false;

	
	//Initialising modules
	if(debug){document.getElementById("debug").innerHTML = "loading display.js";}
	var display = require('.display.js');
	if(debug){document.getElementById("debug").innerHTML = "loading novel.js";}
	var novel = require('novel.js');
	/*
	if(debug){document.getElementById("debug").innerHTML = "lodaing timer.js";}
	var timer = require('./timer.js');
	if(debug){document.getElementById("debug").innerHTML = "loading savegame.js";}
	var saveGame = require('./savegame.js');
	
	
	function clue(clueName){
		this.clueName = clueName;
		var clueFound = false;
	}
	*/	
	
	var currentScene = novel.getScene('title.js'); //first scene key
	
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
				return display.displayDecision(scene.path1, scene.path2); //
			}
		} else{
			return display.displayDecision(scene.altPath1, scene.altPath2);
		}
	}
	
	//the actual novel starts playing from here
	
	do{
		currentScene = playScene(currentScene); //calls playScene, updates currentScene as it plays through the loop
		//if (!timer.isrunning){timer.start()};
		//Automatic Savegame? 
	
	}while(!quit)
		
	//timer.stop()
	//timer.reset()
	//Return to intro/menu? Thanks for playing!

