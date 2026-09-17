// BSEBClass10SocialScienceMockTest.jsx
import React, { useState, useEffect } from "react";

// --- BSEB Class 10 Social Science Question Bank (100 questions) ---
const socialScienceQuestions = [
  {
  "question": "जिस देश का राष्ट्रीय आय अधिक होता है वह देश कहलाता है।",
  "option": ["अविकसित", "विकसित", "अर्द्धविकसित", "इनमें से कोई नहीं"],
  "answer": "विकसित"
},
{
  "question": "इनमें से किसे पिछड़ा राज्य कहा जाता है?",
  "option": ["पंजाब", "केरल", "बिहार", "दिल्ली"],
  "answer": "बिहार"
},
{
  "question": "इनमें कौन से देश में मिश्रित अर्थव्यवस्था है?",
  "option": ["अमेरिका", "चीन", "भारत", "इनमें से कोई नहीं"],
  "answer": "भारत"
},
{
  "question": "भारत की आर्थिक व्यवस्था है",
  "option": ["समाजवादी", "पूँजीवादी", "मिश्रित", "इनमें से कोई नहीं"],
  "answer": "मिश्रित"
},
{
  "question": "किस क्षेत्र को प्राथमिक क्षेत्र कहा जाता है?",
  "option": ["सेवा क्षेत्र", "कृषि क्षेत्र", "औद्योगिक क्षेत्र", "सभी गलत हैं"],
  "answer": "कृषि क्षेत्र"
},
{
  "question": "भारत में योजना आयोग का गठन कब किया गया?",
  "option": ["15 मार्च, 1950", "15 सितम्बर, 1950", "15 अक्टूबर, 1951", "इनमें से कोई नहीं"],
  "answer": "15 मार्च, 1950"
},
{
  "question": "ऊर्जा के मुख्य स्रोत क्या हैं?",
  "option": ["कोयला", "पेट्रोलियम", "विद्युत", "इनमें से सभी"],
  "answer": "इनमें से सभी"
},
{
  "question": "अर्थव्यवस्था के मुख्यतः कितने प्रकार होते हैं?",
  "option": ["एक", "दो", "तीन", "चार"],
  "answer": "तीन"
},
{
  "question": "भारत में नीति आयोग की स्थापना कब हुई?",
  "option": ["2012 में", "2014 में", "2015 में", "2016 में"],
  "answer": "2015 में"
},
{
  "question": "जनसंख्या वृद्धि में आर्थिक विकास की गति",
  "option": ["तीव्र हो जाती है", "मंद हो जाती है", "सामान्य रहती है", "इनमें से कोई नहीं"],
  "answer": "मंद हो जाती है"
},
{
  "question": "आर्थिक क्रियाओं का उद्देश्य होता है",
  "option": ["जीविकोपार्जन", "परिभ्रमण", "मनोरंजन", "इनमें से कोई नहीं"],
  "answer": "जीविकोपार्जन"
},
{
  "question": "आर्थिक विकास का गैर-आर्थिक कारक कौन है?",
  "option": ["तकनीकी विकास", "प्राकृतिक संसाधन", "मानवीय संसाधन", "सामाजिक संस्थाएँ"],
  "answer": "सामाजिक संस्थाएँ"
},
{
  "question": "किस क्षेत्र को द्वितीयक क्षेत्र कहा जाता है?",
  "option": ["विद्युत", "मोबाइल", "कृषि", "उपर्युक्त सभी"],
  "answer": "विद्युत"
},
{
  "question": "किस क्षेत्र को तृतीयक क्षेत्र कहा जाता है?",
  "option": ["सेवा क्षेत्र", "कृषि क्षेत्र", "औद्योगिक क्षेत्र", "इनमें से कोई नहीं"],
  "answer": "सेवा क्षेत्र"
},
{
  "question": "स्वतंत्रता पूर्व भारतीय अर्थव्यवस्था थी",
  "option": ["कृषि प्रधान", "उद्योग प्रधान", "व्यवसाय प्रधान", "इनमें से कोई नहीं"],
  "answer": "कृषि प्रधान"
},
{
  "question": "किसी देश के विकास का स्तर किस आधार पर निर्धारित किया जाता है?",
  "option": ["प्रतिव्यक्ति आय", "साक्षरता दर", "स्वास्थ्य की स्थिति", "उपर्युक्त सभी"],
  "answer": "उपर्युक्त सभी"
},
{
  "question": "भारत के पड़ोसी देशों में किस देश की प्रति व्यक्ति आय अधिक है?",
  "option": ["नेपाल", "श्रीलंका", "बांग्लादेश", "म्यांमार"],
  "answer": "श्रीलंका"
},
{
  "question": "यदि राष्ट्रीय आय की अपेक्षा जनसंख्या में वृद्धि दर का अनुपात अधिक हो तो प्रति व्यक्ति आय क्या हो जाएगी?",
  "option": ["अधिक", "कम", "सामान्य", "इनमें से कोई नहीं"],
  "answer": "कम"
},
{
  "question": "'फूट डालो और राज करो' की नीति किसने अपनाई?",
  "option": ["अंग्रेजों ने", "मुसलमानों ने", "पारसियों ने", "किसी ने नहीं"],
  "answer": "अंग्रेजों ने"
},
{
  "question": "भारत की प्रथम पंचवर्षीय योजना का कार्यकाल था?",
  "option": ["1951-56", "1952-57", "1953-58", "1954-59"],
  "answer": "1951-56"
},
{
  "question": "बिहार में जीवनयापन का मुख्य साधन क्या है?",
  "option": ["कृषि", "व्यापार", "उद्योग", "उपर्युक्त सभी"],
  "answer": "कृषि"
},
{
  "question": "एक समाजवादी अर्थ-व्यवस्था में सर्वाधिक बल किस पर दिया जाता है?",
  "option": ["लोककल्याण पर", "उत्पादन कुशलता पर", "अधिकतम लाभ पर", "आर्थिक स्वतंत्रता पर"],
  "answer": "लोककल्याण पर"
},
{
  "question": "भारत में प्रथम पंचवर्षीय योजना की शुरुआत कब हुई?",
  "option": ["1950 में", "1951 में", "1952 में", "1953 में"],
  "answer": "1951 में"
},
{
  "question": "राष्ट्रीय विकास परिषद् का गठन कब हुआ?",
  "option": ["1950 में", "1951 में", "1952 में", "1953 में"],
  "answer": "1952 में"
},
{
  "question": "बैंक उदाहरण है",
  "option": ["प्राथमिक क्षेत्र का", "द्वितीयक क्षेत्र का", "तृतीयक क्षेत्र का", "चतुर्थक क्षेत्र का"],
  "answer": "तृतीयक क्षेत्र का"
},
{
  "question": "किस अर्थव्यवस्था में उत्पादन के साधनों पर किसी व्यक्ति या निजी संस्था का अधिकार होता है?",
  "option": ["समाजवादी", "पूँजीवादी", "मिश्रित", "इनमें से कोई नहीं"],
  "answer": "पूँजीवादी"
},
{
  "question": "निम्नलिखित में कौन-सा देश विकसित अर्थव्यवस्था का उदाहरण है?",
  "option": ["संयुक्त राज्य अमेरिका", "श्रीलंका", "भारत", "पाकिस्तान"],
  "answer": "संयुक्त राज्य अमेरिका"
},
{
  "question": "'नरेगा' के अंतर्गत ग्रामीण मजदूरों को साल में कम से कम कितने दिनों के लिए रोजगार देने की व्यवस्था है?",
  "option": ["100 दिनों के लिए", "150 दिनों के लिए", "200 दिनों के लिए", "225 दिनों के लिए"],
  "answer": "100 दिनों के लिए"
},
{
  "question": "'नरेगा' एक कार्यक्रम है",
  "option": ["राष्ट्रीय स्तर का", "प्रांतीय स्तर का", "विश्वस्तर का", "इनमें कोई नहीं"],
  "answer": "राष्ट्रीय स्तर का"
},
{
  "question": "सतत् विकास का उद्देश्य है",
  "option": ["केवल अपने लिए", "केवल दूसरों के लिए", "अपने लिए और आने वाली संतति के लिए", "इनमें से कोई नहीं"],
  "answer": "अपने लिए और आने वाली संतति के लिए"
},
{
  "question": "प्लास्टिक मुद्रा है",
  "option": ["चेक", "ए.टी.एम.", "ड्राफ्ट", "इनमें कोई नहीं"],
  "answer": "ए.टी.एम."
},
{
  "question": "जनसंख्या की दृष्टि से बिहार का भारत में कौन-सा स्थान है?",
  "option": ["पहला", "दूसरा", "तीसरा", "चौथा"],
  "answer": "तीसरा"
},
{
  "question": "सब्जी उत्पादन में बिहार को कौन-सा स्थान प्राप्त है?",
  "option": ["पहला", "दूसरा", "तीसरा", "चौथा"],
  "answer": "दूसरा"
},
{
  "question": "बिहार में किसकी प्रधानता है?",
  "option": ["कृषि की", "उद्योग की", "मत्स्य पालन की", "खनिज की"],
  "answer": "कृषि की"
},
{
  "question": "अमेरिका ने रबर के बागान पर किस रसायन का छिड़काव किया?",
  "option": ["जरीला", "नापाम", "एजेंट ऑरेंज", "माई-ली"],
  "answer": "एजेंट ऑरेंज"
},
{
  "question": "कम्बोडिया फ्रांस का संरक्षित राज्य कब बना?",
  "option": ["1862 में", "1863 में", "1873 में", "1874 में"],
  "answer": "1863 में"
},

];

