import React from "react";
import { Button } from "@material-ui/core";
import MainContent from "./components/templates/MainContent";

const App = (): JSX.Element => {
  const onClick = () => {
    console.log("Click!");
    alert("アラート！");
  };

  return (
    <MainContent>
      <Button color="primary" variant="outlined" onClick={() => onClick()}>
        Hello World
      </Button>
    </MainContent>
  );
};

export default App;
