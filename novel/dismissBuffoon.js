let dismissBuffoonObject = {
    "scene_name": "tellTruth",
    "clue_found": "false",
    "visited": false,
    "lines": [{
            "speaker_name": "Walter",
            "dialogue": "Yes, that’s right, and he’s not here right now, but he’s waiting on my immediate return, so if you’ll excuse me I am in quite an urgent rush.",
            "sprite_image": "" // Walter
        },
        {
            "speaker_name": "Constable",
            "dialogue": "Right you are then sir, my apologies for stopping you, we’ve had some reports of a dodgy character promising gifts for young children around is all.",
            "sprite_image": "" // Constable
        },
        {
            "speaker_name": "Constable",
            "dialogue": "Have a nice day then, good luck with that detective chap."

        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Walter walks past the policeman and exits through the park gate, then realises he isn’t sure exactly where he’s going...",

        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Should he return to the office? Or should he go to the local cinema to view the footage on the film reel?"
        }
    ],
    // possible avenues from here are basement, office two or cinema
    check_visited: function(){
      return basementObject.visited;
    },
    "path1": "",
    "path2": "",
    "path1Object": "",
    "path2Object": "",
    generateOptions: function() {
      // if basement has been visited, show office2 option
      if(this.check_visited()) {
        this.path1 = "Go to Office for Spider Case info";
        this.path1Object = office2Object;
      } else {
        // show basement option
        this.path1 = "Go to Basement";
        this.path1Object = basementObject;
      }
      this.path2 = "Go to Cinema to watch film";
      this.path2Object = cinemaObject;
    }
}
