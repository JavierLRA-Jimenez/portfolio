import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from "tsparticles"
import Animatedconfig from './Animatedconfig';
const Animated = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  },[])
  
  return (
    <div>
      <Particles options={Animatedconfig} init={particlesInit}/>
    </div>
  );
};

export default Animated;