import './App.css'

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];
  const reverseArray = (arr) => {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  };
  return (
    <div>
      <h1>Reverse Array</h1>
      <p>Reversed Array: {reverseArray(originalArray).join(",")}</p>
    </div>
  );
};
const CalculateBMI = () => {
  const weight = 70;
  const height = 1.75;
  const calcBmi = (w, h) => {
    return w / h ** 2;
  };
  return (
    <div>
      <h1>BMI Calculator</h1>
      <p>BMI: {calcBmi(weight, height).toFixed(2)}</p>
    </div>
  );
};
const GenerateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",

    "Innovation distinguishes between a leader and a follower. - Steve Jobs",

    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",

    "Stay hungry, stay foolish. - Steve Jobs",

    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  ];
  const getQuotes = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };
  return (
    <div>
      <h1>Random Quote</h1>
      <p>{getQuotes(quotes)}</p>
    </div>
  );
};
const GradeAnalyser = () => {
  let score = 92;
  const getGradeAndMessage = ({ studentScore }) => {
    if (studentScore >= 90) {
      return { grade: "A", message: "Excellent work!" };
    } else if (studentScore >= 80) {
      return { grade: "B", message: "Good job!" };
    } else if (studentScore >= 70) {
      return { grade: "C", message: "Not bad, keep it up!" };
    } else if (studentScore >= 60) {
      return { grade: "D", message: "You passed, but aim higher next time." };
    } else {
      return {
        grade: "F",
        message: "Sorry, you didn't pass. Keep working hard!",
      };
    }
  };

  const { grade, message } = getGradeAndMessage(score);
  return (
    <div>
      <h1>Grade Analyser</h1>
      <p>Score: {grade}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default function App (){
  return (
      <div>
       <ReverseArray />
      <CalculateBMI />
      <GenerateQuote />
      <GradeAnalyser />
      </div>
  )
}