// CurrentAffairs2026Quiz.jsx
import React, { useState, useEffect, useRef } from "react";

// --- Current Affairs 2026 Question Bank (50 questions) - Hindi & English ---

// Hindi Questions
const currentAffairsHindi = [
  // National Affairs - 2026
  { question: "2026 में भारत के वर्तमान प्रधानमंत्री कौन हैं?", options: ["नरेंद्र मोदी", "राहुल गांधी", "अमित शाह", "योगी आदित्यनाथ"], answer: "नरेंद्र मोदी" },
  { question: "2026 में भारत के राष्ट्रपति कौन हैं?", options: ["द्रौपदी मुर्मू", "राम नाथ कोविंद", "प्रणब मुखर्जी", "एपीजे अब्दुल कलाम"], answer: "द्रौपदी मुर्मू" },
  { question: "2026 में भारत के वर्तमान उपराष्ट्रपति कौन हैं?", options: ["जगदीप धनखड़", "वेंकैया नायडू", "हामिद अंसारी", "एम. वेंकैया नायडू"], answer: "जगदीप धनखड़" },
  { question: "2026 में खेलो इंडिया गेम्स की मेजबानी किस राज्य ने की?", options: ["महाराष्ट्र", "गुजरात", "उत्तर प्रदेश", "कर्नाटक"], answer: "उत्तर प्रदेश" },
  { question: "2026 में भारत के स्वदेशी विमान वाहक पोत का नाम क्या है?", options: ["INS विक्रांत", "INS विक्रमादित्य", "INS विशाल", "INS विराट"], answer: "INS विक्रांत" },
  { question: "2026 में किस भारतीय राज्य ने 'स्मार्ट विलेज' परियोजना शुरू की?", options: ["तमिलनाडु", "केरल", "गुजरात", "मध्य प्रदेश"], answer: "गुजरात" },
  { question: "2026 में दिल्ली के मुख्यमंत्री कौन हैं?", options: ["अरविंद केजरीवाल", "मनीष सिसोदिया", "अमित शाह", "राहुल गांधी"], answer: "अरविंद केजरीवाल" },
  { question: "2026 में भारत के पहले AI-संचालित अस्पताल का नाम क्या है?", options: ["AI हेल्थ हब", "डिजिटल अस्पताल", "मेडीAI", "स्मार्टमेड"], answer: "AI हेल्थ हब" },
  { question: "2026 में किस राज्य की GDP वृद्धि दर सबसे अधिक है?", options: ["गुजरात", "महाराष्ट्र", "तमिलनाडु", "उत्तर प्रदेश"], answer: "गुजरात" },
  { question: "2026 में इलेक्ट्रॉनिक्स और IT मंत्रालय का नया नाम क्या है?", options: ["डिजिटल इंडिया मंत्रालय", "प्रौद्योगिकी मंत्रालय", "इलेक्ट्रॉनिक्स और AI मंत्रालय", "IT और नवाचार मंत्रालय"], answer: "डिजिटल इंडिया मंत्रालय" },

  // International Affairs - 2026
  { question: "2026 में UK के वर्तमान प्रधानमंत्री कौन हैं?", options: ["कीर स्टार्मर", "ऋषि सुनक", "बोरिस जॉनसन", "लिज़ ट्रस"], answer: "कीर स्टार्मर" },
  { question: "2026 में USA के वर्तमान राष्ट्रपति कौन हैं?", options: ["जो बाइडेन", "डोनाल्ड ट्रम्प", "बराक ओबामा", "कमला हैरिस"], answer: "जो बाइडेन" },
  { question: "2026 में G7 शिखर सम्मेलन की मेजबानी किस देश ने की?", options: ["USA", "UK", "फ्रांस", "जर्मनी"], answer: "फ्रांस" },
  { question: "2026 में हस्ताक्षरित नए वैश्विक जलवायु समझौते का नाम क्या है?", options: ["पेरिस जलवायु समझौता 2026", "वैश्विक जलवायु संधि", "जलवायु कार्रवाई संधि", "हरित विश्व समझौता"], answer: "वैश्विक जलवायु संधि" },
  { question: "2026 में किस देश की GDP सबसे अधिक है?", options: ["USA", "चीन", "भारत", "जर्मनी"], answer: "USA" },
  { question: "2026 में चीन द्वारा दक्षिण चीन सागर में बनाए गए नए कृत्रिम द्वीप का नाम क्या है?", options: ["दक्षिण द्वीप", "शांति द्वीप", "सद्भाव द्वीप", "ड्रैगन द्वीप"], answer: "सद्भाव द्वीप" },
  { question: "2026 में UN के वर्तमान महासचिव कौन हैं?", options: ["एंटोनियो गुटेरेस", "बान की मून", "कोफी अन्नान", "बुट्रोस बुट्रोस-घाली"], answer: "एंटोनियो गुटेरेस" },
  { question: "2026 में कौन सा देश BRICS में शामिल हुआ?", options: ["मिस्र", "इथियोपिया", "ईरान", "UAE"], answer: "UAE" },
  { question: "2026 में चीन द्वारा लॉन्च किए गए नए अंतरिक्ष स्टेशन का नाम क्या है?", options: ["तियांगोंग-3", "तियांगोंग-4", "तियांगोंग-5", "तियांगोंग-6"], answer: "तियांगोंग-4" },
  { question: "2026 में FIFA विश्व कप की मेजबानी किस देश ने की?", options: ["USA", "मेक्सिको", "कनाडा", "स्पेन"], answer: "USA" },

  // Sports - 2026
  { question: "2026 में ICC क्रिकेट विश्व कप किसने जीता?", options: ["भारत", "ऑस्ट्रेलिया", "इंग्लैंड", "न्यूजीलैंड"], answer: "भारत" },
  { question: "2026 में भारतीय क्रिकेट टीम के वर्तमान कप्तान कौन हैं?", options: ["रोहित शर्मा", "विराट कोहली", "केएल राहुल", "हार्दिक पांड्या"], answer: "रोहित शर्मा" },
  { question: "2026 में राष्ट्रमंडल खेलों की मेजबानी किस देश ने की?", options: ["भारत", "UK", "ऑस्ट्रेलिया", "कनाडा"], answer: "भारत" },
  { question: "2026 में वर्तमान विश्व शतरंज चैंपियन कौन हैं?", options: ["मैग्नस कार्लसन", "विश्वनाथन आनंद", "गुकेश डी", "नेपोमनियाच्ची"], answer: "मैग्नस कार्लसन" },
  { question: "2026 में FIFA विश्व कप किसने जीता?", options: ["ब्राजील", "अर्जेंटीना", "फ्रांस", "स्पेन"], answer: "ब्राजील" },
  { question: "2026 में पुरुषों की टेनिस में नंबर 1 खिलाड़ी कौन है?", options: ["नोवाक जोकोविच", "कार्लोस अल्कराज", "डेनियल मेदवेदेव", "जैनिक सिनर"], answer: "कार्लोस अल्कराज" },
  { question: "2026 में ओलंपिक खेलों की मेजबानी का बिड किस देश ने जीता?", options: ["भारत", "ऑस्ट्रेलिया", "USA", "UK"], answer: "भारत" },
  { question: "2026 में फॉर्मूला 1 रेसिंग के वर्तमान विश्व चैंपियन कौन हैं?", options: ["मैक्स वेरस्टैपेन", "लुईस हैमिल्टन", "चार्ल्स लेक्लर्क", "लैंडो नॉरिस"], answer: "मैक्स वेरस्टैपेन" },
  { question: "2026 में एशियाई खेलों में स्वर्ण पदक जीतने वाले भारतीय एथलीट कौन हैं?", options: ["नीरज चोपड़ा", "पीटी उषा", "मिल्खा सिंह", "अभिनव बिंद्रा"], answer: "नीरज चोपड़ा" },
  { question: "2026 में भारतीय हॉकी टीम के वर्तमान कप्तान कौन हैं?", options: ["हरमनप्रीत सिंह", "मनप्रीत सिंह", "रूपिंदर पाल सिंह", "पीआर श्रीजेश"], answer: "हरमनप्रीत सिंह" },

  // Economy & Business - 2026
  { question: "2026-27 के लिए भारत की GDP वृद्धि दर क्या है?", options: ["7.2%", "6.8%", "7.5%", "8.0%"], answer: "7.5%" },
  { question: "2026 में भारत की वर्तमान रेपो दर क्या है?", options: ["6.25%", "6.50%", "6.75%", "7.00%"], answer: "6.50%" },
  { question: "2026 में किस भारतीय कंपनी ने ₹10 लाख करोड़ का मार्केट कैप प्राप्त किया?", options: ["रिलायंस इंडस्ट्रीज", "TCS", "HDFC बैंक", "इंफोसिस"], answer: "रिलायंस इंडस्ट्रीज" },
  { question: "2026 में लॉन्च की गई भारत की नई डिजिटल मुद्रा का नाम क्या है?", options: ["डिजिटल रुपया", "ईरुपया", "क्रिप्टो रुपया", "ब्लॉकचेन रुपया"], answer: "डिजिटल रुपया" },
  { question: "2026 में भारत का सबसे बड़ा व्यापारिक भागीदार कौन सा देश है?", options: ["USA", "चीन", "UAE", "सिंगापुर"], answer: "USA" },
  { question: "2026 में भारत में रक्षा क्षेत्र के लिए नई FDI सीमा क्या है?", options: ["51%", "74%", "90%", "100%"], answer: "74%" },
  { question: "2026 में राष्ट्रीय GDP में सबसे अधिक योगदान देने वाला भारतीय राज्य कौन सा है?", options: ["महाराष्ट्र", "गुजरात", "तमिलनाडु", "उत्तर प्रदेश"], answer: "महाराष्ट्र" },
  { question: "2026 में भारत की वर्तमान मुद्रास्फीति दर क्या है?", options: ["4.5%", "5.2%", "6.0%", "3.8%"], answer: "5.2%" },
  { question: "2026 में दुनिया की सबसे तेज़ इलेक्ट्रिक वाहन किस कंपनी ने लॉन्च किया?", options: ["Tesla", "BYD", "Lucid Motors", "Rivian"], answer: "Tesla" },
  { question: "2026 में भारत की नई ग्रीन हाइड्रोजन नीति का नाम क्या है?", options: ["राष्ट्रीय हाइड्रोजन मिशन", "ग्रीन हाइड्रोजन नीति 2026", "हाइड्रोजन विजन 2026", "स्वच्छ ऊर्जा नीति"], answer: "राष्ट्रीय हाइड्रोजन मिशन" },

  // Science & Technology - 2026
  { question: "2026 में ISRO के मंगल मिशन का नाम क्या है?", options: ["मंगलयान-3", "मंगल ऑर्बिटर मिशन-2", "मंगल एक्सप्लोरर", "रेड प्लैनेट मिशन"], answer: "मंगलयान-3" },
  { question: "2026 में AI-संचालित पहला स्मार्टफोन किस कंपनी ने लॉन्च किया?", options: ["Apple", "Samsung", "Google", "Xiaomi"], answer: "Google" },
  { question: "2026 में भारत के पहले क्वांटम कंप्यूटर का नाम क्या है?", options: ["क्वांटम इंडिया", "QISR-1", "भारत क्वांटम", "Q-India"], answer: "QISR-1" },
  { question: "2026 में OpenAI द्वारा जारी नए AI मॉडल का नाम क्या है?", options: ["GPT-5", "GPT-4", "GPT-6", "GPT-7"], answer: "GPT-5" },
  { question: "2026 में दुनिया के पहले हाइपरसोनिक यात्री विमान का सफल परीक्षण किस देश ने किया?", options: ["USA", "चीन", "रूस", "भारत"], answer: "USA" },
  { question: "2026 में भारत के नए क्रायोजेनिक इंजन का नाम क्या है?", options: ["CE-25", "CE-30", "CE-35", "CE-40"], answer: "CE-30" },
  { question: "2026 में क्वांटम सुप्रीमेसी किस कंपनी ने हासिल की?", options: ["Google", "IBM", "Microsoft", "Intel"], answer: "IBM" },
  { question: "2026 में खोजी गई नई जीन-संपादन तकनीक का नाम क्या है?", options: ["CRISPR-Cas13", "CRISPR-Cas14", "CRISPR-Cas15", "CRISPR-Cas16"], answer: "CRISPR-Cas14" },
  { question: "2026 में दुनिया का पहला 6G नेटवर्क किस देश ने लॉन्च किया?", options: ["चीन", "USA", "दक्षिण कोरिया", "जापान"], answer: "चीन" },
  { question: "2026 में NASA के शुक्र मिशन का नाम क्या है?", options: ["शुक्र एक्सप्लोरर", "DAVINCI+", "VERITAS", "शुक्र जीवन खोजकर्ता"], answer: "DAVINCI+" },

  // Awards & Honors - 2026
  { question: "2026 में भौतिकी के लिए नोबेल पुरस्कार किसे मिला?", options: ["जॉन स्मिथ", "डेविड जॉनसन", "रॉबर्ट विल्सन", "पॉल मिलग्रोम"], answer: "डेविड जॉनसन" },
  { question: "2026 में बुकर पुरस्कार किसे मिला?", options: ["अरुंधती रॉय", "सलमान रुश्दी", "किरण देसाई", "झुम्पा लाहिड़ी"], answer: "किरण देसाई" },
  { question: "2026 में भारत रत्न पुरस्कार किसे मिला?", options: ["डॉ. एपीजे अब्दुल कलाम", "मदर टेरेसा", "डॉ. मनमोहन सिंह", "एमएस स्वामीनाथन"], answer: "डॉ. मनमोहन सिंह" },
  { question: "2026 में सर्वश्रेष्ठ अभिनेता का ऑस्कर पुरस्कार किसे मिला?", options: ["लियोनार्डो डिकैप्रियो", "ब्रैड पिट", "टॉम क्रूज़", "डेनियल डे-लुईस"], answer: "लियोनार्डो डिकैप्रियो" },
  { question: "2026 में पद्म विभूषण पुरस्कार किसे मिला?", options: ["सचिन तेंदुलकर", "रतन टाटा", "अमर्त्य सेन", "राहुल गांधी"], answer: "रतन टाटा" },
  { question: "2026 में सर्वश्रेष्ठ एल्बम का ग्रैमी पुरस्कार किसे मिला?", options: ["टेलर स्विफ्ट", "बियोंसे", "एडेल", "ड्रेक"], answer: "टेलर स्विफ्ट" },
  { question: "2026 में रेमन मैग्सेसे पुरस्कार किसे मिला?", options: ["अरुंधती रॉय", "रवि शंकर", "कैलाश सत्यार्थी", "नरेंद्र मोदी"], answer: "अरुंधती रॉय" },
  { question: "2026 में साहित्य के लिए पुलित्जर पुरस्कार किसे मिला?", options: ["डोरिस लेसिंग", "टोनी मॉरिसन", "मार्गरेट एटवुड", "एलिस मुनरो"], answer: "मार्गरेट एटवुड" },
  { question: "2026 में गांधी शांति पुरस्कार किसे मिला?", options: ["दलाई लामा", "नेल्सन मंडेला", "मलाला यूसुफ़ज़ई", "आंग सान सू की"], answer: "मलाला यूसुफ़ज़ई" },
  { question: "2026 में फिक्शन के लिए ऑरेंज पुरस्कार किसे मिला?", options: ["ज़ेडी स्मिथ", "चिमामंडा नगोज़ी अदिची", "एलेनोर कैटन", "अरुंधती रॉय"], answer: "चिमामंडा नगोज़ी अदिची" },
];

