var currentLine = 0;
var nextLine = 1;
var newLine;

displayLine(scene_lines[currentLine]);
newLine = scene_lines[nextLine];
document.getElementById("next").addEventListener("click", getNextLine);

function getNextLine(){
    displayLine(newLine);
    currentLine = nextLine;
    if(nextLine < (scene_lines.length-1)){
        nextLine++;
    }
    newLine = scene_lines[nextLine];
}

function displayLine(newLine) {
    document.getElementById("dialogue").innerHTML = newLine.name + ': ' + newLine.line;
    if(newLine.hasOwnProperty('sound')) {
        var audio = new Audio(newLine.sound);
        audio.play();
    }
    if(nextLine == scene_lines.length-1){
        document.getElementById("next").style.visibility = "hidden";
    }
}
