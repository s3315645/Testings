let tellTruthObject = {
    "scene_name": "tellTruth",
    "clue_found": "false",
    "visited": false,
    "lines": [{
            "speaker_name": "Walter",
            "dialogue": "No, he's not. I'm terribly sorry sir, I was just retrieving my parcel, which I seem to have carelessly dropped.",
            "sprite_image": "" // Walter
        },
        {
            "speaker_name": "Walter",
            "dialogue": "I am actually in need of your services however: I’m afraid Detective Roger has been kidnapped, and I’m following the clues to find him.",
        },
        {
            "speaker_name": "Constable",
            "dialogue": "What?! Tell me everything, I’ll get to the bottom of this.",
            "sprite_image": "" // Constable

        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Walter describes the morning's events to the Constable...",
            "sprite_image": "" // Walter
        },
        {
            "speaker_name": "Walter",
            "dialogue": "...and that’s when you found me."
        },
        {
            "speaker_name": "Constable",
            "dialogue": "Well well; this all sounds highly suspicious. I’ll file my report back at the station, but in the meanwhile: cease your investigations and leave this to the constabulary."
        },
        {
            "speaker_name": "Constable",
            "dialogue": "Stop following the trail of clues, and wait on my say-so before you go getting yourself into more trouble. I’ll have my eye on you."
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Why is he filing a report?! This is no time for paperwork! I have no choice but to keep following the trail of clues."
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Walter exits through the park gate, then realises he isn’t sure exactly where he’s going...",

        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Should he return to the office? Or should he go to the local cinema to view the footage on the film reel?"
        }
    ],
    "path1": "",
    "path2": "",
    "path1Object": "",
    "path2Object": "",
    // options are office2 and cinema
    generateOptions: function() {
      this.path1 = "Go to Office for Spider Case info";
      this.path1Object = office2Object;
      this.path2 = "Go to Cinema to watch film";
      this.path2Object = cinemaObject;
    }
}
