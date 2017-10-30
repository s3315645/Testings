function displayText(textContent) {
    this.textContent = textContent;

    var i = 0;
    var speed = 60;

    /*Need the p id name and replace "getText" with that nane*/
    if (i < textContent.length) {
        document.getElementById("dialogue").innerHTML += textContent.charAt(i);
        i++;

        setTimeout(displayText, speed);
  }
}


function displayImage(imageName, imageSetting) {
    this.imageName = imageName;
    this.imageSetting = imageSetting;

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
}

function displayDecision() {

}

const debug = true;

	if(debug){
		document.getElementById('speaker').innerHTML = "Walter:";
    displayText("I have a feeling today's going to be a great day.");
	}