// --- Helper: Get random questions ---
const getRandomQuestions = (count) => {
  const shuffled = [...socialScienceQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = () => {
  return getRandomQuestions(100);
};

// --- Component ---
export default function BSEBClass10SocialScienceMockTest() {
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
        background: "linear-gradient(135deg, #e65100 0%, #f57c00 50%, #fb8c00 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🌍</div>
          <h1 style={{ 
            color: "#e65100", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            सामाजिक विज्ञान मॉक टेस्ट
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            बिहार विद्यालय परीक्षा समिति - कक्षा 10
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #e65100, #fb8c00)",
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
              backgroundColor: "#fff3e0", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝 Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#e65100" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#fff3e0", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️Time</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#e65100" }}>60 min</div>
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
            <strong>📋 निर्देश:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>सभी प्रश्न अनिवार्य हैं</li>
              <li>प्रत्येक प्रश्न <strong>1 अंक</strong> का है</li>
              <li><strong>कोई नकारात्मक अंकन नहीं</strong></li>
              <li>समय समाप्त होने से पहले जमा करें</li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #e65100 0%, #fb8c00 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(251, 140, 0, 0.4)"
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
              {isPassed ? "🎉 अभिनन्दन!" : "📖 अभ्यास जारी रखें!"}
            </h1>
            <p style={{ color: "#888", fontSize: "12px" }}>सामाजिक विज्ञान मॉक टेस्ट - कक्षा १०</p>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#e65100" }}>
              {score} <span style={{ fontSize: "20px", color: "#888" }}>/ {questions.length}</span>
            </div>
            <div style={{ 
              fontSize: "18px", 
              color: isPassed ? "#28a745" : "#dc3545", 
              marginTop: "5px",
              fontWeight: "600"
            }}>
              {percentage}% {isPassed ? "✔️ उत्तीर्ण" : "❌ सुधार की आवश्यकता"}
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
                🎯 आपने मॉक टेस्ट उत्तीर्ण किया!
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
              📋 उत्तर समीक्षा
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
                    प्रश्न {index + 1}. {item.question}
                  </h4>
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>
                    {item.isCorrect ? "✅" : "❌"}
                  </span>
                </div>
                <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                  <p style={{ margin: "3px 0" }}>
                    <strong>आपका उत्तर:</strong>{" "}
                    <span style={{ color: item.isCorrect ? "#48bb78" : "#fc8181" }}>
                      {item.userAnswer}
                    </span>
                  </p>
                  {!item.isCorrect && (
                    <p style={{ margin: "3px 0" }}>
                      <strong>सही उत्तर:</strong>{" "}
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
                background: "linear-gradient(135deg, #e65100 0%, #fb8c00 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(251, 140, 0, 0.4)"
              }}
            >
              🔄 नया मॉक टेस्ट लें
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
              प्रश्न {current + 1}/{questions.length}
            </p>
            <p style={{ 
              margin: "2px 0 0", 
              fontSize: "10px", 
              color: "#a0aec0"
            }}>
              उत्तर दिए: {answeredCount}/{questions.length}
            </p>
          </div>
          <div style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: timer < 60 ? "#fc8181" : "#e65100",
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
            backgroundColor: "#fff3e0",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#e65100",
            marginBottom: "12px"
          }}>
            📌 प्रश्न {current + 1}
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#e65100",
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
                  backgroundColor: answers[current] === op ? "#fff3e0" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #e65100" : "2px solid transparent",
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#e65100",
                color: current === 0 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
            >
              ⬅ Privious
            </button>
            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#e65100",
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
            प्रश्न नेविगेटर - {answeredCount}/{questions.length} उत्तर दिए
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
                                   current === idx ? "#e65100" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #e65100" : "none",
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
            <span>🟢 उत्तर दिया</span>
            <span>🔵 वर्तमान</span>
            <span>⚪ उत्तर नहीं दिया</span>
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
            ⚠️ १ मिनट से कम समय शेष!
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