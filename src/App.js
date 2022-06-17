import Welcome from "./Components/class/Welcome";
import { WelcomeOne } from "./Components/class/WelcomeOne";
import Greet from "./Components/function/Greet";
import { GreetNamed } from "./Components/function/GreetNamed";
import GreetOne from "./Components/function/GreetOne";
import { GreetNamedOne } from "./Components/function/GrreetNamedOne";
import UserGreeting from "./Conditional-rendering/UserGreeting";
import UserGreetingOne from "./Conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./Conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./Conditional-rendering/UserGreetingTwo";
import ClassClick from "./event-handling/ClassClick";
import EventBind from "./event-handling/EventBind";
import FunctionClick from "./event-handling/FunctionClick";
import Parent from "./event-handling/parent-child/Parent";
import StudentForm from "./form-handling/StudentForm";
import Hello from "./jsx/Hello";
import NameList from "./list-rendering/NameList";
import NameListFour from "./list-rendering/NameListFour";
import NameListOne from "./list-rendering/NameListOne";
import NameListThree from "./list-rendering/NameListThree";
import NameListTwo from "./list-rendering/NameListTwo";
import Greeting from "./props/Greeting";
import GreetingsOne from "./props/GreetingsOne";
import Counter from "./State/Counter";
import Notify from "./State/Notify";
import AppStyle from "./styling/AppStyle";
import StyleSheet from "./styling/StyleSheet";

function App() {

  function getMessage(){
    return "Welcome to props"
  }
  return (
    <div className="container">

    <StudentForm/>

      {/* 
      <NameList/>
      <NameListOne/>
      
      <AppStyle/>
      <NameListTwo/>
      <NameListFour/>
      <UserGreetingOne/>
      <UserGreetingTwo/>
      <UserGreetingThree/>
      <UserGreeting/>
      <Parent/>
      <EventBind></EventBind>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Notify></Notify>
      <Counter></Counter>
      <Greeting id={1} 
                name="Scoot" 
                isAdmin={true} 
                details={null}
                info={undefined}
                getMessage={getMessage}
                getMsg={() =>"Welcome to props - fat arrow"}
                address={{city:"boston"}}
                skills={["Great Boss","Great hero"]}
      >
        <p style={{display:"inline"}}>I am child component</p>
      </Greeting>
      <GreetingsOne id={1} 
                name="Scoot" 
                isAdmin={true} 
                details={null}
                info={undefined}
                getMessage={getMessage()}
                getMsg={()=>"Welcome to props - fat arrow"}
                address={{city:"boston"}}
                skills={["Great Boss","Great hero"]}
      >
        <p style={{display:"inline"}}>I am child component</p>
      </GreetingsOne>  
      <Greeting name="Adam"/>
      <Greeting name="Taun"/>
      <Greet></Greet>
      <GreetNamed />
      <GreetOne/>
      <Hello></Hello>
      <GreetNamedOne></GreetNamedOne>
      <Welcome></Welcome>
      <WelcomeOne></WelcomeOne> */}
      
    </div>
  );
}

export default App;