let tellTruthObject = {
    "scene_name": "tellTruth",
    "clue_found": "false",
    "visited": "false",
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
    // if basement has not been visited, display options 2 and 3
    // if basement has been visited, display options 1 and 2
    check_visited: "basement", 
   
    "option_1_clue": {
        "title": "Go to Office for Spider Case information",
        "path": "office2.js"
    },
    "option_2_clue": {
      "title": "Go to the Cinema to watch film",
      "path": "cinema.js"
    },
    "option_3_clue": {
      "title": "Go to Office Basement",
      "path": "basement.js"
    }
}
