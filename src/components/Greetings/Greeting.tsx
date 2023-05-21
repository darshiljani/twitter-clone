import MorningGreeting from "./MorningGreeting";
import AfternoonGreeting from "./NoonGreeting";
import EveningGreeting from "./EveningGreeting";

const Greeting = () => {
  const time = new Date().getHours();
  if (time < 10) {
    return <MorningGreeting />;
  } else if (time < 20) {
    return <AfternoonGreeting />;
  } else {
    return <EveningGreeting />;
  }
};

export default Greeting;
