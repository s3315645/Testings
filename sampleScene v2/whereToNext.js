/* There are two outcomes to a scene, either a decision for the player: displayOptions(option1,option2),
   or an automatic transition to a brief linking scene: loadScene(x-To-y-Link).
   So far we have 29 cases plus the default. */

function whereToNext(){
  switch(true) {
    case(currentScene == office1):
      displayOptions("basement", "park");
      break;
    case(currentScene == basement && sceneStatus.park == "notVisited"):
      loadScene(basementToParkLink);
      break;
    case(currentScene == basementToParkLink):
      loadScene(park);
      break;
    case(currentScene == basement && sceneStatus.park == "visited"):
      loadScene(basementToOffice2Link);
      break;
    case(currentScene == basementToOffice2Link):
      loadScene(office2);
      break;
    case(currentScene == park && sceneStatus.basement == "notVisited"):
      displayOptions("basement", "cinema");
      break;
    case(currentScene == park && sceneStatus.basement == "visited"):
      displayOptions("office2", "cinema");
      break;
    case(currentScene == office2):
      loadScene(sfh1);
      break;
    case(currentScene == sfh1 && sceneStatus.cinema == "notVisited"):
      displayOptions("orchard", "cinema");
      break;
    case(currentScene == sfh1 && sceneStatus.cinema == "visited"):
      displayOptions("orchard", "docks");
      break;
    case(currentScene == sfh1 && sceneStatus.cinema == "notVisited"):
      displayOptions("orchard", "cinema");
      break;
    case(currentScene == sfh1 && sceneStatus.cinema == "visited"):
      displayOptions("orchard", "docks");
      break;
    case(currentScene == cinema && sceneStatus.sfh1 == "notVisited"):
      displayOptions("sfh1", "docks");
      break;
    case(currentScene == cinema && sceneStatus.sfh1 == "visited" && sceneStatus.orchard == "notVisited"):
      displayOptions("orchard", "docks");
      break;
    case(currentScene == cinema && sceneStatus.orchard == "visited"):
      loadScene(cinemaToDocksLink);
      break;
    case(currentScene == cinemaToDocksLink):
      loadScene(docks);
      break;
    case(currentScene == orchard && sceneStatus.cinema == "notVisited"):
      loadScene(orchardToCinemaLink);
      break;
    case(currentScene == orchardToCinemaLink):
      loadScene(cinema);
      break;
    case(currentScene == orchard && sceneStatus.cinema == "visited"):
      loadScene(orchardToDocksLink);
      break;
    case(currentScene == orchardToDocksLink):
      loadScene(docks);
      break;
    case(currentScene == docks && sceneStatus.sfh1 == "notVisited"):
      loadScene(docksToSfh1);
      break;
    case(currentScene == docksToSfh1):
      loadScene(sfh1);
      break;
    case(currentScene == docks && sceneStatus.sfh1 == "visited" && sceneStatus.orchard == "notVisited"):
      loadScene(docksToOrchardLink);
      break;
    case(currentScene == docksToOrchardLink):
      loadScene(orchard);
      break;
    case(currentScene == docks && sceneStatus.orchard == "visited"):
      displayOptions("sfh2", "gala");
      break;
    case(currentScene == gala && sceneStatus.sfh2 == "notVisited"):
      loadScene(galaToSfh2Link);
      break;
    case(currentScene == galaToSfh2Link):
      loadScene(sfh2);
      break;
    case(currentScene == sfh2):
      displayOptions("gala", "sfAccusation");
      break;
    case(currentScene == gala && sceneStatus.sfh2 == "visited"):
        inTime = checkTime();
        if(inTime) {
          loadScene(victory);
        } else if(feignedIllness) {
          loadScene(arrested);
        } else {
          loadScene(harvested);
        }
      break;
    default:
      console.log("There is an unhandled story point in the findChoices() method. Current scene is: " + currentScene);
  }
}

function displayOptions(option1, option2) {
    document.getElementById('option1').innerHTML=option1;
    document.getElementById('option2').innerHTML=option2;
    document.getElementById('option1').value=option1;
    document.getElementById('option2').value=option2;
    document.getElementById('option1').style.visibility="visible";
    document.getElementById('option2').style.visibility="visible";
}

function checkTime() {
  // logic to calculate if player took > 5 mins
}
