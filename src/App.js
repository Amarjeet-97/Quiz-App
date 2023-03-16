
import Start from './components/Start';

import Result from './components/Result';
import Quiz from './components/Quiz';
import { QuizContext } from './context/QuizHolder';
import { useContext } from 'react';
function App() {
  const {start,exit}= useContext(QuizContext);
  return (
    <>
    {
      exit==false
      ?
      <>
      {
        start===true
        ?
        <Quiz/>
        :
        <Start/>

      }
      </>
      :
      <Result/>

    }
    
      
      
    </>
  );
}

export default App;
