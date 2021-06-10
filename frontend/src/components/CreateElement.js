import React from 'react'

function CreateElement() {
    const drag_start = (e)=>{
        // console.log(e.target);
        e.dataTransfer.setData("text", e.target.id);

    }

    const drop = (e)=>{
        var data = e.dataTransfer.getData("text");
        var ele = document.getElementById(data);
        ele.style.left = e.clientX + 'px';
        ele.style.top = e.clientY + 'px';
        e.stopPropagation();
        e.preventDefault();
        return false
    }

    const drag_over = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="body" onDragOver={(e)=>{drag_over(e)}} onDrop={(e)=>drop(e)}>
            <div className="heading">
                {/* <button class÷>drag</button> */}
                <div id="drag2" draggable onDragStart={(e)=>drag_start(e)}>
                    <p></p>
                </div>
              
            </div>
        </div>
    )
}

export default CreateElement
