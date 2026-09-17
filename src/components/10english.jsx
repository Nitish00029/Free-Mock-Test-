// BSEBClass10EnglishMockTest.jsx
import React, { useState, useEffect } from "react";

// --- BSEB Class 10 English Question Bank (100 questions) ---
const englishQuestions = [
  {
    question: "How did the rich man work?",
    option:[
            "from morning to evening",
            "from morning to noon",
            "from noon to morning",
            "from morning to midnight"
    ],
    answer:"from morning to midnight"
},

{
    question: "The Poet wants to live unseen and ____",
    option:[
            "painfully",
            "unknown",
            "quietly",
            "publicly"
    ],
    answer:"unknown"
},

{
    question: "The correct meaning of ‘pile’ is ………………..",
    option:[
            "dust",
            "dirt",
            "heap",
            "garbage"
    ],
    answer:"heap"
},

{
    question: "What kind of women was Munni.",
    option:[
            "She was the wife of Haiku",
            "She was a typical housewife",
            "She was very concerned about her incomes and husband",
            "All of the above"
    ],
    answer:"All of the above"
},

{
    question: "Malasha put down her foot and splashed dirty water on Akoulya's ____",
    option:[
            "neck",
            "hands",
            "hair",
            "frock"
    ],
    answer:"frock"
},

{
    question: "Civilization has changed and grown in ____",
    option:[
            "England",
            "America",
            "Africa",
            "India"
    ],
    answer:"India"
},

{
    question: "Which of the following is the recent novel of Toni Morrison ?",
    option:[
            "Merchant",
            "Paradise",
            "Apartheid",
            "None of these"
    ],
    answer:"Paradise"
},

{
    question: "The poet is 'Ode on Solitude' wants to live ____",
    option:[
            "seen",
            "unseen",
            "remembered",
            "praised"
    ],
    answer:"unseen"
},

{
    question: "The events in Oslo to award Nobel Peace Prize fell on the Day of …………",
    option:[
            "freedom",
            "international human rights",
            "freedom struggle",
            "none of these"
    ],
    answer:"international human rights"
},

{
    question: "The poem \\\"The Empty Heart' tells about the problems caused by____",
    option:[
            "poverty",
            "content on",
            "greed",
            "anger"
    ],
    answer:"greed"
},

{
    question: "The old woman lived",
    option:[
            "with family",
            "alone",
            "far",
            "near"
    ],
    answer:"alone"
},

{
    question: "The poet calls things like health and virtue.",
    option:[
            "Gifts",
            "Prizes",
            "Curses",
            "Defects"
    ],
    answer:"Gifts"
},

{
    question: "The narrator uses the paper route to ……………….. the people.",
    option:[
            "scold",
            "preach",
            "glad",
            "convince"
    ],
    answer:"convince"
},

{
    question: "Indian culture is amazing because of its ____",
    option:[
            "myth",
            "logic",
            "vitality",
            "courage"
    ],
    answer:"vitality"
},

{
    question: "When does a polythene bag make a noise?",
    option:[
            "when burnt",
            "when touched",
            "when smelled",
            "when pressed"
    ],
    answer:"when touched"
},

{
    question: "‘Once Upon a Time’ is a…………….",
    option:[
            "story",
            "fiction",
            "speech",
            "biography"
    ],
    answer:"speech"
},

{
    question: "Like a conjurer, Walter De La Mare create an atmosphere of ____",
    option:[
            "mystery",
            "town",
            "school",
            "country"
    ],
    answer:"mystery"
},

{
    question: "The act of willingly taking something that is offered",
    option:[
            "freedom",
            "democracy",
            "acceptance",
            "speech"
    ],
    answer:"acceptance"
},

{
    question: "Periyasamy Thooran was born in____",
    option:[
            "1908",
            "1907",
            "1906",
            "1905"
    ],
    answer:"1908"
},

{
    question: "Language alone………………..us from the scariness of things with no names",
    option:[
            "caught",
            "protects",
            "reminds",
            "amuse"
    ],
    answer:"protects"
},

{
    question: "What does Martha do in the hazel glen?",
    option:[
            "Makes merry",
            "Tells her stories",
            "Wanders",
            "Sleep"
    ],
    answer:"Tells her stories"
},

{
    question: "When the narrator went to his house Mr. Johnson ran to his",
    option:[
            "house",
            "car",
            "garden",
            "school"
    ],
    answer:"car"
},

{
    question: "Who’s dedication and personal sacrifice comes to be a worthy symbol through whom the plight of all the people of Burma may be recognised?",
    option:[
            "Aung San Suu Kyi",
            "Her Son",
            "People of Burma",
            "None of these"
    ],
    answer:"Aung San Suu Kyi"
},

{
    question: "The two little girls were dressed in ____",
    option:[
            "new clothes",
            "dirty clothes",
            "splashed clothes",
            "none of these"
    ],
    answer:"new clothes"
},

{
    question: "What happens when we burn it?",
    option:[
            "it turns into ash",
            "it gives a poisonous smell",
            "it becomes volatile",
            "None of these"
    ],
    answer:"it gives a poisonous smell"
},

{
    question: "Satyajit Ray was a well known ____",
    option:[
            "actor",
            "film director",
            "singer",
            "artist"
    ],
    answer:"film director"
},

{
    question: "Humayun Kabir was a famous ____",
    option:[
            "dramatist",
            "musician",
            "essayist",
            "story writer"
    ],
    answer:"essayist"
},

{
    question: "Who called the two little girls 'Dear little soul'?",
    option:[
            "The old woman",
            "Akoulya's mother",
            "The writer",
            "Malasha's mother"
    ],
    answer:"The writer"
},

{
    question: "The Porter has to climb up in the ____",
    option:[
            "hill",
            "rain and shower",
            "uphill",
            "snows of winter"
    ],
    answer:"snows of winter"
},

{
    question: "On his last night, Gillu came down from his swing to the",
    option:[
            "Garden",
            "Narrator’s bed",
            "Departure",
            "Opening"
    ],
    answer:"Narrator’s bed"
},

{
    question: "Who came to India?",
    option:[
            "Many races and tribes",
            "Many invaders",
            "Many foreigners",
            "Many leaders"
    ],
    answer:"Many races and tribes"
},

{
    question: "Malasha's ____ came out and started scolding Akoulya's mother.",
    option:[
            "father",
            "mother",
            "brother",
            "sister"
    ],
    answer:"mother"
},

{
    question: "A poem written in fourteen lines is called ____",
    option:[
            "an ode",
            "an elegy",
            "a sonnet",
            "a lyric"
    ],
    answer:"a sonnet"
},

{
    question: "Which of the following work of Premchand was banned by the British Govt. ?",
    option:[
            "Godan",
            "Nirmala",
            "Soye Vatan",
            "None of these"
    ],
    answer:"Soye Vatan"
},

{
    question: "In the poem 'The Empty Heart', the man was rich, but not____",
    option:[
            "wealthy",
            "worthy",
            "content",
            "clever"
    ],
    answer:"content"
},

{
    question: "Choose the antonym of ‘hold’ from the given words",
    option:[
            "mess",
            "release",
            "snatch",
            "heap"
    ],
    answer:"release"
},

{
    question: "Akoulya's ____ tried to stop the fight between the adults.",
    option:[
            "father",
            "mother",
            "grandfather",
            "grandmother"
    ],
    answer:"grandmother"
},

{
    question: "Martha used to tell ____ stories.",
    option:[
            "interesting",
            "wonderful",
            "enchanting",
            "mythological"
    ],
    answer:"wonderful"
},

{
    question: "In the poem 'Ode On Solitude', where is the happy man content to live?",
    option:[
            "in town",
            "in his own ground",
            "in the heaven",
            "in an orchard"
    ],
    answer:"in his own ground"
},

{
    question: "Discrimination against or hostility",
    option:[
            "endorse",
            "racism",
            "plight",
            "struggle"
    ],
    answer:"racism"
},

{
    question: "Which festival is referred to by the writer in the story ‘Little Girls Wiser than Man'?",
    option:[
            "Christmas",
            "Easter",
            "Holi",
            "None of these"
    ],
    answer:"Easter"
},

{
    question: "The porter carried ____ kilo on his back.",
    option:[
            "38",
            "25",
            "35",
            "40"
    ],
    answer:"25"
},

{
    question: "The ancient world threw up fine flowers of ____",
    option:[
            "culture",
            "civilization",
            "character",
            "unity"
    ],
    answer:"civilization"
},

{
    question: "Mr. Williams was at his ………………..",
    option:[
            "school",
            "house",
            "garden",
            "weekend"
    ],
    answer:"house"
},

{
    question: "Whose hurt melts down like polythene bag?",
    option:[
            "men’s",
            "women’s",
            "poet’s",
            "none of these"
    ],
    answer:"poet’s"
},

{
    question: "Did she know about their motive ?",
    option:[
            "Yes",
            "No",
            "Confused",
            "None of these"
    ],
    answer:"Yes"
},

{
    question: "According to the essay \\\"What is wrong with Indian Films', the average American film is a/an ____",
    option:[
            "bad model",
            "average model",
            "good model",
            "excellent model"
    ],
    answer:"bad model"
},

{
    question: "'Walk carefully' who says?",
    option:[
            "Akoulya",
            "Malasha",
            "Malasha's mother",
            "Akoulya's mother"
    ],
    answer:"Akoulya"
},

{
    question: "The children used to listen to Martha, lying on their ____",
    option:[
            "elbows",
            "hands",
            "bed",
            "backs"
    ],
    answer:"elbows"
},

{
    question: "The poem 'The Empty Heart' highlights a great human____",
    option:[
            "boldness",
            "greatness",
            "weakness",
            "promptness"
    ],
    answer:"weakness"
},

{
    question: "Jabra barked his………………and trotted on toward the orchard.",
    option:[
            "management",
            "settelment",
            "confinement",
            "agreement"
    ],
    answer:"agreement"
},

{
    question: "Which route does the author follow ?",
    option:[
            "Physical Route",
            "Communication Route",
            "Paper Route",
            "None of these"
    ],
    answer:"Paper Route"
},

{
    question: "Laxmi Prasad Devkota obtained a Bachelor degree from ____",
    option:[
            "Bihar University",
            "Mithila University",
            "Benaras University",
            "Patna University"
    ],
    answer:"Patna University"
},

{
    question: "Who were Sakas and Huns?",
    option:[
            "Foreigners",
            "Invader on India",
            "Great tribes",
            "Respected leaders"
    ],
    answer:"Great tribes"
},

{
    question: "In a heavily guarded compounds in Rangoon, what is taking place?",
    option:[
            "the lonely struggle",
            "the freedom",
            "the democracy",
            "Nobel peace prize"
    ],
    answer:"the lonely struggle"
},

{
    question: "Akoulya and Malasha took off their ____ and stockings.",
    option:[
            "handkerchief",
            "shoes",
            "hairbands",
            "bags"
    ],
    answer:"shoes"
},

{
    question: "Nobody’s willing to do anything about ………………..",
    option:[
            "environment",
            "ecology",
            "neighbourhood",
            "country"
    ],
    answer:"ecology"
},

{
    question: "Who is the father of the old woman?",
    option:[
            "an American",
            "an American black slave",
            "an English",
            "a Russian"
    ],
    answer:"an American black slave"
},

{
    question: "Javier Perez de Cuellar was the Secretary-General of…………….",
    option:[
            "America",
            "Japan",
            "Europe",
            "United Nations"
    ],
    answer:"United Nations"
},

{
    question: "Listening to the……………..songs the nightingale becomes mute in a town.",
    option:[
            "radio",
            "television",
            "headphone",
            "gramophone"
    ],
    answer:"gramophone"
},

{
    question: "What made him mad?",
    option:[
            "Greedy tendency",
            "Excessive desire",
            "Insatiable greed",
            "Wrecked health"
    ],
    answer:"Excessive desire"
},

{
    question: "A happy man spends his time ____",
    option:[
            "growing crops",
            "playing cricket",
            "studying books",
            "enjoying travelling"
    ],
    answer:"studying books"
},

{
    question: "Mahadevi Verma was an……………poetess.",
    option:[
            "African",
            "American",
            "Indian",
            "Sri Lankan"
    ],
    answer:"Indian"
},

{
    question: "The man looked at the ____",
    option:[
            "girls",
            "children",
            "women",
            "old man"
    ],
    answer:"girls"
},

{
    question: "In the poem 'Sleeping porter', what distance does the porter cover in the snows of winter?",
    option:[
            "Five miles",
            "Six miles",
            "Seven miles",
            "None of these"
    ],
    answer:"Six miles"
},

{
    question: "‘To pay attention’ means same as",
    option:[
            "the greed",
            "to heed",
            "stand up",
            "give fees"
    ],
    answer:"to heed"
},

{
    question: "Which animal messes up Ms. Greene’ yard?",
    option:[
            "cow",
            "rat",
            "cat",
            "dog"
    ],
    answer:"dog"
},

{
    question: "The polythene bag melts down when a little…………….is applied.",
    option:[
            "Chemical",
            "Fertiliser",
            "Warmth",
            "Water"
    ],
    answer:"Warmth"
},

{
    question: "According to poetry who made the town?",
    option:[
            "God",
            "Government",
            "Man",
            "None of these"
    ],
    answer:"Man"
},

{
    question: "Antonym of the word ‘exception’ is",
    option:[
            "different",
            "talented",
            "ordinary",
            "special"
    ],
    answer:"ordinary"
},

{
    question: "The porter enjoys a good and peaceful ____",
    option:[
            "sleep",
            "walk",
            "laugh",
            "journey"
    ],
    answer:"sleep"
},

{
    question: "published early in 1998?",
    option:[
            "Satyajit Ray",
            "Toni Morrison",
            "Leo Tolstoy",
            "Joan Lcxau"
    ],
    answer:"Toni Morrison"
},

{
    question: "Mr. Chairman, the whole international Community has applauded the choice of your………………",
    option:[
            "age",
            "prize",
            "country",
            "committee"
    ],
    answer:"country"
},

{
    question: "Women use too many ……………….. things.",
    option:[
            "mixer",
            "boxer",
            "mixing",
            "electric"
    ],
    answer:"electric"
},

{
    question: "The porter is wearing a ____ cap.",
    option:[
            "black",
            "blue",
            "gray",
            "white"
    ],
    answer:"black"
},

{
    question: "\\\"The Unity of Indian Culture', was a lecture delivered by Humayun Kabir at _____",
    option:[
            "Banglore University",
            "Baroda University",
            "Delhi University",
            "Bombay University"
    ],
    answer:"Baroda University"
},

{
    question: "The rich man wrecked his____",
    option:[
            "desire",
            "pitchers",
            "car",
            "health"
    ],
    answer:"health"
},

{
    question: "According to the poet, health and virtue can be found in",
    option:[
            "Towns",
            "Cities",
            "Villages",
            "Factories"
    ],
    answer:"Villages"
},

{
    question: "Akoulya's mother struck ____",
    option:[
            "Malasha",
            "Malasha's mother",
            "Akoulya",
            "Akoulya's aunt"
    ],
    answer:"Malasha"
},

{
    question: "Martha was a ____",
    option:[
            "Preacher",
            "story teller",
            "teacher",
            "speaker"
    ],
    answer:"story teller"
},

{
    question: "Who was Dhanpat Rai?",
    option:[
            "Mool Chand",
            "Gyan chand",
            "PremChand",
            "none of these"
    ],
    answer:"PremChand"
},

{
    question: "How does polythene bags affect environment?",
    option:[
            "it pollutes",
            "it breaks",
            "both (A) and (B)",
            "none"
    ],
    answer:"it pollutes"
},

{
    question: "What does the technician blame for the weakness of Indian films?",
    option:[
            "Style",
            "Raw materials",
            "Tools",
            "Idiom"
    ],
    answer:"Tools"
},

{
    question: "Alexander Pope was one of the greatest satirist of the early ____ century.",
    option:[
            "18th",
            "19th",
            "20th",
            "16th"
    ],
    answer:"18th"
},

{
    question: "How would Gillu inform that he was hungry?",
    option:[
            "By twitternig ‘Chik-Chik’",
            "By running towards the narrator",
            "By climbing towards the narrator",
            "By sitting on the table"
    ],
    answer:"By twitternig ‘Chik-Chik’"
},

{
    question: "____ has characterised Indian story throughout the ages.",
    option:[
            "Spirit of Unity",
            "Spirit of Toleration",
            "Vitality",
            "Rich culture"
    ],
    answer:"Spirit of Unity"
},

{
    question: "Where did Satyajit Ray win award at film festival ?",
    option:[
            "Paris",
            "London",
            "Cannes",
            "Goa"
    ],
    answer:"Cannes"
},

{
    question: "Jim asked Mrs. Greene to keep the old newspapers for the school-going children who ……….. them.",
    option:[
            "Burnt",
            "Bought",
            "Read",
            "Collected"
    ],
    answer:"Collected"
},

{
    question: "In the story 'Little Girls wiser than Man', the girls are named ____",
    option:[
            "Maria and Anne",
            "Malasha and Akoulya",
            "Mary and Maria",
            "Natasha and Jinny"
    ],
    answer:"Malasha and Akoulya"
},

{
    question: "Some young people visited the",
    option:[
            "bird",
            "author",
            "old woman",
            "slaves"
    ],
    answer:"old woman"
},

{
    question: "The Burmese people can today hold their head ……………………..",
    option:[
            "a little bigger",
            "a little shorter",
            "a little higher",
            "a little lower"
    ],
    answer:"a little higher"
},

{
    question: "____ is reigning over the rich kingdom of sleep.",
    option:[
            "The King",
            "The Porter's mother",
            "The Porter's son",
            "The Porter"
    ],
    answer:"The Porter"
},

{
    question: "Jabra looked ………….. at the fire.",
    option:[
            "wagged",
            "fright",
            "fearfully",
            "warm"
    ],
    answer:"fearfully"
},

{
    question: "What according to author is good for garden ?",
    option:[
            "Fertiliser",
            "Irrigation",
            "Compost",
            "None of these"
    ],
    answer:"Compost"
},

{
    question: "Mahadevi Verma died in the year",
    option:[
            "1907",
            "1905",
            "1967",
            "1987"
    ],
    answer:"1987"
},

{
    question: "Who is the author of the article ‘Acceptance Speech’?",
    option:[
            "Aung San Suu Kyi",
            "Khuswant Singh",
            "R. C. Hutchinson",
            "Rohinton Mistry"
    ],
    answer:"Aung San Suu Kyi"
},

{
    question: "Gillu was put to eternal rest under_____.",
    option:[
            "Money plant creeper",
            "Son juhi-creeper",
            "A mango-tree",
            "A peepale-tree"
    ],
    answer:"Son juhi-creeper"
},

{
    question: "How does the germs of disease grow?",
    option:[
            "when thrown away",
            "when left in garbage bin",
            "when left untouched",
            "none of these"
    ],
    answer:"when left in garbage bin"
},

{
    question: "Who greatly surprised everyone after three to four months by the improvement in his health?",
    option:[
            "The narrator",
            "The Cow",
            "Gillu",
            "The Crow"
    ],
    answer:"Gillu"
},

{
    question: "'Like a bird/his heart is twittering' is from ____",
    option:[
            "Koel",
            "Martha",
            "The Sleeping Porter",
            "The Polythene Bag"
    ],
    answer:"The Sleeping Porter"
},

{
    question: "The letters are exchanged between a mother and ____",
    option:[
            "father",
            "son",
            "mother-in-law",
            "daughter"
    ],
    answer:"daughter"
},

{
    question: "The old woman was……………enough to know she could not help the young people.",
    option:[
            "Stupid",
            "Intelligent",
            "Strong",
            "Suspicious"
    ],
    answer:"Intelligent"
},

{
    question: "It's _____ that specially distinguishes the culture of India as per 'The Unity of Indian Culture'.",
    option:[
            "Variety of religions",
            "Unity of people",
            "Unbroken continuity",
            "Cultural Variety"
    ],
    answer:"Unbroken continuity"
},

{
    question: "In the poem 'Ode On Solitude' the poet draws a beautiful picture of ____",
    option:[
            "a Village",
            "a poor man",
            "a happy man",
            "a town"
    ],
    answer:"a happy man"
},

{
    question: "Who told the crowd that the two little girls were wiser than them?",
    option:[
            "a passerby",
            "neighbours",
            "Akoulya's grandmother",
            "Malasha's grandfather"
    ],
    answer:"Akoulya's grandmother"
},

{
    question: "Munshi Premchand was born in",
    option:[
            "Munghyr",
            "Lucknow",
            "Varanasi",
            "Patna"
    ],
    answer:"Varanasi"
},

{
    question: "Which film is mentioned in \\\"What is wrong with Indian films\\\"?",
    option:[
            "Charulata",
            "Shatranj ke Khelari",
            "Dharti-ke-Lal",
            "Panchali"
    ],
    answer:"Dharti-ke-Lal"
},

{
    question: "The moonbeam slides between ……………………",
    option:[
            "‘he ho ises",
            "the sleeping leaves",
            "shades",
            "none of these"
    ],
    answer:"the sleeping leaves"
},

{
    question: "Happy man has no ____",
    option:[
            "health",
            "land",
            "money",
            "care"
    ],
    answer:"care"
},

{
    question: "Who had made the Acceptance Speech?",
    option:[
            "Alexander Aris",
            "Aung San Suu Kyi",
            "Alexander Pope",
            "William Moris"
    ],
    answer:"Alexander Aris"
},

{
    question: "What does not get dissolved into the earth’s crust?",
    option:[
            "a stone",
            "a hurt",
            "a bag",
            "a polythene bag"
    ],
    answer:"a polythene bag"
},

{
    question: "The narrator liked to believe that on some____ days Gillu would come back to life as a small Juhi flower:",
    option:[
            "Winter",
            "Spring",
            "Summer",
            "Autumn"
    ],
    answer:"Spring"
},

{
    question: "The narrator told Mr. Williams not to burn leaves as it is…………….. for the air and ecology",
    option:[
            "Excellent",
            "Bad",
            "Good",
            "Helpful"
    ],
    answer:"Bad"
},

{
    question: "The mother in \\\"Two Horizons' was ____ to read the letter of her daughter.",
    option:[
            "disturbed",
            "angry",
            "jealous",
            "delighted"
    ],
    answer:"delighted"
},

{
    question: "Who has composed the poem 'Martha'?",
    option:[
            "Walter de la Mare",
            "William Shakespeare",
            "William Cowper",
            "Alexander Pope"
    ],
    answer:"Walter de la Mare"
},

{
    question: "Where is the life least threatened?",
    option:[
            "in towns",
            "in the fields and groves",
            "in villages",
            "none of these"
    ],
    answer:"in the fields and groves"
},

{
    question: "How was the old woman ?",
    option:[
            "Blind",
            "Wise",
            "Softly Spoked",
            "A. S. U."
    ],
    answer:"Blind but wise"
},

{
    question: "Malasha plumped down her ____",
    option:[
            "shoes",
            "frock",
            "feet",
            "hands"
    ],
    answer:"feet"
},

{
    question: "In India, the difference between the masses and classes is not one of quality but of information and ____",
    option:[
            "opportunity",
            "food",
            "dress",
            "hair"
    ],
    answer:"opportunity"
},

{
    question: "Indians have shown the power to make _____ changes and of becoming used to new situations.",
    option:[
            "big",
            "little",
            "monstrous",
            "gigantic"
    ],
    answer:"big"
},

{
    question: "Gillu was very sad because of the narrator’s.",
    option:[
            "Presence",
            "Absence",
            "Sickness",
            "Scolding"
    ],
    answer:"Absence"
},

{
    question: "The poem is the translation of Tamil poem____",
    option:[
            "Kurari Kudam",
            "Aparajto",
            "Kudam",
            "Yama"
    ],
    answer:"Kurari Kudam"
},

{
    question: "Who was ‘Jabra’?",
    option:[
            "dog",
            "sheep",
            "ox",
            "monkey"
    ],
    answer:"dog"
},

{
    question: "Aung San Suu Kyi was fighting for …………. in Burma.",
    option:[
            "Democracy",
            "Dictatorship",
            "Monarchy",
            "Tyranny"
    ],
    answer:"Democracy"
},

{
    question: "What was the common name of Gillu?",
    option:[
            "gallu",
            "glihri",
            "Golu",
            "gilahari"
    ],
    answer:"gilahari"
},

{
    question: "The drawing room in 'Sun and Moon' was full of _____",
    option:[
            "servants",
            "guests",
            "labourers",
            "priests"
    ],
    answer:"guests"
},

{
    question: "How many blocks away was the post office from Mr. Johnson’s house?",
    option:[
            "one",
            "two",
            "three",
            "four"
    ],
    answer:"two"
},

{
    question: "The demon desire now made him____ which had the power.",
    option:[
            "sad",
            "pleased",
            "mad",
            "happy"
    ],
    answer:"mad"
},

{
    question: "The Nobel Prize for Peace was accepted on behalf of………….",
    option:[
            "The people",
            "Aung San Suu Kyi",
            "Alexander Aris",
            "none of these"
    ],
    answer:"Aung San Suu Kyi"
},

{
    question: "What has made the man idle?",
    option:[
            "Luxurious life",
            "Comfortable devices",
            "Packed foods",
            "None of these"
    ],
    answer:"Comfortable devices"
},

{
    question: "When the narrator sat down to write, Gillu wanted to catch her ………………..",
    option:[
            "attention",
            "pen",
            "papers",
            "hair"
    ],
    answer:"attention"
},

{
    question: "Radha looks like _____",
    option:[
            "sharper than the crescent in the sky",
            "thinner than the crescent in the sky",
            "wider than the crescent in the sky",
            "Bigger than the crescent in the sky"
    ],
    answer:"thinner than the crescent in the sky"
},

{
    question: "Which of the following prize was awarded to Suu Kyi?",
    option:[
            "Nobel Prize",
            "Rafto Prize",
            "Sakharov Prize",
            "All of these"
    ],
    answer:"All of these"
},

{
    question: "In 'The Pace for Living,' the author saw a play in :",
    option:[
            "Denmark",
            "Dublin",
            "Denver",
            "Delhi"
    ],
    answer:"Dublin"
},

{
    question: "The word ‘Compost’ means same as",
    option:[
            "manure",
            "gardening",
            "pollution",
            "ecology"
    ],
    answer:"manure"
},

{
    question: "If the polythene bag is left to itself, it …………the environment.",
    option:[
            "Beautifies",
            "Cleans",
            "Changes",
            "Pollutes"
    ],
    answer:"Pollutes"
},

{
    question: "The daughter in the story 'Two Horizons' learnt everything from her mother except ____",
    option:[
            "secret of laughter",
            "importance of wealth",
            "mantra of loving pain",
            "hardship of loving life"
    ],
    answer:"importance of wealth"
},

{
    question: "Martha had small lovely ____",
    option:[
            "head",
            "chin",
            "eyes",
            "lips"
    ],
    answer:"head"
},

{
    question: "Who developed cold feet?",
    option:[
            "The narrator",
            "The girl",
            "The girl's father",
            "The narrator's father"
    ],
    answer:"The narrator"
},

{
    question: "Who gives a happy man his bread?",
    option:[
            "His bakery",
            "His trees",
            "His fields",
            "His herds"
    ],
    answer:"His fields"
},

{
    question: "What name did Mahadevi Verma give to the squirrel?",
    option:[
            "Gauti",
            "Gill",
            "Gomti",
            "Gillu"
    ],
    answer:"Gillu"
},

{
    question: "The Porter's son is shivering with ____",
    option:[
            "fever",
            "hunger",
            "cold",
            "winter"
    ],
    answer:"cold"
},

{
    question: "Greed is____ but life is not.",
    option:[
            "good",
            "bad",
            "worthy",
            "endless"
    ],
    answer:"endless"
},

{
    question: "An alcoholic drink made from apple juice",
    option:[
            "rider",
            "cider",
            "clairvoyant",
            "none of these"
    ],
    answer:"cider"
},

{
    question: "Aris feels that the common people of Burma would be the ultimate…………….when Burma became a peaceful and free country.",
    option:[
            "Winners",
            "Losers",
            "Rulers",
            "Slaves"
    ],
    answer:"Winners"
},

{
    question: "India has become the _____ after Hollywood in film production.",
    option:[
            "second",
            "third",
            "fifth",
            "sixth"
    ],
    answer:"second"
},

{
    question: "The discontented man prayed for____",
    option:[
            "one pot of gold",
            "two pots of gold",
            "seven pots of gold",
            "eight pots of gold"
    ],
    answer:"one pot of gold"
},

{
    question: "The narrator realised that he was not ____ to become an I.A.S. officer.",
    option:[
            "happy",
            "weak",
            "intelligent",
            "determined"
    ],
    answer:"intelligent"
},

{
    question: "Suddenly Jabra picked up the………….of some animal.",
    option:[
            "sound",
            "calling",
            "cry",
            "noise"
    ],
    answer:"noise"
},

{
    question: "Which word in the passage is known as ‘filth’ ?",
    option:[
            "Garbage",
            "Compost",
            "Ecology",
            "Fawn"
    ],
    answer:"Garbage"
},

{
    question: "'Martha' chin was ____",
    option:[
            "wide",
            "flat",
            "broad",
            "narrow"
    ],
    answer:"narrow"
},

{
    question: "Where did the two girls came from?",
    option:[
            "Temple",
            "Church",
            "Mosque",
            "Gurudwara"
    ],
    answer:"Church"
},

{
    question: "When does a happy man get sleep?",
    option:[
            "At night",
            "During the day",
            "During the morning",
            "During the evening"
    ],
    answer:"At night"
},

{
    question: "In the lesson 'Two Horizons' the mother feels ____ to learn about her daughter's tiredness.",
    option:[
            "happy",
            "jolly",
            "unhappy",
            "grateful"
    ],
    answer:"unhappy"
},

{
    question: "Sun and Moon went downstairs hand in hand to meet the _____",
    option:[
            "guests",
            "neighbours",
            "friends",
            "relatives"
    ],
    answer:"guests"
},

{
    question: "The porter is in deep ____",
    option:[
            "slumber",
            "thought",
            "grief",
            "pain"
    ],
    answer:"slumber"
},

{
    question: "The story's author 'The Pace for Living' enjoyed going in a car at ______.",
    option:[
            "Ninety miles an hour",
            "Eighty miles an hour",
            "Sixty miles an hour",
            "Seventy miles an hour"
    ],
    answer:"Ninety miles an hour"
},

{
    question: "“Gillu” is about true friendship between a human being and a/an …………",
    option:[
            "animal",
            "alien",
            "micro organism",
            "ghost"
    ],
    answer:"animal"
},

{
    question: "Where is the polythene bag buried?",
    option:[
            "inside the earth",
            "inside the garbage bins",
            "inside the water",
            "none of these"
    ],
    answer:"inside the earth"
},

{
    question: "Where do you find fields and groves?",
    option:[
            "in villages",
            "in towns",
            "in forests",
            "in cities"
    ],
    answer:"in villages"
},

{
    question: "What is there on the cliff?",
    option:[
            "Pond",
            "Hut",
            "River",
            "Palace"
    ],
    answer:"Hut"
},

{
    question: "India offers a potential market for her own ___",
    option:[
            "cinema",
            "music",
            "products",
            "film"
    ],
    answer:"products"
},

{
    question: "Who messes up Ms. Greene’s yard?",
    option:[
            "Mr. Johnson",
            "The narrator",
            "A cat",
            "A dog"
    ],
    answer:"A dog"
},

{
    question: "In the poem \\\"Thinner than a crescent\\\", where is Radha crying?",
    option:[
            "On the bank",
            "In the river",
            "In the lake",
            "None of these"
    ],
    answer:"On the bank"
},

{
    question: "The rich man asked for a____.",
    option:[
            "pot of silver",
            "pot of gold",
            "pot of diamond",
            "pot of jewellery"
    ],
    answer:"pot of gold"
},

{
    question: "____ was not honest in his relationship.",
    option:[
            "The author",
            "The narrator",
            "The girl",
            "The girlfriend"
    ],
    answer:"The narrator"
},

{
    question: "Gillu always wanted to catch Mahadevi Verma’s:",
    option:[
            "pen",
            "bed cover",
            "attention",
            "sari"
    ],
    answer:"attention"
},

{
    question: "The life span of squirrels is",
    option:[
            "One year",
            "Four Years",
            "Two years",
            "Two weeks"
    ],
    answer:"Two years"
},

{
    question: "Where have old civilization and culture grown and changed?",
    option:[
            "America",
            "England",
            "India and China",
            "None of these"
    ],
    answer:"India and China"
},

{
    question: "Whatever Mr. Gessler earned was spent in",
    option:[
            "Roti and dal",
            "bread and butter",
            "rent and leather",
            "shoes and boots"
    ],
    answer:"rent and leather"
},

{
    question: "Binapani Mohanty got ____ academy award in 1990.",
    option:[
            "Oriya",
            "Bengla",
            "Sahitya",
            "Marathi"
    ],
    answer:"Sahitya"
},

{
    question: "How would she begin her speech according to the son of Aung San Suu Kyi?",
    option:[
            "With thanks",
            "With Joy",
            "By saying, that she accepts Nobel Prize in the name of all the people of Burma",
            "None of these"
    ],
    answer:"By saying, that she accepts Nobel Prize in the name of all the people of Burma"
},

{
    question: "Where is life better?",
    option:[
            "in towns",
            "in villages",
            "in markets",
            "in homes"
    ],
    answer:"in villages"
},

{
    question: "The children's mother called them_____",
    option:[
            "foolish",
            "stupid",
            "naughty",
            "dull"
    ],
    answer:"naughty"
},

{
    question: "____ is the most amazing aspect of Indian culture.",
    option:[
            "myth",
            "courage",
            "vitality",
            "logic"
    ],
    answer:"vitality"
},

{
    question: "Munni advised Haiku to hire himself out as a",
    option:[
            "Tenant",
            "Labourer",
            "Farmer",
            "Shopkeeper"
    ],
    answer:"Labourer"
},

{
    question: "The Poet narrates the story of a____",
    option:[
            "Poor man",
            "healthy man",
            "rich man",
            "greedy man"
    ],
    answer:"greedy man"
},

{
    question: "Alexander Pope was one of the greatest ____",
    option:[
            "dramatist",
            "novelist",
            "essayist",
            "satirist"
    ],
    answer:"satirist"
},

{
    question: "In 'The Pace for Living,' R.C. Hutchinson discusses:",
    option:[
            "the happiness of men",
            "the agony of modern man",
            "the dilemma of people",
            "None of these"
    ],
    answer:"the agony of modern man"
},

{
    question: "What does the word ‘abode’ mean in ‘Gillu’?",
    option:[
            "Home",
            "Garden",
            "Foreign",
            "Field"
    ],
    answer:"Home"
},

{
    question: "Who has run to Lord Krishna?",
    option:[
            "Radha's friend",
            "Radha's sister",
            "Radha's mother",
            "Radha's aunt"
    ],
    answer:"Radha's friend"
},

{
    question: "Who occupies a prominent position in Oriya literature?",
    option:[
            "Durga Prasad Panda",
            "Laxmi Prassed Devkota",
            "Periasamy Thooran",
            "None of these"
    ],
    answer:"Durga Prasad Panda"
},

{
    question: "It is hard to get people to work for…………….",
    option:[
            "Environment",
            "Harmony",
            "Forestation",
            "Ecology"
    ],
    answer:"Ecology"
},

{
    question: "Who has written this article “January Night”?",
    option:[
            "Premchand",
            "Dr. Rana S. P. Singh",
            "Anton Chekov",
            "John Galsworthy"
    ],
    answer:"Premchand"
},

{
    question: "Why did the young people visit the old woman ?",
    option:[
            "To say her to leave her house",
            "To disprove her clairvoyance",
            "To approve her clairvoyance",
            "None of these"
    ],
    answer:"To disprove her clairvoyance"
},

{
    question: "Children sit on their elbows ____",
    option:[
            "down",
            "up",
            "below",
            "lolled"
    ],
    answer:"lolled"
},

{
    question: "Why could Haiku not guard his field?",
    option:[
            "due to his sleep",
            "due to cold",
            "due to laginess",
            "none of these"
    ],
    answer:"due to his sleep"
},

{
    question: "Both the girls in the story 'Little Girls wiser than Man', had ____",
    option:[
            "red handkerchiefs",
            "blue handkerchiefs",
            "yellow handkerchiefs",
            "white handkerchiefs"
    ],
    answer:"red handkerchiefs"
},

{
    question: "Gillu was an ………….",
    option:[
            "exception",
            "extra-ordinary",
            "excellent",
            "animal"
    ],
    answer:"animal"
},

{
    question: "Toni Morrison also won the Pulitzer Prize for",
    option:[
            "Story",
            "Poem",
            "fiction",
            "essay"
    ],
    answer:"fiction"
},

{
    question: "The daughter in \\\"Two Horizons' does not wish to ____ any more.",
    option:[
            "dream",
            "cry",
            "fight",
            "laugh"
    ],
    answer:"dream"
},

{
    question: "Sun was very _____ to see how the pretty things had been destroyed.",
    option:[
            "unhappy",
            "sad",
            "jealous",
            "upset"
    ],
    answer:"upset"
},

{
    question: "How did the author know him?",
    option:[
            "As an artist",
            "As a professional shoe trader",
            "As a commercial artist",
            "None of these"
    ],
    answer:"As an artist"
},

{
    question: "Like whom the poet did not hesitate in giving clear-cut opinion about the issues of his time?",
    option:[
            "William Cowper",
            "Keats",
            "Wordsworth",
            "Thooran"
    ],
    answer:"Wordsworth"
},

{
    question: "The author points out the defects of Indian ____",
    option:[
            "culture",
            "theatre",
            "dance",
            "films"
    ],
    answer:"films"
},

{
    question: "What is more precious than diamond or silver or gold?",
    option:[
            "genuine brother",
            "international community",
            "genuine people",
            "genuine brotherhood"
    ],
    answer:"genuine brotherhood"
},

{
    question: "What do you mean by ‘Hurt’?",
    option:[
            "Luxurious",
            "Painful",
            "Comfortable",
            "Troublesome"
    ],
    answer:"Painful"
},

{
    question: "Akoulya and ____ took off their shoes and stockings.",
    option:[
            "Ankita",
            "Malasha",
            "Amisha",
            "Sharapova"
    ],
    answer:"Malasha"
},

{
    question: "Radha's tears have carved a _____",
    option:[
            "river",
            "statue",
            "sea",
            "hole"
    ],
    answer:"river"
},

{
    question: "The essay 'The Pace for Living', captures the agony of_______.",
    option:[
            "a modern man",
            "a sick man",
            "a policeman",
            "a postman"
    ],
    answer:"a modern man"
},

{
    question: "What does the porter's body emit?",
    option:[
            "coloured lights",
            "radiation",
            "sulphur like smell",
            "fragrance"
    ],
    answer:"sulphur like smell"
},

{
    question: "Pope, in the poem 'Ode on Solitude', says that village people get everything except ____",
    option:[
            "Milk from herds",
            "Bread from fields",
            "Attire from flocks",
            "Money from trees"
    ],
    answer:"Money from trees"
},

{
    question: "Satyajit Ray is the writer of _____",
    option:[
            "What is wrong with Indian films",
            "What is wrong with Indian Festivals",
            "What is wrong with Indian Foods",
            "What is wrong with Indian Books"
    ],
    answer:"What is wrong with Indian films"
},

{
    question: "Mahadevi Verma is the author of:",
    option:[
            "Gillu",
            "The pace of Living",
            "With is Wrong with Indian Films",
            "Once Upon a Time"
    ],
    answer:"Gillu"
},

{
    question: "The man tried all tricks to gather____",
    option:[
            "jewellery",
            "gold",
            "silver",
            "diamonds"
    ],
    answer:"gold"
},

{
    question: "When was Aung San Suu Kyi born?",
    option:[
            "19 June, 1945",
            "21 July, 1944",
            "8 November, 1948",
            "25 September, 1946"
    ],
    answer:"19 June, 1945"
},

{
    question: "Why did the narrator give up the ambition to become an I.A.S. officer because ____",
    option:[
            "he was not intelligent",
            "he was foolish",
            "he was not extra ordinary",
            "he was not curious to study"
    ],
    answer:"he was not extra ordinary"
},

{
    question: "Gillu was buried under the Sonjuhi creeper because he loved it……………..",
    option:[
            "much",
            "more",
            "most",
            "least"
    ],
    answer:"most"
},

{
    question: "Sakas and Huns came after ____",
    option:[
            "The British",
            "The Mughal",
            "The Greek",
            "The Aryans"
    ],
    answer:"The Aryans"
},

{
    question: "What disability did the woman have ?",
    option:[
            "Fatness",
            "Unable to move",
            "Blindness",
            "Could not talk"
    ],
    answer:"Blindness"
},

{
    question: "Sun and Moon are the names of _____",
    option:[
            "Guests",
            "Children",
            "Adults",
            "Servants"
    ],
    answer:"Children"
},

{
    question: "The porter is out of ____",
    option:[
            "courage",
            "breath",
            "money",
            "energy"
    ],
    answer:"breath"
},

{
    question: "‘Pratigya’ and ‘Karmabhoomi’ were the well-known works of",
    option:[
            "Renu",
            "Premchand",
            "GiridharJha",
            "None of these"
    ],
    answer:"Premchand"
},

{
    question: "It is the feeling of belonging to one ____ that is so special about Indian Culture.",
    option:[
            "religion",
            "group",
            "region",
            "race"
    ],
    answer:"group"
},

{
    question: "Where was Mrs. Greene piling newspapers ?",
    option:[
            "Next to her garbage bags",
            "In the corner of garden",
            "Anywhere in campus",
            "None of these"
    ],
    answer:"Next to her garbage bags"
},

{
    question: "When the author visited Mr. Gessler’s shop after a gap of nearly two years, he found another …………….. name also painted on one of the windows of the shop.",
    option:[
            "Bootmaker’s",
            "Baker’s",
            "Florist’s",
            "Plumber’s"
    ],
    answer:"Bootmaker’s"
},

{
    question: "Who shouted at Malasha?",
    option:[
            "The old man",
            "Akoulya's grandmother",
            "The old woman",
            "Akoulya"
    ],
    answer:"Akoulya"
},

{
    question: "Meditation ____ the happy man.",
    option:[
            "pleases",
            "sadness",
            "worries",
            "angry"
    ],
    answer:"pleases"
},

{
    question: "A polythene bag cannot be",
    option:[
            "made",
            "recycled",
            "destroyed",
            "none of these"
    ],
    answer:"destroyed"
},

{
    question: "You shouldn’t take your car when you don’t ……………….. to.",
    option:[
            "go",
            "come",
            "run",
            "need"
    ],
    answer:"need"
},

{
    question: "Radha's friends were _____ about her.",
    option:[
            "angry",
            "happy",
            "worried",
            "ecstatic"
    ],
    answer:"worried"
},

{
    question: "The mother wants her daughter to seek ____ within herself.",
    option:[
            "solace",
            "fulfilment",
            "peace",
            "happiness"
    ],
    answer:"fulfilment"
},

{
    question: "Aris felt the Nobel peace prize given to Suu Kyi would help the Burmese people to…………themselves a little more.",
    option:[
            "Overestimate",
            "Respect",
            "Underestimate",
            "Indulge"
    ],
    answer:"Respect"
},

{
    question: "The thrush departs …………….",
    option:[
            "sacred",
            "gladly",
            "scared",
            "boldly"
    ],
    answer:"scared"
},

{
    question: "Gillu would inform by twittering:",
    option:[
            "tick- tick",
            "tring- tring",
            "chik- chik",
            "cring- cring"
    ],
    answer:"chik- chik"
},

{
    question: "In the essay 'The Pace for Living' the Corn merchant is______.",
    option:[
            "an ambitious man",
            "an anxious man",
            "an adventurous man",
            "None of these"
    ],
    answer:"an anxious man"
},

{
    question: "The narrator in ‘Love Defiled' was not____",
    option:[
            "honest",
            "selfish",
            "good looking",
            "charming"
    ],
    answer:"good looking"
},

{
    question: "Every one of the slaves knew that the next stop will be their",
    option:[
            "First",
            "Second",
            "Fourth",
            "Last"
    ],
    answer:"Last"
},

{
    question: "The Cinema ____ in various measures the function of poetry, music painting, drama, architecture and host of other arts, major and minor.",
    option:[
            "combines",
            "destroys",
            "deletes",
            "rescues"
    ],
    answer:"combines"
},

{
    question: "The Aryan came to a country which was ____",
    option:[
            "civilized",
            "uncivilized",
            "good natured",
            "None of these"
    ],
    answer:"civilized"
},

{
    question: "The real cook in the story ‘Sun and Moon' is _____",
    option:[
            "Sun",
            "Minnie",
            "Moon",
            "Ginnie"
    ],
    answer:"Minnie"
},

{
    question: "Once the author went into Mr. Gessler’s shop in a pair of boots bought at some large",
    option:[
            "art",
            "firm",
            "town",
            "bank"
    ],
    answer:"firm"
},

{
    question: "Gillu’s favourite food was …………..",
    option:[
            "Rice",
            "Bread",
            "Kaju",
            "Jam"
    ],
    answer:"Kaju"
},

{
    question: "What is the source of light in Villages in the evening?",
    option:[
            "seen",
            "moon",
            "lamp",
            "none of these"
    ],
    answer:"moon"
},

{
    question: "At the end of the story, Haiku is",
    option:[
            "Sad",
            "Confused",
            "Angry",
            "Contented"
    ],
    answer:"Contented"
},

{
    question: "The tree granted him silver pots full of____",
    option:[
            "gold",
            "coins",
            "jewellery",
            "diamond"
    ],
    answer:"gold"
},

{
    question: "Who is the author of \\\"Little Girls Wiser Than Man\\\"?",
    option:[
            "Bladimir Narakov",
            "Maxim Gorki",
            "Leo Tolstoy",
            "Katherins Mansfield"
    ],
    answer:"Leo Tolstoy"
},

{
    question: "The poet enjoys shades of trees in ____",
    option:[
            "winter",
            "summer",
            "rainy season",
            "autumn"
    ],
    answer:"summer"
},

{
    question: "What is the mother searching for in the poem 'The Sleeping porter'?",
    option:[
            "Warm clothes",
            "Nettles and Vines",
            "The porter",
            "Her son"
    ],
    answer:"Nettles and Vines"
},

{
    question: "How many letters stand in the story 'Two Horizons'?",
    option:[
            "two",
            "three",
            "four",
            "five"
    ],
    answer:"two"
},

{
    question: "In the story ‘Gillu’, the narrator cleaned the wounds of the baby squirrel and applied______.",
    option:[
            "Dettol",
            "toothpaste",
            "penicillin",
            "none of these"
    ],
    answer:"penicillin"
},

{
    question: "What does a polythene bag give out when it is burnt?",
    option:[
            "gives fragrance",
            "exudes a pungent smell",
            "gives some noise",
            "none of these"
    ],
    answer:"exudes a pungent smell"
},

{
    question: "Martha used to tell her stories to the ____",
    option:[
            "villagers",
            "children",
            "army",
            "people"
    ],
    answer:"children"
},

{
    question: "Who was cheating the corn merchant?",
    option:[
            "His Son",
            "His Nephew",
            "His Daughter",
            "His Wife"
    ],
    answer:"His Nephew"
},

{
    question: "After all we do possess the primary tools of ____",
    option:[
            "film making",
            "dancing",
            "writing",
            "acting"
    ],
    answer:"film making"
},

{
    question: "Which tree had the power to grant, wishes in the poem 'The Empty Heart'?",
    option:[
            "Pipal",
            "Banyan",
            "Neem",
            "Kalpaka"
    ],
    answer:"Kalpaka"
},

{
    question: "Culture is always a complex of ____ strands of varying importance and vitality.",
    option:[
            "two",
            "three",
            "four",
            "many"
    ],
    answer:"many"
},

{
    question: "Why was Akoulya's mother angry?",
    option:[
            "Her daughter's frock became dirty.",
            "Her daughter started weeping.",
            "Her daughter became wet",
            "Her daughter began to quarrel"
    ],
    answer:"Her daughter's frock became dirty."
},

{
    question: "When the narrator in 'Love Defiled' got married, he did not invite his ex girl friend to his____",
    option:[
            "sister's marriage",
            "picnic party",
            "tour",
            "wedding"
    ],
    answer:"wedding"
},

{
    question: "Who watches TV twenty-seven hours a day around here?",
    option:[
            "Joan Lexau",
            "Ms. Greene",
            "Jim",
            "none of these"
    ],
    answer:"Jim"
},

{
    question: "To whom does the friend of Radha make a report?",
    option:[
            "Ram",
            "Krishna",
            "Shiva",
            "Bal Ram"
    ],
    answer:"Krishna"
},

{
    question: "The sadness of the slaves made them sit with their………..bent",
    option:[
            "Wrists",
            "Shoulders",
            "Spoons",
            "Legs"
    ],
    answer:"Shoulders"
},

{
    question: "The Sleeping Porter has been composed by ____",
    option:[
            "Laxmi Prasad Devkota",
            "Puran Singh",
            "Durga Prasad Panda",
            "William Wordsworth"
    ],
    answer:"Laxmi Prasad Devkota"
},

{
    question: "Who delivered the ‘Acceptance Speech’?",
    option:[
            "William Moris",
            "Aung San Suu Kyi",
            "Alexander Aris",
            "None of these"
    ],
    answer:"Alexander Aris"
},

{
    question: "How is the bond between the daughter and the mother in the story \\\"Two Horizons\\\"?",
    option:[
            "Emotional",
            "Intimate",
            "Affectionate",
            "All of the above"
    ],
    answer:"All of the above"
},

{
    question: "Allergy can be avoided by ____.",
    option:[
            "harmless substance",
            "histamine",
            "wear a pollen mask",
            "drug"
    ],
    answer:"wear a pollen mask"
},

{
    question: "Martha's stories have a ____ effect.",
    option:[
            "noisy",
            "tranquil",
            "rowdy",
            "crazy"
    ],
    answer:"tranquil"
},

{
    question: "What are planted to console the pensive wanderer?",
    option:[
            "grooves",
            "shades",
            "walls",
            "factories"
    ],
    answer:"grooves"
},

{
    question: "Mr. Gessler made ……………… boots.",
    option:[
            "bad",
            "kind",
            "old",
            "good"
    ],
    answer:"good"
},

{
    question: "'Thinner than a Crescent', has been composed by _____",
    option:[
            "Vidyadhar Pandit",
            "Kalidas",
            "Vidyapati",
            "Tulsidas"
    ],
    answer:"Vidyapati"
},

{
    question: "According to the poem “The Empty Heart' which of the following statements is true?",
    option:[
            "The man was given six pots.",
            "Periyasamy Thooran was a Bengali writer.",
            "The man was not satisfied because he was greedy.",
            "The poem 'The Empty Heart' has been translated by S. Swaminathan."
    ],
    answer:"The man was not satisfied because he was greedy."
},

{
    question: "What happens when we touch a polythene bag?",
    option:[
            "it becomes swallow",
            "it makes a short and shrill noise",
            "it is decomposed",
            "None of these"
    ],
    answer:"it makes a short and shrill noise"
},

{
    question: "Jabra was",
    option:[
            "Landlord",
            "Tanant Farmer",
            "Halku’s dog",
            "None of these"
    ],
    answer:"Halku’s dog"
},

{
    question: "The Koel is in search of her _____",
    option:[
            "mother",
            "friend",
            "fire",
            "beloved"
    ],
    answer:"beloved"
},

{
    question: "Gillu was buried under the____ Plant.",
    option:[
            "Sonjuhi",
            "Tulsi",
            "Dahlia",
            "Rose"
    ],
    answer:"Sonjuhi"
},

{
    question: "Rapid movement gives you a superficial sense of :",
    option:[
            "drama",
            "music",
            "security",
            "hope"
    ],
    answer:"drama"
},

{
    question: "The film 'Kalpana' has been made by ____",
    option:[
            "IPTA",
            "Shankar",
            "Satyatjit Ray",
            "Ramesh Sippy"
    ],
    answer:"Shankar"
},

{
    question: "In the story \\\"Sun and Moon' the children were not allowed to attend the.",
    option:[
            "guests",
            "class",
            "library",
            "party"
    ],
    answer:"party"
},

{
    question: "'The Sleeping Porter', was wearing a ____ cap.",
    option:[
            "black",
            "blue",
            "brown",
            "white"
    ],
    answer:"black"
},

{
    question: "Extra-sensory perception",
    option:[
            "clairvoyance",
            "awe",
            "lore",
            "honour"
    ],
    answer:"clairvoyance"
},

{
    question: "What is meant by 'herds'?",
    option:[
            "People",
            "Cattle",
            "Group",
            "Gang"
    ],
    answer:"Cattle"
},

{
    question: "Who was Gillu?",
    option:[
            "a person",
            "an animal",
            "a squirrel",
            "a cat"
    ],
    answer:"a squirrel"
},

{
    question: "In the story 'Love Defiled' the girl's friend husband had wanted to become ____",
    option:[
            "an I.P.S. Officer",
            "a Politician",
            "a Journalist",
            "an I.A.S. officer"
    ],
    answer:"an I.A.S. officer"
},

{
    question: "'The Unity of Indian Culture' is an adapted version of Humayun Kabir's lecture delivered in _____",
    option:[
            "Delhi University",
            "Baroda University",
            "V.K.S. University",
            "None of these"
    ],
    answer:"Baroda University"
},

{
    question: "John Galsworthy was born in",
    option:[
            "1867",
            "1857",
            "1847",
            "1876"
    ],
    answer:"1867"
},

{
    question: "Who has written ‘January Night’?",
    option:[
            "Mahadevi Verma",
            "Mahatama Gandhi",
            "Vidyapati",
            "Premchand"
    ],
    answer:"Premchand"
},

{
    question: "From the stairs Sun and Moon saw_____",
    option:[
            "the adult dancing",
            "the adult singing",
            "the adult making merry",
            "the adult enjoying"
    ],
    answer:"the adult enjoying"
},

{
    question: "Who is the writer of “Acceptance Speech”?",
    option:[
            "Toni Morrison",
            "Aung San Suu Kyi",
            "Jon Lexau",
            "Leo Tolstoy"
    ],
    answer:"Aung San Suu Kyi"
},

{
    question: "In the poem 'Sleeping porter', the porter's cap is ____",
    option:[
            "white and sweat-stained",
            "dirty and sweat-stained",
            "clean and sweat-stained",
            "none of these"
    ],
    answer:"dirty and sweat-stained"
},

{
    question: "Dr. Rana S.P. Singh is famous doctor for ____",
    option:[
            "Allergy",
            "Asthma",
            "Eczema",
            "Hay fever"
    ],
    answer:"Allergy"
},

{
    question: "In this poem the narrator is",
    option:[
            "a townsman",
            "god",
            "country",
            "a villager"
    ],
    answer:"a villager"
},

{
    question: "To which game does the wirter compare the crow’s play ?",
    option:[
            "To bite and fly",
            "To hide and seek",
            "Both (A) and (B)",
            "None of these"
    ],
    answer:"To hide and seek"
},

{
    question: "As reported by her friend, Radha is _____",
    option:[
            "ill",
            "hurt and confused",
            "happy",
            "laughing"
    ],
    answer:"hurt and confused"
},

{
    question: "Martha's voice was ____",
    option:[
            "slow",
            "high",
            "cursed",
            "sweet"
    ],
    answer:"sweet"
},

{
    question: "Leo Tolstoy's story is about ____",
    option:[
            "two girls",
            "two boys",
            "three girls",
            "three boys"
    ],
    answer:"two girls"
},

{
    question: "What happens when we leave a polythene bag on the earth?",
    option:[
            "it degrades the soil",
            "it pollutes the environment",
            "it improves the soil",
            "None of these"
    ],
    answer:"it pollutes the environment"
},

{
    question: "The daughter writes a letter to her ____",
    option:[
            "father",
            "mother",
            "sister",
            "grandmother"
    ],
    answer:"mother"
},

{
    question: "‘The Empty Heart’ tells us about____",
    option:[
            "greed",
            "poverty",
            "sickness",
            "over–eating"
    ],
    answer:"greed"
},

{
    question: "The essay 'What is Wrong with Indian Films' is taken from _____",
    option:[
            "Pather Panchali",
            "Shatranj ke khilari",
            "Our Films, Their Films",
            "Films for Youth"
    ],
    answer:"Our Films, Their Films"
},

{
    question: "We had a lot about ……………….. and ecology in school.",
    option:[
            "environment",
            "garden",
            "trees",
            "pollution"
    ],
    answer:"trees"
},

{
    question: "The Poem 'Koel' has been composed by_____",
    option:[
            "Periasamy Thooran",
            "Puran Singh",
            "Vidyapati",
            "Durga Prasad Panda"
    ],
    answer:"Puran Singh"
},

{
    question: "From where does he get his clothes?",
    option:[
            "from leather of animals",
            "from cultivation",
            "from woods",
            "from his flocks and sheep"
    ],
    answer:"from his flocks and sheep"
},

{
    question: "A language should be living and ………….",
    option:[
            "glaring",
            "vibrant",
            "vivid",
            "clear"
    ],
    answer:"vibrant"
},

{
    question: "In 'The Pace for Living', the writer captures the agony of_______ man.",
    option:[
            "modern",
            "ancient",
            "future",
            "uncivilized"
    ],
    answer:"modern"
},

{
    question: "Where did the two girls meet?",
    option:[
            "Near the house",
            "Near the church",
            "Near the puddle",
            "Near the lane"
    ],
    answer:"Near the lane"
},

{
    question: "Who switched on the heater for Gillu?",
    option:[
            "The servant",
            "The house manager",
            "The gardener",
            "The author"
    ],
    answer:"The author"
},

{
    question: "The Poet knew Martha when he was a ____",
    option:[
            "teacher",
            "shopkeeper",
            "servant",
            "child"
    ],
    answer:"child"
},

{
    question: "Who is the story writer of 'Love Defiled'?",
    option:[
            "Girdhar Jha",
            "Binapani Mohanty",
            "Mahadevi Verma",
            "John Galsworthy"
    ],
    answer:"Girdhar Jha"
},

{
    question: "Which of the following name was given to the squirrel ?",
    option:[
            "Gauti",
            "Gill",
            "Gillu",
            "Gilla"
    ],
    answer:"Gillu"
},

{
    question: "Which of the following is caused by Allergy?",
    option:[
            "Fever",
            "Hunger",
            "Sleeplessness",
            "Fatigue"
    ],
    answer:"Fever"
},

{
    question: "The Nobel peace prize was given to Suu Kyi in ………….",
    option:[
            "1992",
            "2000",
            "1990",
            "1991"
    ],
    answer:"1991"
},

{
    question: "In the poem Martha', what is the colour of Martha's eyes ?",
    option:[
            "Grey",
            "Blue",
            "Black",
            "red"
    ],
    answer:"Grey"
},

{
    question: "Who were Sun and Moon ?",
    option:[
            "A young boy and his sister",
            "A young brother and his sister",
            "A young boy and his mother",
            "A young man and his wife"
    ],
    answer:"A young boy and his sister"
},

{
    question: "On hearing the songs of the towns, singing-birds like the ……………..are afraid and go away.",
    option:[
            "Parrot",
            "Thrush",
            "Cuckoo",
            "Sparrow"
    ],
    answer:"Thrush"
},

{
    question: "Jabra looked at him with eyes overflowing with………….",
    option:[
            "love",
            "hatred",
            "threat",
            "affection"
    ],
    answer:"love"
},

{
    question: "Underlying Unity is the most remarkable feature of ____",
    option:[
            "American Culture",
            "Indian Culture",
            "Greek Culture",
            "Chinese Culture"
    ],
    answer:"Indian Culture"
},

{
    question: "What type of smell does a polythene bag exude when burnt?",
    option:[
            "heavy",
            "light",
            "pungent",
            "disgusting"
    ],
    answer:"pungent"
},

{
    question: "The Poet does not want to mark the place where he is ____",
    option:[
            "sitting",
            "hiding",
            "crying",
            "buried"
    ],
    answer:"buried"
},

{
    question: "The Koel is full of dissatisfaction because its _____ is not with her.",
    option:[
            "lover",
            "sister",
            "mother",
            "father"
    ],
    answer:"lover"
},

{
    question: "What does Mr. Williams actually mean to say to Jim ?",
    option:[
            "Compost is not suitable for plants",
            "Compost is not environment friendly",
            "Compost smells up the whole street",
            "None of these"
    ],
    answer:"Compost smells up the whole street"
},

{
    question: "The rich man left home because he wanted to earn more____",
    option:[
            "knowledge",
            "respect",
            "money",
            "gold"
    ],
    answer:"gold"
},

{
    question: "Where does Radha brood?",
    option:[
            "In the forest",
            "In her house",
            "In the garden",
            "On the bank of a river"
    ],
    answer:"On the bank of a river"
},

{
    question: "Gillu had stopped___ The day he died.",
    option:[
            "sleeping",
            "eating",
            "drinking",
            "running"
    ],
    answer:"eating"
},

{
    question: "Who is the writer of 'Two Horizon’?",
    option:[
            "Binapani Mohanty",
            "Girdhar Jha",
            "Premchand",
            "Benipuri"
    ],
    answer:"Binapani Mohanty"
},

{
    question: "The author finds himself in a hopeless situation when he goes to watch the:",
    option:[
            "cinema",
            "theatre",
            "dance program",
            "singing competition"
    ],
    answer:"cinema"
},

{
    question: "Culture is the efflorescence of ____",
    option:[
            "organisation",
            "modernisation",
            "unity",
            "civilization"
    ],
    answer:"civilization"
},

{
    question: "Aung San Suu Kyi is a…………..",
    option:[
            "Revolutionary",
            "Pro-democracy Activist",
            "Classical Dancer",
            "Poetess"
    ],
    answer:"Pro-democracy Activist"
},

{
    question: "For Mr. Gessler, bootmaking was an",
    option:[
            "Art",
            "Burden",
            "Job",
            "Timepass"
    ],
    answer:"Art"
},

{
    question: "When was Satyajit Ray born ?",
    option:[
            "May 2, 1919",
            "May 2, 1920",
            "May 2, 1921.",
            "May 2, 1923"
    ],
    answer:"May 2, 1921."
},

{
    question: "Martha would sit with her two ____.",
    option:[
            "slim hands",
            "long hands",
            "short legs",
            "long legs"
    ],
    answer:"slim hands"
},

{
    question: "Give the meaning of amazing ?",
    option:[
            "Wonderful",
            "Astonishing",
            "Joyful",
            "None of these"
    ],
    answer:"Astonishing"
},

{
    question: "Allergens are of ____ types.",
    option:[
            "two",
            "three",
            "four",
            "five"
    ],
    answer:"two"
},

{
    question: "It was a early ____",
    option:[
            "Summer",
            "Winter",
            "Christmas",
            "Easter"
    ],
    answer:"Easter"
},

{
    question: "‘The Island Pharisees’ was the important work of",
    option:[
            "Premchand",
            "Anton Chekov",
            "John Galsworthy",
            "Katherine Mansfield"
    ],
    answer:"John Galsworthy"
},

{
    question: "In the story \\\"Sun and Moon', sun was _____",
    option:[
            "upset",
            "happy",
            "excited",
            "angry"
    ],
    answer:"upset"
},

{
    question: "Who says “Finally, I trust you now”?",
    option:[
            "The young people",
            "The narrator",
            "The old woman",
            "none of these"
    ],
    answer:"The old woman"
},

{
    question: "Mr. Johnson said he was going to the ………………..",
    option:[
            "Post office",
            "School",
            "House",
            "Car"
    ],
    answer:"Post office"
},

{
    question: "The daughter is filled with a sense of ____ and emptiness.",
    option:[
            "sleepiness",
            "weariness",
            "poverty",
            "tiredness"
    ],
    answer:"tiredness"
},

{
    question: "Alexander Pope was born in ____",
    option:[
            "1666",
            "1668",
            "1688",
            "1680"
    ],
    answer:"1688"
},

{
    question: "Laxmi Prasad Devkota was a ____",
    option:[
            "essayist",
            "story writer",
            "novelist",
            "dramatist"
    ],
    answer:"story writer"
},

{
    question: "In the lesson 'Love Defiled' the narrator had promised to marry to his ____",
    option:[
            "ex- girl friend",
            "a beautiful girl",
            "girlfriend",
            "None of these"
    ],
    answer:"girlfriend"
},

{
    question: "“Polythene Bag” has been composed by……………….",
    option:[
            "Durga Prasad Panda",
            "Periasamy Thooran",
            "Puran Singh",
            "Laxmi Prasad Devkota"
    ],
    answer:"Durga Prasad Panda"
},

{
    question: "The Koel's soul is like _____",
    option:[
            "flaming",
            "heating",
            "heaven",
            "burning"
    ],
    answer:"flaming"
},

{
    question: "Who is facing the uphill task?",
    option:[
            "a porter",
            "mother",
            "the boy",
            "the poet"
    ],
    answer:"a porter"
},

{
    question: "That……………….holds out to all, should most abound.",
    option:[
            "life",
            "virtue",
            "groves",
            "town"
    ],
    answer:"life"
},

{
    question: "The cinema also combines the cold _____ of science.",
    option:[
            "art",
            "logic",
            "technology",
            "experiments"
    ],
    answer:"logic"
},

{
    question: "There was a____ which grant wishes.",
    option:[
            "snake",
            "pigeon",
            "tree",
            "temple"
    ],
    answer:"tree"
},

{
    question: "Radha's friends are _____ about Radha.",
    option:[
            "angry",
            "happy",
            "worried",
            "weeping"
    ],
    answer:"worried"
},

{
    question: "How many girls were there in the film?",
    option:[
            "Two",
            "Three",
            "Four",
            "Five"
    ],
    answer:"Three"
},

{
    question: "The Future of……………….is yours.",
    option:[
            "history",
            "country",
            "children",
            "language"
    ],
    answer:"language"
},

{
    question: "The porter is carrying a heavy load on his ____",
    option:[
            "shoulder",
            "back",
            "head",
            "hand"
    ],
    answer:"back"
},

{
    question: "Mtinshi Premchand was born at",
    option:[
            "1880",
            "1780",
            "1870",
            "1888"
    ],
    answer:"1880"
},

{
    question: "What is the correct way to avoid allergens ?",
    option:[
            "Wearing pollen mask",
            "Playing a game",
            "Walking",
            "Running"
    ],
    answer:"Wearing pollen mask"
},

{
    question: "Burma’s long struggle is for?",
    option:[
            "peace, freedom and people",
            "peace and democracy",
            "peace, freedom and democracy",
            "plight, freedom and democracy"
    ],
    answer:"peace, freedom and democracy"
},

{
    question: "What did she see which was amazing ?",
    option:[
            "A tiny baby running",
            "A tiny baby squirrel",
            "A tiny baby squirrel in running",
            "None of these"
    ],
    answer:"A tiny baby squirrel"
},

{
    question: "When Gillu was hungry, he made a sound of:",
    option:[
            "Cluck-cluck",
            "Chik-chik",
            "Kaw-kaw",
            "Kai-kai"
    ],
    answer:"Chik-chik"
},

{
    question: "Modern research has proved that there were invaders even before the ____ poured into this land.",
    option:[
            "Aryans",
            "Americans",
            "Japanese",
            "Mughals"
    ],
    answer:"Aryans"
},

{
    question: "The narrator ____ to his girlfriend.",
    option:[
            "betraying",
            "supporting",
            "getting",
            "receiving"
    ],
    answer:"betraying"
},

{
    question: "According to Mr. Gessler, big firms have no …….",
    option:[
            "money",
            "manner",
            "interest",
            "self-respect"
    ],
    answer:"self-respect"
},

{
    question: "To whom did the author tell that you should not burn the leaves ?",
    option:[
            "Mr. John",
            "Mr. Williams",
            "Mr. Charles",
            "None of these"
    ],
    answer:"Mr. Williams"
},

{
    question: "Who entered Halku’s field?",
    option:[
            "Jabra",
            "Munni",
            "Jamindar",
            "Some nilgais"
    ],
    answer:"Some nilgais"
},

{
    question: "How did the ice pudding look like in the story ‘Sun and Moon' ?",
    option:[
            "A shop",
            "A mountain",
            "A little house",
            "A garden"
    ],
    answer:"A little house"
},

{
    question: "Whose problems are talked about in the poem \\\"Thinner than a Crescent\\\"?",
    option:[
            "Radha's",
            "Radha's friends",
            "Lord Krishna's",
            "Village folk's"
    ],
    answer:"Radha's"
},

{
    question: "Elderly people in the story 'Little Girls Wiser than Man', were ashamed because ____",
    option:[
            "Little girls were quarreling",
            "Little girls were dancing",
            "Little girls became friends",
            "Little girls became enemies"
    ],
    answer:"Little girls became friends"
},

{
    question: "The daughter had tried her best to follow her ____ married life.",
    option:[
            "father's",
            "brother's",
            "sister's",
            "mother's"
    ],
    answer:"mother's"
},

{
    question: "According to the poet, a happy man is one who ____",
    option:[
            "is strong",
            "has a car",
            "is content",
            "is rich"
    ],
    answer:"is content"
},

{
    question: "What type of pollution is created by compost, according Mr. Williams ?",
    option:[
            "Air Pollution",
            "Noise Pollution",
            "Noise Pollution",
            "None of these"
    ],
    answer:"Noise Pollution"
},

{
    question: "‘IIantamiza’ has been written by____",
    option:[
            "Periyasamy Thooran",
            "Durga Prasad Panda",
            "Vidyapati",
            "Puran Singh"
    ],
    answer:"Periyasamy Thooran"
},

{
    question: "The author of 'The Pace for Living' enjoys:",
    option:[
            "long car drives",
            "air flights",
            "train journeys",
            "road journeys"
    ],
    answer:"long car drives"
},

{
    question: "Indian music is largely ____",
    option:[
            "improvisational",
            "loud",
            "soothing",
            "soft"
    ],
    answer:"improvisational"
},

{
    question: "Whose famous works are ‘Sawarani’ and ‘Rays’?",
    option:[
            "Vidyapati",
            "Laxmi Prasad Devkota",
            "Durga Prasad Panda",
            "Humanyun Kabir"
    ],
    answer:"Durga Prasad Panda"
},

{
    question: "Which of the following country do Aung San Suu Kyi belong?",
    option:[
            "Bangladesh",
            "Myanmar",
            "Malaysia",
            "Indonesia"
    ],
    answer:"Myanmar"
},

{
    question: "Why is the thrush scared and the nightingale offended?",
    option:[
            "to hear the vice of the poet",
            "to hear the songs of village",
            "to hear the songs of town",
            "none of these"
    ],
    answer:"to hear the songs of town"
},

{
    question: "The two girl's, Malasha and Akoulya had gone to the ____ to pray.",
    option:[
            "Temple",
            "Mosque",
            "Church",
            "Gurudwara"
    ],
    answer:"Church"
},

{
    question: "What does the flaming soul of the koel ask in the poem 'Koel'?",
    option:[
            "Wants to know where its lover is",
            "Wants to know about its destination",
            "Wants to know about its nest",
            "None of these"
    ],
    answer:"Wants to know where its lover is"
},

{
    question: "'Love Defiled' is a story about the relationship of the narrator with his ____",
    option:[
            "sister",
            "brother",
            "girlfriend",
            "cousin"
    ],
    answer:"girlfriend"
},

{
    question: "The Porter was going up a ____",
    option:[
            "lane",
            "cliff",
            "platform",
            "road"
    ],
    answer:"cliff"
},

{
    question: "When did Toni Morrison receive the Nobel Prize ?",
    option:[
            "A.D. 1990",
            "A.D. 1992",
            "A.D. 1993",
            "A.D. 1994"
    ],
    answer:"A.D. 1993"
},

{
    question: "The author gives up his views on Indian ____ and civilization.",
    option:[
            "technology",
            "religion",
            "custom",
            "culture"
    ],
    answer:"culture"
},

{
    question: "Haiku curled up drawing his ………….. close against his chin.",
    option:[
            "feet",
            "knees",
            "mouth",
            "hands"
    ],
    answer:"knees"
},

{
    question: "Sheets, mattress pad and blanket should be washed ____ in hot water.",
    option:[
            "monthly",
            "daily",
            "weekly",
            "yearly"
    ],
    answer:"weekly"
},

{
    question: "Which ointment was applied to the wounds of Gillu?",
    option:[
            "antibiotic",
            "penicillin",
            "fair & lovely",
            "none of these"
    ],
    answer:"penicillin"
},

{
    question: "Mr. Gessler blamed the big firms for taking away the livelihood of …………….. like himself who worked on a low scale.",
    option:[
            "Shopkeepers",
            "Landowners",
            "Bearers",
            "Workers"
    ],
    answer:"Workers"
},

{
    question: "The porter is compared to a ____",
    option:[
            "bird",
            "king",
            "hero",
            "cattle"
    ],
    answer:"bird"
},

{
    question: "'Ode on Solitude' has been written by ____",
    option:[
            "Walter de la Mare",
            "John Keats",
            "William Wordsworth",
            "Alexander Pope"
    ],
    answer:"Alexander Pope"
},

{
    question: "'Sun and Moon' is written by _____",
    option:[
            "Katherine Mansfield",
            "Girdhar Jha",
            "Binapani Mohanty",
            "Dr. Rana's S.P. Singh"
    ],
    answer:"Katherine Mansfield"
},

{
    question: "The only companion of the mother in the story 'Two Horizons', is ____",
    option:[
            "her husband",
            "her son",
            "her daughter",
            "her dog"
    ],
    answer:"her daughter"
},

{
    question: "Radha is crying for _____",
    option:[
            "her friend",
            "her sister",
            "Ram",
            "Lord Krishna"
    ],
    answer:"Lord Krishna"
},

{
    question: "Mahadevi Verma was the recipient of which of the following awards?",
    option:[
            "Mangal Prasad Prize",
            "Padma Bhushan",
            "Bharat Bharti",
            "All of these"
    ],
    answer:"All of these"
},

{
    question: "The feeling of ‘hurt’ has been compared to",
    option:[
            "A garbage bin",
            "The earth’s crust",
            "A polythene bag",
            "The environment"
    ],
    answer:"A polythene bag"
},

{
    question: "What is the first chapter of English class 10?",
    option:[
            "Me and The Ecology Bit",
            "Gillu",
            "The Pace of Living",
            "None of these"
    ],
    answer:"The Pace of Living"
},

{
    question: "Where does the koel conceal itself?",
    option:[
            "In the forest",
            "In mango-leaves",
            "In the leaves",
            "In peepal-leaves"
    ],
    answer:"In mango-leaves"
},

{
    question: "Who has written ‘Gillu’?",
    option:[
            "Puran Singh",
            "Satyajit ray",
            "Mahadevi Verma",
            "Vidyapati"
    ],
    answer:"Mahadevi Verma"
},

{
    question: "'The Empty Heart has been composed by ____",
    option:[
            "Periyasamy Thooran",
            "Keki. N. Daruwala",
            "Sarojini Naidu",
            "Mahadevi Verma"
    ],
    answer:"Periyasamy Thooran"
},

{
    question: "The old, wise woman’s reputation for wisdom is without ……………. and everyone agrees to this.",
    option:[
            "comparison",
            "question",
            "answer",
            "clairvoyance"
    ],
    answer:"comparison"
},

{
    question: "What did the author do for environment ?",
    option:[
            "Doing Plantation",
            "Avoiding Pollution",
            "By Awaring People",
            "None of these"
    ],
    answer:"By Awaring People"
},

{
    question: "'Love Defiled' is a story about the narrator and his ____",
    option:[
            "brother",
            "girl friend",
            "father",
            "sister"
    ],
    answer:"girl friend"
},

{
    question: "William Cowper died in",
    option:[
            "1805",
            "1798",
            "1800",
            "1810"
    ],
    answer:"1800"
},

{
    question: "Premchand is originally known as ?",
    option:[
            "Dhanpat Pandey",
            "Dhanpat Rai",
            "Dhanpat Mistri",
            "None of these"
    ],
    answer:"Dhanpat Rai"
},

{
    question: "Who found trouble as he wake up?",
    option:[
            "Prem Shanker",
            "The Patient",
            "The doctor",
            "Shanker"
    ],
    answer:"Prem Shanker"
},

{
    question: "Everyone told the narrator that Gillu would……………….",
    option:[
            "live",
            "live happily",
            "not live",
            "run away"
    ],
    answer:"not live"
},

{
    question: "The stories of Martha were full of ____",
    option:[
            "hatred",
            "wonder",
            "fear",
            "tragedy"
    ],
    answer:"wonder"
},

{
    question: "In which of the following Prime Minister, Humayun Kabir was a Central Minister?",
    option:[
            "Indira Gandhi",
            "Jawahar Lal Nehru",
            "Lal Bahadur Shastri",
            "Morarji Desai"
    ],
    answer:"Jawahar Lal Nehru"
},

{
    question: "A person who lives in a monastery and does not have possessions",
    option:[
            "monster",
            "monk",
            "mount",
            "activist"
    ],
    answer:"monk"
},

{
    question: "The villagers can do very well without the …………..lights of the town.",
    option:[
            "Grand",
            "Dim",
            "Shining",
            "Soft"
    ],
    answer:"Grand"
},

{
    question: "_____ University conferred an honorary doctorate on Satyajit Ray.",
    option:[
            "Cambridge",
            "Oxford",
            "California",
            "Mumbai"
    ],
    answer:"Oxford"
},

{
    question: "What comes back again and again?",
    option:[
            "pollution",
            "pain",
            "smell",
            "nothing"
    ],
    answer:"pain"
},

{
    question: "What was the author’s opinion about Mr. Gessler as a shoe maker?",
    option:[
            "Man of good nature",
            "Made good boots",
            "Jealous in nature",
            "All of the above"
    ],
    answer:"Made good boots"
},

{
    question: "Who had dressed them?",
    option:[
            "The servant",
            "The sister",
            "The mother",
            "The father"
    ],
    answer:"The mother"
},

{
    question: "How does the poet desire to sleep?",
    option:[
            "soundly",
            "comfortly",
            "luxuriously",
            "soflty"
    ],
    answer:"soundly"
},

{
    question: "Who did the rich man pray to I poem 'The Empty Heart'?",
    option:[
            "The pots of gold",
            "The Wish-yielding Tree",
            "The king",
            "God"
    ],
    answer:"The Wish-yielding Tree"
},

{
    question: "The corn-merchant was getting____ by his nephew in 'The Pace for Living'.",
    option:[
            "beaten up",
            "scolded",
            "cheated",
            "praised"
    ],
    answer:"cheated"
},

{
    question: "Sun and Moon were sent to_____",
    option:[
            "bed stairs",
            "dining room",
            "upper storey",
            "dining hall"
    ],
    answer:"bed stairs"
},

{
    question: "Mr. Johnson said he was trying to get to the ………………..",
    option:[
            "Car",
            "House",
            "Post office",
            "Ecology"
    ],
    answer:"Post office"
},

{
    question: "The word ‘incarcerated’ means",
    option:[
            "honoured",
            "dishonoured",
            "bailed",
            "jailed"
    ],
    answer:"jailed"
},

{
    question: "The poem deals with the pitiable condition of _____",
    option:[
            "Lord Krishna",
            "a friend of Radha",
            "Radha",
            "Gopi"
    ],
    answer:"Radha"
},

{
    question: "The garden that burns the heart of “Koel' is _____",
    option:[
            "green",
            "thin A",
            "dense",
            "thick"
    ],
    answer:"green"
},

{
    question: "Who is the writer of “Once upon a Time”?",
    option:[
            "R.C. Hutchinson",
            "Toni Morrison",
            "Leo Tolstoy",
            "Satyajit Ray"
    ],
    answer:"Toni Morrison"
},

{
    question: "According to the author, average American films are a ____ model.",
    option:[
            "bad",
            "good",
            "excellent",
            "poor"
    ],
    answer:"bad"
},

{
    question: "The narrator's ____ invited him to her marriage.",
    option:[
            "girl friend",
            "sister",
            "cousin",
            "aunt"
    ],
    answer:"girl friend"
},

{
    question: "Mahadevi Verma was an elected fellow of____ Akademi.",
    option:[
            "Kala",
            "Sahitya",
            "Sangit Natak",
            "None of these"
    ],
    answer:"Sahitya"
},

{
    question: "What is the meaning of 'absorbed'?",
    option:[
            "take in",
            "take away",
            "take out",
            "take down"
    ],
    answer:"take in"
},

{
    question: "The Dipper had not yet……………..half the sky.",
    option:[
            "climbed",
            "decline",
            "arrived",
            "reached"
    ],
    answer:"climbed"
},

{
    question: "What was everyone’s remark about the wounded squirrel ?",
    option:[
            "It would survive",
            "There is half chances of survival",
            "It would not survive",
            "One of these"
    ],
    answer:"It would not survive"
},

{
    question: "Why did Mr. Gessler die?",
    option:[
            "due to his disease",
            "due to slow-starvation",
            "due to oldness",
            "none of these"
    ],
    answer:"due to slow-starvation"
},

{
    question: "Who wrote the poetry ‘God Made The Country’?",
    option:[
            "William Wordsworth",
            "William Cowper",
            "Alexander Pope",
            "Durga Prasad"
    ],
    answer:"William Cowper"
},

{
    question: "Walter de la Mare was a ____",
    option:[
            "Ancient Poet",
            "Modern Poet",
            "Medieval Poet",
            "None of these"
    ],
    answer:"Modern Poet"
},

{
    question: "Asthma can be treated by ____",
    option:[
            "pollen mask",
            "caricide chemical",
            "remain indoors in the morning",
            "inhaled steroids"
    ],
    answer:"inhaled steroids"
},

{
    question: "This poem is in the form of a _____",
    option:[
            "speech",
            "conversation",
            "report",
            "letter"
    ],
    answer:"report"
},

{
    question: "What does the poet wish after death?",
    option:[
            "No body expresses sorrow",
            "To place tomb stone",
            "No rest",
            "None of these"
    ],
    answer:"No body expresses sorrow"
},

{
    question: "What causes pain?",
    option:[
            "hurt",
            "learnt",
            "smell",
            "touch"
    ],
    answer:"hurt"
},

{
    question: "Periyasamy was awarded____",
    option:[
            "Bharat Ratna",
            "Padma Bhushan",
            "Padma Bibhushan",
            "Padmshri"
    ],
    answer:"Padma Bhushan"
},

{
    question: "R.C. Hutchinson was a_____ .",
    option:[
            "American Novelist",
            "British Novelist",
            "French Novelist",
            "Italian Novelist"
    ],
    answer:"British Novelist"
},

{
    question: "Laxmi Prasad Devkota was a renowned ____",
    option:[
            "Indian Poet",
            "Nepali Poet",
            "Russian Poet",
            "American Poet"
    ],
    answer:"Nepali Poet"
},

{
    question: "What was the colour of Moon's shoes _____",
    option:[
            "Red with big blobs",
            "White with big blobs",
            "Green with big blobs",
            "Brown with big blobs"
    ],
    answer:"White with big blobs"
},

{
    question: "What form of electricity did the narrator use?",
    option:[
            "different kind",
            "other kind",
            "same kind",
            "none of these"
    ],
    answer:"same kind"
},

{
    question: "Who was awarded the Nobel peace prize in 1991?",
    option:[
            "Alexander Aris",
            "Aung San Suu Kyi",
            "Satyajit Ray",
            "Oslo"
    ],
    answer:"Aung San Suu Kyi"
},

{
    question: "According to the story ‘Gillu’, squirrels have a life span of:",
    option:[
            "one year",
            "two year",
            "three year",
            "four year"
    ],
    answer:"two year"
},

{
    question: "Which of the following awards was also given to Toni Morrison ?",
    option:[
            "Booker Awards",
            "Remon Magssessay",
            "Pulitzer",
            "None of these"
    ],
    answer:"Pulitzer"
},

{
    question: "Malasha was ____",
    option:[
            "smaller",
            "elder",
            "bigger",
            "younger"
    ],
    answer:"smaller"
},

{
    question: "‘Godaan’ is writen by……………..",
    option:[
            "Dhyan Chand",
            "Ram Chandra",
            "Mohan Chand",
            "Prem Chand"
    ],
    answer:"Prem Chand"
},

{
    question: "The Poet asks the Koel what has her _____.",
    option:[
            "forgotten",
            "hurt",
            "told",
            "longings"
    ],
    answer:"hurt"
},

{
    question: "Hay fever is caused by ____",
    option:[
            "fungus",
            "breathing",
            "pollen",
            "sneezing"
    ],
    answer:"pollen"
},

{
    question: "The duration of love affair in the story ‘Love Defiled was____",
    option:[
            "6 years",
            "8 years",
            "7 years",
            "9 years"
    ],
    answer:"8 years"
},

{
    question: "Before marriage the daughter lives with her ____",
    option:[
            "father",
            "parents",
            "mother",
            "grandmother"
    ],
    answer:"parents"
},

{
    question: "The young man admitted that Mr. Gessler was the best bootmaker in",
    option:[
            "Berlin",
            "Tokyo",
            "Paris",
            "London"
    ],
    answer:"London"
},

{
    question: "Sun and Moon were dressed by_____",
    option:[
            "nurse",
            "father",
            "mother",
            "servant"
    ],
    answer:"nurse"
},

{
    question: "Laxmi Prasad Devkota was born in ____",
    option:[
            "Kathmandu",
            "Tamilnadu",
            "Mumbai",
            "Kolkata"
    ],
    answer:"Kathmandu"
},

{
    question: "A two-wheeled horse-drawn vehicle used in olden times",
    option:[
            "cart",
            "chart",
            "chariot",
            "none"
    ],
    answer:"chariot"
},

{
    question: "Why are Indian films not shown abroad?",
    option:[
            "language problem",
            "Weak in quality",
            "India offers potential market for her own products",
            "style and content"
    ],
    answer:"India offers potential market for her own products"
},

{
    question: "Who gives milk to the happy man?",
    option:[
            "Cattle",
            "Cow",
            "Buffalo",
            "Camel"
    ],
    answer:"Cattle"
},

{
    question: "Which object never gets dissolved into the earth’s crust?",
    option:[
            "garbage",
            "bin",
            "polythene bag",
            "germs"
    ],
    answer:"polythene bag"
},

{
    question: "Lord Krishna had not met _____ for some time.",
    option:[
            "Vidyapati",
            "Sudama",
            "Yashoda",
            "Radha"
    ],
    answer:"Radha"
},

{
    question: "When Akoulya saw ____ on her frock, she was angry.",
    option:[
            "stains",
            "flowers",
            "drawings",
            "fruits"
    ],
    answer:"stains"
},

{
    question: "The daughter learn from her mother ____",
    option:[
            "secret of laughter",
            "peaceful life",
            "happy life",
            "secret of sadness"
    ],
    answer:"secret of laughter"
},

{
    question: "The man was rich but he was not____",
    option:[
            "content",
            "proud",
            "happy",
            "fool"
    ],
    answer:"content"
},

{
    question: "Gillu departed from this world in the…………..",
    option:[
            "morning",
            "evening",
            "noon",
            "midnight"
    ],
    answer:"morning"
},

{
    question: "Which tribe did the author belong to?",
    option:[
            "Fast thinkers",
            "Slow thinkers",
            "Steady thinkers",
            "None of these"
    ],
    answer:"Slow thinkers"
},

{
    question: "The colour of Gillu’s eyes was-",
    option:[
            "Red",
            "Black",
            "Green",
            "Blue"
    ],
    answer:"Blue"
},

{
    question: "It is very ……………….. work, this ecology bit.",
    option:[
            "hard",
            "boring",
            "merry-making",
            "unfit"
    ],
    answer:"boring"
},

{
    question: "Who received the Nobel Prize awarded to Aung San Suu Kyi?",
    option:[
            "Her Son",
            "Her Sister",
            "Her Mother",
            "Her Daughter"
    ],
    answer:"Her Son"
},

{
    question: "Who splashed the dirty water on Akoulya's frock?",
    option:[
            "Akoulya's mother",
            "Malasha's mother",
            "Malasha",
            "The old woman"
    ],
    answer:"Malasha"
},

{
    question: "According to the essay ‘What is wrong with Indian Films', which of the following statements is false?",
    option:[
            "The Indian music is largely improvisational.",
            "The Film production in India quantitatively second only to Hollywood.",
            "The Cinema commands the respect accorded to any other form of creative expression.",
            "The Cinema does not combine the cold logic of science."
    ],
    answer:"The Cinema does not combine the cold logic of science."
},

{
    question: "In India the old civilization and culture have grown and ____",
    option:[
            "changed",
            "developed",
            "formed",
            "None of these"
    ],
    answer:"changed"
},

{
    question: "Once Upon a Time, there was an……………",
    option:[
            "english woman",
            "irish woman",
            "old woman",
            "wire woman"
    ],
    answer:"old woman"
},

{
    question: "What was taken off when Gillu died?",
    option:[
            "The Kaju",
            "The flower pots",
            "The swing",
            "The bed"
    ],
    answer:"The swing"
},

{
    question: "In the story \\\"Two horizons' the daughter asks her mother why she not able to attain the satisfaction b mother experienced in her ____ life.",
    option:[
            "lonely",
            "widowed",
            "married",
            "None of these"
    ],
    answer:"widowed"
},

{
    question: "What was the nature of the girl?",
    option:[
            "Shy",
            "Naughty",
            "Gentle",
            "Cruel"
    ],
    answer:"Gentle"
},

{
    question: "Your dress is right off one side' who said?",
    option:[
            "Moon",
            "Sun",
            "Nurse",
            "Mother"
    ],
    answer:"Moon"
},

{
    question: "The Koel is called the black _____",
    option:[
            "dog",
            "cuckoo",
            "squirrel",
            "duck"
    ],
    answer:"cuckoo"
},

{
    question: "The children were transported to a ____ on hearing Martha's stories.",
    option:[
            "forest",
            "cloud",
            "dreamland",
            "garden"
    ],
    answer:"dreamland"
},

{
    question: "A happy man enjoys sound sleep at ____",
    option:[
            "evening",
            "morning",
            "night",
            "day"
    ],
    answer:"night"
},

{
    question: "Where do you find health and virtue?",
    option:[
            "Country",
            "Town",
            "Village",
            "Space"
    ],
    answer:"Village"
},

{
    question: "The litter truth in Haiku’s word come charging at her like a wild…………………..",
    option:[
            "crow",
            "animal",
            "beast",
            "bird"
    ],
    answer:"beast"
},

{
    question: "'You ask her one thing, She speaks of another' is from: _____",
    option:[
            "Polythene Bag",
            "Koel",
            "The Empty Heart",
            "Thinner than a Crescent"
    ],
    answer:"Thinner than a Crescent"
},

{
    question: "What happens when it gets a little heated?",
    option:[
            "It melts down",
            "It becomes solid",
            "It vaporises",
            "None of these"
    ],
    answer:"It melts down"
},

{
    question: "Mr. Gessler’s shop was situated in",
    option:[
            "Yorkshire",
            "the West End",
            "Canaught Place",
            "Park street"
    ],
    answer:"the West End"
},

{
    question: "\\\"The sleeping Porter\\\" is challenging ____",
    option:[
            "the forest",
            "the mountain",
            "the river",
            "the footpath"
    ],
    answer:"the mountain"
},

{
    question: "After marriage the daughter goes to her ____",
    option:[
            "husband's house",
            "father's house",
            "parent's house",
            "uncle's house"
    ],
    answer:"husband's house"
},

{
    question: "The author told Gillu to sit near her:",
    option:[
            "table",
            "plate",
            "chair",
            "bed"
    ],
    answer:"plate"
},

{
    question: "The first short film in India was produced in ___",
    option:[
            "1913",
            "1907",
            "1910",
            "1915"
    ],
    answer:"1907"
},

{
    question: "Common allergy diseases are found in children of ____ of age.",
    option:[
            "0-3 years",
            "0-4 years",
            "0-5 years",
            "0-6 years"
    ],
    answer:"0-6 years"
},

{
    question: "According to the writer of 'The Unity of Indian Culture' the ____ were regarded as the earliest invaders of the land.",
    option:[
            "Aryans",
            "Sakas",
            "Greeks",
            "British"
    ],
    answer:"Aryans"
},

{
    question: "Who is the first black woman to receive Nobel Prize ?",
    option:[
            "Aung San Suu Kyi",
            "Toni Morrison",
            "Amrita Pritam",
            "None of these"
    ],
    answer:"Toni Morrison"
},

{
    question: "Harder and harder he tried, but____.",
    option:[
            "became mad",
            "became senseless",
            "failed",
            "died"
    ],
    answer:"died"
},

{
    question: "In 'The Pace for Living', the author says that ____ is designed to test the mental speed of a person.",
    option:[
            "education tests",
            "psychological tests",
            "placement tests",
            "intelligence tests"
    ],
    answer:"intelligence tests"
},

{
    question: "Girdhar Jha is a senior ____",
    option:[
            "editor",
            "director",
            "reporter",
            "journalist"
    ],
    answer:"journalist"
},

{
    question: "Haiku heard some munching and crunching sounds coming from the",
    option:[
            "House",
            "Fields",
            "Terrace",
            "Groves"
    ],
    answer:"Fields"
},

{
    question: "Martha's stories are like a ____",
    option:[
            "ghost",
            "fairy",
            "dream",
            "wonder"
    ],
    answer:"dream"
},

{
    question: "It was Easter, the day should be spent____",
    option:[
            "angrily",
            "happily",
            "jealously",
            "sadly"
    ],
    answer:"happily"
},

{
    question: "Alexander Aris thanked from his…………for this honour.",
    option:[
            "mind",
            "art",
            "heart",
            "mother"
    ],
    answer:"heart"
},

{
    question: "Allergy is a ____ of the human immune system.",
    option:[
            "disease",
            "symptom",
            "malfunction",
            "miscalculation"
    ],
    answer:"malfunction"
},

{
    question: "At least I made him not ……………….. with his car for once.",
    option:[
            "pollute",
            "stain",
            "tread",
            "none of these"
    ],
    answer:"pollute"
},

{
    question: "Who is the writer of 'Unity of Indian Culture'?",
    option:[
            "Leo Tolstoy",
            "Humayun Kabir",
            "Satyajit Ray",
            "None of these"
    ],
    answer:"Humayun Kabir"
},

{
    question: "William Cowper was born in",
    option:[
            "1721",
            "1711",
            "1730",
            "1731"
    ],
    answer:"1731"
},

{
    question: "Alexander Pope was also a ____",
    option:[
            "thinker",
            "philosopher",
            "critic",
            "reformer"
    ],
    answer:"critic"
},

{
    question: "Binapani Mohanty is a well known ____ short story writer.",
    option:[
            "Bengali",
            "Assamese",
            "Oriya",
            "Marathi"
    ],
    answer:"Oriya"
},

{
    question: "____ is the hero of the mountain.",
    option:[
            "king",
            "giant",
            "porter",
            "poor man"
    ],
    answer:"porter"
},

{
    question: "What is referred to as a mundane thing?",
    option:[
            "pollution",
            "politics",
            "polythene bag",
            "warmth"
    ],
    answer:"polythene bag"
},

{
    question: "The Koel asks the _____ where its beloved is.",
    option:[
            "branches",
            "trees",
            "leaves",
            "fruits"
    ],
    answer:"leaves"
},

{
    question: "Vidyapati's poems are about Radha and _____",
    option:[
            "Ram",
            "Sita",
            "Krishna",
            "Vishnu"
    ],
    answer:"Krishna"
},

{
    question: "Moon is a _____ child.",
    option:[
            "Simple",
            "Beautiful",
            "Cheerful",
            "naughty"
    ],
    answer:"Cheerful"
},

{
    question: "In 'The Pace of Living', the author discusses:",
    option:[
            "the agony of modern man",
            "the miseries of ancient people",
            "the dilemma of people",
            "the problems of old age"
    ],
    answer:"the agony of modern man"
},

{
    question: "This lesson is about true friendship between a human being and a/an:",
    option:[
            "Animal",
            "microorganism",
            "Ghost",
            "Alien"
    ],
    answer:"Animal"
},

{
    question: "How does the Koel feel?",
    option:[
            "satisfied",
            "happy",
            "restless",
            "peaceful"
    ],
    answer:"restless"
},

{
    question: "Choose the noun word for ‘electric’ from the given words",
    option:[
            "electrify",
            "electrically",
            "electricity",
            "electrical"
    ],
    answer:"electricity"
},

{
    question: "What our Cinema needs about everything else is a style, an idiom, a sort of ____ of cinema which would be uniquely and recognisably Indian.",
    option:[
            "finance",
            "studio",
            "committee",
            "iconography"
    ],
    answer:"iconography"
},

{
    question: "A person who predicts the future",
    option:[
            "wise",
            "priest",
            "monk",
            "prophet"
    ],
    answer:"prophet"
},

{
    question: "Civilization is the organization of ____ which creates the condition of culture.",
    option:[
            "family",
            "office",
            "school",
            "society"
    ],
    answer:"society"
},

{
    question: "With what words did Martha's stories begin ?",
    option:[
            "once upon a time",
            "over and over again",
            "long-long ago",
            "once....once upon a time"
    ],
    answer:"once....once upon a time"
},

{
    question: "Mr. Gessler advertised his trade.",
    option:[
            "True",
            "False",
            "Sometimes",
            "None of these"
    ],
    answer:"False"
},

{
    question: "Gillu would come back to life in the form of small yellow ……………..",
    option:[
            "Sunflower",
            "Juhi flower",
            "Mustard",
            "Daffodils"
    ],
    answer:"Juhi flower"
},

{
    question: "Two little girls from different ____ happened to meet in a lane between two homesteads.",
    option:[
            "houses",
            "temples",
            "Church",
            "Mosques"
    ],
    answer:"houses"
},

{
    question: "Who has written ‘Allergy'?",
    option:[
            "Dr. Rana S.P Singh",
            "Dr. Shiv Singh",
            "Dr. Arjun Singh",
            "Dr. Mohan Singh"
    ],
    answer:"Dr. Rana S.P Singh"
},

{
    question: "The narrator promised to marry his girl friend if he became ____",
    option:[
            "an IAS officer",
            "a secretary",
            "a doctor",
            "an engineer"
    ],
    answer:"an IAS officer"
},

{
    question: "In the story \\\"Sun and Moon', who got scolded at the end of the story?",
    option:[
            "Sun only",
            "Moon only",
            "Both Sun and Moon",
            "None of these"
    ],
    answer:"Sun only"
},

{
    question: "How many assistant Mr. Gessler keep to assist him in his work?",
    option:[
            "One",
            "Two",
            "Three",
            "None"
    ],
    answer:"None"
},

{
    question: "'Yugvani' was edited by ____",
    option:[
            "Puran Singh",
            "Periasamy Thooran",
            "Alexander Pope",
            "Laxmi Prasad Devkota"
    ],
    answer:"Laxmi Prasad Devkota"
},

{
    question: "The poet is content to breathe his ___",
    option:[
            "fresh air",
            "native air",
            "open air",
            "none of these"
    ],
    answer:"native air"
},

{
    question: "Munshi Premchand died in………",
    option:[
            "1926",
            "1936",
            "1896",
            "1836"
    ],
    answer:"1936"
},

{
    question: "The prize is also intended to …………………. all those engaged in this struggle.",
    option:[
            "honour",
            "thank",
            "engage",
            "indulge"
    ],
    answer:"honour"
},

{
    question: "Where was Vidyapati born?",
    option:[
            "Benipatti",
            "Benipur",
            "Bithan",
            "Bisapi"
    ],
    answer:"Bisapi"
},

{
    question: "Who is the poet of the poetry ‘Polythene Bag”?",
    option:[
            "Puran Singh",
            "Vidyapati",
            "Alexander Pope",
            "Durga Prasad Panda"
    ],
    answer:"Durga Prasad Panda"
},

{
    question: "Why were groves planted?",
    option:[
            "To comfort us",
            "To provide us Loaries",
            "To provide us fuel",
            "None of these"
    ],
    answer:"To comfort us"
},

{
    question: "What did the mother advise daughter ?",
    option:[
            "to be serious",
            "to be bold",
            "to be curious",
            "to be afraid"
    ],
    answer:"to be bold"
},

{
    question: "The porter mind is very ____",
    option:[
            "strong",
            "dull",
            "weak",
            "witful"
    ],
    answer:"dull"
},

{
    question: "According to the essay \\\"What is Wrong with Indian Films”, which is the most potent and versatile art form?",
    option:[
            "Music",
            "Dance",
            "Cinema",
            "Painting"
    ],
    answer:"Cinema"
},

{
    question: "Everyone told the narrator that the squirrel would not_______ after being attacked so badly by the crows.",
    option:[
            "move",
            "eat",
            "live",
            "sleep"
    ],
    answer:"live"
},

{
    question: "Who started calling the tiny baby squirrel as Gillu?",
    option:[
            "Mahadevi Verma",
            "Servants",
            "All",
            "None of these"
    ],
    answer:"All"
},

{
    question: "And no one must underestimate that",
    option:[
            "fight",
            "height",
            "fight",
            "plight"
    ],
    answer:"plight"
},

{
    question: "The main character in the play which the author saw was a/an _____ corn-merchant.",
    option:[
            "elderly",
            "handicapped",
            "young",
            "diabetic"
    ],
    answer:"elderly"
},

{
    question: "At the end of the poem what happened to the richman in the poem 'The Empty Heart'?",
    option:[
            "He became poor",
            "He died",
            "He became wealthy",
            "He became healthy"
    ],
    answer:"He died"
},

{
    question: "Jim told Mr. Johnson that it would reduce……. and save ecology if he did not use his car for travelling to short distances.",
    option:[
            "Petrol",
            "Pollution",
            "Weight",
            "Diesel"
    ],
    answer:"Pollution"
},

{
    question: "Who discovered Immunoglobulin ?",
    option:[
            "Calvin",
            "Uppsala and Baltimore",
            "Rutherford",
            "Louis Pasteur"
    ],
    answer:"Uppsala and Baltimore"
},

{
    question: "In the lesson 'The Unity of Indian Culture', the author gives us his views on Indian _____ and civilization.",
    option:[
            "culture",
            "business",
            "fabrics",
            "technology"
    ],
    answer:"culture"
},

{
    question: "Where does the Koel sing?",
    option:[
            "In the apple leaves",
            "In the guava leaves",
            "In the banana leaves",
            "In the mango leaves"
    ],
    answer:"In the mango leaves"
},

{
    question: "Mushi Premchand was also known as",
    option:[
            "Raja Ram Raj",
            "Dhanpat Premchand",
            "DhanpatRay",
            "Munshi Dhanpat Raj"
    ],
    answer:"DhanpatRay"
},

{
    question: "Who is the author of the article •Quality?",
    option:[
            "Anton Chekov",
            "Katherine Mansfield",
            "John Galsworthy",
            "Binapani Mohanti"
    ],
    answer:"John Galsworthy"
},

{
    question: "The narrator realised that his character was as ____ as his looks.",
    option:[
            "charming",
            "ugly",
            "handsome",
            "attractive"
    ],
    answer:"ugly"
},

{
    question: "The daughter has learnt good ____ from mother.",
    option:[
            "gesture",
            "good habits",
            "manners",
            "character"
    ],
    answer:"manners"
},

{
    question: "Gillu was the name of a",
    option:[
            "dog",
            "cat",
            "squirrel",
            "monkey"
    ],
    answer:"squirrel"
},

{
    question: "Durga Prasad Panda occupies a prominent position in …………….. literature.",
    option:[
            "hindi",
            "english",
            "oriya",
            "bengali"
    ],
    answer:"oriya"
},

{
    question: "What is the poet’s desire?",
    option:[
            "To enjoy comfortable conditions",
            "To enjoy luxury",
            "To energy green environment",
            "The pleasure of natural objects"
    ],
    answer:"The pleasure of natural objects"
},

{
    question: "Which of the following statements is true, according to the poem 'Koel'?",
    option:[
            "The koel is called the brown cuckoo.",
            "The koel sings in the apple leaves",
            "The song of the cuckoo brings a thousand memories.",
            "The poet does not become restless to hear its voice."
    ],
    answer:"The song of the cuckoo brings a thousand memories."
},

{
    question: "This folklore is present in many",
    option:[
            "civilization",
            "culture",
            "stories",
            "novels"
    ],
    answer:"culture"
},

{
    question: "Eating, drinking and sleep he____",
    option:[
            "did",
            "shirked",
            "passed",
            "left"
    ],
    answer:"shirked"
},

{
    question: "The most fancy food item was the ice_____",
    option:[
            "chocolate",
            "pudding",
            "cake",
            "pastry"
    ],
    answer:"pudding"
},

{
    question: "Radha's joy may come _____",
    option:[
            "again",
            "back",
            "before",
            "late"
    ],
    answer:"again"
},

{
    question: "Every body is in favour of ……………….. but nobody wants to do anything about it.",
    option:[
            "Gardening",
            "Ecology",
            "Truth",
            "Humanity"
    ],
    answer:"Ecology"
},

{
    question: "The author was sad that the squirrel would not ____ after being attacked by the crows.",
    option:[
            "eat",
            "sleep",
            "run",
            "live"
    ],
    answer:"live"
},

{
    question: "Ode is a poem ____",
    option:[
            "addressed to a person",
            "addressed to a gentleman",
            "addressed to a lady",
            "addressed to a unknown man"
    ],
    answer:"addressed to a person"
},

{
    question: "Every adult in 'Little Girls Wiser than Man' was shouting and nobody was ____",
    option:[
            "dancing",
            "singing",
            "praying",
            "listening"
    ],
    answer:"listening"
},

{
    question: "When was the Acceptance Speech delivered?",
    option:[
            "December 7, 1991",
            "December 8, 1991",
            "December 9, 1991",
            "December 10, 1991"
    ],
    answer:"December 10, 1991"
},

{
    question: "Who had the fantastic notion of spending £10 on a holiday?",
    option:[
            "Son of Corn-merchant",
            "Daughter of Corn-merchant",
            "Father of Corn-merchant",
            "Wife of Corn-merchant"
    ],
    answer:"Wife of Corn-merchant"
},

{
    question: "Martha's stories were listened to by the children with ____",
    option:[
            "tension",
            "joy",
            "ease",
            "attention"
    ],
    answer:"ease"
},

{
    question: "Satyajit Ray used to compose _____ for his own films.",
    option:[
            "songs",
            "music",
            "script",
            "shooting"
    ],
    answer:"music"
},

{
    question: "Who was Haiku ?",
    option:[
            "A Washerman",
            "A tenant farmer",
            "A Goldman",
            "None of these"
    ],
    answer:"A tenant farmer"
},

{
    question: "A person has to be exposed to the particular ____ for some time to become allergic to it.",
    option:[
            "symptom",
            "antigen",
            "allergen",
            "protein"
    ],
    answer:"allergen"
},

{
    question: "In the story 'Love Defiled' the narrator was not ____ enough to go against the will of his family.",
    option:[
            "bold",
            "strong",
            "curious",
            "weak"
    ],
    answer:"strong"
},

{
    question: "How many pots of gold were given to the man in the poem \\\"The Empty Heart\\\"?",
    option:[
            "Seven",
            "Six",
            "Five",
            "Eight"
    ],
    answer:"Seven"
},

{
    question: "Choose the synonym of ‘profound’ from the following.",
    option:[
            "shallow",
            "serious",
            "false",
            "funny"
    ],
    answer:"serious"
},

{
    question: "Who has delivered the speech \\\"The Unity of Indian Culture'?",
    option:[
            "Humayun Kabir",
            "Dr. Trinath Mishra",
            "Mahadevi Verma",
            "Leo Tolstoy"
    ],
    answer:"Humayun Kabir"
},

{
    question: "Mr. Gessler was a ……………… bootmaker.",
    option:[
            "Russian",
            "German",
            "French",
            "English"
    ],
    answer:"German"
},

{
    question: "Who was ashamed?",
    option:[
            "Malasha",
            "Akoulya",
            "The old woman",
            "The men"
    ],
    answer:"The men"
},

{
    question: "Health and goodness can make our life",
    option:[
            "harder",
            "Comic",
            "sweet",
            "confound"
    ],
    answer:"sweet"
},

{
    question: "A happy man is satisfied by the property inherited by him from his ____",
    option:[
            "mother",
            "uncle",
            "father",
            "cousin"
    ],
    answer:"father"
},

{
    question: "Who is Madhav?",
    option:[
            "Lord Krishna's envy",
            "A follower of Lord Krishna",
            "Lord Krishna's friend",
            "The name of Lord Krishna"
    ],
    answer:"The name of Lord Krishna"
},

{
    question: "\\\"Her voice and her narrow from the poem ____",
    option:[
            "The Sleeping Porter",
            "The Empty Heart",
            "Martha",
            "Koel"
    ],
    answer:"Martha"
},

{
    question: "Everyone was happy except_____.",
    option:[
            "Moon",
            "Mother",
            "Father",
            "Sun"
    ],
    answer:"Sun"
},

{
    question: "What has been compared to a polythene bag in the poem?",
    option:[
            "the feeling of groan",
            "the feeling of hurt",
            "smell",
            "dissolve"
    ],
    answer:"the feeling of hurt"
},

{
    question: "\\\"The Empty Heart' speaks about____",
    option:[
            "Happiness",
            "Greed",
            "Sorrow",
            "Fear"
    ],
    answer:"Greed"
},

{
    question: "Who wrote a second letter ?",
    option:[
            "The daughter",
            "The mother",
            "The father",
            "None of these"
    ],
    answer:"The mother"
},

{
    question: "Who was the recipient of the Mangala Prasad prize?",
    option:[
            "Anita Desai",
            "Mahadevi Verma",
            "Ashapurna",
            "Nayantara"
    ],
    answer:"Mahadevi Verma"
},

{
    question: "Gillu was very sad by her absence. Here ‘her’ referred to",
    option:[
            "Gillu’s friend",
            "servant",
            "cow",
            "Mahadevi Verma"
    ],
    answer:"Mahadevi Verma"
},

{
    question: "The 'Koel' is hidden in_____",
    option:[
            "Forests",
            "Mango-leaves",
            "Fields",
            "Mountains"
    ],
    answer:"Mango-leaves"
},

{
    question: "There can be no culture without ____",
    option:[
            "civilization",
            "history",
            "war",
            "Socialism"
    ],
    answer:"civilization"
},

{
    question: "People nowadays think _____ than ancient times.",
    option:[
            "deeper",
            "faster",
            "longer",
            "slower"
    ],
    answer:"faster"
},

{
    question: "'What are you beating my girl for?' Who said ____",
    option:[
            "Malasha",
            "Akoulya",
            "The old woman",
            "Malasha's mother"
    ],
    answer:"Malasha's mother"
},

{
    question: "There are anecdotes which bring out the theme through the most simple form of expression and",
    option:[
            "art",
            "essay",
            "speech",
            "language"
    ],
    answer:"language"
},

{
    question: "In \\\"What is wrong with Indian Films ?\\\" the author compares Indian films with ____ films.",
    option:[
            "Korean",
            "Japanese",
            "Western",
            "Pakistani"
    ],
    answer:"Western"
},

{
    question: "Munni wanted to buy a",
    option:[
            "Bangle",
            "Blanket",
            "Saree",
            "Kurti"
    ],
    answer:"Saree"
},

{
    question: "In this lesson the author talks about different type of ____",
    option:[
            "medicines",
            "doctors",
            "hospitals",
            "allergies"
    ],
    answer:"allergies"
},

{
    question: "The Nobel Prize for Peace was accepted in the name of ………….",
    option:[
            "Japanese",
            "Burmese",
            "Chinese",
            "none of these"
    ],
    answer:"Burmese"
},

{
    question: "Everyone would offer the baby squirrel",
    option:[
            "flower",
            "nut",
            "kaju",
            "bread"
    ],
    answer:"kaju"
},

{
    question: "Jim’s mother told him that he used up……. by watching television all the time.",
    option:[
            "Petrol",
            "Water",
            "Electricity",
            "Time"
    ],
    answer:"Electricity"
},

{
    question: "'Moon' is here a_____",
    option:[
            "boy",
            "girl",
            "star",
            "planet"
    ],
    answer:"girl"
},

{
    question: "In the poem \\\"Thinner than a crescent\\\", Radha each day grows _____",
    option:[
            "fatter",
            "thinner",
            "bigger",
            "smaller"
    ],
    answer:"thinner"
},

{
    question: "According to the doctor, Mr. Gessler had died of",
    option:[
            "food",
            "bad food",
            "slow-starvation",
            "None of these"
    ],
    answer:"slow-starvation"
},

{
    question: "Who created the poem ‘God Made The Country’?",
    option:[
            "William Cowper",
            "William Wordsworth",
            "Alexander Pope",
            "Durga Prasad Panda"
    ],
    answer:"William Cowper"
},

{
    question: "After going through her daughter letter the mother feels ____",
    option:[
            "happy",
            "sorrow",
            "sad",
            "unhappy"
    ],
    answer:"sorrow"
},

{
    question: "The _____ of the koel has been charred by the fire of love.",
    option:[
            "legs",
            "beak",
            "wings",
            "eyes"
    ],
    answer:"wings"
},

{
    question: "The author admits that quick travel does not give the traveler the real ______ of travel.",
    option:[
            "pains",
            "pleasure",
            "dreams",
            "knowledge"
    ],
    answer:"pleasure"
},

{
    question: "How many wounds did the squirrel have?",
    option:[
            "One",
            "Two",
            "Five",
            "Seven"
    ],
    answer:"Two"
},

{
    question: "Which of the following University conferred Satyajit Ray on Doctorate degree?",
    option:[
            "MacMillan",
            "Oxford",
            "Cambridge",
            "Tribhuban"
    ],
    answer:"Oxford"
},

{
    question: "According to the poet of 'Ode On Solitude', a happy man is satisfied with ____",
    option:[
            "a few acres of inherited land",
            "more acres of inherited land",
            "a few acres of inherited money.",
            "a lot inherited property"
    ],
    answer:"a few acres of inherited land"
},

{
    question: "The boy in the story ‘Love Defiled' knot with the girl due to____",
    option:[
            "difference in their castes",
            "difference in their religions",
            "Parental opposition",
            "His dislike for her"
    ],
    answer:"Parental opposition"
},

{
    question: "Let a new age",
    option:[
            "go",
            "come",
            "dawn",
            "up"
    ],
    answer:"dawn"
},

{
    question: "In the poem \\\"The Empty Heart', to whom did the man bid good bye?",
    option:[
            "His Mother",
            "His wife",
            "His Children",
            "His Mother, Wife and Children"
    ],
    answer:"His Mother, Wife and Children"
},

{
    question: "Where do germs of diseases keep on growing?",
    option:[
            "In polythene",
            "In soil",
            "In garbage bin",
            "None of these"
    ],
    answer:"In garbage bin"
},

{
    question: "'Love Defiled' was published in 1996 in ____",
    option:[
            "The Indian Nation",
            "The Hindustan Times",
            "The Times of India",
            "The Hindu"
    ],
    answer:"The Hindustan Times"
},

{
    question: "Allergy has evolved from the discovery in ____",
    option:[
            "1967",
            "1968",
            "1969",
            "1966"
    ],
    answer:"1967"
},

{
    question: "The narrator saw two crows playfully poking their beaks at the",
    option:[
            "squirrel",
            "flower",
            "flowerpots",
            "bread"
    ],
    answer:"flowerpots"
},

{
    question: "Indian Culture is ____",
    option:[
            "rigid",
            "beautiful",
            "blend many culture",
            "flexible"
    ],
    answer:"blend many culture"
},

{
    question: "In the poem 'Sleeping porter', where is the porter's hut?",
    option:[
            "on the mountain",
            "on the hill",
            "on the cliff",
            "none of these"
    ],
    answer:"on the cliff"
},

{
    question: "Who were highly delighted?",
    option:[
            "The little girls",
            "Akoulya's mother",
            "Malasha's mother",
            "The old man of the village"
    ],
    answer:"The little girls"
},

{
    question: "The old woman was…………",
    option:[
            "Foolish",
            "Wise",
            "Shy",
            "Bold"
    ],
    answer:"Wise"
},

{
    question: "In Ode On Solitude, the poet says that a happy man wants to ____ unlamented.",
    option:[
            "sleep",
            "think",
            "die",
            "live"
    ],
    answer:"die"
},

{
    question: "What grows far away from everyone’s gaze?",
    option:[
            "fear",
            "love",
            "polythene bag",
            "germs"
    ],
    answer:"germs"
},

{
    question: "There was _____ to look after Sun and Moon.",
    option:[
            "nobody",
            "everybody",
            "someone",
            "one"
    ],
    answer:"nobody"
},

{
    question: "Munni asked Haiku how he could have peacefully when his crops were being destroyed.",
    option:[
            "Slept",
            "Jumped",
            "Eaten",
            "Travelled"
    ],
    answer:"Slept"
},

{
    question: "What is that the daughter is not able to achieve her mother had ?",
    option:[
            "Laughter",
            "Fulfillment",
            "Good health",
            "Strength"
    ],
    answer:"Fulfillment"
},

{
    question: "According to the poet who made the town?",
    option:[
            "God",
            "Government",
            "Man",
            "None of these"
    ],
    answer:"Man"
},

{
    question: "In the poem 'The Empty Heart's rich man prayer was granted ____",
    option:[
            "Sevenfold",
            "Eightfold",
            "Sixfold",
            "None of these"
    ],
    answer:"Sevenfold"
},

{
    question: "In the story written by Mahadevi Verma, Gillu was injured by:",
    option:[
            "Crows",
            "Squirrels",
            "Parrots",
            "Mongooses"
    ],
    answer:"Crows"
},

{
    question: "Who is the author of ‘Me and the Ecology Bit’ ?",
    option:[
            "John Hutchinson",
            "Joan Lexau",
            "Toni Morrison",
            "None of these"
    ],
    answer:"Joan Lexau"
},

{
    question: "Vidyapati belongs to _____",
    option:[
            "Mathura",
            "Mahisi",
            "Madhubani",
            "Masaurhi"
    ],
    answer:"Madhubani"
},

{
    question: "Which of the following statements is false, according to the poem 'Martha'?",
    option:[
            "Martha tells her stories over and over again.",
            "Martha would tell her stories in greenish brown valley.",
            "She would sit with clasped hands round her neck.",
            "Her stories have a tranquil effect."
    ],
    answer:"She would sit with clasped hands round her neck."
},

{
    question: "____ were considered the earliest invaders of India.",
    option:[
            "Aryans",
            "Turks",
            "Greek",
            "Afghans"
    ],
    answer:"Aryans"
},

{
    question: "Mr. Gessler’s shop was known by the name of ……………….",
    option:[
            "Gessler Boots",
            "Quality Boots",
            "Gessler Brothers",
            "none of these"
    ],
    answer:"Gessler Brothers"
},

{
    question: "Who is the author of this article Once Upon a Time’ ?",
    option:[
            "Aung San Suu Kyi",
            "R. C. Huchinson",
            "Toni Morrison",
            "Rohitan Mistri"
    ],
    answer:"Toni Morrison"
},

{
    question: "Mental activities of our time tend to follow the pace of_______.",
    option:[
            "computers",
            "airplanes",
            "houses",
            "machines"
    ],
    answer:"airplanes"
},

{
    question: "In the story 'Love Defiled, the narrator ____ up with his girlfriend.",
    option:[
            "patched",
            "broke",
            "gave",
            "took"
    ],
    answer:"gave"
},

{
    question: "Acceptance speech was delivered on",
    option:[
            "10 September, 1991",
            "19 September, 1910",
            "10 December, 1991",
            "19 December, 1910"
    ],
    answer:"10 December, 1991"
},

{
    question: "Which sound did Gillu make when he was hungry?",
    option:[
            "chak-chak",
            "chick-chick",
            "chuk-chuck",
            "chik-chik"
    ],
    answer:"chick-chick"
},

{
    question: "\\\"The shades of mangoes burn!' is from:_____",
    option:[
            "Koel",
            "Ode on Solitude",
            "The empty Heart",
            "God Made the Country"
    ],
    answer:"Koel"
},

{
    question: "The author in ‘Allergy’ talks about different types of ____",
    option:[
            "allergies",
            "doctors",
            "medicines",
            "diseases"
    ],
    answer:"allergies"
},

{
    question: "Who was busy in the preparation?",
    option:[
            "Brother",
            "Sister",
            "Mother",
            "Father"
    ],
    answer:"Mother"
},

{
    question: "Panda William Cowper may be said to be giving in his poems a foretaste of the poetry of………………?",
    option:[
            "Wordsworth",
            "Puran Singh",
            "Laxmi Prasad",
            "Durga Prasad Panda"
    ],
    answer:"Wordsworth"
},

{
    question: "In the lesson, the narrator talks about how he advises everybody what they should do to protect the",
    option:[
            "Elderly",
            "Ecology",
            "Children",
            "Pedestrians"
    ],
    answer:"Ecology"
},

{
    question: "When human beings try to hide the feeling of ‘hurt’ inside other feelings of sadness, it is not",
    option:[
            "Forgotten",
            "Remembered",
            "Recorded",
            "Polluted"
    ],
    answer:"Remembered"
},

{
    question: "Vidyapati was a great poet of",
    option:[
            "Maithili",
            "Hindi",
            "English",
            "Oriya"
    ],
    answer:"Maithili"
},

{
    question: "Who was Mr. Gessler?",
    option:[
            "banker",
            "lawyer",
            "painter",
            "Shoemaker"
    ],
    answer:"Shoemaker"
},

{
    question: "The daughter in 'Two Horizons' feels a huge ____ inside.",
    option:[
            "happiness",
            "storm",
            "emptiness",
            "burden"
    ],
    answer:"emptiness"
},

{
    question: "An Indian film should steer clear of ____",
    option:[
            "ambiguity",
            "inconsistencies",
            "controversies",
            "music"
    ],
    answer:"inconsistencies"
},

{
    question: "As a result of very hard work, the Porter's ____ beat fast.",
    option:[
            "muscles",
            "nerves",
            "heart",
            "pulse"
    ],
    answer:"heart"
},

{
    question: "The Poet calls the Koel _____",
    option:[
            "cuckoo",
            "black bird",
            "small bird",
            "O little Bird"
    ],
    answer:"O little Bird"
},

{
    question: "In the story 'Little Girls Wiser than Man the author shows how little children behave in a more mature manner than ____",
    option:[
            "animals",
            "leaders",
            "adults",
            "soldiers"
    ],
    answer:"adults"
},

{
    question: "Periyasamy Thooran was a distinguished____writer.",
    option:[
            "Bengali",
            "Bhojpuri",
            "Marathi",
            "Tamil"
    ],
    answer:"Tamil"
},

{
    question: "Mahadevi Verma was a leading poetess of the____ School of Poetry:",
    option:[
            "Chayavadi school",
            "Revolutionary School",
            "Bhakti school",
            "None of these"
    ],
    answer:"Chayavadi school"
},

{
    question: "'The Pace for Living' is written by :",
    option:[
            "Aung San Suu Kyi",
            "Toni Morrison",
            "R. C. Hutchinson",
            "Satyajit Ray"
    ],
    answer:"R. C. Hutchinson"
},

{
    question: "The narrator found a lot of people outside because it had just turned ………………..",
    option:[
            "spring",
            "autumn",
            "outside",
            "inside"
    ],
    answer:"spring"
},

{
    question: "As per the essay 'What is wrong with Indian Films' the majority of our films are replete with ____",
    option:[
            "Very good message",
            "Visual dissonances",
            "Visual imbalances",
            "Very exciting scenes"
    ],
    answer:"Visual dissonances"
},

{
    question: "Aris firmly believed that his mother would have accepted the prize for all the……………….of Burma, not for herself.",
    option:[
            "People",
            "Monks",
            "Politicians",
            "Soldiers"
    ],
    answer:"People"
},

{
    question: "The girl was so ____ that she did not get angry.",
    option:[
            "polite",
            "serious",
            "gentle",
            "brave"
    ],
    answer:"gentle"
},

{
    question: "According to Pope, a man is happy he is ____",
    option:[
            "rich",
            "contented",
            "famous",
            "poor"
    ],
    answer:"contented"
},

{
    question: "How would Gillu lie on the surahi kept near Mahadevi?",
    option:[
            "straight",
            "prostrate",
            "cool",
            "none of these"
    ],
    answer:"prostrate"
},

{
    question: "_____ has been the guiding principle of the Indians in all spheres of life according to the essay \\\"The Unity of Indian Culture\\\".",
    option:[
            "'Live and Let Live'",
            "'Work is worship'",
            "'Health is wealth'",
            "None of these"
    ],
    answer:"'Live and Let Live'"
},

{
    question: "Who devastated the field of Haiku?",
    option:[
            "Jabra",
            "a ghost",
            "nilgai",
            "none of these"
    ],
    answer:"nilgai"
},

{
    question: "The town people do not enjoy any real",
    option:[
            "Scenery",
            "Food",
            "Drink",
            "Fun"
    ],
    answer:"Scenery"
},

{
    question: "Prem Shankar is mentioned in ____",
    option:[
            "January Night",
            "The Bet",
            "Allergy",
            "Quality"
    ],
    answer:"Allergy"
},

{
    question: "What type of noise does a polythene bag make?",
    option:[
            "great",
            "squeaky",
            "smelling",
            "none of these"
    ],
    answer:"squeaky"
},

{
    question: "Katherine Mansfield is basically a _____",
    option:[
            "Novelist",
            "Story writer",
            "Dramatist",
            "Poet"
    ],
    answer:"Story writer"
},

{
    question: "Halku’s field was destroyed by",
    option:[
            "Jabra",
            "Munni",
            "Nilgais",
            "Jamindar"
    ],
    answer:"Nilgais"
},

{
    question: "The happy man is ____ to breathe his native air.",
    option:[
            "content",
            "sad",
            "cruel",
            "unable"
    ],
    answer:"content"
},

{
    question: "What were the two girls doing?",
    option:[
            "Fighting",
            "Make a channel",
            "Splash dirty water",
            "Watch stream"
    ],
    answer:"Make a channel"
},

{
    question: "The young people asked the old woman a question whose answer could only be given by one who could………….",
    option:[
            "Hear",
            "Smell",
            "Read",
            "See"
    ],
    answer:"See"
},

{
    question: "In the poem “The Empty Heart', the prayer was granted ____",
    option:[
            "three fold",
            "seven fold",
            "five fold",
            "nine fold"
    ],
    answer:"seven fold"
},

{
    question: "What fires the Koel?",
    option:[
            "The sight of mango blossom",
            "The fire of love",
            "Flaming soul",
            "High-pitched notes"
    ],
    answer:"The sight of mango blossom"
},

{
    question: "In the essay ‘Gillu’ the narrator found an injured baby squirrel in her____.",
    option:[
            "office",
            "garden",
            "veranda",
            "None of these"
    ],
    answer:"veranda"
},

{
    question: "John Galsworthy was died in.",
    option:[
            "1923",
            "1933",
            "1934",
            "1924"
    ],
    answer:"1933"
},

{
    question: "Who had thrown a gum wrapper on Ms Greene’s lawn?",
    option:[
            "The dog",
            "Johnson",
            "Williams",
            "Jim"
    ],
    answer:"Jim"
},

{
    question: "____ has been one of the most significant developments of our times.",
    option:[
            "painting",
            "competition",
            "agriculture",
            "cinema"
    ],
    answer:"cinema"
},

{
    question: "What is the name of the political party headed by Aung San Suu Kyi?",
    option:[
            "National Congress",
            "Myanmar League",
            "National League for Democracy",
            "Myanmar Congress"
    ],
    answer:"National League for Democracy"
},

{
    question: "What is one of the most remarkable features of Indian culture, according to Humayun Kabir?",
    option:[
            "Underlying Unity",
            "Lots of festivals",
            "Diversity of people",
            "So many religions"
    ],
    answer:"Underlying Unity"
},

{
    question: "The two little girls forgot their ____ and became friends again.",
    option:[
            "jealousy",
            "anger",
            "envy",
            "farms"
    ],
    answer:"anger"
},

{
    question: "The narrator 'Love Defiled' forgot to____",
    option:[
            "his wife",
            "his friend",
            "his mother",
            "the girl"
    ],
    answer:"the girl"
},

{
    question: "Who, according to the mother, made her fall and get up again in the story 'Two Horizons'?",
    option:[
            "She herself",
            "Her husband",
            "Her mother in-law",
            "The daughter"
    ],
    answer:"She herself"
},

{
    question: "Hay fever is ____",
    option:[
            "asthma",
            "allergy",
            "eczema",
            "sneezing"
    ],
    answer:"allergy"
},

{
    question: "The Porter body emits ____",
    option:[
            "dirty smell",
            "coloured lights",
            "pungent smell",
            "sulphur-like sour smell"
    ],
    answer:"sulphur-like sour smell"
},

{
    question: "What is the position of old woman in her neighbourhood ?",
    option:[
            "Hatred",
            "Respected as Rural Prophet",
            "As quarreling woman",
            "None of these"
    ],
    answer:"Respected as Rural Prophet"
},

{
    question: "How does the writer classify himself as a thinker in 'The Pace of Living'?",
    option:[
            "An intelligent thinker",
            "A slow thinker",
            "A social thinker",
            "None of these"
    ],
    answer:"A slow thinker"
},

{
    question: "Haiku worked as",
    option:[
            "A tenant farmer",
            "An Engineer",
            "A supervisor",
            "A doctor"
    ],
    answer:"A tenant farmer"
},

{
    question: "In the story \\\"Two Horizons', the daughter was filled with a sense of ____ and emptiness.",
    option:[
            "tiredness",
            "greed",
            "happiness",
            "joy"
    ],
    answer:"tiredness"
},

{
    question: "The preparations for the party was held _____.",
    option:[
            "in the morning",
            "in the evening",
            "at the noon",
            "in the night"
    ],
    answer:"in the evening"
},

{
    question: "Mahadevi Verma was born in",
    option:[
            "1905",
            "1906",
            "1907",
            "1908"
    ],
    answer:"1907"
},

{
    question: "Mr. Gessler was not successful in his trade, why?",
    option:[
            "He was a true shoe-maker but not a true businessman",
            "He was not in favour of new developments",
            "He avoided to adopt new techniques",
            "All"
    ],
    answer:"All"
},

{
    question: "Radha is separated from Krishna for _____",
    option:[
            "four days",
            "eight days",
            "fifteen days",
            "several days"
    ],
    answer:"several days"
},

  
];

