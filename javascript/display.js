function displayText(speakerName, textContent) {
    this.speakerName = speakerName;
    this.textContent = textContent;
<<<<<<< HEAD

=======
    
    /*Should we do CSS for this type of formatting?*/
>>>>>>> 34e95c004cc250e48abb0c5cb5209ca35ab369cd
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
        document.getElementById("getText").innerHTML += txtContent.charAt(i);
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
<<<<<<< HEAD

        case 'left':
            this.alpha = 1.0;
            this.style ="position:left";
=======
            
        case 'left':
            this.style = "position:left";
            break;
            
        case 'right':
            this.style = "position:right";
>>>>>>> 34e95c004cc250e48abb0c5cb5209ca35ab369cd
            break;

        case 'right':
            this.alpha = 1.0;
            this.style = "position:right";
          break;

        default:
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
