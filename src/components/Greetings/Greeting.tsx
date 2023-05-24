import MorningGreeting from "./MorningGreeting";
import AfternoonGreeting from "./NoonGreeting";
import EveningGreeting from "./EveningGreeting";

const Greeting = () => {
  const time = new Date().getHours();
  if (time >=3 && time <= 12) {
    return <MorningGreeting />;
  } else if (time < 17) {
    return <AfternoonGreeting />;
  } else {
    return <EveningGreeting />;
  }
};

export default Greeting;
