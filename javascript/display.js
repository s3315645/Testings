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

const debug = true;

if(debug){
	displayText('speaker', "Walter:");
  displayText('dialogue',"I have a feeling today's going to be a great day.");
}

// this function takes two strings and changes the labels on the option buttons
// to match those strings. Also displays the buttons (makes them visible)
function displayOptions(firstOption, secondOption) {
    document.getElementById("button1").innerHTML = firstOption;
    document.getElementById("button2").innerHTML = secondOption;
    document.getElementById("options").style.display = 'inline';
}

// hides the option buttons
function hideOptions() {
  document.getElementById("options").style.display = 'none';
}
