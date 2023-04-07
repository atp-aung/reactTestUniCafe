import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);
  const [avg, setAvg] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
          let updScore = score + 1;
          setScore(updScore);
          let updAll = all + 1;
          setAll(updAll);
          setAvg(updScore / updAll);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          let updScore = score + 0;
          setScore(updScore);
          let updAll = all + 1;
          setAll(updAll);
          setAvg(updScore / updAll);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
          let updScore = score - 1;
          setScore(updScore);
          let updAll = all + 1;
          setAll(updAll);
          setAvg(updScore / updAll);
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
    </div>
  );
};

export default App;
