import React from "react";
import { Button } from "@material-ui/core";

const App = (): JSX.Element => {
  const onClick = () => {
    console.log("Click!");
    alert("アラート！");
  };

  return (
    <Button color="primary" variant="outlined" onClick={() => onClick()}>
      Hello World
    </Button>
  );
};

export default App;
