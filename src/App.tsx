import { VFC } from 'react';
import { RecoilRoot } from 'recoil';

import { MainContent } from './components/templates/MainContent';
import { CheckData } from './components/pages/CheckData';

const App: VFC = () => {
  return (
    <RecoilRoot>
      <MainContent>
        <CheckData />
      </MainContent>
    </RecoilRoot>
  );
};

export default App;
