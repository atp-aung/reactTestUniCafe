import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);
  const [avg, setAvg] = useState(0);
  const [pos, setPos] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          const updGood = good + 1;
          setGood(updGood);
          const updScore = score + 1;
          setScore(updScore);
          const updAll = all + 1;
          setAll(updAll);
          setAvg(updScore / updAll);
          setPos(updGood / updAll);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          const updGood = good + 0;
          setGood(updGood);
          setNeutral(neutral + 1);
          const updScore = score + 0;
          setScore(updScore);
          const updAll = all + 1;
          setAll(updAll);
          setAvg(updScore / updAll);
          setPos(updGood / updAll);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          const updGood = good + 0;
          setGood(updGood);
          setBad(bad + 1);
          const updScore = score - 1;
          setScore(updScore);
          const updAll = all + 1;
          setAll(updAll);
          setAvg(updScore / updAll);
          setPos(updGood / updAll);
        }}
      >
        bad
      </button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {avg}</p>
      <p>postive {pos * 100} %</p>
    </div>
  );
};

export default App;
