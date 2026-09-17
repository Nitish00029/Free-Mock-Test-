// BiharDarogaMockTest.jsx
import React, { useState, useEffect } from "react";

// --- All Questions Combined (100+ questions) ---
const allQuestions = [
  // Current Affairs
  { question: "Who is the current Chief Minister of Bihar?", options: ["Nitish Kumar", "Tejashwi Yadav", "Lalu Yadav", "Jitan Ram Manjhi"], answer: "Nitish Kumar" },
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { question: "Which country won the FIFA World Cup 2022?", options: ["Brazil", "Argentina", "France", "Germany"], answer: "Argentina" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "Which state hosted the 2023 G20 Summit?", options: ["Maharashtra", "Delhi", "Karnataka", "Uttar Pradesh"], answer: "Delhi" },
  { question: "Who is the CEO of Tesla?", options: ["Elon Musk", "Jeff Bezos", "Tim Cook", "Mark Zuckerberg"], answer: "Elon Musk" },
  { question: "Which country is known as the 'Land of Rising Sun'?", options: ["China", "Japan", "South Korea", "India"], answer: "Japan" },
  { question: "What is the official currency of the United Kingdom?", options: ["Dollar", "Euro", "Pound Sterling", "Yen"], answer: "Pound Sterling" },
  { question: "Which Indian state has the highest population?", options: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], answer: "Uttar Pradesh" },
  { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"], answer: "Rabindranath Tagore" },
  { question: "Which country hosted the 2024 Summer Olympics?", options: ["France", "Japan", "Brazil", "USA"], answer: "France" },
  { question: "What is the name of India's first satellite?", options: ["Aryabhata", "Bhaskara", "Rohini", "INSAT"], answer: "Aryabhata" },
  { question: "Who is the current Vice President of India?", options: ["Jagdeep Dhankhar", "Venkaiah Naidu", "Hamid Ansari", "Pranab Mukherjee"], answer: "Jagdeep Dhankhar" },
  { question: "Which Indian state has the highest literacy rate?", options: ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"], answer: "Kerala" },
  { question: "What is the national sport of India?", options: ["Cricket", "Hockey", "Football", "Badminton"], answer: "Hockey" },
  { question: "Which river is known as the Ganga of the South?", options: ["Godavari", "Krishna", "Kaveri", "Narmada"], answer: "Kaveri" },
  { question: "What is the full form of ISRO?", options: ["Indian Space Research Organisation", "International Space Research Organisation", "Indian Space Research Office", "International Space Research Office"], answer: "Indian Space Research Organisation" },
  { question: "Which city is known as the Silicon Valley of India?", options: ["Mumbai", "Delhi", "Bangalore", "Chennai"], answer: "Bangalore" },
  { question: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower", "Marigold"], answer: "Lotus" },
  { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { question: "Who is the current Prime Minister of India?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal"], answer: "Narendra Modi" },
  { question: "What is the currency of India?", options: ["Rupee", "Dollar", "Pound", "Yen"], answer: "Rupee" },
  { question: "Who is the Chief Minister of Delhi?", options: ["Arvind Kejriwal", "Manish Sisodia", "Amit Shah", "Rahul Gandhi"], answer: "Arvind Kejriwal" },
  { question: "Which country has the largest population in the world?", options: ["India", "China", "USA", "Indonesia"], answer: "India" },
  { question: "What is the full form of GDP?", options: ["Gross Domestic Product", "General Development Plan", "Global Domestic Product", "Growth and Development Plan"], answer: "Gross Domestic Product" },

  // Science
  { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "HCl"], answer: "H2O" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
  { question: "What is the largest organ in the human body?", options: ["Liver", "Brain", "Heart", "Skin"], answer: "Skin" },
  { question: "What is the speed of light?", options: ["3×10^8 m/s", "3×10^6 m/s", "3×10^10 m/s", "3×10^4 m/s"], answer: "3×10^8 m/s" },
  { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen" },
  { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], answer: "NaCl" },
  { question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" },
  { question: "What is the pH value of pure water?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which animal is known as the 'King of the Jungle'?", options: ["Lion", "Tiger", "Elephant", "Bear"], answer: "Lion" },
  { question: "What is the unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], answer: "Ampere" },
  { question: "What is the boiling point of water in Celsius?", options: ["90°C", "95°C", "100°C", "110°C"], answer: "100°C" },
  { question: "Which vitamin is produced by the human body in sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au" },
  { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
  { question: "What is the chemical formula for methane?", options: ["CH4", "C2H6", "C3H8", "C4H10"], answer: "CH4" },
  { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: "Mercury" },
  { question: "What is the main function of red blood cells?", options: ["Fight infections", "Carry oxygen", "Clot blood", "Digest food"], answer: "Carry oxygen" },
  { question: "What is the chemical symbol for iron?", options: ["Fe", "Ir", "In", "I"], answer: "Fe" },
  { question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: "Jupiter" },
  { question: "What is the chemical symbol for silver?", options: ["Si", "Ag", "Au", "Fe"], answer: "Ag" },
  { question: "What is the freezing point of water?", options: ["-5°C", "0°C", "5°C", "10°C"], answer: "0°C" },
  { question: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },
  { question: "What is the chemical symbol for oxygen?", options: ["O", "O2", "Ox", "Om"], answer: "O" },
  { question: "What is the study of living organisms called?", options: ["Physics", "Biology", "Chemistry", "Geology"], answer: "Biology" },

  // Mathematics
  { question: "What is 25 + 37?", options: ["52", "62", "72", "82"], answer: "62" },
  { question: "What is 15 × 6?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "35"], answer: "25" },
  { question: "What is 3⁴?", options: ["27", "54", "81", "108"], answer: "81" },
  { question: "What is 7 × 8?", options: ["48", "54", "56", "64"], answer: "56" },
  { question: "What is 45 + 56?", options: ["99", "100", "101", "102"], answer: "101" },
  { question: "What is 12 × 12?", options: ["124", "134", "144", "154"], answer: "144" },
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
  { question: "What is 14 × 14?", options: ["186", "196", "206", "216"], answer: "196" },

  // Reasoning
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
  { question: "Choose the odd word: Pen, Pencil, Eraser, Book, Table", options: ["Pen", "Pencil", "Eraser", "Book", "Table"], answer: "Table" },
  { question: "If 3=7, 4=13, 5=21, then 6=?", options: ["27", "29", "31", "33"], answer: "31" },
  { question: "What is the next number: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], answer: "13" },
  { question: "What comes next: 2, 4, 8, 16, 32, ?", options: ["48", "56", "64", "72"], answer: "64" },
  { question: "Find the odd one out: 3, 6, 9, 12, 15", options: ["3", "6", "9", "12", "15"], answer: "12" },
  { question: "If 'BALL' is coded as 'CBNM', what is 'GOAL' coded as?", options: ["HPBM", "HPBN", "HPBO", "HPBL"], answer: "HPBM" },
  { question: "Find the missing number: 9, 16, 25, 36, ?", options: ["49", "50", "52", "54"], answer: "49" },
  { question: "What comes next: 1, 3, 6, 10, 15, ?", options: ["18", "20", "21", "22"], answer: "21" },
  { question: "If 'TIGER' is coded as 'UJHFS', what is 'LION' coded as?", options: ["MJPO", "MJPP", "MKPO", "MJPN"], answer: "MJPO" },

  // Social Science
  { question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar"], answer: "Dr. Rajendra Prasad" },
  { question: "Which is the largest state in India by area?", options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"], answer: "Rajasthan" },
  { question: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], answer: "Dr. B.R. Ambedkar" },
  { question: "Which city is known as the 'Pink City' of India?", options: ["Jaipur", "Delhi", "Mumbai", "Kolkata"], answer: "Jaipur" },
  { question: "Who led the Dandi March?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh"], answer: "Mahatma Gandhi" },
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
  { question: "Who was the first Prime Minister of India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "Lal Bahadur Shastri"], answer: "Jawaharlal Nehru" },
  { question: "Which river is the longest in India?", options: ["Ganga", "Yamuna", "Godavari", "Krishna"], answer: "Ganga" },
  { question: "Which planet is known as the Morning Star?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Venus" },
  { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Madrid"], answer: "Paris" },

  // Computer
  { question: "What is the full form of CPU?", options: ["Central Process Unit", "Central Processing Unit", "Computer Process Unit", "Control Processing Unit"], answer: "Central Processing Unit" },
  { question: "What is the shortcut key for copy?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], answer: "Ctrl+C" },
  { question: "Which is the largest unit of data storage?", options: ["KB", "MB", "GB", "TB"], answer: "TB" },
  { question: "Who is known as the father of computers?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
  { question: "What is the full form of RAM?", options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"], answer: "Random Access Memory" },
  { question: "What is the shortcut key for paste?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], answer: "Ctrl+V" },
  { question: "Which company developed Windows?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: "Microsoft" },
  { question: "What is the full form of ROM?", options: ["Read Only Memory", "Random Only Memory", "Read Original Memory", "Random Original Memory"], answer: "Read Only Memory" },
  { question: "What is the shortcut key for undo?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], answer: "Ctrl+Z" },
  { question: "Which is the smallest unit of data storage?", options: ["KB", "MB", "GB", "TB"], answer: "KB" },
];

// --- Helper: Get random questions ---
const getRandomQuestions = (count) => {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.2);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = () => {
  return getRandomQuestions(100);
};

// --- Component ---
export default function BiharDarogaMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(7200); // 2 hours = 7200 seconds
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

  // Calculate negative marking (0.5 marks deducted for wrong answers)
  const calculateScoreWithNegative = () => {
    let correct = 0;
    let wrong = 0;
    resultDetails.forEach(item => {
      if (item.isCorrect) correct++;
      else if (item.userAnswer !== "Not Attempted") wrong++;
    });
    const totalScore = (correct * 2) - (wrong * 0.5);
    return {
      correct,
      wrong,
      attempted: correct + wrong,
      totalScore: Math.max(0, totalScore)
    };
  };

  // Home Page - Mobile Optimized
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "25px 20px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📚</div>
          <h1 style={{ 
            color: "#333", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            Bihar Daroga Mock Test
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            Pre Police Exam
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #667eea, #764ba2)",
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
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#333" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️ Time</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#333" }}>2 Hour</div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#fff3cd",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "15px",
            fontSize: "12px",
            color: "#856404",
            textAlign: "left"
          }}>
            <strong>📋 निर्देश:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>All questions are compulsory</li>
              <li>Each correct answer: <strong>+2 marks</strong></li>
              <li>Each wrong answer: <strong>-0.2 marks</strong> (Negative marking)</li>
              <li>Unattempted: <strong>0 marks</strong></li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
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
    const totalQuestions = questions.length;
    const { correct, wrong, attempted, totalScore } = calculateScoreWithNegative();
    const maxScore = totalQuestions * 2;
    const percentage = ((totalScore / maxScore) * 100).toFixed(2);
    const isPassed = percentage >= 60;

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
            
            {/* Score Display */}
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#333" }}>
              {totalScore.toFixed(1)} <span style={{ fontSize: "20px", color: "#888" }}>/ {maxScore}</span>
            </div>
            
            <div style={{ 
              fontSize: "18px", 
              color: isPassed ? "#28a745" : "#dc3545", 
              marginTop: "5px",
              fontWeight: "600"
            }}>
              {percentage}% {isPassed ? "✔️ Passed" : "❌ Failed"}
            </div>

            {/* Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "10px",
              marginTop: "15px"
            }}>
              <div style={{ backgroundColor: "#d4edda", padding: "10px", borderRadius: "10px" }}>
                <div style={{ fontSize: "11px", color: "#155724" }}>Correct</div>
                <div style={{ fontSize: "20px", fontWeight: "bold", color: "#155724" }}>{correct}</div>
              </div>
              <div style={{ backgroundColor: "#f8d7da", padding: "10px", borderRadius: "10px" }}>
                <div style={{ fontSize: "11px", color: "#721c24" }}>Wrong</div>
                <div style={{ fontSize: "20px", fontWeight: "bold", color: "#721c24" }}>{wrong}</div>
              </div>
              <div style={{ backgroundColor: "#e2e3e5", padding: "10px", borderRadius: "10px" }}>
                <div style={{ fontSize: "11px", color: "#383d41" }}>Attempted</div>
                <div style={{ fontSize: "20px", fontWeight: "bold", color: "#383d41" }}>{attempted}</div>
              </div>
            </div>
            
            <div style={{ fontSize: "12px", color: "#666", marginTop: "10px" }}>
              +2 marks for correct | -0.5 marks for wrong | 0 for unattempted
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
                  backgroundColor: item.isCorrect ? "#f0fff4" : 
                                 item.userAnswer !== "Not Attempted" ? "#fff5f5" : "#f8f9fa",
                  borderLeft: `4px solid ${item.isCorrect ? "#48bb78" : 
                             item.userAnswer !== "Not Attempted" ? "#fc8181" : "#e2e8f0"}`,
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
                    {item.isCorrect ? "✅" : 
                     item.userAnswer !== "Not Attempted" ? "❌" : "⏭️"}
                  </span>
                </div>
                <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                  <p style={{ margin: "3px 0" }}>
                    <strong>Your Answer:</strong>{" "}
                    <span style={{ 
                      color: item.isCorrect ? "#48bb78" : 
                             item.userAnswer !== "Not Attempted" ? "#fc8181" : "#a0aec0" 
                    }}>
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
                setTimer(7200);
                setShowTimerWarning(false);
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
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
        {/* Header */}
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
            color: timer < 60 ? "#fc8181" : "#333",
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
            color: "#2d3748",
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
                  border: answers[current] === op ? "2px solid #667eea" : "2px solid transparent",
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#667eea",
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
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#667eea",
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
                                   current === idx ? "#667eea" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #667eea" : "none",
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