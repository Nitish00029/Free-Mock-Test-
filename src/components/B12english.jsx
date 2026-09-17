// English12thQuiz.jsx
import React, { useState, useEffect, useRef } from "react";

// --- 12th English Question Bank (100 questions) ---

// English Questions
const englishQuestions = [
 {
    question: "The lady mentioned in the poem, ‘An Epitaph’ belonged to—",
    option: [
        "the North Country",
        "the East Country",
        "the West Country",
        "the south Country"
    ],
    answer: "the West Country"
},

{
    question: "The writer visiting an Indian family felt",
    option: [
        "happiness",
        "sorrow",
        "disgust",
        "None of these"
    ],
    answer: "happiness"
},

{
    question: "What are falling fast ?",
    option: [
        "Snow",
        "Flowers",
        "Leaves",
        "Ball"
    ],
    answer: "Leaves"
},

{
    question: "Our ancestors injoyed ………….. Rule.",
    option: [
        "Nice",
        "Society",
        "Home",
        "Nation"
    ],
    answer: "Home"
},

{
    question: "…….. is dead against blind imitation of western civilization.",
    option: [
        "Nehruji",
        "Gandhiji",
        "Patel",
        "Ambedkar"
    ],
    answer: "Gandhiji"
},

{
    question: "Germaine Greer was born and educated in",
    option: [
        "America",
        "France",
        "Australia",
        "Germany"
    ],
    answer: "Australia"
},

{
    question: "Dorothy was born in-",
    option: [
        "1883",
        "1893",
        "1873",
        "1863"
    ],
    answer: "1893"
},

{
    question: "“The Earth” has been written by",
    option: [
        "Germaine Greer",
        "H.E. Bates",
        "Anton Chekhov",
        "Shiga Naoya"
    ],
    answer: "H.E. Bates"
},

{
    question: "‘Pickwick Papers’ was written by –",
    option: [
        "Scott",
        "Dickens",
        "Thackeray",
        "None of these"
    ],
    answer: "Dickens"
},

{
    question: "Without a free press there can be no-",
    option: [
        "Society",
        "Free people",
        "Humanity",
        "Peace"
    ],
    answer: "Free people"
},

{
    question: "Seibi lived in a-",
    option: [
        "village",
        "town",
        "city",
        "harbour town"
    ],
    answer: "harbour town"
},

{
    question: "The poet expresses his indebtedness to-",
    option: [
        "India",
        "America",
        "England",
        "Spain"
    ],
    answer: "England"
},

{
    question: "What taught us to be more friendly towards one another ?",
    option: [
        "Idea",
        "Civilization",
        "Catastrophe",
        "Progress"
    ],
    answer: "Civilization"
},

{
    question: "Who were called together the Anglo-Saxons ?",
    option: [
        "Angles",
        "Saxons",
        "Jutes",
        "All the three"
    ],
    answer: "All the three"
},

{
    question: "Utilization of what thing became a milestone in human progress ?",
    option: [
        "stone",
        "water",
        "fire",
        "cereals"
    ],
    answer: "fire"
},

{
    question: "Tragedy ends with —",
    option: [
        "happiness",
        "sorrow",
        "both",
        "None of these"
    ],
    answer: "sorrow"
},

{
    question: "‘A Marriage Proposal’ presents characters who cause their own ‘",
    option: [
        "house",
        "comfort",
        "comedies",
        "discomfort"
    ],
    answer: "discomfort"
},

{
    question: "When did Dr. Hussain deliver this speech ?",
    option: [
        "On Independence day",
        "On Republic day",
        "When he took oath as the President",
        "On Army day"
    ],
    answer: "When he took oath as the President"
},

{
    question: "The term ‘crumble’ used in the poem, ‘An Epitaph’ means to—",
    option: [
        "die",
        "live",
        "suffer",
        "None of these"
    ],
    answer: "die"
},

{
    question: "The poet observes in summer",
    option: [
        "sunny grass",
        "bird playing",
        "spike of grass",
        "yellow flowers"
    ],
    answer: "spike of grass"
},

{
    question: "Who has written the story ‘The Artist’?",
    option: [
        "P.S. Buck",
        "M. Gandhi",
        "S. Naoya",
        "None of these"
    ],
    answer: "S. Naoya"
},

{
    question: "John Keats was born in-",
    option: [
        "1785",
        "1765",
        "1795",
        "1805"
    ],
    answer: "1795"
},

{
    question: "The two broad categories of idea that have helped mankind—",
    option: [
        "concern & humanity",
        "knowledge & technique",
        "technique & skill",
        "imagination & knowledge"
    ],
    answer: "concern & humanity"
},

{
    question: "'Season of mists and mellow fruitfulness' is written by",
    option: [
        "John Donne",
        "Walt Whitman",
        "W.H. Auden",
        "John Keats"
    ],
    answer: "John Keats"
},

{
    question: "The word drama comes from a __ Word.",
    option: [
        "Latin",
        "Scandinavian",
        "Greek",
        "American"
    ],
    answer: "Greek"
},

{
    question: "A free and fair press is the true watch ...... of democracy.",
    option: [
        "cat",
        "bird",
        "dog",
        "None of these"
    ],
    answer: "dog"
},

{
    question: "Anton Chekhov began his literary career by writing.",
    option: [
        "short stories",
        "poetry",
        "comic sketches",
        "novel"
    ],
    answer: "comic sketches"
},

{
    question: "Who has composed the poem ‘Song of Myself’?",
    option: [
        "Walt Whitman",
        "Tennyson",
        "Emerson",
        "None of these"
    ],
    answer: "Walt Whitman"
},

{
    question: "At first Benjy kept",
    option: [
        "ten or a dozen hens",
        "two dozen hens",
        "four dozen hens",
        "None of these"
    ],
    answer: "ten or a dozen hens"
},

{
    question: "Rupert Brooke died in the year-",
    option: [
        "1915",
        "1935",
        "1925",
        "1917"
    ],
    answer: "1915"
},

{
    question: "The speaker put on his white Jodhpuri coat and the ……… turbom.",
    option: [
        "orange",
        "red",
        "yellow",
        "black"
    ],
    answer: "orange"
},

{
    question: "Macavity is called",
    option: [
        "The Hidden Paw",
        "The Mysterious Paw",
        "the exposed paw",
        "The naughty paw"
    ],
    answer: "The Hidden Paw"
},

{
    question: "What do free people take for granted ?",
    option: [
        "Free home",
        "Free schools",
        "Free press",
        "Free pass"
    ],
    answer: "Free press"
},

{
    question: "By the signing of the emancipation proclamation the hopes of the Negro population-",
    option: [
        "fulfilled",
        "half fulfilled",
        "remained unfulfilled",
        "None of these"
    ],
    answer: "remained unfulfilled"
},

{
    question: "Whitman was born in—",
    option: [
        "1817",
        "1818",
        "1819",
        "1820"
    ],
    answer: "1819"
},

{
    question: ".............. is a master of criminal.",
    option: [
        "Macavity",
        "Monkey",
        "Racavity",
        "None of these"
    ],
    answer: "Monkey"
},

{
    question: "Generally a pregnant woman is sent to her ............... home for childbirth.",
    option: [
        "parents",
        "relative",
        "doctor",
        "None of these"
    ],
    answer: "parents"
},

{
    question: "Who is the writer of the prose piece, 'A Marriage Proposal' ?",
    option: [
        "William Shakespeare",
        "H.E. Bates",
        "Anton Chekhov",
        "Manohar Malgaonkar"
    ],
    answer: "Anton Chekhov"
},

{
    question: "Şeįbej’s hobby of collecting gourd made his teacher-",
    option: [
        "pleased",
        "displeased",
        "laughed",
        "None of these"
    ],
    answer: "displeased"
},

{
    question: "Whom the poet loves so intensely that he wants to come back soon-",
    option: [
        "His son",
        "His daughter",
        "Beloved",
        "Earth"
    ],
    answer: "Beloved"
},

{
    question: "Manohar Malgaonkar was the ……….. om Probation.",
    option: [
        "Secretary",
        "Under Secretary",
        "Joint Secretary",
        "Chief Secretary"
    ],
    answer: "Under Secretary"
},

{
    question: "Who is the author of the prose piece, ‘Ideas That Have Helped mankind’?",
    option: [
        "H.E. Bates",
        "Bertrand Russell",
        "Bertrand Russell",
        "Mahatma Gandhi"
    ],
    answer: "Bertrand Russell"
},

{
    question: "Anton Chekhov was—",
    option: [
        "an American",
        "an indian",
        "a German",
        "a Russian"
    ],
    answer: "a Russian"
},

{
    question: "What moved freely in the silent house ?",
    option: [
        "Lizards",
        "Snakes",
        "Cockroaches",
        "Dogs"
    ],
    answer: "Snakes"
},

{
    question: "Europeon civilization will méan ….. for India.",
    option: [
        "want",
        "living",
        "real",
        "ruin"
    ],
    answer: "ruin"
},

{
    question: "H.E. Bates was born in",
    option: [
        "1906",
        "1905",
        "1915",
        "1925"
    ],
    answer: "1905"
},

{
    question: "The great lesson that India had to teach to the west was its",
    option: [
        "love and peace",
        "humanity",
        "knowledge",
        "culture and tradition"
    ],
    answer: "culture and tradition"
},

{
    question: "Dr. Zakir Hussain entered the office in a spirit of … humility,",
    option: [
        "special",
        "prayful",
        "long",
        "new"
    ],
    answer: "prayful"
},

{
    question: "Macavity is-",
    option: [
        "Fat and tall",
        "Short",
        "Tall and thin",
        "Dome Shaped"
    ],
    answer: "Tall and thin"
},

{
    question: "John Donne wants to go away because he is not tired of his",
    option: [
        "mother",
        "father",
        "beloved",
        "sister"
    ],
    answer: "beloved"
},

{
    question: "The press can make or break-",
    option: [
        "statue",
        "people",
        "reputation",
        "garbling"
    ],
    answer: "reputation"
},

{
    question: "However rare, beauty-",
    option: [
        "Mules",
        "Grumble",
        "Vanishes",
        "Rides"
    ],
    answer: "Vanishes"
},

{
    question: "‘Pamela’ was written by –",
    option: [
        "Defoe",
        "Richardson",
        "Jane Austene",
        "None of these"
    ],
    answer: "Richardson"
},

{
    question: "The term ‘debauchery’ in 'Fire-Hymn' stands for—",
    option: [
        "moral behaviour",
        "disgusting behaviour",
        "immoral behaviour",
        "None of these"
    ],
    answer: "immoral behaviour"
},

{
    question: "Walter de la Mare is famous as a-",
    option: [
        "War poet",
        "Children’s Poet",
        "Nature poet",
        "Romantic poet"
    ],
    answer: "Children’s Poet"
},

{
    question: "The year AD 1066 is taken to be the end of te ……. period.",
    option: [
        "Middle English",
        "Old English",
        "Modern English",
        "None of these"
    ],
    answer: "Old English"
},

{
    question: "Lomov’was the ........ of Choobookov.",
    option: [
        "enemy",
        "friend",
        "brother",
        "neighbour"
    ],
    answer: "neighbour"
},

{
    question: "Nigroes are the former … … of America.",
    option: [
        "farmers",
        "traders",
        "slaves",
        "None of these"
    ],
    answer: "slaves"
},

{
    question: "When Lomov came to Choobookov, the latter-",
    option: [
        "neglected him",
        "welcomed him",
        "abused him",
        "None of these"
    ],
    answer: "welcomed him"
},

{
    question: "Who has composed the poem, 'Ode To Autumn'?",
    option: [
        "Keats",
        "Wordsworth",
        "Coleridge",
        "Shelley"
    ],
    answer: "Keats"
},

{
    question: "Every newspaper is shackled to its own set of-",
    option: [
        "Landlords",
        "Overloads",
        "Overlords",
        "Nightmare"
    ],
    answer: "Overlords"
},

{
    question: "Who is the speaker in this poem?",
    option: [
        "A boy",
        "A girl",
        "The poet himself",
        "An old man"
    ],
    answer: "The poet himself"
},

{
    question: "Man’s power is-",
    option: [
        "Strong",
        "Weak",
        "Unknown",
        "Very strong"
    ],
    answer: "Weak"
},

{
    question: "………. is a short story.",
    option: [
        "A marriage proposal",
        "Ideas That Have Helped Manking",
        "India Through a Traveller’s Eyes",
        "The Artist"
    ],
    answer: "The Artist"
},

{
    question: ".......... was a great lover of nature.",
    option: [
        "John Keats",
        "John Donne",
        "W.H. Auden",
        "Walt Whitman"
    ],
    answer: "John Keats"
},

{
    question: "The word ‘Colour’ reminds the writer of-",
    option: [
        "roses",
        "Indian life",
        "red cross",
        "rainbow"
    ],
    answer: "Indian life"
},

{
    question: "Nanukaka thought that the secretary treated them coldly because they had not gone in-",
    option: [
        "an old car",
        "a bigger car",
        "a small car",
        "a new car"
    ],
    answer: "a bigger car"
},

{
    question: "Dr. Zakir Hussain became the president of India in –",
    option: [
        "1965",
        "1966",
        "1967",
        "1969"
    ],
    answer: "1967"
},

{
    question: "Whitman died in—",
    option: [
        "1889",
        "1890",
        "1891",
        "1892"
    ],
    answer: "1892"
},

{
    question: "Nanukaka was coming to Delhi –",
    option: [
        "to visit the Red Fort",
        "to see some minister",
        "to participate a conference",
        "to spend the summer"
    ],
    answer: "to see some minister"
},

{
    question: "John Done was born in-",
    option: [
        "1562",
        "1672",
        "1572",
        "1570"
    ],
    answer: "1570"
},

{
    question: "Who has composed the poem, 'Macavity : The Mystery Cat'?",
    option: [
        "T.S. Eliot",
        "W.B. Yeats",
        "W.H. Auden",
        "None of these"
    ],
    answer: "T.S. Eliot"
},

{
    question: "Married women do not become members of their new family until they have",
    option: [
        "started cooking",
        "start earning",
        "mix with others",
        "born a child"
    ],
    answer: "born a child"
},

{
    question: "Dr. Zakir Hussain took the oath of loyalty to the ………….",
    option: [
        "people",
        "constitution",
        "nation",
        "None of these"
    ],
    answer: "constitution"
},

{
    question: "Who is the writer of the prose piece, ‘A Marriage Proposal’ ?",
    option: [
        "H.E. Bates",
        "William Shakespeare",
        "Anton Chekhov",
        "Manohar Malgaonkar"
    ],
    answer: "Anton Chekhov"
},

{
    question: "‘David Copperfield’ was written by –",
    option: [
        "Feilding",
        "Eliot",
        "Dickens",
        "None of these"
    ],
    answer: "Dickens"
},

{
    question: "............. is tall and thin,",
    option: [
        "Nacavity",
        "Macavity",
        "Lacavity",
        "Sacavity"
    ],
    answer: "Macavity"
},

{
    question: "Rupert Brooke speaks in the guise of an ............ soldier.",
    option: [
        "English",
        "American",
        "French",
        "European"
    ],
    answer: "English"
},

{
    question: "Keki N. Daruwalla has written the poem—",
    option: [
        "Song of Myself",
        "Snake",
        "Fire-Hymn",
        "The Soldier"
    ],
    answer: "Fire-Hymn"
},

{
    question: "Anton Chekhov was born in-",
    option: [
        "1850",
        "1860",
        "1855",
        "1865"
    ],
    answer: "1860"
},

{
    question: "New leaves and fruits grow on trees in-",
    option: [
        "Summer",
        "Autumn",
        "Winter",
        "Rainy Season"
    ],
    answer: "Autumn"
},

{
    question: "What did the doctor advise the Johnson’s couple for the mental growth or development of the mind of their only son ?",
    option: [
        "to marry him",
        "give some occupation",
        "treatment",
        "send to earn"
    ],
    answer: "give some occupation"
},

{
    question: "Who has got a heart condition, with palpitations all the time ?",
    option: [
        "Choobookov",
        "Natalia",
        "Lomov",
        "Chekhov"
    ],
    answer: "Lomov"
},

{
    question: "‘I Have a Dream’ is a speech delivered by –",
    option: [
        "Germaine Greer",
        "Shiga Nadya",
        "H.E. Bates",
        "Martin Luther King | Jr."
    ],
    answer: "Martin Luther King | Jr."
},

{
    question: "Gandhi’s hold was upon",
    option: [
        "intellectuals",
        "peasants",
        "both",
        "None of these"
    ],
    answer: "both"
},

{
    question: "Germaine Greer was born in",
    option: [
        "1938",
        "1940",
        "1939",
        "1949"
    ],
    answer: "1939"
},

{
    question: "Keki N. Daruwalla consigned his new born ............ to flames.",
    option: [
        "son",
        "daughter",
        "brother",
        "sister"
    ],
    answer: "son"
},

{
    question: "The poet in ‘Ther Soldier’ is depicting the miseries of— [2018 A, I.A.]",
    option: [
        "war",
        "nature",
        "relation",
        "love"
    ],
    answer: "war"
},

{
    question: "One could walk from one end of the town to another in-",
    option: [
        "ten minutes",
        "Twenty minutes",
        "half-an-hour",
        "four hours."
    ],
    answer: "Twenty minutes"
},

{
    question: "Whom the poet loves so intensely that he wants to come back soon ?",
    option: [
        "son",
        "daughter",
        "beloved",
        "mother"
    ],
    answer: "beloved"
},

{
    question: "The speaker belongs to religion",
    option: [
        "Hindu",
        "Muslim",
        "Sikh",
        "Zoroastrian"
    ],
    answer: "Zoroastrian"
},

{
    question: "The author was merely-",
    option: [
        "an under secretary",
        "a secretary",
        "a clerk",
        "a peon"
    ],
    answer: "an under secretary"
},

{
    question: "He was a celebrated Japanese-",
    option: [
        "novelist",
        "dramatist",
        "columnist",
        "short story writer"
    ],
    answer: "short story writer"
},

{
    question: "…… was a great orator.",
    option: [
        "Pearl S. Buck",
        "Shiga Naoya",
        "Martin Luther King | Jr.",
        "Germaine Greer"
    ],
    answer: "Martin Luther King | Jr."
},

{
    question: "Who disturb the 'real delight' of the ageing persons-",
    option: [
        "Nurse’s flowers",
        "Starving people",
        "Whispering neighbours",
        "Cold"
    ],
    answer: "Whispering neighbours"
},

{
    question: "Johnson was a poor",
    option: [
        "farmer",
        "teacher",
        "doctor",
        "trader"
    ],
    answer: "farmer"
},

{
    question: "A big circulation spells bankruptcy if the paper has to depend on—",
    option: [
        "the sales",
        "advertisers",
        "salers",
        "None of these"
    ],
    answer: "the sales"
},

{
    question: "The prams are-",
    option: [
        "Running",
        "Rolling",
        "Standing",
        "Broken"
    ],
    answer: "Rolling"
},

{
    question: "The falling of ............ refer to the speedy arrival of death.",
    option: [
        "leaves",
        "stones",
        "snows",
        "None of these"
    ],
    answer: "leaves"
},

{
    question: "John Donne was the pioneer of new kind of lyrical and satirical verse called-",
    option: [
        "Metaphorical",
        "Free verse",
        "New school verse",
        "Metaphysical"
    ],
    answer: "Metaphysical"
},

{
    question: "In England Printing Press was invented in –",
    option: [
        "1475",
        "1476",
        "1477",
        "1478"
    ],
    answer: "1476"
},

{
    question: "Power should be vsed only for —",
    option: [
        "making money",
        "moral purpose",
        "own interest",
        "material gain"
    ],
    answer: "moral purpose"
},

{
    question: "'We saw embers losing their cruel redness is taken from ............",
    option: [
        "Song of Myself",
        "Fire-Hymn",
        "The Soldier",
        "Snake"
    ],
    answer: "Fire-Hymn"
},

{
    question: "The English language of today reflects………….. centuries of political and social developments.",
    option: [
        "fourth centuries",
        "fifth centuries",
        "sixth centuries",
        "seventh centuries"
    ],
    answer: "fifth centuries"
},

{
    question: "Rupert Brooke was died in –",
    option: [
        "1913",
        "1914",
        "1915",
        "1916"
    ],
    answer: "1915"
},

{
    question: "Indian people be reckoned as belonging to which race ?",
    option: [
        "Hegemonic",
        "Caucasian",
        "Apartheid",
        "Capoid"
    ],
    answer: "Caucasian"
},

{
    question: "A big circulation spells bankruptcy if the paper has to depend on its sales for its-",
    option: [
        "Advertisement",
        "Policy",
        "Ethics",
        "Revenue"
    ],
    answer: "Revenue"
},

{
    question: "Who is the poet of 'Now the Leaves Are Falling Fast' ?",
    option: [
        "John Keats",
        "W.H. Auden",
        "Rupert Brooke",
        "T.S. Eliot"
    ],
    answer: "W.H. Auden"
},

{
    question: "In the first line of the poem ‘Song of Myself’ is the poet—",
    option: [
        "John Keats",
        "Kamala Das",
        "John Donne",
        "Walt Whitman"
    ],
    answer: "Walt Whitman"
},

{
    question: "Módern English begins from –",
    option: [
        "AD 1300",
        "AD 1400",
        "AD 1500",
        "AD 1600"
    ],
    answer: "AD 1500"
},

{
    question: "Kamala Das was born on-",
    option: [
        "April 31, 1933",
        "April 31, 1934",
        "April 31, 1935",
        "April 31, 1936"
    ],
    answer: "April 31, 1934"
},

{
    question: "Comedy ends with —",
    option: [
        "happiness",
        "sorrow",
        "both",
        "None of these"
    ],
    answer: "happiness"
},

{
    question: "In democracy, the freedom of press is.",
    option: [
        "not necessary",
        "necessary",
        "dangerous",
        "None of these"
    ],
    answer: "necessary"
},

{
    question: "The second important person Nanukaka had planned to meet was-",
    option: [
        "The Home Minister",
        "The Railway Minister",
        "The Welfare Minister",
        "None of these"
    ],
    answer: "The Welfare Minister"
},

{
    question: "The leaves are falling —",
    option: [
        "slow",
        "soon",
        "fast",
        "None of these"
    ],
    answer: "fast"
},

{
    question: "………….. were rulers of Egypt..",
    option: [
        "Americans",
        "Africans",
        "Iranians",
        "Pharaohs"
    ],
    answer: "Pharaohs"
},

{
    question: "Benjy purchased land from –",
    option: [
        "Sanders",
        "Meanders",
        "Randers",
        "None of these"
    ],
    answer: "Sanders"
},

{
    question: "The suggested that Benjy should be allowed to keep hens.",
    option: [
        "teacher",
        "doctor",
        "friend",
        "saint"
    ],
    answer: "doctor"
},

{
    question: "Martin Luther King | Jr. has written the lesson –",
    option: [
        "The Artist",
        "I Have a Dream",
        "A Pinch of Snuff",
        "Bharat Is My Home"
    ],
    answer: "I Have a Dream"
},

{
    question: "Who is the master of the state ?",
    option: [
        "Government",
        "Press",
        "Court",
        "People"
    ],
    answer: "People"
},

{
    question: "The prose piece ‘India Through A Traveller’s Eyes’ is written by:",
    option: [
        "Anton Chekhov",
        "Bertrand Russell",
        "Pearl S. Buck",
        "Dorothy L. Sayers"
    ],
    answer: "Pearl S. Buck"
},

{
    question: "About __years ago, Latin was a world language.",
    option: [
        "600",
        "700",
        "800",
        "900"
    ],
    answer: "800"
},

{
    question: "The teacher became very-very………. with Seibei for neglecting his studies.",
    option: [
        "happy",
        "sad",
        "angry",
        "friendly"
    ],
    answer: "angry"
},

{
    question: "Benjy had left school at the age of-",
    option: [
        "Fourteen",
        "Twelve",
        "Ten",
        "Eight"
    ],
    answer: "Fourteen"
},

{
    question: "Macavity is-",
    option: [
        "A spy",
        "A dog",
        "A Cat",
        "A boy"
    ],
    answer: "A Cat"
},

{
    question: "Seibei’s parents know that he often went out to buy himself-",
    option: [
        "oranges",
        "apples",
        "gourds",
        "potatoes"
    ],
    answer: "gourds"
},

{
    question: "The family doctor of Pearl S. Buck belonged to",
    option: [
        "China",
        "America",
        "India",
        "Germany"
    ],
    answer: "India"
},

{
    question: "The soldier’s is written by-",
    option: [
        "John Donne",
        "Walt Whitman",
        "Rupert Brooke",
        "D.H. Lawrence"
    ],
    answer: "Rupert Brooke"
},

{
    question: "…… went to the minister in Jodhpuri coat.",
    option: [
        "Nunukaka",
        "Shiga Naoya",
        "Manohar Malgaonkar (Author)",
        "None of these"
    ],
    answer: "Manohar Malgaonkar (Author)"
},

{
    question: "'He is broken every human law' is taken from—",
    option: [
        "The Soldier",
        "Fire-Hymn",
        "An Epitaph",
        "Macavity : The Mystery cat"
    ],
    answer: "Macavity : The Mystery cat"
},

{
    question: "John Donne had seen the sun setting night.",
    option: [
        "today",
        "yesterday",
        "tomorrow",
        "None of these"
    ],
    answer: "yesterday"
},

{
    question: "The poem 'Fire-Hymn' is about a-",
    option: [
        "Human society",
        "Violence",
        "Burning ghat",
        "Man"
    ],
    answer: "Burning ghat"
},

{
    question: "Full freedom is restored when it comes-",
    option: [
        "war",
        "famine",
        "peace",
        "blood"
    ],
    answer: "peace"
},

{
    question: "Anton Chekhov was born in-",
    option: [
        "1850",
        "1870",
        "1860",
        "1880"
    ],
    answer: "1860"
},

{
    question: "This is the special accomplishment of the Press interviewer-",
    option: [
        "Marbling",
        "Garbling",
        "Titillating",
        "Allusion"
    ],
    answer: "Garbling"
},

{
    question: "When Benjy possessed a passbook from his parents, his passbook had low much amount ?",
    option: [
        "More than 00 pounds",
        "More than 200 pounds",
        "More than 220 pounds",
        "More than 230 pounds"
    ],
    answer: "More than 230 pounds"
},

{
    question: "The word ‘pictorial’ was related to early man with",
    option: [
        "reading",
        "cooking",
        "writing",
        "hunting"
    ],
    answer: "writing"
},

{
    question: "Freedom of press is restricted during-",
    option: [
        "peace",
        "war",
        "epidemic",
        "None of these"
    ],
    answer: "war"
},

{
    question: "However rare, beauty-",
    option: [
        "Rules",
        "Crumble",
        "Vanishes",
        "Expresses"
    ],
    answer: "Vanishes"
},

{
    question: "She was educated at",
    option: [
        "Cambridge",
        "Oxford",
        "both",
        "None of these"
    ],
    answer: "Oxford"
},

{
    question: "Civilization points out to man —",
    option: [
        "how to make money",
        "how to win the enemy",
        "the path of duty",
        "the way of living"
    ],
    answer: "the path of duty"
},

{
    question: "‘SNAKE’ is written by-",
    option: [
        "W.H. Auden",
        "T.S. Eliot",
        "D.H. Lawrence",
        "John Donne"
    ],
    answer: "D.H. Lawrence"
},

{
    question: "The poetess in 'The Grand Mother’s House' begs at .... doors. [2018A, I.A.]",
    option: [
        "friend’s",
        "family’s",
        "stranger’s",
        "enemy’s"
    ],
    answer: "stranger’s"
},

{
    question: "‘Edward-II’ was written by –",
    option: [
        "Marlowe",
        "Spenser",
        "Milton",
        "None of these"
    ],
    answer: "Marlowe"
},

{
    question: "The past is —",
    option: [
        "dead and static",
        "alive and dynamic",
        "useless",
        "harmful"
    ],
    answer: "alive and dynamic"
},

{
    question: "The name ‘Augustan” was given to the early ……… century.",
    option: [
        "17th",
        "18th",
        "19th",
        "20th"
    ],
    answer: "18th"
},

{
    question: "Daruwalla’s poetry is ‘a totally ................. recording to subjective responses’.",
    option: [
        "impressionistic",
        "symbolistic",
        "idealistic",
        "None of these"
    ],
    answer: "impressionistic"
},

{
    question: "Keki N. Daruwalla is an poet.",
    option: [
        "American",
        "Indo-Anglian",
        "African",
        "British"
    ],
    answer: "Indo-Anglian"
},

{
    question: "She noticed a ................ behind the door of the bedroom.",
    option: [
        "ox",
        "cow",
        "dog",
        "cat"
    ],
    answer: "cat"
},

{
    question: "Beiyy married Florence at the age of-",
    option: [
        "30",
        "35",
        "40",
        "28"
    ],
    answer: "40"
},

{
    question: "Nanukaka portrayed himself as the hereditary astrologer of the Maharaja of-",
    option: [
        "Jaipur",
        "Bikaner",
        "Ninnore",
        "None of these"
    ],
    answer: "Ninnore"
},

{
    question: "Johnsons’ only son was named :",
    option: [
        "H. E. Bates",
        "Tom",
        "Benjy",
        "Bony"
    ],
    answer: "Benjy"
},

{
    question: "During summer birds—",
    option: [
        "remember this catastrophe",
        "forget this catastrophe",
        "fear from this",
        "None of these"
    ],
    answer: "forget this catastrophe"
},

{
    question: "Rupert Brooke is remembered as a —",
    option: [
        "Trench poet",
        "Georgian poet",
        "Realistic poet",
        "War poet"
    ],
    answer: "War poet"
},

{
    question: "Mr. Stepan Stepanovich Choobookov is a/an",
    option: [
        "artist",
        "Land Owner",
        "writer",
        "Poet"
    ],
    answer: "Land Owner"
},

{
    question: "Under ordinary conditions, which press is singularly free, as mentioned in the essay-",
    option: [
        "Indian press",
        "American press",
        "British press",
        "European press"
    ],
    answer: "British press"
},

{
    question: "Benjy got a pass book having pretty money in bank, when he was of the age.",
    option: [
        "eighty",
        "twenty",
        "twenty-one",
        "thirty"
    ],
    answer: "twenty-one"
},

{
    question: "'Trolls' mentioned in the poem, 'Now The Leaves are Falling Fast' are mythological creatures.",
    option: [
        "Scandinavian",
        "Indian",
        "Russian",
        "None of these"
    ],
    answer: "Scandinavian"
},

{
    question: "Benjy had left school at the age of .",
    option: [
        "fourteen",
        "ten",
        "twelve",
        "eight"
    ],
    answer: "fourteen"
},

{
    question: "Shiga Naoya was born in-",
    option: [
        "1873",
        "1853",
        "1883",
        "1893"
    ],
    answer: "1883"
},

{
    question: "‘The Soldier’ is-",
    option: [
        "Children’s poem",
        "Romantic Poem",
        "War poem",
        "Nature Poem"
    ],
    answer: "War poem"
},

{
    question: "In traditional society a woman lose her own name and is known as the mother of her first born child, but the West regards it is—",
    option: [
        "good",
        "beneficial",
        "outrageous",
        "None of these"
    ],
    answer: "outrageous"
},

{
    question: "She taught in",
    option: [
        "an Indian University",
        "an American University",
        "a Chinese University",
        "None of these"
    ],
    answer: "a Chinese University"
},

{
    question: "Who is the poet of ‘Song of Myself’?",
    option: [
        "W.H. Auden",
        "John Keats",
        "Walt Whitman",
        "T.S. Eliot"
    ],
    answer: "Walt Whitman"
},

{
    question: "…… informed the undersecretary about Namukaka’s. visit.",
    option: [
        "father.",
        "mother",
        "friend",
        "brother"
    ],
    answer: "mother"
},

{
    question: "Who was composed the poem ‘Snake’?",
    option: [
        "D.H. Lawrence",
        "T.S. Eliot",
        "W.B. Yeats",
        "W.H. Auden"
    ],
    answer: "D.H. Lawrence"
},

{
    question: "Utilization of what thing become a milestone in human progress ?",
    option: [
        "Water",
        "Stone",
        "Fire",
        "Cereals"
    ],
    answer: "Fire"
},

{
    question: "Autumn is the close friend of the maturing-",
    option: [
        "Moon",
        "Flowers",
        "Sun",
        "People"
    ],
    answer: "Sun"
},

{
    question: "The term ‘concealed’ stands for .......... in ‘The Soldier’.",
    option: [
        "hidden",
        "disappeared",
        "absent",
        "None of these"
    ],
    answer: "hidden"
},

{
    question: "Martin Luther King Jr. was assassinated on-",
    option: [
        "March 4",
        "April 4",
        "May 4",
        "December 4"
    ],
    answer: "April 4"
},

{
    question: "H. E. Bates was born in",
    option: [
        "1905",
        "1805",
        "1908",
        "1810"
    ],
    answer: "1905"
},

{
    question: "Who is the master of the state ?",
    option: [
        "government",
        "pressed",
        "courteous",
        "people"
    ],
    answer: "people"
},

{
    question: "The Word ‘English’ is used in the poem for how many times ?",
    option: [
        "One",
        "Two",
        "Three",
        "Four"
    ],
    answer: "Two"
},

{
    question: "‘The Gitanjali’ has been written by –",
    option: [
        "Sarojini Naidu",
        "Rabindranath Tagore",
        "Aurobindo Ghosh",
        "None of these"
    ],
    answer: "Rabindranath Tagore"
},

{
    question: "The .......... is not the master but the servant of the people.",
    option: [
        "State",
        "Government",
        "Village",
        "District"
    ],
    answer: "State"
},

{
    question: "Dr. Zakir Hussain was long associated with—",
    option: [
        "business",
        "education",
        "art",
        "game"
    ],
    answer: "education"
},

{
    question: "Rupert Brooke was born in-",
    option: [
        "1827",
        "1867",
        "1887",
        "1878"
    ],
    answer: "1887"
},

{
    question: "On the occasion musical programme is given by—",
    option: [
        "the dance party",
        "by the male members of the family",
        "by the women and girls",
        "None of these"
    ],
    answer: "by the women and girls"
},

{
    question: "H. E. Bates died in the year.........",
    option: [
        "1984",
        "1974",
        "1964",
        "1894"
    ],
    answer: "1974"
},

{
    question: "The word ‘erudition’ stands for —",
    option: [
        "poverty",
        "great knowledge",
        "prosperity",
        "greed"
    ],
    answer: "great knowledge"
},

{
    question: "Macavity can defy or disobey or challenge-",
    option: [
        "His master",
        "The food",
        "The law",
        "The dog"
    ],
    answer: "The law"
},

{
    question: "The speaker confesses that he-",
    option: [
        "Hit the snake",
        "Liked the snake",
        "Feared the snake",
        "Disliked the snake"
    ],
    answer: "Liked the snake"
},

{
    question: "The occasion of the poem, ‘Sweetest Love, I Do Not Goe’ is Donne’s—",
    option: [
        "continental trip",
        "space tour",
        "voyage",
        "None of these"
    ],
    answer: "continental trip"
},

{
    question: "The word in the chapter ‘persuaded’ means same as",
    option: [
        "projected",
        "married",
        "convinced",
        "grown"
    ],
    answer: "convinced"
},

{
    question: "The English from 15th Century till now is called English –",
    option: [
        "Old",
        "Middle",
        "Modern",
        "None of these"
    ],
    answer: "Modern"
},

{
    question: "Martin Luther King | Jr | delivered his speech in Washington DC on August –",
    option: [
        "25 | 1963",
        "28 | 1963",
        "12 | 1964",
        "28 | 1965"
    ],
    answer: "28 | 1963"
},

{
    question: "Who progressed in course of time ?",
    option: [
        "animals",
        "birds",
        "humans",
        "country"
    ],
    answer: "humans"
},

{
    question: "Who are all assumed to be unjust and vindictive ?",
    option: [
        "Husbands",
        "Fathers-in-law",
        "Husband's brothers",
        "Mothers-in-law"
    ],
    answer: "Mothers-in-law"
},

{
    question: "Walter de la Mare died in-",
    option: [
        "1873",
        "1883",
        "1882",
        "1863"
    ],
    answer: "1873"
},

{
    question: "The word used in the essay for the uncontrolled freedom of one man, or one gang, to impose its will on the world is-",
    option: [
        "Brutality",
        "Tyranny",
        "Dictatorship",
        "Coerce"
    ],
    answer: "Tyranny"
},

{
    question: "Shiga Naoya is a ………..writer.",
    option: [
        "Chinese",
        "indian",
        "American",
        "Japanese"
    ],
    answer: "Japanese"
},

{
    question: "A ............... came to D.H. Lawrence’s water trough.",
    option: [
        "snake",
        "cow",
        "goat",
        "cat"
    ],
    answer: "snake"
},

{
    question: "Dr. Radhakrishnan explained exceptionally-",
    option: [
        "Indian economics",
        "Indian philosophy",
        "Indian politics",
        "Indian civilization"
    ],
    answer: "Indian philosophy"
},

{
    question: "……….. has given the Negro people a bad cheque which has come back marked in sufficient fund!",
    option: [
        "Europe",
        "Highway",
        "America",
        "Mexico"
    ],
    answer: "America"
},

{
    question: "The Anglo-Saxons invaded England in the –",
    option: [
        "fifth century",
        "Sixth century",
        "Seventh century",
        "None of these"
    ],
    answer: "fifth century"
},

{
    question: "Dr. Zakir Hussain was a great …………….",
    option: [
        "politician",
        "thinker",
        "nationalist",
        "leader"
    ],
    answer: "nationalist"
},

{
    question: "How old is Natalia ?",
    option: [
        "Twenty years",
        "Twenty-one",
        "Twenty-eight",
        "Twenty-five"
    ],
    answer: "Twenty-five"
},

{
    question: "Pearl S. Buck died in the year-",
    option: [
        "1953",
        "1963",
        "1973",
        "1983"
    ],
    answer: "1973"
},

{
    question: "'Macavity: the Mystery Cat' is a .......... poem.",
    option: [
        "humprous",
        "didactic",
        "symbolic",
        "None of these"
    ],
    answer: "humprous"
},

{
    question: "In Bangladesh Rupthoka is a kind of—",
    option: [
        "bread",
        "sweet dish",
        "fairy tales",
        "None of these"
    ],
    answer: "fairy tales"
},

{
    question: "The prams were.........",
    option: [
        "big",
        "still",
        "rolling",
        "Lost"
    ],
    answer: "rolling"
},

{
    question: "Ratiram was the son of …………",
    option: [
        "Mohanlal Ratiram",
        "Sohanlal Ratiram",
        "Jaganlal Ratiram",
        "None of these"
    ],
    answer: "Sohanlal Ratiram"
},

{
    question: "In the old English period the two major influences were –",
    option: [
        "Latin and French",
        "Latin and Greek",
        "Latin and Scandinavian",
        "Latin and Indian"
    ],
    answer: "Latin and Scandinavian"
},

{
    question: "‘The Scholar Gipsy’ has been written by –",
    option: [
        "Matthew Arnold",
        "W.B. Yeats",
        "Robert Bridges",
        "J.M. Synge"
    ],
    answer: "Matthew Arnold"
},

{
    question: "The term 'Zoroastrian' in 'Fire-Hymn' stands for—",
    option: [
        "Hindu",
        "Muslim",
        "Christian",
        "Parsi"
    ],
    answer: "Parsi"
},

{
    question: "He used as the chief weapons —",
    option: [
        "swords",
        "nuclear weapons",
        "guns",
        "truth and non-violence"
    ],
    answer: "truth and non-violence"
},

{
    question: "Civilization taught us —",
    option: [
        "to be unlawful",
        "to be rude or cruel",
        "to be more friendly towards others",
        "None of these"
    ],
    answer: "to be more friendly towards others"
},

{
    question: "The mind is a restless bird which always remains —",
    option: [
        "Hugry",
        "unsatisfied",
        "thirsty",
        "sick"
    ],
    answer: "unsatisfied"
},

{
    question: "‘Leaves of Grass’ a collection of poetry, known for its free rhythms is written by",
    option: [
        "John Keats",
        "Walt Whitman",
        "T.S. Eliot",
        "W.H. Auden"
    ],
    answer: "Walt Whitman"
},

{
    question: "'Now the Leaves are Falling Fast' is poem.",
    option: [
        "a pessimistic",
        "optimistic",
        "a pessimistic-cum-optimistic",
        "None of these"
    ],
    answer: "a pessimistic-cum-optimistic"
},

{
    question: "One must admire the inherent qualities in the –",
    option: [
        "young",
        "children",
        "old",
        "adult"
    ],
    answer: "children"
},

{
    question: "Dr. Zakir Hussain was born in —",
    option: [
        "Delhi",
        "Karnataka",
        "Chennai",
        "Hyderabad"
    ],
    answer: "Hyderabad"
},

{
    question: "When Benjy possessed a pass book from his parents, his pass book had how much amount ?",
    option: [
        "130 pounds",
        "200 pounds",
        "220 pounds",
        "230 pounds"
    ],
    answer: "230 pounds"
},

{
    question: "The most indubitable respect in which ideas have helped mankind is—",
    option: [
        "more knowledge",
        "numbers",
        "happiness",
        "less numbers"
    ],
    answer: "numbers"
},

{
    question: "T.S. Eliot died in-",
    option: [
        "1915",
        "1965",
        "1955",
        "1935"
    ],
    answer: "1965"
},

{
    question: "‘A Child Is Born’ is an extract from the author’s book named-",
    option: [
        "The Wind",
        "The Change",
        "The Female Eunuch",
        "Sex and Destiny : The Politics of Human Fertility"
    ],
    answer: "Sex and Destiny : The Politics of Human Fertility"
},

{
    question: "America gave the Negro people –",
    option: [
        "a good cheque",
        "a bad cheque",
        "a torn cheque",
        "None of these"
    ],
    answer: "a bad cheque"
},

{
    question: "Martin Luther King Jr. was born in-",
    option: [
        "1939",
        "1929",
        "1919",
        "1969"
    ],
    answer: "1929"
},

{
    question: "‘Othello’ is a –",
    option: [
        "comedy",
        "tragedy",
        "novel",
        "story"
    ],
    answer: "tragedy"
},

{
    question: "Ideas pay the way for –",
    option: [
        "Building",
        "Development",
        "Emotions",
        "Multiplicity"
    ],
    answer: "Development"
},

{
    question: "Walter de la Mare was—",
    option: [
        "a poet",
        "a novelist",
        "a short story-writer",
        "All of these"
    ],
    answer: "All of these"
},

{
    question: "Macavity disappears from the place of theft before the reach ............ there.",
    option: [
        "Owner",
        "Police",
        "Charles",
        "None of these"
    ],
    answer: "Police"
},

{
    question: "Nanukaka was author’s –",
    option: [
        "brother",
        "neighbour",
        "maternal uncle",
        "friend"
    ],
    answer: "maternal uncle"
},

{
    question: "The Negroes made the pledge that they will always-",
    option: [
        "march ahead",
        "march back",
        "march slowly",
        "None of these"
    ],
    answer: "march ahead"
},

{
    question: "The present chapter explores the cultural peculiarities of the East and the west regarding parent-child relationship and-",
    option: [
        "child-death",
        "child-birth",
        "nursing",
        "female interest"
    ],
    answer: "child-birth"
},

{
    question: "Auden was—",
    option: [
        "a poet",
        "a verse dramatist",
        "a serious game",
        "All of these"
    ],
    answer: "All of these"
},

{
    question: "Man's power is",
    option: [
        "strong",
        "weak",
        "known",
        "strong"
    ],
    answer: "weak"
},

{
    question: "The printing technology was introduced in England in –",
    option: [
        "1466",
        "1476",
        "1486",
        "1496"
    ],
    answer: "1476"
},

{
    question: "Benjy was the son of –",
    option: [
        "Robinsons",
        "Stevensons",
        "Rocksons",
        "Johnsons"
    ],
    answer: "Johnsons"
},

{
    question: "She won the Nobel Prize in",
    option: [
        "1928",
        "1938",
        "1948",
        "1958"
    ],
    answer: "1938"
},

{
    question: "Modern civilization is the worship of —",
    option: [
        "material",
        "ethics",
        "brotherhood",
        "equality"
    ],
    answer: "material"
},

{
    question: "The poet compares the snake to a ............... bird, albatross.",
    option: [
        "river",
        "sea",
        "pond",
        "well"
    ],
    answer: "sea"
},

{
    question: "‘King Lear’ is a –",
    option: [
        "Comedy",
        "drama",
        "Poetry",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "Nanukaka was a very ……. Man.",
    option: [
        "food",
        "stupid",
        "honest",
        "clever"
    ],
    answer: "clever"
},

{
    question: "The peasants used the land for—",
    option: [
        "thirty years",
        "fifty years",
        "forty years",
        "None of these"
    ],
    answer: "forty years"
},

{
    question: "The people of Europe learn their lesson from the writing of the man of ……",
    option: [
        "Germany",
        "Britain",
        "Greece or Rome",
        "Spain"
    ],
    answer: "Greece or Rome"
},

{
    question: "A free and fair press is the true watchdog of-",
    option: [
        "Colony",
        "Persons",
        "Court",
        "Democracy"
    ],
    answer: "Democracy"
},

{
    question: "Anton Chekhov was bora in",
    option: [
        "1850",
        "1860",
        "1855",
        "1865"
    ],
    answer: "1860"
},

{
    question: "…….were satisfied with small villages.",
    option: [
        "Our ancestors",
        "Germans",
        "Romans",
        "Italians"
    ],
    answer: "Our ancestors"
},

{
    question: "Lomov proposed Natalia—",
    option: [
        "directly",
        "indirectly",
        "hesitatingly",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "The speaker had a desire to talk to",
    option: [
        "cat",
        "rat",
        "scorpion",
        "snake"
    ],
    answer: "snake"
},

{
    question: "Bertrand Russell was a philosopher and a —",
    option: [
        "historian",
        "scientist",
        "mathematician",
        "geologist"
    ],
    answer: "mathematician"
},

{
    question: "Who’s death the speaker says-",
    option: [
        "Her husband",
        "Her grandmother",
        "Her grandfather",
        "Her brother"
    ],
    answer: "Her grandmother"
},

{
    question: "………… is the main character of the story ‘A Pinch of Snuff.",
    option: [
        "Nanukaka",
        "Sohanlal Ratiram",
        "Manohar Malgaonkar",
        "None of these"
    ],
    answer: "Nanukaka"
},

{
    question: "Without a free press there can be no",
    option: [
        "peace",
        "free people",
        "humanity",
        "society"
    ],
    answer: "free people"
},

{
    question: "Autobiography of Kamla Das was published in-",
    option: [
        "1976",
        "1966",
        "1986",
        "1996"
    ],
    answer: "1976"
},

{
    question: "John Keats died in the year-",
    option: [
        "1820",
        "1821",
        "1815",
        "1825"
    ],
    answer: "1821"
},

{
    question: "Dorothy L.Sayers was born in -",
    option: [
        "1863",
        "1873",
        "1883",
        "1893"
    ],
    answer: "1893"
},

{
    question: "The first chief source of a newspaper's revenue is ........",
    option: [
        "donation",
        "debt",
        "grant by the government",
        "advertisement"
    ],
    answer: "advertisement"
},

{
    question: "Walter de la Mare shows fresh interest in themes.",
    option: [
        "old",
        "medieval",
        "love",
        "None of these"
    ],
    answer: "old"
},

{
    question: "John keats died to the year-",
    option: [
        "1821",
        "1822",
        "1815",
        "1825"
    ],
    answer: "1821"
},

{
    question: "Namukaka had third class ticket but travelled in the second class because –",
    option: [
        "he was clever",
        "there was no third class",
        "he lost his ticket",
        "there was no room in the third class"
    ],
    answer: "there was no room in the third class"
},

{
    question: "Macavity's foot-prints are not found in any .......... of Scotland yard.",
    option: [
        "file",
        "book",
        "copy",
        "None of these"
    ],
    answer: "file"
},

{
    question: "‘Serpent and the Rope was written by –",
    option: [
        "Mulk Raj Anand",
        "Kamala Das",
        "Raja Rao",
        "R.K. Narayan"
    ],
    answer: "Raja Rao"
},

{
    question: "Under ordinary conditions, which press is singularly free, as mentioned in the essay-",
    option: [
        "European Press",
        "American Press",
        "British Press",
        "Indian Press"
    ],
    answer: "British Press"
},

{
    question: "“Plain living and high thinking’ is the motto of –",
    option: [
        "Western philosopher",
        "Eastern philosopher",
        "North philosopher",
        "None of these"
    ],
    answer: "Western philosopher"
},

{
    question: "The travellers are the persons.",
    option: [
        "young",
        "old",
        "sick",
        "orphan"
    ],
    answer: "old"
},

{
    question: "Bertrand Russell died in—",
    option: [
        "1940",
        "1950",
        "1960",
        "1970"
    ],
    answer: "1970"
},

{
    question: "The ceremony is held—",
    option: [
        "only for boy",
        "only for girl",
        "for both",
        "None of these"
    ],
    answer: "for both"
},

{
    question: "When baby is born, it is an occasion of joy for—",
    option: [
        "the mother",
        "father",
        "strange",
        "the whole family"
    ],
    answer: "the whole family"
},

{
    question: "Seibei was-",
    option: [
        "an artist",
        "a musician",
        "a singer",
        "None of these"
    ],
    answer: "an artist"
},

{
    question: "The second phase of Middle English Literature covers the period .",
    option: [
        "AD 950 – AD 1350",
        "AD 1050 – AD 1350",
        "AD 1150 – AD 1350",
        "AD 1250 – AD 1350"
    ],
    answer: "AD 1250 – AD 1350"
},

{
    question: "Keki N. Daruwalla was a by religion.",
    option: [
        "Parsi",
        "Muslim",
        "Hindu",
        "Christian"
    ],
    answer: "Parsi"
},

{
    question: "How did Choobok react when the he comes to know that Lomov wants to marry Natalia ?",
    option: [
        "happy",
        "sad",
        "angry",
        "serious"
    ],
    answer: "happy"
},

{
    question: "‘Sweetest Love, ‘I Do Not Goe’ is—",
    option: [
        "a didactic poem",
        "an allegorical poem",
        "a love poem",
        "None of these"
    ],
    answer: "a love poem"
},

{
    question: "Natalia is—",
    option: [
        "a shrew",
        "an insane",
        "a peace-loving",
        "None of these"
    ],
    answer: "a peace-loving"
},

{
    question: "The hospital refused to believe that the pregnant w omen was in",
    option: [
        "first stage labour",
        "second stage labour",
        "third stage labour",
        "fourth stage labour"
    ],
    answer: "second stage labour"
},

{
    question: "Chaucer, Gower, Langland and Wyclif are important writers of the ……….. period.",
    option: [
        "Old English",
        "Middle English",
        "Modern English",
        "None of these"
    ],
    answer: "Middle English"
},

{
    question: "The ..... can make or break reputation.",
    option: [
        "teacher",
        "press",
        "man",
        "None of these"
    ],
    answer: "press"
},

{
    question: "The theme of Autumn is-",
    option: [
        "scarcity",
        "abundance",
        "fulfilment/maturity",
        "None of these"
    ],
    answer: "fulfilment/maturity"
},

{
    question: "“The Earth” is a",
    option: [
        "poem",
        "essay",
        "drama",
        "story"
    ],
    answer: "story"
},

{
    question: "Manohar Malgoankar has written the lesson –",
    option: [
        "I Have a Dream",
        "A Pinch of Snuff",
        "Bharat Is My. Home",
        "The Earth"
    ],
    answer: "A Pinch of Snuff"
},

{
    question: "H.E. Bates has written the signe Artist",
    option: [
        "A Pinch of Snuff",
        "The Artist",
        "The Earth",
        "None of these"
    ],
    answer: "The Earth"
},

{
    question: "Benjy left the school at",
    option: [
        "twenty",
        "twelve",
        "fourteen",
        "None of these"
    ],
    answer: "fourteen"
},

{
    question: "D.H. Lawrence was—",
    option: [
        "a fiction writer",
        "a poet",
        "a short story-writer",
        "All of these"
    ],
    answer: "All of these"
},

{
    question: "Pearl S. Buck won the Nobel Prize for Literature in",
    option: [
        "1968",
        "1948",
        "1936",
        "1938"
    ],
    answer: "1938"
},

{
    question: "When he left the school he had",
    option: [
        "forty or fifty hens",
        "thirty of forty hens",
        "sixty or seventy hens",
        "None of these"
    ],
    answer: "forty or fifty hens"
},

{
    question: "‘I celebrate myself and sing myself’ is written by –",
    option: [
        "Walt Whitman",
        "W.H. Auden",
        "J. Keats",
        "W.B. Yeats"
    ],
    answer: "Walt Whitman"
},

{
    question: "Whenever Seibi passed through the market, he searched the-",
    option: [
        "friends",
        "favourite flowers",
        "gourds",
        "None of these"
    ],
    answer: "gourds"
},

{
    question: "would not help the corn to grow unless he was allowed to feast on the blood of children.",
    option: [
        "Toloch",
        "Moloch",
        "Noloch",
        "None of these"
    ],
    answer: "Moloch"
},

{
    question: "When was Bertrand Russell awarded with Nobel Prize in literature ?",
    option: [
        "1940",
        "1970",
        "1950",
        "1960"
    ],
    answer: "1950"
},

{
    question: "Who’s death the speaker says-",
    option: [
        "Her son",
        "Her grandmother",
        "Her grandfather",
        "Her brother"
    ],
    answer: "Her grandmother"
},

{
    question: "The tendency of Indian civilization is to elevate —",
    option: [
        "immorality",
        "partiality",
        "moral being",
        "dishonesty"
    ],
    answer: "moral being"
},

{
    question: "‘The Soldier’ is a-",
    option: [
        "Children’s poem",
        "Romantic Poem",
        "War poem",
        "Nature Poem"
    ],
    answer: "War poem"
},

{
    question: "Dr. Zakir Hussain died in —",
    option: [
        "1959",
        "1969",
        "1979",
        "1989"
    ],
    answer: "1969"
},

{
    question: "Keki N. Daruwala is a well known writer of-",
    option: [
        "Poetry",
        "Novel",
        "Short stories",
        "Comics"
    ],
    answer: "Short stories"
},

{
    question: "Lomov thinks that his is a critical age because he is-",
    option: [
        "Forty five years old",
        "Thirty eight years old",
        "Thirty-five years old",
        "Forty-eight years old"
    ],
    answer: "Thirty-five years old"
},

{
    question: "‘A Child Is Born’ is an extract from the author’s book named-",
    option: [
        "The Female Eunuch",
        "The Change",
        "The Wind",
        "Sex and Destiny : The Politics of Human Fertility"
    ],
    answer: "Sex and Destiny : The Politics of Human Fertility"
},

{
    question: "Shiga Naova died in –",
    option: [
        "1961",
        "1971",
        "1981",
        "1941"
    ],
    answer: "1971"
},

{
    question: "American aglish differs from British English in the sphare of –",
    option: [
        "spelling",
        "vocabulary",
        "grammar",
        "All the three"
    ],
    answer: "All the three"
},

{
    question: "W.H. Auden was born in ?",
    option: [
        "1917",
        "1908",
        "1907",
        "1913"
    ],
    answer: "1907"
},

{
    question: "Who has composed the poem. The Soldier’?",
    option: [
        "Rupert Brooke",
        "T.S. Eliot",
        "D.H. Lawrence",
        "W.H. Auden"
    ],
    answer: "Rupert Brooke"
},

{
    question: "A young Indian friend of the writer was married to",
    option: [
        "a German",
        "a Kashmiri man",
        "young man",
        "old man"
    ],
    answer: "a Kashmiri man"
},

{
    question: "Martin Luther King | Jr. belonged to –",
    option: [
        "Britain",
        "France",
        "China",
        "The USA"
    ],
    answer: "The USA"
},

{
    question: "……is a humorous story.",
    option: [
        "The Earth",
        "The Artist",
        "A Pinch of Snuff",
        "above of these"
    ],
    answer: "A Pinch of Snuff"
},

{
    question: "The world ‘development’ is related to –",
    option: [
        "Caste",
        "Race",
        "Man",
        "Idea"
    ],
    answer: "Man"
},

{
    question: "‘Othello’, ‘Hamlet’, ‘Macbeth’ and ‘King Learl were written by-",
    option: [
        "Langland",
        "Marlowe",
        "Shakespeare",
        "Spenser"
    ],
    answer: "Shakespeare"
},

{
    question: "……… said that Bharat is my home and its people are my family.",
    option: [
        "Dr. Zakir Hussain",
        "Dr. Radha Krishnan",
        "Dr. Rajendra Prasad",
        "None of these"
    ],
    answer: "Dr. Zakir Hussain"
},

{
    question: "Lomov is years old.",
    option: [
        "25",
        "30",
        "35",
        "40"
    ],
    answer: "35"
},

{
    question: "According to ‘Song of Myself’ (‘I Celebrate Myself) the speaker is a great lover of—",
    option: [
        "arts",
        "science",
        "commerce",
        "Nature"
    ],
    answer: "Nature"
},

{
    question: "K.N. Daruwalla received Sahitya Akademi Award in—",
    option: [
        "1983",
        "1984",
        "1985",
        "1986"
    ],
    answer: "1984"
},

{
    question: "Benjy should be allowed to keen",
    option: [
        "Hens",
        "Dogs",
        "Cows",
        "Cats"
    ],
    answer: "Hens"
},

{
    question: "John Donne was the pioneer of—",
    option: [
        "Elizabethan poetry",
        "Metaphysical poetry",
        "Restoration poetry",
        "Neo-classical poetry"
    ],
    answer: "Metaphysical poetry"
},

{
    question: "For a drama exposition is –",
    option: [
        "evil",
        "futile",
        "essential",
        "None of these"
    ],
    answer: "essential"
},

{
    question: "A free and fair press is the true watchdog of-",
    option: [
        "state",
        "family",
        "court",
        "democracy"
    ],
    answer: "democracy"
},

{
    question: "Martin Luther King | Jr. had………… children.",
    option: [
        "one",
        "two",
        "three",
        "four"
    ],
    answer: "four"
},

{
    question: "‘An Epitaph’ deals with a beautiful—",
    option: [
        "girl",
        "lady",
        "baby",
        "None of these"
    ],
    answer: "lady"
},

{
    question: "David H. Lawrence was born in-",
    option: [
        "1868",
        "1858",
        "1885",
        "1895"
    ],
    answer: "1885"
},

{
    question: "Restrictions are normally placed upon the press in time of",
    option: [
        "flood",
        "peace",
        "war",
        "famine"
    ],
    answer: "war"
},

{
    question: "A ............... is mentioned in the poem ‘Snake’.",
    option: [
        "mango tree",
        "peepal tree",
        "carobtree",
        "None of these"
    ],
    answer: "carobtree"
},

{
    question: "............ is ever present in Indian Life.",
    option: [
        "luxury",
        "secular",
        "religion",
        "materialistic"
    ],
    answer: "religion"
},

{
    question: "\"There is a house now far away where once I received love\" ............... is from the poem—",
    option: [
        "Song of Myself",
        "Ode to Autumn",
        "My Grand mother’s House",
        "Snake"
    ],
    answer: "My Grand mother’s House"
},

{
    question: "Each stanza of 'Ode To Autumn' consists",
    option: [
        "11 lines",
        "12 lines",
        "13 lines",
        "14 lines"
    ],
    answer: "11 lines"
},

{
    question: "In his poetic words, Chaucer, did not use –",
    option: [
        "the old English",
        "the Middle English",
        "the modern English",
        "None of these"
    ],
    answer: "the old English"
},

{
    question: "I Have a Dream is a speech delivered by King on –",
    option: [
        "August 28 | 1963",
        "June 28 | 1965",
        "May 28 | 1953",
        "April 28 | 1973"
    ],
    answer: "August 28 | 1963"
},

{
    question: "Nobel Prize for Peace was given to Martin Luther King | Jr. in –",
    option: [
        "1963",
        "1964",
        "1965",
        "1966"
    ],
    answer: "1964"
},

{
    question: "Dr. Zakir Hussain was born in —",
    option: [
        "1865",
        "1877",
        "1867",
        "1897"
    ],
    answer: "1897"
},

{
    question: "… | advocates non-violent struggle.",
    option: [
        "Pearl S. Buck",
        "H.E. Bates",
        "Martin Luther King | Jr.",
        "Shiga Naoya"
    ],
    answer: "Martin Luther King | Jr."
},

{
    question: "‘Coolie’ was written by –",
    option: [
        "Kiran Desai",
        "Anita Desai",
        "Raja Rao",
        "Mulk Raj Anand"
    ],
    answer: "Mulk Raj Anand"
},

{
    question: "Bertrand Russell belonged to",
    option: [
        "Britain",
        "America",
        "Germany",
        "Italy"
    ],
    answer: "Britain"
},

{
    question: "Autumn is the close friend of the maturing-",
    option: [
        "Moon",
        "Flowers",
        "Sun",
        "Fruits"
    ],
    answer: "Sun"
},

{
    question: "A person who acquires land in any way possible is called—",
    option: [
        "impertinent",
        "land-grabber",
        "quibbler",
        "None of these"
    ],
    answer: "land-grabber"
},

{
    question: "By birth she was",
    option: [
        "American",
        "Chinese",
        "Japanese",
        "Indian"
    ],
    answer: "American"
},

{
    question: "‘Arms and the Man’ is written by –",
    option: [
        "Shakespeare",
        "G. B. Shaw",
        "Dickens",
        "T.S. Eliot An"
    ],
    answer: "G. B. Shaw"
},

{
    question: "‘Sweetest Love, I Do Not Goe’ is—",
    option: [
        "a sonnet",
        "an ode",
        "a lyric",
        "a ballad"
    ],
    answer: "a lyric"
},

{
    question: "John Donne was the pioneer of a new kind of lyrical and satirical verse called",
    option: [
        "Metaphorical",
        "New School verse",
        "Free verse",
        "Metaphysical"
    ],
    answer: "Metaphysical"
},

{
    question: "The poem 'Fire-Hymn' is about a-",
    option: [
        "Human society",
        "Violence",
        "Burning ghat",
        "War"
    ],
    answer: "Burning ghat"
},

{
    question: "The snake came to the poet’s water-trough on a day.",
    option: [
        "hot",
        "cold",
        "rainy",
        "None of these"
    ],
    answer: "hot"
},

{
    question: "‘The God of Small Things’ is written by –",
    option: [
        "Anita Desai",
        "Kamala Das",
        "Joru Dutt",
        "Arundhati Roy"
    ],
    answer: "Arundhati Roy"
},

{
    question: "Kamala Das, poet and short story writer, has earned a respectable place in both English and-",
    option: [
        "Hindi",
        "Malyalam",
        "Telugu",
        "Urdu"
    ],
    answer: "Malyalam"
},

{
    question: "................ swears to save fire from the sin of forgetfullness.",
    option: [
        "John Donne",
        "Keki N. Daruwalla",
        "John Keats",
        "T.S. Eliot"
    ],
    answer: "Keki N. Daruwalla"
},

{
    question: "The word, ‘schools’ stands for. in ‘Song of Myself’ (‘I Celebrate Myself’).",
    option: [
        "academy",
        "systems of thought",
        "teaching institutes",
        "None of these"
    ],
    answer: "systems of thought"
},

{
    question: "Benjy moved into the house with ............ as his wife at the",
    option: [
        "Florence",
        "Florence",
        "Victoria",
        "None of these"
    ],
    answer: "Florence"
},

{
    question: "'Ode to Autumn' is a poem of-",
    option: [
        "Love",
        "War",
        "Nature",
        "Struggle"
    ],
    answer: "Nature"
},

{
    question: "T.S Eliot was born in-",
    option: [
        "1888",
        "1855",
        "1877",
        "1895"
    ],
    answer: "1888"
},

{
    question: "Who is the poet of ‘Sweetest Love, I Do Not Goe’-",
    option: [
        "Joan of Arc",
        "John Donne",
        "John Keats",
        "T.S.Eliot"
    ],
    answer: "John Donne"
},

{
    question: "“The Rope of the Lock’ was written by –",
    option: [
        "Shelly",
        "Alexander Pope",
        "Keats",
        "None of these"
    ],
    answer: "Alexander Pope"
},

{
    question: "John Donne feels that a ............... is very hopeless.",
    option: [
        "animal",
        "goat",
        "bird",
        "man"
    ],
    answer: "man"
},

{
    question: "The poet expresses his sad feeling for a-",
    option: [
        "Boy",
        "Girl",
        "Baby",
        "Lady"
    ],
    answer: "Lady"
},

{
    question: "Germaine Greer is a famous ............... writer.",
    option: [
        "scientific",
        "feminist",
        "educational",
        "None of these"
    ],
    answer: "feminist"
},

{
    question: "The poet enjoys himself and sings for-",
    option: [
        "Public",
        "Beloved",
        "Children",
        "Self"
    ],
    answer: "Self"
},

{
    question: "Long infancy was a biological advantage to-",
    option: [
        "Animals",
        "Birds",
        "Mankind",
        "Earth"
    ],
    answer: "Mankind"
},

{
    question: "The phrase ‘a king of exile’ in the poem ‘Snake’ stands for—",
    option: [
        "the rat",
        "the elephant",
        "the snake",
        "the lion"
    ],
    answer: "the snake"
},

{
    question: "Censorship is imposed during",
    option: [
        "election",
        "peaceful time",
        "emergency",
        "None of these"
    ],
    answer: "emergency"
},

{
    question: "The ............ of death are the whispering neighbour.",
    option: [
        "messenger",
        "friends",
        "enemies",
        "God"
    ],
    answer: "messenger"
},

{
    question: "The name of Lomov's dog is—",
    option: [
        "Leап",
        "Guess",
        "Tomy",
        "None of these"
    ],
    answer: "Guess"
},

{
    question: "David H. Lawrence died in-",
    option: [
        "1925",
        "1915",
        "1945",
        "1930"
    ],
    answer: "1930"
},

{
    question: "The ................ child was consigned to the fire under compulsion.",
    option: [
        "first born",
        "second born",
        "third born",
        "fourth born"
    ],
    answer: "first born"
},

{
    question: "...... has praised Indian people and their life.",
    option: [
        "Shiga Naoya",
        "H.E. Bates",
        "Pearl S. Buck",
        "Bertrand Russell"
    ],
    answer: "Pearl S. Buck"
},

{
    question: "Dorothy died in",
    option: [
        "1967",
        "1978",
        "1956",
        "1957"
    ],
    answer: "1957"
},

{
    question: "‘Soldier’ is written by-",
    option: [
        "John Donne",
        "Walt Whitman",
        "Rupert Brooke",
        "D.H. Lawrence"
    ],
    answer: "Rupert Brooke"
},

{
    question: "The word ‘English’ is used in the poem for how many times ?",
    option: [
        "One",
        "Two",
        "Three",
        "Four"
    ],
    answer: "Two"
},

{
    question: "The editorial policy of a popular daily is controlled by ..... chief factors.",
    option: [
        "one",
        "two",
        "three",
        "four"
    ],
    answer: "two"
},

{
    question: "Lomov has come to ask for daughter. ........... hand in marriage.",
    option: [
        "Matalia’s",
        "Natalia’s",
        "Ratalia’s",
        "Satalia’s"
    ],
    answer: "Natalia’s"
},

{
    question: "'Ode To Autumn' is-",
    option: [
        "an epic",
        "an elegy",
        "an ode",
        "a ballad"
    ],
    answer: "an ode"
},

{
    question: "In the UK, the USA, Ireland, Canada, Australia, New Zealand and South Africa, English is spoken as a –",
    option: [
        "foreign language",
        "second language",
        "mother – tongue",
        "None of these"
    ],
    answer: "mother – tongue"
},

{
    question: "Happiness is largely a —",
    option: [
        "mental condition",
        "physical condition",
        "disease",
        "imagination"
    ],
    answer: "mental condition"
},

{
    question: "The writer was willing to see in India",
    option: [
        "The Taj Mahal",
        "Fatehpur Sikri",
        "Glories of empire in New Delhi",
        "The young intellectuals in cities & peasants in the villages"
    ],
    answer: "The young intellectuals in cities & peasants in the villages"
},

{
    question: "To know Lomov’s desire, Mr. Choobookov became—",
    option: [
        "happy",
        "angry",
        "sad",
        "None of these"
    ],
    answer: "happy"
},

{
    question: "Rupert Brooke has written the poem—",
    option: [
        "Snake",
        "An Epitaph",
        "The Soldier",
        "Song of Myself"
    ],
    answer: "The Soldier"
},

{
    question: "‘A Pinch of Snuffy is a …",
    option: [
        "novel",
        "poem",
        "short story",
        "essay"
    ],
    answer: "short story"
},

{
    question: "‘The Soldier’ deals with—",
    option: [
        "France",
        "Russia",
        "Scotland",
        "England"
    ],
    answer: "England"
},

{
    question: "‘Song of Myself is—",
    option: [
        "a lyric",
        "an epic",
        "a sonnet",
        "None of these"
    ],
    answer: "a lyric"
},

{
    question: "Queen Elizabeth II honoured Mare with the ‘Order of Merit’ in-",
    option: [
        "1943",
        "1933",
        "1952",
        "1953"
    ],
    answer: "1953"
},

{
    question: "W.H. Auden has written the poem—",
    option: [
        "John Keats",
        "Walt Whitman",
        "W.H. Auden",
        "T.S. Eliot"
    ],
    answer: "W.H. Auden"
},

{
    question: "…………. is the prime instrument of nation building.",
    option: [
        "Agriculture",
        "Education",
        "Trade",
        "None of these"
    ],
    answer: "Education"
},

{
    question: "The land between Bombay and ........... famished.",
    option: [
        "Kolkata",
        "Madras",
        "Delhi",
        "Bangaluru"
    ],
    answer: "Madras"
},

{
    question: "A ............... woman has to observe various taboos, rituals and customs.",
    option: [
        "Ugly",
        "Wicked",
        "Pregnant",
        "None of these"
    ],
    answer: "Pregnant"
},

{
    question: "H.E. Bates died in.",
    option: [
        "1974",
        "1984",
        "1964",
        "1954"
    ],
    answer: "1974"
},

{
    question: "‘My Experiments with Truth’ was written by-..",
    option: [
        "Nehruji",
        "Mahatma Gandhi",
        "Maulana Abdul Kalam Azad",
        "Sardar Patel"
    ],
    answer: "Mahatma Gandhi"
},

{
    question: "Lomov thinks that his is a critical age because he is",
    option: [
        "forty-five years old",
        "thiry-eight years old",
        "thirty-five years old",
        "forty-eight years old"
    ],
    answer: "thirty-five years old"
},

{
    question: "Dorothy L. Sayers has written the lesson –",
    option: [
        "I Have a Dream",
        "How free is the Press",
        "The Earth",
        "A child is Born"
    ],
    answer: "How free is the Press"
},

{
    question: "........... has been described as a metaphysical poet.",
    option: [
        "John Keats",
        "T.S. Eliot",
        "John Donne",
        "Walt Whitman"
    ],
    answer: "John Donne"
},

{
    question: "'Ode to Autumn' is a-",
    option: [
        "Drama",
        "Poetry",
        "Story",
        "Essay"
    ],
    answer: "Poetry"
},

{
    question: "English developed from the speech of the —",
    option: [
        "Anglo-Indian",
        "Anglo-Saxon",
        "Anglo-American",
        "None of these"
    ],
    answer: "Anglo-Saxon"
},

{
    question: "John Donne died in",
    option: [
        "1621",
        "1631",
        "1602",
        "1615"
    ],
    answer: "1631"
},

{
    question: "Walt Whitman has written the poem—",
    option: [
        "An Epitaph",
        "The Soldier",
        "Song of Myself",
        "Fire-Hymn"
    ],
    answer: "Song of Myself"
},

{
    question: "Walt Whitman died in-",
    option: [
        "1872",
        "1862",
        "1892",
        "1870"
    ],
    answer: "1892"
},

{
    question: "Who is the author of the prose piece ‘A Child is Born’?",
    option: [
        "German Geer",
        "Germaine Greer",
        "Germaine Greeri",
        "H.E. Bates"
    ],
    answer: "Germaine Greer"
},

{
    question: "In China, Japan, UAE, Saudi Arabia, Egypt, Iraq, Eritrea, France, Germany, Switzerland, Mexico, Brazil etc.English is spoken as a –",
    option: [
        "mother-tongue",
        "second language",
        "foreign language",
        "None of these"
    ],
    answer: "foreign language"
},

{
    question: "The hospital was very uncooperative about-",
    option: [
        "Providing meals",
        "Exploit childbirth",
        "Breast-feeding",
        "Giving medicines"
    ],
    answer: "Breast-feeding"
},

{
    question: "The invention of ................. was more important than domestication of animals.",
    option: [
        "car",
        "fire",
        "agriculture",
        "None of these"
    ],
    answer: "agriculture"
},

{
    question: "The snake looked at the poet",
    option: [
        "happily",
        "confusingly",
        "sadly",
        "vaguely"
    ],
    answer: "vaguely"
},

{
    question: "Who has been personified in 'Ode To Autumn'?",
    option: [
        "Spring",
        "Autumn",
        "Winter",
        "Summer"
    ],
    answer: "Autumn"
},

{
    question: "‘Bharat is My Home’ is written by -.",
    option: [
        "Mahatma Gandhi",
        "Dr. Zakir Hussain",
        "Pearl S. Buck",
        "H.E. Bates"
    ],
    answer: "Dr. Zakir Hussain"
},

{
    question: "Pearl S. Buck has written the lesson",
    option: [
        "A Child is Born",
        "The Artist",
        "India Through a Traveller’s Eyes",
        "I Have a Dream"
    ],
    answer: "India Through a Traveller’s Eyes"
},

{
    question: "Nanukaka wrote a cheque for a…………rupees.",
    option: [
        "thousand",
        "hundred",
        "five hundred",
        "ten thousand"
    ],
    answer: "thousand"
},

{
    question: "Ideas gave the way for",
    option: [
        "molding",
        "development",
        "emotions",
        "duplicity"
    ],
    answer: "development"
},

{
    question: "Walter De La Mare died in-",
    option: [
        "1916",
        "1956",
        "1966",
        "1976"
    ],
    answer: "1956"
},

{
    question: "Gandhi Ji went to Champaran in ….",
    option: [
        "1915",
        "1916",
        "1917",
        "1918"
    ],
    answer: "1917"
},

{
    question: "The poem describes the scene of a-",
    option: [
        "Fire place",
        "Burning ghat",
        "Riot",
        "House under fire"
    ],
    answer: "Burning ghat"
},

{
    question: "............ let Pearl S. Buck know about Buddhism and life history of Lord Buddha.",
    option: [
        "doctor",
        "mother",
        "father",
        "teacher"
    ],
    answer: "father"
},

{
    question: "In Sicily, black snakes are considered-",
    option: [
        "Venomous",
        "Innocent",
        "Playful",
        "food"
    ],
    answer: "Venomous"
},

{
    question: "David H. Lawrence was born in-",
    option: [
        "1888",
        "1858",
        "1885",
        "1855"
    ],
    answer: "1885"
},

{
    question: "Seibei’s father worked at ………. shop.",
    option: [
        "carpenter’s",
        "barber’s",
        "goldsmith’s",
        "None of these"
    ],
    answer: "carpenter’s"
},

{
    question: "In ancient days the common people enjoyed —",
    option: [
        "courts rule",
        "slavery",
        "true home rule",
        "foreign rule"
    ],
    answer: "true home rule"
},

{
    question: "............... woman visit her mother’s house during pregnancy.",
    option: [
        "An African",
        "An Indian",
        "A Canadian",
        "None of these"
    ],
    answer: "An Indian"
},

{
    question: "When did Anton Chekhov die ?",
    option: [
        "1889",
        "1901",
        "1902",
        "1904"
    ],
    answer: "1904"
},

{
    question: "The basket contained –",
    option: [
        "fruits",
        "a cat",
        "sweets",
        "vegetables"
    ],
    answer: "a cat"
},

{
    question: "The author believes that socio-cultural practices are designed to suit the interest of",
    option: [
        "males",
        "females",
        "farmers",
        "writers"
    ],
    answer: "males"
},

{
    question: "There is nothing like honesty was said by —",
    option: [
        "Nanukaka",
        "Sohanlal Ratiram",
        "Ratiram",
        "Hajrat Barkat Ali"
    ],
    answer: "Nanukaka"
},

{
    question: "........... is the daughter of Choobookov.",
    option: [
        "Natalia",
        "Satalia",
        "Matalia",
        "Ratalia"
    ],
    answer: "Natalia"
},

{
    question: "Lomov said that the .......... meadows were his.",
    option: [
        "cow",
        "ox",
        "goat",
        "lamb"
    ],
    answer: "ox"
},

{
    question: "The people of ............ must be reckoned as belonging to the caucasian race.",
    option: [
        "America",
        "China",
        "India",
        "Canada"
    ],
    answer: "India"
},

{
    question: "The speaker where once was loved, the house belonged to her-",
    option: [
        "Father",
        "Husband",
        "Friend",
        "Grandmother"
    ],
    answer: "Grandmother"
},

{
    question: "Mungojerrie and Griddlebone are also—",
    option: [
        "dogs",
        "Monkeys",
        "birds",
        "Cats"
    ],
    answer: "Cats"
},

{
    question: "The author has a complex about-",
    option: [
        "relative",
        "guest",
        "officials",
        "ministers"
    ],
    answer: "ministers"
},

{
    question: "The word ‘pictorial’ was related to early man with-",
    option: [
        "Reading",
        "Roaming",
        "Writing",
        "Hunting"
    ],
    answer: "Writing"
},

{
    question: "My Grandmother’s House is written by-",
    option: [
        "D.H. Lawrence",
        "Kamala Das",
        "Keki N. Daruwala",
        "Walt Whitman"
    ],
    answer: "Kamala Das"
},

{
    question: "Sacrifice is the sole aim of our —",
    option: [
        "Philosopher",
        "farmers",
        "righis",
        "scientists"
    ],
    answer: "righis"
},

{
    question: "For all the ills of India, the writer blames",
    option: [
        "Indians",
        "the English rule",
        "both",
        "None of these"
    ],
    answer: "the English rule"
},

{
    question: "She was reared in",
    option: [
        "Germany",
        "England",
        "China",
        "India"
    ],
    answer: "China"
},

{
    question: "Whitman was ........... poet.",
    option: [
        "an Indian",
        "an American",
        "a British",
        "None of these"
    ],
    answer: "an American"
},

{
    question: "‘Hydibras’ was written by –",
    option: [
        "Dryden",
        "Vaughan",
        "Butler",
        "None of these"
    ],
    answer: "Butler"
},

{
    question: "The naming ceremony is—",
    option: [
        "bad",
        "lovely",
        "strange",
        "None of these"
    ],
    answer: "lovely"
},

{
    question: "Walt Whitman died in",
    option: [
        "1872",
        "1882",
        "1892",
        "1890"
    ],
    answer: "1892"
},

{
    question: "Martin Luther King | Jr. loves the white-",
    option: [
        "African",
        "Asian",
        "European",
        "American"
    ],
    answer: "American"
},

{
    question: "Keats was.......... poet.",
    option: [
        "a romantic",
        "a victorian",
        "modern",
        "None of these"
    ],
    answer: "a romantic"
},

{
    question: "Lomov claims to have the memory of—",
    option: [
        "a tiger",
        "a lion",
        "an elephant",
        "a fox"
    ],
    answer: "an elephant"
},

{
    question: "All the time Benjy wore the ........ smile.",
    option: [
        "cunning",
        "simple",
        "sweet",
        "familiar"
    ],
    answer: "simple"
},

{
    question: "Pearl S. Buck was born in",
    option: [
        "1882",
        "1862",
        "1892",
        "1872"
    ],
    answer: "1892"
},

{
    question: "He wrote different articles for —",
    option: [
        "‘The Hindu’",
        "‘The Times of India’",
        "‘The Blitze’",
        "‘Young India’"
    ],
    answer: "‘Young India’"
},

{
    question: "Kamala Das has written the poem —",
    option: [
        "Snake",
        "Fire-Hymn",
        "My Grandmother’s House",
        "The Soldier"
    ],
    answer: "My Grandmother’s House"
},

{
    question: "The invention of …………… proved a milestone in our development.",
    option: [
        "fire",
        "agriculture",
        "carpentry",
        "None of these"
    ],
    answer: "fire"
},

{
    question: "Decent journalists and responsible editors are not pleased with present affairs—",
    option: [
        "true",
        "not true",
        "cannot be said",
        "None of these"
    ],
    answer: "true"
},

{
    question: "Civilization is the state of development of a …..",
    option: [
        "people",
        "animal",
        "bird",
        "non-living things"
    ],
    answer: "people"
},

{
    question: "The family doctor of Pearl S. Buck belonged to-",
    option: [
        "China",
        "America",
        "India",
        "Germany"
    ],
    answer: "India"
},

{
    question: "What do free people take for granted ?",
    option: [
        "free home",
        "free schools",
        "free press",
        "free office"
    ],
    answer: "free press"
},

{
    question: "Walt Whitman is years old.",
    option: [
        "34",
        "35",
        "36",
        "37"
    ],
    answer: "36"
},

{
    question: "‘Whispering neighbours, left and right’ is a line from the poem—",
    option: [
        "An Epitaph",
        "Song of Myself",
        "Now the Leaves Are falling Fast",
        "Snake"
    ],
    answer: "Now the Leaves Are falling Fast"
},

{
    question: "An Epitaph is written by-",
    option: [
        "Walt Whitman",
        "Walter de la Mare",
        "T. S. Eliot",
        "D. H. Lawrence"
    ],
    answer: "Walter de la Mare"
},

{
    question: "Doune present himself in 'Sweetest Love, I Do Not Goe' in—",
    option: [
        "the first person singular number",
        "the first person plural number",
        "the third person singular number",
        "None of these"
    ],
    answer: "the first person singular number"
},

{
    question: "My Grandmother’s House is written by –",
    option: [
        "D.H. Lawrence",
        "Kamala Das",
        "Keki N. Daruwala",
        "Walt Whitman"
    ],
    answer: "Kamala Das"
},

{
    question: "'Ode To Autumn' is a-",
    option: [
        "Drama",
        "Story",
        "Poetry",
        "Essay"
    ],
    answer: "Poetry"
},

{
    question: "'How free is the Press' is written by –",
    option: [
        "Mahatma Gandhi",
        "H.E. Bates",
        "Dorothy L. Sayers",
        "Dr. Zakir Hussain"
    ],
    answer: "Dorothy L. Sayers"
},

{
    question: "Mahatma Gandhi was more a —",
    option: [
        "politician",
        "economist",
        "social reformer",
        "spititual leader"
    ],
    answer: "spititual leader"
},

{
    question: "About …………… Christianity began to spread in England.",
    option: [
        "AD 400",
        "AD 500",
        "AD 600",
        "AD 700"
    ],
    answer: "AD 600"
},

{
    question: "Seibei got gourds for a few –",
    option: [
        "rupee",
        "taka",
        "sen",
        "None of these"
    ],
    answer: "sen"
},

{
    question: "‘And what I assume you shall assume’ is taken from the poem—",
    option: [
        "Song of Myself",
        "An Epitaph",
        "The Soldier",
        "Fire-Hymn"
    ],
    answer: "Song of Myself"
},

{
    question: "No widely circulated newspaper dares support a public policy due to vested interest of—",
    option: [
        "the government",
        "editor",
        "reporter",
        "advertisers"
    ],
    answer: "advertisers"
},

{
    question: "The superstition associated with acquiring new clothes and instruments for baby before the birth is considered as",
    option: [
        "good luck",
        "bad luck",
        "no luck",
        "all luck"
    ],
    answer: "bad luck"
},

{
    question: "When was Bertrand Russell awarded with Nobel Prize in literature ?",
    option: [
        "1940",
        "1946",
        "1950",
        "1960"
    ],
    answer: "1950"
},

{
    question: "Married women do not become members of their new family until they have-",
    option: [
        "Started cooking",
        "Started to earn",
        "Mix with others",
        "Born a child"
    ],
    answer: "Born a child"
},

{
    question: "Who is the speaker in this poem?",
    option: [
        "a boy",
        "a girl",
        "the poet himself",
        "grass"
    ],
    answer: "the poet himself"
},

{
    question: "The news in the newspapers is generally—",
    option: [
        "to the point",
        "somewhat changed",
        "completely changed",
        "None of these"
    ],
    answer: "somewhat changed"
},

{
    question: "The essay 'How Free Is The Press' is written by-",
    option: [
        "Martin Luther king. Jr.",
        "Pearl S. Buck",
        "Aurobindo Ghosh",
        "Dorothy L. Sayers"
    ],
    answer: "Dorothy L. Sayers"
},

{
    question: "'Fire-Hymn' is written by-",
    option: [
        "Walt Whitman",
        "Keki N. Daruwala",
        "W.H. Auden",
        "Kamala Das"
    ],
    answer: "Keki N. Daruwala"
},

{
    question: "‘A Marriage Proposal’ is act play.",
    option: [
        "one",
        "two",
        "three",
        "four"
    ],
    answer: "one"
},

{
    question: "Benjy’s parents gave him a passbook when he was ...... years old.",
    option: [
        "20",
        "21",
        "22",
        "23"
    ],
    answer: "21"
},

{
    question: "We are able to get variety of enjoyment due to –",
    option: [
        "our intelligence",
        "our riches",
        "our physical strenght",
        "None of these"
    ],
    answer: "our intelligence"
},

{
    question: "What policy widely circulated newspapers dare not support, however much in national interest, that might conflict, vested interests of its advertisers ?",
    option: [
        "New policy",
        "State policy",
        "Public policy",
        "Personal policy"
    ],
    answer: "Public policy"
},

{
    question: "The speaker in the poem, 'Fire-Hymn' swears—",
    option: [
        "once",
        "twice",
        "thrice",
        "None of these"
    ],
    answer: "twice"
},

{
    question: "The opening section of ‘Song of Myself’ is entitled has—",
    option: [
        "‘Grass’",
        "‘I Celebrated Myself’",
        "‘Animal’",
        "None of these"
    ],
    answer: "‘I Celebrated Myself’"
},

{
    question: "That a woman could lose her own name and become known as the mother of her first-born, is regarded in west as-",
    option: [
        "Outreach",
        "Outrageous",
        "Outpart",
        "Outreach"
    ],
    answer: "Outrageous"
},

{
    question: "His hens were producing an average of",
    option: [
        "three hundred eggs",
        "two hundred eggs",
        "one hundred eggs",
        "None of these"
    ],
    answer: "two hundred eggs"
},

{
    question: "…………… was selling dried permimmons and oranges.",
    option: [
        "An old man",
        "An old woman",
        "A girl",
        "A boy"
    ],
    answer: "An old woman"
},

{
    question: "The plan was that India would rebel against England just after",
    option: [
        "First World War",
        "Second World War",
        "Gandhiji’s revolt",
        "Subhash’s attack"
    ],
    answer: "First World War"
},

{
    question: "When Dorothy Sayers became one of the first women to graduate from Oxford University ?",
    option: [
        "1950",
        "1915",
        "1918",
        "1919"
    ],
    answer: "1915"
},

{
    question: "English used since AD 1500 till now is called …………. English.",
    option: [
        "Old",
        "Middle",
        "Modern",
        "None of these"
    ],
    answer: "Modern"
},

{
    question: "How old is Natalia ?",
    option: [
        "twenty years",
        "twenty nine",
        "twenty-eight",
        "twenty five"
    ],
    answer: "twenty five"
},

{
    question: "‘Pride and Prejudice’ was written by –",
    option: [
        "Goldsmith",
        "Fielding",
        "Jane Austene",
        "None of these"
    ],
    answer: "Jane Austene"
},

{
    question: "'Macavity : The Mystery Cat' is written by-",
    option: [
        "D.H. Lawrence",
        "Walter De La Mare",
        "T.S. Eliot",
        "Kamala Das"
    ],
    answer: "T.S. Eliot"
},

{
    question: "In the last step was never taken.",
    option: [
        "India",
        "Germany",
        "China",
        "France"
    ],
    answer: "China"
},

{
    question: "W. H. Auden was born in ?",
    option: [
        "1917",
        "1900",
        "1907",
        "1910"
    ],
    answer: "1907"
},

{
    question: "The ........... Press is, under ordinary conditions, singularly free.",
    option: [
        "European",
        "British",
        "Indian",
        "Chinese"
    ],
    answer: "British"
},

{
    question: "The teacher inade complain against Seibi to his-",
    option: [
        "father",
        "mother",
        "uncle",
        "brother"
    ],
    answer: "mother"
},

{
    question: "Who let Pearl S. Buck know about Buddhism and life history of Lord Buddha ?",
    option: [
        "Doctor",
        "Mother",
        "Father",
        "Teacher"
    ],
    answer: "Father"
},

{
    question: "‘And when I crumble, who will remember’ is written by—",
    option: [
        "John Keats",
        "John Donne",
        "Rupert Brooke",
        "Walter de la Mare"
    ],
    answer: "Walter de la Mare"
},

{
    question: "The pape of Johnsons’ son was",
    option: [
        "Jack",
        "Tom",
        "Bengy",
        "Tony"
    ],
    answer: "Bengy"
},

{
    question: "New clothes are brought for—",
    option: [
        "the baby",
        "the mother",
        "both",
        "None of these"
    ],
    answer: "both"
},

{
    question: "Walt Whitman was born in",
    option: [
        "1820",
        "1819",
        "1816",
        "1822"
    ],
    answer: "1819"
},

{
    question: "Kamala Das was born on-",
    option: [
        "April 31, 1933",
        "April 31, 1934",
        "April 31, 1943",
        "April 31, 1984"
    ],
    answer: "April 31, 1934"
},

{
    question: "Kamala Das is talking about her ............ who is dead now.",
    option: [
        "father",
        "mother",
        "grand father",
        "grand mother"
    ],
    answer: "grand mother"
},

{
    question: "Autumn starts after the departure of-",
    option: [
        "Rains",
        "Summer",
        "Winter",
        "Cold"
    ],
    answer: "Summer"
},

{
    question: "Kamala Das was born in .................",
    option: [
        "1933",
        "1934",
        "1935",
        "1936"
    ],
    answer: "1934"
},

{
    question: "The ownership of .......... meadows is disputed.",
    option: [
        "cow",
        "lamb",
        "sheep",
        "ox"
    ],
    answer: "ox"
},

{
    question: "The doctor suggested to let him keep-",
    option: [
        "cows",
        "hens",
        "horses",
        "None of these"
    ],
    answer: "hens"
},

{
    question: "Nanukaka’ was installed in-",
    option: [
        "the guest room",
        "the drawing room",
        "author’s bedroom",
        "the verandah"
    ],
    answer: "author’s bedroom"
},

{
    question: "In Bangladesh children are looked after by the—",
    option: [
        "father only",
        "mother only",
        "whole family",
        "None of these"
    ],
    answer: "whole family"
},

{
    question: "That a woman could lose her own name and become known as the mother of her first-born, is regarded in West as",
    option: [
        "outrageous",
        "outreach",
        "outparty",
        "treacherous"
    ],
    answer: "outrageous"
},

{
    question: "The nearest 'Tower of Silence' according to the poem, 'Fire-Hymn' was ............ away.",
    option: [
        "a thousand miles",
        "two thousand miles",
        "three thousand miles",
        "None of these"
    ],
    answer: "a thousand miles"
},

{
    question: "The speaker belongs to ........ religion-",
    option: [
        "Hindu",
        "Muslim",
        "Sikh",
        "Zoroastrian"
    ],
    answer: "Zoroastrian"
},

{
    question: "In the following essay 'How Free Is The Press', the author makes a strong case against-",
    option: [
        "Chained press",
        "Slavery",
        "Misuse of the freedom of the press",
        "Rude editors"
    ],
    answer: "Misuse of the freedom of the press"
},

{
    question: "“I’ll prove to you in court that they’re mine”, said—",
    option: [
        "Natalia",
        "Choobookov",
        "Lomov",
        "None of these"
    ],
    answer: "Lomov"
},

{
    question: "'And gathering swallows twitter in the skies' is taken from [2018 A, I.A.]",
    option: [
        "snake",
        "The soldier",
        "ode to Autumn",
        "An Epitaph"
    ],
    answer: "ode to Autumn"
},

{
    question: "The Mongolian from Europe invaded",
    option: [
        "Bengal",
        "Delhi",
        "Punjab",
        "Kashmir"
    ],
    answer: "Kashmir"
},

{
    question: "The word 'colour' reminds the writer of-",
    option: [
        "China’s life",
        "Indian life",
        "Garden",
        "Valleys"
    ],
    answer: "Indian life"
},

{
    question: "The house went into silence due to the death of the ...............",
    option: [
        "woman",
        "man",
        "girl",
        "boy"
    ],
    answer: "woman"
},

{
    question: "Lomov is a man of ........... temperament.",
    option: [
        "serious",
        "nervous",
        "lover",
        "wicker"
    ],
    answer: "nervous"
},

{
    question: "For Auden poetry was—",
    option: [
        "a light game",
        "an interesting game",
        "a serious game",
        "None of these"
    ],
    answer: "a serious game"
},

{
    question: "Religion is ever present in ....... life.",
    option: [
        "American",
        "Chinese",
        "Indian",
        "Russian"
    ],
    answer: "Indian"
},

{
    question: "To observe morality is to attain mastery over —",
    option: [
        "economic growth",
        "political ability",
        "minds and passions",
        "art"
    ],
    answer: "minds and passions"
},

{
    question: "T.S. Eliot got Nobel Prize for literature in-",
    option: [
        "1938",
        "1948",
        "1936",
        "1946"
    ],
    answer: "1948"
},

{
    question: "For the freedom of the press, we usually mean freedom from direction or-",
    option: [
        "Scandal",
        "Pressure",
        "Censorship",
        "Distraction"
    ],
    answer: "Censorship"
},

{
    question: "'My Grandmother’s House' is —",
    option: [
        "a sonnet",
        "a ode",
        "a ballad",
        "a lyric"
    ],
    answer: "a lyric"
},

{
    question: "‘Dr. Faustus’ was written by –",
    option: [
        "Shakespeare",
        "Keats",
        "Christopher Marlowe",
        "None of these"
    ],
    answer: "Christopher Marlowe"
},

{
    question: "An Epitaph is written by-",
    option: [
        "Walt Whitman",
        "Walter De La Mare",
        "T.S. Eliot",
        "D.H. Lawrence"
    ],
    answer: "Walter De La Mare"
},

{
    question: "She died in",
    option: [
        "1967",
        "1957",
        "1977",
        "1987"
    ],
    answer: "1957"
},

{
    question: "What thought us to be more friendly towards one another ?",
    option: [
        "attitude",
        "civilization",
        "peace",
        "progress"
    ],
    answer: "civilization"
},

{
    question: "‘Sohrab and Rustam’ has been written by –",
    option: [
        "W.B. Yeats",
        "Robert Bridge",
        "J.M. Synge",
        "Matthew Arnold"
    ],
    answer: "Matthew Arnold"
},

{
    question: "................ waterfall could bless the travellers passing through that way.",
    option: [
        "Yellow",
        "White",
        "Red",
        "Grey"
    ],
    answer: "White"
},

{
    question: "Germaine Greer was born and educated in-",
    option: [
        "America",
        "Britain",
        "Australia",
        "Germany"
    ],
    answer: "Australia"
},

{
    question: "‘Ideas That Have Helped Mankind’ has been written by—",
    option: [
        "G Greer",
        "D.L. Sayers",
        "H.E. Bates",
        "Bertrand Russell"
    ],
    answer: "Bertrand Russell"
},

{
    question: "All that Johnsons’ couple had was the",
    option: [
        "health",
        "farm",
        "earth",
        "ash"
    ],
    answer: "earth"
},

{
    question: "The colour of the snake is-",
    option: [
        "Yellow",
        "Green",
        "Black",
        "Blue"
    ],
    answer: "Black"
},

{
    question: "How did Choobookov react when he comes to know that Lamov wants to marry Natalia ?",
    option: [
        "Happy",
        "Sad",
        "Angry",
        "Thoughtful"
    ],
    answer: "Happy"
},

{
    question: "The history of English language is just about ……….. years old.",
    option: [
        "fifteen hundred",
        "sixteen hundred",
        "seventeen hundred",
        "None of these"
    ],
    answer: "fifteen hundred"
},

{
    question: "T.S. Eliot has written the poem—",
    option: [
        "Fire-Hymn",
        "Snake",
        "Macavity : The Mystery Cat",
        "The Soldier"
    ],
    answer: "Macavity : The Mystery Cat"
},

{
    question: "Natalia is the daughter of-",
    option: [
        "Choobookov",
        "Ivan",
        "Chekhov",
        "Vassilievich"
    ],
    answer: "Chekhov"
},

{
    question: "In traditional births infant and mother mortality is—",
    option: [
        "lesser",
        "greater",
        "negligible",
        "None of these"
    ],
    answer: "greater"
},

{
    question: "T.S. Eliot was born in-",
    option: [
        "1888",
        "1885",
        "1876",
        "1891"
    ],
    answer: "1888"
},

{
    question: "‘Train to Pakistan’ is written by-",
    option: [
        "Manohar Malagaonkar",
        "Khushwant Singh",
        "Anita Desai",
        "R.K. Narayan A"
    ],
    answer: "Khushwant Singh"
},

{
    question: "Dr. Zakir Hussain entered the office with –",
    option: [
        "partiality",
        "total dedication",
        "enmity",
        "treachery"
    ],
    answer: "total dedication"
},

{
    question: "He used to bore a neat hole in the –",
    option: [
        "side of the gourd",
        "top of the gourd",
        "both the side",
        "None of these"
    ],
    answer: "top of the gourd"
},

{
    question: "Pearl S. Buck is an ........",
    option: [
        "American",
        "Indian",
        "Iranian",
        "African"
    ],
    answer: "American"
},

{
    question: "The poet had gone to the water trough to drink",
    option: [
        "tea",
        "coffee",
        "water",
        "milk"
    ],
    answer: "water"
},

{
    question: "The poet intends to go on a longer journey than-",
    option: [
        "Earth",
        "Moon",
        "Sun",
        "Athelete"
    ],
    answer: "Sun"
},

{
    question: "The teacher, who caught Seibi doing with gourd in the class-",
    option: [
        "appreciated him",
        "depreciated him",
        "awarded him",
        "punished him"
    ],
    answer: "punished him"
},

{
    question: "On the platform Nanukaka handed over the author –",
    option: [
        "a bag",
        "a box",
        "a briefcase",
        "a basket"
    ],
    answer: "a basket"
},

{
    question: "When was Pearl S. Buck born ?",
    option: [
        "1872",
        "1882",
        "1892",
        "1862"
    ],
    answer: "1892"
},

{
    question: "Has civilization taught us to be more … towards one another?",
    option: [
        "enemy",
        "angry",
        "upset",
        "friendly"
    ],
    answer: "friendly"
},

{
    question: "Donne is well-known for his—",
    option: [
        "songs and sonnets",
        "satires",
        "sermons",
        "All of these"
    ],
    answer: "All of these"
},

{
    question: "The word ‘momentous’ stands for –",
    option: [
        "foolishness",
        "aggressive",
        "very important",
        "unimportant"
    ],
    answer: "very important"
},

{
    question: "The writer’s host spoke fair ............",
    option: [
        "Hindi",
        "English",
        "French",
        "German"
    ],
    answer: "English"
},

{
    question: "King was assassinated in–",
    option: [
        "1968",
        "1954",
        "1942",
        "1978"
    ],
    answer: "1968"
},

{
    question: "Autumn starts after the departure of-",
    option: [
        "Cold",
        "Summer",
        "Winter",
        "Rains"
    ],
    answer: "Summer"
},

{
    question: "Walter de la Mare received the ‘Order of Merit’ with Queen Elizabeth-II in -",
    option: [
        "1951",
        "1952",
        "1953",
        "1954"
    ],
    answer: "1953"
},

{
    question: "Freedom of Press works to secure and sustain the central doctrine of",
    option: [
        "State",
        "Democracy",
        "Public",
        "personnels"
    ],
    answer: "Democracy"
},

{
    question: "……… Was also known as the Augustan age.",
    option: [
        "16th century",
        "17th century",
        "18th century",
        "19th century"
    ],
    answer: "18th century"
},

{
    question: "…………. was the role model of Dr. Zakir Hussain.",
    option: [
        "Mahatma Gandhi",
        "Sardar Patel",
        "Dr. Radha Krishnan",
        "Dr. Rajendra Prasad"
    ],
    answer: "Dr. Radha Krishnan"
},

{
    question: "Lomov is a neighbour of—",
    option: [
        "Monokov",
        "Runokov",
        "Choobookov",
        "Denukov"
    ],
    answer: "Choobookov"
},

{
    question: "Johnson couple planned for a small ceremony when Benjy was of the age",
    option: [
        "20",
        "21",
        "24",
        "22"
    ],
    answer: "21"
},

{
    question: "The first woman President of the General Assembly of the United State was the",
    option: [
        "Japanese",
        "American",
        "Chinese",
        "Indian"
    ],
    answer: "Indian"
},

{
    question: "Sylheti woman and her child are given new dress on the ............... day of the birth.",
    option: [
        "5th",
        "6th",
        "7th",
        "8th"
    ],
    answer: "7th"
},

{
    question: "What policy, widely circulated newspapers dare not support, however much in national interest, that might conflict, vested interests of its advertisers ?",
    option: [
        "man policy",
        "woman policy",
        "public policy",
        "personal policy"
    ],
    answer: "public policy"
},

{
    question: "The speaker in the poem ‘Snake’ hits the snake with—",
    option: [
        "a nunter",
        "a log",
        "a rod",
        "None of these"
    ],
    answer: "a log"
},

{
    question: "John Keats has written the poem",
    option: [
        "An Epitaph",
        "Ode To Autumn",
        "The Soldier",
        "Fire-Hymn"
    ],
    answer: "Ode To Autumn"
},

{
    question: "The snake seemed like a in ............... exile.",
    option: [
        "saint",
        "fakir",
        "queen",
        "king"
    ],
    answer: "king"
},

{
    question: "Mahatma Gandhi has written the lesson—",
    option: [
        "I Have a Dream",
        "The Artist",
        "Indian Civilization and Culture",
        "The Earth"
    ],
    answer: "Indian Civilization and Culture"
},

{
    question: "Nanukaka took out his cheque-book and wrote a cheque",
    option: [
        "five thousand rupees",
        "two thousand rupees",
        "a thousand rupees",
        "five hundred rupees"
    ],
    answer: "a thousand rupees"
},

{
    question: "The intellectuals in India were restless and embittered because of-",
    option: [
        "Knowledge",
        "Starvation",
        "Slavery",
        "Unemployment"
    ],
    answer: "Slavery"
},

{
    question: "The poet was wearing ...............",
    option: [
        "pant",
        "pyjama",
        "underwear",
        "None of these"
    ],
    answer: "pyjama"
},

{
    question: "To come back to Natalia, Lomov—",
    option: [
        "refused",
        "accepted",
        "hesitated",
        "None of these"
    ],
    answer: "accepted"
},

{
    question: "In ancient days the common people followed —",
    option: [
        "business",
        "agriculture",
        "industry",
        "politics"
    ],
    answer: "agriculture"
},

{
    question: "Seibei reads at ……….. school.",
    option: [
        "High",
        "Primary",
        "Middle",
        "None of these"
    ],
    answer: "Primary"
},

{
    question: "After language the second most important thing which helped mankind was –",
    option: [
        "gold",
        "silver",
        "fire",
        "None of these"
    ],
    answer: "fire"
},

{
    question: "Shiga. Naoya has written the story –",
    option: [
        "The Earth",
        "A Pinch of Snuff",
        "The Artist",
        "None of these"
    ],
    answer: "The Artist"
},

{
    question: ".......... twitter in the sky?",
    option: [
        "Eagles",
        "Swallows",
        "Flowers",
        "Kites"
    ],
    answer: "Swallows"
},

{
    question: "Seibei bought a …………. inch gourd from an old woman.",
    option: [
        "four",
        "five",
        "six",
        "seven"
    ],
    answer: "five"
},

{
    question: "Benjy left his .......... on the pavement.",
    option: [
        "brother",
        "parents",
        "sister",
        "wife"
    ],
    answer: "parents"
},

{
    question: "Keki N. Daruwala was born in-",
    option: [
        "1927",
        "1935",
        "1937",
        "1965"
    ],
    answer: "1937"
},

{
    question: "T.S. Eliot died in-",
    option: [
        "1955",
        "1965",
        "1955",
        "1935"
    ],
    answer: "1965"
},

{
    question: "The speaker confesses that he-",
    option: [
        "Hated the snake",
        "Liked the snake",
        "Feared the snake",
        "Killed the snake"
    ],
    answer: "Liked the snake"
},

{
    question: "“The Canterbury Tales’ was written by –",
    option: [
        "Langland",
        "Chaucer",
        "Yeats",
        "None of these"
    ],
    answer: "Chaucer"
},

{
    question: "The editorial policy of a popular daily is controlled by—",
    option: [
        "two chief Factors",
        "three chief factors",
        "four cheif factors",
        "None of these"
    ],
    answer: "two chief Factors"
},

{
    question: "The English language is much younger than –",
    option: [
        "Latin",
        "Greek",
        "Persian",
        "All the three"
    ],
    answer: "All the three"
},

{
    question: "The author had taken-",
    option: [
        "five days’ leave",
        "three days’ leave",
        "two days’ leave",
        "six days’ leave"
    ],
    answer: "two days’ leave"
},

{
    question: "John Donne was born in",
    option: [
        "1527",
        "1672",
        "1572",
        "1570"
    ],
    answer: "1572"
},

{
    question: "English is also used as a ___ by the Anglo Indian community of India.",
    option: [
        "foreign language",
        "mother-tongue",
        "second language",
        "None of these"
    ],
    answer: "mother-tongue"
},

{
    question: "To overlook the Negro would be –",
    option: [
        "good",
        "beneficial",
        "fatal",
        "None of these"
    ],
    answer: "fatal"
},

{
    question: "When did Dorothy Sayers become one of the first women to graduate from Oxford University?",
    option: [
        "1951",
        "1915",
        "1918",
        "1919"
    ],
    answer: "1915"
},

{
    question: "Bertrand russell Belonged to-",
    option: [
        "America",
        "Britain",
        "Germany",
        "Italy"
    ],
    answer: "Britain"
},

{
    question: "Macavity is-",
    option: [
        "Fat",
        "Short",
        "Tall and thin",
        "Dome shaped"
    ],
    answer: "Tall and thin"
},

{
    question: ".......... visited India to see and listen to two groups of people.",
    option: [
        "Germaine Greer",
        "Bertrand Russel",
        "Anton Chekhov",
        "Pearl S. Buck"
    ],
    answer: "Pearl S. Buck"
},

{
    question: "Full freedom is restored when it comes-",
    option: [
        "War",
        "Famine",
        "Peace",
        "flood"
    ],
    answer: "Peace"
},

{
    question: "W.H. Auden died in?",
    option: [
        "1968",
        "1958",
        "1973",
        "1965"
    ],
    answer: "1973"
},

{
    question: "The poet of ‘Sweetest Love, I Do Not Goe’",
    option: [
        "Walt Whitman",
        "John Donne",
        "John Keats",
        "T.S. Eliot"
    ],
    answer: "John Donne"
},

{
    question: "Our ancestors dissuaded us from —",
    option: [
        "politics",
        "luxuries and pleasure",
        "morality",
        "spirituality"
    ],
    answer: "luxuries and pleasure"
},

{
    question: "Who progressed in course of time ?",
    option: [
        "Animals",
        "Birds",
        "Humans",
        "Cereals"
    ],
    answer: "Humans"
},

{
    question: "The plan was that India would rebel against England just after-",
    option: [
        "First World War",
        "Second World War",
        "Gandhiji’s revolt",
        "Subhash’s revolt"
    ],
    answer: "Second World War"
},

{
    question: "Macavity : The Mystery Cat is a-",
    option: [
        "Drama",
        "Satire",
        "Light poem",
        "Literary poem"
    ],
    answer: "Light poem"
},

{
    question: "‘The Soldier’ is a ............ poem.",
    option: [
        "a symbolic",
        "a lyrical",
        "a patriotic",
        "None of these"
    ],
    answer: "a patriotic"
},

{
    question: "Rupert Brooke was born in –",
    option: [
        "1886",
        "1887",
        "1888",
        "1889"
    ],
    answer: "1887"
},

{
    question: "The poem ............ is a patriotic poem.",
    option: [
        "Song of Myself",
        "Fire-Hymn",
        "The Soldier",
        "An Epitaph"
    ],
    answer: "The Soldier"
},

{
    question: "Benjy’s parents planned for a ceremony when he was",
    option: [
        "thirty",
        "twenty-five",
        "twenty-one",
        "fifteen"
    ],
    answer: "twenty-one"
},

{
    question: "In Sicily, black snakes are considered-",
    option: [
        "Venomous",
        "Innocent",
        "Playful",
        "Gloomy"
    ],
    answer: "Innocent"
},

{
    question: "Long infancy was a biological advantage to",
    option: [
        "animals",
        "birds",
        "mankind",
        "fishes"
    ],
    answer: "mankind"
},

{
    question: "‘A Pinch of Snuff’ is written by –",
    option: [
        "Bertrand Russell",
        "H.E. Bates",
        "Manohar Malgaonkar",
        "Pearl S. Buck"
    ],
    answer: "Manohar Malgaonkar"
},

{
    question: "The prose piece 'THE EARTH' is written by-",
    option: [
        "Mahatma Gandhi",
        "E.M. Bates",
        "E.H. Bates",
        "H.E. Bates"
    ],
    answer: "H.E. Bates"
},

{
    question: "The poet in Sweetest Love I Do Not Goe is his beloved.",
    option: [
        "tired of",
        "angry with",
        "sad for",
        "happy for"
    ],
    answer: "sad for"
},

{
    question: "The speaker of the poem ‘The soldier’ is a —",
    option: [
        "doctor",
        "soldier",
        "teacher",
        "trader"
    ],
    answer: "soldier"
},

{
    question: "What did the doctor advise the Johnsons couple for the mental growth or development of the mind of their only son ?",
    option: [
        "To marry him",
        "Seek some treatment",
        "Give some occupation",
        "Send to study"
    ],
    answer: "Give some occupation"
},

{
    question: "The press enjoys the—",
    option: [
        "boldness of public",
        "the helplessness of the public",
        "idleness of the public",
        "None of these"
    ],
    answer: "the helplessness of the public"
},

{
    question: "Kamala Das is an ............... Poetess.",
    option: [
        "American",
        "Indian",
        "African",
        "Russian"
    ],
    answer: "Indian"
},

{
    question: "The poet expresses his sad feeling for a-",
    option: [
        "Boy",
        "Girl",
        "Lady",
        "Bird"
    ],
    answer: "Lady"
},

{
    question: "The essay 'How Free Is the Press' is written by-",
    option: [
        "Martin Luther King, Jr.",
        "Pearl S. Buck",
        "Aurobindo Ghosh",
        "Dorothy L. Sayers"
    ],
    answer: "Dorothy L. Sayers"
},

{
    question: "‘I harbour for good or bad’ is written by —",
    option: [
        "John Keats",
        "John Donne",
        "Walt Whitman",
        "D.H. Lawrence"
    ],
    answer: "Walt Whitman"
},

{
    question: "Which figure of speech has been used in 'My Grandmother’s House'?",
    option: [
        "metaphor",
        "personification",
        "epic simile",
        "simile"
    ],
    answer: "simile"
},

{
    question: "Who is the author of the prose piece, ‘Ideas That Have Helped Man-kind’?",
    option: [
        "Brutal Bessull",
        "Bertrand Russell",
        "Britanica Russelli",
        "Bertrand Rasal"
    ],
    answer: "Bertrand Russell"
},

{
    question: "Indian Civilization and Culture’ has been written by —",
    option: [
        "Pt. Nehru",
        "M. Gandhi",
        "Hussain",
        "None of these"
    ],
    answer: "M. Gandhi"
},

{
    question: "For the freedom of the press, we usually mean freedom from direction or",
    option: [
        "scandal",
        "foment",
        "censorship",
        "discard"
    ],
    answer: "censorship"
},

{
    question: "John Donne is going to .......... leaving his wife behind.",
    option: [
        "France",
        "Germany",
        "Italy",
        "England"
    ],
    answer: "Germany"
},

{
    question: "The leaves were fast",
    option: [
        "snowing",
        "cut",
        "falling",
        "growing"
    ],
    answer: "falling"
},

{
    question: "Clearly infant and mother mortality is greater in-",
    option: [
        "Traditional births",
        "Untraditional births",
        "Particular births",
        "Prevented births"
    ],
    answer: "Traditional births"
},

{
    question: "Eliot was a—",
    option: [
        "poet",
        "verse dramatist",
        "critic",
        "All of these"
    ],
    answer: "All of these"
},

{
    question: "The Soldier is a ............ poem.",
    option: [
        "mature",
        "war",
        "love",
        "happy"
    ],
    answer: "war"
},

{
    question: "Benjy’s father valued",
    option: [
        "sweat",
        "fate",
        "both",
        "None of these"
    ],
    answer: "fate"
},

{
    question: "Anton Chekhov has written the lesson—",
    option: [
        "A Child is Born",
        "A Marriage Proposal",
        "The Earth",
        "The Artist"
    ],
    answer: "A Marriage Proposal"
},

{
    question: "Who has composed the poem, ‘An Epitaph’? [18A, I.A.]",
    option: [
        "Walter de la Mare",
        "Rupert Brooke",
        "D.H. Lawrence",
        "W.H. Auden"
    ],
    answer: "Walter de la Mare"
},

{
    question: "Keki N. Daruwala is a well known writer of-",
    option: [
        "Poetry",
        "Novel",
        "Short stories",
        "Comics"
    ],
    answer: "Short stories"
},

{
    question: "T.S. Eliot Nobel Prize Literature is-",
    option: [
        "1938",
        "1948",
        "1932",
        "1946"
    ],
    answer: "1948"
},

{
    question: "Who is the speaker in 'My Grandmother’s House'?",
    option: [
        "Torn Dutta",
        "Kamala Das",
        "S.K. Kumar",
        "None of these"
    ],
    answer: "Kamala Das"
},

{
    question: "The Indian culture is the best example of —",
    option: [
        "unity",
        "diversity",
        "unity in diversity",
        "disparity"
    ],
    answer: "unity in diversity"
},

{
    question: "The speaker met the snake near the-",
    option: [
        "Lake",
        "River",
        "Water-trough",
        "House"
    ],
    answer: "Water-trough"
},

{
    question: "Martin Luther King | Jr. was a —",
    option: [
        "Negro",
        "German",
        "French",
        "None of these"
    ],
    answer: "Negro"
},

{
    question: "They had dream that one day they would –",
    option: [
        "divide the nation",
        "kill the white people",
        "get their rights",
        "None of these"
    ],
    answer: "get their rights"
},

{
    question: "“The voice of my education said to me He must be killed; these line are taken from—",
    option: [
        "The Soldier",
        "Fire-Hymn",
        "Snake",
        "An Epitaph"
    ],
    answer: "Snake"
},

{
    question: "Nanukaka has a unique quality of telling –",
    option: [
        "stories",
        "truths",
        "lies",
        "None of these"
    ],
    answer: "lies"
},

{
    question: "Animals get pleasure from—",
    option: [
        "music",
        "football",
        "science",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "New leaves and fruits grow on trees in-",
    option: [
        "Summer",
        "Autumn",
        "Winter",
        "Rainy Season"
    ],
    answer: "Autumn"
},

{
    question: "Poeple in ancient days were satisfied with —",
    option: [
        "towns",
        "cities",
        "mega cities",
        "villages"
    ],
    answer: "villages"
},

{
    question: "A young Indian friend of the writer was married to-",
    option: [
        "An American",
        "A Kashmiri man",
        "A Chinese",
        "A Greek"
    ],
    answer: "A Kashmiri man"
},

{
    question: "Eliot belonged to .......... century.",
    option: [
        "18th",
        "19th",
        "20th",
        "None of these"
    ],
    answer: "20th"
},

{
    question: "Dorothy was born in",
    option: [
        "1883",
        "1863",
        "1873",
        "1893"
    ],
    answer: "1893"
},

{
    question: "Walter de la Mare is famous as a-",
    option: [
        "War poet",
        "Children’s poet",
        "Nature poet",
        "Romantic poet"
    ],
    answer: "Children’s poet"
},

{
    question: "The author believes that socio-cultural practices are designed to suit the interest of-",
    option: [
        "Males",
        "Females",
        "Family",
        "Writers"
    ],
    answer: "Males"
},

{
    question: "The speaker is not afraid of—",
    option: [
        "death",
        "life",
        "lion",
        "None of these"
    ],
    answer: "death"
},

{
    question: "Macavity can defy or challenge-",
    option: [
        "Anyone",
        "The food",
        "The law",
        "The dog"
    ],
    answer: "The law"
},

{
    question: "H.E. Bates was born in-",
    option: [
        "1905",
        "1805",
        "1908",
        "1810"
    ],
    answer: "1905"
},

{
    question: "John Keats was born in-",
    option: [
        "1795",
        "1765",
        "1785",
        "1805"
    ],
    answer: "1795"
},

{
    question: "Nanukaka handed over a cheque of a thousand rupees to a-",
    option: [
        "Carpenter",
        "Dhobi",
        "Gold smith",
        "Milkman"
    ],
    answer: "Dhobi"
},

{
    question: "Benjy wanted to marry",
    option: [
        "Clorence",
        "Florence",
        "Rupani",
        "None of these"
    ],
    answer: "Florence"
},

{
    question: "A big circulation spells bankruptcy if the paper has to depend on its sales for its",
    option: [
        "advertisement",
        "honesty",
        "ethics",
        "revenue"
    ],
    answer: "revenue"
},

{
    question: "Brooke inspired patriotism in the ................ phase of the First World War.",
    option: [
        "early",
        "middle",
        "late",
        "None of these"
    ],
    answer: "early"
},

{
    question: "The state is the-",
    option: [
        "master of the people",
        "servant of the people",
        "exploiter of the people",
        "None of these"
    ],
    answer: "servant of the people"
},

{
    question: "‘It I should die, think only, this my me’ is taken from—",
    option: [
        "An Epitaph",
        "Fire-Hymn",
        "The Soldier",
        "Snake"
    ],
    answer: "The Soldier"
},

{
    question: "Pearl S. Buck won the Nobel Prize for literature in the year-",
    option: [
        "1931",
        "1918",
        "1928",
        "1938"
    ],
    answer: "1938"
},

{
    question: "‘Murder in the Cathedral’ was written by —",
    option: [
        "T.S. Eliot",
        "Shakespeare",
        "Marlowe",
        "None of these"
    ],
    answer: "T.S. Eliot"
},

{
    question: "In the ............... the husband wife due enjoy more freedom and individuality.",
    option: [
        "North",
        "South",
        "East",
        "West"
    ],
    answer: "West"
},

{
    question: "Rupert Brooke is remembered as a-",
    option: [
        "Romantic poet",
        "War poet",
        "Nature poet",
        "Social poet"
    ],
    answer: "War poet"
},

{
    question: "Indian people be reckoned as belonging to the race of",
    option: [
        "Capoid",
        "Caucasian",
        "Apartheid",
        "Hegemonic"
    ],
    answer: "Caucasian"
},

{
    question: "A sonnet is a poem of ............ lines. [2018A, I.A.]",
    option: [
        "16",
        "14",
        "18",
        "20"
    ],
    answer: "14"
},

{
    question: "Mr. Stepan Stepanovich Choobookov is a –",
    option: [
        "Lawyer",
        "Landowner",
        "Writer",
        "Poet"
    ],
    answer: "Landowner"
},

{
    question: "Macavity is full of -",
    option: [
        "happiness",
        "Sadness",
        "selfishness",
        "Deceitfulness"
    ],
    answer: "Deceitfulness"
},

{
    question: "'Fire-Hymn' deals with -ghat.",
    option: [
        "bathing",
        "burning",
        "drinking",
        "None of these"
    ],
    answer: "burning"
},

{
    question: "The hospital staff was very uncooperative about",
    option: [
        "meals",
        "childbirth",
        "breast-feeding",
        "medicines"
    ],
    answer: "breast-feeding"
},

{
    question: "Pearl S. Buck died in the year-",
    option: [
        "1933",
        "1963",
        "1973",
        "1943"
    ],
    answer: "1973"
},

{
    question: "___is called the father of the modern novel.",
    option: [
        "Richardson",
        "Fielding",
        "Johnson",
        "Dryden"
    ],
    answer: "Richardson"
},

{
    question: "…… was coming to visit the narrator’s family.",
    option: [
        "Sohanlal Ratiram",
        "Hajrat Barkat Ali",
        "Nanukaka",
        "None of these"
    ],
    answer: "Nanukaka"
},

{
    question: "Diseases make human life.........",
    option: [
        "miser",
        "mouser",
        "miserable",
        "wealthier"
    ],
    answer: "miserable"
},

{
    question: "Trees shed their leaves in —",
    option: [
        "rain",
        "summer",
        "winter",
        "autumn"
    ],
    answer: "autumn"
},

{
    question: "John died in-",
    option: [
        "1641",
        "1631",
        "1702",
        "1615"
    ],
    answer: "1631"
},

{
    question: "The speaker of the poem ‘Snake’ compares the snake with the sea-albatross of—",
    option: [
        "The Ancient Mariner",
        "‘Eve of St. Agnes’",
        "‘The Scholar Gipsy’",
        "‘Lycidas’"
    ],
    answer: "The Ancient Mariner"
},

{
    question: "Old English covers—",
    option: [
        "AD 449 — AD 1066",
        "AD 1067 – AD 1099",
        "AD 1100 – AD 1149",
        "AD 1150 – AD 1500"
    ],
    answer: "AD 449 — AD 1066"
},

{
    question: "‘Sweetest Love, I Do Not Goe’ may be compared with Shakespeare’s—",
    option: [
        "‘All the World’s Stage’",
        "‘The Marriage of True Minds’",
        "‘Blow Blow Thou Winter Wind’",
        "None of these"
    ],
    answer: "‘The Marriage of True Minds’"
},

{
    question: "Martin Luther King | Jr. was a –",
    option: [
        "artist",
        "civil right activists",
        "scientist",
        "philosopher"
    ],
    answer: "civil right activists"
},

{
    question: "Benjy had understood that the hens exists for the purpose of-",
    option: [
        "Playing",
        "Laying eggs",
        "Eaten up",
        "Selling"
    ],
    answer: "Laying eggs"
},

{
    question: "Walter de la Mare Knew a who is now dead.",
    option: [
        "girl",
        "lady",
        "boy",
        "None of these"
    ],
    answer: "lady"
},

{
    question: "Survival for homo sapiens primarily was—",
    option: [
        "a problem",
        "never a problem",
        "both of them",
        "None of these"
    ],
    answer: "a problem"
},

{
    question: "Russell was awarded Nobel Prize for—",
    option: [
        "philosophy",
        "literature",
        "medicine",
        "economics"
    ],
    answer: "literature"
},

{
    question: "The word in the chapter ‘persuaded’ means same as-",
    option: [
        "Protected",
        "Barred",
        "Convinced",
        "Thrown"
    ],
    answer: "Convinced"
},

{
    question: "Dr. Zakir Hussain delivered his speech in …..",
    option: [
        "1965",
        "1966",
        "1967",
        "1968"
    ],
    answer: "1967"
},

{
    question: "'Now The Leaves are Falling' is",
    option: [
        "a lyric",
        "an ode",
        "a sonnet",
        "an elegy"
    ],
    answer: "a lyric"
},

{
    question: "D.H. Lawrence has written the poem –",
    option: [
        "My Grand Mother’s House",
        "Snake",
        "An Epitaph",
        "The Soldier"
    ],
    answer: "Snake"
},

{
    question: "Natalia’s dog is named—",
    option: [
        "Weep",
        "Leap",
        "Neap",
        "Deap"
    ],
    answer: "Leap"
},

{
    question: "The gold period of old English literature was the era of –",
    option: [
        "King Alfred",
        "King Richard – II",
        "Queen Elizabeth",
        "None of these"
    ],
    answer: "King Alfred"
},

{
    question: "‘Mac Flecknoe’ was written by-",
    option: [
        "Dryden",
        "John Donne",
        "George Herbert",
        "None of these"
    ],
    answer: "Dryden"
},

{
    question: "What does the poet discard?",
    option: [
        "Mankind",
        "Nature’s beauty",
        "Beloved",
        "Statue"
    ],
    answer: "Nature’s beauty"
},

{
    question: "The slum area densely populated by an isolated community is marked by-",
    option: [
        "safe place",
        "fallen",
        "ghetto",
        "oasis"
    ],
    answer: "ghetto"
},

{
    question: "‘Piers the plowman’ is written by –",
    option: [
        "Spenser",
        "Milton",
        "Langland",
        "Congreve"
    ],
    answer: "Langland"
},

{
    question: "Nanukaka in a linguistic emergengy always turned to",
    option: [
        "English",
        "Hindi",
        "his mother-tongue",
        "Sanskrit AMY"
    ],
    answer: "his mother-tongue"
},

{
    question: "The taming of domestic animals made life –",
    option: [
        "pleasanter",
        "fearful",
        "harmful",
        "None of these"
    ],
    answer: "pleasanter"
},

{
    question: "The lady, who is died, lies in the —",
    option: [
        "garden",
        "grave",
        "field",
        "house"
    ],
    answer: "grave"
},

{
    question: "Restrictions are normally placed upon the press in time of-",
    option: [
        "Flood",
        "Bloodshed",
        "War",
        "Famine"
    ],
    answer: "War"
},

{
    question: "The mind is a restless …………… the more it gets the more it wants.",
    option: [
        "bird",
        "dog",
        "cow",
        "monkey"
    ],
    answer: "bird"
},

{
    question: "Who has composed the poem, Now The Leaves Are Falling Fast?",
    option: [
        "W.H. Auden",
        "Walter de la Mare",
        "D.H. Lawrence",
        "Rupert Brooke"
    ],
    answer: "W.H. Auden"
},

{
    question: "Nanukaka was to stay for….",
    option: [
        "four or five days",
        "three or four days",
        "two or three days",
        "a week"
    ],
    answer: "two or three days"
},

{
    question: "When did Russell die ?",
    option: [
        "1960",
        "1990",
        "1970",
        "1980"
    ],
    answer: "1970"
},

{
    question: "How many times the word ‘you’ has been used in ‘Song of Myself’ (‘I Celebrate Myself’)?",
    option: [
        "twice",
        "ones",
        "thrice",
        "None of these"
    ],
    answer: "twice"
},

{
    question: "………….. is sweltering with the heat of injustice and oppression.",
    option: [
        "Newyork",
        "Texas",
        "Chicago",
        "Mississippi"
    ],
    answer: "Mississippi"
},

{
    question: "The poet enjoys himself and sings for",
    option: [
        "public",
        "beloved",
        "children",
        "himself"
    ],
    answer: "himself"
},

{
    question: "Walter de la Mare die in-",
    option: [
        "1918",
        "1956",
        "1938",
        "1926"
    ],
    answer: "1956"
},

{
    question: "The images and praises of ............ run through both the stanzas.",
    option: [
        "England",
        "America",
        "France",
        "India"
    ],
    answer: "England"
},

{
    question: "The book ‘Come, My Beloved’ has the",
    option: [
        "English background",
        "Chinese background",
        "American background",
        "Indian background"
    ],
    answer: "Indian background"
},

{
    question: "'My Grand mother’s House' is an ............... poem by Kamala Das.",
    option: [
        "biographical",
        "auto biographical",
        "bibliographical",
        "None of these"
    ],
    answer: "auto biographical"
},

{
    question: "Birds die of hunger in large numbers—",
    option: [
        "during summer",
        "during rainy season",
        "during winter",
        "None of these"
    ],
    answer: "during winter"
},

{
    question: "The auther has given the forms of misrepresentation, they are—",
    option: [
        "rive",
        "four",
        "seven",
        "six"
    ],
    answer: "six"
},

{
    question: "Macavity : The Mystery Cat is a-",
    option: [
        "Drama",
        "Satire",
        "Light poem",
        "Literary poem"
    ],
    answer: "Light poem"
},

{
    question: "The people of Europe are inspired by. ……… and Roman writers.",
    option: [
        "British",
        "Greek",
        "German",
        "Indian"
    ],
    answer: "Greek"
},

{
    question: "‘Paradise Lost’ was written by –",
    option: [
        "Milton",
        "Spenser",
        "Dickens",
        "None of these"
    ],
    answer: "Milton"
},

{
    question: "‘Untouchable’ was written by –",
    option: [
        "Mulk Raj Anand",
        "Anita Desai",
        "Raja Rao",
        "R.K. Narayan"
    ],
    answer: "Mulk Raj Anand"
},

{
    question: "The world England’ is used in the poem for how many times ?",
    option: [
        "One",
        "Two",
        "Three",
        "Four"
    ],
    answer: "Four"
},

{
    question: "The author advocates-",
    option: [
        "non-violent struggle",
        "violent struggle",
        "both the ways",
        "None of these"
    ],
    answer: "non-violent struggle"
},

{
    question: "‘Sweetest Love, I Do Not Goe’ has been addressed to—",
    option: [
        "Donne’s sister",
        "Donne’s mother",
        "Donne’s friend",
        "Donne’s wife"
    ],
    answer: "Donne’s wife"
},

{
    question: "................ belongs to Zoroastrian religion.",
    option: [
        "Rupert Brooke",
        "Kamala Das",
        "John Donne",
        "Keki N. Daruwalla"
    ],
    answer: "Keki N. Daruwalla"
},

{
    question: "Florence later on became the wife of",
    option: [
        "Benjy’s friend",
        "Benjy",
        "Ranjay",
        "None of these"
    ],
    answer: "Benjy"
},

{
    question: "Who all are assumed to be unjust and vindictive ?",
    option: [
        "husbands",
        "fathers-in-law",
        "husband’s sisters",
        "mothers-in-law"
    ],
    answer: "mothers-in-law"
},

{
    question: "The Press can make or break-",
    option: [
        "Colony",
        "People",
        "Reputation",
        "Garbling"
    ],
    answer: "Reputation"
},

{
    question: "Walter de la Mare belonged to ............ century.",
    option: [
        "19th",
        "20th",
        "18th",
        "None of these"
    ],
    answer: "20th"
},

{
    question: "The snake met the poet near his water",
    option: [
        "bucket",
        "well",
        "trough",
        "pond"
    ],
    answer: "trough"
},

{
    question: "'My Grandmother’s House' published in —",
    option: [
        "1963",
        "1964",
        "1965",
        "1966"
    ],
    answer: "1965"
},

{
    question: "Who is the speaker in the poem, ‘Snake’?",
    option: [
        "Donne",
        "Whitman",
        "Keats",
        "D.H. Lawrence"
    ],
    answer: "D.H. Lawrence"
},

{
    question: "Earlier he had served as –",
    option: [
        "the Governor of Bihar",
        "the Chief Minister of Punjab",
        "the Governor of West Bengal",
        "the Governor of Assam"
    ],
    answer: "the Governor of Bihar"
},

{
    question: "The second chief source of a newspaper's revenue is-",
    option: [
        "debt",
        "donation",
        "the wealth of owner",
        "grant by the government"
    ],
    answer: "the wealth of owner"
},

{
    question: "The bank of justice’is —",
    option: [
        "Bankrupt",
        "highway",
        "staggered",
        "struggled"
    ],
    answer: "Bankrupt"
},

{
    question: "Travellers will be blessed with the",
    option: [
        "river",
        "waterfall",
        "pond",
        "lake"
    ],
    answer: "waterfall"
},

{
    question: "'A Marriage Proposal' presents characters who cause their own-",
    option: [
        "Beliefs",
        "Comfort",
        "Comedies",
        "Discomfort"
    ],
    answer: "Discomfort"
},

{
    question: "I was called to kill a dangerous.",
    option: [
        "dog",
        "tiger",
        "snake",
        "cat"
    ],
    answer: "dog"
},

{
    question: "‘The Soldier’ is –",
    option: [
        "an ode",
        "a sonnet",
        "an epic",
        "None of these"
    ],
    answer: "a sonnet"
},

{
    question: "'Fire Hymn' is written by-",
    option: [
        "Walter Whiteman",
        "Keki N. Daruwala",
        "W. H. Auden",
        "Kalama Das"
    ],
    answer: "Keki N. Daruwala"
},

{
    question: "Macavity is-",
    option: [
        "A soldier",
        "A dog",
        "A cat",
        "A boy"
    ],
    answer: "A cat"
},

{
    question: "Rupert Brooke was born in-",
    option: [
        "1827",
        "1857",
        "1887",
        "1878"
    ],
    answer: "1887"
},

{
    question: "This is the special accomplishment of the press interviewer-",
    option: [
        "Marbling",
        "Garbling",
        "Titillating",
        "Allusion"
    ],
    answer: "Garbling"
},

{
    question: "The porter sold the gourd of Seibei for —",
    option: [
        "30 yen",
        "40 yen",
        "50 yen",
        "60 yen"
    ],
    answer: "50 yen"
},

{
    question: "Seibi’s parents knew that he often bought himself-",
    option: [
        "apples",
        "oranges",
        "gourds",
        "guavas"
    ],
    answer: "gourds"
},

{
    question: "Anton Chekhov died in",
    option: [
        "1905",
        "1904",
        "1910",
        "1912"
    ],
    answer: "1904"
},

{
    question: "Johnson’s only son was-",
    option: [
        "H.E. Bates",
        "Tom",
        "Benjy",
        "Bony"
    ],
    answer: "Benjy"
},

{
    question: "The word used in the essay for the uncontrolled freedom of one man, or one gang, to impose its will on the world is",
    option: [
        "fertility",
        "coerce",
        "dictatorship",
        "tyranny"
    ],
    answer: "tyranny"
},

{
    question: "Macavity outwardly—",
    option: [
        "miserable",
        "healthy",
        "appealing",
        "respectable"
    ],
    answer: "respectable"
},

{
    question: "Pharaohs were rulers were ancient—",
    option: [
        "Russia",
        "Egypt",
        "India",
        "Greece"
    ],
    answer: "Egypt"
},

{
    question: "The prose piece 'The Earth' is written by:",
    option: [
        "Mahatma Gandhi",
        "E.M. Bates",
        "E.N. Bates",
        "H.E. Bates"
    ],
    answer: "H.E. Bates"
},

{
    question: "Johnson was in the possession of .......... land.",
    option: [
        "two acre",
        "three acre",
        "four acre",
        "five acre"
    ],
    answer: "four acre"
},

{
    question: "‘A Marriage Proposal’ is written by—",
    option: [
        "Shiga Naoya",
        "Bertrand Russell",
        "Anton Chekhov",
        "Pearl S. Buck"
    ],
    answer: "Anton Chekhov"
},

{
    question: "In the poem, 'Now The Leaves Are Falling Fast' 'Whispering neighbours' stand for-",
    option: [
        "agents of Life Insurance",
        "agents of State Bank of India",
        "agents of Sahara India",
        "agents of death"
    ],
    answer: "agents of death"
},

{
    question: "The colour of the snake in the poem is-",
    option: [
        "Yellow-black",
        "Golden",
        "Black",
        "Blue"
    ],
    answer: "Black"
},

{
    question: "In the last few decades of the ___ century, the English language has been rapid changes.",
    option: [
        "17th",
        "18th",
        "19th",
        "20th"
    ],
    answer: "20th"
},

{
    question: "The condition of the ……. | apalling.",
    option: [
        "African",
        "Negroes",
        "Indians",
        "None of these"
    ],
    answer: "Negroes"
},

{
    question: "One day Seibi found p peculiar gourd at shop of an old woman, which cost him-",
    option: [
        "five sen",
        "ten sen",
        "two sen",
        "None of these"
    ],
    answer: "ten sen"
},

{
    question: "In the poem ‘Snake’ Lawrence denounces the artificialities of ............... life.",
    option: [
        "ancient",
        "medieval",
        "modern",
        "None of these"
    ],
    answer: "modern"
},

{
    question: "Kamala Das remembers the happy days spent in the sweet company of her—",
    option: [
        "grand mother",
        "grand father",
        "father",
        "mother"
    ],
    answer: "grand mother"
},

{
    question: "Lomov is a ........ of the Stepanovnas.",
    option: [
        "labour",
        "brother",
        "neighbour",
        "barber"
    ],
    answer: "neighbour"
},

{
    question: "After how many years, Johnson’s couple realised that their only son was not quite like others, and so took him to a doctor ?",
    option: [
        "35",
        "20",
        "25",
        "30"
    ],
    answer: "30"
},

{
    question: "The British Grammar was written by J. Buchanan in –",
    option: [
        "1760",
        "1762",
        "1764",
        "1766"
    ],
    answer: "1762"
},

{
    question: "Natalia is the daughter of",
    option: [
        "Vassilievich",
        "Ivan",
        "Chekhov",
        "Choobookov"
    ],
    answer: "Choobookov"
},

{
    question: "The prose pice ‘India Through A Traveller’s Eyes’ is written by-",
    option: [
        "Dorothy L. Sayers",
        "Bertrand Russell",
        "Pearl S. Buck",
        "Anton Chekhov"
    ],
    answer: "Pearl S. Buck"
},

{
    question: "Johnson couple planned for a small ceremony when Benjy was of the age-",
    option: [
        "20",
        "21",
        "24",
        "18"
    ],
    answer: "21"
},

{
    question: "Walt Whitman was born in-",
    option: [
        "1820",
        "1819",
        "1815",
        "1820"
    ],
    answer: "1819"
},

{
    question: "Wealth and luxuries do not make a…… Happy.",
    option: [
        "bird",
        "man",
        "cow",
        "dog"
    ],
    answer: "man"
},

{
    question: "The travellers are we beings, moving towards our death.",
    option: [
        "human",
        "animal",
        "urban",
        "rural"
    ],
    answer: "human"
},

{
    question: "In ............... children under the age of five or six are looked after by the whole family.",
    option: [
        "India",
        "Bangladesh",
        "China",
        "Russia"
    ],
    answer: "Bangladesh"
},

{
    question: "The poet sees the red hot ............",
    option: [
        "Iron",
        "face",
        "embers",
        "None of these"
    ],
    answer: "embers"
},

{
    question: "The poet thinks that is not everlasting.",
    option: [
        "beauty",
        "cruelty",
        "ugliness",
        "love"
    ],
    answer: "beauty"
},

{
    question: "An Epitaph is a-",
    option: [
        "Story",
        "Travalogue",
        "Essay",
        "Poetry"
    ],
    answer: "Poetry"
},

{
    question: "Who has composed the poem, ‘Sweetest Love, I Do Not Goe’?",
    option: [
        "John Donne",
        "Andrew Marvell",
        "George Herbert",
        "None of these"
    ],
    answer: "John Donne"
},

{
    question: "David H. Lawrence died in-",
    option: [
        "1920",
        "1910",
        "1940",
        "1930"
    ],
    answer: "1930"
},

{
    question: "Germaine Greer was educated in—",
    option: [
        "Germaine",
        "Australia",
        "U.S.A.",
        "England"
    ],
    answer: "Australia"
},

{
    question: "Dr. Zakir Hussain took the oath as the –",
    option: [
        "president",
        "governor",
        "minister",
        "None of these"
    ],
    answer: "president"
},

{
    question: "W. H. Auden won the Pulitzer prize in",
    option: [
        "1937",
        "1958",
        "1948",
        "1842"
    ],
    answer: "1948"
},

{
    question: "‘Macavity: The Mystery Cat’ is written by-",
    option: [
        "D. H. Lawrence",
        "Walter de la Mare",
        "T.S. Eliot",
        "Kamala das"
    ],
    answer: "T.S. Eliot"
},

{
    question: "Dr. Radhakrishnan never his faith in –",
    option: [
        "man",
        "animal",
        "bird",
        "None of these"
    ],
    answer: "man"
},

{
    question: "Morality plays developed in –",
    option: [
        "Ancient ages",
        "Middle ages",
        "Modern ages",
        "None of these"
    ],
    answer: "Middle ages"
},

{
    question: "“The Artist’ is-",
    option: [
        "a short story",
        "an article",
        "a periodical",
        "None of these"
    ],
    answer: "a short story"
},

{
    question: "The tone of the poem, ‘An Epitaph’ means to—",
    option: [
        "happy",
        "melancholy",
        "romantic",
        "None of these"
    ],
    answer: "melancholy"
},

{
    question: "The naming ceremony is held when the baby is—",
    option: [
        "seven days old",
        "five days old",
        "the days old",
        "None of these"
    ],
    answer: "seven days old"
},

{
    question: "Autobiography of Kamala Das was published in-",
    option: [
        "1996",
        "1966",
        "1986",
        "1976"
    ],
    answer: "1976"
},

{
    question: "‘A pulse in the eternal mind, no less’ is written by—",
    option: [
        "John Keats",
        "Walter de la Mare",
        "Walt Whitman",
        "Rupert Brooke"
    ],
    answer: "Rupert Brooke"
},

{
    question: "‘Vision of Judgeinent’ was written by –",
    option: [
        "Shelly",
        "John Keats",
        "Lord Byron",
        "None of these"
    ],
    answer: "Lord Byron"
},

{
    question: "Seibei was a twelve years old son….. boy.",
    option: [
        "Chinese",
        "japanese",
        "African",
        "Indian"
    ],
    answer: "japanese"
},

{
    question: "Sahitya Akademi Award was given to Keki N. Darwais in-",
    option: [
        "1968",
        "1974",
        "1984",
        "1978"
    ],
    answer: "1984"
},

{
    question: "‘I Have a Dream’ is written by –",
    option: [
        "Germaine Greer",
        "Shiga Naoya",
        "Martin Luther King | Jr.",
        "H.E. Bates"
    ],
    answer: "Martin Luther King | Jr."
},

{
    question: "When did Russell die ?",
    option: [
        "1960",
        "1968",
        "1970",
        "1980"
    ],
    answer: "1970"
},

{
    question: "The theme of Daruwalla’s poetry consist—",
    option: [
        "love, death",
        "love, death, domination",
        "love, death, domination, cynicism",
        "love, death, domination, cynicism, plight of human society and violence"
    ],
    answer: "love, death, domination, cynicism, plight of human society and violence"
},

{
    question: "Lomov wanted to—",
    option: [
        "kill Natalia",
        "Marry natalia",
        "cheat Natalia",
        "None of these"
    ],
    answer: "Marry natalia"
},

{
    question: "In India, Singapore, Malaysia, Nigeria, Namibia, Botswana etc. English is spoken as a –",
    option: [
        "second language",
        "mother-tongue",
        "foreign language",
        "None of these"
    ],
    answer: "second language"
},

{
    question: "Seibei’s hobby was collecting of –",
    option: [
        "stamps",
        "books",
        "gourds",
        "None of these"
    ],
    answer: "gourds"
},

{
    question: "Who has written ‘A Child is Born’?",
    option: [
        "B. Russell",
        "S. Naoya",
        "G Greer",
        "None of these"
    ],
    answer: "G Greer"
},

{
    question: "The poet feels that after his death nobody will .......... her.",
    option: [
        "love",
        "forget",
        "remember",
        "hate"
    ],
    answer: "remember"
},

{
    question: "‘Indian Through a Traveller’s Eyes’ is an inspiring-",
    option: [
        "drama",
        "story",
        "novel",
        "essay"
    ],
    answer: "essay"
},

{
    question: "Keki N. Daruwala as born in-",
    option: [
        "1947",
        "1935",
        "1937",
        "1965"
    ],
    answer: "1937"
},

{
    question: "John Donne thinks that is certain.",
    option: [
        "death",
        "work",
        "life",
        "None of these"
    ],
    answer: "death"
},

{
    question: "The first English tragedy was —",
    option: [
        "Dr. Faustus",
        "Julius Caesar",
        "Gorboduc",
        "King Lear"
    ],
    answer: "Gorboduc"
},

{
    question: "‘Faiery Queene’ was written by –",
    option: [
        "Tennyson",
        "Spenser",
        "Arnold",
        "None of these"
    ],
    answer: "Spenser"
},

{
    question: "Benjy’s father was",
    option: [
        "a doctor",
        "a teacher",
        "a preacher",
        "a painter"
    ],
    answer: "a preacher"
},

{
    question: "Seibei was a …… japanese Boy.",
    option: [
        "nine year old",
        "ten years old",
        "eleven years old",
        "twelve years old"
    ],
    answer: "twelve years old"
},

{
    question: "Beqjy married Florence at the age of",
    option: [
        "20",
        "30",
        "40",
        "50"
    ],
    answer: "40"
},

{
    question: "The poet intends to go on a longer journey than",
    option: [
        "sun",
        "moon",
        "earth",
        "sea"
    ],
    answer: "sun"
},

{
    question: "Macavity is an —",
    option: [
        "outlaw",
        "criminals",
        "looter",
        "diplomat"
    ],
    answer: "outlaw"
},

{
    question: "Macavity is a—",
    option: [
        "dog",
        "Rat",
        "tiger",
        "Cat"
    ],
    answer: "Cat"
},

{
    question: "........... twitter in the sky?",
    option: [
        "Eagles",
        "Flowers",
        "Swallows",
        "Kites"
    ],
    answer: "Swallows"
},

{
    question: "…… is a ‘window to the world’.",
    option: [
        "Hindi",
        "Urdu",
        "English",
        "Chinese"
    ],
    answer: "English"
},

{
    question: "The lifted his head from his drinking, as cattle do’ is written by—",
    option: [
        "T.S. Eliot",
        "D.H. Lawrence",
        "Rupert Brooke",
        "John Keats"
    ],
    answer: "D.H. Lawrence"
},

{
    question: "According to Eliot, Macavity is the .......... of Crime.",
    option: [
        "Hitler",
        "Napoleon",
        "Alexander",
        "None of these"
    ],
    answer: "Napoleon"
},

{
    question: "The poet expresses his indebtedness to-",
    option: [
        "India",
        "America",
        "England",
        "Earth"
    ],
    answer: "England"
},

{
    question: "Human beings suffer more due to their—",
    option: [
        "ignorance",
        "intelligence",
        "reluctance",
        "None of these"
    ],
    answer: "intelligence"
},

{
    question: "King is regarded as one of the greatest –",
    option: [
        "artists",
        "scientists",
        "separatists",
        "orators"
    ],
    answer: "orators"
},

{
    question: "................. was also a commentator on a large variety of topics.",
    option: [
        "Martin Luther King, Jr.",
        "Bertrand Russell",
        "Mahatma Gandhi",
        "Dr. Zakir Hussain"
    ],
    answer: "Bertrand Russell"
},

{
    question: "Our food was served on fresh green ............ leaves instead plates.",
    option: [
        "peepal",
        "banana",
        "mango",
        "banyan"
    ],
    answer: "banana"
},

{
    question: "From boyhood the Indian ............ are taught that the right hand is for clean services.",
    option: [
        "young",
        "boys",
        "people",
        "children"
    ],
    answer: "children"
},

{
    question: "When did Anton Chekhov die ?",
    option: [
        "1888",
        "1900",
        "1902",
        "1904"
    ],
    answer: "1904"
},

{
    question: "The hospital refused to believe that the pregnant woman was in-",
    option: [
        "First stage labour",
        "Second stage labour",
        "Third stage labour",
        "Forth stage labour"
    ],
    answer: "Second stage labour"
},

{
    question: "..........are careful not to antagonize the press.",
    option: [
        "Doctors",
        "Traders",
        "Teachers",
        "Politicians"
    ],
    answer: "Politicians"
},

{
    question: "In the following essay 'How Free Is The Press', the author makes a strong case against",
    option: [
        "press",
        "misuse freedom of the press",
        "slavery of press",
        "editors"
    ],
    answer: "misuse freedom of the press"
},

{
    question: "The price of the five inches gourds is —",
    option: [
        "five sen",
        "nine sen",
        "ten sen",
        "eleven sen"
    ],
    answer: "ten sen"
},

{
    question: "The speaker of 'My Grandmother’s House' is proud of—",
    option: [
        "her parent’s house",
        "her grandmother’s house",
        "her uncle’s house",
        "None of these"
    ],
    answer: "her grandmother’s house"
},

{
    question: "It was the ............ of the poet aling with him, passing by the cremation ghat.",
    option: [
        "mother",
        "father",
        "brother",
        "son"
    ],
    answer: "father"
},

{
    question: "What does the poet discard?",
    option: [
        "king",
        "nature’s beauty",
        "beloved",
        "statue"
    ],
    answer: "nature’s beauty"
},

{
    question: "Germaine Greer was born in—",
    option: [
        "1919",
        "1929",
        "1939",
        "1949"
    ],
    answer: "1939"
},

{
    question: "‘And when the foreign office find a Treaty's gone astray’ is written by—",
    option: [
        "Walt Whitman",
        "Rupert Brooke",
        "T.S. Eliot",
        "Kamala Das"
    ],
    answer: "T.S. Eliot"
},

{
    question: "The Johnsons’ son was-",
    option: [
        "insane",
        "blind",
        "lame",
        "simple"
    ],
    answer: "simple"
},

{
    question: "‘The Savitri’ has been written by –",
    option: [
        "Aurobindo Ghosh",
        "Sarojini Naidu",
        "Rabindranath Tagore",
        "None of these"
    ],
    answer: "Aurobindo Ghosh"
},

{
    question: "'Ode to Autumn' is a poem of-",
    option: [
        "Love",
        "War",
        "Nature",
        "Sadness"
    ],
    answer: "Nature"
},

{
    question: "According to ‘The Soldier’ England has given her natives . her flowers —",
    option: [
        "to worship",
        "to love",
        "to offer",
        "None of these"
    ],
    answer: "to love"
},

{
    question: "What does the poet observe in summer?",
    option: [
        "sunny days",
        "Girls playing",
        "Spike of grass",
        "Yellow flowers"
    ],
    answer: "Spike of grass"
},

{
    question: "When was Bertrand Russell born ?",
    option: [
        "1862",
        "1870",
        "1875",
        "1872"
    ],
    answer: "1872"
},

{
    question: "For homo sapiens, survival was",
    option: [
        "no problem",
        "problem",
        "very easy",
        "easy"
    ],
    answer: "very easy"
},

{
    question: "Kamala Das, poet and short story writer, has earned a respectable place in both English and-",
    option: [
        "Hindi",
        "Telugu",
        "Malyalam",
        "Urdu"
    ],
    answer: "Malyalam"
},

{
    question: "‘Hoping to cease not till death’ is a line from ............... [2018A, I.A]",
    option: [
        "Sweetest Love I Do Not Goe",
        "Song of Myself",
        "The Soldier",
        "Fire-Hymn"
    ],
    answer: "Fire-Hymn"
},

{
    question: "The snake looked at the speaker-",
    option: [
        "Sharply",
        "Vaguely",
        "Calmly",
        "Fiercely"
    ],
    answer: "Vaguely"
},

{
    question: "Eliot was awarded the Nobel Prize for literature in —",
    option: [
        "1947",
        "1948",
        "1949",
        "1950"
    ],
    answer: "1948"
},

{
    question: "Rupert Brooke is remembered as a-",
    option: [
        "Romantic poet",
        "Nature Poet",
        "War poet",
        "Social Poet"
    ],
    answer: "War poet"
},

{
    question: "In the poem, ‘Sweetest Love, I Do Not Goe’ ‘dye’ stands for—",
    option: [
        "to die",
        "to paint",
        "both (A) and (B)",
        "None of these"
    ],
    answer: "to die"
},

{
    question: "Bertrand Russell has written the lesson—",
    option: [
        "The Artist",
        "Ideas That Have Helped Mankind",
        "I Have a Dream",
        "A Pinch of Snuff"
    ],
    answer: "Ideas That Have Helped Mankind"
},

{
    question: "Autumn starts with the departure of the ............ season.",
    option: [
        "winter",
        "spring",
        "rainy",
        "summer"
    ],
    answer: "summer"
},

{
    question: "As the president, Dr. Hussain advocated for the growth of-",
    option: [
        "certain religions",
        "the whole nation",
        "the rich only",
        "the poor only"
    ],
    answer: "the whole nation"
},

{
    question: "During pregnancy a woman prefers her mother’s house because—",
    option: [
        "she gets proper care there",
        "she is neglected",
        "she feels freedom there",
        "None of these"
    ],
    answer: "she gets proper care there"
},

{
    question: "According to the writer, the skin colour of the Kashmiri is lovely cream and the features are classic as the-",
    option: [
        "Indian",
        "British",
        "Human",
        "Greek"
    ],
    answer: "Greek"
},

{
    question: "'Now The Leaves Are Falling Fast the ............ frustration inherent in human life.",
    option: [
        "reacts",
        "enacts",
        "accepts",
        "protests"
    ],
    answer: "enacts"
},

{
    question: ".............. was the real owner of the land.",
    option: [
        "Landers",
        "Manders",
        "Sanders",
        "Randers"
    ],
    answer: "Sanders"
},

{
    question: "The first phase of Middle English literature covers the period",
    option: [
        "AD 950 – AD 1350",
        "AD 1050 – AD 1215",
        "AD 1150 – AD 1215",
        "None of these"
    ],
    answer: "AD 1150 – AD 1215"
},

{
    question: "Who has Composed the poem, 'Fire-Hymn'?",
    option: [
        "K.N. Daruwalla",
        "Kamala Das",
        "J. Mahapatra",
        "None of these"
    ],
    answer: "K.N. Daruwalla"
},

{
    question: "The prams are —",
    option: [
        "running",
        "standing",
        "lying",
        "rolling"
    ],
    answer: "rolling"
},

{
    question: "............ drives his parents from their house.",
    option: [
        "Johnson",
        "Benjy",
        "Sanders",
        "Florence"
    ],
    answer: "Benjy"
},

{
    question: "The poetic device, which is used in the poem, ‘An Epitaph’ is—",
    option: [
        "metaphor",
        "simile",
        "personification",
        "ambiguity"
    ],
    answer: "ambiguity"
},

{
    question: "Macavity is the settlement of—",
    option: [
        "Bcotyard",
        "Mctoyard",
        "Scotyard",
        "None of these"
    ],
    answer: "Scotyard"
},

{
    question: "Middle English covers –",
    option: [
        "AD 449 – AD 1066",
        "AD 1067.- AD 1099",
        "AD 1100 – AD 1149",
        "AD 1150 – AD 1500"
    ],
    answer: "AD 1150 – AD 1500"
},

{
    question: "After how many years, Johnsons couple realised that their only son was not quite like others and so took him to a doctor ?",
    option: [
        "15",
        "20",
        "25",
        "30"
    ],
    answer: "30"
},

{
    question: "Indian glory is that it is—",
    option: [
        "immovable",
        "movable",
        "uncivilised",
        "ignorant"
    ],
    answer: "immovable"
},

{
    question: "During the __century, an intelectual movement swept in Europe.",
    option: [
        "14th",
        "15th",
        "16th",
        "17th"
    ],
    answer: "15th"
},

{
    question: "Macavity's powers of levitation would make a stare.",
    option: [
        "saint",
        "devil",
        "fakir",
        "None of these"
    ],
    answer: "fakir"
},

{
    question: "Rupert Brooke died in the year-",
    option: [
        "1905",
        "1915",
        "1925",
        "1917"
    ],
    answer: "1915"
},

{
    question: "'Ode To Autumn' is written by-",
    option: [
        "John Donne",
        "John Keats",
        "Walt Whitman",
        "T.S. Eliot"
    ],
    answer: "John Keats"
},

{
    question: "H.E. Bates' first novel was published when he was only",
    option: [
        "20 years old",
        "21 years old",
        "25 years old",
        "30 years old"
    ],
    answer: "21 years old"
},

{
    question: "Human life is no better than —",
    option: [
        "life",
        "death",
        "journey",
        "None of these"
    ],
    answer: "death"
},

{
    question: "Benjy told his parents to eat in the –",
    option: [
        "drawing room",
        "bathroom",
        "bedroom",
        "kitchen"
    ],
    answer: "kitchen"
},

{
    question: "‘Leaves of Grass’ a collection of poetry, known for its free rhythms is written by-",
    option: [
        "W.H. Auden",
        "Walt Whitman",
        "T.S. Eliot",
        "John Keats"
    ],
    answer: "Walt Whitman"
},

{
    question: "Nanukaka was related to the narrator as he was his mother’s—",
    option: [
        "uncle",
        "father",
        "brother",
        "None of these"
    ],
    answer: "brother"
},

{
    question: "Walter De La Mare was born in-",
    option: [
        "1863",
        "1883",
        "1882",
        "1873"
    ],
    answer: "1873"
},

{
    question: "Germaine Greer has written the lesson—",
    option: [
        "A Marriage Proposal",
        "A Child is Born",
        "The Earth",
        "The Artist"
    ],
    answer: "A Child is Born"
},

{
    question: "'Ode To Autumn' is written in-",
    option: [
        "October 1819",
        "September 1819",
        "November 1819",
        "December 1819"
    ],
    answer: "September 1819"
},

{
    question: "Sahitya Akademi Award was given to Keki N. Daruwala in-",
    option: [
        "1964",
        "1974",
        "1984",
        "1978"
    ],
    answer: "1984"
},

{
    question: "During pregnancy the best place for the woman is—",
    option: [
        "hotel",
        "in-laws-family",
        "her mother’s house",
        "None of these"
    ],
    answer: "her mother’s house"
},

{
    question: "'Behind my bedroom’s door like a brooding' is written by—",
    option: [
        "Rupert Brooke",
        "Kamala Das",
        "Keki N. Daruwalla",
        "T.S. Eliot"
    ],
    answer: "Kamala Das"
},

{
    question: "When was peal S. Buck born ?",
    option: [
        "1865",
        "1832",
        "1892",
        "1842"
    ],
    answer: "1892"
},

{
    question: "Indian civilization is —",
    option: [
        "godless",
        "based on belief in God",
        "based on partiality",
        "based on matter"
    ],
    answer: "based on belief in God"
},

{
    question: "The poet (John Donne) is better than the —",
    option: [
        "moon",
        "sun",
        "earth",
        "sky"
    ],
    answer: "sun"
},

{
    question: "The word ‘England’ is used in the poem for how many times ?",
    option: [
        "Eight",
        "Six",
        "Four",
        "Five"
    ],
    answer: "Four"
},

{
    question: "Germaine Greer is an ............... writer.",
    option: [
        "Indian",
        "American",
        "British",
        "Australian"
    ],
    answer: "Australian"
},

{
    question: "The cremation of dead bodies in ................ are somewhat different.",
    option: [
        "Parsi",
        "Muslim",
        "Hindu",
        "Christian"
    ],
    answer: "Parsi"
},

{
    question: "The curio-dealer sold the gourd to a wealthy collecter for …..yen.",
    option: [
        "400",
        "500",
        "600",
        "700"
    ],
    answer: "600"
},

{
    question: "For many years Benjy’s father had been a local",
    option: [
        "doctor",
        "teacher",
        "preacher",
        "farmer"
    ],
    answer: "preacher"
},

{
    question: "The superstition associated with acquiring new clothes and instruments for baby before the birth is considered as-",
    option: [
        "Good luck",
        "Bad luck",
        "Ghost luck",
        "Community luck"
    ],
    answer: "Bad luck"
},

{
    question: "The speaker where once was loved, the house belonged to her-",
    option: [
        "Father",
        "Husband",
        "son",
        "Grandmother"
    ],
    answer: "Father"
},

{
    question: "The poem describes the scene of a-",
    option: [
        "Fire place",
        "Burning ghat",
        "Riot",
        "River"
    ],
    answer: "Burning ghat"
},

{
    question: "'My Grandmother’s House' published in —",
    option: [
        "'Descendants'",
        "'Summer in Calcutta'",
        "The Old Playhouse and Other Poems",
        "None of these"
    ],
    answer: "'Summer in Calcutta'"
},

{
    question: "John Donne has written the poem—",
    option: [
        "Song of Myself",
        "An Epitaph",
        "Sweetest Love I Do Not Goe",
        "The Soilder"
    ],
    answer: "Sweetest Love I Do Not Goe"
},

{
    question: "‘SNAKE’ is written by-",
    option: [
        "W.H. Auden",
        "T.S. Eliot",
        "D.H. Lawrence",
        "John Donne"
    ],
    answer: "D.H. Lawrence"
},

{
    question: "Who has got a heart condition, with palpitations all the time?",
    option: [
        "Choobookov",
        "Chekhov",
        "Lomov",
        "Natalia"
    ],
    answer: "Lomov"
},

{
    question: "Martin Luther King | Jr. dislikes ……… discrimination.",
    option: [
        "caste",
        "sex",
        "religion",
        "racial"
    ],
    answer: "racial"
},

{
    question: "………… brought a lot of erudition and wealth of Knowledge to the Presidensy.",
    option: [
        "Dr. Zakir Hussain",
        "Dr. Rajendra Prasad",
        "Gyani Zail Singh",
        "Dr. Radha Krishnan"
    ],
    answer: "Dr. Radha Krishnan"
},

{
    question: "The great lesson that India had to teach to west was-",
    option: [
        "Love and peace",
        "Humanity",
        "Knowledge",
        "Its culture and tradition"
    ],
    answer: "Its culture and tradition"
},

{
    question: "Autumn is a season of mellow",
    option: [
        "no wind",
        "fruitlessness",
        "fruitfulness",
        "None of these"
    ],
    answer: "fruitfulness"
},

{
    question: "Every human death by starvation is preceded by a long period of—",
    option: [
        "sorrow",
        "anxiety",
        "happiness",
        "None of these"
    ],
    answer: "anxiety"
},

{
    question: "Wordsworth was a –",
    option: [
        "novelist",
        "dramatist",
        "poet",
        "None of these"
    ],
    answer: "poet"
},

{
    question: "The doctor advised the parents to give to Benjy",
    option: [
        "medicine",
        "toys",
        "some work",
        "None of these"
    ],
    answer: "some work"
},

{
    question: "Indian peasants are poorer than their ............ counter parts.",
    option: [
        "Pakistani",
        "Chinese",
        "Srilanka",
        "Russian"
    ],
    answer: "Chinese"
},

{
    question: "‘Revolt of Islam’ was written by –",
    option: [
        "Lord Byron",
        "Shelly",
        "John Keats",
        "None of these"
    ],
    answer: "Shelly"
},

{
    question: "Who is the author of the prose piece ‘A Child Is Born’ ?",
    option: [
        "NermanGeer",
        "Germaine Greer",
        "NermaneGreeri",
        "H.E. Bates"
    ],
    answer: "Germaine Greer"
},

{
    question: "The dust stands for the ...............",
    option: [
        "leader",
        "teacher",
        "farmer",
        "soldier"
    ],
    answer: "soldier"
},

{
    question: "Walter de la Mare has written the poem —",
    option: [
        "The Soldier",
        "Fire-Hymn",
        "Snake",
        "An Epitaph"
    ],
    answer: "An Epitaph"
},

{
    question: "The snake looked at the speaker-",
    option: [
        "Roughly",
        "Vaguely",
        "Calmly",
        "Fiercely"
    ],
    answer: "Vaguely"
},

{
    question: "The ................ forgets its dead because sometimes it leaves the dead body half burnt.",
    option: [
        "man",
        "animal",
        "five",
        "None of these"
    ],
    answer: "five"
},

{
    question: "What moved freely in the silent house ?",
    option: [
        "Dogs",
        "Snakes",
        "Cockroaches",
        "Lizard"
    ],
    answer: "Snakes"
},

{
    question: "'Ode to Autumn' is written by-",
    option: [
        "John Donne",
        "John Keats",
        "Kamala Das",
        "T.S. Eliot"
    ],
    answer: "John Keats"
},

{
    question: "'Ode To Autumn' consists of-",
    option: [
        "four stanzas",
        "three stanzas",
        "five stanzas",
        "six stanzas"
    ],
    answer: "three stanzas"
},

{
    question: "Traditional method of child-birth is accepted—",
    option: [
        "fearfully",
        "dangerously",
        "culturally and collectively",
        "None of these"
    ],
    answer: "culturally and collectively"
},

{
    question: "……………. gave England its name and language.",
    option: [
        "Indians",
        "Anglo-Saxons",
        "Romans",
        "None of these"
    ],
    answer: "Anglo-Saxons"
},

{
    question: "In .......... new leaves and fruits come out on trees.",
    option: [
        "spring",
        "autumn",
        "summer",
        "winter"
    ],
    answer: "autumn"
},

{
    question: "‘Light of step and heart was she’ is taken from—",
    option: [
        "Fire-Hymn",
        "Snake",
        "An Epitaph",
        "The Soldier"
    ],
    answer: "An Epitaph"
},

{
    question: "The ............ has become dumb to see the leafless trees.",
    option: [
        "hen",
        "sparrow",
        "nightingale",
        "peacock"
    ],
    answer: "nightingale"
},

{
    question: "……….. is a desert state of the USA.",
    option: [
        "Mississippi",
        "Alabama",
        "Georgia",
        "None of these"
    ],
    answer: "Mississippi"
},

{
    question: "Auden won the Pulitzer prize in—",
    option: [
        "1947",
        "1948",
        "1949",
        "1950"
    ],
    answer: "1948"
},

{
    question: "When did the speaker of 'My Grandmother’s House' live with her grandmother?",
    option: [
        "during her childhood",
        "during her adolescence",
        "during her youth",
        "None of these"
    ],
    answer: "during her childhood"
},

{
    question: "‘Nurse’s flowers will not last’ is a line written by—",
    option: [
        "John Keats",
        "John Donne",
        "Walt Whitman",
        "W.H. Auden"
    ],
    answer: "W.H. Auden"
},

{
    question: "Benjey’s parents did not like ............ because of grey",
    option: [
        "Rekha",
        "Shikha",
        "Mary",
        "Florence"
    ],
    answer: "Florence"
},

{
    question: "………….. Was a spiritual leader than a politician.",
    option: [
        "Nehruji",
        "Sardar Patel",
        "Mahatma Gandhi",
        "Indira Gandhi"
    ],
    answer: "Mahatma Gandhi"
},

{
    question: "The young Indian intellectuals were disappointed with the",
    option: [
        "English",
        "American",
        "Chinese",
        "Japanese"
    ],
    answer: "English"
},

{
    question: "Nanukaka travelled in-",
    option: [
        "the A.C. Class",
        "the Second Class",
        "the Third Class",
        "the First Class"
    ],
    answer: "the Second Class"
},

{
    question: "H.E. Bates belonged to-",
    option: [
        "America",
        "England",
        "Germany",
        "Italy"
    ],
    answer: "England"
},

{
    question: "For many years Benjy’s father had been a-",
    option: [
        "Teacher",
        "Local preacher",
        "Banker",
        "Runner"
    ],
    answer: "Local preacher"
},

{
    question: "‘Simple living and high thinking’ is the base of —",
    option: [
        "American Civilization",
        "Indian Civilization",
        "European Civilization",
        "None of these"
    ],
    answer: "Indian Civilization"
},

{
    question: "Johnson vented land from",
    option: [
        "Sanders",
        "Randers",
        "Panders",
        "Landers"
    ],
    answer: "Sanders"
},

{
    question: "Every newspaper is shackled to its own set of",
    option: [
        "landlords",
        "overloads",
        "overlords",
        "editors"
    ],
    answer: "overlords"
},

{
    question: "The poem ............ is a sonnet.",
    option: [
        "Fire-Hymn",
        "The Soldier",
        "Song of Myself",
        "Snake"
    ],
    answer: "The Soldier"
},

{
    question: "Buck’s family doctor was",
    option: [
        "English",
        "Indian",
        "American",
        "Chinese"
    ],
    answer: "Indian"
},

{
    question: "The place where the soldier would be buried should be treated as the part of ............ after his death.",
    option: [
        "Germany",
        "France",
        "Italy",
        "England"
    ],
    answer: "England"
},

{
    question: "Daruwalla has been a well-known poet as well as a—",
    option: [
        "dramatist",
        "novelist",
        "short-story-writer",
        "None of these"
    ],
    answer: "short-story-writer"
},

{
    question: "‘An Epitaph’ is a-",
    option: [
        "Story",
        "Monologue",
        "Essay",
        "Poetry"
    ],
    answer: "Poetry"
},

{
    question: "Benjy had understood that the hens exists for the purpose of",
    option: [
        "paying",
        "laying eggs",
        "eating",
        "selling"
    ],
    answer: "laying eggs"
},

{
    question: "Racial discrimination is against –",
    option: [
        "capitalism",
        "power",
        "secularism",
        "human rights"
    ],
    answer: "human rights"
},

{
    question: "‘Hamlet’ is a –",
    option: [
        "tragedy",
        "comedy",
        "farce",
        "None of these"
    ],
    answer: "tragedy"
},

{
    question: "Gibbon is associated with—",
    option: [
        "Italy",
        "Sweden",
        "Russia",
        "America"
    ],
    answer: "Italy"
},

{
    question: "Dr. Zakir Hussain feels greatly obliged to the people of —",
    option: [
        "Pakistan",
        "India",
        "China",
        "Nepal"
    ],
    answer: "India"
},

{
    question: "All that Johnson’s couple had was the-",
    option: [
        "Wealth",
        "Farm",
        "Earth",
        "A shop"
    ],
    answer: "Earth"
},

{
    question: "……………. has the largest number of native speakers.",
    option: [
        "English",
        "Chinese",
        "Urdu",
        "Hindi"
    ],
    answer: "Chinese"
},

{
    question: "In ............... according to the poem ‘Snake’ black snakes are considered innocent.",
    option: [
        "England",
        "Sicily",
        "France",
        "Italy"
    ],
    answer: "Sicily"
},

{
    question: "The people had chosen him the head of the family for –",
    option: [
        "two years",
        "a certain time",
        "for ever",
        "twenty years"
    ],
    answer: "a certain time"
},

{
    question: "The policy of a newspaper is largely determined by—",
    option: [
        "the government",
        "the public",
        "the proprietor",
        "None of these"
    ],
    answer: "the proprietor"
},

{
    question: "In the poem ‘Song of Myself’ the poet for himself.",
    option: [
        "laughs",
        "cries",
        "sings",
        "None of these"
    ],
    answer: "sings"
},

{
    question: "‘A Pinch of Snuff is in fact a detailed character sketch of ………..,",
    option: [
        "Sohan Lal",
        "Nanukaka",
        "Ratiram",
        "Manohar Malgoankar"
    ],
    answer: "Nanukaka"
},

{
    question: "She was reared by her",
    option: [
        "grand-mother",
        "uncle",
        "aunt",
        "missionary parents"
    ],
    answer: "missionary parents"
},

{
    question: "In the second line of the poem, Now The Leaves Are Falling Fast 'Nurse' stands for—",
    option: [
        "a plant",
        "a fruit",
        "a tree",
        "None of these"
    ],
    answer: "a tree"
},

{
    question: "He made the hole to extract –",
    option: [
        "water",
        "flash",
        "seeds",
        "None of these"
    ],
    answer: "seeds"
},

{
    question: "Dr. Zakir Hussain has written the lesson —",
    option: [
        "Indian Civilization and Culture",
        "I Have a Dream",
        "Bharat is My Home",
        "The Artist"
    ],
    answer: "Bharat is My Home"
},

{
    question: "W.H. Auden won the Pulitzer Prize in the year ?",
    option: [
        "1947",
        "1958",
        "1948",
        "1946"
    ],
    answer: "1948"
},

{
    question: "We are more friendly –",
    option: [
        "within the herd",
        "outside the herd",
        "everywhere",
        "nowhere"
    ],
    answer: "within the herd"
},

{
    question: "The present chapter explores the cultural peculiarities of the East and the West regarding parent-child relationship and-",
    option: [
        "Child-death",
        "Child-birth",
        "Male interest",
        "Female interest"
    ],
    answer: "Child-birth"
},

{
    question: "Dorothy died in-",
    option: [
        "1967",
        "1958",
        "1956",
        "1957"
    ],
    answer: "1957"
},

{
    question: "How many times Kimg repeats that ‘we cannot be satisfied’ –",
    option: [
        "two times",
        "three times",
        "five times",
        "six times"
    ],
    answer: "five times"
},

{
    question: "Our forefathers saw that kings and their swords were inferior to-",
    option: [
        "the swords of ethics",
        "the swords of politics",
        "the swords of economics",
        "the swords of treachery"
    ],
    answer: "the swords of ethics"
},

{
    question: "In 'Ode to Autumn' Keats deals with in detail.",
    option: [
        "Spring",
        "Winter",
        "Summer",
        "Autumn"
    ],
    answer: "Autumn"
},

{
    question: "Who called 'Ode To Autumn' Keats' most satisfying of all the odes?",
    option: [
        "Dryden",
        "Coleridge",
        "Wordsworth",
        "Arthur Compton-Rickett."
    ],
    answer: "Arthur Compton-Rickett."
},

{
    question: "‘Venus and Adonis’ was written by –",
    option: [
        "Keats",
        "Shakespeare",
        "Milton",
        "None of these"
    ],
    answer: "Shakespeare"
},

{
    question: "The intellectuals in India were restless and embittered because of",
    option: [
        "war",
        "starvation",
        "slavery",
        "unemployment"
    ],
    answer: "slavery"
},

{
    question: "During her childhood the speaker of 'My Grandmother’s House' lived with her —",
    option: [
        "grandmother",
        "aunt",
        "mother",
        "None of house"
    ],
    answer: "grandmother"
},

{
    question: "The heaviest restriction upon the freedom of public opinion is",
    option: [
        "official",
        "unofficial",
        "both",
        "None of these"
    ],
    answer: "unofficial"
},

{
    question: "Sejbei was.passionately interested in –",
    option: [
        "pumpkin",
        "gounds",
        "potato",
        "None of these"
    ],
    answer: "gounds"
},

{
    question: "Who is the poet of ‘Now The Leaves Are Falling Fast ?",
    option: [
        "John Keats",
        "W. H. Auden",
        "Rupert Brooke",
        "T.S. Eliot"
    ],
    answer: "W. H. Auden"
},

{
    question: "‘A Bent in the Ganges’ is written by –",
    option: [
        "Khushwant Singh",
        "Anita Desai",
        "Manohar Malagaonkar",
        "Joru Dutt AI"
    ],
    answer: "Manohar Malagaonkar"
},

{
    question: "H.E. Bates died in the year-",
    option: [
        "1984",
        "1974",
        "1965",
        "1898"
    ],
    answer: "1974"
},

{
    question: "Dr. Zakir Hussain delivered his in 1967 after taking the oath of the —",
    option: [
        "President",
        "Governer",
        "Chief Minister",
        "Minister"
    ],
    answer: "President"
},

{
    question: "The two broad categories of ideas that have helped mankind-",
    option: [
        "Imagination and knowledge",
        "Dream and skill",
        "Knowledge and technique",
        "Concern and humanity"
    ],
    answer: "Knowledge and technique"
},

{
    question: "When was Bertrand Russell born ?",
    option: [
        "1862",
        "1870",
        "1875",
        "1872"
    ],
    answer: "1872"
},

{
    question: "Standerd Pritish speech is known as –",
    option: [
        "RP",
        "AP",
        "IP",
        "None of these"
    ],
    answer: "RP"
},

{
    question: "‘India Through a Traveller’s Eyes’ has been written by",
    option: [
        "Shiga Naoya",
        "Pearl S. Buck",
        "Anton Chekhov",
        "Germaine Greer"
    ],
    answer: "Pearl S. Buck"
},

{
    question: "Who was composed the poem. 'My Grandmother’s House'?",
    option: [
        "Kamala Das",
        "A.K. Ramanujan",
        "Sarojini Naidu",
        "None of these"
    ],
    answer: "Kamala Das"
},

{
    question: "The common has a ........... in parliament.",
    option: [
        "seat",
        "place",
        "vote",
        "standard"
    ],
    answer: "vote"
},

{
    question: "Germaine Greer was born in-",
    option: [
        "1838",
        "1938",
        "1939",
        "1949"
    ],
    answer: "1939"
},

{
    question: "says that he is having a heart failure,",
    option: [
        "Choobookov",
        "Lomov",
        "Natalia",
        "None of these"
    ],
    answer: "Lomov"
},

{
    question: "Who is the poet of ‘Song of Myself’?",
    option: [
        "W.H. Auden",
        "John Keats",
        "Walt Whitman",
        "T.S. Eliot"
    ],
    answer: "Walt Whitman"
},

{
    question: "‘Paradis. Regained’ was written by –",
    option: [
        "Shakespeare",
        "Keats",
        "Milton",
        "None of these"
    ],
    answer: "Milton"
},

{
    question: "The speaker in 'Fire-Hymn' belongs to .......... religion.",
    option: [
        "Indian",
        "African",
        "Zoroastrian",
        "Nigerian"
    ],
    answer: "Zoroastrian"
},

{
    question: "Queen Elizabeth II honoured him with the ‘Order of Merit’ in-",
    option: [
        "1943",
        "1933",
        "1953",
        "1952"
    ],
    answer: "1953"
},

{
    question: "Macavity is the .......... of Scotland Yard.",
    option: [
        "despair",
        "bafflement",
        "frustration",
        "None of these"
    ],
    answer: "bafflement"
},

{
    question: "A snake appears on a trough of the ............... to sip water.",
    option: [
        "doctor",
        "teacher",
        "poet",
        "None of these"
    ],
    answer: "poet"
},

{
    question: "Freedom of Press works to secure and sustain the Central doctrine of-",
    option: [
        "State",
        "Democracy",
        "Public",
        "Personal interests"
    ],
    answer: "Democracy"
},

{
    question: "In traditional society a pregnant woman is primarily Supported by",
    option: [
        "husband",
        "kinsfolk",
        "other members of society",
        "None of these"
    ],
    answer: "husband"
},

{
    question: "According to the writer, the skin colour of the Kashmiri is a lovely cream and the features are as classic as the-",
    option: [
        "Indian",
        "British",
        "German",
        "Greek"
    ],
    answer: "Greek"
},

{
    question: "One day Seibei was caught red handed by his ………… teacher.",
    option: [
        "Hindi",
        "Math",
        "Ethics",
        "Hindi"
    ],
    answer: "Ethics"
},

{
    question: "W.H. Auden died in ?",
    option: [
        "1963",
        "1953",
        "1973",
        "1965"
    ],
    answer: "1973"
},

{
    question: "‘I Have a Dream’ is a part of speech delivered by —",
    option: [
        "Bertrand Russell",
        "Shiga Naoya",
        "Martin Luther King | Jr.",
        "H.E. Bates"
    ],
    answer: "Martin Luther King | Jr."
},

{
    question: "Seibi knew every place that sold—",
    option: [
        "fish",
        "meat",
        "gourds",
        "vegetables"
    ],
    answer: "gourds"
},

{
    question: "wants to gladly accept death.",
    option: [
        "Walt Whitman",
        "John Keats",
        "John Donne",
        "T.S. Eliot"
    ],
    answer: "John Donne"
},

{
    question: "After hitting the snake with a log the speaker of the Poem ‘Snake’ wants to—",
    option: [
        "enjoy",
        "expiate",
        "celebrate",
        "None of these"
    ],
    answer: "expiate"
},

{
    question: "For homo sapiens, survival was-",
    option: [
        "No problem",
        "Problem",
        "Very easy",
        "Most easy"
    ],
    answer: "Problem"
},

{
    question: "Who is the speaker in ‘Song of Myself’ (‘I Celebrate Myself’)?",
    option: [
        "Emerson",
        "Robert Frost",
        "Walt Whitman",
        "None of these"
    ],
    answer: "Walt Whitman"
},

{
    question: "'As I consigned my first-born to the flames' is written by—",
    option: [
        "Kamala Das",
        "Rupert Brooke",
        "Keki N. Daruwalla",
        "T.S. Eliot"
    ],
    answer: "Keki N. Daruwalla"
},

{
    question: "Indians, under the British rule, had a life-span of just",
    option: [
        "thirty years",
        "thirty-five years",
        "forty years",
        "twenty-seven years"
    ],
    answer: "twenty-seven years"
},

{
    question: "Benjy got a passbook having pretty money in bank, when he was of the age-",
    option: [
        "Eighteen",
        "Twenty",
        "Twenty-one",
        "Thirty"
    ],
    answer: "Twenty-one"
},

{
    question: ".............. advised the Indians not to blame the Britishers for everything",
    option: [
        "Mahatma gandhi",
        "Shiga Naoya",
        "Pearl S. Buck",
        "H.E. Bates"
    ],
    answer: "Pearl S. Buck"
},
  ];

// --- Helper: Shuffle questions ---
const shuffleQuestions = (questions) => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// --- Component ---
export default function English12thQuiz() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600); // 60 minutes = 3600 seconds
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const resultRef = useRef(null);

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
    const selectedQuestions = shuffleQuestions(englishQuestions).slice(0, 100);
    setQuestions(selectedQuestions);
    setStarted(true);
    setTimer(3600);
    setAnswers({});
    setCurrent(0);
    setShowTimerWarning(false);
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
        isAttempted: answers[i] !== undefined,
      };
    });
    setScore(s);
    setResultDetails(details);
    setSubmitted(true);
  };

  const downloadResult = () => {
    if (resultRef.current) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const content = resultRef.current.innerHTML;
        printWindow.document.write(`
          <html>
            <head>
              <title>English 12th Result</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .result-container { max-width: 800px; margin: 0 auto; }
                .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #1a237e, #3f51b5); color: white; border-radius: 10px; margin-bottom: 20px; }
                .score-card { text-align: center; padding: 20px; border: 2px solid #1a237e; border-radius: 10px; margin-bottom: 20px; }
                .score { font-size: 40px; font-weight: bold; color: #1a237e; }
                .status { font-size: 20px; margin: 10px 0; }
                .pass { color: #28a745; }
                .fail { color: #dc3545; }
                .question-item { padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #48bb78; background: #f8f9fa; }
                .question-item.wrong { border-left-color: #dc3545; background: #fff5f5; }
                .question-item .q { font-weight: bold; font-size: 14px; }
                .question-item .your-answer { margin-top: 5px; font-size: 13px; }
                .question-item .correct-answer { margin-top: 3px; font-size: 13px; color: #28a745; font-weight: bold; }
                .wrong-answer { color: #dc3545; }
                .correct-answer-text { color: #28a745; }
                .not-attempted { color: #ffc107; }
                .footer { text-align: center; margin-top: 20px; padding: 10px; color: #666; font-size: 12px; border-top: 1px solid #ddd; }
              </style>
            </head>
            <body>
              <div class="result-container">
                ${content}
              </div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const getText = (key) => {
    const texts = {
      'title': { en: '📚 English 12th' },
      'subtitle': { en: 'Class 12 English Quiz' },
      'questions': { en: '📝 Questions' },
      'time': { en: '⏱️ Time' },
      'instructions': { en: '📋 Instructions:' },
      'compulsory': { en: 'All questions are compulsory' },
      'marks': { en: 'Each question carries 1 mark' },
      'negative': { en: 'No negative marking' },
      'start': { en: '🚀 Start Quiz' },
      'answered': { en: 'Answered:' },
      'prev': { en: '⬅ Prev' },
      'next': { en: 'Next ➡' },
      'submit': { en: '📤 Submit' },
      'navigator': { en: 'Question Navigator' },
      'answered_status': { en: '🟢 Answered' },
      'current_status': { en: '🔵 Current' },
      'unanswered_status': { en: '⚪ Unanswered' },
      'congrats': { en: '🎉 Excellent Performance!' },
      'practice': { en: '📖 Keep Learning!' },
      'passed': { en: '✔️ Passed' },
      'failed': { en: '❌ Needs Improvement' },
      'review': { en: '📋 Answer Review' },
      'your_answer': { en: 'Your Answer:' },
      'correct_answer': { en: 'Correct Answer:' },
      'new_quiz': { en: '🔄 Take New Quiz' },
      'warning': { en: '⚠️ Less than 1 minute remaining!' },
      'download': { en: '📥 Download Result' },
      'status': { en: 'Status' },
      'correct': { en: 'Correct' },
      'wrong': { en: 'Wrong' },
      'not_attempted': { en: 'Not Attempted' },
    };
    return texts[key]?.['en'] || key;
  };

  // Home Page
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a237e 0%, #283593 50%, #3f51b5 100%)",
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
          width: "100%",
          animation: "fadeInUp 0.6s ease"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📚</div>
          <h1 style={{ 
            color: "#1a237e", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            {getText('title')}
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            {getText('subtitle')}
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #1a237e, #3f51b5)",
            margin: "10px auto",
            width: "60px"
          }}></div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginTop: "10px"
          }}>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('questions')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a237e" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('time')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a237e" }}>60 Mins</div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#e8f0fe",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "10px",
            fontSize: "12px",
            color: "#1a237e"
          }}>
            💡 Comprehensive coverage of all Class 12 English chapters
          </div>

          <div style={{
            backgroundColor: "#f8f9fa",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "10px",
            fontSize: "12px",
            color: "#555",
            textAlign: "left"
          }}>
            <strong>{getText('instructions')}</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>{getText('compulsory')}</li>
              <li>{getText('marks')}</li>
              <li>{getText('negative')}</li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #1a237e 0%, #3f51b5 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(63, 81, 181, 0.4)"
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            {getText('start')}
          </button>
        </div>
      </div>
    );
  }

  // Result Page
  if (submitted) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    const isPassed = percentage >= 60;
    return (
      <div style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <div ref={resultRef} style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "25px 20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
            marginBottom: "20px",
            animation: "slideIn 0.5s ease"
          }}>
            <div className="header" style={{
              background: "linear-gradient(135deg, #1a237e, #3f51b5)",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}>
              <h1 style={{ margin: "0", fontSize: "22px" }}>{getText('title')}</h1>
              <p style={{ margin: "5px 0 0", fontSize: "12px", opacity: 0.9 }}>
                Class 12 English Quiz
              </p>
            </div>
            
            <h2 style={{ 
              fontSize: "20px", 
              marginBottom: "5px",
              color: "#2d3748"
            }}>
              {isPassed ? getText('congrats') : getText('practice')}
            </h2>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#1a237e" }}>
              {score} <span style={{ fontSize: "20px", color: "#888" }}>/ {questions.length}</span>
            </div>
            <div style={{ 
              fontSize: "18px", 
              color: isPassed ? "#28a745" : "#dc3545", 
              marginTop: "5px",
              fontWeight: "600"
            }}>
              {percentage}% {isPassed ? getText('passed') : getText('failed')}
            </div>
            <div style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "#718096"
            }}>
              Language: English • {getText('negative')}
            </div>

            <div style={{
              marginTop: "15px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "10px",
              fontSize: "13px"
            }}>
              <div style={{ backgroundColor: "#d4edda", padding: "8px", borderRadius: "8px", color: "#155724" }}>
                ✅ {getText('correct')}: {resultDetails.filter(r => r.isCorrect).length}
              </div>
              <div style={{ backgroundColor: "#f8d7da", padding: "8px", borderRadius: "8px", color: "#721c24" }}>
                ❌ {getText('wrong')}: {resultDetails.filter(r => !r.isCorrect && r.isAttempted).length}
              </div>
              <div style={{ backgroundColor: "#fff3cd", padding: "8px", borderRadius: "8px", color: "#856404" }}>
                ⚪ {getText('not_attempted')}: {resultDetails.filter(r => !r.isAttempted).length}
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={downloadResult}
              style={{
                padding: "12px 30px",
                fontSize: "15px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(72, 187, 120, 0.4)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              {getText('download')}
            </button>
          </div>

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
              {getText('review')}
            </h2>
            {resultDetails.map((item, index) => (
              <div
                key={index}
                className={item.isCorrect ? '' : 'wrong'}
                style={{
                  backgroundColor: item.isCorrect ? "#f0fff4" : 
                                   item.isAttempted ? "#fff5f5" : "#fff3cd",
                  borderLeft: `4px solid ${item.isCorrect ? "#48bb78" : 
                              item.isAttempted ? "#fc8181" : "#ffc107"}`,
                  padding: "12px 15px",
                  marginBottom: "12px",
                  borderRadius: "8px",
                  animation: `fadeIn 0.3s ease ${index * 0.05}s`
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
                    {item.isCorrect ? "✅" : item.isAttempted ? "❌" : "⚪"}
                  </span>
                </div>
                <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                  <p style={{ margin: "3px 0" }}>
                    <strong>{getText('your_answer')}</strong>{" "}
                    <span style={{ 
                      color: item.isCorrect ? "#48bb78" : 
                             item.isAttempted ? "#dc3545" : "#ffc107",
                      fontWeight: item.isAttempted ? "bold" : "normal"
                    }}>
                      {item.userAnswer}
                    </span>
                    {!item.isAttempted && (
                      <span style={{ color: "#ffc107", marginLeft: "5px" }}>
                        ({getText('not_attempted')})
                      </span>
                    )}
                  </p>
                  {!item.isCorrect && (
                    <p style={{ margin: "3px 0" }}>
                      <strong>{getText('correct_answer')}</strong>{" "}
                      <span style={{ color: "#48bb78", fontWeight: "bold" }}>{item.correctAnswer}</span>
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
                setQuestions([]);
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #1a237e 0%, #3f51b5 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(63, 81, 181, 0.4)",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              {getText('new_quiz')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Page
  const q = questions[current] || { question: "", option: [], answer: "" };
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
              {getText('answered')} {answeredCount}/{questions.length}
            </p>
          </div>
          <div style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: timer < 60 ? "#fc8181" : "#1a237e",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}>
            <span style={{ fontSize: "16px" }}>⏱️</span>
            <span>{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}</span>
          </div>
        </div>

        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "10px",
          animation: "fadeIn 0.3s ease"
        }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "#e8f0fe",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#1a237e",
            marginBottom: "12px"
          }}>
            📌 English 12th
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#1a237e",
            marginBottom: "16px",
            fontWeight: "600",
            lineHeight: "1.5"
          }}>
            {q.question}
          </h3>

          <div style={{ marginTop: "5px" }}>
            {q.option && q.option.map((op, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 12px",
                  margin: "5px 0",
                  backgroundColor: answers[current] === op ? "#ebf8ff" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #3f51b5" : "2px solid transparent",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  transform: answers[current] === op ? "scale(1.01)" : "scale(1)"
                }}
                onClick={() => setAnswers({ ...answers, [current]: op })}
                onMouseEnter={(e) => {
                  if (answers[current] !== op) {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                    e.currentTarget.style.transform = "scale(1.005)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (answers[current] !== op) {
                    e.currentTarget.style.backgroundColor = "#f7fafc";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#3f51b5",
                color: current === 0 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (current !== 0) {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 4px 12px rgba(63, 81, 181, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              {getText('prev')}
            </button>
            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#3f51b5",
                color: current === questions.length - 1 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === questions.length - 1 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (current !== questions.length - 1) {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 4px 12px rgba(63, 81, 181, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              {getText('next')}
            </button>
          </div>

          <button
            onClick={submitExam}
            style={{
              padding: "8px 18px",
              fontSize: "13px",
              backgroundColor: "#48bb78",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(72, 187, 120, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 4px 15px rgba(72, 187, 120, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 2px 8px rgba(72, 187, 120, 0.3)";
            }}
          >
            {getText('submit')}
          </button>
        </div>

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
            {getText('navigator')}
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
                                   current === idx ? "#3f51b5" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #3f51b5" : "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  transform: answers[idx] ? "scale(1.05)" : "scale(1)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = answers[idx] ? "scale(1.05)" : "scale(1)";
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
            <span>{getText('answered_status')}</span>
            <span>{getText('current_status')}</span>
            <span>{getText('unanswered_status')}</span>
          </div>
        </div>

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
            {getText('warning')}
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(0.98); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}