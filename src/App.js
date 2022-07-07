import Home from "./components/Pages/Home/Home";
import AnimatedCursor from "react-animated-cursor"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="font-sans">
      <Home></Home>
      <AnimatedCursor
        innerSize={15}
        outerSize={8}
        color='255, 255, 0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  );
}

export default App;
