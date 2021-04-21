import { VFC } from "react";
import { MainContent } from "./components/templates/MainContent";
import { CheckData } from "./components/pages/CheckData";

interface Props {}

const App: VFC<Props> = () => {
  return (
    <MainContent>
      <CheckData />
    </MainContent>
  );
};

export default App;
