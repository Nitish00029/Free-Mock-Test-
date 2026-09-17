// DailyCurrentAffairsQuiz.jsx
import React, { useState, useEffect, useRef } from "react";

// --- Current Affairs Question Bank (88 questions) - Hindi & English ---

// Hindi Questions
const currentAffairsHindi = [
  // National Affairs
  { question: "भारत के वर्तमान प्रधानमंत्री कौन हैं?", options: ["नरेंद्र मोदी", "राहुल गांधी", "अमित शाह", "अरविंद केजरीवाल"], answer: "नरेंद्र मोदी" },
  { question: "2026 में भारत के राष्ट्रपति कौन हैं?", options: ["द्रौपदी मुर्मू", "राम नाथ कोविंद", "प्रणब मुखर्जी", "एपीजे अब्दुल कलाम"], answer: "द्रौपदी मुर्मू" },
  { question: "भारत के वर्तमान उपराष्ट्रपति कौन हैं?", options: ["जगदीप धनखड़", "वेंकैया नायडू", "हामिद अंसारी", "प्रणब मुखर्जी"], answer: "जगदीप धनखड़" },
  { question: "दिल्ली के मुख्यमंत्री कौन हैं?", options: ["अरविंद केजरीवाल", "मनीष सिसोदिया", "अमित शाह", "राहुल गांधी"], answer: "अरविंद केजरीवाल" },
  { question: "भारत के किस राज्य की जनसंख्या सबसे अधिक है?", options: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"], answer: "उत्तर प्रदेश" },
  { question: "किस राज्य की साक्षरता दर सबसे अधिक है?", options: ["केरल", "तमिलनाडु", "महाराष्ट्र", "गुजरात"], answer: "केरल" },
  { question: "भारत की राजधानी क्या है?", options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"], answer: "नई दिल्ली" },
  { question: "भारत की मुद्रा क्या है?", options: ["रुपया", "डॉलर", "पाउंड", "येन"], answer: "रुपया" },
  { question: "भारत का राष्ट्रीय पशु क्या है?", options: ["शेर", "बाघ", "हाथी", "मोर"], answer: "बाघ" },
  { question: "भारत का राष्ट्रीय पुष्प क्या है?", options: ["कमल", "गुलाब", "सूरजमुखी", "गेंदा"], answer: "कमल" },
  { question: "भारत का राष्ट्रीय खेल क्या है?", options: ["क्रिकेट", "हॉकी", "फुटबॉल", "बैडमिंटन"], answer: "हॉकी" },
  { question: "भारतीय राष्ट्रीय गान किसने लिखा?", options: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी", "सुभाष चंद्र बोस"], answer: "रवींद्रनाथ टैगोर" },
  { question: "ISRO का पूर्ण रूप क्या है?", options: ["भारतीय अंतरिक्ष अनुसंधान संगठन", "अंतर्राष्ट्रीय अंतरिक्ष अनुसंधान संगठन", "भारतीय अंतरिक्ष अनुसंधान कार्यालय", "अंतर्राष्ट्रीय अंतरिक्ष अनुसंधान कार्यालय"], answer: "भारतीय अंतरिक्ष अनुसंधान संगठन" },
  { question: "किस शहर को भारत का सिलिकॉन वैली कहा जाता है?", options: ["मुंबई", "दिल्ली", "बेंगलुरु", "चेन्नई"], answer: "बेंगलुरु" },
  { question: "किस नदी को 'दक्षिण की गंगा' कहा जाता है?", options: ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"], answer: "कावेरी" },

  // International Affairs
  { question: "2023 में G20 शिखर सम्मेलन की मेजबानी किस देश ने की?", options: ["भारत", "USA", "UK", "चीन"], answer: "भारत" },
  { question: "USA की राजधानी क्या है?", options: ["न्यूयॉर्क", "वाशिंगटन D.C.", "लॉस एंजिल्स", "शिकागो"], answer: "वाशिंगटन D.C." },
  { question: "जापान की मुद्रा क्या है?", options: ["युआन", "येन", "वोन", "रिंगित"], answer: "येन" },
  { question: "ऑस्ट्रेलिया की राजधानी क्या है?", options: ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"], answer: "कैनबरा" },
  { question: "किस देश को 'उगते सूरज की भूमि' कहा जाता है?", options: ["चीन", "जापान", "दक्षिण कोरिया", "भारत"], answer: "जापान" },
  { question: "USA के वर्तमान राष्ट्रपति कौन हैं?", options: ["जो बाइडेन", "डोनाल्ड ट्रम्प", "बराक ओबामा", "जॉर्ज बुश"], answer: "जो बाइडेन" },
  { question: "फ्रांस की राजधानी क्या है?", options: ["लंदन", "पेरिस", "बर्लिन", "मैड्रिड"], answer: "पेरिस" },
  { question: "रूस की राजधानी क्या है?", options: ["मॉस्को", "सेंट पीटर्सबर्ग", "कीव", "मिन्स्क"], answer: "मॉस्को" },
  { question: "विश्व में सबसे अधिक जनसंख्या वाला देश कौन सा है?", options: ["भारत", "चीन", "USA", "इंडोनेशिया"], answer: "भारत" },
  { question: "UK की मुद्रा क्या है?", options: ["डॉलर", "यूरो", "पाउंड", "येन"], answer: "पाउंड" },

  // Economy & Business
  { question: "GDP का पूर्ण रूप क्या है?", options: ["सकल घरेलू उत्पाद", "सामान्य विकास योजना", "वैश्विक घरेलू उत्पाद", "विकास और वृद्धि योजना"], answer: "सकल घरेलू उत्पाद" },
  { question: "भारत की पहली बुलेट ट्रेन परियोजना का नाम क्या है?", options: ["बुलेट इंडिया", "हाई-स्पीड रेल", "मुंबई-अहमदाबाद", "दिल्ली-मुंबई"], answer: "मुंबई-अहमदाबाद" },
  { question: "विश्व की सबसे बड़ी अर्थव्यवस्था कौन सी है?", options: ["USA", "चीन", "जापान", "जर्मनी"], answer: "USA" },
  { question: "RBI का पूर्ण रूप क्या है?", options: ["भारतीय रिजर्व बैंक", "भारतीय क्षेत्रीय बैंक", "भारतीय शाही बैंक", "भारतीय गणराज्य बैंक"], answer: "भारतीय रिजर्व बैंक" },
  { question: "भारत का सबसे बड़ा स्टॉक एक्सचेंज कौन सा है?", options: ["BSE", "NSE", "MCX", "NCDEX"], answer: "NSE" },

  // Science & Technology
  { question: "भारत की पहली परमाणु पनडुब्बी का नाम क्या है?", options: ["INS अरिहंत", "INS विक्रांत", "INS कलवरी", "INS चक्र"], answer: "INS अरिहंत" },
  { question: "भारत का पहला AI-संचालित स्कूल कौन सा है?", options: ["AI Academy", "Coding School", "नालंदा AI स्कूल", "डिजिटल स्कूल"], answer: "नालंदा AI स्कूल" },
  { question: "पहला AI चैटबॉट किस कंपनी ने लॉन्च किया?", options: ["Google", "OpenAI", "Microsoft", "Amazon"], answer: "OpenAI" },
  { question: "भारत के चंद्र मिशन का नाम क्या है?", options: ["चंद्रयान", "मंगलयान", "गगनयान", "आदित्य"], answer: "चंद्रयान" },
  { question: "अंतरिक्ष में सबसे अधिक उपग्रह किस देश के हैं?", options: ["USA", "चीन", "रूस", "भारत"], answer: "USA" },

  // Sports
  { question: "भारतीय क्रिकेट टीम के वर्तमान कप्तान कौन हैं?", options: ["रोहित शर्मा", "विराट कोहली", "MS धोनी", "केएल राहुल"], answer: "रोहित शर्मा" },
  { question: "क्रिकेट विश्व कप 2023 किस देश ने जीता?", options: ["ऑस्ट्रेलिया", "भारत", "इंग्लैंड", "न्यूजीलैंड"], answer: "ऑस्ट्रेलिया" },
  { question: "वर्तमान विश्व शतरंज चैंपियन कौन हैं?", options: ["मैग्नस कार्लसन", "विश्वनाथन आनंद", "गैरी कास्पारोव", "बॉबी फिशर"], answer: "मैग्नस कार्लसन" },
  { question: "एथलेटिक्स में ओलंपिक स्वर्ण जीतने वाले पहले भारतीय कौन हैं?", options: ["नीरज चोपड़ा", "पीटी उषा", "मिल्खा सिंह", "अभिनव बिंद्रा"], answer: "नीरज चोपड़ा" },
  { question: "जापान का राष्ट्रीय खेल क्या है?", options: ["सूमो कुश्ती", "बेसबॉल", "कराटे", "जूडो"], answer: "सूमो कुश्ती" },

  // History & Culture
  { question: "किस भारतीय राज्य में सबसे अधिक यूनेस्को विश्व धरोहर स्थल हैं?", options: ["तमिलनाडु", "उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान"], answer: "राजस्थान" },
  { question: "ताजमहल किसने बनवाया?", options: ["शाहजहाँ", "अकबर", "औरंगज़ेब", "जहाँगीर"], answer: "शाहजहाँ" },
  { question: "सबसे पुरानी सभ्यता कौन सी है?", options: ["सिंधु घाटी", "मेसोपोटामिया", "मिस्र", "चीनी"], answer: "मेसोपोटामिया" },
  { question: "भारतीय संविधान के जनक कौन कहलाते हैं?", options: ["महात्मा गांधी", "डॉ. बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"], answer: "डॉ. बी.आर. अंबेडकर" },
  { question: "'पुनर्जागरण' का क्या अर्थ है?", options: ["पुनर्जन्म", "क्रांति", "सुधार", "विद्रोह"], answer: "पुनर्जन्म" },

  // Environment & Geography
  { question: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"], answer: "प्रशांत महासागर" },
  { question: "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?", options: ["सहारा", "गोबी", "कालाहारी", "अरेबियन"], answer: "सहारा" },
  { question: "विश्व की सबसे ऊंची पर्वत चोटी कौन सी है?", options: ["माउंट एवरेस्ट", "K2", "कंचनजंगा", "ल्होत्से"], answer: "माउंट एवरेस्ट" },
  { question: "विश्व की सबसे लंबी नदी कौन सी है?", options: ["नील", "अमेज़न", "यांग्त्ज़ी", "मिसिसिपी"], answer: "नील" },
  { question: "सबसे बड़ा महाद्वीप कौन सा है?", options: ["अफ्रीका", "एशिया", "उत्तरी अमेरिका", "यूरोप"], answer: "एशिया" },

  // Awards & Honors
  { question: "भारत का सर्वोच्च नागरिक पुरस्कार कौन सा है?", options: ["भारत रत्न", "पद्म विभूषण", "पद्म भूषण", "पद्म श्री"], answer: "भारत रत्न" },
  { question: "2023 का नोबेल शांति पुरस्कार किसे मिला?", options: ["नर्गिस मोहम्मदी", "मलाला यूसुफ़ज़ई", "ग्रेटा थुनबर्ग", "जेसिंडा अर्डर्न"], answer: "नर्गिस मोहम्मदी" },
  { question: "भारत का सर्वोच्च सैन्य पुरस्कार कौन सा है?", options: ["परम वीर चक्र", "अशोक चक्र", "वीर चक्र", "महा वीर चक्र"], answer: "परम वीर चक्र" },
  { question: "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन हैं?", options: ["रवींद्रनाथ टैगोर", "सीवी रमन", "मदर टेरेसा", "अमर्त्य सेन"], answer: "रवींद्रनाथ टैगोर" },

  // Defense & Security
  { question: "भारत की पहली स्वदेशी विमान वाहक पोत का नाम क्या है?", options: ["INS विक्रांत", "INS विक्रमादित्य", "INS विराट", "INS विशाल"], answer: "INS विक्रांत" },
  { question: "भारत के वर्तमान सेना प्रमुख कौन हैं?", options: ["जनरल मनोज पांडे", "जनरल एमएम नरवाने", "जनरल बिपिन रावत", "जनरल दलबीर सिंह"], answer: "जनरल मनोज पांडे" },
  { question: "DRDO का पूर्ण रूप क्या है?", options: ["रक्षा अनुसंधान एवं विकास संगठन", "रक्षा अनुसंधान एवं विकास कार्यालय", "रक्षा अनुसंधान एवं विकास संचालन", "रक्षा अनुसंधान एवं विकास संगठन"], answer: "रक्षा अनुसंधान एवं विकास संगठन" },

  // Miscellaneous
  { question: "UNICEF का पूर्ण रूप क्या है?", options: ["संयुक्त राष्ट्र अंतर्राष्ट्रीय बाल आपातकालीन कोष", "संयुक्त राष्ट्र अंतर्राष्ट्रीय बाल शिक्षा कोष", "संयुक्त राष्ट्र अंतर्राष्ट्रीय बाल पर्यावरण कोष", "संयुक्त राष्ट्र अंतर्राष्ट्रीय बाल रोजगार कोष"], answer: "संयुक्त राष्ट्र अंतर्राष्ट्रीय बाल आपातकालीन कोष" },
  { question: "WHO का पूर्ण रूप क्या है?", options: ["विश्व स्वास्थ्य संगठन", "विश्व स्वास्थ्य कार्यालय", "विश्व स्वास्थ्य संचालन", "विश्व स्वास्थ्य संगठन"], answer: "विश्व स्वास्थ्य संगठन" },
  { question: "UNESCO का पूर्ण रूप क्या है?", options: ["संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक एवं सांस्कृतिक संगठन", "संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक एवं सांस्कृतिक कार्यालय", "संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक एवं सांस्कृतिक संचालन", "संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक एवं सांस्कृतिक संगठन"], answer: "संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक एवं सांस्कृतिक संगठन" },
  { question: "NATO का पूर्ण रूप क्या है?", options: ["उत्तरी अटलांटिक संधि संगठन", "उत्तरी अमेरिकी संधि संगठन", "उत्तरी अटलांटिक व्यापार संगठन", "उत्तरी अमेरिकी व्यापार संगठन"], answer: "उत्तरी अटलांटिक संधि संगठन" },
  { question: "SAARC का पूर्ण रूप क्या है?", options: ["दक्षिण एशियाई क्षेत्रीय सहयोग संघ", "दक्षिण अमेरिकी क्षेत्रीय सहयोग संघ", "दक्षिण एशियाई क्षेत्रीय समुदाय संघ", "दक्षिण एशियाई गठबंधन क्षेत्रीय सहयोग"], answer: "दक्षिण एशियाई क्षेत्रीय सहयोग संघ" },

  // Additional Questions
  { question: "कॉफी का सबसे बड़ा उत्पादक देश कौन सा है?", options: ["ब्राजील", "वियतनाम", "कोलंबिया", "इथियोपिया"], answer: "ब्राजील" },
  { question: "सोने का रासायनिक प्रतीक क्या है?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au" },
  { question: "किस ग्रह को 'लाल ग्रह' कहा जाता है?", options: ["शुक्र", "मंगल", "बृहस्पति", "शनि"], answer: "मंगल" },
  { question: "मानव शरीर का सबसे बड़ा अंग कौन सा है?", options: ["यकृत", "हृदय", "त्वचा", "मस्तिष्क"], answer: "त्वचा" },
  { question: "प्रकाश की गति लगभग कितनी है?", options: ["3 × 10⁸ m/s", "3 × 10⁹ m/s", "3 × 10⁷ m/s", "3 × 10⁶ m/s"], answer: "3 × 10⁸ m/s" },
  { question: "पृथ्वी के वायुमंडल में सबसे प्रचुर गैस कौन सी है?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"], answer: "नाइट्रोजन" },
  { question: "मीथेन का रासायनिक सूत्र क्या है?", options: ["CH4", "C2H6", "C3H8", "C4H10"], answer: "CH4" },
  { question: "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?", options: ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "भोजन पचाना"], answer: "ऑक्सीजन ले जाना" },
  { question: "पौधों द्वारा भोजन बनाने की प्रक्रिया को क्या कहते हैं?", options: ["श्वसन", "प्रकाश संश्लेषण", "किण्वन", "पाचन"], answer: "प्रकाश संश्लेषण" },
  { question: "कौन सा विटामिन सूर्य के प्रकाश से बनता है?", options: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"], answer: "विटामिन D" },
  { question: "बल की इकाई क्या है?", options: ["न्यूटन", "जूल", "वाट", "पास्कल"], answer: "न्यूटन" },
  { question: "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?", options: ["शनि", "बृहस्पति", "नेपच्यून", "यूरेनस"], answer: "बृहस्पति" },
  { question: "पानी का क्वथनांक क्या है?", options: ["90°C", "95°C", "100°C", "105°C"], answer: "100°C" },
  { question: "पानी का हिमांक क्या है?", options: ["-5°C", "0°C", "5°C", "10°C"], answer: "0°C" },
  { question: "सूर्य के सबसे निकट कौन सा ग्रह है?", options: ["शुक्र", "बुध", "मंगल", "पृथ्वी"], answer: "बुध" },
  { question: "ऑक्सीजन का रासायनिक प्रतीक क्या है?", options: ["O", "O2", "Ox", "Om"], answer: "O" },
  { question: "जीवित जीवों के अध्ययन को क्या कहते हैं?", options: ["भौतिकी", "जीव विज्ञान", "रसायन विज्ञान", "भूविज्ञान"], answer: "जीव विज्ञान" },
  { question: "किस ग्रह के सबसे अधिक चंद्रमा हैं?", options: ["बृहस्पति", "शनि", "यूरेनस", "नेपच्यून"], answer: "शनि" },
  { question: "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?", options: ["सोना", "लोहा", "हीरा", "प्लैटिनम"], answer: "हीरा" },
  { question: "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?", options: ["CO", "CO2", "C2O", "C2O2"], answer: "CO2" },
  { question: "सामान्य नमक का रासायनिक सूत्र क्या है?", options: ["NaCl", "NaOH", "HCl", "KCl"], answer: "NaCl" },
  { question: "मानव शरीर में कौन सा अंग रक्त पंप करता है?", options: ["मस्तिष्क", "यकृत", "हृदय", "फेफड़े"], answer: "हृदय" },
  { question: "लोहे का रासायनिक प्रतीक क्या है?", options: ["Fe", "Ir", "In", "I"], answer: "Fe" },
  { question: "चांदी का रासायनिक प्रतीक क्या है?", options: ["Si", "Ag", "Au", "Fe"], answer: "Ag" },
  { question: "भारत का राष्ट्रीय पक्षी क्या है?", options: ["मोर", "तोता", "कोयल", "गरुड़"], answer: "मोर" },
  { question: "भारत का राष्ट्रीय वृक्ष क्या है?", options: ["बरगद", "पीपल", "नीम", "आम"], answer: "बरगद" },
];

// English Questions (same 88 questions translated)
const currentAffairsEnglish = [
  // National Affairs
  { question: "Who is the current Prime Minister of India?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal"], answer: "Narendra Modi" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "Who is the current Vice President of India?", options: ["Jagdeep Dhankhar", "Venkaiah Naidu", "Hamid Ansari", "Pranab Mukherjee"], answer: "Jagdeep Dhankhar" },
  { question: "Who is the Chief Minister of Delhi?", options: ["Arvind Kejriwal", "Manish Sisodia", "Amit Shah", "Rahul Gandhi"], answer: "Arvind Kejriwal" },
  { question: "Which state has the highest population in India?", options: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], answer: "Uttar Pradesh" },
  { question: "Which state has the highest literacy rate?", options: ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"], answer: "Kerala" },
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { question: "What is the currency of India?", options: ["Rupee", "Dollar", "Pound", "Yen"], answer: "Rupee" },
  { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { question: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower", "Marigold"], answer: "Lotus" },
  { question: "What is the national sport of India?", options: ["Cricket", "Hockey", "Football", "Badminton"], answer: "Hockey" },
  { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"], answer: "Rabindranath Tagore" },
  { question: "What is the full form of ISRO?", options: ["Indian Space Research Organisation", "International Space Research Organisation", "Indian Space Research Office", "International Space Research Office"], answer: "Indian Space Research Organisation" },
  { question: "Which city is known as the Silicon Valley of India?", options: ["Mumbai", "Delhi", "Bangalore", "Chennai"], answer: "Bangalore" },
  { question: "Which river is known as the Ganga of the South?", options: ["Godavari", "Krishna", "Kaveri", "Narmada"], answer: "Kaveri" },

  // International Affairs
  { question: "Which country hosted the G20 Summit 2023?", options: ["India", "USA", "UK", "China"], answer: "India" },
  { question: "What is the capital of USA?", options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"], answer: "Washington D.C." },
  { question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], answer: "Yen" },
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
  { question: "Which country is known as the 'Land of Rising Sun'?", options: ["China", "Japan", "South Korea", "India"], answer: "Japan" },
  { question: "Who is the current President of USA?", options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"], answer: "Joe Biden" },
  { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"], answer: "Moscow" },
  { question: "Which country has the largest population in the world?", options: ["India", "China", "USA", "Indonesia"], answer: "India" },
  { question: "What is the currency of UK?", options: ["Dollar", "Euro", "Pound", "Yen"], answer: "Pound" },

  // Economy & Business
  { question: "What is the full form of GDP?", options: ["Gross Domestic Product", "General Development Plan", "Global Domestic Product", "Growth and Development Plan"], answer: "Gross Domestic Product" },
  { question: "What is the name of India's first bullet train project?", options: ["Bullet India", "High-Speed Rail", "Mumbai-Ahmedabad", "Delhi-Mumbai"], answer: "Mumbai-Ahmedabad" },
  { question: "Which is the largest economy in the world?", options: ["USA", "China", "Japan", "Germany"], answer: "USA" },
  { question: "What is the full form of RBI?", options: ["Reserve Bank of India", "Regional Bank of India", "Royal Bank of India", "Republic Bank of India"], answer: "Reserve Bank of India" },
  { question: "Which is the largest stock exchange in India?", options: ["BSE", "NSE", "MCX", "NCDEX"], answer: "NSE" },

  // Science & Technology
  { question: "What is the name of India's first nuclear submarine?", options: ["INS Arihant", "INS Vikrant", "INS Kalvari", "INS Chakra"], answer: "INS Arihant" },
  { question: "What is the name of India's first AI-powered school?", options: ["AI Academy", "Coding School", "Nalanda AI School", "Digital School"], answer: "Nalanda AI School" },
  { question: "Which company launched the first AI chatbot?", options: ["Google", "OpenAI", "Microsoft", "Amazon"], answer: "OpenAI" },
  { question: "What is the name of India's lunar mission?", options: ["Chandrayaan", "Mangalyaan", "Gaganyaan", "Aditya"], answer: "Chandrayaan" },
  { question: "Which country has the most satellites in space?", options: ["USA", "China", "Russia", "India"], answer: "USA" },

  // Sports
  { question: "Who is the current captain of Indian Cricket Team?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "KL Rahul"], answer: "Rohit Sharma" },
  { question: "Which country won the Cricket World Cup 2023?", options: ["Australia", "India", "England", "New Zealand"], answer: "Australia" },
  { question: "Who is the current World Chess Champion?", options: ["Magnus Carlsen", "Viswanathan Anand", "Garry Kasparov", "Bobby Fischer"], answer: "Magnus Carlsen" },
  { question: "Which Indian athlete won the first Olympic gold in athletics?", options: ["Neeraj Chopra", "PT Usha", "Milkha Singh", "Abhinav Bindra"], answer: "Neeraj Chopra" },
  { question: "What is the national sport of Japan?", options: ["Sumo Wrestling", "Baseball", "Karate", "Judo"], answer: "Sumo Wrestling" },

  // History & Culture
  { question: "Which Indian state has the highest number of UNESCO World Heritage Sites?", options: ["Tamil Nadu", "Uttar Pradesh", "Maharashtra", "Rajasthan"], answer: "Rajasthan" },
  { question: "Who built the Taj Mahal?", options: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"], answer: "Shah Jahan" },
  { question: "What is the oldest known civilization?", options: ["Indus Valley", "Mesopotamia", "Egyptian", "Chinese"], answer: "Mesopotamia" },
  { question: "Who is known as the Father of Indian Constitution?", options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], answer: "Dr. B.R. Ambedkar" },
  { question: "What is the meaning of 'Renaissance'?", options: ["Rebirth", "Revolution", "Reformation", "Rebellion"], answer: "Rebirth" },

  // Environment & Geography
  { question: "What is the largest ocean in the world?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { question: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara" },
  { question: "What is the highest mountain peak in the world?", options: ["Mount Everest", "K2", "Kanchenjunga", "Lhotse"], answer: "Mount Everest" },
  { question: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
  { question: "What is the largest continent?", options: ["Africa", "Asia", "North America", "Europe"], answer: "Asia" },

  // Awards & Honors
  { question: "What is the highest civilian award in India?", options: ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"], answer: "Bharat Ratna" },
  { question: "Who won the Nobel Peace Prize in 2023?", options: ["Narges Mohammadi", "Malala Yousafzai", "Greta Thunberg", "Jacinda Ardern"], answer: "Narges Mohammadi" },
  { question: "What is the highest military award in India?", options: ["Param Vir Chakra", "Ashok Chakra", "Vir Chakra", "Maha Vir Chakra"], answer: "Param Vir Chakra" },
  { question: "Who is the first Indian to win a Nobel Prize?", options: ["Rabindranath Tagore", "CV Raman", "Mother Teresa", "Amartya Sen"], answer: "Rabindranath Tagore" },

  // Defense & Security
  { question: "What is the name of India's first indigenous aircraft carrier?", options: ["INS Vikrant", "INS Vikramaditya", "INS Viraat", "INS Vishal"], answer: "INS Vikrant" },
  { question: "Who is the current Chief of Army Staff of India?", options: ["General Manoj Pande", "General MM Naravane", "General Bipin Rawat", "General Dalbir Singh"], answer: "General Manoj Pande" },
  { question: "What is the full form of DRDO?", options: ["Defence Research and Development Organisation", "Defence Research and Development Office", "Defence Research and Development Operations", "Defence Research and Development Organisation"], answer: "Defence Research and Development Organisation" },

  // Miscellaneous
  { question: "What is the full form of UNICEF?", options: ["United Nations International Children's Emergency Fund", "United Nations International Children's Education Fund", "United Nations International Children's Environment Fund", "United Nations International Children's Employment Fund"], answer: "United Nations International Children's Emergency Fund" },
  { question: "What is the full form of WHO?", options: ["World Health Organisation", "World Health Office", "World Health Operations", "World Health Organisation"], answer: "World Health Organisation" },
  { question: "What is the full form of UNESCO?", options: ["United Nations Educational, Scientific and Cultural Organisation", "United Nations Educational, Scientific and Cultural Office", "United Nations Educational, Scientific and Cultural Operations", "United Nations Educational, Scientific and Cultural Organisation"], answer: "United Nations Educational, Scientific and Cultural Organisation" },
  { question: "What is the full form of NATO?", options: ["North Atlantic Treaty Organisation", "North American Treaty Organisation", "North Atlantic Trade Organisation", "North American Trade Organisation"], answer: "North Atlantic Treaty Organisation" },
  { question: "What is the full form of SAARC?", options: ["South Asian Association for Regional Cooperation", "South American Association for Regional Cooperation", "South Asian Association for Regional Communities", "South Asian Alliance for Regional Cooperation"], answer: "South Asian Association for Regional Cooperation" },

  // Additional Questions
  { question: "Which country is the largest producer of coffee?", options: ["Brazil", "Vietnam", "Colombia", "Ethiopia"], answer: "Brazil" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is the largest organ in the human body?", options: ["Liver", "Heart", "Skin", "Brain"], answer: "Skin" },
  { question: "What is the speed of light approximately?", options: ["3 × 10⁸ m/s", "3 × 10⁹ m/s", "3 × 10⁷ m/s", "3 × 10⁶ m/s"], answer: "3 × 10⁸ m/s" },
  { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" },
  { question: "What is the chemical formula for methane?", options: ["CH4", "C2H6", "C3H8", "C4H10"], answer: "CH4" },
  { question: "What is the main function of red blood cells?", options: ["Fight infections", "Carry oxygen", "Clot blood", "Digest food"], answer: "Carry oxygen" },
  { question: "What is the process of plants making food called?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], answer: "Photosynthesis" },
  { question: "Which vitamin is produced by sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
  { question: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },
  { question: "Which is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: "Jupiter" },
  { question: "What is the boiling point of water?", options: ["90°C", "95°C", "100°C", "105°C"], answer: "100°C" },
  { question: "What is the freezing point of water?", options: ["-5°C", "0°C", "5°C", "10°C"], answer: "0°C" },
  { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: "Mercury" },
  { question: "What is the chemical symbol for oxygen?", options: ["O", "O2", "Ox", "Om"], answer: "O" },
  { question: "What is the study of living organisms called?", options: ["Physics", "Biology", "Chemistry", "Geology"], answer: "Biology" },
  { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
  { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
  { question: "What is the chemical formula for carbon dioxide?", options: ["CO", "CO2", "C2O", "C2O2"], answer: "CO2" },
  { question: "What is the chemical formula of common salt?", options: ["NaCl", "NaOH", "HCl", "KCl"], answer: "NaCl" },
  { question: "Which organ pumps blood in the human body?", options: ["Brain", "Liver", "Heart", "Lungs"], answer: "Heart" },
  { question: "What is the chemical symbol for iron?", options: ["Fe", "Ir", "In", "I"], answer: "Fe" },
  { question: "What is the chemical symbol for silver?", options: ["Si", "Ag", "Au", "Fe"], answer: "Ag" },
  { question: "What is the national bird of India?", options: ["Peacock", "Parrot", "Cuckoo", "Eagle"], answer: "Peacock" },
  { question: "What is the national tree of India?", options: ["Banyan", "Peepal", "Neem", "Mango"], answer: "Banyan" },
];

// --- Helper: Get 34 random questions ---
const getRandomQuestions = (lang) => {
  const questionBank = lang === 'hi' ? currentAffairsHindi : currentAffairsEnglish;
  const shuffled = [...questionBank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 34);
};

// --- Component ---
export default function DailyCurrentAffairsQuiz() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(1800); // 30 minutes
  const [language, setLanguage] = useState('hi');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const [todayDate, setTodayDate] = useState("");
  const resultRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    setTodayDate(now.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

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
    setQuestions(getRandomQuestions(language));
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
              <title>${language === 'hi' ? 'दैनिक सामयिकी परिणाम' : 'Daily Current Affairs Result'}</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .result-container { max-width: 800px; margin: 0 auto; }
                .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #0d1b2a, #2c5a6e); color: white; border-radius: 10px; margin-bottom: 20px; }
                .score-card { text-align: center; padding: 20px; border: 2px solid #0d1b2a; border-radius: 10px; margin-bottom: 20px; }
                .score { font-size: 40px; font-weight: bold; color: #0d1b2a; }
                .status { font-size: 20px; margin: 10px 0; }
                .pass { color: #28a745; }
                .fail { color: #dc3545; }
                .question-item { padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #28a745; background: #f8f9fa; }
                .question-item.wrong { border-left-color: #dc3545; background: #fff5f5; }
                .question-item.not-attempted { border-left-color: #ffc107; background: #fff3cd; }
                .q { font-weight: bold; font-size: 14px; }
                .your-answer { margin-top: 5px; font-size: 13px; }
                .correct-answer { margin-top: 3px; font-size: 13px; color: #28a745; font-weight: bold; }
                .wrong-answer { color: #dc3545; }
                .correct-answer-text { color: #28a745; }
                .not-attempted-text { color: #ffc107; }
                .footer { text-align: center; margin-top: 20px; padding: 10px; color: #666; font-size: 12px; border-top: 1px solid #ddd; }
                .summary { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin: 15px 0; }
                .summary-item { padding: 10px; border-radius: 8px; text-align: center; }
                .summary-correct { background: #d4edda; color: #155724; }
                .summary-wrong { background: #f8d7da; color: #721c24; }
                .summary-not { background: #fff3cd; color: #856404; }
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
      'title': { hi: '📰 दैनिक सामयिकी क्विज़', en: '📰 Daily Current Affairs Quiz' },
      'subtitle': { hi: 'अपने ज्ञान को परखें', en: 'Test Your Knowledge' },
      'questions': { hi: '📝 कुल प्रश्न', en: '📝 Total Questions' },
      'asked': { hi: '❓ पूछे गए', en: '❓ Asked' },
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
      'congrats': { hi: '🎉 उत्कृष्ट कार्य!', en: '🎉 Excellent Work!' },
      'practice': { hi: '📖 सीखते रहें!', en: '📖 Keep Learning!' },
      'passed': { hi: '✔️ उत्तीर्ण', en: '✔️ Passed' },
      'failed': { hi: '❌ सुधार की आवश्यकता', en: '❌ Needs Improvement' },
      'review': { hi: '📋 उत्तर समीक्षा', en: '📋 Answer Review' },
      'your_answer': { hi: 'आपका उत्तर:', en: 'Your Answer:' },
      'correct_answer': { hi: 'सही उत्तर:', en: 'Correct Answer:' },
      'new_quiz': { hi: '🔄 नई क्विज़ लें', en: '🔄 Take New Quiz' },
      'warning': { hi: '⚠️ 1 मिनट से कम समय शेष!', en: '⚠️ Less than 1 minute remaining!' },
      'correct': { hi: 'सही', en: 'Correct' },
      'wrong': { hi: 'गलत', en: 'Wrong' },
      'not_attempted': { hi: 'प्रयास नहीं किया', en: 'Not Attempted' },
      'download': { hi: '📥 परिणाम डाउनलोड करें', en: '📥 Download Result' },
    };
    return texts[key]?.[language] || texts[key]?.['en'] || key;
  };

  // Home Page
  if (!started) {
    const totalQuestions = language === 'hi' ? currentAffairsHindi.length : currentAffairsEnglish.length;
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 50%, #2c5a6e 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📰</div>
          <h1 style={{ 
            color: "#0d1b2a", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            {getText('title')}
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            🗓️ {todayDate}
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #0d1b2a, #2c5a6e)",
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
              color: language === 'hi' ? "#0d1b2a" : "#999"
            }}>हिन्दी</span>
            <button
              onClick={toggleLanguage}
              style={{
                width: "50px",
                height: "26px",
                borderRadius: "13px",
                background: language === 'hi' ? "#2c5a6e" : "#4a90d9",
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
              color: language === 'en' ? "#0d1b2a" : "#999"
            }}>English</span>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "8px",
            marginTop: "10px"
          }}>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('questions')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d1b2a" }}>
                {totalQuestions}
              </div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('asked')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d1b2a" }}>34</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('time')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d1b2a" }}>30 min</div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#f0f7ff",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "12px",
            fontSize: "12px",
            color: "#1b3a4b"
          }}>
            💡 {totalQuestions} {language === 'hi' ? 'प्रश्नों में से 34 यादृच्छिक प्रश्न पूछे जाएंगे' : 'random questions will be asked from 34 questions'}
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
              background: "linear-gradient(135deg, #0d1b2a 0%, #2c5a6e 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(44, 90, 110, 0.4)"
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
    const totalQuestions = language === 'hi' ? currentAffairsHindi.length : currentAffairsEnglish.length;
    
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
              background: "linear-gradient(135deg, #0d1b2a, #2c5a6e)",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}>
              <h1 style={{ margin: "0", fontSize: "22px" }}>{getText('title')}</h1>
              <p style={{ margin: "5px 0 0", fontSize: "12px", opacity: 0.9 }}>
                🗓️ {todayDate}
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#0d1b2a" }}>
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
            <div style={{
              marginTop: "10px",
              fontSize: "12px",
              color: "#718096",
              borderTop: "1px solid #eee",
              paddingTop: "10px"
            }}>
              📊 {language === 'hi' ? 'कुल प्रश्न बैंक' : 'Total Question Bank'}: {totalQuestions} | 
              {language === 'hi' ? ' पूछे गए' : ' Asked'}: {questions.length}
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
                  {/* ✅ FIX: Show correct answer for NOT ATTEMPTED questions too */}
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
                background: "linear-gradient(135deg, #0d1b2a 0%, #2c5a6e 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(44, 90, 110, 0.4)",
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
            color: timer < 60 ? "#fc8181" : "#0d1b2a",
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
            color: "#1b3a4b",
            marginBottom: "12px"
          }}>
            📌 {language === 'hi' ? 'सामयिकी' : 'Current Affairs'}
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#0d1b2a",
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
                  border: answers[current] === op ? "2px solid #2c5a6e" : "2px solid transparent",
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#2c5a6e",
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
                  e.target.style.boxShadow = "0 4px 12px rgba(44, 90, 110, 0.3)";
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
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#2c5a6e",
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
                  e.target.style.boxShadow = "0 4px 12px rgba(44, 90, 110, 0.3)";
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
                                   current === idx ? "#2c5a6e" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #2c5a6e" : "none",
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