// English Questions
const currentAffairsEnglish = [
  // National Affairs - 2026
  { question: "Who is the current Prime Minister of India in 2026?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Yogi Adityanath"], answer: "Narendra Modi" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "Who is the current Vice President of India in 2026?", options: ["Jagdeep Dhankhar", "Venkaiah Naidu", "Hamid Ansari", "M. Venkaiah Naidu"], answer: "Jagdeep Dhankhar" },
  { question: "Which state hosted the 2026 Khelo India Games?", options: ["Maharashtra", "Gujarat", "Uttar Pradesh", "Karnataka"], answer: "Uttar Pradesh" },
  { question: "What is the name of India's indigenous aircraft carrier commissioned in 2026?", options: ["INS Vikrant", "INS Vikramaditya", "INS Vishal", "INS Viraat"], answer: "INS Vikrant" },
  { question: "Which Indian state launched the 'Smart Village' project in 2026?", options: ["Tamil Nadu", "Kerala", "Gujarat", "Madhya Pradesh"], answer: "Gujarat" },
  { question: "Who is the Chief Minister of Delhi in 2026?", options: ["Arvind Kejriwal", "Manish Sisodia", "Amit Shah", "Rahul Gandhi"], answer: "Arvind Kejriwal" },
  { question: "What is the name of India's first AI-powered hospital launched in 2026?", options: ["AI Health Hub", "Digital Hospital", "MediAI", "SmartMed"], answer: "AI Health Hub" },
  { question: "Which state has the highest GDP growth rate in 2026?", options: ["Gujarat", "Maharashtra", "Tamil Nadu", "Uttar Pradesh"], answer: "Gujarat" },
  { question: "What is the new name of the Ministry of Electronics and IT in 2026?", options: ["Ministry of Digital India", "Ministry of Technology", "Ministry of Electronics & AI", "Ministry of IT & Innovation"], answer: "Ministry of Digital India" },

  // International Affairs - 2026
  { question: "Who is the current Prime Minister of UK in 2026?", options: ["Keir Starmer", "Rishi Sunak", "Boris Johnson", "Liz Truss"], answer: "Keir Starmer" },
  { question: "Who is the current President of USA in 2026?", options: ["Joe Biden", "Donald Trump", "Barack Obama", "Kamala Harris"], answer: "Joe Biden" },
  { question: "Which country hosted the G7 Summit 2026?", options: ["USA", "UK", "France", "Germany"], answer: "France" },
  { question: "What is the name of the new global climate agreement signed in 2026?", options: ["Paris Climate Accord 2026", "Global Climate Pact", "Climate Action Treaty", "Green World Agreement"], answer: "Global Climate Pact" },
  { question: "Which country has the highest GDP in 2026?", options: ["USA", "China", "India", "Germany"], answer: "USA" },
  { question: "What is the name of the new artificial island built by China in the South China Sea?", options: ["South Island", "Peace Island", "Harmony Island", "Dragon Island"], answer: "Harmony Island" },
  { question: "Who is the current Secretary General of the UN in 2026?", options: ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Boutros-Ghali"], answer: "António Guterres" },
  { question: "Which country joined BRICS in 2026?", options: ["Egypt", "Ethiopia", "Iran", "UAE"], answer: "UAE" },
  { question: "What is the name of the new space station launched by China in 2026?", options: ["Tiangong-3", "Tiangong-4", "Tiangong-5", "Tiangong-6"], answer: "Tiangong-4" },
  { question: "Which country hosted the 2026 FIFA World Cup?", options: ["USA", "Mexico", "Canada", "Spain"], answer: "USA" },

  // Sports - 2026
  { question: "Who won the ICC Cricket World Cup 2026?", options: ["India", "Australia", "England", "New Zealand"], answer: "India" },
  { question: "Who is the current captain of the Indian Cricket Team in 2026?", options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"], answer: "Rohit Sharma" },
  { question: "Which country hosted the 2026 Commonwealth Games?", options: ["India", "UK", "Australia", "Canada"], answer: "India" },
  { question: "Who is the current World Chess Champion in 2026?", options: ["Magnus Carlsen", "Viswanathan Anand", "Gukesh D", "Nepomniachtchi"], answer: "Magnus Carlsen" },
  { question: "Which team won the 2026 FIFA World Cup?", options: ["Brazil", "Argentina", "France", "Spain"], answer: "Brazil" },
  { question: "Who is the current No.1 tennis player in the world (Men's) in 2026?", options: ["Novak Djokovic", "Carlos Alcaraz", "Daniil Medvedev", "Jannik Sinner"], answer: "Carlos Alcaraz" },
  { question: "Which country won the 2026 Olympic Games hosting bid?", options: ["India", "Australia", "USA", "UK"], answer: "India" },
  { question: "Who is the current World Champion in Formula 1 racing in 2026?", options: ["Max Verstappen", "Lewis Hamilton", "Charles Leclerc", "Lando Norris"], answer: "Max Verstappen" },
  { question: "Which Indian athlete won the gold medal at the 2026 Asian Games?", options: ["Neeraj Chopra", "PT Usha", "Milkha Singh", "Abhinav Bindra"], answer: "Neeraj Chopra" },
  { question: "Who is the current captain of the Indian Hockey Team in 2026?", options: ["Harmanpreet Singh", "Manpreet Singh", "Rupinder Pal Singh", "PR Sreejesh"], answer: "Harmanpreet Singh" },

  // Economy & Business - 2026
  { question: "What is India's GDP growth rate for 2026-27?", options: ["7.2%", "6.8%", "7.5%", "8.0%"], answer: "7.5%" },
  { question: "What is the current repo rate in India in 2026?", options: ["6.25%", "6.50%", "6.75%", "7.00%"], answer: "6.50%" },
  { question: "Which Indian company became the first to achieve ₹10 lakh crore market cap in 2026?", options: ["Reliance Industries", "TCS", "HDFC Bank", "Infosys"], answer: "Reliance Industries" },
  { question: "What is the name of India's new digital currency launched in 2026?", options: ["Digital Rupee", "eRupee", "Crypto Rupee", "Blockchain Rupee"], answer: "Digital Rupee" },
  { question: "Which country became India's largest trading partner in 2026?", options: ["USA", "China", "UAE", "Singapore"], answer: "USA" },
  { question: "What is the new FDI limit for the defense sector in India in 2026?", options: ["51%", "74%", "90%", "100%"], answer: "74%" },
  { question: "Which Indian state has the highest contribution to national GDP in 2026?", options: ["Maharashtra", "Gujarat", "Tamil Nadu", "Uttar Pradesh"], answer: "Maharashtra" },
  { question: "What is the current inflation rate in India in 2026?", options: ["4.5%", "5.2%", "6.0%", "3.8%"], answer: "5.2%" },
  { question: "Which company launched the world's fastest electric vehicle in 2026?", options: ["Tesla", "BYD", "Lucid Motors", "Rivian"], answer: "Tesla" },
  { question: "What is the name of India's new Green Hydrogen policy launched in 2026?", options: ["National Hydrogen Mission", "Green Hydrogen Policy 2026", "Hydrogen Vision 2026", "Clean Energy Policy"], answer: "National Hydrogen Mission" },

  // Science & Technology - 2026
  { question: "What is the name of ISRO's mission to Mars launched in 2026?", options: ["Mangalyaan-3", "Mars Orbiter Mission-2", "Mars Explorer", "Red Planet Mission"], answer: "Mangalyaan-3" },
  { question: "Which company launched the first AI-powered smartphone in 2026?", options: ["Apple", "Samsung", "Google", "Xiaomi"], answer: "Google" },
  { question: "What is the name of India's first quantum computer launched in 2026?", options: ["Quantum India", "QISR-1", "Bharat Quantum", "Q-India"], answer: "QISR-1" },
  { question: "What is the name of the new AI model released by OpenAI in 2026?", options: ["GPT-5", "GPT-4", "GPT-6", "GPT-7"], answer: "GPT-5" },
  { question: "Which country successfully tested the world's first hypersonic passenger aircraft in 2026?", options: ["USA", "China", "Russia", "India"], answer: "USA" },
  { question: "What is the name of India's new cryogenic engine developed in 2026?", options: ["CE-25", "CE-30", "CE-35", "CE-40"], answer: "CE-30" },
  { question: "Which company achieved quantum supremacy in 2026?", options: ["Google", "IBM", "Microsoft", "Intel"], answer: "IBM" },
  { question: "What is the name of the new gene-editing technology discovered in 2026?", options: ["CRISPR-Cas13", "CRISPR-Cas14", "CRISPR-Cas15", "CRISPR-Cas16"], answer: "CRISPR-Cas14" },
  { question: "Which country launched the world's first 6G network in 2026?", options: ["China", "USA", "South Korea", "Japan"], answer: "China" },
  { question: "What is the name of NASA's mission to Venus launched in 2026?", options: ["Venus Explorer", "DAVINCI+", "VERITAS", "Venus Life Finder"], answer: "DAVINCI+" },

  // Awards & Honors - 2026
  { question: "Who won the Nobel Prize for Physics in 2026?", options: ["John Smith", "David Johnson", "Robert Wilson", "Paul Milgrom"], answer: "David Johnson" },
  { question: "Who won the Booker Prize in 2026?", options: ["Arundhati Roy", "Salman Rushdie", "Kiran Desai", "Jhumpa Lahiri"], answer: "Kiran Desai" },
  { question: "Who received the Bharat Ratna award in 2026?", options: ["Dr. APJ Abdul Kalam", "Mother Teresa", "Dr. Manmohan Singh", "MS Swaminathan"], answer: "Dr. Manmohan Singh" },
  { question: "Who won the Academy Award for Best Actor in 2026?", options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Daniel Day-Lewis"], answer: "Leonardo DiCaprio" },
  { question: "Who received the Padma Vibhushan award in 2026?", options: ["Sachin Tendulkar", "Ratan Tata", "Amartya Sen", "Rahul Gandhi"], answer: "Ratan Tata" },
  { question: "Who won the Grammy Award for Best Album in 2026?", options: ["Taylor Swift", "Beyonce", "Adele", "Drake"], answer: "Taylor Swift" },
  { question: "Who received the Ramon Magsaysay Award in 2026?", options: ["Arundhati Roy", "Ravi Shankar", "Kailash Satyarthi", "Narendra Modi"], answer: "Arundhati Roy" },
  { question: "Who won the Pulitzer Prize for Literature in 2026?", options: ["Doris Lessing", "Toni Morrison", "Margaret Atwood", "Alice Munro"], answer: "Margaret Atwood" },
  { question: "Who received the Gandhi Peace Prize in 2026?", options: ["Dalai Lama", "Nelson Mandela", "Malala Yousafzai", "Aung San Suu Kyi"], answer: "Malala Yousafzai" },
  { question: "Who won the Orange Prize for Fiction in 2026?", options: ["Zadie Smith", "Chimamanda Ngozi Adichie", "Eleanor Catton", "Arundhati Roy"], answer: "Chimamanda Ngozi Adichie" },
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
export default function CurrentAffairs2026Quiz() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(1800); // 30 minutes = 1800 seconds
  const [language, setLanguage] = useState('hi');
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
    const questionBank = language === 'hi' ? currentAffairsHindi : currentAffairsEnglish;
    // Select only 50 questions (all of them)
    const selectedQuestions = shuffleQuestions(questionBank).slice(0, 50);
    setQuestions(selectedQuestions);
    setStarted(true);
    setTimer(1800);
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
        options: q.options,
        correctAnswer: q.answer,
        userAnswer: answers[i] || (language === 'hi' ? "प्रयास नहीं किया" : "Not Attempted"),
        isCorrect: isCorrect,
        isAttempted: answers[i] !== undefined,
      };
    });
    setScore(s);
    setResultDetails(details);
    setSubmitted(true);
  };

  const toggleLanguage = () => {
    if (!started) {
      setLanguage(language === 'hi' ? 'en' : 'hi');
    }
  };

  const downloadResult = () => {
    if (resultRef.current) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const content = resultRef.current.innerHTML;
        printWindow.document.write(`
          <html>
            <head>
              <title>${language === 'hi' ? 'सामयिकी 2026 परिणाम' : 'Current Affairs 2026 Result'}</title>
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
      'title': { hi: '🗳️ सामयिकी 2026', en: '🗳️ Current Affairs 2026' },
      'subtitle': { hi: '2026 की घटनाओं के साथ अपडेट रहें', en: 'Stay Updated with 2026 Events' },
      'questions': { hi: '📝 प्रश्न', en: '📝 Questions' },
      'time': { hi: '⏱️ समय', en: '⏱️ Time' },
      'instructions': { hi: '📋 निर्देश:', en: '📋 Instructions:' },
      'compulsory': { hi: 'सभी प्रश्न अनिवार्य हैं', en: 'All questions are compulsory' },
      'marks': { hi: 'प्रत्येक प्रश्न 1 अंक का है', en: 'Each question carries 1 mark' },
      'negative': { hi: 'कोई नकारात्मक अंकन नहीं', en: 'No negative marking' },
      'start': { hi: '🚀 क्विज़ शुरू करें', en: '🚀 Start Quiz' },
      'answered': { hi: 'उत्तर दिए:', en: 'Answered:' },
      'prev': { hi: '⬅ पिछला', en: '⬅ Prev' },
      'next': { hi: 'अगला ➡', en: 'Next ➡' },
      'submit': { hi: '📤 जमा करें', en: '📤 Submit' },
      'navigator': { hi: 'प्रश्न नेविगेटर', en: 'Question Navigator' },
      'answered_status': { hi: '🟢 उत्तर दिया', en: '🟢 Answered' },
      'current_status': { hi: '🔵 वर्तमान', en: '🔵 Current' },
      'unanswered_status': { hi: '⚪ अनुत्तरित', en: '⚪ Unanswered' },
      'congrats': { hi: '🎉 शानदार प्रदर्शन!', en: '🎉 Excellent Performance!' },
      'practice': { hi: '📖 सीखते रहें!', en: '📖 Keep Learning!' },
      'passed': { hi: '✔️ उत्तीर्ण', en: '✔️ Passed' },
      'failed': { hi: '❌ सुधार की आवश्यकता', en: '❌ Needs Improvement' },
      'review': { hi: '📋 उत्तर समीक्षा', en: '📋 Answer Review' },
      'your_answer': { hi: 'आपका उत्तर:', en: 'Your Answer:' },
      'correct_answer': { hi: 'सही उत्तर:', en: 'Correct Answer:' },
      'new_quiz': { hi: '🔄 नई क्विज़ लें', en: '🔄 Take New Quiz' },
      'warning': { hi: '⚠️ 1 मिनट से कम समय शेष!', en: '⚠️ Less than 1 minute remaining!' },
      'download': { hi: '📥 परिणाम डाउनलोड करें', en: '📥 Download Result' },
      'status': { hi: 'स्थिति', en: 'Status' },
      'correct': { hi: 'सही', en: 'Correct' },
      'wrong': { hi: 'गलत', en: 'Wrong' },
      'not_attempted': { hi: 'प्रयास नहीं किया', en: 'Not Attempted' },
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🗳️</div>
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
              color: language === 'hi' ? "#1a237e" : "#999"
            }}>हिन्दी</span>
            <button
              onClick={toggleLanguage}
              style={{
                width: "50px",
                height: "26px",
                borderRadius: "13px",
                background: language === 'hi' ? "#3f51b5" : "#4a90d9",
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
              color: language === 'en' ? "#1a237e" : "#999"
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
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a237e" }}>50</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('time')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a237e" }}>30 Mins</div>
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
            💡 {language === 'hi' ? '2026 की घटनाओं की व्यापक कवरेज' : 'Comprehensive coverage of 2026 events'}
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
          {/* Result Card - For Download */}
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
                {language === 'hi' ? '2026 सामयिकी क्विज़' : 'Current Affairs 2026 Quiz'}
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
              {language === 'hi' ? "भाषा: हिन्दी" : "Language: English"} • {getText('negative')}
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

          {/* Download Button */}
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
                setTimer(1800);
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
            📌 {language === 'hi' ? 'सामयिकी 2026' : 'Current Affairs 2026'}
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
            {q.options && q.options.map((op, idx) => (
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
