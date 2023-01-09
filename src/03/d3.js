import React from "react";

export default function D3Move() {
  const [count, setCount] = React.useState(0);
  // const theme = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}