// SSCGDMockTest.jsx
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

    if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    }
    if (part.startsWith("\\(") && part.endsWith("\\)") && part.length > 4) {
      return <InlineMath key={index} math={part.slice(2, -2)} />;
    }
    if (part.startsWith("\\[") && part.endsWith("\\]") && part.length > 4) {
      return <InlineMath key={index} math={part.slice(2, -2)} />;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function MathText({ text }) {
  if (text === null || text === undefined) return null;

  const normalized = String(text)
    .replace(/\\\(/g, "$")
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$")
    .replace(/\\\]/g, "$");

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

  if (idx === -1) {
    return <MathText text={text} />;
  }

  const questionPart = text.slice(0, idx).trim();
  const passagePart = text.slice(idx).trim();

  return (
    <>
      {questionPart && (
        <div style={{ marginBottom: "12px", fontWeight: "600" }}>
          <MathText text={questionPart} />
        </div>
      )}
      <div
        style={{
          background: "#fffbeb",
          borderLeft: "4px solid #f59e0b",
          padding: "12px 14px",
          borderRadius: "8px",
          fontStyle: "italic",
          color: "#4a3f1e",
          fontSize: "14px",
          lineHeight: "1.8",
          fontWeight: "400",
        }}
      >
        <MathText text={passagePart} />
      </div>
    </>
  );
}

// =====================================================
// MATHEMATICS (20) - English
// =====================================================
const mathQuestions = [

{
    question: "sarng has HDFC in 4% annual interest rate on some sum of money of invested if 2 yearson after, sarng to compounded annually compound interest of rup in ₹153 received becomes, then corresponding simple interest (₹ in) what will it be?",
    option: [
        "165",
        "150",
        "145",
        "160"
    ],
    answer: "150"
},

{
    question: "a customer a certain viremaining vstu to khridhas of lie 40% of discount ya 25% and 15% of two successive discounts between nirny nhin le pa rha is both discounton between kitna difference is?",
    option: [
        "3.75%",
        "2.75%",
        "3.25%",
        "2.25%"
    ],
    answer: "3.75%"
},

{
    question: "a shopkeeper of pas 7 cm radius vala ek spherical laddus is usi material from, 3.5 cm radius vale how many laddus can be made?",
    option: [
        "4",
        "6",
        "12",
        "8"
    ],
    answer: "8"
},

{
    question: "672 and 7056 of LCM find.",
    option: [
        "28224",
        "42336",
        "7056",
        "14112"
    ],
    answer: "14112"
},

{
    question: "rchin ek distance 2 hours tk 60 km/hr of speed from and 80 km of distance 40 km/hr of speed from ty does rchin of average speed (km/hr in) find.",
    option: [
        "50",
        "59",
        "55",
        "47"
    ],
    answer: "50"
},

{
    question: "do relgariyan, jinin from each 180 m lnbi is, on parallel tracks 50 km/hr and 70 km/hr of speed from towards each other brh rhi are how many seconds in ve ek-dusre to completely cross kr jaengi?",
    option: [
        "10.4",
        "10.6",
        "10.8",
        "10.2"
    ],
    answer: "10.8"
},

{
    question: "Evaluate: (-9) - (-60) ÷ (-12) + (-3) × 9",
    option: [
        "-41",
        "-44",
        "-40",
        "-43"
    ],
    answer: "-41"
},

{
    question: "petrol of value in (per litre) 60% of increases isof consumption in how many percentage decrease should be reduced ki is on hohas vale expenditure in only 12% increase ho?",
    option: [
        "36%",
        "30%",
        "66%",
        "70%"
    ],
    answer: "30%"
},

{
    question: "rajeshvr ek work to 12 in days, vikrm 6 in days and taigr 15 in days can complete ve all together work krna start do, but rajeshvr 2 days bad work krna chhor deta is and vikrm work pura hohas from 3 days phle work krna chhor deta is work in how many days pura hoga?",
    option: [
        "5 4/7",
        "5 5/7",
        "5 6/7",
        "5 3/7"
    ],
    answer: "5 5/7"
},

{
    question: "Evaluate: 16 + 10 ÷ 5 - 2 × 3",
    option: [
        "12",
        "15",
        "14",
        "11"
    ],
    answer: "12"
},

{
    question: "ek dishonest shopkeeper aphas savalue to cost price on selling of claims however, vh ek aifrom weight of upsum does jisof weight actually weight written on it from 26% less is usof profit percentage find.",
    option: [
        "36 6/37%",
        "37 10/37%",
        "34 5/37%",
        "35 5/37%"
    ],
    answer: "35 5/37%"
},

{
    question: "Find the value of the following: [(84 ÷ 6) × {91/7 + 16/2 × (8 - 6)}]",
    option: [
        "400",
        "426",
        "409",
        "406"
    ],
    answer: "406"
},

{
    question: "do trains 60 km/h and 110 km/h of speed from in opposite directions gti kr rhi are ek tren of length 360 m is unhen ek-dusre to cross in 21 seconds of time takes dusri tren of length (m in) to two decimal places find.",
    option: [
        "630.92",
        "632.93",
        "630.08",
        "631.66"
    ],
    answer: "631.66"
},

{
    question: "a candidate to 25% marks received hote are and vh 68 markson from fail becomes, whereas ek dusre ummidvar, jifrom 50% marks received hote are, to examination pass krhas of lie aavshyk minimum markson from 42 marks received more hote are examination of lie maximum marks (maximum marks) find.",
    option: [
        "440",
        "400",
        "430",
        "410"
    ],
    answer: "440"
},

{
    question: "annual simple interest of svalue rate on amit ₹5400 of amount of invest does and gopal ₹9400 of amount of invest does if 4 years at the end of, gopal to amit from ₹480 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "5",
        "3",
        "2",
        "4"
    ],
    answer: "3"
},

{
    question: "a shopkeeper has ₹520 in an item khridi 10% labh received krhas of lie ufrom vstu to at what price (₹ in) on sell chahie?",
    option: [
        "584",
        "468",
        "560",
        "572"
    ],
    answer: "572"
},

{
    question: "ek class of 48 students of average age 22 years is if teacher of age bhi smmilit kr li jae, then entire group of average age 23 years becomes teacher of age (in years) find.",
    option: [
        "68",
        "70",
        "71",
        "60"
    ],
    answer: "71"
},

{
    question: "ek kile in 150 men of lie 85 dayson of food of provision was 15 dayson after, 25 men kile from left remaining food how many dayson tk chlega?",
    option: [
        "84",
        "82",
        "80",
        "88"
    ],
    answer: "84"
},

{
    question: "if 7A = 6B = 12C is, then A : B : C find.",
    option: [
        "14 : 12 : 7",
        "7 : 12 : 14",
        "12 : 7 : 14",
        "12 : 14 : 7"
    ],
    answer: "12 : 14 : 7"
},

{
    question: "nitin of pas ₹1617 are ushas ifrom aphas sons prvin and rishi between distributed and unhen ifrom compounded annually 10% interest rate on invest krhas to kha it was observed that prvin and rishi to respectively 17 and 18 years bad equal amount received occurred nitin has prvin to how much sum of money (₹ in) gave?",
    option: [
        "770",
        "847",
        "870",
        "697"
    ],
    answer: "847"
},
{
    question: "fuel of price over three consecutive months 40%, 10% and 50% less of gee is, but in the fourth month in 50% vriddhi of gee is in the fourth month in fuel of price in usof original price of tulna in how many percentage of increase/decrease occurred is?",
    option: [
        "56.29% increase",
        "61.17% decrease",
        "57.3% increase",
        "59.5% decrease"
    ],
    answer: "59.5% decrease"
},
{
    question: "ek dhara of speed $9\\text{ km/h}$ is ek boat downstream $56\\text{ km}$ and upstream $28\\text{ km}$ of distance 7 hours in ty kr skti is still water in boat of speed ($\\text{km/h}$ in) find.",
    option: [
        "20",
        "16",
        "9",
        "15"
    ],
    answer: "16"
},
{
    question: "if ek kaimre of cost price usof selling price of $75\\%$ is, then profit percentage what is?",
    option: [
        "$16\\frac{2}{3}\\%$",
        "$33\\frac{1}{3}\\%$",
        "$24\\%$",
        "$25\\%$"
    ],
    answer: "$33\\frac{1}{3}\\%$"
},
{
    question: "a certain principal on $6\\%$ of annual rate from 2 years of avdhi of lie simple interest ₹318 is principal (₹ in) find.",
    option: [
        "2656",
        "2655",
        "2651",
        "2650"
    ],
    answer: "2650"
},
{
    question: "a certain jb from earned sum of money, kie ge work of ghnton of snkhya of anukrvalueupati is if 6 hours in ₹324 earned hote are, then 29 hours work upon doing how much sum of money (₹ in) earned hogi?",
    option: [
        "₹1,655",
        "₹1,676",
        "₹1,585",
        "₹1,566"
    ],
    answer: "₹1,566"
},
{
    question: "₹1200 per hundred of rate from 400 fromb were purchased and ₹800 of labh on were sold per dozen frombon of selling price (₹ in) find.",
    option: [
        "168",
        "183",
        "158",
        "178"
    ],
    answer: "168"
},
{
    question: "Find the value of the following.\n\n$\\left[(23\\times5)\\times\\left\\{6\\div6\\times\\frac{18-14}{4}\\right\\}\\right]$",
    option: [
        "106",
        "115",
        "104",
        "96"
    ],
    answer: "115"
},
{
    question: "$56$, $30$, $108$ and $120$ of LCM (LCM) find.",
    option: [
        "7549",
        "7660",
        "7471",
        "7560"
    ],
    answer: "7560"
},
{
    question: "vijy of pas ₹1224 are unhonhas ifrom aphas sons ajy and profsh between distributed and unhen ifrom annual rup from compound 4% annual interest rate on invest krhas to kha it was observed that ajy and profsh to respectively 18 and 19 years bad equal amount received occurred vijy has profsh to how much sum of money (₹ in) gave?",
    option: [
        "624",
        "450",
        "600",
        "724"
    ],
    answer: "600"
},
{
    question: "do snkhyaon of LCM and HCF respectively 66 and 11 is if unin from ek snkhya 33 is, then dusri snkhya find.",
    option: [
        "20",
        "25",
        "19",
        "22"
    ],
    answer: "22"
},
{
    question: "if a certain gole of radius tin guni should be reduced, then original gole of volume and ne gole of volume of ratio what will it be?",
    option: [
        "$27:1$",
        "$9:1$",
        "$1:9$",
        "$1:27$"
    ],
    answer: "$1:27$"
},
{
    question: "mutotal from $1.35\\text{ km}$ of distance on ek bnduk chlaee jati is vh tin seconds after isof dhvni sunti is dhvni kis speed ($\\text{m/s}$ in) from journey does?",
    option: [
        "525",
        "675",
        "500",
        "450"
    ],
    answer: "450"
},
{
    question: "ritu and mona together ek ghr of penting 18 in days can ritu to alone penting puri krhas in 27 days will take mona to alone penting puri krhas in how much time lgega?",
    option: [
        "65 days",
        "60 days",
        "44 days",
        "54 days"
    ],
    answer: "54 days"
},
{
    question: "$153$, $117$ and $405$ of HCF find.",
    option: [
        "9",
        "6",
        "12",
        "2"
    ],
    answer: "9"
},
{
    question: "if $x$ of $4\\%=72$ is, then $x$ ____ equal to is",
    option: [
        "1800",
        "3600",
        "1900",
        "3700"
    ],
    answer: "1800"
},
{
    question: "do snkhyaon between of ratio $19:24$ is if each snkhya in from 36 ghta gave jae, then ratio $3:4$ becomes snkhyaon of sum find.",
    option: [
        "305",
        "295",
        "238",
        "387"
    ],
    answer: "387"
},
{
    question: "if a certain vstu of marked price ₹7,895 is and di jahas vali discount $4.2\\%$ is, then selling price (₹ in) find.",
    option: [
        "7,456.31",
        "7,635.41",
        "7,364.51",
        "7,563.41"
    ],
    answer: "7,563.41"
},
{
    question: "mhesh of pas ₹1617 are ushas ifrom aphas sons vijy and ajy between distributed and unhen ifrom annual rup from compound hohas vali 10% interest rate on invest krhas to kha it was observed that vijy and ajy to respectively 13 and 14 years bad equal amount received occurred mhesh has vijy to how much sum of money (₹ in) gave?",
    option: [
        "697",
        "770",
        "870",
        "847"
    ],
    answer: "847"
},
{
    question: "ek class of 54 students of average age 37 years is if teacher of age bhi smmilit kr li jae, then entire group of average age 38 years becomes teacher of age (in years) find.",
    option: [
        "97",
        "95",
        "90",
        "92"
    ],
    answer: "92"
},
{
    question: "7 khilariyon of average score shuruaat in 55 ratej kiya gya was halanki, bad in pta chla ki 35 of stor by mistake 53 read gya was correct average score find. (do dshmlv swasnon tk rounded)",
    option: [
        "42.08",
        "52.43",
        "54.31",
        "32.43"
    ],
    answer: "52.43"
},
{
    question: "a person 9 km/hr of speed from tolofta from ahmdabad jata is and usi marg from 18 km/hr of speed from tolofta returns puri journey of dauran usof average speed (km/hr in) find.",
    option: [
        "8",
        "12",
        "15",
        "17"
    ],
    answer: "12"
},
{
    question: "210 m and 140 m length vali do relgariyan ek hi disha in respectively 80 km/h and 150 km/h of speed from gtivalue are pichhe from aa rhi faster relgari dvara dusri relgari to completely cross krhas in how much time (in minutes) lgega?",
    option: [
        "0.3",
        "0.5",
        "2",
        "1"
    ],
    answer: "0.3"
},
{
    question: "annual simple interest of svalue rate on vipul ₹5400 of amount of invest does and vijy ₹9400 of amount of invest does if 5 years at the end of, vijy to vipul from ₹840 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "4.2",
        "6.2",
        "3.2",
        "2.2"
    ],
    answer: "4.2"
},
{
    question: "Find the value of the following: $\\left[(48 \\div 8) \\times \\left(\\frac{49}{7} + \\frac{40}{4} \\times (7 - 3)\\right)\\right]$",
    option: [
        "282",
        "284",
        "273",
        "286"
    ],
    answer: "282"
},
{
    question: "do snkhyaen 4 : 9 in the ratio are if unof mean proportional 24 is, then both snkhyaon between positive difference find.",
    option: [
        "25",
        "30",
        "15",
        "20"
    ],
    answer: "20"
},
{
    question: "mndar of do pote oftn and tushar are 11 yearsiy oftn to mndar of snptti from some sum of money is obtained and 12 yearsiy tushar to baof sum of money is obtained but oftn and tushar to sum of money tbhi milegi jb ve 22 years of becomesnge tb tk sum of money baink in jma rhegi and us on annual rup from compound 8% annual rate on interest milega jb both 22 years of ho jate are, then unhen equal amount is obtained if mndar of pas total sum of money ₹24700 thi, then mndar has tushar to shuruaat in how much sum of money (₹ in) gave?",
    option: [
        "13175",
        "11875",
        "12825",
        "11625"
    ],
    answer: "12825"
},
{
    question: "28, 60, 120 and 135 of LCM (LCM) find.",
    option: [
        "7560",
        "7608",
        "7626",
        "7569"
    ],
    answer: "7560"
},
{
    question: "an examination in, gnit of tin peon, angreji of do peon and vigyan of ek peon was all peon 100 markson of were S to gnit in 60%, angreji in 70% and vigyan in 50% marks mile all peon in usof markson of percentage kitna was?",
    option: [
        "61.67%",
        "61.33%",
        "60.67%",
        "60%"
    ],
    answer: "61.67%"
},
{
    question: "ek student to ek pustk of khrid on nimnlikhit char offer mil rhe were: I - 20% and 20% of two successive discounts; II - 25% and 15% of two successive discounts; III - 30% and 10% of two successive discounts; IV - 5% and 35% of two successive discounts which offer student to sbmore than discount provided does?",
    option: [
        "IV",
        "I",
        "II",
        "III"
    ],
    answer: "IV"
},
{
    question: "do snkhyaon of HCF, 11 is and unof sum 132 is if both snkhyaen 42 from bri are, then both snkhyaon between of difference find.",
    option: [
        "11",
        "18",
        "26",
        "22"
    ],
    answer: "22"
},
{
    question: "16 and 48 of third proportional what is?",
    option: [
        "144",
        "121",
        "135",
        "169"
    ],
    answer: "144"
},
{
    question: "us vstu of cost price what is jo 8% labh of sath ₹1,566 in bechi jati is?",
    option: [
        "₹1,420",
        "₹1,400",
        "₹1,450",
        "₹1,390"
    ],
    answer: "₹1,450"
},
{
    question: "ek snkhya to phle 15% decreased jata is and phir 20% increased jata is is profr received snkhya, original number from 78 more is original number find.",
    option: [
        "2600",
        "5200",
        "4500",
        "3900"
    ],
    answer: "3900"
},
{
    question: "A a certain work to 32 in days and B usi work to 48 in days can complete ve 8 dayson tk together work do and phir A work krna chhor deta is remaining work of 60% part B how many time (days in) in pura krega?",
    option: [
        "$18\\frac{2}{5}$",
        "$17\\frac{3}{7}$",
        "$16\\frac{4}{5}$",
        "$19\\frac{3}{4}$"
    ],
    answer: "$16\\frac{4}{5}$"
},
{
    question: "do cones of oonchaiyon of ratio 4 : 3 is and unof aadharon of radiuson of ratio 1 : 2 is unof volumeon of ratio find.",
    option: [
        "1 : 3",
        "2 : 9",
        "2 : 5",
        "4 : 9"
    ],
    answer: "1 : 3"
},
{
    question: "petrol of value in (per litre) 85% of increases isof consumption in how many percentage decrease should be reduced ki is on hohas vale expenditure in only 48% increase ho?",
    option: [
        "18%",
        "82%",
        "20%",
        "80%"
    ],
    answer: "20%"
},
{
    question: "if same interest rate on, 2 in years, simple interest ₹42 and compound interest ₹51 is, then principal (₹ in) find.",
    option: [
        "49",
        "53",
        "42",
        "44"
    ],
    answer: "49"
},
{
    question: "ek dishonest shopkeeper aphas savalue to cost price on selling of claims however, vh ek aifrom weight of upsum does jisof weight actually weight written on it from 46% less is usof profit percentage find.",
    option: [
        "$84\\frac{5}{27}\\%$",
        "$87\\frac{10}{27}\\%$",
        "$86\\frac{6}{27}\\%$",
        "$85\\frac{5}{27}\\%$"
    ],
    answer: "$85\\frac{5}{27}\\%$"
},
{
    question: "gopal, akshy and atul of average weight 46 kg is if gopal and akshy of average weight 40 kg is and akshy and atul of average weight 45 kg is, then akshy of weight (kg in) find.",
    option: [
        "32",
        "47",
        "42",
        "52"
    ],
    answer: "32"
},
{
    question: "char markson of largest number find jo 15, 25, 40 and 75 from exactly divisible ho",
    option: [
        "9975",
        "9999",
        "9600",
        "9960"
    ],
    answer: "9600"
},
{
    question: "170 m and 480 m length vali do relgariyan ek hi disha in respectively 70 km/h and 80 km/h of speed from gtivalue are pichhe from aa rhi faster relgari dvara dusri relgari to completely cross krhas in how much time (in minutes) lgega?",
    option: [
        "4",
        "4.2",
        "5",
        "3.9"
    ],
    answer: "3.9"
},
{
    question: "mnoj of pas ₹1612 are ushas ifrom aphas sons aannd and anil between distributed and unhen ifrom annual rup from compound hohas vali 8% interest rate on invest krhas to kha it was observed that aannd and anil to respectively 13 and 14 years bad equal amount received occurred mnoj has aannd to how much sum of money (₹ in) gave?",
    option: [
        "687",
        "837",
        "775",
        "875"
    ],
    answer: "837"
},
{
    question: "Evaluate: \\(32 \\div 8 \\times 3 - 3 \\times 3\\)",
    option: [
        "6",
        "2",
        "3",
        "5"
    ],
    answer: "3"
},
{
    question: "ek shrt of price in phle 15% of increased and phir 12% of decreased, and ek bar phir 8% of increased shrt of price in net vriddhi ya lessi percentage (correct to one decimal place) find.",
    option: [
        "9.3% decrease",
        "10.6% increase",
        "9.3% increase",
        "10.6% decrease"
    ],
    answer: "9.3% increase"
},
{
    question: "do station A and B ek-dusre from 370 km of distance on are ek tren station A from 9:00 A.M. on departs and station B towards 20 km/h of speed from journey does dusri tren station B from 10:00 A.M. on departs and station A towards 50 km/h of speed from journey does ve kis time on ek-dusre from meet?",
    option: [
        "2:00 P.M.",
        "2:30 P.M.",
        "1:00 P.M.",
        "3:00 P.M."
    ],
    answer: "3:00 P.M."
},
{
    question: "ek smuh in 30 students of average age 18 years is jb teacher of age shamil of jati is, then smuh of average age 1 years increases teacher of age (in years) how much is?",
    option: [
        "56",
        "40",
        "49",
        "45"
    ],
    answer: "49"
},
{
    question: "if \\(F_1\\) and \\(F_2\\) respectively PDF in die ge do ratioon of chturwasnupati are, then \\(F_1:F_2\\) of value find.",
    option: [
        "16 : 9",
        "49 : 16",
        "25 : 16",
        "49 : 48"
    ],
    answer: "Not determined"
},
{
    question: "Find the value of the following. (The mathematical expression is not visible in the available PDF text.)",
    option: [
        "447",
        "434",
        "429",
        "432"
    ],
    answer: "Not determined"
},
{
    question: "a certain work to krhas of lie, A and B alternately ek-ek days chhorkr work do, jisin B on the first day work krna starts A alone us work to 22 in days can complete if work specified days in pura becomes, then B alone original work of in how many days the part pura krega?",
    option: [
        "nau days",
        "aath days",
        "sat days",
        "chhh days"
    ],
    answer: "Not determined"
},
{
    question: "₹4800 to ram, shyam and ofrtik between 4 : 8 : 3 in the ratio banten shyam to milhas vali amount find.",
    option: [
        "₹1,680",
        "₹2,270",
        "₹2,560",
        "₹1,850"
    ],
    answer: "₹2,560"
},
{
    question: "a certain jile of population 369000 is, jisin 186000 men are 45% population literate is if 45% men literate are, then literate women of percentage what will it be?",
    option: [
        "45%",
        "47%",
        "46%",
        "44%"
    ],
    answer: "45%"
},
{
    question: "ek vyapari cost price from 20% more value marked does and 20% of discount deta is profit or loss percentage find.",
    option: [
        "1% of labh",
        "4% of hani",
        "4% of labh",
        "1% of hani"
    ],
    answer: "4% of hani"
},
{
    question: "Find the value of the following. (The mathematical expression is not visible in the available PDF text.)",
    option: [
        "299",
        "296",
        "313",
        "297"
    ],
    answer: "Not determined"
},
{
    question: "do snkhyaon of LCM and HCF respectively 168 and 6 is if unin from ek snkhya 24 is, then dusri snkhya find.",
    option: [
        "42",
        "45",
        "44",
        "40"
    ],
    answer: "42"
},
{
    question: "if cuboid of length doguni, height aadhi and width tiguni should be reduced, then isof volume \\(V\\) kitna will become?",
    option: [
        "\\(6V\\)",
        "\\(4V\\)",
        "\\(3V\\)",
        "\\(2V\\)"
    ],
    answer: "3V"
},
{
    question: "annual simple interest of svalue rate on amit ₹5400 of amount of invest does and gopal ₹9400 of amount of invest does if 6 years at the end of gopal to amit from ₹960 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "4",
        "3",
        "6",
        "2"
    ],
    answer: "4"
},
{
    question: "ek dishonest shopkeeper aphas savalue to cost price on selling of claims however, vh ek aifrom weight of upsum does jisof weight actually weight written on it from 21% less is usof profit percentage find.",
    option: [
        "The options are unclear in the PDF",
        "The options are unclear in the PDF",
        "The options are unclear in the PDF",
        "The options are unclear in the PDF"
    ],
    answer: "\\(\\frac{100}{79}\\times100-100\\approx26.58\\%\\)"
},
{
    question: "mhesh of pas ₹1617 are ushas ifrom aphas sons vijy and ajy between distributed and unhen ifrom compounded annually 10% interest rate on invest krhas to kha it was observed that vijy and ajy to respectively 15 and 16 years bad equal amount received occurred mhesh has vijy to how much sum of money (₹ in) gave?",
    option: [
        "847",
        "770",
        "870",
        "697"
    ],
    answer: "847"
},
{
    question: "anvr, amit and gopal of average weight 45 kg is if anvr and amit of average weight 43 kg is and amit and gopal of average weight 42 kg is, then amit of vjn (kg in) find.",
    option: [
        "55",
        "45",
        "50",
        "35"
    ],
    answer: "35"
},
{
    question: "a shopkeeper has ₹500 in an item khridi 28% labh received krhas of lie ufrom vstu to at what price (₹ in) on sell chahie?",
    option: [
        "628",
        "652",
        "640",
        "360"
    ],
    answer: "640"
},
{
    question: "if $3x^2$ and $4xy$ of third proportional 48 is, then $y$ of dhnatmk value what is?",
    option: [
        "2",
        "9",
        "6",
        "3"
    ],
    answer: "3"
},
{
    question: "A and B of speed of ratio $3:5$ is if B to ek nishchit distance ty krhas in 18 mint lgte are, then A to svalue distance ty krhas in how much time lgega?",
    option: [
        "25 mint",
        "30 mint",
        "20 mint",
        "33 mint"
    ],
    answer: "30 mint"
},
{
    question: "oftn has 151 kursiyan bechin and ufrom 51 kursiyon of selling price equal to labh occurred usof profit percentage what is?",
    option: [
        "51%",
        "56%",
        "46%",
        "61%"
    ],
    answer: "51%"
},
{
    question: "if ek hemisphere of radius $13\\sqrt{3}$ cm is, then isof curved surface area find.",
    option: [
        "$1044\\pi\\text{ cm}^2$",
        "$1014\\pi\\text{ cm}^2$",
        "$1034\\pi\\text{ cm}^2$",
        "$1024\\pi\\text{ cm}^2$"
    ],
    answer: "$1014\\pi\\text{ cm}^2$"
},
{
    question: "fuel of price over three consecutive months 40%, 50% and 15% less of gee is, but in the fourth month in 40% vriddhi of gee is in the fourth month in fuel of price in usof original price of tulna in how many percentage of increase/decrease occurred is?",
    option: [
        "65.47% increase",
        "65.91% increase",
        "64.3% decrease",
        "69.09% decrease"
    ],
    answer: "64.3% decrease"
},
{
    question: "$X$ tin markson of ek bri from bri snkhya is jo 12, 20 and 25 from exactly divisible is $X$ of markson of sum find.",
    option: [
        "8",
        "7",
        "5",
        "9"
    ],
    answer: "9"
},
{
    question: "$x$ and $x+100$ of third proportional 405 is $x$ of value find, jhan $x>100$ is",
    option: [
        "225",
        "125",
        "115",
        "180"
    ],
    answer: "125"
},
{
    question: "annual simple interest of svalue rate on amit ₹5400 of amount of invest does and gopal ₹9400 of amount of invest does if 3 years at the end of gopal to amit from ₹840 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "7",
        "5",
        "6",
        "9"
    ],
    answer: "7"
},
{
    question: "Evaluate: $32\\div 8\\times 4-3\\times 4$",
    option: [
        "6",
        "3",
        "7",
        "4"
    ],
    answer: "4"
},
{
    question: "if marked price on 26% of discount dehas after panch blututh upkrnon of selling price ₹14,430 is, then ek upkrn of marked price find.",
    option: [
        "₹2,886",
        "₹3,900",
        "₹3,000",
        "₹3,365"
    ],
    answer: "₹3,900"
},
{
    question: "ek khuratea vikreta ₹22,400 in 12 pair jute khridta is usof overhead expenses ₹1,600 is if vh in 12 pair juthenn of bikri from ₹28,500 earned does, then usof profit percentage find.",
    option: [
        "17.5%",
        "19.25%",
        "20%",
        "18.75%"
    ],
    answer: "18.75%"
},
{
    question: "ek class of 39 students of average age 39 years is if teacher of age bhi smmilit kr li jae, then entire group of average age 40 years becomes teacher of age (in years) find.",
    option: [
        "77",
        "81",
        "83",
        "79"
    ],
    answer: "79"
},
{
    question: "ek knpyutr of price ₹22,200 is 25% decrease after knpyutr of price how much hogi?",
    option: [
        "₹16,750",
        "₹16,450",
        "₹16,550",
        "₹16,650"
    ],
    answer: "₹16,650"
},
{
    question: "Find the value of the following: $\\left(63\\div 9\\right)\\times\\left\\{\\frac{14}{7}+\\frac{19}{1}\\times(7-6)\\right\\}$",
    option: [
        "159",
        "148",
        "150",
        "147"
    ],
    answer: "147"
},
{
    question: "ek ofr 8 km of char krmik duriyan respectively 12 km/hr, 18 km/hr, 24 km/hr and 36 km/hr of speed from ty does puri distance of lie isof average speed (km/hr in) how much is?",
    option: [
        "22.5",
        "19.2",
        "18",
        "20"
    ],
    answer: "19.2"
},
{
    question: "Find the value of the following: $\\left(42\\div 7\\right)\\times\\left\\{\\frac{42}{3}+\\frac{19}{4}\\times(8-4)\\right\\}$",
    option: [
        "198",
        "180",
        "209",
        "202"
    ],
    answer: "198"
},
{
    question: "4 men and 3 women ek work to 6 in days pura do, and 5 men and 7 women usi work to 4 in days pura kr skte are 8 men and 6 women usi work to to complete how much time lenge?",
    option: [
        "3 days",
        "9 days",
        "8 days",
        "6 days"
    ],
    answer: "3 days"
},
{
    question: "if 4% annual interest rate from tin yearson of compound interest and simple interest of difference ₹228 is, then principal (₹ in) find.",
    option: [
        "47295",
        "46875",
        "48075",
        "46300"
    ],
    answer: "46875"
},
{
    question: "if same interest rate on, 2 in years simple interest ₹40 and compound interest ₹65 is, then principal (₹ in) find.",
    option: [
        "11",
        "16",
        "20",
        "9"
    ],
    answer: "16"
},
{
    question: "chetn city A from city B tk journey does if chetn apni ofr to apni normal speed of $\\frac{3}{4}$ speed on chlata is, then vh city B tk 33 mint late reaches if chetn apni ofr normal speed from chlata, then city A from city B tk journey krhas in ufrom how much time (in minutes) lgta?",
    option: [
        "100",
        "93",
        "99",
        "97"
    ],
    answer: "99"
},
{
    question: "schin has 152 kursiyan bechin and ufrom 52 kursiyon of selling price equal to labh occurred usof profit percentage what is?",
    option: [
        "47%",
        "62%",
        "57%",
        "52%"
    ],
    answer: "52%"
},
{
    question: "mndar, oftn and tushar of average weight 45 kg is if mndar and oftn of average weight 43 kg is and oftn and tushar of average weight 48 kg is, then oftn of vjn (kg in) find.",
    option: [
        "62",
        "47",
        "67",
        "57"
    ],
    answer: "47"
},
{
    question: "if x of 2% = 348 is, then x ____ equal to is",
    option: [
        "17400",
        "34900",
        "17500",
        "34800"
    ],
    answer: "17400"
},
{
    question: "vh smallest natural number find, jo 26, 8, 11 and 13 from vibhajy ho",
    option: [
        "1126",
        "1144",
        "1201",
        "1082"
    ],
    answer: "1144"
},
{
    question: "2.8 and 0.7 of mean proportional find.",
    option: [
        "1.9",
        "1.2",
        "1.4",
        "1.8"
    ],
    answer: "1.4"
},
{
    question: "nimnlikhit discount schemeon of tht ₹1,500 marked price vali ek pustk of selling price (₹ in) between kitna difference hoga?\n(i) each 20% of two successive discounts\n(ii) 30% and 10% of two successive discounts",
    option: [
        "12",
        "20",
        "18",
        "15"
    ],
    answer: "15"
},
{
    question: "a person 78 km/hr of speed from tolofta from ahmdabad jata is and usi marg from 91 km/hr of speed from tolofta returns puri journey of dauran usof average speed (km/hr in) find.",
    option: [
        "81",
        "85",
        "78",
        "84"
    ],
    answer: "84"
},
{
    question: "fuel of price over three consecutive months 55%, 10% and 20% less of gee is, but in the fourth month in 65% vriddhi of gee is in the fourth month in fuel of price in usof original price of tulna in how many percentage of increase/decrease occurred is?",
    option: [
        "46.54% decrease",
        "51.62% increase",
        "48.43% increase",
        "50.53% decrease"
    ],
    answer: "46.54% decrease"
},
{
    question: "a certain principal on 8% of annual rate from 4 years of avdhi of lie simple interest ₹824 is principal (₹ in) find.",
    option: [
        "2571",
        "2573",
        "2577",
        "2575"
    ],
    answer: "2575"
},
{
    question: "if 5% annual interest rate from tin yearson of compound interest and simple interest of difference ₹244 is, then principal (₹ in) find.",
    option: [
        "32420",
        "32000",
        "31425",
        "33200"
    ],
    answer: "32000"
},
{
    question: "if a certain cube of tor to tin guna is made, then usof volume, usof original volume from _______ guna becomes",
    option: [
        "9",
        "64",
        "27",
        "8"
    ],
    answer: "27"
},
{
    question: "ek vishvvidyaly in 500 phaiklti inbrs (only men and women) are, jinin from 60% women are women of aust length 162 cm and men of aust length 168 cm is vishvvidyaly of phaiklti of aust length (cm in) how much is?",
    option: [
        "125.4",
        "146.4",
        "176.4",
        "164.4"
    ],
    answer: "164.4"
},
{
    question: "ek pnkhe of selling price ₹7,392 is if profit percentage 32% is, then pnkhe of cost price (₹ in) what is?",
    option: [
        "4,800",
        "5,200",
        "5,600",
        "5,400"
    ],
    answer: "5,600"
},
{
    question: "Evaluate : (-9) - (-60) ÷ (-15) + (-3) × 7",
    option: [
        "-33",
        "-34",
        "-36",
        "-37"
    ],
    answer: "-34"
},
{
    question: "do snkhyaon of LCM and HCF respectively 168 and 14 is if unin from ek snkhya 42 is, then dusri snkhya find.",
    option: [
        "56",
        "54",
        "58",
        "57"
    ],
    answer: "56"
},
{
    question: "shan of pas ₹1612 are ushas ifrom aphas sons piyush and mnoj between distributed and unhen ifrom compounded annually 8% interest rate on invest krhas to kha it was observed that piyush and mnoj to respectively 12 and 13 years bad equal amount received occurred shan has piyush to how much sum of money (₹ in) gave?",
    option: [
        "775",
        "687",
        "875",
        "837"
    ],
    answer: "837"
},
{
    question: "rmn of income ₹75400 is vh apni income in from 23% of savings does if usof income in 27% of increases and expenditure in 50% of increases, then usof savings in _______",
    option: [
        "₹8666 decrease hogi",
        "₹8670 increase hogi",
        "₹8671 decrease hogi",
        "₹8667 increase hogi"
    ],
    answer: "₹8671 decrease hogi"
},
{
    question: "ek gole of surface area (cm² in) find jisof diameter 21 cm is",
    option: [
        "1316",
        "1386",
        "1346",
        "1286"
    ],
    answer: "1386"
},
{
    question: "a certain ofm to krhas in B to jitna time takes, usof tin-chauwasee time in A vhi ofm aadha kr pata is if both together ofm to 66 in days pura do, then B to alone vh ofm to complete how many days will take?",
    option: [
        "110",
        "66",
        "90",
        "55"
    ],
    answer: "110"
},
{
    question: "Evaluate: \\(16 + 10 \\div 5 - 2 \\times 4\\)",
    option: [
        "9",
        "13",
        "12",
        "10"
    ],
    answer: "10"
},
{
    question: "36 and 42 of third proportional find.",
    option: [
        "56",
        "42",
        "49",
        "38"
    ],
    answer: "49"
},
{
    question: "gopal has 152 kursiyan bechin and ufrom 76 kursiyon of selling price equal to labh occurred usof profit percentage what is?",
    option: [
        "100%",
        "110%",
        "105%",
        "95%"
    ],
    answer: "100%"
},
{
    question: "ek khady pdarth on 30% and 20% of two successive discountsen provided of geen a person has khady pdarth of lie ₹840 of bhugtan kiya khady pdarth of bil amount (₹ in) find.",
    option: [
        "1,800",
        "1,500",
        "1,200",
        "2,000"
    ],
    answer: "1,500"
},
{
    question: "do trains 50 km/h and 110 km/h of speed from vionit dishaon from aa rhi are ek tren of length 500 m is unhen each other cross in 12 seconds of time takes dusri tren of length (m in) to two decimal places find.",
    option: [
        "33.33",
        "31.44",
        "32.68",
        "34.58"
    ],
    answer: "33.33"
},
{
    question: "Find the value of the following: \\(\\left[(27 \\times 3) \\times \\left\\{3 \\div 3 \\times \\frac{19-15}{4}\\right\\}\\right]\\)",
    option: [
        "67",
        "80",
        "81",
        "72"
    ],
    answer: "81"
},
{
    question: "a shopkeeper has ₹500 in an item khridi 26% labh received krhas of lie ufrom vstu to at what price (₹ in) on sell chahie?",
    option: [
        "370",
        "630",
        "618",
        "642"
    ],
    answer: "630"
},
{
    question: "if x of 2% = 276 is, then x ____ equal to is",
    option: [
        "27600",
        "13900",
        "27700",
        "13800"
    ],
    answer: "13800"
},
{
    question: "75 km/hr of speed from moving ek tren, in the same direction 30 km/hr of speed from moving dusri tren to 108 seconds in par does if higher speed from moving tren of length 950 m is, then lower speed from moving tren of length (m in) how much is?",
    option: [
        "300",
        "450",
        "350",
        "400"
    ],
    answer: "400"
},
{
    question: "jnvri, phrvri, march and aprail in rmesh of expenditure respectively ₹28,312, ₹32,252, ₹25,012 and ₹33,500 was in char mhinon of dauran usof aust expenditure (₹ in) kitna was?",
    option: [
        "28,999",
        "27,969",
        "30,696",
        "29,769"
    ],
    answer: "29,769"
},
{
    question: "Find the value of the following: \\(\\left[(63 \\div 9) \\times \\left\\{\\frac{96}{8} + \\frac{11}{4} \\times (9-5)\\right\\}\\right]\\)",
    option: [
        "161",
        "165",
        "169",
        "153"
    ],
    answer: "161"
},
{
    question: "mnoj of pas ₹1224 are unhonhas ifrom aphas sons aannd and anil between distributed and unhen ifrom annual rup from compound 4% annual interest rate on invest krhas to kha it was observed that aannd and anil to respectively 17 and 18 years bad equal amount received occurred mnoj has anil to how much sum of money (₹ in) gave?",
    option: [
        "624",
        "724",
        "450",
        "600"
    ],
    answer: "600"
},
{
    question: "do snkhyaen x and 4x are, and unof mean proportional 456976 is x of value find.",
    option: [
        "288488",
        "228488",
        "228448",
        "228848"
    ],
    answer: "228488"
},
{
    question: "a certain principal on 9% of annual rate from 5 years of avdhi of lie simple interest ₹378 is principal (₹ in) find.",
    option: [
        "837",
        "845",
        "844",
        "840"
    ],
    answer: "840"
},
{
    question: "ashok of pas ₹1612 are ushas ifrom aphas sons raj and vrun between distributed and unhen ifrom annual rup from compound hohas vali 8% interest rate on invest krhas to kha it was observed that raj and vrun to respectively 15 and 16 years bad equal amount received occurred ashok has raj to how much sum of money (₹ in) gave?",
    option: [
        "837",
        "687",
        "775",
        "875"
    ],
    answer: "837"
},
{
    question: "mhesh, ram and anvr of average weight 46 kg is if mhesh and ram of average weight 39 kg is and ram and anvr of average weight 49 kg is, then ram of vjn (kg in) find.",
    option: [
        "53",
        "58",
        "48",
        "38"
    ],
    answer: "38"
},
{
    question: "do snkhyaon of LCM of value 4158 is and unof HCF of value 54 is if unin from ek snkhya 378 is, then dusri snkhya find.",
    option: [
        "459",
        "594",
        "398",
        "495"
    ],
    answer: "594"
},

{
    question: "X ek work to 15 in days can complete, and Y usi work to 20 in days can complete if X and Y on alternate days work do and X on the first day work aarnbh does, then work in how many days pura hoga?",
    option: [
        "22",
        "17",
        "19",
        "15"
    ],
    answer: "17"
},
{
    question: "among the following which ratio, sbmore than is?",
    option: [
        "19 : 13",
        "12 : 19",
        "15 : 19",
        "21 : 26"
    ],
    answer: "19 : 13"
},
{
    question: "ek laiptp of cost price ₹78,200 is if loss percentage 44% is, then laiptp of selling price (₹ in) what is?",
    option: [
        "45,362",
        "48,200",
        "43,792",
        "40,230"
    ],
    answer: "43,792"
},
{
    question: "ek class of 27 students of average weight 53 kg is if teacher of weight shamil kr liya jata is, then aust in 700 gram increase becomes teacher of weight (kg in) find.",
    option: [
        "78.3",
        "62.8",
        "65.5",
        "72.6"
    ],
    answer: "72.6"
},
{
    question: "fuel of price over three consecutive months 15%, 40% and 60% less of gee is, but in the fourth month in 45% vriddhi of gee is in the fourth month in fuel of price in usof original price of tulna in how many percentage of increase/decrease occurred is?",
    option: [
        "76.46% decrease",
        "70.42% decrease",
        "68.39% increase",
        "73.26% increase"
    ],
    answer: "70.42% decrease"
},
{
    question: "annual simple interest of svalue rate on mukund ₹5400 of amount of invest does and schin ₹9400 of amount of invest does if 4 years at the end of, schin to mukund from ₹960 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "6",
        "8",
        "4",
        "5"
    ],
    answer: "6"
},
{
    question: "if \\(x\\) of 2% = 288 is, then \\(x\\) ____ equal to is",
    option: [
        "14500",
        "14400",
        "28800",
        "28900"
    ],
    answer: "14400"
},
{
    question: "Evaluate: \\(16 + 12 \\div 4 - 3 \\times 3\\)",
    option: [
        "10",
        "12",
        "13",
        "9"
    ],
    answer: "10"
},
{
    question: "if same interest rate on, 2 in years, simple interest ₹44 and compound interest ₹45 is, then principal (₹ in) find.",
    option: [
        "479",
        "477",
        "488",
        "484"
    ],
    answer: "484"
},
{
    question: "prvin of pas ₹1612 are ushas ifrom aphas sons rishi and shan between distributed and unhen ifrom annual rup from compound hohas vali 8% interest rate on invest krhas to kha it was observed that rishi and shan to respectively 17 and 18 years bad equal amount received occurred prvin has rishi to how much sum of money (₹ in) gave?",
    option: [
        "687",
        "837",
        "775",
        "875"
    ],
    answer: "837"
},
{
    question: "vh largest number find jisfrom 1657 and 2037 to part dehas on respectively 6 and 5 remainingphl received hon",
    option: [
        "117",
        "112",
        "127",
        "137"
    ],
    answer: "127"
},
{
    question: "Evaluate: \\(16 + 9 \\div 3 - 3 \\times 4\\)",
    option: [
        "9",
        "6",
        "10",
        "7"
    ],
    answer: "7"
},
{
    question: "ek salesmain apni duofn in pensilon of bikri on aage given scheme of differencegt discount de rha is: '20 khriden and 5 mupht paen' usof scheme of differencegt discount of percentage what is?",
    option: [
        "20%",
        "25%",
        "10%",
        "15%"
    ],
    answer: "20%"
},
{
    question: "ek cube of tor 19 cm is cube of entire surface area (cm² in) find.",
    option: [
        "2186",
        "2156",
        "2176",
        "2166"
    ],
    answer: "2166"
},
{
    question: "smuh A in 49 sdsy, smuh B in 35 sdsy and smuh C in 31 sdsy are in smuhon of all sdsy ek restran in ge smuh A, smuh B and smuh C of each sdsy on khrch of gee aust amount respectively ₹106, ₹141 and ₹226 is per sdsy khrch of gee total aust amount (₹ in) find.",
    option: [
        "146",
        "154",
        "145",
        "149"
    ],
    answer: "149"
},
{
    question: "₹1230 per saikre of rate on 400 nashpati were purchased and ₹980 of labh on were sold per dozen nashpatiyon of selling price (₹ in) known kren",
    option: [
        "167",
        "177",
        "192",
        "187"
    ],
    answer: "177"
},
{
    question: "snjy shuruaati 150 km of distance 4 hours in and agli 250 km of distance 4 hours in ty does usof average speed find.",
    option: [
        "45 km/hr",
        "100 km/hr",
        "50 km/hr",
        "74 km/hr"
    ],
    answer: "50 km/hr"
},
{
    question: "do trains 60 km/h and 50 km/h of speed from vionit dishaon from aa rhi are ek tren of length 430 m is unhen ek-dusre to cross in 44 seconds of time takes dusri tren of length (m in) to two decimal places find.",
    option: [
        "914.44",
        "916.15",
        "913.17",
        "912.67"
    ],
    answer: "914.44"
},
{
    question: "vh smallest natural number find, jo 24, 58, 48 and 12 from vibhajy ho",
    option: [
        "1392",
        "1312",
        "1441",
        "1465"
    ],
    answer: "1392"
},
{
    question: "36 and 9 between mean proportional find.",
    option: [
        "18",
        "12",
        "24",
        "9"
    ],
    answer: "18"
},
{
    question: "Find the value of the following: $\\left[(23 \\times 16) \\times \\left\\{3 \\div 3 \\times \\left(\\frac{19-13}{3}\\right)\\right\\}\\right]$",
    option: [
        "738",
        "745",
        "736",
        "724"
    ],
    answer: "736"
},
{
    question: "ek ardhspherical ktore of radius $3.5\\text{ cm}$ is ifrom anrate and bahr both trph from pent kiya jana is $₹15$ per $10\\text{ cm}^2$ of rate from ifrom pent krhas of lagt find. $(\\pi = \\frac{22}{7}$ of upsum kren)",
    option: [
        "₹531",
        "₹431",
        "₹231",
        "₹331"
    ],
    answer: "₹231"
},
{
    question: "if toee tren $40\\text{ km/hr}$ of speed from departs, then vh aphas gntvy on 10 min late phunchti is, but if vh $45\\text{ km/hr}$ of speed from departs, then vh 4 min late phunchti is tren dvara journey puri krhas of correct time find.",
    option: [
        "34 min",
        "24 min",
        "44 min",
        "45 min"
    ],
    answer: "44 min"
},
{
    question: "if $x$ of $4\\% = 132$ is, then $x$ ____ equal to is",
    option: [
        "3400",
        "6600",
        "6700",
        "3300"
    ],
    answer: "3300"
},
{
    question: "petrol of value in (per litre) $50\\%$ of increases isof consumption in how many percentage decrease should be reduced ki is on hohas vale expenditure in only $14\\%$ increase ho?",
    option: [
        "24%",
        "29%",
        "76%",
        "77%"
    ],
    answer: "24%"
},
{
    question: "rvi total work of ek-chauwasee work 15 in days can complete, chhvi total work of ek-tihaee work 18 in days pura kr skti is, dhni total work of aadha work 24 in days pura kr skti is rvi, chhvi and dhni sath together work of tin-chauwasee work how many time in pura kr skte are?",
    option: [
        "$13\\frac{47}{121}$ days",
        "$11\\frac{19}{78}$ days",
        "$12\\frac{23}{103}$ days",
        "$10\\frac{25}{31}$ days"
    ],
    answer: "$13\\frac{47}{121}$ days"
},
{
    question: "vh bri from bri snkhya find, jisfrom 406 and 1388 to part dehas on respectively 1 and 3 remainingphl received ho",
    option: [
        "20",
        "23",
        "15",
        "5"
    ],
    answer: "5"
},
{
    question: "gil ek hi value on do kutte sells ek in vh 22% of labh earned does and dusre on ufrom 22% of hani hoti is gil of profit or loss percentage what is?",
    option: [
        "4.4% labh",
        "4.84% hani",
        "4.84% labh",
        "4.4% hani"
    ],
    answer: "4.84% hani"
},
{
    question: "jakir city A from city B tk journey does if jakir apni ofr to apni normal speed of $\\frac{2}{3}$ speed on chlata is, then vh city B tk 10 mint late reaches if jakir apni ofr normal speed from chlata, then city A from city B tk journey krhas in ufrom how much time (in minutes) lgta?",
    option: [
        "26",
        "24",
        "20",
        "30"
    ],
    answer: "20"
},
{
    question: "aashish of pas ₹1617 are ushas ifrom aphas sons arun and mhesh between distributed and unhen ifrom annual rup from compound hohas vali 10% interest rate on invest krhas to kha it was observed that arun and mhesh to respectively 14 and 15 years bad equal amount received occurred aashish has arun to how much sum of money (₹ in) gave?",
    option: [
        "770",
        "870",
        "697",
        "847"
    ],
    answer: "847"
},
{
    question: "rupesh, mndar and oftn of average weight 45 kg is if rupesh and mndar of average weight 43 kg is and mndar and oftn of average weight 45 kg is, then mndar of vjn (kg in) find.",
    option: [
        "61",
        "41",
        "56",
        "51"
    ],
    answer: "41"
},
{
    question: "Evaluate: $(-9)-(-60)\\div(-15)+(-4)\\times 6$",
    option: [
        "-39",
        "-40",
        "-37",
        "-36"
    ],
    answer: "-37"
},
{
    question: "$30\\%$, $25\\%$ and $40\\%$ of tin successive discountson of smtuly ekl discount how much hogi?",
    option: [
        "60.1%",
        "68.5%",
        "65.8%",
        "64.2%"
    ],
    answer: "68.5%"
},
{
    question: "$₹x$ of sum of money hr 10 mah after compound hohas vali 12% annual interest rate on $2\\frac{1}{2}$ in years ₹54,571 becomes $x$ of value what is?",
    option: [
        "42000",
        "40000",
        "39000",
        "41000"
    ],
    answer: "41000"
},
{
    question: "$\\frac{a^2}{b^3}$ and $\\frac{9b^2}{4a^3}$ of madhyanupat find.",
    option: [
        "$\\frac{9}{4ab}$",
        "$\\frac{9}{4\\sqrt{ab}}$",
        "$\\frac{3}{2ab}$",
        "$\\frac{3}{2\\sqrt{ab}}$"
    ],
    answer: "$\\frac{3}{2\\sqrt{ab}}$"
},
{
    question: "ek res in 100 baiofn part leti are, jinin pili and hri baik shamil are all baiton of average speed $35\\text{ km/hr}$ is pili baiton of average speed $55\\text{ km/hr}$ is, and hri baiton of average speed $30\\text{ km/hr}$ is how much baiofn hri are?",
    option: [
        "50",
        "65",
        "70",
        "80"
    ],
    answer: "80"
},
{
    question: "annual simple interest of svalue rate on vrun ₹5400 of amount of invest does and aashish ₹9400 of amount of invest does if 3 years at the end of, aashish to vrun from ₹960 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "10",
        "8",
        "6",
        "7"
    ],
    answer: "8"
},
{
    question: "amit has ek piyano bought and ufrom 5% of labh on gopal to bech gave gopal has ifrom 25% hani on akshy to bech gave if akshy has ₹1890 of bhugtan kiya, then amit dvara were purchased piyano of cost price (₹ in) find.",
    option: [
        "2400",
        "2200",
        "2150",
        "2550"
    ],
    answer: "2400"
},
{
    question: "28 and 112 of third proportional what will it be?",
    option: [
        "224",
        "84",
        "448",
        "336"
    ],
    answer: "448"
},
{
    question: "vh largest number which is jisfrom, 92 and 215 to part dehas on remainingphl respectively 7 and 11 received hota ho?",
    option: [
        "23",
        "21",
        "17",
        "19"
    ],
    answer: "17"
},
{
    question: "ek salesmain apni duofn in notbuk of khrid on '25 khriden and 5 mupht paen' of discount sofm of offer deta is vh claims ki ufrom ek notbuk of value ₹10 prta is, but actually, ufrom isof value ₹5 prta is usof profit percentage and discount sofm between difference find.",
    option: [
        "42%",
        "48%",
        "56%",
        "50%"
    ],
    answer: "PDF in answer-kunji available nhin is"
},
{
    question: "if 18 and 98 of mean proportional \(2A+6\) is, then \(A\) of value find.",
    option: [
        "17",
        "16",
        "18",
        "19"
    ],
    answer: "18"
},
{
    question: "ajy has HDFC in 4% annual interest rate on some sum of money of invested if 2 yearson after, ajy to compounded annually compound interest of rup in ₹204 received becomes, then corresponding simple interest (₹ in) what will it be?",
    option: [
        "200",
        "210",
        "215",
        "195"
    ],
    answer: "200"
},
{
    question: "a certain principal on 5% of annual rate from 2 years of avdhi of lie simple interest ₹524 is principal (₹ in) find.",
    option: [
        "5240",
        "5239",
        "5249",
        "5234"
    ],
    answer: "5240"
},
{
    question: "vh bri from bri snkhya find, jisfrom 1477 and 671 to part dehas on respectively 0 and 6 remainingphl received ho",
    option: [
        "7",
        "20",
        "16",
        "17"
    ],
    answer: "7"
},
{
    question: "vh bri from bri snkhya find, jisfrom 943 and 1957 to part dehas on respectively 7 and 1 remainingphl received ho",
    option: [
        "13",
        "10",
        "12",
        "28"
    ],
    answer: "12"
},
{
    question: "340 m and 360 m length vali do relgariyan ek hi disha in respectively 80 km/h and 90 km/h of speed from gtivalue are pichhe from aa rhi faster relgari dvara dusri relgari to completely cross krhas in how much time (in minutes) lgega?",
    option: [
        "3.7",
        "6",
        "4.2",
        "7"
    ],
    answer: "4.2"
},
{
    question: "ek smchturbhuj of vikrn respectively 4 m and 6 m are isof area (m² in) find.",
    option: [
        "24",
        "9",
        "18",
        "12"
    ],
    answer: "12"
},
{
    question: "petrol of value in (per litre) 40% of increases isof consumption in how many percentage decrease should be reduced ki is on hohas vale expenditure in only 19% increase ho?",
    option: [
        "15%",
        "84%",
        "18%",
        "85%"
    ],
    answer: "15%"
},
{
    question: "chndigrh from amritsr of distance 50 km/hr of speed from 4.5 hours in ty of jati is journey of time in 30 mint of savings krhas of lie speed in (km/hr in) how much vriddhi of jani chahie?",
    option: [
        "6.5",
        "6.25",
        "6.75",
        "6"
    ],
    answer: "6.25"
},

{
    question: "ek class of 40 students of average age 12 years is if teacher of age bhi smmilit kr li jae, then entire group of average age 13 years becomes teacher of age (in years) find.",
    option: [
        "53",
        "56",
        "50",
        "51"
    ],
    answer: "53"
},
{
    question: "a shopkeeper has ₹520 in an item khridi 20% labh received krhas of lie ufrom vstu to at what price (₹ in) on sell chahie?",
    option: [
        "612",
        "416",
        "636",
        "624"
    ],
    answer: "624"
},


{
    question: "krish of pas ₹1224 are unhonhas ifrom aphas sons vir and nitin between distributed and unhen ifrom annual rup from compoundt 4% annual interest rate on invest krhas to kha it was observed that vir and nitin to respectively 12 and 13 years bad equal amount received occurred krish has nitin to how much sum of money (₹ in) gave?",
    option: [
        "724",
        "624",
        "600",
        "450"
    ],
    answer: "600"
},
{
    question: "ek smuh in 35 students of average age 15 years is jb teacher of age to shamil kiya jata is, then smuh of average age in 1.25 years increase becomes teacher of age (in years) how much is?",
    option: [
        "55",
        "60",
        "45",
        "50"
    ],
    answer: "60"
},
{
    question: "Evaluate: \(32 \\div 8 \\times 4 - 3 \\times 3\)",
    option: [
        "9",
        "7",
        "6",
        "10"
    ],
    answer: "7"
},
{
    question: "prmod has 154 kursiyan bechin and ufrom 54 kursiyon of selling price equal to labh occurred usof profit percentage what is?",
    option: [
        "54%",
        "64%",
        "59%",
        "49%"
    ],
    answer: "54%"
},
{
    question: "Evaluate: \((-9)-(-60)\\div(-15)+(-3)\\times6\)",
    option: [
        "-30",
        "-31",
        "-34",
        "-33"
    ],
    answer: "-31"
},
{
    question: "if marked price on 26% of discount dehas after selling price ₹2,886 is, then discount of amount find.",
    option: [
        "₹1,014",
        "₹2,190",
        "₹1,625",
        "₹2,000"
    ],
    answer: "₹1,014"
},
{
    question: "if same interest rate on, 2 in years, simple interest ₹40 and compound interest ₹44 is, then principal (₹ in) find.",
    option: [
        "100",
        "95",
        "104",
        "93"
    ],
    answer: "100"
},
{
    question: "do kntenron in respectively 765 litr and 833 litr trl is both kntenron of trl to map skhas vale kntenr of maximum dharita how much hogi?",
    option: [
        "21 litr",
        "15 litr",
        "17 litr",
        "19 litr"
    ],
    answer: "17 litr"
},
{
    question: "ek phaiktri in 96 krmchariyon of average age 32 years is men of average age 41 years and women of average age 25 years is phaiktri in women of snkhya find.",
    option: [
        "62",
        "54",
        "57",
        "67"
    ],
    answer: "54"
},
{
    question: "36, 63, 372 and 126 of LCM (LCM) find.",
    option: [
        "7812",
        "7813",
        "7860",
        "7897"
    ],
    answer: "7812"
},
{
    question: "x and y of mean proportional z is \\(x^2z\\) and \\(y^2z\\) of mean proportional find.",
    option: [
        "\\(yz^2\\)",
        "\\(z\\)",
        "\\(xz^2\\)",
        "\\(z^3\\)"
    ],
    answer: "\\(z^3\\)"
},
{
    question: "if a certain bhinn of ansh 10% brha gave jae and usof hr 10% less is made, then bhinn \\(\\frac{11}{45}\\) becomes original bhinn find.",
    option: [
        "\\(\\frac{2}{3}\\)",
        "\\(\\frac{1}{5}\\)",
        "\\(\\frac{4}{5}\\)",
        "\\(\\frac{2}{5}\\)"
    ],
    answer: "\\(\\frac{1}{5}\\)"
},
{
    question: "a certain principal on 2% of annual rate from 4 years of avdhi of lie simple interest ₹360 is principal (₹ in) find.",
    option: [
        "4508",
        "4501",
        "4500",
        "4490"
    ],
    answer: "4500"
},
{
    question: "₹1200 per hundred of rate from 400 nashpati khrigivenn and ₹1000 of labh on bechi geen per dozen nashpati of selling price (₹ in) find.",
    option: [
        "174",
        "164",
        "184",
        "189"
    ],
    answer: "174"
},
{
    question: "18 km/h of speed from chl rhi 496 m lnbi relgari to 664 m lnbi surng cross in how much time (seconds in) lgega?",
    option: [
        "224",
        "230",
        "236",
        "232"
    ],
    answer: "232"
},
{
    question: "us beln of curved surface area find jisof aadhar of radius 7 cm and height 9.5 cm is (\\(\\pi = \\frac{22}{7}\\) of upsum ofjie)",
    option: [
        "420 cm²",
        "430 cm²",
        "428 cm²",
        "418 cm²"
    ],
    answer: "418 cm²"
},
{
    question: "9 and 49 of mean proportional find.",
    option: [
        "29",
        "49",
        "9",
        "21"
    ],
    answer: "21"
},
{
    question: "Evaluate: \\((-9)-(-60)\\div(-15)+(-2)\\times6\\)",
    option: [
        "-25",
        "-24",
        "-28",
        "-27"
    ],
    answer: "-25"
},
{
    question: "oftn of do pote mhesh and devid are 15 yearsiy mhesh to oftn of snptti from some sum of money is obtained and 16 yearsiy devid to baof sum of money is obtained but mhesh and devid to sum of money tbhi milegi jb ve 22 years of becomesnge tb tk sum of money baink in jma rhegi and us on annual rup from compound 10% annual rate on interest milega jb both 22 years of ho jate are, then unhen equal amount is obtained if oftn of pas total sum of money ₹25200 thi, then oftn has devid to shuruaat in how much sum of money (₹ in) gave?",
    option: [
        "11750",
        "12000",
        "13550",
        "13200"
    ],
    answer: "13200"
},
{
    question: "aashish, kirn and mhesh of average weight 46 kg is if aashish and kirn of average weight 40 kg is and kirn and mhesh of average weight 43 kg is, then kirn of weight (kg in) find.",
    option: [
        "48",
        "38",
        "28",
        "43"
    ],
    answer: "28"
},
{
    question: "Find the value of the following.\n\n\\(\\left(21\\div7\\right)\\times\\left\\{\\frac{63}{9}+\\frac{14}{2}\\times(4-2)\\right\\}\\)",
    option: [
        "65",
        "73",
        "48",
        "63"
    ],
    answer: "63"
},
{
    question: "₹20,240 in a certain vstu to selling on a shopkeeper to 8% of hani hoti is 12% of labh earned krhas of lie ufrom us vstu to kis price on (₹ in) sell chahie?",
    option: [
        "26,440",
        "26,044",
        "24,640",
        "24,460"
    ],
    answer: "24,640"
},
{
    question: "petrol of value (per litre) in 60% tk of increases isof consumption in how many percentage decrease of jani chahie taki is on hohas vale expenditure in only 44% increase ho?",
    option: [
        "16%",
        "10%",
        "90%",
        "96%"
    ],
    answer: "10%"
},
{
    question: "in opposite directions journey kr rhi do relgariyan ek-dusre to 25 seconds in par doesn if both relgariyon in from each of length 250 m is and unin from ek of speed 45 km/hr is, then dusri relgari of speed how much hogi?",
    option: [
        "24 km/hr",
        "17 km/hr",
        "15 km/hr",
        "27 km/hr"
    ],
    answer: "27 km/hr"
},
{
    question: "A dvara ek work to complete krhas in lghas vale dayson of snkhya, B dvara work to complete krhas in lghas vale dayson of snkhya of doguni is C dvara work to complete krhas in lghas vale dayson of snkhya, B dvara work to complete krhas in lghas vale dayson of snkhya of aadhi is A work to 12 in days can complete if B on the first day work does, A dusre days work does and C tisre days work does, phir B chauwere days work does and isi trh aage bhi work krna jari rhta is, then work in how many days pura will become?",
    option: [
        "5",
        "5.75",
        "5.25",
        "5.5"
    ],
    answer: "5.5"
},
{
    question: "if 5% annual interest rate from tin yearson of compound interest and simple interest of difference ₹183 is, then principal (₹ in) find.",
    option: [
        "24000",
        "23425",
        "25200",
        "24420"
    ],
    answer: "24000"
},
{
    question: "150 m and 350 m length vali do relgariyan ek hi disha in respectively 60 km/h and 120 km/h of speed from gtivalue are pichhe from aa rhi faster relgari dvara dusri relgari to completely cross krhas in how much time (in minutes) lgega?",
    option: [
        "1.2",
        "2",
        "0.5",
        "3.5"
    ],
    answer: "0.5"
},
{
    question: "terh snkhyaon of aust 57 is prthm tin snkhyaon of aust 48 is, and agli sat snkhyaon of aust 58 is 11vin snkhya, 12vin snkhya of doguni is and 12vin snkhya, 13vin snkhya from 3 less is 11vin and 13vin snkhyaon of aust what is?",
    option: [
        "18",
        "27",
        "72",
        "36"
    ],
    answer: "72"
},
{
    question: "40, 20, 120 and 335 of LCM (LCM) find.",
    option: [
        "8040",
        "8003",
        "8101",
        "7991"
    ],
    answer: "8040"
},
{
    question: "Find the value of the following: \\[ (18 \\times 19) \\times \\left\\{8 \\div 4 \\times \\frac{16-12}{2}\\right\\} \\]",
    option: [
        "1353",
        "1368",
        "1382",
        "1349"
    ],
    answer: "1368"
},
{
    question: "₹1260 per saikre of rate on 400 chiku were purchased and ₹860 of labh on were sold per dozen chiku of selling price (₹ in) known kren",
    option: [
        "167",
        "192",
        "187",
        "177"
    ],
    answer: "177"
},
{
    question: "ek vshing mshin of marked price ₹30,000 is a customer to 20% and 10% of two successive discounts is obtained grahk dvara bhugtan kiya jahas vala antim value (₹ in) find.",
    option: [
        "21,600",
        "22,900",
        "23,400",
        "22,800"
    ],
    answer: "21,600"
},
{
    question: "ek hemisphere of volume (do dshmlv swasnon tk rounded) find jisof diameter 7 cm is (\\(\\pi = \\frac{22}{7}\\) lijie)",
    option: [
        "99.83 cm³",
        "84.83 cm³",
        "89.83 cm³",
        "94.83 cm³"
    ],
    answer: "89.83 cm³"
},
{
    question: "fuel of price over three consecutive months 35%, 10% and 30% less of gee is, but in the fourth month in 65% vriddhi of gee is in the fourth month in fuel of price in usof original price of tulna in how many percentage of increase/decrease occurred is?",
    option: [
        "32.43% decrease",
        "33.75% decrease",
        "32.84% increase",
        "31.14% increase"
    ],
    answer: "32.43% decrease"
},
{
    question: "a person a certain vstu to ₹216 in sells, jisfrom ufrom 20% of labh received becomes vstu of cost price (₹ in) kitna was?",
    option: [
        "270",
        "180",
        "260",
        "172"
    ],
    answer: "180"
},
{
    question: "abhishek and dipanshi ₹1,000 in a certain work of jimma lete are abhishek alone ifrom 5 in days can and dipanshi alone ifrom 10 in days kr skti is chitransh of mdd from ve ifrom 2 in days pura kr lete are chitransh to usof sumdan of lie kitna bhugtan kiya jana chahie?",
    option: [
        "₹500",
        "₹200",
        "₹300",
        "₹400"
    ],
    answer: "₹400"
},
{
    question: "ratio 17 : 42, 19 : 21, 1 : 7, 11 : 13, 23 : 26 of correct avrohi krm what is?",
    option: [
        "19 : 21, 11 : 13, 23 : 26, 17 : 42, 1 : 7",
        "19 : 21, 23 : 26, 11 : 13, 1 : 7, 17 : 42",
        "23 : 26, 19 : 21, 11 : 13, 17 : 42, 1 : 7",
        "19 : 21, 23 : 26, 11 : 13, 17 : 42, 1 : 7"
    ],
    answer: "19 : 21, 23 : 26, 11 : 13, 17 : 42, 1 : 7"
},
{
    question: "68 and 272 of mean proportional find.",
    option: [
        "136",
        "114",
        "126",
        "124"
    ],
    answer: "136"
},
{
    question: "Evaluate: \\[16 + 8 \\div 4 - 2 \\times 3\\]",
    option: [
        "12",
        "15",
        "14",
        "11"
    ],
    answer: "12"
},
{
    question: "800 m lmbi ek vrittaofr daur in, ram and mohn ek hi time on ek hi swasn from respectively 25 m/sec and 40 m/sec of speed from daurna aarnbh do ek hi disha in daurte hue, how many time bad ve phli bar prarmbhik swasn on milenge?",
    option: [
        "160 seconds",
        "152 seconds",
        "120 seconds",
        "136 seconds"
    ],
    answer: "160 seconds"
},
{
    question: "vh sbfrom chhoti snkhya which is jifrom 64 and 80 from part dehas on each sthiti in remainingphl 9 received ho?",
    option: [
        "337",
        "329",
        "320",
        "311"
    ],
    answer: "329"
},
{
    question: "if \\(x\\) of 2% = 324 is, then \\(x\\) ____ equal to is",
    option: [
        "32500",
        "16300",
        "32400",
        "16200"
    ],
    answer: "16200"
},
{
    question: "govind has HDFC in 4% annual interest rate on some sum of money of invested if 2 yearson after, govind to compounded annually compound interest of rup in ₹178.5 received becomes, then corresponding simple interest (₹ in) what will it be?",
    option: [
        "185",
        "170",
        "190",
        "175"
    ],
    answer: "175"
},
{
    question: "annual simple interest of svalue rate on mukund ₹5400 of amount of invest does and schin ₹9400 of amount of invest does if 5 years at the end of, schin to mukund from ₹960 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "3.8",
        "2.8",
        "4.8",
        "6.8"
    ],
    answer: "4.8"
},
{
    question: "ek class of 59 students of average age 22 years is if teacher of age bhi smmilit kr li jae, then entire group of average age 23 years becomes teacher of age (in years) find.",
    option: [
        "81",
        "82",
        "83",
        "84"
    ],
    answer: "82"
},
{
    question: "a shopkeeper ₹600 of bil on 25% of ekl discount and 10% and 15% of successive discounts dehas between of difference of gnna does both discounton between kitna difference hoga?",
    option: [
        "₹11",
        "₹1.5",
        "₹9",
        "₹10"
    ],
    answer: "₹9"
},
{
    question: "ek boat of dhara of sath speed 4 km/h is boat dhara of disha in 20 km and dhara of vionit 14 km of distance 3 hours in ty does still water in boat of speed find.",
    option: [
        "6 km/h",
        "12 km/h",
        "9 km/h",
        "5 km/h"
    ],
    answer: "PDF of prshn/optionon from nishchit nhin"
},
{
    question: "nimnlikhit snkhyaon between mdhyanupati find: \\(12+6\\sqrt{2}\\) and \\(8-4\\sqrt{2}\\)",
    option: [
        "\\(3\\sqrt{3}\\)",
        "\\(3\\sqrt{2}\\)",
        "\\(4\\sqrt{2}\\)",
        "\\(4\\sqrt{3}\\)"
    ],
    answer: "\\(4\\sqrt{3}\\)"
},

{
    question: "if \\(x\\) of 2% = 240 is, then \\(x\\) of value find.",
    option: [
        "24000",
        "12000",
        "12100",
        "24100"
    ],
    answer: "12000"
},
{
    question: "6\\sqrt{3} cm radius vale hemisphere of volume find.",
    option: [
        "\\(442\\sqrt{3}\\pi\\ cm^3\\)",
        "\\(432\\sqrt{3}\\pi\\ cm^3\\)",
        "\\(462\\sqrt{3}\\pi\\ cm^3\\)",
        "\\(452\\sqrt{3}\\pi\\ cm^3\\)"
    ],
    answer: "\\(432\\sqrt{3}\\pi\\ cm^3\\)"
},
{
    question: "nimnlikhit ratioon in from sbfrom chhota ratio which is?",
    option: [
        "3:4",
        "2:3",
        "5:9",
        "5:7"
    ],
    answer: "5:9"
},
{
    question: "ek bag in 33 amrud, 55 ofle and 88 malta of per lgae ge are peron to pnktiyon in is profr lgaya gya is ki each pnkti in peron of snkhya svalue is and each pnkti in only ek hi profr of per are nyuntm how much pnktiyan hongi?",
    option: [
        "18",
        "12",
        "20",
        "16"
    ],
    answer: "16"
},
{
    question: "schin aphas do pothenn chetn (13 years) and vipul (14 years) to some sum of money deta is yh sum of money unhen 23 years of age in milegi and is on 8% annual compound interest milega if both to milhas vali onipkvta amount svalue is and total sum of money ₹23,400 is, then vipul to prarnbh in how much sum of money given thi?",
    option: [
        "₹11250",
        "₹12500",
        "₹12150",
        "₹11000"
    ],
    answer: "₹12150"
},
{
    question: "ek ofr 25 in minutes 30 km 250 m of distance ty does ofr of speed km/h in find.",
    option: [
        "72.6",
        "76.2",
        "67.2",
        "62.7"
    ],
    answer: "72.6 km/h"
},

{
    question: "ek class in 57 students of average age 13 years is teacher to shamil upon doing average age 14 years becomes teacher of age how much is?",
    option: [
        "70 years",
        "71 years",
        "72 years",
        "69 years"
    ],
    answer: "71 years"
},
{
    question: "a person jate time 24 km/h of speed from and lautte time 36 km/h of speed travels from puri journey of average speed find.",
    option: [
        "27.9 km/h",
        "31.6 km/h",
        "28.8 km/h",
        "26.3 km/h"
    ],
    answer: "28.8 km/h"
},
{
    question: "ofshv ₹5400 and tushar ₹10200 svalue annual simple interest rate on invest do 3 yearson bad tushar to ofshv from ₹360 more interest milta is annual interest rate find.",
    option: [
        "1.5%",
        "2.5%",
        "4.5%",
        "3.5%"
    ],
    answer: "2.5%"
},
{
    question: "ek kailtotaletr ₹315 in bought gya and 20% labh on becha gya labh of amount find.",
    option: [
        "₹63",
        "₹60",
        "₹68",
        "₹71"
    ],
    answer: "₹63"
},
{
    question: "ek city of population 360000 is, jisin 225000 men are total population of 35% literate is and men in 17% literate are women in literateta of percentage find.",
    option: [
        "65%",
        "67%",
        "63%",
        "68%"
    ],
    answer: "65%"
},
{
    question: "do snkhyaon of LCM (LCM) 154 and HCF (HCF) 7 is if ek snkhya 77 is, then dusri snkhya find.",
    option: [
        "16",
        "14",
        "15",
        "13"
    ],
    answer: "14"
},
{
    question: "A, B and C a certain work to respectively 12, 20 and 15 in days pura kr skte are ve alternately ek-ek days ofm do on the first day C, dusre days B and tisre days A ofm does pura work in how many days complete hoga?",
    option: [
        "30 days",
        "12 days",
        "24 days",
        "15 days"
    ],
    answer: "15 days"
},
{
    question: "if petrol of price ₹90/litr from brhkr ₹110/litr becomes, then a certain vykti to apni consumption how many percentage less krni hogi taki petrol on usof khrch svalue rhe (dshmlv of do swasn tk lgbhg value dijie)?",
    option: [
        "18.18%",
        "78.78%",
        "81.81%",
        "25.25%"
    ],
    answer: "18.18%"
},

{
    question: "vh smallest natural number find, jo 11, 6, 55 and 9 from vibhajy ho",
    option: [
        "1032",
        "921",
        "1054",
        "990"
    ],
    answer: "990"
},

{
    question: "Find the value of the following.",
    option: [
        "310",
        "274",
        "277",
        "294"
    ],
    answer: "277"
},

{
    question: "nitin of pas ₹1224 are unhonhas ifrom aphas beton prvin and rishi between bant gave and unhen ifrom annual rup from compound hohas vali 4% annual interest rate on invest krhas to kha it was observed that prvin and rishi to respectively 14 and 15 years bad equal amount received occurred nitin has rishi to how much sum of money (₹ in) gave?",
    option: [
        "624",
        "724",
        "450",
        "600"
    ],
    answer: "600"
},

{
    question: "Evaluate : 16 + 12 ÷ 3 - 2 × 4",
    option: [
        "11",
        "15",
        "12",
        "14"
    ],
    answer: "14"
},

{
    question: "a person 3 km/hr of speed from surt from jypur jata is and usi marg from 15 km/hr of speed from surt returns puri journey of dauran usof average speed (km/hr in) find.",
    option: [
        "1",
        "6",
        "8",
        "5"
    ],
    answer: "6"
},

{
    question: "a shopkeeper has ₹500 in an item khridi 30% labh received krhas of lie ufrom vstu to at what price (₹ in) on sell chahie?",
    option: [
        "350",
        "638",
        "650",
        "662"
    ],
    answer: "650"
},

{
    question: "kirn, mhesh and ram of average weight 46 kg is if kirn and mhesh of average weight 40 kg is and mhesh and ram of average weight 47 kg is, then mhesh of weight (kg in) find.",
    option: [
        "56",
        "46",
        "36",
        "51"
    ],
    answer: "36"
},

{
    question: "ek saikil speedk 2 hours, 15 km/hr of speed from saikil chlata is and phir 3 hours, 20 km/hr of speed from saikil chlata is puri journey of dauran saikil speedk of average speed (km/hr in) how much is?",
    option: [
        "16",
        "19",
        "20",
        "18"
    ],
    answer: "18"
},

{
    question: "a shopkeeper aphas grahton to discount of 3 sofm offer does among the following which sofm nyuntm discount percentage dilaegi?\n\nA. 25% and 32% of two successive discounts\nB. 8 khriden and do mupht paen\nC. 8 khriden and 10 paen",
    option: [
        "only C",
        "only A",
        "only B",
        "B and C both"
    ],
    answer: "only C"
},

{
    question: "ek jile of population 384000 is, jisin 192000 men are 69% population literate is if 53% men literate are, then literate women of percentage what will it be?",
    option: [
        "82%",
        "84%",
        "85%",
        "87%"
    ],
    answer: "85%"
},

{
    question: "Evaluate : (-9) - (-60) ÷ (-15) + (-4) × 8",
    option: [
        "-44",
        "-47",
        "-45",
        "-48"
    ],
    answer: "-45"
},

{
    question: "₹1250 per saikre of rate on 400 chiku were purchased and ₹800 of labh on were sold per dozen chiku of selling price (₹ in) known kren",
    option: [
        "189",
        "174",
        "184",
        "164"
    ],
    answer: "184"
},

{
    question: "if same interest rate on, 2 in years, simple interest ₹40 and compound interest ₹56 is, then principal (₹ in) find.",
    option: [
        "18",
        "25",
        "20",
        "29"
    ],
    answer: "20"
},

{
    question: "ek dhara of speed 6 km/h is ek boat downstream 56 km and upstream 39 km of distance 7 hours in ty kr skti is still water in boat of speed (km/h in) find.",
    option: [
        "7",
        "22",
        "13",
        "15"
    ],
    answer: "15"
},

{
    question: "a certain vidyut upkrn of bijli consumption, anupryukt voltta of vrg of anukrvalueupati is if upkrn 120 volt voltta hohas on 150 vat of consumption does, then 240 volt on yh how much bijli (vat in) consumption krega?",
    option: [
        "550",
        "600",
        "650",
        "500"
    ],
    answer: "600"
},

{
    question: "P and Q a certain work to respectively 28 days and 35 days in pura kr skte are P work krna aarnbh does and ve alternately ek-ek days work do entire work in how many days pura will become?",
    option: [
        "31",
        "21",
        "27",
        "18"
    ],
    answer: "31"
},

{
    question: "annual simple interest of svalue rate on mohn ₹5400 of amount of invest does and vrun ₹9400 of amount of invest does if 6 years at the end of, vrun to mohn from ₹480 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "2.5",
        "3",
        "4",
        "2"
    ],
    answer: "2"
},

{
    question: "3, 6, 12 and b lgatar svalueupat (continued proportion) in are, then b of value find.",
    option: [
        "",
        "",
        "",
        ""
    ],
    answer: ""
},

{
    question: "3√2 cm radius vale gole of volume what will it be?",
    option: [
        "70√2π cm³",
        "71√2π cm³",
        "73√2π cm³",
        "72√2π cm³"
    ],
    answer: "72√2π cm³"
},
{
    question: "A and B a certain work to respectively 25 dayson and 30 in days pura kr skte are unhonhas 6 dayson tk sath together work kiya, usafter B of swasn on P aa gya and agle 8 in days work pura ho gya P alone usi work to to complete how much time lega?",
    option: [
        "20 days",
        "18 days",
        "24 days",
        "15 days"
    ],
    answer: "20 days"
},
{
    question: "govind has HDFC in 3% annual interest rate on some sum of money of invested if 2 yearson after, govind to compounded annually compound interest of rup in ₹203 received becomes, then corresponding simple interest (₹ in) what hoga?",
    option: [
        "215",
        "210",
        "195",
        "200"
    ],
    answer: "200"
},
{
    question: "5, 35 and x of chturwasnupati 84 is, x of value find.",
    option: [
        "12",
        "14",
        "588",
        "294"
    ],
    answer: "12"
},
{
    question: "vh smallest natural number find, jo 33, 72, 11 and 18 from vibhajy ho",
    option: [
        "881",
        "696",
        "792",
        "839"
    ],
    answer: "792"
},
{
    question: "chhh vykti food krhas of lie ek hotl in ge unin from panch vyktiyon in from each has aphas food on ₹30 khrch kie chhthe vykti has all chhh vyktiyon of aust expenditure from ₹50 more khrch kie all vyktiyon dvara khrch of gee total sum of money how much thi?",
    option: [
        "₹300",
        "₹240",
        "₹264",
        "₹270"
    ],
    answer: "₹270"
},
{
    question: "Evaluate : (-9) - (-60) ÷ (-12) + (-3) × 7",
    option: [
        "-37",
        "-38",
        "-35",
        "-34"
    ],
    answer: "-38"
},
{
    question: "smuh A in 81 sdsy, smuh B in 29 sdsy and smuh C in 70 sdsy are in smuhon of all sdsy ek restran in ge smuh A, smuh B and smuh C of each sdsy on khrch of gee aust amount respectively ₹467, ₹117 and ₹378 is per sdsy khrch of gee total aust amount (₹ in) find.",
    option: [
        "380",
        "376",
        "375",
        "377"
    ],
    answer: "377"
},
{
    question: "ek dishonest shopkeeper aphas savalue to cost price on selling of claims however, vh ek aifrom weight of upsum does jisof weight actually weight written on it from 24% less is usof profit percentage find.",
    option: [
        "31.57%",
        "24%",
        "20%",
        "25%"
    ],
    answer: "31.57%"
},
{
    question: "4000 and 5000 between vh largest number which is jifrom 12, 16 and 24 from part dehas on remainingphl 4 bche?",
    option: [
        "4969",
        "4699",
        "6499",
        "4996"
    ],
    answer: "4996"
},
{
    question: "raj of pas ₹1612 are ushas ifrom aphas sons vrun and aashish between bant gave and unhen ifrom compounded annually 8% interest rate on invest krhas to kha it was observed that vrun and aashish to respectively 18 and 19 years bad equal amount received occurred raj has vrun to how much sum of money (₹ in) gave?",
    option: [
        "687",
        "875",
        "837",
        "775"
    ],
    answer: "687"
},
{
    question: "if 12 cm height vale ek lmb vrittiy beln of curved surface area $96\\pi \\text{ cm}^2$ is, then isof radius find.",
    option: [
        "8 cm",
        "3 cm",
        "6 cm",
        "4 cm"
    ],
    answer: "4 cm"
},
{
    question: "an item to ₹1,500 in selling on, ek aadmi to ₹150 of labh received becomes 24% labh received krhas of lie ufrom vstu to at what price on (₹ in) sell chahie?",
    option: [
        "1,870",
        "1,560",
        "1,493",
        "1,674"
    ],
    answer: "1,674"
},
{
    question: "annual simple interest of svalue rate on vijy ₹5400 of amount of invest does and mohn ₹9400 of amount of invest does if 4 years at the end of, mohn to vijy from ₹360 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "1.5",
        "4.25",
        "2.25",
        "3.25"
    ],
    answer: "2.25"
},
{
    question: "S of gnit and angreji in marks, svalueupat in are pichhle years jb ufrom gnit in 60 marks mile were, tb angreji in ushas 75 marks received kie were if is years angreji in usof marks 60 are, then gnit of usof marks how many are?",
    option: [
        "40",
        "48",
        "75",
        "60"
    ],
    answer: "48"
},
{
    question: "36, 45, 465 and 310 of LCM (LCM) find.",
    option: [
        "5580",
        "5560",
        "5658",
        "5497"
    ],
    answer: "5580"
},
{
    question: "P vrittaofr pth of ek chkkr 1 mint and 30 seconds in can complete whereas Q us pth of ek chkkr 45 seconds in can complete if ve ek hi bindu from and in opposite directions chlna start do, then ve how many seconds after ek-dusre from milenge?",
    option: [
        "40",
        "30",
        "25",
        "35"
    ],
    answer: "30"
},
{
    question: "mnoj city A from city B tk journey does if mnoj apni ofr to apni normal speed of speed on chlata is, then vh city B tk 10 mint late reaches if mnoj apni ofr normal speed from chlata, then city A from city B tk journey krhas in ufrom how much time (in minutes) lgta?",
    option: [
        "11",
        "15",
        "17",
        "24"
    ],
    answer: "15"
},
{
    question: "if x of 4% = 24 is, then x ____ equal to is",
    option: [
        "600",
        "700",
        "1200",
        "1300"
    ],
    answer: "600"
},
{
    question: "petrol of value in (per litre) 50% of increases isof consumption in how many percentage decrease should be reduced ki is on hohas vale expenditure in only 23% increase ho?",
    option: [
        "21%",
        "81%",
        "18%",
        "82%"
    ],
    answer: "18%"
},
{
    question: "a shopkeeper 'toee tin shrt khriden and do mupht paen' of ek tyauhari offer deta is is offer of lie smtuly percentage discount find.",
    option: [
        "60%",
        "30%",
        "40%",
        "20%"
    ],
    answer: "40%"
},
{
    question: "A and B of age of ratio 4 : 9 is if unof age of difference 10 years is, then ab from 4 years bad unof age of tulna kren",
    option: [
        "6 : 11",
        "12 : 19",
        "25 : 29",
        "13 : 23"
    ],
    answer: "6 : 11"
},

{
    question: "snjy and tnnu alg-alg taur on work krte hue a certain work to respectively 6 and 20 in days pura kr skte are if ve on alternate days work kren, and tnnu work start kre, then work in how many days pura will become?",
    option: [
        "8.5",
        "9.5",
        "10.5",
        "11.5"
    ],
    answer: "10.5"
},

{
    question: "Evaluate :\n\n$32 \\div 8 \\times 5 - 2 \\times 3$",
    option: [
        "14",
        "17",
        "16",
        "13"
    ],
    answer: "14"
},

{
    question: "fuel of price over three consecutive months 25%, 10% and 30% less of gee is, but in the fourth month in 60% vriddhi of gee is in the fourth month in fuel of price in usof original price of tulna in how many percentage of increase/decrease occurred is?",
    option: [
        "23.98% increase",
        "30.76% decrease",
        "24.4% decrease",
        "27.32% increase"
    ],
    answer: "24.4% decrease"
},

{
    question: "ek lnb vrittiy cone of volume $168\\pi\\ cm^3$ is and isof height $0.12\\ m$ is isof radius find.",
    option: [
        "$\\sqrt{42}\\ cm$",
        "$\\sqrt{41}\\ cm$",
        "$\\sqrt{43}\\ cm$",
        "$\\sqrt{47}\\ cm$"
    ],
    answer: "$\\sqrt{42}\\ cm$"
},

{
    question: "do snkhyaon of gunnphl 5184 is and unof HCF of value 24 is unof LCM find.",
    option: [
        "343",
        "216",
        "125",
        "324"
    ],
    answer: "216"
},

{
    question: "if x of 2% = 336 is, then x ____ equal to is",
    option: [
        "16900",
        "33700",
        "16800",
        "33600"
    ],
    answer: "16800"
},

{
    question: "akir city A from city B tk journey does if akir apni ofr to apni normal speed of speed on chlata is, then vh city B tk 45 mint late reaches if akir apni ofr normal speed from chlata, then city A from city B tk journey krhas in ufrom how much time (in minutes) lgta?",
    option: [
        "16",
        "12",
        "15",
        "6"
    ],
    answer: "15"
},

{
    question: "Find the value of the following.",
    option: [
        "192",
        "183",
        "177",
        "174"
    ],
    answer: "192"
},

{
    question: "rupali has gnit in vigyan from doguhas marks received kie gnit, vigyan and knpyutr in usof total marks 234 are if gnit and knpyutr in usof markson of ratio 4 : 3 is, then rupali of gnit in marks find.",
    option: [
        "98",
        "89",
        "68",
        "104"
    ],
    answer: "104"
},

{
    question: "Find the value of the following.",
    option: [
        "198",
        "208",
        "215",
        "193"
    ],
    answer: "198"
},

{
    question: "a certain principal on 6% of annual rate from 2 years of avdhi of lie simple interest ₹387 is principal (₹ in) find.",
    option: [
        "3225",
        "3221",
        "3234",
        "3228"
    ],
    answer: "3225"
},

{
    question: "raofsh has 154 kursiyan bechin and ufrom 66 kursiyon of selling price equal to labh occurred usof profit percentage what is?",
    option: [
        "70%",
        "80%",
        "85%",
        "75%"
    ],
    answer: "75%"
},

{
    question: "ek bs 60 km of distance ty krte hue 45 in minutes city P from Q tk jati is, and 40 km/hr of speed from city P tk back aati is journey of dauran bs of average speed _____ km/hr (dshmlv of do swasnon tk correct value) is",
    option: [
        "56.33",
        "53.67",
        "56.67",
        "53.33"
    ],
    answer: "53.33"
},

{
    question: "ek class in 50 markson of angreji examination in, 20 chhatron of average score 40 marks was, 25 chhatron of average score 34 marks was and 15 chhatron of average score 26 marks was puri class of weightit average score (weighted average score) what is?",
    option: [
        "36",
        "35",
        "33",
        "34"
    ],
    answer: "34"
},

{
    question: "ek journey of $\\frac{3}{5}$ part 84 km/hr of speed from ty kiya jata is and journey of remaining distance 56 km/hr of speed from ty of jati is puri journey of dauran average speed (km/hr in) how much is?",
    option: [
        "70",
        "60",
        "65",
        "55"
    ],
    answer: "70"
},

{
    question: "if 10% annual interest rate from tin yearson of compound interest and simple interest of difference ₹124 is, then principal (₹ in) find.",
    option: [
        "5200",
        "4420",
        "4000",
        "3425"
    ],
    answer: "4000"
},

{
    question: "if toee duofndar \"panch khriden and ek mupht paen\" of ek sofm offer does, then prbhavi discount percentage (to two decimal places rounded) find.",
    option: [
        "24.67%",
        "16.33%",
        "24.33%",
        "16.67%"
    ],
    answer: "16.67%"
},

{
    question: "if 30 khilaunon of selling price, 50 khilaunon of cost price equal to is, then profit percentage (do dshmlv swasnon tk rounded) find.",
    option: [
        "83.33%",
        "25.55%",
        "33.33%",
        "66.67%"
    ],
    answer: "66.67%"
},

{
    question: "vijy of pas ₹1218 are unhonhas ifrom aphas sons ajy and profsh between bant gave and unhen ifrom annual rup from compound hohas vali 10% annual interest rate on invest krhas to kha it was observed that ajy and profsh to respectively 14 and 15 years bad equal amount received occurred vijy has profsh to how much sum of money (₹ in) gave?",
    option: [
        "738",
        "580",
        "430",
        "638"
    ],
    answer: "638"
},
{
    question: "vh largest number which is jisfrom 42, 84 and 153 to part dehas on each sthiti in svalue remainingphl bchega?",
    option: [
        "3",
        "7",
        "9",
        "5"
    ],
    answer: "3"
},

{
    question: "Find the value of the following.",
    option: [
        "109",
        "120",
        "122",
        "138"
    ],
    answer: "122"
},

{
    question: "a shopkeeper has ₹520 in an item khridi 30% labh received krhas of lie ufrom vstu to at what price (₹ in) on sell chahie?",
    option: [
        "676",
        "364",
        "664",
        "688"
    ],
    answer: "676"
},

{
    question: "jb 7516, 7635 and 7992 to largest number x from part gave jata is, then each sthiti in svalue remainingphl savingsa is x of markson of gunnphl find.",
    option: [
        "6",
        "9",
        "4",
        "8"
    ],
    answer: "6"
},

{
    question: "ek stor in ek ilektrnik ghri of marked price ₹45,880 is and yh 25% of discount on available is if toee grahk stor from ifrom khridta is, then ufrom how much price (₹ in) of bhugtan krna prega?",
    option: [
        "31,440",
        "34,410",
        "34,140",
        "31,400"
    ],
    answer: "34,410"
},

{
    question: "ek snkhya in 50% increase of jati is and phir pun: 50% increase of jati is original number back received krhas of lie brhi occurred snkhya to how many percentage less kiya jana chahie?",
    option: [
        "$16\\frac{2}{3}\\%$",
        "$25\\%$",
        "$33\\frac{1}{3}\\%$",
        "$20\\%$"
    ],
    answer: "$33\\frac{1}{3}\\%$"
},

{
    question: "petrol of value (per litre) in 75% of increases isof consumption in how many percentage decrease of jani chahie taki is on hohas vale expenditure in only 47% increase ho",
    option: [
        "84%",
        "77%",
        "16%",
        "26%"
    ],
    answer: "16%"
},

{
    question: "6 and 150 between mean proportional find.",
    option: [
        "30",
        "90",
        "60",
        "45"
    ],
    answer: "30"
},

{
    question: "ek srl lolk of aavrtofl 2.2 sec, 1.8 sec, 2 sec, 1.6 sec and 2.4 sec are aust aavrtofl (sec in) what will it be?",
    option: [
        "2.4",
        "2",
        "1.6",
        "2.2"
    ],
    answer: "2"
},

{
    question: "ek incomet of onimap 26 cm is and isof length 7 cm is isof area cm² in find.",
    option: [
        "42",
        "32",
        "36",
        "48"
    ],
    answer: "42"
},

{
    question: "Find the value of the following.",
    option: [
        "517",
        "513",
        "504",
        "521"
    ],
    answer: "513"
},

{
    question: "atul, bbn and raofsh of average weight 46 kg is if atul and bbn of average weight 39 kg is and bbn and raofsh of average weight 50 kg is, then bbn of vjn (kg in) find.",
    option: [
        "40",
        "50",
        "60",
        "55"
    ],
    answer: "40"
},

{
    question: "300 m and 200 m length vali do relgariyan ek hi disha in respectively 70 km/h and 120 km/h of speed from gtivalue are pichhe from aa rhi faster relgari dvara dusri relgari to completely cross krhas in how much time (in minutes) lgega?",
    option: [
        "2",
        "3.9",
        "0.6",
        "3"
    ],
    answer: "3"
},
{
    question: "ashok of pas ₹1612 are ushas ifrom aphas sons raj and vrun between bant gave and unhen ifrom compounded annually 8% interest rate on invest krhas to kha it was observed that raj and vrun to respectively 14 and 15 years bad equal amount received occurred ashok has raj to how much sum of money (₹ in) gave?",
    option: [
        "837",
        "687",
        "875",
        "775"
    ],
    answer: "837"
},

{
    question: "a person 56 km/hr of speed from israteabad from chennee jata is and usi marg from 72 km/hr of speed from israteabad returns puri journey of dauran usof average speed (km/hr in) find.",
    option: [
        "61",
        "63",
        "60",
        "62"
    ],
    answer: "63"
},

{
    question: "do snkhyaon of LCM and HCF respectively 144 and 8 is if unin from ek snkhya 16 is, then dusri snkhya find.",
    option: [
        "73",
        "70",
        "74",
        "72"
    ],
    answer: "72"
},

{
    question: "ram, rvi and rina a certain work to respectively 16, 20 and 24 in days pura kr skte are unhonhas sath together work start kiya but rvi has work pura hohas from 5 days phle work krna chhor gave baof both has sath together work to in how many days pura kiya?",
    option: [
        "8 days",
        "10 days",
        "12 days",
        "15 days"
    ],
    answer: "8 days"
},

{
    question: "knchn has 153 kursiyan bechin and ufrom 78 kursiyon of selling price equal to labh occurred usof profit percentage what is?",
    option: [
        "109%",
        "99%",
        "104%",
        "114%"
    ],
    answer: "104%"
},

{
    question: "30, 13, 180 and 234 of LCM (LCM) find.",
    option: [
        "2291",
        "2340",
        "2379",
        "2409"
    ],
    answer: "2340"
},

{
    question: "an item to ₹4,824 in selling on ek aadmi to 20% of labh becomes if vh ifrom ₹6,000 in beche then usof profit percentage (nikttm maximum marks tk rounded) what hoga?",
    option: [
        "32%",
        "49%",
        "40%",
        "53%"
    ],
    answer: "49%"
},

{
    question: "do snkhyaon of gunnphl 1,48,176 is and unof LCM of value 3,528 is unof HCF find.",
    option: [
        "36",
        "42",
        "32",
        "51"
    ],
    answer: "42"
},

{
    question: "ek class of 22 students of average age 47 years is if teacher of age bhi smmilit kr li jae, then entire group of average age 48 years becomes teacher of age (in years) find.",
    option: [
        "70",
        "69",
        "71",
        "67"
    ],
    answer: "70"
},

{
    question: "petrol of value in (per litre) 85% of increases isof consumption in how many percentage decrease should be reduced ki is on hohas vale expenditure in only 11% increase ho?",
    option: [
        "40%",
        "60%",
        "46%",
        "53%"
    ],
    answer: "40%"
},
{
    question: "annual simple interest of svalue rate on gopal ₹5400 of amount of invest does and akshy ₹10200 of amount of invest does if 4 years at the end of, akshy to gopal from ₹720 more interest received becomes, then annual interest rate (percentage in) find.",
    option: [
        "3.75",
        "1.75",
        "2.75",
        "5.75"
    ],
    answer: "3.75"
},

{
    question: "75, 45, 180 and 110 of LCM (LCM) find.",
    option: [
        "9946",
        "9856",
        "9900",
        "9817"
    ],
    answer: "9900"
},

{
    question: "a shopkeeper ek mej of value, usof cost price from 40% more marked does and 25% of discount deta is if ufrom phir bhi ₹450 of labh becomes, then mej of cost price (₹ in) what is?",
    option: [
        "9,500",
        "8,000",
        "9,000",
        "8,500"
    ],
    answer: "9,000"
},

{
    question: "5√24, 3√10 and 3√15 of chturwasnupati find.",
    option: [
        "3",
        "4.5",
        "4",
        "3.5"
    ],
    answer: "4"
},

{
    question: "do trains 110 km/h and 140 km/h of speed from vionit dishaon from aa rhi are ek tren of length 140 m is unhen each other cross in 5 seconds of time takes dusri tren of length (m in) to two decimal places find.",
    option: [
        "205.65",
        "207.22",
        "209.67",
        "208.21"
    ],
    answer: "207.22"
},

{
    question: "ratio 43 : 91 of both pdon from ghtaee ja skhas vali snkhya find jisfrom ki ratio 3 : 7 becomes",
    option: [
        "5",
        "4",
        "6",
        "7"
    ],
    answer: "5"
},

{
    question: "a person motrsaikil from a certain swasn tk 60 km/h of average speed travels from and 30 km/h of average speed from returns then puri journey of lie usof average speed (km/h in) find.",
    option: [
        "40",
        "55",
        "50",
        "45"
    ],
    answer: "40"
},

{
    question: "ek aabhushn of value in per years 5% decrease aati is if aabhushn of current value ₹12,500 is, then 2 years bad isof value what will it be?",
    option: [
        "₹11,250",
        "₹11,325",
        "₹11,315.50",
        "₹11,281.25"
    ],
    answer: "₹11,281.25"
},

{
    question: "if 10% annual interest rate from tin yearson of compound interest and simple interest of difference ₹93 is, then principal (₹ in) find.",
    option: [
        "2425",
        "3000",
        "3420",
        "4200"
    ],
    answer: "3000"
},

{
    question: "7 cm radius of ek spherical patr to pent krhas of lagt ₹18,480 is per vrg centimetres of rate from pent krhas of lagt find. (π of upsum ofjie)",
    option: [
        "₹32",
        "₹31",
        "₹33",
        "₹30"
    ],
    answer: "₹30"
},

];

// =====================================================
// REASONING (20) - English
// =====================================================
const reasoningQuestions = [

{
    question: "If PSPN ko OROM is written and YBYW ko XAXV is written, then QTQO ko will be written as?",
    option: [
        "PTOQ",
        "PRON",
        "PSPN",
        "PSON"
    ],
    answer: "PSPN"
},
{
    question: "If A ÷ B + C × D - E in + means sister, - means father, × means brother and ÷ means mother is, then A of D what is the relationship with?",
    option: [
        "sister's daughter",
        "daughter of sister",
        "father's mother",
        "mother"
    ],
    answer: "mother"
},
{
    question: "If REMY ko VHOZ and ZFHU ko DIJV is written, then LBSO ko will be written as?",
    option: [
        "QDWR",
        "PEUP",
        "OFVQ",
        "RDWP"
    ],
    answer: "PEUP"
},
{
    question: "JOSTLED of letters ko English vrnmala of krm in arranged krne pr kitne letters apne original position pr will remain?",
    option: [
        "1",
        "2",
        "3",
        "0"
    ],
    answer: "0"
},
{
    question: "If PGMS ko 9-18-12-6 and TBRX ko 5-23-7-1 is written, then KAVO ko will be written as?",
    option: [
        "14-24-3-10",
        "13-25-6-12",
        "11-21-2-9",
        "15-26-4-11"
    ],
    answer: "14-24-3-10"
},
{
    question: "given number series in question mark (?) of in place of who-si snkhor aaegi? 79, 72, 58, 37, 9, ?",
    option: [
        "-27",
        "-25",
        "-26",
        "-24"
    ],
    answer: "-26"
},
{
    question: "given letter series in question mark (?) of in place of which group will come? WUY, KIM, YWA, MKO, ?",
    option: [
        "AYC",
        "BYC",
        "ZYC",
        "CYC"
    ],
    answer: "AYC"
},
{
    question: "following four letters-groupon three of in a certain way is equaln and one is different. different letters-group select.",
    option: [
        "EIK",
        "CGI",
        "PTV",
        "GLM"
    ],
    answer: "GLM"
},
{
    question: "given number series in question mark (?) of in place of who-si snkhor aaegi? 14, 23, 42, 71, 110, ?",
    option: [
        "180",
        "164",
        "159",
        "172"
    ],
    answer: "159"
},
{
    question: "sat person Q, R, S, T, U, V and P in a row facing north are seated. V, Q of immediately to the right and R of immediately to the left is seated. P, R of immediately to the right is seated and S, P of immediately to the right is seated. U, S of to the right second position is seated and row of one end pr is. V of immediately to the right who is seated?",
    option: [
        "V",
        "T",
        "P",
        "R"
    ],
    answer: "R"
},
{
    question: "If + and − ttha × and ÷ ko aaps in are interchanged, then following expression of value kor hoga? 18 ÷ 5 + 26 − 45 × 5 = ?",
    option: [
        "68",
        "73",
        "75",
        "80"
    ],
    answer: "73"
},
{
    question: "statement: All tar ofbl are. All tar rssiorn are. Some rssiorn stil are. conclusion: (I) Some stil tar are. (II) Some rssiorn ofbl are. given conclusionon in se which anusrn krta/krte are?",
    option: [
        "Only conclusion I follows",
        "Neither conclusion I nor II follows",
        "Only conclusion II follows",
        "Both conclusion I and II follow"
    ],
    answer: "Neither conclusion I nor II follows"
},
{
    question: "If ‘−’ and ‘÷’ ko prspr are interchanged ttha ‘×’ and ‘+’ ko prspr are interchanged, then following equation in question mark ‘(?)’ of in place of kor will come?\n8 + 63 − 7 × 7 ÷ 9 = ?",
    option: [
        "69",
        "68",
        "71",
        "70"
    ],
    answer: "70"
},
{
    question: "English alphabetical order of on the basis of given series in '?' of in place of kor will come?\nTKF UJG VIH WHI ?",
    option: [
        "XLJ",
        "ZJM",
        "JGX",
        "XGJ"
    ],
    answer: "XGJ"
},
{
    question: "sat person, G, H, I, J, K, L and M, in a row facing north are seated. (prntu jruri not ki ve isi krm in baithe hon). M of to the right No not is seated. M and K of between Only three person are seated. K and H of between Only two person are seated. G, L of to the left third position is seated. J, L of immediately to the right is seated.\nI and H of between how many persons are seated?",
    option: [
        "one",
        "two",
        "three",
        "four"
    ],
    answer: "three"
},
{
    question: "English alphabetical order of on the basis of, MLTA in a certain way QHXW se snbndhit is. in the same way, LNVB, PJZX se snbndhit is. same trk of anusrn krte hue, CWON, given optionon in se is related to which?",
    option: [
        "GSSJ",
        "GSAR",
        "GSJS",
        "GASR"
    ],
    answer: "GSSJ"
},
{
    question: "a certain code language in, ‘TDZM’ ko ‘8-24-2-15' of rup in code bddh kior jata is and ‘KRIY’ ko ‘17-10-19-3’ of rup in code bddh kior jata is. given code language in ‘HAWP’ for code kor hoga?",
    option: [
        "20-27-5-12",
        "19-8-5-14",
        "23-25-6-11",
        "22-9-7-13"
    ],
    answer: "20-27-5-12"
},
{
    question: "one nishchit code language in,\n'A + B' means is ki 'A, B of mother is',\n'A - B' means is ki 'A, B of daughter is',\n'A x B' means is ki 'A, B of son is' and\n'A ÷ B' means is ki 'A, B of brother is'.\nIf 'C - D ÷ E x F + G' is, then F of C what is the relationship with?",
    option: [
        "father's mother",
        "father of brother",
        "daughter's son",
        "mother's father"
    ],
    answer: "father's mother"
},
{
    question: "us option of select, jo letters of us krm represents krta is, jise niche given blank spaceson in sequentially from left to right rkhe jane pr given letters shrinkhla puri ho jaegi.\np _ _ u o p q t _ _ _ q _ u o p q _ u _",
    option: [
        "qtouptto",
        "tquoptto",
        "qtuoptto",
        "tqouptot"
    ],
    answer: "qtuoptto"
},
{
    question: "English alphabetical order of on the basis of NRDF one nishchit way se PMFA se snbndhit is. SFJW immediately usi way UALR se snbndhit is. following the same logic GVKQ given optionon in se is related to which?",
    option: [
        "IQML",
        "PGKY",
        "RGLB",
        "KRCX"
    ],
    answer: "IQML"
},
{
    question: "given shrinkhla in question mark (?) of in place of kor aana chahie?\n10 11 13 17 25 ?",
    option: [
        "41",
        "42",
        "43",
        "40"
    ],
    answer: "41"
},
{
    question: "given statementon and conclusionon ko carefully prhie. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\nstatement:\nAll payl, moje are.\nAll moje, phlait are.\nSome phlait, traujr are.\nconclusion:\n(I) All payl, phlait are.\n(II) Some traujr, payl are.",
    option: [
        "Both conclusion (I) and (II) follow.",
        "Neither conclusion (I) and n hi (II) follows.",
        "Only conclusion (II) follows.",
        "Only conclusion (I) follows."
    ],
    answer: "Only conclusion (I) follows."
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "NYJ",
        "TEP",
        "CNY",
        "QZK"
    ],
    answer: "QZK"
},
{
    question: "a certain code language in, ‘BIGS’ ko ‘4593’ of rup in code bddh kior jata is and ‘SING’ ko ‘9432’ of rup in code bddh kior jata is. given code language in ‘N’ for code kor hoga?",
    option: [
        "4",
        "3",
        "9",
        "2"
    ],
    answer: "2"
},
{
    question: "chhh mitr E, F, G, R, S and T one vrittaofr around a table mej of facing the center are seated (prntu jruri not ki ve isi krm in baithe hon). S, F of to the right second position is seated. F, G of to the right second position is seated. R and E of bich Only F is seated. E, S of nearest neighbor is. R of to the right se when counted T and R of bich how many persons are seated?",
    option: [
        "two",
        "one",
        "four",
        "three"
    ],
    answer: "three"
},
{
    question: "If word VARIABLE of each letter ko reverse English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "three",
        "one",
        "four",
        "two"
    ],
    answer: "three"
},
{
    question: "given series in question mark (?) of in place of kor aana chahie?\n65 86 114 149 191 ?",
    option: [
        "216",
        "226",
        "232",
        "240"
    ],
    answer: "240"
},
{
    question: "SBCF in a certain way RADG se snbndhit is. NVMO in the same way MUNP se snbndhit is. following the same logic, GUAX among the following is related to which?",
    option: [
        "FTBY",
        "FRCY",
        "FTCY",
        "FTBZ"
    ],
    answer: "FTBY"
},
{
    question: "aath person two sameantr rowyon in are seated jinin se each row in 4 person such that are seated ki adjacent persons of bich of distance is equal. row 1 in D, E, O and S are seated and all of them mukh facing south is. row 2 in F, A, R and M are seated and all of them mukh uttr of or is. such that, phli row of each person of mukh dusri row of kisi other person of or is. Only D, E of to the left is seated. Only R, A of to the left is seated. A and F of between Only one person is seated. D and O of between Only one person is seated. among the following which option one-dusre of opposite baithe Both persons ko represents?",
    option: [
        "E and R",
        "E and A",
        "E and M",
        "E and F"
    ],
    answer: "E and M"
},
{
    question: "given shrinkhla in question mark (?) of in place of kor aana chahie? 4 6 10 18 34 ?",
    option: [
        "67",
        "66",
        "68",
        "65"
    ],
    answer: "66"
},
{
    question: "sat person L, M, N, O, P, Q and R, one sidhi row in facing north are seated (prntu jruri not ki ve isi krm in baithe hon). M, P of immediately to the left is seated. O, Q of immediately to the left is seated. R, P of immediately to the right ttha L of immediately to the left is seated. N, L of immediately to the right ttha O of immediately to the left is seated. N of to the left se second position who is seated?",
    option: [
        "Q",
        "P",
        "M",
        "R"
    ],
    answer: "R"
},
{
    question: "letters of us snyojn of chyn ofjie jise given shrinkhla of blank spaceson in sequentially rkhne pr logically shrinkhla complete ho jaegi. _HKM O_NP RN_S UQT_ XTW_",
    option: [
        "JMRUX",
        "LMQUY",
        "JKRVX",
        "LKQVY"
    ],
    answer: "LKQVY"
},
{
    question: "a certain code language in, ‘BSGN’ ko ‘5-22-10-17’ of rup in code bddh kior jata is and ‘TAUE’ ko ‘23-4-24-8’ of rup in code bddh kior jata is. given code language in ‘PJDQ’ ko how code bddh kior jaega?",
    option: [
        "19-13-7-20",
        "15-11-5-19",
        "16-12-8-18",
        "17-13-6-20"
    ],
    answer: "19-13-7-20"
},
{
    question: "a certain code language in, ‘JAMB’ ko ‘5139’ of rup in code bddh kior jata is and ‘BALM’ ko ‘9521’ of rup in code bddh kior jata is. given code language in ‘L’ for code kor hoga?",
    option: [
        "1",
        "9",
        "2",
        "5"
    ],
    answer: "2"
},
{
    question: "given series in question mark (?) of in place of kor aana chahie? 208 190 163 127 82 ?",
    option: [
        "28",
        "12",
        "45",
        "54"
    ],
    answer: "28"
},
{
    question: "If word GRACEFUL of each letter ko English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "one",
        "none",
        "two",
        "three"
    ],
    answer: "none"
},
{
    question: "one nishchit code language in, 'X @ C' means is ki 'X, C of daughter is', 'X $ C' means is ki 'X, C of husband is', 'X = C' means is ki 'X, C of mother is' and 'X * C' means is ki 'X, C of father is'. If 'N @ E $ J @ S' is, then uprokt of on the basis of J of N what is the relationship with?",
    option: [
        "mother",
        "daughter's son",
        "sister",
        "sister's daughter"
    ],
    answer: "mother"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is? (Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "HJL",
        "NPR",
        "SUV",
        "FHJ"
    ],
    answer: "SUV"
},
{
    question: "kisi trk of on the basis of, ‘CLONE’ ko ‘BLUKU’ is written and ‘BOUND’ ko ‘AOAKT’ is written. following the same logic, ‘NICHE’ ko how likha ja skta is?",
    option: [
        "MIIEU",
        "NIIEU",
        "MIIET",
        "NIIET"
    ],
    answer: "MIIEU"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears, decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are. statement: All gaibiyn, divar are. All knkrit, divar are. All pul, divar are. conclusion: (I) Some pul, gaibiyn are. (II) Some knkrit, pul are.",
    option: [
        "Only conclusion (II) follows",
        "conclusion (I) and (II) Both follow",
        "Neither conclusion (I) and n hi (II) follows",
        "Only conclusion (I) follows"
    ],
    answer: "Neither conclusion (I) and n hi (II) follows"
},
{
    question: "English alphabetical order of on the basis of given shrinkhla in prshn-chihn (?) of in place of kor aana chahie? EHO HJP KLQ ? QPS",
    option: [
        "MNR",
        "MMR",
        "NNR",
        "NMR"
    ],
    answer: "NNR"
},
{
    question: "If ‘÷’ and ‘×’ ko prspr are interchanged ttha ‘+’ and ‘−’ ko prspr are interchanged, then following equation in question mark (?) of in place of kor will come? 50 − 9 ÷ 1 + 63 × 7 = ?",
    option: [
        "53",
        "52",
        "50",
        "51"
    ],
    answer: "50"
},
{
    question: "a certain code language in, ‘WEDS’ ko ‘3’ of rup in coded kior jata is and ‘MAIUFQX’ ko ‘6’ of rup in coded kior jata is. given code language in ‘GIQRBZLA’ ko how coded kior jaega?",
    option: [
        "7",
        "5",
        "8",
        "4"
    ],
    answer: "Cannot be determined"
},
{
    question: "one nishchit code language in, 'A + B' means is ki ‘A, B of daughter is’, 'A – B' means is ki ‘A, B of brother is’, 'A × B' means is ki ‘A, B of wife is’ and 'A ÷ B' means is ki ‘A, B of father is’. If ‘P + Q ÷ R × S – T’ is, then uprokt of on the basis of, P of T what is the relationship with?",
    option: [
        "brother's wife of man",
        "wife's mother",
        "brother's wife of sister",
        "wife of sister"
    ],
    answer: "Cannot be determined"
},
{
    question: "sat person A, B, C, D, E, F and G in a row facing north are seated (prntu jruri not ki ve isi krm in baithe hon). G and C row of endon pr are seated, lekin jruri not ki isi krm in baithe hon. F, G of immediately to the right and D of immediately to the left is seated. E, D of immediately to the right is seated. A, E of to the right second position is seated. B, C of to the left second position is seated. B and C of bich who is seated?",
    option: [
        "E",
        "D",
        "A",
        "F"
    ],
    answer: "Cannot be determined"
},
{
    question: "If word SCRAMBLE of each letter ko English vrnmala of krm in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "none",
        "two",
        "three",
        "one"
    ],
    answer: "one"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears, and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are. statement: All ofren, khrgosh are. All khrgosh, ofle are. All ofle, lalten are. conclusion: (I): All ofren, lalten are. (II): Some lalten, khrgosh are.",
    option: [
        "Only conclusion (I) follows.",
        "Only conclusion (II) follows.",
        "Neither conclusion (I) and n hi (II) follows.",
        "Both conclusion (I) and (II) follow."
    ],
    answer: "Both conclusion (I) and (II) follow."
},
{
    question: "English alphabetical order of on the basis of given series in question mark (?) of in place of kor will come? GID KMH OQL SUP ?",
    option: [
        "WYR",
        "VXS",
        "RWT",
        "WYT"
    ],
    answer: "Cannot be determined"
},
{
    question: "given series in question mark (?) of in place of kor aana chahie? 878 880 884 890 898 ?",
    option: [
        "904",
        "908",
        "906",
        "910"
    ],
    answer: "908"
},
{
    question: "English alphabetical order of on the basis of, DSXL in a certain way FUZN se snbndhit is. GMUB in the same way IOWD se snbndhit is. following the same logic, TFON among the following is related to which?",
    option: [
        "VHQP",
        "SENM",
        "SEQP",
        "VHNM"
    ],
    answer: "VHQP"
},
{
    question: "If ‘+’ and ‘−‘ ko prspr are interchanged ttha ‘×’ and ‘÷’ ko prspr are interchanged, then following equation in question mark (?) of in place of kor will come? 19 + 55 × 5 − 7 ÷ 3 =?",
    option: [
        "41",
        "33",
        "37",
        "29"
    ],
    answer: "29"
},
{
    question: "vh option chunie, jo aise letters represents krta ho, jinhen niche of blank spaceson in krvalueusar from left to right rkhne pr hi letters-series puri hogi. A _ _ F D _ S G F _ A _ _ F D A S _ _ D",
    option: [
        "SGADSGGF",
        "SGADGSDF",
        "SGADGSGF",
        "SGADAGGF"
    ],
    answer: "Cannot be determined"
},
{
    question: "a certain code language in, ‘MRGF’ ko ‘15-20-9-8’ of rup in coded kior jata is and ‘YDXB’ ko ‘27-6-26-4’ of rup in coded kior jata is. given code language in ‘JWAS’ for code kor hoga?",
    option: [
        "16-28-6-24",
        "12-25-3-21",
        "11-23-2-22",
        "14-27-5-23"
    ],
    answer: "12-25-3-21"
},
{
    question: "given series in question mark (?) of in place of kor aana chahie? 83 95 108 122 137 ?",
    option: [
        "148",
        "166",
        "153",
        "172"
    ],
    answer: "153"
},
{
    question: "aath person two sameantr rowyon in are seated jinin se each row in 4 person such that are seated ki adjacent persons of bich of distance is equal. row 1 in L, M, N and O are seated and all of them mukh facing south is. row 2 in P, Q, R and S are seated and all of them mukh uttr of or is. such that, phli row of each person of mukh dusri row of kisi other person of or is. Q, S of immediately to the right is seated. L and M of between Only two person are seated. S, L of opposite is seated. N of opposite baitha person, P of immediately to the left is seated. R row of kisi bhi end pr not is seated. among the following who O of opposite is seated?",
    option: [
        "S",
        "R",
        "Q",
        "P"
    ],
    answer: "Cannot be determined"
},
{
    question: "English alphabetical order of on the basis of DKSO one nishchit way se CIPK se snbndhit is. LAPZ immediately usi way KYMV se snbndhit is. following the same logic EYGN given optionon in se is related to which?",
    option: [
        "BVDK",
        "CVCI",
        "BWDK",
        "DWDJ"
    ],
    answer: "Cannot be determined"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is? (Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "KON",
        "MQO",
        "GKI",
        "SWU"
    ],
    answer: "Cannot be determined"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n419, 424, 430, 437, 445, ?",
    option: [
        "453",
        "456",
        "455",
        "454"
    ],
    answer: "454"
},
{
    question: "GD 34 in a certain way HE 24 se snbndhit is. in the same way CJ 12, DK 2 se snbndhit is. following the same logic XV 56 given optionon in se is related to which?",
    option: [
        "YW 46",
        "YW 47",
        "XW 46",
        "YX 46"
    ],
    answer: "YW 46"
},
{
    question: "given shrinkhla in prshnchihn (?) of in place of kor aana chahie?\n19, 19, 20, 24, 33, ?",
    option: [
        "51",
        "49",
        "48",
        "50"
    ],
    answer: "48"
},
{
    question: "a certain code language in, ‘LTRH’ ko ‘58’ of rup in coded kior jata is and ‘NBZW’ ko ‘65’ of rup in coded kior jata is. given code language in ‘GSCE’ ko how coded kior jaega?",
    option: [
        "40",
        "31",
        "34",
        "39"
    ],
    answer: "34"
},
{
    question: "English alphabetical order of on the basis of given shrinkhla in question mark (?) of in place of kor aana chahie?\nMAN, OAP, QAR, ?, UAV",
    option: [
        "SAT",
        "SBT",
        "AST",
        "STA"
    ],
    answer: "SAT"
},
{
    question: "sat person, G, H, I, J, K, L and M, in a row facing north are seated. (prntu jruri not ki ve isi krm in baithe hon). J of to the left Only G is seated. G and H of between Only four person are seated. L and I of between Only K is seated, and L, H of nearest neighbor not is.\nM and J of between how many persons are seated?",
    option: [
        "four",
        "one",
        "two",
        "three"
    ],
    answer: "three"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "LOU",
        "HKQ",
        "OIG",
        "BEK"
    ],
    answer: "OIG"
},
{
    question: "us option of select, jo un letters of representation krta is, jinhen niche given blank spaceson in from left to right sequentially rkhne pr letters shrinkhla ko complete krega.\n_ O _ K R _ _ J K _ E",
    option: [
        "RJEOO",
        "EJEOR",
        "OERJE",
        "JEORE"
    ],
    answer: "EJEOR"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\nstatement:\nAll slad, aipetaijr are.\nAll slad, bhojn are.\nAll bhojn, chavl are.\nconclusion:\n(I): All slad, chavl are.\n(II): Some bhojn, aipetaijr are.",
    option: [
        "Neither conclusion (I) and n hi (II) follows.",
        "Only conclusion (II) follows.",
        "Both conclusion (I) and (II) follow.",
        "Only conclusion (I) follows."
    ],
    answer: "Both conclusion (I) and (II) follow."
},
{
    question: "one nishchit code language in, ‘USJI’ ko ‘49’ of rup in and ‘DPTQ’ ko ‘51’ of rup in coded kior jata is. given bhasha in 'FAUL' for code kor hoga?",
    option: [
        "57",
        "62",
        "59",
        "68"
    ],
    answer: "59"
},
{
    question: "one nishchit code language in,\n'Z + H' means is ki 'Z, H of daughter is',\n'Z # H' means is ki 'Z, H of sister is',\n'Z @ H' means is ki 'Z, H of mother is' and\n'Z % H' means is ki 'Z, H of brother is'.\nIf 'E % L # R + B' is, then uprokt of on the basis of R, E se how snbndhit is?",
    option: [
        "mother",
        "daughter",
        "brother",
        "sister"
    ],
    answer: "mother"
},
{
    question: "AMBUSH English alphabetical order of on the basis of one nishchit way se FPIWTH se snbndhit is. LYPASE immediately usi way QBWCTE se snbndhit is. following the same logic, OCTANE given optionon in se is related to which?",
    option: [
        "TFBDME",
        "TFADME",
        "TFBCOF",
        "TFACOE"
    ],
    answer: "TFBDME"
},
{
    question: "E, F, G, H, K, L and N, one vrittaofr around a table mej of facing the center are seated (prntu jruri not ki ve isi krm in baithe hon). H of bayin or se ginne pr H and N of between Only three person are seated. E of dayin or se ginne pr L and E of between Only three person are seated. K, L of immediately dayin or is seated. F, E of sath-sath N of bhi nearest neighbor is.\nG of dayin or se second position who is seated?",
    option: [
        "N",
        "L",
        "E",
        "K"
    ],
    answer: "L"
},
{
    question: "If ‘+’ and ‘×’ ko prspr are interchanged ttha ‘−’ and ‘÷’ ko prspr are interchanged, then following equation in question mark (?) of in place of kor will come?\n28 − 4 × 12 ÷ 5 + 3 = ?",
    option: [
        "4",
        "1",
        "14",
        "9"
    ],
    answer: "9"
},
{
    question: "If word REVERSAL of each letter ko reverse English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "one",
        "three",
        "none",
        "two"
    ],
    answer: "none"
},
{
    question: "English alphabetical order of on the basis of, a certain triof se CGJK of snbndh IMPQ se is. in the same way HLQR of snbndh NRWX se is. same trk of anusrn krte hue, given optionon in se AEMO of snbndh kisse is?",
    option: [
        "DHPS",
        "OEAM",
        "GKSU",
        "ZDLN"
    ],
    answer: "GKSU"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n666, 676, 687, 699, 712, ?",
    option: [
        "726",
        "724",
        "722",
        "730"
    ],
    answer: "726"
},
{
    question: "given statementon and conclusionon ko dhorn se read. yh assuming ki statementon in given information is true, bhle hi vh savaluey rup se gyat tthyon se different appears, determine ki given conclusionon in se which conclusion, statementon of logically follows/krte are.\n\nstatement:\nAll gitofr, gayk are.\nSome gayk, lekhk are.\nNo lekhk, sngitofr not is.\n\nconclusion:\n(I): No gitofr, sngitofr not is.\n(II): Some lekhk, gitofr are.",
    option: [
        "conclusion (I) and (II) Both follow.",
        "Only conclusion (II) follows.",
        "Only conclusion (I) follows.",
        "Neither conclusion (I) and n hi (II) follows."
    ],
    answer: "Neither conclusion (I) and n hi (II) follows."
},
{
    question: "given series in question mark (?) of in place of kor aana chahie?\n173, 151, 130, 110, 91, ?",
    option: [
        "64",
        "78",
        "56",
        "73"
    ],
    answer: "73"
},
{
    question: "If word OPERATOR of each letter ko English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "two",
        "three",
        "one",
        "none"
    ],
    answer: "none"
},
{
    question: "one nishchit code language in,\n'U + S' means is ki 'U, S of daughter is',\n'U @ S' means is ki 'U, S of father is',\n'U * S' means is ki 'U, S of husband is' and\n'U # S' means is ki 'U, S of mother is'.\nIf 'E * L # B @ P' is, then uprokt of on the basis of B of E what is the relationship with?",
    option: [
        "son of son",
        "son",
        "brother of son",
        "brother"
    ],
    answer: "son"
},
{
    question: "English alphabetical order of on the basis of given series in question mark (?) of in place of kor aana chahie?\nBMY, DNW, ?, HPS",
    option: [
        "EOU",
        "FOU",
        "FOT",
        "FPU"
    ],
    answer: "FOU"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "NLO",
        "WTX",
        "VSW",
        "KHL"
    ],
    answer: "NLO"
},
{
    question: "chhh mitr, E, F, G, X, Y and Z, uttr of or abhimukh hokr in a row are seated (prntu jruri not ki ve isi krm in baithe hon). F of to the left koee mitr not is seated. F and E of bich Only four mitr are seated. Z of to the left Only three mitr are seated. X, G of immediately to the left is seated. Y and F of between kitne mitr are seated?",
    option: [
        "four",
        "one",
        "three",
        "two"
    ],
    answer: "three"
},
{
    question: "one nishchit code language in,\n'A + B' means is ki ‘A, B of mother is’,\n'A – B' means is ki ‘A, B of brother is’,\n'A × B' means is ki ‘A, B of wife is’ and\n'A ÷ B' means is ki ‘A, B of father is’.\nIf ‘Q × R – S ÷ T + U’ is, then uprokt of on the basis of, S of U what is the relationship with?",
    option: [
        "brother's wife",
        "daughter",
        "mother of husband",
        "mother of father"
    ],
    answer: "mother of father"
},
{
    question: "English alphabetical order of on the basis of SBFU one nishchit way se VDHX se snbndhit is. HOXA immediately usi way KQZD se snbndhit is. following the same logic ZEPI given optionon in se is related to which?",
    option: [
        "DISK",
        "CGRL",
        "BHTM",
        "DHSN"
    ],
    answer: "CGRL"
},
{
    question: "given statementon and conclusionon ko carefully prhie. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\nstatement:\nAll mrhm, ofn are.\nAll mrhm, pair are.\nSome pair, ungliorn are.\nconclusion:\n(I): Some ungliorn, mrhm are.\n(II): Some pair, ofn are.",
    option: [
        "conclusion (I) and conclusion (II) Both follow.",
        "Only conclusion (II) follows.",
        "Neither conclusion (I) and n hi conclusion (II) follows.",
        "Only conclusion (I) follows."
    ],
    answer: "Only conclusion (II) follows."
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "TTW",
        "ZYC",
        "EDH",
        "QPT"
    ],
    answer: "TTW"
},
{
    question: "If word SYMPHONY of each letter ko English alphabetical order of anusar arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "three",
        "one",
        "two",
        "four"
    ],
    answer: "one"
},
{
    question: "given series in question mark (?) of in place of kor aana chahie?\n35 43 53 65 79 ?",
    option: [
        "103",
        "112",
        "95",
        "107"
    ],
    answer: "95"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n101 111 122 134 147 ?",
    option: [
        "151",
        "158",
        "161",
        "156"
    ],
    answer: "161"
},
{
    question: "a certain code language in, ‘get the book’ ko ‘as pg nk’ of rup in coded kior jata is and ‘book is good’ ko ‘nk ml bt’ of rup in coded kior jata is. given code language in ‘book’ ko how coded kior jaega?",
    option: [
        "bt",
        "nk",
        "pg",
        "as"
    ],
    answer: "nk"
},
{
    question: "us correct option of chyn ofjie, jise niche given shrinkhla of blank spaceson in isi krm in rkhne pr shrinkhla logically puri ho jaegi.\n_DGIK_JLNJ_OQMP_TPS_",
    option: [
        "EGNRV",
        "EFNSV",
        "HGMRU",
        "HFMSU"
    ],
    answer: "EFNSV"
},
{
    question: "a certain code language in, ‘are you busy’ ko ‘mg rc tp' of rup in coded kior jata is and ‘you need rest’ ko ‘rc as bo’ of rup in coded kior jata is. given code language in ‘you’ ko how coded kior jaega?",
    option: [
        "mg",
        "rc",
        "bo",
        "as"
    ],
    answer: "rc"
},
{
    question: "angreji vrnanukrm of on the basis of given shrinkhla in prshn-chihn (?) of in place of kor will come?\nDKC ZGY ? RYQ NUM",
    option: [
        "VCU",
        "UDU",
        "VDU",
        "VCV"
    ],
    answer: "VCU"
},
{
    question: "If ‘+’ and ‘×‘ ko prspr are interchanged ttha ‘−’ and ‘÷’ ko prspr are interchanged, then following equation in question mark (?) of in place of kor will come?\n18 ÷ 90 − 5 × 11 + 2 =?",
    option: [
        "22",
        "18",
        "27",
        "15"
    ],
    answer: "22"
},
{
    question: "English alphabetical order of on the basis of in a certain way 'NEYG', 'PHBI' se snbndhit is. in the same way 'LAVS', 'NDYU' se snbndhit is. same trk of anusrn krte hue 'HCTB' among the following is related to which?",
    option: [
        "HEVB",
        "GEXD",
        "HGVC",
        "JFWD"
    ],
    answer: "JFWD"
},
{
    question: "aath person two sameantr rowyon in are seated jinin se each row in 4 person such that are seated ki adjacent persons of bich of distance is equal.\nrow 1 in - L, M, N and O are seated and all of them mukh facing south is.\nrow 2 in - P, Q, R and S are seated and all of them mukh uttr of or is.\nsuch that, phli row of each person of mukh dusri row of kisi other person of or is. N and M of between Only one person is seated. Q and P of between Only one person is seated. P of opposite baitha person row of baen se second position is seated. N, O of immediately baen and S of opposite is seated. O, P of opposite not is seated.\namong the following which option, one dusre of opposite Both persons ko represents?",
    option: [
        "L and P",
        "M and S",
        "N and R",
        "L and S"
    ],
    answer: "Verification required"
},

{
    question: "sat person E, F, G, H, K, L and N, one circular table of fouronor mej of facing the center are seated (prntu jruri not ki ve isi krm in baithe hon). G and K of between Only three person are seated. L, K of immediately to the left is seated. E of to the right koee not is seated. E and L of between Only two person are seated. N, H of immediately to the right is seated. F and N of between how many persons are seated?",
    option: [
        "four",
        "three",
        "one",
        "two"
    ],
    answer: "one"
},
{
    question: "given series in prshnchinh (?) of in place of kor aana chahie?\n22, 27, 37, 52, 72, ?",
    option: [
        "98",
        "94",
        "97",
        "100"
    ],
    answer: "97"
},
{
    question: "one nishchit code language in, 'HALF' ko '1059' of rup in coded kior jata is and 'LATH' ko '9750' of rup in coded kior jata is. usi code language in 'T' for code kor hoga?",
    option: [
        "9",
        "7",
        "0",
        "5"
    ],
    answer: "5"
},
{
    question: "D, L, P, Q and E one vrittaofr around a table facing the center are seated (prntu jruri not ki ve isi krm in baithe hon). Q and E Both of nearest neighbor P is. L, E of immediately to the left is seated. P and D Both of nearest neighbor Q is. D of nearest neighbor who-who are?",
    option: [
        "Q and P",
        "E and L",
        "Q and L",
        "P and E"
    ],
    answer: "PDF in given vivrn se Verification required"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\n\nstatement:\nAll rng, lal are.\nAll rng, ofle are.\nAll rng, pent are.\n\nconclusion:\n(I) All lal, pent are.\n(II) Some pent, ofle are.",
    option: [
        "Only conclusion (II) follows",
        "Only conclusion (I) follows",
        "conclusion (I) and (II) Both follow",
        "Neither conclusion (I) and n hi (II) follows"
    ],
    answer: "Only conclusion (II) follows"
},
{
    question: "MQTR English alphabetical order of on the basis of one nishchit way se SWZX se snbndhit is. QUXV immediately usi way WADB se snbndhit is. following the same logic, TXAY given optionon in se is related to which?",
    option: [
        "ZCFE",
        "ZDFE",
        "ZDGE",
        "ZEFN"
    ],
    answer: "ZDGE"
},
{
    question: "one nishchit code language in,\n‘A : B’ means is ki ‘A, B of wife is’,\n‘A ! B’ means is ki ‘A, B of brother is’,\n‘A < B’ means is ki ‘A, B of son is’ and\n‘A / B’ means is ki ‘A, B of father is’.\nIf 'S < H : A ! M / E’ is then S of E what is the relationship with?",
    option: [
        "father of brother of brother",
        "father of brother of daughter",
        "father of brother of son",
        "father of brother of mother"
    ],
    answer: "father of brother of son"
},
{
    question: "If 'P' means '×' is, 'Q' means '÷' is, 'R' means '−' is and 'S' means '+' is, then following equation in question mark ‘?’ of in place of kor will come?\n(35 P 2) Q 5 S (86 Q 2) R (3 P 15) S 90 = ?",
    option: [
        "126",
        "102",
        "98",
        "114"
    ],
    answer: "102"
},
{
    question: "If word ELECTRIC of each letter ko reverse English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "one",
        "two",
        "four",
        "three"
    ],
    answer: "PDF in given vivrn se Verification required"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n789, 790, 780, 782, 772, 775, 765, ?",
    option: [
        "769",
        "770",
        "768",
        "755"
    ],
    answer: "768"
},
{
    question: "MC 5 in a certain way PF 10 se snbndhit is. HQ 20 in the same way KT 25 se snbndhit is. same trk of anusrn krte hue, JW 30 among the following is related to which?",
    option: [
        "LY 35",
        "MZ 35",
        "KX 30",
        "MV 35"
    ],
    answer: "MZ 35"
},
{
    question: "English alphabetical order of on the basis of given series in question mark (?) of in place of kor will come?\nDGC, HKG, LOK, PSO, ?",
    option: [
        "UWS",
        "YXS",
        "ZYS",
        "TWS"
    ],
    answer: "TWS"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "HLN",
        "JNP",
        "NRV",
        "TXZ"
    ],
    answer: "NRV"
},
{
    question: "one nishchit code language in, 'GELS' ko '9872' of rup in coded kior jata is and 'SELF' ko '8276' of rup in coded kior jata is. usi code language in 'F' for code kor hoga?",
    option: [
        "6",
        "8",
        "7",
        "2"
    ],
    answer: "6"
},
{
    question: "us option of select, jo letters of us krm represents krta is, jise niche given blank spaceson in sequentially from left to right rkhe jane pr given letters shrinkhla puri ho jaegi.\nV _ _ Y Z V W X _ _ _ _ X Y Z V _ X _ Z",
    option: [
        "WXYZVWWY",
        "XWYZWVYW",
        "XWZYWVWY",
        "WXZYVWYW"
    ],
    answer: "WXYZVWWY"
},
{
    question: "If word TREASURE of each letter ko reverse English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "one",
        "two",
        "three",
        "none"
    ],
    answer: "none"
},
{
    question: "kisi trk of on the basis of, ‘CLICHE’ ko ‘IHJAMF’ is written and ‘KINDLY’ ko ‘QEOBQZ’ is written. following the same logic, ‘FUMBLE’ ko how likha ja skta is?",
    option: [
        "MQNZQE",
        "LQNZWG",
        "KQNZQE",
        "LQNZQF"
    ],
    answer: "LQNZQF"
},
{
    question: "given series in prshnchihn (?) of in place of kor aana chahie? 12 31 59 114 214 ?",
    option: [
        "307",
        "386",
        "368",
        "377"
    ],
    answer: "377"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears, decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are. statement: All top, baig are. Some baig, billiorn are. No billi, kutta not is. conclusion: (I) No top, kutta not is. (II) Some billiorn, top are.",
    option: [
        "Neither conclusion (I) and n hi (II) follows.",
        "Only conclusion (II) follows.",
        "conclusion (I) and (II), Both follow.",
        "Only conclusion (I) follows."
    ],
    answer: "Neither conclusion (I) and n hi (II) follows."
},
{
    question: "a certain code language in, ‘can I go’ ko ‘pr nt gs’ of rup in coded kior jata is and ‘he can swim’ ko ‘li ed pr’ of rup in coded kior jata is. given code language in ‘can’ ko how coded kior jaega?",
    option: [
        "nt",
        "ed",
        "gs",
        "pr"
    ],
    answer: "pr"
},
{
    question: "If ‘÷’ and ‘×’ ko prspr are interchanged, then following equation in question mark (?) of in place of kor will come? 11 ÷ 4 + 3 × 3 − 1 = ?",
    option: [
        "44",
        "42",
        "56",
        "36"
    ],
    answer: "44"
},
{
    question: "a certain code language in, ‘ZIYJ’ ko ‘38’ of rup in coded kior jata is and ‘PXBO’ ko ‘51’ of rup in coded kior jata is. given code language in ‘VTUC’ for code kor hoga?",
    option: [
        "56",
        "49",
        "51",
        "42"
    ],
    answer: "42"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie? 673 670 664 655 643 ?",
    option: [
        "632",
        "625",
        "628",
        "630"
    ],
    answer: "628"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is? (Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "EHN",
        "JMS",
        "WXQ",
        "KNT"
    ],
    answer: "WXQ"
},
{
    question: "sat person, A, B, L, M, N, S and T, in a row facing north are seated. (prntu jruri not ki ve isi krm in baithe hon). N of to the right koee not is seated. N and S of between Only three person are seated. S and T of between Only two person are seated. M, L of to the left third position is seated. A, L of immediately to the right is seated. B and T of between how many persons are seated?",
    option: [
        "four",
        "three",
        "one",
        "two"
    ],
    answer: "three"
},
{
    question: "P, R of sister is. R, Q of father is. S, Q of wife is. T, S of daughter is. P of T what is the relationship with?",
    option: [
        "father of father's mother",
        "father's mother of sister",
        "father's mother",
        "father of father of sister"
    ],
    answer: "father of father of sister"
},
{
    question: "us letters-snyojn of chyn ofjie, jise given series of blank spaceson in sequentially rkhne pr series logically complete ho jaegi. _NJOK_LQMR_SOTP_ QVR_",
    option: [
        "IPNUW",
        "IONVQ",
        "HOQVX",
        "HPQUX"
    ],
    answer: "IPNUW"
},
{
    question: "English alphabetical order of on the basis of given series in question mark (?) of in place of kor will come? CEA GIE KMI OQM ?",
    option: [
        "SVQ",
        "USQ",
        "SUQ",
        "RUQ"
    ],
    answer: "SUQ"
},
{
    question: "ER 32 in a certain way DS 34 se snbndhit is. in the same way XW 54, WX 56 se snbndhit is. following the same logic ZB 78 given optionon in se is related to which?",
    option: [
        "YA 78",
        "YA 79",
        "YC 80",
        "YA 80"
    ],
    answer: "YC 80"
},
{
    question: "sat person, E, F, G, H, K, L and N, uttr of or abhimukh hokr in a row are seated (prntu jruri not ki ve isi krm in baithe hon). H of to the left koee not is seated. H and F of bich Only four person are seated. N of to the right Only three person are seated. K, L of immediately to the left is seated. G, N of nearest neighbor not is. G of to the left chauthe in place of who is seated?",
    option: [
        "L",
        "N",
        "K",
        "E"
    ],
    answer: "L"
},
{
    question: "If ‘+’ and ‘−’ ko prspr are interchanged ttha ‘×’ and ‘÷’ ko prspr are interchanged, then following equation in question mark (?) of in place of kor will come? 48 × 3 − 16 + 6 ÷ 3 = ?",
    option: [
        "5",
        "14",
        "8",
        "11"
    ],
    answer: "14"
},
{
    question: "aath person two sameantr rowyon in are seated jinin se each row in 4 person such that are seated ki adjacent persons of bich of distance is equal. row 1 in G, L, O and F are seated and all of them mukh facing south is. row 2 in B, E, S and T are seated and all of them mukh uttr of or is. phli row of each person of mukh dusri row of kisi other person of or is. S of to the left No not is seated. L of to the left No not is seated. T and S of between Only one person is seated. E of opposite baitha person, L of to the right second position is seated. O, G of to the right second position is seated. among the following which option, rowyon of antim endon pr baithe Both persons ko represents?",
    option: [
        "O and T",
        "L and E",
        "G and S",
        "O and B"
    ],
    answer: "PDF in uttr-kunji uplbdh not is"
},
{
    question: "If word ROTCHES of each letter ko English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "three",
        "two",
        "none",
        "one"
    ],
    answer: "none"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears, decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are. statement: Some genden, khilaune are. All khilaune, plastik are. No plastik, jl not is. conclusion: (I) Some genden, plastik are. (II) No khilauna, jl not is.",
    option: [
        "Only conclusion (I) follows.",
        "conclusion (I) and (II), Both follow.",
        "Only conclusion (II) follows.",
        "Neither conclusion (I) and n hi (II) follows."
    ],
    answer: "conclusion (I) and (II), Both follow."
},
{
    question: "GFBE English alphabetical order of on the basis of one nishchit way se FEAD se snbndhit is. AZVY immediately usi way ZYUX se snbndhit is. following the same logic, CBXA given optionon in se is related to which?",
    option: [
        "BAVZ",
        "BBVD",
        "BZVZ",
        "BAWZ"
    ],
    answer: "BAWZ"
},
{
    question: "us correct option of chyn ofjie, jise given shrinkhla in isi krm in blank spaceson in bhrne pr shrinkhla logically complete ho jaegi. _KHLJ_IMKM_NLNK_ MOL_",
    option: [
        "FLGOT",
        "FKGQT",
        "IKJQP",
        "ILJOP"
    ],
    answer: "PDF in uttr-kunji uplbdh not is"
},
{
    question: "sat person E, F, G, H, K, L and M in a row facing north are seated, prntu jruri not ki ve isi krm in baithe hon. E and L of between Only three person are seated. F, L of immediately to the left is seated. M of to the right koee person not is seated. M and F of between Only two person are seated. H, G of immediately to the right is seated. K and H of bich how many persons are seated?",
    option: [
        "three",
        "two",
        "four",
        "one"
    ],
    answer: "PDF in uttr-kunji uplbdh not is"
},
{
    question: "one nishchit code language in, 'A + B' means is ki 'A, B of daughter is', 'A - B' means is ki 'A, B of brother is', 'A × B' means is ki 'A, B of sister is' and 'A ÷ B' means is ki 'A, B of son is'. If 'E + F × G - H ÷ I' is, then G of E what is the relationship with?",
    option: [
        "sister's daughter",
        "mother of sister",
        "mother of brother",
        "brother of daughter"
    ],
    answer: "mother of brother"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie? 650, 660, 669, 677, 684, ?",
    option: [
        "690",
        "692",
        "686",
        "688"
    ],
    answer: "690"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is? (Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "BDG",
        "MOQ",
        "QSV",
        "EGJ"
    ],
    answer: "MOQ"
},
{
    question: "English alphabetical order of on the basis of given shrinkhla in question mark (?) of in place of kor aana chahie? KRB, MTD, OVF, QXH, ?",
    option: [
        "SZK",
        "TZJ",
        "RZJ",
        "SZJ"
    ],
    answer: "SZJ"
},
{
    question: "kisi coded bhasha in, ‘TRIP’ ko ‘#@&$’ of rup in coded kior jata is and ‘PART’ ko ‘&^@#’ of rup in coded kior jata is. usi code language in A for code kor hoga?",
    option: [
        "@",
        "^",
        "$",
        "#"
    ],
    answer: "^"
},
{
    question: "a certain code language in, ‘NBSF’ ko ‘82’ of rup in coded kior jata is and ‘IMSR’ ko ‘118’ of rup in coded kior jata is. given code language in ‘AYLC’ for code kor hoga?",
    option: [
        "86",
        "94",
        "99",
        "82"
    ],
    answer: "82"
},
{
    question: "English alphabetical order of on the basis of, a certain triof se DGHK of snbndh ADEH se is. in the same way MQTU of snbndh JNQR se is. same trk of anusrn krte hue, given optionon in se HLQR of snbndh kisse is?",
    option: [
        "KOTU",
        "FJOP",
        "LHQR",
        "EINO"
    ],
    answer: "EINO"
},
{
    question: "given series in question mark (?) of in place of kor aana chahie? 18, 55, 89, 120, 148, ?",
    option: [
        "185",
        "173",
        "192",
        "168"
    ],
    answer: "173"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears, decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\n\nstatement:\nAll sorhi, pen are.\nAll pen, rbr are.\nNo rbr, sharpnr not is.\n\nconclusion:\n(I) No sorhi, sharpnr not is.\n(II) Some rbr, sorhi are.",
    option: [
        "conclusion (I) and (II) Both follow",
        "Only conclusion (I) follows",
        "Only conclusion (II) follows",
        "Neither conclusion (I) and n hi (II) follows"
    ],
    answer: "conclusion (I) and (II) Both follow"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n\n2, 3, 6, 11, 18, ?",
    option: [
        "26",
        "27",
        "28",
        "25"
    ],
    answer: "27"
},
{
    question: "P, R of brother is. R, Q of father is. S, Q of wife is. T, S of daughter is. P of T what is the relationship with?",
    option: [
        "father of father of brother",
        "father of brother",
        "father of father",
        "father"
    ],
    answer: "father of father of brother"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "ORV",
        "TUZ",
        "OPU",
        "KLQ"
    ],
    answer: "ORV"
},
{
    question: "English alphabetical order of on the basis of FROM one nishchit way se CPLK se snbndhit is. TJCE immediately usi way QHZC se snbndhit is. following the same logic, KDTY given optionon in se is related to which?",
    option: [
        "HQWB",
        "HQWE",
        "HBWQ",
        "HBQW"
    ],
    answer: "HBQW"
},
{
    question: "chhh mitr R, S, T, X, Y and Z one sidhi row in uttr of or abhimukh hokr are seated (prntu jruri not ki ve isi krm in baithe hon). Y of to the left Only two person are seated. Y and Z of bich Only two person are seated. Z and X of bich Only one person is seated. R, S of immediately to the left is seated. Y and S of bich how many persons are seated?",
    option: [
        "three",
        "two",
        "one bhi not",
        "one"
    ],
    answer: "one bhi not"
},
{
    question: "English alphabetical order of on the basis of given series in prshn-chihn (?) of in place of kor aana chahie?\n\nLMD MKG NIJ OGM ? QCS",
    option: [
        "QEP",
        "PEP",
        "PGP",
        "PFR"
    ],
    answer: "PEP"
},
{
    question: "English alphabetical order of on the basis of, GRSN in a certain way JUVQ se snbndhit is. KDEA in the same way NGHD se snbndhit is. following the same logic, BSTG among the following is related to which?",
    option: [
        "EVUH",
        "CTUH",
        "CTWJ",
        "EVWJ"
    ],
    answer: "EVWJ"
},
{
    question: "If ‘÷’ and ‘×’ ko prspr are interchanged ttha ‘+’ and ‘−’ ko prspr are interchanged, then following equation in question mark (?) of in place of kor will come?\n\n40 − 8 ÷ 1 + 72 × 8 = ?",
    option: [
        "38",
        "41",
        "40",
        "39"
    ],
    answer: "39"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n\n451, 450, 447, 442, ?, 426",
    option: [
        "435",
        "433",
        "437",
        "431"
    ],
    answer: "435"
},
{
    question: "letters of us snyojn of chyn ofjie, jise given series of blank spaceson in sequentially rkhne pr series logically complete ho jaegi.\n\n_HMGD_NHEJ_IFKP_ GLQ_",
    option: [
        "CIOJK",
        "CGOLK",
        "DIPJM",
        "DGPLM"
    ],
    answer: "CIOJK"
},
{
    question: "two sameantr rowyon in are seated jinin se each row in 4 person such that are seated ki adjacent persons of bich of distance is equal.\n\nrow 1 in - D, A, N and S are seated and all of them mukh facing south is.\nrow 2 in - M, O, R and K are seated and all of them mukh uttr of or is.\nsuch that, phli row of each person of mukh dusri row of kisi other person of or is.\nK of to the right koee not is seated. R and K of between Only two person are seated. O of opposite baitha person, K of opposite baithe person of to the right second position is seated. A, S of immediately to the right is seated. N, A of immediately to the right is seated and O of opposite not is. among the following which option one-dusre of opposite baithe Both persons ko represents?",
    option: [
        "D and M",
        "R and S",
        "A and O",
        "N and O"
    ],
    answer: "A and O"
},
{
    question: "a certain code language in, ‘FWYO’ ko ‘39’ of rup in code bddh kior jata is and ‘SIXR’ ko ‘38’ of rup in code bddh kior jata is. given code language in ‘LARZ’ ko how code bddh kior jaega?",
    option: [
        "51",
        "53",
        "47",
        "44"
    ],
    answer: "51"
},
{
    question: "a certain code language in, ‘cup of coffee’ ko ‘lh em ro’ of rup in code bddh kior jata is and ‘he loves coffee’ ko ‘em tf za’ of rup in code bddh kior jata is. given code language in ‘coffee’ ko how code bddh kior jaega?",
    option: [
        "lm",
        "em",
        "za",
        "ro"
    ],
    answer: "em"
},
{
    question: "If word QUARTOS of each letter ko English alphabetical order in arranged kior jae then kitne letters position of unchanged will remain?",
    option: [
        "two",
        "three",
        "none",
        "one"
    ],
    answer: "one"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "QJE",
        "GBW",
        "TOJ",
        "MHC"
    ],
    answer: "QJE"
},
{
    question: "one nishchit code language in, 'AGED' ko '7613' of rup in coded kior jata is and 'EARG' ko '1236' of rup in coded kior jata is. usi code language in 'R' for code kor hoga?",
    option: [
        "2",
        "3",
        "1",
        "6"
    ],
    answer: "2"
},
{
    question: "English alphabetical order of on the basis of given shrinkhla in question mark (?) of in place of kor aana chahie?\nAFQ BHR CJS DLT ?",
    option: [
        "FMU",
        "EOU",
        "ENU",
        "FNU"
    ],
    answer: "ENU"
},
{
    question: "chhh person, E, F, G, Q, R and S, uttr of or abhimukh hokr in a row are seated (prntu jruri not ki ve isi krm in baithe hon). R of to the right Only two person are seated. R and E of bich Only two person are seated. E and F of bich Only one person is seated. F, R of immediately to the left is seated. S, Q of immediately to the right is seated. Q and G of bich how many persons are seated?",
    option: [
        "three",
        "one",
        "two",
        "four"
    ],
    answer: "two"
},
{
    question: "English alphabetical order of on the basis of JILT one nishchit way se AZCK se snbndhit is. ZYBJ immediately usi way QPSA se snbndhit is. following the same logic, YXAI among the following kis option se snbndhit is?",
    option: [
        "PORZ",
        "PRZO",
        "POZR",
        "PRDE"
    ],
    answer: "PORZ"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears, and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\n\nstatement:\nSome nl, sabun are.\nSome nl, krim are.\nSome sabun, tel are.\n\nconclusion:\n(I) Some nl, tel are.\n(II) Some sabun, krim are.",
    option: [
        "Only conclusion (I) follows.",
        "Only conclusion (II) follows.",
        "conclusion (I) and (II) Both follow.",
        "Neither conclusion (I) and n hi (II) follows."
    ],
    answer: "Neither conclusion (I) and n hi (II) follows."
},
{
    question: "one nishchit code language in,\n'A + B' means is ki ‘A, B of mother is’,\n'A – B' means is ki ‘A, B of brother is’,\n'A × B' means is ki ‘A, B of wife is’ and\n'A ÷ B' means is ki ‘A, B of father is’.\nIf ‘K ÷ L × M – N + O’ is, then upryukt of on the basis of M of O what is the relationship with?",
    option: [
        "daughter of husband",
        "mother of husband",
        "wife of father",
        "mother of brother"
    ],
    answer: "mother of brother"
},
{
    question: "given shrinkhla in prshnvachk chinh (?) of in place of kor aana chahie?\n620 621 624 629 636 ?",
    option: [
        "644",
        "645",
        "646",
        "643"
    ],
    answer: "645"
},
{
    question: "English alphabetical order of on the basis of ILOR in a certain way UXAD se snbndhit is. in the same way CFIL, ORUX se snbndhit is. following the same logic WZCF, given optionon in se is related to which?",
    option: [
        "ILOR",
        "ILUY",
        "ILMK",
        "ILWR"
    ],
    answer: "ILOR"
},
{
    question: "chhh person, D, E, F, G, H and W, in a row facing north are seated (prntu jruri not ki ve isi krm in baithe hon). W and D of between Only two person are seated. G, D of immediately to the left is seated. H of to the right No not is seated. H and G of between Only two person are seated. E, G of immediately to the left is seated. F and E of between how many persons are seated?",
    option: [
        "one",
        "three",
        "four",
        "two"
    ],
    answer: "two"
},
{
    question: "given equation ko sntulit krne for kin two snkhoron ko aaps in bdla jana chahie?\n\\[9 \\times (34 - 15) + (105 \\div 7) + 28 + (13 \\times 4) = 218\\]\n(not: adla-bdli complete snkhor of honi chahie n ki given snkhor of alg-alg ankon of.)",
    option: [
        "28 and 15",
        "15 and 7",
        "34 and 28",
        "15 and 13"
    ],
    answer: "34 and 28"
},
{
    question: "If word ARMCHAIR of each letter ko reverse English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "four",
        "one",
        "two",
        "three"
    ],
    answer: "three"
},
{
    question: "one nishchit code language in, ‘ZXFGA’ ko ‘3’ of rup in and ‘BTGHASQR’ ko ‘6’ of rup in coded kior jata is. given bhasha in 'YWNERI' for code kor is?",
    option: [
        "5",
        "6",
        "4",
        "7"
    ],
    answer: "4"
},
{
    question: "us option of select, jo un letters of representation krta is, jinhen niche given blank spaceson in from left to right sequentially rkhne pr letters shrinkhla ko complete krega.\n_D_L_F_O L J",
    option: [
        "JDOF",
        "DJOF",
        "FOJD",
        "OJDF"
    ],
    answer: "FOJD"
},
{
    question: "given shrinkhla in prshnvachk chinh (?) of in place of kor aana chahie?\n1001 1000 998 995 991 ?",
    option: [
        "989",
        "986",
        "987",
        "984"
    ],
    answer: "986"
},
{
    question: "JGKH English alphabetical order of on the basis of one nishchit way se LIMJ se snbndhit is. VSWT immediately usi way XUYV se snbndhit is. following the same logic, WTXU given optionon in se is related to which?",
    option: [
        "YWYA",
        "YVZW",
        "YVYW",
        "YUYW"
    ],
    answer: "YVZW"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "HJE",
        "PRM",
        "GID",
        "DGB"
    ],
    answer: "DGB"
},
{
    question: "sat person, G, H, I, J, K, L and M, in a row facing north are seated. (prntu jruri not ki ve isi krm in baithe hon). H and G of between Only panch person are seated. L, G of immediately to the left is seated. L and I of between Only one person is seated. J, K of to the left kisi in place of lekin M of to the right kisi in place of is seated.\nJ of to the left how many persons are seated?",
    option: [
        "two",
        "three",
        "four",
        "one"
    ],
    answer: "srot se nishchit not"
},
{
    question: "If ‘+’ and ‘÷’ ko prspr are interchanged ttha ‘−’ and ‘×’ ko prspr are interchanged, then following equation in question mark (?) of in place of kor will come?\n18 ÷ 15 + 5 × 3 − 4 = ?",
    option: [
        "13",
        "5",
        "9",
        "1"
    ],
    answer: "9"
},
{
    question: "English alphabetical order of on the basis of LNPR in a certain way TVXZ se snbndhit is. in the same way FHJL, NPRT se snbndhit is. following the same logic ZBDF given optionon in se is related to which?",
    option: [
        "HJTY",
        "HJLN",
        "HJLP",
        "HJSD"
    ],
    answer: "HJLN"
},
{
    question: "us letters-snyojn of chyn ofjie, jise given shrinkhla of blank spaceson in sequentially rkhne pr shrinkhla logically complete ho jaegi.\n_ZVRU_TPSV_NQTP_ ORN_",
    option: [
        "YVQKI",
        "YXQLI",
        "WVRKJ",
        "WXRLJ"
    ],
    answer: "srot se nishchit not"
},
{
    question: "If word MODULES of each letter ko English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "two",
        "one",
        "none",
        "three"
    ],
    answer: "none"
},
{
    question: "P, R of brother is. R, Q of father is. S, Q of husband is. T, S of daughter is. P of T what is the relationship with?",
    option: [
        "mother of brother",
        "mother of father of brother",
        "mother of father of father",
        "father of brother"
    ],
    answer: "mother of father of brother"
},
{
    question: "given series in prshnchihn (?) of in place of kor aana chahie?\n80 100 122 146 172 200 ?",
    option: [
        "246",
        "250",
        "234",
        "230"
    ],
    answer: "230"
},
{
    question: "P, Q, R, S, T, U and V one vrittaofr around a table mej of facing the center are seated (prntu jruri not ki ve isi krm in baithe hon). P, R of immediately daen and Q of immediately baen is seated. S, U of immediately daen and T of immediately baen is seated. T, R of immediately baen is seated. Q and U of between who is seated?",
    option: [
        "P",
        "V",
        "T",
        "S"
    ],
    answer: "V"
},
{
    question: "given shrinkhla in question mark (?) of in place of kor aana chahie?\n11 14 24 41 65 ?",
    option: [
        "97",
        "95",
        "98",
        "96"
    ],
    answer: "96"
},
{
    question: "English alphabetical order of on the basis of given series in (?) of in place of kor will come?\nDMW, GPZ, JSC, MVF, ?",
    option: [
        "NZK",
        "MWJ",
        "QAL",
        "PYI"
    ],
    answer: "PYI"
},
{
    question: "given statementon and conclusionon ko carefully read. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\nstatement:\nAll draar, raik are.\nSome raik, kaibinet are.\nAll kaibinet, shelph are.\nconclusion:\n(I) All shelph, raik are.\n(II) Some shelph, draar are.",
    option: [
        "Only conclusion (II) follows",
        "Neither conclusion (I) and n hi (II) follows",
        "conclusion (I) and (II) Both follow",
        "Only conclusion (I) follows"
    ],
    answer: "Neither conclusion (I) and n hi (II) follows"
},
{
    question: "a certain code language in, ‘REST’ ko ‘3149’ of rup in coded kior jata is and ‘SEAT’ ko ‘4398’ of rup in coded kior jata is. given code language in ‘R’ ko how coded kior jaega?",
    option: [
        "9",
        "1",
        "3",
        "4"
    ],
    answer: "3"
},
{
    question: "one nishchit code language in, ‘TZKI’ ko ‘55’ of rup in and ‘QBYA’ ko ‘34’ of rup in coded kior jata is. given bhasha in ‘FWNP’ for code kor is?",
    option: [
        "48",
        "41",
        "52",
        "55"
    ],
    answer: "srot se nishchit not"
},
{
    question: "us option of chyn ofjie jo given wordon of usi snbndh ko represents, jo snbndh given word-yugm in is.\n\nbhart : nee dilli",
    option: [
        "nepal : ofthmandu",
        "phrans : rom",
        "japan : bijing",
        "chin : tokyo"
    ],
    answer: "nepal : ofthmandu"
},

{
    question: "following snkhor-yugmon in se vishm snkhor-yugm of chyn ofjie.",
    option: [
        "8 : 64",
        "9 : 81",
        "7 : 49",
        "6 : 48"
    ],
    answer: "6 : 48"
},

{
    question: "If kisi code language in BOOK ko CPPL is written, then usi code language in PEN ko will be written as?",
    option: [
        "QFO",
        "QEN",
        "PFN",
        "RFO"
    ],
    answer: "QFO"
},

{
    question: "among the following who-si snkhor given series in prshnvachk chinh (?) of in place of aaegi?\n\n2, 6, 12, 20, ?",
    option: [
        "28",
        "30",
        "32",
        "36"
    ],
    answer: "30"
},

{
    question: "If A = 1, B = 2, C = 3 ... is, then CAT word of value kor hoga?",
    option: [
        "24",
        "25",
        "26",
        "27"
    ],
    answer: "24"
},

{
    question: "given optionon in se snbndhit word of chyn ofjie.\n\nklm : likhna :: chaku : ?",
    option: [
        "oftna",
        "chlna",
        "dekhna",
        "pkdna"
    ],
    answer: "oftna"
},

{
    question: "one person uttr disha of or mukh krof khda is. vh phle to the right mudta is, phir to the left mudta is. ab usof mukh kis disha in is?",
    option: [
        "uttr",
        "dkshin",
        "purv",
        "pshchim"
    ],
    answer: "uttr"
},

{
    question: "among the following which option other se different is?",
    option: [
        "seb",
        "aam",
        "ofla",
        "gajr"
    ],
    answer: "gajr"
},

{
    question: "If MONDAY ko 123456 and DAY ko 456 is written, then MON ko will be written as?",
    option: [
        "123",
        "124",
        "126",
        "156"
    ],
    answer: "123"
},

{
    question: "series ko complete ofjie:\n\nAZ, BY, CX, ?",
    option: [
        "DW",
        "EV",
        "FU",
        "GV"
    ],
    answer: "DW"
},
{
    question: "among the following which option given other optionon se different is?",
    option: [
        "vritt",
        "tribhuj",
        "vrg",
        "kilomitr"
    ],
    answer: "kilomitr"
},

{
    question: "If kisi code language in DELHI ko EFMIJ is written, then usi code language in PATNA ko will be written as?",
    option: [
        "QBUOB",
        "QATOB",
        "PBUOB",
        "QCTOC"
    ],
    answer: "QBUOB"
},

{
    question: "following letter series in prshnvachk chinh (?) of in place of which letters will come?\n\nA, C, F, J, O, ?",
    option: [
        "U",
        "V",
        "W",
        "X"
    ],
    answer: "U"
},

{
    question: "one privar in P, Q of mother is. R, P of father is. S, Q of brother is. R of S what is the relationship with?",
    option: [
        "father",
        "dada",
        "nana",
        "brother"
    ],
    answer: "nana"
},

{
    question: "among the following which word given word of letters se not bnaor ja skta is?\n\nCOMPUTER",
    option: [
        "COMPUTE",
        "ROUTE",
        "MOTOR",
        "PURE"
    ],
    answer: "MOTOR"
},

{
    question: "If '+' means '-', '-' means '×', '×' means '÷' and '÷' means '+' is, then following expression of value gyat ofjie.\n\n8 + 4 - 2",
    option: [
        "0",
        "4",
        "16",
        "20"
    ],
    answer: "0"
},

{
    question: "given optionon in se snbndhit snkhor of chyn ofjie.\n\n5 : 25 :: 7 : ?",
    option: [
        "35",
        "42",
        "49",
        "56"
    ],
    answer: "49"
},

{
    question: "one ghdi in 3 bjkr 30 mint ho rhe are. ghnte and mint of suee of bich of kon kitna hoga?",
    option: [
        "75°",
        "90°",
        "105°",
        "120°"
    ],
    answer: "75°"
},

{
    question: "If All English letters ko vrnmala krm in ulta likha jae, then baen se 5van letters which hoga?",
    option: [
        "V",
        "W",
        "X",
        "Y"
    ],
    answer: "V"
},

{
    question: "among the following which option given snbndh ko complete krta is?\n\npkshi : ghonsla :: mdhumkkhi : ?",
    option: [
        "chhtta",
        "gupha",
        "pani",
        "jngl"
    ],
    answer: "chhtta"
},
{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "LPJ",
        "KOI",
        "OSM",
        "MTW"
    ],
    answer: "MTW"
},
{
    question: "English alphabetical order of on the basis of, RMDH in a certain way PKBF se snbndhit is. in the same way, SUGV, QSET se snbndhit is. same trk of anusrn krte hue, MXKD, given optionon in se is related to which?",
    option: [
        "OZMF",
        "KZIF",
        "OVMB",
        "KVIB"
    ],
    answer: "KVIB"
},
{
    question: "given series in question mark (?) of in place of kor aana chahie?\n77 86 104 140 212 ?",
    option: [
        "356",
        "358",
        "355",
        "357"
    ],
    answer: "356"
},
{
    question: "a certain code language in, ‘STAIR’ ko ‘#*&@$' of rup in code bddh kior jata is and ‘TEARS’ ko ‘*&^@#' of rup in code bddh kior jata is. given code language in ‘I’ for code kor hoga?",
    option: [
        "@",
        "#",
        "$",
        "^"
    ],
    answer: "$"
},
{
    question: "E, F, G, H, K, L and N, one vrittaofr around a table mej of facing the center are seated (prntu jruri not ki ve isi krm in baithe hon).\nG, K of bayin or third position is seated. N, H of bayin or second position is seated. L and N of bich Only K is seated. F, G of nearest neighbor not is.\nE of dayin or se ginne pr E and N of bich how many persons are seated?",
    option: [
        "two",
        "one",
        "three",
        "four"
    ],
    answer: "three"
},
{
    question: "If snkhor 5163748 in each vishm ank in 2 joda jae and each sm ank in se 2 ghtaor jae, then such that bni nee snkhor in uchchtm and nimntm ank of yog kor hoga?",
    option: [
        "9",
        "11",
        "14",
        "16"
    ],
    answer: "11"
},
{
    question: "one nishchit code language in,\n'A + B' means is ki 'A, B of mother is',\n'A – B' means is ki 'A, B of brother is',\n'A × B' means is ki 'A, B of wife is' and\n'A ÷ B' means is ki 'A, B of father is'.\nuprokt of on the basis of, If 'F + G × H ÷ I – J' is, then F of J what is the relationship with?",
    option: [
        "mother of husband",
        "daughter",
        "wife of father",
        "mother of mother"
    ],
    answer: "mother of husband"
},
{
    question: "us correct option of chyn ofjie, jise given series in isi krm in blank spaceson in bhrne pr series logically complete ho jaegi.\n_URVQ_SWRW_XSXU_ TYV_",
    option: [
        "PUTWZ",
        "OUSWX",
        "OVSYX",
        "PVTYZ"
    ],
    answer: "OVSYX"
},
{
    question: "given statementon and conclusionon ko carefully prhie. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\n\nstatement:\nAll kauve, chttan are.\nAll chttan, paudhe are.\nAll paudhe, phul are.\n\nconclusion:\n(I) All kauve, phul are.\n(II) Some phul, chttan are.",
    option: [
        "Only conclusion (I) follows.",
        "Both conclusion (I) and (II) follow.",
        "Only conclusion (II) follows.",
        "Neither conclusion (I) and n hi (II) follows."
    ],
    answer: "Only conclusion (I) follows."
},
{
    question: "a certain code language in, ‘SKIP’ ko ‘5269' of rup in code bddh kior jata is and ‘SILK' ko ‘2576’ of rup in code bddh kior jata is. given code language in ‘L' ko how code bddh kior jaega?",
    option: [
        "7",
        "5",
        "9",
        "2"
    ],
    answer: "7"
},
{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n9 25 53 157 317 ?",
    option: [
        "953",
        "949",
        "947",
        "951"
    ],
    answer: "949"
},
{
    question: "English alphabetical order of on the basis of given series in question mark (?) of in place of kor aana chahie?\nTEJ UDK VCL WBM ?",
    option: [
        "YAO",
        "XAO",
        "YAN",
        "XAN"
    ],
    answer: "XAO"
},
{
    question: "one nishchit code language in, ACEG ko 16 of rup in coded kior jata is and BOQT ko 54 of rup in coded kior jata is. given bhasha in UWIF ko kis rup in coded kior jaega?",
    option: [
        "59",
        "60",
        "57",
        "75"
    ],
    answer: "60"
},
{
    question: "aath person two sameantr rowyon in are seated jinin se each row in 4 person such that are seated ki adjacent persons of bich of distance is equal.\n\nrow 1 in - P, E, S and T are seated and all of them mukh facing south is.\nrow 2 in - M, O, L and D are seated and all of them mukh uttr of or is.\n\nsuch that, phli row of each person of mukh dusri row of kisi other person of or is.\n\nO, P of immediately to the right baithe person of opposite is seated. O and D of between Only one person is seated. L and D of between Only two person are seated. D, T of to the left second position baithe person of opposite is seated. E, S of to the right kisi in place of is seated.\n\namong the following which option, rowyon of antim endon pr baithe Both persons ko represents?",
    option: [
        "P and L",
        "S and O",
        "E and D",
        "T and O"
    ],
    answer: "T and O"
},
{
    question: "If word GRISTLE of each letter ko English alphabetical order in arranged kior jae then kitne letters position of unchanged will remain?",
    option: [
        "three",
        "none",
        "two",
        "one"
    ],
    answer: "one"
},


{
    question: "given statementon and conclusionon ko carefully prhie. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\n\nstatement:\nAll tal, sngit are.\nAll sngit, ly are.\nNo ly, dhun not is.\n\nconclusion:\n(I): No tal, dhun not is.\n(II): Some ly, tal are.",
    option: [
        "Only conclusion (II) follows.",
        "Neither conclusion (I) and n hi (II) follows.",
        "Both conclusion (I) and (II) follow.",
        "Only conclusion (I) follows."
    ],
    answer: "Both conclusion (I) and (II) follow."
},



{
    question: "sat person, E, F, G, H, K, L and N, in a row facing north are seated (prntu jruri not ki ve isi krm in baithe hon). L of to the left Only three person are seated. G of to the right Only F is seated. G and K of bich Only three person are seated. N, H of to the left, lekin E of to the right kisi in place of is seated. E and N of bich how many persons are seated?",
    option: [
        "two",
        "one",
        "three",
        "four"
    ],
    answer: "three"
},

{
    question: "one pase of phlkon pr I, S, H, N, A and T letters ankit are. niche one hi pase of two sthitiorn given are. phlk I of viprit which phlk is?",
    option: [
        "T",
        "S",
        "A",
        "N"
    ],
    answer: "N"
},

{
    question: "one nishchit code language in,\n'A + B' means is ki 'A, B of brother is',\n'A - B' means is ki 'A, B of sister is',\n'A x B' means is ki 'A, B of mother is' and\n'A ÷ B' means is ki 'A, B of father is'.\n\nIf 'M + N - O x P ÷ Q' is, then M of P what is the relationship with?",
    option: [
        "mother of brother",
        "brother of daughter",
        "father's mother",
        "sister's daughter"
    ],
    answer: "mother of brother"
},

{
    question: "given series in prshnchinh (?) of in place of kor aana chahie?\n\n7 17 25 53 61 ?",
    option: [
        "148",
        "152",
        "184",
        "125"
    ],
    answer: "125"
},

{
    question: "If ‘×’ and ‘+’ ko prspr are interchanged ttha ‘−’ and ‘÷’ ko prspr are interchanged, then following equation in question mark ‘(?)’ of in place of kor will come?\n\n51 ÷ 30 × 36 − 6 + 6 = ?",
    option: [
        "57",
        "55",
        "56",
        "58"
    ],
    answer: "57"
},

{
    question: "one pase of phlkon pr L, Z, I, D, N and A letters ankit are. niche one hi pase of two sthitiorn given are. phlk N of viprit which phlk is?",
    option: [
        "Z",
        "D",
        "A",
        "L"
    ],
    answer: "D"
},

{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "RWD",
        "FKR",
        "DIP",
        "JOD"
    ],
    answer: "JOD"
},


{
    question: "English alphabetical order of on the basis of UMCP one nishchit way se ZOEU se snbndhit is. QBXK immediately usi way VDZP se snbndhit is. following the same logic EJAH given optionon in se is related to which?",
    option: [
        "HNCL",
        "JLCM",
        "INBK",
        "HMDN"
    ],
    answer: "HNCL"
},

{
    question: "us option of select jo un letters ko nirupit krta is, jo niche given blank spaceson in from left to right sequentially rkhe jane pr letter series ko complete krenge.\n\ns t o l b _ _ _ _ o l b r _ s t _ _ _ r i",
    option: [
        "tolrisb",
        "bristol",
        "ristiolb",
        "sirbtol"
    ],
    answer: "bristol"
},

{
    question: "English alphabetical order of on the basis of given shrinkhla in prshn-chihn (?) of in place of kor aana chahie?\n\nZXV PNL FDB VTR ?",
    option: [
        "LJH",
        "RQP",
        "XVW",
        "JIG"
    ],
    answer: "LJH"
},

{
    question: "English alphabetical order of on the basis of BYVT in a certain way PMJH se snbndhit is. in the same way QNKI, EBYW se snbndhit is. following the same logic NKHF given optionon in se is related to which?",
    option: [
        "BXUT",
        "BYVT",
        "BYUT",
        "BZUY"
    ],
    answer: "BYUT"
},

{
    question: "aath person two sameantr rowyon in are seated jinin se each row in 4 person such that are seated ki adjacent persons of bich of distance is equal.\n\nrow 1 in - L, M, N and O are seated and all of them mukh facing south is.\nrow 2 in - P, Q, R and S are seated and all of them mukh uttr of or is.\n\nsuch that, phli row of each person of mukh dusri row of kisi other person of or is.\n\nS, R of baen se third position is seated. M of opposite baitha person, R of nearest neighbor is. O, M of daen kisi in place of is seated and vh P of opposite not is. L, N of daen se third position is seated.\n\namong the following who Q of opposite is seated?",
    option: [
        "O",
        "L",
        "N",
        "M"
    ],
    answer: "N"
},

{
    question: "a certain code language in, ‘SOUL’ ko ‘6415' of rup in code bddh kior jata is and ‘LOST' ko ‘6548’ of rup in code bddh kior jata is. given code language in ‘U' ko how code bddh kior jaega?",
    option: [
        "5",
        "1",
        "8",
        "4"
    ],
    answer: "5"
},

{
    question: "If word LIGHTER of each letter ko English alphabetical order in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "two",
        "none",
        "three",
        "one"
    ],
    answer: "one"
},

{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n\n450 460 471 483 496 ?",
    option: [
        "510",
        "508",
        "504",
        "500"
    ],
    answer: "510"
},

{
    question: "a certain code language in, ‘BASH’ ko ‘5431’ of rup in code bddh kior jata is and ‘HASE’ ko ‘1234’ of rup in code bddh kior jata is. given code language in ‘E’ for code kor hoga?",
    option: [
        "2",
        "1",
        "4",
        "3"
    ],
    answer: "3"
},
{
    question: "sat person A, B, C, D, E, F and G one sidhi row in uttr of or abhimukh hokr are seated (prntu jruri not ki ve isi krm in baithe hon). B, D of immediately to the right ttha F of immediately to the left is seated. A, E of immediately to the left ttha F of immediately to the right is seated. G, E of immediately to the right ttha C of immediately to the left is seated. row of to the left of end pr who is seated?",
    option: [
        "F",
        "E",
        "G",
        "D"
    ],
    answer: "F"
},

{
    question: "If ‘÷’ and ‘×’ ko prspr are interchanged ttha ‘+’ and ‘−’ ko prspr are interchanged, then following equation in question mark ‘(?)’ of in place of kor will come?\n45 − 2 ÷ 8 + 2 × 2 = ?",
    option: [
        "61",
        "62",
        "60",
        "59"
    ],
    answer: "60"
},

{
    question: "If word MIGHTY of each letter ko English vrnmala of krm in arranged kior jae, then kitne letters position of unchanged will remain?",
    option: [
        "three",
        "none",
        "two",
        "one"
    ],
    answer: "one"
},

{
    question: "a certain code language in, ‘DAYS’ ko ‘7812’ of rup in code bddh kior jata is and ‘AIDS’ ko ‘1237’ of rup in code bddh kior jata is. given code language in ‘I’ for code kor hoga?",
    option: [
        "7",
        "1",
        "3",
        "2"
    ],
    answer: "3"
},

{
    question: "given series in prshnvachk chinh (?) of in place of kor aana chahie?\n670 668 671 666 673 662 676 ?",
    option: [
        "680",
        "681",
        "654",
        "656"
    ],
    answer: "656"
},

{
    question: "CJ 16 in a certain way DF 9 se snbndhit is. FK 9 in the same way GG 2 se snbndhit is. same trk of anusrn krte hue, OO 2 among the following is related to which?",
    option: [
        "LP -4",
        "PK -5",
        "PR -2",
        "SP -6"
    ],
    answer: "LP -4"
},

{
    question: "NRNL English alphabetical order of on the basis of one nishchit way se IMIG se snbndhit is. PTPN immediately usi way KOKI se snbndhit is. following the same logic, DHDB given optionon in se is related to which?",
    option: [
        "YBXW",
        "YCXW",
        "YDXE",
        "YCYW"
    ],
    answer: "YBXW"
},

{
    question: "us letters-snyojn of chyn ofjie, jise given shrinkhla of blank spaceson in sequentially rkhne pr shrinkhla logically complete ho jaegi.\n_YUXT_SVRU_TPSO_NQM_",
    option: [
        "TXSUO",
        "VWQRP",
        "VXQUP",
        "TWSRO"
    ],
    answer: "TXSUO"
},

{
    question: "English alphabetical order of on the basis of given series in (?) of in place of kor will come?\nMTD, JRC, GPB, DNA, ?",
    option: [
        "CMX",
        "ALZ",
        "BMX",
        "CNY"
    ],
    answer: "CMX"
},

{
    "question": "G, H, I, J, K, L and M one vrittaofr around a table mej of facing the center are seated (prntu jruri not ki ve isi krm in baithe hon). K, L of immediately to the right is seated. K of to the left se ginne pr K and M of between Only three person are seated. L and H of between Only three person are seated. J, I of immediately to the right is seated. I of to the left se ginne pr L and I of between how many persons are seated?",
    "option": [
        "four",
        "one",
        "two",
        "three"
    ],
    "answer": "three"
},

{
    question: "one pase of phlkon pr letters T, F, H, A, R and E ankit are. given aakritiyon in one hi pase of two sthitiorn drshaee gee are. which phlk, phlk A of viprit is?",
    option: [
        "F",
        "E",
        "R",
        "H"
    ],
    answer: "H"
},

{
    question: "one nishchit code language in, ‘TDYI’ ko ‘116’ of rup in and ‘NRDP’ ko ‘104’ of rup in coded kior jata is. given bhasha in 'LAWG' lie code kor is?",
    option: [
        "72",
        "86",
        "82",
        "77"
    ],
    answer: "82"
},

{
    question: "given statementon and conclusionon ko carefully prhie. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\n\nstatement:\nAll spraut, dalen are.\nSome dalen, ramn are.\nSome ramn, pasta are.\n\nconclusion:\n(I) Some pasta, spraut are.\n(II) Some ramn, spraut are.",
    option: [
        "Only conclusion (I) follows.",
        "Only conclusion (II) follows.",
        "Both conclusion (I) and (II) follow.",
        "Neither conclusion (I) and n hi (II) follows."
    ],
    answer: "Neither conclusion (I) and n hi (II) follows."
},
{
    question: "given statementon and conclusionon ko carefully prhie. yh assuming ki statementon in given information is true, even if vh commonly known facts se different appears and decide ki given conclusionon in se which/who-se conclusion statementon of logically follows/krte are.\n\nstatement:\nkoee badam, khjur not is.\nkoee khjur, kishmish not is.\nkoee khjur, cheri not is.\n\nconclusion:\n(I): koee badam, kishmish not is.\n(II): Some cheri, kishmish are.",
    option: [
        "Only conclusion (I) follows.",
        "Only conclusion (II) follows.",
        "Neither conclusion (I) and n hi conclusion (II) follows.",
        "conclusion (I) and conclusion (II) Both follow."
    ],
    answer: "Only conclusion (I) follows."
},

{
    question: "English alphabetical order of on the basis of given series in (?) of in place of kor will come?\n\nOAS, QCU, SEW, UGY, ?",
    option: [
        "WHB",
        "VJB",
        "WIA",
        "VHZ"
    ],
    answer: "WHB"
},

{
    question: "If ‘÷’ and ‘×’ ko prspr are interchanged ttha ‘+’ and ‘−’ ko prspr are interchanged, then following equation in question mark ‘(?)’ of in place of kor will come?\n\n27 − 6 ÷ 4 + 24 × 3 = ?",
    option: [
        "43",
        "45",
        "44",
        "46"
    ],
    answer: "44"
},

{
    question: "English alphabetical order of on the basis of, following four letters-groupon three of one nishchit way se is equaln and such that one form a group. vh which letters-group is jo us group se snbndhit not is?\n\n(Note: odd letters-group, us letters-group in vynjnon/svron number of or unof in place of based not is.)",
    option: [
        "DBE",
        "GDH",
        "HEI",
        "QNR"
    ],
    answer: "QNR"
},

];

// =====================================================
// GENERAL KNOWLEDGE (20) - English
// =====================================================
const gkQuestions = [

{
    question: "Who has the power to dissolve the State Legislative Assembly?",
    option: [
        "Chief Minister",
        "Governor",
        "Chief Secretary",
        "Chief Justice of the High Court"
    ],
    answer: "Governor"
},

{
    question: "nusoochit jati r nusoochit jnjati desh (snshodhn) vidheyk, 2024 which state kee soochiyon men snshodhn krna chahta hai?",
    option: [
        "Uttar Pradesh",
        "Rajasthan",
        "Maharashtra",
        "Odisha"
    ],
    answer: "Odisha"
},

{
    question: "June 2024 men vaynad loksbha seet se who resigned?",
    option: [
        "Mallikarjun Kharge",
        "Priyanka Gandhi",
        "Rahul Gandhi",
        "Sonia Gandhi"
    ],
    answer: "Rahul Gandhi"
},

{
    question: "bharteey paira thleet parul prmar which khel se snbndh rkhtee hain?",
    option: [
        "Shooting",
        "Badminton",
        "Swimming",
        "Athletics"
    ],
    answer: "Badminton"
},

{
    question: "kpda dyog men kpdon ke shvetn (ya rng htane) ke li which rsayn ka pyog kiya jata hai?",
    option: [
        "Calcium oxychloride",
        "Calcium chloride",
        "Sodium carbonate",
        "Sodium hydrogen carbonate"
    ],
    answer: "Calcium oxychloride"
},

{
    question: "National Multidimensional Poverty Index 2023 ke nusar, Which of the following which state men the fastest reduction in poverty  hai?",
    option: [
        "Haryana",
        "Manipur",
        "Karnataka",
        "Uttar Pradesh"
    ],
    answer: "Uttar Pradesh"
},

{
    question: "Which of the following kaun-sa Veda mukhy roop se evil spirits r diseases ko door krne ke li magical spells and charms ka sngrh hai?",
    option: [
        "gVeda",
        "samVeda",
        "Atharvaveda",
        "yjurVeda"
    ],
    answer: "Atharvaveda"
},

{
    question: "Bangladesh ke Constitution ke nusar, Which of the following kaun-sa Bangladesh ka state religion hai?",
    option: [
        "Islam",
        "Christianity",
        "Hinduism",
        "Buddhism"
    ],
    answer: "Islam"
},

{
    question: "Which of the following which right ko right to life r personal liberty ke right ka k ghtk mana jata hai?",
    option: [
        "freedom of speech ka right",
        "equality ka right",
        "privacy ka right",
        "property ka right"
    ],
    answer: "privacy ka right"
},

{
    question: "Rani Machaiah which state kee k mmatht (Ummathat) lok nrtkee hain, jinhen kla (lok nty) ke kshetr men pdm shree 2023 prapt hu?",
    option: [
        "Kerala",
        "Telangana",
        "Karnataka",
        "Goa"
    ],
    answer: "Karnataka"
},

{
    question: "lrenshiym, k rasaynik ttv jise ktinads ke ntim sdsy ke roop men vrgeekt kiya gya hai, ka atomic number kitna hai?",
    option: [
        "108",
        "103",
        "101",
        "99"
    ],
    answer: "103"
},

{
    question: "‘Kalinga Festival’ which state men mnaya jata hai?",
    option: [
        "Karnataka",
        "Maharashtra",
        "Odisha",
        "Assam"
    ],
    answer: "Odisha"
},

{
    question: "1947 men jb bhart ko svtntrta prapt hu, tb british prdhanmntree kaun the?",
    option: [
        "Anthony Eden (Anthony Eden)",
        "Winston Churchill (Winston Churchill)",
        "Clement Attlee (Clement Attlee)",
        "Ramsay MacDonald (Ramsay MacDonald)"
    ],
    answer: "Clement Attlee (Clement Attlee)"
},

{
    question: "First Five-Year Plan (1951–1956) ka main objective kya tha?",
    option: [
        "rapid industrialisation",
        "agricultural development",
        "development of heavy industries",
        "privatisation of industries"
    ],
    answer: "agricultural development"
},

{
    question: "pnchvrsheey yojna ka Which of the following kaun-sa lkshy seedhe jnta se snbndhit hai?",
    option: [
        "equality",
        "self-reliance",
        "development",
        "modernisation"
    ],
    answer: "equality"
},

{
    question: "Nilgiri sbse puranee mountain ranges men se k hai yh kin teen rajyon ke tri-seema pr sthit hai?",
    option: [
        "gujrat, Rajasthan, Haryana",
        "Tamil Nadu, Kerala, Karnataka",
        "ttree yoopee, ttrakhnd, Himachal Pradesh",
        "Assam, nagalaind, tripura"
    ],
    answer: "Tamil Nadu, Kerala, Karnataka"
},

{
    question: "Which of the following kaun rock 'n' roll (Rock 'n' Roll) ko hindee dhunon men lane vale phle music director the?",
    option: [
        "Rahul Dev Burman",
        "Hariprasad Chaurasia",
        "Ravi Shankar",
        "Zakir Hussain"
    ],
    answer: "Rahul Dev Burman"
},

{
    question: "di g rngon men se kaun-sa joodo gred (judo grades) se snbndhit nheen hai?",
    option: [
        "Red",
        "White",
        "Pink",
        "Blue"
    ],
    answer: "Pink"
},

{
    question: "see phlee pnchvrsheey yojna kaun-see thee jise pooree hone se phle hee smapt kr diya gya r kyon?",
    option: [
        "dviteey yojna, rthik sthirta ke karn",
        "tteey yojna, praktik pdan ke karn",
        "satveen yojna, rajneetik snghrshon ke karn",
        "Fifth Plan, change in government ke karn"
    ],
    answer: "Fifth Plan, change in government ke karn"
},

{
    question: "pdm shree purskar se smmanit Shovana Narayan which bharteey shastreey nty shailee se snbndhit hain?",
    option: [
        "Manipuri",
        "Kathak",
        "Bharatanatyam",
        "Odissi"
    ],
    answer: "Kathak"
},
{
    question: "bhiny kla (nty r sngeet) se snbndhit prarnbhik 'grnth' 'Natyashastra' ko which shi dvara snklit kiya gya tha?",
    option: [
        "Bharata",
        "Valmiki",
        "saky",
        "Agastya"
    ],
    answer: "Bharata"
},
{
    question: "1968 men maiksikn srkar dvara whiche nkee koriyographee ke li svrnpdk se smmanit kiya gya tha?",
    option: [
        "Mrinalini Sarabhai",
        "Shovana Narayan",
        "rukminee rundel",
        "rekha"
    ],
    answer: "Mrinalini Sarabhai"
},
{
    question: "1906 men sthapit All-India Muslim League ke first president kaun the?",
    option: [
        "nvab sleemullah khan (Nawab Salimullah Khan)",
        "muhmmd lee jinna (Muhammad Ali Jinnah)",
        "sr sultan muhmmd shah (Sir Sultan Muhammad Shah)",
        "Aga Khan III (Aga Khan III)"
    ],
    answer: "Aga Khan III (Aga Khan III)"
},
{
    question: "basketball ke khel men, prtyek basket men 18” lnba ke sphed krdnet (white cord net) ke sath ___________ ntrik vyas valee k pressure-release NBA-numodit (pressure-release NBA-approved) metal safety ring hogee",
    option: [
        "20”",
        "19”",
        "18”",
        "17”"
    ],
    answer: "18”"
},
{
    question: "k smooth horizontal table pr d dooree ty krne valee m drvyman kee k pustk ke li, gravitational force ke dvara kiya gya work jnyat keeji",
    option: [
        "md cos θ",
        "md",
        "0",
        "mgd"
    ],
    answer: "0"
},
{
    question: "Which of the following whiche June 2024 men Minister of Tribal Affairs ke roop men niyukt kiya gya?",
    option: [
        "bhoopendr yadv (Bhupender Yadav)",
        "Jual Oram (Jual Oram)",
        "prhlad joshee (Pralhad Joshi)",
        "shvinee vaishnv (Ashwini Vaishnaw)"
    ],
    answer: "Jual Oram (Jual Oram)"
},
{
    question: "spring festival, Ali-Aye-Ligang (Ali-Aye-Ligang), bharteey rajy _________ men phagun mheene ke phle budhvar ko mnaya jata hai",
    option: [
        "Assam",
        "Goa",
        "Kerala",
        "Himachal Pradesh"
    ],
    answer: "Assam"
},
{
    question: "bharteey shastreey sngeetkar r talvadk yella venkteshvr rav (Yella Venkateswara Rao) dvara kaun-sa sngeet vadyyntr bjaya jata hai?",
    option: [
        "nadsvrn",
        "Mridangam",
        "Ghatam",
        "Pakhawaj"
    ],
    answer: "Mridangam"
},
{
    question: "vh sbse prsiddh shk shask kaun tha jo girnar men pne shiRedekh ke li jana jata hai?",
    option: [
        "minandr",
        "demetriys",
        "Rudradaman",
        "rudrbhooti"
    ],
    answer: "Rudradaman"
},
{
    question: "Which of the following kaun-sa vh prmukh kark hai jisne globalisation ko sugm bnaya hai?",
    option: [
        "bdhe hu tairiph r vyapar vrodh",
        "rapid technological improvement",
        "bhurashtreey nigmon men giravt",
        "lgavvadee neetiyan"
    ],
    answer: "rapid technological improvement"
},
{
    question: "Which of the following which pnchvrsheey yojna ka ddeshy self-reliance prapt krna ttha 'sthirta ke sath vddhi' krna tha?",
    option: [
        "Fourth Plan",
        "satveen yojna",
        "chhthee yojna",
        "dviteey yojna"
    ],
    answer: "Fourth Plan"
},
{
    question: "September 2024 tk kee sthiti ke nusar, Chief Minister of Tamil Nadu kaun hain?",
    option: [
        "nayb sinh sainee",
        "bhoopendr ptel",
        "M. K. Stalin",
        "hemnt soren"
    ],
    answer: "M. K. Stalin"
},
{
    question: "Which of the following who Fit India Freedom Run (Fit India Freedom Run) 2.0 ka rashtrvyapee workkrm lnch kiya?",
    option: [
        "nrendr modee",
        "Anurag Thakur",
        "mit shah",
        "draupdee murmoo"
    ],
    answer: "Anurag Thakur"
},
{
    question: "mchchhron dvara phailne vale s vayrs ka nam bta jo inflammation of the brain (inflammation) tpnn krta hai?",
    option: [
        "limphaitik phaleriyasis (Lymphatic filariasis)",
        "peet jvr vayrs (Yellow fever virus)",
        "phransisela tularensis (Francisella tularensis)",
        "Japanese encephalitis (Japanese encephalitis)"
    ],
    answer: "Japanese encephalitis (Japanese encephalitis)"
},
{
    question: "Which of the following kaun-sa, bharteey rthvyvstha ke tertiary sector (tertiary sector) se snbndhit hai?",
    option: [
        "vinirman",
        "public administration",
        "vidyut poorti sevan",
        "vanikee"
    ],
    answer: "public administration"
},
{
    question: "2011 kee jngnna ke nusar, Which of the following which migration stream (stream of migration) ka prtisht sbse dhik hai?",
    option: [
        "shhree se grameen",
        "shhree se shhree",
        "grameen se shhree",
        "rural to rural"
    ],
    answer: "rural to rural"
},
{
    question: "bharteey Constitution ke which snshodhn ke ntrgt property ke right ko Fundamental Rightson kee soochee se hta diya gya?",
    option: [
        "52ven snshodhn",
        "42ven snshodhn",
        "44th Amendment",
        "61ven snshodhn"
    ],
    answer: "44th Amendment"
},
{
    question: "dhivehee, bhart ke which pdosee desh kee rajbhasha (official language) hai?",
    option: [
        "Maldives",
        "shreelnka",
        "myanmar",
        "bhootan"
    ],
    answer: "Maldives"
},
{
    question: "Which of the following kya, bhart men whichee rajy ke Governor kee shkti ke ntrgt nheen ta hai?",
    option: [
        "vidhayee shkti (Legislative power)",
        "workpalk shkti (Executive power)",
        "nivary shkti (Obligatory power)",
        "discretionary power (Discretionary power)"
    ],
    answer: "nivary shkti (Obligatory power)"
},
{
    question: "Which of the following kaun-sa sbse khara jl nikay hai jo poorv men jrdn r pshchim men jral kee seema se lga hu hai?",
    option: [
        "don jun pnd (Don Juan Pond)",
        "gret salt lek (Great Salt Lake)",
        "Dead Sea (Dead Sea)",
        "vishv mhasagr (World Ocean)"
    ],
    answer: "Dead Sea (Dead Sea)"
},
{
    question: "sarvjnik preeksha (nuchit sadhnon kee roktham) vidheyk, 2024 ke ntrgt preeksha ke dauran nuchit vyvhar ya pradh men shamil vyktiyon ke li nirdisht jurmana rashi kitnee hai?",
    option: [
        "k lakh rupye tk",
        "up to ten lakh rupees",
        "gyarh lakh rupye tk",
        "bees lakh rupye tk"
    ],
    answer: "up to ten lakh rupees"
},
{
    question: "varshik mamllpurm nty mhotsv (Mamallapuram Dance Festival), jismen bharteey shastreey nty Bharatanatyam, kuchipudee, Kathak, mohineettm, Odissi r Kathaklee ke prdrshn shamil hain, _____ men yojit kiya jata hai",
    option: [
        "Karnataka",
        "Maharashtra",
        "ndhr prdesh",
        "Tamil Nadu"
    ],
    answer: "Tamil Nadu"
},
{
    question: "makl phairade ne vidyut transphrmr r jnretr ke peechhe ke siddhant, electromagnetic induction kee khoj kb kee thee?",
    option: [
        "1875",
        "1853",
        "1820",
        "1831"
    ],
    answer: "1831"
},
{
    question: "bharteey Constitution ke bhag III men whichka llekh kiya gya hai?",
    option: [
        "Fundamental Rights",
        "rajy ke neeti nirdeshk siddhant",
        "nagrikta",
        "maulik krtvy"
    ],
    answer: "Fundamental Rights"
},
{
    question: "2 ktoobr 2022 ko gandhee jyntee ke roop men mhatma gandhee kee ___________ jyntee mna g",
    option: [
        "153veen",
        "155veen",
        "152veen",
        "150veen"
    ],
    answer: "153veen"
},
{
    question: "pthvee pr do sbse dhik vrsha vale sthan kaun-se hain jhan k vrsh men 1,080 cm se dhik vrsha hotee hai?",
    option: [
        "paseeghat r gumbe",
        "cherapoonjee r mausinram",
        "gngtok r nbolee",
        "mhableshvr r neriyamnglm"
    ],
    answer: "cherapoonjee r mausinram"
},
{
    question: "hrit kranti, rthvyvstha ke which kshetr se snbndhit hai?",
    option: [
        "kshi kshetr",
        "vitteey kshetr",
        "dyogik kshetr",
        "seva kshetr"
    ],
    answer: "kshi kshetr"
},
{
    question: "Which of the following kaun-sa/kaun-se vaky sty hai/hain? i. vitt vrsh 2022-23 ke li bharteey kshi kshetr kee numanit vddhi dr (projected growth rate) 5.5% thee ii. vitteey vrsh 2021-22 ke dauran, bhart ka kshi niryat lgbhg 50.2 biliyn merikee dlr tk phunch gya iii. khreeph vipnn seejn (Kharif Marketing Season) 2021-22 ke dauran, bhart men 581.7 lakh meetrik tn chavl sngrhit kiya (procured) gya",
    option: [
        "kevl i",
        "kevl ii r iii",
        "kevl ii",
        "kevl i r ii"
    ],
    answer: "kevl ii r iii"
},
{
    question: "bhart men phle shiya khel khan yojit kiye gye the?",
    option: [
        "ptiyala",
        "chenn",
        "New Delhi",
        "gvaliyr"
    ],
    answer: "New Delhi"
},
{
    question: "bhart srkar dhiniym, 1919 ka dhar bnee sipharishon ke peechhe prmukh vykti kaun-kaun the?",
    option: [
        "lrd linlithgo r dvin montegoo",
        "lrd rvin r dvin montegoo",
        "lrd chemsphord r dvin montegoo",
        "lrd krjn r dvin montegoo"
    ],
    answer: "lrd chemsphord r dvin montegoo"
},
{
    question: "bharteey Constitution ke kaun-se nuchchhed sngh lok seva yog se snbndhit hain?",
    option: [
        "nuchchhed 330 se 338",
        "Articles 315 to 323",
        "nuchchhed 300 se 320",
        "nuchchhed 210 se 219"
    ],
    answer: "Articles 315 to 323"
},
{
    question: "vh k Karnataka prsiddh gayika theen, jo yoorop, ttree merika r snyukt rashtr mhasbha men ga theen vh kaun thee?",
    option: [
        "mdurai shnmukhvdivu subbulkshmee",
        "sha bhosle",
        "begm khtr",
        "lta mngeshkr"
    ],
    answer: "mdurai shnmukhvdivu subbulkshmee"
},
{
    question: "Which of the following kaun-sa khel, 11ven shiya khel beejing 1990 men k vidha (discipline) ke roop men shamil kiya gya tha?",
    option: [
        "vleebl",
        "skvash",
        "kbddee",
        "kushtee"
    ],
    answer: "kbddee"
},
{
    question: "bhart ke National Multidimensional Poverty Index: k prgti smeeksha 2023 ke nusar, Which of the following which kendr shasit prdesh men bhuyamee greebon ka prtisht sbse dhik hai?",
    option: [
        "dadra r ngr hvelee ttha dmn r deev",
        "dillee",
        "puducheree",
        "chndeegdh"
    ],
    answer: "dadra r ngr hvelee ttha dmn r deev"
},
{
    question: "gst 2024 men, srvochch nyayaly ko lvida khne valee mhila kaun hai, jo Telangana rajy ke li chch nyayaly kee prthm mhila mukhy nyayadheesh bneen r bharteey srvochch nyayaly men pdonnt hone valee nauveen mhila thee?",
    option: [
        "hima kohlee",
        "kuttee rameshvrm",
        "diti kpoor",
        "sha yyr"
    ],
    answer: "hima kohlee"
},
{
    question: "prdhanmntree rojgar protsahn yojna _______ se kriyanvit kee ja rhee hai",
    option: [
        "2017",
        "2016",
        "2015",
        "2014"
    ],
    answer: "2016"
},
{
    question: "Which of the following which paudhe ko vishesh share ka pyog krke deevaron pr chdhaya ja skta hai?",
    option: [
        "kddoo ke paudhe",
        "soorjmukhee ke paudhe",
        "gulab ke paudhe",
        "neenboo ke paudhe"
    ],
    answer: "kddoo ke paudhe"
},
{
    question: "teesree pnchvrsheey yojna (1961-1966) men llekh kee g prmukh rthik chunautee kya thee?",
    option: [
        "yuddhkaleen vyy r snsadhn vntn",
        "seva kshetr ka rnbh krna",
        "dijitl praudyogikee nnti pr dhyan kendrit krna",
        "rthvyvstha ka dareekrn"
    ],
    answer: "yuddhkaleen vyy r snsadhn vntn"
},
{
    question: "nbeepeedblyoo (NBPW), jise lauh yug ka sbse vyapk mdbhandkrm (pottery) mana ja skta hai, ka poornroop kya hai?",
    option: [
        "nrdrn blaik plishd veyr (Northern Black Polished Ware)",
        "nrdrn bloo plishd veyr (Northern Blue Polished Ware)",
        "nrdrn bronj plishd veyr (Northern Bronze Polished Ware)",
        "nrdrn bran plishd veyr (Northern Brown Polished Ware)"
    ],
    answer: "nrdrn blaik plishd veyr (Northern Black Polished Ware)"
},
{
    question: "sngeet kadmee (Music Academy) se prtishthit naty klanidhi purskar se smmanit lkshmee vishvnathn which nty shailee ke li prsiddh thee?",
    option: [
        "Kathak",
        "Bharatanatyam",
        "Odissi",
        "kuchipudee"
    ],
    answer: "Bharatanatyam"
},
{
    question: "hrit kranti ke dauran kaun-see n kshi pddhti shuroo kee g thee?",
    option: [
        "parnprik beejon ka pyog",
        "jaivik khetee kee vidhiyan",
        "dhunik sincha tkneekon ka pyog",
        "pshushrm pr nirBharataa"
    ],
    answer: "dhunik sincha tkneekon ka pyog"
},
{
    question: "gujrat ke kchchh men rn tsv which mah men shuroo hota hai?",
    option: [
        "nvnbr",
        "prail",
        "phrvree",
        "m"
    ],
    answer: "nvnbr"
},
{
    question: "2011 kee jngnna ke nusar which state men purush vn mhila sakshrta dr men ntr sbse dhik hai?",
    option: [
        "jharkhnd",
        "mdhy prdesh",
        "Rajasthan",
        "bihar"
    ],
    answer: "Rajasthan"
},
{
    question: "prdhanmntree kee dhykshta men kendreey mntrimndl ne ktoobr 2024 men sndharneey kshi ko bdhava dene r self-reliance ke li khady surksha hasil krne ke li which yojna ko sveekti dee?",
    option: [
        "tilhn r pam yl pr rashtreey mishn",
        "peem rashtreey agricultural development yojna",
        "rashtreey kshi vistar vn praudyogikee mishn",
        "rashtreey khady surksha mishn"
    ],
    answer: "peem rashtreey agricultural development yojna"
},
{
    question: "jngnna 2011 ke nusar, Which of the following which ttree rajy kee sakshrta dr sbse dhik hai?",
    option: [
        "pnjab",
        "Haryana",
        "ttrakhnd",
        "Himachal Pradesh"
    ],
    answer: "Himachal Pradesh"
},
{
    question: "jl men nilmbit thos pdarthon kee bdhee hu sandrta ttha nka tlee pr jma hona, jhan ve vanchhneey hote hain, which prkar ka jl prdooshn tpnn krta hai?",
    option: [
        "poshk ttv prdooshn (Nutrient pollution)",
        "gadn (Siltation)",
        "sookshmjeeveey prdooshn (Microbiological pollution)",
        "tapeey prdooshn (Thermal pollution)"
    ],
    answer: "gadn (Siltation)"
},
{
    question: "bhart srkar dhiniym, 1935 ne sngh (kendreey srkar) r pranton ke beech shktiyon ke vibhajn kee kitnee soochiyan prdan keen?",
    option: [
        "k soochee",
        "do soochiyan",
        "teen soochiyan",
        "char soochiyan"
    ],
    answer: "teen soochiyan"
},
{
    question: "bhart men prmukh phslon ke li nyoontm smrthn mooly (MSP) ke snbndh men 2018-19 ke kendreey bjt men kaun-sa poorvnirdharit siddhant ghoshit kiya gya tha?",
    option: [
        "tpadn lagt ka doguna",
        "tpadn lagt ka dedh guna",
        "tpadn lagt se 50 prtisht km",
        "tpadn lagt ke brabr"
    ],
    answer: "tpadn lagt ka dedh guna"
},
{
    question: "bhart ka mhanyayvadee _________ ko kanoonee slah prdan krta hai",
    option: [
        "rajy ke Governor",
        "rajy ke Chief Minister",
        "bhart ke mukhy nyayadheesh",
        "sngh srkar"
    ],
    answer: "sngh srkar"
},
{
    question: "ntrrashtreey hkee maich men maidan kee mank chauda kitnee hotee hai?",
    option: [
        "45 m",
        "60 m",
        "50 m",
        "55 m"
    ],
    answer: "55 m"
},
{
    question: "vishnupuran ke nusar, chndrgupt maury kee mata kaun thee?",
    option: [
        "nnd raja kee ptnee",
        "mura, k shikaree kee putree",
        "k yoonanee kuleen mhila",
        "subhdrangee, k brahmn kee putree"
    ],
    answer: "mura, k shikaree kee putree"
},
{
    question: "\"tamd t (Timed Out)” niym which khel men lagoo hota hai?",
    option: [
        "Badminton",
        "kushtee",
        "joodo",
        "kriket"
    ],
    answer: "kriket"
},
{
    question: "kshna jile ke kuchelapurm ganv men which shastreey nty shailee kee tptti hu?",
    option: [
        "kuchipudee",
        "Kathaklee",
        "Kathak",
        "mohineettm"
    ],
    answer: "kuchipudee"
},
{
    question: "pdm shree mukund nayk ko Which of the following which shrenee ke li sngeet natk kadmee purskar 2017 se smmanit kiya gya tha?",
    option: [
        "kvvalee",
        "Karnataka sngeet",
        "lok sngeet",
        "hindustanee shastreey sngeet"
    ],
    answer: "lok sngeet"
},
{
    question: "bhart men First Five-Year Plan kb shuroo kee g thee?",
    option: [
        "1951",
        "1950",
        "1956",
        "1947"
    ],
    answer: "1951"
},
{
    question: "Which of the following kya samanyth ndee ke pree bhag men bnta hai?",
    option: [
        "badhprvn kshetr (Floodplains)",
        "gokhur jheel (Oxbow lake)",
        "tng ghatee (Gorges)",
        "visrp (Meanders)"
    ],
    answer: "tng ghatee (Gorges)"
},
{
    question: "bhart kee rashtrpti, draupdee murmoo phle ____________ kee Governor theen",
    option: [
        "Assam",
        "jharkhnd",
        "Uttar Pradesh",
        "Odisha"
    ],
    answer: "jharkhnd"
},
{
    question: "bharteey rashtreey kangres ke which dhiveshn ke dauran bhart chhodo prstav parit kiya gya tha?",
    option: [
        "klktta dhiveshn (Calcutta Session)",
        "krachee dhiveshn (Karachi Session)",
        "lahaur dhiveshn (Lahore Session)",
        "bmb dhiveshn (Bombay Session)"
    ],
    answer: "bmb dhiveshn (Bombay Session)"
},
{
    question: "vilebrord snel (Willebrod Snell) ka kaun-sa niym vijnyan men sbse mhtvpoorn yogdan hai?",
    option: [
        "gti ka niym",
        "pvrtn ka niym",
        "shyanta ka niym",
        "vidyut-pghty ka niym"
    ],
    answer: "pvrtn ka niym"
},
{
    question: "raygdh drbar ke kmatr jeevit 87-vrsheey Kathak nrtk ramRed breth (Ramlal Bareth) ko 2024 men Which of the following which purskar se smmanit kiya gya?",
    option: [
        "pdm shree",
        "pdm vibhooshn",
        "pdm bhooshn",
        "sahity kadmee purskar"
    ],
    answer: "pdm shree"
},
{
    question: "march 2023 men which mmt-ht (Ummathat) lok nty klakar ko pdm shree se smmanit kiya gya?",
    option: [
        "ranee mchhaiya (Rani Machaiah)",
        "subhdra devee (Subhadra Devi)",
        "vanee jyram (Vani Jairam)",
        "sumn klyanpur (Suman Kalyanpur)"
    ],
    answer: "ranee mchhaiya (Rani Machaiah)"
},
{
    question: "Which of the following which kendreey mntraly ne phrvree 2024 men snsd men jl (prdooshn kee roktham vn niyntrn) snshodhn vidheyk, 2024 prstut kiya?",
    option: [
        "nagr vimann mntraly",
        "kshi vn whichan klyan mntraly",
        "pbhokta mamle, khady r sarvjnik vitrn mntraly",
        "pryavrn, vn vn jlvayu privrtn mntraly"
    ],
    answer: "pryavrn, vn vn jlvayu privrtn mntraly"
},
{
    question: "June 2024 men, poorv kriketr yoosuph pthan ne bhrampur loksbha seet jeetee; yh nirvachn kshetr which state men sthit hai?",
    option: [
        "ttrakhnd",
        "Uttar Pradesh",
        "tripura",
        "pshchim bngal"
    ],
    answer: "pshchim bngal"
},
{
    question: "dalchnd shrma Which of the following which ghrane ke prkhyat Pakhawaj vadk (Pakhawaj exponent) hain?",
    option: [
        "traulee - jypur",
        "rampur - shsvan",
        "lkhn",
        "nathdvara"
    ],
    answer: "nathdvara"
},
{
    question: "yojna yog men prdhanmntree kee bhoomika kya thee?",
    option: [
        "pden sdsy",
        "pden dhyksh",
        "snvad shyogee",
        "schiv"
    ],
    answer: "pden dhyksh"
},
{
    question: "Which of the following which shastreey nty men 'pung (pung)' ko sbse mhtvpoorn vadyyntr ke roop men pyog kiya jata hai?",
    option: [
        "Kathaklee",
        "Kathak",
        "Odissi",
        "Manipuri"
    ],
    answer: "Manipuri"
},
{
    question: "british st ndiya knpnee r mratha peshva bajee rav dviteey ke beech besin kee sndhi (Treaty of Bassein) pr hstakshr Which of the following which vrsh ki g the?",
    option: [
        "1818",
        "1824",
        "1835",
        "1802"
    ],
    answer: "1802"
},

{
    question: "bharteey Constitution ka kaun-sa nuchchhed kam kee nyaysngt r manvochit dshan ke siddhant ko rekhankit krta hai?",
    option: [
        "nuchchhed 41",
        "nuchchhed 48",
        "nuchchhed 46",
        "nuchchhed 42"
    ],
    answer: "nuchchhed 42"
},
{
    question: "tee-20 bland kriket vishv kp (T20 Blind Cricket World Cup) 2022 ka phanl maich khan yojit kiya gya tha?",
    option: [
        "m. chinnasvamee stediym, bengluru",
        "nrendr modee stediym, hmdabad",
        "vankhede stediym, munb",
        "holkr stediym, ndaur"
    ],
    answer: "m. chinnasvamee stediym, bengluru"
},
{
    question: "beking dyog men bred, pestree r kek bnane ke li which karbnik levnr (leavener) ka pyog kiya jata hai?",
    option: [
        "mold (Molds)",
        "smt (Smuts)",
        "rst (Rusts)",
        "khmeer (Yeasts)"
    ],
    answer: "khmeer (Yeasts)"
},
{
    question: "brhmputr ndee, Which of the following which desh men nheen bhtee hai?",
    option: [
        "cheen",
        "nepal",
        "bhart",
        "Bangladesh"
    ],
    answer: "nepal"
},
{
    question: "prkti se kchche mal ke nishkrshn men kaun-sa dyog smmilit hai?",
    option: [
        "vinirman dyog (Manufacturing industry)",
        "nishkrshn dyog (Extractive industry)",
        "nirman dyog (Construction industry)",
        "seva dyog (Service industry)"
    ],
    answer: "nishkrshn dyog (Extractive industry)"
},
{
    question: "parainomeetr (pyranometer), ______ mapne vala k pkrn hai, jiska pyog mtaur pr jlvayu nusndhan ya mausm prdrshn kee nigranee ke li kiya jata hai",
    option: [
        "saur kirnta (solar irradiance)",
        "vayumndleey dab (atmospheric pressure)",
        "pvn chal (wind speed)",
        "megh chhad (cloud ceiling)"
    ],
    answer: "saur kirnta (solar irradiance)"
},
{
    question: "bhart men koyla khdanon ka rashtreeykrn which smyavdhi men kiya gya tha?",
    option: [
        "1966-1970",
        "1971-1975",
        "1961-1965",
        "1976-1980"
    ],
    answer: "1971-1975"
},
{
    question: "poorv kriketr rojr binnee which desh ke li kriket khelte the?",
    option: [
        "streliya",
        "nglaind",
        "nyoojeelaind",
        "bhart"
    ],
    answer: "bhart"
},
{
    question: "___________ dinon ka kam (rojgar) dene ke li bhart srkar dvara greeb klyan rojgar yojna 2020 shuroo kee g thee",
    option: [
        "120",
        "115",
        "130",
        "125"
    ],
    answer: "125"
},
{
    question: "gVeda men gnga ndee ka llekh kitnee bar hu hai?",
    option: [
        "4",
        "3",
        "2",
        "1"
    ],
    answer: "1"
},
{
    question: "gntntr divs 2023 pr which desh kee tukdee ne bharteey sainikon ke sath march kiya?",
    option: [
        "japan",
        "misr",
        "phrans",
        "jrmnee"
    ],
    answer: "misr"
},
{
    question: "Which of the following kaun, bhart men manvadhikaron ke llnghn kee shikayton kee janch ke li ttrdayee nheen hota hai?",
    option: [
        "rashtreey nusoochit jati yog",
        "ntrrashtreey manvadhikar yog",
        "rashtreey mhila yog",
        "bhart ka rashtreey manvadhikar yog"
    ],
    answer: "ntrrashtreey manvadhikar yog"
},
{
    question: "Constitution sbha kee phlee baithk kb hu thee?",
    option: [
        "7 disnbr 1946",
        "15 disnbr 1946",
        "9 disnbr 1946",
        "12 disnbr 1946"
    ],
    answer: "9 disnbr 1946"
},
{
    question: "8 gst 2024 ko rajysbha men pesh kiya gya bylr vidheyk (Boilers Act), 2024, which poorvvrtee bylr dhiniym ko prtisthapit krne ke li pesh kiya gya?",
    option: [
        "bylr dhiniym, 1955",
        "bylr dhiniym, 1923",
        "bylr dhiniym, 1975",
        "bylr dhiniym, 1965"
    ],
    answer: "bylr dhiniym, 1923"
},
{
    question: "srvshreshth koriyographr ke li nndee purskar hr vrsh which state men prdan kiya jata hai?",
    option: [
        "ndhr prdesh",
        "Karnataka",
        "mdhy prdesh",
        "Maharashtra"
    ],
    answer: "ndhr prdesh"
},
{
    question: "'sarvjnik pravdhan (Public provision)' n vstun r sevan ko sndrbhit krta hai jinhen bjt ke madhym se vittposhit kiya jata hai r ______________ hai",
    option: [
        "bina whichee prtyksh bhugtan ke pyog kiya ja skta",
        "kevl nlan bhugtan ke jri plbdh hota",
        "kevl prtyksh bhugtan ke sath hee pyog kiya ja skta",
        "kevl krdatan dvara pyog kiya ja skta"
    ],
    answer: "bina whichee prtyksh bhugtan ke pyog kiya ja skta"
},
{
    question: "vishv Athletics chaimpiynship (World Athletics Championship) men svrn pdk jeetne vale phle bharteey kaun the/thee?",
    option: [
        "njoo bbee jrj",
        "milkha sinh",
        "neerj chopda",
        "pee.tee. sha"
    ],
    answer: "neerj chopda"
},
{
    question: "khady yat pr bhart kee nirBharataa pr hrit kranti ka kya prbhav pda?",
    option: [
        "khadyann yat pr nirBharataa men kmee",
        "khadyann yat pr nirBharataa men ko privrtn nheen hu",
        "khadyann yat pooree trh se bnd ho gya",
        "khadyann yat pr nirBharataa bdhee"
    ],
    answer: "khadyann yat pr nirBharataa men kmee"
},
{
    question: "bhart ke nmen se which pdosee desh men miliyn shhron (million cities) kee snkhya sbse dhik hai?",
    option: [
        "shreelnka",
        "pawhichtan",
        "nepal",
        "Bangladesh"
    ],
    answer: "pawhichtan"
},
{
    question: "pshchim bngal ke which tyohar ko yoonesko (UNESCO) kee manvta kee moort sansktik virast kee soochee men jgh milee hai?",
    option: [
        "pola boshakh",
        "durgapooja",
        "paush snkranti",
        "jma shshthee"
    ],
    answer: "durgapooja"
},
{
    question: "ntim shung shask kee htya ske mntree ne which shtabdee men kee thee?",
    option: [
        "teesree shtabdee .poo.",
        "doosree shtabdee .poo.",
        "phlee shtabdee .",
        "phlee shtabdee .poo."
    ],
    answer: "phlee shtabdee .poo."
},
{
    question: "September 2024 tk prapt jankaree ke nusar kendreey shiksha mntraly ke kaibinet mntree kaun hain?",
    option: [
        "ch.dee. kumarsvamee",
        "peeyoosh goyl",
        "nitin jyram gdkree",
        "Dharmendra Pradhan"
    ],
    answer: "Dharmendra Pradhan"
},
{
    question: "bheemrav ramjee mbedkr ne which vrsh mhad styagrh (Mahad Satyagraha) ka nettv kiya tha?",
    option: [
        "1925",
        "1927",
        "1923",
        "1918"
    ],
    answer: "1927"
},
{
    question: "Which of the following kaun-sa shastreey nty khary ke roop men jana jata hai, jhan k nrtk/nrtkee k hee prdrshn men k bhoomikan nibhata/nibhatee hai?",
    option: [
        "Bharatanatyam",
        "kuchipudee",
        "mohineettm",
        "Kathaklee"
    ],
    answer: "kuchipudee"
},
{
    question: "samanyth stonvrt (stonewort) ke nam se janee jane valee hre shaival kee kaun-see prjati ko prayh paudha smjh liya jata hai?",
    option: [
        "kelp (Kelp)",
        "kara (Chara)",
        "sargesm (Sargassum)",
        "gresileriya (Gracilaria)"
    ],
    answer: "kara (Chara)"
},
{
    question: "smti mndhana Which of the following which khel se snbndhit hain?",
    option: [
        "kriket",
        "kushtee",
        "Badminton",
        "hkee"
    ],
    answer: "kriket"
},
{
    question: "rajy srkar ke vyvsay ke dhik suvidhajnk snchaln ke li niymavlee kaun bnata hai?",
    option: [
        "rajy ka Chief Minister",
        "rajy ka mhadhivkta",
        "rajy ka Chief Secretary",
        "rajy ka Governor"
    ],
    answer: "rajy ka Governor"
},
{
    question: "'streets ph kailkta (Streets Of Calcutta)' r 'dansing drms (Dancing Drums)' ______________ ke do lokpriy traik hain",
    option: [
        "nnd shnkr",
        "nushka shnkr",
        "Zakir Hussain",
        "begm khtr"
    ],
    answer: "nnd shnkr"
},
{
    question: "Which of the following kaun-sa k manv nirmit jl nikay hai, jo whichee ndee ya jldhara ke prvah ko vruddh krke bnaya jata hai?",
    option: [
        "laigoon (Lagoon)",
        "muhana (Estuary)",
        "jlashy (Reservoir)",
        "ksbo jheel (Oxbow lake)"
    ],
    answer: "jlashy (Reservoir)"
},
{
    question: "kmre ke tap r dab pr, knon kee gtij rja _____ ke mamle men nyoontm hotee hai",
    option: [
        "lohe",
        "meethen",
        "keroseen",
        "jl"
    ],
    answer: "lohe"
},
{
    question: "Which of the following kaun-sa, hrit kranti ka prinam nheen tha?",
    option: [
        "rasaynik rvrkon r keetnashkon pr tydhik nirBharataa",
        "kshi vsnrchna men sudhar",
        "grameen jnsnkhya men kmee",
        "khadyann tpadn men vddhi"
    ],
    answer: "grameen jnsnkhya men kmee"
},
{
    question: "'rohingya snkt' shbd men mukhy roop se bhart shit vibhinn kshetron men shrn lene ke li ne vale which pdosee desh ke shrnarthee shamil hain?",
    option: [
        "nepal",
        "Bangladesh",
        "bhootan",
        "myanmar"
    ],
    answer: "myanmar"
},
{
    question: "rojgar workaly sankhyikee 2023 ke nusar, vrsh 2022 men bhart men lav rjistr (Live Register) kee naukree khojne valon men mhilan ka prtisht kitna tha?",
    option: [
        "50%",
        "35.9%",
        "33%",
        "35.6%"
    ],
    answer: "35.6%"
},
{
    question: "bharteey sngeet, nty r natk kee vibhinn shailiyon ke snrkshn vn snvrdhn ke li, desh men prdrshn kla ke kshetr men srvochch snstha, sngeet natk kadmee kee sthapna which vrsh kee g thee?",
    option: [
        "1961",
        "1953",
        "1949",
        "1963"
    ],
    answer: "1953"
},
{
    question: " (AAI) 50veen khil bharteey ntr-snsthagt tebl tenis chainpiynship 2023 ka yojn ___________ dvara kiya gya",
    option: [
        "Telangana rajy tebl tenis sosishn",
        "mdhy prdesh rajy tebl tenis sosishn",
        "gujrat rajy tebl tenis sosishn",
        "ndhr prdesh rajy tebl tenis sosishn"
    ],
    answer: "ndhr prdesh rajy tebl tenis sosishn"
},
{
    question: "manv shreer men danton ke neml (enamel) ka nirman krne vale pdarth ka rasaynik nam kya hai?",
    option: [
        "hadroklorik ml",
        "kailshiym hadrkseepetat",
        "sodiym",
        "kailshiym"
    ],
    answer: "kailshiym hadrkseepetat"
},
{
    question: "Which of the following kya jl snrkshn men shayta kr skta hai?",
    option: [
        "jeev-jntun kee badee ko km krne ke li marna",
        "jl pchar karkhanon kee sthapna",
        "pey jl kee poorti ko dha krna",
        "rainwater harvesting"
    ],
    answer: "rainwater harvesting"
},
{
    question: "whichee pind ko zero prarnbhik snveg ke sath 20 meetr kee ncha se giraya jata hai; ydi yh 40 kg·m/s snveg ke sath bhoo-tl se tkrata hai, to ske drvyman ka prikln keeji (man leeji gurutveey tvrn 'g' = 10 m/s²)",
    option: [
        "20 kg",
        "1 kg",
        "2 kg",
        "4 kg"
    ],
    answer: "2 kg"
},
{
    question: "gVeda men likhee prarthnan ko Which of the following which nam se jana jata hai?",
    option: [
        "cha",
        "shlok",
        "kavy",
        "sookt"
    ],
    answer: "sookt"
},
{
    question: "ICC purush kriket vishv kp 2023, ODI toornament men srvadhik viket lene vale gendbaj kaun the?",
    option: [
        "Mohammed Shami",
        "mohmmd siraj",
        "jspreet bumrah",
        "kuldeep yadv"
    ],
    answer: "Mohammed Shami"
},
{
    question: "Goa rajy ke vidhansbha nirvachn kshetron men nusoochit jnjatiyon ke prtinidhitv ka punrsmayojn vidheyk, 2024 ke tht rajy men ST smudayon se snbndhit vyktiyon kee jnsnkhya ka prakkln krne ke li jngnna yukt kee niyukti krne kee shkti whichke pas hai?",
    option: [
        "srvochch nyayaly",
        "Central Government",
        "kendreey jnjateey work mntraly",
        "rajy srkar"
    ],
    answer: "Central Government"
},
{
    question: "satveen pnchvrsheey yojna ke dauran sv-rojgar mhilan r naupcharik kshetr men mhilan pr rashtreey yog dvara prstut vyapk riport ka sheershk kya hai?",
    option: [
        "naree shkti",
        "shkti shyog",
        "Shramshakti",
        "mhila development"
    ],
    answer: "Shramshakti"
},
{
    question: "1993 men k din men 28 gane rikrd krne ke li whichka nam gineej buk ph vrld rikrds men drj kiya gya tha?",
    option: [
        "sonoo nigm",
        "kshnkumar kunnth",
        "Kumar Sanu",
        "dit narayn"
    ],
    answer: "Kumar Sanu"
},
{
    question: "Which of the following kaun 'public debt (Public Debt)' shbd ka sbse chchha vrnn krta hai?",
    option: [
        "srkar dvara kiya gya kul nivesh",
        "srkar dvara pne ndatan ko dey kul dhnrashi",
        "whichee desh ke nagrikon dvara dey kul dhnrashi",
        "srkar dvara tpnn kul rajsv"
    ],
    answer: "srkar dvara pne ndatan ko dey kul dhnrashi"
},
{
    question: "ke. chndrshekhr rav, jinhen 2023 men Telangana chunavon men bdee sphlta milee, Which of the following which rajneetik dl se snbndhit hain?",
    option: [
        "telugu deshm partee (TDP)",
        "ndiyn neshnl kangres (INC)",
        "Bharat Rashtra Samithi (BRS)",
        "bharteey jnta partee (BJP)"
    ],
    answer: "Bharat Rashtra Samithi (BRS)"
},
{
    question: "bharteey Constitution ke nusar, rajy ka vastvik workpalk whiche mana jata hai?",
    option: [
        "Governor",
        "Chief Minister",
        "dhyksh",
        "p-Chief Minister"
    ],
    answer: "Chief Minister"
},
{
    question: "Which of the following kaun-see, pnjab kee k lokpriy nty shailee hai?",
    option: [
        "ghoomr",
        "grba",
        "chh",
        "Bhangra"
    ],
    answer: "Bhangra"
},
{
    question: "‘Cheiraoba (Cheiraoba)’ tsv, _________________ rajy men mnaya jane vala nvvrsh tsv hai",
    option: [
        "Goa",
        "ttrakhnd",
        "Manipur",
        "Karnataka"
    ],
    answer: "Manipur"
},
{
    question: "Directive Principles of State Policyon ka llekh Constitution ke nuchchhedon _____ men kiya gya hai",
    option: [
        "35-45",
        "45-55",
        "40-60",
        "36-51"
    ],
    answer: "36-51"
},
{
    question: "dviteey pnchvrsheey yojna kee lkshit vddhi dr kitnee thee?",
    option: [
        "3.6%",
        "5.6%",
        "5.2%",
        "4.5%"
    ],
    answer: "4.5%"
},
{
    question: "National Multidimensional Poverty Index 2023 ke nusar, which kendr shasit prdesh men bhuyamee greeb badee ka prtisht sbse km hai?",
    option: [
        "lkshdveep",
        "chndeegdh",
        "puducheree",
        "dillee"
    ],
    answer: "puducheree"
},
{
    question: "svamee dyannd srsvtee ke nettv men which ndoln ne Vedaon kee shikshan kee r lautne ka pksh-smrthn kiya?",
    option: [
        "leegdh ndoln",
        "Arya Samaj",
        "prarthna smaj",
        "brhm smaj"
    ],
    answer: "Arya Samaj"
},

{
    question: "Which of the following whichke dvara dviteey pnchvrsheey yojna ke development men tihasik yogdan diya gya tha?",
    option: [
        "P. C. Mahalanobis",
        "je.m. keens",
        "see.dee. deshmukh",
        "je.ke. mehta"
    ],
    answer: "P. C. Mahalanobis"
},
{
    question: "nimnlikhit gaykon men se kaun pdm shree, pdm bhooshn r pdm vibhooshn teenon purskaron ka praptkrta hai?",
    option: [
        "s.pee. balasubrmnym",
        ".r. rhman",
        "m.m. keeravnee",
        "hrihrn"
    ],
    answer: "s.pee. balasubrmnym"
},
{
    question: "pdm shree se smmanit shobhna narayn which bharteey shastreey nty se snbndhit hain?",
    option: [
        "Manipuri",
        "Bharatanatyam",
        "Odissi",
        "Kathak"
    ],
    answer: "Kathak"
},
{
    question: "2011 kee jngnna ke nusar, sat bhn (Seven Sisters) rajyon men se which state kee sakshrta dr sbse dhik hai?",
    option: [
        "meghaly",
        "Manipur",
        "nagalaind",
        "Mizoram"
    ],
    answer: "Mizoram"
},
{
    question: "bharteey Constitution ka kaun-sa snvaidhanik snshodhn, bhart men rashtreey pichhda vrg yog kee sthapna se snbndhit hai?",
    option: [
        "Constitution (chauraseevan snshodhn) dhiniym, 2001",
        "Constitution (k sau charvan snshodhn) dhiniym, 2019",
        "Constitution (k sau dovan snshodhn) dhiniym, 2018",
        "Constitution (chhiyaseevan snshodhn) dhiniym, 2002"
    ],
    answer: "Constitution (k sau dovan snshodhn) dhiniym, 2018"
},
{
    question: "bharteey jngnna 2011 ke nusar, Which of the following which state men nyoontm jnsnkhya vddhi hai?",
    option: [
        "bihar",
        "Tamil Nadu",
        "Haryana",
        "Kerala"
    ],
    answer: "Kerala"
},
{
    question: "bharteey Constitution ke which nuchchhed ke tht rajy ko smaj ke kmjor vrgon ke rthik hiton ko bdhava dena vshyk hai?",
    option: [
        "nuchchhed 46",
        "nuchchhed 48",
        "nuchchhed 49",
        "nuchchhed 47"
    ],
    answer: "nuchchhed 46"
},
{
    question: "paristhitikee ke sndrbh men, shjeevita (Symbiosis) kya hai?",
    option: [
        "prkash snshleshn kee prkriya",
        "vibhinn prjatiyon ke beech ghnishth r deerghkalik prspr snbndh",
        "snsadhnon ke li jeevon ke beech prtisprdha",
        "jeevon ka pne praktik vas men niymit snchln"
    ],
    answer: "vibhinn prjatiyon ke beech ghnishth r deerghkalik prspr snbndh"
},
{
    question: "stlj ndee ka vaidik nam kya hai, jo gVeda men vrnit spt sindhu ndiyon ka k hissa hai?",
    option: [
        "shutudri",
        "vitsta",
        "skinee",
        "purushinee"
    ],
    answer: "shutudri"
},
{
    question: "Which of the following kaun-sa/kaun-se tebl tenis ka/ke ny tihasik nam hai/hain?\n\na. goseema (Gossima)\nb. vhiph-vhaph (Whiff-whaff)\nc. ping pong (Ping-pong)",
    option: [
        "kevl a",
        "kevl b",
        "kevl a r c",
        "sbhee a, b r c"
    ],
    answer: "sbhee a, b r c"
},
{
    question: "1919 men dhiniymit which dhiniym ke dvara british bhart ke pranton men dvaidh shasn prnalee ka rnbh kiya gya tha?",
    option: [
        "bhart srkar dhiniym (Government of India Act)",
        "vrnakyoolr pres dhiniym (Vernacular Press Act)",
        "rlet dhiniym (Rowlatt Act)",
        "bharteey prishd dhiniym (Indian Councils Act)"
    ],
    answer: "bhart srkar dhiniym (Government of India Act)"
},
{
    question: "rjun sinh dhurve ko which nty shailee ko bdhava dene ke nke thk pryason ke li pdm shree 2022 se smmanit kiya gya?",
    option: [
        "dph nty",
        "mndjas nty",
        "pung cholom nty",
        "baiga nty"
    ],
    answer: "baiga nty"
},
{
    question: "Which of the following whiche June 2024 men kendreey mhila vn bal development mntree niyukt kiya gya?",
    option: [
        "nirmla seetarmn",
        "nupriya ptel",
        "rksha nikhil khdse",
        "nnpoorna devee"
    ],
    answer: "nnpoorna devee"
},
{
    question: "Which of the following which kendreey mntree ne September 2024 men bhoo-neer (Bhu-Neer) portl lnch kiya?",
    option: [
        "see. r. patil",
        "vee. somnna",
        "raj bhooshn chaudhree",
        "prlhad joshee"
    ],
    answer: "see. r. patil"
},
{
    question: "Himachal Pradesh men kelong (Keylong) ke nikt tandee (Tandi) men kaun-see do jldharan miltee hain?",
    option: [
        "bindusar r sbree (Bindusara and Sabari)",
        "pnjara r vaghur (Panzara and Waghur)",
        "chndr r bhaga (Chandra and Bhaga)",
        "penganga r vrdha (Penuganga and Warda)"
    ],
    answer: "chndr r bhaga (Chandra and Bhaga)"
},
{
    question: "Which of the following which state men ‘sanjhee’ prv mnaya jata hai?",
    option: [
        "Tamil Nadu",
        "pnjab",
        "gujrat",
        "Mizoram"
    ],
    answer: "pnjab"
},
{
    question: "vyapar men vijnyapn kee kya bhoomika hai?",
    option: [
        "vyvsayon ko vittposhit krna",
        "mal ka privhn krna",
        "grahkon ko soochit vn krshit krna",
        "mal ka tpadn krna"
    ],
    answer: "grahkon ko soochit vn krshit krna"
},
{
    question: "teevr teekhee sugndh r svad vale k kristl jaise, sphed yaugik ka nam bta, jise rdhvpatn kee prkriya dvara shuddh kiya jata hai",
    option: [
        "soda sh",
        "kastik potash",
        "kpoor",
        "la"
    ],
    answer: "kpoor"
},
{
    question: "pke chek pr maignetik nk kairektr rikgnishn nnbr (Magnetic Ink Character Recognition number) ke phle teen nk s ____________ ke kod ko nirdisht krte hain jismen pka baink khata hai",
    option: [
        "shhr",
        "desh",
        "baink",
        "shakha"
    ],
    answer: "shhr"
},
{
    question: "_______ men 1993 men yojit ki g sark gold kp phutbl (SAARC Gold Cup Football) ka dghatn snskrn bhart ne jeeta",
    option: [
        "kolnbo, shreelnka",
        "lahaur, pawhichtan",
        "ptiyala, bhart",
        "dhaka, Bangladesh"
    ],
    answer: "lahaur, pawhichtan"
},
{
    question: "chch rajkosheey ghata which prkar rthvyvstha se nijee nivesh ke bhirgmn (crowding out) ka karn bn skta hai?",
    option: [
        "bajar men nijee nivesh men vddhi ke karn",
        "chch byaj dron r nijee nivesh men kmee ke karn",
        "srkaree n r krj ko km krne ke karn",
        "vyvsayon ke li n kee plbdhta men vddhi ke karn"
    ],
    answer: "chch byaj dron r nijee nivesh men kmee ke karn"
},
{
    question: "2023 men khelo ndiya yoonivrsitee gems ka kaun-sa snskrn Uttar Pradesh men yojit kiya gya tha?",
    option: [
        "teesra",
        "doosra",
        "phla",
        "chautha"
    ],
    answer: "teesra"
},
{
    question: "lainthenads shit kin do ttvon ko kbhee-kbhee 'durlbh mda ttv' kha jata hai?",
    option: [
        "triym r skaindiym",
        "molibdenm r pailediym",
        "rootheniym r jirkoniym",
        "vainediym r nabiym"
    ],
    answer: "triym r skaindiym"
},
{
    question: "which state srkar ne 1995 men shastreey nty ke kshetr men 'shantla naty shree purskar' shuroo kiya?",
    option: [
        "Assam",
        "ndhr prdesh",
        "Karnataka",
        "Tamil Nadu"
    ],
    answer: "Karnataka"
},
{
    question: "Which of the following which bharteey neta ko 'phrntiyr gandhee (Frontier Gandhi)' ke nam se jana jata hai?",
    option: [
        "khan bdul gphphar khan (Khan Abdul Ghaffar Khan)",
        "maulana bul klam jad (Maulana Abul Kalam Azad)",
        "shaukt lee (Shaukat Ali)",
        "liyakt lee khan (Liaquat Ali Khan)"
    ],
    answer: "khan bdul gphphar khan (Khan Abdul Ghaffar Khan)"
},
{
    question: "smsootree vibhajn (mitosis) ke bare men Which of the following glt kthn ka chyn keeji",
    option: [
        "yh jeevon men tkon kee vddhi r mrmmt men shayta krta hai",
        "sntti koshikan men gunsootron kee snkhya matkoshika kee tulna men dhee hotee hai",
        "koshikan vddhi ke li vibhajit hotee hain",
        "prtyek koshika, jise matkoshika kha jata hai, vibhajit hokr do sman sntti koshikan bnatee hai"
    ],
    answer: "sntti koshikan men gunsootron kee snkhya matkoshika kee tulna men dhee hotee hai"
},
{
    question: "ramnd vee. raghvn (Ramnad V. Raghavan) Which of the following which vady yntr se jude the?",
    option: [
        "dholk",
        "sarngee",
        "Mridangam",
        "nadsvrm"
    ],
    answer: "Mridangam"
},
{
    question: "rngrajn smiti Which of the following whichse snbndhit hai?",
    option: [
        "bainking",
        "greebee",
        "shiksha",
        "berojgaree"
    ],
    answer: "greebee"
},
{
    question: "pthvee ke vayumndl ka vh kshetr jhan mausmee ghtnan ghtit hotee hain, se which nam se jana jata hai?",
    option: [
        "equalityp mndl",
        "kshobh mndl",
        "bhirmndl",
        "mdhy mndl"
    ],
    answer: "kshobh mndl"
},
{
    question: "bharteey Badminton teem ne _____ kee teem pr shandar jeet drj krke 2022 men phlee bar thms kp khitab jeeta",
    option: [
        "mleshiya",
        "denmark",
        "ndoneshiya",
        "japan"
    ],
    answer: "ndoneshiya"
},
{
    question: "bharteey Constitution ke Which of the following kaun-se nuchchhed, Fundamental Rightson ka pravdhan krte hain?",
    option: [
        "nuchchhed 15 se 35",
        "nuchchhed 2 se 7",
        "nuchchhed 10 se 40",
        "nuchchhed 12 se 35"
    ],
    answer: "nuchchhed 12 se 35"
},
{
    question: "ktoobr 2024 tk kee sthiti ke nusar, Redrinpu (Lalrinpuii) Which of the following which state kee svasthy r privar klyan mntree hai?",
    option: [
        "Assam",
        "Haryana",
        "nagalaind",
        "mijorm"
    ],
    answer: "mijorm"
},
{
    question: "chapchr kut mhotsv, jo sunhree phsl kee prtyasha men mnaya jata hai, mukhy roop se ________ ka tyohar hai",
    option: [
        "mdhy prdesh",
        "ttrakhnd",
        "Kerala",
        "mijorm"
    ],
    answer: "mijorm"
},
{
    question: "Which of the following kaun-sa maurykaleen puratatvik sthl, lkdee ke ktghra (wooden palisade) ke vsheshon se snbndhit hai?",
    option: [
        "mthura",
        "tkshshila",
        "bheeta",
        "bulndeebag"
    ],
    answer: "bulndeebag"
},
{
    question: "Which of the following which pnchvrsheey yojna ko 'mhalnobis yojna' ke nam se bhee jana jata hai?",
    option: [
        "Fourth Plan",
        "dviteey yojna",
        "prthm yojna",
        "satveen yojna"
    ],
    answer: "dviteey yojna"
},
{
    question: "'roppee (Roppi)' _______________________ rajy ka k lokpriy lok nty hai",
    option: [
        "runachl prdesh",
        "Assam",
        "Kerala",
        "Karnataka"
    ],
    answer: "runachl prdesh"
},
{
    question: "Which of the following kaun-sa dhrm cheen men sbse dhik logon dvara mana jata hai?",
    option: [
        "Islam",
        "Buddhism",
        "Christianity",
        "hindoo dhrm"
    ],
    answer: "Buddhism"
},
{
    question: "Which of the following which Constitution snshodhn dhiniym ne rajy vitt yog ka gthn kiya?",
    option: [
        "76van snshodhn dhiniym",
        "74van snshodhn dhiniym",
        "73van snshodhn dhiniym",
        "75van snshodhn dhiniym"
    ],
    answer: "73van snshodhn dhiniym"
},
{
    question: "bhart men yojna ka mukhy ddeshy kya tha?",
    option: [
        "british snskti ka nusrn krna",
        "nijeekrn kee prkriya shuroo krna",
        "development prkriya kee shurut krna",
        "dviteeyta kee shurut krna"
    ],
    answer: "development prkriya kee shurut krna"
},
{
    question: "15veen kshi nettv purskar smiti ke nusar, vrsh 2024 men kshi ke li srvshreshth bharteey rajy kaun-sa hai?",
    option: [
        "gujrat",
        "Haryana",
        "Maharashtra",
        "pnjab"
    ],
    answer: "Maharashtra"
},
{
    question: "jrj samn m 1827 men k sootr (formula) prkashit krne ke li prsiddh the yh whichka vrnn krta hai?",
    option: [
        "dhara prvah vibhvantr ke nukrmanupatee r prtirodh ke vyutkrmanupatee hota hai",
        "k snvt psh‍th men kul vidyut bhivah, snlgn vesh ke nukrmanupatee hota hai",
        "kundlee men prerit mph ka priman s kundlee se jude chunbkeey bhivah ke privrtn kee dr ke nukrmanupatee hota hai",
        "sndhi men prvesh krne valee sbhee dharan ka yog, sndhi se niklne valee sbhee dharan ke yog ke brabr hona chahi"
    ],
    answer: "dhara prvah vibhvantr ke nukrmanupatee r prtirodh ke vyutkrmanupatee hota hai"
},
{
    question: "phlee r doosree pnchvrsheey yojnan ke main objective kshetr kaun-se the?",
    option: [
        "kshi vn dyog kshetr",
        "kshi r videshee kshetr",
        "dyog r seva kshetr",
        "kshi vn seva kshetr"
    ],
    answer: "kshi vn dyog kshetr"
},
{
    question: "Which of the following kaun-sa tyohar mrathee nvvrsh ke roop men mnaya jata hai?",
    option: [
        "gadi",
        "gudee pdva",
        "mkr snkranti",
        "pongl"
    ],
    answer: "gudee pdva"
},
{
    question: "sookt ko Which of the following which vaidik grnth ke stotrgan (hymn) ke roop men jana jata tha?",
    option: [
        "Atharvaveda",
        "yjurVeda",
        "gVeda",
        "samVeda"
    ],
    answer: "gVeda"
},
{
    question: "bharteey Constitution ke nusar, Which of the following kaun-see nusoochee srkar kee shktiyon ke pthkkrn se snbndhit hai?",
    option: [
        "satveen nusoochee",
        "chhthee nusoochee",
        "thveen nusoochee",
        "panchveen nusoochee"
    ],
    answer: "satveen nusoochee"
},
{
    question: "bharteey Constitution ke which nuchchhed men speekr (Speaker) r diptee speekr (Deputy Speaker) ke pd se vkash, tyagptr r hta jane ka llekh hai?",
    option: [
        "nuchchhed 101",
        "nuchchhed 94",
        "nuchchhed 84",
        "nuchchhed 70"
    ],
    answer: "nuchchhed 94"
},
{
    question: "Which of the following whiche June 2024 men kendreey snskti mntree niyukt kiya gya?",
    option: [
        "Jual Oram",
        "kinjrapu rammohn naydoo",
        "giriraj sinh",
        "gjendr sinh shekhavt"
    ],
    answer: "gjendr sinh shekhavt"
},
{
    question: "bhart kee jngnna, 2011 ke nusar, Which of the following which poorvottr rajy kee jnsnkhya sbse dhik hai?",
    option: [
        "Assam",
        "runachl prdesh",
        "Manipur",
        "Mizoram"
    ],
    answer: "Assam"
},
{
    question: "sikkil mala chndrshekhr (Sikkil Mala Chandrasekhar) Which of the following which vady yntr se judee hain?",
    option: [
        "tbla",
        "bansuree",
        "Pakhawaj",
        "rudr veena"
    ],
    answer: "bansuree"
},
{
    question: "nmoona pnjeekrn prnalee (Sample Registration System - SRS) 2020 ke nusar, Which of the following which bharteey rajy kee jnsnkhya men praktik vddhi dr sbse dhik thee?",
    option: [
        "Rajasthan",
        "Uttar Pradesh",
        "mdhy prdesh",
        "bihar"
    ],
    answer: "bihar"
},
{
    question: "khana bnana seekhte smy rajesh ne dekha ki jb vh k drjn moongphlee ko grandr men peesta hai, to smen se tel niklne lgta hai, jbki k ktoree jeera peesne pr smen se tel nheen niklta hai s ntr ke peechhe kya karn ho skta hai?",
    option: [
        "moongphlee men maujood vsa ke karn tel niklta hai",
        "moongphlee men maujood proteen ke karn tel niklta hai",
        "moongphlee ko sukhaya nheen gya tha",
        "jeera ghtiya gunvtta ka tha"
    ],
    answer: "moongphlee men maujood vsa ke karn tel niklta hai"
},
{
    question: "Which of the following which kshetrk (sector) men sbhee vyavsayik snsthan, nigm r bhageedariyan shamil hain?",
    option: [
        "phrm kshetrk (Firms sector)",
        "srkaree kshetrk (Government sector)",
        "videshee kshetrk (Foreign sector)",
        "ghreloo kshetrk (Household sector)"
    ],
    answer: "phrm kshetrk (Firms sector)"
},
{
    question: "bhart men khelo ndiya sheetkaleen khelon ka teesra snskrn kb yojit kiya gya tha?",
    option: [
        "jnvree 2023",
        "jnvree 2024",
        "phrvree 2023",
        "phrvree 2022"
    ],
    answer: "phrvree 2023"
},
{
    question: "2014 men shiya khelon men purush hkee toornament men bhart ne kitne vrshon bad svrn pdk jeeta tha?",
    option: [
        "16 vrsh",
        "14 vrsh",
        "20 vrsh",
        "11 vrsh"
    ],
    answer: "16 vrsh"
},
{
    question: "1940 ka 'gst phr' (August Offer) which british srkaree rightee dvara diya gya tha?",
    option: [
        "nevil chembrlen (Neville Chamberlain)",
        "lrd linlithgo (Lord Linlithgow)",
        "Clement Attlee (Clement Attlee)",
        "Winston Churchill (Winston Churchill)"
    ],
    answer: "lrd linlithgo (Lord Linlithgow)"
},
{
    question: "globalisation prkriya men bhurashtreey kmpniyan (MNCs) kya bhoomika nibhatee hain?",
    option: [
        "ve ntrrashtreey vyapar ko htotsahit krtee hain",
        "ve vyapar pr rashtreey neetiyon ko viniymit krtee hain",
        "ve kevl sthaneey vyvsayon ko bdhava detee hain",
        "ve vibhinn deshon men tpadn r bajaron ko keekt krtee hain"
    ],
    answer: "ve vibhinn deshon men tpadn r bajaron ko keekt krtee hain"
},
{
    question: "prnpatee vn r tree-shredded graslaind (tree-shredded grasslands) which prkar kee jlvayu men pa jate hain?",
    option: [
        "rdr poshnktibndheey jlvayu",
        "grm smsheetoshn (mdhy kshansh) jlvayu",
        "poshnktibndheey stepee jlvayu",
        "shnktibndheey rdr vn shushk jlvayu"
    ],
    answer: "shnktibndheey rdr vn shushk jlvayu"
},
{
    question: "poorvee bhart ke which nty ko 2010 men manvta kee moort sansktik dhrohr kee prtinidhi soochee men manyta dee g thee?",
    option: [
        "lavnee",
        "grba",
        "bihoo",
        "chh"
    ],
    answer: "chh"
},
{
    question: "pdm shree se smmanit r mohineettm kee klakar klamndlm kshemvtee pvitrn ka snbndh bhart ke Which of the following which state se hai?",
    option: [
        "Kerala",
        "Telangana",
        "Karnataka",
        "Tamil Nadu"
    ],
    answer: "Kerala"
},
{
    question: "‘peem-sooryghr: mupht bijlee yojna’ men kaun-sa labh shamil nheen hai?",
    option: [
        "srkar ke li bijlee kee keemton men kmee",
        "nveekrneey rja ka pyog bdhana",
        "nijee kshetr ke li bijlee kee keemton men kmee",
        "ghron ke li mupht bijlee"
    ],
    answer: "nijee kshetr ke li bijlee kee keemton men kmee"
},
{
    question: "s bharteey sitar vadk ka nam bta, jo beetls ke sath shyog krne ke bad 1960 ke dshk ke hippee sngeet-kn (hippie music icon) bn g",
    option: [
        "pn. ram narayn",
        "pn. shiv kumar shrma",
        "pn. vishvmohn bhtt",
        "pn. rvishnkr"
    ],
    answer: "pn. rvishnkr"
},
{
    question: "1951 kee jngnna ke nusar bhart kee sakshrta dr kitnee thee?",
    option: [
        "18.33%",
        "30%",
        "45.8%",
        "15.44%"
    ],
    answer: "18.33%"
},
{
    question: "bharteey Constitution ka kaun-sa nuchchhed nyayochit vn manveey worksthitiyon ttha mattv raht ke pravdhan pr bl deta hai?",
    option: [
        "nuchchhed 42",
        "nuchchhed 47",
        "nuchchhed 44",
        "nuchchhed 39"
    ],
    answer: "nuchchhed 42"
},
{
    question: "rajyvrdhn sinh rathaud ne which lnpik men Shooting men rjt pdk jeeta tha?",
    option: [
        "2000, sidnee",
        "1996, tlanta",
        "2008, beejing",
        "2004, thens"
    ],
    answer: "2004, thens"
},
{
    question: "nmoona pnjeekrn prnalee (SRS) 2020 ke nusar, Which of the following which state men shishu mtyu dr sbse dhik thee?",
    option: [
        "mdhy prdesh",
        "bihar",
        "Uttar Pradesh",
        "chhtteesgdh"
    ],
    answer: "mdhy prdesh"
},
{
    question: "1856 men karbn daslphad kee vashp ko rkt tpt tanbe (red hot copper) r hadrojn slphad ke snprk men lakr methen ka nirman who kiya tha?",
    option: [
        "henig brand (Hennig Brand)",
        "marselin brthelt (Marcelin Berthelot)",
        "ntonee lvjir (Antoine Lavoisier)",
        "jn daltn (John Dalton)"
    ],
    answer: "marselin brthelt (Marcelin Berthelot)"
},
{
    question: "dviteey pnchvrsheey yojna Which of the following which sankhyikeevid ke vicharon pr dharit thee?",
    option: [
        "prshant chndr mhalnobis",
        "debbrt bsu",
        "smrendr nath ray",
        "jynt kumar ghosh"
    ],
    answer: "prshant chndr mhalnobis"
},
{
    question: "Which of the following kaun-sa sthl bhart men mdhy lauh yug ke dauran rnbhik shhree niyojn (early urban planning) ka sakshy prdan krta hai?",
    option: [
        "mohnjodado",
        "lothl",
        "hdppa",
        "kaushambee"
    ],
    answer: "kaushambee"
},
{
    question: "nneesveen sdee kee prsiddh 'tnjaur chtushk (Tanjore Quartet)' ne which nty shailee ko phchan dee?",
    option: [
        "mohineettm",
        "Kathaklee",
        "Bharatanatyam",
        "Kathak"
    ],
    answer: "Bharatanatyam"
},
{
    question: "svtntrta divs 2023 kee theem kya thee?",
    option: [
        "k desh, k vykti (One Country, One People)",
        "schchee svtntrta kee r (Towards True Freedom)",
        "hmare sainikon ka smman kren, hmare sainikon ko slam kren (Support our Troops, Salute our Troops)",
        "rashtr prthm, sdaiv prthm (Nation First, Always First)"
    ],
    answer: "rashtr prthm, sdaiv prthm (Nation First, Always First)"
},
{
    question: "__________ khelne ke li mukhy roop se teen pkrnon, k bal (bowl), k jaik (jack) r k chta (mat) kee vshykta hotee hai",
    option: [
        "mukkebajee (Boxing)",
        "tlvarbajee (Fencing)",
        "ln bals (Lawn Bowls)",
        "tebl tenis (Table Tennis)"
    ],
    answer: "ln bals (Lawn Bowls)"
},
{
    question: "bharteey Constitution ke nusar, Which of the following kaun-see, Governor kee shkti nheen hai?",
    option: [
        "vishvas prstav ke dauran mtdan",
        "rajy vidhanmndl ko bhng krna",
        "rajy vidhanmndl ko sthgit krna",
        "rajy vidhanmndl ko bulana"
    ],
    answer: "vishvas prstav ke dauran mtdan"
},
{
    question: "nvnbr 2024 men which pradhikrn ne koching kshetr (coaching sector) men pardrshita bdhane ke li n dishanirdesh jaree ki?",
    option: [
        "kendreey vidyarthee snrkshn pradhikrn (The Central Student Protection Authority)",
        "kendreey grahk snrkshn pradhikrn (The Central Costumer Protection Authority)",
        "kendreey strkta pradhikrn (The Central Vigilance Authority)",
        "kendreey pbhokta snrkshn pradhikrn (The Central Consumer Protection Authority)"
    ],
    answer: "kendreey pbhokta snrkshn pradhikrn (The Central Consumer Protection Authority)"
},
{
    question: "guru chemancheree kunheeramn nayr (Guru Chemancheri Kunhiraman Nair) which bharteey nty shailee se snbndhit the?",
    option: [
        "striya",
        "Kathak",
        "Kathaklee",
        "kuchipudee"
    ],
    answer: "Kathaklee"
},
{
    question: "panchveen pnchvrsheey yojna (1974-79) ke mukhy ddeshy kya the?",
    option: [
        "greebee htana r self-reliance prapt krna",
        "rksha r sainy vistar",
        "agricultural development r shiksha",
        "dyogeekrn r vsnrchna"
    ],
    answer: "greebee htana r self-reliance prapt krna"
},
{
    question: "bhart ke yojna yog ke prthm padhyksh kaun the?",
    option: [
        "guljareeRed nnda",
        "chintamn deshmukh",
        "rke patil",
        "nr pill"
    ],
    answer: "guljareeRed nnda"
},
{
    question: "brhmputr ndee himaly ke which kshetr se nikltee hai?",
    option: [
        "pshchimee",
        "dkshinee",
        "ttree",
        "poorvee"
    ],
    answer: "ttree"
},
{
    question: "Which of the following whichke karn mnushy men motape kee snbhavna sbse km hotee hai?",
    option: [
        "nuvnshik lkshn",
        "gtiheen jeevnshailee",
        "vsa ke dhik sevn",
        "hree sbjiyon ke dhik sevn"
    ],
    answer: "hree sbjiyon ke dhik sevn"
},
{
    question: "jnvree 2024 men, snyukt rajy merika men bhart ke rajdoot ke pd se whiche sevanivtt kiya gya?",
    option: [
        "vijy lkshmee pndit",
        "trnjeet sinh sndhoo",
        "benegl rama rav",
        "sph lee"
    ],
    answer: "trnjeet sinh sndhoo"
},
{
    question: "1905 men bngal vibhajn ke li kaun-sa british rightee ttrdayee tha?",
    option: [
        "lrd ripn (Lord Ripon)",
        "lrd minto (Lord Minto)",
        "lrd krjn (Lord Curzon)",
        "lrd litn (Lord Lytton)"
    ],
    answer: "lrd krjn (Lord Curzon)"
},
{
    question: "jb praktik snsadhn seemit matra men hote hain, to badee bhut tejee se bdhtee hai; badee ke kar men vddhi ke s tvrit paitrn ko kya kha jata hai?",
    option: [
        "vddhighatee vddhi (Logistic Growth)",
        "chrghatankee vddhi (Exponential Growth)",
        "vhn kshmta (Carrying Capacity)",
        "jnsnkhya visphot (Population Explosion)"
    ],
    answer: "chrghatankee vddhi (Exponential Growth)"
},
{
    question: "Tamil Nadu ne 71veen seeniyr neshnl basketball chainpiynship (Senior National Basketball Championship) 2022 ke phanl men which teem ko hrakr purushon ka khitab (men's title) jeeta?",
    option: [
        "pshchim bngal",
        "pnjab",
        "gujrat",
        "Himachal Pradesh"
    ],
    answer: "pnjab"
},
{
    question: "mhasagreey ptl (oceanic crust) dhikanshth vibhinn prkar ke besalt se bnee hotee hai jo smudr tl ke neeche kitne kilomeetr tk phailee hotee hai?",
    option: [
        "15–22 km",
        "10–17 km",
        "2–5 km",
        "5–10 km"
    ],
    answer: "5–10 km"
},
{
    question: "kaun-sa nirdeshk siddhant svshasn ke li gram pnchayton ke gthn ka smrthn krta hai?",
    option: [
        "nuchchhed 44",
        "nuchchhed 40",
        "nuchchhed 42",
        "nuchchhed 46"
    ],
    answer: "nuchchhed 40"
},
{
    question: "bharteey shastreey nty Bharatanatyam kee tptti Which of the following which state men hu?",
    option: [
        "Karnataka",
        "Tamil Nadu",
        "Kerala",
        "Uttar Pradesh"
    ],
    answer: "Tamil Nadu"
},
{
    question: "First Five-Year Plan men which kshetr ko srvochch prathmikta dee g thee?",
    option: [
        "vsnrchna",
        "kshi",
        "rksha",
        "bharee dyog"
    ],
    answer: "kshi"
},
{
    question: "halda mhotsv which state men mnaya jata hai?",
    option: [
        "mdhyprdesh",
        "Himachal Pradesh",
        "ttrprdesh",
        "runachl prdesh"
    ],
    answer: "Himachal Pradesh"
},
{
    question: "Which of the following which mntraly ne, snsd men tel kshetr (viniymn vn development) snshodhn vidheyk, 2024 pesh kiya?",
    option: [
        "nveen vn nveekrneey rja mntraly",
        "koyla mntraly",
        "nagrik ddyn mntraly",
        "petroliym vn praktik gais mntraly"
    ],
    answer: "petroliym vn praktik gais mntraly"
},
{
    question: "1951–1990 ke dauran kitnee pnchvrsheey yojnan shamil kee gn?",
    option: [
        "6",
        "9",
        "8",
        "7"
    ],
    answer: "7"
},
{
    question: "2023 men paira shiyn gems sprdha men bhart which sthan pr rha?",
    option: [
        "chauthe",
        "chhthe",
        "panchven",
        "nauven"
    ],
    answer: "panchven"
},
{
    question: "which vishisht mittee ke brtn, ttr bhart men prarnbhik lauh yug kee bstiyon kee phchan bn g?",
    option: [
        "ttree kale plish ki hu brtn (Northern Black Polished Ware)",
        "Red plish ki hu brtn (Red Polished Ware)",
        "kale r Red brtn (Black-and-Red Ware)",
        "chitrit dhoosr brtn (Painted Grey Ware)"
    ],
    answer: "chitrit dhoosr brtn (Painted Grey Ware)"
},
{
    question: "peem gti shkti rashtreey mastr plan which vrsh shuroo kiya gya tha?",
    option: [
        "2023",
        "2020",
        "2021",
        "2022"
    ],
    answer: "2021"
},
{
    question: "Which of the following whiche rajy workpalika/workpalk nheen mana jata hai?",
    option: [
        "Chief Justice of the High Court",
        "Chief Minister",
        "mntriprishd",
        "Governor"
    ],
    answer: "Chief Justice of the High Court"
},
{
    question: "vitteey vrsh 2023–24 ke li kendreey bjt men kitnee prathmiktan pna gn?",
    option: [
        "5",
        "7",
        "9",
        "12"
    ],
    answer: "7"
},
{
    question: "jgjeet sinh sngeet ke Which of the following which kshetr se jude the?",
    option: [
        "jaij",
        "shastreey",
        "gjl",
        "pp"
    ],
    answer: "gjl"
},
{
    question: "Which of the following which nrtk/nrtkee ko 2018 men chh nty ke li sngeet natk kadmee purskar se smmanit kiya gya?",
    option: [
        "radha shreedhr",
        "tpn kumar pttnayk",
        "suroopa sen",
        "pshumoorti ramlinga shastree"
    ],
    answer: "tpn kumar pttnayk"
},
{
    question: "khilapht ndoln ka smrthn krne r hindoo-muslim kta ko mjboot krne ke li 1919 men which smooh ka gthn kiya gya tha?",
    option: [
        "khilapht smiti",
        "l ndiya muslim leeg",
        "hindoo mhasbha",
        "bharteey rashtreey kangres"
    ],
    answer: "khilapht smiti"
},

{
    question: "1 gst 2024 ko sngh lok seva yog ka nya dhyksh whiche niyukt kiya gya?",
    option: [
        "mohn madhvn",
        "rvi padhyay",
        "preeti soodn",
        "mnaj pmnyu"
    ],
    answer: "preeti soodn"
},
{
    question: "bhart kee jngnna 2011 ke nusar Which of the following which state kee jnsnkhya sbse km hai?",
    option: [
        "Assam",
        "Manipur",
        "Mizoram",
        "tripura"
    ],
    answer: "Mizoram"
},
{
    question: "bhart ke which state ke gnga delta/tteey maidanon men jula-gst ke dauran hr teesre/panchven din bharee vrsha ke sath toophan te hain?",
    option: [
        "Tamil Nadu",
        "Odisha",
        "Maharashtra",
        "gujrat"
    ],
    answer: "Tamil Nadu"
},
{
    question: "‘natoo natoo’ geet ke sngeetkar kaun hain?",
    option: [
        "m. m. keeravanee",
        "ke. je. yesudas",
        ". r. rhman",
        "s. pee. balsubrmnym"
    ],
    answer: "m. m. keeravanee"
},
{
    question: "bharteey vimann vidheyk, 2024 dvara niyamk work krne r surksha sunishchit krne ke li sthapit vaidhanik pradhikrn kaun-sa hai?",
    option: [
        "viman durghtna janch smiti",
        "viman durghtna janch byooro",
        "nagrik ddyn mhanideshaly (DGCA)",
        "nagrik ddyn surksha byooro (BCAS)"
    ],
    answer: "nagrik ddyn mhanideshaly (DGCA)"
},
{
    question: "koshikadrvy ka vh trl bhag jismen koshikang nheen hote r jo prokairiyotik ttha yookairiyotik koshikan men paya jata hai, kya khlata hai?",
    option: [
        "hayloplajm",
        "nyookliyoplajm",
        "protoplajm",
        "lasosom"
    ],
    answer: "hayloplajm"
},
{
    question: "shok ke shiRedekhon men kitne prmukh shiRedekh hain?",
    option: [
        "33",
        "34",
        "25",
        "36"
    ],
    answer: "14"
},
{
    question: "bhart men 2022 men shuroo ki g snyukt parsl tpad men kaun-se sngthn shamil the?",
    option: [
        "bharteey relve r ndiya post",
        "sdk privhn mntraly",
        "videsh mntraly",
        "ndiyn yrlans r ndiya post"
    ],
    answer: "bharteey relve r ndiya post"
},
{
    question: "subhash chndr bos ne jad hind phauj ka punrgthn which desh men kiya tha?",
    option: [
        "brma",
        "singapur",
        "jrmnee",
        "japan"
    ],
    answer: "singapur"
},
{
    question: "jngnna 2011 ke nusar bhart ka jnsnkhya ghntv kitna tha?",
    option: [
        "460 vykti prti vrg kimee",
        "405 vykti prti vrg kimee",
        "382 vykti prti vrg kimee",
        "368 vykti prti vrg kimee"
    ],
    answer: "382 vykti prti vrg kimee"
},
{
    question: "jula 2024 men d. saumya svameenathn ko rashtreey kshy rog nmooln workkrm ka prdhan slahkar which mntraly ne niyukt kiya?",
    option: [
        "gh mntraly",
        "bal dekhbhal mntraly",
        "vas vn klyan mntraly",
        "svasthy vn privar klyan mntraly"
    ],
    answer: "svasthy vn privar klyan mntraly"
},
{
    question: "prdhanmntree rojgar sjn workkrm (PMEGP) which vrsh shuroo kiya gya tha?",
    option: [
        "2007",
        "2009",
        "2006",
        "2008"
    ],
    answer: "2008"
},
{
    question: "panchveen r chhthee pnchvrsheey yojnan ke beech lagoo roling plan ke ddeshy kya the?",
    option: [
        "samajik nyay, rthik sthirta r development",
        "rojgar r kshetreey sntuln",
        "rthik snkt ka prbndhn r neetigt smayojn",
        "kshi r dyogik development"
    ],
    answer: "rthik snkt ka prbndhn r neetigt smayojn"
},
{
    question: "Manipur ke which nty/geet roop ko 2013 men UNESCO kee manvta kee moort sansktik virast kee prtinidhi soochee men shamil kiya gya tha?",
    option: [
        "maibee",
        "snkeertn",
        "sambl",
        "ras leela"
    ],
    answer: "snkeertn"
},
{
    question: "bharteey Constitution ka kaun-sa nuchchhed dhrm kee svtntrta ke right kee rksha krta hai?",
    option: [
        "nuchchhed 28",
        "nuchchhed 25",
        "nuchchhed 26",
        "nuchchhed 27"
    ],
    answer: "nuchchhed 25"
},
{
    question: "teerndajee men ndroonee svrn-vly pr k teer lgne pr dhiktm kitne nk milte hain?",
    option: [
        "10",
        "9",
        "5",
        "8"
    ],
    answer: "10"
},
{
    question: "1966–69 ke dauran yojna vkash (Plan Holiday) ka prmukh karn kya tha?",
    option: [
        "dareekrn",
        "pspheeti",
        "teesree pnchvrsheey yojna kee viphlta",
        "rajneetik sthirta"
    ],
    answer: "teesree pnchvrsheey yojna kee viphlta"
},
{
    question: "bhiny ke char ng—ngik, hary, vachik r sattvik—ttha ntt, nty r naty ke li kaun-sa nty jana jata hai?",
    option: [
        "Manipuri",
        "Bharatanatyam",
        "Kathaklee",
        "Kathak"
    ],
    answer: "Bharatanatyam"
},

{
    question: "jhavr tirunl whichanon ka tyohar which state men mnaya jata hai?",
    option: [
        "Kerala",
        "Tamil Nadu",
        "ndhr prdesh",
        "Telangana"
    ],
    answer: "Tamil Nadu"
},
{
    question: "bharteey Constitution kee which soochee men se vishy hain jin pr kendr r rajy donon kanoon bna skte hain?",
    option: [
        "vshisht soochee",
        "rajy soochee",
        "sngh soochee",
        "smvrtee soochee"
    ],
    answer: "smvrtee soochee"
},
{
    question: "lteemet kho-kho leeg seejn 2 ka phanl which sthan pr yojit kiya gya tha?",
    option: [
        "snblpur",
        "bhuvneshvr",
        "ktk",
        "rarkela"
    ],
    answer: "bhuvneshvr"
},
{
    question: "development ke chch str pr kaun-sa kshetr skl ghreloo tpad men dhik yogdan deta hai?",
    option: [
        "dyog",
        "kshi",
        "seva",
        "videsh"
    ],
    answer: "seva"
},

{
    question: "bharteey jngnna 2011 ke nusar, Which of the following which state men sakshrta dr sbse dhik hai?",
    option: [
        "Kerala",
        "Assam",
        "Goa",
        "Tamil Nadu"
    ],
    answer: "Kerala"
},

{
    question: "pndit shvree prsad, Kathak ke Which of the following which ghrane se snbndhit the?",
    option: [
        "raygdh ghrane",
        "lkhn ghrane",
        "bnars ghrane",
        "jypur ghrane"
    ],
    answer: "raygdh ghrane"
},

{
    question: "peel (IPL) 2023 men which khiladee ko prpl kaip milee?",
    option: [
        "rashid khan",
        "mohit shrma",
        "Mohammed Shami",
        "peeyoosh chavla"
    ],
    answer: "Mohammed Shami"
},

{
    question: "srhul tsv Which of the following which state men mnaya jata hai?",
    option: [
        "Himachal Pradesh",
        "jharkhnd",
        "Uttar Pradesh",
        "ttrakhnd"
    ],
    answer: "jharkhnd"
},

{
    question: "snvaidhanik nikay r ske nodl mntraly ke snbndh men Which of the following kaun-sa yugm shee sumelit hai?",
    option: [
        "sngh lok seva yog - karmik, lok shikayt vn penshn mntraly",
        "ntr rajy prishd - vitt mntraly",
        "rashtreey nusoochit jati yog - jnjateey work mntraly",
        "bhart ke trnee jnrl - gh mntraly"
    ],
    answer: "sngh lok seva yog - karmik, lok shikayt vn penshn mntraly"
},

{
    question: "20 jula 1969 ko merikee ntriksh yatree neel rmstrang whichke sath chndrma pr trne vale phle manv bne?",
    option: [
        "yooree gagrin (Yuri Gagarin)",
        "jn glen (John Glenn)",
        "ln sheprd (Alan Shepard)",
        "dvin ldrin (Edwin Aldrin)"
    ],
    answer: "dvin ldrin (Edwin Aldrin)"
},

{
    question: "'vanijy (commerce)' shbd mukhyth whiche sndrbhit krta hai?",
    option: [
        "kshi gtividhiyon ko",
        "vstun ke tpadn ko",
        "vstun ke vitrn ko",
        "vstun ke vinirman ko"
    ],
    answer: "vstun ke vitrn ko"
},

{
    question: "poriphera sngh (phylum Porifera) ka kaun-sa sdsy hmare grh pr bhee bhee vidyman sbse purana metajon smooh (metazoan group) hai?",
    option: [
        "sakn (Sycon)",
        "neemon (Anemones)",
        "hadra (Hydra)",
        "spnj (Sponges)"
    ],
    answer: "spnj (Sponges)"
},

{
    question: "kenesiyn rthshastr (Keynesian economics) ke sndrbh men, ti-skriy rthvyvstha (overheated economy) ke li srkar kee k drsh prtikriya kya hogee?",
    option: [
        "srkaree vyy men vddhi kr dena",
        "snkuchnkaree rajkosheey neetiyon ko lagoo krna",
        "kron men kmee krna",
        "pbhokta vyy ko protsahit krna"
    ],
    answer: "snkuchnkaree rajkosheey neetiyon ko lagoo krna"
},

{
    question: "September 2024 tk prapt jankaree ke nusar, brigediyr (d.) bee.dee. mishra (sevanivtt) Which of the following which kendr shasit prdesh ke pGovernor hain?",
    option: [
        "jmmoo r kshmeer",
        "puducheree",
        "dillee",
        "lddakh"
    ],
    answer: "lddakh"
},

{
    question: "Which of the following kaun-sa geet kishor kumar dvara nheen gaya gya tha?",
    option: [
        "kora kagj tha ye mn mera",
        "yaree hai mam mera yar meree jindgee",
        "dekha k khvab",
        "gata rhe mera dil"
    ],
    answer: "dekha k khvab"
},

{
    question: "vh vdhi jb hm lgbhg 12,000 vrsh poorv se lekr lgbhg 10,000 vrsh poorv tk pryavrneey privrtn pate hain, sko kya khte hain?",
    option: [
        "mdhypashan (Mesolithic)",
        "lghupashan (Microliths)",
        "nvpashan (Neolithic)",
        "purapashan (Palaeolithic)"
    ],
    answer: "mdhypashan (Mesolithic)"
},

{
    question: "bhart ke prdhanmntree ne 'dhrtee ba jnjateey gram tkrsh bhiyan (Dharti Aaba Janjatiya Gram Utkarsh Abhiyan)' kb lnch kiya?",
    option: [
        "jula 2024",
        "disnbr 2024",
        "nvmbr 2024",
        "ktoobr 2024"
    ],
    answer: "ktoobr 2024"
},

{
    question: "whichee vishesh ndee ya jheel men pvahit hone valee bhoomi ke kshetr ka vrnn krne ke li which shbd ka pyog kiya jata hai?",
    option: [
        "delta (Delta)",
        "jl-snbhr (Watershed)",
        "muhana (Estuary)",
        "jlashy (Reservoir)"
    ],
    answer: "jl-snbhr (Watershed)"
},

{
    question: "k srv ko net se 1.98 m (6.5 ft) door sthit shrt srvis lan se gujrna chahi 'shrt srvis lan' (Short Service Line) _____ men k lan hai",
    option: [
        "tebl tenis",
        "tenis",
        "Badminton",
        "skvash"
    ],
    answer: "Badminton"
},

{
    question: "bharteey Constitution ke which snshodhn ke madhym se shiksha ke right ko Fundamental Rights ke roop men namit kiya gya tha?",
    option: [
        "42ven snshodhn",
        "61ven snshodhn",
        "86ven snshodhn",
        "73ven snshodhn"
    ],
    answer: "86ven snshodhn"
},

{
    question: "nty r sngeet kee theyym nushthanik kla shailee (Theyyam ritual art form) se snbndhit naraynn . pee. ko which vrsh pdmshree se smmanit kiya gya tha?",
    option: [
        "2020",
        "2022",
        "2024",
        "2018"
    ],
    answer: "2024"
},

{
    question: "british srkar ne teesre golmej smmeln kee snstutiyon ke dhar pr shvet ptr (White Paper) Which of the following which vrsh prkashit kiya tha?",
    option: [
        "1931",
        "1933",
        "1934",
        "1932"
    ],
    answer: "1933"
},

{
    question: "tmnirbhr bhart rojgar yojna which tithi ko rnbh kee g thee?",
    option: [
        "1 nvnbr 2023",
        "1 ktoobr 2015",
        "31 ktoobr 2021",
        "1 ktoobr 2020"
    ],
    answer: "1 ktoobr 2020"
},
{
    question: "2024 ke pdm shree purskar se smmanit mhaveer sinh guddoo which bharteey rajy ke lok nty klakar (folk dancer) hain?",
    option: [
        "Rajasthan",
        "gujrat",
        "Uttar Pradesh",
        "Haryana"
    ],
    answer: "Rajasthan"
},
{
    question: "who s bat kee vkalt kee thee ki bhart vastv men tbhee svtntr hoga jb ske sbse greeb log manveey peeda se mukt honge?",
    option: [
        "mhatma gandhee",
        "ndira gandhee",
        "jvahr Red nehroo",
        "subhash chndr bos"
    ],
    answer: "mhatma gandhee"
},
{
    question: "September 2024 tk prapt jankaree ke nusar bhart ke kaibinet schiv kaun hain?",
    option: [
        "jeet kumar seth",
        "tee.vee. somnathn",
        "rajeev gauba",
        "prdeep kumar sinha"
    ],
    answer: "tee.vee. somnathn"
},
{
    question: "tamrpashan kal kee malva bstiyon kee tydhik sghnta Which of the following which sthan men pa g?",
    option: [
        "mhandee besin",
        "mdhy nrmda besin",
        "sindhu besin",
        "gnga besin"
    ],
    answer: "mdhy nrmda besin"
},
{
    question: "plet-tektonik bandree (plate tectonic boundaries) kitne prkar kee hotee hain?",
    option: [
        "do",
        "char",
        "panch",
        "teen"
    ],
    answer: "teen"
},
{
    question: "rajy vidhan sbha (State Legislative Assembly) men _________ kee poorv numti ke bina ko dhn vidheyk prstut nheen kiya ja skta hai",
    option: [
        "pChief Minister",
        "speekr",
        "Governor",
        "Chief Minister"
    ],
    answer: "Governor"
},
{
    question: "khilapht ndoln (Khilafat Movement) Which of the following which smuday se snbndhit tha?",
    option: [
        "sikh",
        "sa",
        "hindoo",
        "muslim"
    ],
    answer: "muslim"
},
{
    question: "srkar kee vistarvadee rajkosheey neeti se m taur pr which prinam kee peksha kee jatee hai?",
    option: [
        "chch byaj dren",
        "sarvjnik vyy r nivesh men kmee",
        "srkaree bcht men vddhi",
        "rthik development ko protsahn"
    ],
    answer: "rthik development ko protsahn"
},
{
    question: "kbddee men lona (Lona) ke li kitne nk milte hain?",
    option: [
        "teen",
        "panch",
        "char",
        "do"
    ],
    answer: "do"
},
{
    question: "dkshinee bhart kee Which of the following which shastreey nty shailee ko 'blram Bharatam' r 'hstlkshn deepika' se pnee shabdik sveekti (textual sanction) miltee hai?",
    option: [
        "Kathaklee",
        "mohineettm",
        "kuchipudee",
        "sttriya"
    ],
    answer: "kuchipudee"
},
{
    question: "bharteey Constitution ke Fundamental Rights ke roop men snvaidhanik pcharon ke right ka llekh which nuchchhed men kiya gya hai?",
    option: [
        "nuchchhed 32",
        "nuchchhed 31",
        "nuchchhed 34",
        "nuchchhed 33"
    ],
    answer: "nuchchhed 32"
},
{
    question: "ktoobr 2024 tk kee sthiti ke nusar, bhart ke niyntrk vn mhalekha preekshk (CAG) kaun hain?",
    option: [
        "mnohr Red",
        "shivraj sinh chauhan",
        "gireesh chndr murmoo",
        "nirmla seetarmn"
    ],
    answer: "gireesh chndr murmoo"
},
{
    question: "gombehbba (Gombe Habba), nvratri ke dauran Karnataka rajy men mnaya jane vala, ______________ ka k tyohar hai",
    option: [
        "gudiyon",
        "ndiyon",
        "phadon",
        "ptngon"
    ],
    answer: "gudiyon"
},
{
    question: "nphchs 5 (NFHS 5) ke nusar, vrsh 2019-21 ke dauran bharteey jnsnkhya ka kitna prtisht hissa peene ke panee se vnchit tha?",
    option: [
        "3.27%",
        "2.06%",
        "7.32%",
        "5.27%"
    ],
    answer: "3.27%"
},
{
    question: "hrit kranti ke bad kshi pddhtiyon men kya privrtn dekha gya?",
    option: [
        "km pj valee phslon se dhik pj valee phslon kee r visthapn",
        "rvrkon ke pyog men kmee",
        "nkdee phslon se jeevika khetee kee r visthapn",
        "kevl gehoon kee kl kshi pr dhyan kendrit krna"
    ],
    answer: "km pj valee phslon se dhik pj valee phslon kee r visthapn"
},
{
    question: "ghans → mpala → lkdbggha ke vn paristhitikee tntr men, ydi sbhee lkdbgghe hta di jan, to ntth kya hoga?",
    option: [
        "mpala sdaiv khushee se rhega",
        "dhik jnsnkhya ke karn mpala bhookhmree se mr jaga",
        "ghans kee bhoomi pr ko prbhav nheen pdega",
        "mpala kee jnsnkhya sthir rhegee"
    ],
    answer: "dhik jnsnkhya ke karn mpala bhookhmree se mr jaga"
},
{
    question: "hindee philm sngeet men brajeeliya bosa nova ly (Brazilian bossa nova rhythm) kee shurut sbse phle who kee thee?",
    option: [
        ". pee. nyyr",
        "r. dee. brmn",
        ". r. rhman",
        "nu mlik"
    ],
    answer: "r. dee. brmn"
},
{
    question: "greek kshr ν (nu) bhautikee men kya drshata hai?",
    option: [
        "trng kee vtti",
        "whichee pdarth ka ghntv",
        "knon ka veg",
        "ghrshn gunank"
    ],
    answer: "trng kee vtti"
},
{
    question: "Which of the following kaun-sa/kaun-se kthn glt hai/hain?\ni. 'sjeesva (SGSY)' yojna 2009 men lagoo kee g thee\nii. 'sjeesva (SGSY)' yojna ka prathmik ddeshy svrojgar ko bdhava dena r prapt krna tha\niii. ndhr prdesh men 'sjeesva (SGSY)' yojna ne chchha prdrshn kiya",
    option: [
        "kevl iii",
        "kevl i",
        "kevl ii",
        "kevl ii r iii"
    ],
    answer: "kevl i"
},
{
    question: "tenis men, ntrrashtreey tenis mhasngh ke nusar yugl maich ke li kort _________ chauda hona chahi",
    option: [
        "38 ft",
        "36 ft",
        "35 ft",
        "37 ft"
    ],
    answer: "36 ft"
},
{
    question: "bhart men 'hrit kranti' ke jnk ke roop men whiche jana jata hai?",
    option: [
        "d. m. s. svameenathn",
        "d. vrgeej kuriyn",
        "nrmn borlg",
        "d. homee bhabha"
    ],
    answer: "d. m. s. svameenathn"
},

{
    question: "bharteey Constitution ka kaun-sa nuchchhed equality ke right se snbndhit hai?",
    option: [
        "nuchchhed 14",
        "nuchchhed 19",
        "nuchchhed 21",
        "nuchchhed 32"
    ],
    answer: "nuchchhed 14"
},

{
    question: "bhart ka rashtreey khel kaun-sa hai?",
    option: [
        "hkee",
        "kriket",
        "phutbl",
        "kbddee"
    ],
    answer: "hkee"
},

{
    question: "sindhu ghatee sbhyta ka prmukh bndrgah kaun-sa tha?",
    option: [
        "lothl",
        "hdppa",
        "mohnjoddo",
        "kaleebnga"
    ],
    answer: "lothl"
},

{
    question: "bharteey rijrv baink (RBI) kee sthapna which vrsh hu thee?",
    option: [
        "1935",
        "1947",
        "1950",
        "1925"
    ],
    answer: "1935"
},

{
    question: "bhart ke prthm rashtrpti kaun the?",
    option: [
        "d. rajendr prsad",
        "d. srvpllee radhakshnn",
        "jvahrRed nehroo",
        "d. bee. r. nbedkr"
    ],
    answer: "d. rajendr prsad"
},

{
    question: "pthvee ka sbse bda mhasagr kaun-sa hai?",
    option: [
        "prshant mhasagr",
        "tlantik mhasagr",
        "hind mhasagr",
        "rktik mhasagr"
    ],
    answer: "prshant mhasagr"
},

{
    question: "bharteey Constitution ko kb ngeekt kiya gya tha?",
    option: [
        "26 nvnbr 1949",
        "15 gst 1947",
        "26 jnvree 1950",
        "2 ktoobr 1948"
    ],
    answer: "26 nvnbr 1949"
},

{
    question: "vishv ka sbse bda mhadveep kaun-sa hai?",
    option: [
        "shiya",
        "phreeka",
        "yoorop",
        "ttree merika"
    ],
    answer: "shiya"
},

{
    question: "bhart men pnchaytee raj vyvstha which Constitution snshodhn dvara lagoo kee g?",
    option: [
        "73van Constitution snshodhn",
        "42van Constitution snshodhn",
        "44van Constitution snshodhn",
        "52van Constitution snshodhn"
    ],
    answer: "73van Constitution snshodhn"
},

{
    question: "which grh ko 'Red grh' kha jata hai?",
    option: [
        "mngl",
        "bhspti",
        "shni",
        "shukr"
    ],
    answer: "mngl"
},

{
    question: "bhart ka sbse bda rajy kshetrphl ke dhar pr kaun-sa hai?",
    option: [
        "Rajasthan",
        "mdhy prdesh",
        "Maharashtra",
        "Uttar Pradesh"
    ],
    answer: "Rajasthan"
},

{
    question: "bharteey Constitution kee prstavna men kitne prkar ke nyay ka llekh hai?",
    option: [
        "teen",
        "do",
        "char",
        "panch"
    ],
    answer: "teen"
},

{
    question: "nobel purskar pane vale phle bharteey kaun the?",
    option: [
        "rveendrnath taigor",
        "see. vee. rmn",
        "mdr teresa",
        "mrty sen"
    ],
    answer: "rveendrnath taigor"
},

{
    question: "bhart men rashtreey vijnyan divs kb mnaya jata hai?",
    option: [
        "28 phrvree",
        "15 gst",
        "5 June",
        "26 jnvree"
    ],
    answer: "28 phrvree"
},

{
    question: "vayumndl men sbse dhik matra men kaun-see gais pa jatee hai?",
    option: [
        "natrojn",
        "kseejn",
        "karbn daksad",
        "hadrojn"
    ],
    answer: "natrojn"
},

{
    question: "bhart kee phlee mhila prdhanmntree kaun theen?",
    option: [
        "ndira gandhee",
        "srojinee naydoo",
        "prtibha patil",
        "sushma svraj"
    ],
    answer: "ndira gandhee"
},

{
    question: "snyukt rashtr sngh (UNO) kee sthapna which vrsh hu?",
    option: [
        "1945",
        "1947",
        "1950",
        "1939"
    ],
    answer: "1945"
},

{
    question: "bharteey Constitution kee rksha r vyakhya krne ka ntim right whichke pas hai?",
    option: [
        "srvochch nyayaly",
        "snsd",
        "rashtrpti",
        "prdhanmntree"
    ],
    answer: "srvochch nyayaly"
},

{
    question: "rashtreey mtdata divs bhart men kb mnaya jata hai?",
    option: [
        "25 jnvree",
        "26 jnvree",
        "15 gst",
        "2 ktoobr"
    ],
    answer: "25 jnvree"
},
{
    question: "Which of the following which pnchvrsheey yojna men nyoontm vshykta (minimum needs) workkrm shuroo kiya gya tha?",
    option: [
        "chturth",
        "tteey",
        "panchveen",
        "chhthee"
    ],
    answer: "panchveen"
},

{
    question: "1887 men, henrik rudolph hrtj (Heinrich Rudolf Hertz) ne whichke kam ko pne pryogon kee k shrnkhla ko krne ke li lagoo kiya, jisse nhonne rediyo trngen tpnn keen?",
    option: [
        "kristiyan hyoojens (Christiaan Huygens)",
        "thms yng (Thomas Young)",
        "jems klrk maiksvel (James Clerk Maxwell)",
        "krishchiyn dplr (Christian Doppler)"
    ],
    answer: "jems klrk maiksvel (James Clerk Maxwell)"
},

{
    question: "bhart kee jngnna 2011 ke nusar Which of the following which kendr shasit prdesh kee jnsnkhya sbse km hai?",
    option: [
        "chndeegdh",
        "dmn r deev",
        "dadra r ngr hvelee",
        "puducheree"
    ],
    answer: "dmn r deev"
},

{
    question: "chch nyayalyon ke mukhy nyayadheesh r nyayadheeshon kee niyukti whichke dvara kee jatee hai?",
    option: [
        "Chief Minister",
        "prdhanmntree",
        "Governor",
        "rashtrpti"
    ],
    answer: "rashtrpti"
},

{
    question: "kaun-see prvtmala tribhujakar hai, jiska sheersh rtnapuree pr hai, ttha ny do bhujan (sides) taptee r pvitr nrmda ndee ke smanantr hain?",
    option: [
        "ravlee prvtmala",
        "peer pnjal prvtmala",
        "poorvanchl prvtmala",
        "stpuda prvtmala"
    ],
    answer: "stpuda prvtmala"
},

{
    question: "maury rajdhanee patliputr kee yatra krne vala yoonanee doot Which of the following kaun tha, jiska vttant maury kal ka k prmukh srot hai?",
    option: [
        "plinee",
        "herodots",
        "megsthneej",
        "riyn"
    ],
    answer: "megsthneej"
},

{
    question: "tebl tenis men, k srvis ke dauran numt krmagt lets (lets) kee dhiktm snkhya kitnee hotee hai?",
    option: [
        "ko seema nheen",
        "do",
        "k",
        "teen"
    ],
    answer: "ko seema nheen"
},

{
    question: "1930 men dandee nmk march ka nettv who kiya?",
    option: [
        "mhatma gandhee",
        "srdar vllbh bha ptel",
        "jvahrRed nehroo",
        "rajendr prsad"
    ],
    answer: "mhatma gandhee"
},

{
    question: "mishrit rthvyvstha men kaun-kaun se kshetr milkr kam krte hain?",
    option: [
        "srkaree r shkaree",
        "videshee r nijee",
        "srkaree r nijee",
        "nijee r krporet"
    ],
    answer: "srkaree r nijee"
},

{
    question: "15 gst 1947 ko bhart kee jadee ke smy dillee ke Red kile pr bharteey dhvj phhrate smy pnee prstuti dene vale shhna vadk Which of the following kaun the?",
    option: [
        "lee kbr khan",
        "hemnt kumar",
        "bismillah khan",
        "ramnad raghvn"
    ],
    answer: "bismillah khan"
},

{
    question: "bhart men sthaneey prnpran ke nusar chingm (gst/September) mheene men Which of the following kaun-sa tyohar ds dinon tk mnaya jata hai?",
    option: [
        "nm",
        "mkr snkranti",
        "bihoo",
        "pongl"
    ],
    answer: "nm"
},

{
    question: "yaminee kshnmoorti ko nty kee which shailee kee 'sthana nrtkee' ke roop men phchan milee?",
    option: [
        "mohineettm r striya",
        "Bharatanatyam r kuchipudee",
        "Odissi r Kathak",
        "Kathaklee r Manipuri"
    ],
    answer: "Bharatanatyam r kuchipudee"
},

{
    question: "1973 ke vaishvik tel snkt ka, panchveen pnchvrsheey yojna (1974-1979) pr kya prbhav pda?",
    option: [
        "sse yojna ke dyogikeekrn ddeshyon men tejee ",
        "ska yojna pr ko khas prbhav nheen pda",
        "sse kshi pr di jane vale dhyan men kmee ",
        "yh rthik vyvdhan r punh prathmikta nirdharn ka karn bna"
    ],
    answer: "yh rthik vyvdhan r punh prathmikta nirdharn ka karn bna"
},

{
    question: "kendreey mntree d. jitendr sinh ko which kshetr men nke mhtvpoorn yogdan ke li 'laphtam cheevment vard' prdan kiya gya?",
    option: [
        "kainsr nusndhan (Cancer research)",
        "mdhumeh dekhbhal r nusndhan (Diabetes care and research)",
        "bal dekhbhal r nusndhan (Child care and research)",
        "tvchavijnyan nusndhan (Dermatology research)"
    ],
    answer: "mdhumeh dekhbhal r nusndhan (Diabetes care and research)"
},

{
    question: "31 dismbr 1947 ko Constitution sbha men kitne sdsy the?",
    option: [
        "195",
        "334",
        "200",
        "299"
    ],
    answer: "299"
},

{
    question: "SRS buletin 2020 ke nusar bhart men jnm dr kitnee thee?",
    option: [
        "23.3",
        "19.5",
        "21.8",
        "17.6"
    ],
    answer: "19.5"
},

{
    question: "Which of the following kaun-sa paudha teridophat hai jo samanyth nm, chhayadar sthanon ya bgeechon r phadiyon pr paya jata hai jhan tapman km hota hai?",
    option: [
        "prphara (Porphyra)",
        "phrn (Ferns)",
        "riksiya (Riccia)",
        "sphaignm (Sphagnum)"
    ],
    answer: "phrn (Ferns)"
},

];

// =====================================================
// ENGLISH (20) - English Grammar/Vocab
// =====================================================
const englishQuestions = [

{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error.\nJackson told Aria, \"Generally, I am grateful for your help.\"",
    option: [
        "\"Generally, I am",
        "your help.\"",
        "grateful for",
        "Jackson told Aria,"
    ],
    answer: "\"Generally, I am"
},
{
    question: "Select the option that best defines the given word.\nBanish",
    option: [
        "To harm",
        "To evaluate",
        "To relegate",
        "To determine"
    ],
    answer: "To relegate"
},
{
    question: "Select the most appropriate meaning of the given word.\nDilemma",
    option: [
        "Situation",
        "Portion",
        "Worn",
        "Plight"
    ],
    answer: "Plight"
},
{
    question: "Select the word segment that can substitute the bracketed word segment correctly and complete the sentence. Select 'No correction required' if the given segment is correct.\n(Did she gave) her business card to the clients at the party last night?",
    option: [
        "Did she give her business card to the clients at the party last night?",
        "Did she given her business card to the clients at the party last night?",
        "Does she gave her business card to the clients at the party last night?",
        "No correction required"
    ],
    answer: "Did she give her business card to the clients at the party last night?"
},
{
    question: "Select the most appropriate meaning of the underlined idiom.\nHe suddenly tried to throw cold water on my plans.",
    option: [
        "To take revenge",
        "To understand the hidden meaning",
        "To seize the opportunity",
        "To discourage"
    ],
    answer: "To discourage"
},
{
    question: "Select the most appropriate option to substitute the underlined segment in the given sentence.\nThe article that you have submitted isn’t make sense to me.",
    option: [
        "does it make sense",
        "doesn’t make sense",
        "is it making sense",
        "doesn’t it make sense"
    ],
    answer: "doesn’t make sense"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nDainty",
    option: [
        "Timid",
        "Critical",
        "Inelegant",
        "Demanding"
    ],
    answer: "Inelegant"
},
{
    question: "Identify the INCORRECTLY spelt word in the given sentence.\nThe chef used a special recepie for the gourmet dish.",
    option: [
        "Special",
        "Recepie",
        "Chef",
        "Gourmet"
    ],
    answer: "Recepie"
},
{
    question: "Select the most appropriate option to fill in the blank.\nRam dropped the glass and it shattered on the floor. 'Drop' here means ____________.",
    option: [
        "stopped",
        "fall or let fall",
        "an ascent",
        "pay a casual visit"
    ],
    answer: "fall or let fall"
},
{
    question: "Parts of the following sentence have been given as options. Select the option that contains an error.\nThe experimental chef combined flavours audacious and with an almost synesthetic sensibility, creating dishes that challenged the very notion of culinary categories.",
    option: [
        "culinary categories",
        "experimental chef",
        "combined flavours audacious",
        "almost synesthetic sensibility"
    ],
    answer: "combined flavours audacious"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence. If there is no need to substitute it, select ‘No substitution required’.\nAll criminal tendencies must be nipped on the bud during childhood.",
    option: [
        "No substitution required",
        "nipped off the bud",
        "nipped at the bud",
        "nipped in the bud"
    ],
    answer: "nipped in the bud"
},
{
    question: "Select the word that best completes the given sentence. Determine the collocation through the sentence.\nMarz would describe it in ___________ detail.",
    option: [
        "great",
        "elaborate",
        "big",
        "good"
    ],
    answer: "great"
},
{
    question: "Select the most appropriate option to substitute the underlined segment in the given sentence.\nHe enjoy going in a jog in the morning to start his day on a healthy note.",
    option: [
        "has been enjoyed go in the jog",
        "enjoys going for a jog",
        "is enjoy going at a jog",
        "will enjoy going to a jog"
    ],
    answer: "enjoys going for a jog"
},
{
    question: "Select the option that rectifies the spelling error in the given sentence.\nHe was determined to acomplish his goals.",
    option: [
        "detarmined",
        "determened",
        "accomplish",
        "accompalish"
    ],
    answer: "accomplish"
},
{
    question: "Select the most appropriate synonym of the given word.\nPetite",
    option: [
        "Flexible",
        "Best",
        "Small",
        "Fit"
    ],
    answer: "Small"
},
{
    question: "Select the word that best completes the given sentence. Determine the collocation through the sentence.\n\nVarun, the chef, ______________ up a delicious meal in just 30 minutes.",
    option: [
        "whipped",
        "kept",
        "hit",
        "held"
    ],
    answer: "whipped"
},
{
    question: "Identify the sentence with the INCORRECT usage of an adverb.",
    option: [
        "Mahesh and Mukesh are always late for work.",
        "We are hardly ever late for work.",
        "They are usually late for work.",
        "Chandni is late often for work."
    ],
    answer: "Chandni is late often for work."
},
{
    question: "Select the most appropriate ANTONYM of the underlined word in the following sentence to fill in the blank.\n\nThe police thought that the theft was deliberate, but it was _________.",
    option: [
        "unintentional",
        "prepared",
        "expected",
        "planned"
    ],
    answer: "unintentional"
},
{
    question: "Select the most appropriate option to fill in the blank.\n\nShe is the one _____ won the award.",
    option: [
        "whom",
        "which",
        "who",
        "whose"
    ],
    answer: "who"
},
{
    question: "Select the correct spelling of the underlined incorrectly spelt word in the given sentence.\n\nThe next generation has become well-travelled, tech-savyy and hardworking.",
    option: [
        "tech-savvy",
        "tech-savee",
        "tech-saivy",
        "tec-savvy"
    ],
    answer: "tech-savvy"
},
{
    question: "Select the INCORRECTLY spelt word in the given sentence.\n\nThe atmosphere at the consert was electric.",
    option: [
        "atmosphere",
        "consert",
        "electric",
        "was"
    ],
    answer: "consert"
},
{
    question: "Select the most appropriate synonym of the underlined word.\n\nThe vintage bag was made of coarse black leather.",
    option: [
        "Rough",
        "Secure",
        "Brief",
        "Honest"
    ],
    answer: "Rough"
},
{
    question: "Select the sentence with an error in the adverb used.",
    option: [
        "He spoke softly enough to avoid waking the baby.",
        "She had scarcely begun her speech when the microphone failed.",
        "They performed the task surprisingly well despite the challenges.",
        "The solution was applied so effective that it resolved the issue immediately."
    ],
    answer: "The solution was applied so effective that it resolved the issue immediately."
},
{
    question: "Select the most appropriate ANTONYM of the given word.\n\nAbate",
    option: [
        "Consume",
        "Intensify",
        "Reduce",
        "Supply"
    ],
    answer: "Intensify"
},
{
    question: "Select the most appropriate option to fill in the blank.\n\nThe project manager’s _______________ approach ensured that every aspect of the project was meticulously planned and executed.",
    option: [
        "methodical",
        "erratic",
        "negligent",
        "lax"
    ],
    answer: "methodical"
},
{
    question: "Select the most appropriate synonym of the given word.\n\nStrange",
    option: [
        "Safe",
        "Odd",
        "Mild",
        "Stable"
    ],
    answer: "Odd"
},
{
    question: "Select the most appropriate meaning of the given idiom.\n\nBide one’s time",
    option: [
        "To face a difficult situation with courage and determination",
        "To wait patiently for an opportunity",
        "To accidentally reveal a secret",
        "To join a popular trend or activity"
    ],
    answer: "To wait patiently for an opportunity"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence.\n\nShe always do her work in time.",
    option: [
        "always will done",
        "always done",
        "always does",
        "always doing"
    ],
    answer: "always does"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\n\nEsoteric",
    option: [
        "Arcane",
        "Cryptic",
        "Abstruse",
        "Common"
    ],
    answer: "Common"
},
{
    question: "Select the most appropriate option to fill in the blank.\n\nShe decided to go on a/an ____________________ vacation.",
    option: [
        "tropic",
        "expandable",
        "recreational",
        "notorious"
    ],
    answer: "recreational"
},

{
    question: "Select the option that rectifies the underlined spelling error.\nThe students had to write an essay for their asignment.",
    option: [
        "assignmant",
        "assignment",
        "essignment",
        "asignmant"
    ],
    answer: "assignment"
},
{
    question: "Identify the sentence with the INCORRECTLY spelt word.",
    option: [
        "The bakery makes delicious pastries every day.",
        "The students wrote an interesting essey on the topic.",
        "The film was praised for its stunning cinematography.",
        "The scientist presented his findings at the conference."
    ],
    answer: "The students wrote an interesting essey on the topic."
},
{
    question: "Select the most appropriate ANTONYM of the word in brackets to fill in the blank.\nThe widespread ______________________(destruction) of the natural world threatens the food we eat, the water we drink and the air we breathe.",
    option: [
        "contribution",
        "creation",
        "choice",
        "condition"
    ],
    answer: "creation"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nFlaunt",
    option: [
        "Hide",
        "Open",
        "Parade",
        "Wide"
    ],
    answer: "Hide"
},
{
    question: "Select the most appropriate option to fill in the blank.\nWe will complete the project _________ without external help.",
    option: [
        "themselves",
        "itself",
        "oneself",
        "ourselves"
    ],
    answer: "ourselves"
},
{
    question: "Select the correct collocation to fill in the blank.\nThe teacher gave the students ______ instructions before the exam.",
    option: [
        "strong",
        "clear",
        "great",
        "careful"
    ],
    answer: "clear"
},
{
    question: "Select the most appropriate idiom that can substitute the underlined segment in the given sentence.\nWhen it comes to cooking, she can really think creatively and unconventionally to create unique dishes that surprise everyone.",
    option: [
        "outside the wire",
        "outside the canvas",
        "outside the law",
        "outside the box"
    ],
    answer: "outside the box"
},
{
    question: "Select the most appropriate option to fill in the blank.\nIt is a sin against God and humanity to ________ places of religious worship.",
    option: [
        "desecrate",
        "upright",
        "modest",
        "disapprove"
    ],
    answer: "desecrate"
},
{
    question: "The following sentence has been divided into parts. One of them may contain an error. Select the part that contains the error from the given options. If you don’t find any error, mark ‘No error’ as your answer.\nAlka had been writing / to her boss until she realises / that he was not interested in resolving her issues.",
    option: [
        "Alka had been writing",
        "to her boss until she realises",
        "that he was not interested in resolving her issues",
        "No error"
    ],
    answer: "to her boss until she realises"
},
{
    question: "Select the most appropriate synonym of the given word.\nBroad",
    option: [
        "Wide",
        "Small",
        "Exact",
        "Particular"
    ],
    answer: "Wide"
},
{
    question: "Select the most appropriate option to fill in the blank.\nThe dog ran _____ the garden chasing the cat.",
    option: [
        "between",
        "at",
        "across",
        "on"
    ],
    answer: "across"
},
{
    question: "Select the most appropriate option to fill in the blank.\nGrey _____ is no sure sign of attaining wisdom.",
    option: [
        "hare",
        "heir",
        "air",
        "hair"
    ],
    answer: "hair"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nArrogant",
    option: [
        "Humble",
        "Clumsy",
        "Average",
        "Creepy"
    ],
    answer: "Humble"
},
{
    question: "The following sentence has been split into four segments. Identify the segment that contains a grammatical error.\n(A) He spoke passionately about his favourite book, / (B) articulating his thoughts clear / (C) and engaging everyone in a lively discussion / (D) about its themes.",
    option: [
        "C",
        "D",
        "A",
        "B"
    ],
    answer: "B"
},
{
    question: "Select the most appropriate meaning of the given idiom.\nMan of straw",
    option: [
        "A situation like a close contest",
        "A child of a celebrity or a famous person",
        "A person who is disregarded as lacking character or morality",
        "A combination of two people that is perfect in every way"
    ],
    answer: "A person who is disregarded as lacking character or morality"
},

{
    question: "Identify the INCORRECTLY spelt word in the given sentence.\nThe report was filled with spurious data and ambigous conclusions, making it untenable to rely on.",
    option: [
        "conclusions",
        "spurious",
        "untenable",
        "ambigous"
    ],
    answer: "ambigous"
},
{
    question: "Select the most appropriate word segment that rectifies the bracketed word segment and complete the given sentence meaningfully.\nIt took quite (few some time) to finish the project.",
    option: [
        "some time",
        "time",
        "some a time",
        "a time some"
    ],
    answer: "some time"
},
{
    question: "Select the most appropriate synonym of the highlighted word.\nYou need to have at least a rudimentary understanding of technology before you can upload a video on website.",
    option: [
        "primitive",
        "mysterious",
        "exquisite",
        "creative"
    ],
    answer: "primitive"
},
{
    question: "Select the INCORRECTLY spelt word in the following sentence.\n\"I can't believe I recieved such a beautiful gift.\"",
    option: [
        "believe",
        "recieved",
        "gift",
        "such"
    ],
    answer: "recieved"
},
{
    question: "Select the most appropriate idiom to substitute the underlined phrase in the given sentence.\nWhen it comes to negotiations, he knows how to act in a way that maximises his advantages and get the best deal.",
    option: [
        "play his cards right",
        "play it by air",
        "play it safe",
        "play it by the ear"
    ],
    answer: "play his cards right"
},
{
    question: "Fill in the blank with the most appropriate synonym of the word in brackets in the following sentence.\nIn that case, a gentle chemical peel from a dermatologist may ________ up (hasten) improvement.",
    option: [
        "stall",
        "delay",
        "loiter",
        "speed"
    ],
    answer: "speed"
},
{
    question: "Select the option that best defines the given word.\nApportion",
    option: [
        "To confess",
        "To allocate",
        "To request",
        "To complicate"
    ],
    answer: "To allocate"
},
{
    question: "Select the most appropriate idiom that can substitute the underlined segment in the given sentence.\nHer explanation was so convoluted that it left everyone confused.",
    option: [
        "scratching their heads",
        "turning a blind eye",
        "stealing the show",
        "biting the bullet"
    ],
    answer: "scratching their heads"
},
{
    question: "Parts of the following sentence have been given as options. Select the option that contains an error.\n'The rain fell heavy and caused flooding in the streets'.",
    option: [
        "and caused flooding",
        "fell heavy",
        "in the streets",
        "The rain"
    ],
    answer: "fell heavy"
},
{
    question: "Identify the sentence with the INCORRECT usage of adverb.",
    option: [
        "Mohan could usually make out the distant figure.",
        "Mohan could often make out the distant figure.",
        "Mohan could make out barely the distant figure.",
        "Mohan could barely make out the distant figure."
    ],
    answer: "Mohan could make out barely the distant figure."
},
{
    question: "Select the appropriate ANTONYM of the given word.\nOpaque",
    option: [
        "Transparent",
        "Dark",
        "Cloudy",
        "Dull"
    ],
    answer: "Transparent"
},
{
    question: "Select the most appropriate synonym of the given word.\nDodge",
    option: [
        "Display",
        "Opine",
        "Panic",
        "Trick"
    ],
    answer: "Trick"
},
{
    question: "Select the word that best completes the given sentence. Determine the collocation through the sentence.\nSantra took a deep breath before _____________ onto the stage to deliver her speech.",
    option: [
        "stepping",
        "made",
        "hit",
        "stuck"
    ],
    answer: "stepping"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence.\nEach of the two farmers wants the certified seeds but neither have any papers.",
    option: [
        "But neither has any papers",
        "Yet none has many papers",
        "But either has any papers",
        "Yet neither has many papers"
    ],
    answer: "But neither has any papers"
},
{
    question: "Select the most appropriate idiom that refers to the underlined segment in the given sentence.\nThe agents are struck in a difficult circumstance with no escape at all.",
    option: [
        "To give currency",
        "To go to the dogs",
        "Back against the wall",
        "To give one a long rope"
    ],
    answer: "Back against the wall"
},
{
    question: "Select the most appropriate option that can substitute the underlined word in the given sentence.\nGive the cake to which asks for it first.",
    option: [
        "whom so ever",
        "whomever",
        "whoever",
        "whichever"
    ],
    answer: "whoever"
},
{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error.\nMrs. Jennifer, / our English professor, / told us that the wind / reluctantly rustled the branches.",
    option: [
        "reluctantly rustled the branches.",
        "told us that the wind",
        "our English professor,",
        "Mrs. Jennifer,"
    ],
    answer: "reluctantly rustled the branches."
},
{
    question: "Select the most appropriate synonym of the underlined word.\nThe explorer ventured into the uncharted territory in search of adventure.",
    option: [
        "Familiar",
        "Mapped",
        "Explored",
        "Undiscovered"
    ],
    answer: "Undiscovered"
},
{
    question: "Identify the INCORRECTLY spelt word in the given sentence.\nThe vicissitudes of life can be incredulus, but the perseverance and unyielding tenacity of the human spirit remain indomitable.",
    option: [
        "incredulus",
        "vicissitudes",
        "indomitable",
        "unyielding"
    ],
    answer: "incredulus"
},
{
    question: "Select the most appropriate option that can substitute the highlighted word segment in the given sentence. If the sentence is grammatically correct, select ‘No correction’.\nThe boy play football since he has come from school.",
    option: [
        "has been playing",
        "was playing",
        "plays",
        "No correction"
    ],
    answer: "has been playing"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nSnug",
    option: [
        "Persistent",
        "Ample",
        "Uncomfortable",
        "Aromatic"
    ],
    answer: "Uncomfortable"
},
{
    question: "Select the most appropriate option to fill in the blank and make the sentence meaningful.\nYou must refrain __________ unpleasant conversations.",
    option: [
        "with",
        "to",
        "from",
        "by"
    ],
    answer: "from"
},
{
    question: "In the sentence, 'The room was filled with an eerie silence after the announcement', what is a synonym of the word 'eerie'?",
    option: [
        "Mysterious",
        "Tense",
        "Soothing",
        "Comfortable"
    ],
    answer: "Mysterious"
},
{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Grateful",
        "Persuade",
        "Accross",
        "Navigate"
    ],
    answer: "Accross"
},
{
    question: "Select the most appropriate option to fill in the blank.\nThe scientist's _______________ research into renewable energy sources is expected to revolutionize the industry.",
    option: [
        "hasty",
        "superficial",
        "meticulous",
        "cursory"
    ],
    answer: "meticulous"
},
{
    question: "Select the most appropriate meaning of the given word.\nAmbiguous",
    option: [
        "Harsh and severe",
        "Uncertain or open to interpretation",
        "Funny and humorous",
        "Clear and straightforward"
    ],
    answer: "Uncertain or open to interpretation"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nEstablish",
    option: [
        "Enlarge",
        "Charge",
        "Demolish",
        "Alert"
    ],
    answer: "Demolish"
},
{
    question: "Select the most appropriate option to fill in the blank. Determine the collocation through the sentence.\nResolution is the courage to act despite the __________ of failure.",
    option: [
        "hope",
        "fear",
        "love",
        "hate"
    ],
    answer: "fear"
},
{
    question: "The following sentence has been divided into parts. Select the part that contains a grammatical error from the given options. If you don’t find any error, mark ‘No error’ as your answer.\nA tiger be strayed into a village / at Gosaba in the Sundarbans, entered a / cowshed and killed three cows last night.",
    option: [
        "cowshed and killed three cows last night.",
        "A tiger be strayed into a village",
        "at Gosaba in the Sundarbans, entered a",
        "No error."
    ],
    answer: "A tiger be strayed into a village"
},
{
    question: "Select the most appropriate option to fill in the blank and complete the given idiom.\nAlthough our backgrounds are different, we sail in the __________ boat.",
    option: [
        "different",
        "same",
        "biggest",
        "old"
    ],
    answer: "same"
},
{
    question: "Her ______ behaviour in the interview revealed her clear state of mind.",
    option: [
        "subtle",
        "shrouded",
        "conspicuous",
        "obscure"
    ],
    answer: "conspicuous"
},
{
    question: "Replace the underlined word with the most appropriate phrase: Shahid Bhagat Singh was a patriot completely.",
    option: [
        "down and out",
        "by and by",
        "off and on",
        "through and through"
    ],
    answer: "through and through"
},
{
    question: "Choose the word that is most similar in meaning to the underlined word: The report contained several inconsistencies.",
    option: [
        "transmissions",
        "anomalies",
        "specifications",
        "confirmations"
    ],
    answer: "anomalies"
},
{
    question: "Select the incorrectly spelt word.",
    option: [
        "Vandetta",
        "Legible",
        "Necessity",
        "Chronology"
    ],
    answer: "Vandetta"
},
{
    question: "Select the correctly spelt word.",
    option: [
        "reference",
        "refferance",
        "referent",
        "referrence"
    ],
    answer: "reference"
},
{
    question: "Identify the part of the sentence that contains an adverb usage error: Mr. Daniel, the police officer, commented, 'The fire clumsily spread through the building'.",
    option: [
        "Mr. Daniel, the police officer, commented",
        "The fire clumsily spread",
        "through the building",
        "No error"
    ],
    answer: "The fire clumsily spread"
},
{
    question: "Select the word that is most similar in meaning to the given word: Resilient",
    option: [
        "Content",
        "Antique",
        "Coarse",
        "Strong"
    ],
    answer: "Strong"
},
{
    question: "Identify the part of the sentence that contains a grammatical error: She confidently presented her findings to committee, articulating her ideas clear, and impressing everyone with extensive research and knowledge.",
    option: [
        "She confidently presented her findings to committee",
        "articulating her ideas clear",
        "and impressing everyone",
        "with extensive research and knowledge"
    ],
    answer: "articulating her ideas clear"
},
{
    question: "Select the most appropriate meaning of the idiom 'down the road'.",
    option: [
        "On the way",
        "In the present",
        "In an informal way",
        "In the future"
    ],
    answer: "In the future"
},
{
    question: "I would like to know _____ this machine works.",
    option: [
        "whatever",
        "that",
        "what",
        "how"
    ],
    answer: "how"
},
{
    question: "She ______ into tears.",
    option: [
        "shed",
        "burst",
        "started",
        "bowed"
    ],
    answer: "burst"
},
{
    question: "Select the word that is most opposite in meaning to the given word: Dejection",
    option: [
        "Stagnancy",
        "Cheer",
        "Glamour",
        "Malnutrition"
    ],
    answer: "Cheer"
},
{
    question: "Fill in the blanks with the most appropriate combination: The (1)___ city was filled with bustling markets, towering (2)___, and narrow streets, making it an exciting place to (3)___ daily.",
    option: [
        "(1) skyscrapers; (2) explore; (3) vibrant",
        "(1) vibrant; (2) skyscrapers; (3) explore",
        "(1) vibrant; (2) explore; (3) skyscrapers",
        "(1) explore; (2) vibrant; (3) skyscrapers"
    ],
    answer: "(1) vibrant; (2) skyscrapers; (3) explore"
},
{
    question: "Select the word that is most opposite in meaning to the given word: Meager",
    option: [
        "Unsafe",
        "Unbiased",
        "Adequate",
        "Unfortunate"
    ],
    answer: "Adequate"
},
{
    question: "Select the most appropriate meaning of the given word: Dismay",
    option: [
        "something cumbersome",
        "horrifyingly wicked",
        "a feeling of unhappiness",
        "showing admiration"
    ],
    answer: "a feeling of unhappiness"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence.\nA teacher should be assessed on the basis of his ability to interact well with the children and to handle their issues promptly.",
    option: [
        "solutions nicely",
        "queries well",
        "chapters slowly",
        "parents respectfully"
    ],
    answer: "queries well"
},
{
    question: "Select the most appropriate ANTONYM of the highlighted word in the given sentence to fill in the blank.\nThe manager is so stingy that he never appreciates the efforts of the teammates but the chairperson is really very ____________ in this matter.",
    option: [
        "aggressive",
        "generous",
        "strict",
        "lazy"
    ],
    answer: "generous"
},
{
    question: "Select the most appropriate option to substitute the underlined segment in the given sentence.\nThe meeting in the conference hall has ended on a temporary agreement.",
    option: [
        "truce",
        "hot war",
        "agenda",
        "fight"
    ],
    answer: "truce"
},
{
    question: "Select the most appropriate idiom to substitute the underlined phrase in the given sentence.\nAlthough he was nervous before the presentation, he managed to face the situation with courage and deliver a fantastic speech.",
    option: [
        "bite the tongue",
        "bite the dust",
        "bite the bullet",
        "bite the pain"
    ],
    answer: "bite the bullet"
},
{
    question: "Select the most appropriate meaning of the highlighted idiom in the given sentence.\nJake and Emily worked together on a project, and it was a piece of cake for them to complete it on time.",
    option: [
        "Something enjoyable",
        "A difficult task",
        "Something annoying",
        "An easy task"
    ],
    answer: "An easy task"
},
{
    question: "Select the most appropriate synonym of the underlined word.\nShe groaned at the memory, suffering all over again the excruciating embarrassment of those moments.",
    option: [
        "Rational",
        "Painful",
        "Excited",
        "Justified"
    ],
    answer: "Painful"
},
{
    question: "Select the correctly spelt sentence.",
    option: [
        "She was excited to recieve a surprize gift from her friend on her birthday.",
        "She was excited to receive a surprise gift from her friend on her birthday.",
        "She was exicited to recieve a surprise gift from her friend on her birthday.",
        "She was exicited to recieve a surprize gift from her freind on her birthday."
    ],
    answer: "She was excited to receive a surprise gift from her friend on her birthday."
},
{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Analytically",
        "Apparently",
        "Astonishingly",
        "Appropreately"
    ],
    answer: "Appropreately"
},
{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error.\nMichael and Robert / played rapidly / in the park / near the apartment.",
    option: [
        "Michael and Robert",
        "in the park",
        "near the apartment",
        "played rapidly"
    ],
    answer: "played rapidly"
},
{
    question: "The following sentence has been divided into parts. One of them may contain an error. Select the part that contains the error from the given options. If you don’t find any error, mark ‘No error’ as your answer.\nAt 6 p.m. tomorrow, / I will have been studied / for five hours straight.",
    option: [
        "for five hours straight.",
        "At 6 p.m. tomorrow,",
        "No error",
        "I will have been studied"
    ],
    answer: "I will have been studied"
},
{
    question: "Select the correct collocation to fill in the blank.\nThe CEO has a ______ effect on the future of the company, which includes global expansion.",
    option: [
        "far-reaching",
        "grand",
        "broad",
        "gorgeous"
    ],
    answer: "far-reaching"
},
{
    question: "Select the most appropriate synonym of the underlined word in the following sentence to fill in the blank.\nShravan is known for his compliant nature. He is very ___________.",
    option: [
        "complaining",
        "difficult",
        "adamant",
        "yielding"
    ],
    answer: "yielding"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nApprobate",
    option: [
        "Accept",
        "Supply",
        "Reject",
        "Permit"
    ],
    answer: "Reject"
},
{
    question: "Select the most appropriate one-word substitute for the underlined segment in the given sentence.\nThere is a lack of security and stability in his bank balance. This is indicative of a hazardous and perilous situation.",
    option: [
        "definite",
        "reliable",
        "guarded",
        "precarious"
    ],
    answer: "precarious"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nTrenchant",
    option: [
        "Dull",
        "Insightful",
        "Sharp",
        "Acute"
    ],
    answer: "Dull"
},

{
    question: "Select the most appropriate meaning of the given idiom.\n\nFall between two stools",
    option: [
        "Fall upon the hurdles continuously",
        "Confused to select either of two options",
        "Succeed to achieve both aims",
        "Fail to achieve either of two aims"
    ],
    answer: "Fail to achieve either of two aims"
},
{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error.\n\nDavid loudly / opened the gift / presented by / his sister.",
    option: [
        "presented by",
        "opened the gift",
        "his sister",
        "David loudly"
    ],
    answer: "David loudly"
},
{
    question: "Identify the INCORRECTLY spelt word in the given sentence.\n\nThe company's policy on employee benefits is quite comprehensve.",
    option: [
        "Benefits",
        "Policy",
        "Company's",
        "Comprehensve"
    ],
    answer: "Comprehensve"
},
{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Buisness",
        "Apology",
        "Resource",
        "Lecture"
    ],
    answer: "Buisness"
},
{
    question: "Select the most appropriate idiom that can substitute the underlined segment in the given sentence.\n\nHe’s been working late into the night, trying to finish his thesis before the deadline.",
    option: [
        "burning the candle at both the ends",
        "burning bridges",
        "burning the ships",
        "burning the midnight oil"
    ],
    answer: "burning the midnight oil"
},
{
    question: "Fill in the blank with the suitable option.\n\nI drove back to the town and began to retrace the route, taking frequent ______ at the map.",
    option: [
        "winces",
        "bounces",
        "glances",
        "fences"
    ],
    answer: "glances"
},
{
    question: "Parts of the following sentence have been given as options. Select the option that contains an error.\n\nShe been showing off her juggling skills at her friend’s party.",
    option: [
        "showing off her",
        "She been",
        "her friend’s party",
        "juggling skills at"
    ],
    answer: "She been"
},
{
    question: "Select the most appropriate ANTONYM of the word in brackets to fill in the blank.\n\nThe new law aims to _______________ (Enlarge) the sale of illegal drugs.",
    option: [
        "admire",
        "curtail",
        "amplify",
        "ridicule"
    ],
    answer: "curtail"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence and rectify it. If no correction is needed, select ‘No correction required’.\n\nThey are launching the new product last month.",
    option: [
        "launched",
        "No correction required",
        "was launching",
        "did launched"
    ],
    answer: "launched"
},
{
    question: "Select the most appropriate option to fill in the blank.\n\nMy heart fills with anger when I see disciples of self-claimed gods ______ before them.",
    option: [
        "swinging",
        "spitting",
        "prostrating",
        "sleeping"
    ],
    answer: "prostrating"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\n\nMagnanimous",
    option: [
        "Degraded",
        "Large",
        "Splendour",
        "Generous"
    ],
    answer: "Degraded"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\n\nDistraught",
    option: [
        "New",
        "Sour",
        "Curved",
        "Happy"
    ],
    answer: "Happy"
},
{
    question: "Select the most appropriate option to fill in the blank.\n\nI know we can count ___ Tim to resolve this for us.",
    option: [
        "in",
        "at",
        "on",
        "for"
    ],
    answer: "on"
},
{
    question: "Select the most appropriate meaning of the given word.\n\nChuckle",
    option: [
        "Laugh loudly",
        "Cry like a donkey",
        "Laugh in a noisy, gleeful way",
        "Laugh quietly without opening one's mouth"
    ],
    answer: "Laugh quietly without opening one's mouth"
},
{
    question: "Select the most appropriate synonym of the given word.\n\nPrecise",
    option: [
        "Ambiguous",
        "Approximate",
        "Accurate",
        "Vague"
    ],
    answer: "Accurate"
},
{
    question: "The following sentence has been split into four segments. Identify the segment that contains a grammatical error. The elevator / in the mall / is temporary / out of service.",
    option: [
        "out of service",
        "is temporary",
        "The elevator",
        "in the mall"
    ],
    answer: "is temporary"
},
{
    question: "Select the most appropriate option to fill in the blank. The project must be completed _____ the end of the week.",
    option: [
        "at",
        "on",
        "by",
        "in"
    ],
    answer: "by"
},
{
    question: "Select the most appropriate ANTONYM of the given word. Prostration",
    option: [
        "Impression",
        "Counterpart",
        "Refreshment",
        "Acridness"
    ],
    answer: "Refreshment"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence. If there is no need to substitute it, select ‘No substitution required’. As the news of the atomic attack reached Einstein, he is becoming aware of the glaring horror of the abuse of atomic energy.",
    option: [
        "became aware of",
        "become the awareness",
        "will be aware of",
        "No substitution required"
    ],
    answer: "became aware of"
},
{
    question: "Change the meaning of the given sentence by replacing the underlined word with its ANTONYM from the following options. Her overly fastidious approach to life is making her erratic.",
    option: [
        "Sincere",
        "Impeccable",
        "Lackadaisical",
        "Serious"
    ],
    answer: "Lackadaisical"
},
{
    question: "Select the most appropriate option that can substitute the underlined words in the given sentence. Esther is making wrong choices with that argument.",
    option: [
        "barking at the sky",
        "barking her arms off",
        "barking about the bush",
        "barking up the wrong tree"
    ],
    answer: "barking up the wrong tree"
},
{
    question: "Select the most appropriate ANTONYM of the given word. Hostile",
    option: [
        "Icy",
        "Hospitable",
        "Frigid",
        "Antagonistic"
    ],
    answer: "Hospitable"
},
{
    question: "Select the most appropriate option to substitute the underlined segment in the given sentence. Shakuntala was very amazed to see her name on the list.",
    option: [
        "worried",
        "astonished",
        "accurate",
        "swamped"
    ],
    answer: "astonished"
},
{
    question: "Select the most appropriate synonym of the word 'firm' to fill in the blank. Despite facing numerous obstacles, the explorer remained __________ in her quest to reach the summit.",
    option: [
        "confused",
        "determined",
        "cautious",
        "exhausted"
    ],
    answer: "determined"
},
{
    question: "Select the INCORRECTLY spelt word in the following sentence. The acommodation was spacious enough for the entire family.",
    option: [
        "enough",
        "spacious",
        "acommodation",
        "entire"
    ],
    answer: "acommodation"
},
{
    question: "Select the most appropriate option to fill in the blank. She was deeply _________ by the gesture of kindness from her friend.",
    option: [
        "raised",
        "disheartened",
        "touched",
        "alerted"
    ],
    answer: "touched"
},
{
    question: "Select the most appropriate synonym of the given word. Blissful",
    option: [
        "Joyful",
        "Wishful",
        "Frightful",
        "Bountiful"
    ],
    answer: "Joyful"
},
{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Numerous",
        "Inacuracies",
        "Inconsistencies",
        "Critiqued"
    ],
    answer: "Inacuracies"
},
{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error. Dravid and / his team / beautifully entered / the competition.",
    option: [
        "the competition",
        "beautifully entered",
        "his team",
        "Dravid and"
    ],
    answer: "beautifully entered"
},
{
    question: "Select the most appropriate option to fill in the blank. Her _______________ in the face of adversity was truly commendable and inspired everyone around her.",
    option: [
        "indifference",
        "negligence",
        "resilience",
        "cowardice"
    ],
    answer: "resilience"
},
{
    question: "Identify the INCORRECTLY spelt word in the following sentence.\nClear communicetion is essential for effective collaboration and successful completion of complex projects at work.",
    option: [
        "communicetion",
        "collaboration",
        "effective",
        "completion"
    ],
    answer: "communicetion"
},
{
    question: "Select the most appropriate option to fill in the blank.\nShe felt a ______ of relief after the exam was over.",
    option: [
        "sense",
        "responsibility",
        "touch",
        "danger"
    ],
    answer: "sense"
},
{
    question: "The following sentence has been divided into parts. One of them may contain an error. Select the part that contains the error from the given options. If you don’t find any error, mark ‘No error’ as your answer.\nThe hotel / is not big enormous / to accommodate some more guests.",
    option: [
        "to accommodate some more guests.",
        "No error.",
        "The hotel",
        "is not big enormous"
    ],
    answer: "is not big enormous"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nConfess",
    option: [
        "Preface",
        "Scare",
        "Disavow",
        "Witness"
    ],
    answer: "Disavow"
},
{
    question: "Select the most appropriate synonym of the given word.\nAnnihilate",
    option: [
        "Increase",
        "Destroy",
        "Lengthen",
        "Confirm"
    ],
    answer: "Destroy"
},
{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error.\nPatricia and / her associate / softly examined / the ancient artefact.",
    option: [
        "the ancient artefact",
        "Patricia and",
        "her associate",
        "softly examined"
    ],
    answer: "softly examined"
},
{
    question: "Select the most appropriate option to substitute the underlined segment in the given sentence.\nElastocaloric cooling is a promising, eco-friendly technology for refrigeration that has the potential to be used by a broad range of applications and at different temperature ranges.",
    option: [
        "potential to be used in",
        "potential to use in",
        "potential to be using in",
        "potential to be used as"
    ],
    answer: "potential to be used in"
},
{
    question: "Select the most appropriate option to substitute the underlined segment in the given sentence.\nLearning a new language can be all challenging and rewarding.",
    option: [
        "neither challenging and rewarding",
        "all both challenging or rewarding",
        "both challenging and rewarding",
        "whether both challenging and rewarding"
    ],
    answer: "both challenging and rewarding"
},
{
    question: "Select the most appropriate option to fill in the blank.\nNeither John _____ his friends were able to attend the party.",
    option: [
        "or",
        "but",
        "nor",
        "and"
    ],
    answer: "nor"
},
{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Algebra",
        "Composer",
        "Horizon",
        "Renewel"
    ],
    answer: "Renewel"
},
{
    question: "Select the most appropriate option that can substitute the underlined words in the given sentence.\nThe rural life can be contrasted to that of urban life.",
    option: [
        "contrasted in",
        "contrasted at",
        "contrasted off",
        "contrasted with"
    ],
    answer: "contrasted with"
},
{
    question: "Select the most appropriate synonym of the highlighted word.\nThe policies of the school proscribe accessing social media websites on school computers.",
    option: [
        "prohibit",
        "reveal",
        "surround",
        "vary"
    ],
    answer: "prohibit"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nAuthenticate",
    option: [
        "Scatter",
        "Entitle",
        "Discredit",
        "Amalgamate"
    ],
    answer: "Discredit"
},
{
    question: "Select the most appropriate synonym of the underlined word.\nThe teacher explained the concept in a concise way, making it easy to understand.",
    option: [
        "Confusing",
        "Detailed",
        "Interesting",
        "Brief"
    ],
    answer: "Brief"
},
{
    question: "Select the most appropriate option to fill in the blank.\nTamanna is as ________________________________ with all her projects.",
    option: [
        "busy as a tiger",
        "busy as a bee",
        "busy as a sparrow",
        "beat around the bush"
    ],
    answer: "busy as a bee"
},
{
    question: "Select the most appropriate option to fill in the blank.\nThe price of wheat _____ has gone up in recent times.",
    option: [
        "flour",
        "flower",
        "follower",
        "floor"
    ],
    answer: "flour"
},
{
    question: "Select the most appropriate synonym for the given word.\nMetamorphosis",
    option: [
        "Stagnation",
        "Change",
        "Consistency",
        "Stability"
    ],
    answer: "Change"
},
{
    question: "Select the most appropriate word segment that rectifies the bracketed and complete the given sentence meaningfully.\n(No sooner did we arrived) at the airport than we got busy with the luggage we were carrying.",
    option: [
        "No sooner did we arrive",
        "No sooner had we arrived",
        "No sooner we arrived",
        "No sooner arrived we"
    ],
    answer: "No sooner had we arrived"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nInsightful",
    option: [
        "Elite",
        "Unperceptive",
        "Jagged",
        "Terminal"
    ],
    answer: "Unperceptive"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence.\nThe company experienced a significant drop in sales; consequently, it had to lay off several employees.",
    option: [
        "accordingly",
        "genuinely",
        "naturally",
        "superficially"
    ],
    answer: "accordingly"
},
{
    question: "Select the word that best completes the given sentence. Determine the collocation through the sentence.\nMy mother told me we should ____________ precautions to avoid getting sick during flu season.",
    option: [
        "take",
        "see",
        "hold",
        "show"
    ],
    answer: "take"
},
{
    question: "The following sentence has been divided into parts. One of them contains a grammatical error. Select the part that contains the error from the given options.\nI cannot find/the book everywhere/in the house;/ it seems to have disappeared.",
    option: [
        "the book everywhere",
        "I cannot find",
        "in the house;",
        "it seems to have disappeared."
    ],
    answer: "the book everywhere"
},
{
    question: "Select the most appropriate word that can substitute the underlined word in the given sentence without altering the sentence's meaning.\nThe professor’s lecture on quantum mechanics was as enlightening as it was challenging.",
    option: [
        "illuminating",
        "dull",
        "perplex",
        "confusing"
    ],
    answer: "illuminating"
},
{
    question: "Identify the INCORRECTLY spelt word in the given sentence.\nThe chef prepared a delicous meal for the guests.",
    option: [
        "meal",
        "delicous",
        "guests",
        "prepared"
    ],
    answer: "delicous"
},
{
    question: "Select the most appropriate meaning of the given idiom.\nLet the cat out of the bag",
    option: [
        "To punish a cat",
        "To release a pet cat",
        "To reveal a secret",
        "To keep a secret"
    ],
    answer: "To reveal a secret"
},
{
    question: "The following sentence has been divided into parts. One of them may contain an error. Select the part that contains the error from the given options. If you don’t find any error, mark ‘No error’ as your answer.\nShe knows the city most/ so I am going/ to have a look around with her.",
    option: [
        "She knows the city most",
        "No error.",
        "so I am going",
        "to have a look around with her."
    ],
    answer: "She knows the city most"
},
{
    question: "Select the most appropriate option to fill in the blank.\nIf I _____ you, I would take that job offer.",
    option: [
        "am",
        "had been",
        "were",
        "was"
    ],
    answer: "were"
},
{
    question: "Select the most appropriate option to fill in the blanks.\nThe modern office (1)___featured sleek (2)___, open spaces, and (3)____ windows, fostering a productive and collaborative work environment for employees.",
    option: [
        "(1) building ; (2) large ; (3) designs",
        "(1) large ; (2) designs ; (3) building",
        "(1) designs ; (2) large ; (3) building",
        "(1) building ; (2) designs ; (3) large"
    ],
    answer: "(1) building ; (2) designs ; (3) large"
},
{
    question: "Select the word from among the given options that is closest in meaning to the underlined word in the given sentence.\nThe company’s generous donation helped fund the construction of a new library in the village.",
    option: [
        "Sensible",
        "Meagre",
        "Lavish",
        "Senseless"
    ],
    answer: "Lavish"
},
{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Destructively",
        "Discreetly",
        "Delightfuly",
        "Dreamingly"
    ],
    answer: "Delightfuly"
},
{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error.\nOliver told Mia, \"Seldom than walking, she prefers to take the city bus.\"",
    option: [
        "take the city bus.\"",
        "\"Seldom than walking,",
        "Oliver told Mia,",
        "she prefers to"
    ],
    answer: "\"Seldom than walking,"
},
{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Practice",
        "Elicit",
        "Concentrate",
        "Quarentine"
    ],
    answer: "Quarentine"
},
{
    question: "Select the most appropriate synonym of the given word.\nPersiflage",
    option: [
        "Seriousness",
        "Argument",
        "Banter",
        "Criticism"
    ],
    answer: "Banter"
},
{
    question: "Select the most appropriate idiom that can replace the underlined segment in the given sentence.\nA false and selfish friend will never be by your side in times of difficulty.",
    option: [
        "good samaritan",
        "fair weather friend",
        "great hand",
        "past master"
    ],
    answer: "fair weather friend"
},
{
    question: "Select the most appropriate synonym of the given word.\nFrivolous",
    option: [
        "Eventful",
        "Substantial",
        "Momentous",
        "Trivial"
    ],
    answer: "Trivial"
},
{
    question: "Rectify the sentence by selecting the correctly spelt word from the options.\nDespite the insistence of her colleague, Sheela’s response to the request to collaborate on the project was laanguid.",
    option: [
        "Langud",
        "Languid",
        "Langued",
        "Languied"
    ],
    answer: "Languid"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence and rectify it. If no correction is needed, select ‘No correction required’.\nThe road was repairing by the workers.",
    option: [
        "repairs",
        "No correction required",
        "repaired",
        "been repaired"
    ],
    answer: "repaired"
},
{
    question: "Select the most appropriate idiom that can substitute the underlined segment in the given sentence.\nShe didn’t want to upset anyone at work, so she carefully navigated the office politics.",
    option: [
        "scratch anyone's heads",
        "step on anyone's toes",
        "bite the bullet",
        "steal the show"
    ],
    answer: "step on anyone's toes"
},
{
    question: "Select the most appropriate collocation to fill in the blank.\nI was running late so I only had time for a __________ shower.",
    option: [
        "relaxed",
        "long",
        "quick",
        "luxurious"
    ],
    answer: "quick"
},
{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error.\nEvelyn clearly / packed her / suitcase for / the trip to Malaysia.",
    option: [
        "suitcase for",
        "the trip to Malaysia",
        "Evelyn clearly",
        "packed her"
    ],
    answer: "Evelyn clearly"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nOffer",
    option: [
        "Select",
        "Open",
        "Hurt",
        "Withhold"
    ],
    answer: "Withhold"
},
{
    question: "Select the most appropriate option to fill in the blank and make the sentence meaningful.\nBy showing _______ united strength, we may scare the opposition.",
    option: [
        "any",
        "an",
        "a",
        "no"
    ],
    answer: "a"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nAbscond",
    option: [
        "Endure",
        "Withdraw",
        "Hide",
        "Flee"
    ],
    answer: "Endure"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence.\nThe COVID-19 pandemic led to trade disruptions worldwide, but the agricultural and food sector prove to more resilient than other sectors of the economy.",
    option: [
        "prove to be more resilient",
        "proving to be more resilient",
        "proved to been more resilient",
        "proved to be more resilient"
    ],
    answer: "proved to be more resilient"
},
{
    question: "Select the most appropriate ANTONYM of the given word.\nFrugal",
    option: [
        "Right",
        "Prudent",
        "Prodigal",
        "Sparing"
    ],
    answer: "Prodigal"
},
{
    question: "Choose the incorrectly spelt word in the following sentence: The ridiculous pranks portrayed by the sykophants are intolerable, occasionally.",
    option: [
        "Portrayed",
        "Occasionally",
        "Sykophants",
        "Ridiculous"
    ],
    answer: "Sykophants"
},
{
    question: "Her ____ attitude towards colleagues made her a beloved team member.",
    option: [
        "apathetic",
        "cordial",
        "indifferent",
        "belligerent"
    ],
    answer: "cordial"
},
{
    question: "Identify the part of the sentence that contains an error: The project was delayed / because of unforeseen issues; / consequency, we had / to adjust our timeline.",
    option: [
        "because of unforeseen issues;",
        "consequ ency, we had",
        "to adjust our timeline.",
        "The project was delayed"
    ],
    answer: "consequ ency, we had"
},
{
    question: "Select the incorrectly spelt word.",
    option: [
        "Suspeciously",
        "Stealthily",
        "Wearily",
        "Recklessly"
    ],
    answer: "Suspeciously"
},
{
    question: "Identify the part of the sentence that contains an error: Benjamin and Lucas gently volunteered for the disaster management task.",
    option: [
        "Benjamin and Lucas",
        "disaster management task.",
        "gently volunteered",
        "for the"
    ],
    answer: "gently volunteered"
},
{
    question: "Don’t try to divert me ___ my principles.",
    option: [
        "on",
        "from",
        "about",
        "for"
    ],
    answer: "from"
},
{
    question: "Select the most appropriate synonym of the highlighted word ‘justify’ in the given sentence: Ashok tried to justify his late arrival.",
    option: [
        "Explain",
        "Intensify",
        "Hesitate",
        "Mention"
    ],
    answer: "Explain"
},
{
    question: "Select the most appropriate meaning of the idiom ‘hit the nail on the head’.",
    option: [
        "Analyse and understand a situation",
        "Identify something exactly right",
        "Hit a wall",
        "Hit the floor"
    ],
    answer: "Identify something exactly right"
},
{
    question: "Select the most appropriate meaning of the highlighted word ‘grace’ in the given sentence: The conductor directed the orchestra with precision and grace.",
    option: [
        "Elegance and smoothness of movement",
        "Style of music",
        "Flower",
        "Prayer before a meal"
    ],
    answer: "Elegance and smoothness of movement"
},
{
    question: "We reached a ___ conclusion.",
    option: [
        "heavy",
        "big",
        "clear",
        "quick"
    ],
    answer: "clear"
},
{
    question: "Select the antonym of ‘Quick-witted’.",
    option: [
        "Kind",
        "Brave",
        "Foolish",
        "Patient"
    ],
    answer: "Foolish"
},
{
    question: "She is known for her ___ spirit, always helping others.",
    option: [
        "mean",
        "greedy",
        "generous",
        "selfish"
    ],
    answer: "generous"
},
{
    question: "Select the most appropriate substitute for the highlighted segment: She is attending the conference yesterday.",
    option: [
        "was attending",
        "No correction",
        "attended",
        "has attended"
    ],
    answer: "attended"
},
{
    question: "Select the antonym of ‘camouflage’.",
    option: [
        "Disguised",
        "Obscure",
        "Veiled",
        "Exhibit"
    ],
    answer: "Exhibit"
},
{
    question: "Select the antonym of ‘rigidity’.",
    option: [
        "Consistency",
        "Flexibility",
        "Uniformity",
        "Complexity"
    ],
    answer: "Flexibility"
},

{
    question: "Fill in the blank (2) in the passage with the most appropriate option.",
    option: [
        "narration",
        "relation",
        "objection",
        "anticipation"
    ],
    answer: "relation"
},
{
    question: "Fill in the blank (3) in the passage with the most appropriate option.",
    option: [
        "separate",
        "negate",
        "integrate",
        "attempt"
    ],
    answer: "attempt"
},
{
    question: "Fill in the blank (4) in the passage with the most appropriate option.",
    option: [
        "compelling",
        "comparing",
        "compiling",
        "compering"
    ],
    answer: "comparing"
},
{
    question: "Fill in the blank (5) in the passage with the most appropriate option.",
    option: [
        "ligament",
        "segment",
        "fragment",
        "payment"
    ],
    answer: "segment"
},
{
    question: "Identify the sentence with the INCORRECT usage of the adverb.",
    option: [
        "The teacher evaluated all the answer scripts angrily.",
        "The teacher evaluated all the answer scripts figurative.",
        "The teacher evaluated all the answer scripts justly.",
        "The teacher evaluated all the answer scripts appropriately."
    ],
    answer: "The teacher evaluated all the answer scripts figurative."
},

{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Occasionally",
        "Frequently",
        "Fortnitly",
        "Quarterly"
    ],
    answer: "Fortnitly"
},

{
    question: "Fill in the blank with the most appropriate ANTONYM of the word given in brackets.\nThere’s no way he’d (consent) __________ to travel all the way from Boston.",
    option: [
        "ratify",
        "dissent",
        "decide",
        "authorise"
    ],
    answer: "dissent"
},

{
    question: "The given sentence is divided into four segments. Select the option that has the segment with an adverbial usage error.\nfrequent, / Clara fled / from the / angry dog.",
    option: [
        "Clara fled",
        "angry dog.",
        "frequent,",
        "from the"
    ],
    answer: "frequent,"
},

{
    question: "In the sentence 'The leader’s speech was invigorating', what is the most appropriate ANTONYM of the word 'invigorating'?",
    option: [
        "Suspicious",
        "Refreshing",
        "Evocative",
        "Dull"
    ],
    answer: "Dull"
},

{
    question: "Select the most appropriate option to fill in the blank.\nMany trees have growth rings that we can count and measure to ________ out how old they are and how fast they are growing.",
    option: [
        "search",
        "bring",
        "find",
        "look"
    ],
    answer: "find"
},

{
    question: "Select the appropriate synonym of the given word.\nAbandon",
    option: [
        "Preserve",
        "Maintain",
        "Relinquish",
        "Retain"
    ],
    answer: "Relinquish"
},

{
    question: "Select the most appropriate meaning of the given idiom.\nABC",
    option: [
        "Complete failure",
        "Fair and honest",
        "Very common knowledge",
        "To be ready"
    ],
    answer: "Complete failure"
},

{
    question: "Select the word from among the given options that is closest in meaning to the underlined word in the given sentence.\nSheela was grateful for the support her colleagues provided during a difficult time.",
    option: [
        "Creative",
        "Spontaneous",
        "Undecided",
        "Thankful"
    ],
    answer: "Thankful"
},

{
    question: "Select the most appropriate meaning of the highlighted word in the given sentence.\nThe children decorated the classroom with a mellow yellow paint, creating a calming atmosphere for reading time.",
    option: [
        "bright and sunny",
        "dark and gloomy",
        "soft and pleasant",
        "rough and textured"
    ],
    answer: "soft and pleasant"
},
{
    question: "Fill in the blank with the suitable option.\nWe must __________ on our spiritual journey by first understanding the grace and significance of a pilgrimage.",
    option: [
        "launch",
        "embitter",
        "embrace",
        "embark"
    ],
    answer: "embark"
},

{
    question: "Fill in the blank with the most suitable collocation.\nThey are______________ on the current projects of constructions.",
    option: [
        "making progress",
        "having progress",
        "make progress",
        "inviting progress"
    ],
    answer: "making progress"
},

{
    question: "Select the option that rectifies the spelling error in the given sentence.\nThe students have coordialy invited the teachers for their Freshers' function.",
    option: [
        "cordaily",
        "cordially",
        "coordially",
        "cordialy"
    ],
    answer: "cordially"
},

{
    question: "Select the most appropriate option to fill in the blank.\nDespite the _______________ weather, the festival was a huge success.",
    option: [
        "inclement",
        "temperate",
        "mild",
        "balmy"
    ],
    answer: "inclement"
},

{
    question: "Select the most appropriate option to fill in the blanks.\nThe (1)___ conference room was (2)___ with comfortable chairs, sleek tables and advanced multimedia systems for presentations, creating a professional (3)___ for meetings.",
    option: [
        "(1) spacious ; (2) equipped ; (3) environment",
        "(1) equipped ; (2) environment ; (3) spacious",
        "(1) environment ; (2) equipped ; (3) spacious",
        "(1) spacious; (2) environment; (3) equipped"
    ],
    answer: "(1) spacious ; (2) equipped ; (3) environment"
},

{
    question: "Select the most appropriate option to fill in the blank.\nThe teacher asked the students to _______ their assignments before leaving the classroom.",
    option: [
        "submit",
        "submits",
        "submitted",
        "submitting"
    ],
    answer: "submit"
},
{
    question: "Select the most appropriate option to fill in the blank.\nShe has been living in Delhi _______ 2015.",
    option: [
        "for",
        "since",
        "from",
        "by"
    ],
    answer: "since"
},
{
    question: "Select the option that expresses the given sentence in passive voice.\nThe police arrested the thief.",
    option: [
        "The thief was arrested by the police.",
        "The thief is arrested by the police.",
        "The thief had arrested the police.",
        "The police was arrested by the thief."
    ],
    answer: "The thief was arrested by the police."
},
{
    question: "Select the option that expresses the given sentence in active voice.\nThe letter was written by John.",
    option: [
        "John wrote the letter.",
        "John writes the letter.",
        "John had written the letter.",
        "John is writing the letter."
    ],
    answer: "John wrote the letter."
},
{
    question: "Select the correctly spelt word.",
    option: [
        "Accomodation",
        "Accommodation",
        "Acommodation",
        "Accommadation"
    ],
    answer: "Accommodation"
},
{
    question: "Select the synonym of the given word.\nAbandon",
    option: [
        "Leave",
        "Accept",
        "Collect",
        "Continue"
    ],
    answer: "Leave"
},
{
    question: "Select the antonym of the given word.\nAncient",
    option: [
        "Old",
        "Historic",
        "Modern",
        "Traditional"
    ],
    answer: "Modern"
},
{
    question: "Select the most appropriate meaning of the given idiom.\nA blessing in disguise",
    option: [
        "A hidden benefit",
        "A bad situation",
        "A visible problem",
        "An unexpected loss"
    ],
    answer: "A hidden benefit"
},
{
    question: "Select the one-word substitution for the given group of words.\nA person who knows many languages",
    option: [
        "Polyglot",
        "Monolingual",
        "Linguist",
        "Translator"
    ],
    answer: "Polyglot"
},
{
    question: "Select the correct indirect form of the given sentence.\nHe said, \"I am busy.\"",
    option: [
        "He said that he was busy.",
        "He said that I am busy.",
        "He says that he was busy.",
        "He said that he is busy."
    ],
    answer: "He said that he was busy."
},
{
    question: "Identify the part of the sentence that contains an error.\nShe do not like coffee.",
    option: [
        "She",
        "do not",
        "like coffee",
        "No error"
    ],
    answer: "do not"
},
{
    question: "Select the correct improvement of the underlined part.\nHe is senior than me.",
    option: [
        "senior to me",
        "senior from me",
        "senior with me",
        "No improvement"
    ],
    answer: "senior to me"
},
{
    question: "Select the correct passive form of the sentence.\nThey will complete the work tomorrow.",
    option: [
        "The work will be completed by them tomorrow.",
        "The work is completed by them tomorrow.",
        "The work was completed by them tomorrow.",
        "The work has been completed by them tomorrow."
    ],
    answer: "The work will be completed by them tomorrow."
},
{
    question: "Select the synonym of the given word.\nRapid",
    option: [
        "Slow",
        "Fast",
        "Weak",
        "Late"
    ],
    answer: "Fast"
},
{
    question: "Select the antonym of the given word.\nExpand",
    option: [
        "Increase",
        "Spread",
        "Contract",
        "Develop"
    ],
    answer: "Contract"
},
{
    question: "Select the correctly spelt word.",
    option: [
        "Necessary",
        "Neccessary",
        "Necessery",
        "Necesary"
    ],
    answer: "Necessary"
},
{
    question: "Select the most appropriate option to fill in the blank.\nThe sun _______ in the east.",
    option: [
        "rise",
        "rises",
        "rose",
        "rising"
    ],
    answer: "rises"
},
{
    question: "Select the correct meaning of the idiom.\nOnce in a blue moon",
    option: [
        "Very rarely",
        "Every day",
        "Very quickly",
        "At night"
    ],
    answer: "Very rarely"
},
{
    question: "Select the word which can be substituted for the given phrase.\nA place where books are kept",
    option: [
        "Library",
        "Laboratory",
        "Museum",
        "Gallery"
    ],
    answer: "Library"
},
{
    question: "Select the correct option to fill in the blank.\nIf I had worked hard, I _______ have succeeded.",
    option: [
        "would",
        "will",
        "shall",
        "can"
    ],
    answer: "would"
},
{
    question: "Select the most appropriate option that can substitute the underlined segment in the given sentence.\n\nThe manager was angry because the employees did not completed the assigned work on time.",
    option: [
        "did not complete",
        "do not completed",
        "did not completed",
        "have not complete"
    ],
    answer: "did not complete"
},

{
    question: "Select the option that expresses the given sentence in passive voice.\n\nThe police arrested the thief yesterday.",
    option: [
        "The thief was arrested by the police yesterday.",
        "The thief is arrested by the police yesterday.",
        "The thief had arrested by the police yesterday.",
        "The thief has been arrested by the police yesterday."
    ],
    answer: "The thief was arrested by the police yesterday."
},

{
    question: "Select the most appropriate meaning of the given idiom.\n\nA blessing in disguise",
    option: [
        "A hidden advantage",
        "A difficult situation",
        "A useless thing",
        "A dangerous event"
    ],
    answer: "A hidden advantage"
},

{
    question: "Select the correctly spelt word.",
    option: [
        "Accomodation",
        "Accommodation",
        "Acommodation",
        "Accommadation"
    ],
    answer: "Accommodation"
},

{
    question: "Select the most appropriate synonym of the given word.\n\nAbandon",
    option: [
        "Leave",
        "Collect",
        "Accept",
        "Protect"
    ],
    answer: "Leave"
},

{
    question: "Select the most appropriate antonym of the given word.\n\nAncient",
    option: [
        "Old",
        "Modern",
        "Historic",
        "Past"
    ],
    answer: "Modern"
},

{
    question: "Fill in the blank with the most appropriate option.\n\nShe has been living here ______ five years.",
    option: [
        "since",
        "for",
        "from",
        "by"
    ],
    answer: "for"
},

{
    question: "Select the option that can be used as a one-word substitute for the given group of words.\n\nA person who cannot read or write",
    option: [
        "Illiterate",
        "Scholar",
        "Literate",
        "Author"
    ],
    answer: "Illiterate"
},

{
    question: "Select the most appropriate option to fill in the blank.\n\nThe train arrived ______ time.",
    option: [
        "in",
        "on",
        "at",
        "by"
    ],
    answer: "on"
},

{
    question: "Identify the part of the sentence that contains an error.\n\nHe do not know the answer.",
    option: [
        "He",
        "do not know",
        "the answer",
        "No error"
    ],
    answer: "do not know"
},

{
    question: "Select the most appropriate synonym of the given word.\n\nRapid",
    option: [
        "Fast",
        "Slow",
        "Weak",
        "Late"
    ],
    answer: "Fast"
},

{
    question: "Select the most appropriate antonym of the given word.\n\nExpand",
    option: [
        "Increase",
        "Extend",
        "Contract",
        "Develop"
    ],
    answer: "Contract"
},

{
    question: "Select the option that will improve the underlined part of the given sentence.\n\nShe is senior than me.",
    option: [
        "senior to me",
        "senior from me",
        "senior with me",
        "No improvement"
    ],
    answer: "senior to me"
},

{
    question: "Select the correctly spelt word.",
    option: [
        "Necessary",
        "Neccessary",
        "Necassary",
        "Necessery"
    ],
    answer: "Necessary"
},

{
    question: "Select the most appropriate meaning of the given idiom.\n\nHit the nail on the head",
    option: [
        "To say exactly the right thing",
        "To miss an opportunity",
        "To work very slowly",
        "To create trouble"
    ],
    answer: "To say exactly the right thing"
},

{
    question: "Select the option that expresses the given sentence in indirect speech.\n\nHe said, \"I am tired.\"",
    option: [
        "He said that he was tired.",
        "He said that I am tired.",
        "He says that he was tired.",
        "He said that he is tired."
    ],
    answer: "He said that he was tired."
},

{
    question: "Fill in the blank with the most appropriate option.\n\nNeither Ram nor his friends ______ present.",
    option: [
        "was",
        "were",
        "is",
        "has"
    ],
    answer: "were"
},

{
    question: "Select the most appropriate one-word substitute.\n\nA place where books are kept for reading",
    option: [
        "Library",
        "Laboratory",
        "Museum",
        "Gallery"
    ],
    answer: "Library"
},

{
    question: "Select the option that is the correct active voice of the given sentence.\n\nThe letter was written by him.",
    option: [
        "He wrote the letter.",
        "He writes the letter.",
        "He had written the letter.",
        "He is writing the letter."
    ],
    answer: "He wrote the letter."
},

{
    question: "Select the most appropriate option to fill in the blank.\n\nThe sun rises ______ the east.",
    option: [
        "at",
        "on",
        "in",
        "from"
    ],
    answer: "in"
},
{
    question: "Which word best replaces the underlined word in the sentence?\nThe chef used a wonderful blend of spices to flavour the dish.",
    option: [
        "a supernatural",
        "an exotic",
        "an essential",
        "a bland"
    ],
    answer: "an exotic"
},

{
    question: "Select the word from among the given options that is closest in meaning to the underlined word in the given sentence.\nAjay was cautious when investing in the stock market.",
    option: [
        "Heedless",
        "Lax",
        "Elaborate",
        "Careful"
    ],
    answer: "Careful"
},

{
    question: "Select the most appropriate ANTONYM of the given word.\nDiligent",
    option: [
        "Hardworking",
        "Persistent",
        "Inactive",
        "Industrious"
    ],
    answer: "Inactive"
},

{
    question: "Select the correct spelling of the underlined incorrectly spelt word in the given sentence.\nKashiram was very symphathetic towards his housekeeper.",
    option: [
        "sympathetic",
        "symphathetik",
        "simpatetic",
        "simpathetic"
    ],
    answer: "sympathetic"
},

{
    question: "Select the most appropriate ANTONYM of the underlined word in the sentence given below.\nAn important meeting ended up in farce because of the miscreants.",
    option: [
        "Tragedy",
        "Mockery",
        "Charity",
        "Chaos"
    ],
    answer: "Tragedy"
},

{
    question: "Select the word from among the given options that is closest in meaning to the underlined word in the given sentence.\nFor leisure, Arjun prefers to unwind by playing chess with friends.",
    option: [
        "Relaxation",
        "Labour",
        "Incarceration",
        "Profit"
    ],
    answer: "Relaxation"
},

{
    question: "The following sentence has been split into four segments. Identify the segment that contains a grammatical error.\n(A) The team worked diligently / (B) to meet the project deadline, / (C) collaborating seamless to ensure / (D) every detail was accounted for and polished.",
    option: [
        "B",
        "A",
        "C",
        "D"
    ],
    answer: "C"
},

{
    question: "Select the most appropriate option to fill in the blank.\nMy friend has gone to Kerala on vacation, but I have no special plans. I will stay home and _______.",
    option: [
        "pitch in",
        "iron out",
        "slip up",
        "goof off"
    ],
    answer: "goof off"
},

{
    question: "Select the most appropriate ANTONYM of the given word.\nAccurate",
    option: [
        "Faulty",
        "Correct",
        "Careful",
        "Errorless"
    ],
    answer: "Faulty"
},

{
    question: "Select the most appropriate option to fill in the blank.\nThe artist’s _______________ use of colour made the painting boring and dull.",
    option: [
        "exceptional",
        "drab",
        "vibrant",
        "exciting"
    ],
    answer: "drab"
},

{
    question: "Select the most appropriate option to fill in the blank.\nAfter years of hard work, he finally ______ his dream of becoming a doctor.",
    option: [
        "tried",
        "accomplished",
        "forfeit",
        "solved"
    ],
    answer: "accomplished"
},

{
    question: "Select the word that best completes the given sentence. Determine the collocation through the sentence.\nMs. Suma aims to maintain __________ standards of customer care.",
    option: [
        "high",
        "expensive",
        "confident",
        "loyal"
    ],
    answer: "high"
},

{
    question: "Select the most appropriate meaning of the given idiom.\nBurn the midnight oil",
    option: [
        "To work late into the night",
        "To waste time",
        "To literally burn oil at midnight",
        "To extinguish a flame"
    ],
    answer: "To work late into the night"
},

{
    question: "Select the INCORRECTLY spelt word.",
    option: [
        "Inadvertent",
        "Maintenence",
        "Embarrassment",
        "Necessary"
    ],
    answer: "Maintenence"
},

{
    question: "Parts of the following sentence have been given as options. Select the option that contains a grammatical error.\nThe Chairman instructed the managers that he shall been holding a meeting in Alberto Hall tomorrow evening.",
    option: [
        "managers that he",
        "shall been holding a meeting",
        "The Chairman instructed the",
        "in Alberto Hall tomorrow evening."
    ],
    answer: "shall been holding a meeting"
},

];

// =====================================================
// HELPERS
// =====================================================
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const getRandom = (arr, n) => shuffle(arr).slice(0, n);

/**
 * Build paper: 20 Math + 20 Reasoning + 20 GK + 20 English = 80
 */
const buildQuestionPaper = () => {
  const mathQs = getRandom(mathQuestions, 20).map((q) => ({
    ...q,
    section: 1,
    sectionName: "Mathematics",
  }));

  const reasoningQs = getRandom(reasoningQuestions, 20).map((q) => ({
    ...q,
    section: 2,
    sectionName: "Reasoning",
  }));

  const gkQs = getRandom(gkQuestions, 20).map((q) => ({
    ...q,
    section: 3,
    sectionName: "General Knowledge",
  }));

  const engQs = getRandom(englishQuestions, 20).map((q) => ({
    ...q,
    section: 4,
    sectionName: "English",
  }));

  return [...mathQs, ...reasoningQs, ...gkQs, ...engQs];
};

// =====================================================
// MAIN COMPONENT
// =====================================================
export default function SSCGDMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600); // 60 min
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState({
    correct: 0,
    wrong: 0,
    notAttempted: 0,
    finalScore: 0,
  });
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
    // eslint-disable-next-line
  }, [started, submitted, timer]);

  const startExam = () => {
    const paper = buildQuestionPaper();
    setQuestions(paper);
    setStarted(true);
    setTimer(3600);
    setAnswers({});
    setCurrent(0);
    setScore({ correct: 0, wrong: 0, notAttempted: 0, finalScore: 0 });
    setResultDetails([]);
    setShowTimerWarning(false);
  };

  const submitExam = () => {
    let correctCount = 0;
    let wrongCount = 0;
    let notAttemptedCount = 0;
    const details = questions.map((q, i) => {
      const userAns = answers[i];
      const isCorrect = userAns === q.answer;
      const attempted = !!userAns;

      if (isCorrect) correctCount++;
      else if (attempted) wrongCount++;
      else notAttemptedCount++;

      return {
        question: q.question,
        option: q.option,
        correctAnswer: q.answer,
        userAnswer: userAns || "Not Attempted",
        isCorrect,
        attempted,
        section: q.section,
        sectionName: q.sectionName,
      };
    });

    // NO negative marking
    const finalScore = correctCount * 1;

    setScore({
      correct: correctCount,
      wrong: wrongCount,
      notAttempted: notAttemptedCount,
      finalScore: finalScore,
    });
    setResultDetails(details);
    setSubmitted(true);
  };

  // ============ HOME ============
  if (!started) {
    return (
      <div style={styles.homeWrapper}>
        <div style={styles.homeCard}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🎯</div>
          <h1 style={styles.homeTitle}>SSC GD Mock Test</h1>
          <p style={styles.homeSub}>Constable General Duty</p>
          <div style={styles.divider}></div>

          <div style={styles.statGridTwo}>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>📝 Questions</div>
              <div style={styles.statValue}>80</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>⏱️ Time</div>
              <div style={styles.statValue}>60 min</div>
            </div>
          </div>

          <div style={styles.instructionsBox}>
            <strong>📋 Instructions:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>All questions are compulsory</li>
              <li>Each question carries <strong>1 mark</strong></li>
              <li><strong>No negative marking</strong></li>
            </ul>
          </div>

          <button onClick={startExam} style={styles.startBtn}>
            🚀 Start Exam
          </button>
        </div>
        <style>{animStyles}</style>
      </div>
    );
  }

  // ============ RESULT ============
  if (submitted) {
    const total = questions.length;
    const maxMarks = total * 1;
    const { correct, wrong, notAttempted, finalScore } = score;

    const percentage = ((finalScore / maxMarks) * 100).toFixed(2);
    const isPassed = Number(percentage) >= 60;

    return (
      <div style={styles.resultWrapper}>
        <div style={styles.resultContainer}>
          <div style={styles.resultCard}>
            <h1 style={{ fontSize: "24px", marginBottom: "5px", color: "#2d3748" }}>
              {isPassed ? "🎉 Congratulations!" : "📖 Keep Practicing!"}
            </h1>
            <div style={{ ...styles.bigCircle, background: isPassed ? "#d4edda" : "#f8d7da" }}>
              {isPassed ? "✅" : "📝"}
            </div>

            <div style={styles.scoreBig}>
              {finalScore}{" "}
              <span style={{ fontSize: "22px", color: "#888" }}>/ {maxMarks}</span>
            </div>

            <div style={{ fontSize: "18px", color: isPassed ? "#16a34a" : "#dc2626", fontWeight: "700", marginTop: "4px" }}>
              {percentage}% {isPassed ? "✔️ Passed" : "❌ Failed"}
            </div>
            <div style={styles.langLine}>Language: English • No negative marking</div>

            <div style={styles.statRow}>
              <div style={{ ...styles.pill, background: "#dcfce7", color: "#166534" }}>
                ✔ Correct: {correct} (+{correct})
              </div>
              <div style={{ ...styles.pill, background: "#fee2e2", color: "#991b1b" }}>
                ✖ Wrong: {wrong} (0)
              </div>
              <div style={{ ...styles.pill, background: "#fef3c7", color: "#92400e" }}>
                ⚪ Not Attempted: {notAttempted}
              </div>
            </div>

            <div style={{
              marginTop: "14px",
              fontSize: "12px",
              color: "#166534",
              background: "#dcfce7",
              border: "1px solid #86efac",
              padding: "8px 12px",
              borderRadius: "8px",
              fontWeight: "600",
            }}>
              ✅ No Negative Marking
            </div>

            <button onClick={() => window.print()} style={styles.downloadBtn}>
              📥 Download Result
            </button>
          </div>

          <div style={styles.reviewCard}>
            <h2 style={styles.reviewTitle}>📋 Answer Review</h2>
            {resultDetails.map((item, index) => (
              <div
                key={index}
                style={{
                  ...styles.reviewItem,
                  background: "#fffbeb",
                  borderLeft: `4px solid ${
                    item.isCorrect ? "#22c55e" : item.attempted ? "#ef4444" : "#f59e0b"
                  }`,
                }}
              >
                <div style={styles.reviewQ}>
                  Q{index + 1}. <QuestionText text={item.question} />
                </div>
                <div style={styles.reviewAns}>
                  <div>
                    <strong>Your Answer: </strong>
                    <span style={{ color: item.isCorrect ? "#16a34a" : "#dc2626" }}>
                      <MathText text={item.userAnswer} />
                    </span>
                  </div>
                  <div>
                    <strong>Correct Answer: </strong>
                    <span style={{ color: "#16a34a", fontStyle: "italic" }}>
                      <MathText text={item.correctAnswer} />
                    </span>
                  </div>
                </div>
                <div style={styles.reviewStatus}>
                  {item.isCorrect ? "✅" : item.attempted ? "❌" : "⚪"}
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
                setCurrent(0);
                setScore({ correct: 0, wrong: 0, notAttempted: 0, finalScore: 0 });
              }}
              style={styles.startBtn}
            >
              🔄 Take New Test
            </button>
          </div>
        </div>
        <style>{animStyles}</style>
      </div>
    );
  }

  // ============ EXAM ============
  const q = questions[current] || { question: "", option: [], answer: "", sectionName: "" };
  const answeredCount = Object.keys(answers).length;

  const sectionColor = (s) => {
    switch (s) {
      case 1: return "#3b82f6"; // Mathematics - blue
      case 2: return "#8b5cf6"; // Reasoning - purple
      case 3: return "#f59e0b"; // GK - amber
      case 4: return "#10b981"; // English - green
      default: return "#0f3460";
    }
  };

  return (
    <div style={styles.examWrapper}>
      <div style={styles.examContainer}>
        <div style={styles.topBar}>
          <div style={{ flex: 1 }}>
            <p style={styles.qCounter}>Q{current + 1}/{questions.length}</p>
            <p style={styles.qSubCounter}>
              Answered: {answeredCount}/{questions.length}
            </p>
            <p style={{
              margin: "4px 0 0",
              fontSize: "11px",
              color: "white",
              fontWeight: "700",
              background: sectionColor(q.section),
              display: "inline-block",
              padding: "3px 10px",
              borderRadius: "10px",
            }}>
              {q.sectionName}
            </p>
          </div>
          <div style={{ ...styles.timer, color: timer < 60 ? "#fc8181" : "#1a1a2e" }}>
            <span style={{ fontSize: "16px" }}>⏱️</span>
            <span>{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}</span>
          </div>
        </div>

        <div style={styles.questionCard}>
          <h3 style={styles.questionText}>
            <QuestionText text={q.question} />
          </h3>
          <div style={{ marginTop: "5px" }}>
            {q.option && q.option.map((op, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.option,
                  backgroundColor: answers[current] === op ? "#ebf8ff" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #0f3460" : "2px solid transparent",
                }}
                onClick={() => setAnswers({ ...answers, [current]: op })}
              >
                <input
                  type="radio"
                  checked={answers[current] === op}
                  onChange={() => {}}
                  style={{ marginRight: "10px", width: "16px", height: "16px" }}
                />
                <label style={styles.optionLabel}>
                  <MathText text={op} />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.navRow}>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              style={{
                ...styles.navBtn,
                backgroundColor: current === 0 ? "#e2e8f0" : "#0f3460",
                color: current === 0 ? "#a0aec0" : "white",
                cursor: current === 0 ? "not-allowed" : "pointer",
              }}
            >
              ⬅ Prev
            </button>
            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                ...styles.navBtn,
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#0f3460",
                color: current === questions.length - 1 ? "#a0aec0" : "white",
                cursor: current === questions.length - 1 ? "not-allowed" : "pointer",
              }}
            >
              Next ➡
            </button>
          </div>
          <button onClick={submitExam} style={styles.submitBtn}>📤 Submit</button>
        </div>

        <div style={styles.navigatorCard}>
          <p style={styles.navTitle}>Question Navigator</p>
          <div style={styles.navGrid}>
            {questions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                title={question.sectionName}
                style={{
                  ...styles.navNum,
                  backgroundColor: answers[idx] ? "#48bb78" :
                                   current === idx ? sectionColor(question.section) : "#e2e8f0",
                  color: answers[idx] || current === idx ? "white" : "#4a5568",
                  border: current === idx ? `2px solid ${sectionColor(question.section)}` : "none",
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div style={styles.legendRow}>
            <span>🟢 Answered</span>
            <span>🔵 Current</span>
            <span>⚪ Unanswered</span>
          </div>
        </div>

        {showTimerWarning && (
          <div style={styles.timerWarning}>⚠️ Less than 1 minute remaining!</div>
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
  homeWrapper: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "20px" },
  homeCard: { backgroundColor: "white", padding: "25px 20px", borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", textAlign: "center", maxWidth: "500px", width: "100%" },
  homeTitle: { color: "#1a1a2e", marginBottom: "3px", fontSize: "22px", fontWeight: "700" },
  homeSub: { color: "#666", fontSize: "12px", marginBottom: "15px" },
  divider: { height: "3px", background: "linear-gradient(90deg, #1a1a2e, #0f3460)", margin: "10px auto", width: "60px" },
  statGridTwo: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "15px" },
  statBox: { backgroundColor: "#e8f0fe", padding: "12px", borderRadius: "10px" },
  statLabel: { fontSize: "11px", color: "#666" },
  statValue: { fontSize: "22px", fontWeight: "bold", color: "#1a1a2e" },
  instructionsBox: { backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "10px", marginTop: "10px", fontSize: "12px", color: "#555", textAlign: "left" },
  startBtn: { padding: "14px 40px", fontSize: "18px", fontWeight: "bold", background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)", color: "white", border: "none", borderRadius: "50px", cursor: "pointer", marginTop: "20px", width: "100%", transition: "transform 0.3s, box-shadow 0.3s", boxShadow: "0 4px 15px rgba(15, 52, 96, 0.4)" },
  resultWrapper: { minHeight: "100vh", background: "#f5f7fa", padding: "15px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
  resultContainer: { maxWidth: "800px", margin: "0 auto" },
  resultCard: { backgroundColor: "white", borderRadius: "16px", padding: "25px 20px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", textAlign: "center", marginBottom: "20px" },
  bigCircle: { width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "15px auto", fontSize: "32px" },
  scoreBig: { fontSize: "44px", fontWeight: "bold", color: "#1a1a2e" },
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
  questionCard: { backgroundColor: "white", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: "10px" },
  questionText: { fontSize: "16px", color: "#1a1a2e", marginBottom: "16px", fontWeight: "600", lineHeight: "1.8", whiteSpace: "normal" },
  option: { padding: "10px 12px", margin: "5px 0", borderRadius: "8px", cursor: "pointer", transition: "all 0.3s ease", display: "flex", alignItems: "center" },
  optionLabel: { fontSize: "14px", cursor: "pointer", flex: 1, margin: "0", color: "#2d3748", lineHeight: "1.8", whiteSpace: "normal" },
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
  .math-text {
    line-height: 2;
  }
  .katex {
    font-size: 1.3em;
  }
  .katex .mfrac {
    font-size: 1.15em;
  }
  .katex .mfrac .frac-line {
    border-bottom-width: 0.08em;
  }
  .katex .sqrt > .root {
    font-size: 0.85em;
  }
  .katex .msupsub {
    font-size: 0.85em;
  }
  .optionLabel .katex {
    font-size: 1.2em;
  }
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
