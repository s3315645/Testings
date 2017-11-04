var basementObject = {
  "scene_name": "basement",
  "visited": false,
  "lines": [{
            "speaker_name": "Walter",
            "dialogue": "I’ll check the basement first. Clues might be hidden down here…",
            "sprite_image": "" // Walter
        },
        {
            "speaker_name": "Walter",
            "dialogue": "It is dark down here, where is that string for the light? I can never seem to find it."
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Woah! I didn’t expect this much stuff down here. Where do I even start?",
            "sound": "" // light click

        },
        {
            "speaker_name": "Walter",
            "dialogue": "I think I might begin at this desk. Man, it is dusty."
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Where did it even come from? I can barely read the cover."
        },
        {
            "speaker_name": "Walter",
            "dialogue": "This journal looks interesting! It doesn't seem like it belongs on the desk. I might begin here."
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Where did it even come from? I can barely read the cover. Should I open it?"
        }
    ],
    "path1": "",
    "path2": "",
    "path1Object": "",
    "path2Object": "",
    // options are open journal and disregard journal
    generateOptions: function() {
      this.path1 = "Open the Journal";
      this.path1Object = openJournalObject;
      this.path2 = "Disregard the Journal";
      this.path2Object = disregardJournalObject;
    }
}
