let parkObject = {
    "scene_name": "park",
    "clue_found": "false",
    "visited": false,
    "lines": [{
            "speaker_name": "Narrator",
            "dialogue": "Walter briskly steps through the iron archway that marks the entrance to the baker street park.",
            "background_image": ""
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Leaves litter the path, blowing lazily about in the morning breeze, they crunch underfoot as he approaches the fountain marking the park’s centre.",
            "background_image": ""

        },
        {
            "speaker_name": "Narrator",
            "dialogue": "A small girl is sitting on a bench before the fountain; she is holding a bright red box tied with a yellow ribbon, nobody else is in sight."

        },
        {
            "speaker_name": "Walter",
            "dialogue": "Excuse me ma’am, but where are your parents? Are you alone here?",
            "sprite_image": "/images/OFFICE_g004.png"
        },
        {
            "speaker_name": "Little Girl",
            "dialogue": "Oh no, I’m just waiting for Walter. I have a present for him. Are you Walter?",
            "sprite_image": ""
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Yes, I am Walter. Who gave you the present?"
        },
        {
            "speaker_name": "Little Girl",
            "dialogue": "There was a man, he was tall. He said if I gave you the present I would get a special prize."
        },
        {
            "speaker_name": "Walter",
            "dialogue": "Special prize? What kind of prize?"
        },
        {
            "speaker_name": "Little Girl",
            "dialogue": "(giggles) Why, only the best prize of all. A unicorn!"
        },
        {
            "speaker_name": "Walter",
            "dialogue": "I see. That is a special prize indeed. May I please have the present?"
        },
        {
            "speaker_name": "Little Girl",
            "dialogue": "Okay, here you go. I shook it around a little bit while I was waiting, and there was a funny bumping sound and then something hissed inside the box."
        },
        {
            "speaker_name": "Little Girl",
            "dialogue": "Now I’m going to find my unicorn! "
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "With that, the little girl skips away humming to herself. Walter holds the box up, and gently rattles it."
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Sure enough, a small hissing soon sounds within the box." ,
            "sound": ""
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Walter thinks it over: He could just open the box, but the hissing could be something dangerous."
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "Looking around, he sees only one place nearby to safely ‘defuse’ whatever could be inside."
        },
        {
            "speaker_name": "Narrator",
            "dialogue": "What will Walter do next?"
        }
    ],
    "path1": "",
    "path2": "",
    "path1Object": "",
    "path2Object": "",
    generateOptions: function() {
      // Only two options here
      this.path1 = "Open the Box";
      this.path1Object = openBoxObject;
      this.path2 = "Defuse the Box";
      this.path2Object = sinkBoxObject;
    }
}
