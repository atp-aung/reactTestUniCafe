const StasLine = (sl) => {
  if (sl.text === "good") {
    return (
      <table>
        <td>
          <tbody>{sl.text}:</tbody>
        </td>
        <td>
          <tbody>{sl.v}</tbody>
        </td>
      </table>
    );
  }
  if (sl.text === "neutral") {
    return (
      <p>
        {sl.text}: {sl.v}
      </p>
    );
  }
  if (sl.text === "bad") {
    return (
      <p>
        {sl.text}: {sl.v}
      </p>
    );
  }
  if (sl.text === "all") {
    return (
      <p>
        {sl.text}: {sl.v}
      </p>
    );
  }
  if (sl.text === "average") {
    return (
      <p>
        {sl.text}: {sl.v}
      </p>
    );
  }
  if (sl.text === "postive") {
    return (
      <p>
        {sl.text}: {sl.v * 100} %
      </p>
    );
  }
};
export default StasLine;
