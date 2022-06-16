import Welcome from "./Components/class/Welcome";
import { WelcomeOne } from "./Components/class/WelcomeOne";
import Greet from "./Components/function/Greet";
import { GreetNamed } from "./Components/function/GreetNamed";
import GreetOne from "./Components/function/GreetOne";
import { GreetNamedOne } from "./Components/function/GrreetNamedOne";
import Hello from "./jsx/Hello";
import Greeting from "./props/Greeting";
import GreetingsOne from "./props/GreetingsOne";

function App() {

  function getMessage(){
    return "Welcome to props"
  }
  return (
    <div className="container">
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
      {/* <Greeting name="Adam"/>
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