let openJournalObject = {
    "scene_name": "openJournal",
    "clue_found": "",
    "visited": "",
    "lines": [{
            "speaker_name": "Walter",
            "dialogue": "What the! A page has been ripped out. Why would that be?",
            "sprite_image": "" // Walter
        },
        {
            "speaker_name": "Walter",
            "dialogue": "I’m trying to remember in my second week Detective Roger taught me something to do with books!"
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Oh wait! That’s it!"
        },
        {
            "speaker_name": "Walter",
            "dialogue": "I’ve got to use a pencil to shade the following page to show what was written on the missing page."
        },
        {
            "speaker_name": "Walter",
            "dialogue": "It looks like a ledger listing names and amounts. That’s weird."
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Is that? That is the detective's name! What is that doing in here?"
        },
        {
            "speaker_name": "Walter",
            "dialogue": "I’d better write this down and then head to the park to see if those leaves I found upstairs mean anything."
        }
    ],
    "path1Object": "",
    "path2Object": "",
    generateOptions: function() {
      // Automatic transition
      this.path1Object = parkObject;
    }
}
