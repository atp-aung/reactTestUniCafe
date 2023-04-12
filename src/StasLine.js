const StasLine = (sl) => {
  return sl.text === "postive" ? (
    <table>
      <tbody>
        <tr>
          <td>{sl.text}:</td>
          <td>{sl.v * 100} %</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <table>
      <tbody>
        <tr>
          <td>{sl.text}:</td>
          <td>{sl.v}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StasLine;
