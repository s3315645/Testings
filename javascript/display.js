function displayText(speakerName, textContent) {
    this.speakerName = speakerName;
    this.textContent = textContent;

    /*Should we do CSS for this type of formatting?*/
    this.color = "#000000";
    this.position = new Position(0, 0, true);
    this.align = "left";
    this.font = '20px "Deja Vu Sans", Helvetica, Arial, sans-serif';
    this.width = 1.0; // decimal percentage
    this.visibility = "visible";

    var i = 0;
    var speed = 60;

    /*Need the p id name and replace "getText" with that nane*/
    if (i < txtContent.length) {
        document.getElementById("textBox").innerHTML += txtContent.charAt(i);
        i++;
        setTimeout(displayText, speed);
  }
}


function displayImage(imageName, imageSetting) {
    this.imageName = imageName;
    this.imageSetting = imageSetting;

    this.imageSRC = ""; /*directory where the image is located*/

    switch (imageSetting) {

        case 'background':
            this.alpha = 0.7; /*display as Opaque*/
            break;

        case 'left':
            this.style = "position:left";
            break;

        case 'right':
            this.style = "position:right";
            break;

        default:
          break;
    }

}


function displayAudio(audioName) {
    this.audioName = audioName;
    this.audioSRC = "";
}


function displayDecision(button1, button2) {
    this.button1 = button1;
    this.button2 = button2;
}

const debug = true;

	if(debug){
		document.getElementById('textBox').innerHTML =  "Debug testing";
		document.getElementById('textBox').innerHTML = "Testing background";
		displayImage('debug\debugBG.jpg', 'background');
		document.getElementById('textBox').innerHTML = "Testing Right Sprite";
		displayImage('debug\debugLS.png', 'right');
		document.getElementById('textBox').innerHTML = "Testing Left Sprite";
		displayImage('debug\debugRS.png', 'left');
		document.getElementById('textBox').innerHTML = "Testing Audio";
		displayAudio('debug\debug.mp3');
		document.getElementById('textBox').innerHTML = "Testing Text";
		displayText('Debug', 'displayText is working!');
		document.getElementById('textBox').innerHTML = "Testing decision";
		//displayDecision();
		document.getElementById('textBox').innerHTML = "Testing Finished";
	}
