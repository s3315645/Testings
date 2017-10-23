this 'function displayText(speakerName, textContent) {
    this.speakerName = speakerName;
    this.textContent = textContent;
    
    this.color = "#000000";
    this.position = new Position(0, 0, true);
    this.align = "left";
    this.font = '20px "Deja Vu Sans", Helvetica, Arial, sans-serif';
    this.width = 1.0; // decimal percentage
    this.visibility = "visible";
}


function displayImage(imageName, imageSetting) {
    this.imageName = imageName;
    this.imageSetting = imageSetting;
    
    this.imageSRC = ""; /*directory where the image is located*/
    
    switch (imageSetting) {
        case 'background':
            this.alpha = 1.0; /*display as Opaque*/
            break;
        case 'foreground':
            this.alpha = .07;
            break;
        default:
    }
    
}


function displayAudio(audioName) {
    this.audioName = audioName;
    this.audioSRC = "";
}


function displayDecision(button1, button2) {
    this.button1 = buton1;
    this.button2 = button2;
}
