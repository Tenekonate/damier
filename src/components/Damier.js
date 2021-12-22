import React from "react";

const Damier = ({ rows, cols }) => {
  const damier = [];
  const even = [];
  const odd = [];

  for (let r = 1; r <= rows; r++) {
    even.push(
      <td
        style={{
          width: 15,
          height: 15,
          backgroundColor: r % 2 === 0 ? "black" : "red",
        }}
        key={r}
      ></td>
    );
  }

  for (let r = 1; r <= rows; r++) {
    odd.push(
      <td
        style={{
          width: 15,
          height: 15,
          backgroundColor: r % 2 === 0 ? "red" : "black",
        }}
        key={r}
      ></td>
    );
  }

  for (let c = 1; c <= cols; c++) {
    if (c % 2 === 0) {
      damier.push(<tr key={c}>{even}</tr>);
    } else {
      damier.push(<tr key={c}>{odd}</tr>);
    }
  }

  return (
    <table>
      <tbody>{damier}</tbody>
    </table>
  );
};

export default Damier;
