import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);
  const [avg, setAvg] = useState(0);
  const [pos, setPos] = useState(0);
  const [stas, setStas] = useState("no feedback");

  const btnGood = () => {
    const updGood = good + 1;
    setGood(updGood);
    const updScore = score + 1;
    setScore(updScore);
    const updAll = all + 1;
    setAll(updAll);
    const updAvg = updScore / updAll;
    console.log(updAvg);
    setAvg(updAvg);
    const updPos = updGood / updAll;
    setPos(updPos);
    setStas(
      <Statistics
        good={updGood}
        neutral={neutral}
        bad={bad}
        all={updAll}
        avg={updAvg}
        pos={updPos}
      />
    );
  };

  const btnBad = () => {
    const updBad = bad + 1;
    setBad(updBad);
    const updScore = score - 1;
    setScore(updScore);
    const updAll = all + 1;
    setAll(updAll);
    const updAvg = updScore / updAll;
    setAvg(updAvg);
    const updPos = good / updAll;
    setPos(updPos);
    setStas(
      <Statistics
        good={good}
        neutral={neutral}
        bad={updBad}
        all={updAll}
        avg={updAvg}
        pos={updPos}
      />
    );
  };

  const btnNeu = () => {
    const updNeu = neutral + 1;
    setNeutral(updNeu);
    const updAll = all + 1;
    setAll(updAll);
    const updAvg = score / updAll;
    setAvg(updAvg);
    const updPos = good / updAll;
    setPos(updPos);
    setStas(
      <Statistics
        good={good}
        neutral={updNeu}
        bad={bad}
        all={updAll}
        avg={updAvg}
        pos={updPos}
      />
    );
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" btnn={btnGood} />
      <Button text="neutral" btnn={btnNeu} />
      <Button text="bad" btnn={btnBad} />
      <div>{stas}</div>
    </div>
  );
};

export default App;
