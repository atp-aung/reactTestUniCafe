const Button = (b) => {
  if (b.text === "good") {
    return <button onClick={b.btnn}>good</button>;
  }
  if (b.text === "neutral") {
    return <button onClick={b.btnn}>neutral</button>;
  }
  if (b.text === "bad") {
    return <button onClick={b.btnn}>bad</button>;
  }
};

export default Button;
