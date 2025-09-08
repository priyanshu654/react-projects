import Options from "./Options";

export default function Questions({questions,index,dispatch,answer}) {
  const que=questions[index];
  
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options questions={questions} dispatch={dispatch} index={index} answer={answer}/>
    </div>
  );
}
