import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushis, eatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0)
  const SUSHI_SHOWN = 4;

  function handleNext() {
    setSushiIndex(sushiIndex + SUSHI_SHOWN)
    // console.log("Do")
  }
  return (
    <div className="belt">
      {sushis.slice(sushiIndex,sushiIndex + SUSHI_SHOWN).map(sushi=> <Sushi sushi={sushi} key={sushi.id} eatSushi ={eatSushi} />)}
      {/* Render Sushi components here! */}
      <MoreButton handleClick={handleNext } />
    </div>
  );
}

export default SushiContainer;
