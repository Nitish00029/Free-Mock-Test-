// SSCCGLMockTest.jsx
import React, { useState, useEffect } from "react";

// =====================================================
// MATHEMATICS (25) - Hindi
// =====================================================
const mathHi = [
  { question: "25 + 37 क्या है?", options: ["52", "62", "72", "82"], answer: "62" },
  { question: "15 × 6 क्या है?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "144 का वर्गमूल क्या है?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "100 ÷ 4 क्या है?", options: ["20", "25", "30", "35"], answer: "25" },
  { question: "3⁴ क्या है?", options: ["27", "54", "81", "108"], answer: "81" },
  { question: "7 × 8 क्या है?", options: ["48", "54", "56", "64"], answer: "56" },
  { question: "45 + 56 क्या है?", options: ["99", "100", "101", "102"], answer: "101" },
  { question: "12 × 12 क्या है?", options: ["124", "134", "144", "154"], answer: "144" },
  { question: "π (पाई) का अनुमानित मान क्या है?", options: ["3.14", "3.41", "3.13", "3.11"], answer: "3.14" },
  { question: "1/2 + 1/2 क्या है?", options: ["1/4", "1/2", "1", "2"], answer: "1" },
  { question: "5! (फैक्टोरियल) क्या है?", options: ["20", "60", "120", "240"], answer: "120" },
  { question: "200 का 25% क्या है?", options: ["25", "50", "75", "100"], answer: "50" },
  { question: "5, 10, 15 का औसत क्या है?", options: ["8", "10", "12", "15"], answer: "10" },
  { question: "18 × 5 क्या है?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "144 ÷ 12 क्या है?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "2⁶ क्या है?", options: ["32", "48", "64", "72"], answer: "64" },
  { question: "9 × 9 क्या है?", options: ["71", "81", "91", "99"], answer: "81" },
  { question: "150 + 250 क्या है?", options: ["300", "350", "400", "450"], answer: "400" },
  { question: "500 का 20% क्या है?", options: ["50", "80", "100", "120"], answer: "100" },
  { question: "12 और 18 का LCM क्या है?", options: ["24", "36", "48", "72"], answer: "36" },
  { question: "11 × 11 क्या है?", options: ["111", "121", "131", "141"], answer: "121" },
  { question: "72 ÷ 8 क्या है?", options: ["7", "8", "9", "10"], answer: "9" },
  { question: "300 का 30% क्या है?", options: ["60", "70", "80", "90"], answer: "90" },
  { question: "24 और 36 का HCF क्या है?", options: ["6", "8", "10", "12"], answer: "12" },
  { question: "0.5 × 0.5 क्या है?", options: ["0.25", "0.5", "0.75", "1.0"], answer: "0.25" },
];

