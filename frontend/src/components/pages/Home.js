import React, { useRef, useState } from 'react'
import CreateElement from '../CreateElement'
import Sidebar from '../Sidebar'

function Home() {
  const [heading, setHeading] = useState()

  const canvasSection = useRef(null);

  const drag_start = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  }

  const drop = (e) => {
    var data = e.dataTransfer.getData("text");
    var ele = document.getElementById(data);
    ele.style.left = e.clientX + 'px';
    ele.style.top = e.clientY + 'px';
    e.stopPropagation();
    e.preventDefault();
    return false
  }

  const drag_over = (e) => {
    e.preventDefault();
    return false;
  }
  return (
    <section className="home">
      <div className="wrapper">
        <div className="element-box">
          <Sidebar drag_start={(e)=>drag_start(e)} canvasRef={canvasSection}/>
        </div>
        <div className="canvas-box" ref={canvasSection}>
        </div>
      </div>
    </section>
  )
}

export default Home
