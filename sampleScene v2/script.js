var currentLine;
var nextLine;
var newLine;
var currentScene;

document.getElementById("start").onclick = callback;
document.getElementById("option1").onclick = callback;
document.getElementById("option2").onclick = callback;


function callback() {
    var value = this.value;
    if (window[value] == null) {
        return console.log("The " + value + " scene is under construction");
    } else {
        return loadScene(window[value]);
    }
}


function loadScene(sceneToLoad) {
    currentLine = 0;
    nextLine = 1;
    currentScene = sceneToLoad;
    sceneStatus.currentScene = "visited";
    displayLine(currentScene[currentLine]);
    newLine = currentScene[nextLine];
    document.getElementById("next").addEventListener("click", getNextLine);

    function getNextLine(){
        displayLine(newLine);
        currentLine = nextLine;
        if(nextLine < (currentScene.length-1)){
            nextLine++;
        }
        newLine = currentScene[nextLine];
    }

    function displayLine(newLine) {
        document.getElementById("dialogue").innerHTML = newLine.name + ': ' + newLine.line;
        if(newLine.hasOwnProperty('sound')) {
            var audio = new Audio(newLine.sound);
            audio.play();
        }
        if(newLine.hasOwnProperty('background')) {
            // load the new background
        }
        if(nextLine == currentScene.length-1){
            document.getElementById("next").style.visibility = "hidden";
            whereToNext();
        }
    }
}