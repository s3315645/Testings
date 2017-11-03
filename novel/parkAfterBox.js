let parkAfterBoxObject = {
    "scene_name": "parkAfterBox",
    "clue_found": "false",
    "visited": false,
    "lines": [{
            "speaker_name": "Narrator",
            "dialogue": "An authoritative voice sounds from behind Walter.",
            "background_image": ""
        },
        {
            "speaker_name": "Authoritative Voice",
            "dialogue": "Halt! What’s going on here now? Identification please."

        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Walter turns slowly, and sees the voice belongs to a Constable, holding his truncheon firmly in his right hand.",
            "sprite_image": "" // Walter
        },
        {
            "speaker_name": "Constable",
            "dialogue": "Wait a minute, I know you; you helped out with that jewel robbery nobody could figure out last month with that smarmy detective guy: Roger?",
            "sprite_image": "" // Constable
        },
        {
            "speaker_name": "Constable",
            "dialogue": "He’s not around here now is he? I can’t say if’n I like that arrogant knowitall."
        }
    ],
    "path1": "",
    "path2": "",
    "path1Object": "",
    "path2Object": "",
    generateOptions: function() {
      // Only two options here
      this.path1 = "Tell the Truth";
      this.path1Object = tellTruthObject;
      this.path2 = "Dismiss the Buffoon";
      this.path2Object = dismissBuffoonObject;
    }
}
