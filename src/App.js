import { motion } from "framer-motion";
import "./App.css";
import { useRef, useEffect, useState } from "react";
import images from "./images.js";

function App() {

  const [width, setWidth] = useState(0);
  const carousel = useRef(); 

  useEffect(() => {

console.log(carousel.current)

  }, []);
  return (
    //  this div returns the entire app
    <div className="App">
      {/* this div holds the moving div to drag */}
      <motion.div ref={carousel}className="carousel">
        {/* this div is the actual moving div */}
        <motion.div  drag="x" 
        dragConstraints={{right:0, left: -2450 }} className="inner-carousel">
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                {/* this div takes the images array and makes smaller div's from each image and places them in a img tag.VERY COOL  */}
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