// --- Helper: Get random questions ---
const getRandomQuestions = (count) => {
  const shuffled = [...englishQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = () => {
  return getRandomQuestions(100);
};

// --- Component ---
export default function BSEBClass10EnglishMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600); // 1 hour = 3600 seconds
  const [questions] = useState(buildQuestionPaper);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);

  useEffect(() => {
    if (started && !submitted && timer > 0) {
      const t = setInterval(() => {
        setTimer((p) => {
          if (p <= 60) setShowTimerWarning(true);
          return p - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
    if (timer === 0 && started && !submitted) {
      submitExam();
    }
  }, [started, submitted, timer]);

  const startExam = () => {
    setStarted(true);
  };

  const submitExam = () => {
    let s = 0;
    const details = questions.map((q, i) => {
      const isCorrect = answers[i] === q.answer;
      if (isCorrect) s++;
      return {
        question: q.question,
        option: q.option,
        correctAnswer: q.answer,
        userAnswer: answers[i] || "Not Attempted",
        isCorrect: isCorrect,
      };
    });
    setScore(s);
    setResultDetails(details);
    setSubmitted(true);
  };

  // Home Page - Mobile Optimized
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1e88e5 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "25px 20px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📚</div>
          <h1 style={{ 
            color: "#0d47a1", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            English Mock Test
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            Bihar School Examination Board - Class 10
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #0d47a1, #1e88e5)",
            margin: "10px auto",
            width: "60px"
          }}></div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginTop: "15px"
          }}>
            <div style={{ 
              backgroundColor: "#e3f2fd", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝 Total Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d47a1" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#e3f2fd", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️ Time Limit</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d47a1" }}>60 Minutes</div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#fff3e0",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "15px",
            fontSize: "12px",
            color: "#e65100",
            textAlign: "left"
          }}>
            <strong>📋 Instructions:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>All questions are compulsory</li>
              <li>Each question carries <strong>1 mark</strong></li>
              <li><strong>No negative marking</strong></li>
              <li>Submit before time runs out</li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #0d47a1 0%, #1e88e5 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)"
            }}
          >
            🚀 Start
          </button>
        </div>
      </div>
    );
  }

  // Result Page - Mobile Optimized
  if (submitted) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    const isPassed = percentage >= 33;

    return (
      <div style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {/* Result Card */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "25px 20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
            marginBottom: "20px"
          }}>
            <h1 style={{ 
              fontSize: "24px", 
              marginBottom: "5px",
              color: "#2d3748"
            }}>
              {isPassed ? "🎉 Congratulations!" : "📖 Keep Practicing!"}
            </h1>
            <p style={{ color: "#888", fontSize: "12px" }}>English Mock Test - Class 10</p>
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: isPassed ? "#d4edda" : "#f8d7da",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "15px auto",
              fontSize: "32px"
            }}>
              {isPassed ? "✅" : "📝"}
            </div>
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#0d47a1" }}>
              {score} <span style={{ fontSize: "20px", color: "#888" }}>/ {questions.length}</span>
            </div>
            <div style={{ 
              fontSize: "18px", 
              color: isPassed ? "#28a745" : "#dc3545", 
              marginTop: "5px",
              fontWeight: "600"
            }}>
              {percentage}% {isPassed ? "✔️ Passed" : "❌ Needs Improvement"}
            </div>
            {isPassed && (
              <div style={{
                marginTop: "10px",
                padding: "8px",
                backgroundColor: "#d4edda",
                borderRadius: "8px",
                color: "#155724",
                fontSize: "13px"
              }}>
                🎯 You have qualified the mock test!
              </div>
            )}
          </div>

          {/* Answer Review */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "20px 15px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ 
              borderBottom: "2px solid #eee", 
              paddingBottom: "12px", 
              marginBottom: "15px",
              fontSize: "18px",
              color: "#2d3748"
            }}>
              📋 Answer Review
            </h2>
            {resultDetails.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: item.isCorrect ? "#f0fff4" : "#fff5f5",
                  borderLeft: `4px solid ${item.isCorrect ? "#48bb78" : "#fc8181"}`,
                  padding: "12px 15px",
                  marginBottom: "12px",
                  borderRadius: "8px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h4 style={{ 
                    margin: "0", 
                    fontSize: "14px", 
                    color: "#2d3748",
                    flex: 1,
                    marginRight: "10px"
                  }}>
                    Q{index + 1}. {item.question}
                  </h4>
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>
                    {item.isCorrect ? "✅" : "❌"}
                  </span>
                </div>
                <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                  <p style={{ margin: "3px 0" }}>
                    <strong>Your Answer:</strong>{" "}
                    <span style={{ color: item.isCorrect ? "#48bb78" : "#fc8181" }}>
                      {item.userAnswer}
                    </span>
                  </p>
                  {!item.isCorrect && (
                    <p style={{ margin: "3px 0" }}>
                      <strong>Correct Answer:</strong>{" "}
                      <span style={{ color: "#48bb78" }}>{item.correctAnswer}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={() => {
                setStarted(false);
                setSubmitted(false);
                setAnswers({});
                setResultDetails([]);
                setTimer(3600);
                setShowTimerWarning(false);
                window.location.reload();
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #0d47a1 0%, #1e88e5 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)"
              }}
            >
              🔄 Take New Mock Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Page - Mobile Optimized
  const q = questions[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f7fa",
      padding: "10px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        {/* Header - Mobile Optimized */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "10px 14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ flex: 1 }}>
            <p style={{ 
              margin: "0", 
              fontSize: "11px", 
              color: "#718096"
            }}>
              Q{current + 1}/{questions.length}
            </p>
            <p style={{ 
              margin: "2px 0 0", 
              fontSize: "10px", 
              color: "#a0aec0"
            }}>
              Answered: {answeredCount}/{questions.length}
            </p>
          </div>
          <div style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: timer < 60 ? "#fc8181" : "#0d47a1",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}>
            <span style={{ fontSize: "16px" }}>⏱️</span>
            <span>{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Question Card */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "10px"
        }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "#e3f2fd",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#0d47a1",
            marginBottom: "12px"
          }}>
            📌 Q{current + 1}
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#0d47a1",
            marginBottom: "16px",
            fontWeight: "600",
            lineHeight: "1.5"
          }}>
            {q.question}
          </h3>

          <div style={{ marginTop: "5px" }}>
            {q.option.map((op, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 12px",
                  margin: "5px 0",
                  backgroundColor: answers[current] === op ? "#e3f2fd" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #0d47a1" : "2px solid transparent",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center"
                }}
                onClick={() => setAnswers({ ...answers, [current]: op })}
              >
                <input
                  type="radio"
                  id={`q${current}-opt${idx}`}
                  name={`question-${current}`}
                  checked={answers[current] === op}
                  onChange={() => {}}
                  style={{ marginRight: "10px", width: "16px", height: "16px", flexShrink: 0 }}
                />
                <label
                  htmlFor={`q${current}-opt${idx}`}
                  style={{
                    fontSize: "14px",
                    cursor: "pointer",
                    flex: 1,
                    margin: "0",
                    color: "#2d3748"
                  }}
                >
                  {op}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === 0 ? "#e2e8f0" : "#0d47a1",
                color: current === 0 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
            >
              ⬅ Prev
            </button>
            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#0d47a1",
                color: current === questions.length - 1 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === questions.length - 1 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
            >
              Next ➡
            </button>
          </div>

          <button
            onClick={submitExam}
            style={{
              padding: "8px 18px",
              fontSize: "13px",
              backgroundColor: "#f57c00",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(245, 124, 0, 0.3)"
            }}
          >
            📤 Submit
          </button>
        </div>

        {/* Question Navigator */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginTop: "10px"
        }}>
          <p style={{ 
            margin: "0 0 8px 0", 
            color: "#718096", 
            fontSize: "11px", 
            fontWeight: "600" 
          }}>
            Question Navigator - {answeredCount}/{questions.length}
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px"
          }}>
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "11px",
                  backgroundColor: answers[idx] ? "#48bb78" : 
                                   current === idx ? "#0d47a1" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #0d47a1" : "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.2s"
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div style={{
            display: "flex",
            gap: "12px",
            marginTop: "8px",
            fontSize: "10px",
            color: "#4a5568",
            flexWrap: "wrap"
          }}>
            <span>🟢 Attempted</span>
            <span>🔵 Current</span>
            <span>⚪ Not Attempted</span>
          </div>
        </div>

        {/* Timer Warning */}
        {showTimerWarning && (
          <div style={{
            position: "fixed",
            bottom: "15px",
            right: "15px",
            left: "15px",
            backgroundColor: "#fc8181",
            color: "white",
            padding: "12px 18px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(252, 129, 129, 0.4)",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "600",
            animation: "pulse 1.5s ease-in-out infinite",
            maxWidth: "400px",
            margin: "0 auto"
          }}>
            ⚠️ Less than 1 minute remaining!
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}