const Statistics = (p) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>good: {p.good}</p>
      <p>neutral: {p.neutral}</p>
      <p>bad: {p.bad}</p>
      <p>all: {p.all}</p>
      <p>average: {p.avg}</p>
      <p>postive: {p.pos * 100} %</p>
    </>
  );
};
export default Statistics;
