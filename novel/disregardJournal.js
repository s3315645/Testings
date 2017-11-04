let disregardJournalObject = {
    "scene_name": "disregardJournal",
    "clue_found": "",
    "visited": "",
    "lines": [{
            "speaker_name": "Walter",
            "dialogue": "What was that noise? What is that in the back corner?",
            "sprite_image": "", // Walter
        "sound": "" // rat
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Is that a rat? I hate rats!"
        },
        {
            "speaker_name": "Walter",
            "dialogue": "I need to get out of here!"
        },
        {
            "speaker_name": "Walter",
            "dialogue": "I’d better head to the park to see if those leaves I found upstairs mean anything."
        }
    ],
    "path1Object": "",
    "path2Object": "",
    generateOptions: function() {
      // Automatic transition
      this.path1Object = parkObject;
    }
}