// MATHEMATICS (25) - English
const mathEn = [
  { question: "What is 25 + 37?", options: ["52", "62", "72", "82"], answer: "62" },
  { question: "What is 15 × 6?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "35"], answer: "25" },
  { question: "What is 3⁴?", options: ["27", "54", "81", "108"], answer: "81" },
  { question: "What is 7 × 8?", options: ["48", "54", "56", "64"], answer: "56" },
  { question: "What is 45 + 56?", options: ["99", "100", "101", "102"], answer: "101" },
  { question: "What is 12 × 12?", options: ["124", "134", "144", "154"], answer: "144" },
  { question: "What is the approximate value of π?", options: ["3.14", "3.41", "3.13", "3.11"], answer: "3.14" },
  { question: "What is 1/2 + 1/2?", options: ["1/4", "1/2", "1", "2"], answer: "1" },
  { question: "What is 5! (factorial)?", options: ["20", "60", "120", "240"], answer: "120" },
  { question: "What is 25% of 200?", options: ["25", "50", "75", "100"], answer: "50" },
  { question: "What is the average of 5, 10, 15?", options: ["8", "10", "12", "15"], answer: "10" },
  { question: "What is 18 × 5?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is 144 ÷ 12?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is 2⁶?", options: ["32", "48", "64", "72"], answer: "64" },
  { question: "What is 9 × 9?", options: ["71", "81", "91", "99"], answer: "81" },
  { question: "What is 150 + 250?", options: ["300", "350", "400", "450"], answer: "400" },
  { question: "What is 20% of 500?", options: ["50", "80", "100", "120"], answer: "100" },
  { question: "What is the LCM of 12 and 18?", options: ["24", "36", "48", "72"], answer: "36" },
  { question: "What is 11 × 11?", options: ["111", "121", "131", "141"], answer: "121" },
  { question: "What is 72 ÷ 8?", options: ["7", "8", "9", "10"], answer: "9" },
  { question: "What is 30% of 300?", options: ["60", "70", "80", "90"], answer: "90" },
  { question: "What is the HCF of 24 and 36?", options: ["6", "8", "10", "12"], answer: "12" },
  { question: "What is 0.5 × 0.5?", options: ["0.25", "0.5", "0.75", "1.0"], answer: "0.25" },
];

// REASONING (25) - Hindi
const reasoningHi = [
  { question: "विषम को खोजें: 2, 4, 6, 9", options: ["2", "4", "6", "9"], answer: "9" },
  { question: "यदि 'APPLE' को 'BQQMF' लिखा जाता है, तो 'MANGO' को क्या लिखा जाएगा?", options: ["NBOF", "NBPH", "NBOH", "NBOI"], answer: "NBOH" },
  { question: "अगली संख्या ज्ञात करें: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], answer: "30" },
  { question: "कौन सा शब्द भिन्न है? सेब, आम, गाजर, केला", options: ["सेब", "आम", "गाजर", "केला"], answer: "गाजर" },
  { question: "अगला अक्षर: A, C, E, G, ?", options: ["H", "I", "J", "K"], answer: "I" },
  { question: "यदि 2=5, 3=10, 4=17, तो 5=?", options: ["22", "24", "26", "28"], answer: "26" },
  { question: "लुप्त संख्या: 2, 5, 10, 17, ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "विषम शब्द: मेज, कुर्सी, स्टूल, किताब", options: ["मेज", "कुर्सी", "स्टूल", "किताब"], answer: "किताब" },
  { question: "यदि 'PEN' को 'QFO' लिखा जाता है, तो 'BOOK' को क्या?", options: ["CPPL", "CQPL", "CPQL", "CQOL"], answer: "CPPL" },
  { question: "अगली संख्या: 1, 4, 9, 16, ?", options: ["20", "22", "25", "30"], answer: "25" },
  { question: "विषम: कार, बस, बाइक, हवाई जहाज", options: ["कार", "बस", "बाइक", "हवाई जहाज"], answer: "हवाई जहाज" },
  { question: "यदि A=1, B=2, तो Z=?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "अगला: 3, 8, 13, 18, ?", options: ["21", "22", "23", "24"], answer: "23" },
  { question: "यदि 'CAT' को 'DBU' लिखा जाता है, तो 'DOG' को क्या?", options: ["EPH", "EPI", "EQH", "EPG"], answer: "EPH" },
  { question: "अगला: Z, X, V, T, ?", options: ["R", "S", "Q", "P"], answer: "R" },
  { question: "लुप्त: 7, 14, 28, 56, ?", options: ["84", "96", "102", "112"], answer: "112" },
  { question: "यदि 3=7, 4=13, 5=21, तो 6=?", options: ["27", "29", "31", "33"], answer: "31" },
  { question: "अगली: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], answer: "13" },
  { question: "अगला: 2, 4, 8, 16, 32, ?", options: ["48", "56", "64", "72"], answer: "64" },
  { question: "लुप्त: 9, 16, 25, 36, ?", options: ["49", "50", "52", "54"], answer: "49" },
  { question: "विषम: पृथ्वी, मंगल, बृहस्पति, सूर्य, शुक्र", options: ["पृथ्वी", "मंगल", "बृहस्पति", "सूर्य", "शुक्र"], answer: "सूर्य" },
  { question: "अगला: 1, 3, 6, 10, 15, ?", options: ["18", "20", "21", "22"], answer: "21" },
  { question: "यदि 'TIGER' को 'UJHFS' लिखा जाता है, तो 'LION' को क्या?", options: ["MJPO", "MJPP", "MKPO", "MJPN"], answer: "MJPO" },
  { question: "अगली: 0, 1, 1, 2, 3, 5, 8, 13, ?", options: ["18", "20", "21", "22"], answer: "21" },
];

// REASONING (25) - English
const reasoningEn = [
  { question: "Find the odd one out: 2, 4, 6, 9", options: ["2", "4", "6", "9"], answer: "9" },
  { question: "If 'APPLE' is coded as 'BQQMF', what is 'MANGO' coded as?", options: ["NBOF", "NBPH", "NBOH", "NBOI"], answer: "NBOH" },
  { question: "Find the next number: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], answer: "30" },
  { question: "Which word does not belong? Apple, Mango, Carrot, Banana", options: ["Apple", "Mango", "Carrot", "Banana"], answer: "Carrot" },
  { question: "What comes next: A, C, E, G, ?", options: ["H", "I", "J", "K"], answer: "I" },
  { question: "If 2=5, 3=10, 4=17, then 5=?", options: ["22", "24", "26", "28"], answer: "26" },
  { question: "Find the missing number: 2, 5, 10, 17, ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "Choose the odd word: Table, Chair, Stool, Book", options: ["Table", "Chair", "Stool", "Book"], answer: "Book" },
  { question: "If 'PEN' is coded as 'QFO', what is 'BOOK' coded as?", options: ["CPPL", "CQPL", "CPQL", "CQOL"], answer: "CPPL" },
  { question: "What is the next number: 1, 4, 9, 16, ?", options: ["20", "22", "25", "30"], answer: "25" },
  { question: "Find the odd one out: Car, Bus, Bike, Airplane", options: ["Car", "Bus", "Bike", "Airplane"], answer: "Airplane" },
  { question: "If 'A' = 1, 'B' = 2, then 'Z' = ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "What comes next: 3, 8, 13, 18, ?", options: ["21", "22", "23", "24"], answer: "23" },
  { question: "If 'CAT' is coded as 'DBU', then 'DOG' is coded as?", options: ["EPH", "EPI", "EQH", "EPG"], answer: "EPH" },
  { question: "What comes next: Z, X, V, T, ?", options: ["R", "S", "Q", "P"], answer: "R" },
  { question: "Find the missing number: 7, 14, 28, 56, ?", options: ["84", "96", "102", "112"], answer: "112" },
  { question: "If 3=7, 4=13, 5=21, then 6=?", options: ["27", "29", "31", "33"], answer: "31" },
  { question: "What is the next number: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], answer: "13" },
  { question: "What comes next: 2, 4, 8, 16, 32, ?", options: ["48", "56", "64", "72"], answer: "64" },
  { question: "Find the missing number: 9, 16, 25, 36, ?", options: ["49", "50", "52", "54"], answer: "49" },
  { question: "Choose the odd word: Earth, Mars, Jupiter, Sun, Venus", options: ["Earth", "Mars", "Jupiter", "Sun", "Venus"], answer: "Sun" },
  { question: "What comes next: 1, 3, 6, 10, 15, ?", options: ["18", "20", "21", "22"], answer: "21" },
  { question: "If 'TIGER' is coded as 'UJHFS', what is 'LION' coded as?", options: ["MJPO", "MJPP", "MKPO", "MJPN"], answer: "MJPO" },
  { question: "What is the next number: 0, 1, 1, 2, 3, 5, 8, 13, ?", options: ["18", "20", "21", "22"], answer: "21" },
];

// GK (25) - Hindi
const gkHi = [
  { question: "पानी का रासायनिक सूत्र क्या है?", options: ["H2O", "CO2", "NaCl", "HCl"], answer: "H2O" },
  { question: "किस ग्रह को 'लाल ग्रह' कहा जाता है?", options: ["शुक्र", "मंगल", "बृहस्पति", "शनि"], answer: "मंगल" },
  { question: "मानव शरीर का सबसे बड़ा अंग कौन सा है?", options: ["यकृत", "हृदय", "त्वचा", "मस्तिष्क"], answer: "त्वचा" },
  { question: "सोने का रासायनिक प्रतीक क्या है?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au" },
  { question: "पौधे वातावरण से कौन सी गैस अवशोषित करते हैं?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"], answer: "कार्बन डाइऑक्साइड" },
  { question: "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?", options: ["सोना", "लोहा", "हीरा", "प्लैटिनम"], answer: "हीरा" },
  { question: "प्रकाश की गति लगभग कितनी है?", options: ["3 × 10⁸ m/s", "3 × 10⁹ m/s", "3 × 10⁷ m/s", "3 × 10⁶ m/s"], answer: "3 × 10⁸ m/s" },
  { question: "सामान्य नमक का रासायनिक सूत्र क्या है?", options: ["NaCl", "NaOH", "HCl", "KCl"], answer: "NaCl" },
  { question: "मानव शरीर में कौन सा अंग रक्त पंप करता है?", options: ["मस्तिष्क", "यकृत", "हृदय", "फेफड़े"], answer: "हृदय" },
  { question: "लोहे का रासायनिक प्रतीक क्या है?", options: ["Fe", "Ir", "In", "I"], answer: "Fe" },
  { question: "पृथ्वी के वायुमंडल में सबसे प्रचुर गैस कौन सी है?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"], answer: "नाइट्रोजन" },
  { question: "पानी का क्वथनांक क्या है?", options: ["90°C", "95°C", "100°C", "105°C"], answer: "100°C" },
  { question: "मीथेन का रासायनिक सूत्र क्या है?", options: ["CH4", "C2H6", "C3H8", "C4H10"], answer: "CH4" },
  { question: "सूर्य के सबसे निकट कौन सा ग्रह है?", options: ["शुक्र", "बुध", "मंगल", "पृथ्वी"], answer: "बुध" },
  { question: "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?", options: ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "भोजन पचाना"], answer: "ऑक्सीजन ले जाना" },
  { question: "चांदी का रासायनिक प्रतीक क्या है?", options: ["Si", "Ag", "Au", "Fe"], answer: "Ag" },
  { question: "पौधों द्वारा भोजन बनाने की प्रक्रिया को क्या कहते हैं?", options: ["श्वसन", "प्रकाश संश्लेषण", "किण्वन", "पाचन"], answer: "प्रकाश संश्लेषण" },
  { question: "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?", options: ["शनि", "बृहस्पति", "नेपच्यून", "यूरेनस"], answer: "बृहस्पति" },
  { question: "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?", options: ["CO", "CO2", "C2O", "C2O2"], answer: "CO2" },
  { question: "पानी का हिमांक क्या है?", options: ["-5°C", "0°C", "5°C", "10°C"], answer: "0°C" },
  { question: "बल की इकाई क्या है?", options: ["न्यूटन", "जूल", "वाट", "पास्कल"], answer: "न्यूटन" },
  { question: "कौन सा विटामिन सूर्य के प्रकाश से बनता है?", options: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"], answer: "विटामिन D" },
  { question: "भारत के वर्तमान प्रधानमंत्री कौन हैं?", options: ["नरेंद्र मोदी", "राहुल गांधी", "अमित शाह", "अरविंद केजरीवाल"], answer: "नरेंद्र मोदी" },
  { question: "भारत की राजधानी क्या है?", options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"], answer: "नई दिल्ली" },
  { question: "भारत का राष्ट्रीय खेल क्या है?", options: ["क्रिकेट", "हॉकी", "फुटबॉल", "बैडमिंटन"], answer: "हॉकी" },
  { question: "भारत का राष्ट्रीय पशु क्या है?", options: ["शेर", "बाघ", "हाथी", "मोर"], answer: "बाघ" },
  { question: "भारत का राष्ट्रीय पुष्प क्या है?", options: ["कमल", "गुलाब", "सूरजमुखी", "गेंदा"], answer: "कमल" },
  { question: "किस नदी को 'दक्षिण की गंगा' कहा जाता है?", options: ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"], answer: "कावेरी" },
];

// GK (25) - English
const gkEn = [
  { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "HCl"], answer: "H2O" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is the largest organ in the human body?", options: ["Liver", "Heart", "Skin", "Brain"], answer: "Skin" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au" },
  { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
  { question: "What is the speed of light approximately?", options: ["3 × 10⁸ m/s", "3 × 10⁹ m/s", "3 × 10⁷ m/s", "3 × 10⁶ m/s"], answer: "3 × 10⁸ m/s" },
  { question: "What is the chemical formula of common salt?", options: ["NaCl", "NaOH", "HCl", "KCl"], answer: "NaCl" },
  { question: "Which organ pumps blood in the human body?", options: ["Brain", "Liver", "Heart", "Lungs"], answer: "Heart" },
  { question: "What is the chemical symbol for iron?", options: ["Fe", "Ir", "In", "I"], answer: "Fe" },
  { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" },
  { question: "What is the boiling point of water?", options: ["90°C", "95°C", "100°C", "105°C"], answer: "100°C" },
  { question: "What is the chemical formula for methane?", options: ["CH4", "C2H6", "C3H8", "C4H10"], answer: "CH4" },
  { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: "Mercury" },
  { question: "What is the main function of red blood cells?", options: ["Fight infections", "Carry oxygen", "Clot blood", "Digest food"], answer: "Carry oxygen" },
  { question: "What is the chemical symbol for silver?", options: ["Si", "Ag", "Au", "Fe"], answer: "Ag" },
  { question: "What is the process of plants making food called?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], answer: "Photosynthesis" },
  { question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: "Jupiter" },
  { question: "What is the chemical formula for carbon dioxide?", options: ["CO", "CO2", "C2O", "C2O2"], answer: "CO2" },
  { question: "What is the freezing point of water?", options: ["-5°C", "0°C", "5°C", "10°C"], answer: "0°C" },
  { question: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },
  { question: "Which vitamin is produced by sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
  { question: "Who is the current Prime Minister of India?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal"], answer: "Narendra Modi" },
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { question: "What is the national sport of India?", options: ["Cricket", "Hockey", "Football", "Badminton"], answer: "Hockey" },
  { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { question: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower", "Marigold"], answer: "Lotus" },
  { question: "Which river is known as the Ganga of the South?", options: ["Godavari", "Krishna", "Kaveri", "Narmada"], answer: "Kaveri" },
];

// ENGLISH (20 Grammar/Vocab) - ALWAYS English
const englishQuestions = [
  { question: "Choose the correct spelling:", options: ["Recieve", "Receive", "Receeve", "Receve"], answer: "Receive" },
  { question: "Select the correct plural of 'Child':", options: ["Childs", "Childes", "Children", "Child"], answer: "Children" },
  { question: "Fill in the blank: She ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: "goes" },
  { question: "Choose the synonym of 'Happy':", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
  { question: "Choose the antonym of 'Big':", options: ["Large", "Huge", "Small", "Tall"], answer: "Small" },
  { question: "Identify the noun: 'The dog is barking.'", options: ["dog", "is", "barking", "the"], answer: "dog" },
  { question: "Identify the verb: 'She sings beautifully.'", options: ["She", "sings", "beautifully", "None"], answer: "sings" },
  { question: "Pick the correct article: ___ apple a day keeps the doctor away.", options: ["A", "An", "The", "No article"], answer: "An" },
  { question: "Fill in the blank: They ___ playing football now.", options: ["is", "am", "are", "was"], answer: "are" },
  { question: "Choose the correct preposition: He is good ___ mathematics.", options: ["in", "at", "on", "for"], answer: "at" },
  { question: "Choose the correct past tense of 'Go':", options: ["Goed", "Gone", "Went", "Going"], answer: "Went" },
  { question: "Find the correctly punctuated sentence:", options: ["Where are you going", "Where are you going?", "where are you going?", "Where, are you going"], answer: "Where are you going?" },
  { question: "Choose the synonym of 'Begin':", options: ["End", "Start", "Stop", "Finish"], answer: "Start" },
  { question: "Choose the antonym of 'Hot':", options: ["Warm", "Cold", "Boiling", "Sunny"], answer: "Cold" },
  { question: "Choose the correct pronoun: ___ is my friend.", options: ["He", "Him", "His", "Himself"], answer: "He" },
  { question: "Identify the adverb: 'He runs quickly.'", options: ["He", "runs", "quickly", "None"], answer: "quickly" },
  { question: "Fill in the blank: I have ___ my homework.", options: ["do", "did", "done", "doing"], answer: "done" },
  { question: "Choose the correct form: She ___ here since 2010.", options: ["live", "lives", "has lived", "living"], answer: "has lived" },
  { question: "Identify the conjunction: 'I like tea and coffee.'", options: ["I", "like", "and", "tea"], answer: "and" },
  { question: "Choose the correct sentence:", options: ["He don't like tea.", "He doesn't likes tea.", "He doesn't like tea.", "He not like tea."], answer: "He doesn't like tea." },
  { question: "Choose the correct idiom meaning of 'Break the ice':", options: ["To break something", "To start a conversation", "To freeze water", "To end friendship"], answer: "To start a conversation" },
  { question: "One-word substitution for 'One who loves books':", options: ["Bibliophile", "Philanthropist", "Philosopher", "Philatelist"], answer: "Bibliophile" },
];

// COMPREHENSION (5) - ALWAYS English
const comprehensionPassage = `"Rivers are the lifeline of civilizations. Since ancient times, great civilizations like the Indus Valley and Egyptian civilizations flourished along river banks. Rivers provide water for drinking, irrigation, and transportation. They also support rich biodiversity. However, pollution and industrialization have damaged many rivers. It is our duty to protect rivers by preventing waste disposal and promoting cleanliness drives."`;

const comprehensionQuestions = [
  { question: "What are rivers called in the passage?", options: ["Lifeline of civilizations", "Source of pollution", "Industrial hubs", "Mountains"], answer: "Lifeline of civilizations" },
  { question: "Which civilizations flourished along river banks?", options: ["Roman and Greek", "Indus Valley and Egyptian", "Mayan and Aztec", "Chinese and Japanese"], answer: "Indus Valley and Egyptian" },
  { question: "Rivers provide water for which purposes?", options: ["Only drinking", "Only irrigation", "Drinking, irrigation, and transportation", "None"], answer: "Drinking, irrigation, and transportation" },
  { question: "What has damaged many rivers?", options: ["Rain", "Pollution and industrialization", "Fishing", "Boats"], answer: "Pollution and industrialization" },
  { question: "How can we protect rivers?", options: ["By dumping waste", "By preventing waste disposal and promoting cleanliness", "By building dams", "By ignoring them"], answer: "By preventing waste disposal and promoting cleanliness" },
];

// =====================================================
// HELPERS
// =====================================================
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const getRandom = (arr, n) => shuffle(arr).slice(0, n);

// Time per section (seconds)
const SECTION_TIME = 900; // 15 minutes = 900 seconds

/**
 * Build paper grouped by SECTION.
 * Returns array of 4 section objects:
 *   { name, questions: [...] }
 */
const buildSectionedPaper = (lang) => {
  const math = lang === "hi" ? mathHi : mathEn;
  const reasoning = lang === "hi" ? reasoningHi : reasoningEn;
  const gk = lang === "hi" ? gkHi : gkEn;

  const sections = [
    {
      id: 1,
      name: { hi: "गणित", en: "Mathematics" },
      color: "#3b82f6",
      questions: getRandom(math, 25),
    },
    {
      id: 2,
      name: { hi: "तर्कशक्ति", en: "Reasoning" },
      color: "#8b5cf6",
      questions: getRandom(reasoning, 25),
    },
    {
      id: 3,
      name: { hi: "सामान्य ज्ञान", en: "General Knowledge" },
      color: "#f59e0b",
      questions: getRandom(gk, 25),
    },
    {
      id: 4,
      name: { hi: "अंग्रेजी", en: "English" },
      color: "#10b981",
      questions: [
        ...getRandom(englishQuestions, 20).map((q) => ({ ...q, isComprehension: false })),
        ...shuffle(comprehensionQuestions).map((q) => ({ ...q, isComprehension: true })),
      ],
    },
  ];

  return sections;
};

// =====================================================
// MAIN COMPONENT
// =====================================================
export default function SSCCGLMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [language, setLanguage] = useState("hi");
  const [sections, setSections] = useState([]); // full paper (4 sections)
  const [currentSection, setCurrentSection] = useState(0); // 0..3
  const [current, setCurrent] = useState(0); // index inside current section
  const [sectionTime, setSectionTime] = useState(SECTION_TIME); // countdown for current section
  const [sectionLocked, setSectionLocked] = useState([false, false, false, false]); // locked = submitted
  const [answers, setAnswers] = useState({}); // key = "sectionId-qIdx" -> option
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const [showPassage, setShowPassage] = useState(false);
  const [showSectionModal, setShowSectionModal] = useState(false);

  // Timer for current section
  useEffect(() => {
    if (started && !submitted && sectionTime > 0 && !sectionLocked[currentSection]) {
      const t = setInterval(() => {
        setSectionTime((p) => {
          if (p <= 60) setShowTimerWarning(true);
          return p - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
    if (sectionTime === 0 && started && !submitted && !sectionLocked[currentSection]) {
      handleSubmitSection(true); // auto-submit
    }
    // eslint-disable-next-line
  }, [started, submitted, sectionTime, currentSection]);

  const startExam = () => {
    const paper = buildSectionedPaper(language);
    setSections(paper);
    setStarted(true);
    setSubmitted(false);
    setCurrentSection(0);
    setCurrent(0);
    setSectionTime(SECTION_TIME);
    setSectionLocked([false, false, false, false]);
    setAnswers({});
    setScore(0);
    setResultDetails([]);
    setShowTimerWarning(false);
    setShowPassage(false);
  };

  const answerKey = (secIdx, qIdx) => `${secIdx}-${qIdx}`;

  const handleSelect = (secIdx, qIdx, option) => {
    if (sectionLocked[secIdx]) return;
    setAnswers((prev) => ({ ...prev, [answerKey(secIdx, qIdx)]: option }));
  };

  // Submit current section
  const handleSubmitSection = (auto = false) => {
    // Lock the section
    const newLocked = [...sectionLocked];
    newLocked[currentSection] = true;
    setSectionLocked(newLocked);
    setShowTimerWarning(false);

    if (currentSection < sections.length - 1) {
      // Move to next section
      setCurrentSection(currentSection + 1);
      setCurrent(0);
      setSectionTime(SECTION_TIME);
      setShowPassage(false);
    } else {
      // Last section — finalize result
      finalizeResult(newLocked);
    }
    // eslint-disable-next-line
  };

  const finalizeResult = (lockedArr) => {
    let correctCount = 0;
    const details = [];

    sections.forEach((sec, secIdx) => {
      sec.questions.forEach((q, qIdx) => {
        const userAns = answers[answerKey(secIdx, qIdx)];
        const isCorrect = userAns === q.answer;
        if (isCorrect) correctCount++;
        details.push({
          question: q.question,
          correctAnswer: q.answer,
          userAnswer:
            userAns ||
            (language === "hi" ? "प्रयास नहीं किया" : "Not Attempted"),
          isCorrect,
          section: sec.id,
          sectionName: sec.name,
        });
      });
    });

    setScore(correctCount);
    setResultDetails(details);
    setSubmitted(true);
  };

  const toggleLanguage = () => {
    if (!started) setLanguage(language === "hi" ? "en" : "hi");
  };

  const getText = (key) => {
    const t = {
      title: { hi: "📝 SSC CGL Mock Test", en: "📝 SSC CGL Mock Test" },
      subtitle: { hi: "कर्मचारी चयन आयोग - CGL", en: "Staff Selection Commission - CGL" },
      questions: { hi: "📝 प्रश्न", en: "📝 Questions" },
      time: { hi: "⏱️ समय", en: "⏱️ Time" },
      marks: { hi: "🎯 कुल अंक", en: "🎯 Total Marks" },
      instructions: { hi: "📋 निर्देश:", en: "📋 Instructions:" },
      compulsory: { hi: "सभी प्रश्न अनिवार्य हैं", en: "All questions are compulsory" },
      eachMarks: { hi: "प्रत्येक प्रश्न 2 अंक का है", en: "Each question carries 2 marks" },
      noNegative: { hi: "कोई नेगेटिव मार्किंग नहीं", en: "No negative marking" },
      sessions: {
        hi: "खंडवार समय: गणित (15 मिनट) → तर्कशक्ति (15 मिनट) → सा.ज्ञान (15 मिनट) → अंग्रेजी (15 मिनट)",
        en: "Sectional Time: Math (15 min) → Reasoning (15 min) → GK (15 min) → English (15 min)",
      },
      sectionRule: {
        hi: "⚠️ एक बार अनुभाग जमा करने के बाद, आप वापस नहीं जा सकते।",
        en: "⚠️ Once a section is submitted, you cannot return to it.",
      },
      start: { hi: "🚀 परीक्षा शुरू करें", en: "🚀 Start Exam" },
      prev: { hi: "⬅ पिछला", en: "⬅ Prev" },
      next: { hi: "अगला ➡", en: "Next ➡" },
      submitSection: { hi: "📤 अनुभाग जमा करें", en: "📤 Submit Section" },
      submitTest: { hi: "✅ परीक्षा जमा करें", en: "✅ Submit Test" },
      answered: { hi: "उत्तर दिए:", en: "Answered:" },
      navigator: { hi: "प्रश्न नेविगेटर", en: "Question Navigator" },
      answeredS: { hi: "🟢 उत्तर दिया", en: "🟢 Answered" },
      currentS: { hi: "🔵 वर्तमान", en: "🔵 Current" },
      unansweredS: { hi: "⚪ अनुत्तरित", en: "⚪ Unanswered" },
      lockedS: { hi: "🔒 लॉक", en: "🔒 Locked" },
      congrats: { hi: "🎉 बधाई हो!", en: "🎉 Congratulations!" },
      practice: { hi: "📖 अभ्यास जारी रखें!", en: "📖 Keep Practicing!" },
      passed: { hi: "✔️ उत्तीर्ण", en: "✔️ Passed" },
      failed: { hi: "❌ अनुत्तीर्ण", en: "❌ Failed" },
      review: { hi: "📋 उत्तर समीक्षा", en: "📋 Answer Review" },
      yourAnswer: { hi: "आपका उत्तर:", en: "Your Answer:" },
      correctAnswer: { hi: "सही उत्तर:", en: "Correct Answer:" },
      newTest: { hi: "🔄 नई परीक्षा लें", en: "🔄 Take New Test" },
      warning: { hi: "⚠️ 1 मिनट से कम समय शेष!", en: "⚠️ Less than 1 minute remaining!" },
      download: { hi: "📥 परिणाम डाउनलोड करें", en: "📥 Download Result" },
      correct: { hi: "✔ सही", en: "✔ Correct" },
      wrong: { hi: "✖ गलत", en: "✖ Wrong" },
      notAttempted: { hi: "⚪ अनुत्तरित", en: "⚪ Not Attempted" },
      langLine: { hi: "भाषा: हिन्दी • कोई नेगेटिव मार्किंग नहीं", en: "Language: English • No negative marking" },
      passage: { hi: "📖 गद्यांश दिखाएं", en: "📖 Show Comprehension Passage" },
      sectionLabel: { hi: "अनुभाग", en: "Section" },
      of: { hi: "का", en: "of" },
      sectionEnd: { hi: "अनुभाग समाप्त!", en: "Section Ended!" },
      sectionEndMsg: {
        hi: "इस अनुभाग का समय समाप्त हो गया है। अगले अनुभाग पर जा रहे हैं...",
        en: "Time for this section has ended. Moving to next section...",
      },
      sectionSubmitted: {
        hi: "✅ अनुभाग जमा हो गया! अगला अनुभाग शुरू हो रहा है...",
        en: "✅ Section submitted! Next section starting...",
      },
      finalSubmitConfirm: {
        hi: "यह अंतिम अनुभाग है। क्या आप परीक्षा जमा करना चाहते हैं?",
        en: "This is the last section. Submit the test?",
      },
      submitSectionConfirm: {
        hi: "क्या आप इस अनुभाग को जमा करना चाहते हैं? आप वापस नहीं जा सकेंगे।",
        en: "Submit this section? You cannot return afterward.",
      },
      yes: { hi: "हाँ", en: "Yes" },
      no: { hi: "नहीं", en: "No" },
    };
    return t[key]?.[language] || t[key]?.["en"] || key;
  };

  // ============ HOME ============
  if (!started) {
    return (
      <div style={styles.homeWrapper}>
        <div style={styles.homeCard}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📝</div>
          <h1 style={styles.homeTitle}>{getText("title")}</h1>
          <p style={styles.homeSub}>{getText("subtitle")}</p>
          <div style={styles.divider}></div>

          <div style={styles.langRow}>
            <span style={{ ...styles.langLabel, fontWeight: language === "hi" ? "700" : "400", color: language === "hi" ? "#0f0c29" : "#999" }}>हिन्दी</span>
            <button onClick={toggleLanguage} style={{ ...styles.toggleBtn, background: language === "hi" ? "#302b63" : "#4a90d9" }}>
              <div style={{ ...styles.toggleKnob, left: language === "hi" ? "3px" : "27px" }}></div>
            </button>
            <span style={{ ...styles.langLabel, fontWeight: language === "en" ? "700" : "400", color: language === "en" ? "#0f0c29" : "#999" }}>English</span>
          </div>

          <div style={styles.statGrid}>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{getText("questions")}</div>
              <div style={styles.statValue}>100</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{getText("time")}</div>
              <div style={styles.statValue}>60 min</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{getText("marks")}</div>
              <div style={styles.statValue}>200</div>
            </div>
          </div>

          <div style={styles.instructionsBox}>
            <strong>{getText("instructions")}</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>{getText("compulsory")}</li>
              <li>{getText("eachMarks")}</li>
              <li>{getText("noNegative")}</li>
              <li>{getText("sessions")}</li>
              <li style={{ color: "#dc2626", fontWeight: "600" }}>{getText("sectionRule")}</li>
            </ul>
          </div>

          <button onClick={startExam} style={styles.startBtn}>{getText("start")}</button>
        </div>
        <style>{animStyles}</style>
      </div>
    );
  }

  // ============ RESULT ============
  if (submitted) {
    const total = resultDetails.length;
    const percentage = ((score / total) * 100).toFixed(2);
    const isPassed = percentage >= 60;
    const wrongCount = resultDetails.filter(
      (d) => !d.isCorrect && d.userAnswer !== "Not Attempted" && d.userAnswer !== "प्रयास नहीं किया"
    ).length;
    const notAttempted = resultDetails.filter(
      (d) => d.userAnswer === "Not Attempted" || d.userAnswer === "प्रयास नहीं किया"
    ).length;

    return (
      <div style={styles.resultWrapper}>
        <div style={styles.resultContainer}>
          <div style={styles.resultCard}>
            <div style={{ fontSize: "14px", color: "#718096", marginBottom: "10px" }}>
              📖 {getText("practice")}
            </div>
            <div style={{ ...styles.bigCircle, background: isPassed ? "#dcfce7" : "#fee2e2" }}>
              {isPassed ? "✅" : "📝"}
            </div>
            <div style={styles.scoreBig}>
              {score} <span style={{ fontSize: "22px", color: "#888" }}>/ {total}</span>
            </div>
            <div style={{ fontSize: "18px", color: isPassed ? "#16a34a" : "#dc2626", fontWeight: "700", marginTop: "4px" }}>
              {percentage}% {isPassed ? getText("passed") : getText("failed")}
            </div>
            <div style={styles.langLine}>{getText("langLine")}</div>

            <div style={styles.statRow}>
              <div style={{ ...styles.pill, background: "#dcfce7", color: "#166534" }}>
                ✔ {getText("correct")}: {score}
              </div>
              <div style={{ ...styles.pill, background: "#fee2e2", color: "#991b1b" }}>
                ✖ {getText("wrong")}: {wrongCount}
              </div>
              <div style={{ ...styles.pill, background: "#fef3c7", color: "#92400e" }}>
                ⚪ {getText("notAttempted")}: {notAttempted}
              </div>
            </div>

            <button onClick={() => window.print()} style={styles.downloadBtn}>
              {getText("download")}
            </button>
          </div>

          <div style={styles.reviewCard}>
            <h2 style={styles.reviewTitle}>📋 {getText("review")}</h2>
            {resultDetails.map((item, index) => (
              <div
                key={index}
                style={{
                  ...styles.reviewItem,
                  background: "#fffbeb",
                  borderLeft: `4px solid ${item.isCorrect ? "#22c55e" : "#f59e0b"}`,
                }}
              >
                <div style={styles.reviewQ}>
                  Q{index + 1}. {item.question}
                </div>
                <div style={styles.reviewAns}>
                  <div>
                    <strong>{getText("yourAnswer")} </strong>
                    <span style={{ color: item.isCorrect ? "#16a34a" : "#dc2626" }}>
                      {item.userAnswer}
                    </span>
                  </div>
                  <div>
                    <strong>{getText("correctAnswer")} </strong>
                    <span style={{ color: "#16a34a", fontStyle: "italic" }}>
                      {item.correctAnswer}
                    </span>
                  </div>
                </div>
                <div style={styles.reviewStatus}>{item.isCorrect ? "✅" : "❌"}</div>
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
                setSectionTime(SECTION_TIME);
                setShowTimerWarning(false);
                setSections([]);
                setCurrent(0);
                setCurrentSection(0);
                setSectionLocked([false, false, false, false]);
              }}
              style={styles.startBtn}
            >
              {getText("newTest")}
            </button>
          </div>
        </div>
        <style>{animStyles}</style>
      </div>
    );
  }

  // ============ EXAM ============
  const sec = sections[currentSection];
  if (!sec) return null;
  const q = sec.questions[current] || { question: "", options: [] };
  const answeredCount = sec.questions.reduce(
    (acc, _, qIdx) => (answers[answerKey(currentSection, qIdx)] ? acc + 1 : acc),
    0
  );
  const isComprehension = q.isComprehension;
  const isLastSection = currentSection === sections.length - 1;

  // Confirm submit
  const confirmSubmitSection = () => {
    const msg = isLastSection ? getText("finalSubmitConfirm") : getText("submitSectionConfirm");
    if (window.confirm(msg)) {
      handleSubmitSection(false);
    }
  };

  return (
    <div style={styles.examWrapper}>
      <div style={styles.examContainer}>
        {/* Top bar */}
        <div style={styles.topBar}>
          <div style={{ flex: 1 }}>
            <p style={styles.qCounter}>
              {getText("sectionLabel")} {currentSection + 1}/{sections.length} • Q{current + 1}/{sec.questions.length}
            </p>
            <p style={styles.qSubCounter}>
              {getText("answered")} {answeredCount}/{sec.questions.length}
            </p>
            <p style={{
              margin: "4px 0 0",
              fontSize: "11px",
              color: "white",
              fontWeight: "700",
              background: sec.color,
              display: "inline-block",
              padding: "3px 10px",
              borderRadius: "10px",
            }}>
              {sec.name[language]}
            </p>
          </div>
          <div style={{ ...styles.timer, color: sectionTime < 60 ? "#fc8181" : "#0f0c29" }}>
            <span style={{ fontSize: "16px" }}>⏱️</span>
            <span>{Math.floor(sectionTime / 60)}:{String(sectionTime % 60).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Section progress bar */}
        <div style={styles.sectionProgressWrap}>
          {sections.map((s, i) => (
            <div
              key={i}
              style={{
                ...styles.sectionProgressItem,
                background: i < currentSection ? "#22c55e" :
                            i === currentSection ? s.color : "#e2e8f0",
                color: i <= currentSection ? "white" : "#4a5568",
              }}
            >
              {i < currentSection ? "🔒" : i + 1}. {s.name[language]}
            </div>
          ))}
        </div>

        {/* Comprehension passage */}
        {isComprehension && (
          <div style={styles.passageBox}>
            <button onClick={() => setShowPassage(!showPassage)} style={styles.passageToggle}>
              {getText("passage")} {showPassage ? "▲" : "▼"}
            </button>
            {showPassage && <p style={styles.passageText}>{comprehensionPassage}</p>}
          </div>
        )}

        {/* Question card */}
        <div style={styles.questionCard}>
          <h3 style={styles.questionText}>{q.question}</h3>
          <div style={{ marginTop: "5px" }}>
            {q.options && q.options.map((op, idx) => {
              const selected = answers[answerKey(currentSection, current)] === op;
              return (
                <div
                  key={idx}
                  style={{
                    ...styles.option,
                    backgroundColor: selected ? "#ebf8ff" : "#f7fafc",
                    border: selected ? "2px solid #302b63" : "2px solid transparent",
                  }}
                  onClick={() => handleSelect(currentSection, current, op)}
                >
                  <input
                    type="radio"
                    checked={selected}
                    onChange={() => {}}
                    style={{ marginRight: "10px", width: "16px", height: "16px" }}
                  />
                  <label style={styles.optionLabel}>{op}</label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nav */}
        <div style={styles.navRow}>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              style={{
                ...styles.navBtn,
                backgroundColor: current === 0 ? "#e2e8f0" : "#302b63",
                color: current === 0 ? "#a0aec0" : "white",
                cursor: current === 0 ? "not-allowed" : "pointer",
              }}
            >
              {getText("prev")}
            </button>
            <button
              onClick={() => setCurrent(Math.min(sec.questions.length - 1, current + 1))}
              disabled={current === sec.questions.length - 1}
              style={{
                ...styles.navBtn,
                backgroundColor: current === sec.questions.length - 1 ? "#e2e8f0" : "#302b63",
                color: current === sec.questions.length - 1 ? "#a0aec0" : "white",
                cursor: current === sec.questions.length - 1 ? "not-allowed" : "pointer",
              }}
            >
              {getText("next")}
            </button>
          </div>
          <button onClick={confirmSubmitSection} style={styles.submitBtn}>
            {isLastSection ? getText("submitTest") : getText("submitSection")}
          </button>
        </div>

        {/* Navigator */}
        <div style={styles.navigatorCard}>
          <p style={styles.navTitle}>{getText("navigator")}</p>
          <div style={styles.navGrid}>
            {sec.questions.map((_, idx) => {
              const isAnswered = !!answers[answerKey(currentSection, idx)];
              const isCurrent = idx === current;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  style={{
                    ...styles.navNum,
                    backgroundColor: isAnswered ? "#48bb78" :
                                     isCurrent ? sec.color : "#e2e8f0",
                    color: isAnswered || isCurrent ? "white" : "#4a5568",
                    border: isCurrent ? `2px solid ${sec.color}` : "none",
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <div style={styles.legendRow}>
            <span>{getText("answeredS")}</span>
            <span>{getText("currentS")}</span>
            <span>{getText("unansweredS")}</span>
            <span>🔒 {getText("lockedS")}</span>
          </div>
        </div>

        {showTimerWarning && (
          <div style={styles.timerWarning}>{getText("warning")}</div>
        )}
      </div>
      <style>{animStyles}</style>
    </div>
  );
}

// =====================================================
// STYLES
// =====================================================
const styles = {
  homeWrapper: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "20px" },
  homeCard: { backgroundColor: "white", padding: "25px 20px", borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.6)", textAlign: "center", maxWidth: "500px", width: "100%" },
  homeTitle: { color: "#0f0c29", marginBottom: "3px", fontSize: "22px", fontWeight: "700" },
  homeSub: { color: "#666", fontSize: "12px", marginBottom: "15px" },
  divider: { height: "3px", background: "linear-gradient(90deg, #0f0c29, #302b63)", margin: "10px auto", width: "60px" },
  langRow: { display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", margin: "15px 0" },
  langLabel: { fontSize: "14px" },
  toggleBtn: { width: "50px", height: "26px", borderRadius: "13px", border: "none", cursor: "pointer", position: "relative", transition: "all 0.3s ease" },
  toggleKnob: { width: "20px", height: "20px", borderRadius: "50%", background: "white", position: "absolute", top: "3px", transition: "all 0.3s ease", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" },
  statGrid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginTop: "10px" },
  statBox: { backgroundColor: "#e8f0fe", padding: "10px", borderRadius: "10px" },
  statLabel: { fontSize: "10px", color: "#666" },
  statValue: { fontSize: "18px", fontWeight: "bold", color: "#0f0c29" },
  instructionsBox: { backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "10px", marginTop: "10px", fontSize: "12px", color: "#555", textAlign: "left" },
  startBtn: { padding: "14px 40px", fontSize: "18px", fontWeight: "bold", background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)", color: "white", border: "none", borderRadius: "50px", cursor: "pointer", marginTop: "20px", width: "100%", transition: "transform 0.3s, box-shadow 0.3s", boxShadow: "0 4px 15px rgba(48, 43, 99, 0.4)" },
  resultWrapper: { minHeight: "100vh", background: "#f5f7fa", padding: "15px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
  resultContainer: { maxWidth: "800px", margin: "0 auto" },
  resultCard: { backgroundColor: "white", borderRadius: "16px", padding: "25px 20px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", textAlign: "center", marginBottom: "20px" },
  bigCircle: { width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "15px auto", fontSize: "32px" },
  scoreBig: { fontSize: "44px", fontWeight: "bold", color: "#0f0c29" },
  langLine: { marginTop: "10px", fontSize: "13px", color: "#718096" },
  statRow: { display: "flex", gap: "8px", marginTop: "18px", flexWrap: "wrap", justifyContent: "center" },
  pill: { padding: "10px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: "700", flex: 1, minWidth: "110px" },
  downloadBtn: { marginTop: "18px", padding: "12px 32px", fontSize: "15px", fontWeight: "bold", background: "#16a34a", color: "white", border: "none", borderRadius: "50px", cursor: "pointer", boxShadow: "0 4px 15px rgba(22, 163, 74, 0.4)" },
  reviewCard: { backgroundColor: "white", borderRadius: "16px", padding: "20px 15px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" },
  reviewTitle: { borderBottom: "2px solid #eee", paddingBottom: "12px", marginBottom: "15px", fontSize: "18px", color: "#2d3748" },
  reviewItem: { padding: "12px 15px", marginBottom: "12px", borderRadius: "8px", position: "relative" },
  reviewQ: { fontSize: "14px", color: "#2d3748", marginBottom: "8px", paddingRight: "30px" },
  reviewAns: { fontSize: "13px", display: "flex", flexDirection: "column", gap: "3px" },
  reviewStatus: { position: "absolute", top: "12px", right: "14px", fontSize: "16px" },
  examWrapper: { minHeight: "100vh", background: "#f5f7fa", padding: "10px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
  examContainer: { maxWidth: "800px", margin: "0 auto" },
  topBar: { backgroundColor: "white", borderRadius: "12px", padding: "10px 14px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  qCounter: { margin: "0", fontSize: "11px", color: "#718096" },
  qSubCounter: { margin: "2px 0 0", fontSize: "10px", color: "#a0aec0" },
  timer: { fontSize: "20px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "6px" },
  sectionProgressWrap: { display: "flex", gap: "6px", marginBottom: "10px", flexWrap: "wrap" },
  sectionProgressItem: { flex: 1, minWidth: "120px", padding: "8px 10px", borderRadius: "10px", fontSize: "11px", fontWeight: "700", textAlign: "center", transition: "all 0.3s ease" },
  passageBox: { backgroundColor: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", padding: "10px 14px", marginBottom: "10px" },
  passageToggle: { background: "none", border: "none", color: "#92400e", fontWeight: "700", fontSize: "13px", cursor: "pointer", padding: "0" },
  passageText: { marginTop: "8px", fontSize: "13px", color: "#4a3f1e", lineHeight: "1.6", fontStyle: "italic" },
  questionCard: { backgroundColor: "white", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: "10px" },
  questionText: { fontSize: "16px", color: "#0f0c29", marginBottom: "16px", fontWeight: "600", lineHeight: "1.5" },
  option: { padding: "10px 12px", margin: "5px 0", borderRadius: "8px", cursor: "pointer", transition: "all 0.3s ease", display: "flex", alignItems: "center" },
  optionLabel: { fontSize: "14px", cursor: "pointer", flex: 1, margin: "0", color: "#2d3748" },
  navRow: { display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "space-between" },
  navBtn: { padding: "8px 14px", fontSize: "13px", border: "none", borderRadius: "8px", fontWeight: "600", transition: "all 0.3s ease" },
  submitBtn: { padding: "8px 18px", fontSize: "13px", backgroundColor: "#48bb78", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600", boxShadow: "0 2px 8px rgba(72, 187, 120, 0.3)" },
  navigatorCard: { backgroundColor: "white", borderRadius: "12px", padding: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginTop: "10px" },
  navTitle: { margin: "0 0 8px 0", color: "#718096", fontSize: "11px", fontWeight: "600" },
  navGrid: { display: "flex", flexWrap: "wrap", gap: "5px" },
  navNum: { width: "32px", height: "32px", fontSize: "11px", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", transition: "all 0.3s ease" },
  legendRow: { display: "flex", gap: "12px", marginTop: "8px", fontSize: "10px", color: "#4a5568", flexWrap: "wrap" },
  timerWarning: { position: "fixed", bottom: "15px", right: "15px", left: "15px", backgroundColor: "#fc8181", color: "white", padding: "12px 18px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(252, 129, 129, 0.4)", textAlign: "center", fontSize: "14px", fontWeight: "600", maxWidth: "400px", margin: "0 auto", animation: "pulse 1.5s ease-in-out infinite" },
};

const animStyles = `
  @keyframes pulse {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.98); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;