import React from 'react'
import CreateElement from './CreateElement'

function Sidebar(drag_start,canvasRef) {
    return (
        <section className="sidebar">
            <div className="wrapper">
                <div className="row">
                    <div className="section-heading my-3">
                        <p>Element Box</p>
                    </div>
                    <div className="row">
                        <CreateElement drag_start={(e)=>drag_start(e)} canvasRefs={canvasRef}/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sidebar
