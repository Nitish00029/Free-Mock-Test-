// SSCGDMockTest.jsx
import React, { useState, useEffect } from "react";

// --- Question Banks ---

// Mathematics (20 questions)
const mathQuestions = [
  { question: "What is 25 + 37?", options: ["52", "62", "72", "82"], answer: "62" },
  { question: "What is 15 × 6?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "35"], answer: "25" },
  { question: "What is 3⁴?", options: ["27", "54", "81", "108"], answer: "81" },
  { question: "What is 7 × 8?", options: ["48", "54", "56", "64"], answer: "56" },
  { question: "What is 45 + 56?", options: ["99", "100", "101", "102"], answer: "101" },
  { question: "What is 12 × 12?", options: ["124", "134", "144", "154"], answer: "144" },
  { question: "What is the value of π (pi) approximately?", options: ["3.14", "3.41", "3.13", "3.11"], answer: "3.14" },
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
];

// Reasoning (20 questions)
const reasoningQuestions = [
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
  { question: "Find the odd one out: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60", options: ["3", "6", "9", "12"], answer: "12" },
  { question: "If 'CAT' is coded as 'DBU', then 'DOG' is coded as?", options: ["EPH", "EPI", "EQH", "EPG"], answer: "EPH" },
  { question: "What comes next: Z, X, V, T, ?", options: ["R", "S", "Q", "P"], answer: "R" },
  { question: "Find the missing number: 7, 14, 28, 56, ?", options: ["84", "96", "102", "112"], answer: "112" },
  { question: "Choose the odd word: Pen, Pencil, Eraser, Book, Table", options: ["Pen", "Pencil", "Eraser", "Book", "Table"], answer: "Table" },
  { question: "If 3=7, 4=13, 5=21, then 6=?", options: ["27", "29", "31", "33"], answer: "31" },
  { question: "What is the next number: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], answer: "13" },
];

// General Knowledge (20 questions)
const gkQuestions = [
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { question: "Which country is known as the 'Land of Rising Sun'?", options: ["China", "Japan", "South Korea", "India"], answer: "Japan" },
  { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower", "Marigold"], answer: "Lotus" },
  { question: "Which is the largest state in India by area?", options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"], answer: "Rajasthan" },
  { question: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], answer: "Dr. B.R. Ambedkar" },
  { question: "Which river is known as the Ganga of the South?", options: ["Godavari", "Krishna", "Kaveri", "Narmada"], answer: "Kaveri" },
  { question: "What is the full form of GDP?", options: ["Gross Domestic Product", "General Development Plan", "Global Domestic Product", "Growth and Development Plan"], answer: "Gross Domestic Product" },
  { question: "Which Indian state has the highest population?", options: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], answer: "Uttar Pradesh" },
  { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"], answer: "Rabindranath Tagore" },
  { question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], answer: "Yen" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is the largest ocean in the world?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"], answer: "Alexander Graham Bell" },
  { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "HCl"], answer: "H2O" },
  { question: "Which is the smallest continent?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: "Australia" },
  { question: "What is the national sport of India?", options: ["Cricket", "Hockey", "Football", "Badminton"], answer: "Hockey" },
  { question: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"], answer: "Jawaharlal Nehru" },
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
];

// English (20 questions)
const englishQuestions = [
  { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childrens", "Childes"], answer: "Children" },
  { question: "Which word is a synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
  { question: "What is the past tense of 'go'?", options: ["Goed", "Went", "Gone", "Going"], answer: "Went" },
  { question: "Which is a noun?", options: ["Run", "Beautiful", "Happiness", "Quickly"], answer: "Happiness" },
  { question: "What is the antonym of 'big'?", options: ["Large", "Small", "Tall", "Wide"], answer: "Small" },
  { question: "Choose the correct spelling:", options: ["Acomodate", "Accommodate", "Acommodate", "Accomadate"], answer: "Accommodate" },
  { question: "What is a synonym for 'quick'?", options: ["Slow", "Fast", "Lazy", "Steady"], answer: "Fast" },
  { question: "Which is a preposition?", options: ["Run", "In", "Happy", "Quickly"], answer: "In" },
  { question: "What is the plural of 'mouse'?", options: ["Mouses", "Mice", "Mices", "Mousies"], answer: "Mice" },
  { question: "What is the past tense of 'write'?", options: ["Writed", "Wrote", "Written", "Writing"], answer: "Wrote" },
  { question: "Choose the correct article: I saw ___ elephant.", options: ["A", "An", "The", "None"], answer: "An" },
  { question: "What is an antonym for 'hot'?", options: ["Warm", "Cold", "Spicy", "Boiling"], answer: "Cold" },
  { question: "Which word is a verb?", options: ["Beautiful", "Happiness", "Run", "Quickly"], answer: "Run" },
  { question: "What is the comparative form of 'good'?", options: ["Gooder", "Better", "Best", "More good"], answer: "Better" },
  { question: "What is the plural of 'foot'?", options: ["Foots", "Feet", "Feets", "Footes"], answer: "Feet" },
  { question: "Which word is an adjective?", options: ["Slowly", "Beautiful", "Run", "Happiness"], answer: "Beautiful" },
  { question: "What is the past tense of 'see'?", options: ["Seed", "Saw", "Seen", "Seeing"], answer: "Saw" },
  { question: "Choose the correct pronoun: ___ is my friend.", options: ["He", "Him", "His", "Himself"], answer: "He" },
  { question: "What is the plural of 'city'?", options: ["Citys", "Cities", "Cityes", "Cites"], answer: "Cities" },
  { question: "Which is a conjunction?", options: ["And", "Run", "Happy", "Quickly"], answer: "And" },
];

// --- Helper: Get random questions from a category ---
const getRandomQuestions = (category, count) => {
  const shuffled = [...category].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (80 questions) ---
const buildQuestionPaper = () => {
  const paper = [
    ...getRandomQuestions(mathQuestions, 20),
    ...getRandomQuestions(reasoningQuestions, 20),
    ...getRandomQuestions(gkQuestions, 20),
    ...getRandomQuestions(englishQuestions, 20),
  ];
  return paper.sort(() => Math.random() - 0.5);
};

// --- Component ---
export default function SSCGDMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600); // 60 minutes = 3600 seconds
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
        options: q.options,
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
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "25px 20px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🎯</div>
          <h1 style={{ 
            color: "#1a1a2e", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            SSC GD Mock Test
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            Constable General Duty
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #1a1a2e, #0f3460)",
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
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝 Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a1a2e" }}>80</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️Time</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a1a2e" }}>60 min</div>
            </div>
          </div>

          {/* <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5px",
            marginTop: "10px",
            fontSize: "11px",
            color: "#555"
          }}>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              📐 <strong>20</strong> Math
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              🧠 <strong>20</strong> Reasoning
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              🌍 <strong>20</strong> GK
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              📖 <strong>20</strong> English
            </div>
          </div> */}

          <div style={{
            backgroundColor: "#f8f9fa",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "10px",
            fontSize: "12px",
            color: "#555",
            textAlign: "left"
          }}>
            <strong>📋 निर्देश:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>All questions are compulsory</li>
              <li>Each question carries <strong>1 mark</strong></li>
              <li><strong>No negative marking</strong></li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(15, 52, 96, 0.4)"
            }}
          >
            🚀 Start Exam
          </button>
        </div>
      </div>
    );
  }

  // Result Page - Mobile Optimized
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#1a1a2e" }}>
              {score} <span style={{ fontSize: "20px", color: "#888" }}>/ {questions.length}</span>
            </div>
            <div style={{ 
              fontSize: "18px", 
              color: isPassed ? "#28a745" : "#dc3545", 
              marginTop: "5px",
              fontWeight: "600"
            }}>
              {percentage}% {isPassed ? "✔️ Passed" : "❌ Failed"}
            </div>
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
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(15, 52, 96, 0.4)"
              }}
            >
              🔄 Take New Test
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
        {/* Header - Mobile Optimized with Timer on Right */}
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
            color: timer < 60 ? "#fc8181" : "#1a1a2e",
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
          <h3 style={{
            fontSize: "16px",
            color: "#1a1a2e",
            marginBottom: "16px",
            fontWeight: "600",
            lineHeight: "1.5"
          }}>
            {q.question}
          </h3>

          <div style={{ marginTop: "5px" }}>
            {q.options.map((op, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 12px",
                  margin: "5px 0",
                  backgroundColor: answers[current] === op ? "#ebf8ff" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #0f3460" : "2px solid transparent",
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

        {/* Navigation - Mobile Optimized */}
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#0f3460",
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
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#0f3460",
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
              backgroundColor: "#48bb78",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(72, 187, 120, 0.3)"
            }}
          >
            📤 Submit
          </button>
        </div>

        {/* Question Navigator - Mobile Optimized */}
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
            Question Navigator
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
                                   current === idx ? "#0f3460" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #0f3460" : "none",
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
            <span>🟢 Answered</span>
            <span>🔵 Current</span>
            <span>⚪ Unanswered</span>
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