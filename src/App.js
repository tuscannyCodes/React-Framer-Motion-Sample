import {motion} from "framer-motion";
import './App.css';
import {useRef, useEffect, useState} from "react"; 
import images from './images.js';

function App() {
  return (
   
  <div className="App">
  
 <motion.div className="carousel">

<motion.div className="inner-carousel">
{images.map(image => {

return (
<motion.div className="item">
<img src={image}></img>

</motion.div>
);

})}
</motion.div>

 </motion.div>
  </div>
  );
}

export default App;
