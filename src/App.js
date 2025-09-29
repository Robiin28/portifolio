import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Pages } from "./components/pages/Page";
import { Bubble } from "./components/common/Bubble";
function App() {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[]);
  return (
        <>
          <Pages />
          <Bubble />
        </>
      )
     }
export default App;
