import StasLine from "./StasLine";
const Statistics = (s) => {
  return (
    <>
      <h1>Statistics</h1>
      <StasLine text="good" v={s.good} />
      <StasLine text="neutral" v={s.neutral} />
      <StasLine text="bad" v={s.bad} />
      <StasLine text="all" v={s.all} />
      <StasLine text="average" v={s.avg} />
      <StasLine text="postive" v={s.pos} />
    </>
  );
};
export default Statistics;
