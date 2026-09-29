// BiharDarogaMockTest.jsx
import React, { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

// =====================================================
// MATH + LINE BREAK RENDERER
// =====================================================
function renderInlineMath(text) {
  if (text === null || text === undefined) return null;
  const regex = /(\$[^\$]+\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\])/g;
  const parts = String(text).split(regex);
  return parts.map((part, index) => {
    if (!part) return null;
    if (part.startsWith("$") && part.endsWith("$") && part.length > 2)
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    if (part.startsWith("\\(") && part.endsWith("\\)") && part.length > 4)
      return <InlineMath key={index} math={part.slice(2, -2)} />;
    if (part.startsWith("\\[") && part.endsWith("\\]") && part.length > 4)
      return <InlineMath key={index} math={part.slice(2, -2)} />;
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function MathText({ text }) {
  if (text === null || text === undefined) return null;
  const normalized = String(text)
    .replace(/\\\(/g, "$").replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$").replace(/\\\]/g, "$");
  const lines = normalized.split("\n");
  return (
    <span className="math-text">
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {renderInlineMath(line)}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
}

function QuestionText({ text }) {
  if (!text) return null;
  const marker = "Read the following passage";
  const idx = text.indexOf(marker);
  if (idx === -1) return <MathText text={text} />;
  const questionPart = text.slice(0, idx).trim();
  const passagePart = text.slice(idx).trim();
  return (
    <>
      {questionPart && (
        <div style={{ marginBottom: "10px", fontWeight: "600" }}>
          <MathText text={questionPart} />
        </div>
      )}
      <div style={{
        background: "linear-gradient(135deg, #fff7e6, #fffbeb)",
        borderLeft: "4px solid #f59e0b",
        padding: "12px 14px", borderRadius: "10px",
        fontStyle: "italic", color: "#4a3f1e",
        fontSize: "13px", lineHeight: "1.7", fontWeight: "400",
      }}>
        <MathText text={passagePart} />
      </div>
    </>
  );
}

// =====================================================
// NORMALIZER: `option` → `options`
// =====================================================
const normalizeQuestion = (q) => ({
  question: q.question || "",
  options: q.options || q.option || [],
  answer: q.answer || "",
});
const normalizeQuestions = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr.map(normalizeQuestion);
};

// =====================================================
// GLOBAL STYLES
// =====================================================
const GlobalStyles = () => (
  <style>{`
    * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px);} to { opacity: 1; transform: translateY(0);} }
    @keyframes slideIn { from { opacity: 0; transform: translateX(-8px);} to { opacity: 1; transform: translateX(0);} }
    @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1);} 50% { opacity: 0.85; transform: scale(1.02);} }
    @keyframes float { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-6px);} }
    @keyframes gradientShift { 0% { background-position: 0% 50%;} 50% { background-position: 100% 50%;} 100% { background-position: 0% 50%;} }
    .fade-in-up { animation: fadeInUp 0.4s ease-out; }
    .slide-in { animation: slideIn 0.35s ease-out; }
    .btn-press:active { transform: scale(0.97) !important; transition: transform 0.1s !important; }
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; -webkit-font-smoothing: antialiased; }
  `}</style>
);

// =====================================================
// PAPER SETS DATA
// Yahan apne questions paste karo (`option` ya `options` — dono chalega)
// Naya paper add karne ke liye bas ek naya object push karo
// =====================================================
const shiftsDataRaw = [
  {
    id: 1,
    name: "Paper Set 1",
    available: true,
    languages: {
      hindi: [
{
  question: "किसके द्वारा किसी राज्य के मुख्यमंत्री को पद की शपथ दिलाई जाती है?",
  option: [
    "भारत के राष्ट्रपति",
    "राज्य के राज्यपाल",
    "भारत के मुख्य न्यायाधीश",
    "विधान सभा के अध्यक्ष"
  ],
  answer: "राज्य के राज्यपाल"
},
{
  question: "मार्च 2025 में भारत में सेपक टकरॉ 2025 विश्व कप (ISTAF) निम्नलिखित में से किस शहर में आयोजित किया गया था?",
  option: [
    "मुंबई",
    "पटना",
    "बेंगलुरु",
    "नई दिल्ली"
  ],
  answer: "पटना"
},
{
  question: "भारतीय राष्ट्रीय कांग्रेस के निम्नलिखित में से किस अधिवेशन की अध्यक्षता महात्मा गांधी ने की थी?",
  option: [
    "1922; गया",
    "1923; दिल्ली",
    "1924; बेलगाम",
    "1925; कानपुर"
  ],
  answer: "1924; बेलगाम"
},
{
  question: "निम्नलिखित में से किस भारतीय राज्य के साथ नेपाल अपनी सीमा साझा करता है?",
  option: [
    "पश्चिम बंगाल",
    "मिजोरम",
    "राजस्थान",
    "पंजाब"
  ],
  answer: "पश्चिम बंगाल"
},
{
  question: "कौन-सा अनुच्छेद अस्पृश्यता के उन्मूलन से संबंधित है?",
  option: [
    "अनुच्छेद 14",
    "अनुच्छेद 15",
    "अनुच्छेद 17",
    "अनुच्छेद 21"
  ],
  answer: "अनुच्छेद 17"
},
{
  question: "हिंद महासागर की पूर्वी सीमा _____ से घिरी हुई है।",
  option: [
    "अंटार्कटिका",
    "ऑस्ट्रेलिया",
    "अफ्रीका",
    "ईरान"
  ],
  answer: "ऑस्ट्रेलिया"
},
{
  question: "साइट्रिक अम्ल का उत्पादन किसके द्वारा किया जाता है?",
  option: [
    "Aspergillus niger",
    "Streptococcus",
    "Acetobacter suboxydans",
    "Candida utilis"
  ],
  answer: "Aspergillus niger"
},
{
  question: "निम्नलिखित में से किसने महात्मा गांधी को चंपारण आने के लिए आमंत्रित किया था?",
  option: [
    "राजेंद्र प्रसाद",
    "राज कुमार शुक्ल",
    "जे.बी. कृपलानी",
    "मजहर-उल-हक"
  ],
  answer: "राज कुमार शुक्ल"
},
{
  question: "जवाहर सुरंग निम्नलिखित में से किस दर्रे से होकर गुजरती है?",
  option: [
    "रोहतांग",
    "नाथू ला",
    "बनिहाल",
    "डुंगरी ला"
  ],
  answer: "बनिहाल"
},
{
  question: "निम्नलिखित हिंदी वाक्य का अंग्रेजी में अनुवाद कीजिए:\n\"बहुत कम लोग सच्चाई को स्वीकार करते हैं।\"",
  option: [
    "Very few people accepted the truth.",
    "Few people accept the truth.",
    "Very few people accept the truth.",
    "Only people accept the truth."
  ],
  answer: "Very few people accept the truth."
},
{
  question: "निम्नलिखित में से कौन-सा समय-काल खिलजी वंश से संबंधित है?",
  option: [
    "1206–1236",
    "1290–1320",
    "1320–1414",
    "1414–1451"
  ],
  answer: "1290–1320"
},
{
  question: "निम्नलिखित कथनों पर विचार कीजिए:\n1. भारत का सर्वोच्च न्यायालय केवल मौलिक अधिकारों के प्रवर्तन के लिए रिट जारी कर सकता है।\n2. उच्च न्यायालय मौलिक अधिकारों और अन्य कानूनी अधिकारों दोनों के लिए रिट जारी कर सकते हैं।\n3. सर्वोच्च न्यायालय का उद्घाटन सत्र 26 जनवरी 1950 को आयोजित हुआ था।\nउपर्युक्त में से कौन-सा/से कथन सही है/हैं?",
  option: [
    "केवल 2 और 3",
    "केवल 1 और 2",
    "केवल 1 और 3",
    "1, 2 और 3"
  ],
  answer: "केवल 1 और 2"
},
{
  question: "दिसंबर 2025 में भारत के मुख्य सूचना आयुक्त (CIC) के रूप में किसे नियुक्त किया गया है?",
  option: [
    "हीरालाल सामरिया",
    "राज कुमार गोयल",
    "जया वर्मा सिन्हा",
    "विनोद कुमार तिवारी"
  ],
  answer: "राज कुमार गोयल"
},
{
  question: "भारतीय संविधान की प्रस्तावना में 'धर्मनिरपेक्ष' शब्द किस संशोधन द्वारा जोड़ा गया?",
  option: [
    "41वां संशोधन",
    "42वां संशोधन",
    "43वां संशोधन",
    "44वां संशोधन"
  ],
  answer: "42वां संशोधन"
},
{
  question: "जन धन योजना कब शुरू की गई थी?",
  option: [
    "2015",
    "2016",
    "2013",
    "2014"
  ],
  answer: "2014"
},
{
  question: "चुआर विद्रोह कब शुरू हुआ था?",
  option: [
    "1771 ई.",
    "1772 ई.",
    "1871 ई.",
    "1872 ई."
  ],
  answer: "1771 ई."
},
{
  question: "FIDE शतरंज विश्व कप 2025 की मेजबानी कौन-सा देश करने वाला है?",
  option: [
    "रूस",
    "भारत",
    "नॉर्वे",
    "संयुक्त राज्य अमेरिका"
  ],
  answer: "भारत"
},
{
  question: "विजयनगर साम्राज्य के निम्नलिखित में से कौन-सा राजवंश और राजा का युग्म सही सुमेलित नहीं है?",
  option: [
    "संगम वंश – हरिहर द्वितीय",
    "सालुव वंश – तिम्मा",
    "अरविदु वंश – तिरुमल",
    "तुलुव वंश – गुंडा"
  ],
  answer: "तुलुव वंश – गुंडा"
},
{
  question: "1920 से 1935 तक के स्वतंत्रता संघर्ष के संबंध में निम्नलिखित में से कौन-सा/से कथन सही है/हैं?\n1. बिहार और बंगाल में असहयोग आंदोलन की प्रभावशीलता किसानों की भागीदारी के कारण बढ़ी।\n2. बिहार में किसानों को बागान मालिकों के विरुद्ध किसान सभा के बैनर तले संगठित किया गया था।\n3. बंगाल के मिदनापुर में महिष्य किसानों ने बीरेंद्रनाथ सस्मल के नेतृत्व में यूनियन बोर्ड के करों के विरुद्ध आंदोलन किया।",
  option: [
    "1, 2 और 3",
    "केवल 2 और 3",
    "केवल 1",
    "केवल 3"
  ],
  answer: "1, 2 और 3"
},
{
  question: "किस देश ने 16 वर्ष से कम उम्र के बच्चों के लिए अपने सोशल मीडिया प्रतिबंध में YouTube को शामिल करने का निर्णय लिया है?",
  option: [
    "संयुक्त राज्य अमेरिका",
    "यूनाइटेड किंगडम",
    "ऑस्ट्रेलिया",
    "कनाडा"
  ],
  answer: "ऑस्ट्रेलिया"
},
{
  question: "1 : 3, 5 : 11 और 22 : 25 का मिश्रित अनुपात क्या है?",
  option: [
    "1 : 25",
    "3 : 5",
    "11 : 25",
    "2 : 15"
  ],
  answer: "2 : 15"
},
{
  question: "निम्नलिखित संवैधानिक विशेषताओं का उनके संबंधित लोकतांत्रिक मूल्यों से मिलान कीजिए:\nस्तंभ A:\na) मौलिक कर्तव्य\nb) समान मतदान अधिकार\nc) स्थानीय स्वशासन के प्रावधान\nd) धार्मिक स्वतंत्रता की गारंटी\nस्तंभ B:\ni. जमीनी स्तर का लोकतंत्र\nii. व्यक्ति के विवेक का सम्मान\niii. नागरिकों की जिम्मेदारियों की मान्यता\niv. सार्वभौमिक मताधिकार का सिद्धांत",
  option: [
    "a-ii, b-i, c-iv, d-iii",
    "a-i, b-ii, c-iii, d-iv",
    "a-iii, b-iv, c-i, d-ii",
    "a-iv, b-iii, c-ii, d-i"
  ],
  answer: "a-iii, b-iv, c-i, d-ii"
},
{
  question: "10 सेमी व्यास और 56 मीटर लंबाई वाले तार का आयतन (सेमी³ में) कितना है?",
  option: [
    "441000",
    "440700",
    "440000",
    "440400"
  ],
  answer: "440000"
},
{
  question: "यदि P, Q से 30% अधिक है और R, P से 25% अधिक है, तो Q : R क्या होगा?",
  option: [
    "4 : 5",
    "8 : 13",
    "5 : 4",
    "33 : 20"
  ],
  answer: "8 : 13"
},
{
  question: "भारतीय संविधान का अनुच्छेद 323 _____________ से संबंधित है।",
  option: [
    "लोक सेवा आयोगों के व्यय",
    "लोक सेवा आयोगों की रिपोर्ट",
    "लोक सेवा आयोगों के कार्य",
    "लोक सेवा आयोगों के कार्यों का विस्तार करने की शक्ति"
  ],
  answer: "लोक सेवा आयोगों की रिपोर्ट"
},
{
  question: "निम्नलिखित में से कौन-सा सही सुमेलित नहीं है?",
  option: [
    "लुशाई विद्रोह – असम",
    "हेराका आंदोलन – पश्चिम बंगाल",
    "कोल विद्रोह – झारखंड",
    "रमोसी विद्रोह – महाराष्ट्र"
  ],
  answer: "हेराका आंदोलन – पश्चिम बंगाल"
},
{
  question: "हरित क्रांति वर्ष 1965 में शुरू हुई और __________ पंचवर्षीय योजना 1961–1966 के बीच थी।",
  option: [
    "5वीं",
    "2वीं",
    "1वीं",
    "3वीं"
  ],
  answer: "3वीं"
},
{
  question: "भारतीय संविधान का कौन-सा अनुच्छेद भारत के नियंत्रक एवं महालेखा परीक्षक (CAG) के स्वतंत्र पद का प्रावधान करता है?",
  option: [
    "अनुच्छेद 145",
    "अनुच्छेद 146",
    "अनुच्छेद 147",
    "अनुच्छेद 148"
  ],
  answer: "अनुच्छेद 148"
},
{
  question: "पोटैशियम क्लोरेट {KClO₃} के अपघटन के लिए प्रयुक्त उत्प्रेरक है:",
  option: [
    "ZnO",
    "MnO₂",
    "CuO",
    "K₂O"
  ],
  answer: "MnO₂"
},
{
  question: "प्रोकैरियोटिक और यूकैरियोटिक कोशिकाओं के बीच मुख्य अंतर क्या है?",
  option: [
    "प्रोकैरियोटिक कोशिकाओं में केंद्रक होता है, जबकि यूकैरियोटिक कोशिकाओं में नहीं होता",
    "यूकैरियोटिक कोशिकाओं में झिल्ली-बद्ध कोशिकांग नहीं होते, जबकि प्रोकैरियोटिक कोशिकाओं में होते हैं",
    "प्रोकैरियोटिक कोशिकाओं में वास्तविक केंद्रक नहीं होता, जबकि यूकैरियोटिक कोशिकाओं में झिल्ली-बद्ध केंद्रक होता है",
    "यूकैरियोटिक कोशिकाएँ एककोशिकीय होती हैं और प्रोकैरियोटिक कोशिकाएँ बहुकोशिकीय होती हैं"
  ],
  answer: "प्रोकैरियोटिक कोशिकाओं में वास्तविक केंद्रक नहीं होता, जबकि यूकैरियोटिक कोशिकाओं में झिल्ली-बद्ध केंद्रक होता है"
},
{
  question: "नवंबर 2025 में रिकॉर्ड 10वीं बार बिहार के मुख्यमंत्री के रूप में किसने शपथ ली?",
  option: [
    "सम्राट चौधरी",
    "तेजस्वी यादव",
    "विजय कुमार सिन्हा",
    "नीतीश कुमार"
  ],
  answer: "नीतीश कुमार"
},
{
  question: "भारत के प्रथम राष्ट्रीय डॉल्फिन अनुसंधान केंद्र (NDRC) का उद्घाटन कहाँ किया गया?",
  option: [
    "वाराणसी, उत्तर प्रदेश",
    "पटना, बिहार",
    "गुवाहाटी, असम",
    "कोलकाता, पश्चिम बंगाल"
  ],
  answer: "पटना, बिहार"
},
{
  question: "बेकिंग पाउडर किसका मिश्रण है?",
  option: [
    "सोडियम कार्बोनेट और टार्टरिक अम्ल",
    "बेकिंग सोडा और वॉशिंग सोडा",
    "बेकिंग सोडा और ब्लीचिंग पाउडर",
    "बेकिंग सोडा और हल्का खाद्य अम्ल"
  ],
  answer: "बेकिंग सोडा और हल्का खाद्य अम्ल"
},
{
  question: "'हरित क्रांति' शब्द किसने दिया था?",
  option: [
    "N.E. Borlaug",
    "R.N. Singh",
    "William S. Gaud",
    "M.S. Swaminathan"
  ],
  answer: "William S. Gaud"
},
{
  question: "कोलंबिया की राजधानी क्या है?",
  option: [
    "काराकास",
    "बोगोटा",
    "लीमा",
    "सैंटियागो"
  ],
  answer: "बोगोटा"
},
{
  question: "मौर्य वंश के बाद किस वंश की स्थापना हुई?",
  option: [
    "शक वंश",
    "कुषाण वंश",
    "सातवाहन वंश",
    "शुंग वंश"
  ],
  answer: "शुंग वंश"
},
{
  question: "18वीं लोकसभा के अध्यक्ष के रूप में पुनः किसे निर्वाचित किया गया है?",
  option: [
    "जगदीप धनखड़",
    "ओम बिरला",
    "हरिवंश नारायण सिंह",
    "सुमित्रा महाजन"
  ],
  answer: "ओम बिरला"
},
{
  question: "भारतीय संविधान में 'कानून के तहत समान संरक्षण' की अवधारणा निम्नलिखित में से किस देश के संविधान से ली गई है?",
  option: [
    "ऑस्ट्रेलिया",
    "यूनाइटेड किंगडम",
    "आयरलैंड",
    "संयुक्त राज्य अमेरिका"
  ],
  answer: "संयुक्त राज्य अमेरिका"
},
{
  question: "साधारण ब्याज पर कोई राशि 4 वर्षों में ₹1120 और 5 वर्षों में ₹1200 हो जाती है। मूलधन है:",
  option: [
    "₹800",
    "₹1000",
    "₹1050",
    "₹1080"
  ],
  answer: "₹800"
},
{
  question: "'ब्लैक डेथ' किसका दूसरा नाम है?",
  option: [
    "काला-अजार",
    "प्लेग",
    "बोटुलिज़्म",
    "टेटनस"
  ],
  answer: "प्लेग"
},
{
  question: "अर्थशास्त्र की धन संबंधी परिभाषा एडम स्मिथ द्वारा _____________ में दी गई थी।",
  option: [
    "पूंजीवाद, समाजवाद और लोकतंत्र",
    "वेल्थ ऑफ नेशंस",
    "प्रिंसिपल्स ऑफ इकोनॉमिक्स",
    "नेचर एंड सिग्निफिकेंस ऑफ इकोनॉमिक साइंस"
  ],
  answer: "वेल्थ ऑफ नेशंस"
},
{
  question: "निम्नलिखित में से अर्थशास्त्र ग्रंथ 'अर्थशास्त्र' के लेखक के रूप में किसे जाना जाता है?",
  option: [
    "कालिदास",
    "वराहमिहिर",
    "आर्यभट्ट",
    "कौटिल्य"
  ],
  answer: "कौटिल्य"
},
{
  question: "9 दिसंबर 2024 को भारतीय रिजर्व बैंक (RBI) के नए गवर्नर के रूप में किसे नियुक्त किया गया?",
  option: [
    "शक्तिकांत दास",
    "संजय मल्होत्रा",
    "उर्जित पटेल",
    "रघुराम राजन"
  ],
  answer: "संजय मल्होत्रा"
},
{
  question: "निम्नलिखित में से किसने 1942 में भारतीय राष्ट्रीय कांग्रेस के 'भारत छोड़ो' प्रस्ताव का प्रारंभिक मसौदा तैयार किया था?",
  option: [
    "महात्मा गांधी",
    "सुभाष चंद्र बोस",
    "जयप्रकाश नारायण",
    "बी.आर. अंबेडकर"
  ],
  answer: "महात्मा गांधी"
},
{
  question: "गेहूँ और जौ के अलावा हड़प्पावासियों द्वारा निम्नलिखित में से किस फसल की व्यापक रूप से खेती की जाती थी?",
  option: [
    "चावल",
    "कपास",
    "गन्ना",
    "मक्का"
  ],
  answer: "कपास"
},
{
  question: "भारतीय संविधान के किस अनुच्छेद के तहत राष्ट्रीय आपातकाल घोषित किया जाता है?",
  option: [
    "अनुच्छेद 352",
    "अनुच्छेद 356",
    "अनुच्छेद 360",
    "अनुच्छेद 368"
  ],
  answer: "अनुच्छेद 352"
},
{
  question: "बिहार में पहली नगर निगम की स्थापना कहाँ हुई थी?",
  option: [
    "पटना",
    "गया",
    "मुजफ्फरपुर",
    "मोतिहारी"
  ],
  answer: "पटना"
},
{
  question: "जरावा जनजाति निम्नलिखित में से कहाँ पाई जाती है?",
  option: [
    "केरल",
    "मध्य प्रदेश",
    "उत्तर प्रदेश",
    "अंडमान और निकोबार द्वीप समूह"
  ],
  answer: "अंडमान और निकोबार द्वीप समूह"
},
{
  question: "दिसंबर 2025 में 18वीं बिहार विधान सभा के अध्यक्ष कौन थे?",
  option: [
    "नंद किशोर यादव",
    "नरेंद्र नारायण यादव",
    "डॉ. प्रेम कुमार",
    "सम्राट चौधरी"
  ],
  answer: "डॉ. प्रेम कुमार"
},
{
  question: "भारत में पहला राष्ट्रीय अंतरिक्ष दिवस कब मनाया गया?",
  option: [
    "22 अगस्त 2023",
    "23 अगस्त 2023",
    "23 अगस्त 2024",
    "24 अगस्त 2024"
  ],
  answer: "23 अगस्त 2024"
},
{
  question: "सविनय अवज्ञा आंदोलन के दौरान भारत का वायसराय कौन था?",
  option: [
    "लॉर्ड वेवेल",
    "लॉर्ड रीडिंग",
    "लॉर्ड चेम्सफोर्ड",
    "लॉर्ड इरविन"
  ],
  answer: "लॉर्ड इरविन"
},
{
  question: "एक दुकानदार ने 5 समान कुर्सियाँ कुल ₹7500 में खरीदीं। उसने 3 कुर्सियाँ प्रत्येक पर 20% लाभ और 2 कुर्सियाँ प्रत्येक पर 10% हानि में बेचीं। कुल मिलाकर उसे कितने प्रतिशत लाभ हुआ?",
  option: [
    "8% लाभ",
    "10% लाभ",
    "12% लाभ",
    "14% लाभ"
  ],
  answer: "8% लाभ"
},
{
  question: "केप ऑफ गुड होप की खोज किसने की थी?",
  option: [
    "कोलंबस",
    "वास्को-डि-गामा",
    "मैगेलन",
    "बार्थोलोम्यू डियाज़"
  ],
  answer: "बार्थोलोम्यू डियाज़"
},
{
  question: "इंडियन AI रिसर्च ऑर्गनाइजेशन (IAIRO) की स्थापना कहाँ की गई?",
  option: [
    "बेंगलुरु",
    "हैदराबाद",
    "GIFT City, गांधीनगर",
    "पुणे"
  ],
  answer: "GIFT City, गांधीनगर"
},
{
  question: "बिहार में बख्तियार खान का मकबरा कहाँ स्थित है?",
  option: [
    "रोहतास",
    "कैमूर",
    "नालंदा",
    "पटना"
  ],
  answer: "कैमूर"
},
{
  question: "राज्यसभा का पदेन सभापति कौन होता है?",
  option: [
    "उपराष्ट्रपति",
    "वित्त मंत्री",
    "राष्ट्रपति",
    "प्रधानमंत्री"
  ],
  answer: "उपराष्ट्रपति"
},
{
  question: "42वां संविधान संशोधन किस वर्ष पारित किया गया था?",
  option: [
    "1976",
    "1977",
    "1978",
    "1979"
  ],
  answer: "1976"
},
{
  question: "निम्नलिखित में से कौन-सा फसल का मौसम नहीं है?",
  option: [
    "खरीफ",
    "रबी",
    "जायद",
    "प्लांटेशन"
  ],
  answer: "प्लांटेशन"
},
{
  question: "निम्नलिखित अनुच्छेदों का उनके संबंधित प्रावधानों से मिलान कीजिए:\nA. अनुच्छेद 39\nB. अनुच्छेद 40\nC. अनुच्छेद 51A\nD. अनुच्छेद 48A",
  option: [
    "A-1, B-2, C-3, D-4",
    "A-2, B-1, C-4, D-3",
    "A-3, B-4, C-1, D-2",
    "A-4, B-3, C-2, D-1"
  ],
  answer: "A-1, B-2, C-3, D-4"
},
{
  question: "केंद्रीय ट्रेड यूनियन महासंघों का उनके संबंधित राजनीतिक दलों से मिलान कीजिए:\nA. CITU\nB. INTUC\nC. BMS\nD. AITUC",
  option: [
    "A-4, B-1, C-2, D-3",
    "A-1, B-4, C-3, D-2",
    "A-2, B-3, C-4, D-1",
    "A-3, B-2, C-1, D-4"
  ],
  answer: "A-4, B-1, C-2, D-3"
},
{
  question: "मेंडल के प्रयोगों में निम्नलिखित में से कौन-सा लक्षण प्रयोग किया गया था?",
  option: [
    "फूल का रंग",
    "बीज का आकार",
    "पौधे की ऊँचाई",
    "उपरोक्त सभी"
  ],
  answer: "उपरोक्त सभी"
},
{
  question: "73वां संविधान संशोधन किससे संबंधित है?",
  option: [
    "शहरी स्थानीय निकाय",
    "पंचायती राज संस्थाएँ",
    "सहकारी समितियाँ",
    "अनुसूचित क्षेत्र"
  ],
  answer: "पंचायती राज संस्थाएँ"
},
{
  question: "मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष किस संविधान संशोधन द्वारा की गई?",
  option: [
    "61वां संशोधन",
    "51वां संशोधन",
    "71वां संशोधन",
    "41वां संशोधन"
  ],
  answer: "61वां संशोधन"
},
{
  question: "वेनेजुएला की राजधानी क्या है?",
  option: [
    "वालेंसिया",
    "माराकाइबो",
    "काराकास",
    "बार्किसिमेटो"
  ],
  answer: "काराकास"
},
{
  question: "राज्य निर्वाचन आयोग द्वारा मोबाइल ई-वोटिंग शुरू करने वाला पहला राज्य कौन-सा है?",
  option: [
    "उत्तर प्रदेश",
    "बिहार",
    "महाराष्ट्र",
    "पश्चिम बंगाल"
  ],
  answer: "बिहार"
},
{
  question: "जिब्राल्टर जलडमरूमध्य निम्नलिखित में से किन्हें अलग करता है?",
  option: [
    "अटलांटिक महासागर को भूमध्य सागर से",
    "भूमध्य सागर को काला सागर से",
    "चुकची सागर को आर्कटिक महासागर से",
    "ब्यूफोर्ट सागर को पूर्वी साइबेरियाई सागर से"
  ],
  answer: "अटलांटिक महासागर को भूमध्य सागर से"
},
{
  question: "जल जीवन मिशन की नोडल मंत्रालय कौन-सी है?",
  option: [
    "ग्रामीण विकास मंत्रालय",
    "जल शक्ति मंत्रालय",
    "पर्यावरण मंत्रालय",
    "कृषि मंत्रालय"
  ],
  answer: "जल शक्ति मंत्रालय"
},
{
  question: "वास्को-डि-गामा ने भारत के लिए समुद्री मार्ग की खोज किस वर्ष की थी?",
  option: [
    "1496",
    "1499",
    "1498",
    "1497"
  ],
  answer: "1498"
},
{
  question: "पाँचवीं पंचवर्षीय योजना का मसौदा किसने तैयार किया था?",
  option: [
    "मनमोहन सिंह",
    "जयप्रकाश नारायण",
    "बिबेक देबरॉय",
    "डी.पी. धर"
  ],
  answer: "डी.पी. धर"
},
{
  question: "निम्नलिखित अंग्रेजी वाक्य का हिंदी में अनुवाद कीजिए:\n\"He did not agree with the decision taken by the committee.\"",
  option: [
    "वह समिति द्वारा लिए गए निर्णय से सहमत नहीं है।",
    "वह समिति के निर्णय से सहमत नहीं था।",
    "समिति द्वारा लिया गया निर्णय उसे स्वीकार नहीं हुआ।",
    "वह समिति द्वारा लिए गए निर्णय से सहमत नहीं था।"
  ],
  answer: "वह समिति द्वारा लिए गए निर्णय से सहमत नहीं था।"
},
{
  question: "ग्लूकोज़ का रासायनिक सूत्र क्या है?",
  option: [
    "C₆H₁₂O₆",
    "H₂O",
    "CO₂",
    "CH₄"
  ],
  answer: "C₆H₁₂O₆"
},
{
  question: "1942 में आज़ाद हिंद फौज (INA) के प्राथमिक संस्थापक कौन थे?",
  option: [
    "सुभाष चंद्र बोस",
    "रास बिहारी बोस",
    "कैप्टन मोहन सिंह",
    "भगत सिंह"
  ],
  answer: "कैप्टन मोहन सिंह"
},
{
  question: "किस मुगल सम्राट का भाई मिर्जा कामरान था?",
  option: [
    "बाबर",
    "अकबर",
    "हुमायूँ",
    "जहाँगीर"
  ],
  answer: "हुमायूँ"
},
{
  question: "हिंद महासागर के सामरिक जलडमरूमध्यों को पूर्व से पश्चिम की ओर व्यवस्थित कीजिए:\nA. पाल्क जलडमरूमध्य\nB. होर्मुज़ जलडमरूमध्य\nC. बाब-अल-मंदेब\nD. मलक्का जलडमरूमध्य",
  option: [
    "D, A, B, C",
    "A, B, C, D",
    "D, C, B, A",
    "C, A, D, B"
  ],
  answer: "D, A, B, C"
},
{
  question: "2011 की जनगणना के अनुसार बिहार की साक्षरता दर कितनी थी?",
  option: [
    "65.8%",
    "63.8%",
    "61.8%",
    "66.8%"
  ],
  answer: "61.8%"
},
{
  question: "बिहार के प्रथम मुख्यमंत्री कौन थे?",
  option: [
    "श्रीकृष्ण सिंह",
    "सत्यपाल मलिक",
    "नीतीश कुमार",
    "राबड़ी देवी"
  ],
  answer: "श्रीकृष्ण सिंह"
},
{
  question: "बिहार की सबसे ऊँची चोटी कौन-सी है?",
  option: [
    "कैमूर",
    "बराबर",
    "सोमेश्वर",
    "राजगीर"
  ],
  answer: "सोमेश्वर पहाड़ियाँ"
},
{
  question: "\"Transfer\" का हिंदी अर्थ क्या है?",
  option: [
    "स्वागत",
    "स्थानांतरण",
    "सूचना",
    "विश्राम"
  ],
  answer: "स्थानांतरण"
},
{
  question: "कोरोमंडल तटीय मैदान के किनारे प्रमुख डेल्टा बनाने वाली नदी कौन-सी है?",
  option: [
    "गोदावरी",
    "यमुना",
    "नर्मदा",
    "ब्रह्मपुत्र"
  ],
  answer: "गोदावरी"
},
{
  question: "16 जून 2025 को प्रधानमंत्री नरेंद्र मोदी को साइप्रस का सर्वोच्च नागरिक सम्मान कौन-सा प्रदान किया गया?",
  option: [
    "ग्रैंड कॉलर",
    "ग्रैंड क्रॉस",
    "ग्रैंड कमांडर",
    "नाइट कमांडर ऑफ द ऑर्डर ऑफ मकारियोस III"
  ],
  answer: "ग्रैंड क्रॉस"
},
{
  question: "निम्नलिखित में से कौन-सी घटना वायुमंडलीय अपवर्तन के कारण नहीं होती है?",
  option: [
    "तारों का टिमटिमाना",
    "सूर्य का वास्तविक स्थिति से अधिक ऊँचा दिखाई देना",
    "सूर्योदय का समय से पहले दिखाई देना",
    "सूर्य का सूर्यास्त के समय लाल दिखाई देना"
  ],
  answer: "सूर्य का सूर्यास्त के समय लाल दिखाई देना"
},
{
  question: "एक प्रकार का अनाज ₹84 प्रति किलोग्राम में बेचने पर 20% लाभ होता है और दूसरे प्रकार का अनाज ₹72 प्रति किलोग्राम में बेचने पर 20% लाभ होता है। दोनों प्रकार के अनाज को 3 : 2 के अनुपात में मिलाकर मिश्रण को ₹78 प्रति किलोग्राम में बेचा जाता है। लाभ या हानि प्रतिशत क्या है?",
  option: [
    "10% लाभ",
    "15.15% हानि",
    "18.18% लाभ",
    "20% लाभ"
  ],
  answer: "18.18% लाभ"
},
{
  question: "निम्नलिखित में से कौन-से संवैधानिक प्रावधान अन्य देशों से लिए गए हैं?\n1. संसदीय प्रणाली – ब्रिटेन\n2. राज्य के नीति निदेशक तत्व – आयरलैंड\n3. मौलिक कर्तव्य – USSR",
  option: [
    "केवल 1 और 2",
    "केवल 2 और 3",
    "केवल 1 और 3",
    "उपरोक्त सभी"
  ],
  answer: "उपरोक्त सभी"
},
{
  question: "\"Plan\" का हिंदी अर्थ क्या है?",
  option: [
    "योजना",
    "फल",
    "नगर",
    "समय"
  ],
  answer: "योजना"
},
{
  question: "जॉर्ज पंचम द्वारा दिल्ली को भारत की राजधानी के रूप में आधिकारिक रूप से कब घोषित किया गया था?",
  option: [
    "1911",
    "1907",
    "1913",
    "1910"
  ],
  answer: "1911"
},
{
  question: "चंपारण सत्याग्रह का नेतृत्व किसने किया था?",
  option: [
    "लाल बहादुर शास्त्री",
    "राजेंद्र प्रसाद",
    "महात्मा गांधी",
    "सुभाष चंद्र बोस"
  ],
  answer: "महात्मा गांधी"
},
{
  question: "निम्नलिखित में से कौन-सी नदी अरब सागर में गिरने से पहले मुहाना बनाती है?",
  option: [
    "नर्मदा",
    "महानदी",
    "गोदावरी",
    "गंगा"
  ],
  answer: "नर्मदा"
},
{
  question: "मानसून के दौरान भारत के ऊपर जेट धाराओं के संबंध में निम्नलिखित में से कौन-सा सही है?",
  option: [
    "केवल पूर्वी जेट धारा",
    "दोनों पश्चिमी और पूर्वी जेट धाराएँ",
    "दोनों जेट धाराएँ गायब हो जाती हैं",
    "केवल पश्चिमी जेट धारा"
  ],
  answer: "दोनों पश्चिमी और पूर्वी जेट धाराएँ"
},
{
  question: "निम्नलिखित में से किस समूह में केवल अवसादी चट्टानें शामिल हैं?",
  option: [
    "चूना पत्थर, बॉक्साइट और गैर-फोलिएटेड चट्टानें",
    "गैर-फोलिएटेड चट्टानें, ग्रेनाइट और शेल",
    "बलुआ पत्थर, चूना पत्थर और शेल",
    "बलुआ पत्थर, बॉक्साइट और फोलिएटेड चट्टानें"
  ],
  answer: "बलुआ पत्थर, चूना पत्थर और शेल"
},
{
  question: "₹15,000 को योजना A में 10% वार्षिक दर पर 3 वर्षों के लिए साधारण ब्याज पर निवेश किया जाता है। प्राप्त राशि को फिर योजना B में 5% वार्षिक चक्रवृद्धि ब्याज पर 2 वर्षों के लिए निवेश किया जाता है। अंतिम राशि ज्ञात कीजिए।",
  option: [
    "₹21498.75",
    "₹19,845.65",
    "₹20,250.45",
    "₹19,500.25"
  ],
  answer: "₹21498.75"
},
{
  question: "अक्टूबर 2025 में आयरलैंड की 10वीं राष्ट्रपति के रूप में किसे निर्वाचित किया गया?",
  option: [
    "हीदर हम्फ्रीज़",
    "कैथरीन कोनोली",
    "मैरी मैकअलीज़",
    "माइकल डी. हिगिंस"
  ],
  answer: "कैथरीन कोनोली"
},
{
  question: "पेनिसिलिन की खोज किसने की थी?",
  option: [
    "चार्ल्स डार्विन",
    "अलेक्जेंडर फ्लेमिंग",
    "लुई पाश्चर",
    "ग्रेगर मेंडल"
  ],
  answer: "अलेक्जेंडर फ्लेमिंग"
},
{
  question: "बिजेलजिना ओपन, बोस्निया में जीत के बाद भारत के 90वें शतरंज ग्रैंडमास्टर कौन बने?",
  option: [
    "प्रज्ञानानंद",
    "इलमपर्थी ए.आर.",
    "डी. गुकेश",
    "निहाल सरीन"
  ],
  answer: "इलमपर्थी ए.आर."
},
{
  question: "कनिष्क की राजधानी क्या थी?",
  option: [
    "मथुरा",
    "पेशावर",
    "अमरावती",
    "कन्नौज"
  ],
  answer: "पेशावर"
},
{
  question: "धन विधेयक के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. धन विधेयक केवल लोकसभा में ही पेश किया जा सकता है।\n2. राज्यसभा धन विधेयक को अस्वीकार कर सकती है।\n3. लोकसभा अध्यक्ष यह निर्णय करता है कि कोई विधेयक धन विधेयक है या नहीं।\nसही कथन कौन-से हैं?",
  option: [
    "केवल 1 और 2",
    "केवल 1 और 3",
    "केवल 2 और 3",
    "उपरोक्त सभी"
  ],
  answer: "केवल 1 और 3"
},
{
  question: "निम्नलिखित में से किस राज्य में मैंग्रोव वन पाए जाते हैं?",
  option: [
    "तेलंगाना",
    "आंध्र प्रदेश",
    "राजस्थान",
    "मणिपुर"
  ],
  answer: "आंध्र प्रदेश"
},
{
  question: "गंडक नदी किस नदी की सहायक नदी है?",
  option: [
    "यमुना नदी",
    "गंगा नदी",
    "कावेरी नदी",
    "ब्रह्मपुत्र नदी"
  ],
  answer: "गंगा नदी"
},
{
  question: "NITI आयोग की स्थापना कब हुई थी?",
  option: [
    "2015",
    "2016",
    "2017",
    "2018"
  ],
  answer: "2015"
},
{
  question: "जीवाणु कोशिका भित्ति किससे बनी होती है?",
  option: [
    "पेप्टिडोग्लाइकन",
    "सेलुलोज",
    "ग्लाइकोजन",
    "पेप्टोन"
  ],
  answer: "पेप्टिडोग्लाइकन"
},
{
  question: "छत्तीसगढ़ के किस जिले में कांगेर घाटी राष्ट्रीय उद्यान स्थित है?",
  option: [
    "दंतेवाड़ा",
    "बस्तर",
    "कांकेर",
    "बीजापुर"
  ],
  answer: "बस्तर"
},
      ],
      english: [
{
  question: "The oath of office to the Chief Minister of a State is administered by whom?",
  option: [
    "President of India",
    "Governor of the State",
    "Chief Justice of India",
    "Speaker of the Legislative Assembly"
  ],
  answer: "Governor of the State"
},
{
  question: "In which of the following cities was the Sepak Takraw 2025 World Cup (ISTAF) held in India in March 2025?",
  option: [
    "Mumbai",
    "Patna",
    "Bengaluru",
    "New Delhi"
  ],
  answer: "Patna"
},
{
  question: "Which of the following sessions of Indian National Congress was presided over by Mahatma Gandhi?",
  option: [
    "1922; Gaya",
    "1923; Delhi",
    "1924; Belgaum",
    "1925; Kanpur"
  ],
  answer: "1924; Belgaum"
},
{
  question: "Nepal shares its borders with which of the following Indian states?",
  option: [
    "West Bengal",
    "Mizoram",
    "Rajasthan",
    "Punjab"
  ],
  answer: "West Bengal"
},
{
  question: "Which article deals with the abolition of untouchability?",
  option: [
    "Article 14",
    "Article 15",
    "Article 17",
    "Article 21"
  ],
  answer: "Article 17"
},
{
  question: "The Indian Ocean is bounded by _____ in the east.",
  option: [
    "Antarctica",
    "Australia",
    "Africa",
    "Iran"
  ],
  answer: "Australia"
},
{
  question: "Citric acid is produced by",
  option: [
    "Aspergillus niger",
    "Streptococcus",
    "Acetobacter suboxydans",
    "Candida utilis"
  ],
  answer: "Aspergillus niger"
},
{
  question: "Who among the following invited Mahatma Gandhi to Champaran?",
  option: [
    "Rajendra Prasad",
    "Raj Kumar Shukla",
    "J.B. Kripalani",
    "Mazhar-ul-Haq"
  ],
  answer: "Raj Kumar Shukla"
},
{
  question: "Through which of the following passes does the Jawahar Tunnel pass?",
  option: [
    "Rohtang",
    "Nathula",
    "Banihal",
    "Dungri La"
  ],
  answer: "Banihal"
},
{
  question: "Translate the following Hindi sentence into English:\n\"बहुत कम लोग सच्चाई को स्वीकार करते हैं।\"",
  option: [
    "Very few people accepted the truth.",
    "Few people accept the truth.",
    "Very few people accept the truth.",
    "Only people accept the truth."
  ],
  answer: "Very few people accept the truth."
},
{
  question: "Which time-period belongs to the Khalji dynasty?",
  option: [
    "1206–1236",
    "1290–1320",
    "1320–1414",
    "1414–1451"
  ],
  answer: "1290–1320"
},
{
  question: "Consider the following statements:\n1. The Supreme Court of India can issue writs only for enforcement of Fundamental Rights.\n2. High Courts can issue writs for both Fundamental Rights and other legal rights.\n3. SC inaugural session was held on 26 January 1950.\nWhich of the statements given above is/are correct?",
  option: [
    "2 and 3 only",
    "1 and 2 only",
    "1 and 3 only",
    "1, 2 and 3"
  ],
  answer: "1 and 2 only"
},
{
  question: "Who has been appointed as the Chief Information Commissioner (CIC) of India in December 2025?",
  option: [
    "Heeralal Samariya",
    "Raj Kumar Goyal",
    "Jaya Verma Sinha",
    "Vinod Kumar Tiwari"
  ],
  answer: "Raj Kumar Goyal"
},
{
  question: "Which Amendment added the word 'secular' to the Preamble of the Indian Constitution?",
  option: [
    "41st Amendment",
    "42nd Amendment",
    "43rd Amendment",
    "44th Amendment"
  ],
  answer: "42nd Amendment"
},
{
  question: "When was the Jan Dhan Yojana launched?",
  option: [
    "2015",
    "2016",
    "2013",
    "2014"
  ],
  answer: "2014"
},
{
  question: "When did the Chuar Rebellion start?",
  option: [
    "1771 AD",
    "1772 AD",
    "1871 AD",
    "1872 AD"
  ],
  answer: "1771 AD"
},
{
  question: "Which country is set to host the FIDE Chess World Cup 2025?",
  option: [
    "Russia",
    "India",
    "Norway",
    "United States"
  ],
  answer: "India"
},
{
  question: "Which one of the following pairs of Dynasty and King of the Vijayanagara Empire is not correctly matched?",
  option: [
    "Sangama Dynasty – Harihara II",
    "Saluva Dynasty – Timma",
    "Aravidu Dynasty – Tirumala",
    "Tuluva Dynasty – Gunda"
  ],
  answer: "Tuluva Dynasty – Gunda"
},
{
  question: "Which of the following statements regarding the Freedom Struggle from 1920 to 1935 is/are correct?\n1. In Bihar and Bengal, the Non-Cooperation Movement owed its effectiveness to the participation of peasants.\n2. In Bihar they were organised against the planters under the banner of Kisan Sabha.\n3. In Midnapore in Bengal, Mahishya peasants rallied against the taxes of the Union Board under the leadership of Birendranath Sasmal.",
  option: [
    "1, 2 and 3",
    "2 and 3 only",
    "1 only",
    "3 only"
  ],
  answer: "1, 2 and 3"
},
{
  question: "Which country has decided to include YouTube in its social media ban for children under 16?",
  option: [
    "United States",
    "United Kingdom",
    "Australia",
    "Canada"
  ],
  answer: "Australia"
},
{
  question: "What is the compounded ratio of (1 : 3), (5 : 11) and (22 : 25)?",
  option: [
    "1 : 25",
    "3 : 5",
    "11 : 25",
    "2 : 15"
  ],
  answer: "2 : 15"
},
{
  question: "Identify the following constitutional attributes with their respective democratic values:\nColumn A\na) Fundamental Duties\nb) Equal voting rights conscience\nc) Local self-government provisions responsibilities\nd) Religious freedom assurance\nColumn B\ni. Grassroots democracy\nii. Respect for individual\niii. Recognition of citizens'\niv. Principle of universal franchise",
  option: [
    "a-ii, b-i, c-iv, d-iii",
    "a-i, b-ii, c-iii, d-iv",
    "a-iii, b-iv, c-i, d-i",
    "a-iv, b-iii, c-ii, d-i"
  ],
  answer: "a-iii, b-iv, c-i, d-i"
},
{
  question: "The volume (in cm³) of a wire of diameter 10 cm and length 56 m is:",
  option: [
    "441000",
    "440700",
    "440000",
    "440400"
  ],
  answer: "440000"
},
{
  question: "If P is 30% more than Q, and R is 25% more than P, then what is Q : R?",
  option: [
    "4 : 5",
    "8 : 13",
    "5 : 4",
    "33 : 20"
  ],
  answer: "8 : 13"
},
{
  question: "Article 323 of the Indian Constitution deals with _____________.",
  option: [
    "expenses of Public Services Commissions",
    "reports of Public Services Commissions",
    "functions of Public Services Commissions",
    "power to extend functions of Public Services Commissions"
  ],
  answer: "reports of Public Services Commissions"
},
{
  question: "Which of the following is NOT correctly matched?",
  option: [
    "Lushai Revolt - Assam",
    "Heraka Movement - West Bengal",
    "Kol Rebellion - Jharkhand",
    "Ramosi Rebellion - Maharashtra"
  ],
  answer: "Heraka Movement - West Bengal"
},
{
  question: "The Green Revolution started in the year 1965 and the _____________ five year plan was between 1961-1966.",
  option: [
    "5th",
    "2nd",
    "1st",
    "3rd"
  ],
  answer: "3rd"
},
{
  question: "Which of the following Articles of the Indian Constitution provides for an independent office of the Comptroller and Auditor General (CAG) of India?",
  option: [
    "Article 145",
    "Article 146",
    "Article 147",
    "Article 148"
  ],
  answer: "Article 148"
},
{
  question: "The catalyst used for the decomposition of potassium chlorate {KClO₃} is:",
  option: [
    "ZnO",
    "MnO₂",
    "CuO",
    "K₂O"
  ],
  answer: "MnO₂"
},
{
  question: "What is the main difference between prokaryotic and eukaryotic cells?",
  option: [
    "Prokaryotic cells have a nucleus, while eukaryotic cells do not",
    "Eukaryotic cells lack membrane-bound organelles, unlike prokaryotic cells",
    "Prokaryotic cells lack a true nucleus, while eukaryotic cells have a membrane-bound nucleus",
    "Eukaryotic cells are unicellular, and prokaryotic cells are multicellular"
  ],
  answer: "Prokaryotic cells lack a true nucleus, while eukaryotic cells have a membrane-bound nucleus"
},
{
  question: "Who was sworn in as the Chief Minister of Bihar for a record 10th time in November 2025?",
  option: [
    "Samrat Choudhary",
    "Tejashwi Yadav",
    "Vijay Kumar Sinha",
    "Nitish Kumar"
  ],
  answer: "Nitish Kumar"
},
{
  question: "Where was India's First National Dolphin Research Centre (NDRC) inaugurated?",
  option: [
    "Varanasi, Uttar Pradesh",
    "Patna, Bihar",
    "Guwahati, Assam",
    "Kolkata, West Bengal"
  ],
  answer: "Patna, Bihar"
},
{
  question: "Baking powder is a mixture of:",
  option: [
    "sodium carbonate and tartaric acid",
    "baking soda and washing soda",
    "baking soda and bleaching powder",
    "baking soda and mild edible acid"
  ],
  answer: "baking soda and mild edible acid"
},
{
  question: "The term ‘green revolution’ was coined by:",
  option: [
    "N.E. Borlaug",
    "R.N. Singh",
    "William S. Gaud",
    "M.S. Swaminathan"
  ],
  answer: "William S. Gaud"
},
{
  question: "What is the capital of Colombia?",
  option: [
    "Caracas",
    "Bogotá",
    "Lima",
    "Santiago"
  ],
  answer: "Bogotá"
},
{
  question: "Which dynasty was founded after the Maurya dynasty?",
  option: [
    "Shaka dynasty",
    "Kushan dynasty",
    "Satavahana dynasty",
    "Shunga dynasty"
  ],
  answer: "Shunga dynasty"
},
{
  question: "Who has been re-elected as the Speaker (Chairman) of the 18th Lok Sabha?",
  option: [
    "Jagdeep Dhankhar",
    "Om Birla",
    "Harivansh Narayan Singh",
    "Sumitra Mahajan"
  ],
  answer: "Om Birla"
},
{
  question: "The concept of “Equal Protection Under Law” in the Indian Constitution is borrowed from the Constitution of which of the following countries?",
  option: [
    "Australia",
    "United Kingdom",
    "Ireland",
    "United States of America"
  ],
  answer: "United States of America"
},
{
  question: "At simple interest, an amount becomes Rs.1120 in 4 years and Rs.1200 in 5 years. The principal is:",
  option: [
    "Rs.800",
    "Rs.1000",
    "Rs.1050",
    "Rs.1080"
  ],
  answer: "Rs.800"
},
{
  question: "‘Black death’ is another name for",
  option: [
    "Kala-azar",
    "Plague",
    "Botulism",
    "Tetanus"
  ],
  answer: "Plague"
},
{
  question: "The wealth definition of economics was mentioned in _____________ by Adam Smith.",
  option: [
    "Capitalism, Socialism, and Democracy",
    "Wealth of Nations",
    "Principles of Economics",
    "Nature and Significance of Economic Science"
  ],
  answer: "Wealth of Nations"
},
{
  question: "Amongst the following, who is known as the author of Arthashastra?",
  option: [
    "Kalidasa",
    "Varahamihira",
    "Aryabhatta",
    "Kautilya"
  ],
  answer: "Kautilya"
},
{
  question: "Who has been appointed as the new Governor of the Reserve Bank of India (RBI) on December 09, 2024?",
  option: [
    "Shaktikanta Das",
    "Sanjay Malhotra",
    "Urjit Patel",
    "Raghuram Rajan"
  ],
  answer: "Sanjay Malhotra"
},
{
  question: "Who among the following has initially drafted the ‘Quit India’ resolution of the Indian National congress in 1942?",
  option: [
    "Mahatma Gandhi",
    "Subhash Chandra Bose",
    "Jayaprakash Narayan",
    "BR Ambedkar"
  ],
  answer: "Mahatma Gandhi"
},
{
  question: "Which crop was widely cultivated by the Harappans besides wheat and barley?",
  option: [
    "Rice",
    "Cotton",
    "Sugarcane",
    "Maize"
  ],
  answer: "Cotton"
},
{
  question: "National Emergency is declared under which Article of the Indian Constitution?",
  option: [
    "Article 352",
    "Article 356",
    "Article 360",
    "Article 368"
  ],
  answer: "Article 352"
},
{
  question: "Where was the first municipal corporation established in Bihar?",
  option: [
    "Patna",
    "Gaya",
    "Muzaffarpur",
    "Motihari"
  ],
  answer: "Patna"
},
{
  question: "Jarawa tribes can be found majorly in which part of India?",
  option: [
    "Kerala",
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Andaman & Nicobar Islands"
  ],
  answer: "Andaman & Nicobar Islands"
},
{
  question: "Who was elected as the Speaker of the 18th Bihar Legislative Assembly in December 2025?",
  option: [
    "Nand Kishore Yadav",
    "Narendra Narayan Yadav",
    "Dr. Prem Kumar",
    "Samrat Chaudhary"
  ],
  answer: "Dr. Prem Kumar"
},
{
  question: "When was the first-ever National Space Day (NSpD) observed across India?",
  option: [
    "22 August 2023",
    "23 August 2023",
    "23 August 2024",
    "24 August 2024"
  ],
  answer: "23 August 2024"
},
{
  question: "Who was the Viceroy of India at the time of civil disobedience movement?",
  option: [
    "Lord Wavell",
    "Lord Reading",
    "Lord Chelmsford",
    "Lord Irwin"
  ],
  answer: "Lord Irwin"
},
{
  question: "A shopkeeper bought 5 identical chairs for a total cost of Rs. 7,500. He sold three chairs at a gain of 20% each and the remaining two chairs at a loss of 10% each. What is his overall profit or loss percentage?",
  option: [
    "8% Profit",
    "10% Profit",
    "12% Profit",
    "14% Profit"
  ],
  answer: "8% Profit"
},
{
  question: "Who discovered the Cape of Good Hope?",
  option: [
    "Columbus",
    "Vasco-da-Gama",
    "Magellan",
    "Bartholomew Diaz"
  ],
  answer: "Bartholomew Diaz"
},
{
  question: "Where will the Indian AI Research Organization (IAIRO) be established?",
  option: [
    "Bengaluru",
    "Hyderabad",
    "GIFT City, Gandhinagar",
    "Pune"
  ],
  answer: "GIFT City, Gandhinagar"
},
{
  question: "Where is the Tomb of Bakhtiyar Khan located in Bihar?",
  option: [
    "Rohtas",
    "Kaimur",
    "Nalanda",
    "Patna"
  ],
  answer: "Kaimur"
},
{
  question: "Who among the following is the ex-officio Chairman of the Rajya Sabha?",
  option: [
    "Vice President of India",
    "Finance Minister of India",
    "President of India",
    "Prime Minister of India"
  ],
  answer: "Vice President of India"
},
{
  question: "The 42nd Constitutional Amendment Act of Indian Constitution was passed in the year ________.",
  option: [
    "1976",
    "1977",
    "1978",
    "1979"
  ],
  answer: "1976"
},
{
  question: "Which of the following is NOT a cropping season in India?",
  option: [
    "Kharif",
    "Rabi",
    "Zaid",
    "Plantation"
  ],
  answer: "Plantation"
},
{
  question: "Match the following:\nA. Article 39 → 1. Equal pay for equal work\nB. Article 40 → 2. Organisation of village panchayats\nC. Article 51A → 3. Fundamental Duties\nD. Article 48A → 4. Environment protection",
  option: [
    "A-1, B-2, C-3, D-4",
    "A-2, B-1, C-3, D-4",
    "A-1, B-3, C-2, D-4",
    "A-4, B-1, C-2, D-3"
  ],
  answer: "A-1, B-2, C-3, D-4"
},
{
  question: "Match List-I with List-II and select the correct answer using the code given below the Lists:\nList-I (Central Trade Union Federation)\nA. Centre of Indian Trade Unions\nB. Indian National Trade Union Congress\nC. Bharatiya Mazdoor Sangh\nD. All India Trade Union Congress\nList-II (Political Party)\n1. Indian National Congress\n2. Bharatiya Janata Party\n3. Communist Party of India\n4. Communist Party of India (Marxist)",
  option: [
    "A-4 B-1 C-2 D-3",
    "A-4 B-2 C-1 D-3",
    "A-3 B-2 C-1 D-4",
    "A-3 B-1 C-2 D-4"
  ],
  answer: "A-4 B-1 C-2 D-3"
},
{
  question: "In Mendel’s experiment, what trait was used to determine the inheritance of pea plants?",
  option: [
    "Flower color",
    "Seed shape",
    "Plant height",
    "All of the above"
  ],
  answer: "All of the above"
},
{
  question: "The 73rd Constitutional Amendment Act of India is related to which of the following?",
  option: [
    "Urban local bodies",
    "Panchayati Raj institutions",
    "Cooperative societies",
    "Scheduled Areas"
  ],
  answer: "Panchayati Raj institutions"
},
{
  question: "The voting age was reduced from 21 years to 18 years by the ________ Constitutional Amendment Act of 1988.",
  option: [
    "51st",
    "61st",
    "71st",
    "41st"
  ],
  answer: "61st"
},
{
  question: "What is the capital city of Venezuela?",
  option: [
    "Valencia",
    "Maracaibo",
    "Caracas",
    "Barquisimeto"
  ],
  answer: "Caracas"
},
{
  question: "In which Indian state has the State Election Commission initiated the rollout of a mobile-based e-voting system, making it the first to adopt such a system?",
  option: [
    "Uttar Pradesh",
    "Bihar",
    "Maharashtra",
    "West Bengal"
  ],
  answer: "Bihar"
},
{
  question: "The Strait of Gibraltar separates which two of the following?",
  option: [
    "Atlantic ocean to Mediterranean sea",
    "Mediterranean sea to Black sea",
    "Chukchi sea to the arctic ocean",
    "Beaufort sea to the East Siberian Sea"
  ],
  answer: "Atlantic ocean to Mediterranean sea"
},
{
  question: "Which ministry is the nodal ministry for implementing the Jal Jeevan Mission (JJM)?",
  option: [
    "Ministry of Rural Development",
    "Ministry of Jal Shakti",
    "Ministry of Environment, Forest and Climate Change",
    "Ministry of Agriculture & Farmers Welfare"
  ],
  answer: "Ministry of Jal Shakti"
},
{
  question: "When did Vasco da Gama, a Portuguese explorer, discover the sea route to India?",
  option: [
    "1496",
    "1499",
    "1498",
    "1497"
  ],
  answer: "1498"
},
{
  question: "Who prepared and launched the draft of the Fifth Five-Year Plan?",
  option: [
    "Manmohan Singh",
    "Jayaprakash Narayan",
    "Bibek Debroy",
    "D.P. Dhar"
  ],
  answer: "D.P. Dhar"
},
{
  question: "Translate the following English sentence into Hindi: \"He did not agree with the decision taken by the committee.\"",
  option: [
    "वह समिति द्वारा लिए गए निर्णय से सहमत नहीं है।",
    "वह समिति के निर्णय से सहमत नहीं था।",
    "समिति द्वारा लिया गया निर्णय उसे स्वीकार नहीं हुआ।",
    "वह समिति द्वारा लिए गए निर्णय से सहमत नहीं था।"
  ],
  answer: "वह समिति द्वारा लिए गए निर्णय से सहमत नहीं था।"
},
{
  question: "What is the chemical formula for glucose?",
  option: [
    "C₆H₁₂O₆",
    "H₂O",
    "CO₂",
    "CH₄"
  ],
  answer: "C₆H₁₂O₆"
},
{
  question: "Who was the primary founder of the Azad Hind Fauj (Indian National Army) in 1942?",
  option: [
    "Subhas Chandra Bose",
    "Rash Behari Bose",
    "Captain Mohan Singh",
    "Bhagat Singh"
  ],
  answer: "Captain Mohan Singh"
},
{
  question: "Which Mughal emperor had a brother called Mirza Kamran, who conspired against him?",
  option: [
    "Babur",
    "Akbar",
    "Humayun",
    "Jahangir"
  ],
  answer: "Humayun"
},
{
  question: "Arrange the following strategic straits of Indian Ocean from East to West.\nA. Palk strait\nB. Strait of Hormuz\nC. Bab-el-Mandep\nD. Malacca strait\nChoose the correct answer from the options given below:",
  option: [
    "D, A, B, C",
    "A, B, C, D",
    "D, C, B, A",
    "C, A, D, B"
  ],
  answer: "D, A, B, C"
},
{
  question: "What is the total literacy rate of Bihar according to the 2011 census of India?",
  option: [
    "65.8 percent",
    "63.8 percent",
    "61.8 percent",
    "66.8 percent"
  ],
  answer: "61.8 percent"
},
{
  question: "Who was the first Chief Minister of Bihar?",
  option: [
    "Shri Krishna Singh",
    "Satyapal Malik",
    "Nitish Kumar",
    "Rabri Devi"
  ],
  answer: "Shri Krishna Singh"
},
{
  question: "Which of the following is the highest peak of Bihar?",
  option: [
    "Kaimur Hills",
    "Barabar Hills",
    "Someshwar Hills",
    "Rajgir Hills"
  ],
  answer: "Someshwar Hills"
},
{
  question: "What is the Hindi meaning of the word “Transfer”?",
  option: [
    "स्वागत",
    "स्थानांतरण",
    "सूचना",
    "विश्राम"
  ],
  answer: "स्थानांतरण"
},
{
  question: "Which river is responsible for forming a major delta along the Coromandel Coastal Plain?",
  option: [
    "Godavari",
    "Yamuna",
    "Narmada",
    "Brahmaputra"
  ],
  answer: "Godavari"
},
{
  question: "On June 16, 2025, Prime Minister Narendra Modi was conferred with which of the following highest civilian honours by Cyprus?",
  option: [
    "Grand Collar of the Order of Makarios III",
    "Grand Cross of the Order of Makarios III",
    "Grand Commander of the Order of Makarios III",
    "Knight Commander of the Order of Makarios III"
  ],
  answer: "Grand Cross of the Order of Makarios III"
},
{
  question: "Which of the following is not caused by the atmospheric refraction of light?",
  option: [
    "Twinkling of stars at night",
    "Sun appearing higher in the sky than it actually is",
    "Sun becoming visible two minutes before actual sunrise",
    "Sun appearing red at sunset"
  ],
  answer: "Sun appearing red at sunset"
},
{
  question: "One grain is sold for ₹84/kg at 20% profit. Another is sold for ₹72/kg at 20% profit. Mixed in ratio 3:2 and sold at ₹78/kg, what is the profit/loss percentage?",
  option: [
    "10% profit",
    "15.15% loss",
    "18.18% profit",
    "20% profit"
  ],
  answer: "18.18% profit"
},
{
  question: "Consider the following statements:\n1. The Parliamentary system is borrowed from Britain.\n2. The concept of Directive Principles is from Ireland.\n3. The idea of Fundamental Duties is taken from USSR.",
  option: [
    "1 and 2 only",
    "2 and 3 only",
    "1 and 3 only",
    "All of the above"
  ],
  answer: "All of the above"
},
{
  question: "What is the Hindi meaning of the word “Plan”?",
  option: [
    "योजना",
    "फल",
    "नगर",
    "समय"
  ],
  answer: "योजना"
},
{
  question: "In which year was Delhi officially announced as the Capital of British India by then Emperor George V?",
  option: [
    "1911",
    "1907",
    "1913",
    "1910"
  ],
  answer: "1911"
},
{
  question: "Champaran Satyagraha was led by whom among the following freedom fighters of British India?",
  option: [
    "Lal Bahadur Shastri",
    "Rajendra Prasad",
    "Mahatma Gandhi",
    "Subhash Chandra Bose"
  ],
  answer: "Mahatma Gandhi"
},
{
  question: "Which river forms an estuary before merging into the Arabian Sea?",
  option: [
    "Narmada",
    "Mahanadi",
    "Godavari",
    "Ganga"
  ],
  answer: "Narmada"
},
{
  question: "Which statement correctly describes the presence of jet streams over India during the monsoon season?",
  option: [
    "Only the easterly jet stream is present",
    "Both westerly and easterly jet streams are present",
    "Both westerly and easterly jet streams disappear",
    "Only the westerly jet stream is present"
  ],
  answer: "Both westerly and easterly jet streams are present"
},
{
  question: "Which group among the following consists exclusively of sedimentary rocks?",
  option: [
    "Limestone, bauxite and non-foliated rocks",
    "Non-foliated rocks, granite and shale",
    "Sandstone, limestone and shale",
    "Sandstone, bauxite and foliated rocks"
  ],
  answer: "Sandstone, limestone and shale"
},
{
  question: "Rs. 15,000 is invested at the rate of 10% p.a. for 3 years at simple interest in scheme A. The amount received is then invested for 2 years at 5% p.a., compounded annually in scheme B. Find the final amount.",
  option: [
    "Rs. 21498.75",
    "Rs. 19,845.65",
    "Rs. 20,250.45",
    "Rs. 19,500.25"
  ],
  answer: "Rs. 21498.75"
},
{
  question: "Who was elected as Ireland’s 10th President in October 2025?",
  option: [
    "Heather Humphreys",
    "Catherine Connolly",
    "Mary McAleese",
    "Michael D. Higgins"
  ],
  answer: "Catherine Connolly"
},
{
  question: "Who discovered Penicillin?",
  option: [
    "Charles Darwin",
    "Alexander Fleming",
    "Louis Pasteur",
    "Gregor Mendel"
  ],
  answer: "Alexander Fleming"
},
{
  question: "Who became India’s 90th Chess Grandmaster after achieving his final GM norm at the Bijeljina Open in Bosnia?",
  option: [
    "R Praggnanandhaa",
    "Ilamparthi AR",
    "D Gukesh",
    "Nihal Sarin"
  ],
  answer: "Ilamparthi AR"
},
{
  question: "Kanishka's capital was at",
  option: [
    "Mathura",
    "Peshawar",
    "Amravati",
    "Kanauj"
  ],
  answer: "Peshawar"
},
{
  question: "Consider the following statements:\n1. Money Bills can only be introduced in the Lok Sabha.\n2. Rajya Sabha has power to reject a Money Bill.\n3. Speaker of Lok Sabha decides whether a bill is a Money Bill.",
  option: [
    "1 and 2 only",
    "1 and 3 only",
    "2 and 3 only",
    "All of the above"
  ],
  answer: "1 and 3 only"
},
{
  question: "Which of the following states has mangrove forests?",
  option: [
    "Telangana",
    "Andhra Pradesh",
    "Rajasthan",
    "Manipur"
  ],
  answer: "Andhra Pradesh"
},
{
  question: "The Gandak River is a tributary of which river?",
  option: [
    "Yamuna River",
    "Ganga River",
    "Kaveri River",
    "Brahmaputra River"
  ],
  answer: "Ganga River"
},
{
  question: "When was NITI Aayog established?",
  option: [
    "2015",
    "2016",
    "2017",
    "2018"
  ],
  answer: "2015"
},
{
  question: "The cell wall of bacteria is made up of:",
  option: [
    "peptidoglycan",
    "cellulose",
    "glycogen",
    "peptone"
  ],
  answer: "peptidoglycan"
},
{
  question: "Kanger Valley National Park is located in which district of Chhattisgarh?",
  option: [
    "Dantewada",
    "Bastar",
    "Kanker",
    "Bijapur"
  ],
  answer: "Bastar"
},

      ],
    },
  },
  // 👇 Naya paper add karna hai toh bas ye block copy-paste karo aur id/name badlo
  { id: 2, name: "Paper Set 2", available: false, languages: { hindi: [], english: [] } },
  { id: 3, name: "Paper Set 3", available: false, languages: { hindi: [], english: [] } },
  { id: 4, name: "Paper Set 4", available: false, languages: { hindi: [], english: [] } },
];

const shiftsData = shiftsDataRaw.map((shift) => ({
  ...shift,
  languages: {
    hindi: normalizeQuestions(shift.languages?.hindi || []),
    english: normalizeQuestions(shift.languages?.english || []),
  },
}));

const getRandomQuestions = (questions, count) => {
  if (!questions || questions.length === 0) return [];
  const shuffled = [...questions].sort(() => Math.random() - 0.2);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// =====================================================
// MARKING SCHEME
// =====================================================
const MARK_CORRECT = 2;
const MARK_WRONG = 0.2; // 👈 negative marking

// =====================================================
// MAIN COMPONENT
// =====================================================
export default function BiharDarogaMockTest() {
  const [screen, setScreen] = useState("home");
  const [selectedShift, setSelectedShift] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [timer, setTimer] = useState(7200);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);

  useEffect(() => {
    if (screen === "exam" && timer > 0) {
      const t = setInterval(() => {
        setTimer((p) => {
          if (p <= 60) setShowTimerWarning(true);
          return p - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
    if (timer === 0 && screen === "exam") submitExam();
    // eslint-disable-next-line
  }, [screen, timer]);

  const handleShiftClick = (shift) => {
    setSelectedShift(shift);
    setScreen("languageSelect");
  };

  const startExam = (shift, language) => {
    const langQuestions = shift?.languages?.[language] || [];
    const selected = getRandomQuestions(langQuestions, 100);
    setQuestions(selected);
    setSelectedShift(shift);
    setSelectedLanguage(language);
    setScreen("exam");
    setTimer(7200);
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
        userAnswer: answers[i] || "Not Attempted",
        isCorrect: isCorrect,
      };
    });
    setScore(s);
    setResultDetails(details);
    setScreen("result");
  };

  const calculateScoreWithNegative = () => {
    let correct = 0, wrong = 0;
    resultDetails.forEach((item) => {
      if (item.isCorrect) correct++;
      else if (item.userAnswer !== "Not Attempted") wrong++;
    });
    const totalScore = correct * MARK_CORRECT - wrong * MARK_WRONG;
    return { correct, wrong, attempted: correct + wrong, totalScore: Math.max(0, totalScore) };
  };

  const resetAll = () => {
    setScreen("home");
    setSelectedShift(null);
    setSelectedLanguage(null);
    setAnswers({});
    setResultDetails([]);
    setTimer(7200);
    setShowTimerWarning(false);
    setQuestions([]);
    setCurrent(0);
  };

  // ==================== HOME ====================
  if (screen === "home") {
    return (
      <>
        <GlobalStyles />
        <div style={{
          minHeight: "100vh", display: "flex", justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          backgroundSize: "200% 200%", animation: "gradientShift 12s ease infinite",
          padding: "14px", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "10%", left: "-10%", width: "160px", height: "160px",
            background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)",
            borderRadius: "50%", filter: "blur(30px)", animation: "float 6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "10%", right: "-10%", width: "180px", height: "180px",
            background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)",
            borderRadius: "50%", filter: "blur(40px)", animation: "float 8s ease-in-out infinite",
          }} />
          <div className="fade-in-up" style={{
            background: "rgba(255,255,255,0.98)", padding: "24px 18px", borderRadius: "22px",
            boxShadow: "0 20px 55px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.5) inset",
            textAlign: "center", maxWidth: "380px", width: "100%",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "4px",
              background: "linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c)",
              backgroundSize: "200% 100%", animation: "gradientShift 3s ease infinite",
            }} />
            <div style={{ fontSize: "48px", marginBottom: "6px", display: "inline-block", animation: "float 3s ease-in-out infinite" }}>📚</div>
            <h1 style={{
              margin: "0 0 4px", fontSize: "22px", fontWeight: "900", letterSpacing: "-0.4px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Bihar Daroga</h1>
            <p style={{ margin: 0, fontSize: "11px", color: "#764ba2", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase" }}>Mock Test</p>
            <p style={{ color: "#94a3b8", fontSize: "11px", marginTop: "4px", fontWeight: "500" }}>Pre Police Exam Practice</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "16px" }}>
              <div style={{ background: "linear-gradient(135deg, #667eea15, #764ba215)", padding: "10px 8px", borderRadius: "12px", border: "1px solid #667eea25" }}>
                <div style={{ fontSize: "16px", marginBottom: "2px" }}>📝</div>
                <div style={{ fontSize: "9px", color: "#94a3b8", fontWeight: "700", letterSpacing: "0.4px" }}>QUESTIONS</div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#667eea" }}>100</div>
              </div>
              <div style={{ background: "linear-gradient(135deg, #f093fb15, #f5576c15)", padding: "10px 8px", borderRadius: "12px", border: "1px solid #f5576c25" }}>
                <div style={{ fontSize: "16px", marginBottom: "2px" }}>⏱️</div>
                <div style={{ fontSize: "9px", color: "#94a3b8", fontWeight: "700", letterSpacing: "0.4px" }}>DURATION</div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#f5576c" }}>2 Hrs</div>
              </div>
            </div>
            <div style={{ background: "linear-gradient(135deg, #fff9e6, #fff3cd)", padding: "10px 12px", borderRadius: "10px", marginTop: "12px", fontSize: "11px", color: "#856404", textAlign: "left", border: "1px solid #ffeaa7" }}>
              <strong style={{ fontSize: "11.5px" }}>📋 Instructions</strong>
              <ul style={{ margin: "5px 0 0 0", paddingLeft: "16px", lineHeight: "1.7" }}>
                <li>All questions are compulsory</li>
                <li>Correct: <strong style={{ color: "#22c55e" }}>+2</strong> • Wrong: <strong style={{ color: "#ef4444" }}>-0.2</strong></li>
                <li>Unattempted: <strong>0</strong></li>
              </ul>
            </div>
            <button onClick={() => setScreen("shiftSelect")} className="btn-press" style={{
              padding: "13px 32px", fontSize: "15px", fontWeight: "800",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
              backgroundSize: "200% 100%", animation: "gradientShift 4s ease infinite",
              color: "white", border: "none", borderRadius: "50px", cursor: "pointer",
              marginTop: "16px", width: "100%",
              boxShadow: "0 8px 24px rgba(102, 126, 234, 0.45)",
              letterSpacing: "0.4px",
            }}>🚀 START EXAM</button>
          </div>
        </div>
      </>
    );
  }

  // ==================== PAPER SELECT ====================
  if (screen === "shiftSelect") {
    const shiftColors = [
      { bg: "linear-gradient(135deg, #667eea, #764ba2)", shadow: "rgba(102, 126, 234, 0.45)", icon: "📘" },
      { bg: "linear-gradient(135deg, #f093fb, #f5576c)", shadow: "rgba(245, 87, 108, 0.45)", icon: "📗" },
      { bg: "linear-gradient(135deg, #4facfe, #00f2fe)", shadow: "rgba(79, 172, 254, 0.45)", icon: "📙" },
      { bg: "linear-gradient(135deg, #43e97b, #38f9d7)", shadow: "rgba(67, 233, 123, 0.45)", icon: "📕" },
      { bg: "linear-gradient(135deg, #fa709a, #fee140)", shadow: "rgba(250, 112, 154, 0.45)", icon: "📔" },
      { bg: "linear-gradient(135deg, #30cfd0, #330867)", shadow: "rgba(48, 207, 208, 0.45)", icon: "📓" },
    ];
    return (
      <>
        <GlobalStyles />
        <div style={{
          minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          backgroundSize: "200% 200%", animation: "gradientShift 12s ease infinite",
          padding: "14px", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "5%", right: "-15%", width: "180px", height: "180px",
            background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)",
            borderRadius: "50%", filter: "blur(40px)",
          }} />
          <div className="fade-in-up" style={{
            background: "rgba(255,255,255,0.98)", padding: "22px 16px", borderRadius: "22px",
            boxShadow: "0 20px 55px rgba(0,0,0,0.28)", textAlign: "center",
            maxWidth: "380px", width: "100%", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "4px",
              background: "linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c)",
              backgroundSize: "200% 100%", animation: "gradientShift 3s ease infinite",
            }} />

            {/* 🎨 HEADING */}
            <div style={{ fontSize: "40px", marginBottom: "2px", animation: "float 3s ease-in-out infinite", display: "inline-block" }}>🗂️</div>
            <h2 style={{
              margin: "0 0 4px", fontSize: "22px", fontWeight: "900",
              letterSpacing: "-0.4px", lineHeight: 1.2,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Select Your Paper Set
            </h2>
            <p style={{ margin: "0 0 4px", color: "#764ba2", fontSize: "12px", fontWeight: "700", letterSpacing: "0.3px" }}>
              अपना पेपर सेट चुनें
            </p>
            <p style={{ margin: "0 0 16px", color: "#94a3b8", fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.3px" }}>
              Pick a paper set to begin your practice test
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              {shiftsData.map((shift, index) => {
                const c = shiftColors[index % shiftColors.length];
                const hindiCount = shift.languages?.hindi?.length || 0;
                const englishCount = shift.languages?.english?.length || 0;
                // ✅ FIX: sirf ek language ka count (jo bada ho) — 100 + 100 = 200 nahi
                const totalQ = Math.max(hindiCount, englishCount);
                const isDisabled = !shift.available || totalQ === 0;
                return (
                  <button key={shift.id} onClick={() => !isDisabled && handleShiftClick(shift)}
                    disabled={isDisabled} className={!isDisabled ? "btn-press" : ""}
                    style={{
                      padding: "13px 15px", fontSize: "14px", fontWeight: "800",
                      background: isDisabled ? "linear-gradient(135deg, #f1f5f9, #e2e8f0)" : c.bg,
                      color: isDisabled ? "#94a3b8" : "white", border: "none",
                      borderRadius: "14px", cursor: isDisabled ? "not-allowed" : "pointer",
                      boxShadow: isDisabled ? "none" : `0 6px 18px ${c.shadow}`,
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      transition: "transform 0.15s", letterSpacing: "0.2px",
                    }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                      <span style={{ fontSize: "18px" }}>{c.icon}</span>
                      <span>{shift.name}</span>
                    </span>
                    <span style={{
                      fontSize: "9px", fontWeight: "800",
                      background: isDisabled ? "#cbd5e1" : "rgba(255,255,255,0.25)",
                      color: isDisabled ? "#64748b" : "white",
                      padding: "3px 9px", borderRadius: "20px",
                      backdropFilter: "blur(10px)", letterSpacing: "0.4px",
                    }}>{isDisabled ? "SOON" : `${totalQ} Qs`}</span>
                  </button>
                );
              })}
            </div>

            <button onClick={() => setScreen("home")} className="btn-press" style={{
              marginTop: "14px", padding: "9px 22px", fontSize: "12px", fontWeight: "700",
              background: "transparent", color: "#667eea", border: "1.5px solid #667eea",
              borderRadius: "50px", cursor: "pointer", letterSpacing: "0.2px",
            }}>⬅ Back</button>
          </div>
        </div>
      </>
    );
  }

  // ==================== LANGUAGE SELECT ====================
  if (screen === "languageSelect") {
    if (!selectedShift) {
      return (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <p>No paper selected.</p>
          <button onClick={() => setScreen("shiftSelect")}>Go Back</button>
        </div>
      );
    }
    const hindiQs = selectedShift.languages?.hindi || [];
    const englishQs = selectedShift.languages?.english || [];
    return (
      <>
        <GlobalStyles />
        <div style={{
          minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          backgroundSize: "200% 200%", animation: "gradientShift 12s ease infinite",
          padding: "14px", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", bottom: "5%", left: "-15%", width: "200px", height: "200px",
            background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)",
            borderRadius: "50%", filter: "blur(40px)",
          }} />
          <div className="fade-in-up" style={{
            background: "rgba(255,255,255,0.98)", padding: "22px 16px", borderRadius: "22px",
            boxShadow: "0 20px 55px rgba(0,0,0,0.28)", textAlign: "center",
            maxWidth: "380px", width: "100%", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "4px",
              background: "linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c)",
              backgroundSize: "200% 100%", animation: "gradientShift 3s ease infinite",
            }} />
            <div style={{ fontSize: "38px", marginBottom: "4px" }}>🌐</div>
            <h2 style={{
              margin: "0 0 3px", fontSize: "20px", fontWeight: "900",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Select Language</h2>
            <p style={{ margin: "0 0 4px", color: "#94a3b8", fontSize: "11px", fontWeight: "600" }}>
              भाषा चुनें / Choose your language
            </p>
            <span style={{
              display: "inline-block", background: "linear-gradient(135deg, #667eea15, #764ba215)",
              color: "#667eea", fontSize: "10px", fontWeight: "800",
              padding: "3px 10px", borderRadius: "20px", marginBottom: "14px", letterSpacing: "0.4px",
            }}>{selectedShift.name}</span>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button onClick={() => hindiQs.length > 0 && startExam(selectedShift, "hindi")}
                disabled={hindiQs.length === 0} className={hindiQs.length > 0 ? "btn-press" : ""}
                style={{
                  padding: "14px 16px",
                  background: hindiQs.length > 0
                    ? "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)"
                    : "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
                  color: hindiQs.length > 0 ? "white" : "#94a3b8",
                  border: "none", borderRadius: "14px",
                  cursor: hindiQs.length > 0 ? "pointer" : "not-allowed",
                  boxShadow: hindiQs.length > 0 ? "0 6px 18px rgba(238, 90, 36, 0.4)" : "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "transform 0.15s",
                }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>🇮🇳</span>
                  <span style={{ textAlign: "left" }}>
                    <div style={{ fontSize: "15px", fontWeight: "900", letterSpacing: "0.2px" }}>हिंदी</div>
                    <div style={{ fontSize: "9px", opacity: 0.9, fontWeight: "700", letterSpacing: "0.4px" }}>HINDI MEDIUM</div>
                  </span>
                </span>
                <span style={{
                  fontSize: "10px", fontWeight: "800", background: "rgba(255,255,255,0.25)",
                  padding: "4px 10px", borderRadius: "20px", backdropFilter: "blur(10px)", letterSpacing: "0.4px",
                }}>{hindiQs.length} Qs</span>
              </button>

              <button onClick={() => englishQs.length > 0 && startExam(selectedShift, "english")}
                disabled={englishQs.length === 0} className={englishQs.length > 0 ? "btn-press" : ""}
                style={{
                  padding: "14px 16px",
                  background: englishQs.length > 0
                    ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                    : "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
                  color: englishQs.length > 0 ? "white" : "#94a3b8",
                  border: "none", borderRadius: "14px",
                  cursor: englishQs.length > 0 ? "pointer" : "not-allowed",
                  boxShadow: englishQs.length > 0 ? "0 6px 18px rgba(79, 172, 254, 0.4)" : "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "transform 0.15s",
                }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>🇬🇧</span>
                  <span style={{ textAlign: "left" }}>
                    <div style={{ fontSize: "15px", fontWeight: "900", letterSpacing: "0.2px" }}>English</div>
                    <div style={{ fontSize: "9px", opacity: 0.9, fontWeight: "700", letterSpacing: "0.4px" }}>ENGLISH MEDIUM</div>
                  </span>
                </span>
                <span style={{
                  fontSize: "10px", fontWeight: "800", background: "rgba(255,255,255,0.25)",
                  padding: "4px 10px", borderRadius: "20px", backdropFilter: "blur(10px)", letterSpacing: "0.4px",
                }}>{englishQs.length} Qs</span>
              </button>
            </div>

            <button onClick={() => setScreen("shiftSelect")} className="btn-press" style={{
              marginTop: "14px", padding: "9px 22px", fontSize: "12px", fontWeight: "700",
              background: "transparent", color: "#667eea", border: "1.5px solid #667eea",
              borderRadius: "50px", cursor: "pointer",
            }}>⬅ Back</button>
          </div>
        </div>
      </>
    );
  }

  // ==================== RESULT ====================
  if (screen === "result") {
    const totalQuestions = questions.length;
    const { correct, wrong, attempted, totalScore } = calculateScoreWithNegative();
    const maxScore = totalQuestions * MARK_CORRECT;
    const percentage = ((totalScore / maxScore) * 100).toFixed(2);
    const isPassed = percentage >= 60;
    return (
      <>
        <GlobalStyles />
        <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #f0f4ff 0%, #faf5ff 100%)", padding: "14px", paddingBottom: "24px" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div className="fade-in-up" style={{
              background: "white", borderRadius: "20px", padding: "22px 18px",
              boxShadow: "0 12px 40px rgba(102, 126, 234, 0.15)", textAlign: "center",
              marginBottom: "12px", position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "5px",
                background: isPassed ? "linear-gradient(90deg, #22c55e, #16a34a)" : "linear-gradient(90deg, #ef4444, #dc2626)",
              }} />
              <div style={{ fontSize: "40px", marginBottom: "6px" }}>{isPassed ? "🎉" : "📖"}</div>
              <h1 style={{ margin: "0 0 3px", fontSize: "20px", fontWeight: "900", color: "#1e293b" }}>
                {isPassed ? "Congratulations!" : "Keep Practicing!"}
              </h1>
              <p style={{ margin: "0 0 12px", fontSize: "11px", color: "#94a3b8", fontWeight: "600", letterSpacing: "0.4px" }}>
                {selectedShift?.name} • {selectedLanguage === "hindi" ? "हिंदी" : "English"}
              </p>
              <div style={{
                background: isPassed ? "linear-gradient(135deg, #dcfce7, #bbf7d0)" : "linear-gradient(135deg, #fee2e2, #fecaca)",
                padding: "16px", borderRadius: "14px", marginBottom: "12px",
              }}>
                <div style={{ fontSize: "34px", fontWeight: "900", color: isPassed ? "#15803d" : "#b91c1c", lineHeight: 1 }}>
                  {totalScore.toFixed(1)}
                  <span style={{ fontSize: "16px", color: isPassed ? "#22c55e" : "#ef4444", fontWeight: "700" }}> / {maxScore}</span>
                </div>
                <div style={{ fontSize: "13px", fontWeight: "800", color: isPassed ? "#15803d" : "#b91c1c", marginTop: "4px", letterSpacing: "0.4px" }}>
                  {percentage}% {isPassed ? "✔ PASSED" : "✘ FAILED"}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                <div style={{ background: "linear-gradient(135deg, #dcfce7, #bbf7d0)", padding: "8px 6px", borderRadius: "10px" }}>
                  <div style={{ fontSize: "9px", color: "#15803d", fontWeight: "700", letterSpacing: "0.4px" }}>CORRECT</div>
                  <div style={{ fontSize: "17px", fontWeight: "900", color: "#15803d" }}>{correct}</div>
                </div>
                <div style={{ background: "linear-gradient(135deg, #fee2e2, #fecaca)", padding: "8px 6px", borderRadius: "10px" }}>
                  <div style={{ fontSize: "9px", color: "#b91c1c", fontWeight: "700", letterSpacing: "0.4px" }}>WRONG</div>
                  <div style={{ fontSize: "17px", fontWeight: "900", color: "#b91c1c" }}>{wrong}</div>
                </div>
                <div style={{ background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)", padding: "8px 6px", borderRadius: "10px" }}>
                  <div style={{ fontSize: "9px", color: "#475569", fontWeight: "700", letterSpacing: "0.4px" }}>ATTEMPTED</div>
                  <div style={{ fontSize: "17px", fontWeight: "900", color: "#475569" }}>{attempted}</div>
                </div>
              </div>
              <div style={{ fontSize: "10px", color: "#94a3b8", marginTop: "8px", fontWeight: "600" }}>
                +2 correct • -0.2 wrong • 0 unattempted
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "20px", padding: "18px 14px", boxShadow: "0 12px 40px rgba(102, 126, 234, 0.15)" }}>
              <h2 style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: "900", color: "#1e293b", paddingBottom: "10px", borderBottom: "2px solid #f1f5f9", display: "flex", alignItems: "center", gap: "6px" }}>
                📋 Answer Review
              </h2>
              {resultDetails.map((item, index) => (
                <div key={index} className="slide-in" style={{
                  background: item.isCorrect ? "linear-gradient(135deg, #f0fdf4, #dcfce7)"
                    : item.userAnswer !== "Not Attempted" ? "linear-gradient(135deg, #fef2f2, #fee2e2)"
                    : "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                  borderLeft: `4px solid ${item.isCorrect ? "#22c55e" : item.userAnswer !== "Not Attempted" ? "#ef4444" : "#cbd5e1"}`,
                  padding: "10px 12px", marginBottom: "8px", borderRadius: "10px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <h4 style={{ margin: "0", fontSize: "12.5px", color: "#1e293b", flex: 1, lineHeight: "1.5", fontWeight: "600" }}>
                      <strong style={{ color: "#667eea" }}>Q{index + 1}.</strong> <QuestionText text={item.question} />
                    </h4>
                    <span style={{ fontSize: "16px", flexShrink: 0 }}>
                      {item.isCorrect ? "✅" : item.userAnswer !== "Not Attempted" ? "❌" : "⏭️"}
                    </span>
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "11.5px", lineHeight: "1.6" }}>
                    <p style={{ margin: "2px 0", color: "#475569" }}>
                      <strong>Your:</strong>{" "}
                      <span style={{ color: item.isCorrect ? "#16a34a" : item.userAnswer !== "Not Attempted" ? "#dc2626" : "#94a3b8", fontWeight: "700" }}>{item.userAnswer}</span>
                    </p>
                    {!item.isCorrect && (
                      <p style={{ margin: "2px 0", color: "#475569" }}>
                        <strong>Correct:</strong>{" "}
                        <span style={{ color: "#16a34a", fontWeight: "700" }}>{item.correctAnswer}</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <button onClick={resetAll} className="btn-press" style={{
                padding: "13px 32px", fontSize: "14px", fontWeight: "800",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
                backgroundSize: "200% 100%", animation: "gradientShift 4s ease infinite",
                color: "white", border: "none", borderRadius: "50px", cursor: "pointer",
                width: "100%", maxWidth: "280px", boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
                letterSpacing: "0.4px",
              }}>🔄 Take New Test</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ==================== EXAM ====================
  const q = questions[current];
  const answeredCount = Object.keys(answers).length;
  const progressPercent = ((current + 1) / questions.length) * 100;
  if (!q) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p>No questions available.</p>
        <button onClick={resetAll}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <GlobalStyles />
      <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #f0f4ff 0%, #faf5ff 100%)", padding: "10px", paddingBottom: "16px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ height: "3px", background: "#e2e8f0", borderRadius: "2px", marginBottom: "10px", overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${progressPercent}%`,
              background: "linear-gradient(90deg, #667eea, #764ba2, #f5576c)",
              transition: "width 0.3s ease", borderRadius: "2px",
            }} />
          </div>
          <div style={{
            background: "white", borderRadius: "14px", padding: "10px 12px",
            boxShadow: "0 6px 20px rgba(102, 126, 234, 0.1)", marginBottom: "10px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: "5px", alignItems: "center", marginBottom: "2px" }}>
                <span style={{
                  fontSize: "9px", fontWeight: "800",
                  background: "linear-gradient(135deg, #667eea15, #764ba215)",
                  color: "#667eea", padding: "2px 7px", borderRadius: "10px", letterSpacing: "0.4px",
                }}>{selectedShift?.name}</span>
                <span style={{
                  fontSize: "9px", fontWeight: "800",
                  background: "linear-gradient(135deg, #f093fb15, #f5576c15)",
                  color: "#f5576c", padding: "2px 7px", borderRadius: "10px", letterSpacing: "0.4px",
                }}>{selectedLanguage === "hindi" ? "हिंदी" : "EN"}</span>
              </div>
              <p style={{ margin: 0, fontSize: "11px", color: "#475569", fontWeight: "700" }}>
                Q {current + 1}<span style={{ color: "#94a3b8", fontWeight: "500" }}> / {questions.length}</span>
              </p>
              <p style={{ margin: "1px 0 0", fontSize: "9px", color: "#94a3b8", fontWeight: "600" }}>
                Answered: {answeredCount}
              </p>
            </div>
            <div style={{
              padding: "6px 11px", borderRadius: "10px",
              background: timer < 60 ? "linear-gradient(135deg, #fee2e2, #fecaca)" : "linear-gradient(135deg, #dcfce7, #bbf7d0)",
              animation: timer < 60 ? "pulse 1s ease infinite" : "none",
            }}>
              <div style={{
                fontSize: "8px", fontWeight: "800",
                color: timer < 60 ? "#b91c1c" : "#15803d",
                letterSpacing: "0.4px", textAlign: "center",
              }}>TIME</div>
              <div style={{
                fontSize: "14px", fontWeight: "900",
                color: timer < 60 ? "#b91c1c" : "#15803d",
                fontVariantNumeric: "tabular-nums",
              }}>{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}</div>
            </div>
          </div>
          <div key={current} className="fade-in-up" style={{
            background: "white", borderRadius: "16px", padding: "16px 14px",
            boxShadow: "0 8px 30px rgba(102, 126, 234, 0.12)", marginBottom: "10px",
          }}>
            <h3 style={{ fontSize: "14.5px", color: "#1e293b", margin: "0 0 14px", fontWeight: "700", lineHeight: "1.6" }}>
              <QuestionText text={q.question} />
            </h3>
            <div>
              {q.options.map((op, idx) => {
                const isSelected = answers[current] === op;
                const letters = ["A", "B", "C", "D"];
                return (
                  <div key={idx} onClick={() => setAnswers({ ...answers, [current]: op })} className="btn-press"
                    style={{
                      padding: "11px 12px", margin: "6px 0",
                      background: isSelected ? "linear-gradient(135deg, #eef2ff, #e0e7ff)" : "#f8fafc",
                      border: isSelected ? "2px solid #667eea" : "2px solid #e2e8f0",
                      borderRadius: "12px", cursor: "pointer", transition: "all 0.15s",
                      display: "flex", alignItems: "center", gap: "10px",
                      boxShadow: isSelected ? "0 4px 15px rgba(102, 126, 234, 0.2)" : "none",
                    }}>
                    <div style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      background: isSelected ? "linear-gradient(135deg, #667eea, #764ba2)" : "#e2e8f0",
                      color: isSelected ? "white" : "#64748b",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: "900", fontSize: "11.5px", flexShrink: 0, transition: "all 0.15s",
                    }}>{letters[idx]}</div>
                    <label style={{
                      fontSize: "13px", cursor: "pointer", flex: 1,
                      color: isSelected ? "#4338ca" : "#334155",
                      lineHeight: "1.5", fontWeight: isSelected ? "700" : "500",
                    }}>
                      <MathText text={op} />
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: "flex", gap: "6px", marginBottom: "10px" }}>
            <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}
              className={current !== 0 ? "btn-press" : ""}
              style={{
                flex: 1, padding: "11px", fontSize: "12.5px", fontWeight: "800",
                background: current === 0 ? "#f1f5f9" : "linear-gradient(135deg, #667eea, #764ba2)",
                color: current === 0 ? "#cbd5e1" : "white", border: "none",
                borderRadius: "12px", cursor: current === 0 ? "not-allowed" : "pointer",
                boxShadow: current === 0 ? "none" : "0 6px 16px rgba(102, 126, 234, 0.4)",
                letterSpacing: "0.2px",
              }}>⬅ Prev</button>
            <button onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              className={current !== questions.length - 1 ? "btn-press" : ""}
              style={{
                flex: 1, padding: "11px", fontSize: "12.5px", fontWeight: "800",
                background: current === questions.length - 1 ? "#f1f5f9" : "linear-gradient(135deg, #667eea, #764ba2)",
                color: current === questions.length - 1 ? "#cbd5e1" : "white", border: "none",
                borderRadius: "12px", cursor: current === questions.length - 1 ? "not-allowed" : "pointer",
                boxShadow: current === questions.length - 1 ? "none" : "0 6px 16px rgba(102, 126, 234, 0.4)",
                letterSpacing: "0.2px",
              }}>Next ➡</button>
            <button onClick={submitExam} className="btn-press" style={{
              flex: 1, padding: "11px", fontSize: "12.5px", fontWeight: "800",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "white", border: "none", borderRadius: "12px", cursor: "pointer",
              boxShadow: "0 6px 16px rgba(34, 197, 94, 0.4)", letterSpacing: "0.2px",
            }}>📤 Submit</button>
          </div>
          <div style={{ background: "white", borderRadius: "16px", padding: "12px", boxShadow: "0 8px 30px rgba(102, 126, 234, 0.12)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#1e293b", fontSize: "11.5px", fontWeight: "800", letterSpacing: "0.2px" }}>📍 Navigator</p>
              <span style={{
                fontSize: "10px", fontWeight: "700",
                background: "linear-gradient(135deg, #667eea15, #764ba215)",
                color: "#667eea", padding: "3px 9px", borderRadius: "20px",
              }}>{answeredCount}/{questions.length}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(32px, 1fr))", gap: "5px" }}>
              {questions.map((_, idx) => {
                const isAnswered = !!answers[idx];
                const isCurrent = current === idx;
                return (
                  <button key={idx} onClick={() => setCurrent(idx)} className="btn-press"
                    style={{
                      aspectRatio: "1", fontSize: "10.5px", fontWeight: "800",
                      background: isCurrent ? "linear-gradient(135deg, #667eea, #764ba2)"
                        : isAnswered ? "linear-gradient(135deg, #22c55e, #16a34a)" : "#f1f5f9",
                      color: isCurrent || isAnswered ? "white" : "#64748b",
                      border: isCurrent ? "2px solid #4338ca" : "2px solid transparent",
                      borderRadius: "8px", cursor: "pointer",
                      boxShadow: isCurrent ? "0 4px 12px rgba(102, 126, 234, 0.5)"
                        : isAnswered ? "0 3px 8px rgba(34, 197, 94, 0.3)" : "none",
                      transition: "all 0.15s",
                    }}>{idx + 1}</button>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "10px", fontSize: "10px", color: "#64748b", flexWrap: "wrap", fontWeight: "600" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg, #22c55e, #16a34a)" }} /> Answered
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)" }} /> Current
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f1f5f9", border: "1px solid #cbd5e1" }} /> Unanswered
              </span>
            </div>
          </div>
        </div>
        {showTimerWarning && (
          <div style={{
            position: "fixed", bottom: "12px", left: "12px", right: "12px",
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white", padding: "11px 15px", borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(239, 68, 68, 0.5)", textAlign: "center",
            fontSize: "12.5px", fontWeight: "800", animation: "pulse 1s ease-in-out infinite",
            maxWidth: "380px", margin: "0 auto", letterSpacing: "0.2px",
          }}>⚠️ Less than 1 minute remaining!</div>
        )}
      </div>
    </>
  );
}
