// Math12thQuiz.jsx
import React, { useState, useEffect, useRef } from "react";

// --- 12th Mathematics Question Bank (100 questions) - Hindi & English ---

// Hindi Questions
const mathHindi = [
 {
    question: "$f:A\\\\to B$ एक आच्छादक फलन होगा, यदि:",
    option: [
        "$B\\\\subset f(A)$",
        "$f(A)=B$",
        "$f(B)\\\\subset A$",
        "$f(A)\\\\subset B$"
    ],
    answer: "$f(A)=B$"
},

{
    question: "एक गोलाकार गुब्बारे को इस प्रकार फुलाया जाता है कि इसका आयतन 40 सेमी³/से. की दर से बढ़ता है जब इसकी त्रिज्या 8 सेमी. है, तब इसके पृष्ठ का क्षेत्रफल निम्न दर से बढ़ता है -",
    option: [
        "$400\\\\,\\\\text{सेमी}^2/\\\\text{मिनट}$",
        "$10\\\\,\\\\text{सेमी}^2/\\\\text{मिनट}$",
        "$10\\\\,\\\\text{सेमी}/\\\\text{मिनट}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$10\\\\,\\\\text{सेमी}^2/\\\\text{मिनट}$"
},

{
    question: "यदि $y=\\\\tan^{-1}\\\\left(\\\\frac{\\\\cos x}{1+\\\\sin x}\\\\right)$, तब $\\\\frac{dy}{dx}=?$",
    option: [
        "1",
        "-1",
        "$\\\\frac{1}{2}$",
        "$-\\\\frac{1}{2}$"
    ],
    answer: "$-\\\\frac{1}{2}$"
},

{
    question: "सामान्य रैखिक प्रोग्रामिंग में उद्देश्य फलन होता है ?",
    option: [
        "रैखिक फलन",
        "अरैखिक फलन",
        "अचर फलन",
        "इनमें से कोई नहीं"
    ],
    answer: "अचर फलन"
},

{
    question: "$(\\\\vec{a}-\\\\vec{b})\\\\times(\\\\vec{a}+\\\\vec{b})=?$",
    option: [
        "$2(\\\\vec{a}\\\\times\\\\vec{b})$",
        "$\\\\vec{a}\\\\times\\\\vec{b}$",
        "$|\\\\vec{a}|^2-|\\\\vec{b}|^2$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2(\\\\vec{a}\\\\times\\\\vec{b})$"
},

{
    question: "माना की $f(x)=\\\\int_1^x\\\\sqrt{2-t^2}\\\\,dt$ तो समीकरण $x^2-f'(x)=0$ का वास्तविक मूल है -",
    option: [
        "$\\\\pm\\\\frac{1}{2}$",
        "$\\\\pm1$",
        "$\\\\pm\\\\frac{1}{\\\\sqrt{2}}$",
        "$\\\\pm2$"
    ],
    answer: "$\\\\pm1$"
},

{
    question: "$N$ पर एक द्विचर संक्रिया $a•b=a^3+b^3$ से परिभाषित है:",
    option: [
        "• साहचर्य एक क्रमविनिमेय है",
        "• क्रमविनिमेय है परंतु साहचर्य नहीं",
        "• साहचर्य है परंतु क्रमविनिमेय नहीं",
        "• न तो साहचर्य है और न क्रमविनिमेय है"
    ],
    answer: "• क्रमविनिमेय है परंतु साहचर्य नहीं"
},

{
    question: "$2\\\\tan^{-1}\\\\frac{1}{3}+\\\\tan^{-1}\\\\frac{1}{7}$ = ?",
    option: [
        "$\\\\tan^{-1}\\\\frac{44}{29}$",
        "$\\\\frac{\\\\pi}{2}$",
        "0",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$\\\\frac{dy}{dx}=1+x+y+xy$ का हल है :-",
    option: [
        "$x-y=k(1+xy)$",
        "$\\\\log(1+y)=x+\\\\frac{x^2}{2}+k$",
        "$\\\\log(1+x)=y+\\\\frac{y^2}{2}+k$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\log(1+y)=x+\\\\frac{x^2}{2}+k$"
},

{
    question: "यदि $P(A)=\\\\frac{3}{8}$, $P(B)=\\\\frac{1}{2}$ और $P(A\\\\cap B)=\\\\frac{1}{4}$, तो $P(\\\\frac{A}{\\\\bar{B}})=?$",
    option: [
        "$\\\\frac{1}{4}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{3}{4}$",
        "$\\\\frac{3}{8}$"
    ],
    answer: "$\\\\frac{3}{4}$"
},

{
    question: "यदि $\\\\Delta=\\\\begin{vmatrix}a_{11}&a_{12}&a_{13}\\\\\\\\a_{21}&a_{22}&a_{23}\\\\\\\\a_{31}&a_{32}&a_{33}\\\\end{vmatrix}$ और $a_{ij}$ का सहखंड $A_{ij}$ हो तो $\\\\Delta$ का मान है :-",
    option: [
        "$a_{11}A_{31}+a_{12}A_{32}+a_{13}A_{33}$",
        "$a_{11}A_{11}+a_{12}A_{21}+a_{13}A_{31}$",
        "$a_{21}A_{11}+a_{22}A_{12}+a_{23}A_{13}$",
        "$a_{11}A_{11}+a_{21}A_{21}+a_{31}A_{31}$"
    ],
    answer: "$a_{11}A_{11}+a_{12}A_{21}+a_{13}A_{31}$"
},

{
    question: "$\\\\left(\\\\frac{1}{x}\\\\right)^{2x^2}$ का अधिकतम मूल्य होगा -",
    option: [
        "$1$",
        "$e$",
        "$e^{1/e}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$e^{1/e}$"
},

{
    question: "यदि $y=x^3$, तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$3x^2$",
        "$6x$",
        "6",
        "0"
    ],
    answer: "$3x^2$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}=\\\\frac{y}{x}$ का हल है ?",
    option: [
        "$y=\\\\frac{k}{x}$",
        "$y=kx$",
        "$y=k\\\\log x$",
        "$\\\\log y=kx$"
    ],
    answer: "$y=kx$"
},

{
    question: "मूल बिंदु से बिंदु $(-3,4,5)$ की दूरी है -",
    option: [
        "$50$",
        "$5\\\\sqrt{2}$",
        "$6$",
        "इनमें से कोई नहीं"
    ],
    answer: "$5\\\\sqrt{2}$"
},

{
    question: "यदि तल $2x-y+z=0$ रेखा $\\\\frac{2x-1}{2}=\\\\frac{2-y}{2}=\\\\frac{z+1}{2}$ के समांतर हो तो $a$ का मान है-",
    option: [
        "$-4$",
        "$-2$",
        "$4$",
        "$2$"
    ],
    answer: "$-4$"
},

{
    question: "यदि $a,b,c$ समान्तर श्रेणी में हों तो $\\\\begin{vmatrix}x+1&x+2&x+a\\\\\\\\x+2&x+3&x+b\\\\\\\\x+3&x+4&x+c\\\\end{vmatrix}=?$",
    option: [
        "3",
        "-3",
        "0",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "मूल बिंदु से बिंदु $(-3,4,5)$ की दूरी निम्न में से कौन है ?",
    option: [
        "$25\\\\sqrt{2}$",
        "$5\\\\sqrt{2}$",
        "$10\\\\sqrt{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$5\\\\sqrt{2}$"
},

{
    question: "$\\\\sin\\\\left[\\\\frac{\\\\pi}{3}-\\\\sin^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)\\\\right]$ बराबर है :",
    option: [
        "$\\\\frac{1}{2}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{1}{4}$",
        "1"
    ],
    answer: "1"
},

{
    question: "$\\\\vec{a}\\\\cdot\\\\vec{a}=?$",
    option: [
        "$0$",
        "$1$",
        "$|\\\\vec{a}|^2$",
        "$|\\\\vec{a}|$"
    ],
    answer: "$|\\\\vec{a}|^2$"
},

{
    question: "$\\\\begin{vmatrix}1&x&x^2\\\\\\\\1&y&y^2\\\\\\\\1&z&z^2\\\\end{vmatrix}=?$",
    option: [
        "$(x-y)(y+z)(z+x)$",
        "$(x+y)(y-z)(z-x)$",
        "$(x-y)(y-z)(z-x)$",
        "$(x-y)(y-z)(z+x)$"
    ],
    answer: "$(x-y)(y-z)(z-x)$"
},

{
    question: "वक्र $y=x\\\\sin x$ और $x$-अक्ष के बीच घिरा हुआ $x=0$ से $x=2\\\\pi$ तक का क्षेत्रफल है :",
    option: [
        "$2\\\\pi$",
        "$3\\\\pi$",
        "$4\\\\pi$",
        "इनमें से कोई नहीं"
    ],
    answer: "$4\\\\pi$"
},

{
    question: "$a$ का वह मान जिसके लिए $f(x)=a\\\\sin x+\\\\frac{1}{3}\\\\sin3x$ का $x=\\\\frac{\\\\pi}{3}$ पर चरम मान है, निम्न है -",
    option: [
        "$1$",
        "$-1$",
        "$0$",
        "$2$"
    ],
    answer: "$2$"
},

{
    question: "फलन $f(x)=x^3-27x+8$ वर्धमान फलन हो तो",
    option: [
        "$|x|<3$",
        "$|x|>3$",
        "$-3<x<3$",
        "इनमें से कोई नहीं"
    ],
    answer: "$|x|>3$"
},

{
    question: "सामान्य रेखिक प्रोग्रामिंग में उद्देश्य फलन होता है?",
    option: [
        "रेखिक फलन",
        "अरेखिक फलन",
        "अचर फलन",
        "इनमें से कोई नहीं"
    ],
    answer: "अचर फलन"
},

{
    question: "वक्र $y^2=4x$, $y$-अक्ष और रेखा $y=3$ के बीच घिरा क्षेत्रफल है :",
    option: [
        "2 वर्ग इकाई",
        "$\\\\frac{9}{4}$ वर्ग इकाई",
        "$6\\\\sqrt{3}$ वर्ग इकाई",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{9}{4}$ वर्ग इकाई"
},

{
    question: "निम्नलिखित समीकरणों में से किस समीकरण का एक विशिष्ट हल $y=x$ है?",
    option: [
        "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=x$",
        "$\\\\frac{d^2y}{dx^2}+x\\\\frac{dy}{dx}+xy=x$",
        "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=0$",
        "$\\\\frac{d^2y}{dx^2}+x\\\\frac{dy}{dx}+xy=0$"
    ],
    answer: "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=0$"
},

{
    question: "यदि $\\\\int_0^a f(x)\\\\,dx=10$, तो $\\\\int_0^a f(a-x)\\\\,dx$ का मान है ?",
    option: [
        "$\\\\frac{5}{2}$",
        "10",
        "6",
        "5"
    ],
    answer: "10"
},

{
    question: "बिंदु $(0,-1,3)$ से तल $2x+y-2z+1=0$ पर लम्ब की लम्बाई है -",
    option: [
        "$0$",
        "$2\\\\sqrt{3}$",
        "$\\\\frac{2}{3}$",
        "$2$"
    ],
    answer: "$2$"
},

{
    question: "अवकल समीकरण $(1-y^2)\\\\frac{dy}{dx}+yx=ay\\\\;(-1<y<1)$ का समाकलन गुणांक है :-",
    option: [
        "$\\\\frac{1}{y^2-1}$",
        "$\\\\frac{1}{\\\\sqrt{y^2-1}}$",
        "$\\\\frac{1}{1-y^2}$",
        "$\\\\frac{1}{\\\\sqrt{1-y^2}}$"
    ],
    answer: "$\\\\frac{1}{\\\\sqrt{1-y^2}}$"
},

{
    question: "यदि $P(A)=\\\\frac{1}{2}$, $P(B)=0$ तब $P(\\\\frac{A}{B})$ है -",
    option: [
        "0",
        "1",
        "$\\\\frac{1}{2}$",
        "$\\\\infty$"
    ],
    answer: "$\\\\infty$"
},

{
    question: "यदि $f:A\\\\to R$ जहाँ $A=\\\\{-1,0,1,2,3\\\\}$, $R=\\\\{\\\\text{वास्तविक संख्याएँ}\\\\}$ तथा $f(x)=x^2$ तो फलन कैसा फलन है?",
    option: [
        "एकैक आच्छादक",
        "एकैक अंत:क्षेपी",
        "अनेकैक आच्छादक",
        "अनेकैक अंत:क्षेपी"
    ],
    answer: "अनेकैक अंत:क्षेपी"
},

{
    question: "$\\\\sin^{-1}x+\\\\cos^{-1}x$ = ?",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{4}$",
        "$2\\\\pi$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "यदि किसी सरल रेखा का दिक् अनुपात $a,b,c$ है तो उसकी दिक् कोज्याएँ होंगी-",
    option: [
        "$\\\\frac{a}{\\\\sqrt{a^2}},\\\\frac{b}{\\\\sqrt{a^2}},\\\\frac{c}{\\\\sqrt{a^2}}$",
        "$\\\\frac{1}{\\\\sqrt{\\\\sum a^2}},\\\\frac{1}{\\\\sqrt{\\\\sum a^2}},\\\\frac{1}{\\\\sqrt{\\\\sum a^2}}$",
        "$\\\\frac{1}{a},\\\\frac{1}{b},\\\\frac{1}{c}$",
        "$\\\\frac{a}{\\\\sqrt{\\\\sum a^2}},\\\\frac{b}{\\\\sqrt{\\\\sum b^2}},\\\\frac{c}{\\\\sqrt{\\\\sum c^2}}$"
    ],
    answer: "$\\\\frac{a}{\\\\sqrt{a^2}},\\\\frac{b}{\\\\sqrt{a^2}},\\\\frac{c}{\\\\sqrt{a^2}}$"
},

{
    question: "यदि $A=\\\\{1,2,3\\\\}$, $B=\\\\{5,6,7\\\\}$ तथा $f:A\\\\to B$ एक फलन है जैसा कि $f(x)=x+4$ तो f किस प्रकार का फलन है?",
    option: [
        "अनेकैक आच्छादक",
        "अपर फलन",
        "एकैक आच्छादक",
        "अंत:क्षेपी"
    ],
    answer: "एकैक आच्छादक"
},

{
    question: "यदि सदिश $2\\\\hat{i}+\\\\hat{j}-\\\\hat{k}$, $\\\\hat{i}-4\\\\hat{j}-t\\\\hat{k}$ पर लम्ब है, तो $t$ का मान है ?",
    option: [
        "$0$",
        "$-1$",
        "$2$",
        "$3$"
    ],
    answer: "$2$"
},

{
    question: "यदि $y=a\\\\log|x|+bx^2+x$ का $x=-1$ और $x=2$ पर चरम मान है, तो -",
    option: [
        "$a=2,b=-1$",
        "$a=2,b=-\\\\frac{1}{2}$",
        "$a=-2,b=\\\\frac{1}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$a=2,b=-\\\\frac{1}{2}$"
},

{
    question: "यदि $\\\\left|\\\\begin{array}{cc}x&8\\\\\\\\3&3\\\\end{array}\\\\right|=0$, $x$ का मान है :",
    option: [
        "3",
        "8",
        "24",
        "10"
    ],
    answer: "8"
},

{
    question: "वह बिंदु जिस पर वक्र $y=x^2+5$ की स्पर्श रेखा, रेखा $x+3y=2$ के लम्बवत है, निम्न है -",
    option: [
        "$(6,1),(-1,4)$",
        "$(1,6),(1,4)$",
        "$(6,1),(4,1)$",
        "$(1,6),(-1,4)$"
    ],
    answer: "$(6,1),(-1,4)$"
},

{
    question: "$\\\\begin{vmatrix}1&2&3\\\\\\\\2&4&6\\\\\\\\1&1&2\\\\end{vmatrix}=?$",
    option: [
        "5",
        "17",
        "8",
        "0"
    ],
    answer: "0"
},

{
    question: "यदि $P(x)=\\\\frac{x}{15}$, $x=1,2,3,4,5=0$ अन्यथा, तब $P(x=1\\\\text{ या }2)$ है-",
    option: [
        "$\\\\frac{1}{15}$",
        "$\\\\frac{2}{15}$",
        "$\\\\frac{1}{5}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{5}$"
},

{
    question: "यदि $f(x)=x^5-5x^4+5x^3-10$ का मान $x=q$ पर न्यूनतम और $x=p$ पर महत्तम है, तो $(p,q)=?$",
    option: [
        "$(0,1)$",
        "$(1,3)$",
        "$(1,0)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$(1,3)$"
},

{
    question: "यदि $A = \\\\begin{bmatrix}1&1&1\\\\\\\\1&1&1\\\\\\\\1&1&1\\\\end{bmatrix}$ तो $A^2 = ?$",
    option: [
        "$2A$",
        "$3A$",
        "$27A$",
        "इनमें से कोई नहीं"
    ],
    answer: "$3A$"
},

{
    question: "$2\\\\tan^{-1}x$ = ?",
    option: [
        "$\\\\sin^{-1}\\\\frac{2x}{1+x^2}$",
        "$\\\\sin^{-1}\\\\frac{2x}{1-x^2}$",
        "$\\\\sin^{-1}\\\\frac{1-x^2}{1+x^2}$",
        "$\\\\sin^{-1}\\\\frac{1+x^2}{1-x^2}$"
    ],
    answer: "$\\\\sin^{-1}\\\\frac{2x}{1+x^2}$"
},

{
    question: "यदि $y=x^2+3x-4$ तो दिए हुए वक्र के बिंदु $(1,1)$ पर अभिलम्ब की ढाल है -",
    option: [
        "$5$",
        "$8$",
        "$-\\\\frac{1}{5}$",
        "$-\\\\frac{1}{8}$"
    ],
    answer: "$-\\\\frac{1}{5}$"
},

{
    question: "$\\\\begin{vmatrix}1&a&b+c\\\\\\\\1&b&c+a\\\\\\\\1&c&a+b\\\\end{vmatrix}=?$",
    option: [
        "1",
        "-1",
        "0",
        "$a+b+c$"
    ],
    answer: "0"
},

{
    question: "माना कि $A=\\\\{1,2,3\\\\}$ तो $(1,2)$ को शामिल करते हुए कितने तुल्यता संबंध $A$ पर परिभाषित हो सकते हैं?",
    option: [
        "3",
        "1",
        "2",
        "4"
    ],
    answer: "2"
},

{
    question: "$A=\\\\begin{bmatrix}1&-1\\\\\\\\-1&1\\\\end{bmatrix}\\\\Rightarrow A^2=$",
    option: [
        "$2A$",
        "$A$",
        "$\\\\frac{1}{2}A$",
        "$4A$"
    ],
    answer: "$2A$"
},

{
    question: "वृत्त $x^2+y^2=4$ एवं रेखा $x+y=2$ से घिरे छोटे भाग का क्षेत्रफल है :",
    option: [
        "$2(\\\\pi-2)$",
        "$\\\\pi-2$",
        "$2\\\\pi-1$",
        "$2(\\\\pi+2)$"
    ],
    answer: "$\\\\pi-2$"
},

{
    question: "एक 2 मीटर ऊँचा आदमी, एक प्रकाश स्तम्भ से दूर की ओर 5 मी./मिनट के वेग से चलता है। लैम्प पोस्ट की ऊँचाई 6 मी. है। आदमी की परछाईं की लम्बाई की वृद्धि की दर निम्न होगी -",
    option: [
        "$\\\\frac{2}{5}\\\\,\\\\text{मी./से.}$",
        "$\\\\frac{5}{2}\\\\,\\\\text{मी./से.}$",
        "$10\\\\,\\\\text{मी./से.}$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "परवलय $y^2=4ax$ इसके अक्ष एवं रेखाओं $x=a$, $x=2a$ से घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "$\\\\frac{4}{3}(2\\\\sqrt{2}-1)a^2$",
        "$\\\\frac{2}{3}(2\\\\sqrt{2}+1)a^2$",
        "$\\\\frac{4}{3}(2\\\\sqrt{2}+1)a^2$",
        "$\\\\frac{4}{3}(2\\\\sqrt{2}-1)a$"
    ],
    answer: "$\\\\frac{4}{3}(2\\\\sqrt{2}-1)a^2$"
},

{
    question: "$\\\\int_{-\\\\pi/2}^{\\\\pi/2}\\\\sin^7x\\\\,dx = ?$",
    option: [
        "1",
        "-1",
        "0",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "यदि $\\\\vec a,\\\\vec b,\\\\vec c$ तीन शून्येतर, वैकलीय सदिश और $x,y,z$ तीन अदिश हों जिससे $x\\\\vec a+y\\\\vec b+z\\\\vec c=\\\\vec 0$ तो निम्नांकित में कौन-सा सत्य होगा?",
    option: [
        "$x=0,y=0,z\\\\neq0$",
        "$x=0,y\\\\neq0,z\\\\neq0$",
        "$x=0,y=0,z=0$",
        "$x\\\\neq0,y\\\\neq0,z\\\\neq0$"
    ],
    answer: "$x=0,y=0,z=0$"
},

{
    question: "एक रेखा $(2,-1,3)$ से गुजरती है एवं इसके दिक् अनुपात $3,-1,2$ हैं। इस रेखा के समीकरण होंगे।",
    option: [
        "$\\\\frac{x+2}{3}=\\\\frac{y-1}{-1}=\\\\frac{z+3}{2}$",
        "$\\\\frac{x-2}{3}=\\\\frac{y+1}{-1}=\\\\frac{z-3}{2}$",
        "$\\\\frac{x-3}{2}=\\\\frac{y+1}{-1}=\\\\frac{z-2}{3}$",
        "$\\\\frac{x-3}{2}=\\\\frac{y+1}{-1}=\\\\frac{z-2}{3}$"
    ],
    answer: "$\\\\frac{x-2}{3}=\\\\frac{y+1}{-1}=\\\\frac{z-3}{2}$"
},

{
    question: "$\\\\begin{vmatrix}1&1&1\\\\\\\\a&b&c\\\\\\\\a^3&b^3&c^3\\\\end{vmatrix}=?$",
    option: [
        "$(a-b)(b-c)(c-a)$",
        "$-(a-b)(b-c)(c-a)$",
        "$abc(a-b)(b-c)(c-a)$",
        "$(a-b)(b-c)(c-a)(a+b+c)$"
    ],
    answer: "$(a-b)(b-c)(c-a)(a+b+c)$"
},

{
    question: "यदि $\\\\vec{a}+\\\\vec{b}+\\\\vec{c}=0$, $|\\\\vec{a}|=3$, $|\\\\vec{b}|=4$, $|\\\\vec{c}|=5$ तो $\\\\vec{a}\\\\cdot\\\\vec{b}+\\\\vec{b}\\\\cdot\\\\vec{c}+\\\\vec{c}\\\\cdot\\\\vec{a}=$",
    option: [
        "$-5$",
        "$47$",
        "$0$",
        "$-25$"
    ],
    answer: "$-25$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}3&6\\\\\\\\5&-4\\\\end{bmatrix},B=\\\\begin{bmatrix}7&8\\\\\\\\5&6\\\\end{bmatrix}$ तो $2A+3B=$ आव्यूह",
    option: [
        "$\\\\begin{bmatrix}27&24\\\\\\\\22&10\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}27&36\\\\\\\\35&10\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}27&36\\\\\\\\25&15\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}27&36\\\\\\\\25&10\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}27&36\\\\\\\\25&10\\\\end{bmatrix}$"
},

{
    question: "$\\\\int_0^{\\\\pi/4}(\\\\sqrt{\\\\tan x}+\\\\sqrt{\\\\cot x})\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{\\\\sqrt{2}}$",
        "$\\\\frac{\\\\pi}{2\\\\sqrt{2}}$",
        "$\\\\frac{\\\\pi\\\\sqrt{2}}{4}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{\\\\pi}{\\\\sqrt{2}}$"
},

{
    question: "दो सरल रेखाओं के दिक् अनुपात $l,m,n$ और $l_1,m_1,n_1$ हैं। रेखाएँ एक-दूसरे के समान्तर होंगी यदि -",
    option: [
        "$ll_1+mm_1+nn_1=0$",
        "$\\\\frac{l}{l_1}=\\\\frac{m}{m_1}=\\\\frac{n}{n_1}$",
        "$\\\\frac{l}{l_1}+\\\\frac{m}{m_1}+\\\\frac{n}{n_1}=0$",
        "$ll_1+mm_1+nn_1=1$"
    ],
    answer: "$\\\\frac{l}{l_1}=\\\\frac{m}{m_1}=\\\\frac{n}{n_1}$"
},

{
    question: "$x$ के सापेक्ष $\\\\cos\\\\sqrt{x}$ का अवकल गुणांक है ?",
    option: [
        "$\\\\frac{1}{\\\\sqrt{x}}\\\\sin\\\\sqrt{x}$",
        "$\\\\frac{1}{2\\\\sqrt{x}}\\\\sin\\\\sqrt{x}$",
        "$-\\\\frac{1}{2\\\\sqrt{x}}\\\\sin\\\\sqrt{x}$",
        "$\\\\sin\\\\sqrt{x}$"
    ],
    answer: "$-\\\\frac{1}{2\\\\sqrt{x}}\\\\sin\\\\sqrt{x}$"
},

{
    question: "$y$-अक्ष, $y=\\\\cos x$ एवं $y=\\\\sin x$, $0\\\\leq x\\\\leq\\\\frac{\\\\pi}{2}$ से घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "$2(\\\\sqrt{2}-1)$",
        "$\\\\sqrt{2}-1$",
        "$\\\\sqrt{2}+1$",
        "$\\\\sqrt{2}$"
    ],
    answer: "$2(\\\\sqrt{2}-1)$"
},

{
    question: "यदि $f(-x)=-f(x)$ तो $\\\\int_{-a}^{a}f(x)dx$ का मान निम्न में से कौन होगा ?",
    option: [
        "$f(a)$",
        "$2f(a)$",
        "0",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "यदि $\\\\overrightarrow{AO}+\\\\overrightarrow{OB}=\\\\overrightarrow{BO}+\\\\overrightarrow{OC}$ तो A, B, C हैं -",
    option: [
        "एकतलीय",
        "समरेख",
        "नैक समरेख",
        "नैक तलीय"
    ],
    answer: "समरेख"
},

{
    question: "यदि किसी समतल का समीकरण $2x + 5y - 6z + 3 = 0$ है तो इस समतल के समानान्तर किस समतल का समीकरण है?",
    option: [
        "$3x + 5y - 6z + 3 = 0$",
        "$2x - 5y - 6z + 3 = 0$",
        "$2x + 5y - 6z + k = 0$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2x + 5y - 6z + k = 0$"
},

{
    question: "दो पासे के फेंक में जोड़ा पाने की प्रायिकता है :-",
    option: [
        "$\\\\frac{1}{6}$",
        "$\\\\frac{5}{2}$",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{5}{36}$"
    ],
    answer: "$\\\\frac{1}{6}$"
},

{
    question: "अवकल समीकरण $\\\\left(\\\\frac{dy}{dx}\\\\right)^2-x\\\\frac{dy}{dx}+y=0$ का एक हल है ?",
    option: [
        "$y=2$",
        "$y=2x$",
        "$y=2x-4$",
        "$y=2x^2-4$"
    ],
    answer: "$y=2x-4$"
},

{
    question: "फलन $f(x)=\\\\frac{1}{3}x^3+\\\\frac{1}{2}x^2-6x+8$ निम्न अन्तराल में हासमान है -",
    option: [
        "$-3<x<2$",
        "$x<-3$",
        "कहीं भी नहीं",
        "इनमें से कोई नहीं"
    ],
    answer: "$-3<x<2$"
},

{
    question: "$\\\\hat{i}\\\\times\\\\hat{j}=?$",
    option: [
        "$\\\\hat{k}$",
        "$-\\\\hat{k}$",
        "$\\\\hat{i}$",
        "$-\\\\hat{i}$"
    ],
    answer: "$\\\\hat{k}$"
},

{
    question: "यदि समीकरण समूह $x+py=0,\\\\ y+pz=0,\\\\ z+px=0$ के अनिश्चित हल हों, तो $p$ का मान है :-",
    option: [
        "1",
        "0",
        "-1",
        "इनमें से कोई नहीं"
    ],
    answer: "1"
},

{
    question: "$\\\\frac{d(e^{-x})}{dx}=?$",
    option: [
        "$e^{-x}$",
        "$-e^{-x}$",
        "$\\\\frac{1}{e^{-x}}$",
        "$-\\\\frac{1}{e^{-x}}$"
    ],
    answer: "$-e^{-x}$"
},

{
    question: "$\\\\begin{vmatrix}a-b&b-c&c-a\\\\\\\\b-c&c-a&a-b\\\\\\\\c-a&a-b&b-c\\\\end{vmatrix}=?$",
    option: [
        "$a+b+c$",
        "$3(a+b+c)$",
        "$3abc$",
        "0"
    ],
    answer: "0"
},

{
    question: "यदि $A=\\\\begin{bmatrix}\\\\alpha & 0\\\\\\\\1 & 1\\\\end{bmatrix}$ और $B=\\\\begin{bmatrix}1 & 0\\\\\\\\5 & 1\\\\end{bmatrix}$ तब $A^2=B$ सत्य है",
    option: [
        "$\\\\alpha=1$ के लिए",
        "$\\\\alpha$ की कोई कीमत नहीं",
        "$\\\\alpha=4$ के लिए",
        "$\\\\alpha=-4$ के लिए"
    ],
    answer: "$\\\\alpha$ की कोई कीमत नहीं"
},

{
    question: "यदि 7 और 2 समीकरण $\\\\begin{vmatrix}x&3&7\\\\\\\\2&x&2\\\\\\\\7&6&x\\\\end{vmatrix}=0$ के दो मूल हैं, तो तीसरा मूल होगा?",
    option: [
        "$\\\\frac{1}{2}$",
        "-9",
        "14",
        "इनमें से कोई नहीं"
    ],
    answer: "-9"
},

{
    question: "एक घनाकार पासे को 6 बार उछाला जाता है। 2 और 4 प्रत्येक के ठीक 3, 3 बार ऊपर आने की प्रायिकता है :-",
    option: [
        "$\\\\frac{5}{11664}$",
        "$\\\\frac{1}{46656}$",
        "$\\\\frac{1}{5184}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{5}{11664}$"
},

{
    question: "यदि A और B दो घटनाएँ इस प्रकार की हों कि $P(A)=\\\\frac{1}{2}$, $P(B)=\\\\frac{7}{12}$ और $P(\\\\bar{A} \\\\cup \\\\bar{B})=\\\\frac{1}{4}$ तो A और B हैं -",
    option: [
        "स्वतंत्र",
        "परस्पर अपवर्जी",
        "(a) और (b) दोनों",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "न्यूनतम कीजिए $Z = x + y$ जबकि $3x + 2y \\\\leq 12$, $x + 3y \\\\geq 11$ एवं $x \\\\geq 0, y \\\\geq 0$ हों, तो $x$ और $y$ के मान हैं -",
    option: [
        "$\\\\frac{18}{7},\\\\frac{2}{7}$",
        "$\\\\frac{7}{2},\\\\frac{3}{4}$",
        "$\\\\frac{3}{2},\\\\frac{15}{4}$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "यदि $\\\\sin^{-1}(1-x)-2\\\\sin^{-1}x=\\\\frac{\\\\pi}{2}$ तब $x$ का मान है :",
    option: [
        "0",
        "0, -12",
        "0, 12",
        "कोई नहीं"
    ],
    answer: "0"
},

{
    question: "$\\\\sin(\\\\tan^{-1}x),\\\\ |x|<1$ के बराबर है :",
    option: [
        "$\\\\frac{x}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{1}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{1}{\\\\sqrt{1+x^2}}$",
        "$\\\\frac{x}{\\\\sqrt{1+x^2}}$"
    ],
    answer: "$\\\\frac{x}{\\\\sqrt{1+x^2}}$"
},

{
    question: "यदि A और B दो स्वेच्छ घटनाएँ हों तो -",
    option: [
        "$P(A \\\\cap B) \\\\geq P(A)+P(B)$",
        "$P(A \\\\cap B) \\\\leq P(A)+P(B)$",
        "$P(A \\\\cap B)=P(A)+P(B)$",
        "$P(A \\\\cap B)=P(A)-P(B)$"
    ],
    answer: "$P(A \\\\cap B) \\\\leq P(A)+P(B)$"
},

{
    question: "यदि $y=e^{3\\\\log x}$, तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$3x^2$",
        "$2\\\\log x$",
        "$\\\\frac{3y}{x}$",
        "$3xy$"
    ],
    answer: "$3x^2$"
},

{
    question: "किसी सरल रेखा का समीकरण $\\\\frac{x-1}{2}=\\\\frac{y+2}{3}=\\\\frac{z+1}{4}$ है। रेखा की दिक् कोज्याएँ होंगी -",
    option: [
        "$2,3,4$",
        "$\\\\frac{4}{9},\\\\frac{1}{3},\\\\frac{2}{9}$",
        "$\\\\frac{2}{\\\\sqrt{29}},\\\\frac{3}{\\\\sqrt{29}},\\\\frac{4}{\\\\sqrt{29}}$",
        "$1,-2,-1$"
    ],
    answer: "$\\\\frac{2}{\\\\sqrt{29}},\\\\frac{3}{\\\\sqrt{29}},\\\\frac{4}{\\\\sqrt{29}}$"
},

{
    question: "$\\\\begin{vmatrix}1&1+p&1+p+q\\\\\\\\2&3+2p&1+3p+2q\\\\\\\\3&6+3p&1+6p+3q\\\\end{vmatrix}=?$",
    option: [
        "0",
        "1",
        "-1",
        "इनमें से कोई नहीं"
    ],
    answer: "1"
},

{
    question: "$\\\\begin{vmatrix}10&2\\\\\\\\35&7\\\\end{vmatrix}=?$",
    option: [
        "4",
        "0",
        "3",
        "6"
    ],
    answer: "0"
},

{
    question: "यदि $f:R\\\\to R$ संतुष्ट करता है $f(x+y)=f(x)+f(y)$ सभी $x,y\\\\in R$ के लिए $f(1)=7$, तब $\\\\sum_{r=1}^{n}f(r)$ है:",
    option: [
        "$\\\\frac{7n}{2}$",
        "$\\\\frac{7(n+1)}{2}$",
        "$7n(n+1)$",
        "$\\\\frac{7n(n+1)}{2}$"
    ],
    answer: "$\\\\frac{7n(n+1)}{2}$"
},

{
    question: "वक्र $y=\\\\sin x$, $x$-अक्ष एवं रेखाओं $x=0$, $x=2\\\\pi$ से घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "0",
        "2",
        "4",
        "1"
    ],
    answer: "4"
},

{
    question: "अवकल समीकरण $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^2-\\\\left(y+\\\\frac{dy}{dx}\\\\right)^{1/2}$ का घात और कोटि निम्न में से कौन है ?",
    option: [
        "4, 2",
        "2, 4",
        "3, 4",
        "4, 3"
    ],
    answer: "4, 2"
},

{
    question: "$\\\\int \\\\tan x\\\\,dx = ?$",
    option: [
        "$\\\\log \\\\cos x + c$",
        "$\\\\log \\\\sec x + c$",
        "$\\\\log \\\\cot x + c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\log \\\\sec x + c$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}9&10&11\\\\\\\\12&13&14\\\\end{bmatrix}, B=\\\\begin{bmatrix}11&10&9\\\\\\\\8&7&6\\\\end{bmatrix}$ तो $2A+2B=$",
    option: [
        "$\\\\begin{bmatrix}20&20&20\\\\\\\\20&20&20\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}40&40&40\\\\\\\\40&40&40\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}20&20&20\\\\\\\\40&40&40\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}40&40&40\\\\\\\\20&20&20\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}40&40&40\\\\\\\\40&40&40\\\\end{bmatrix}$"
},

{
    question: "फलन $f(x)=\\\\sqrt{(x-1)(3-x)}$ का प्रांत है:",
    option: [
        "$(1,3)$",
        "$(-2,2)$",
        "$(0,1)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$(1,3)$"
},

{
    question: "यदि $y=a^x$ तो $\\\\frac{d^2y}{dx^2}=?$",
    option: [
        "$a^x\\\\log a$",
        "$a^x(\\\\log a)^2$",
        "$(a^x)^2\\\\log a$",
        "इनमें से कोई नहीं"
    ],
    answer: "$a^x(\\\\log a)^2$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}a & b\\\\\\\\c & d\\\\end{bmatrix}$ तब $A^2$ बराबर होगा",
    option: [
        "$\\\\begin{bmatrix}a^2 & b^2\\\\\\\\c^2 & d^2\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}b^2+bc & ab+bd\\\\\\\\ac+dc & dc+d^2\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}a^3 & b^3\\\\\\\\c^3 & d^3\\\\end{bmatrix}$",
        "कोई नहीं"
    ],
    answer: "$\\\\begin{bmatrix}b^2+bc & ab+bd\\\\\\\\ac+dc & dc+d^2\\\\end{bmatrix}$"
},

{
    question: "तल $\\\\vec{r}\\\\cdot\\\\hat{n}=P_1$ और $\\\\vec{r}\\\\cdot\\\\hat{n}=P_2$ के बीच की दूरी है ?",
    option: [
        "$P_1-P_2$",
        "$|P_1-P_2|$",
        "$\\\\frac{|P_1-P_2|}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$|P_1-P_2|$"
},

{
    question: "फलन $y=f(x)$ का ग्राफ रेखा $x=2$ के सममित हो, तब",
    option: [
        "$f(x)=f(-x)$",
        "$f(2+x)=f(2-x)$",
        "$f(x+2)=f(x-2)$",
        "$f(x)=-f(-x)$"
    ],
    answer: "$f(2+x)=f(2-x)$"
},

{
    question: "यदि $\\\\sin^{-1}x+\\\\sin^{-1}y=\\\\frac{2\\\\pi}{3}$, तो $\\\\cos^{-1}x+\\\\cos^{-1}y$ = ?",
    option: [
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{7}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "$\\\\sin^{-1}\\\\left[\\\\log_3\\\\left(\\\\frac{x}{3}\\\\right)\\\\right]$ का प्रांत:",
    option: [
        "$[1,9]$",
        "$[-9,-1]$",
        "$[-1,9]$",
        "$[-9,1]$"
    ],
    answer: "$[1,9]$"
},

{
    question: "द्विपद बंटन में $P(2)$ का मान जबकि $p=\\\\frac{1}{6}$ और $n=5$ है-",
    option: [
        "$\\\\frac{3125}{7776}$",
        "$\\\\frac{250}{7776}$",
        "$\\\\frac{1250}{7776}$",
        "$\\\\frac{25}{7776}$"
    ],
    answer: "$\\\\frac{1250}{7776}$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}i & 0\\\\\\\\0 & i\\\\end{bmatrix}$ तो $A^2=$",
    option: [
        "$\\\\begin{bmatrix}1 & 0\\\\\\\\0 & -1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1 & 0\\\\\\\\0 & -1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1 & 0\\\\\\\\0 & 1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1 & 0\\\\\\\\0 & 1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}-1 & 0\\\\\\\\0 & -1\\\\end{bmatrix}$"
},

{
    question: "घन के किसी दो विकर्णों के बीच के कोण की कोज्या है -",
    option: [
        "$\\\\frac{1}{3}$",
        "$\\\\frac{1}{2}$",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{\\\\sqrt{3}}$"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}=e^{x+y}$ का व्यापक हल है :-",
    option: [
        "$e^x+e^{-y}=C$",
        "$e^x+e^y=C$",
        "$e^{-x}+e^y=C$",
        "$e^{-x}+e^{-y}=C$"
    ],
    answer: "$e^x+e^{-y}=C$"
},

{
    question: "दो पासों को फेंका जाता है तो एक ट्रिक प्राप्त करने की प्रायिकता है ?",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{5}{6}$",
        "$\\\\frac{5}{36}$"
    ],
    answer: "$\\\\frac{1}{6}$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}=e^{x+y}$ का हल है :-",
    option: [
        "$e^x+e^{-y}+k=0$",
        "$e^{2x}=ke^y$",
        "$e^x=ke^{2y}$",
        "$e^x=ke^y$"
    ],
    answer: "$e^x+e^{-y}+k=0$"
},

{
    question: "तलों $2x-y+z=6$ और $x+y+2z=7$ के बीच का कोण है -",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{2}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "मूल बिंदु से गुजरने वाली रेखाओं के परिवार का अवकल समीकरण है ?",
    option: [
        "$x\\\\frac{dy}{dx}=y$",
        "$y\\\\frac{dy}{dx}=x$",
        "$\\\\frac{dy}{dx}=y$",
        "$\\\\frac{dy}{dx}=x$"
    ],
    answer: "$x\\\\frac{dy}{dx}=y$"
},

{
    question: "$\\\\frac{d}{dx}\\\\log 10^x=?$",
    option: [
        "$\\\\frac{1}{x}$",
        "$\\\\frac{1}{x}\\\\cdot\\\\log 10$",
        "$\\\\frac{1}{x\\\\log 10}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{x}\\\\cdot\\\\log 10$"
},

{
    question: "प्रथम चरण में वृत्त $x^2+y^2=4$ रेखाओं $x=0$, $x=2$ से घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\pi$"
},

{
    question: "$\\\\begin{vmatrix}1^2&2^2&3^2\\\\\\\\2^2&3^2&4^2\\\\\\\\3^2&4^2&5^2\\\\end{vmatrix}=?$",
    option: [
        "8",
        "-8",
        "16",
        "142"
    ],
    answer: "-8"
},

{
    question: "अवकल समीकरण $xdy+ydx=0$ का हल है :-",
    option: [
        "$x+y=c$",
        "$xy=c$",
        "$\\\\log(x+y)=c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$xy=c$"
},

{
    question: "वक्र $y=x|x|$, $x$-अक्ष एवं कोटियों $x=-1$ तथा $x=1$ से घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "0",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{4}{3}$"
    ],
    answer: "$\\\\frac{2}{3}$"
},

{
    question: "$\\\\operatorname{cosec}^{-1}(-2)$ का मुख्य मान है :",
    option: [
        "$-\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{2\\\\pi}{3}$",
        "$-\\\\frac{\\\\pi}{6}$"
    ],
    answer: "$-\\\\frac{\\\\pi}{6}$"
},

{
    question: "यदि रेखा $\\\\frac{x-4}{1}=\\\\frac{y-2}{1}=\\\\frac{z-k}{2}$ तल $2x-4y+z=7$ में स्थित हो तो $k$ का मान है-",
    option: [
        "$-7$",
        "$7$",
        "$4$",
        "$-4$"
    ],
    answer: "$7$"
},

{
    question: "यदि $\\\\frac{1}{a}+\\\\frac{1}{b}+\\\\frac{1}{c}=0$, तो $\\\\begin{vmatrix}1+a&1&1\\\\\\\\1&1+b&1\\\\\\\\1&1&1+c\\\\end{vmatrix}=?$",
    option: [
        "0",
        "$abc$",
        "$-abc$",
        "$a+b+c$"
    ],
    answer: "$abc$"
},

{
    question: "समीकरण $\\\\vec{r}=k_1\\\\hat{i}+k_2\\\\hat{j}$, तल को प्रदर्शित करता है ?",
    option: [
        "$x=0$",
        "$z=0$",
        "$y=0$",
        "इनमें से कोई नहीं"
    ],
    answer: "$z=0$"
},

{
    question: "$\\\\begin{vmatrix}1&x&x^2\\\\\\\\1&y&y^2\\\\\\\\1&z&z^2\\\\end{vmatrix} = ?$",
    option: [
        "0",
        "$(x-y)(y-z)(z-x)$",
        "$(y-x)(y-z)(z-x)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$(x-y)(y-z)(z-x)$"
},

{
    question: "$\\\\vec{a}=-5\\\\hat{j}+\\\\hat{k}$ का $\\\\vec{b}=-4\\\\hat{j}+7\\\\hat{k}$ पर प्रक्षेप का मान निम्न में से कौन होगा?",
    option: [
        "$27$",
        "$47$",
        "$7$",
        "इनमें से कोई नहीं"
    ],
    answer: "$27$"
},

{
    question: "सदिश $2\\\\hat{i}-7\\\\hat{j}+3\\\\hat{k}$ का मापांक है ?",
    option: [
        "$\\\\sqrt{12}$",
        "$\\\\sqrt{50}$",
        "$\\\\sqrt{60}$",
        "$2\\\\sqrt{15}$"
    ],
    answer: "$\\\\sqrt{60}$"
},

{
    question: "वक्र $y^2=4x$ और $y=2x$ के बीच घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{1}{4}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "$\\\\frac{d(e^{\\\\sin\\\\sqrt{x}})}{dx}=?$",
    option: [
        "$e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}$",
        "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}}{2\\\\sqrt{x}}$",
        "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}}{2\\\\sqrt{x}}$",
        "$e^{\\\\sin\\\\sqrt{x}}$"
    ],
    answer: "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}}{2\\\\sqrt{x}}$"
},

{
    question: "यदि $y=e^{\\\\sin\\\\sqrt{x}}$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}$",
        "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}}{2\\\\sqrt{x}}$",
        "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}}{2\\\\sqrt{x}}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}}{2\\\\sqrt{x}}$"
},

{
    question: "$\\\\tan^{-1}(1)+\\\\cot^{-1}\\\\left(\\\\frac{1}{2}\\\\right)+\\\\cot^{-1}\\\\left(\\\\frac{1}{3}\\\\right)$ का मान है :",
    option: [
        "0",
        "1",
        "$\\\\pi$",
        "$-\\\\pi$"
    ],
    answer: "$\\\\pi$"
},

{
    question: "यदि f : R → R इस प्रकार परिभाषित है कि $f(x)=(3-x)^{\\\\frac{1}{3}}$ तब $f\\\\circ f(x)$ है:",
    option: [
        "$x^{\\\\frac{1}{3}}$",
        "$x^3$",
        "$3-x^3$",
        "$x$"
    ],
    answer: "$x$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}=\\\\frac{x}{y}$ का हल है :-",
    option: [
        "$x-y=k$",
        "$x^2-y^2=k$",
        "$x^3-y^3=k$",
        "$xy=k$"
    ],
    answer: "$x^2-y^2=k$"
},

{
    question: "$\\\\int\\\\frac{\\\\cos\\\\sqrt{x}}{\\\\sqrt{x}}\\\\,dx = ?$",
    option: [
        "$2\\\\cos x+k$",
        "$2\\\\sin x+k$",
        "$2\\\\sin\\\\sqrt{x}+k$",
        "$2\\\\cos\\\\sqrt{x}+k$"
    ],
    answer: "$2\\\\sin\\\\sqrt{x}+k$"
},

{
    question: "यदि $y=\\\\tan^{-1}\\\\sqrt{\\\\frac{1-\\\\cos x}{1+\\\\cos x}}$, तब $\\\\frac{dy}{dx}=?$",
    option: [
        "$-\\\\frac{1}{2}$",
        "$\\\\frac{1}{2}$",
        "$\\\\frac{1}{(1+x^2)}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "यदि A और B दो ऐसी घटनाएँ हैं कि $P(A)\\\\neq0$ और $P(\\\\frac{B}{A})=1$, तब",
    option: [
        "$A \\\\subset B$",
        "$B \\\\subset A$",
        "$B=\\\\varnothing$",
        "$A=\\\\varnothing$"
    ],
    answer: "$A \\\\subset B$"
},

{
    question: "फलन $y=x^2-3x+2$ का अन्तराल $0\\\\leq x\\\\leq2$ में निरपेक्ष अधिकतम मान निम्न है -",
    option: [
        "$4$",
        "$6$",
        "$2$",
        "$0$"
    ],
    answer: "$2$"
},

{
    question: "क्षेत्र $y^2=6x$ और वृत्त $x^2+y^2=16$ में सम्मिलित क्षेत्र का क्षेत्रफल है :",
    option: [
        "$\\\\frac{4}{3}(4\\\\pi+\\\\sqrt{3})$",
        "$\\\\frac{4}{3}(4\\\\pi-\\\\sqrt{3})$",
        "$\\\\frac{4}{3}(8\\\\pi-\\\\sqrt{3})$",
        "$\\\\frac{4}{3}(8\\\\pi+\\\\sqrt{3})$"
    ],
    answer: "$\\\\frac{4}{3}(4\\\\pi+\\\\sqrt{3})$"
},

{
    question: "यदि कोई रेखा नियामक अक्षों के साथ क्रमशः $\\\\theta_1,\\\\theta_2$ और $\\\\theta_3$ कोण बनाती हो, तो $\\\\cos^2\\\\theta_1+\\\\cos^2\\\\theta_2+\\\\cos^2\\\\theta_3$ का मान होगा -",
    option: [
        "$2$",
        "$1$",
        "$4$",
        "$\\\\frac{3}{2}$"
    ],
    answer: "$1$"
},

{
    question: "$\\\\int\\\\frac{\\\\log x}{x}\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{2}(\\\\log x)^2+k$",
        "$-\\\\frac{1}{2}(\\\\log x)^2+k$",
        "$\\\\frac{2}{x^2}+k$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{2}(\\\\log x)^2+k$"
},

{
    question: "$\\\\cos^{-1}\\\\left(\\\\cos\\\\frac{5\\\\pi}{3}\\\\right)+\\\\sin^{-1}\\\\left(\\\\sin\\\\frac{5\\\\pi}{3}\\\\right)$ का मान है :",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{5\\\\pi}{3}$",
        "$\\\\frac{10\\\\pi}{3}$",
        "$0$"
    ],
    answer: "$0$"
},

{
    question: "$\\\\tan^{-1}\\\\left(\\\\frac{x}{y}\\\\right)-\\\\tan^{-1}\\\\left(\\\\frac{x-y}{x+y}\\\\right)$ बराबर है :",
    option: [
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$-\\\\frac{3\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$\\\\int_{-1}^{1}|x|\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{2}$",
        "1",
        "-1",
        "इनमें से कोई नहीं"
    ],
    answer: "1"
},

{
    question: "उद्देश्य फलन $Z = x + y$ का न्यूनतम मान जबकि $3x + 2y \\\\leq 12$, $x + 3y \\\\geq 11$, एवं $x \\\\geq 0,\\\\ y \\\\geq 0$ है",
    option: [
        "$\\\\left(\\\\frac{18}{7},\\\\frac{2}{7}\\\\right)$",
        "$\\\\left(\\\\frac{7}{2},\\\\frac{3}{4}\\\\right)$",
        "$\\\\left(\\\\frac{3}{2},\\\\frac{15}{4}\\\\right)$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "यदि • संक्रिया की परिभाषा है कि $a•b=a^2+b^2$, तो $(1•2)•6$ है-",
    option: [
        "12",
        "28",
        "61",
        "इनमें से कोई नहीं"
    ],
    answer: "61"
},

{
    question: "$\\\\tan^{-1}x+\\\\tan^{-1}y=\\\\tan^{-1}\\\\frac{x+y}{1-xy}$, सभी $x,y$ के लिए ?",
    option: [
        "$x>0,\\\\ y>0$ तथा $xy<1$",
        "$x>0,\\\\ y>0$ तथा $xy>1$",
        "$x>0,\\\\ y<0$ तथा $xy>1$",
        "इनमें से कोई नहीं"
    ],
    answer: "$x>0,\\\\ y>0$ तथा $xy<1$"
},

{
    question: "सदिश $\\\\hat{i}+\\\\hat{j}$ और $\\\\hat{j}+\\\\hat{k}$ पर लम्ब, इकाई सदिश बराबर है ?",
    option: [
        "$\\\\hat{i}-\\\\hat{j}+\\\\hat{k}$",
        "$\\\\hat{i}+\\\\hat{j}+\\\\hat{k}$",
        "$\\\\frac{\\\\hat{i}+\\\\hat{j}+\\\\hat{k}}{3}$",
        "$\\\\frac{\\\\hat{i}-\\\\hat{j}+\\\\hat{k}}{\\\\sqrt{3}}$"
    ],
    answer: "$\\\\frac{\\\\hat{i}-\\\\hat{j}+\\\\hat{k}}{\\\\sqrt{3}}$"
},

{
    question: "वक्र $y=\\\\sqrt{x}$ और $x=\\\\sqrt{y}$ का उभयनिष्ठ क्षेत्रफल है :",
    option: [
        "1",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{3}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "मूल बिंदु से गुजरने वाली रेखा का अवकल समीकरण होगा।",
    option: [
        "$x\\\\frac{dy}{dx}=y$",
        "$y\\\\frac{dy}{dx}=x$",
        "$\\\\frac{dy}{dx}=y$",
        "$\\\\frac{dy}{dx}=x$"
    ],
    answer: "$x\\\\frac{dy}{dx}=y$"
},

{
    question: "यदि $w$ समीकरण $x^3-1=0$ का एक अवास्तविक मूल है, तब $\\\\begin{vmatrix}1&w&w^2\\\\\\\\w&w^2&1\\\\\\\\w^2&1&w\\\\end{vmatrix}=?$",
    option: [
        "0",
        "1",
        "$w$",
        "$w^2$"
    ],
    answer: "0"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$, $B=\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$ हो, तो $AB=$",
    option: [
        "$\\\\begin{bmatrix}0&0\\\\\\\\0&0\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&1\\\\\\\\1&0\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$",
        "10"
    ],
    answer: "$\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$"
},

{
    question: "निम्न में कौन सा एक समघातीय अवकल समीकरण नहीं है ?",
    option: [
        "$y^2dx+(x^2+xy)dy=0$",
        "$\\\\frac{dy}{dx}=\\\\frac{y}{x}-\\\\frac{y^3}{x^3}$",
        "$(x-y)dy+y^2dx=0$",
        "$\\\\frac{dy}{dx}=\\\\sin\\\\frac{y}{x}$"
    ],
    answer: "$(x-y)dy+y^2dx=0$"
},

{
    question: "सदिश $\\\\hat{i}-2\\\\hat{j}+\\\\hat{k}$ पर सदिश $4\\\\hat{i}-4\\\\hat{j}+7\\\\hat{k}$ का प्रक्षेप है -",
    option: [
        "$\\\\frac{19}{8}$",
        "$\\\\frac{19}{9}$",
        "$\\\\frac{19}{11}$",
        "$\\\\frac{19}{7}$"
    ],
    answer: "$\\\\frac{19}{9}$"
},

{
    question: "अवकल समीकरण $\\\\frac{xdy-ydx}{x}-y=2x^2$ का समाकलन गुणांक है :-",
    option: [
        "$e^{-x}$",
        "$e^{-y}$",
        "$\\\\frac{1}{x}$",
        "$x$"
    ],
    answer: "$\\\\frac{1}{x}$"
},

{
    question: "बिंदुओं $(4,3,-5)$ और $(-2,1,-8)$ को मिलाने वाली रेखा की दिक् कोज्याएँ हैं-",
    option: [
        "$(4,3,-5)$",
        "$(-2,1,-8)$",
        "$\\\\left(\\\\frac{6}{7},\\\\frac{2}{7},\\\\frac{3}{7}\\\\right)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\left(\\\\frac{6}{7},\\\\frac{2}{7},\\\\frac{3}{7}\\\\right)$"
},

{
    question: "बिंदु $(x,y,z)$ का स्थिति सदिश है -",
    option: [
        "$x\\\\vec{i}-y\\\\vec{j}-z\\\\vec{k}$",
        "$x\\\\vec{i}+y\\\\vec{j}-z\\\\vec{k}$",
        "$x\\\\vec{i}-y\\\\vec{j}+z\\\\vec{k}$",
        "$x\\\\vec{i}+y\\\\vec{j}+z\\\\vec{k}$"
    ],
    answer: "$x\\\\vec{i}+y\\\\vec{j}+z\\\\vec{k}$"
},

{
    question: "सरल रेखा $2x - 3y = -z$ और $6x = -y = -4z$ के बीच का कोण है।",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{2}$",
        "0",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "$f(x)=\\\\frac{2x}{\\\\log x}$ वर्धमान है -",
    option: [
        "$]0,1[$",
        "$]1,e[$",
        "$]e,\\\\infty[$",
        "$]-\\\\infty,e[$"
    ],
    answer: "$]e,\\\\infty[$"
},

{
    question: "$\\\\int a^{3x+3}\\\\,ax\\\\,dx\\\\;(a>0) = ?$",
    option: [
        "$a^3\\\\cdot\\\\frac{a^{3x}}{3\\\\log a}+k$",
        "$a^2\\\\cdot\\\\frac{a^{3x}}{3\\\\log a}+k$",
        "$\\\\frac{a^{3x}}{\\\\log a}+k$",
        "इनमें से कोई नहीं"
    ],
    answer: "$a^3\\\\cdot\\\\frac{a^{3x}}{3\\\\log a}+k$"
},

{
    question: "फलन $f(x)=\\\\sqrt{\\\\sin^{-1}x}$ का प्रांत है :",
    option: [
        "$[0,1]$",
        "$[-1,1]$",
        "$[-1,0]$",
        "$[0,1]$"
    ],
    answer: "$[0,1]$"
},

{
    question: "यदि $F(x)=\\\\begin{bmatrix}\\\\cos x & \\\\sin x\\\\\\\\-\\\\sin x & \\\\cos x\\\\end{bmatrix}$ तब $F(x)F(y)$ बराबर है",
    option: [
        "$F(x)$",
        "$F(y)$",
        "$F(x+y)$",
        "$F(x-y)$"
    ],
    answer: "$F(x+y)$"
},

{
    question: "यदि $f(x)=8x^3$ और $g(x)=\\\\frac{1}{x^3}$ तो $fog$ बराबर है ?",
    option: [
        "$3x$",
        "$9x$",
        "$4x$",
        "$8x$"
    ],
    answer: "$8x$"
},

{
    question: "यदि $P(B)=\\\\frac{2}{3}$, $P(A \\\\cap B \\\\cap \\\\bar{C})=\\\\frac{1}{2}$, $P(A \\\\cap B \\\\cap \\\\bar{C})=\\\\frac{1}{3}$ तब $P(B \\\\cap C)=?$",
    option: [
        "$\\\\frac{1}{12}$",
        "$\\\\frac{3}{4}$",
        "$\\\\frac{5}{12}$",
        "$\\\\frac{23}{36}$"
    ],
    answer: "$\\\\frac{1}{12}$"
},

{
    question: "यदि $|\\\\vec{a}|=|\\\\vec{b}|=|\\\\vec{a}+\\\\vec{b}|=1$, तो $|\\\\vec{a}-\\\\vec{b}|=?$",
    option: [
        "$1$",
        "$\\\\sqrt{3}$",
        "$0$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\sqrt{3}$"
},

{
    question: "फलन $f(x)=2x^3-15x^2+36x+1$ निम्न अन्तराल में एक निरंतर हासमान फलन है -",
    option: [
        "$]2,3[$",
        "$]-\\\\infty,2[$",
        "$]3,\\\\infty[$",
        "इनमें से कोई नहीं"
    ],
    answer: "$]2,3[$"
},

{
    question: "यदि $x>a$, तो $\\\\int\\\\frac{dx}{x^2-a^2} = ?$",
    option: [
        "$\\\\frac{1}{2a}\\\\log\\\\frac{x-a}{x+a}+k$",
        "$\\\\frac{1}{2a}\\\\log\\\\frac{x+a}{x-a}+k$",
        "$\\\\frac{1}{a}\\\\log(x^2-a^2)+k$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{2a}\\\\log\\\\frac{x-a}{x+a}+k$"
},

{
    question: "सदिश $\\\\hat{i}\\\\times(\\\\hat{j}+\\\\hat{k})+\\\\hat{j}\\\\times(\\\\hat{k}+\\\\hat{i})+\\\\hat{k}\\\\times(\\\\hat{k}+\\\\hat{j})$ का परिमाण है ?",
    option: [
        "$0$",
        "$1$",
        "$-1$",
        "$|\\\\hat{i}\\\\times(\\\\hat{j}+\\\\hat{k})|$"
    ],
    answer: "$0$"
},

{
    question: "$f(x)=a\\\\sin kx+b\\\\cos kx$ का आवर्त काल है:",
    option: [
        "$\\\\frac{2\\\\pi}{k}$",
        "$\\\\frac{2\\\\pi}{|k|}$",
        "$\\\\frac{\\\\pi}{|k|}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{2\\\\pi}{|k|}$"
},

{
    question: "माना $f(x)=\\\\frac{ax}{x+1},\\\\ x\\\\neq-1$, तब $x$ के किस मान के लिए $f[f(x)]=x$ होगा-",
    option: [
        "$\\\\sqrt{2}$",
        "$-\\\\sqrt{2}$",
        "$1$",
        "$-1$"
    ],
    answer: "$-1$"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\frac{1}{\\\\sqrt{2}}\\\\right)$ का मुख्य मान है :",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{3\\\\pi}{4}$",
        "$\\\\frac{5\\\\pi}{4}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "यदि $x+y=k$, $y^2=12x$ पर अभिलम्ब है तो $k$ का मान है?",
    option: [
        "$3$",
        "$9$",
        "$-9$",
        "$-3$"
    ],
    answer: "$9$"
},

{
    question: "वक्र $y=(x-1)(x-2)(x-3)$ और $x$-अक्ष के बीच घिरा हुआ कोटिया $x=0$ और $x=3$ के बीच स्थित क्षेत्रफल बराबर है :",
    option: [
        "$\\\\frac{9}{4}$ वर्ग इकाई",
        "$\\\\frac{11}{4}$ वर्ग इकाई",
        "$\\\\frac{11}{2}$ वर्ग इकाई",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{11}{4}$ वर्ग इकाई"
},

{
    question: "यदि $P(\\\\frac{A}{B})>P(A)$, तो निम्न में कौन-सा सही है ?",
    option: [
        "$P(\\\\frac{B}{A})<P(B)$",
        "$P(A \\\\cap B)<P(A)\\\\cdot P(B)$",
        "$P(\\\\frac{B}{A})>P(B)$",
        "$P(\\\\frac{B}{A})=P(B)$"
    ],
    answer: "$P(\\\\frac{B}{A})>P(B)$"
},

{
    question: "एक द्विपद बंटन के माध्य और प्रसरण क्रमशः 6 और 4 हैं, तो स्थिर राशि (प्राचल) n का मान है ?",
    option: [
        "18",
        "12",
        "10",
        "9"
    ],
    answer: "18"
},

{
    question: "यदि $\\\\int_0^{2a}f(x)\\\\,dx-2\\\\int_0^a f(x)\\\\,dx$, तो निम्न में कौन-सा सत्य है ?",
    option: [
        "$f(2a-x)=-f(x)$",
        "$f(2a-x)=f(x)$",
        "$f(x)$ एक विषम फलन है",
        "$f(x)$ एक सम फलन है"
    ],
    answer: "$f(2a-x)=f(x)$"
},

{
    question: "एक पासे को 6 बार उछाला जाता है। यदि सम संख्या प्राप्त होना सफलता है तो 5 सफलता प्राप्त होने की प्रायिकता है -",
    option: [
        "$\\\\frac{3}{32}$",
        "$\\\\frac{7}{64}$",
        "$\\\\frac{63}{64}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{3}{32}$"
},

{
    question: "$\\\\int_1^{\\\\sqrt{3}}\\\\frac{1}{1+x^2}\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{12}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "अगर $A=\\\\begin{bmatrix}1&9\\\\\\\\0&1\\\\end{bmatrix}$ तब $A^4$ बराबर है :",
    option: [
        "$\\\\begin{bmatrix}1&a^4\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&36\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}4&a^4\\\\\\\\0&4\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&-4a\\\\\\\\0&1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}1&36\\\\\\\\0&1\\\\end{bmatrix}$"
},

{
    question: "निम्नलिखित में से कौन-सा समघातीय अवकल समीकरण है ?",
    option: [
        "$(4x+6y+5)dy-(3y+2x+4)dx=0$",
        "$(x+y)dx-(x^3+y^3)dy=0$",
        "$(x^3+2y^2)dx+2xydy=0$",
        "$y^2dx+(x^2-xy-y^2)dy=0$"
    ],
    answer: "$y^2dx+(x^2-xy-y^2)dy=0$"
},

{
    question: "यदि $P(A \\\\cup B)=0.8$ और $P(A \\\\cap B)=0.3$ तो $P(\\\\bar{A})+P(\\\\bar{B})=?$",
    option: [
        "0.3",
        "0.5",
        "0.7",
        "0.9"
    ],
    answer: "0.3"
},

{
    question: "बिंदु $A(3,4,-7)$ और $B(1,-1,6)$ से गुजरने वाली रेखा का सदिश समीकरण निम्न में से कौन है ?",
    option: [
        "$\\\\vec{r}=(3\\\\hat{i}+4\\\\hat{j}-7\\\\hat{k})+\\\\lambda(\\\\hat{i}-\\\\hat{j}+6\\\\hat{k})$",
        "$\\\\vec{r}=(\\\\hat{i}-\\\\hat{j}-6\\\\hat{k})+\\\\lambda(3\\\\hat{i}-4\\\\hat{j}+7\\\\hat{k})$",
        "$\\\\vec{r}=(3\\\\hat{i}+4\\\\hat{j}-7\\\\hat{k})+\\\\lambda(-2\\\\hat{i}-5\\\\hat{j}+13\\\\hat{k})$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\vec{r}=(3\\\\hat{i}+4\\\\hat{j}-7\\\\hat{k})+\\\\lambda(-2\\\\hat{i}-5\\\\hat{j}+13\\\\hat{k})$"
},

{
    question: "$\\\\int \\\\frac{1}{\\\\sin x+\\\\cos x}\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{\\\\sqrt{2}}\\\\log\\\\tan\\\\left(\\\\frac{x}{2}+\\\\frac{\\\\pi}{8}\\\\right)+k$",
        "$\\\\log\\\\tan\\\\left(\\\\frac{x}{2}+\\\\frac{\\\\pi}{8}\\\\right)+k$",
        "$\\\\frac{1}{2}\\\\log\\\\tan\\\\left(\\\\frac{x}{2}+\\\\frac{\\\\pi}{8}\\\\right)+k$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{\\\\sqrt{2}}\\\\log\\\\tan\\\\left(\\\\frac{x}{2}+\\\\frac{\\\\pi}{8}\\\\right)+k$"
},

{
    question: "एक $3\\\\times3$ सारणिक में $i$वें कतार और $j$वें स्तम्भ के अवयव को $a_{ij}$ से सूचित करते हैं। मान लें कि प्रत्येक $i$ और $j$ के लिए $a_{ij}=-a_{ji}$ तब सारणिक के प्रधान विकर्ण के सभी अवयव हैं -",
    option: [
        "1",
        "-1",
        "0",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "सदिश $a_1\\\\hat{i}+a_2\\\\hat{j}+a_3\\\\hat{k}$ और $b_1\\\\hat{i}+b_2\\\\hat{j}+b_3\\\\hat{k}$ एक दूसरे के लम्बवत हैं यदि -",
    option: [
        "$\\\\frac{a_1}{b_1}=\\\\frac{a_2}{b_2}=\\\\frac{a_3}{b_3}$",
        "$a_1b_1+a_2b_2+a_3b_3$",
        "$a_1b_2+b_2a_1+a_3b_2=0$",
        "इनमें से कोई नहीं"
    ],
    answer: "$a_1b_1+a_2b_2+a_3b_3$"
},

{
    question: "यदि $f:R\\\\to R$ जहाँ $f(x)=5x+4$ हो, तो $f^{-1}(x)$ निम्न में से कौन होगा?",
    option: [
        "$\\\\frac{x}{4}-5$",
        "$\\\\frac{x-5}{4}$",
        "$\\\\frac{x-4}{5}$",
        "$\\\\frac{x-y}{5}$"
    ],
    answer: "$\\\\frac{x-4}{5}$"
},

{
    question: "$\\\\int \\\\frac{1}{x^{1/3}}\\\\,dx = ?$",
    option: [
        "$\\\\frac{3}{2}x^{2/3}+c$",
        "$\\\\frac{2}{3}x^{2/3}+c$",
        "$\\\\frac{2}{3}x^{-2/3}+c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{3}{2}x^{2/3}+c$"
},

{
    question: "$\\\\hat{j}\\\\times\\\\hat{i}=?$",
    option: [
        "$\\\\hat{k}$",
        "$-\\\\hat{k}$",
        "$\\\\hat{j}$",
        "$\\\\hat{i}$"
    ],
    answer: "$-\\\\hat{k}$"
},

{
    question: "यादृच्छिक चर X का वितरण निम्नलिखित हैं:<br><br>$X$: 0, 1, 2, 3, 4, 5, 6, 7, 8<br>$P(X=x)$: $a_1$, $3a_1$, $5a_1$, $7a_1$, $9a_1$, $11a_1$, $13a_1$, $15a_1$, $17a_1$<br><br>तब $P(X<3)$ है –",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{7}$",
        "9",
        "$\\\\frac{16}{81}$"
    ],
    answer: "9"
},

{
    question: "यदि $y=\\\\tan^{-1}\\\\left(\\\\frac{\\\\sin x}{1+\\\\cos x}\\\\right)$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "0",
        "1",
        "$\\\\frac{1}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "यदि $y=x^x$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$x^x\\\\log x$",
        "$x^x(1+\\\\log x)$",
        "$x(1+\\\\log x)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$x^x(1+\\\\log x)$"
},

{
    question: "$\\\\tan^{-1}x+\\\\cot^{-1}x$ का मान है :",
    option: [
        "$-\\\\pi$",
        "$-\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "परिमाप 176 सेमी. के आयत का महत्तम क्षेत्रफल निम्न है -",
    option: [
        "$1936\\\\,\\\\text{सेमी}^2$",
        "$1854\\\\,\\\\text{सेमी}^2$",
        "$2110\\\\,\\\\text{सेमी}^2$",
        "इनमें से कोई नहीं"
    ],
    answer: "$1936\\\\,\\\\text{सेमी}^2$"
},

{
    question: "यदि $l,m,n$ किसी रेखा का दिक् कोज्या है, तो निम्न में कौन सा सत्य है?",
    option: [
        "$l+m+n=1$",
        "$l^2+m^2+n^2=1$",
        "$\\\\sqrt{l^2+m^2+n^2}=0$",
        "इनमें से कोई नहीं"
    ],
    answer: "$l^2+m^2+n^2=1$"
},

{
    question: "$[\\\\hat{i}\\\\ \\\\hat{j}\\\\ \\\\hat{k}]$ का मान बराबर है ?",
    option: [
        "$1$",
        "$0$",
        "$2$",
        "इनमें से कोई नहीं"
    ],
    answer: "$1$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1&0&0\\\\\\\\0&1&0\\\\\\\\a&b&-1\\\\end{bmatrix}$ तो $A^2=$",
    option: [
        "एकांक आव्यूह",
        "$A$",
        "रिक्त आव्यूह",
        "$-A$"
    ],
    answer: "एकांक आव्यूह"
},

{
    question: "यदि A और B दो घटनाएँ एक ही यादृच्छिक प्रयोग से जुड़े हों, ताकि $P(A)=0.4$, $P(B)=0.8$ और $P(\\\\frac{B}{A})=0.6$ तो $P(\\\\frac{A}{B})$ बराबर है –",
    option: [
        "0.3",
        "0.4",
        "0.5",
        "0.6"
    ],
    answer: "0.3"
},

{
    question: "एक मैट्रिक्स $A=[a_{ij}]_{m\\\\times n}$ सममित हैं यदि",
    option: [
        "$a_{ij}=0$",
        "$a_{ij}=-a_{ji}$",
        "$a_{ij}=a_{ji}$",
        "$a_{ij}=1$"
    ],
    answer: "$a_{ij}=a_{ji}$"
},

{
    question: "वक्र $y=4+3x-x^2$ और $x$-अक्ष के बीच का क्षेत्रफल है :",
    option: [
        "$\\\\frac{125}{3}$ वर्ग इकाई",
        "$\\\\frac{125}{4}$ वर्ग इकाई",
        "$\\\\frac{125}{6}$ वर्ग इकाई",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{125}{6}$ वर्ग इकाई"
},

{
    question: "अन्तराल $[-1,2]$ में फलन $f(x)=|x|+|x-1|$",
    option: [
        "वर्धमान है",
        "हासमान है",
        "आधार है",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "एक मैट्रिक्स $A=[a_{ij}]_{m\\\\times n}$ सममित है यदि :",
    option: [
        "$a_{ij}=0$",
        "$a_{ij}=-a_{ji}$",
        "$a_{ij}=a_{ji}$",
        "$a_{ij}=1$"
    ],
    answer: "$a_{ij}=a_{ji}$"
},

{
    question: "यदि $A$, $3\\\\times3$ कोटि का एक वर्ग आव्यूह है तो $|adj\\\\ A|$ का मान है :-",
    option: [
        "$|A|$",
        "$|A|^2$",
        "$|A|^3$",
        "$3|A|$"
    ],
    answer: "$|A|^2$"
},

{
    question: "अवकल समीकरण $(x+y)(dx-dy)=dx+dy$ का हल है :-",
    option: [
        "$x-y=\\\\log(x+y)+c$",
        "$x+y=\\\\log(x-y)+c$",
        "$x^2+y^2=x+y+c$",
        "$x^2-y^2=x+y+c$"
    ],
    answer: "$x-y=\\\\log(x+y)+c$"
},

{
    question: "किसी एकांक समूह $I$ के लिए :",
    option: [
        "$I^2=1$",
        "$|I|=0$",
        "$|I|=2$",
        "$|I|=5$"
    ],
    answer: "$I^2=1$"
},

{
    question: "यदि $y = x^3 + 4x + 6$, तो $\\\\frac{d^2y}{dx^2} = ?$",
    option: [
        "$3x^2 + 4$",
        "$3x^2$",
        "$6x$",
        "$3x$"
    ],
    answer: "$6x$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}+y=e^{-x}$ का हल है :-",
    option: [
        "$y=(x+c)e^x$",
        "$ye^x=x+c$",
        "$ye^x+x=c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$ye^x=x+c$"
},

{
    question: "यदि $x$ अन्तराल $[0,1]$ में है तो $x^2+x+1$ का न्यूनतम मान है -",
    option: [
        "$\\\\frac{3}{4}$",
        "$1$",
        "$3$",
        "इनमें से कोई नहीं"
    ],
    answer: "$1$"
},

{
    question: "यदि $2\\\\begin{vmatrix}x&5\\\\\\\\3&y\\\\end{vmatrix}=\\\\begin{vmatrix}4&10\\\\\\\\6&6\\\\end{vmatrix}$ तो $x$ और $y$ का मान है ?",
    option: [
        "$x=2,\\\\ y=3$",
        "$x=3,\\\\ y=2$",
        "$x=2,\\\\ y=2$",
        "$x=3,\\\\ y=3$"
    ],
    answer: "$x=3,\\\\ y=2$"
},

{
    question: "फलन $f(x)=\\\\log\\\\left(x+\\\\sqrt{x^2+1}\\\\right)$ है:",
    option: [
        "सम फलन",
        "विषम",
        "आवर्ती फलन",
        "न तो सम और न ही विषम"
    ],
    answer: "विषम"
},

{
    question: "मानो $A=\\\\begin{bmatrix}1 & -1 & 2\\\\\\\\2 & 1 & -3\\\\\\\\1 & 1 & 1\\\\end{bmatrix}$ और $B=\\\\begin{bmatrix}4 & 2 & 2\\\\\\\\-5 & 0 & \\\\alpha\\\\\\\\1 & -2 & 3\\\\end{bmatrix}$ यदि $B$ आव्यूह $A$ का व्युत्क्रम है",
    option: [
        "2",
        "-1",
        "-2",
        "5"
    ],
    answer: "5"
},

{
    question: "संबंध $R$ जो निम्न द्वारा परिभाषित है $R=\\\\{(a,b):a,b\\\\in\\\\text{human beings}:a\\\\ loves\\\\ b\\\\}$ है:",
    option: [
        "स्वतुल्य",
        "सममित और संक्रमक",
        "समतुल्य",
        "उपर्युक्त में से कोई नहीं"
    ],
    answer: "उपर्युक्त में से कोई नहीं"
},

{
    question: "माना कि $A=\\\\{1,2,3\\\\}$, तो $(1,2)$ और $(1,3)$ को शामिल करते हुए कितने संबंध $A$ पर परिभाषित हो सकते हैं जो स्वतुल्य सममित हैं किंतु संक्रमक नहीं हैं?",
    option: [
        "4",
        "3",
        "1",
        "2"
    ],
    answer: "2"
},

{
    question: "$A=\\\\begin{bmatrix}2 & 3\\\\\\\\5 & k\\\\end{bmatrix}$ का व्युत्क्रम प्राप्त नहीं होगा यदि $k$ का मान है :",
    option: [
        "2",
        "$\\\\frac{3}{2}$",
        "$\\\\frac{5}{2}$",
        "$\\\\frac{15}{2}$"
    ],
    answer: "$\\\\frac{15}{2}$"
},

{
    question: "यदि $\\\\varphi \\\\in R$ और $\\\\Delta=\\\\begin{vmatrix}a&b\\\\\\\\c&d\\\\end{vmatrix}$ तो $\\\\varphi\\\\Delta$ बराबर होगा ?",
    option: [
        "$\\\\begin{vmatrix}\\\\varphi a&b\\\\\\\\\\\\varphi c&d\\\\end{vmatrix}$",
        "$\\\\begin{vmatrix}\\\\varphi a&\\\\varphi b\\\\\\\\\\\\varphi c&\\\\varphi d\\\\end{vmatrix}$",
        "$\\\\begin{vmatrix}\\\\varphi a&b\\\\\\\\c&d\\\\end{vmatrix}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\begin{vmatrix}\\\\varphi a&b\\\\\\\\\\\\varphi c&d\\\\end{vmatrix}$"
},

{
    question: "$f(x)=\\\\sqrt{3}\\\\sin x+\\\\cos x$ का मान महत्तम $x$ के निम्नांकित में से किस मान के लिए होगा ?",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "माना कि $A=\\\\{1,2\\\\}$ इस समुच्चय पर कितने द्विचर संक्रियाएँ परिभाषित हो सकते हैं?",
    option: [
        "8",
        "10",
        "16",
        "20"
    ],
    answer: "16"
},

{
    question: "माना $g(x)=1+x-[x]$ और $f(x)=\\\\begin{cases}-1,&x<0\\\\\\\\0,&x=0\\\\\\\\1,&x>0\\\\end{cases}$ तब सभी $x$ के लिए $f[g(x)]$ समान है:",
    option: [
        "$x$",
        "$1$",
        "$f(x)$",
        "$g(x)$"
    ],
    answer: "$1$"
},

{
    question: "$\\\\int_{\\\\pi/6}^{\\\\pi/3}\\\\frac{dx}{1+\\\\sqrt{\\\\tan x}} = ?$",
    option: [
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{9}$",
        "$\\\\frac{\\\\pi}{12}$"
    ],
    answer: "$\\\\frac{\\\\pi}{12}$"
},

{
    question: "यदि $x+\\\\frac{1}{x}=2$ तो $\\\\sin^{-1}x$ का मुख्य मान होगा :",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "$\\\\frac{3\\\\pi}{2}$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "$(4,3,7)$ और $(1,-1,-5)$ के बीच की दूरी = ?",
    option: [
        "13",
        "15",
        "12",
        "5"
    ],
    answer: "13"
},

{
    question: "यदि A और B दो स्वतंत्र घटनाएँ हों तो $P(\\\\frac{\\\\bar{A}}{\\\\bar{B}})$ बराबर है-",
    option: [
        "$1-P(\\\\frac{A}{\\\\bar{B}})$",
        "$1-P(\\\\frac{A}{B})$",
        "$1-P(B)$",
        "$1-P(A)$"
    ],
    answer: "$1-P(A)$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}\\\\alpha & 0\\\\\\\\1 & 1\\\\end{bmatrix}$, $B=\\\\begin{bmatrix}1 & 0\\\\\\\\5 & 1\\\\end{bmatrix}$, जहाँ $A^2=B$, तो $\\\\alpha$ का मान है",
    option: [
        "1",
        "-1",
        "4",
        "$\\\\alpha$ का वास्तविक मान नहीं"
    ],
    answer: "$\\\\alpha$ का वास्तविक मान नहीं"
},

{
    question: "$[\\\\vec{a}\\\\vec{b}\\\\vec{a}]=?$",
    option: [
        "$0$",
        "$[\\\\vec{a}\\\\times\\\\vec{b}]$",
        "$\\\\vec{a}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$0$"
},

{
    question: "$f(x)=x^9+3x^7+6$ एक वर्धमान फलन है -",
    option: [
        "$x$ के सभी धनात्मक वास्तविक मानों के लिए",
        "$x$ के सभी -ve वास्तविक मानों के लिए",
        "सभी $x\\\\in R_0$",
        "इनमें से कोई नहीं"
    ],
    answer: "सभी $x\\\\in R_0$"
},

{
    question: "यदि $\\\\begin{vmatrix}x+y&2\\\\\\\\5+z&xy\\\\end{vmatrix}=\\\\begin{vmatrix}6&2\\\\\\\\5&8\\\\end{vmatrix}$ तो $y$ का मान निम्न में से कौन-सा होगा ?",
    option: [
        "2",
        "4",
        "5",
        "इनमें से कोई नहीं"
    ],
    answer: "5"
},

{
    question: "रेखा $\\\\vec{r}=(4\\\\hat{i}-\\\\hat{j})+s(2\\\\hat{i}+\\\\hat{j}-3\\\\hat{k})$ और $\\\\vec{r}=(\\\\hat{i}-\\\\hat{j}+2\\\\hat{k})+t(\\\\hat{i}-3\\\\hat{j}+2\\\\hat{k})$ के बीच का कोण है ?",
    option: [
        "$\\\\frac{3\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "बिंदु $(1,-1,1)$ और $(-1,1,1)$ को मिलाने वाली रेखा का दिक् कोज्या निम्न में से कौन है।",
    option: [
        "$(2,-2,0)$",
        "$(1,-1,0)$",
        "$\\\\left(\\\\frac{1}{\\\\sqrt{2}},-\\\\frac{1}{\\\\sqrt{2}},0\\\\right)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\left(\\\\frac{1}{\\\\sqrt{2}},-\\\\frac{1}{\\\\sqrt{2}},0\\\\right)$"
},

{
    question: "$x$-अक्ष के समानांतर किसी रेखा का दिक् कोज्या है ?",
    option: [
        "$(1,0,0)$",
        "$(1,1,1)$",
        "$(0,1,0)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$(1,0,0)$"
},

{
    question: "$\\\\int \\\\frac{1+x}{x^2}\\\\,dx = ?$",
    option: [
        "$\\log x\\cdot\\frac{1}{x}+c$",
        "$\\frac{1}{x}\\log x+c$",
        "$\\log x-\\frac{1}{x^3}+k$",
        "$\\log x-\\frac{1}{x}+c$"
    ],
    answer: "$\\log x-\\frac{1}{x}+c$"
},

{
    question: "यदि $\\\\begin{vmatrix}x&8\\\\\\\\3&3\\\\end{vmatrix}=0$, $x$ का मान है -",
    option: [
        "3",
        "8",
        "24",
        "0"
    ],
    answer: "8"
},

{
    question: "यदि सारणिक $\\\\begin{vmatrix}1+x&1&1\\\\\\\\1&1+x&1\\\\\\\\1&1&1+x\\\\end{vmatrix}=0$ तो कौन-सा एक सही है ?",
    option: [
        "$a=-3$",
        "$a=2$",
        "$a=1$",
        "$a=3$"
    ],
    answer: "$a=-3$"
},

{
    question: "$\\\\int \\\\log_e x\\\\,dx = ?$",
    option: [
        "$x\\\\log x+x+k$",
        "$x\\\\log x-x+k$",
        "$\\\\log x+x+k$",
        "$\\\\log x-x+k$"
    ],
    answer: "$x\\\\log x-x+k$"
},

{
    question: "समीकरण $\\\\frac{dy}{dx}+\\\\frac{y}{x}=\\\\frac{y^2}{x^2}$ का समाकलन गुणक है :",
    option: [
        "$\\\\log x$",
        "$x$",
        "$\\\\frac{1}{x}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{x}$"
},

{
    question: "मूल बिंदु से तल $3x+4y-5z=25$ पर डाले गए लम्ब के पाद के नियामक हैं -",
    option: [
        "$\\\\left(\\\\frac{3}{2},2,-\\\\frac{5}{2}\\\\right)$",
        "$(3,4,0)$",
        "$(6,8,-10)$",
        "$(0,0,-5)$"
    ],
    answer: "$\\\\left(\\\\frac{3}{2},2,-\\\\frac{5}{2}\\\\right)$"
},

{
    question: "अन्तराल $(2,\\\\infty)$ में $\\\\frac{\\\\log x}{x}$ का अधिकतम मान है?",
    option: [
        "$\\\\frac{\\\\log 2}{2}$",
        "$0$",
        "$\\\\frac{1}{e}$",
        "$1$"
    ],
    answer: "$\\\\frac{1}{e}$"
},

{
    question: "माना $f(x)=(x+1)^2$, $x\\\\geq -1$। यदि $g(x)$ एक फलन हो जिसका ग्राफ रेखा $y=x$ के सापेक्ष $f(x)$ के ग्राफ का प्रतिबिम्ब हो, तब $g(x)$ का मान है:",
    option: [
        "$-\\\\sqrt{x}-1,\\\\ x\\\\geq0$",
        "$\\\\frac{1}{(x+1)^2},\\\\ x>-1$",
        "$\\\\sqrt{x+1},\\\\ x\\\\geq-1$",
        "$\\\\sqrt{x}-1,\\\\ x\\\\geq0$"
    ],
    answer: "$\\\\sqrt{x}-1,\\\\ x\\\\geq0$"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\sin\\\\frac{2\\\\pi}{3}\\\\right)$ = ?",
    option: [
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{4\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "$f(x)=\\\\frac{\\\\log_2(x+3)}{x^2+3x+2}$ का प्रांत है:",
    option: [
        "$R-\\\\{-1,-2\\\\}$",
        "$(-2,\\\\infty)$",
        "$R-\\\\{-1,-2,-3\\\\}$",
        "$(-3,+\\\\infty)-\\\\{-1,-2\\\\}$"
    ],
    answer: "$(-3,+\\\\infty)-\\\\{-1,-2\\\\}$"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\sin\\\\frac{2\\\\pi}{3}\\\\right)$ का मुख्य मान है :",
    option: [
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$-\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{6}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "$\\\\hat{k}\\\\times\\\\hat{j}=?$",
    option: [
        "$0$",
        "$1$",
        "$\\\\hat{i}$",
        "$-\\\\hat{i}$"
    ],
    answer: "$-\\\\hat{i}$"
},

{
    question: "$\\\\hat{i}\\\\cdot\\\\hat{j}=?$",
    option: [
        "$0$",
        "$1$",
        "$\\\\hat{k}$",
        "$-\\\\hat{k}$"
    ],
    answer: "$0$"
},

{
    question: "$\\\\frac{d(a^x)}{dx}=?$",
    option: [
        "$a^x\\\\log a$",
        "$\\\\frac{a^x}{\\\\log a}$",
        "$a^{x\\\\log a}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$a^x\\\\log a$"
},

{
    question: "यदि $x=at^2,\\\\ y=2at$ तो $\\\\frac{dy}{dx} = ?$",
    option: [
        "$t$",
        "$\\\\frac{1}{t}$",
        "$at$",
        "$\\\\frac{a}{t}$"
    ],
    answer: "$\\\\frac{1}{t}$"
},

{
    question: "$Z = 5x + 2y$ के अधिकतम मान के लिए, जबकि $2x + 3y \\\\geq 6$, $x - 2y \\\\leq 2$, $6x + 4y \\\\leq 24$, $-3x + 2y \\\\leq 3$ एवं $x \\\\geq 0, y \\\\geq 0$, $x$ और $y$ के मान क्रमशः हैं-",
    option: [
        "$\\\\frac{18}{7},\\\\frac{2}{7}$",
        "$\\\\frac{7}{2},\\\\frac{3}{4}$",
        "$\\\\frac{3}{2},\\\\frac{15}{4}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{7}{2},\\\\frac{3}{4}$"
},

{
    question: "$x\\\\log\\\\frac{dy}{dx}+y-2\\\\log x$ का समाकलन गुणक है ?",
    option: [
        "$x$",
        "$e^x$",
        "$\\\\log x$",
        "$\\\\log(\\\\log x)$"
    ],
    answer: "$\\\\log x$"
},

{
    question: "$\\\\begin{vmatrix}1&a&a^2\\\\\\\\1&b&b^2\\\\\\\\1&c&c^2\\\\end{vmatrix}=?$",
    option: [
        "$(a+b)(b+c)(c+a)$",
        "$(a+b)(b-c)(c-a)$",
        "$(a-b)(b-c)(c+a)$",
        "$(a-b)(b-c)(c-a)$"
    ],
    answer: "$(a-b)(b-c)(c-a)$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}+Py=Q$, जहाँ P और Q, x के फलन हैं, का समाकलन गुणांक है :-",
    option: [
        "$e^{\\\\int Pdx}$",
        "$e^{\\\\int Qdx}$",
        "$e^{\\\\int Pdy}$",
        "$e^{\\\\int Qdy}$"
    ],
    answer: "$e^{\\\\int Pdx}$"
},

{
    question: "यदि $y=\\\\log 10x$, तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1}{x}$",
        "$\\\\frac{1}{x}(\\\\log 10)$",
        "$\\\\frac{1}{x\\\\log(10)}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{x}$"
},

{
    question: "निम्नलिखित में से कौन-सा कथन सही है ?",
    option: [
        "सारणिक एक वर्ग आव्यूह है।",
        "सारणिक एक आव्यूह से सम्बन्ध एक संख्या है।",
        "सारणिक एक वर्ग आव्यूह से सम्बन्ध एक संख्या है।",
        "इनमें से कोई नहीं"
    ],
    answer: "सारणिक एक वर्ग आव्यूह से सम्बन्ध एक संख्या है।"
},

{
    question: "यदि $A(\\\\vec a), B(\\\\vec b)$ दो बिंदु हों और रेखाखंड $AB$ पर $P(\\\\vec r)$ कोई बिंदु इस प्रकार हो कि $\\\\frac{AP}{PB}=\\\\frac{m}{n}$ तो निम्नांकित में कौन सा सत्य है?",
    option: [
        "$\\\\vec r=\\\\frac{m(\\\\vec a)+n(\\\\vec b)}{m+n}$",
        "$\\\\vec r=\\\\frac{m(\\\\vec b)+n(\\\\vec a)}{m+n}$",
        "$\\\\vec r=\\\\frac{m(\\\\vec b)+n(\\\\vec a)}{\\\\vec b+\\\\vec a}$",
        "$\\\\vec r=\\\\frac{m(\\\\vec b)-n(\\\\vec a)}{m-n}$"
    ],
    answer: "$\\\\vec r=\\\\frac{m(\\\\vec b)+n(\\\\vec a)}{m+n}$"
},

{
    question: "$Z = 6x_1 - 2x_2$ के अधिकतम मान के लिए जबकि $2x_1 - x_2 \\\\leq 2$, $x_1 \\\\leq 3$ एवं $x_1,x_2 \\\\geq 0$ तो $x_1$ और $x_2$ के मान हैं -",
    option: [
        "3, 4",
        "2, 3",
        "1, 2",
        "इनमें से कोई नहीं"
    ],
    answer: "3, 4"
},

{
    question: "यदि $f(x)=e^x$, $x\\\\in[0,1]$, तो लेग्रांज माध्य मान प्रमेय के लिए '$c$' का मान है",
    option: [
        "$\\\\log(e-1)$",
        "$\\\\log(e+1)$",
        "$\\\\log e$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\log(e-1)$"
},

{
    question: "परवलय $y^2=4ax$ और अभिलम्ब जीवा के बीच घिरा क्षेत्रफल है :",
    option: [
        "$\\\\frac{8}{3}a^2$",
        "$\\\\frac{8}{3}a$",
        "$\\\\frac{4}{3}a$",
        "$\\\\frac{4}{3}a^2$"
    ],
    answer: "$\\\\frac{8}{3}a^2$"
},

{
    question: "बिंदु $(3,4,2)$ और $(5,6,-3)$ को मिलाने वाली रेखा पर सदिश $2\\\\vec i-3\\\\vec j-6\\\\vec k$ का प्रक्षेप है :-",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{4}{3}$",
        "$-\\\\frac{4}{3}$",
        "$\\\\frac{5}{3}$"
    ],
    answer: "$\\\\frac{4}{3}$"
},

{
    question: "यदि $A(\\\\vec a), B(\\\\vec b)$ दो बिंदु हों तो रेखाखंड $AB$ के मध्य बिंदु $P$ का स्थिति सदिश निम्नांकित में कौन-सा होगा?",
    option: [
        "$\\\\frac{\\\\vec a+\\\\vec b}{2}$",
        "$\\\\frac{\\\\vec a+\\\\vec b}{3}$",
        "$2(\\\\vec a+\\\\vec b)$",
        "$\\\\frac{\\\\vec a-\\\\vec b}{2}$"
    ],
    answer: "$\\\\frac{\\\\vec a+\\\\vec b}{2}$"
},

{
    question: "अवकल समीकरण $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^4 + 3\\\\left(\\\\frac{dy}{dx}\\\\right)^3 + 9y - \\\\cos x$ का कोटि है :",
    option: [
        "4",
        "3",
        "2",
        "इनमें से कोई नहीं"
    ],
    answer: "2"
},

{
    question: "यदि $\\\\vec{a}\\\\cdot\\\\vec{b}=0$ हो, तो",
    option: [
        "$\\\\vec{a}\\\\perp\\\\vec{b}$",
        "$\\\\vec{a}\\\\parallel\\\\vec{b}$",
        "$\\\\vec{a}+\\\\vec{b}=0$",
        "$\\\\vec{a}-\\\\vec{b}=0$"
    ],
    answer: "$\\\\vec{a}\\\\perp\\\\vec{b}$"
},

{
    question: "वास्तविक संख्याओं के समुच्चय में संबंध 'छोटा है' जिसमें कैसा संबंध है?",
    option: [
        "केवल सममित",
        "केवल संक्रमक",
        "केवल स्वतुल्य",
        "तुल्यता संबंध"
    ],
    answer: "केवल संक्रमक"
},

{
    question: "यदि $x=\\\\frac{1-t^2}{1+t^2}$ और $y=\\\\frac{2t}{1+t^2}$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$-\\\\frac{y}{x}$",
        "$\\\\frac{y}{x}$",
        "$-\\\\frac{x}{y}$",
        "$\\\\frac{x}{y}$"
    ],
    answer: "$-\\\\frac{x}{y}$"
},

{
    question: "यदि $A$ एक $3\\\\times3$ कोटि का वर्ग आव्यूह हो तो $|kA|$ का मान होगा :-",
    option: [
        "$k|A|$",
        "$k^2|A|$",
        "$k^3|A|$",
        "$3k|A|$"
    ],
    answer: "$k^3|A|$"
},

{
    question: "एक जोड़ा पासा फेंका जाता है। दोनों पर सम अभाज्य संख्या आने की प्रायिकता है -",
    option: [
        "$\\\\frac{1}{36}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{1}{12}$",
        "0"
    ],
    answer: "$\\\\frac{1}{36}$"
},

{
    question: "बिंदु $A(2,-4,5)$ और $B(1,-1,3)$ को मिलाने वाली रेखा का दिक् अनुपात है?",
    option: [
        "$(1,-3,2)$",
        "$(-3,1,2)$",
        "$(2,1,-3)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$(1,-3,2)$"
},

{
    question: "यदि 7 और 2 समीकरण $\\\\begin{vmatrix}x&3&7\\\\\\\\2&x&2\\\\\\\\7&6&x\\\\end{vmatrix}=0$ के दो मूल हों, तो तीसरा मूल होगा-",
    option: [
        "-9",
        "14",
        "$\\\\frac{1}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "-9"
},

{
    question: "यदि $\\\\vec{a}$ और $\\\\vec{b}$ इकाई सदिश इस प्रकार हैं कि $\\\\vec{a}+\\\\vec{b}$ भी एक इकाई सदिश है, तो सदिश $\\\\vec{a}$ और $\\\\vec{b}$ के बीच का कोण है ?",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{4\\\\pi}{3}$",
        "$\\\\frac{2\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{2\\\\pi}{3}$"
},

{
    question: "वक्र $y^2=4x$ एवं $y=2x$ के मध्यवर्ती क्षेत्र का क्षेत्रफल है :",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{1}{4}$",
        "$\\\\frac{3}{4}$"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "यदि $\\\\begin{vmatrix}6i&-3i&1\\\\\\\\4&3i&-1\\\\\\\\20&3&1\\\\end{vmatrix}=x+iy$ तो",
    option: [
        "$x=3,\\\\ y=1$",
        "$x=1,\\\\ y=3$",
        "$x=0,\\\\ y=3$",
        "$x=0,\\\\ y=0$"
    ],
    answer: "$x=0,\\\\ y=0$"
},

{
    question: "एक पत्थर एक शांत झील में फेंका जाता है और पानी की तरंगें वृत्ताकार रूप में 4 सेमी./से. के वेग से चलती है। जिस क्षण वृत्ताकार तरंग की त्रिज्या 10 सेमी. है, उसका क्षेत्रफल निम्न दर से बढ़ता है -",
    option: [
        "$100\\\\pi\\\\,\\\\text{सेमी}^2/\\\\text{मिनट}$",
        "$80\\\\pi\\\\,\\\\text{सेमी}^2/\\\\text{मिनट}$",
        "$40\\\\pi\\\\,\\\\text{सेमी}^2/\\\\text{मिनट}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$80\\\\pi\\\\,\\\\text{सेमी}^2/\\\\text{मिनट}$"
},

{
    question: "$\\\\int\\\\frac{1}{x\\\\sqrt{x^2-1}}\\\\,dx = ?$",
    option: [
        "$\\\\tan^{-1}x$",
        "$\\\\sin^{-1}x$",
        "$\\\\sec^{-1}x$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\sec^{-1}x$"
},

{
    question: "यदि A और B दो ऐसी घटनाएँ हैं कि $P(A)>0$ और $P(B)\\\\neq1$ तब $P(\\\\frac{A}{\\\\bar{B}})$ बराबर है –",
    option: [
        "$1-P(\\\\frac{A}{B})$",
        "$1-P(\\\\frac{\\\\bar{A}}{B})$",
        "$1-P(\\\\frac{A\\\\cup B}{P(B)})$",
        "$P(\\\\frac{\\\\bar{A}}{\\\\bar{B}})$"
    ],
    answer: "$1-P(\\\\frac{\\\\bar{A}}{B})$"
},

{
    question: "यदि A और B दो घटनाएँ इस प्रकार हों कि $P(A\\\\cup B)=\\\\frac{3}{4}$, $P(A\\\\cap B)=\\\\frac{1}{4}$, $P(A)=\\\\frac{2}{3}$ तो $P(A\\\\cap B)$ है :-",
    option: [
        "$\\\\frac{3}{8}$",
        "$\\\\frac{5}{8}$",
        "$\\\\frac{5}{12}$",
        "$\\\\frac{1}{4}$"
    ],
    answer: "$\\\\frac{5}{8}$"
},

{
    question: "यदि कोई रेखा, धनात्मक नियामक अक्षों के साथ $\\\\alpha,\\\\beta,\\\\gamma$ कोण बनाती हो तो-",
    option: [
        "$\\\\sin^2\\\\alpha+\\\\sin^2\\\\beta+\\\\sin^2\\\\gamma=0$",
        "$\\\\sin^2\\\\alpha+\\\\sin^2\\\\beta+\\\\sin^2\\\\gamma=1$",
        "$\\\\sin^2\\\\alpha+\\\\sin^2\\\\beta+\\\\sin^2\\\\gamma=2$",
        "$\\\\sin^2\\\\alpha=\\\\sin^2\\\\beta=\\\\sin^2\\\\gamma$"
    ],
    answer: "$\\\\sin^2\\\\alpha+\\\\sin^2\\\\beta+\\\\sin^2\\\\gamma=2$"
},

{
    question: "सदिश $\\\\hat{i}-2\\\\hat{j}+\\\\hat{k}$ पर सदिश $2\\\\hat{i}-\\\\hat{j}+\\\\hat{k}$ का प्रक्षेप है ?",
    option: [
        "$\\\\frac{4}{\\\\sqrt{6}}$",
        "$\\\\frac{5}{\\\\sqrt{6}}$",
        "$\\\\frac{6}{\\\\sqrt{6}}$",
        "$\\\\frac{7}{\\\\sqrt{6}}$"
    ],
    answer: "$\\\\frac{5}{\\\\sqrt{6}}$"
},

{
    question: "मूल बिंदु से गुजरने वाली रेखाओं के परिवार का अवकल समीकरण होगा।",
    option: [
        "$x\\\\frac{dy}{dx}-y$",
        "$y\\\\frac{dy}{dx}=x$",
        "$\\\\frac{dy}{dx}=y$",
        "$\\\\frac{dy}{dx}-x$"
    ],
    answer: "$x\\\\frac{dy}{dx}-y$"
},

{
    question: "यदि $\\\\vec{a}=2\\\\hat{i}-5\\\\hat{j}+\\\\hat{k}$ और $\\\\vec{b}=\\\\hat{i}+2\\\\hat{j}-\\\\hat{k}$ तो-",
    option: [
        "$\\\\vec{a}\\\\cdot\\\\vec{b}=0$",
        "$\\\\vec{a}\\\\cdot\\\\vec{b}\\\\ne0$",
        "$\\\\vec{a}\\\\cdot\\\\vec{b}=-9$",
        "$\\\\vec{a}\\\\perp\\\\vec{b}$"
    ],
    answer: "$\\\\vec{a}\\\\cdot\\\\vec{b}=-9$"
},

{
    question: "निम्न में से LPP का सामान्य प्रतिरूप है?",
    option: [
        "$maximize = z = cx$ subjected to $AX \\\\geq B,\\\\ x \\\\geq 0$",
        "$maximize = z = cx$ subjected to $AX \\\\leq B,\\\\ x \\\\leq 0$",
        "(a) and (b) both",
        "इनमें से कोई नहीं"
    ],
    answer: "$maximize = z = cx$ subjected to $AX \\\\geq B,\\\\ x \\\\geq 0$"
},

{
    question: "$|\\\\hat{i}+\\\\hat{j}+\\\\hat{k}|=?$",
    option: [
        "$\\\\sqrt{2}$",
        "$\\\\sqrt{3}$",
        "$2$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\sqrt{3}$"
},

{
    question: "एक सिक्का को तीन बार फेंका जाता है। क्रम-से-क्रम दो शीर्ष आने की प्रायिकता है ?",
    option: [
        "$\\\\frac{3}{8}$",
        "$\\\\frac{1}{2}$",
        "1",
        "2"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "तल $x=0$ और $y=0$ हैं?",
    option: [
        "समांतर",
        "एक दूसरे पर लम्ब",
        "$x$-अक्ष पर प्रतिच्छेदी",
        "इनमें से कोई नहीं"
    ],
    answer: "एक दूसरे पर लम्ब"
},

{
    question: "$\\\\int x^6\\\\,dx = ?$",
    option: [
        "$7x^7+c$",
        "$\\\\frac{x^7}{7}+c$",
        "$6x^5+c$",
        "$6x^7+c$"
    ],
    answer: "$\\\\frac{x^7}{7}+c$"
},

{
    question: "बिंदु $(1,2,-3)$ से गुजरने वाला तल, जो तल $x+y+z=1$ के समांतर है, का समीकरण है?",
    option: [
        "$x+y+z=0$",
        "$x+y+z=6$",
        "$3x+2z=0$",
        "इनमें से कोई नहीं"
    ],
    answer: "$x+y+z=0$"
},

{
    question: "$\\\\frac{dx}{dy}=h\\\\left(\\\\frac{x}{y}\\\\right)$ के रूप वाले समघातीय अवकल समीकरण को हल करने के लिए निम्नलिखित में से कौन-सा प्रतिस्थापन किया जाता है ?",
    option: [
        "$y=vx$",
        "$v=\\\\frac{y}{x}$",
        "$x=vy$",
        "$x=v$"
    ],
    answer: "$x=vy$"
},

{
    question: "यदि A और B दो परस्पर अपवर्जी घटनाएँ हों तथा $P(A)=\\\\frac{1}{5}$ तथा $P(B)=\\\\frac{2}{5}$ तो $P(A \\\\cup B)$ का मान निम्न में से क्या होगा ?",
    option: [
        "$\\\\frac{3}{5}$",
        "$\\\\frac{2}{25}$",
        "0",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{3}{5}$"
},

{
    question: "यदि $\\\\left|\\\\begin{array}{cc}1-x&2\\\\\\\\18&6\\\\end{array}\\\\right|=\\\\left|\\\\begin{array}{cc}6&2\\\\\\\\18&6\\\\end{array}\\\\right|$ तो $x=$",
    option: [
        "$\\\\pm6$",
        "6",
        "-5",
        "7"
    ],
    answer: "-5"
},

{
    question: "किसी वृत्त की त्रिज्या के बढ़ने की दर $0.4$ सेमी./सेकंड है, तो इसके परिधि के बढ़ने की दर है -",
    option: [
        "$0.4\\\\pi$ सेमी./सेकंड",
        "$0.8\\\\pi$ सेमी./सेकंड",
        "$0.8$ सेमी./सेकंड",
        "इनमें से कोई नहीं"
    ],
    answer: "$0.8\\\\pi$ सेमी./सेकंड"
},

{
    question: "यदि $\\\\vec{a}\\\\perp\\\\vec{b}$ और $\\\\vec{a}\\\\cdot\\\\vec{b}=0$ तो निम्न में से कौन सत्य है ?",
    option: [
        "$\\\\vec{a}\\\\perp\\\\vec{b}$",
        "$\\\\vec{a}\\\\parallel\\\\vec{b}$",
        "$\\\\vec{a}=0$ तथा $\\\\vec{b}=0$",
        "$\\\\vec{a}=0$ या $\\\\vec{b}=0$"
    ],
    answer: "$\\\\vec{a}\\\\perp\\\\vec{b}$"
},

{
    question: "$\\\\begin{vmatrix}2&3&5\\\\\\\\0&4&7\\\\\\\\0&0&5\\\\end{vmatrix}=?$",
    option: [
        "40",
        "0",
        "3",
        "25"
    ],
    answer: "40"
},

{
    question: "यदि $\\\\int e^x[f(x)+f'(x)]\\\\,dx=e^x\\\\sin x$ तो $f(x)=?$",
    option: [
        "$\\\\sin x$",
        "$-\\\\sin x$",
        "$\\\\cos x-\\\\sin x$",
        "$\\\\sin x+\\\\cos x$"
    ],
    answer: "$\\\\sin x$"
},

{
    question: "यदि A और B दो परस्पर अपवर्जी घटनाएँ हों तो $P(A \\\\cap B)=?$",
    option: [
        "0",
        "$\\\\frac{1}{2}$",
        "1",
        "$\\\\frac{1}{4}$"
    ],
    answer: "0"
},

{
    question: "$l=m=n=1$ किस अक्ष के दिक् कोज्या को प्रदर्शित करता है?",
    option: [
        "$x$-अक्ष",
        "$y$-अक्ष",
        "$z$-अक्ष",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "वक्र $x^2=2y$ पर वह बिंदु $(0,5)$ जो बिंदु के नजदीक है -",
    option: [
        "$(2\\\\sqrt{2},4)$",
        "$(2\\\\sqrt{2},0)$",
        "$(0,0)$",
        "$(2,2)$"
    ],
    answer: "$(2\\\\sqrt{2},4)$"
},

{
    question: "$\\\\frac{d}{dx}(\\\\sin^{-1}x+\\\\cos^{-1}x)=?$",
    option: [
        "0",
        "1",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{1}{\\\\sqrt{1-x^2}}$"
    ],
    answer: "0"
},

{
    question: "यदि $\\\\sin^{-1}\\\\left(\\\\frac{2x}{1+x^2}\\\\right)+\\\\sin^{-1}\\\\left(\\\\frac{2x}{1+y^2}\\\\right)=2\\\\tan^{-1}\\\\alpha$ तब $\\\\alpha$ का मान है :",
    option: [
        "$\\\\frac{x-y}{1+xy}$",
        "$\\\\frac{y}{1+xy}$",
        "$\\\\frac{y}{1-xy}$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "यदि $\\\\vec a,\\\\vec b$ दो शून्येतर, असंरेख सदिश हैं और $x,y$ दो अदिश हों जिससे कि $x\\\\vec a+y\\\\vec b=\\\\vec 0$ तो निम्नांकित में कौन-सा सत्य होगा?",
    option: [
        "$x=0,y\\\\neq0$",
        "$x\\\\neq0,y=0$",
        "$x\\\\neq0,y\\\\neq0$",
        "$x=0,y=0$"
    ],
    answer: "$x=0,y=0$"
},

{
    question: "वक्र $y=x^2$ के बिंदु $(0,0)$ पर स्पर्श रेखा द्वारा $x$-अक्ष के धनात्मक दिशा के साथ बनाया गया कोण है -",
    option: [
        "$45^\\\\circ$",
        "$90^\\\\circ$",
        "$0^\\\\circ$",
        "$60^\\\\circ$"
    ],
    answer: "$0^\\\\circ$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1 & -1 & 2\\\\\\\\2 & 1 & -3\\\\\\\\1 & 1 & 1\\\\end{bmatrix}$ और $B=\\\\begin{bmatrix}4 & 2 & 2\\\\\\\\-5 & 0 & \\\\alpha\\\\\\\\1 & -2 & 3\\\\end{bmatrix}$",
    option: [
        "2",
        "-1",
        "-2",
        "5"
    ],
    answer: "5"
},

{
    question: "अन्तराल $(0,\\\\frac{\\\\pi}{2})$ में समीकरण $xe^{\\\\cos x}-\\\\cos x=0$ के हलों की संख्या है -",
    option: [
        "$1$",
        "$2$",
        "$3$",
        "$4$"
    ],
    answer: "$1$"
},

{
    question: "माना फलन $f:R\\\\to R$, $f(x)=2x^3-1$ प्रकार से परिभाषित है, तब $f^{-1}$ है:",
    option: [
        "$(1-2x)^3$",
        "$(2x)^3+1$",
        "$2x^3+1$",
        "$\\\\left(\\\\frac{1+x}{2}\\\\right)^{\\\\frac{1}{3}}$"
    ],
    answer: "$\\\\left(\\\\frac{1+x}{2}\\\\right)^{\\\\frac{1}{3}}$"
},

{
    question: "यदि शीर्ष $(2,-6)$, $(5,4)$, और $(k,4)$ वाले त्रिभुज का क्षेत्रफल 35 वर्ग इकाई हो, तो $k$ का मान है :-",
    option: [
        "12",
        "-2",
        "-12, -2",
        "12, -2"
    ],
    answer: "12, -2"
},

{
    question: "यदि $\\\\sqrt{x}+\\\\sqrt{y}=5$ तो $(4,9)$ पर $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{3}{2}$",
        "$-\\\\frac{3}{2}$",
        "$-\\\\frac{2}{3}$"
    ],
    answer: "$-\\\\frac{3}{2}$"
},

{
    question: "$[\\\\vec{a}+\\\\vec{b},\\\\vec{b}+\\\\vec{c},\\\\vec{c}+\\\\vec{a}]$ का मान बराबर है ?",
    option: [
        "$[\\\\vec{a}\\\\vec{b}\\\\vec{c}]^2$",
        "$2[\\\\vec{a},\\\\vec{b},\\\\vec{c}]$",
        "$2[\\\\vec{a}+\\\\vec{b}+\\\\vec{c}]$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2[\\\\vec{a},\\\\vec{b},\\\\vec{c}]$"
},

{
    question: "यदि $\\\\vec{a}\\\\cdot\\\\vec{b}=0$, तो कौन-सा सत्य है ?",
    option: [
        "$\\\\vec{a}\\\\ perpendicular\\\\ \\\\vec{b}$",
        "$\\\\vec{a}\\\\ parallel\\\\ \\\\vec{b}$",
        "$\\\\vec{a}+\\\\vec{b}=0$",
        "$\\\\vec{a}-\\\\vec{b}=0$"
    ],
    answer: "$\\\\vec{a}\\\\ perpendicular\\\\ \\\\vec{b}$"
},

{
    question: "रेखिक अवकल समीकरण $\\\\frac{dy}{dx}+y\\\\tan x=\\\\sec x$ का समाकलन गुणांक है :-",
    option: [
        "$\\\\sec x$",
        "$\\\\log\\\\sec x$",
        "$\\\\sec x\\\\tan x$",
        "$\\\\tan x$"
    ],
    answer: "$\\\\sec x$"
},

{
    question: "$x$-अक्ष और वक्र $y=\\\\cos x$, जहाँ $0\\\\leq x\\\\leq2\\\\pi$ के बीच घिरा हुआ क्षेत्रफल है :",
    option: [
        "0",
        "2",
        "3",
        "4"
    ],
    answer: "4"
},

{
    question: "$\\\\int\\\\frac{1}{a^2+x^2}\\\\,dx = ?$",
    option: [
        "$\\\\sin^{-1}\\\\frac{x}{a}$",
        "$\\\\frac{1}{a}\\\\tan^{-1}\\\\frac{x}{a}$",
        "$\\\\tan^{-1}\\\\frac{x}{a}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{a}\\\\tan^{-1}\\\\frac{x}{a}$"
},

{
    question: "यदि A और B दो ऐसी घटनाएँ हैं कि $P(A)+P(B)P(A\\\\text{ और }B)=P(A)$ तब –",
    option: [
        "$P(\\\\frac{B}{A})=1$",
        "$P(\\\\frac{A}{B})=1$",
        "$P(\\\\frac{B}{A})=0$",
        "$P(\\\\frac{A}{B})=0$"
    ],
    answer: "$P(\\\\frac{A}{B})=1$"
},

{
    question: "$x$ के किस मान के लिए $x(\\\\hat{i}+\\\\hat{j}+\\\\hat{k})$ एक इकाई सदिश है ?",
    option: [
        "$\\\\frac{1}{\\\\sqrt{2}}$",
        "$\\\\frac{1}{\\\\sqrt{3}}$",
        "$+\\\\frac{1}{\\\\sqrt{3}}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$+\\\\frac{1}{\\\\sqrt{3}}$"
},

{
    question: "यदि A और B कोई दो घटनाएँ हों ताकि $P(A)=0.2$, $P(B)=0.6$ तो $P(A \\\\cup B)+P(A \\\\cap B)=?$",
    option: [
        "0.4",
        "0.8",
        "0.12",
        "0.9"
    ],
    answer: "0.8"
},

{
    question: "यदि $f:R\\\\to R$ जहाँ $f(x)=3x-4$ तो $f^{-1}(x)$ निम्नलिखित में कौन होगा?",
    option: [
        "$\\\\frac{1}{3}(x+4)$",
        "$\\\\frac{1}{3}(x-4)$",
        "$3x-4$",
        "undefined"
    ],
    answer: "$\\\\frac{1}{3}(x+4)$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$ तो सहखण्डज $A$ है :",
    option: [
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\cos\\\\theta&\\\\sin\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1&0\\\\\\\\0&-1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$"
},

{
    question: "$\\\\tan^{-1}\\\\sqrt{3}-\\\\sec^{-1}(-2)$ बराबर है :",
    option: [
        "$\\\\pi$",
        "$-\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{2\\\\pi}{3}$"
    ],
    answer: "$-\\\\frac{\\\\pi}{3}$"
},

{
    question: "निम्नलिखित में से किस अन्तराल में $y=x^2e^{-x}$ वर्धमान है।",
    option: [
        "$(-\\\\infty,\\\\infty)$",
        "$(-2,0)$",
        "$(2,\\\\infty)$",
        "$(0,2)$"
    ],
    answer: "$(0,2)$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}\\\\alpha&2\\\\\\\\2&\\\\alpha\\\\end{bmatrix}$ और $|A^3|=125$ तब $\\\\alpha=$",
    option: [
        "$\\\\pm3$",
        "$\\\\pm2$",
        "$\\\\pm5$",
        "0"
    ],
    answer: "$\\\\pm3$"
},

{
    question: "वक्र $y=x^2$ के बिंदु $(0,0)$ पर स्पर्श रेखा द्वारा $x$-अक्ष की धनात्मक दिशा के साथ बनाया गया कोण है -",
    option: [
        "$90^\\\\circ$",
        "$0^\\\\circ$",
        "$45^\\\\circ$",
        "$30^\\\\circ$"
    ],
    answer: "$0^\\\\circ$"
},

{
    question: "$\\\\frac{d}{dx}(\\\\tan^{-1}x+\\\\cot^{-1}x)=?$",
    option: [
        "$\\\\frac{2}{1+x^2}$",
        "0",
        "1",
        "2"
    ],
    answer: "0"
},

{
    question: "अक्षों पर समान झुकाव वाले किसी रेखा का दिक् कोज्या निम्नलिखित में कौन सा है?",
    option: [
        "$\\\\left(\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}}\\\\right)$",
        "$\\\\left(-\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}},-\\\\frac{1}{\\\\sqrt{3}}\\\\right)$",
        "$\\\\left(\\\\frac{1}{\\\\sqrt{3}},\\\\frac{2}{\\\\sqrt{3}},\\\\frac{4}{\\\\sqrt{3}}\\\\right)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\left(\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}}\\\\right)$"
},

{
    question: "यदि फलन $f(x)=x^3-6x^2+9x+3$ हासमान फलन हो, तो-",
    option: [
        "$1<x<3$",
        "$x>1$",
        "$x<1$",
        "$x<3$ या $x>3$"
    ],
    answer: "$1<x<3$"
},

{
    question: "यदि $y=\\\\sin^{-1}(3x-4x^3)$, तब $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{3}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{-4}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{3}{\\\\sqrt{1+x^2}}$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "माना $A=\\\\{(1,2),(1,1),(2,2),(2,1)\\\\}$ और माना $R$, $A$ पर एक संबंध हो, तो $R$ है:",
    option: [
        "संक्रमक",
        "स्वतुल्य",
        "सममित",
        "कोई नहीं"
    ],
    answer: "कोई नहीं"
},

{
    question: "यदि $\\\\sqrt{x}+\\\\sqrt{y}=\\\\sqrt{a}$ तो $\\\\frac{dy}{dx}$ का मान है ?",
    option: [
        "$-\\\\frac{\\\\sqrt{x}}{\\\\sqrt{y}}$",
        "$-\\\\frac{1}{2}\\\\sqrt{\\\\frac{x}{y}}$",
        "$-\\\\sqrt{\\\\frac{y}{x}}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$-\\\\sqrt{\\\\frac{y}{x}}$"
},

{
    question: "त्रिज्या $r$ के सापेक्ष वृत्त के क्षेत्रफल परिवर्तन की दर, जब $r=14$ से.मी. है और $(\\\\pi=\\\\frac{22}{7})$",
    option: [
        "$48\\\\,\\\\text{cm}^2/\\\\text{cm}$",
        "$88\\\\,\\\\text{cm}^2/\\\\text{cm}$",
        "$28\\\\,\\\\text{cm}^2/\\\\text{cm}$",
        "$22\\\\,\\\\text{cm}^2/\\\\text{cm}$"
    ],
    answer: "$88\\\\,\\\\text{cm}^2/\\\\text{cm}$"
},

{
    question: "सरल रेखाओं $y=|x|$, $y=0$, $|x|=1$ से घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "0",
        "$\\\\frac{1}{2}$",
        "1",
        "2"
    ],
    answer: "1"
},

{
    question: "यदि $y=\\\\cos^{-1}\\\\left(\\\\frac{x^2-1}{x^2+1}\\\\right)$, तब $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{2}{(1+x^2)}$",
        "$-\\\\frac{2}{(1+x^2)}$",
        "$\\\\frac{2x}{(1+x^2)}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$-\\\\frac{2}{(1+x^2)}$"
},

{
    question: "$\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$ का व्युत्क्रम है :",
    option: [
        "$\\\\begin{bmatrix}-\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&-\\\\cos\\\\theta\\\\end{bmatrix}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$"
},

{
    question: "तल $2x+3y+4z=12$ नियामक अक्षों से $A,B,C$ बिंदुओं पर मिलती है तो $\\\\triangle ABC$ के गुरुत्व केन्द्र के नियामक हैं -",
    option: [
        "$(2,3,4)$",
        "$(6,4,3)$",
        "$\\\\left(2,\\\\frac{4}{3},1\\\\right)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\left(2,\\\\frac{4}{3},1\\\\right)$"
},

{
    question: "$x$-अक्ष और वक्र $y=4x-x^2-3$ के बीच घिरा हुआ क्षेत्रफल है :",
    option: [
        "$\\\\frac{4}{3}$",
        "$\\\\frac{3}{4}$",
        "7",
        "$\\\\frac{3}{2}$"
    ],
    answer: "$\\\\frac{4}{3}$"
},

{
    question: "$\\\\int_0^4x\\\\sqrt{x}\\\\,dx = ?$",
    option: [
        "12.8",
        "12.4",
        "7",
        "9"
    ],
    answer: "12.8"
},

{
    question: "यदि $\\\\cot^{-1}\\\\left[(\\\\cos\\\\alpha)^{1/2}\\\\right]-\\\\tan^{-1}\\\\left[(\\\\cot\\\\alpha)^{1/2}\\\\right]=x$ तब $\\\\sin x$ = ?",
    option: [
        "$\\\\tan^2\\\\frac{\\\\alpha}{2}$",
        "$\\\\cot^2\\\\frac{\\\\alpha}{2}$",
        "$\\\\tan\\\\alpha$",
        "$\\\\cot\\\\frac{\\\\alpha}{2}$"
    ],
    answer: "$\\\\tan^2\\\\frac{\\\\alpha}{2}$"
},

{
    question: "अवकल समीकरण $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^2-x\\\\left(\\\\frac{dy}{dx}\\\\right)^3=y^3$ की घात है :-",
    option: [
        "0",
        "1",
        "2",
        "3"
    ],
    answer: "2"
},

{
    question: "तलों $4x-3y+2z+1=0$ और $x+y-z=2$ की काटन रेखा से गुजरते हुए तल $x+2y-5z=0$ पर लम्ब तल का समीकरण होगा -",
    option: [
        "$x+2y+z=0$",
        "$11x-3y+z=4$",
        "$x+2y-5z=4$",
        "इनमें से कोई नहीं"
    ],
    answer: "$11x-3y+z=4$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}3&1\\\\\\\\-1&2\\\\end{bmatrix}$ तब $A^2-5A-7I$ का मान है।",
    option: [
        "सम इकाई आव्यूह",
        "शून्य आव्यूह",
        "(a) और (b) दोनों",
        "कोई नहीं"
    ],
    answer: "शून्य आव्यूह"
},

{
    question: "$f(x)=x^3-27x+5$ एक निरंतर वर्धमान फलन है, यदि -",
    option: [
        "$x<-3$",
        "$|x|>3$",
        "$|x|<3$",
        "$x\\\\geq3$"
    ],
    answer: "$|x|>3$"
},

{
    question: "अधिकतम कीजिए $Z = 5x_1 + 7x_2$ जबकि $x_1 + x_2 \\\\leq 4$, $3x_1 + 8x_2 \\\\leq 24$, $10x_1 + 7x_2 \\\\leq 35$ एवं $x_1 \\\\geq 0, x_2 \\\\geq 0$ है -",
    option: [
        "14.8",
        "24.8",
        "34.8",
        "इनमें से कोई नहीं"
    ],
    answer: "24.8"
},

{
    question: "बिंदु जहाँ पर सरल रेखा $y=x+1$, वक्र $y^2=4x$ पर स्पर्श रेखा है ?",
    option: [
        "$(2,1)$",
        "$(1,2)$",
        "$(-1,2)$",
        "$(1,-2)$"
    ],
    answer: "$(1,2)$"
},

{
    question: "फलन $f(x)=\\\\sin^4x+\\\\cos^4x$ का आवर्तकाल है:",
    option: [
        "$2\\\\pi$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "कोई नहीं"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "तल $x=0$ और $y=0$ हैं?",
    option: [
        "समांतर",
        "एक दूसरे पर लम्ब",
        "$z$-अक्ष पर प्रतिच्छेदी",
        "इनमें से कोई नहीं"
    ],
    answer: "एक दूसरे पर लम्ब"
},

{
    question: "वक्र $y=x^2+3x+4$ बिंदु $(1,1)$ पर अभिलम्ब की प्रवणता है?",
    option: [
        "$5$",
        "$-\\\\frac{1}{5}$",
        "$8$",
        "$-\\\\frac{1}{8}$"
    ],
    answer: "$-\\\\frac{1}{5}$"
},

{
    question: "$\\\\begin{vmatrix}a&1&b+c\\\\\\\\b&1&c+a\\\\\\\\c&1&a+b\\\\end{vmatrix}=?$",
    option: [
        "$abc$",
        "0",
        "$a+b+c$",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "यदि $A^2-A+I=0$ हो तब $A$ का व्युत्क्रम है",
    option: [
        "$A$",
        "$A+I$",
        "$I-A$",
        "$A-I$"
    ],
    answer: "$I-A$"
},

{
    question: "यदि $y=\\\\sec^{-1}\\\\left[\\\\frac{\\\\sqrt{x}+1}{\\\\sqrt{x}-1}\\\\right]+\\\\sin^{-1}\\\\left[\\\\frac{\\\\sqrt{x}-1}{\\\\sqrt{x}+1}\\\\right]$ हो, तो $\\\\frac{dy}{dx}$ = ?",
    option: [
        "1",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "0"
    ],
    answer: "0"
},

{
    question: "दो सरल रेखाओं के दिक् अनुपात $l_1,m_1,n_1$ और $l_2,m_2,n_2$ हैं। दोनों सरल रेखाएँ परस्पर लम्ब होंगी यदि -",
    option: [
        "$l_1l_2+m_1m_2+n_1n_2=0$",
        "$l_1l_2+m_1m_2+n_1n_2=1$",
        "$\\\\frac{l_1}{l_2}=\\\\frac{m_1}{m_2}=\\\\frac{n_1}{n_2}$",
        "$\\\\frac{l_1}{l_2}+\\\\frac{m_1}{m_2}+\\\\frac{n_1}{n_2}=0$"
    ],
    answer: "$l_1l_2+m_1m_2+n_1n_2=0$"
},

{
    question: "वक्र $y=x^3$, $x$-अक्ष एवं कोटियों $x=-2$, $x=1$ से घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "-9",
        "$-\\\\frac{15}{4}$",
        "$\\\\frac{15}{4}$",
        "$\\\\frac{17}{4}$"
    ],
    answer: "$\\\\frac{17}{4}$"
},

{
    question: "$\\\\int\\\\frac{1}{\\\\sqrt[3]{x}}\\\\,dx = ?$",
    option: [
        "$\\\\frac{3}{2}x^{2/3}+k$",
        "$\\\\frac{3}{2x^{2/3}}+k$",
        "$\\\\frac{3}{3x^{2/3}}+k$",
        "$\\\\frac{2}{3}x^{2/3}+k$"
    ],
    answer: "$\\\\frac{3}{2}x^{2/3}+k$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}2&1&3\\\\\\\\5&4&6\\\\end{bmatrix}$ तो निम्नांकित में कौन $A'$ के बराबर है ?",
    option: [
        "$\\\\begin{bmatrix}2&1&3\\\\\\\\5&4&6\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}4&5&6\\\\\\\\1&2&3\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}2&5\\\\\\\\1&4\\\\\\\\3&6\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}3&6\\\\\\\\2&5\\\\\\\\1&4\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}2&5\\\\\\\\1&4\\\\\\\\3&6\\\\end{bmatrix}$"
},

{
    question: "$\\\\int_0^1 e^x\\\\,dx$ का मान निम्न में से कौन है ?",
    option: [
        "$e-1$",
        "$e$",
        "1",
        "इनमें से कोई नहीं"
    ],
    answer: "$e-1$"
},

{
    question: "वक्र $y=\\\\sin x$ के बिंदु $(0,0)$ पर अभिलम्ब का समीकरण है?",
    option: [
        "$x=0$",
        "$y=0$",
        "$x+y=0$",
        "$x-y=0$"
    ],
    answer: "$x+y=0$"
},

{
    question: "$\\\\int_{-\\\\pi/2}^{\\\\pi/2}\\\\sin^9x\\\\,dx = ?$",
    option: [
        "-1",
        "0",
        "1",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "असमीकरण $ax + by \\\\geq c$, $ax + by > c$, $ax + by \\\\leq c$ और $ax + by < c$ में से संगत असमीकरण निम्न में से कौन है?",
    option: [
        "$ax + by = c$",
        "$ax + by = 0$",
        "$bx + ay = c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$ax + by = c$"
},

{
    question: "यदि $P(A)=0.2$, $P(\\\\frac{B}{A})=0.3$ तो $P(A \\\\cap B)=?$",
    option: [
        "0.06",
        "0.03",
        "0.02",
        "0.05"
    ],
    answer: "0.06"
},

{
    question: "निम्नलिखित में कौन एक सदिश राशि है ?",
    option: [
        "$\\\\vec{a}\\\\times(\\\\vec{b}\\\\cdot\\\\vec{c})$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\times\\\\vec{c})$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\cdot\\\\vec{c})$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "यदि $y=\\\\log\\\\{\\\\log(\\\\log x)\\\\}$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1}{\\\\log(\\\\log x)}$",
        "$\\\\frac{1}{x\\\\log x\\\\log(\\\\log x)}$",
        "$\\\\frac{1}{x\\\\log(\\\\log x)}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{x\\\\log x\\\\log(\\\\log x)}$"
},

{
    question: "$\\\\int \\\\frac{1}{x}\\\\,dx = ?$",
    option: [
        "$\\\\log_e \\\\frac{1}{x}$",
        "$\\\\log_e x + c$",
        "$\\\\log_a x + c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\log_e x + c$"
},

{
    question: "$\\\\int \\\\frac{e^{\\\\sqrt{x}}}{\\\\sqrt{x}}\\\\,dx$ निम्न में से किसके बराबर है ?",
    option: [
        "$e^{\\\\sqrt{x}}$",
        "$\\\\frac{e^{\\\\sqrt{x}}}{2}$",
        "$2e^{\\\\sqrt{x}}$",
        "$\\\\sqrt{x}\\\\,e^{\\\\sqrt{x}}$"
    ],
    answer: "$2e^{\\\\sqrt{x}}$"
},

{
    question: "$\\\\sin(\\\\cot^{-1}x)$ के लिए बीजीय व्यंजक है :",
    option: [
        "$\\\\frac{1}{1+x^2}$",
        "$\\\\frac{1}{\\\\sqrt{1+x^2}}$",
        "$\\\\frac{x}{\\\\sqrt{1+x^2}}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{\\\\sqrt{1+x^2}}$"
},

{
    question: "$\\\\vec{a},\\\\vec{b},\\\\vec{c}$ एकतलीय होगा यदि -",
    option: [
        "$(\\\\vec{a}\\\\cdot\\\\vec{b})\\\\vec{c}=0$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\times\\\\vec{c})=0$",
        "$\\\\vec{a}\\\\times(\\\\vec{b}\\\\times\\\\vec{c})=0$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{b}+\\\\vec{c})=0$"
    ],
    answer: "$\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\times\\\\vec{c})=0$"
},

{
    question: "फलन $f(x)=\\\\sin^4x+\\\\cos^4x$ वर्धमान है, यदि -",
    option: [
        "$0<x<\\\\frac{\\\\pi}{8}$",
        "$\\\\frac{\\\\pi}{4}<x<\\\\frac{3\\\\pi}{8}$",
        "$\\\\frac{3\\\\pi}{8}<x<\\\\frac{5\\\\pi}{8}$",
        "$\\\\frac{5\\\\pi}{8}<x<\\\\frac{3\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}<x<\\\\frac{3\\\\pi}{8}$"
},

{
    question: "यदि $y=e^{1/x}$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1}{x}\\\\left(e^{1/x}-1\\\\right)$",
        "$-\\\\frac{e^{1/x}}{x^2}$",
        "$e^{1/x}\\\\log x$",
        "इनमें से कोई नहीं"
    ],
    answer: "$-\\\\frac{e^{1/x}}{x^2}$"
},

{
    question: "यदि $y=\\\\tan^{-1}\\\\left(\\\\frac{\\\\sqrt{a}+\\\\sqrt{x}}{1-\\\\sqrt{ax}}\\\\right)$, तब $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1}{(1+x^2)}$",
        "$\\\\frac{1}{\\\\sqrt{x}(1+x)}$",
        "$\\\\frac{2}{\\\\sqrt{x}(1+x)}$",
        "$\\\\frac{1}{2\\\\sqrt{x}(1+x)}$"
    ],
    answer: "$\\\\frac{1}{2\\\\sqrt{x}(1+x)}$"
},

{
    question: "यदि $P(A)=0.8$, $P(B)=0.5$ और $P(\\\\frac{B}{\\\\bar{A}})=0.4$, तो $P(\\\\frac{A}{B})=?$",
    option: [
        "0.32",
        "0.64",
        "0.16",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}=e^{x-y}(e^x-e^y)$ का हल है :-",
    option: [
        "$e^y=e^x-1+Ce^{-x}$",
        "$e^{y-x}=-1+Ce^{-x}$",
        "$e^x+e^y=Ce^{-x}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$e^y=e^x-1+Ce^{-x}$"
},

{
    question: "$\\\\cos^{-1}\\\\left(-\\\\frac{1}{\\\\sqrt{2}}\\\\right)$ का मुख्य मान है :",
    option: [
        "$\\\\frac{3\\\\pi}{4}$",
        "$\\\\frac{5\\\\pi}{4}$",
        "$-\\\\frac{\\\\pi}{4}$",
        "कोई नहीं"
    ],
    answer: "$\\\\frac{3\\\\pi}{4}$"
},

{
    question: "$Z = 6x_1 - 2x_2$ के अधिकतम मान के लिए, जबकि $2x_1 - x_2 \\\\leq 2$, $x_1 \\\\leq 3$ एवं $x_1,x_2 \\\\geq 0$ तो $x_1$ एवं $x_2$ के मान हैं -",
    option: [
        "3, 4",
        "2, 3",
        "1, 2",
        "इनमें से कोई नहीं"
    ],
    answer: "3, 4"
},

{
    question: "यदि $P(A)=\\\\frac{3}{8}$, $P(B)=\\\\frac{5}{8}$ और $P(A\\\\cup B)=\\\\frac{3}{4}$, तो $P(\\\\frac{B}{A})$ है :-",
    option: [
        "$\\\\frac{1}{4}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{2}$"
    ],
    answer: "$\\\\frac{2}{3}$"
},

{
    question: "दीर्घवृत्त $\\\\frac{x^2}{a^2}+\\\\frac{y^2}{b^2}=1$ का क्षेत्रफल निम्न है :",
    option: [
        "$\\\\pi ab$",
        "$\\\\frac{\\\\pi}{4}(a^2+b^2)$",
        "$\\\\pi(a+b)$",
        "$\\\\frac{\\\\pi ab}{4}$"
    ],
    answer: "$\\\\pi ab$"
},

{
    question: "अवकल समीकरण $1+\\\\left(\\\\frac{dy}{dx}\\\\right)^2=\\\\frac{d^2y}{dx^2}$ का घात है :-",
    option: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: "1"
},

{
    question: "तल $7x+4y-2z+5=0$ पर अभिलम्ब का दिक् कोज्या है?",
    option: [
        "$(7,4,5)$",
        "$(7,4,-2)$",
        "$(7,4,2)$",
        "$(0,0,0)$"
    ],
    answer: "$(7,4,-2)$"
},

{
    question: "बिंदु $3\\\\hat{i}+\\\\hat{j}-\\\\hat{k}$ और $\\\\hat{i}+3\\\\hat{j}+\\\\hat{k}$ को जोड़ने वाली रेखा के मध्य बिंदु का स्थिति सदिश है ?",
    option: [
        "$2\\\\hat{i}+2\\\\hat{j}$",
        "$4\\\\hat{i}+4\\\\hat{j}-2\\\\hat{k}$",
        "$2\\\\hat{i}-2\\\\hat{j}+2\\\\hat{k}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2\\\\hat{i}+2\\\\hat{j}$"
},

{
    question: "अवकल समीकरण $x\\\\frac{dy}{dx}=\\\\cot y$ का हल है :-",
    option: [
        "$x\\\\cos y=C$",
        "$x\\\\tan y=C$",
        "$x\\\\sec y=C$",
        "$x\\\\sin y=C$"
    ],
    answer: "$x\\\\cos y=C$"
},

{
    question: "$f:A\\\\to B$ अंत:क्षेपी होगा, यदि",
    option: [
        "$f(A)\\\\subset B$",
        "$f(A)=B$",
        "$B\\\\subset f(A)$",
        "$f(B)\\\\subset A$"
    ],
    answer: "$f(A)\\\\subset B$"
},

{
    question: "निम्न में से किस अवकल समीकरण का एक विशिष्ट हल $y=x$ है?",
    option: [
        "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=x$",
        "$\\\\frac{d^2y}{dx^2}+x\\\\frac{dy}{dx}+xy=x$",
        "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=0$",
        "$\\\\frac{d^2y}{dx^2}+x\\\\frac{dy}{dx}+xy=0$"
    ],
    answer: "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=0$"
},

{
    question: "$\\\\cos^{-1}\\\\left(\\\\cos\\\\frac{7\\\\pi}{6}\\\\right)$ के बराबर है :",
    option: [
        "$\\\\frac{7\\\\pi}{6}$",
        "$\\\\frac{5\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$"
    ],
    answer: "$\\\\frac{5\\\\pi}{6}$"
},

{
    question: "अवकल समीकरण $\\\\frac{d^2y}{dx^2}=\\\\left\\\\{1+\\\\left(\\\\frac{dy}{dx}\\\\right)^2\\\\right\\\\}^{3/2}$ के कोटि एवं घात क्रमशः हैं ?",
    option: [
        "$\\\\frac{3}{2},2$",
        "2, 2",
        "$2,\\\\frac{3}{2}$",
        "3, 4"
    ],
    answer: "2, 2"
},

{
    question: "किसी वक्र का अभिलम्ब $x$-अक्ष के समानान्तर है, यदि -",
    option: [
        "$\\\\frac{dy}{dx}=1$",
        "$\\\\frac{dy}{dx}=0$",
        "$\\\\frac{dy}{dy}=1$",
        "$\\\\frac{dx}{dx}=1$"
    ],
    answer: "$\\\\frac{dy}{dy}=1$"
},

{
    question: "$\\\\int x^{5/3}\\\\,dx = ?$",
    option: [
        "$\\\\frac{3}{5}x^{2/3}+c$",
        "$\\\\frac{8}{3}x^{8/3}+c$",
        "$\\\\frac{3}{8}x^{8/3}+c$",
        "$\\\\frac{5}{3}x^{8/3}+c$"
    ],
    answer: "$\\\\frac{3}{8}x^{8/3}+c$"
},

{
    question: "यदि $x=e^{y+e^y+e^{y}+\\\\cdots}$, $x>0$, तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1-x}{x}$",
        "$\\\\frac{1}{x}$",
        "$\\\\frac{x}{1+x}$",
        "$\\\\frac{1+x}{x}$"
    ],
    answer: "$\\\\frac{1+x}{x}$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1&2\\\\\\\\2&1\\\\end{bmatrix}$ तो सह-खंडज $A=$",
    option: [
        "$\\\\begin{bmatrix}1&-2\\\\\\\\-2&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}2&1\\\\\\\\1&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&-2\\\\\\\\-2&-1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&-2\\\\\\\\2&1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}1&-2\\\\\\\\-2&1\\\\end{bmatrix}$"
},

{
    question: "$\\\\frac{d}{dx}\\\\int f(x)\\\\,dx$ किसके बराबर है ?",
    option: [
        "$f'(x)$",
        "$f(x)+k$",
        "$f''(x)$",
        "$f(x)+c$"
    ],
    answer: "$f(x)+c$"
},

{
    question: "सुसंगत क्षेत्र बिन्दुओं का वह समुच्चय है, जो संतुष्ट करता है -",
    option: [
        "उद्देश्य फलन को",
        "कुछ व्यवरोध को",
        "सभी व्यवरोध को",
        "इनमें से कोई नहीं"
    ],
    answer: "सभी व्यवरोध को"
},

{
    question: "फलन $f(x)=\\\\sqrt{\\\\log_{10}\\\\left(\\\\frac{5x-x^2}{4}\\\\right)}$ का अस्तित्व है:",
    option: [
        "$[1,4]$",
        "$[1,0]$",
        "$[0,5]$",
        "$[5,0]$"
    ],
    answer: "$[1,4]$"
},

{
    question: "$xy$-तल का समीकरण है?",
    option: [
        "$(x=0)$",
        "$(y=0)$",
        "$(z=0)$",
        "$(xz=0)$"
    ],
    answer: "$(z=0)$"
},

{
    question: "यदि $P(A)=\\\\frac{3}{8}$, $P(B)=\\\\frac{1}{3}$ और $P(A\\\\cap B)=\\\\frac{1}{4}$, तो $P(A'\\\\cup B')=?$",
    option: [
        "$\\\\frac{13}{8}$",
        "$\\\\frac{13}{4}$",
        "$\\\\frac{13}{24}$",
        "$\\\\frac{13}{9}$"
    ],
    answer: "$\\\\frac{13}{24}$"
},

{
    question: "त्रिअत्तर व्यवरोध $x \\\\geq 0,\\\\ y \\\\geq 0$ के कारण सुसंगत क्षेत्र निम्न में से किस पाद में होगा?",
    option: [
        "चतुर्थ",
        "प्रथम",
        "तृतीय",
        "द्वितीय"
    ],
    answer: "प्रथम"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\frac{\\\\sqrt{3}}{2}\\\\right)$ का मुख्य मान है ?",
    option: [
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "एक उत्पाद की $x$ इकाइयों के विक्रय से प्राप्त कुल आय रुपयों में $R(x)=3x^2+36x+5$ से प्रदत्त है। जब $x=15$ है तो सीमांत आय है -",
    option: [
        "$116$",
        "$96$",
        "$90$",
        "$126$"
    ],
    answer: "$126$"
},

{
    question: "निम्नलिखित में कौन समघाती अवकल समीकरण नहीं है ?",
    option: [
        "$y^2dx + (y^2+xy)dy = 0$",
        "$(x-y)dy + y^2dx = 0$",
        "$\\\\frac{dy}{dx}=\\\\frac{y}{x}-\\\\frac{y^3}{x^3}$",
        "$\\\\frac{dy}{dx}=\\\\sin\\\\frac{y}{x}$"
    ],
    answer: "$(x-y)dy + y^2dx = 0$"
},

{
    question: "$\\\\int_0^{\\\\pi/2}\\\\frac{\\\\sqrt{\\\\cot x}}{\\\\sqrt{\\\\tan x+\\\\sqrt{\\\\cot x}}}\\\\,dx$ का मान निम्न में से किसके बराबर है ?",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$\\\\hat{i}\\\\times\\\\hat{j}=?$",
    option: [
        "$0$",
        "$\\hat{j}$",
        "$-\\hat{j}$",
        "$\\hat{k}$"
    ],
    answer: "$\\hat{k}$"
},

{
    question: "$y$-अक्ष की दिक् कोज्या निम्न में से कौन है?",
    option: [
        "$(0,1,0)$",
        "$(0,0,1)$",
        "$(1,0,0)$",
        "$(0,0,0)$"
    ],
    answer: "$(0,1,0)$"
},

{
    question: "$\\\\frac{\\\\log x}{x}$ का महत्तम मान निम्न है -",
    option: [
        "$1$",
        "$\\\\frac{2}{e}$",
        "$e$",
        "$\\\\frac{1}{e}$"
    ],
    answer: "$\\\\frac{1}{e}$"
},

{
    question: "$xy$-तल पर अभिलम्ब की दिक् कोज्या है?",
    option: [
        "$(1,0,0)$",
        "$(0,1,0)$",
        "$(1,1,0)$",
        "$(0,0,1)$"
    ],
    answer: "$(0,0,1)$"
},

{
    question: "रेखाओं $y=2x+3$, $y=0$, $x=4$, $x=6$ से बने चतुर्भुज का क्षेत्रफल है :",
    option: [
        "24",
        "26",
        "22",
        "20"
    ],
    answer: "26"
},

{
    question: "$\\\\int_0^3x(3-x)^{3/2}\\\\,dx = ?$",
    option: [
        "$\\\\frac{108\\\\sqrt{3}}{35}$",
        "$-\\\\frac{108\\\\sqrt{3}}{35}$",
        "$\\\\frac{54\\\\sqrt{3}}{35}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{108\\\\sqrt{3}}{35}$"
},

{
    question: "दो पासों को उछाला जाता है। दोनों पर आने वाले अंकों का योग 7 आने की प्रायिकता है ?",
    option: [
        "$\\\\frac{1}{2}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{1}{9}$",
        "$\\\\frac{5}{36}$"
    ],
    answer: "$\\\\frac{1}{6}$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1&1&1\\\\\\\\1&1&1\\\\\\\\1&1&1\\\\end{bmatrix}$ तब $A^2=?$",
    option: [
        "$A$",
        "$2A$",
        "$3A$",
        "1"
    ],
    answer: "$3A$"
},

{
    question: "ताश के 52 पत्तों में से यदि एक पत्ता खींचा जाए तो इसके इक्का होने की प्रायिकता है -",
    option: [
        "$\\\\frac{1}{26}$",
        "$\\\\frac{1}{13}$",
        "$\\\\frac{1}{52}$",
        "$\\\\frac{1}{4}$"
    ],
    answer: "$\\\\frac{1}{13}$"
},

{
    question: "वक्र $y^2=4ax$, $y$-अक्ष एवं रेखा $y=3$ से घिरे क्षेत्र का क्षेत्रफल है :",
    option: [
        "2",
        "$\\\\frac{9}{4}$",
        "$\\\\frac{9}{3}$",
        "$\\\\frac{9}{2}$"
    ],
    answer: "$\\\\frac{9}{4}$"
},

{
    question: "$\\\\begin{bmatrix}\\\\cos x & -\\\\sin x\\\\\\\\\\\\sin x & \\\\cos x\\\\end{bmatrix}$ का मान होगा :",
    option: [
        "$\\\\cos^2x-\\\\sin^2x$",
        "0",
        "1",
        "-1"
    ],
    answer: "1"
},

{
    question: "माना $A=\\\\{1,2,3,\\\\ldots,n\\\\}$ तो कितने फलन $f:A\\\\to B$ से परिभाषित हो सकते हैं?",
    option: [
        "$n-1$",
        "$n$",
        "$n$",
        "$\\\\frac{1}{2}n$"
    ],
    answer: "$n$"
},

{
    question: "रेखाओं $y=3x$, $x=0$, $y=2$ से बने त्रिभुज का क्षेत्रफल है :",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{3}{2}$",
        "4"
    ],
    answer: "$\\\\frac{2}{3}$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}i&0\\\\\\\\0&-i\\\\end{bmatrix}$ तो $A^2=?$",
    option: [
        "$\\\\begin{bmatrix}1&0\\\\\\\\0&-1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1&0\\\\\\\\0&-1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1&0\\\\\\\\0&1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}-1&0\\\\\\\\0&-1\\\\end{bmatrix}$"
},

{
    question: "एक या यादृच्छिक चर x का प्रायिकता वितरण इस प्रकार है ?<br><br>$X$: 1, 2, 3, 4, 5, 6<br>$P(X=x)$: 0.1, $2k$, $k$, 0.2, $3k$, 0.1<br><br>तो k का मान है ?",
    option: [
        "0.1",
        "0.2",
        "0.3",
        "0.4"
    ],
    answer: "0.1"
},

{
    question: "समीकरण $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^3-4\\\\frac{dy}{dx}=2$ का घात है :-",
    option: [
        "0",
        "1",
        "2",
        "3"
    ],
    answer: "3"
},

{
    question: "$\\\\cos\\\\tan^{-1}[\\\\sin\\\\cot^{-1}x]$ का मान है :",
    option: [
        "$\\\\sqrt{\\\\frac{x^2+1}{x^2+2}}$",
        "$\\\\sqrt{\\\\frac{x^2-1}{x^2+2}}$",
        "$\\\\sqrt{\\\\frac{x^2+1}{x^2-2}}$",
        "$\\\\sqrt{\\\\frac{x^2-1}{x^2-2}}$"
    ],
    answer: "$\\\\sqrt{\\\\frac{x^2+1}{x^2+2}}$"
},

{
    question: "यदि $\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\times\\\\vec{c})=3$, तो निम्नलिखित में कौन सही है ?",
    option: [
        "$\\\\vec{c}\\\\cdot(\\\\vec{a}\\\\times\\\\vec{b})=-3$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{c}\\\\times\\\\vec{b})=-3$",
        "$\\\\vec{b}\\\\cdot(\\\\vec{a}\\\\times\\\\vec{c})=3$",
        "$(\\\\vec{a}\\\\times\\\\vec{c})\\\\cdot\\\\vec{b}=3$"
    ],
    answer: "$\\\\vec{a}\\\\cdot(\\\\vec{c}\\\\times\\\\vec{b})=-3$"
},

{
    question: "संबंध $R=\\\\{(1,3),(4,2),(2,4),(2,3),(3,1)\\\\}$ समुच्चय $A=\\\\{1,2,3,4\\\\}$ पर कैसा संबंध है?",
    option: [
        "संक्रामक",
        "स्वतुल्य",
        "सममित",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "$\\\\int\\\\frac{\\\\sec^2x}{\\\\cosec^2x}\\\\,dx = ?$",
    option: [
        "$x-\\\\tan x+c$",
        "$\\\\tan x+x+c$",
        "$\\\\tan x-x+c$",
        "$-\\\\tan x-x+c$"
    ],
    answer: "$\\\\tan x-x+c$"
},

{
    question: "दो पासों की फेंक में अंक 2 के आने की प्रायिकता है –",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{5}{6}$",
        "$\\\\frac{5}{36}$"
    ],
    answer: "$\\\\frac{1}{6}$"
},

{
    question: "रेखा $\\\\frac{x-1}{1}=\\\\frac{y-2}{2}=\\\\frac{z}{0}$ तल $3x-y+z=0$ को किस बिंदु पर काटती है?",
    option: [
        "$(0,0,0)$",
        "$(1,2,0)$",
        "$(0,1,1)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$(0,0,0)$"
},

{
    question: "फलन $f(x)=\\\\cos x-2px$ एक निरंतर हासमान फलन है यदि -",
    option: [
        "$p<\\\\frac{1}{2}$",
        "$p>\\\\frac{1}{2}$",
        "$p<2$",
        "$p>2$"
    ],
    answer: "$p>\\\\frac{1}{2}$"
},

{
    question: "$\\\\hat{i}+3\\\\hat{j}+\\\\hat{k}$ पर $2\\\\hat{i}-3\\\\hat{j}+6\\\\hat{k}$ का प्रक्षेप बराबर है ?",
    option: [
        "$\\\\frac{1}{7}$",
        "$-\\\\frac{1}{7}$",
        "$7$",
        "$-7$"
    ],
    answer: "$-\\\\frac{1}{7}$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}=2^{x+y}$ का हल है :-",
    option: [
        "$2^x+2^y=C$",
        "$2^x+2^{-y}=C$",
        "$2^x-2^{-y}=C$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2^x+2^{-y}=C$"
},

{
    question: "यदि $\\\\sqrt{x}+\\\\sqrt{y}=\\\\sqrt{a}$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$-\\\\frac{\\\\sqrt{x}}{\\\\sqrt{y}}$",
        "$-\\\\frac{1}{2}\\\\frac{\\\\sqrt{y}}{\\\\sqrt{x}}$",
        "$-\\\\frac{\\\\sqrt{y}}{\\\\sqrt{x}}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$-\\\\frac{\\\\sqrt{y}}{\\\\sqrt{x}}$"
},

{
    question: "$\\\\cos^{-1}\\\\left(\\\\frac{1}{2}\\\\right)+2\\\\sin^{-1}\\\\left(\\\\frac{1}{2}\\\\right)$ का मान है :",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{5\\\\pi}{6}$"
    ],
    answer: "$\\\\frac{2\\\\pi}{3}$"
},

{
    question: "अवकल समीकरण $\\\\left(\\\\frac{dy}{dx}\\\\right)^2+y=x$ की कोटि है :-",
    option: [
        "0",
        "1",
        "2",
        "3"
    ],
    answer: "1"
},

{
    question: "$\\\\sin x + \\\\cos x$ का अधिकतम मान जब $0 < x < \\\\frac{\\\\pi}{2}$ है?",
    option: [
        "1",
        "2",
        "$\\\\sqrt{2}$",
        "$\\\\sqrt{\\\\frac{3}{2}}$"
    ],
    answer: "$\\\\sqrt{2}$"
},

{
    question: "$|-\\\\hat{i}+2\\\\hat{j}-3\\\\hat{k}|=?$",
    option: [
        "$\\\\sqrt{15}$",
        "$\\\\sqrt{3}$",
        "$2$",
        "$\\\\sqrt{14}$"
    ],
    answer: "$\\\\sqrt{14}$"
},

{
    question: "यदि $y=\\\\tan^{-1}\\\\left(\\\\frac{\\\\cos x+\\\\sin x}{\\\\cos x-\\\\sin x}\\\\right)$, तब $\\\\frac{dy}{dx}=?$",
    option: [
        "1",
        "-1",
        "$\\\\frac{1}{2}$",
        "$-\\\\frac{1}{2}$"
    ],
    answer: "1"
},

{
    question: "अवकल समीकरण $e^{2x-3y}dx+e^{2y-3x}dy=0$ का हल है :-",
    option: [
        "$e^{5x}+e^{5y}=C$",
        "$e^{5x+5y}=C$",
        "$e^{5x}-e^{5y}=C$",
        "इनमें से कोई नहीं"
    ],
    answer: "$e^{5x}+e^{5y}=C$"
},

{
    question: "यदि $y=2^x$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$x(2^{x-1})$",
        "$\\\\frac{2^x}{\\\\log 2}$",
        "$2^x(\\\\log 2)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2^x(\\\\log 2)$"
},

{
    question: "$\\\\frac{d}{dx}e^{1/x}=?$",
    option: [
        "$-\\frac{e^{1/x}}{x^2}$",
        "$\\frac{e^{1/x}}{x^2}$",
        "$e^{1/x}\\cdot\\log x$",
        "इनमें से कोई नहीं"
    ],
    answer: "$-\\frac{e^{1/x}}{x^2}$"
},

{
    question: "$\\\\begin{vmatrix}\\\\cos15^\\\\circ&\\\\sin15^\\\\circ\\\\\\\\\\\\sin75^\\\\circ&\\\\cos75^\\\\circ\\\\end{vmatrix} = ?$",
    option: [
        "1",
        "$\\\\frac{\\\\pi}{2}$",
        "0",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "$\\\\sec^{-1}x+\\\\operatorname{cosec}^{-1}x$ का मान है :",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$-\\\\frac{\\\\pi}{2}$",
        "1"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "यदि $y=\\\\tan^{-1}\\\\left(\\\\frac{1-\\\\cos x}{\\\\sin x}\\\\right)$, तब $\\\\frac{dy}{dx}=?$",
    option: [
        "1",
        "-1",
        "$\\\\frac{1}{2}$",
        "$-\\\\frac{1}{2}$"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "यदि $y = \\\\log \\\\sqrt{x}$ तो $\\\\frac{dy}{dx}$ का मान निम्नांकित में से कौन होगा ?",
    option: [
        "$\\\\frac{1}{2x}$",
        "$\\\\sqrt{x}$",
        "$\\\\frac{1}{2\\\\sqrt{x}}$",
        "$\\\\frac{\\\\sqrt{x}}{2}$"
    ],
    answer: "$\\\\frac{1}{2x}$"
},

{
    question: "अन्तराल $[-1,1]$ में $f(x)=x^2-1$ के लिए Rolle प्रमेय से $c$ का मान है -",
    option: [
        "$\\\\frac{1}{2}$",
        "$0$",
        "$\\\\frac{1}{4}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$0$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}\\\\cos\\\\alpha&-\\\\sin\\\\alpha\\\\\\\\\\\\sin\\\\alpha&\\\\cos\\\\alpha\\\\end{bmatrix}$ then $AA^T=I$ the value of $\\\\alpha$ is:",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{3\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "सदिश $5\\\\hat{i}+\\\\hat{j}-3\\\\hat{k}$ और $3\\\\hat{i}-4\\\\hat{j}+7\\\\hat{k}$ का अदिश गुणनफल है ?",
    option: [
        "$10$",
        "$-10$",
        "$15$",
        "$-15$"
    ],
    answer: "$-10$"
},

{
    question: "यदि $\\\\sin^{-1}x=\\\\frac{\\\\pi}{5},\\\\ x\\\\in(-1,1)$ तो $\\\\cos^{-1}x$ = ?",
    option: [
        "$\\\\frac{3\\\\pi}{10}$",
        "$\\\\frac{5\\\\pi}{10}$",
        "$\\\\frac{7\\\\pi}{10}$",
        "$\\\\frac{9\\\\pi}{10}$"
    ],
    answer: "$\\\\frac{3\\\\pi}{10}$"
},

{
    question: "वक्र $x=1$, $x=3$, $xy=1$ और $x$-अक्ष से घिरा क्षेत्रफल है :",
    option: [
        "$\\\\log 2$",
        "$\\\\log 3$",
        "$\\\\log 4$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\log 3$"
},

{
    question: "तल $7x+4y-2z+5=0$ पर अभिलम्ब के दिक् अनुपात हैं -",
    option: [
        "$7,4,-2$",
        "$7,4,5$",
        "$7,4,2$",
        "$4,-2,5$"
    ],
    answer: "$7,4,-2$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}\\\\cos x & -\\\\sin x\\\\\\\\\\\\sin x & \\\\cos x\\\\end{bmatrix}$ तो $A+A^T=I$ यदि $x$ का मान है",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\pi$",
        "0"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "बिंदुओं $(0,1,1)$ तथा $(-1,0,2)$ से गुजरते हुए उस तल का समीकरण क्या होगा, जो तल $x+y+z=0$ पर लम्ब है?",
    option: [
        "$x+2y+3z=5$",
        "$2x-y+z=0$",
        "$x-y+1=0$",
        "इनमें से कोई नहीं"
    ],
    answer: "$x-y+1=0$"
},

{
    question: "यदि दो तल $2x - 4y + 3z = 5$ एवं $x + 2y + \\\\alpha z = 12$ आपस में लम्बवत हो तो $\\\\alpha = ?$",
    option: [
        "-2",
        "2",
        "3",
        "इनमें से कोई नहीं"
    ],
    answer: "2"
},

{
    question: "यदि $y=\\\\tan^2x$, तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$x^3\\\\cdot\\\\cos(x^3)$",
        "$\\\\sec^2x$",
        "$2\\\\tan x\\\\cdot\\\\sec^2x$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2\\\\tan x\\\\cdot\\\\sec^2x$"
},

{
    question: "यदि A और B दो घटनाएँ इस तरह से हों कि $P(A)=\\\\frac{1}{3}$, $P(B)=\\\\frac{1}{4}$, $P(A \\\\cap B)=\\\\frac{1}{5}$ तो $P(\\\\frac{A}{B})=?$",
    option: [
        "$\\\\frac{1}{5}$",
        "$\\\\frac{2}{5}$",
        "$\\\\frac{3}{5}$",
        "$\\\\frac{4}{5}$"
    ],
    answer: "$\\\\frac{4}{5}$"
},

{
    question: "$\\\\cos^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)$ का मुख्य मान है :",
    option: [
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{3\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{2\\\\pi}{3}$"
},

{
    question: "यदि फलन $f(x)=x^3+e^{\\\\frac{x}{2}}$ तथा $g(x)=f^{-1}(x)$ तो $g'(1)$ का मान है:",
    option: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: "2"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}+Px=Q$ का समाकलन गुणांक है :-",
    option: [
        "$\\\\int Pdx$",
        "$\\\\int Qdx$",
        "$\\\\int Pdy$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\int Pdy$"
},

{
    question: "उस तल का समीकरण जो बिंदुओं $A(a,0,0)$, $B(0,b,0)$ और $C(0,0,c)$ से होकर जाती है",
    option: [
        "$ax+by+cz=0$",
        "$ax+by+cz=1$",
        "$\\\\frac{x}{a}+\\\\frac{y}{b}+\\\\frac{z}{c}=0$",
        "$\\\\frac{x}{a}+\\\\frac{y}{b}+\\\\frac{z}{c}=1$"
    ],
    answer: "$\\\\frac{x}{a}+\\\\frac{y}{b}+\\\\frac{z}{c}=1$"
},

{
    question: "यदि $\\\\begin{bmatrix}x+y & y\\\\\\\\2x & x-y\\\\end{bmatrix}\\\\begin{bmatrix}2\\\\\\\\-1\\\\end{bmatrix}=\\\\begin{bmatrix}3\\\\\\\\2\\\\end{bmatrix}$ तो $xy$ बराबर होगा",
    option: [
        "-5",
        "-4",
        "4",
        "5"
    ],
    answer: "-5"
},

{
    question: "उद्देश्य फलन $Z = 4x + 8y$ का अधिकतम मान जबकि $2x + y \\\\leq 30$, $x + 2y \\\\leq 24$, $x \\\\geq 3$, $y \\\\leq 9$, $y \\\\geq 0$ है-",
    option: [
        "$x = 12,\\\\ y = 6$",
        "$x = 6,\\\\ y = 6$",
        "$x = 0,\\\\ y = 6$",
        "इनमें से कोई नहीं"
    ],
    answer: "$x = 12,\\\\ y = 6$"
},

{
    question: "रेखिक प्रोग्राम के साथ सम्बन्धित समस्या है?",
    option: [
        "एक उद्देश्य फलन",
        "दो उद्देश्य फलन",
        "कोई उद्देश्य फलन नहीं",
        "इनमें से कोई नहीं"
    ],
    answer: "दो उद्देश्य फलन"
},

{
    question: "आव्यूह $A$ समीकरण $\\\\begin{bmatrix}0 & 2\\\\\\\\-1 & 1\\\\end{bmatrix}A=\\\\begin{bmatrix}1 & 0\\\\\\\\0 & 1\\\\end{bmatrix}$ आता है तब आव्यूह $A$ है :",
    option: [
        "$\\\\begin{bmatrix}2 & 0\\\\\\\\1 & -1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1 & -2\\\\\\\\1 & 0\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\frac{1}{2} & -1\\\\\\\\\\\\frac{1}{2} & 0\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1 & 2\\\\\\\\-1 & 0\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}\\\\frac{1}{2} & -1\\\\\\\\\\\\frac{1}{2} & 0\\\\end{bmatrix}$"
},

{
    question: "रेखिक अवकल समीकरण $\\\\frac{dy}{dx}+y\\\\sec^2x=\\\\tan x\\\\sec^2x$ का समाकलन गुणांक है :-",
    option: [
        "$\\\\tan x$",
        "$e^{\\\\tan x}$",
        "$\\\\log\\\\tan x$",
        "$\\\\tan^2x$"
    ],
    answer: "$e^{\\\\tan x}$"
},

{
    question: "$z$-अक्ष की दिक् कोज्याएँ होती हैं -",
    option: [
        "$(0,0,0)$",
        "$(1,0,0)$",
        "$(0,0,1)$",
        "$(0,1,0)$"
    ],
    answer: "$(0,0,1)$"
},

{
    question: "अवकल समीकरण $\\\\log\\\\left(\\\\frac{dy}{dx}\\\\right)=ax+by$ का हल है :-",
    option: [
        "$\\\\frac{e^{by}}{b}=\\\\frac{e^{ax}}{a}+c$",
        "$\\\\frac{e^{-by}}{-b}=\\\\frac{e^{ax}}{a}+c$",
        "$\\\\frac{e^{-by}}{a}=\\\\frac{e^{ax}}{b}+c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{e^{-by}}{-b}=\\\\frac{e^{ax}}{a}+c$"
},

{
    question: "$\\\\sin^{-1}(1-x)-2\\\\sin^{-1}x=\\\\frac{\\\\pi}{2}$ तो $x$ = ?",
    option: [
        "$0,\\\\frac{1}{2}$",
        "$1,\\\\frac{1}{2}$",
        "$\\\\frac{1}{2}$",
        "0"
    ],
    answer: "0"
},

{
    question: "$f:A\\\\to B$ आच्छादक फलन होगा, यदि:",
    option: [
        "$f(A)\\\\subset B$",
        "$f(A)=B$",
        "$f(A)\\\\supset B$",
        "$f(A)\\\\neq B$"
    ],
    answer: "$f(A)=B$"
},

{
    question: "यदि $x>0,\\\\ xy=1$, तो $x+y$ का न्यूनतम मान निम्न है -",
    option: [
        "$2$",
        "$-2$",
        "$1$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2$"
},

{
    question: "$\\\\int_0^\\\\pi x\\\\,f(\\\\sin x)\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{2}\\\\int_0^\\\\pi f(\\\\sin x)\\\\,dx$",
        "$\\\\frac{\\\\pi}{4}\\\\int_0^\\\\pi f(\\\\sin x)\\\\,dx$",
        "$\\\\int_0^{\\\\pi/2}f(\\\\sin x)\\\\,dx$",
        "$\\\\frac{\\\\pi}{3}\\\\int_0^{\\\\pi/2}f(\\\\cos x)\\\\,dx$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}\\\\int_0^\\\\pi f(\\\\sin x)\\\\,dx$"
},

{
    question: "दो रेखा जिसकी दिक् कोज्या $(l_1,m_1,n_1)$ और $(l_2,m_2,n_2)$ है, परस्पर लम्बवत होंगे यदि -",
    option: [
        "$l_1l_2 = m_1m_2 + n_1n_2 = 0$",
        "$l_1 = l_2,\\\\ m_1 = m_2,\\\\ n_1 = n_2$",
        "$\\\\frac{l_1}{l_2} = \\\\frac{m_1}{m_2} = \\\\frac{n_1}{n_2}$",
        "$l_1l_2 = m_1m_2 = n_1n_2$"
    ],
    answer: "$l_1l_2 = m_1m_2 + n_1n_2 = 0$"
},

{
    question: "यदि $A$ एक $2\\\\times2$ सारणिक है जिसका मान 5 है, तो $|2A|$ का मान होगा ?",
    option: [
        "10",
        "25",
        "20",
        "इनमें से कोई नहीं"
    ],
    answer: "20"
},

{
    question: "$\\\\tan^{-1}\\\\sqrt{3}-\\\\cot^{-1}(-\\\\sqrt{3})$ के बराबर है :",
    option: [
        "$\\\\pi$",
        "$-\\\\frac{\\\\pi}{2}$",
        "0",
        "$2\\\\sqrt{3}$"
    ],
    answer: "$-\\\\frac{\\\\pi}{2}$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}=e^{x+y}$ का व्यापक हल होगा।",
    option: [
        "$e^x+e^{-y}=c$",
        "$e^x+e^y=c$",
        "$e^{-x}+e^y=c$",
        "$e^{-x}+e^{-y}=c$"
    ],
    answer: "$e^x+e^{-y}=c$"
},

{
    question: "कोटि 4 के अवकल समीकरण के व्यापक हल में स्वेच्छ अचर की संख्या है।",
    option: [
        "0",
        "2",
        "3",
        "4"
    ],
    answer: "4"
},

{
    question: "यदि $A$, $B$ तथा $C$ तीन समुच्चय इस प्रकार हों कि $A\\\\cap B=A\\\\cap C$ और $A\\\\cup B=A\\\\cup C$ तो:",
    option: [
        "$A=B$",
        "$A=C$",
        "$B=C$",
        "$A\\\\cap B=d$"
    ],
    answer: "$B=C$"
},

{
    question: "$\\\\int_{-\\\\pi/2}^{\\\\pi/2}(x^3+x\\\\cos x+\\\\tan^3x+1)\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "0",
        "2"
    ],
    answer: "$\\\\pi$"
},

{
    question: "$\\\\int\\\\frac{d\\\\phi(x)}{dx}\\\\,dx$ किसके बराबर है ?",
    option: [
        "$\\\\phi(x)+c$",
        "$\\\\phi'(x)+c$",
        "$\\\\phi''(x)+c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\phi(x)+c$"
},

{
    question: "यदि $P(A)=0.2$, $P(\\\\frac{B}{A})=0.3$, तो $P(A \\\\cap B)=?$",
    option: [
        "0.6",
        "0.006",
        "0.06",
        "इनमें से कोई नहीं"
    ],
    answer: "0.06"
},

{
    question: "$x$ के सभी वास्तविक मानों के लिए $\\\\frac{1-x+x^2}{1+x+x^2}$ का न्यूनतम मान है -",
    option: [
        "$0$",
        "$1$",
        "$3$",
        "$\\\\frac{1}{3}$"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "भुजा में 3% वृद्धि के कारण भुजा $x$ के घन के आयतन में सन्निकट मान है -",
    option: [
        "$0.06x^3m^3$",
        "$0.6x^3m^3$",
        "$0.09x^3m^3$",
        "$0.9x^3m^3$"
    ],
    answer: "$0.09x^3m^3$"
},

{
    question: "$\\\\tan^{-1}(1)$ = ?",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{8}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$f(x)=\\\\sqrt{(x-1)(3-x)}$ का परास है ?",
    option: [
        "$[1,3]$",
        "$[0,1]$",
        "$[-2,2]$",
        "इनमें से कोई नहीं"
    ],
    answer: "$[1,3]$"
},

{
    question: "$\\\\tan^{-1}(1)+\\\\cos^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)+\\\\sin^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)$ = ?",
    option: [
        "0",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{3\\\\pi}{4}$",
        "कोई नहीं"
    ],
    answer: "$\\\\frac{3\\\\pi}{4}$"
},

{
    question: "यदि $(x+y)=\\\\sin(x+y)$ तो $\\\\frac{dy}{dx}=?$",
    option: [
        "-1",
        "1",
        "$\\\\frac{1-\\\\cos(x+y)}{\\\\cos^2(x+y)}$",
        "इनमें से कोई नहीं"
    ],
    answer: "-1"
},

{
    question: "$\\\\left(\\\\frac{1}{x}\\\\right)^x$ का महत्तम मान है -",
    option: [
        "$e$",
        "$(e)^{1/e}$",
        "$\\\\left(\\\\frac{1}{e}\\\\right)^e$",
        "इनमें से कोई नहीं"
    ],
    answer: "$(e)^{1/e}$"
},

{
    question: "$A=[a_{ij}]_{m\\\\times n}$ एक वर्ग आव्यूह है यदि :",
    option: [
        "$m=n$",
        "$m<n$",
        "$m>n$",
        "इनमें से कोई नहीं"
    ],
    answer: "$m=n$"
},

{
    question: "रेखिक प्रोग्रामिंग समस्या अधिकतम $z = 3x + 2y$<br>$x + 2y \\\\leq 10$<br>जबकि $3x + y \\\\leq 15$<br>$x,y \\\\geq 0$<br>का हल किस पाद में होगा?",
    option: [
        "चतुर्थ",
        "प्रथम",
        "तृतीय",
        "द्वितीय"
    ],
    answer: "प्रथम"
},

{
    question: "दो खिलाड़ियों में से प्रत्येक 4 सिक्के उछालता है। इस बात की प्रायिकता कि दोनों बराबर-बराबर संख्या में शीर्ष प्राप्त करते हैं, निम्न है :-",
    option: [
        "$\\\\frac{5}{256}$",
        "$\\\\frac{1}{16}$",
        "$\\\\frac{35}{128}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{35}{128}$"
},

{
    question: "एक पासा को छः बार फेंका जाता है। यदि एक “सम संख्या फेंकना सफलता” हो, तो छः बार सफलता की प्रायिकता है ?",
    option: [
        "$\\\\frac{1}{64}$",
        "$\\\\frac{3}{32}$",
        "$\\\\frac{7}{64}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{64}$"
},

{
    question: "यदि f : R → R जहाँ f(x) = 3x तो कैसा फलन है?",
    option: [
        "एकैक आच्छादक",
        "अनेकैक आच्छादक",
        "एकैक अंत:क्षेपी",
        "अनेकैक अंत:क्षेपी"
    ],
    answer: "एकैक आच्छादक"
},

{
    question: "दो रेखा जिसकी दिक् कोज्या $(l_1,m_1,n_1)$ और $(l_2,m_2,n_2)$ है, परस्पर लम्बवत होंगे यदि -",
    option: [
        "$l_1l_2=m_1m_2+n_1n_2=0$",
        "$\\\\frac{1}{36}$",
        "$\\\\frac{1}{12}$",
        "$\\\\frac{1}{6}$"
    ],
    answer: "$\\\\frac{1}{36}$"
},

{
    question: "अवकल समीकरण $\\\\frac{d^2y}{dx^2}+x^3\\\\left(\\\\frac{dy}{dx}\\\\right)^2=x^4$ की कोटि निम्नांकित में कौन-सी है ?",
    option: [
        "1",
        "2",
        "3",
        "0"
    ],
    answer: "2"
},

{
    question: "$x\\\\vec i+y\\\\vec j+z\\\\vec k$ की दिक् कोज्याएँ निम्नांकित में कौन-सी होगी?",
    option: [
        "$\\\\sqrt{-x^2+y^2+z^2},\\\\sqrt{x^2-y^2+z^2},\\\\sqrt{x^2+y^2-z^2}$",
        "$x\\\\sqrt{-x^2+y^2+z^2},y\\\\sqrt{x^2-y^2+z^2},z\\\\sqrt{x^2+y^2-z^2}$",
        "$\\\\frac{x}{\\\\sqrt{x^2+y^2+z^2}},\\\\frac{y}{\\\\sqrt{x^2+y^2+z^2}},\\\\frac{z}{\\\\sqrt{x^2+y^2+z^2}}$",
        "$\\\\frac{x}{\\\\sqrt{-x^2+y^2+z^2}},\\\\frac{y}{\\\\sqrt{x^2-y^2+z^2}},\\\\frac{z}{\\\\sqrt{x^2+y^2-z^2}}$"
    ],
    answer: "$\\\\frac{x}{\\\\sqrt{x^2+y^2+z^2}},\\\\frac{y}{\\\\sqrt{x^2+y^2+z^2}},\\\\frac{z}{\\\\sqrt{x^2+y^2+z^2}}$"
},

{
    question: "यदि $f(x)=3x^2+15x+5$ हो, तो $f(3.02)$ का सन्निकट मान है -",
    option: [
        "$47.66$",
        "$57.66$",
        "$67.66$",
        "$77.66$"
    ],
    answer: "$77.66$"
},

{
    question: "अवकल समीकरण $(x+y)(dx-dy)=dx+dy$ का हल है :-",
    option: [
        "$x+y=Ce^{x+y}$",
        "$x-y=Ce^{x+y}$",
        "$x+y=Ce^{x-y}$",
        "$x-y=Ce^{x-y}$"
    ],
    answer: "$x+y=Ce^{x-y}$"
},

{
    question: "माना कि $A$ और $B$, $3\\\\times3$ कोटि का आव्यूह है। यदि $|A-B|=0$ तो निम्नलिखित में कौन-सा सत्य है ?",
    option: [
        "$A=0$ या $B=0$",
        "$|A|=0$ और $|B|=0$",
        "$|A|=0$ या $|B|=0$",
        "$A=0$ और $B=0$"
    ],
    answer: "$A=0$ और $B=0$"
},

{
    question: "यदि $y = \\\\sin 2x$ तो $\\\\frac{d^2y}{dx^2}$ का मान निम्नांकित में से कौन होगा ?",
    option: [
        "$2\\\\sin 4x$",
        "$-4\\\\sin 2x$",
        "$4\\\\sin 2x$",
        "$4\\\\cos^2 x$"
    ],
    answer: "$-4\\\\sin 2x$"
},

{
    question: "यदि A और B स्वतंत्र घटनाएँ है और $P(A)=0.3$, $P(A \\\\cup B)=0.08$ तो $P(B)=?$",
    option: [
        "$\\\\frac{5}{7}$",
        "$\\\\frac{3}{7}$",
        "$\\\\frac{3}{5}$",
        "$\\\\frac{4}{5}$"
    ],
    answer: "$\\\\frac{5}{7}$"
},

{
    question: "$\\\\int\\\\left(\\\\sqrt{x}+\\\\frac{1}{\\\\sqrt{x}}\\\\right)^2dx$ बराबर है ?",
    option: [
        "$\\\\frac{x^2}{2}+\\\\log_e x-2x+c$",
        "$\\\\frac{x^2}{2}+\\\\log x+2x+c$",
        "$\\\\frac{x^2}{2}+\\\\log x-2x+c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{x^2}{2}+\\\\log x+2x+c$"
},

{
    question: "$\\\\int\\\\frac{\\\\cos2x}{(\\\\sin x+\\\\cos x)^2}\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{\\\\sin x+\\\\cos x}+c$",
        "$\\\\log(\\\\sin x+\\\\cos x)+c$",
        "$\\\\log|\\\\sin x-\\\\cos x|+c$",
        "$\\\\frac{1}{(\\\\sin x+\\\\cos x)^2}+c$"
    ],
    answer: "$\\\\log(\\\\sin x+\\\\cos x)+c$"
},

{
    question: "अवकलन समीकरण $\\\\left\\\\{1+\\\\left(\\\\frac{dy}{dx}\\\\right)^2\\\\right\\\\}^{3/2}=m\\\\frac{d^2y}{dx^2}$ का घात निम्नांकित में से कौन होगा ?",
    option: [
        "2",
        "3",
        "1",
        "0"
    ],
    answer: "2"
},

{
    question: "यदि $\\\\begin{vmatrix}1-x&2\\\\\\\\18&6\\\\end{vmatrix}=\\\\begin{vmatrix}6&2\\\\\\\\18&6\\\\end{vmatrix}$ तो $x=?$",
    option: [
        "$\\\\pm6$",
        "6",
        "-5",
        "7"
    ],
    answer: "-5"
},

{
    question: "यदि $f(x)+2f(1-x)=x^2+2,\\\\ \\\\forall x\\\\in R$ तो $f(x)=?$",
    option: [
        "$1$",
        "$x^2-2$",
        "$\\\\frac{1}{3}(x-2)^2$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "यदि $y=\\\\tan^2x$, तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\sec^2x$",
        "$\\\\sec^4x$",
        "$2\\\\tan x\\\\cdot\\\\sec^2x$",
        "इनमें से कोई नहीं"
    ],
    answer: "$2\\\\tan x\\\\cdot\\\\sec^2x$"
},

{
    question: "वक्र $y=2x^2-x+1$ की निम्न बिंदु पर स्पर्श रेखा, रेखा $y=3x+9$ के समानान्तर है -",
    option: [
        "$(-1,5)$",
        "$(1,2)$",
        "$(2,7)$",
        "$(3,16)$"
    ],
    answer: "$(1,2)$"
},

{
    question: "$\\\\int\\\\frac{dx}{a^2+x^2} = ?$",
    option: [
        "$\\\\log(x+\\\\sqrt{x^2+a^2})$",
        "$\\\\log(x-\\\\sqrt{x^2+a^2})$",
        "$\\\\log(x+\\\\sqrt{x^2-a^2})$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\log(x+\\\\sqrt{x^2+a^2})$"
},

{
    question: "अवकल समीकरण $\\\\frac{dy}{dx}=\\\\frac{1+y^2}{1+x^2}$ का हल है :-",
    option: [
        "$y+x=C(1-xy)$",
        "$y-x=C(1+xy)$",
        "$y=(1+x)C$",
        "इनमें से कोई नहीं"
    ],
    answer: "$y-x=C(1+xy)$"
},

{
    question: "यदि $|x| \\\\leq 1$ तो $\\\\tan(\\\\cos^{-1}x)$ = ?",
    option: [
        "$\\\\frac{\\\\sqrt{1-x^2}}{x}$",
        "$\\\\frac{x}{1+x^2}$",
        "$\\\\frac{\\\\sqrt{1+x^2}}{x}$",
        "$\\\\sqrt{1+x^2}$"
    ],
    answer: "$\\\\frac{\\\\sqrt{1-x^2}}{x}$"
},

{
    question: "यदि $\\\\vec{a}, \\\\vec{b}$ और $\\\\vec{c}$ एक दूसरे के लम्बवत इकाई सदिश हों, तो $(\\\\vec{a}-\\\\vec{b})^2+(\\\\vec{b}-\\\\vec{c})^2+(\\\\vec{c}-\\\\vec{a})^2$ = ?",
    option: [
        "$6$",
        "$3$",
        "$4$",
        "$9$"
    ],
    answer: "$6$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}3 & 1\\\\\\\\-1 & 2\\\\end{bmatrix}$ तब $A^2-5A-7I$ है :",
    option: [
        "शून्य आव्यूह है",
        "विकर्ण आव्यूह है",
        "तत्समक आव्यूह है",
        "कोई नहीं"
    ],
    answer: "विकर्ण आव्यूह है"
},

{
    question: "यदि $y=\\\\log(\\\\sin x^2)$, at $x=\\\\frac{\\\\pi}{2}$ पर $\\\\frac{dy}{dx}$ बराबर है ?",
    option: [
        "0",
        "1",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\sqrt{\\\\pi}$"
    ],
    answer: "$\\\\sqrt{\\\\pi}$"
},

{
    question: "दिया हुआ है कि $A=\\\\{x,y,z\\\\}, B=\\\\{u,v,w\\\\}$ तो फलन $f:A\\\\to B$ तब $f(x)=u, f(y)=v, f(z)=w$ किस प्रकार का फलन होगा?",
    option: [
        "Surjective",
        "Bijective",
        "Injective",
        "None"
    ],
    answer: "Bijective"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1&2\\\\\\\\4&2\\\\end{bmatrix}$ तो $2|A|=$",
    option: [
        "$2|A|$",
        "$4|A|$",
        "$8|A|$",
        "इनमें से कोई नहीं"
    ],
    answer: "$4|A|$"
},

{
    question: "$\\\\int\\\\frac{1}{e^x+e^{-x}}\\\\,dx = ?$",
    option: [
        "$\\\\cot^{-1}(e^x)+k$",
        "$\\\\cot^{-1}(e^{-x})+k$",
        "$\\\\tan^{-1}(e^x)+k$",
        "$\\\\tan^{-1}(e^{-x})+k$"
    ],
    answer: "$\\\\tan^{-1}(e^x)+k$"
},

{
    question: "यदि रेखाखंड $PQ$ पर $R$ एक बिंदु है ताकि $PR:RQ=2:3$ जबकि $P=(5,2,-6)$ और $Q=(1,0,-3)$, तो $R$ के नियामक हैं -",
    option: [
        "$\\\\left(\\\\frac{13}{5},\\\\frac{4}{5},-\\\\frac{21}{5}\\\\right)$",
        "$\\\\left(\\\\frac{6}{5},\\\\frac{2}{5},-\\\\frac{9}{5}\\\\right)$",
        "$\\\\left(\\\\frac{17}{5},\\\\frac{6}{5},-\\\\frac{24}{5}\\\\right)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\left(\\\\frac{17}{5},\\\\frac{6}{5},-\\\\frac{24}{5}\\\\right)$"
},

{
    question: "$\\\\int\\\\frac{1}{x^2-a^2}\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{2a}\\\\log\\\\left|\\\\frac{x-a}{x+a}\\\\right|$",
        "$\\\\frac{1}{2a}\\\\log\\\\left|\\\\frac{x+a}{x-a}\\\\right|$",
        "$\\\\log(x+\\\\sqrt{x^2-a^2})$",
        "$\\\\log(x+\\\\sqrt{x^2+a^2})$"
    ],
    answer: "$\\\\frac{1}{2a}\\\\log\\\\left|\\\\frac{x-a}{x+a}\\\\right|$"
},

{
    question: "अवकल समीकरण $\\\\frac{ydx-xdy}{y}=0$ का व्यापक हल है :-",
    option: [
        "$xy=C$",
        "$x=Cy^2$",
        "$y=Cx$",
        "$y=Cx^2$"
    ],
    answer: "$y=Cx$"
},

{
    question: "$f(x)=\\\\frac{x^2+x+2}{x^2+x+1}$ का परास है:",
    option: [
        "$(1,\\\\infty)$",
        "$\\\\left(\\\\frac{1}{7},3\\\\right)$",
        "$\\\\left(1,\\\\frac{7}{3}\\\\right]$",
        "$\\\\left(1,\\\\frac{11}{7}\\\\right)$"
    ],
    answer: "$\\\\left(1,\\\\frac{7}{3}\\\\right]$"
},

{
    question: "वक्र $y=a\\\\sin px+b\\\\cos px$ का अवकल समीकरण है :-",
    option: [
        "$y''+py=0$",
        "$y''+p^2y=0$",
        "$y''-py=0$",
        "$y''-p^2y=0$"
    ],
    answer: "$y''+p^2y=0$"
},

{
    question: "वक्र $y=\\\\sin x$ के बिंदु $(0,0)$ पर अभिलम्ब का समीकरण है-",
    option: [
        "$x=0$",
        "$y=0$",
        "$x+y=0$",
        "$x-y=0$"
    ],
    answer: "$x-y=0$"
},

{
    question: "वक्र $y=e^{2x}$ के बिंदु $(0,1)$ पर स्पर्श रेखा $x$-अक्ष को निम्न बिंदु पर मिलती है -",
    option: [
        "$(0,a)$",
        "$(2,0)$",
        "$(-\\\\frac{1}{2},0)$",
        "इनमें से कोई नहीं"
    ],
    answer: "$(-\\\\frac{1}{2},0)$"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\sin\\\\frac{\\\\pi}{3}\\\\right)+\\\\tan^{-1}\\\\left(\\\\tan\\\\frac{3\\\\pi}{4}\\\\right)$ का मान है :",
    option: [
        "$\\\\frac{17\\\\pi}{12}$",
        "$\\\\frac{5\\\\pi}{12}$",
        "$\\\\frac{\\\\pi}{12}$",
        "$-\\\\frac{7\\\\pi}{12}$"
    ],
    answer: "$\\\\frac{\\\\pi}{12}$"
},

{
    question: "यदि A = {a, b, c}, B = {1, 2, 3} और f = {(a, 1), (b, 2), (c, 2)} तो f कैसा फलन है?",
    option: [
        "एकैक अंत:क्षेपी",
        "अनेकैक अंत:क्षेपी",
        "अनेकैक आच्छादक",
        "एकैक आच्छादक"
    ],
    answer: "अनेकैक अंत:क्षेपी"
},

{
    question: "यदि 7 और 2 समीकरण $\\\\begin{vmatrix}x&3&7\\\\\\\\2&x&2\\\\\\\\7&6&x\\\\end{vmatrix}=0$ के दो मूल हैं तो तीसरा मूल होगा",
    option: [
        "-9",
        "14",
        "$\\\\frac{1}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "-9"
},

{
    question: "यदि $\\\\cot^{-1}\\\\sqrt{\\\\cos\\\\theta}-\\\\tan^{-1}\\\\sqrt{\\\\cos\\\\theta}=x$ तब $\\\\sin x$ = ?",
    option: [
        "$\\\\frac{1-\\\\cos\\\\theta}{1+\\\\cos\\\\theta}$",
        "$\\\\frac{1+\\\\cos\\\\theta}{1-\\\\cos\\\\theta}$",
        "$\\\\frac{2\\\\sqrt{\\\\cos\\\\theta}}{1+\\\\cos\\\\theta}$",
        "$\\\\frac{2\\\\sqrt{\\\\cos\\\\theta}}{1-\\\\cos\\\\theta}$"
    ],
    answer: "$\\\\frac{1-\\\\cos\\\\theta}{1+\\\\cos\\\\theta}$"
},

{
    question: "अधिकतम कीजिए $Z = 6x_1 + 11x_2$ जबकि $2x_1 + x_2 \\\\leq 104$, $x_1 + 2x_2 \\\\leq 76$ एवं $x_1 \\\\geq 0, x_2 \\\\geq 0$ है -",
    option: [
        "240",
        "540",
        "440",
        "इनमें से कोई नहीं"
    ],
    answer: "440"
},

{
    question: "निम्नलिखित में $xy$-तल का समीकरण है?",
    option: [
        "$x=0$",
        "$y=0$",
        "$x=k$",
        "$z=0$"
    ],
    answer: "$z=0$"
},

{
    question: "गुणोत्तर व्यवरोध निम्न में से कौन है?",
    option: [
        "$x \\\\leq 0,\\\\ y \\\\leq 0$",
        "$x \\\\leq 0,\\\\ y \\\\geq 0$",
        "$x \\\\geq 0,\\\\ y \\\\geq 0$",
        "इनमें से कोई नहीं"
    ],
    answer: "$x \\\\geq 0,\\\\ y \\\\geq 0$"
},

{
    question: "यदि $f(x)=Kx^3-9x^2+9x+3$ सभी अंतरालों में एक निरंतर वर्धमान फलन है, तो -",
    option: [
        "$K<3$",
        "$K\\\\leq3$",
        "$K>3$",
        "इनमें से कोई नहीं"
    ],
    answer: "$K>3$"
},

{
    question: "वक्र $y=x-\\\\sin x\\\\cos x$ के अभिलम्ब का समीकरण, जहाँ $x=\\\\frac{\\\\pi}{2}$ है निम्न है -",
    option: [
        "$x=\\\\pi$",
        "$x=2$",
        "$x+\\\\pi=0$",
        "$x=\\\\frac{\\\\pi}{2}$"
    ],
    answer: "$x=\\\\frac{\\\\pi}{2}$"
},

{
    question: "यदि $\\\\begin{vmatrix}x&5\\\\\\\\5&x\\\\end{vmatrix}=0$ तो $x=?$",
    option: [
        "$\\\\pm5$",
        "6",
        "0",
        "4"
    ],
    answer: "$\\\\pm5$"
},

{
    question: "$\\\\begin{vmatrix}\\\\sin30^\\\\circ&\\\\cos30^\\\\circ\\\\\\\\-\\\\sin30^\\\\circ&\\\\cos60^\\\\circ\\\\end{vmatrix} = ?$",
    option: [
        "1",
        "0",
        "$\\\\frac{3}{2}$",
        "$\\\\frac{1}{2}$"
    ],
    answer: "1"
},

{
    question: "परवलय $x^2=4y$ और रेखा $x=4y-2$ के बीच घिरा क्षेत्रफल है :",
    option: [
        "$\\\\frac{9}{8}$",
        "$\\\\frac{9}{4}$",
        "$\\\\frac{9}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{9}{8}$"
},

{
    question: "किसी सरल रेखा के दिक् अनुपात $1,3,5$ हैं तो उसकी दिक् कोज्याएँ निम्न में से कौन होगा ?",
    option: [
        "$\\\\frac{1}{\\\\sqrt{35}},\\\\frac{3}{\\\\sqrt{35}},\\\\frac{5}{\\\\sqrt{35}}$",
        "$\\\\frac{1}{9},\\\\frac{1}{3},\\\\frac{5}{9}$",
        "$\\\\frac{5}{\\\\sqrt{35}},\\\\frac{3}{\\\\sqrt{35}},\\\\frac{1}{\\\\sqrt{35}}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{\\\\sqrt{35}},\\\\frac{3}{\\\\sqrt{35}},\\\\frac{5}{\\\\sqrt{35}}$"
},

{
    question: "यदि $P(A)=0.2$, $P(\\\\frac{B}{A})=0.3$ तो $P(A \\\\cap B)=?$",
    option: [
        "0.9",
        "0.06",
        "0.8",
        "इनमें से कोई नहीं"
    ],
    answer: "0.06"
},

{
    question: "$\\\\frac{d}{dx}(\\\\cos^{-1}x)=?$",
    option: [
        "$\\\\frac{1}{2\\\\sqrt{1-x^2}}$",
        "$\\\\sqrt{1-x^2}$",
        "$-\\\\frac{1}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{1}{\\\\sqrt{1-x^2}}$"
    ],
    answer: "$-\\\\frac{1}{\\\\sqrt{1-x^2}}$"
},

{
    question: "यदि $\\\\vec{a}=2\\\\hat{i}+\\\\hat{j}-8\\\\hat{k}$ और $\\\\vec{b}=\\\\hat{i}+3\\\\hat{j}-4\\\\hat{k}$ तो $\\\\vec{a}+\\\\vec{b}$ का परिमाण बराबर है ?",
    option: [
        "$13$",
        "$\\\\frac{13}{3}$",
        "$\\\\frac{3}{13}$",
        "$\\\\frac{6}{13}$"
    ],
    answer: "$13$"
},

{
    question: "$5\\\\hat{i}+\\\\hat{j}-3\\\\hat{k}$ और $3\\\\hat{i}-4\\\\hat{j}+7\\\\hat{k}$ का अदिश गुणनफल है :-",
    option: [
        "$10$",
        "$-10$",
        "$15$",
        "$-15$"
    ],
    answer: "$-10$"
},

{
    question: "दो स्वतंत्र घटनाओं $E_1$ और $E_2$ के लिए $P(E_1 \\\\cup E_2) \\\\cap \\\\{E_1 \\\\cap E_2\\\\}$ है –",
    option: [
        "$\\\\leq \\\\frac{1}{4}$",
        "$>\\\\frac{1}{4}$",
        "$\\\\geq \\\\frac{1}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\leq \\\\frac{1}{4}$"
},

{
    question: "यदि $A$ एक उत्क्रमणीय आव्यूह है जिसका क्रम $n\\\\times n$ है तो",
    option: [
        "$n|A|$",
        "$|A|^{n-1}$",
        "$|A|$",
        "$|A|^n$"
    ],
    answer: "$|A|^{n-1}$"
},

{
    question: "$\\\\tan^{-1}\\\\frac{1}{2}+\\\\tan^{-1}\\\\frac{2}{11}=\\\\tan^{-1}\\\\alpha$ तब $\\\\alpha$ = ?",
    option: [
        "$\\\\frac{1}{4}$",
        "$\\\\frac{1}{2}$",
        "$\\\\frac{3}{4}$",
        "1"
    ],
    answer: "$\\\\frac{3}{4}$"
},

{
    question: "$\\\\tan^{-1}\\\\frac{1}{2}+\\\\tan^{-1}\\\\frac{1}{3}$ = ?",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\pi$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$x$ का मान जिसके लिए $\\\\sin[\\\\cot^{-1}(1-x)]=\\\\cos(\\\\tan^{-1}x)$",
    option: [
        "2",
        "1",
        "0",
        "$\\\\frac{1}{2}$"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "$\\\\int_{-2}^{2}(ax^3+bx+c)\\\\,dx$ का मान आश्रित है ?",
    option: [
        "$a$",
        "$b$",
        "$c$",
        "इनमें से कोई नहीं"
    ],
    answer: "$c$"
},

{
    question: "यदि $P(A)=\\\\frac{3}{5}$, $P(B)=1$ और A तथा B स्वतंत्र घटनाएँ हैं, तो $P(A \\\\cap B)=?$",
    option: [
        "5",
        "$\\frac{3}{25}$",
        "$\\frac{1}{25}$",
        "$\\frac{3}{5}$"
    ],
    answer: "$\\frac{3}{5}$"
},

{
    question: "यदि $y = \\\\sin(\\\\log x)$ तो $\\\\frac{dy}{dx} = ?$",
    option: [
        "$-\\\\frac{\\\\cos(\\\\log x)}{x}$",
        "$\\\\frac{\\\\cos(\\\\log x)}{x}$",
        "$\\\\frac{\\\\sin(\\\\log x)}{x}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{\\\\cos(\\\\log x)}{x}$"
},

{
    question: "यदि A और B दो परस्पर अपवर्जी घटनाएँ हों तथा $P(A)=\\\\frac{1}{6}$ तथा $P(B)=\\\\frac{1}{2}$ तो $P(A \\\\cap B)$ का मान निम्न में से क्या होगा ?",
    option: [
        "$\\\\frac{2}{3}$",
        "0",
        "$\\\\frac{1}{12}$",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "$\\\\sin^{-1}x+\\\\cot^{-1}x$ का मान है :",
    option: [
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{2}$",
        "$-\\\\frac{\\\\pi}{2}$",
        "1"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "$\\\\int \\\\frac{k^{\\\\sqrt{x}}}{\\\\sqrt{x}}\\\\,dx = ?$",
    option: [
        "$k^{\\\\sqrt{x}}\\\\log e^k+c$",
        "$2k^{\\\\sqrt{x}}\\\\log_e k+c$",
        "$2k^{\\\\sqrt{x}}\\\\log 10^k+c$",
        "$\\\\frac{2k^{\\\\sqrt{x}}}{\\\\log e^k}+c$"
    ],
    answer: "$\\\\frac{2k^{\\\\sqrt{x}}}{\\\\log e^k}+c$"
},

{
    question: "$\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$ का व्युत्क्रम है :",
    option: [
        "$\\\\begin{bmatrix}-\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&-\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "कोई नहीं"
    ],
    answer: "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$"
},

{
    question: "$P(\\\\frac{A}{\\\\bar{B}})+P(\\\\frac{\\\\bar{A}}{\\\\bar{B}})=?$",
    option: [
        "1",
        "0",
        "$\\\\frac{1}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "1"
},

{
    question: "$\\\\begin{vmatrix}2&3&5\\\\\\\\0&4&7\\\\\\\\0&0&5\\\\end{vmatrix}=?$",
    option: [
        "40",
        "0",
        "3",
        "25"
    ],
    answer: "40"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1&1&1\\\\\\\\1&1&1\\\\\\\\1&1&1\\\\end{bmatrix}$ तो $A^2$ है :",
    option: [
        "$27A$",
        "$2A$",
        "$3A$",
        "1"
    ],
    answer: "$3A$"
},

{
    question: "$Z$ का अधिकतम मान जहाँ $Z = 3x + 4y$ जबकि $x + y < 40$, $x + 2y \\\\leq 60$, $x \\\\geq 0$ और $y \\\\geq 0$ के अंतर्गत है :-",
    option: [
        "120",
        "140",
        "100",
        "160"
    ],
    answer: "140"
},

{
    question: "मूल बिंदु से बिंदु $(-3,4,5)$ की दूरी है -",
    option: [
        "$50$",
        "$5\\\\sqrt{2}$",
        "$6$",
        "इनमें से कोई नहीं"
    ],
    answer: "$5\\\\sqrt{2}$"
},

{
    question: "$(\\\\vec{a}\\\\times\\\\vec{b})^2=?$",
    option: [
        "$a^2+b^2-(\\\\vec{a}\\\\cdot\\\\vec{b})$",
        "$a^2b^2-(\\\\vec{a}\\\\cdot\\\\vec{b})^2$",
        "$a^2.b^2-2\\\\vec{a}.\\\\vec{b}$",
        "$\\\\vec{a}^2.\\\\vec{b}^2+2\\\\vec{a}.\\\\vec{b}$"
    ],
    answer: "$a^2b^2-(\\\\vec{a}\\\\cdot\\\\vec{b})^2$"
},

{
    question: "वक्र $y=\\\\sin x$ के बिंदु $(\\\\pi,0)$ पर अभिलम्ब का समीकरण है-",
    option: [
        "$x+y=\\\\pi$",
        "$x+y+\\\\pi=0$",
        "$x-y=\\\\pi$",
        "$x-y+\\\\pi=0$"
    ],
    answer: "$x-y=\\\\pi$"
},

{
    question: "यदि $y=\\\\tan^{-1}\\\\left(\\\\frac{a\\\\cos x-b\\\\sin x}{b\\\\cos x+a\\\\sin x}\\\\right)$, तब $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{a}{b}$",
        "$-\\\\frac{b}{a}$",
        "1",
        "-1"
    ],
    answer: "-1"
},

{
    question: "यदि $|\\\\vec{a}+\\\\vec{b}|=|\\\\vec{a}-\\\\vec{b}|$ तो",
    option: [
        "$\\\\vec{a}\\\\parallel\\\\vec{b}$",
        "$\\\\vec{a}\\\\perp\\\\vec{b}$",
        "$(\\\\vec{a}-\\\\vec{b})\\\\times(\\\\vec{a}+\\\\vec{b})$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\vec{a}\\\\perp\\\\vec{b}$"
},

{
    question: "यदि $\\\\begin{vmatrix}x&2\\\\\\\\18&x\\\\end{vmatrix}=\\\\begin{vmatrix}6&2\\\\\\\\18&6\\\\end{vmatrix}$ हो तो $x$ बराबर है :-",
    option: [
        "6",
        "$\\\\pm6$",
        "-6",
        "0"
    ],
    answer: "$\\\\pm6$"
},

{
    question: "$\\\\frac{d}{dx}(\\\\cos^{-1}x)$ = ?",
    option: [
        "$\\\\frac{1}{2\\\\sqrt{1-x^2}}$",
        "$\\\\sqrt{1-x^2}$",
        "$\\\\frac{-1}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{1}{\\\\sqrt{1-x^2}}$"
    ],
    answer: "$\\\\frac{-1}{\\\\sqrt{1-x^2}}$"
},

{
    question: "अवकल समीकरण $\\\\frac{ydx-xdy}{y}=0$ का व्यापक हल है :-",
    option: [
        "$xy=c$",
        "$x=cy^2$",
        "$y=cx$",
        "$y=cx^2$"
    ],
    answer: "$y=cx$"
},

{
    question: "$f(x)=\\\\sqrt{3}\\\\sin x+\\\\cos x$ है, तो $f(x)$ का अधिकतम मान $x$ के किस मान के लिए है ?",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "यदि $F(x)=\\\\begin{bmatrix}\\\\cos x & -\\\\sin x & 0\\\\\\\\\\\\sin x & \\\\cos x & 0\\\\\\\\0 & 0 & 1\\\\end{bmatrix}$ तो $F(x)F(y)$",
    option: [
        "$F(xy)$",
        "$F(x-y)$",
        "$F(x+y)$",
        "$F\\\\left(\\\\frac{x}{y}\\\\right)$"
    ],
    answer: "$F(x+y)$"
},

{
    question: "यदि $y=\\\\sin(x^3)$, तो $\\\\frac{dy}{dx}=?$",
    option: [
        "$x^3\\\\cos(x^3)$",
        "$3x^2\\\\sin(x^3)$",
        "$3x^2\\\\cos(x^3)$",
        "$\\\\cos(x^3)$"
    ],
    answer: "$3x^2\\\\cos(x^3)$"
},

{
    question: "यदि $f:R\\\\to S$ जो $f(x)=\\\\sin x-\\\\sqrt{3}\\\\cos x+1$ द्वारा परिभाषित है, आच्छादक हो, तब अंतराल $S$ है:",
    option: [
        "$[0,1]$",
        "$[-1,-1]$",
        "$[0,3]$",
        "$[-1,3]$"
    ],
    answer: "$[-1,3]$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1&2\\\\\\\\4&2\\\\end{bmatrix}$ तो $2|A|=$",
    option: [
        "$2|A|$",
        "$4|A|$",
        "$8|A|$",
        "None"
    ],
    answer: "$4|A|$"
},

{
    question: "$\\\\cos^{-1}(4x^3-3x)$ का सरल रूप है :",
    option: [
        "$3\\\\sin^{-1}x$",
        "$3\\\\cos^{-1}x$",
        "$\\\\pi-3\\\\sin^{-1}x$",
        "कोई नहीं"
    ],
    answer: "$3\\\\cos^{-1}x$"
},

{
    question: "अवकल समीकरण $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^2+2\\\\left(\\\\frac{dy}{dx}\\\\right)^3+9y=0$ की कोटि है :-",
    option: [
        "2",
        "3",
        "4",
        "इनमें से कोई नहीं"
    ],
    answer: "2"
},

{
    question: "$\\\\int \\\\tan^2\\\\frac{x}{2}\\\\,dx = ?$",
    option: [
        "$\\\\tan\\\\frac{x}{2}-x+c$",
        "$\\\\tan\\\\frac{x}{2}+x+c$",
        "$2\\\\tan\\\\frac{x}{2}+x+c$",
        "$2\\\\tan\\\\frac{x}{2}-x+c$"
    ],
    answer: "$2\\\\tan\\\\frac{x}{2}-x+c$"
},

{
    question: "यदि $f:R\\\\to R$ इस तरह से परिभाषित हो कि $f(x)=2x+3$ तो $f^{-1}(x)=$",
    option: [
        "$\\\\frac{x+3}{2}$",
        "$\\\\frac{x-3}{2}$",
        "$2x-3$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{x-3}{2}$"
},

{
    question: "$f(x)=\\\\sin x$ वर्धमान है -",
    option: [
        "$\\\\frac{\\\\pi}{2}<x<\\\\pi$",
        "$\\\\pi<x<\\\\frac{3\\\\pi}{2}$",
        "$0<x<\\\\pi$",
        "$-\\\\frac{\\\\pi}{2}<x<\\\\frac{\\\\pi}{2}$"
    ],
    answer: "$-\\\\frac{\\\\pi}{2}<x<\\\\frac{\\\\pi}{2}$"
},

{
    question: "$\\\\hat{i} \\\\times (\\\\hat{j} \\\\times \\\\hat{k})$ का मान निम्नलिखित में से कौन सा है ?",
    option: [
        "$\\\\hat{k}$",
        "$0$",
        "$\\\\hat{i}$",
        "$\\\\hat{j}$"
    ],
    answer: "$0$"
},

{
    question: "निम्न में से कौन सा अवकल समीकरण $\\\\frac{dy}{dx}=\\\\frac{y}{x}$ का सामान्य हल है ?",
    option: [
        "$y=\\\\frac{k}{x}$",
        "$y=kx$",
        "$y=k\\\\log x$",
        "$\\\\log y=kx$"
    ],
    answer: "$y=kx$"
},

{
    question: "एक सरल रेखा $(\\\\alpha,\\\\beta,\\\\gamma)$ से गुजरती है तो इसके दिक् कोज्याएँ $l,m,n$ हैं। इस सरल रेखा के समीकरण हैं :-",
    option: [
        "$\\\\frac{x}{l}=\\\\frac{y}{m}=\\\\frac{z}{n}$",
        "$\\\\frac{x-\\\\alpha}{l}=\\\\frac{y-\\\\beta}{m}=\\\\frac{z-\\\\gamma}{n}$",
        "$\\\\frac{x+\\\\alpha}{l}=\\\\frac{y+\\\\beta}{m}=\\\\frac{z+\\\\gamma}{n}$",
        "$\\\\frac{x-\\\\alpha}{l}=\\\\frac{y+\\\\beta}{m}=\\\\frac{z-\\\\gamma}{n}$"
    ],
    answer: "$\\\\frac{x-\\\\alpha}{l}=\\\\frac{y-\\\\beta}{m}=\\\\frac{z-\\\\gamma}{n}$"
},

{
    question: "यदि A और B परस्पर अपवर्जी घटनाएँ इस प्रकार की हैं कि $P(A)=0.4$, $P(B)=x$ और $P(A \\\\cup B)=0.5$ तब $x=?$",
    option: [
        "0.2",
        "1",
        "$\\\\frac{4}{5}$",
        "इनमें से कोई नहीं"
    ],
    answer: "1"
},

{
    question: "$\\\\frac{d}{dx}(\\\\sec^{-1}x)=?$",
    option: [
        "$\\\\frac{1}{x\\\\sqrt{x^2-1}}$",
        "$\\\\frac{1}{1+x^2}$",
        "$\\\\frac{1}{1+x^2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{x\\\\sqrt{x^2-1}}$"
},

{
    question: "रेखिक समीकरण $ax + by = c$, का आलेख जो एक सरल रेखा है, निम्न में से किस बिंदु पर x-अक्ष से गुजरेगी?",
    option: [
        "$\\\\left(\\\\frac{c}{b},0\\\\right)$",
        "$\\\\left(\\\\frac{c}{a},0\\\\right)$",
        "$\\\\left(0,\\\\frac{c}{a}\\\\right)$",
        "$\\\\left(0,\\\\frac{c}{b}\\\\right)$"
    ],
    answer: "$\\\\left(\\\\frac{c}{a},0\\\\right)$"
},

{
    question: "उस त्रिभुज का क्षेत्रफल जिसके शीर्ष $(3,8)$, $(5,2)$ और $(-4,2)$ है ?",
    option: [
        "26",
        "13",
        "10",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "$\\\\begin{vmatrix}1&1&2\\\\\\\\2&2&4\\\\\\\\3&5&6\\\\end{vmatrix}=?$",
    option: [
        "5",
        "7",
        "0",
        "9"
    ],
    answer: "0"
},

{
    question: "एक वृत्त की त्रिज्या $r=6$ cm पर $r$ के सापेक्ष क्षेत्रफल में परिवर्तन की दर -",
    option: [
        "$10\\\\pi$",
        "$12\\\\pi$",
        "$8\\\\pi$",
        "$11\\\\pi$"
    ],
    answer: "$12\\\\pi$"
},

{
    question: "$\\\\tan\\\\left(\\\\sin^{-1}\\\\frac{3}{5}+\\\\cot^{-1}\\\\frac{3}{2}\\\\right)$ का मान है :",
    option: [
        "$\\\\frac{17}{6}$",
        "34",
        "18",
        "-18"
    ],
    answer: "$\\\\frac{17}{6}$"
},

{
    question: "$\\\\frac{dx}{dy}=?$",
    option: [
        "1",
        "0",
        "$x$",
        "इनमें से कोई नहीं"
    ],
    answer: "1"
},

{
    question: "यदि A और B दो घटनाएँ इस प्रकार हों कि $P(A)\\\\neq0$ और $P(\\\\frac{B}{A})=1$ तो-",
    option: [
        "$B\\\\subset A$",
        "$A\\\\subset B$",
        "$B=\\\\varnothing$",
        "$A\\\\cap B=\\\\varnothing$"
    ],
    answer: "$B\\\\subset A$"
},

{
    question: "यदि $P(A)=\\\\frac{1}{3}$, $P(B)=\\\\frac{1}{4}$ और $P(A \\\\cap B)=\\\\frac{1}{5}$ तो $P(\\\\frac{A}{B})=?$",
    option: [
        "$\\\\frac{1}{5}$",
        "$\\\\frac{2}{5}$",
        "$\\\\frac{3}{5}$",
        "$\\\\frac{4}{5}$"
    ],
    answer: "$\\\\frac{4}{5}$"
},

{
    question: "एक मैट्रिक्स $A=[a_{ij}]_{m\\\\times n}$ विषम सममित है यदि :",
    option: [
        "$a_{ij}=0$",
        "$a_{ij}=a_{ji}$",
        "$a_{ij}=-a_{ji}$",
        "$a_{ij}=1$"
    ],
    answer: "$a_{ij}=-a_{ji}$"
},

{
    question: "$\\\\int\\\\frac{1}{x^3}\\\\,dx = ?$",
    option: [
        "$-\\\\frac{3}{x^2}+c$",
        "$-\\\\frac{1}{2x^2}+c$",
        "$-\\\\frac{1}{3x^2}+c$",
        "$\\\\frac{x^{-2}}{2}+c$"
    ],
    answer: "$-\\\\frac{1}{2x^2}+c$"
},

{
    question: "$f(x)=\\\\sqrt{\\\\sin^{-1}(2x)+\\\\frac{\\\\pi}{6}}$ का प्रांत है:",
    option: [
        "$\\\\left[\\\\frac{1}{4},\\\\frac{1}{2}\\\\right]$",
        "$\\\\left[-\\\\frac{1}{4},\\\\frac{1}{2}\\\\right]$",
        "$\\\\left[\\\\frac{1}{4},\\\\frac{1}{3}\\\\right]$",
        "$\\\\left[-\\\\frac{1}{4},\\\\frac{1}{3}\\\\right]$"
    ],
    answer: "$\\\\left[-\\\\frac{1}{4},\\\\frac{1}{2}\\\\right]$"
},

{
    question: "यदि $\\\\rho\\\\in R$ और $\\\\Delta=\\\\begin{vmatrix}a&b\\\\\\\\c&d\\\\end{vmatrix}$ तो $\\\\rho\\\\Delta$ समान होगा -",
    option: [
        "$\\\\begin{vmatrix}\\\\rho a&\\\\rho b\\\\\\\\\\\\rho c&\\\\rho d\\\\end{vmatrix}$",
        "$\\\\begin{vmatrix}\\\\rho a&b\\\\\\\\c&d\\\\end{vmatrix}$",
        "$\\\\begin{vmatrix}\\\\rho a&b\\\\\\\\\\\\rho c&d\\\\end{vmatrix}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\begin{vmatrix}\\\\rho a&b\\\\\\\\\\\\rho c&d\\\\end{vmatrix}$"
},

{
    question: "सारणिक $\\\\begin{vmatrix}2&3&4\\\\\\\\5&6&8\\\\\\\\6x&9x&12x\\\\end{vmatrix}$ का मान है ?",
    option: [
        "0",
        "$256x^3$",
        "$256x$",
        "$256x^2$"
    ],
    answer: "0"
},

{
    question: "$\\\\int_0^1\\\\frac{f(x)}{f(x)+f(1-x)}\\\\,dx = ?$",
    option: [
        "0",
        "$\\\\frac{1}{2}$",
        "1",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "यदि $\\\\Delta=\\\\begin{vmatrix}10&2\\\\\\\\30&6\\\\end{vmatrix}$ तब $\\\\Delta=?$",
    option: [
        "0",
        "10",
        "12",
        "60"
    ],
    answer: "0"
},

{
    question: "$(\\\\alpha,\\\\beta,\\\\gamma)$ से गुजरने वाली और अक्ष पर समान कोण बनाने वाली रेखा का समीकरण है?",
    option: [
        "$x-\\\\alpha=y-\\\\beta=z-\\\\gamma$",
        "$\\\\frac{x-1}{\\\\alpha}=\\\\frac{y-1}{\\\\beta}=\\\\frac{z-1}{\\\\gamma}$",
        "$\\\\frac{x}{\\\\alpha}=\\\\frac{y}{\\\\beta}=\\\\frac{z}{\\\\gamma}$",
        "इनमें से कोई नहीं"
    ],
    answer: "$x-\\\\alpha=y-\\\\beta=z-\\\\gamma$"
},

{
    question: "$\\\\int_0^{\\\\pi/2}\\\\frac{\\\\sqrt{\\\\cos x}}{\\\\sqrt{\\\\sin x+\\\\cos x}}\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$-\\\\frac{\\\\pi}{4}$",
        "0",
        "$\\\\frac{\\\\pi}{2}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "आव्यूह $\\\\begin{bmatrix}2&-1&4\\\\\\\\1&0&-5\\\\\\\\-4&5&7\\\\end{bmatrix}$ है :",
    option: [
        "सममित आव्यूह",
        "असममित आव्यूह",
        "विकर्ण आव्यूह",
        "कोई नहीं"
    ],
    answer: "कोई नहीं"
},

{
    question: "$\\\\int_{-1}^{2}x|x|\\\\,dx = ?$",
    option: [
        "$\\\\int_{-1}^{2}x^2\\\\,dx$",
        "$\\\\frac{7}{3}$",
        "3",
        "इनमें से कोई नहीं"
    ],
    answer: "$\\\\frac{7}{3}$"
},

{
    question: "$\\\\begin{vmatrix} bc & 1 & \\\\frac{1}{a} \\\\\\\\ ca & 1 & \\\\frac{1}{b} \\\\\\\\ ab & 1 & \\\\frac{1}{c} \\\\end{vmatrix} = ?$",
    option: [
        "$\\\\frac{1}{abc}$",
        "0",
        "$abc$",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "फलन $f(x)=x^3-6x^2+9x+1$ एक निरंतर हासमान फलन है, यदि -",
    option: [
        "$1<x<3$",
        "$x<3$",
        "$x>1$",
        "$x>3$ या $x<1$"
    ],
    answer: "$x>3$ या $x<1$"
},

{
    question: "$\\\\int\\\\log_e z\\\\,dz = ?$",
    option: [
        "$z\\\\log z+z+k$",
        "$z\\\\log z-z+k$",
        "$\\\\log z+z+k$",
        "$\\\\log z-z+k$"
    ],
    answer: "$z\\\\log z-z+k$"
},

{
    question: "यदि $y=9^x$ तो $\\\\frac{d^2y}{dx^2}=?$",
    option: [
        "$9^x,\\\\ \\\\log 9$",
        "$9^x(\\\\log 9)^2$",
        "$(9^x)^2,\\\\ \\\\log 9$",
        "इनमें से कोई नहीं"
    ],
    answer: "$9^x(\\\\log 9)^2$"
},

{
    question: "$\\\\int_{-\\\\pi/2}^{\\\\pi/2}\\\\sin^2x\\\\,dx = ?$",
    option: [
        "0",
        "$\\\\frac{\\\\pi}{2}$",
        "1",
        "$\\\\pi$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "$\\\\hat{k}\\\\times\\\\hat{k}=?$",
    option: [
        "$0$",
        "$1$",
        "$|k|^2$",
        "इनमें से कोई नहीं"
    ],
    answer: "$0$"
},

{
    question: "$\\\\begin{bmatrix}x+y\\\\\\\\x-y\\\\end{bmatrix}=\\\\begin{bmatrix}2&1\\\\\\\\4&3\\\\end{bmatrix}\\\\begin{bmatrix}1\\\\\\\\-2\\\\end{bmatrix}$ तब $(x,y)=$",
    option: [
        "$(1,1)$",
        "$(1,-1)$",
        "$(-1,1)$",
        "None"
    ],
    answer: "$(-1,1)$"
},

{
    question: "$\\\\vec k\\\\cdot\\\\vec k=?$",
    option: [
        "$1$",
        "$0$",
        "$2$",
        "$-1$"
    ],
    answer: "$1$"
},

{
    question: "यदि $\\\\begin{vmatrix}2+x&2&x\\\\\\\\2-x&2&x\\\\\\\\2-x&2&-x\\\\end{vmatrix}=0$, तो $x=?$",
    option: [
        "0",
        "2",
        "3",
        "4"
    ],
    answer: "0"
},

{
    question: "परवलय $y^2 = 4ax$ और उसका latus rectum का रेखाखंड से घेरा क्षेत्र का क्षेत्रफल है -",
    option: [
        "$\\\\frac{4a^2}{3}\\\\ unit^2$",
        "$\\\\frac{8a^2}{3}\\\\ unit^2$",
        "$\\\\frac{16a^2}{3}\\\\ unit^2$",
        "$\\\\frac{2a^2}{3}\\\\ unit^2$"
    ],
    answer: "$\\\\frac{8a^2}{3}\\\\ unit^2$"
},

{
    question: "$y$-अक्ष की दिक् कोज्याएँ होती हैं -",
    option: [
        "$(0,0,0)$",
        "$(1,0,0)$",
        "$(0,1,0)$",
        "$(0,0,1)$"
    ],
    answer: "$(0,1,0)$"
},

{
    question: "यदि $y=4x-5$ वक्र $y^2=px^3+q$ के बिंदु पर स्पर्शी है तो -",
    option: [
        "$p=2,q=-7$",
        "$p=-2,q=7$",
        "$p=-2,q=-7$",
        "$p=2,q=7$"
    ],
    answer: "$p=2,q=-7$"
},

{
    question: "वास्तविक संख्याओं के समुच्चय पर परिभाषित संबंध $R=\\\\{(a,b)\\\\in R\\\\times R:1+ab>0\\\\}$ है:",
    option: [
        "स्वतुल्य और संक्रमक",
        "सममित और संक्रमक",
        "स्वतुल्य और क्रमित",
        "समतुल्य संबंध"
    ],
    answer: "समतुल्य संबंध"
},

{
    question: "$f(x)=x^x$ निम्न अन्तराल से हासमान है -",
    option: [
        "$]0,e[$",
        "$]0,\\\\frac{1}{e}[$",
        "$]0,1[$",
        "इनमें से कोई नहीं"
    ],
    answer: "$]0,\\\\frac{1}{e}[$"
},

{
    question: "$\\\\frac{d}{dx}\\\\int f(x)=?$",
    option: [
        "$f'(x)$",
        "$f(x)$",
        "$-f(x)$",
        "$f(x)+c$"
    ],
    answer: "$f(x)$"
},

{
    question: "सारणिक $\\\\begin{vmatrix}3&1&7\\\\\\\\5&0&7\\\\\\\\2&5&3\\\\end{vmatrix}=?$",
    option: [
        "124",
        "125",
        "134",
        "144"
    ],
    answer: "134"
},

{
    question: "माना $A=\\\\begin{bmatrix}1&2\\\\\\\\0&1\\\\end{bmatrix}$ तब $A^n=?$",
    option: [
        "$\\\\begin{bmatrix}1&2n\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}2&n\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&2n\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&n\\\\\\\\0&2\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}1&2n\\\\\\\\0&1\\\\end{bmatrix}$"
},

{
    question: "$\\\\tan^{-1}\\\\left(\\\\cos^{-1}\\\\frac{4}{5}+\\\\tan^{-1}\\\\frac{2}{3}\\\\right)$ का मान है :",
    option: [
        "$\\\\frac{6}{17}$",
        "$\\\\frac{7}{16}$",
        "$\\\\frac{17}{6}$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "$\\\\sin^2\\\\theta$ का आवर्त काल:",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "$2\\\\pi$",
        "$\\\\pi^2$"
    ],
    answer: "$\\\\pi$"
},

{
    question: "किसी सारणिक, जिसकी कोई दो पंक्तियाँ (या स्तम्भ) समान हैं, का मान होता है -",
    option: [
        "1",
        "-1",
        "0",
        "इनमें से कोई नहीं"
    ],
    answer: "0"
},

{
    question: "यदि $\\\\vec{a}=2\\\\hat{i}+\\\\hat{j}+3\\\\hat{k}$ तथा $\\\\vec{b}=3\\\\hat{i}+5\\\\hat{j}-2\\\\hat{k}$ तो $|\\\\vec{a}\\\\times\\\\vec{b}|=?$",
    option: [
        "$\\\\sqrt{507}$",
        "$\\\\sqrt{407}$",
        "$\\\\sqrt{307}$",
        "$\\\\sqrt{607}$"
    ],
    answer: "$\\\\sqrt{507}$"
},

{
    question: "यदि $P(A)=0.65$, $P(B)=0.15$ तो $P(\\\\bar{A})+P(\\\\bar{B})=?$",
    option: [
        "1.5",
        "1.2",
        "0.8",
        "इनमें से कोई नहीं"
    ],
    answer: "1.2"
},

{
    question: "यदि $A=\\\\begin{bmatrix}3&-2\\\\\\\\4&-2\\\\end{bmatrix}$ तथा $A^2=KA-2I$ हो तो $K$ का मान है :",
    option: [
        "0",
        "8",
        "-7",
        "1"
    ],
    answer: "1"
},

{
    question: "$\\\\int_0^{\\\\pi^2/4}\\\\sin\\\\sqrt{x}\\\\,dx = ?$",
    option: [
        "1",
        "$\\\\frac{1}{2}$",
        "$\\\\frac{3}{2}$",
        "इनमें से कोई नहीं"
    ],
    answer: "इनमें से कोई नहीं"
},

{
    question: "अवकल समीकरण $\\\\frac{d^2y}{dx^2}+x^3\\\\left(\\\\frac{dy}{dx}\\\\right)^3=x^4$ की कोटि है :-",
    option: [
        "1",
        "2",
        "3",
        "0"
    ],
    answer: "2"
},

{
    question: "माना $E=\\\\{1,2,3,4\\\\}$ और $F=\\\\{1,2\\\\}$ तब $E$ से $F$ पर आच्छादक फलन की संख्या है:",
    option: [
        "14",
        "16",
        "12",
        "8"
    ],
    answer: "14"
},

{
    question: "$x^2$ के परिवर्तन की दर तथा $\\\\log x$ के परिवर्तन की दर का अनुपात निम्नांकित में से कौन होगा ?",
    option: [
        "$2x$",
        "$2x^2$",
        "2",
        "$\\\\frac{2}{x}$"
    ],
    answer: "$2x^2$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}3 & -2\\\\\\\\4 & -2\\\\end{bmatrix}$ तथा $A^2=kA-2I$ हो, तब $k$ का मान है",
    option: [
        "0",
        "8",
        "-7",
        "1"
    ],
    answer: "1"
},

{
    question: "$\\\\frac{d}{dx}\\\\{\\\\cos(\\\\sin x)\\\\}=?$",
    option: [
        "$\\\\sin(\\\\sin x)\\\\cos x$",
        "$-\\\\sin(\\\\sin x)\\\\cos x$",
        "$-\\\\sin(\\\\cos x)\\\\cos x$",
        "इनमें से कोई नहीं"
    ],
    answer: "$-\\\\sin(\\\\sin x)\\\\cos x$"
},

{
    question: "यदि $A=\\\\begin{bmatrix}1 & -1\\\\\\\\2 & 3\\\\end{bmatrix}$ तब",
    option: [
        "$A^{-1}=\\\\begin{bmatrix}\\\\frac{3}{5} & \\\\frac{1}{5}\\\\\\\\\\\\frac{2}{5} & \\\\frac{1}{5}\\\\end{bmatrix}$",
        "$|A|\\\\ne0$",
        "$|A|=5$",
        "$A^2=A$"
    ],
    answer: "$|A|=5$"
},

{
    question: "किसी घटना की प्रायिकता $\\\\frac{3}{7}$ है, तो उसका प्रतिकूल संयोगानुपात है -",
    option: [
        "4 : 3",
        "7 : 3",
        "3 : 7",
        "3 : 4"
    ],
    answer: "4 : 3"
},
  
];

// English Questions
const mathEnglish = [
{
    question: "$f:A\\\\to B$ is a surjective function if:",
    option: [
        "$B\\\\subset f(A)$",
        "$f(A)=B$",
        "$f(B)\\\\subset A$",
        "$f(A)\\\\subset B$"
    ],
    answer: "$f(A)=B$"
},

{
    question: "A spherical balloon is inflated such that its volume increases at the rate of 40 cm³/sec. when its radius is 8 cm. Then the surface area increases at the following rate -",
    option: [
        "$400\\\\,\\\\text{cm}^2/\\\\text{minute}$",
        "$10\\\\,\\\\text{cm}^2/\\\\text{minute}$",
        "$10\\\\,\\\\text{cm}/\\\\text{minute}$",
        "None of these"
    ],
    answer: "$10\\\\,\\\\text{cm}^2/\\\\text{minute}$"
},

{
    question: "If $y=\\\\tan^{-1}\\\\left(\\\\frac{\\\\cos x}{1+\\\\sin x}\\\\right)$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "1",
        "-1",
        "$\\\\frac{1}{2}$",
        "$-\\\\frac{1}{2}$"
    ],
    answer: "$-\\\\frac{1}{2}$"
},

{
    question: "In general linear programming, the objective function is ?",
    option: [
        "linear function",
        "non-linear function",
        "constant function",
        "None of these"
    ],
    answer: "constant function"
},

{
    question: "$(\\\\vec{a}-\\\\vec{b})\\\\times(\\\\vec{a}+\\\\vec{b})=?$",
    option: [
        "$2(\\\\vec{a}\\\\times\\\\vec{b})$",
        "$\\\\vec{a}\\\\times\\\\vec{b}$",
        "$|\\\\vec{a}|^2-|\\\\vec{b}|^2$",
        "None of these"
    ],
    answer: "$2(\\\\vec{a}\\\\times\\\\vec{b})$"
},

{
    question: "Let $f(x)=\\\\int_1^x\\\\sqrt{2-t^2}\\\\,dt$ then equation $x^2-f'(x)=0$ real root is -",
    option: [
        "$\\\\pm\\\\frac{1}{2}$",
        "$\\\\pm1$",
        "$\\\\pm\\\\frac{1}{\\\\sqrt{2}}$",
        "$\\\\pm2$"
    ],
    answer: "$\\\\pm1$"
},

{
    question: "$N$ on a binary operation $a•b=a^3+b^3$ from is defined:",
    option: [
        "• associative and commutative",
        "• commutative but not associative",
        "• associative but not commutative",
        "• neither associative nor commutative"
    ],
    answer: "• commutative but not associative"
},

{
    question: "$2\\\\tan^{-1}\\\\frac{1}{3}+\\\\tan^{-1}\\\\frac{1}{7}$ = ?",
    option: [
        "$\\\\tan^{-1}\\\\frac{44}{29}$",
        "$\\\\frac{\\\\pi}{2}$",
        "0",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$\\\\frac{dy}{dx}=1+x+y+xy$ has the solution :-",
    option: [
        "$x-y=k(1+xy)$",
        "$\\\\log(1+y)=x+\\\\frac{x^2}{2}+k$",
        "$\\\\log(1+x)=y+\\\\frac{y^2}{2}+k$",
        "None of these"
    ],
    answer: "$\\\\log(1+y)=x+\\\\frac{x^2}{2}+k$"
},

{
    question: "If $P(A)=\\\\frac{3}{8}$, $P(B)=\\\\frac{1}{2}$ and $P(A\\\\cap B)=\\\\frac{1}{4}$, then $P(\\\\frac{A}{\\\\bar{B}})=?$",
    option: [
        "$\\\\frac{1}{4}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{3}{4}$",
        "$\\\\frac{3}{8}$"
    ],
    answer: "$\\\\frac{3}{4}$"
},

{
    question: "If $\\\\Delta=\\\\begin{vmatrix}a_{11}&a_{12}&a_{13}\\\\\\\\a_{21}&a_{22}&a_{23}\\\\\\\\a_{31}&a_{32}&a_{33}\\\\end{vmatrix}$ and $a_{ij}$ the cofactor of $A_{ij}$ be then $\\\\Delta$ the value of is :-",
    option: [
        "$a_{11}A_{31}+a_{12}A_{32}+a_{13}A_{33}$",
        "$a_{11}A_{11}+a_{12}A_{21}+a_{13}A_{31}$",
        "$a_{21}A_{11}+a_{22}A_{12}+a_{23}A_{13}$",
        "$a_{11}A_{11}+a_{21}A_{21}+a_{31}A_{31}$"
    ],
    answer: "$a_{11}A_{11}+a_{12}A_{21}+a_{13}A_{31}$"
},

{
    question: "$\\\\left(\\\\frac{1}{x}\\\\right)^{2x^2}$ of maximum value will be -",
    option: [
        "$1$",
        "$e$",
        "$e^{1/e}$",
        "None of these"
    ],
    answer: "$e^{1/e}$"
},

{
    question: "If $y=x^3$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$3x^2$",
        "$6x$",
        "6",
        "0"
    ],
    answer: "$3x^2$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}=\\\\frac{y}{x}$ has the solution ?",
    option: [
        "$y=\\\\frac{k}{x}$",
        "$y=kx$",
        "$y=k\\\\log x$",
        "$\\\\log y=kx$"
    ],
    answer: "$y=kx$"
},

{
    question: "origin from point $(-3,4,5)$ of distance is -",
    option: [
        "$50$",
        "$5\\\\sqrt{2}$",
        "$6$",
        "None of these"
    ],
    answer: "$5\\\\sqrt{2}$"
},

{
    question: "If plane $2x-y+z=0$ line $\\\\frac{2x-1}{2}=\\\\frac{2-y}{2}=\\\\frac{z+1}{2}$ of parallel be then $a$ the value of is-",
    option: [
        "$-4$",
        "$-2$",
        "$4$",
        "$2$"
    ],
    answer: "$-4$"
},

{
    question: "If $a,b,c$ arithmetic progression in are then $\\\\begin{vmatrix}x+1&x+2&x+a\\\\\\\\x+2&x+3&x+b\\\\\\\\x+3&x+4&x+c\\\\end{vmatrix}=?$",
    option: [
        "3",
        "-3",
        "0",
        "None of these"
    ],
    answer: "0"
},

{
    question: "origin from point $(-3,4,5)$ which of the following is the distance ?",
    option: [
        "$25\\\\sqrt{2}$",
        "$5\\\\sqrt{2}$",
        "$10\\\\sqrt{2}$",
        "None of these"
    ],
    answer: "$5\\\\sqrt{2}$"
},

{
    question: "$\\\\sin\\\\left[\\\\frac{\\\\pi}{3}-\\\\sin^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)\\\\right]$ is equal to :",
    option: [
        "$\\\\frac{1}{2}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{1}{4}$",
        "1"
    ],
    answer: "1"
},

{
    question: "$\\\\vec{a}\\\\cdot\\\\vec{a}=?$",
    option: [
        "$0$",
        "$1$",
        "$|\\\\vec{a}|^2$",
        "$|\\\\vec{a}|$"
    ],
    answer: "$|\\\\vec{a}|^2$"
},

{
    question: "$\\\\begin{vmatrix}1&x&x^2\\\\\\\\1&y&y^2\\\\\\\\1&z&z^2\\\\end{vmatrix}=?$",
    option: [
        "$(x-y)(y+z)(z+x)$",
        "$(x+y)(y-z)(z-x)$",
        "$(x-y)(y-z)(z-x)$",
        "$(x-y)(y-z)(z+x)$"
    ],
    answer: "$(x-y)(y-z)(z-x)$"
},

{
    question: "curve $y=x\\\\sin x$ and $x$-axis between bounded by $x=0$ from $x=2\\\\pi$ up to is the area :",
    option: [
        "$2\\\\pi$",
        "$3\\\\pi$",
        "$4\\\\pi$",
        "None of these"
    ],
    answer: "$4\\\\pi$"
},

{
    question: "$a$ of that value for which $f(x)=a\\\\sin x+\\\\frac{1}{3}\\\\sin3x$ of $x=\\\\frac{\\\\pi}{3}$ on extreme value is, following is -",
    option: [
        "$1$",
        "$-1$",
        "$0$",
        "$2$"
    ],
    answer: "$2$"
},

{
    question: "function $f(x)=x^3-27x+8$ increasing function be then",
    option: [
        "$|x|<3$",
        "$|x|>3$",
        "$-3<x<3$",
        "None of these"
    ],
    answer: "$|x|>3$"
},

{
    question: "In general linear programming, the objective function is?",
    option: [
        "linear function",
        "non-linear function",
        "constant function",
        "None of these"
    ],
    answer: "constant function"
},

{
    question: "curve $y^2=4x$, $y$-axis and line $y=3$ between bounded regionphl is :",
    option: [
        "2 square iofii",
        "$\\\\frac{9}{4}$ square iofii",
        "$6\\\\sqrt{3}$ square iofii",
        "None of these"
    ],
    answer: "$\\\\frac{9}{4}$ square iofii"
},

{
    question: "following equations in from which a particular solution of the equation $y=x$ is?",
    option: [
        "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=x$",
        "$\\\\frac{d^2y}{dx^2}+x\\\\frac{dy}{dx}+xy=x$",
        "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=0$",
        "$\\\\frac{d^2y}{dx^2}+x\\\\frac{dy}{dx}+xy=0$"
    ],
    answer: "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=0$"
},

{
    question: "If $\\\\int_0^a f(x)\\\\,dx=10$, then $\\\\int_0^a f(a-x)\\\\,dx$ the value of is ?",
    option: [
        "$\\\\frac{5}{2}$",
        "10",
        "6",
        "5"
    ],
    answer: "10"
},

{
    question: "point $(0,-1,3)$ from plane $2x+y-2z+1=0$ on length of perpendicular is -",
    option: [
        "$0$",
        "$2\\\\sqrt{3}$",
        "$\\\\frac{2}{3}$",
        "$2$"
    ],
    answer: "$2$"
},

{
    question: "differential equation $(1-y^2)\\\\frac{dy}{dx}+yx=ay\\\\;(-1<y<1)$ of integrating factor is :-",
    option: [
        "$\\\\frac{1}{y^2-1}$",
        "$\\\\frac{1}{\\\\sqrt{y^2-1}}$",
        "$\\\\frac{1}{1-y^2}$",
        "$\\\\frac{1}{\\\\sqrt{1-y^2}}$"
    ],
    answer: "$\\\\frac{1}{\\\\sqrt{1-y^2}}$"
},

{
    question: "If $P(A)=\\\\frac{1}{2}$, $P(B)=0$ then $P(\\\\frac{A}{B})$ is -",
    option: [
        "0",
        "1",
        "$\\\\frac{1}{2}$",
        "$\\\\infty$"
    ],
    answer: "$\\\\infty$"
},

{
    question: "If $f:A\\\\to R$ where $A=\\\\{-1,0,1,2,3\\\\}$, $R=\\\\{\\\\text{real numbers}\\\\}$ and $f(x)=x^2$ then what type of function is a function?",
    option: [
        "one-one onto",
        "one-one into",
        "many-one onto",
        "many-one into"
    ],
    answer: "many-one into"
},

{
    question: "$\\\\sin^{-1}x+\\\\cos^{-1}x$ = ?",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{4}$",
        "$2\\\\pi$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "If any simple line of direction ratios $a,b,c$ is then thatof direction cosines will be-",
    option: [
        "$\\\\frac{a}{\\\\sqrt{a^2}},\\\\frac{b}{\\\\sqrt{a^2}},\\\\frac{c}{\\\\sqrt{a^2}}$",
        "$\\\\frac{1}{\\\\sqrt{\\\\sum a^2}},\\\\frac{1}{\\\\sqrt{\\\\sum a^2}},\\\\frac{1}{\\\\sqrt{\\\\sum a^2}}$",
        "$\\\\frac{1}{a},\\\\frac{1}{b},\\\\frac{1}{c}$",
        "$\\\\frac{a}{\\\\sqrt{\\\\sum a^2}},\\\\frac{b}{\\\\sqrt{\\\\sum b^2}},\\\\frac{c}{\\\\sqrt{\\\\sum c^2}}$"
    ],
    answer: "$\\\\frac{a}{\\\\sqrt{a^2}},\\\\frac{b}{\\\\sqrt{a^2}},\\\\frac{c}{\\\\sqrt{a^2}}$"
},

{
    question: "If $A=\\\\{1,2,3\\\\}$, $B=\\\\{5,6,7\\\\}$ and $f:A\\\\to B$ is a function such that $f(x)=x+4$, then what type of function is f?",
    option: [
        "many-one onto",
        "? function",
        "one-one onto",
        "into"
    ],
    answer: "one-one onto"
},

{
    question: "If vector $2\\\\hat{i}+\\\\hat{j}-\\\\hat{k}$, $\\\\hat{i}-4\\\\hat{j}-t\\\\hat{k}$ perpendicular to is, then $t$ the value of is ?",
    option: [
        "$0$",
        "$-1$",
        "$2$",
        "$3$"
    ],
    answer: "$2$"
},

{
    question: "If $y=a\\\\log|x|+bx^2+x$ of $x=-1$ and $x=2$ on extreme value is, then -",
    option: [
        "$a=2,b=-1$",
        "$a=2,b=-\\\\frac{1}{2}$",
        "$a=-2,b=\\\\frac{1}{2}$",
        "None of these"
    ],
    answer: "$a=2,b=-\\\\frac{1}{2}$"
},

{
    question: "If $\\\\left|\\\\begin{array}{cc}x&8\\\\\\\\3&3\\\\end{array}\\\\right|=0$, $x$ the value of is :",
    option: [
        "3",
        "8",
        "24",
        "10"
    ],
    answer: "8"
},

{
    question: "the point at which curve $y=x^2+5$ of tangent, line $x+3y=2$ of perpendicular is, following is -",
    option: [
        "$(6,1),(-1,4)$",
        "$(1,6),(1,4)$",
        "$(6,1),(4,1)$",
        "$(1,6),(-1,4)$"
    ],
    answer: "$(6,1),(-1,4)$"
},

{
    question: "$\\\\begin{vmatrix}1&2&3\\\\\\\\2&4&6\\\\\\\\1&1&2\\\\end{vmatrix}=?$",
    option: [
        "5",
        "17",
        "8",
        "0"
    ],
    answer: "0"
},

{
    question: "If $P(x)=\\\\frac{x}{15}$, $x=1,2,3,4,5=0$ otherwise, then $P(x=1\\\\text{ or }2)$ is-",
    option: [
        "$\\\\frac{1}{15}$",
        "$\\\\frac{2}{15}$",
        "$\\\\frac{1}{5}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{5}$"
},

{
    question: "If $f(x)=x^5-5x^4+5x^3-10$ the value of $x=q$ on minimum and $x=p$ on maximum is, then $(p,q)=?$",
    option: [
        "$(0,1)$",
        "$(1,3)$",
        "$(1,0)$",
        "None of these"
    ],
    answer: "$(1,3)$"
},

{
    question: "If $A = \\\\begin{bmatrix}1&1&1\\\\\\\\1&1&1\\\\\\\\1&1&1\\\\end{bmatrix}$ then $A^2 = ?$",
    option: [
        "$2A$",
        "$3A$",
        "$27A$",
        "None of these"
    ],
    answer: "$3A$"
},

{
    question: "$2\\\\tan^{-1}x$ = ?",
    option: [
        "$\\\\sin^{-1}\\\\frac{2x}{1+x^2}$",
        "$\\\\sin^{-1}\\\\frac{2x}{1-x^2}$",
        "$\\\\sin^{-1}\\\\frac{1-x^2}{1+x^2}$",
        "$\\\\sin^{-1}\\\\frac{1+x^2}{1-x^2}$"
    ],
    answer: "$\\\\sin^{-1}\\\\frac{2x}{1+x^2}$"
},

{
    question: "If $y=x^2+3x-4$ then given curve of point $(1,1)$ on normal of slope is -",
    option: [
        "$5$",
        "$8$",
        "$-\\\\frac{1}{5}$",
        "$-\\\\frac{1}{8}$"
    ],
    answer: "$-\\\\frac{1}{5}$"
},

{
    question: "$\\\\begin{vmatrix}1&a&b+c\\\\\\\\1&b&c+a\\\\\\\\1&c&a+b\\\\end{vmatrix}=?$",
    option: [
        "1",
        "-1",
        "0",
        "$a+b+c$"
    ],
    answer: "0"
},

{
    question: "Let $A=\\\\{1,2,3\\\\}$ then $(1,2)$ to including how many equivalence relations $A$ on defined be can are?",
    option: [
        "3",
        "1",
        "2",
        "4"
    ],
    answer: "2"
},

{
    question: "$A=\\\\begin{bmatrix}1&-1\\\\\\\\-1&1\\\\end{bmatrix}\\\\Rightarrow A^2=$",
    option: [
        "$2A$",
        "$A$",
        "$\\\\frac{1}{2}A$",
        "$4A$"
    ],
    answer: "$2A$"
},

{
    question: "circle $x^2+y^2=4$ and line $x+y=2$ from bounded by smaller part is the area :",
    option: [
        "$2(\\\\pi-2)$",
        "$\\\\pi-2$",
        "$2\\\\pi-1$",
        "$2(\\\\pi+2)$"
    ],
    answer: "$\\\\pi-2$"
},

{
    question: "a 2 meter high man, a light pole from away from 5 m /minute of moves with velocity /  lamp post height 6 m is /  man shadow of of rate of increase of length following will be -",
    option: [
        "$\\\\frac{2}{5}\\\\,\\\\text{m /sec.}$",
        "$\\\\frac{5}{2}\\\\,\\\\text{m /sec.}$",
        "$10\\\\,\\\\text{m /sec.}$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "parabola $y^2=4ax$ its axis and lines $x=a$, $x=2a$ from bounded region is the area :",
    option: [
        "$\\\\frac{4}{3}(2\\\\sqrt{2}-1)a^2$",
        "$\\\\frac{2}{3}(2\\\\sqrt{2}+1)a^2$",
        "$\\\\frac{4}{3}(2\\\\sqrt{2}+1)a^2$",
        "$\\\\frac{4}{3}(2\\\\sqrt{2}-1)a$"
    ],
    answer: "$\\\\frac{4}{3}(2\\\\sqrt{2}-1)a^2$"
},

{
    question: "$\\\\int_{-\\\\pi/2}^{\\\\pi/2}\\\\sin^7x\\\\,dx = ?$",
    option: [
        "1",
        "-1",
        "0",
        "None of these"
    ],
    answer: "0"
},

{
    question: "If $\\\\vec a,\\\\vec b,\\\\vec c$ three non-zero, non-coplanar vector and $x,y,z$ three scalar are such that $x\\\\vec a+y\\\\vec b+z\\\\vec c=\\\\vec 0$ then following in which true will be?",
    option: [
        "$x=0,y=0,z\\\\neq0$",
        "$x=0,y\\\\neq0,z\\\\neq0$",
        "$x=0,y=0,z=0$",
        "$x\\\\neq0,y\\\\neq0,z\\\\neq0$"
    ],
    answer: "$x=0,y=0,z=0$"
},

{
    question: "a line $(2,-1,3)$ from passes is and its direction ratios $3,-1,2$ are /  this line of will be the equations / ",
    option: [
        "$\\\\frac{x+2}{3}=\\\\frac{y-1}{-1}=\\\\frac{z+3}{2}$",
        "$\\\\frac{x-2}{3}=\\\\frac{y+1}{-1}=\\\\frac{z-3}{2}$",
        "$\\\\frac{x-3}{2}=\\\\frac{y+1}{-1}=\\\\frac{z-2}{3}$",
        "$\\\\frac{x-3}{2}=\\\\frac{y+1}{-1}=\\\\frac{z-2}{3}$"
    ],
    answer: "$\\\\frac{x-2}{3}=\\\\frac{y+1}{-1}=\\\\frac{z-3}{2}$"
},

{
    question: "$\\\\begin{vmatrix}1&1&1\\\\\\\\a&b&c\\\\\\\\a^3&b^3&c^3\\\\end{vmatrix}=?$",
    option: [
        "$(a-b)(b-c)(c-a)$",
        "$-(a-b)(b-c)(c-a)$",
        "$abc(a-b)(b-c)(c-a)$",
        "$(a-b)(b-c)(c-a)(a+b+c)$"
    ],
    answer: "$(a-b)(b-c)(c-a)(a+b+c)$"
},

{
    question: "If $\\\\vec{a}+\\\\vec{b}+\\\\vec{c}=0$, $|\\\\vec{a}|=3$, $|\\\\vec{b}|=4$, $|\\\\vec{c}|=5$ then $\\\\vec{a}\\\\cdot\\\\vec{b}+\\\\vec{b}\\\\cdot\\\\vec{c}+\\\\vec{c}\\\\cdot\\\\vec{a}=$",
    option: [
        "$-5$",
        "$47$",
        "$0$",
        "$-25$"
    ],
    answer: "$-25$"
},

{
    question: "If $A=\\\\begin{bmatrix}3&6\\\\\\\\5&-4\\\\end{bmatrix},B=\\\\begin{bmatrix}7&8\\\\\\\\5&6\\\\end{bmatrix}$ then $2A+3B=$ matrix",
    option: [
        "$\\\\begin{bmatrix}27&24\\\\\\\\22&10\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}27&36\\\\\\\\35&10\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}27&36\\\\\\\\25&15\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}27&36\\\\\\\\25&10\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}27&36\\\\\\\\25&10\\\\end{bmatrix}$"
},

{
    question: "$\\\\int_0^{\\\\pi/4}(\\\\sqrt{\\\\tan x}+\\\\sqrt{\\\\cot x})\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{\\\\sqrt{2}}$",
        "$\\\\frac{\\\\pi}{2\\\\sqrt{2}}$",
        "$\\\\frac{\\\\pi\\\\sqrt{2}}{4}$",
        "None of these"
    ],
    answer: "$\\\\frac{\\\\pi}{\\\\sqrt{2}}$"
},

{
    question: "two simple lines of direction ratios $l,m,n$ and $l_1,m_1,n_1$ are /  lineeN a-other of equaltr will be If -",
    option: [
        "$ll_1+mm_1+nn_1=0$",
        "$\\\\frac{l}{l_1}=\\\\frac{m}{m_1}=\\\\frac{n}{n_1}$",
        "$\\\\frac{l}{l_1}+\\\\frac{m}{m_1}+\\\\frac{n}{n_1}=0$",
        "$ll_1+mm_1+nn_1=1$"
    ],
    answer: "$\\\\frac{l}{l_1}=\\\\frac{m}{m_1}=\\\\frac{n}{n_1}$"
},

{
    question: "$x$ with respect to $\\\\cos\\\\sqrt{x}$ derivative of is ?",
    option: [
        "$\\\\frac{1}{\\\\sqrt{x}}\\\\sin\\\\sqrt{x}$",
        "$\\\\frac{1}{2\\\\sqrt{x}}\\\\sin\\\\sqrt{x}$",
        "$-\\\\frac{1}{2\\\\sqrt{x}}\\\\sin\\\\sqrt{x}$",
        "$\\\\sin\\\\sqrt{x}$"
    ],
    answer: "$-\\\\frac{1}{2\\\\sqrt{x}}\\\\sin\\\\sqrt{x}$"
},

{
    question: "$y$-axis, $y=\\\\cos x$ and $y=\\\\sin x$, $0\\\\leq x\\\\leq\\\\frac{\\\\pi}{2}$ from bounded region is the area :",
    option: [
        "$2(\\\\sqrt{2}-1)$",
        "$\\\\sqrt{2}-1$",
        "$\\\\sqrt{2}+1$",
        "$\\\\sqrt{2}$"
    ],
    answer: "$2(\\\\sqrt{2}-1)$"
},

{
    question: "If $f(-x)=-f(x)$ then $\\\\int_{-a}^{a}f(x)dx$ the value of which of the following will be ?",
    option: [
        "$f(a)$",
        "$2f(a)$",
        "0",
        "None of these"
    ],
    answer: "0"
},

{
    question: "If $\\\\overrightarrow{AO}+\\\\overrightarrow{OB}=\\\\overrightarrow{BO}+\\\\overrightarrow{OC}$ then A, B, C are -",
    option: [
        "coplanar",
        "collinear",
        "non-collinear",
        "non-coplanar"
    ],
    answer: "collinear"
},

{
    question: "If any equalplane of equation $2x + 5y - 6z + 3 = 0$ is then this equalplane of parallel which equalplane of the equation is?",
    option: [
        "$3x + 5y - 6z + 3 = 0$",
        "$2x - 5y - 6z + 3 = 0$",
        "$2x + 5y - 6z + k = 0$",
        "None of these"
    ],
    answer: "$2x + 5y - 6z + k = 0$"
},

{
    question: "two dice of throw in getting a sum of probability is :-",
    option: [
        "$\\\\frac{1}{6}$",
        "$\\\\frac{5}{2}$",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{5}{36}$"
    ],
    answer: "$\\\\frac{1}{6}$"
},

{
    question: "differential equation $\\\\left(\\\\frac{dy}{dx}\\\\right)^2-x\\\\frac{dy}{dx}+y=0$ of a is the solution ?",
    option: [
        "$y=2$",
        "$y=2x$",
        "$y=2x-4$",
        "$y=2x^2-4$"
    ],
    answer: "$y=2x-4$"
},

{
    question: "function $f(x)=\\\\frac{1}{3}x^3+\\\\frac{1}{2}x^2-6x+8$ following interval in haasis the value -",
    option: [
        "$-3<x<2$",
        "$x<-3$",
        "anywhere also not",
        "None of these"
    ],
    answer: "$-3<x<2$"
},

{
    question: "$\\\\hat{i}\\\\times\\\\hat{j}=?$",
    option: [
        "$\\\\hat{k}$",
        "$-\\\\hat{k}$",
        "$\\\\hat{i}$",
        "$-\\\\hat{i}$"
    ],
    answer: "$\\\\hat{k}$"
},

{
    question: "If equation group $x+py=0,\\\\ y+pz=0,\\\\ z+px=0$ of indeterminate solution are, then $p$ the value of is :-",
    option: [
        "1",
        "0",
        "-1",
        "None of these"
    ],
    answer: "1"
},

{
    question: "$\\\\frac{d(e^{-x})}{dx}=?$",
    option: [
        "$e^{-x}$",
        "$-e^{-x}$",
        "$\\\\frac{1}{e^{-x}}$",
        "$-\\\\frac{1}{e^{-x}}$"
    ],
    answer: "$-e^{-x}$"
},

{
    question: "$\\\\begin{vmatrix}a-b&b-c&c-a\\\\\\\\b-c&c-a&a-b\\\\\\\\c-a&a-b&b-c\\\\end{vmatrix}=?$",
    option: [
        "$a+b+c$",
        "$3(a+b+c)$",
        "$3abc$",
        "0"
    ],
    answer: "0"
},

{
    question: "If $A=\\\\begin{bmatrix}\\\\alpha & 0\\\\\\\\1 & 1\\\\end{bmatrix}$ and $B=\\\\begin{bmatrix}1 & 0\\\\\\\\5 & 1\\\\end{bmatrix}$ then $A^2=B$ true is",
    option: [
        "$\\\\alpha=1$ for",
        "$\\\\alpha$ of toii ofmt not",
        "$\\\\alpha=4$ for",
        "$\\\\alpha=-4$ for"
    ],
    answer: "$\\\\alpha$ of toii ofmt not"
},

{
    question: "If 7 and 2 equation $\\\\begin{vmatrix}x&3&7\\\\\\\\2&x&2\\\\\\\\7&6&x\\\\end{vmatrix}=0$ of two root are, then third root will be?",
    option: [
        "$\\\\frac{1}{2}$",
        "-9",
        "14",
        "None of these"
    ],
    answer: "-9"
},

{
    question: "a cubical die to 6 times is thrown /  2 and 4 each of exactly 3, 3 times appearing of probability is :-",
    option: [
        "$\\\\frac{5}{11664}$",
        "$\\\\frac{1}{46656}$",
        "$\\\\frac{1}{5184}$",
        "None of these"
    ],
    answer: "$\\\\frac{5}{11664}$"
},

{
    question: "If A and B two events this profr of are that $P(A)=\\\\frac{1}{2}$, $P(B)=\\\\frac{7}{12}$ and $P(\\\\bar{A} \\\\cup \\\\bar{B})=\\\\frac{1}{4}$ then A and B are -",
    option: [
        "independent",
        "mutually exclusive",
        "(a) and (b) twonoN",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "minimum ofjie $Z = x + y$ while $3x + 2y \\\\leq 12$, $x + 3y \\\\geq 11$ and $x \\\\geq 0, y \\\\geq 0$ are, then $x$ and $y$ of is the valueN -",
    option: [
        "$\\\\frac{18}{7},\\\\frac{2}{7}$",
        "$\\\\frac{7}{2},\\\\frac{3}{4}$",
        "$\\\\frac{3}{2},\\\\frac{15}{4}$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "If $\\\\sin^{-1}(1-x)-2\\\\sin^{-1}x=\\\\frac{\\\\pi}{2}$ then $x$ the value of is :",
    option: [
        "0",
        "0, -12",
        "0, 12",
        "toii not"
    ],
    answer: "0"
},

{
    question: "$\\\\sin(\\\\tan^{-1}x),\\\\ |x|<1$ is equal to :",
    option: [
        "$\\\\frac{x}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{1}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{1}{\\\\sqrt{1+x^2}}$",
        "$\\\\frac{x}{\\\\sqrt{1+x^2}}$"
    ],
    answer: "$\\\\frac{x}{\\\\sqrt{1+x^2}}$"
},

{
    question: "If A and B two arbitrary events are then -",
    option: [
        "$P(A \\\\cap B) \\\\geq P(A)+P(B)$",
        "$P(A \\\\cap B) \\\\leq P(A)+P(B)$",
        "$P(A \\\\cap B)=P(A)+P(B)$",
        "$P(A \\\\cap B)=P(A)-P(B)$"
    ],
    answer: "$P(A \\\\cap B) \\\\leq P(A)+P(B)$"
},

{
    question: "If $y=e^{3\\\\log x}$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$3x^2$",
        "$2\\\\log x$",
        "$\\\\frac{3y}{x}$",
        "$3xy$"
    ],
    answer: "$3x^2$"
},

{
    question: "any simple line of equation $\\\\frac{x-1}{2}=\\\\frac{y+2}{3}=\\\\frac{z+1}{4}$ is /  line of direction cosines will be -",
    option: [
        "$2,3,4$",
        "$\\\\frac{4}{9},\\\\frac{1}{3},\\\\frac{2}{9}$",
        "$\\\\frac{2}{\\\\sqrt{29}},\\\\frac{3}{\\\\sqrt{29}},\\\\frac{4}{\\\\sqrt{29}}$",
        "$1,-2,-1$"
    ],
    answer: "$\\\\frac{2}{\\\\sqrt{29}},\\\\frac{3}{\\\\sqrt{29}},\\\\frac{4}{\\\\sqrt{29}}$"
},

{
    question: "$\\\\begin{vmatrix}1&1+p&1+p+q\\\\\\\\2&3+2p&1+3p+2q\\\\\\\\3&6+3p&1+6p+3q\\\\end{vmatrix}=?$",
    option: [
        "0",
        "1",
        "-1",
        "None of these"
    ],
    answer: "1"
},

{
    question: "$\\\\begin{vmatrix}10&2\\\\\\\\35&7\\\\end{vmatrix}=?$",
    option: [
        "4",
        "0",
        "3",
        "6"
    ],
    answer: "0"
},

{
    question: "If $f:R\\\\to R$ satisfies $f(x+y)=f(x)+f(y)$ all $x,y\\\\in R$ for $f(1)=7$, then $\\\\sum_{r=1}^{n}f(r)$ is:",
    option: [
        "$\\\\frac{7n}{2}$",
        "$\\\\frac{7(n+1)}{2}$",
        "$7n(n+1)$",
        "$\\\\frac{7n(n+1)}{2}$"
    ],
    answer: "$\\\\frac{7n(n+1)}{2}$"
},

{
    question: "curve $y=\\\\sin x$, $x$-axis and lines $x=0$, $x=2\\\\pi$ from bounded region is the area :",
    option: [
        "0",
        "2",
        "4",
        "1"
    ],
    answer: "4"
},

{
    question: "differential equation $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^2-\\\\left(y+\\\\frac{dy}{dx}\\\\right)^{1/2}$ of degree and order which of the following is ?",
    option: [
        "4, 2",
        "2, 4",
        "3, 4",
        "4, 3"
    ],
    answer: "4, 2"
},

{
    question: "$\\\\int \\\\tan x\\\\,dx = ?$",
    option: [
        "$\\\\log \\\\cos x + c$",
        "$\\\\log \\\\sec x + c$",
        "$\\\\log \\\\cot x + c$",
        "None of these"
    ],
    answer: "$\\\\log \\\\sec x + c$"
},

{
    question: "If $A=\\\\begin{bmatrix}9&10&11\\\\\\\\12&13&14\\\\end{bmatrix}, B=\\\\begin{bmatrix}11&10&9\\\\\\\\8&7&6\\\\end{bmatrix}$ then $2A+2B=$",
    option: [
        "$\\\\begin{bmatrix}20&20&20\\\\\\\\20&20&20\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}40&40&40\\\\\\\\40&40&40\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}20&20&20\\\\\\\\40&40&40\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}40&40&40\\\\\\\\20&20&20\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}40&40&40\\\\\\\\40&40&40\\\\end{bmatrix}$"
},

{
    question: "function $f(x)=\\\\sqrt{(x-1)(3-x)}$ of domain is:",
    option: [
        "$(1,3)$",
        "$(-2,2)$",
        "$(0,1)$",
        "None of these"
    ],
    answer: "$(1,3)$"
},

{
    question: "If $y=a^x$ then $\\\\frac{d^2y}{dx^2}=?$",
    option: [
        "$a^x\\\\log a$",
        "$a^x(\\\\log a)^2$",
        "$(a^x)^2\\\\log a$",
        "None of these"
    ],
    answer: "$a^x(\\\\log a)^2$"
},

{
    question: "If $A=\\\\begin{bmatrix}a & b\\\\\\\\c & d\\\\end{bmatrix}$ then $A^2$ equal will be",
    option: [
        "$\\\\begin{bmatrix}a^2 & b^2\\\\\\\\c^2 & d^2\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}b^2+bc & ab+bd\\\\\\\\ac+dc & dc+d^2\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}a^3 & b^3\\\\\\\\c^3 & d^3\\\\end{bmatrix}$",
        "toii not"
    ],
    answer: "$\\\\begin{bmatrix}b^2+bc & ab+bd\\\\\\\\ac+dc & dc+d^2\\\\end{bmatrix}$"
},

{
    question: "plane $\\\\vec{r}\\\\cdot\\\\hat{n}=P_1$ and $\\\\vec{r}\\\\cdot\\\\hat{n}=P_2$ between of distance is ?",
    option: [
        "$P_1-P_2$",
        "$|P_1-P_2|$",
        "$\\\\frac{|P_1-P_2|}{2}$",
        "None of these"
    ],
    answer: "$|P_1-P_2|$"
},

{
    question: "function $y=f(x)$ of graph line $x=2$ of symmetric be, then",
    option: [
        "$f(x)=f(-x)$",
        "$f(2+x)=f(2-x)$",
        "$f(x+2)=f(x-2)$",
        "$f(x)=-f(-x)$"
    ],
    answer: "$f(2+x)=f(2-x)$"
},

{
    question: "If $\\\\sin^{-1}x+\\\\sin^{-1}y=\\\\frac{2\\\\pi}{3}$, then $\\\\cos^{-1}x+\\\\cos^{-1}y$ = ?",
    option: [
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{7}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "$\\\\sin^{-1}\\\\left[\\\\log_3\\\\left(\\\\frac{x}{3}\\\\right)\\\\right]$ of domain:",
    option: [
        "$[1,9]$",
        "$[-9,-1]$",
        "$[-1,9]$",
        "$[-9,1]$"
    ],
    answer: "$[1,9]$"
},

{
    question: "binomial distribution in $P(2)$ the value of while $p=\\\\frac{1}{6}$ and $n=5$ is-",
    option: [
        "$\\\\frac{3125}{7776}$",
        "$\\\\frac{250}{7776}$",
        "$\\\\frac{1250}{7776}$",
        "$\\\\frac{25}{7776}$"
    ],
    answer: "$\\\\frac{1250}{7776}$"
},

{
    question: "If $A=\\\\begin{bmatrix}i & 0\\\\\\\\0 & i\\\\end{bmatrix}$ then $A^2=$",
    option: [
        "$\\\\begin{bmatrix}1 & 0\\\\\\\\0 & -1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1 & 0\\\\\\\\0 & -1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1 & 0\\\\\\\\0 & 1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1 & 0\\\\\\\\0 & 1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}-1 & 0\\\\\\\\0 & -1\\\\end{bmatrix}$"
},

{
    question: "cube of any two diagonals between of angle of cosine is -",
    option: [
        "$\\\\frac{1}{3}$",
        "$\\\\frac{1}{2}$",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{\\\\sqrt{3}}$"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}=e^{x+y}$ of general solution is :-",
    option: [
        "$e^x+e^{-y}=C$",
        "$e^x+e^y=C$",
        "$e^{-x}+e^y=C$",
        "$e^{-x}+e^{-y}=C$"
    ],
    answer: "$e^x+e^{-y}=C$"
},

{
    question: "two dice to is thrown then a trick obtained krby of probability is ?",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{5}{6}$",
        "$\\\\frac{5}{36}$"
    ],
    answer: "$\\\\frac{1}{6}$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}=e^{x+y}$ has the solution :-",
    option: [
        "$e^x+e^{-y}+k=0$",
        "$e^{2x}=ke^y$",
        "$e^x=ke^{2y}$",
        "$e^x=ke^y$"
    ],
    answer: "$e^x+e^{-y}+k=0$"
},

{
    question: "planes $2x-y+z=6$ and $x+y+2z=7$ between angle is -",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{2}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "origin from gujrby having lines of onivaar of differential equation is ?",
    option: [
        "$x\\\\frac{dy}{dx}=y$",
        "$y\\\\frac{dy}{dx}=x$",
        "$\\\\frac{dy}{dx}=y$",
        "$\\\\frac{dy}{dx}=x$"
    ],
    answer: "$x\\\\frac{dy}{dx}=y$"
},

{
    question: "$\\\\frac{d}{dx}\\\\log 10^x=?$",
    option: [
        "$\\\\frac{1}{x}$",
        "$\\\\frac{1}{x}\\\\cdot\\\\log 10$",
        "$\\\\frac{1}{x\\\\log 10}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{x}\\\\cdot\\\\log 10$"
},

{
    question: "in the first quadrant circle $x^2+y^2=4$ lines $x=0$, $x=2$ from bounded region is the area :",
    option: [
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\pi$"
},

{
    question: "$\\\\begin{vmatrix}1^2&2^2&3^2\\\\\\\\2^2&3^2&4^2\\\\\\\\3^2&4^2&5^2\\\\end{vmatrix}=?$",
    option: [
        "8",
        "-8",
        "16",
        "142"
    ],
    answer: "-8"
},

{
    question: "differential equation $xdy+ydx=0$ has the solution :-",
    option: [
        "$x+y=c$",
        "$xy=c$",
        "$\\\\log(x+y)=c$",
        "None of these"
    ],
    answer: "$xy=c$"
},

{
    question: "curve $y=x|x|$, $x$-axis and ordinates $x=-1$ and $x=1$ from bounded region is the area :",
    option: [
        "0",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{4}{3}$"
    ],
    answer: "$\\\\frac{2}{3}$"
},

{
    question: "$\\\\operatorname{cosec}^{-1}(-2)$ principal value is :",
    option: [
        "$-\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{2\\\\pi}{3}$",
        "$-\\\\frac{\\\\pi}{6}$"
    ],
    answer: "$-\\\\frac{\\\\pi}{6}$"
},

{
    question: "If line $\\\\frac{x-4}{1}=\\\\frac{y-2}{1}=\\\\frac{z-k}{2}$ plane $2x-4y+z=7$ in located be then $k$ the value of is-",
    option: [
        "$-7$",
        "$7$",
        "$4$",
        "$-4$"
    ],
    answer: "$7$"
},

{
    question: "If $\\\\frac{1}{a}+\\\\frac{1}{b}+\\\\frac{1}{c}=0$, then $\\\\begin{vmatrix}1+a&1&1\\\\\\\\1&1+b&1\\\\\\\\1&1&1+c\\\\end{vmatrix}=?$",
    option: [
        "0",
        "$abc$",
        "$-abc$",
        "$a+b+c$"
    ],
    answer: "$abc$"
},

{
    question: "equation $\\\\vec{r}=k_1\\\\hat{i}+k_2\\\\hat{j}$, plane to represents ?",
    option: [
        "$x=0$",
        "$z=0$",
        "$y=0$",
        "None of these"
    ],
    answer: "$z=0$"
},

{
    question: "$\\\\begin{vmatrix}1&x&x^2\\\\\\\\1&y&y^2\\\\\\\\1&z&z^2\\\\end{vmatrix} = ?$",
    option: [
        "0",
        "$(x-y)(y-z)(z-x)$",
        "$(y-x)(y-z)(z-x)$",
        "None of these"
    ],
    answer: "$(x-y)(y-z)(z-x)$"
},

{
    question: "$\\\\vec{a}=-5\\\\hat{j}+\\\\hat{k}$ of $\\\\vec{b}=-4\\\\hat{j}+7\\\\hat{k}$ on projection the value of which of the following will be?",
    option: [
        "$27$",
        "$47$",
        "$7$",
        "None of these"
    ],
    answer: "$27$"
},

{
    question: "vector $2\\\\hat{i}-7\\\\hat{j}+3\\\\hat{k}$ of magnitude is ?",
    option: [
        "$\\\\sqrt{12}$",
        "$\\\\sqrt{50}$",
        "$\\\\sqrt{60}$",
        "$2\\\\sqrt{15}$"
    ],
    answer: "$\\\\sqrt{60}$"
},

{
    question: "curve $y^2=4x$ and $y=2x$ area bounded between is :",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{1}{4}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "$\\\\frac{d(e^{\\\\sin\\\\sqrt{x}})}{dx}=?$",
    option: [
        "$e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}$",
        "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}}{2\\\\sqrt{x}}$",
        "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}}{2\\\\sqrt{x}}$",
        "$e^{\\\\sin\\\\sqrt{x}}$"
    ],
    answer: "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}}{2\\\\sqrt{x}}$"
},

{
    question: "If $y=e^{\\\\sin\\\\sqrt{x}}$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "$e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}$",
        "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}}{2\\\\sqrt{x}}$",
        "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}}{2\\\\sqrt{x}}$",
        "None of these"
    ],
    answer: "$\\\\frac{e^{\\\\sin\\\\sqrt{x}}\\\\cdot\\\\cos\\\\sqrt{x}}{2\\\\sqrt{x}}$"
},

{
    question: "$\\\\tan^{-1}(1)+\\\\cot^{-1}\\\\left(\\\\frac{1}{2}\\\\right)+\\\\cot^{-1}\\\\left(\\\\frac{1}{3}\\\\right)$ the value of is :",
    option: [
        "0",
        "1",
        "$\\\\pi$",
        "$-\\\\pi$"
    ],
    answer: "$\\\\pi$"
},

{
    question: "If f : R - R this profr is defined that $f(x)=(3-x)^{\\\\frac{1}{3}}$ then $f\\\\circ f(x)$ is:",
    option: [
        "$x^{\\\\frac{1}{3}}$",
        "$x^3$",
        "$3-x^3$",
        "$x$"
    ],
    answer: "$x$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}=\\\\frac{x}{y}$ has the solution :-",
    option: [
        "$x-y=k$",
        "$x^2-y^2=k$",
        "$x^3-y^3=k$",
        "$xy=k$"
    ],
    answer: "$x^2-y^2=k$"
},

{
    question: "$\\\\int\\\\frac{\\\\cos\\\\sqrt{x}}{\\\\sqrt{x}}\\\\,dx = ?$",
    option: [
        "$2\\\\cos x+k$",
        "$2\\\\sin x+k$",
        "$2\\\\sin\\\\sqrt{x}+k$",
        "$2\\\\cos\\\\sqrt{x}+k$"
    ],
    answer: "$2\\\\sin\\\\sqrt{x}+k$"
},

{
    question: "If $y=\\\\tan^{-1}\\\\sqrt{\\\\frac{1-\\\\cos x}{1+\\\\cos x}}$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$-\\\\frac{1}{2}$",
        "$\\\\frac{1}{2}$",
        "$\\\\frac{1}{(1+x^2)}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "If A and B two such events are that $P(A)\\\\neq0$ and $P(\\\\frac{B}{A})=1$, then",
    option: [
        "$A \\\\subset B$",
        "$B \\\\subset A$",
        "$B=\\\\varnothing$",
        "$A=\\\\varnothing$"
    ],
    answer: "$A \\\\subset B$"
},

{
    question: "function $y=x^2-3x+2$ of interval $0\\\\leq x\\\\leq2$ in absolute maximum value following is -",
    option: [
        "$4$",
        "$6$",
        "$2$",
        "$0$"
    ],
    answer: "$2$"
},

{
    question: "region $y^2=6x$ and circle $x^2+y^2=16$ in included region is the area :",
    option: [
        "$\\\\frac{4}{3}(4\\\\pi+\\\\sqrt{3})$",
        "$\\\\frac{4}{3}(4\\\\pi-\\\\sqrt{3})$",
        "$\\\\frac{4}{3}(8\\\\pi-\\\\sqrt{3})$",
        "$\\\\frac{4}{3}(8\\\\pi+\\\\sqrt{3})$"
    ],
    answer: "$\\\\frac{4}{3}(4\\\\pi+\\\\sqrt{3})$"
},

{
    question: "If toii line coordinate axes of saath respectively $\\\\theta_1,\\\\theta_2$ and $\\\\theta_3$ angle makes be, then $\\\\cos^2\\\\theta_1+\\\\cos^2\\\\theta_2+\\\\cos^2\\\\theta_3$ the value of will be -",
    option: [
        "$2$",
        "$1$",
        "$4$",
        "$\\\\frac{3}{2}$"
    ],
    answer: "$1$"
},

{
    question: "$\\\\int\\\\frac{\\\\log x}{x}\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{2}(\\\\log x)^2+k$",
        "$-\\\\frac{1}{2}(\\\\log x)^2+k$",
        "$\\\\frac{2}{x^2}+k$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{2}(\\\\log x)^2+k$"
},

{
    question: "$\\\\cos^{-1}\\\\left(\\\\cos\\\\frac{5\\\\pi}{3}\\\\right)+\\\\sin^{-1}\\\\left(\\\\sin\\\\frac{5\\\\pi}{3}\\\\right)$ the value of is :",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{5\\\\pi}{3}$",
        "$\\\\frac{10\\\\pi}{3}$",
        "$0$"
    ],
    answer: "$0$"
},

{
    question: "$\\\\tan^{-1}\\\\left(\\\\frac{x}{y}\\\\right)-\\\\tan^{-1}\\\\left(\\\\frac{x-y}{x+y}\\\\right)$ is equal to :",
    option: [
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$-\\\\frac{3\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$\\\\int_{-1}^{1}|x|\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{2}$",
        "1",
        "-1",
        "None of these"
    ],
    answer: "1"
},

{
    question: "objective function $Z = x + y$ of minimum value while $3x + 2y \\\\leq 12$, $x + 3y \\\\geq 11$, and $x \\\\geq 0,\\\\ y \\\\geq 0$ is",
    option: [
        "$\\\\left(\\\\frac{18}{7},\\\\frac{2}{7}\\\\right)$",
        "$\\\\left(\\\\frac{7}{2},\\\\frac{3}{4}\\\\right)$",
        "$\\\\left(\\\\frac{3}{2},\\\\frac{15}{4}\\\\right)$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "If * sNkrior of onibhaassaa is that $a*b=a^2+b^2$, then $(1*2)*6$ is-",
    option: [
        "12",
        "28",
        "61",
        "None of these"
    ],
    answer: "61"
},

{
    question: "$\\\\tan^{-1}x+\\\\tan^{-1}y=\\\\tan^{-1}\\\\frac{x+y}{1-xy}$, all $x,y$ for ?",
    option: [
        "$x>0,\\\\ y>0$ and $xy<1$",
        "$x>0,\\\\ y>0$ and $xy>1$",
        "$x>0,\\\\ y<0$ and $xy>1$",
        "None of these"
    ],
    answer: "$x>0,\\\\ y>0$ and $xy<1$"
},

{
    question: "vector $\\\\hat{i}+\\\\hat{j}$ and $\\\\hat{j}+\\\\hat{k}$ perpendicular to, iofii vector is equal to ?",
    option: [
        "$\\\\hat{i}-\\\\hat{j}+\\\\hat{k}$",
        "$\\\\hat{i}+\\\\hat{j}+\\\\hat{k}$",
        "$\\\\frac{\\\\hat{i}+\\\\hat{j}+\\\\hat{k}}{3}$",
        "$\\\\frac{\\\\hat{i}-\\\\hat{j}+\\\\hat{k}}{\\\\sqrt{3}}$"
    ],
    answer: "$\\\\frac{\\\\hat{i}-\\\\hat{j}+\\\\hat{k}}{\\\\sqrt{3}}$"
},

{
    question: "curve $y=\\\\sqrt{x}$ and $x=\\\\sqrt{y}$ of common area is :",
    option: [
        "1",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{3}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "origin from gujrby having line of differential equation will be / ",
    option: [
        "$x\\\\frac{dy}{dx}=y$",
        "$y\\\\frac{dy}{dx}=x$",
        "$\\\\frac{dy}{dx}=y$",
        "$\\\\frac{dy}{dx}=x$"
    ],
    answer: "$x\\\\frac{dy}{dx}=y$"
},

{
    question: "If $w$ equation $x^3-1=0$ of a areal root is, then $\\\\begin{vmatrix}1&w&w^2\\\\\\\\w&w^2&1\\\\\\\\w^2&1&w\\\\end{vmatrix}=?$",
    option: [
        "0",
        "1",
        "$w$",
        "$w^2$"
    ],
    answer: "0"
},

{
    question: "If $A=\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$, $B=\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$ be, then $AB=$",
    option: [
        "$\\\\begin{bmatrix}0&0\\\\\\\\0&0\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&1\\\\\\\\1&0\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$",
        "10"
    ],
    answer: "$\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$"
},

{
    question: "following in which like a equaldegreeiiy differential equation not is ?",
    option: [
        "$y^2dx+(x^2+xy)dy=0$",
        "$\\\\frac{dy}{dx}=\\\\frac{y}{x}-\\\\frac{y^3}{x^3}$",
        "$(x-y)dy+y^2dx=0$",
        "$\\\\frac{dy}{dx}=\\\\sin\\\\frac{y}{x}$"
    ],
    answer: "$(x-y)dy+y^2dx=0$"
},

{
    question: "vector $\\\\hat{i}-2\\\\hat{j}+\\\\hat{k}$ on vector $4\\\\hat{i}-4\\\\hat{j}+7\\\\hat{k}$ of projection is -",
    option: [
        "$\\\\frac{19}{8}$",
        "$\\\\frac{19}{9}$",
        "$\\\\frac{19}{11}$",
        "$\\\\frac{19}{7}$"
    ],
    answer: "$\\\\frac{19}{9}$"
},

{
    question: "differential equation $\\\\frac{xdy-ydx}{x}-y=2x^2$ of integrating factor is :-",
    option: [
        "$e^{-x}$",
        "$e^{-y}$",
        "$\\\\frac{1}{x}$",
        "$x$"
    ],
    answer: "$\\\\frac{1}{x}$"
},

{
    question: "pointoN $(4,3,-5)$ and $(-2,1,-8)$ to milaaby having line of direction cosines are-",
    option: [
        "$(4,3,-5)$",
        "$(-2,1,-8)$",
        "$\\\\left(\\\\frac{6}{7},\\\\frac{2}{7},\\\\frac{3}{7}\\\\right)$",
        "None of these"
    ],
    answer: "$\\\\left(\\\\frac{6}{7},\\\\frac{2}{7},\\\\frac{3}{7}\\\\right)$"
},

{
    question: "point $(x,y,z)$ of locatedi vector is -",
    option: [
        "$x\\\\vec{i}-y\\\\vec{j}-z\\\\vec{k}$",
        "$x\\\\vec{i}+y\\\\vec{j}-z\\\\vec{k}$",
        "$x\\\\vec{i}-y\\\\vec{j}+z\\\\vec{k}$",
        "$x\\\\vec{i}+y\\\\vec{j}+z\\\\vec{k}$"
    ],
    answer: "$x\\\\vec{i}+y\\\\vec{j}+z\\\\vec{k}$"
},

{
    question: "simple line $2x - 3y = -z$ and $6x = -y = -4z$ between angle is / ",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{2}$",
        "0",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "$f(x)=\\\\frac{2x}{\\\\log x}$ increasing is -",
    option: [
        "$]0,1[$",
        "$]1,e[$",
        "$]e,\\\\infty[$",
        "$]-\\\\infty,e[$"
    ],
    answer: "$]e,\\\\infty[$"
},

{
    question: "$\\\\int a^{3x+3}\\\\,ax\\\\,dx\\\\;(a>0) = ?$",
    option: [
        "$a^3\\\\cdot\\\\frac{a^{3x}}{3\\\\log a}+k$",
        "$a^2\\\\cdot\\\\frac{a^{3x}}{3\\\\log a}+k$",
        "$\\\\frac{a^{3x}}{\\\\log a}+k$",
        "None of these"
    ],
    answer: "$a^3\\\\cdot\\\\frac{a^{3x}}{3\\\\log a}+k$"
},

{
    question: "function $f(x)=\\\\sqrt{\\\\sin^{-1}x}$ of domain is :",
    option: [
        "$[0,1]$",
        "$[-1,1]$",
        "$[-1,0]$",
        "$[0,1]$"
    ],
    answer: "$[0,1]$"
},

{
    question: "If $F(x)=\\\\begin{bmatrix}\\\\cos x & \\\\sin x\\\\\\\\-\\\\sin x & \\\\cos x\\\\end{bmatrix}$ then $F(x)F(y)$ is equal to",
    option: [
        "$F(x)$",
        "$F(y)$",
        "$F(x+y)$",
        "$F(x-y)$"
    ],
    answer: "$F(x+y)$"
},

{
    question: "If $f(x)=8x^3$ and $g(x)=\\\\frac{1}{x^3}$ then $fog$ is equal to ?",
    option: [
        "$3x$",
        "$9x$",
        "$4x$",
        "$8x$"
    ],
    answer: "$8x$"
},

{
    question: "If $P(B)=\\\\frac{2}{3}$, $P(A \\\\cap B \\\\cap \\\\bar{C})=\\\\frac{1}{2}$, $P(A \\\\cap B \\\\cap \\\\bar{C})=\\\\frac{1}{3}$ then $P(B \\\\cap C)=?$",
    option: [
        "$\\\\frac{1}{12}$",
        "$\\\\frac{3}{4}$",
        "$\\\\frac{5}{12}$",
        "$\\\\frac{23}{36}$"
    ],
    answer: "$\\\\frac{1}{12}$"
},

{
    question: "If $|\\\\vec{a}|=|\\\\vec{b}|=|\\\\vec{a}+\\\\vec{b}|=1$, then $|\\\\vec{a}-\\\\vec{b}|=?$",
    option: [
        "$1$",
        "$\\\\sqrt{3}$",
        "$0$",
        "None of these"
    ],
    answer: "$\\\\sqrt{3}$"
},

{
    question: "function $f(x)=2x^3-15x^2+36x+1$ following interval in a continuous decreasing is a function -",
    option: [
        "$]2,3[$",
        "$]-\\\\infty,2[$",
        "$]3,\\\\infty[$",
        "None of these"
    ],
    answer: "$]2,3[$"
},

{
    question: "If $x>a$, then $\\\\int\\\\frac{dx}{x^2-a^2} = ?$",
    option: [
        "$\\\\frac{1}{2a}\\\\log\\\\frac{x-a}{x+a}+k$",
        "$\\\\frac{1}{2a}\\\\log\\\\frac{x+a}{x-a}+k$",
        "$\\\\frac{1}{a}\\\\log(x^2-a^2)+k$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{2a}\\\\log\\\\frac{x-a}{x+a}+k$"
},

{
    question: "vector $\\\\hat{i}\\\\times(\\\\hat{j}+\\\\hat{k})+\\\\hat{j}\\\\times(\\\\hat{k}+\\\\hat{i})+\\\\hat{k}\\\\times(\\\\hat{k}+\\\\hat{j})$ of onimaann is ?",
    option: [
        "$0$",
        "$1$",
        "$-1$",
        "$|\\\\hat{i}\\\\times(\\\\hat{j}+\\\\hat{k})|$"
    ],
    answer: "$0$"
},

{
    question: "$f(x)=a\\\\sin kx+b\\\\cos kx$ of periodic ofl is:",
    option: [
        "$\\\\frac{2\\\\pi}{k}$",
        "$\\\\frac{2\\\\pi}{|k|}$",
        "$\\\\frac{\\\\pi}{|k|}$",
        "None of these"
    ],
    answer: "$\\\\frac{2\\\\pi}{|k|}$"
},

{
    question: "Let $f(x)=\\\\frac{ax}{x+1},\\\\ x\\\\neq-1$, then $x$ of which value for $f[f(x)]=x$ will be-",
    option: [
        "$\\\\sqrt{2}$",
        "$-\\\\sqrt{2}$",
        "$1$",
        "$-1$"
    ],
    answer: "$-1$"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\frac{1}{\\\\sqrt{2}}\\\\right)$ principal value is :",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{3\\\\pi}{4}$",
        "$\\\\frac{5\\\\pi}{4}$",
        "None of these"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "If $x+y=k$, $y^2=12x$ on normal is then $k$ the value of is?",
    option: [
        "$3$",
        "$9$",
        "$-9$",
        "$-3$"
    ],
    answer: "$9$"
},

{
    question: "curve $y=(x-1)(x-2)(x-3)$ and $x$-axis between bounded by orderor $x=0$ and $x=3$ between located area is equal to :",
    option: [
        "$\\\\frac{9}{4}$ square iofii",
        "$\\\\frac{11}{4}$ square iofii",
        "$\\\\frac{11}{2}$ square iofii",
        "None of these"
    ],
    answer: "$\\\\frac{11}{4}$ square iofii"
},

{
    question: "If $P(\\\\frac{A}{B})>P(A)$, then following in which correct is ?",
    option: [
        "$P(\\\\frac{B}{A})<P(B)$",
        "$P(A \\\\cap B)<P(A)\\\\cdot P(B)$",
        "$P(\\\\frac{B}{A})>P(B)$",
        "$P(\\\\frac{B}{A})=P(B)$"
    ],
    answer: "$P(\\\\frac{B}{A})>P(B)$"
},

{
    question: "a binomial distribution of mean and variance respectively 6 and 4 are, then constant quantity (parameter) n the value of is ?",
    option: [
        "18",
        "12",
        "10",
        "9"
    ],
    answer: "18"
},

{
    question: "If $\\\\int_0^{2a}f(x)\\\\,dx-2\\\\int_0^a f(x)\\\\,dx$, then following in which true is ?",
    option: [
        "$f(2a-x)=-f(x)$",
        "$f(2a-x)=f(x)$",
        "$f(x)$ a odd is a function",
        "$f(x)$ a equal is a function"
    ],
    answer: "$f(2a-x)=f(x)$"
},

{
    question: "a dice to 6 times is thrown /  If equal sNkhor obtained to be success is then 5 success obtained beby of probability is -",
    option: [
        "$\\\\frac{3}{32}$",
        "$\\\\frac{7}{64}$",
        "$\\\\frac{63}{64}$",
        "None of these"
    ],
    answer: "$\\\\frac{3}{32}$"
},

{
    question: "$\\\\int_1^{\\\\sqrt{3}}\\\\frac{1}{1+x^2}\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{12}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "if $A=\\\\begin{bmatrix}1&9\\\\\\\\0&1\\\\end{bmatrix}$ then $A^4$ is equal to :",
    option: [
        "$\\\\begin{bmatrix}1&a^4\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&36\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}4&a^4\\\\\\\\0&4\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&-4a\\\\\\\\0&1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}1&36\\\\\\\\0&1\\\\end{bmatrix}$"
},

{
    question: "following in from which equaldegreeiiy differential equation is ?",
    option: [
        "$(4x+6y+5)dy-(3y+2x+4)dx=0$",
        "$(x+y)dx-(x^3+y^3)dy=0$",
        "$(x^3+2y^2)dx+2xydy=0$",
        "$y^2dx+(x^2-xy-y^2)dy=0$"
    ],
    answer: "$y^2dx+(x^2-xy-y^2)dy=0$"
},

{
    question: "If $P(A \\\\cup B)=0.8$ and $P(A \\\\cap B)=0.3$ then $P(\\\\bar{A})+P(\\\\bar{B})=?$",
    option: [
        "0.3",
        "0.5",
        "0.7",
        "0.9"
    ],
    answer: "0.3"
},

{
    question: "point $A(3,4,-7)$ and $B(1,-1,6)$ from gujrby having line of vector equation which of the following is ?",
    option: [
        "$\\\\vec{r}=(3\\\\hat{i}+4\\\\hat{j}-7\\\\hat{k})+\\\\lambda(\\\\hat{i}-\\\\hat{j}+6\\\\hat{k})$",
        "$\\\\vec{r}=(\\\\hat{i}-\\\\hat{j}-6\\\\hat{k})+\\\\lambda(3\\\\hat{i}-4\\\\hat{j}+7\\\\hat{k})$",
        "$\\\\vec{r}=(3\\\\hat{i}+4\\\\hat{j}-7\\\\hat{k})+\\\\lambda(-2\\\\hat{i}-5\\\\hat{j}+13\\\\hat{k})$",
        "None of these"
    ],
    answer: "$\\\\vec{r}=(3\\\\hat{i}+4\\\\hat{j}-7\\\\hat{k})+\\\\lambda(-2\\\\hat{i}-5\\\\hat{j}+13\\\\hat{k})$"
},

{
    question: "$\\\\int \\\\frac{1}{\\\\sin x+\\\\cos x}\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{\\\\sqrt{2}}\\\\log\\\\tan\\\\left(\\\\frac{x}{2}+\\\\frac{\\\\pi}{8}\\\\right)+k$",
        "$\\\\log\\\\tan\\\\left(\\\\frac{x}{2}+\\\\frac{\\\\pi}{8}\\\\right)+k$",
        "$\\\\frac{1}{2}\\\\log\\\\tan\\\\left(\\\\frac{x}{2}+\\\\frac{\\\\pi}{8}\\\\right)+k$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{\\\\sqrt{2}}\\\\log\\\\tan\\\\left(\\\\frac{x}{2}+\\\\frac{\\\\pi}{8}\\\\right)+k$"
},

{
    question: "a $3\\\\times3$ determinant in $i$th row and $j$th pole of element to $a_{ij}$ from denote do are /  value take that each $i$ and $j$ for $a_{ij}=-a_{ji}$ then determinant of principal diagonal of all element are -",
    option: [
        "1",
        "-1",
        "0",
        "None of these"
    ],
    answer: "0"
},

{
    question: "vector $a_1\\\\hat{i}+a_2\\\\hat{j}+a_3\\\\hat{k}$ and $b_1\\\\hat{i}+b_2\\\\hat{j}+b_3\\\\hat{k}$ a other of perpendicular are If -",
    option: [
        "$\\\\frac{a_1}{b_1}=\\\\frac{a_2}{b_2}=\\\\frac{a_3}{b_3}$",
        "$a_1b_1+a_2b_2+a_3b_3$",
        "$a_1b_2+b_2a_1+a_3b_2=0$",
        "None of these"
    ],
    answer: "$a_1b_1+a_2b_2+a_3b_3$"
},

{
    question: "If $f:R\\\\to R$ where $f(x)=5x+4$ be, then $f^{-1}(x)$ which of the following will be?",
    option: [
        "$\\\\frac{x}{4}-5$",
        "$\\\\frac{x-5}{4}$",
        "$\\\\frac{x-4}{5}$",
        "$\\\\frac{x-y}{5}$"
    ],
    answer: "$\\\\frac{x-4}{5}$"
},

{
    question: "$\\\\int \\\\frac{1}{x^{1/3}}\\\\,dx = ?$",
    option: [
        "$\\\\frac{3}{2}x^{2/3}+c$",
        "$\\\\frac{2}{3}x^{2/3}+c$",
        "$\\\\frac{2}{3}x^{-2/3}+c$",
        "None of these"
    ],
    answer: "$\\\\frac{3}{2}x^{2/3}+c$"
},

{
    question: "$\\\\hat{j}\\\\times\\\\hat{i}=?$",
    option: [
        "$\\\\hat{k}$",
        "$-\\\\hat{k}$",
        "$\\\\hat{j}$",
        "$\\\\hat{i}$"
    ],
    answer: "$-\\\\hat{k}$"
},

{
    question: "ordRcchik variable X of distribution following are:<br><br>$X$: 0, 1, 2, 3, 4, 5, 6, 7, 8<br>$P(X=x)$: $a_1$, $3a_1$, $5a_1$, $7a_1$, $9a_1$, $11a_1$, $13a_1$, $15a_1$, $17a_1$<br><br>then $P(X<3)$ is -",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{7}$",
        "9",
        "$\\\\frac{16}{81}$"
    ],
    answer: "9"
},

{
    question: "If $y=\\\\tan^{-1}\\\\left(\\\\frac{\\\\sin x}{1+\\\\cos x}\\\\right)$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "0",
        "1",
        "$\\\\frac{1}{2}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "If $y=x^x$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "$x^x\\\\log x$",
        "$x^x(1+\\\\log x)$",
        "$x(1+\\\\log x)$",
        "None of these"
    ],
    answer: "$x^x(1+\\\\log x)$"
},

{
    question: "$\\\\tan^{-1}x+\\\\cot^{-1}x$ the value of is :",
    option: [
        "$-\\\\pi$",
        "$-\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "onimaap 176 cm. of rectangle of maximum area following is -",
    option: [
        "$1936\\\\,\\\\text{cm}^2$",
        "$1854\\\\,\\\\text{cm}^2$",
        "$2110\\\\,\\\\text{cm}^2$",
        "None of these"
    ],
    answer: "$1936\\\\,\\\\text{cm}^2$"
},

{
    question: "If $l,m,n$ any line of direction cosine is, then following in which like true is?",
    option: [
        "$l+m+n=1$",
        "$l^2+m^2+n^2=1$",
        "$\\\\sqrt{l^2+m^2+n^2}=0$",
        "None of these"
    ],
    answer: "$l^2+m^2+n^2=1$"
},

{
    question: "$[\\\\hat{i}\\\\ \\\\hat{j}\\\\ \\\\hat{k}]$ the value of is equal to ?",
    option: [
        "$1$",
        "$0$",
        "$2$",
        "None of these"
    ],
    answer: "$1$"
},

{
    question: "If $A=\\\\begin{bmatrix}1&0&0\\\\\\\\0&1&0\\\\\\\\a&b&-1\\\\end{bmatrix}$ then $A^2=$",
    option: [
        "aaaNk matrix",
        "$A$",
        "empty matrix",
        "$-A$"
    ],
    answer: "aaaNk matrix"
},

{
    question: "If A and B two events a only ordRcchik prsum from joined are, so that $P(A)=0.4$, $P(B)=0.8$ and $P(\\\\frac{B}{A})=0.6$ then $P(\\\\frac{A}{B})$ is equal to -",
    option: [
        "0.3",
        "0.4",
        "0.5",
        "0.6"
    ],
    answer: "0.3"
},

{
    question: "a maitricks $A=[a_{ij}]_{m\\\\times n}$ symmetric are If",
    option: [
        "$a_{ij}=0$",
        "$a_{ij}=-a_{ji}$",
        "$a_{ij}=a_{ji}$",
        "$a_{ij}=1$"
    ],
    answer: "$a_{ij}=a_{ji}$"
},

{
    question: "curve $y=4+3x-x^2$ and $x$-axis between is the area :",
    option: [
        "$\\\\frac{125}{3}$ square iofii",
        "$\\\\frac{125}{4}$ square iofii",
        "$\\\\frac{125}{6}$ square iofii",
        "None of these"
    ],
    answer: "$\\\\frac{125}{6}$ square iofii"
},

{
    question: "interval $[-1,2]$ in function $f(x)=|x|+|x-1|$",
    option: [
        "increasing is",
        "haasis the value",
        "base is",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "a maitricks $A=[a_{ij}]_{m\\\\times n}$ symmetric is If :",
    option: [
        "$a_{ij}=0$",
        "$a_{ij}=-a_{ji}$",
        "$a_{ij}=a_{ji}$",
        "$a_{ij}=1$"
    ],
    answer: "$a_{ij}=a_{ji}$"
},

{
    question: "If $A$, $3\\\\times3$ order of a square matrix is then $|adj\\\\ A|$ the value of is :-",
    option: [
        "$|A|$",
        "$|A|^2$",
        "$|A|^3$",
        "$3|A|$"
    ],
    answer: "$|A|^2$"
},

{
    question: "differential equation $(x+y)(dx-dy)=dx+dy$ has the solution :-",
    option: [
        "$x-y=\\\\log(x+y)+c$",
        "$x+y=\\\\log(x-y)+c$",
        "$x^2+y^2=x+y+c$",
        "$x^2-y^2=x+y+c$"
    ],
    answer: "$x-y=\\\\log(x+y)+c$"
},

{
    question: "any aaaNk group $I$ for :",
    option: [
        "$I^2=1$",
        "$|I|=0$",
        "$|I|=2$",
        "$|I|=5$"
    ],
    answer: "$I^2=1$"
},

{
    question: "If $y = x^3 + 4x + 6$, then $\\\\frac{d^2y}{dx^2} = ?$",
    option: [
        "$3x^2 + 4$",
        "$3x^2$",
        "$6x$",
        "$3x$"
    ],
    answer: "$6x$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}+y=e^{-x}$ has the solution :-",
    option: [
        "$y=(x+c)e^x$",
        "$ye^x=x+c$",
        "$ye^x+x=c$",
        "None of these"
    ],
    answer: "$ye^x=x+c$"
},

{
    question: "If $x$ interval $[0,1]$ in is then $x^2+x+1$ of minimum value is -",
    option: [
        "$\\\\frac{3}{4}$",
        "$1$",
        "$3$",
        "None of these"
    ],
    answer: "$1$"
},

{
    question: "If $2\\\\begin{vmatrix}x&5\\\\\\\\3&y\\\\end{vmatrix}=\\\\begin{vmatrix}4&10\\\\\\\\6&6\\\\end{vmatrix}$ then $x$ and $y$ the value of is ?",
    option: [
        "$x=2,\\\\ y=3$",
        "$x=3,\\\\ y=2$",
        "$x=2,\\\\ y=2$",
        "$x=3,\\\\ y=3$"
    ],
    answer: "$x=3,\\\\ y=2$"
},

{
    question: "function $f(x)=\\\\log\\\\left(x+\\\\sqrt{x^2+1}\\\\right)$ is:",
    option: [
        "equal function",
        "odd",
        "recurring function",
        "neither equal nor only odd"
    ],
    answer: "odd"
},

{
    question: "valueo $A=\\\\begin{bmatrix}1 & -1 & 2\\\\\\\\2 & 1 & -3\\\\\\\\1 & 1 & 1\\\\end{bmatrix}$ and $B=\\\\begin{bmatrix}4 & 2 & 2\\\\\\\\-5 & 0 & \\\\alpha\\\\\\\\1 & -2 & 3\\\\end{bmatrix}$ If $B$ matrix $A$ of inverse is",
    option: [
        "2",
        "-1",
        "-2",
        "5"
    ],
    answer: "5"
},

{
    question: "relation $R$ which following by is defined $R=\\\\{(a,b):a,b\\\\in\\\\text{human beings}:a\\\\ loves\\\\ b\\\\}$ is:",
    option: [
        "reflexive",
        "symmetric and transitive",
        "equivalent",
        "uonyukt in from toii not"
    ],
    answer: "uonyukt in from toii not"
},

{
    question: "Let $A=\\\\{1,2,3\\\\}$, then $(1,2)$ and $(1,3)$ to including how many relation $A$ on defined be can are which reflexive symmetric are but transitive not are?",
    option: [
        "4",
        "3",
        "1",
        "2"
    ],
    answer: "2"
},

{
    question: "$A=\\\\begin{bmatrix}2 & 3\\\\\\\\5 & k\\\\end{bmatrix}$ of inverse obtained not will be If $k$ the value of is :",
    option: [
        "2",
        "$\\\\frac{3}{2}$",
        "$\\\\frac{5}{2}$",
        "$\\\\frac{15}{2}$"
    ],
    answer: "$\\\\frac{15}{2}$"
},

{
    question: "If $\\\\varphi \\\\in R$ and $\\\\Delta=\\\\begin{vmatrix}a&b\\\\\\\\c&d\\\\end{vmatrix}$ then $\\\\varphi\\\\Delta$ equal will be ?",
    option: [
        "$\\\\begin{vmatrix}\\\\varphi a&b\\\\\\\\\\\\varphi c&d\\\\end{vmatrix}$",
        "$\\\\begin{vmatrix}\\\\varphi a&\\\\varphi b\\\\\\\\\\\\varphi c&\\\\varphi d\\\\end{vmatrix}$",
        "$\\\\begin{vmatrix}\\\\varphi a&b\\\\\\\\c&d\\\\end{vmatrix}$",
        "None of these"
    ],
    answer: "$\\\\begin{vmatrix}\\\\varphi a&b\\\\\\\\\\\\varphi c&d\\\\end{vmatrix}$"
},

{
    question: "$f(x)=\\\\sqrt{3}\\\\sin x+\\\\cos x$ the value of maximum $x$ of following in from which value for will be ?",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "Let $A=\\\\{1,2\\\\}$ this set on how many binary operationeN defined be can are?",
    option: [
        "8",
        "10",
        "16",
        "20"
    ],
    answer: "16"
},

{
    question: "Let $g(x)=1+x-[x]$ and $f(x)=\\\\begin{cases}-1,&x<0\\\\\\\\0,&x=0\\\\\\\\1,&x>0\\\\end{cases}$ then all $x$ for $f[g(x)]$ sis the value:",
    option: [
        "$x$",
        "$1$",
        "$f(x)$",
        "$g(x)$"
    ],
    answer: "$1$"
},

{
    question: "$\\\\int_{\\\\pi/6}^{\\\\pi/3}\\\\frac{dx}{1+\\\\sqrt{\\\\tan x}} = ?$",
    option: [
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{9}$",
        "$\\\\frac{\\\\pi}{12}$"
    ],
    answer: "$\\\\frac{\\\\pi}{12}$"
},

{
    question: "If $x+\\\\frac{1}{x}=2$ then $\\\\sin^{-1}x$ principal value will be :",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "$\\\\frac{3\\\\pi}{2}$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "$(4,3,7)$ and $(1,-1,-5)$ between of distance = ?",
    option: [
        "13",
        "15",
        "12",
        "5"
    ],
    answer: "13"
},

{
    question: "If A and B two independent events are then $P(\\\\frac{\\\\bar{A}}{\\\\bar{B}})$ is equal to-",
    option: [
        "$1-P(\\\\frac{A}{\\\\bar{B}})$",
        "$1-P(\\\\frac{A}{B})$",
        "$1-P(B)$",
        "$1-P(A)$"
    ],
    answer: "$1-P(A)$"
},

{
    question: "If $A=\\\\begin{bmatrix}\\\\alpha & 0\\\\\\\\1 & 1\\\\end{bmatrix}$, $B=\\\\begin{bmatrix}1 & 0\\\\\\\\5 & 1\\\\end{bmatrix}$, where $A^2=B$, then $\\\\alpha$ the value of is",
    option: [
        "1",
        "-1",
        "4",
        "$\\\\alpha$ of real value not"
    ],
    answer: "$\\\\alpha$ of real value not"
},

{
    question: "$[\\\\vec{a}\\\\vec{b}\\\\vec{a}]=?$",
    option: [
        "$0$",
        "$[\\\\vec{a}\\\\times\\\\vec{b}]$",
        "$\\\\vec{a}$",
        "None of these"
    ],
    answer: "$0$"
},

{
    question: "$f(x)=x^9+3x^7+6$ a increasing function is -",
    option: [
        "$x$ of all wealthaatmk real valueoN for",
        "$x$ of all -ve real valueoN for",
        "all $x\\\\in R_0$",
        "None of these"
    ],
    answer: "all $x\\\\in R_0$"
},

{
    question: "If $\\\\begin{vmatrix}x+y&2\\\\\\\\5+z&xy\\\\end{vmatrix}=\\\\begin{vmatrix}6&2\\\\\\\\5&8\\\\end{vmatrix}$ then $y$ the value of which of the following-like will be ?",
    option: [
        "2",
        "4",
        "5",
        "None of these"
    ],
    answer: "5"
},

{
    question: "line $\\\\vec{r}=(4\\\\hat{i}-\\\\hat{j})+s(2\\\\hat{i}+\\\\hat{j}-3\\\\hat{k})$ and $\\\\vec{r}=(\\\\hat{i}-\\\\hat{j}+2\\\\hat{k})+t(\\\\hat{i}-3\\\\hat{j}+2\\\\hat{k})$ between angle is ?",
    option: [
        "$\\\\frac{3\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "point $(1,-1,1)$ and $(-1,1,1)$ to milaaby having line of direction cosine which of the following is / ",
    option: [
        "$(2,-2,0)$",
        "$(1,-1,0)$",
        "$\\\\left(\\\\frac{1}{\\\\sqrt{2}},-\\\\frac{1}{\\\\sqrt{2}},0\\\\right)$",
        "None of these"
    ],
    answer: "$\\\\left(\\\\frac{1}{\\\\sqrt{2}},-\\\\frac{1}{\\\\sqrt{2}},0\\\\right)$"
},

{
    question: "$x$-axis of sLetNtr any line of direction cosine is ?",
    option: [
        "$(1,0,0)$",
        "$(1,1,1)$",
        "$(0,1,0)$",
        "None of these"
    ],
    answer: "$(1,0,0)$"
},

{
    question: "$\\\\int \\\\frac{1+x}{x^2}\\\\,dx = ?$",
    option: [
        "$\\log x\\cdot\\frac{1}{x}+c$",
        "$\\frac{1}{x}\\log x+c$",
        "$\\log x-\\frac{1}{x^3}+k$",
        "$\\log x-\\frac{1}{x}+c$"
    ],
    answer: "$\\log x-\\frac{1}{x}+c$"
},

{
    question: "If $\\\\begin{vmatrix}x&8\\\\\\\\3&3\\\\end{vmatrix}=0$, $x$ the value of is -",
    option: [
        "3",
        "8",
        "24",
        "0"
    ],
    answer: "8"
},

{
    question: "If determinant $\\\\begin{vmatrix}1+x&1&1\\\\\\\\1&1+x&1\\\\\\\\1&1&1+x\\\\end{vmatrix}=0$ then which a correct is ?",
    option: [
        "$a=-3$",
        "$a=2$",
        "$a=1$",
        "$a=3$"
    ],
    answer: "$a=-3$"
},

{
    question: "$\\\\int \\\\log_e x\\\\,dx = ?$",
    option: [
        "$x\\\\log x+x+k$",
        "$x\\\\log x-x+k$",
        "$\\\\log x+x+k$",
        "$\\\\log x-x+k$"
    ],
    answer: "$x\\\\log x-x+k$"
},

{
    question: "equation $\\\\frac{dy}{dx}+\\\\frac{y}{x}=\\\\frac{y^2}{x^2}$ of integration factor is :",
    option: [
        "$\\\\log x$",
        "$x$",
        "$\\\\frac{1}{x}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{x}$"
},

{
    question: "origin from plane $3x+4y-5z=25$ on put were perpendicular of foot of niormk are -",
    option: [
        "$\\\\left(\\\\frac{3}{2},2,-\\\\frac{5}{2}\\\\right)$",
        "$(3,4,0)$",
        "$(6,8,-10)$",
        "$(0,0,-5)$"
    ],
    answer: "$\\\\left(\\\\frac{3}{2},2,-\\\\frac{5}{2}\\\\right)$"
},

{
    question: "interval $(2,\\\\infty)$ in $\\\\frac{\\\\log x}{x}$ of maximum is the value?",
    option: [
        "$\\\\frac{\\\\log 2}{2}$",
        "$0$",
        "$\\\\frac{1}{e}$",
        "$1$"
    ],
    answer: "$\\\\frac{1}{e}$"
},

{
    question: "Let $f(x)=(x+1)^2$, $x\\\\geq -1$ /  If $g(x)$ a is a function whose graph line $y=x$ with respect to $f(x)$ of graph of reflection be, then $g(x)$ the value of is:",
    option: [
        "$-\\\\sqrt{x}-1,\\\\ x\\\\geq0$",
        "$\\\\frac{1}{(x+1)^2},\\\\ x>-1$",
        "$\\\\sqrt{x+1},\\\\ x\\\\geq-1$",
        "$\\\\sqrt{x}-1,\\\\ x\\\\geq0$"
    ],
    answer: "$\\\\sqrt{x}-1,\\\\ x\\\\geq0$"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\sin\\\\frac{2\\\\pi}{3}\\\\right)$ = ?",
    option: [
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{4\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "$f(x)=\\\\frac{\\\\log_2(x+3)}{x^2+3x+2}$ of domain is:",
    option: [
        "$R-\\\\{-1,-2\\\\}$",
        "$(-2,\\\\infty)$",
        "$R-\\\\{-1,-2,-3\\\\}$",
        "$(-3,+\\\\infty)-\\\\{-1,-2\\\\}$"
    ],
    answer: "$(-3,+\\\\infty)-\\\\{-1,-2\\\\}$"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\sin\\\\frac{2\\\\pi}{3}\\\\right)$ principal value is :",
    option: [
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$-\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{6}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "$\\\\hat{k}\\\\times\\\\hat{j}=?$",
    option: [
        "$0$",
        "$1$",
        "$\\\\hat{i}$",
        "$-\\\\hat{i}$"
    ],
    answer: "$-\\\\hat{i}$"
},

{
    question: "$\\\\hat{i}\\\\cdot\\\\hat{j}=?$",
    option: [
        "$0$",
        "$1$",
        "$\\\\hat{k}$",
        "$-\\\\hat{k}$"
    ],
    answer: "$0$"
},

{
    question: "$\\\\frac{d(a^x)}{dx}=?$",
    option: [
        "$a^x\\\\log a$",
        "$\\\\frac{a^x}{\\\\log a}$",
        "$a^{x\\\\log a}$",
        "None of these"
    ],
    answer: "$a^x\\\\log a$"
},

{
    question: "If $x=at^2,\\\\ y=2at$ then $\\\\frac{dy}{dx} = ?$",
    option: [
        "$t$",
        "$\\\\frac{1}{t}$",
        "$at$",
        "$\\\\frac{a}{t}$"
    ],
    answer: "$\\\\frac{1}{t}$"
},

{
    question: "$Z = 5x + 2y$ of maximum value for, while $2x + 3y \\\\geq 6$, $x - 2y \\\\leq 2$, $6x + 4y \\\\leq 24$, $-3x + 2y \\\\leq 3$ and $x \\\\geq 0, y \\\\geq 0$, $x$ and $y$ of value respectively are-",
    option: [
        "$\\\\frac{18}{7},\\\\frac{2}{7}$",
        "$\\\\frac{7}{2},\\\\frac{3}{4}$",
        "$\\\\frac{3}{2},\\\\frac{15}{4}$",
        "None of these"
    ],
    answer: "$\\\\frac{7}{2},\\\\frac{3}{4}$"
},

{
    question: "$x\\\\log\\\\frac{dy}{dx}+y-2\\\\log x$ of integration factor is ?",
    option: [
        "$x$",
        "$e^x$",
        "$\\\\log x$",
        "$\\\\log(\\\\log x)$"
    ],
    answer: "$\\\\log x$"
},

{
    question: "$\\\\begin{vmatrix}1&a&a^2\\\\\\\\1&b&b^2\\\\\\\\1&c&c^2\\\\end{vmatrix}=?$",
    option: [
        "$(a+b)(b+c)(c+a)$",
        "$(a+b)(b-c)(c-a)$",
        "$(a-b)(b-c)(c+a)$",
        "$(a-b)(b-c)(c-a)$"
    ],
    answer: "$(a-b)(b-c)(c-a)$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}+Py=Q$, where P and Q, x of is a functionN, of integrating factor is :-",
    option: [
        "$e^{\\\\int Pdx}$",
        "$e^{\\\\int Qdx}$",
        "$e^{\\\\int Pdy}$",
        "$e^{\\\\int Qdy}$"
    ],
    answer: "$e^{\\\\int Pdx}$"
},

{
    question: "If $y=\\\\log 10x$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1}{x}$",
        "$\\\\frac{1}{x}(\\\\log 10)$",
        "$\\\\frac{1}{x\\\\log(10)}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{x}$"
},

{
    question: "following in from which statement correct is ?",
    option: [
        "determinant a square matrix is / ",
        "determinant a matrix from relation a sNkhor is / ",
        "determinant a square matrix from relation a sNkhor is / ",
        "None of these"
    ],
    answer: "determinant a square matrix from relation a sNkhor is / "
},

{
    question: "If $A(\\\\vec a), B(\\\\vec b)$ two point are and linekhNdd $AB$ on $P(\\\\vec r)$ toii point this profr be that $\\\\frac{AP}{PB}=\\\\frac{m}{n}$ then following in which like true is?",
    option: [
        "$\\\\vec r=\\\\frac{m(\\\\vec a)+n(\\\\vec b)}{m+n}$",
        "$\\\\vec r=\\\\frac{m(\\\\vec b)+n(\\\\vec a)}{m+n}$",
        "$\\\\vec r=\\\\frac{m(\\\\vec b)+n(\\\\vec a)}{\\\\vec b+\\\\vec a}$",
        "$\\\\vec r=\\\\frac{m(\\\\vec b)-n(\\\\vec a)}{m-n}$"
    ],
    answer: "$\\\\vec r=\\\\frac{m(\\\\vec b)+n(\\\\vec a)}{m+n}$"
},

{
    question: "$Z = 6x_1 - 2x_2$ of maximum value for while $2x_1 - x_2 \\\\leq 2$, $x_1 \\\\leq 3$ and $x_1,x_2 \\\\geq 0$ then $x_1$ and $x_2$ of is the valueN -",
    option: [
        "3, 4",
        "2, 3",
        "1, 2",
        "None of these"
    ],
    answer: "3, 4"
},

{
    question: "If $f(x)=e^x$, $x\\\\in[0,1]$, then Lagrange mean value theorem for '$c$' the value of is",
    option: [
        "$\\\\log(e-1)$",
        "$\\\\log(e+1)$",
        "$\\\\log e$",
        "None of these"
    ],
    answer: "$\\\\log(e-1)$"
},

{
    question: "parabola $y^2=4ax$ and normal chord between bounded regionphl is :",
    option: [
        "$\\\\frac{8}{3}a^2$",
        "$\\\\frac{8}{3}a$",
        "$\\\\frac{4}{3}a$",
        "$\\\\frac{4}{3}a^2$"
    ],
    answer: "$\\\\frac{8}{3}a^2$"
},

{
    question: "point $(3,4,2)$ and $(5,6,-3)$ to milaaby having line on vector $2\\\\vec i-3\\\\vec j-6\\\\vec k$ of projection is :-",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{4}{3}$",
        "$-\\\\frac{4}{3}$",
        "$\\\\frac{5}{3}$"
    ],
    answer: "$\\\\frac{4}{3}$"
},

{
    question: "If $A(\\\\vec a), B(\\\\vec b)$ two point are then linekhNdd $AB$ of middle point $P$ of locatedi vector following in which will be?",
    option: [
        "$\\\\frac{\\\\vec a+\\\\vec b}{2}$",
        "$\\\\frac{\\\\vec a+\\\\vec b}{3}$",
        "$2(\\\\vec a+\\\\vec b)$",
        "$\\\\frac{\\\\vec a-\\\\vec b}{2}$"
    ],
    answer: "$\\\\frac{\\\\vec a+\\\\vec b}{2}$"
},

{
    question: "differential equation $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^4 + 3\\\\left(\\\\frac{dy}{dx}\\\\right)^3 + 9y - \\\\cos x$ of order is :",
    option: [
        "4",
        "3",
        "2",
        "None of these"
    ],
    answer: "2"
},

{
    question: "If $\\\\vec{a}\\\\cdot\\\\vec{b}=0$ be, then",
    option: [
        "$\\\\vec{a}\\\\perp\\\\vec{b}$",
        "$\\\\vec{a}\\\\parallel\\\\vec{b}$",
        "$\\\\vec{a}+\\\\vec{b}=0$",
        "$\\\\vec{a}-\\\\vec{b}=0$"
    ],
    answer: "$\\\\vec{a}\\\\perp\\\\vec{b}$"
},

{
    question: "real sNkhoroN of set in relation 'small is' in which what type relation is?",
    option: [
        "ofvl symmetric",
        "ofvl transitive",
        "ofvl reflexive",
        "equivalence relations"
    ],
    answer: "ofvl transitive"
},

{
    question: "If $x=\\\\frac{1-t^2}{1+t^2}$ and $y=\\\\frac{2t}{1+t^2}$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "$-\\\\frac{y}{x}$",
        "$\\\\frac{y}{x}$",
        "$-\\\\frac{x}{y}$",
        "$\\\\frac{x}{y}$"
    ],
    answer: "$-\\\\frac{x}{y}$"
},

{
    question: "If $A$ a $3\\\\times3$ order of square matrix be then $|kA|$ the value of will be :-",
    option: [
        "$k|A|$",
        "$k^2|A|$",
        "$k^3|A|$",
        "$3k|A|$"
    ],
    answer: "$k^3|A|$"
},

{
    question: "a sum die is thrown /  twonoN on equal prime sNkhor aaby of probability is -",
    option: [
        "$\\\\frac{1}{36}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{1}{12}$",
        "0"
    ],
    answer: "$\\\\frac{1}{36}$"
},

{
    question: "point $A(2,-4,5)$ and $B(1,-1,3)$ to milaaby having line of direction ratios is?",
    option: [
        "$(1,-3,2)$",
        "$(-3,1,2)$",
        "$(2,1,-3)$",
        "None of these"
    ],
    answer: "$(1,-3,2)$"
},

{
    question: "If 7 and 2 equation $\\\\begin{vmatrix}x&3&7\\\\\\\\2&x&2\\\\\\\\7&6&x\\\\end{vmatrix}=0$ of two root are, then third root will be-",
    option: [
        "-9",
        "14",
        "$\\\\frac{1}{2}$",
        "None of these"
    ],
    answer: "-9"
},

{
    question: "If $\\\\vec{a}$ and $\\\\vec{b}$ iofii vector this profr are that $\\\\vec{a}+\\\\vec{b}$ also a iofii vector is, then vector $\\\\vec{a}$ and $\\\\vec{b}$ between angle is ?",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{4\\\\pi}{3}$",
        "$\\\\frac{2\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{2\\\\pi}{3}$"
},

{
    question: "curve $y^2=4x$ and $y=2x$ of intermediate region is the area :",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{1}{4}$",
        "$\\\\frac{3}{4}$"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "If $\\\\begin{vmatrix}6i&-3i&1\\\\\\\\4&3i&-1\\\\\\\\20&3&1\\\\end{vmatrix}=x+iy$ then",
    option: [
        "$x=3,\\\\ y=1$",
        "$x=1,\\\\ y=3$",
        "$x=0,\\\\ y=3$",
        "$x=0,\\\\ y=0$"
    ],
    answer: "$x=0,\\\\ y=0$"
},

{
    question: "a stone a calm lake in is thrown and water of waves circleaaofr form in 4 cm. /sec. of velocity from moves is /  which instant circleaaofr wave of radius 10 cm. is, its area increases at the following rate -",
    option: [
        "$100\\\\pi\\\\,\\\\text{cm}^2/\\\\text{minute}$",
        "$80\\\\pi\\\\,\\\\text{cm}^2/\\\\text{minute}$",
        "$40\\\\pi\\\\,\\\\text{cm}^2/\\\\text{minute}$",
        "None of these"
    ],
    answer: "$80\\\\pi\\\\,\\\\text{cm}^2/\\\\text{minute}$"
},

{
    question: "$\\\\int\\\\frac{1}{x\\\\sqrt{x^2-1}}\\\\,dx = ?$",
    option: [
        "$\\\\tan^{-1}x$",
        "$\\\\sin^{-1}x$",
        "$\\\\sec^{-1}x$",
        "None of these"
    ],
    answer: "$\\\\sec^{-1}x$"
},

{
    question: "If A and B two such events are that $P(A)>0$ and $P(B)\\\\neq1$ then $P(\\\\frac{A}{\\\\bar{B}})$ is equal to –",
    option: [
        "$1-P(\\\\frac{A}{B})$",
        "$1-P(\\\\frac{\\\\bar{A}}{B})$",
        "$1-P(\\\\frac{A\\\\cup B}{P(B)})$",
        "$P(\\\\frac{\\\\bar{A}}{\\\\bar{B}})$"
    ],
    answer: "$1-P(\\\\frac{\\\\bar{A}}{B})$"
},

{
    question: "If A and B two events this profr are that $P(A\\\\cup B)=\\\\frac{3}{4}$, $P(A\\\\cap B)=\\\\frac{1}{4}$, $P(A)=\\\\frac{2}{3}$ then $P(A\\\\cap B)$ is :-",
    option: [
        "$\\\\frac{3}{8}$",
        "$\\\\frac{5}{8}$",
        "$\\\\frac{5}{12}$",
        "$\\\\frac{1}{4}$"
    ],
    answer: "$\\\\frac{5}{8}$"
},

{
    question: "If toii line, wealthaatmk coordinate axes of saath $\\\\alpha,\\\\beta,\\\\gamma$ angle makes be then-",
    option: [
        "$\\\\sin^2\\\\alpha+\\\\sin^2\\\\beta+\\\\sin^2\\\\gamma=0$",
        "$\\\\sin^2\\\\alpha+\\\\sin^2\\\\beta+\\\\sin^2\\\\gamma=1$",
        "$\\\\sin^2\\\\alpha+\\\\sin^2\\\\beta+\\\\sin^2\\\\gamma=2$",
        "$\\\\sin^2\\\\alpha=\\\\sin^2\\\\beta=\\\\sin^2\\\\gamma$"
    ],
    answer: "$\\\\sin^2\\\\alpha+\\\\sin^2\\\\beta+\\\\sin^2\\\\gamma=2$"
},

{
    question: "vector $\\\\hat{i}-2\\\\hat{j}+\\\\hat{k}$ on vector $2\\\\hat{i}-\\\\hat{j}+\\\\hat{k}$ of projection is ?",
    option: [
        "$\\\\frac{4}{\\\\sqrt{6}}$",
        "$\\\\frac{5}{\\\\sqrt{6}}$",
        "$\\\\frac{6}{\\\\sqrt{6}}$",
        "$\\\\frac{7}{\\\\sqrt{6}}$"
    ],
    answer: "$\\\\frac{5}{\\\\sqrt{6}}$"
},

{
    question: "origin from gujrby having lines of onivaar of differential equation will be / ",
    option: [
        "$x\\\\frac{dy}{dx}-y$",
        "$y\\\\frac{dy}{dx}=x$",
        "$\\\\frac{dy}{dx}=y$",
        "$\\\\frac{dy}{dx}-x$"
    ],
    answer: "$x\\\\frac{dy}{dx}-y$"
},

{
    question: "If $\\\\vec{a}=2\\\\hat{i}-5\\\\hat{j}+\\\\hat{k}$ and $\\\\vec{b}=\\\\hat{i}+2\\\\hat{j}-\\\\hat{k}$ then-",
    option: [
        "$\\\\vec{a}\\\\cdot\\\\vec{b}=0$",
        "$\\\\vec{a}\\\\cdot\\\\vec{b}\\\\ne0$",
        "$\\\\vec{a}\\\\cdot\\\\vec{b}=-9$",
        "$\\\\vec{a}\\\\perp\\\\vec{b}$"
    ],
    answer: "$\\\\vec{a}\\\\cdot\\\\vec{b}=-9$"
},

{
    question: "among the following LPP of general pattern is?",
    option: [
        "$maximize = z = cx$ subjected to $AX \\\\geq B,\\\\ x \\\\geq 0$",
        "$maximize = z = cx$ subjected to $AX \\\\leq B,\\\\ x \\\\leq 0$",
        "(a) and (b) both",
        "None of these"
    ],
    answer: "$maximize = z = cx$ subjected to $AX \\\\geq B,\\\\ x \\\\geq 0$"
},

{
    question: "$|\\\\hat{i}+\\\\hat{j}+\\\\hat{k}|=?$",
    option: [
        "$\\\\sqrt{2}$",
        "$\\\\sqrt{3}$",
        "$2$",
        "None of these"
    ],
    answer: "$\\\\sqrt{3}$"
},

{
    question: "a sikof to three times is thrown /  order-from-order two vertex aaby of probability is ?",
    option: [
        "$\\\\frac{3}{8}$",
        "$\\\\frac{1}{2}$",
        "1",
        "2"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "plane $x=0$ and $y=0$ are?",
    option: [
        "parallel",
        "a other perpendicular to",
        "$x$-axis on intersectionii",
        "None of these"
    ],
    answer: "a other perpendicular to"
},

{
    question: "$\\\\int x^6\\\\,dx = ?$",
    option: [
        "$7x^7+c$",
        "$\\\\frac{x^7}{7}+c$",
        "$6x^5+c$",
        "$6x^7+c$"
    ],
    answer: "$\\\\frac{x^7}{7}+c$"
},

{
    question: "point $(1,2,-3)$ from gujrby having plane, which plane $x+y+z=1$ of parallel is, of the equation is?",
    option: [
        "$x+y+z=0$",
        "$x+y+z=6$",
        "$3x+2z=0$",
        "None of these"
    ],
    answer: "$x+y+z=0$"
},

{
    question: "$\\\\frac{dx}{dy}=h\\\\left(\\\\frac{x}{y}\\\\right)$ of form having equaldegreeiiy differential equation to solution krby for following in from which substitution thator is is ?",
    option: [
        "$y=vx$",
        "$v=\\\\frac{y}{x}$",
        "$x=vy$",
        "$x=v$"
    ],
    answer: "$x=vy$"
},

{
    question: "If A and B two mutually exclusive events are and $P(A)=\\\\frac{1}{5}$ and $P(B)=\\\\frac{2}{5}$ then $P(A \\\\cup B)$ the value of among the following kor will be ?",
    option: [
        "$\\\\frac{3}{5}$",
        "$\\\\frac{2}{25}$",
        "0",
        "None of these"
    ],
    answer: "$\\\\frac{3}{5}$"
},

{
    question: "If $\\\\left|\\\\begin{array}{cc}1-x&2\\\\\\\\18&6\\\\end{array}\\\\right|=\\\\left|\\\\begin{array}{cc}6&2\\\\\\\\18&6\\\\end{array}\\\\right|$ then $x=$",
    option: [
        "$\\\\pm6$",
        "6",
        "-5",
        "7"
    ],
    answer: "-5"
},

{
    question: "any circle of radius of bddh'by of rate $0.4$ cm./fromkNdd is, then its onidhi of bddh'by of rate is -",
    option: [
        "$0.4\\\\pi$ cm./fromkNdd",
        "$0.8\\\\pi$ cm./fromkNdd",
        "$0.8$ cm./fromkNdd",
        "None of these"
    ],
    answer: "$0.8\\\\pi$ cm./fromkNdd"
},

{
    question: "If $\\\\vec{a}\\\\perp\\\\vec{b}$ and $\\\\vec{a}\\\\cdot\\\\vec{b}=0$ then which of the following true is ?",
    option: [
        "$\\\\vec{a}\\\\perp\\\\vec{b}$",
        "$\\\\vec{a}\\\\parallel\\\\vec{b}$",
        "$\\\\vec{a}=0$ and $\\\\vec{b}=0$",
        "$\\\\vec{a}=0$ or $\\\\vec{b}=0$"
    ],
    answer: "$\\\\vec{a}\\\\perp\\\\vec{b}$"
},

{
    question: "$\\\\begin{vmatrix}2&3&5\\\\\\\\0&4&7\\\\\\\\0&0&5\\\\end{vmatrix}=?$",
    option: [
        "40",
        "0",
        "3",
        "25"
    ],
    answer: "40"
},

{
    question: "If $\\\\int e^x[f(x)+f'(x)]\\\\,dx=e^x\\\\sin x$ then $f(x)=?$",
    option: [
        "$\\\\sin x$",
        "$-\\\\sin x$",
        "$\\\\cos x-\\\\sin x$",
        "$\\\\sin x+\\\\cos x$"
    ],
    answer: "$\\\\sin x$"
},

{
    question: "If A and B two mutually exclusive events are then $P(A \\\\cap B)=?$",
    option: [
        "0",
        "$\\\\frac{1}{2}$",
        "1",
        "$\\\\frac{1}{4}$"
    ],
    answer: "0"
},

{
    question: "$l=m=n=1$ which axis of direction cosine to represents?",
    option: [
        "$x$-axis",
        "$y$-axis",
        "$z$-axis",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "curve $x^2=2y$ on that point $(0,5)$ which point of near is -",
    option: [
        "$(2\\\\sqrt{2},4)$",
        "$(2\\\\sqrt{2},0)$",
        "$(0,0)$",
        "$(2,2)$"
    ],
    answer: "$(2\\\\sqrt{2},4)$"
},

{
    question: "$\\\\frac{d}{dx}(\\\\sin^{-1}x+\\\\cos^{-1}x)=?$",
    option: [
        "0",
        "1",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{1}{\\\\sqrt{1-x^2}}$"
    ],
    answer: "0"
},

{
    question: "If $\\\\sin^{-1}\\\\left(\\\\frac{2x}{1+x^2}\\\\right)+\\\\sin^{-1}\\\\left(\\\\frac{2x}{1+y^2}\\\\right)=2\\\\tan^{-1}\\\\alpha$ then $\\\\alpha$ the value of is :",
    option: [
        "$\\\\frac{x-y}{1+xy}$",
        "$\\\\frac{y}{1+xy}$",
        "$\\\\frac{y}{1-xy}$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "If $\\\\vec a,\\\\vec b$ two non-zero, non-collinear vector are and $x,y$ two scalar are such that that $x\\\\vec a+y\\\\vec b=\\\\vec 0$ then following in which true will be?",
    option: [
        "$x=0,y\\\\neq0$",
        "$x\\\\neq0,y=0$",
        "$x\\\\neq0,y\\\\neq0$",
        "$x=0,y=0$"
    ],
    answer: "$x=0,y=0$"
},

{
    question: "curve $y=x^2$ of point $(0,0)$ on tangent by $x$-axis of wealthaatmk direction of saath bnaaor gor angle is -",
    option: [
        "$45^\\\\circ$",
        "$90^\\\\circ$",
        "$0^\\\\circ$",
        "$60^\\\\circ$"
    ],
    answer: "$0^\\\\circ$"
},

{
    question: "If $A=\\\\begin{bmatrix}1 & -1 & 2\\\\\\\\2 & 1 & -3\\\\\\\\1 & 1 & 1\\\\end{bmatrix}$ and $B=\\\\begin{bmatrix}4 & 2 & 2\\\\\\\\-5 & 0 & \\\\alpha\\\\\\\\1 & -2 & 3\\\\end{bmatrix}$",
    option: [
        "2",
        "-1",
        "-2",
        "5"
    ],
    answer: "5"
},

{
    question: "interval $(0,\\\\frac{\\\\pi}{2})$ in equation $xe^{\\\\cos x}-\\\\cos x=0$ of solutionoN of sNkhor is -",
    option: [
        "$1$",
        "$2$",
        "$3$",
        "$4$"
    ],
    answer: "$1$"
},

{
    question: "Let function $f:R\\\\to R$, $f(x)=2x^3-1$ profr from is defined, then $f^{-1}$ is:",
    option: [
        "$(1-2x)^3$",
        "$(2x)^3+1$",
        "$2x^3+1$",
        "$\\\\left(\\\\frac{1+x}{2}\\\\right)^{\\\\frac{1}{3}}$"
    ],
    answer: "$\\\\left(\\\\frac{1+x}{2}\\\\right)^{\\\\frac{1}{3}}$"
},

{
    question: "If vertex $(2,-6)$, $(5,4)$, and $(k,4)$ having triangle of area 35 square iofii be, then $k$ the value of is :-",
    option: [
        "12",
        "-2",
        "-12, -2",
        "12, -2"
    ],
    answer: "12, -2"
},

{
    question: "If $\\\\sqrt{x}+\\\\sqrt{y}=5$ then $(4,9)$ on $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{3}{2}$",
        "$-\\\\frac{3}{2}$",
        "$-\\\\frac{2}{3}$"
    ],
    answer: "$-\\\\frac{3}{2}$"
},

{
    question: "$[\\\\vec{a}+\\\\vec{b},\\\\vec{b}+\\\\vec{c},\\\\vec{c}+\\\\vec{a}]$ the value of is equal to ?",
    option: [
        "$[\\\\vec{a}\\\\vec{b}\\\\vec{c}]^2$",
        "$2[\\\\vec{a},\\\\vec{b},\\\\vec{c}]$",
        "$2[\\\\vec{a}+\\\\vec{b}+\\\\vec{c}]$",
        "None of these"
    ],
    answer: "$2[\\\\vec{a},\\\\vec{b},\\\\vec{c}]$"
},

{
    question: "If $\\\\vec{a}\\\\cdot\\\\vec{b}=0$, then which true is ?",
    option: [
        "$\\\\vec{a}\\\\ perpendicular\\\\ \\\\vec{b}$",
        "$\\\\vec{a}\\\\ parallel\\\\ \\\\vec{b}$",
        "$\\\\vec{a}+\\\\vec{b}=0$",
        "$\\\\vec{a}-\\\\vec{b}=0$"
    ],
    answer: "$\\\\vec{a}\\\\ perpendicular\\\\ \\\\vec{b}$"
},

{
    question: "linear differential equation $\\\\frac{dy}{dx}+y\\\\tan x=\\\\sec x$ of integrating factor is :-",
    option: [
        "$\\\\sec x$",
        "$\\\\log\\\\sec x$",
        "$\\\\sec x\\\\tan x$",
        "$\\\\tan x$"
    ],
    answer: "$\\\\sec x$"
},

{
    question: "$x$-axis and curve $y=\\\\cos x$, where $0\\\\leq x\\\\leq2\\\\pi$ between bounded by area is :",
    option: [
        "0",
        "2",
        "3",
        "4"
    ],
    answer: "4"
},

{
    question: "$\\\\int\\\\frac{1}{a^2+x^2}\\\\,dx = ?$",
    option: [
        "$\\\\sin^{-1}\\\\frac{x}{a}$",
        "$\\\\frac{1}{a}\\\\tan^{-1}\\\\frac{x}{a}$",
        "$\\\\tan^{-1}\\\\frac{x}{a}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{a}\\\\tan^{-1}\\\\frac{x}{a}$"
},

{
    question: "If A and B two such events are that $P(A)+P(B)P(A\\\\text{ and }B)=P(A)$ then –",
    option: [
        "$P(\\\\frac{B}{A})=1$",
        "$P(\\\\frac{A}{B})=1$",
        "$P(\\\\frac{B}{A})=0$",
        "$P(\\\\frac{A}{B})=0$"
    ],
    answer: "$P(\\\\frac{A}{B})=1$"
},

{
    question: "$x$ of which value for $x(\\\\hat{i}+\\\\hat{j}+\\\\hat{k})$ a iofii vector is ?",
    option: [
        "$\\\\frac{1}{\\\\sqrt{2}}$",
        "$\\\\frac{1}{\\\\sqrt{3}}$",
        "$+\\\\frac{1}{\\\\sqrt{3}}$",
        "None of these"
    ],
    answer: "$+\\\\frac{1}{\\\\sqrt{3}}$"
},

{
    question: "If A and B toii two events are so that $P(A)=0.2$, $P(B)=0.6$ then $P(A \\\\cup B)+P(A \\\\cap B)=?$",
    option: [
        "0.4",
        "0.8",
        "0.12",
        "0.9"
    ],
    answer: "0.8"
},

{
    question: "If $f:R\\\\to R$ where $f(x)=3x-4$ then $f^{-1}(x)$ following in which will be?",
    option: [
        "$\\\\frac{1}{3}(x+4)$",
        "$\\\\frac{1}{3}(x-4)$",
        "$3x-4$",
        "undefined"
    ],
    answer: "$\\\\frac{1}{3}(x+4)$"
},

{
    question: "If $A=\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$ then adjugate $A$ is :",
    option: [
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\cos\\\\theta&\\\\sin\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1&0\\\\\\\\0&-1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$"
},

{
    question: "$\\\\tan^{-1}\\\\sqrt{3}-\\\\sec^{-1}(-2)$ is equal to :",
    option: [
        "$\\\\pi$",
        "$-\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{2\\\\pi}{3}$"
    ],
    answer: "$-\\\\frac{\\\\pi}{3}$"
},

{
    question: "following in from which interval in $y=x^2e^{-x}$ increasing is / ",
    option: [
        "$(-\\\\infty,\\\\infty)$",
        "$(-2,0)$",
        "$(2,\\\\infty)$",
        "$(0,2)$"
    ],
    answer: "$(0,2)$"
},

{
    question: "If $A=\\\\begin{bmatrix}\\\\alpha&2\\\\\\\\2&\\\\alpha\\\\end{bmatrix}$ and $|A^3|=125$ then $\\\\alpha=$",
    option: [
        "$\\\\pm3$",
        "$\\\\pm2$",
        "$\\\\pm5$",
        "0"
    ],
    answer: "$\\\\pm3$"
},

{
    question: "curve $y=x^2$ of point $(0,0)$ on tangent by $x$-axis of wealthaatmk direction of saath bnaaor gor angle is -",
    option: [
        "$90^\\\\circ$",
        "$0^\\\\circ$",
        "$45^\\\\circ$",
        "$30^\\\\circ$"
    ],
    answer: "$0^\\\\circ$"
},

{
    question: "$\\\\frac{d}{dx}(\\\\tan^{-1}x+\\\\cot^{-1}x)=?$",
    option: [
        "$\\\\frac{2}{1+x^2}$",
        "0",
        "1",
        "2"
    ],
    answer: "0"
},

{
    question: "axisoN on equal jhuofv having any line of direction cosine following in which like is?",
    option: [
        "$\\\\left(\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}}\\\\right)$",
        "$\\\\left(-\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}},-\\\\frac{1}{\\\\sqrt{3}}\\\\right)$",
        "$\\\\left(\\\\frac{1}{\\\\sqrt{3}},\\\\frac{2}{\\\\sqrt{3}},\\\\frac{4}{\\\\sqrt{3}}\\\\right)$",
        "None of these"
    ],
    answer: "$\\\\left(\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}},\\\\frac{1}{\\\\sqrt{3}}\\\\right)$"
},

{
    question: "If function $f(x)=x^3-6x^2+9x+3$ decreasing is a function, then-",
    option: [
        "$1<x<3$",
        "$x>1$",
        "$x<1$",
        "$x<3$ or $x>3$"
    ],
    answer: "$1<x<3$"
},

{
    question: "If $y=\\\\sin^{-1}(3x-4x^3)$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{3}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{-4}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{3}{\\\\sqrt{1+x^2}}$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "Let $A=\\\\{(1,2),(1,1),(2,2),(2,1)\\\\}$ and Let $R$, $A$ on a relation be, then $R$ is:",
    option: [
        "transitive",
        "reflexive",
        "symmetric",
        "toii not"
    ],
    answer: "toii not"
},

{
    question: "If $\\\\sqrt{x}+\\\\sqrt{y}=\\\\sqrt{a}$ then $\\\\frac{dy}{dx}$ the value of is ?",
    option: [
        "$-\\\\frac{\\\\sqrt{x}}{\\\\sqrt{y}}$",
        "$-\\\\frac{1}{2}\\\\sqrt{\\\\frac{x}{y}}$",
        "$-\\\\sqrt{\\\\frac{y}{x}}$",
        "None of these"
    ],
    answer: "$-\\\\sqrt{\\\\frac{y}{x}}$"
},

{
    question: "radius $r$ with respect to circle of area onivrtn of rate, when $r=14$ sec.m is and $(\\\\pi=\\\\frac{22}{7})$",
    option: [
        "$48\\\\,\\\\text{cm}^2/\\\\text{cm}$",
        "$88\\\\,\\\\text{cm}^2/\\\\text{cm}$",
        "$28\\\\,\\\\text{cm}^2/\\\\text{cm}$",
        "$22\\\\,\\\\text{cm}^2/\\\\text{cm}$"
    ],
    answer: "$88\\\\,\\\\text{cm}^2/\\\\text{cm}$"
},

{
    question: "simple lines $y=|x|$, $y=0$, $|x|=1$ from bounded region is the area :",
    option: [
        "0",
        "$\\\\frac{1}{2}$",
        "1",
        "2"
    ],
    answer: "1"
},

{
    question: "If $y=\\\\cos^{-1}\\\\left(\\\\frac{x^2-1}{x^2+1}\\\\right)$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{2}{(1+x^2)}$",
        "$-\\\\frac{2}{(1+x^2)}$",
        "$\\\\frac{2x}{(1+x^2)}$",
        "None of these"
    ],
    answer: "$-\\\\frac{2}{(1+x^2)}$"
},

{
    question: "$\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$ of inverse is :",
    option: [
        "$\\\\begin{bmatrix}-\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&-\\\\cos\\\\theta\\\\end{bmatrix}$",
        "None of these"
    ],
    answer: "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$"
},

{
    question: "plane $2x+3y+4z=12$ coordinate axes from $A,B,C$ pointoN on obtained is then $\\\\triangle ABC$ of gravity ofndr of niormk are -",
    option: [
        "$(2,3,4)$",
        "$(6,4,3)$",
        "$\\\\left(2,\\\\frac{4}{3},1\\\\right)$",
        "None of these"
    ],
    answer: "$\\\\left(2,\\\\frac{4}{3},1\\\\right)$"
},

{
    question: "$x$-axis and curve $y=4x-x^2-3$ between bounded by area is :",
    option: [
        "$\\\\frac{4}{3}$",
        "$\\\\frac{3}{4}$",
        "7",
        "$\\\\frac{3}{2}$"
    ],
    answer: "$\\\\frac{4}{3}$"
},

{
    question: "$\\\\int_0^4x\\\\sqrt{x}\\\\,dx = ?$",
    option: [
        "12.8",
        "12.4",
        "7",
        "9"
    ],
    answer: "12.8"
},

{
    question: "If $\\\\cot^{-1}\\\\left[(\\\\cos\\\\alpha)^{1/2}\\\\right]-\\\\tan^{-1}\\\\left[(\\\\cot\\\\alpha)^{1/2}\\\\right]=x$ then $\\\\sin x$ = ?",
    option: [
        "$\\\\tan^2\\\\frac{\\\\alpha}{2}$",
        "$\\\\cot^2\\\\frac{\\\\alpha}{2}$",
        "$\\\\tan\\\\alpha$",
        "$\\\\cot\\\\frac{\\\\alpha}{2}$"
    ],
    answer: "$\\\\tan^2\\\\frac{\\\\alpha}{2}$"
},

{
    question: "differential equation $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^2-x\\\\left(\\\\frac{dy}{dx}\\\\right)^3=y^3$ of degree is :-",
    option: [
        "0",
        "1",
        "2",
        "3"
    ],
    answer: "2"
},

{
    question: "planes $4x-3y+2z+1=0$ and $x+y-z=2$ of ofttn by the line passing were plane $x+2y-5z=0$ perpendicular to plane of equation will be -",
    option: [
        "$x+2y+z=0$",
        "$11x-3y+z=4$",
        "$x+2y-5z=4$",
        "None of these"
    ],
    answer: "$11x-3y+z=4$"
},

{
    question: "If $A=\\\\begin{bmatrix}3&1\\\\\\\\-1&2\\\\end{bmatrix}$ then $A^2-5A-7I$ the value of is / ",
    option: [
        "equal iofii matrix",
        "zero matrix",
        "(a) and (b) twonoN",
        "toii not"
    ],
    answer: "zero matrix"
},

{
    question: "$f(x)=x^3-27x+5$ a continuous increasing function is, If -",
    option: [
        "$x<-3$",
        "$|x|>3$",
        "$|x|<3$",
        "$x\\\\geq3$"
    ],
    answer: "$|x|>3$"
},

{
    question: "maximum ofjie $Z = 5x_1 + 7x_2$ while $x_1 + x_2 \\\\leq 4$, $3x_1 + 8x_2 \\\\leq 24$, $10x_1 + 7x_2 \\\\leq 35$ and $x_1 \\\\geq 0, x_2 \\\\geq 0$ is -",
    option: [
        "14.8",
        "24.8",
        "34.8",
        "None of these"
    ],
    answer: "24.8"
},

{
    question: "point where on simple line $y=x+1$, curve $y^2=4x$ on tangent is ?",
    option: [
        "$(2,1)$",
        "$(1,2)$",
        "$(-1,2)$",
        "$(1,-2)$"
    ],
    answer: "$(1,2)$"
},

{
    question: "function $f(x)=\\\\sin^4x+\\\\cos^4x$ of periodicofl is:",
    option: [
        "$2\\\\pi$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "toii not"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "plane $x=0$ and $y=0$ are?",
    option: [
        "parallel",
        "a other perpendicular to",
        "$z$-axis on intersectionii",
        "None of these"
    ],
    answer: "a other perpendicular to"
},

{
    question: "curve $y=x^2+3x+4$ point $(1,1)$ on normal of prvnntaa is?",
    option: [
        "$5$",
        "$-\\\\frac{1}{5}$",
        "$8$",
        "$-\\\\frac{1}{8}$"
    ],
    answer: "$-\\\\frac{1}{5}$"
},

{
    question: "$\\\\begin{vmatrix}a&1&b+c\\\\\\\\b&1&c+a\\\\\\\\c&1&a+b\\\\end{vmatrix}=?$",
    option: [
        "$abc$",
        "0",
        "$a+b+c$",
        "None of these"
    ],
    answer: "0"
},

{
    question: "If $A^2-A+I=0$ be then $A$ of inverse is",
    option: [
        "$A$",
        "$A+I$",
        "$I-A$",
        "$A-I$"
    ],
    answer: "$I-A$"
},

{
    question: "If $y=\\\\sec^{-1}\\\\left[\\\\frac{\\\\sqrt{x}+1}{\\\\sqrt{x}-1}\\\\right]+\\\\sin^{-1}\\\\left[\\\\frac{\\\\sqrt{x}-1}{\\\\sqrt{x}+1}\\\\right]$ be, then $\\\\frac{dy}{dx}$ = ?",
    option: [
        "1",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "0"
    ],
    answer: "0"
},

{
    question: "two simple lines of direction ratios $l_1,m_1,n_1$ and $l_2,m_2,n_2$ are /  twonoN simple lineeN onsperpendicular to will be If -",
    option: [
        "$l_1l_2+m_1m_2+n_1n_2=0$",
        "$l_1l_2+m_1m_2+n_1n_2=1$",
        "$\\\\frac{l_1}{l_2}=\\\\frac{m_1}{m_2}=\\\\frac{n_1}{n_2}$",
        "$\\\\frac{l_1}{l_2}+\\\\frac{m_1}{m_2}+\\\\frac{n_1}{n_2}=0$"
    ],
    answer: "$l_1l_2+m_1m_2+n_1n_2=0$"
},

{
    question: "curve $y=x^3$, $x$-axis and ordinates $x=-2$, $x=1$ from bounded region is the area :",
    option: [
        "-9",
        "$-\\\\frac{15}{4}$",
        "$\\\\frac{15}{4}$",
        "$\\\\frac{17}{4}$"
    ],
    answer: "$\\\\frac{17}{4}$"
},

{
    question: "$\\\\int\\\\frac{1}{\\\\sqrt[3]{x}}\\\\,dx = ?$",
    option: [
        "$\\\\frac{3}{2}x^{2/3}+k$",
        "$\\\\frac{3}{2x^{2/3}}+k$",
        "$\\\\frac{3}{3x^{2/3}}+k$",
        "$\\\\frac{2}{3}x^{2/3}+k$"
    ],
    answer: "$\\\\frac{3}{2}x^{2/3}+k$"
},

{
    question: "If $A=\\\\begin{bmatrix}2&1&3\\\\\\\\5&4&6\\\\end{bmatrix}$ then following in which $A'$ is equal to ?",
    option: [
        "$\\\\begin{bmatrix}2&1&3\\\\\\\\5&4&6\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}4&5&6\\\\\\\\1&2&3\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}2&5\\\\\\\\1&4\\\\\\\\3&6\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}3&6\\\\\\\\2&5\\\\\\\\1&4\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}2&5\\\\\\\\1&4\\\\\\\\3&6\\\\end{bmatrix}$"
},

{
    question: "$\\\\int_0^1 e^x\\\\,dx$ the value of which of the following is ?",
    option: [
        "$e-1$",
        "$e$",
        "1",
        "None of these"
    ],
    answer: "$e-1$"
},

{
    question: "curve $y=\\\\sin x$ of point $(0,0)$ on normal of the equation is?",
    option: [
        "$x=0$",
        "$y=0$",
        "$x+y=0$",
        "$x-y=0$"
    ],
    answer: "$x+y=0$"
},

{
    question: "$\\\\int_{-\\\\pi/2}^{\\\\pi/2}\\\\sin^9x\\\\,dx = ?$",
    option: [
        "-1",
        "0",
        "1",
        "None of these"
    ],
    answer: "0"
},

{
    question: "aequation $ax + by \\\\geq c$, $ax + by > c$, $ax + by \\\\leq c$ and $ax + by < c$ in from consistent aequation which of the following is?",
    option: [
        "$ax + by = c$",
        "$ax + by = 0$",
        "$bx + ay = c$",
        "None of these"
    ],
    answer: "$ax + by = c$"
},

{
    question: "If $P(A)=0.2$, $P(\\\\frac{B}{A})=0.3$ then $P(A \\\\cap B)=?$",
    option: [
        "0.06",
        "0.03",
        "0.02",
        "0.05"
    ],
    answer: "0.06"
},

{
    question: "following in which a vector quantity is ?",
    option: [
        "$\\\\vec{a}\\\\times(\\\\vec{b}\\\\cdot\\\\vec{c})$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\times\\\\vec{c})$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\cdot\\\\vec{c})$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "If $y=\\\\log\\\\{\\\\log(\\\\log x)\\\\}$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1}{\\\\log(\\\\log x)}$",
        "$\\\\frac{1}{x\\\\log x\\\\log(\\\\log x)}$",
        "$\\\\frac{1}{x\\\\log(\\\\log x)}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{x\\\\log x\\\\log(\\\\log x)}$"
},

{
    question: "$\\\\int \\\\frac{1}{x}\\\\,dx = ?$",
    option: [
        "$\\\\log_e \\\\frac{1}{x}$",
        "$\\\\log_e x + c$",
        "$\\\\log_a x + c$",
        "None of these"
    ],
    answer: "$\\\\log_e x + c$"
},

{
    question: "$\\\\int \\\\frac{e^{\\\\sqrt{x}}}{\\\\sqrt{x}}\\\\,dx$ among the following whichis equal to ?",
    option: [
        "$e^{\\\\sqrt{x}}$",
        "$\\\\frac{e^{\\\\sqrt{x}}}{2}$",
        "$2e^{\\\\sqrt{x}}$",
        "$\\\\sqrt{x}\\\\,e^{\\\\sqrt{x}}$"
    ],
    answer: "$2e^{\\\\sqrt{x}}$"
},

{
    question: "$\\\\sin(\\\\cot^{-1}x)$ for biijiiy vyNjk is :",
    option: [
        "$\\\\frac{1}{1+x^2}$",
        "$\\\\frac{1}{\\\\sqrt{1+x^2}}$",
        "$\\\\frac{x}{\\\\sqrt{1+x^2}}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{\\\\sqrt{1+x^2}}$"
},

{
    question: "$\\\\vec{a},\\\\vec{b},\\\\vec{c}$ coplanar will be If -",
    option: [
        "$(\\\\vec{a}\\\\cdot\\\\vec{b})\\\\vec{c}=0$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\times\\\\vec{c})=0$",
        "$\\\\vec{a}\\\\times(\\\\vec{b}\\\\times\\\\vec{c})=0$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{b}+\\\\vec{c})=0$"
    ],
    answer: "$\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\times\\\\vec{c})=0$"
},

{
    question: "function $f(x)=\\\\sin^4x+\\\\cos^4x$ increasing is, If -",
    option: [
        "$0<x<\\\\frac{\\\\pi}{8}$",
        "$\\\\frac{\\\\pi}{4}<x<\\\\frac{3\\\\pi}{8}$",
        "$\\\\frac{3\\\\pi}{8}<x<\\\\frac{5\\\\pi}{8}$",
        "$\\\\frac{5\\\\pi}{8}<x<\\\\frac{3\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}<x<\\\\frac{3\\\\pi}{8}$"
},

{
    question: "If $y=e^{1/x}$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1}{x}\\\\left(e^{1/x}-1\\\\right)$",
        "$-\\\\frac{e^{1/x}}{x^2}$",
        "$e^{1/x}\\\\log x$",
        "None of these"
    ],
    answer: "$-\\\\frac{e^{1/x}}{x^2}$"
},

{
    question: "If $y=\\\\tan^{-1}\\\\left(\\\\frac{\\\\sqrt{a}+\\\\sqrt{x}}{1-\\\\sqrt{ax}}\\\\right)$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1}{(1+x^2)}$",
        "$\\\\frac{1}{\\\\sqrt{x}(1+x)}$",
        "$\\\\frac{2}{\\\\sqrt{x}(1+x)}$",
        "$\\\\frac{1}{2\\\\sqrt{x}(1+x)}$"
    ],
    answer: "$\\\\frac{1}{2\\\\sqrt{x}(1+x)}$"
},

{
    question: "If $P(A)=0.8$, $P(B)=0.5$ and $P(\\\\frac{B}{\\\\bar{A}})=0.4$, then $P(\\\\frac{A}{B})=?$",
    option: [
        "0.32",
        "0.64",
        "0.16",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "differential equation $\\\\frac{dy}{dx}=e^{x-y}(e^x-e^y)$ has the solution :-",
    option: [
        "$e^y=e^x-1+Ce^{-x}$",
        "$e^{y-x}=-1+Ce^{-x}$",
        "$e^x+e^y=Ce^{-x}$",
        "None of these"
    ],
    answer: "$e^y=e^x-1+Ce^{-x}$"
},

{
    question: "$\\\\cos^{-1}\\\\left(-\\\\frac{1}{\\\\sqrt{2}}\\\\right)$ principal value is :",
    option: [
        "$\\\\frac{3\\\\pi}{4}$",
        "$\\\\frac{5\\\\pi}{4}$",
        "$-\\\\frac{\\\\pi}{4}$",
        "toii not"
    ],
    answer: "$\\\\frac{3\\\\pi}{4}$"
},

{
    question: "$Z = 6x_1 - 2x_2$ of maximum value for, while $2x_1 - x_2 \\\\leq 2$, $x_1 \\\\leq 3$ and $x_1,x_2 \\\\geq 0$ then $x_1$ and $x_2$ of is the valueN -",
    option: [
        "3, 4",
        "2, 3",
        "1, 2",
        "None of these"
    ],
    answer: "3, 4"
},

{
    question: "If $P(A)=\\\\frac{3}{8}$, $P(B)=\\\\frac{5}{8}$ and $P(A\\\\cup B)=\\\\frac{3}{4}$, then $P(\\\\frac{B}{A})$ is :-",
    option: [
        "$\\\\frac{1}{4}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{2}$"
    ],
    answer: "$\\\\frac{2}{3}$"
},

{
    question: "diirghcircle $\\\\frac{x^2}{a^2}+\\\\frac{y^2}{b^2}=1$ of area following is :",
    option: [
        "$\\\\pi ab$",
        "$\\\\frac{\\\\pi}{4}(a^2+b^2)$",
        "$\\\\pi(a+b)$",
        "$\\\\frac{\\\\pi ab}{4}$"
    ],
    answer: "$\\\\pi ab$"
},

{
    question: "differential equation $1+\\\\left(\\\\frac{dy}{dx}\\\\right)^2=\\\\frac{d^2y}{dx^2}$ of degree is :-",
    option: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: "1"
},

{
    question: "plane $7x+4y-2z+5=0$ on normal of direction cosine is?",
    option: [
        "$(7,4,5)$",
        "$(7,4,-2)$",
        "$(7,4,2)$",
        "$(0,0,0)$"
    ],
    answer: "$(7,4,-2)$"
},

{
    question: "point $3\\\\hat{i}+\\\\hat{j}-\\\\hat{k}$ and $\\\\hat{i}+3\\\\hat{j}+\\\\hat{k}$ to jodd'by having line of middle point of locatedi vector is ?",
    option: [
        "$2\\\\hat{i}+2\\\\hat{j}$",
        "$4\\\\hat{i}+4\\\\hat{j}-2\\\\hat{k}$",
        "$2\\\\hat{i}-2\\\\hat{j}+2\\\\hat{k}$",
        "None of these"
    ],
    answer: "$2\\\\hat{i}+2\\\\hat{j}$"
},

{
    question: "differential equation $x\\\\frac{dy}{dx}=\\\\cot y$ has the solution :-",
    option: [
        "$x\\\\cos y=C$",
        "$x\\\\tan y=C$",
        "$x\\\\sec y=C$",
        "$x\\\\sin y=C$"
    ],
    answer: "$x\\\\cos y=C$"
},

{
    question: "$f:A\\\\to B$ into will be, If",
    option: [
        "$f(A)\\\\subset B$",
        "$f(A)=B$",
        "$B\\\\subset f(A)$",
        "$f(B)\\\\subset A$"
    ],
    answer: "$f(A)\\\\subset B$"
},

{
    question: "among the following which differential a particular solution of the equation $y=x$ is?",
    option: [
        "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=x$",
        "$\\\\frac{d^2y}{dx^2}+x\\\\frac{dy}{dx}+xy=x$",
        "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=0$",
        "$\\\\frac{d^2y}{dx^2}+x\\\\frac{dy}{dx}+xy=0$"
    ],
    answer: "$\\\\frac{d^2y}{dx^2}-x^2\\\\frac{dy}{dx}+xy=0$"
},

{
    question: "$\\\\cos^{-1}\\\\left(\\\\cos\\\\frac{7\\\\pi}{6}\\\\right)$ is equal to :",
    option: [
        "$\\\\frac{7\\\\pi}{6}$",
        "$\\\\frac{5\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$"
    ],
    answer: "$\\\\frac{5\\\\pi}{6}$"
},

{
    question: "differential equation $\\\\frac{d^2y}{dx^2}=\\\\left\\\\{1+\\\\left(\\\\frac{dy}{dx}\\\\right)^2\\\\right\\\\}^{3/2}$ of order and degree respectively are ?",
    option: [
        "$\\\\frac{3}{2},2$",
        "2, 2",
        "$2,\\\\frac{3}{2}$",
        "3, 4"
    ],
    answer: "2, 2"
},

{
    question: "any curve of normal $x$-axis of parallel is, If -",
    option: [
        "$\\\\frac{dy}{dx}=1$",
        "$\\\\frac{dy}{dx}=0$",
        "$\\\\frac{dy}{dy}=1$",
        "$\\\\frac{dx}{dx}=1$"
    ],
    answer: "$\\\\frac{dy}{dy}=1$"
},

{
    question: "$\\\\int x^{5/3}\\\\,dx = ?$",
    option: [
        "$\\\\frac{3}{5}x^{2/3}+c$",
        "$\\\\frac{8}{3}x^{8/3}+c$",
        "$\\\\frac{3}{8}x^{8/3}+c$",
        "$\\\\frac{5}{3}x^{8/3}+c$"
    ],
    answer: "$\\\\frac{3}{8}x^{8/3}+c$"
},

{
    question: "If $x=e^{y+e^y+e^{y}+\\\\cdots}$, $x>0$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{1-x}{x}$",
        "$\\\\frac{1}{x}$",
        "$\\\\frac{x}{1+x}$",
        "$\\\\frac{1+x}{x}$"
    ],
    answer: "$\\\\frac{1+x}{x}$"
},

{
    question: "If $A=\\\\begin{bmatrix}1&2\\\\\\\\2&1\\\\end{bmatrix}$ then sh-khNddj $A=$",
    option: [
        "$\\\\begin{bmatrix}1&-2\\\\\\\\-2&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}2&1\\\\\\\\1&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&-2\\\\\\\\-2&-1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&-2\\\\\\\\2&1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}1&-2\\\\\\\\-2&1\\\\end{bmatrix}$"
},

{
    question: "$\\\\frac{d}{dx}\\\\int f(x)\\\\,dx$ whichis equal to ?",
    option: [
        "$f'(x)$",
        "$f(x)+k$",
        "$f''(x)$",
        "$f(x)+c$"
    ],
    answer: "$f(x)+c$"
},

{
    question: "consistent region binduoN of that set is, which satisfies -",
    option: [
        "objective function to",
        "kuch constraint to",
        "all constraint to",
        "None of these"
    ],
    answer: "all constraint to"
},

{
    question: "function $f(x)=\\\\sqrt{\\\\log_{10}\\\\left(\\\\frac{5x-x^2}{4}\\\\right)}$ of astitv is:",
    option: [
        "$[1,4]$",
        "$[1,0]$",
        "$[0,5]$",
        "$[5,0]$"
    ],
    answer: "$[1,4]$"
},

{
    question: "$xy$-plane of the equation is?",
    option: [
        "$(x=0)$",
        "$(y=0)$",
        "$(z=0)$",
        "$(xz=0)$"
    ],
    answer: "$(z=0)$"
},

{
    question: "If $P(A)=\\\\frac{3}{8}$, $P(B)=\\\\frac{1}{3}$ and $P(A\\\\cap B)=\\\\frac{1}{4}$, then $P(A'\\\\cup B')=?$",
    option: [
        "$\\\\frac{13}{8}$",
        "$\\\\frac{13}{4}$",
        "$\\\\frac{13}{24}$",
        "$\\\\frac{13}{9}$"
    ],
    answer: "$\\\\frac{13}{24}$"
},

{
    question: "triattr constraint $x \\\\geq 0,\\\\ y \\\\geq 0$ of ofrnn consistent region among the following which foot in will be?",
    option: [
        "fourth",
        "first",
        "third",
        "second"
    ],
    answer: "first"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\frac{\\\\sqrt{3}}{2}\\\\right)$ principal value is ?",
    option: [
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "a utpaad of $x$ iofiyoN of vikry from obtained kul income rupyoN in $R(x)=3x^2+36x+5$ from given is /  when $x=15$ is then siimaaNt income is -",
    option: [
        "$116$",
        "$96$",
        "$90$",
        "$126$"
    ],
    answer: "$126$"
},

{
    question: "following in which equaldegreeii differential equation not is ?",
    option: [
        "$y^2dx + (y^2+xy)dy = 0$",
        "$(x-y)dy + y^2dx = 0$",
        "$\\\\frac{dy}{dx}=\\\\frac{y}{x}-\\\\frac{y^3}{x^3}$",
        "$\\\\frac{dy}{dx}=\\\\sin\\\\frac{y}{x}$"
    ],
    answer: "$(x-y)dy + y^2dx = 0$"
},

{
    question: "$\\\\int_0^{\\\\pi/2}\\\\frac{\\\\sqrt{\\\\cot x}}{\\\\sqrt{\\\\tan x+\\\\sqrt{\\\\cot x}}}\\\\,dx$ the value of among the following whichis equal to ?",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$\\\\hat{i}\\\\times\\\\hat{j}=?$",
    option: [
        "$0$",
        "$\\hat{j}$",
        "$-\\hat{j}$",
        "$\\hat{k}$"
    ],
    answer: "$\\hat{k}$"
},

{
    question: "$y$-axis of direction cosine which of the following is?",
    option: [
        "$(0,1,0)$",
        "$(0,0,1)$",
        "$(1,0,0)$",
        "$(0,0,0)$"
    ],
    answer: "$(0,1,0)$"
},

{
    question: "$\\\\frac{\\\\log x}{x}$ of maximum value following is -",
    option: [
        "$1$",
        "$\\\\frac{2}{e}$",
        "$e$",
        "$\\\\frac{1}{e}$"
    ],
    answer: "$\\\\frac{1}{e}$"
},

{
    question: "$xy$-plane on normal of direction cosine is?",
    option: [
        "$(1,0,0)$",
        "$(0,1,0)$",
        "$(1,1,0)$",
        "$(0,0,1)$"
    ],
    answer: "$(0,0,1)$"
},

{
    question: "lines $y=2x+3$, $y=0$, $x=4$, $x=6$ from bby quadrilateral is the area :",
    option: [
        "24",
        "26",
        "22",
        "20"
    ],
    answer: "26"
},

{
    question: "$\\\\int_0^3x(3-x)^{3/2}\\\\,dx = ?$",
    option: [
        "$\\\\frac{108\\\\sqrt{3}}{35}$",
        "$-\\\\frac{108\\\\sqrt{3}}{35}$",
        "$\\\\frac{54\\\\sqrt{3}}{35}$",
        "None of these"
    ],
    answer: "$\\\\frac{108\\\\sqrt{3}}{35}$"
},

{
    question: "two dice to is thrown /  twonoN on aaby having aNtoN of sum 7 aaby of probability is ?",
    option: [
        "$\\\\frac{1}{2}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{1}{9}$",
        "$\\\\frac{5}{36}$"
    ],
    answer: "$\\\\frac{1}{6}$"
},

{
    question: "If $A=\\\\begin{bmatrix}1&1&1\\\\\\\\1&1&1\\\\\\\\1&1&1\\\\end{bmatrix}$ then $A^2=?$",
    option: [
        "$A$",
        "$2A$",
        "$3A$",
        "1"
    ],
    answer: "$3A$"
},

{
    question: "taash of 52 ptthenN in from If a pttaa khiiNcaa jaae then its ikof beby of probability is -",
    option: [
        "$\\\\frac{1}{26}$",
        "$\\\\frac{1}{13}$",
        "$\\\\frac{1}{52}$",
        "$\\\\frac{1}{4}$"
    ],
    answer: "$\\\\frac{1}{13}$"
},

{
    question: "curve $y^2=4ax$, $y$-axis and line $y=3$ from bounded region is the area :",
    option: [
        "2",
        "$\\\\frac{9}{4}$",
        "$\\\\frac{9}{3}$",
        "$\\\\frac{9}{2}$"
    ],
    answer: "$\\\\frac{9}{4}$"
},

{
    question: "$\\\\begin{bmatrix}\\\\cos x & -\\\\sin x\\\\\\\\\\\\sin x & \\\\cos x\\\\end{bmatrix}$ the value of will be :",
    option: [
        "$\\\\cos^2x-\\\\sin^2x$",
        "0",
        "1",
        "-1"
    ],
    answer: "1"
},

{
    question: "Let $A=\\\\{1,2,3,\\\\ldots,n\\\\}$ then how many function $f:A\\\\to B$ from defined be can are?",
    option: [
        "$n-1$",
        "$n$",
        "$n$",
        "$\\\\frac{1}{2}n$"
    ],
    answer: "$n$"
},

{
    question: "lines $y=3x$, $x=0$, $y=2$ from bby triangle is the area :",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{3}$",
        "$\\\\frac{3}{2}$",
        "4"
    ],
    answer: "$\\\\frac{2}{3}$"
},

{
    question: "If $A=\\\\begin{bmatrix}i&0\\\\\\\\0&-i\\\\end{bmatrix}$ then $A^2=?$",
    option: [
        "$\\\\begin{bmatrix}1&0\\\\\\\\0&-1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1&0\\\\\\\\0&-1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&0\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}-1&0\\\\\\\\0&1\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}-1&0\\\\\\\\0&-1\\\\end{bmatrix}$"
},

{
    question: "a or ordRcchik variable x of probability distribution this profr is ?<br><br>$X$: 1, 2, 3, 4, 5, 6<br>$P(X=x)$: 0.1, $2k$, $k$, 0.2, $3k$, 0.1<br><br>then k the value of is ?",
    option: [
        "0.1",
        "0.2",
        "0.3",
        "0.4"
    ],
    answer: "0.1"
},

{
    question: "equation $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^3-4\\\\frac{dy}{dx}=2$ of degree is :-",
    option: [
        "0",
        "1",
        "2",
        "3"
    ],
    answer: "3"
},

{
    question: "$\\\\cos\\\\tan^{-1}[\\\\sin\\\\cot^{-1}x]$ the value of is :",
    option: [
        "$\\\\sqrt{\\\\frac{x^2+1}{x^2+2}}$",
        "$\\\\sqrt{\\\\frac{x^2-1}{x^2+2}}$",
        "$\\\\sqrt{\\\\frac{x^2+1}{x^2-2}}$",
        "$\\\\sqrt{\\\\frac{x^2-1}{x^2-2}}$"
    ],
    answer: "$\\\\sqrt{\\\\frac{x^2+1}{x^2+2}}$"
},

{
    question: "If $\\\\vec{a}\\\\cdot(\\\\vec{b}\\\\times\\\\vec{c})=3$, then following in which correct is ?",
    option: [
        "$\\\\vec{c}\\\\cdot(\\\\vec{a}\\\\times\\\\vec{b})=-3$",
        "$\\\\vec{a}\\\\cdot(\\\\vec{c}\\\\times\\\\vec{b})=-3$",
        "$\\\\vec{b}\\\\cdot(\\\\vec{a}\\\\times\\\\vec{c})=3$",
        "$(\\\\vec{a}\\\\times\\\\vec{c})\\\\cdot\\\\vec{b}=3$"
    ],
    answer: "$\\\\vec{a}\\\\cdot(\\\\vec{c}\\\\times\\\\vec{b})=-3$"
},

{
    question: "relation $R=\\\\{(1,3),(4,2),(2,4),(2,3),(3,1)\\\\}$ set $A=\\\\{1,2,3,4\\\\}$ on what type relation is?",
    option: [
        "sNkraamk",
        "reflexive",
        "symmetric",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "$\\\\int\\\\frac{\\\\sec^2x}{\\\\cosec^2x}\\\\,dx = ?$",
    option: [
        "$x-\\\\tan x+c$",
        "$\\\\tan x+x+c$",
        "$\\\\tan x-x+c$",
        "$-\\\\tan x-x+c$"
    ],
    answer: "$\\\\tan x-x+c$"
},

{
    question: "two dice of throw in aNk 2 of aaby of probability is -",
    option: [
        "$\\\\frac{2}{3}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{5}{6}$",
        "$\\\\frac{5}{36}$"
    ],
    answer: "$\\\\frac{1}{6}$"
},

{
    question: "line $\\\\frac{x-1}{1}=\\\\frac{y-2}{2}=\\\\frac{z}{0}$ plane $3x-y+z=0$ to which point on oftttii is?",
    option: [
        "$(0,0,0)$",
        "$(1,2,0)$",
        "$(0,1,1)$",
        "None of these"
    ],
    answer: "$(0,0,0)$"
},

{
    question: "function $f(x)=\\\\cos x-2px$ a continuous decreasing is a function If -",
    option: [
        "$p<\\\\frac{1}{2}$",
        "$p>\\\\frac{1}{2}$",
        "$p<2$",
        "$p>2$"
    ],
    answer: "$p>\\\\frac{1}{2}$"
},

{
    question: "$\\\\hat{i}+3\\\\hat{j}+\\\\hat{k}$ on $2\\\\hat{i}-3\\\\hat{j}+6\\\\hat{k}$ of projection is equal to ?",
    option: [
        "$\\\\frac{1}{7}$",
        "$-\\\\frac{1}{7}$",
        "$7$",
        "$-7$"
    ],
    answer: "$-\\\\frac{1}{7}$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}=2^{x+y}$ has the solution :-",
    option: [
        "$2^x+2^y=C$",
        "$2^x+2^{-y}=C$",
        "$2^x-2^{-y}=C$",
        "None of these"
    ],
    answer: "$2^x+2^{-y}=C$"
},

{
    question: "If $\\\\sqrt{x}+\\\\sqrt{y}=\\\\sqrt{a}$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "$-\\\\frac{\\\\sqrt{x}}{\\\\sqrt{y}}$",
        "$-\\\\frac{1}{2}\\\\frac{\\\\sqrt{y}}{\\\\sqrt{x}}$",
        "$-\\\\frac{\\\\sqrt{y}}{\\\\sqrt{x}}$",
        "None of these"
    ],
    answer: "$-\\\\frac{\\\\sqrt{y}}{\\\\sqrt{x}}$"
},

{
    question: "$\\\\cos^{-1}\\\\left(\\\\frac{1}{2}\\\\right)+2\\\\sin^{-1}\\\\left(\\\\frac{1}{2}\\\\right)$ the value of is :",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{5\\\\pi}{6}$"
    ],
    answer: "$\\\\frac{2\\\\pi}{3}$"
},

{
    question: "differential equation $\\\\left(\\\\frac{dy}{dx}\\\\right)^2+y=x$ of order is :-",
    option: [
        "0",
        "1",
        "2",
        "3"
    ],
    answer: "1"
},

{
    question: "$\\\\sin x + \\\\cos x$ of maximum value when $0 < x < \\\\frac{\\\\pi}{2}$ is?",
    option: [
        "1",
        "2",
        "$\\\\sqrt{2}$",
        "$\\\\sqrt{\\\\frac{3}{2}}$"
    ],
    answer: "$\\\\sqrt{2}$"
},

{
    question: "$|-\\\\hat{i}+2\\\\hat{j}-3\\\\hat{k}|=?$",
    option: [
        "$\\\\sqrt{15}$",
        "$\\\\sqrt{3}$",
        "$2$",
        "$\\\\sqrt{14}$"
    ],
    answer: "$\\\\sqrt{14}$"
},

{
    question: "If $y=\\\\tan^{-1}\\\\left(\\\\frac{\\\\cos x+\\\\sin x}{\\\\cos x-\\\\sin x}\\\\right)$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "1",
        "-1",
        "$\\\\frac{1}{2}$",
        "$-\\\\frac{1}{2}$"
    ],
    answer: "1"
},

{
    question: "differential equation $e^{2x-3y}dx+e^{2y-3x}dy=0$ has the solution :-",
    option: [
        "$e^{5x}+e^{5y}=C$",
        "$e^{5x+5y}=C$",
        "$e^{5x}-e^{5y}=C$",
        "None of these"
    ],
    answer: "$e^{5x}+e^{5y}=C$"
},

{
    question: "If $y=2^x$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "$x(2^{x-1})$",
        "$\\\\frac{2^x}{\\\\log 2}$",
        "$2^x(\\\\log 2)$",
        "None of these"
    ],
    answer: "$2^x(\\\\log 2)$"
},

{
    question: "$\\\\frac{d}{dx}e^{1/x}=?$",
    option: [
        "$-\\frac{e^{1/x}}{x^2}$",
        "$\\frac{e^{1/x}}{x^2}$",
        "$e^{1/x}\\cdot\\log x$",
        "None of these"
    ],
    answer: "$-\\frac{e^{1/x}}{x^2}$"
},

{
    question: "$\\\\begin{vmatrix}\\\\cos15^\\\\circ&\\\\sin15^\\\\circ\\\\\\\\\\\\sin75^\\\\circ&\\\\cos75^\\\\circ\\\\end{vmatrix} = ?$",
    option: [
        "1",
        "$\\\\frac{\\\\pi}{2}$",
        "0",
        "None of these"
    ],
    answer: "0"
},

{
    question: "$\\\\sec^{-1}x+\\\\operatorname{cosec}^{-1}x$ the value of is :",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{4}$",
        "$-\\\\frac{\\\\pi}{2}$",
        "1"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "If $y=\\\\tan^{-1}\\\\left(\\\\frac{1-\\\\cos x}{\\\\sin x}\\\\right)$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "1",
        "-1",
        "$\\\\frac{1}{2}$",
        "$-\\\\frac{1}{2}$"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "If $y = \\\\log \\\\sqrt{x}$ then $\\\\frac{dy}{dx}$ the value of following in from which will be ?",
    option: [
        "$\\\\frac{1}{2x}$",
        "$\\\\sqrt{x}$",
        "$\\\\frac{1}{2\\\\sqrt{x}}$",
        "$\\\\frac{\\\\sqrt{x}}{2}$"
    ],
    answer: "$\\\\frac{1}{2x}$"
},

{
    question: "interval $[-1,1]$ in $f(x)=x^2-1$ for Rolle theorem from $c$ the value of is -",
    option: [
        "$\\\\frac{1}{2}$",
        "$0$",
        "$\\\\frac{1}{4}$",
        "None of these"
    ],
    answer: "$0$"
},

{
    question: "If $A=\\\\begin{bmatrix}\\\\cos\\\\alpha&-\\\\sin\\\\alpha\\\\\\\\\\\\sin\\\\alpha&\\\\cos\\\\alpha\\\\end{bmatrix}$ then $AA^T=I$ the value of $\\\\alpha$ is:",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{3\\\\pi}{3}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "vector $5\\\\hat{i}+\\\\hat{j}-3\\\\hat{k}$ and $3\\\\hat{i}-4\\\\hat{j}+7\\\\hat{k}$ of scalar product is ?",
    option: [
        "$10$",
        "$-10$",
        "$15$",
        "$-15$"
    ],
    answer: "$-10$"
},

{
    question: "If $\\\\sin^{-1}x=\\\\frac{\\\\pi}{5},\\\\ x\\\\in(-1,1)$ then $\\\\cos^{-1}x$ = ?",
    option: [
        "$\\\\frac{3\\\\pi}{10}$",
        "$\\\\frac{5\\\\pi}{10}$",
        "$\\\\frac{7\\\\pi}{10}$",
        "$\\\\frac{9\\\\pi}{10}$"
    ],
    answer: "$\\\\frac{3\\\\pi}{10}$"
},

{
    question: "curve $x=1$, $x=3$, $xy=1$ and $x$-axis from bounded regionphl is :",
    option: [
        "$\\\\log 2$",
        "$\\\\log 3$",
        "$\\\\log 4$",
        "None of these"
    ],
    answer: "$\\\\log 3$"
},

{
    question: "plane $7x+4y-2z+5=0$ on normal of direction ratios are -",
    option: [
        "$7,4,-2$",
        "$7,4,5$",
        "$7,4,2$",
        "$4,-2,5$"
    ],
    answer: "$7,4,-2$"
},

{
    question: "If $A=\\\\begin{bmatrix}\\\\cos x & -\\\\sin x\\\\\\\\\\\\sin x & \\\\cos x\\\\end{bmatrix}$ then $A+A^T=I$ If $x$ the value of is",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\pi$",
        "0"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "pointoN $(0,1,1)$ and $(-1,0,2)$ from passing were that plane of equation kor will be, which plane $x+y+z=0$ perpendicular to is?",
    option: [
        "$x+2y+3z=5$",
        "$2x-y+z=0$",
        "$x-y+1=0$",
        "None of these"
    ],
    answer: "$x-y+1=0$"
},

{
    question: "If two plane $2x - 4y + 3z = 5$ and $x + 2y + \\\\alpha z = 12$ aaps in perpendicular be then $\\\\alpha = ?$",
    option: [
        "-2",
        "2",
        "3",
        "None of these"
    ],
    answer: "2"
},

{
    question: "If $y=\\\\tan^2x$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$x^3\\\\cdot\\\\cos(x^3)$",
        "$\\\\sec^2x$",
        "$2\\\\tan x\\\\cdot\\\\sec^2x$",
        "None of these"
    ],
    answer: "$2\\\\tan x\\\\cdot\\\\sec^2x$"
},

{
    question: "If A and B two events this way from are that $P(A)=\\\\frac{1}{3}$, $P(B)=\\\\frac{1}{4}$, $P(A \\\\cap B)=\\\\frac{1}{5}$ then $P(\\\\frac{A}{B})=?$",
    option: [
        "$\\\\frac{1}{5}$",
        "$\\\\frac{2}{5}$",
        "$\\\\frac{3}{5}$",
        "$\\\\frac{4}{5}$"
    ],
    answer: "$\\\\frac{4}{5}$"
},

{
    question: "$\\\\cos^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)$ principal value is :",
    option: [
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{2\\\\pi}{3}$",
        "$\\\\frac{3\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{2\\\\pi}{3}$"
},

{
    question: "If function $f(x)=x^3+e^{\\\\frac{x}{2}}$ and $g(x)=f^{-1}(x)$ then $g'(1)$ the value of is:",
    option: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: "2"
},

{
    question: "differential equation $\\\\frac{dy}{dx}+Px=Q$ of integrating factor is :-",
    option: [
        "$\\\\int Pdx$",
        "$\\\\int Qdx$",
        "$\\\\int Pdy$",
        "None of these"
    ],
    answer: "$\\\\int Pdy$"
},

{
    question: "that plane of equation which pointoN $A(a,0,0)$, $B(0,b,0)$ and $C(0,0,c)$ from hokr jaatii is",
    option: [
        "$ax+by+cz=0$",
        "$ax+by+cz=1$",
        "$\\\\frac{x}{a}+\\\\frac{y}{b}+\\\\frac{z}{c}=0$",
        "$\\\\frac{x}{a}+\\\\frac{y}{b}+\\\\frac{z}{c}=1$"
    ],
    answer: "$\\\\frac{x}{a}+\\\\frac{y}{b}+\\\\frac{z}{c}=1$"
},

{
    question: "If $\\\\begin{bmatrix}x+y & y\\\\\\\\2x & x-y\\\\end{bmatrix}\\\\begin{bmatrix}2\\\\\\\\-1\\\\end{bmatrix}=\\\\begin{bmatrix}3\\\\\\\\2\\\\end{bmatrix}$ then $xy$ equal will be",
    option: [
        "-5",
        "-4",
        "4",
        "5"
    ],
    answer: "-5"
},

{
    question: "objective function $Z = 4x + 8y$ of maximum value while $2x + y \\\\leq 30$, $x + 2y \\\\leq 24$, $x \\\\geq 3$, $y \\\\leq 9$, $y \\\\geq 0$ is-",
    option: [
        "$x = 12,\\\\ y = 6$",
        "$x = 6,\\\\ y = 6$",
        "$x = 0,\\\\ y = 6$",
        "None of these"
    ],
    answer: "$x = 12,\\\\ y = 6$"
},

{
    question: "linear prograam of saath smbndhit smsor is?",
    option: [
        "a objective function",
        "two objective function",
        "toii objective function not",
        "None of these"
    ],
    answer: "two objective function"
},

{
    question: "matrix $A$ equation $\\\\begin{bmatrix}0 & 2\\\\\\\\-1 & 1\\\\end{bmatrix}A=\\\\begin{bmatrix}1 & 0\\\\\\\\0 & 1\\\\end{bmatrix}$ aataa is then matrix $A$ is :",
    option: [
        "$\\\\begin{bmatrix}2 & 0\\\\\\\\1 & -1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1 & -2\\\\\\\\1 & 0\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\frac{1}{2} & -1\\\\\\\\\\\\frac{1}{2} & 0\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1 & 2\\\\\\\\-1 & 0\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}\\\\frac{1}{2} & -1\\\\\\\\\\\\frac{1}{2} & 0\\\\end{bmatrix}$"
},

{
    question: "linear differential equation $\\\\frac{dy}{dx}+y\\\\sec^2x=\\\\tan x\\\\sec^2x$ of integrating factor is :-",
    option: [
        "$\\\\tan x$",
        "$e^{\\\\tan x}$",
        "$\\\\log\\\\tan x$",
        "$\\\\tan^2x$"
    ],
    answer: "$e^{\\\\tan x}$"
},

{
    question: "$z$-axis of direction cosines is are -",
    option: [
        "$(0,0,0)$",
        "$(1,0,0)$",
        "$(0,0,1)$",
        "$(0,1,0)$"
    ],
    answer: "$(0,0,1)$"
},

{
    question: "differential equation $\\\\log\\\\left(\\\\frac{dy}{dx}\\\\right)=ax+by$ has the solution :-",
    option: [
        "$\\\\frac{e^{by}}{b}=\\\\frac{e^{ax}}{a}+c$",
        "$\\\\frac{e^{-by}}{-b}=\\\\frac{e^{ax}}{a}+c$",
        "$\\\\frac{e^{-by}}{a}=\\\\frac{e^{ax}}{b}+c$",
        "None of these"
    ],
    answer: "$\\\\frac{e^{-by}}{-b}=\\\\frac{e^{ax}}{a}+c$"
},

{
    question: "$\\\\sin^{-1}(1-x)-2\\\\sin^{-1}x=\\\\frac{\\\\pi}{2}$ then $x$ = ?",
    option: [
        "$0,\\\\frac{1}{2}$",
        "$1,\\\\frac{1}{2}$",
        "$\\\\frac{1}{2}$",
        "0"
    ],
    answer: "0"
},

{
    question: "$f:A\\\\to B$ surjective is a functiongaa, If:",
    option: [
        "$f(A)\\\\subset B$",
        "$f(A)=B$",
        "$f(A)\\\\supset B$",
        "$f(A)\\\\neq B$"
    ],
    answer: "$f(A)=B$"
},

{
    question: "If $x>0,\\\\ xy=1$, then $x+y$ of minimum value following is -",
    option: [
        "$2$",
        "$-2$",
        "$1$",
        "None of these"
    ],
    answer: "$2$"
},

{
    question: "$\\\\int_0^\\\\pi x\\\\,f(\\\\sin x)\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{2}\\\\int_0^\\\\pi f(\\\\sin x)\\\\,dx$",
        "$\\\\frac{\\\\pi}{4}\\\\int_0^\\\\pi f(\\\\sin x)\\\\,dx$",
        "$\\\\int_0^{\\\\pi/2}f(\\\\sin x)\\\\,dx$",
        "$\\\\frac{\\\\pi}{3}\\\\int_0^{\\\\pi/2}f(\\\\cos x)\\\\,dx$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}\\\\int_0^\\\\pi f(\\\\sin x)\\\\,dx$"
},

{
    question: "two line whichof direction cosine $(l_1,m_1,n_1)$ and $(l_2,m_2,n_2)$ is, onsperpendicular tovt will be If -",
    option: [
        "$l_1l_2 = m_1m_2 + n_1n_2 = 0$",
        "$l_1 = l_2,\\\\ m_1 = m_2,\\\\ n_1 = n_2$",
        "$\\\\frac{l_1}{l_2} = \\\\frac{m_1}{m_2} = \\\\frac{n_1}{n_2}$",
        "$l_1l_2 = m_1m_2 = n_1n_2$"
    ],
    answer: "$l_1l_2 = m_1m_2 + n_1n_2 = 0$"
},

{
    question: "If $A$ a $2\\\\times2$ determinant is whichthe value of 5 is, then $|2A|$ the value of will be ?",
    option: [
        "10",
        "25",
        "20",
        "None of these"
    ],
    answer: "20"
},

{
    question: "$\\\\tan^{-1}\\\\sqrt{3}-\\\\cot^{-1}(-\\\\sqrt{3})$ is equal to :",
    option: [
        "$\\\\pi$",
        "$-\\\\frac{\\\\pi}{2}$",
        "0",
        "$2\\\\sqrt{3}$"
    ],
    answer: "$-\\\\frac{\\\\pi}{2}$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}=e^{x+y}$ of general solution will be / ",
    option: [
        "$e^x+e^{-y}=c$",
        "$e^x+e^y=c$",
        "$e^{-x}+e^y=c$",
        "$e^{-x}+e^{-y}=c$"
    ],
    answer: "$e^x+e^{-y}=c$"
},

{
    question: "order 4 of differential equation of general solution in arbitrary constant of sNkhor is / ",
    option: [
        "0",
        "2",
        "3",
        "4"
    ],
    answer: "4"
},

{
    question: "If $A$, $B$ and $C$ three set this profr are that $A\\\\cap B=A\\\\cap C$ and $A\\\\cup B=A\\\\cup C$ then:",
    option: [
        "$A=B$",
        "$A=C$",
        "$B=C$",
        "$A\\\\cap B=d$"
    ],
    answer: "$B=C$"
},

{
    question: "$\\\\int_{-\\\\pi/2}^{\\\\pi/2}(x^3+x\\\\cos x+\\\\tan^3x+1)\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "0",
        "2"
    ],
    answer: "$\\\\pi$"
},

{
    question: "$\\\\int\\\\frac{d\\\\phi(x)}{dx}\\\\,dx$ whichis equal to ?",
    option: [
        "$\\\\phi(x)+c$",
        "$\\\\phi'(x)+c$",
        "$\\\\phi''(x)+c$",
        "None of these"
    ],
    answer: "$\\\\phi(x)+c$"
},

{
    question: "If $P(A)=0.2$, $P(\\\\frac{B}{A})=0.3$, then $P(A \\\\cap B)=?$",
    option: [
        "0.6",
        "0.006",
        "0.06",
        "None of these"
    ],
    answer: "0.06"
},

{
    question: "$x$ of all real valueoN for $\\\\frac{1-x+x^2}{1+x+x^2}$ of minimum value is -",
    option: [
        "$0$",
        "$1$",
        "$3$",
        "$\\\\frac{1}{3}$"
    ],
    answer: "$\\\\frac{1}{3}$"
},

{
    question: "side in 3% increase of ofrnn side $x$ of cube of volume in adjacent is the value -",
    option: [
        "$0.06x^3m^3$",
        "$0.6x^3m^3$",
        "$0.09x^3m^3$",
        "$0.9x^3m^3$"
    ],
    answer: "$0.09x^3m^3$"
},

{
    question: "$\\\\tan^{-1}(1)$ = ?",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{8}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$f(x)=\\\\sqrt{(x-1)(3-x)}$ of onaas is ?",
    option: [
        "$[1,3]$",
        "$[0,1]$",
        "$[-2,2]$",
        "None of these"
    ],
    answer: "$[1,3]$"
},

{
    question: "$\\\\tan^{-1}(1)+\\\\cos^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)+\\\\sin^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)$ = ?",
    option: [
        "0",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{3\\\\pi}{4}$",
        "toii not"
    ],
    answer: "$\\\\frac{3\\\\pi}{4}$"
},

{
    question: "If $(x+y)=\\\\sin(x+y)$ then $\\\\frac{dy}{dx}=?$",
    option: [
        "-1",
        "1",
        "$\\\\frac{1-\\\\cos(x+y)}{\\\\cos^2(x+y)}$",
        "None of these"
    ],
    answer: "-1"
},

{
    question: "$\\\\left(\\\\frac{1}{x}\\\\right)^x$ of maximum is the value -",
    option: [
        "$e$",
        "$(e)^{1/e}$",
        "$\\\\left(\\\\frac{1}{e}\\\\right)^e$",
        "None of these"
    ],
    answer: "$(e)^{1/e}$"
},

{
    question: "$A=[a_{ij}]_{m\\\\times n}$ a square matrix is If :",
    option: [
        "$m=n$",
        "$m<n$",
        "$m>n$",
        "None of these"
    ],
    answer: "$m=n$"
},

{
    question: "linear programming smsor maximum $z = 3x + 2y$<br>$x + 2y \\\\leq 10$<br>while $3x + y \\\\leq 15$<br>$x,y \\\\geq 0$<br>solution of which foot in will be?",
    option: [
        "fourth",
        "first",
        "third",
        "second"
    ],
    answer: "first"
},

{
    question: "two khilaadd'iyoN in from each 4 sikof uchaaltaa is /  this baat of probability that twonoN equal-equal sNkhor in vertex obtained do are, following is :-",
    option: [
        "$\\\\frac{5}{256}$",
        "$\\\\frac{1}{16}$",
        "$\\\\frac{35}{128}$",
        "None of these"
    ],
    answer: "$\\\\frac{35}{128}$"
},

{
    question: "A die is thrown six times. If “throwing an even number” is a success, then the probability of success six times is ?",
    option: [
        "$\\\\frac{1}{64}$",
        "$\\\\frac{3}{32}$",
        "$\\\\frac{7}{64}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{64}$"
},

{
    question: "If f : R → R where f(x) = 3x then what type is a function?",
    option: [
        "one-one onto",
        "many-one onto",
        "one-one into",
        "many-one into"
    ],
    answer: "one-one onto"
},

{
    question: "two line whichof direction cosine $(l_1,m_1,n_1)$ and $(l_2,m_2,n_2)$ is, onsperpendicular tovt will be If -",
    option: [
        "$l_1l_2=m_1m_2+n_1n_2=0$",
        "$\\\\frac{1}{36}$",
        "$\\\\frac{1}{12}$",
        "$\\\\frac{1}{6}$"
    ],
    answer: "$\\\\frac{1}{36}$"
},

{
    question: "differential equation $\\\\frac{d^2y}{dx^2}+x^3\\\\left(\\\\frac{dy}{dx}\\\\right)^2=x^4$ of order following in which-as is ?",
    option: [
        "1",
        "2",
        "3",
        "0"
    ],
    answer: "2"
},

{
    question: "$x\\\\vec i+y\\\\vec j+z\\\\vec k$ of direction cosines following in which-as will be?",
    option: [
        "$\\\\sqrt{-x^2+y^2+z^2},\\\\sqrt{x^2-y^2+z^2},\\\\sqrt{x^2+y^2-z^2}$",
        "$x\\\\sqrt{-x^2+y^2+z^2},y\\\\sqrt{x^2-y^2+z^2},z\\\\sqrt{x^2+y^2-z^2}$",
        "$\\\\frac{x}{\\\\sqrt{x^2+y^2+z^2}},\\\\frac{y}{\\\\sqrt{x^2+y^2+z^2}},\\\\frac{z}{\\\\sqrt{x^2+y^2+z^2}}$",
        "$\\\\frac{x}{\\\\sqrt{-x^2+y^2+z^2}},\\\\frac{y}{\\\\sqrt{x^2-y^2+z^2}},\\\\frac{z}{\\\\sqrt{x^2+y^2-z^2}}$"
    ],
    answer: "$\\\\frac{x}{\\\\sqrt{x^2+y^2+z^2}},\\\\frac{y}{\\\\sqrt{x^2+y^2+z^2}},\\\\frac{z}{\\\\sqrt{x^2+y^2+z^2}}$"
},

{
    question: "If $f(x)=3x^2+15x+5$ be, then $f(3.02)$ of adjacent is the value -",
    option: [
        "$47.66$",
        "$57.66$",
        "$67.66$",
        "$77.66$"
    ],
    answer: "$77.66$"
},

{
    question: "differential equation $(x+y)(dx-dy)=dx+dy$ has the solution :-",
    option: [
        "$x+y=Ce^{x+y}$",
        "$x-y=Ce^{x+y}$",
        "$x+y=Ce^{x-y}$",
        "$x-y=Ce^{x-y}$"
    ],
    answer: "$x+y=Ce^{x-y}$"
},

{
    question: "Let $A$ and $B$, $3\\\\times3$ order of matrix is /  If $|A-B|=0$ then following in which true is ?",
    option: [
        "$A=0$ or $B=0$",
        "$|A|=0$ and $|B|=0$",
        "$|A|=0$ or $|B|=0$",
        "$A=0$ and $B=0$"
    ],
    answer: "$A=0$ and $B=0$"
},

{
    question: "If $y = \\\\sin 2x$ then $\\\\frac{d^2y}{dx^2}$ the value of following in from which will be ?",
    option: [
        "$2\\\\sin 4x$",
        "$-4\\\\sin 2x$",
        "$4\\\\sin 2x$",
        "$4\\\\cos^2 x$"
    ],
    answer: "$-4\\\\sin 2x$"
},

{
    question: "If A and B independent events is and $P(A)=0.3$, $P(A \\\\cup B)=0.08$ then $P(B)=?$",
    option: [
        "$\\\\frac{5}{7}$",
        "$\\\\frac{3}{7}$",
        "$\\\\frac{3}{5}$",
        "$\\\\frac{4}{5}$"
    ],
    answer: "$\\\\frac{5}{7}$"
},

{
    question: "$\\\\int\\\\left(\\\\sqrt{x}+\\\\frac{1}{\\\\sqrt{x}}\\\\right)^2dx$ is equal to ?",
    option: [
        "$\\\\frac{x^2}{2}+\\\\log_e x-2x+c$",
        "$\\\\frac{x^2}{2}+\\\\log x+2x+c$",
        "$\\\\frac{x^2}{2}+\\\\log x-2x+c$",
        "None of these"
    ],
    answer: "$\\\\frac{x^2}{2}+\\\\log x+2x+c$"
},

{
    question: "$\\\\int\\\\frac{\\\\cos2x}{(\\\\sin x+\\\\cos x)^2}\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{\\\\sin x+\\\\cos x}+c$",
        "$\\\\log(\\\\sin x+\\\\cos x)+c$",
        "$\\\\log|\\\\sin x-\\\\cos x|+c$",
        "$\\\\frac{1}{(\\\\sin x+\\\\cos x)^2}+c$"
    ],
    answer: "$\\\\log(\\\\sin x+\\\\cos x)+c$"
},

{
    question: "differentiation equation $\\\\left\\\\{1+\\\\left(\\\\frac{dy}{dx}\\\\right)^2\\\\right\\\\}^{3/2}=m\\\\frac{d^2y}{dx^2}$ of degree following in from which will be ?",
    option: [
        "2",
        "3",
        "1",
        "0"
    ],
    answer: "2"
},

{
    question: "If $\\\\begin{vmatrix}1-x&2\\\\\\\\18&6\\\\end{vmatrix}=\\\\begin{vmatrix}6&2\\\\\\\\18&6\\\\end{vmatrix}$ then $x=?$",
    option: [
        "$\\\\pm6$",
        "6",
        "-5",
        "7"
    ],
    answer: "-5"
},

{
    question: "If $f(x)+2f(1-x)=x^2+2,\\\\ \\\\forall x\\\\in R$ then $f(x)=?$",
    option: [
        "$1$",
        "$x^2-2$",
        "$\\\\frac{1}{3}(x-2)^2$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "If $y=\\\\tan^2x$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\sec^2x$",
        "$\\\\sec^4x$",
        "$2\\\\tan x\\\\cdot\\\\sec^2x$",
        "None of these"
    ],
    answer: "$2\\\\tan x\\\\cdot\\\\sec^2x$"
},

{
    question: "curve $y=2x^2-x+1$ of following point on tangent, line $y=3x+9$ of parallel is -",
    option: [
        "$(-1,5)$",
        "$(1,2)$",
        "$(2,7)$",
        "$(3,16)$"
    ],
    answer: "$(1,2)$"
},

{
    question: "$\\\\int\\\\frac{dx}{a^2+x^2} = ?$",
    option: [
        "$\\\\log(x+\\\\sqrt{x^2+a^2})$",
        "$\\\\log(x-\\\\sqrt{x^2+a^2})$",
        "$\\\\log(x+\\\\sqrt{x^2-a^2})$",
        "None of these"
    ],
    answer: "$\\\\log(x+\\\\sqrt{x^2+a^2})$"
},

{
    question: "differential equation $\\\\frac{dy}{dx}=\\\\frac{1+y^2}{1+x^2}$ has the solution :-",
    option: [
        "$y+x=C(1-xy)$",
        "$y-x=C(1+xy)$",
        "$y=(1+x)C$",
        "None of these"
    ],
    answer: "$y-x=C(1+xy)$"
},

{
    question: "If $|x| \\\\leq 1$ then $\\\\tan(\\\\cos^{-1}x)$ = ?",
    option: [
        "$\\\\frac{\\\\sqrt{1-x^2}}{x}$",
        "$\\\\frac{x}{1+x^2}$",
        "$\\\\frac{\\\\sqrt{1+x^2}}{x}$",
        "$\\\\sqrt{1+x^2}$"
    ],
    answer: "$\\\\frac{\\\\sqrt{1-x^2}}{x}$"
},

{
    question: "If $\\\\vec{a}, \\\\vec{b}$ and $\\\\vec{c}$ a other of perpendicular iofii vector are, then $(\\\\vec{a}-\\\\vec{b})^2+(\\\\vec{b}-\\\\vec{c})^2+(\\\\vec{c}-\\\\vec{a})^2$ = ?",
    option: [
        "$6$",
        "$3$",
        "$4$",
        "$9$"
    ],
    answer: "$6$"
},

{
    question: "If $A=\\\\begin{bmatrix}3 & 1\\\\\\\\-1 & 2\\\\end{bmatrix}$ then $A^2-5A-7I$ is :",
    option: [
        "zero matrix is",
        "diagonal matrix is",
        "ttsmk matrix is",
        "toii not"
    ],
    answer: "diagonal matrix is"
},

{
    question: "If $y=\\\\log(\\\\sin x^2)$, at $x=\\\\frac{\\\\pi}{2}$ on $\\\\frac{dy}{dx}$ is equal to ?",
    option: [
        "0",
        "1",
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\sqrt{\\\\pi}$"
    ],
    answer: "$\\\\sqrt{\\\\pi}$"
},

{
    question: "dior happened is that $A=\\\\{x,y,z\\\\}, B=\\\\{u,v,w\\\\}$ then function $f:A\\\\to B$ then $f(x)=u, f(y)=v, f(z)=w$ what type of function will be?",
    option: [
        "Surjective",
        "Bijective",
        "Injective",
        "None"
    ],
    answer: "Bijective"
},

{
    question: "If $A=\\\\begin{bmatrix}1&2\\\\\\\\4&2\\\\end{bmatrix}$ then $2|A|=$",
    option: [
        "$2|A|$",
        "$4|A|$",
        "$8|A|$",
        "None of these"
    ],
    answer: "$4|A|$"
},

{
    question: "$\\\\int\\\\frac{1}{e^x+e^{-x}}\\\\,dx = ?$",
    option: [
        "$\\\\cot^{-1}(e^x)+k$",
        "$\\\\cot^{-1}(e^{-x})+k$",
        "$\\\\tan^{-1}(e^x)+k$",
        "$\\\\tan^{-1}(e^{-x})+k$"
    ],
    answer: "$\\\\tan^{-1}(e^x)+k$"
},

{
    question: "If linekhNdd $PQ$ on $R$ a point is so that $PR:RQ=2:3$ while $P=(5,2,-6)$ and $Q=(1,0,-3)$, then $R$ of niormk are -",
    option: [
        "$\\\\left(\\\\frac{13}{5},\\\\frac{4}{5},-\\\\frac{21}{5}\\\\right)$",
        "$\\\\left(\\\\frac{6}{5},\\\\frac{2}{5},-\\\\frac{9}{5}\\\\right)$",
        "$\\\\left(\\\\frac{17}{5},\\\\frac{6}{5},-\\\\frac{24}{5}\\\\right)$",
        "None of these"
    ],
    answer: "$\\\\left(\\\\frac{17}{5},\\\\frac{6}{5},-\\\\frac{24}{5}\\\\right)$"
},

{
    question: "$\\\\int\\\\frac{1}{x^2-a^2}\\\\,dx = ?$",
    option: [
        "$\\\\frac{1}{2a}\\\\log\\\\left|\\\\frac{x-a}{x+a}\\\\right|$",
        "$\\\\frac{1}{2a}\\\\log\\\\left|\\\\frac{x+a}{x-a}\\\\right|$",
        "$\\\\log(x+\\\\sqrt{x^2-a^2})$",
        "$\\\\log(x+\\\\sqrt{x^2+a^2})$"
    ],
    answer: "$\\\\frac{1}{2a}\\\\log\\\\left|\\\\frac{x-a}{x+a}\\\\right|$"
},

{
    question: "differential equation $\\\\frac{ydx-xdy}{y}=0$ of general solution is :-",
    option: [
        "$xy=C$",
        "$x=Cy^2$",
        "$y=Cx$",
        "$y=Cx^2$"
    ],
    answer: "$y=Cx$"
},

{
    question: "$f(x)=\\\\frac{x^2+x+2}{x^2+x+1}$ of onaas is:",
    option: [
        "$(1,\\\\infty)$",
        "$\\\\left(\\\\frac{1}{7},3\\\\right)$",
        "$\\\\left(1,\\\\frac{7}{3}\\\\right]$",
        "$\\\\left(1,\\\\frac{11}{7}\\\\right)$"
    ],
    answer: "$\\\\left(1,\\\\frac{7}{3}\\\\right]$"
},

{
    question: "curve $y=a\\\\sin px+b\\\\cos px$ of differential equation is :-",
    option: [
        "$y''+py=0$",
        "$y''+p^2y=0$",
        "$y''-py=0$",
        "$y''-p^2y=0$"
    ],
    answer: "$y''+p^2y=0$"
},

{
    question: "curve $y=\\\\sin x$ of point $(0,0)$ on normal of the equation is -",
    option: [
        "$x=0$",
        "$y=0$",
        "$x+y=0$",
        "$x-y=0$"
    ],
    answer: "$x-y=0$"
},

{
    question: "curve $y=e^{2x}$ of point $(0,1)$ on tangent $x$-axis to following point on obtained is -",
    option: [
        "$(0,a)$",
        "$(2,0)$",
        "$(-\\\\frac{1}{2},0)$",
        "None of these"
    ],
    answer: "$(-\\\\frac{1}{2},0)$"
},

{
    question: "$\\\\sin^{-1}\\\\left(\\\\sin\\\\frac{\\\\pi}{3}\\\\right)+\\\\tan^{-1}\\\\left(\\\\tan\\\\frac{3\\\\pi}{4}\\\\right)$ the value of is :",
    option: [
        "$\\\\frac{17\\\\pi}{12}$",
        "$\\\\frac{5\\\\pi}{12}$",
        "$\\\\frac{\\\\pi}{12}$",
        "$-\\\\frac{7\\\\pi}{12}$"
    ],
    answer: "$\\\\frac{\\\\pi}{12}$"
},

{
    question: "If A = {a, b, c}, B = {1, 2, 3} and f = {(a, 1), (b, 2), (c, 2)} then f what type is a function?",
    option: [
        "one-one into",
        "many-one into",
        "many-one onto",
        "one-one onto"
    ],
    answer: "many-one into"
},

{
    question: "If 7 and 2 equation $\\\\begin{vmatrix}x&3&7\\\\\\\\2&x&2\\\\\\\\7&6&x\\\\end{vmatrix}=0$ of two root are then third root will be",
    option: [
        "-9",
        "14",
        "$\\\\frac{1}{2}$",
        "None of these"
    ],
    answer: "-9"
},

{
    question: "If $\\\\cot^{-1}\\\\sqrt{\\\\cos\\\\theta}-\\\\tan^{-1}\\\\sqrt{\\\\cos\\\\theta}=x$ then $\\\\sin x$ = ?",
    option: [
        "$\\\\frac{1-\\\\cos\\\\theta}{1+\\\\cos\\\\theta}$",
        "$\\\\frac{1+\\\\cos\\\\theta}{1-\\\\cos\\\\theta}$",
        "$\\\\frac{2\\\\sqrt{\\\\cos\\\\theta}}{1+\\\\cos\\\\theta}$",
        "$\\\\frac{2\\\\sqrt{\\\\cos\\\\theta}}{1-\\\\cos\\\\theta}$"
    ],
    answer: "$\\\\frac{1-\\\\cos\\\\theta}{1+\\\\cos\\\\theta}$"
},

{
    question: "maximum ofjie $Z = 6x_1 + 11x_2$ while $2x_1 + x_2 \\\\leq 104$, $x_1 + 2x_2 \\\\leq 76$ and $x_1 \\\\geq 0, x_2 \\\\geq 0$ is -",
    option: [
        "240",
        "540",
        "440",
        "None of these"
    ],
    answer: "440"
},

{
    question: "following in $xy$-plane of the equation is?",
    option: [
        "$x=0$",
        "$y=0$",
        "$x=k$",
        "$z=0$"
    ],
    answer: "$z=0$"
},

{
    question: "gunnottr constraint which of the following is?",
    option: [
        "$x \\\\leq 0,\\\\ y \\\\leq 0$",
        "$x \\\\leq 0,\\\\ y \\\\geq 0$",
        "$x \\\\geq 0,\\\\ y \\\\geq 0$",
        "None of these"
    ],
    answer: "$x \\\\geq 0,\\\\ y \\\\geq 0$"
},

{
    question: "If $f(x)=Kx^3-9x^2+9x+3$ all intervaloN in a continuous increasing function is, then -",
    option: [
        "$K<3$",
        "$K\\\\leq3$",
        "$K>3$",
        "None of these"
    ],
    answer: "$K>3$"
},

{
    question: "curve $y=x-\\\\sin x\\\\cos x$ of normal of equation, where $x=\\\\frac{\\\\pi}{2}$ is following is -",
    option: [
        "$x=\\\\pi$",
        "$x=2$",
        "$x+\\\\pi=0$",
        "$x=\\\\frac{\\\\pi}{2}$"
    ],
    answer: "$x=\\\\frac{\\\\pi}{2}$"
},

{
    question: "If $\\\\begin{vmatrix}x&5\\\\\\\\5&x\\\\end{vmatrix}=0$ then $x=?$",
    option: [
        "$\\\\pm5$",
        "6",
        "0",
        "4"
    ],
    answer: "$\\\\pm5$"
},

{
    question: "$\\\\begin{vmatrix}\\\\sin30^\\\\circ&\\\\cos30^\\\\circ\\\\\\\\-\\\\sin30^\\\\circ&\\\\cos60^\\\\circ\\\\end{vmatrix} = ?$",
    option: [
        "1",
        "0",
        "$\\\\frac{3}{2}$",
        "$\\\\frac{1}{2}$"
    ],
    answer: "1"
},

{
    question: "parabola $x^2=4y$ and line $x=4y-2$ between bounded regionphl is :",
    option: [
        "$\\\\frac{9}{8}$",
        "$\\\\frac{9}{4}$",
        "$\\\\frac{9}{2}$",
        "None of these"
    ],
    answer: "$\\\\frac{9}{8}$"
},

{
    question: "any simple line of direction ratios $1,3,5$ are then thatof direction cosines which of the following will be ?",
    option: [
        "$\\\\frac{1}{\\\\sqrt{35}},\\\\frac{3}{\\\\sqrt{35}},\\\\frac{5}{\\\\sqrt{35}}$",
        "$\\\\frac{1}{9},\\\\frac{1}{3},\\\\frac{5}{9}$",
        "$\\\\frac{5}{\\\\sqrt{35}},\\\\frac{3}{\\\\sqrt{35}},\\\\frac{1}{\\\\sqrt{35}}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{\\\\sqrt{35}},\\\\frac{3}{\\\\sqrt{35}},\\\\frac{5}{\\\\sqrt{35}}$"
},

{
    question: "If $P(A)=0.2$, $P(\\\\frac{B}{A})=0.3$ then $P(A \\\\cap B)=?$",
    option: [
        "0.9",
        "0.06",
        "0.8",
        "None of these"
    ],
    answer: "0.06"
},

{
    question: "$\\\\frac{d}{dx}(\\\\cos^{-1}x)=?$",
    option: [
        "$\\\\frac{1}{2\\\\sqrt{1-x^2}}$",
        "$\\\\sqrt{1-x^2}$",
        "$-\\\\frac{1}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{1}{\\\\sqrt{1-x^2}}$"
    ],
    answer: "$-\\\\frac{1}{\\\\sqrt{1-x^2}}$"
},

{
    question: "If $\\\\vec{a}=2\\\\hat{i}+\\\\hat{j}-8\\\\hat{k}$ and $\\\\vec{b}=\\\\hat{i}+3\\\\hat{j}-4\\\\hat{k}$ then $\\\\vec{a}+\\\\vec{b}$ of onimaann is equal to ?",
    option: [
        "$13$",
        "$\\\\frac{13}{3}$",
        "$\\\\frac{3}{13}$",
        "$\\\\frac{6}{13}$"
    ],
    answer: "$13$"
},

{
    question: "$5\\\\hat{i}+\\\\hat{j}-3\\\\hat{k}$ and $3\\\\hat{i}-4\\\\hat{j}+7\\\\hat{k}$ of scalar product is :-",
    option: [
        "$10$",
        "$-10$",
        "$15$",
        "$-15$"
    ],
    answer: "$-10$"
},

{
    question: "two independent eventoN $E_1$ and $E_2$ for $P(E_1 \\\\cup E_2) \\\\cap \\\\{E_1 \\\\cap E_2\\\\}$ is -",
    option: [
        "$\\\\leq \\\\frac{1}{4}$",
        "$>\\\\frac{1}{4}$",
        "$\\\\geq \\\\frac{1}{2}$",
        "None of these"
    ],
    answer: "$\\\\leq \\\\frac{1}{4}$"
},

{
    question: "If $A$ a utkrmnniiy matrix is whose order $n\\\\times n$ is then",
    option: [
        "$n|A|$",
        "$|A|^{n-1}$",
        "$|A|$",
        "$|A|^n$"
    ],
    answer: "$|A|^{n-1}$"
},

{
    question: "$\\\\tan^{-1}\\\\frac{1}{2}+\\\\tan^{-1}\\\\frac{2}{11}=\\\\tan^{-1}\\\\alpha$ then $\\\\alpha$ = ?",
    option: [
        "$\\\\frac{1}{4}$",
        "$\\\\frac{1}{2}$",
        "$\\\\frac{3}{4}$",
        "1"
    ],
    answer: "$\\\\frac{3}{4}$"
},

{
    question: "$\\\\tan^{-1}\\\\frac{1}{2}+\\\\tan^{-1}\\\\frac{1}{3}$ = ?",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\pi$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "$x$ the value of for which $\\\\sin[\\\\cot^{-1}(1-x)]=\\\\cos(\\\\tan^{-1}x)$",
    option: [
        "2",
        "1",
        "0",
        "$\\\\frac{1}{2}$"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "$\\\\int_{-2}^{2}(ax^3+bx+c)\\\\,dx$ the value of aashrit is ?",
    option: [
        "$a$",
        "$b$",
        "$c$",
        "None of these"
    ],
    answer: "$c$"
},

{
    question: "If $P(A)=\\\\frac{3}{5}$, $P(B)=1$ and A and B independent events are, then $P(A \\\\cap B)=?$",
    option: [
        "5",
        "$\\frac{3}{25}$",
        "$\\frac{1}{25}$",
        "$\\frac{3}{5}$"
    ],
    answer: "$\\frac{3}{5}$"
},

{
    question: "If $y = \\\\sin(\\\\log x)$ then $\\\\frac{dy}{dx} = ?$",
    option: [
        "$-\\\\frac{\\\\cos(\\\\log x)}{x}$",
        "$\\\\frac{\\\\cos(\\\\log x)}{x}$",
        "$\\\\frac{\\\\sin(\\\\log x)}{x}$",
        "None of these"
    ],
    answer: "$\\\\frac{\\\\cos(\\\\log x)}{x}$"
},

{
    question: "If A and B two mutually exclusive events are and $P(A)=\\\\frac{1}{6}$ and $P(B)=\\\\frac{1}{2}$ then $P(A \\\\cap B)$ the value of among the following kor will be ?",
    option: [
        "$\\\\frac{2}{3}$",
        "0",
        "$\\\\frac{1}{12}$",
        "None of these"
    ],
    answer: "0"
},

{
    question: "$\\\\sin^{-1}x+\\\\cot^{-1}x$ the value of is :",
    option: [
        "$\\\\pi$",
        "$\\\\frac{\\\\pi}{2}$",
        "$-\\\\frac{\\\\pi}{2}$",
        "1"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "$\\\\int \\\\frac{k^{\\\\sqrt{x}}}{\\\\sqrt{x}}\\\\,dx = ?$",
    option: [
        "$k^{\\\\sqrt{x}}\\\\log e^k+c$",
        "$2k^{\\\\sqrt{x}}\\\\log_e k+c$",
        "$2k^{\\\\sqrt{x}}\\\\log 10^k+c$",
        "$\\\\frac{2k^{\\\\sqrt{x}}}{\\\\log e^k}+c$"
    ],
    answer: "$\\\\frac{2k^{\\\\sqrt{x}}}{\\\\log e^k}+c$"
},

{
    question: "$\\\\begin{bmatrix}\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$ of inverse is :",
    option: [
        "$\\\\begin{bmatrix}-\\\\cos\\\\theta&-\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\\\\\sin\\\\theta&-\\\\cos\\\\theta\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$",
        "toii not"
    ],
    answer: "$\\\\begin{bmatrix}\\\\cos\\\\theta&\\\\sin\\\\theta\\\\\\\\-\\\\sin\\\\theta&\\\\cos\\\\theta\\\\end{bmatrix}$"
},

{
    question: "$P(\\\\frac{A}{\\\\bar{B}})+P(\\\\frac{\\\\bar{A}}{\\\\bar{B}})=?$",
    option: [
        "1",
        "0",
        "$\\\\frac{1}{2}$",
        "None of these"
    ],
    answer: "1"
},

{
    question: "$\\\\begin{vmatrix}2&3&5\\\\\\\\0&4&7\\\\\\\\0&0&5\\\\end{vmatrix}=?$",
    option: [
        "40",
        "0",
        "3",
        "25"
    ],
    answer: "40"
},

{
    question: "If $A=\\\\begin{bmatrix}1&1&1\\\\\\\\1&1&1\\\\\\\\1&1&1\\\\end{bmatrix}$ then $A^2$ is :",
    option: [
        "$27A$",
        "$2A$",
        "$3A$",
        "1"
    ],
    answer: "$3A$"
},

{
    question: "$Z$ of maximum value where $Z = 3x + 4y$ while $x + y < 40$, $x + 2y \\\\leq 60$, $x \\\\geq 0$ and $y \\\\geq 0$ of aNtrgt is :-",
    option: [
        "120",
        "140",
        "100",
        "160"
    ],
    answer: "140"
},

{
    question: "origin from point $(-3,4,5)$ of distance is -",
    option: [
        "$50$",
        "$5\\\\sqrt{2}$",
        "$6$",
        "None of these"
    ],
    answer: "$5\\\\sqrt{2}$"
},

{
    question: "$(\\\\vec{a}\\\\times\\\\vec{b})^2=?$",
    option: [
        "$a^2+b^2-(\\\\vec{a}\\\\cdot\\\\vec{b})$",
        "$a^2b^2-(\\\\vec{a}\\\\cdot\\\\vec{b})^2$",
        "$a^2.b^2-2\\\\vec{a}.\\\\vec{b}$",
        "$\\\\vec{a}^2.\\\\vec{b}^2+2\\\\vec{a}.\\\\vec{b}$"
    ],
    answer: "$a^2b^2-(\\\\vec{a}\\\\cdot\\\\vec{b})^2$"
},

{
    question: "curve $y=\\\\sin x$ of point $(\\\\pi,0)$ on normal of the equation is -",
    option: [
        "$x+y=\\\\pi$",
        "$x+y+\\\\pi=0$",
        "$x-y=\\\\pi$",
        "$x-y+\\\\pi=0$"
    ],
    answer: "$x-y=\\\\pi$"
},

{
    question: "If $y=\\\\tan^{-1}\\\\left(\\\\frac{a\\\\cos x-b\\\\sin x}{b\\\\cos x+a\\\\sin x}\\\\right)$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$\\\\frac{a}{b}$",
        "$-\\\\frac{b}{a}$",
        "1",
        "-1"
    ],
    answer: "-1"
},

{
    question: "If $|\\\\vec{a}+\\\\vec{b}|=|\\\\vec{a}-\\\\vec{b}|$ then",
    option: [
        "$\\\\vec{a}\\\\parallel\\\\vec{b}$",
        "$\\\\vec{a}\\\\perp\\\\vec{b}$",
        "$(\\\\vec{a}-\\\\vec{b})\\\\times(\\\\vec{a}+\\\\vec{b})$",
        "None of these"
    ],
    answer: "$\\\\vec{a}\\\\perp\\\\vec{b}$"
},

{
    question: "If $\\\\begin{vmatrix}x&2\\\\\\\\18&x\\\\end{vmatrix}=\\\\begin{vmatrix}6&2\\\\\\\\18&6\\\\end{vmatrix}$ be then $x$ is equal to :-",
    option: [
        "6",
        "$\\\\pm6$",
        "-6",
        "0"
    ],
    answer: "$\\\\pm6$"
},

{
    question: "$\\\\frac{d}{dx}(\\\\cos^{-1}x)$ = ?",
    option: [
        "$\\\\frac{1}{2\\\\sqrt{1-x^2}}$",
        "$\\\\sqrt{1-x^2}$",
        "$\\\\frac{-1}{\\\\sqrt{1-x^2}}$",
        "$\\\\frac{1}{\\\\sqrt{1-x^2}}$"
    ],
    answer: "$\\\\frac{-1}{\\\\sqrt{1-x^2}}$"
},

{
    question: "differential equation $\\\\frac{ydx-xdy}{y}=0$ of general solution is :-",
    option: [
        "$xy=c$",
        "$x=cy^2$",
        "$y=cx$",
        "$y=cx^2$"
    ],
    answer: "$y=cx$"
},

{
    question: "$f(x)=\\\\sqrt{3}\\\\sin x+\\\\cos x$ is, then $f(x)$ of maximum value $x$ of which value for is ?",
    option: [
        "$\\\\frac{\\\\pi}{6}$",
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{3}$",
        "$\\\\frac{\\\\pi}{4}$"
    ],
    answer: "$\\\\frac{\\\\pi}{3}$"
},

{
    question: "If $F(x)=\\\\begin{bmatrix}\\\\cos x & -\\\\sin x & 0\\\\\\\\\\\\sin x & \\\\cos x & 0\\\\\\\\0 & 0 & 1\\\\end{bmatrix}$ then $F(x)F(y)$",
    option: [
        "$F(xy)$",
        "$F(x-y)$",
        "$F(x+y)$",
        "$F\\\\left(\\\\frac{x}{y}\\\\right)$"
    ],
    answer: "$F(x+y)$"
},

{
    question: "If $y=\\\\sin(x^3)$, then $\\\\frac{dy}{dx}=?$",
    option: [
        "$x^3\\\\cos(x^3)$",
        "$3x^2\\\\sin(x^3)$",
        "$3x^2\\\\cos(x^3)$",
        "$\\\\cos(x^3)$"
    ],
    answer: "$3x^2\\\\cos(x^3)$"
},

{
    question: "If $f:R\\\\to S$ which $f(x)=\\\\sin x-\\\\sqrt{3}\\\\cos x+1$ by is defined, surjective be, then interval $S$ is:",
    option: [
        "$[0,1]$",
        "$[-1,-1]$",
        "$[0,3]$",
        "$[-1,3]$"
    ],
    answer: "$[-1,3]$"
},

{
    question: "If $A=\\\\begin{bmatrix}1&2\\\\\\\\4&2\\\\end{bmatrix}$ then $2|A|=$",
    option: [
        "$2|A|$",
        "$4|A|$",
        "$8|A|$",
        "None"
    ],
    answer: "$4|A|$"
},

{
    question: "$\\\\cos^{-1}(4x^3-3x)$ of simple form is :",
    option: [
        "$3\\\\sin^{-1}x$",
        "$3\\\\cos^{-1}x$",
        "$\\\\pi-3\\\\sin^{-1}x$",
        "toii not"
    ],
    answer: "$3\\\\cos^{-1}x$"
},

{
    question: "differential equation $\\\\left(\\\\frac{d^2y}{dx^2}\\\\right)^2+2\\\\left(\\\\frac{dy}{dx}\\\\right)^3+9y=0$ of order is :-",
    option: [
        "2",
        "3",
        "4",
        "None of these"
    ],
    answer: "2"
},

{
    question: "$\\\\int \\\\tan^2\\\\frac{x}{2}\\\\,dx = ?$",
    option: [
        "$\\\\tan\\\\frac{x}{2}-x+c$",
        "$\\\\tan\\\\frac{x}{2}+x+c$",
        "$2\\\\tan\\\\frac{x}{2}+x+c$",
        "$2\\\\tan\\\\frac{x}{2}-x+c$"
    ],
    answer: "$2\\\\tan\\\\frac{x}{2}-x+c$"
},

{
    question: "If $f:R\\\\to R$ this way from defined be that $f(x)=2x+3$ then $f^{-1}(x)=$",
    option: [
        "$\\\\frac{x+3}{2}$",
        "$\\\\frac{x-3}{2}$",
        "$2x-3$",
        "None of these"
    ],
    answer: "$\\\\frac{x-3}{2}$"
},

{
    question: "$f(x)=\\\\sin x$ increasing is -",
    option: [
        "$\\\\frac{\\\\pi}{2}<x<\\\\pi$",
        "$\\\\pi<x<\\\\frac{3\\\\pi}{2}$",
        "$0<x<\\\\pi$",
        "$-\\\\frac{\\\\pi}{2}<x<\\\\frac{\\\\pi}{2}$"
    ],
    answer: "$-\\\\frac{\\\\pi}{2}<x<\\\\frac{\\\\pi}{2}$"
},

{
    question: "$\\\\hat{i} \\\\times (\\\\hat{j} \\\\times \\\\hat{k})$ the value of following in from which like is ?",
    option: [
        "$\\\\hat{k}$",
        "$0$",
        "$\\\\hat{i}$",
        "$\\\\hat{j}$"
    ],
    answer: "$0$"
},

{
    question: "which of the following like differential equation $\\\\frac{dy}{dx}=\\\\frac{y}{x}$ of general is the solution ?",
    option: [
        "$y=\\\\frac{k}{x}$",
        "$y=kx$",
        "$y=k\\\\log x$",
        "$\\\\log y=kx$"
    ],
    answer: "$y=kx$"
},

{
    question: "a simple line $(\\\\alpha,\\\\beta,\\\\gamma)$ from passes is then its direction cosines $l,m,n$ are /  this simple line of the equation isN :-",
    option: [
        "$\\\\frac{x}{l}=\\\\frac{y}{m}=\\\\frac{z}{n}$",
        "$\\\\frac{x-\\\\alpha}{l}=\\\\frac{y-\\\\beta}{m}=\\\\frac{z-\\\\gamma}{n}$",
        "$\\\\frac{x+\\\\alpha}{l}=\\\\frac{y+\\\\beta}{m}=\\\\frac{z+\\\\gamma}{n}$",
        "$\\\\frac{x-\\\\alpha}{l}=\\\\frac{y+\\\\beta}{m}=\\\\frac{z-\\\\gamma}{n}$"
    ],
    answer: "$\\\\frac{x-\\\\alpha}{l}=\\\\frac{y-\\\\beta}{m}=\\\\frac{z-\\\\gamma}{n}$"
},

{
    question: "If A and B mutually exclusive events this profr of are that $P(A)=0.4$, $P(B)=x$ and $P(A \\\\cup B)=0.5$ then $x=?$",
    option: [
        "0.2",
        "1",
        "$\\\\frac{4}{5}$",
        "None of these"
    ],
    answer: "1"
},

{
    question: "$\\\\frac{d}{dx}(\\\\sec^{-1}x)=?$",
    option: [
        "$\\\\frac{1}{x\\\\sqrt{x^2-1}}$",
        "$\\\\frac{1}{1+x^2}$",
        "$\\\\frac{1}{1+x^2}$",
        "None of these"
    ],
    answer: "$\\\\frac{1}{x\\\\sqrt{x^2-1}}$"
},

{
    question: "linear equation $ax + by = c$, of aalekh which a simple line is, among the following which point on x-axis from gujregii?",
    option: [
        "$\\\\left(\\\\frac{c}{b},0\\\\right)$",
        "$\\\\left(\\\\frac{c}{a},0\\\\right)$",
        "$\\\\left(0,\\\\frac{c}{a}\\\\right)$",
        "$\\\\left(0,\\\\frac{c}{b}\\\\right)$"
    ],
    answer: "$\\\\left(\\\\frac{c}{a},0\\\\right)$"
},

{
    question: "that triangle of area whichof vertex $(3,8)$, $(5,2)$ and $(-4,2)$ is ?",
    option: [
        "26",
        "13",
        "10",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "$\\\\begin{vmatrix}1&1&2\\\\\\\\2&2&4\\\\\\\\3&5&6\\\\end{vmatrix}=?$",
    option: [
        "5",
        "7",
        "0",
        "9"
    ],
    answer: "0"
},

{
    question: "a circle of radius $r=6$ cm on $r$ with respect to area in onivrtn of rate -",
    option: [
        "$10\\\\pi$",
        "$12\\\\pi$",
        "$8\\\\pi$",
        "$11\\\\pi$"
    ],
    answer: "$12\\\\pi$"
},

{
    question: "$\\\\tan\\\\left(\\\\sin^{-1}\\\\frac{3}{5}+\\\\cot^{-1}\\\\frac{3}{2}\\\\right)$ the value of is :",
    option: [
        "$\\\\frac{17}{6}$",
        "34",
        "18",
        "-18"
    ],
    answer: "$\\\\frac{17}{6}$"
},

{
    question: "$\\\\frac{dx}{dy}=?$",
    option: [
        "1",
        "0",
        "$x$",
        "None of these"
    ],
    answer: "1"
},

{
    question: "If A and B two events this profr are that $P(A)\\\\neq0$ and $P(\\\\frac{B}{A})=1$ then-",
    option: [
        "$B\\\\subset A$",
        "$A\\\\subset B$",
        "$B=\\\\varnothing$",
        "$A\\\\cap B=\\\\varnothing$"
    ],
    answer: "$B\\\\subset A$"
},

{
    question: "If $P(A)=\\\\frac{1}{3}$, $P(B)=\\\\frac{1}{4}$ and $P(A \\\\cap B)=\\\\frac{1}{5}$ then $P(\\\\frac{A}{B})=?$",
    option: [
        "$\\\\frac{1}{5}$",
        "$\\\\frac{2}{5}$",
        "$\\\\frac{3}{5}$",
        "$\\\\frac{4}{5}$"
    ],
    answer: "$\\\\frac{4}{5}$"
},

{
    question: "a maitricks $A=[a_{ij}]_{m\\\\times n}$ odd symmetric is If :",
    option: [
        "$a_{ij}=0$",
        "$a_{ij}=a_{ji}$",
        "$a_{ij}=-a_{ji}$",
        "$a_{ij}=1$"
    ],
    answer: "$a_{ij}=-a_{ji}$"
},

{
    question: "$\\\\int\\\\frac{1}{x^3}\\\\,dx = ?$",
    option: [
        "$-\\\\frac{3}{x^2}+c$",
        "$-\\\\frac{1}{2x^2}+c$",
        "$-\\\\frac{1}{3x^2}+c$",
        "$\\\\frac{x^{-2}}{2}+c$"
    ],
    answer: "$-\\\\frac{1}{2x^2}+c$"
},

{
    question: "$f(x)=\\\\sqrt{\\\\sin^{-1}(2x)+\\\\frac{\\\\pi}{6}}$ of domain is:",
    option: [
        "$\\\\left[\\\\frac{1}{4},\\\\frac{1}{2}\\\\right]$",
        "$\\\\left[-\\\\frac{1}{4},\\\\frac{1}{2}\\\\right]$",
        "$\\\\left[\\\\frac{1}{4},\\\\frac{1}{3}\\\\right]$",
        "$\\\\left[-\\\\frac{1}{4},\\\\frac{1}{3}\\\\right]$"
    ],
    answer: "$\\\\left[-\\\\frac{1}{4},\\\\frac{1}{2}\\\\right]$"
},

{
    question: "If $\\\\rho\\\\in R$ and $\\\\Delta=\\\\begin{vmatrix}a&b\\\\\\\\c&d\\\\end{vmatrix}$ then $\\\\rho\\\\Delta$ equal will be -",
    option: [
        "$\\\\begin{vmatrix}\\\\rho a&\\\\rho b\\\\\\\\\\\\rho c&\\\\rho d\\\\end{vmatrix}$",
        "$\\\\begin{vmatrix}\\\\rho a&b\\\\\\\\c&d\\\\end{vmatrix}$",
        "$\\\\begin{vmatrix}\\\\rho a&b\\\\\\\\\\\\rho c&d\\\\end{vmatrix}$",
        "None of these"
    ],
    answer: "$\\\\begin{vmatrix}\\\\rho a&b\\\\\\\\\\\\rho c&d\\\\end{vmatrix}$"
},

{
    question: "determinant $\\\\begin{vmatrix}2&3&4\\\\\\\\5&6&8\\\\\\\\6x&9x&12x\\\\end{vmatrix}$ the value of is ?",
    option: [
        "0",
        "$256x^3$",
        "$256x$",
        "$256x^2$"
    ],
    answer: "0"
},

{
    question: "$\\\\int_0^1\\\\frac{f(x)}{f(x)+f(1-x)}\\\\,dx = ?$",
    option: [
        "0",
        "$\\\\frac{1}{2}$",
        "1",
        "None of these"
    ],
    answer: "$\\\\frac{1}{2}$"
},

{
    question: "If $\\\\Delta=\\\\begin{vmatrix}10&2\\\\\\\\30&6\\\\end{vmatrix}$ then $\\\\Delta=?$",
    option: [
        "0",
        "10",
        "12",
        "60"
    ],
    answer: "0"
},

{
    question: "$(\\\\alpha,\\\\beta,\\\\gamma)$ from gujrby having and axis on equal angle bnaaby having line of the equation is?",
    option: [
        "$x-\\\\alpha=y-\\\\beta=z-\\\\gamma$",
        "$\\\\frac{x-1}{\\\\alpha}=\\\\frac{y-1}{\\\\beta}=\\\\frac{z-1}{\\\\gamma}$",
        "$\\\\frac{x}{\\\\alpha}=\\\\frac{y}{\\\\beta}=\\\\frac{z}{\\\\gamma}$",
        "None of these"
    ],
    answer: "$x-\\\\alpha=y-\\\\beta=z-\\\\gamma$"
},

{
    question: "$\\\\int_0^{\\\\pi/2}\\\\frac{\\\\sqrt{\\\\cos x}}{\\\\sqrt{\\\\sin x+\\\\cos x}}\\\\,dx = ?$",
    option: [
        "$\\\\frac{\\\\pi}{4}$",
        "$-\\\\frac{\\\\pi}{4}$",
        "0",
        "$\\\\frac{\\\\pi}{2}$"
    ],
    answer: "$\\\\frac{\\\\pi}{4}$"
},

{
    question: "matrix $\\\\begin{bmatrix}2&-1&4\\\\\\\\1&0&-5\\\\\\\\-4&5&7\\\\end{bmatrix}$ is :",
    option: [
        "symmetric matrix",
        "asmmit matrix",
        "diagonal matrix",
        "toii not"
    ],
    answer: "toii not"
},

{
    question: "$\\\\int_{-1}^{2}x|x|\\\\,dx = ?$",
    option: [
        "$\\\\int_{-1}^{2}x^2\\\\,dx$",
        "$\\\\frac{7}{3}$",
        "3",
        "None of these"
    ],
    answer: "$\\\\frac{7}{3}$"
},

{
    question: "$\\\\begin{vmatrix} bc & 1 & \\\\frac{1}{a} \\\\\\\\ ca & 1 & \\\\frac{1}{b} \\\\\\\\ ab & 1 & \\\\frac{1}{c} \\\\end{vmatrix} = ?$",
    option: [
        "$\\\\frac{1}{abc}$",
        "0",
        "$abc$",
        "None of these"
    ],
    answer: "0"
},

{
    question: "function $f(x)=x^3-6x^2+9x+1$ a continuous decreasing is a function, If -",
    option: [
        "$1<x<3$",
        "$x<3$",
        "$x>1$",
        "$x>3$ or $x<1$"
    ],
    answer: "$x>3$ or $x<1$"
},

{
    question: "$\\\\int\\\\log_e z\\\\,dz = ?$",
    option: [
        "$z\\\\log z+z+k$",
        "$z\\\\log z-z+k$",
        "$\\\\log z+z+k$",
        "$\\\\log z-z+k$"
    ],
    answer: "$z\\\\log z-z+k$"
},

{
    question: "If $y=9^x$ then $\\\\frac{d^2y}{dx^2}=?$",
    option: [
        "$9^x,\\\\ \\\\log 9$",
        "$9^x(\\\\log 9)^2$",
        "$(9^x)^2,\\\\ \\\\log 9$",
        "None of these"
    ],
    answer: "$9^x(\\\\log 9)^2$"
},

{
    question: "$\\\\int_{-\\\\pi/2}^{\\\\pi/2}\\\\sin^2x\\\\,dx = ?$",
    option: [
        "0",
        "$\\\\frac{\\\\pi}{2}$",
        "1",
        "$\\\\pi$"
    ],
    answer: "$\\\\frac{\\\\pi}{2}$"
},

{
    question: "$\\\\hat{k}\\\\times\\\\hat{k}=?$",
    option: [
        "$0$",
        "$1$",
        "$|k|^2$",
        "None of these"
    ],
    answer: "$0$"
},

{
    question: "$\\\\begin{bmatrix}x+y\\\\\\\\x-y\\\\end{bmatrix}=\\\\begin{bmatrix}2&1\\\\\\\\4&3\\\\end{bmatrix}\\\\begin{bmatrix}1\\\\\\\\-2\\\\end{bmatrix}$ then $(x,y)=$",
    option: [
        "$(1,1)$",
        "$(1,-1)$",
        "$(-1,1)$",
        "None"
    ],
    answer: "$(-1,1)$"
},

{
    question: "$\\\\vec k\\\\cdot\\\\vec k=?$",
    option: [
        "$1$",
        "$0$",
        "$2$",
        "$-1$"
    ],
    answer: "$1$"
},

{
    question: "If $\\\\begin{vmatrix}2+x&2&x\\\\\\\\2-x&2&x\\\\\\\\2-x&2&-x\\\\end{vmatrix}=0$, then $x=?$",
    option: [
        "0",
        "2",
        "3",
        "4"
    ],
    answer: "0"
},

{
    question: "parabola $y^2 = 4ax$ and its latus rectum of linekhNdd from gheraa region is the area -",
    option: [
        "$\\\\frac{4a^2}{3}\\\\ unit^2$",
        "$\\\\frac{8a^2}{3}\\\\ unit^2$",
        "$\\\\frac{16a^2}{3}\\\\ unit^2$",
        "$\\\\frac{2a^2}{3}\\\\ unit^2$"
    ],
    answer: "$\\\\frac{8a^2}{3}\\\\ unit^2$"
},

{
    question: "$y$-axis of direction cosines is are -",
    option: [
        "$(0,0,0)$",
        "$(1,0,0)$",
        "$(0,1,0)$",
        "$(0,0,1)$"
    ],
    answer: "$(0,1,0)$"
},

{
    question: "If $y=4x-5$ curve $y^2=px^3+q$ of point on sonshii is then -",
    option: [
        "$p=2,q=-7$",
        "$p=-2,q=7$",
        "$p=-2,q=-7$",
        "$p=2,q=7$"
    ],
    answer: "$p=2,q=-7$"
},

{
    question: "real sNkhoroN of set on defined relation $R=\\\\{(a,b)\\\\in R\\\\times R:1+ab>0\\\\}$ is:",
    option: [
        "reflexive and transitive",
        "symmetric and transitive",
        "reflexive and krmit",
        "equivalent relation"
    ],
    answer: "equivalent relation"
},

{
    question: "$f(x)=x^x$ following interval from haasis the value -",
    option: [
        "$]0,e[$",
        "$]0,\\\\frac{1}{e}[$",
        "$]0,1[$",
        "None of these"
    ],
    answer: "$]0,\\\\frac{1}{e}[$"
},

{
    question: "$\\\\frac{d}{dx}\\\\int f(x)=?$",
    option: [
        "$f'(x)$",
        "$f(x)$",
        "$-f(x)$",
        "$f(x)+c$"
    ],
    answer: "$f(x)$"
},

{
    question: "determinant $\\\\begin{vmatrix}3&1&7\\\\\\\\5&0&7\\\\\\\\2&5&3\\\\end{vmatrix}=?$",
    option: [
        "124",
        "125",
        "134",
        "144"
    ],
    answer: "134"
},

{
    question: "Let $A=\\\\begin{bmatrix}1&2\\\\\\\\0&1\\\\end{bmatrix}$ then $A^n=?$",
    option: [
        "$\\\\begin{bmatrix}1&2n\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}2&n\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&2n\\\\\\\\0&1\\\\end{bmatrix}$",
        "$\\\\begin{bmatrix}1&n\\\\\\\\0&2\\\\end{bmatrix}$"
    ],
    answer: "$\\\\begin{bmatrix}1&2n\\\\\\\\0&1\\\\end{bmatrix}$"
},

{
    question: "$\\\\tan^{-1}\\\\left(\\\\cos^{-1}\\\\frac{4}{5}+\\\\tan^{-1}\\\\frac{2}{3}\\\\right)$ the value of is :",
    option: [
        "$\\\\frac{6}{17}$",
        "$\\\\frac{7}{16}$",
        "$\\\\frac{17}{6}$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "$\\\\sin^2\\\\theta$ of periodic ofl:",
    option: [
        "$\\\\frac{\\\\pi}{2}$",
        "$\\\\pi$",
        "$2\\\\pi$",
        "$\\\\pi^2$"
    ],
    answer: "$\\\\pi$"
},

{
    question: "any determinant, whichof toii two pNktiorN (or pole) sis the valueN, the value of is is -",
    option: [
        "1",
        "-1",
        "0",
        "None of these"
    ],
    answer: "0"
},

{
    question: "If $\\\\vec{a}=2\\\\hat{i}+\\\\hat{j}+3\\\\hat{k}$ and $\\\\vec{b}=3\\\\hat{i}+5\\\\hat{j}-2\\\\hat{k}$ then $|\\\\vec{a}\\\\times\\\\vec{b}|=?$",
    option: [
        "$\\\\sqrt{507}$",
        "$\\\\sqrt{407}$",
        "$\\\\sqrt{307}$",
        "$\\\\sqrt{607}$"
    ],
    answer: "$\\\\sqrt{507}$"
},

{
    question: "If $P(A)=0.65$, $P(B)=0.15$ then $P(\\\\bar{A})+P(\\\\bar{B})=?$",
    option: [
        "1.5",
        "1.2",
        "0.8",
        "None of these"
    ],
    answer: "1.2"
},

{
    question: "If $A=\\\\begin{bmatrix}3&-2\\\\\\\\4&-2\\\\end{bmatrix}$ and $A^2=KA-2I$ be then $K$ the value of is :",
    option: [
        "0",
        "8",
        "-7",
        "1"
    ],
    answer: "1"
},

{
    question: "$\\\\int_0^{\\\\pi^2/4}\\\\sin\\\\sqrt{x}\\\\,dx = ?$",
    option: [
        "1",
        "$\\\\frac{1}{2}$",
        "$\\\\frac{3}{2}$",
        "None of these"
    ],
    answer: "None of these"
},

{
    question: "differential equation $\\\\frac{d^2y}{dx^2}+x^3\\\\left(\\\\frac{dy}{dx}\\\\right)^3=x^4$ of order is :-",
    option: [
        "1",
        "2",
        "3",
        "0"
    ],
    answer: "2"
},

{
    question: "Let $E=\\\\{1,2,3,4\\\\}$ and $F=\\\\{1,2\\\\}$ then $E$ from $F$ on surjective function of sNkhor is:",
    option: [
        "14",
        "16",
        "12",
        "8"
    ],
    answer: "14"
},

{
    question: "$x^2$ of onivrtn of rate and $\\\\log x$ of onivrtn of rate of ratio following in from which will be ?",
    option: [
        "$2x$",
        "$2x^2$",
        "2",
        "$\\\\frac{2}{x}$"
    ],
    answer: "$2x^2$"
},

{
    question: "If $A=\\\\begin{bmatrix}3 & -2\\\\\\\\4 & -2\\\\end{bmatrix}$ and $A^2=kA-2I$ be, then $k$ the value of is",
    option: [
        "0",
        "8",
        "-7",
        "1"
    ],
    answer: "1"
},

{
    question: "$\\\\frac{d}{dx}\\\\{\\\\cos(\\\\sin x)\\\\}=?$",
    option: [
        "$\\\\sin(\\\\sin x)\\\\cos x$",
        "$-\\\\sin(\\\\sin x)\\\\cos x$",
        "$-\\\\sin(\\\\cos x)\\\\cos x$",
        "None of these"
    ],
    answer: "$-\\\\sin(\\\\sin x)\\\\cos x$"
},

{
    question: "If $A=\\\\begin{bmatrix}1 & -1\\\\\\\\2 & 3\\\\end{bmatrix}$ then",
    option: [
        "$A^{-1}=\\\\begin{bmatrix}\\\\frac{3}{5} & \\\\frac{1}{5}\\\\\\\\\\\\frac{2}{5} & \\\\frac{1}{5}\\\\end{bmatrix}$",
        "$|A|\\\\ne0$",
        "$|A|=5$",
        "$A^2=A$"
    ],
    answer: "$|A|=5$"
},

{
    question: "any event of probability $\\\\frac{3}{7}$ is, then its prtikuul sNsumaanupaat is -",
    option: [
        "4 : 3",
        "7 : 3",
        "3 : 7",
        "3 : 4"
    ],
    answer: "4 : 3"
},
 
];


// --- MathJax renderer for Hindi/English text + LaTeX ---
// Supports: $...$ for inline math and $$...$$ for display math.
// It also fixes the over-escaped LaTeX currently present in the question bank.
function normalizeLatex(value = "") {
  return String(value).replace(/\$([\s\S]*?)\$/g, (full, math) => {
    const fixed = math.replace(/\\+/g, (run) => {
      // The question bank contains both normal JS escaping (\\) and
      // accidentally double-escaped LaTeX (\\\\). Halve only even runs.
      return run.length % 2 === 0 ? "\\".repeat(run.length / 2) : run;
    });
    return `$${fixed}$`;
  });
}

function MathText({ children, className = "", style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const typeset = async () => {
      if (!ref.current) return;

      const render = () => {
        if (cancelled || !ref.current || !window.MathJax?.typesetPromise) return;
        window.MathJax.typesetClear?.([ref.current]);
        window.MathJax.typesetPromise([ref.current]).catch(console.error);
      };

      if (window.MathJax?.typesetPromise) {
        render();
        return;
      }

      // Load MathJax only once.
      if (!window.__mathJaxLoading) {
        window.__mathJaxLoading = new Promise((resolve, reject) => {
          window.MathJax = {
            tex: {
              inlineMath: [["$", "$"], ["\\(", "\\)"]],
              displayMath: [["$$", "$$"], ["\\[", "\\]"]],
              processEscapes: true,
              processEnvironments: true
            },
            option: {
              skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"]
            },
            startup: { typeset: false }
          };

          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
          script.async = true;
          script.onload = () => {
            window.MathJax.startup?.promise.then(resolve);
          };
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      try {
        await window.__mathJaxLoading;
        render();
      } catch (error) {
        console.error("MathJax failed to load:", error);
      }
    };

    typeset();
    return () => {
      cancelled = true;
    };
  }, [children]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ ...style, whiteSpace: "pre-wrap" }}
      dangerouslySetInnerHTML={{
        __html: normalizeLatex(children)
      }}
    />
  );
}

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
export default function Math12thQuiz() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600);
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
    const questionBank = language === 'hi' ? mathHindi : mathEnglish;
    const selectedQuestions = shuffleQuestions(questionBank).slice(0, 100);
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
    if (!resultRef.current) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert(language === "hi"
        ? "कृपया popup को allow करें ताकि परिणाम डाउनलोड/प्रिंट हो सके।"
        : "Please allow popups to print/download the result.");
      return;
    }

    const content = resultRef.current.innerHTML;

    printWindow.document.open();
    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>${language === "hi" ? "गणित 12वीं परिणाम" : "Math 12th Result"}</title>
          <style>
            * { box-sizing: border-box; }
            body {
              font-family: Arial, "Noto Sans Devanagari", sans-serif;
              padding: 20px;
              background: #fff;
              color: #222;
            }
            .result-container { max-width: 800px; margin: 0 auto; }
            .header {
              text-align: center;
              padding: 20px;
              background: linear-gradient(135deg, #1a237e, #3f51b5);
              color: white;
              border-radius: 10px;
              margin-bottom: 20px;
            }
            .score-card {
              text-align: center;
              padding: 20px;
              border: 2px solid #1a237e;
              border-radius: 10px;
              margin-bottom: 20px;
            }
            .score { font-size: 40px; font-weight: bold; color: #1a237e; }
            .status { font-size: 20px; margin: 10px 0; }
            .pass { color: #28a745; }
            .fail { color: #dc3545; }
            .question-item {
              padding: 15px;
              margin: 10px 0;
              border-radius: 8px;
              border-left: 4px solid #48bb78;
              background: #f8f9fa;
            }
            .question-item.wrong {
              border-left-color: #dc3545;
              background: #fff5f5;
            }
            .question-item .q { font-weight: bold; font-size: 14px; }
            .your-answer { margin-top: 5px; font-size: 13px; }
            .correct-answer { margin-top: 3px; font-size: 13px; }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding: 10px;
              color: #666;
              font-size: 12px;
              border-top: 1px solid #ddd;
            }
            mjx-container { font-size: 105% !important; }
          </style>
        </head>
        <body>
          <div class="result-container">${content}</div>
          <script>
            window.MathJax = {
              tex: {
                inlineMath: [["$", "$"], ["\\\\(", "\\\\)"]],
                displayMath: [["$$", "$$"], ["\\\\[", "\\\\]"]],
                processEscapes: true,
                processEnvironments: true
              },
              startup: { typeset: false }
            };
          </script>
          <script
            src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
            onload="MathJax.startup.promise.then(() => MathJax.typesetPromise().then(() => setTimeout(() => window.print(), 150)))">
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const getText = (key) => {
    const texts = {
      'title': { hi: '📐 गणित 12वीं', en: '📐 Mathematics 12th' },
      'subtitle': { hi: 'कक्षा 12 गणित प्रश्नोत्तरी', en: 'Class 12 Mathematics Quiz' },
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📐</div>
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
            💡 {language === 'hi' ? 'कक्षा 12 गणित के सभी अध्यायों की व्यापक कवरेज' : 'Comprehensive coverage of all Class 12 Mathematics chapters'}
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
                {language === 'hi' ? 'कक्षा 12 गणित क्विज़' : 'Class 12 Mathematics Quiz'}
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
                    Q{index + 1}. <MathText>{item.question}</MathText>
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
                      <MathText>{item.userAnswer}</MathText>
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
                      <span style={{ color: "#48bb78", fontWeight: "bold" }}><MathText>{item.correctAnswer}</MathText></span>
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
            📌 {language === 'hi' ? 'गणित 12वीं' : 'Mathematics 12th'}
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#1a237e",
            marginBottom: "16px",
            fontWeight: "600",
            lineHeight: "1.5"
          }}>
            <MathText>{q.question}</MathText>
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
                  <MathText>{op}</MathText>
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

          .mjx-container {
            margin: 0.15em 0 !important;
          }
          .question-math {
            display: inline;
          }
          @media (max-width: 600px) {
            body { padding: 8px !important; }
            h3 { font-size: 15px !important; }
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