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
	
	var currentScene = novel.getScene('office1.js'); //first scene key
	
	function playScene(sceneObject){
		this.scene = sceneObject;
		

		
		function displayLine(i){
		if(scene.lines[i].getBGIMG() !== ''){ display.displayImage(scene.lines[i].getBGIMG(), 'background'); }
		if(scene.lines[i].getleftimg() !== ''){ display.displayImage(scene.lines[i].getLeftIMG(), 'left'); }
		if(scene.lines[i].getrightimg() !== ''){ display.displayImage(scene.lines[i].getRightIMG(), 'right'); }
		if(scene.lines[i].getaudio() !== ''){ display.displayAudio(scene.lines[i].getAudio()); }
		display.displayText(scene.lines[i].getSpeakerName(), scene.lines[i].getSceneText()
		}
		
		//Scene Line loop

		let i = 0;
				    
		while(i < scene.lines.length()){ 
			document.getElementById("next").addEventListener("click", displayLine(i);
			i++;
		}

			// Scene Transition
			scene.generateOptions()
			if(scene.path2 === ''){ //check for automatic transition
				return scene.path1Object; // if automatic transition, return only path1
				
			} else {
				if (display.displayDecision(scene.path1, scene.path2) === scene.path1){ //Determination of scene transition target
					return scene.path1Object;
				} else {
					return scene.path2Object;
				}
	}
	
	//the actual novel starts playing from here
	
	do{
		//TODO intro() 
		currentScene = playScene(currentScene); //calls playScene, updates currentScene as it plays through the loop
		//if (!timer.isrunning){timer.start()};
		//Automatic Savegame? 
	
	}while(!quit)
		
	//timer.stop()
	//timer.reset()
	//Return to intro/menu? Thanks for playing!

