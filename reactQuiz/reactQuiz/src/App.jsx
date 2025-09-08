import { useEffect, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Error from "./Components/Error";
import StartScreen from "./Components/StartScreen";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";
import NextButton from "./Components/NextButton"
import Progress from "./Components/Progress";
import FinishScreen from "./Components/FinishScreen";
import Timer from "./Components/Timer";
const TIME_PER_QUESTION=30;
const initialState = {
  questions: [],
  //loading ,error ,ready ,active ,finished
  status: "loading",
  index: 0,
  answer: null,
  points:0,
  highscore:0,
  timeForTest:null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "error":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active",
        timeForTest:state.questions.length*TIME_PER_QUESTION,
       };
    case "newAnswer":
      const currQues=state.questions[state.index];
      //console.log(currQues);
      
      return { ...state, answer: action.payload,
        points:action.payload==currQues.correctOption?state.points+currQues.points:state.points
       };
    case "nextQuestion":
      return {...state,index:state.index+1, answer:null

      }
    case "Finish":
      return{...state,status:"finished",highscore:state.points>state.highscore?state.points:state.highscore}
    case "restart":
      return {...state,status:"active",index:0,answer:null,points:0}
    case "tick":
      return{...state,timeForTest:state.timeForTest-1,
        status:state.xtimeForTest===0?"finished":state.status
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer,points,highscore,timeForTest} = state;
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status == "error" && <Error />}
        {status == "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status == "active" && (
          <>
            <Progress numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} index={index} answer={answer}/>
            <Questions
              questions={questions}
              index={index}
              dispatch={dispatch}
              answer={answer}
            />
            
            <Footer>
              <Timer dispatch={dispatch} timeForTest={timeForTest}/>
              <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index}/>

            </Footer>
            
          </>
        )}
        {status=="finished" && <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highscore={highscore} dispatch={dispatch}/>}
      </Main>
    </div>
  );
}

export default App;
