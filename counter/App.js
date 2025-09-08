import AppleCounter from "./components/AppleCounter.js";
import Counter from "./components/Counter.js";
import Form from "./components/Form.jsx";
const App=()=>{
    return(
        <div>

            {/* this was for passing components as a children and rendering them in counter.js
            <Counter><AppleCounter/> </Counter> */}
            <AppleCounter/>
            {/* <Form/> */}
        </div>
        

    )
}
export default App;