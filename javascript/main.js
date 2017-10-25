   
	const novel = require('novel.js');
	const display = require('display.js');
	/*const timer = require('timer.js');
	const saveGame = require('savegame.js');*/
	
	function clue(clueName){
		this.clueName = clueName;
		var clueFound = false;
	}
	
	//var clues[] = new clue{'notepad'; 'clue2'; 'clue3'; 'clue4'};
	
	var currentScene = novel.getScene(/*'office key'*/);
	
	function intro(){
	
	display.displayImage('title.jpg', 'background');
	display.displayAudio('theme.mp3');
	display.displayText('','Click anywhere to begin');
		
	}
	
	
	function playScene(sceneObject){
		this.scene = sceneObject;
		
		let i = 0;

		while(i < scene.lines.length()){ 
			if(scene.lines[i].getBGIMG() !== ''){ display.displayImage(scene.lines[i].getBGIMG(), 'background'); }
			if(scene.lines[i].getleftimg() !== ''){ display.displayImage(scene.lines[i].getLeftIMG(), 'left'); }
			if(scene.lines[i].getrightimg() !== ''){ display.displayImage(scene.lines[i].getRightIMG(), 'right'); }
			if(scene.lines[i].getaudio() !== ''){ display.displayAudio(scene.lines[i].getAudio()); }
			display.displayText(scene.lines[i].getSpeakerName(), scene.lines[i].getSceneText()
			document.getElementById("catchclick").addEventListener("click", i++);
		}	
		if(scene.required_clue === ''){	return display.displayDecision(scene.path1(), scene.path2());}
		else(return display.displayDecision(scene.altPath1(), scene.altPath2());
	}
	
	//the actual novel starts playing from here
	
	intro();
	do{
		currentScene = playScene(currentScene);
		/*Automatic Savegame?*/ 
	}while(currentScene.getFileName() != /*end scene key*/) 
	
	
