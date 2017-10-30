function displayText(divID, textContent) {
    this.divID = divID;
    this.textContent = textContent;

    document.getElementById(divID).innerHTML = textContent;
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
		displayText('speaker', "Walter:");
    displayText('dialogue',"I have a feeling today's going to be a great day.");
	}
