let parkAfterBoxObject = {
    "scene_name": "parkAfterBox",
    "clue_found": "false",
    "visited": "false",
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
    "option_1_clue_required": "box",
    "option_2_clue_required": "box",
    "option_1_clue": {
      "title": "Tell the Truth",
      "path": "tellTruth.js"
    },
    "option_2_clue": {
      "title": "Dismiss the Buffoon",
      "path": "dismissBuffoon.js"
    }
}
