let sinkBoxObject = {
    "scene_name": "sinkBox",
    "clue_found": "false",
    "visited": false,
    "lines": [{
            "speaker_name": "Narrator",
            "dialogue": "Walter, realising the dangers of the situation, decides that safety is more important than the integrity of whatever clue might be inside the box."
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "He rolls back his sleeves, and slowly pushes the present under the fountain’s water; holding it there for a full five minutes before retrieving it and placing it on the nearby bench."
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Walter removes the ribbon and carefully pries the lid open with a stick, revealing a curled up tarantula bigger than the size of his fist, and a soaking wet film reel.",
            "sound": "" // Box falling
        },
        {
            "speaker_name": "Walter",
            "dialogue": "A spider? That's odd. We had a case involving spiders not that long ago."
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Picking up the film reel, Walter can see that the dye from the box has seeped into the film while he held it under water, clearly damaging it."
        }
    ],
    "path1Object": "",
    "path2Object": "",
    generateOptions: function() {
      // Automatic transition
      this.path1Object = parkAfterBoxObject;
    }
}
