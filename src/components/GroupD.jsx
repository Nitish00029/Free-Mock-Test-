// RRBGroupDMockTest.jsx
import React, { useState, useEffect } from "react";

// --- Hindi Question Banks ---

// Mathematics (25 questions) - Hindi
const mathQuestions = [
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
  { question: "12 और 18 का लघुत्तम समापवर्त्य (LCM) क्या है?", options: ["24", "36", "48", "72"], answer: "36" },
  { question: "11 × 11 क्या है?", options: ["111", "121", "131", "141"], answer: "121" },
  { question: "72 ÷ 8 क्या है?", options: ["7", "8", "9", "10"], answer: "9" },
  { question: "300 का 30% क्या है?", options: ["60", "70", "80", "90"], answer: "90" },
  { question: "24 और 36 का महत्तम समापवर्तक (HCF) क्या है?", options: ["6", "8", "10", "12"], answer: "12" },
  { question: "0.5 × 0.5 क्या है?", options: ["0.25", "0.5", "0.75", "1.0"], answer: "0.25" },
];

// Reasoning (30 questions) - Hindi
const reasoningQuestions = [
  { question: "विषम को खोजें: 2, 4, 6, 9", options: ["2", "4", "6", "9"], answer: "9" },
  { question: "यदि 'APPLE' को 'BQQMF' लिखा जाता है, तो 'MANGO' को क्या लिखा जाएगा?", options: ["NBOF", "NBPH", "NBOH", "NBOI"], answer: "NBOH" },
  { question: "अगली संख्या ज्ञात करें: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], answer: "30" },
  { question: "कौन सा शब्द भिन्न है? सेब, आम, गाजर, केला", options: ["सेब", "आम", "गाजर", "केला"], answer: "गाजर" },
  { question: "अगला अक्षर क्या होगा: A, C, E, G, ?", options: ["H", "I", "J", "K"], answer: "I" },
  { question: "यदि 2=5, 3=10, 4=17, तो 5=?", options: ["22", "24", "26", "28"], answer: "26" },
  { question: "लुप्त संख्या ज्ञात करें: 2, 5, 10, 17, ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "विषम शब्द चुनें: मेज, कुर्सी, स्टूल, किताब", options: ["मेज", "कुर्सी", "स्टूल", "किताब"], answer: "किताब" },
  { question: "यदि 'PEN' को 'QFO' लिखा जाता है, तो 'BOOK' को क्या लिखा जाएगा?", options: ["CPPL", "CQPL", "CPQL", "CQOL"], answer: "CPPL" },
  { question: "अगली संख्या क्या है: 1, 4, 9, 16, ?", options: ["20", "22", "25", "30"], answer: "25" },
  { question: "विषम को खोजें: कार, बस, बाइक, हवाई जहाज", options: ["कार", "बस", "बाइक", "हवाई जहाज"], answer: "हवाई जहाज" },
  { question: "यदि 'A' = 1, 'B' = 2, तो 'Z' = ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "अगला क्या आएगा: 3, 8, 13, 18, ?", options: ["21", "22", "23", "24"], answer: "23" },
  { question: "विषम संख्या चुनें: 3, 6, 9, 12, 15", options: ["3", "6", "9", "12", "15"], answer: "12" },
  { question: "यदि 'CAT' को 'DBU' लिखा जाता है, तो 'DOG' को क्या लिखा जाएगा?", options: ["EPH", "EPI", "EQH", "EPG"], answer: "EPH" },
  { question: "अगला क्या आएगा: Z, X, V, T, ?", options: ["R", "S", "Q", "P"], answer: "R" },
  { question: "लुप्त संख्या ज्ञात करें: 7, 14, 28, 56, ?", options: ["84", "96", "102", "112"], answer: "112" },
  { question: "विषम शब्द चुनें: पेन, पेंसिल, रबर, किताब, मेज", options: ["पेन", "पेंसिल", "रबर", "किताब", "मेज"], answer: "मेज" },
  { question: "यदि 3=7, 4=13, 5=21, तो 6=?", options: ["27", "29", "31", "33"], answer: "31" },
  { question: "अगली संख्या क्या है: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], answer: "13" },
  { question: "विषम को खोजें: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100", options: ["25", "36", "49", "64"], answer: "64" },
  { question: "यदि 'BALL' को 'CBNM' लिखा जाता है, तो 'GOAL' को क्या लिखा जाएगा?", options: ["HPBM", "HPBN", "HPBO", "HPBL"], answer: "HPBM" },
  { question: "अगला क्या आएगा: 2, 4, 8, 16, 32, ?", options: ["48", "56", "64", "72"], answer: "64" },
  { question: "लुप्त संख्या ज्ञात करें: 9, 16, 25, 36, ?", options: ["49", "50", "52", "54"], answer: "49" },
  { question: "विषम शब्द चुनें: पृथ्वी, मंगल, बृहस्पति, सूर्य, शुक्र", options: ["पृथ्वी", "मंगल", "बृहस्पति", "सूर्य", "शुक्र"], answer: "सूर्य" },
  { question: "यदि 'A' = 1, 'B' = 2, तो 'M' = ?", options: ["11", "12", "13", "14"], answer: "13" },
  { question: "अगला क्या आएगा: 1, 3, 6, 10, 15, ?", options: ["18", "20", "21", "22"], answer: "21" },
  { question: "विषम को खोजें: 2, 5, 10, 17, 26, 37, 50, 65, 82, 101", options: ["26", "37", "50", "65"], answer: "50" },
  { question: "यदि 'TIGER' को 'UJHFS' लिखा जाता है, तो 'LION' को क्या लिखा जाएगा?", options: ["MJPO", "MJPP", "MKPO", "MJPN"], answer: "MJPO" },
  { question: "अगली संख्या क्या है: 0, 1, 1, 2, 3, 5, 8, 13, ?", options: ["18", "20", "21", "22"], answer: "21" },
];

// Science (25 questions) - Hindi
const scienceQuestions = [
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
  { question: "ऑक्सीजन का रासायनिक प्रतीक क्या है?", options: ["O", "O2", "Ox", "Om"], answer: "O" },
  { question: "जीवित जीवों के अध्ययन को क्या कहते हैं?", options: ["भौतिकी", "जीव विज्ञान", "रसायन विज्ञान", "भूविज्ञान"], answer: "जीव विज्ञान" },
  { question: "किस ग्रह के सबसे अधिक चंद्रमा हैं?", options: ["बृहस्पति", "शनि", "यूरेनस", "नेपच्यून"], answer: "शनि" },
];

// Current Affairs (20 questions) - Hindi
const currentAffairsQuestions = [
  { question: "भारत के वर्तमान प्रधानमंत्री कौन हैं?", options: ["नरेंद्र मोदी", "राहुल गांधी", "अमित शाह", "अरविंद केजरीवाल"], answer: "नरेंद्र मोदी" },
  { question: "भारत की राजधानी क्या है?", options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"], answer: "नई दिल्ली" },
  { question: "2026 में भारत के राष्ट्रपति कौन हैं?", options: ["द्रौपदी मुर्मू", "राम नाथ कोविंद", "प्रणब मुखर्जी", "एपीजे अब्दुल कलाम"], answer: "द्रौपदी मुर्मू" },
  { question: "2023 में G20 शिखर सम्मेलन की मेजबानी किस देश ने की?", options: ["भारत", "USA", "UK", "चीन"], answer: "भारत" },
  { question: "भारत का पहला AI-संचालित स्कूल कौन सा है?", options: ["AI Academy", "Coding School", "नालंदा AI स्कूल", "डिजिटल स्कूल"], answer: "नालंदा AI स्कूल" },
  { question: "भारत के किस राज्य की जनसंख्या सबसे अधिक है?", options: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"], answer: "उत्तर प्रदेश" },
  { question: "भारत की मुद्रा क्या है?", options: ["रुपया", "डॉलर", "पाउंड", "येन"], answer: "रुपया" },
  { question: "दिल्ली के मुख्यमंत्री कौन हैं?", options: ["अरविंद केजरीवाल", "मनीष सिसोदिया", "अमित शाह", "राहुल गांधी"], answer: "अरविंद केजरीवाल" },
  { question: "भारत का राष्ट्रीय खेल क्या है?", options: ["क्रिकेट", "हॉकी", "फुटबॉल", "बैडमिंटन"], answer: "हॉकी" },
  { question: "किस नदी को 'दक्षिण की गंगा' कहा जाता है?", options: ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"], answer: "कावेरी" },
  { question: "ISRO का पूर्ण रूप क्या है?", options: ["भारतीय अंतरिक्ष अनुसंधान संगठन", "अंतर्राष्ट्रीय अंतरिक्ष अनुसंधान संगठन", "भारतीय अंतरिक्ष अनुसंधान कार्यालय", "अंतर्राष्ट्रीय अंतरिक्ष अनुसंधान कार्यालय"], answer: "भारतीय अंतरिक्ष अनुसंधान संगठन" },
  { question: "किस शहर को भारत का सिलिकॉन वैली कहा जाता है?", options: ["मुंबई", "दिल्ली", "बेंगलुरु", "चेन्नई"], answer: "बेंगलुरु" },
  { question: "भारतीय राष्ट्रीय गान किसने लिखा?", options: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी", "सुभाष चंद्र बोस"], answer: "रवींद्रनाथ टैगोर" },
  { question: "भारत का राष्ट्रीय पशु क्या है?", options: ["शेर", "बाघ", "हाथी", "मोर"], answer: "बाघ" },
  { question: "किस राज्य की साक्षरता दर सबसे अधिक है?", options: ["केरल", "तमिलनाडु", "महाराष्ट्र", "गुजरात"], answer: "केरल" },
  { question: "भारत की पहली बुलेट ट्रेन परियोजना का नाम क्या है?", options: ["बुलेट इंडिया", "हाई-स्पीड रेल", "मुंबई-अहमदाबाद", "दिल्ली-मुंबई"], answer: "मुंबई-अहमदाबाद" },
  { question: "भारत के वर्तमान उपराष्ट्रपति कौन हैं?", options: ["जगदीप धनखड़", "वेंकैया नायडू", "हामिद अंसारी", "प्रणब मुखर्जी"], answer: "जगदीप धनखड़" },
  { question: "भारत का राष्ट्रीय पुष्प क्या है?", options: ["कमल", "गुलाब", "सूरजमुखी", "गेंदा"], answer: "कमल" },
  { question: "किस भारतीय राज्य में सबसे अधिक यूनेस्को विश्व धरोहर स्थल हैं?", options: ["तमिलनाडु", "उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान"], answer: "राजस्थान" },
  { question: "भारत की पहली परमाणु पनडुब्बी का नाम क्या है?", options: ["INS अरिहंत", "INS विक्रांत", "INS कलवरी", "INS चक्र"], answer: "INS अरिहंत" },
];

// --- English Question Banks (Translated) ---

// Mathematics (25 questions) - English
const mathQuestionsEnglish = [
  { question: "What is 25 + 37?", options: ["52", "62", "72", "82"], answer: "62" },
  { question: "What is 15 × 6?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "35"], answer: "25" },
  { question: "What is 3⁴?", options: ["27", "54", "81", "108"], answer: "81" },
  { question: "What is 7 × 8?", options: ["48", "54", "56", "64"], answer: "56" },
  { question: "What is 45 + 56?", options: ["99", "100", "101", "102"], answer: "101" },
  { question: "What is 12 × 12?", options: ["124", "134", "144", "154"], answer: "144" },
  { question: "What is the approximate value of π (pi)?", options: ["3.14", "3.41", "3.13", "3.11"], answer: "3.14" },
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

// Reasoning (30 questions) - English
const reasoningQuestionsEnglish = [
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
  { question: "Find the odd one out: 3, 6, 9, 12, 15", options: ["3", "6", "9", "12", "15"], answer: "12" },
  { question: "If 'CAT' is coded as 'DBU', then 'DOG' is coded as?", options: ["EPH", "EPI", "EQH", "EPG"], answer: "EPH" },
  { question: "What comes next: Z, X, V, T, ?", options: ["R", "S", "Q", "P"], answer: "R" },
  { question: "Find the missing number: 7, 14, 28, 56, ?", options: ["84", "96", "102", "112"], answer: "112" },
  { question: "Choose the odd word: Pen, Pencil, Eraser, Book, Table", options: ["Pen", "Pencil", "Eraser", "Book", "Table"], answer: "Table" },
  { question: "If 3=7, 4=13, 5=21, then 6=?", options: ["27", "29", "31", "33"], answer: "31" },
  { question: "What is the next number: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], answer: "13" },
  { question: "Find the odd one out: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100", options: ["25", "36", "49", "64"], answer: "64" },
  { question: "If 'BALL' is coded as 'CBNM', what is 'GOAL' coded as?", options: ["HPBM", "HPBN", "HPBO", "HPBL"], answer: "HPBM" },
  { question: "What comes next: 2, 4, 8, 16, 32, ?", options: ["48", "56", "64", "72"], answer: "64" },
  { question: "Find the missing number: 9, 16, 25, 36, ?", options: ["49", "50", "52", "54"], answer: "49" },
  { question: "Choose the odd word: Earth, Mars, Jupiter, Sun, Venus", options: ["Earth", "Mars", "Jupiter", "Sun", "Venus"], answer: "Sun" },
  { question: "If 'A' = 1, 'B' = 2, then 'M' = ?", options: ["11", "12", "13", "14"], answer: "13" },
  { question: "What comes next: 1, 3, 6, 10, 15, ?", options: ["18", "20", "21", "22"], answer: "21" },
  { question: "Find the odd one out: 2, 5, 10, 17, 26, 37, 50, 65, 82, 101", options: ["26", "37", "50", "65"], answer: "50" },
  { question: "If 'TIGER' is coded as 'UJHFS', what is 'LION' coded as?", options: ["MJPO", "MJPP", "MKPO", "MJPN"], answer: "MJPO" },
  { question: "What is the next number: 0, 1, 1, 2, 3, 5, 8, 13, ?", options: ["18", "20", "21", "22"], answer: "21" },
];

// Science (25 questions) - English
const scienceQuestionsEnglish = [
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
  { question: "What is the chemical symbol for oxygen?", options: ["O", "O2", "Ox", "Om"], answer: "O" },
  { question: "What is the study of living organisms called?", options: ["Physics", "Biology", "Chemistry", "Geology"], answer: "Biology" },
  { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
];

// Current Affairs (20 questions) - English
const currentAffairsQuestionsEnglish = [
  { question: "Who is the current Prime Minister of India?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal"], answer: "Narendra Modi" },
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "Which country hosted the G20 Summit 2023?", options: ["India", "USA", "UK", "China"], answer: "India" },
  { question: "What is the name of India's first AI-powered school?", options: ["AI Academy", "Coding School", "Nalanda AI School", "Digital School"], answer: "Nalanda AI School" },
  { question: "Which state has the highest population in India?", options: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], answer: "Uttar Pradesh" },
  { question: "What is the currency of India?", options: ["Rupee", "Dollar", "Pound", "Yen"], answer: "Rupee" },
  { question: "Who is the Chief Minister of Delhi?", options: ["Arvind Kejriwal", "Manish Sisodia", "Amit Shah", "Rahul Gandhi"], answer: "Arvind Kejriwal" },
  { question: "What is the national sport of India?", options: ["Cricket", "Hockey", "Football", "Badminton"], answer: "Hockey" },
  { question: "Which river is known as the Ganga of the South?", options: ["Godavari", "Krishna", "Kaveri", "Narmada"], answer: "Kaveri" },
  { question: "What is the full form of ISRO?", options: ["Indian Space Research Organisation", "International Space Research Organisation", "Indian Space Research Office", "International Space Research Office"], answer: "Indian Space Research Organisation" },
  { question: "Which city is known as the Silicon Valley of India?", options: ["Mumbai", "Delhi", "Bangalore", "Chennai"], answer: "Bangalore" },
  { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"], answer: "Rabindranath Tagore" },
  { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { question: "Which state has the highest literacy rate?", options: ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"], answer: "Kerala" },
  { question: "What is the name of India's first bullet train project?", options: ["Bullet India", "High-Speed Rail", "Mumbai-Ahmedabad", "Delhi-Mumbai"], answer: "Mumbai-Ahmedabad" },
  { question: "Who is the current Vice President of India?", options: ["Jagdeep Dhankhar", "Venkaiah Naidu", "Hamid Ansari", "Pranab Mukherjee"], answer: "Jagdeep Dhankhar" },
  { question: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower", "Marigold"], answer: "Lotus" },
  { question: "Which Indian state has the highest number of UNESCO World Heritage Sites?", options: ["Tamil Nadu", "Uttar Pradesh", "Maharashtra", "Rajasthan"], answer: "Rajasthan" },
  { question: "What is the name of India's first nuclear submarine?", options: ["INS Arihant", "INS Vikrant", "INS Kalvari", "INS Chakra"], answer: "INS Arihant" },
];

// --- Helper: Get random questions from a category ---
const getRandomQuestions = (category, count) => {
  const shuffled = [...category].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = (lang) => {
  let math, reasoning, science, currentAffairs;
  
  if (lang === 'hi') {
    math = mathQuestions;
    reasoning = reasoningQuestions;
    science = scienceQuestions;
    currentAffairs = currentAffairsQuestions;
  } else {
    math = mathQuestionsEnglish;
    reasoning = reasoningQuestionsEnglish;
    science = scienceQuestionsEnglish;
    currentAffairs = currentAffairsQuestionsEnglish;
  }
  
  const paper = [
    ...getRandomQuestions(math, 25),
    ...getRandomQuestions(reasoning, 30),
    ...getRandomQuestions(science, 25),
    ...getRandomQuestions(currentAffairs, 20),
  ];
  return paper.sort(() => Math.random() - 0.5);
};

// --- Component ---
export default function RRBGroupDMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(5400); // 90 minutes = 5400 seconds
  const [language, setLanguage] = useState('hi');
  const [questions, setQuestions] = useState([]);
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
    setQuestions(buildQuestionPaper(language));
    setStarted(true);
    setTimer(5400);
    setAnswers({});
    setCurrent(0);
    setShowTimerWarning(false);
  };

  const submitExam = () => {
    let correctCount = 0;
    let totalMarks = 0;
    const details = questions.map((q, i) => {
      const isCorrect = answers[i] === q.answer;
      if (isCorrect) {
        correctCount++;
        totalMarks += 1; // +1 for correct answer
      } else if (answers[i] !== undefined) {
        totalMarks -= 0.25; // -0.25 for wrong answer (negative marking)
      }
      return {
        question: q.question,
        options: q.options,
        correctAnswer: q.answer,
        userAnswer: answers[i] || (language === 'hi' ? "प्रयास नहीं किया" : "Not Attempted"),
        isCorrect: isCorrect,
      };
    });
    setScore(Math.max(0, totalMarks)); // Score can't be negative
    setResultDetails(details);
    setSubmitted(true);
  };

  const toggleLanguage = () => {
    if (!started) {
      setLanguage(language === 'hi' ? 'en' : 'hi');
    }
  };

  const getText = (key) => {
    const texts = {
      'title': { hi: '🚂 RRB Group D Mock Test', en: '🚂 RRB Group D Mock Test' },
      'subtitle': { hi: 'भारतीय रेलवे भर्ती', en: 'Indian Railways Recruitment' },
      'questions': { hi: '📝 प्रश्न', en: '📝 Questions' },
      'time': { hi: '⏱️ समय', en: '⏱️ Time' },
      'instructions': { hi: '📋 निर्देश:', en: '📋 Instructions:' },
      'compulsory': { hi: 'सभी प्रश्न अनिवार्य हैं', en: 'All questions are compulsory' },
      'marks': { hi: 'प्रत्येक प्रश्न 1 अंक का है', en: 'Each question carries 1 mark' },
      'negative': { hi: 'गलत उत्तर पर -0.25 अंक', en: '-0.25 marks for wrong answer' },
      'start': { hi: '🚀 परीक्षा शुरू करें', en: '🚀 Start Exam' },
      'answered': { hi: 'उत्तर दिए:', en: 'Answered:' },
      'prev': { hi: '⬅ पिछला', en: '⬅ Prev' },
      'next': { hi: 'अगला ➡', en: 'Next ➡' },
      'submit': { hi: '📤 जमा करें', en: '📤 Submit' },
      'navigator': { hi: 'प्रश्न नेविगेटर', en: 'Question Navigator' },
      'answered_status': { hi: '🟢 उत्तर दिया', en: '🟢 Answered' },
      'current_status': { hi: '🔵 वर्तमान', en: '🔵 Current' },
      'unanswered_status': { hi: '⚪ अनुत्तरित', en: '⚪ Unanswered' },
      'congrats': { hi: '🎉 बधाई हो!', en: '🎉 Congratulations!' },
      'practice': { hi: '📖 अभ्यास जारी रखें!', en: '📖 Keep Practicing!' },
      'passed': { hi: '✔️ उत्तीर्ण', en: '✔️ Passed' },
      'failed': { hi: '❌ अनुत्तीर्ण', en: '❌ Failed' },
      'review': { hi: '📋 उत्तर समीक्षा', en: '📋 Answer Review' },
      'your_answer': { hi: 'आपका उत्तर:', en: 'Your Answer:' },
      'correct_answer': { hi: 'सही उत्तर:', en: 'Correct Answer:' },
      'new_test': { hi: '🔄 नई परीक्षा लें', en: '🔄 Take New Test' },
      'warning': { hi: '⚠️ 1 मिनट से कम समय शेष!', en: '⚠️ Less than 1 minute remaining!' },
    };
    return texts[key]?.[language] || texts[key]?.['en'] || key;
  };

  // Home Page
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🚂</div>
          <h1 style={{ 
            color: "#0f0c29", 
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
            background: "linear-gradient(90deg, #0f0c29, #302b63)",
            margin: "10px auto",
            width: "60px"
          }}></div>
          
          {/* Language Toggle */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginTop: "15px",
            marginBottom: "15px"
          }}>
            <span style={{ 
              fontSize: "14px", 
              fontWeight: language === 'hi' ? "700" : "400",
              color: language === 'hi' ? "#0f0c29" : "#999"
            }}>हिन्दी</span>
            <button
              onClick={toggleLanguage}
              style={{
                width: "50px",
                height: "26px",
                borderRadius: "13px",
                background: language === 'hi' ? "#302b63" : "#4a90d9",
                border: "none",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "white",
                position: "absolute",
                top: "3px",
                left: language === 'hi' ? "3px" : "27px",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}></div>
            </button>
            <span style={{ 
              fontSize: "14px", 
              fontWeight: language === 'en' ? "700" : "400",
              color: language === 'en' ? "#0f0c29" : "#999"
            }}>English</span>
          </div>
          
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
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0f0c29" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('time')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0f0c29" }}>90 min</div>
            </div>
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
              background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(48, 43, 99, 0.4)"
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
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "25px 20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
            marginBottom: "20px",
            animation: "slideIn 0.5s ease"
          }}>
            <h1 style={{ 
              fontSize: "24px", 
              marginBottom: "5px",
              color: "#2d3748"
            }}>
              {isPassed ? getText('congrats') : getText('practice')}
            </h1>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#0f0c29" }}>
              {score.toFixed(2)} <span style={{ fontSize: "20px", color: "#888" }}>/ {questions.length}</span>
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
              {language === 'hi' ? "भाषा: हिन्दी" : "Language: English"} • {getText('negative')}
            </div>
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
                style={{
                  backgroundColor: item.isCorrect ? "#f0fff4" : "#fff5f5",
                  borderLeft: `4px solid ${item.isCorrect ? "#48bb78" : "#fc8181"}`,
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
                    {item.isCorrect ? "✅" : "❌"}
                  </span>
                </div>
                <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                  <p style={{ margin: "3px 0" }}>
                    <strong>{getText('your_answer')}</strong>{" "}
                    <span style={{ color: item.isCorrect ? "#48bb78" : "#fc8181" }}>
                      {item.userAnswer}
                    </span>
                  </p>
                  {!item.isCorrect && item.userAnswer !== (language === 'hi' ? "प्रयास नहीं किया" : "Not Attempted") && (
                    <p style={{ margin: "3px 0", color: "#dc3545", fontSize: "12px" }}>
                      -0.25 {language === 'hi' ? 'अंक' : 'marks'}
                    </p>
                  )}
                  {!item.isCorrect && (
                    <p style={{ margin: "3px 0" }}>
                      <strong>{getText('correct_answer')}</strong>{" "}
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
                setTimer(5400);
                setShowTimerWarning(false);
                setQuestions([]);
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(48, 43, 99, 0.4)",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              {getText('new_test')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Page
  const q = questions[current] || { question: "", options: [], answer: "" };
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
            color: timer < 60 ? "#fc8181" : "#0f0c29",
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
          <h3 style={{
            fontSize: "16px",
            color: "#0f0c29",
            marginBottom: "16px",
            fontWeight: "600",
            lineHeight: "1.5"
          }}>
            {q.question}
          </h3>

          <div style={{ marginTop: "5px" }}>
            {q.options && q.options.map((op, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 12px",
                  margin: "5px 0",
                  backgroundColor: answers[current] === op ? "#ebf8ff" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #302b63" : "2px solid transparent",
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#302b63",
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
                  e.target.style.boxShadow = "0 4px 12px rgba(48, 43, 99, 0.3)";
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
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#302b63",
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
                  e.target.style.boxShadow = "0 4px 12px rgba(48, 43, 99, 0.3)";
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
                                   current === idx ? "#302b63" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #302b63" : "none",
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