import React, { useEffect } from 'react'
import ReactPannellum, { getConfig, stopAutoRotate } from "react-pannellum";
export default function Pannellum() {
  const [count] = React.useState(-4);
  const config = {
    autoRotate: count,
    autoLoad: true,
  };
  const equirectangularOptions = {
    haov: 360,
    vaov: 180,
    vOffset: 10,
  }
  const click = () => {
    console.log(getConfig())
    stopAutoRotate()
  }
  useEffect(() => {
    getConfig()
  }, [])
  return (
    <div>
      {count}
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        imageSource="https://pannellum.org/images/alma.jpg"
        config={config}
        equirectangularOptions={equirectangularOptions}
      />
      <div onClick={click}>Click me</div>
    </div>
  );
}