import React,{useEffect, useState} from 'react'

function CreateElement() {
    const [textElement,setTextElement] = useState([]);
    const [elementId,setElementId] = useState(0);

    const drag_start = (e)=>{
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
        return false;
    }

    const element = (id)=>{
        var parah = document.createElement('div');
        parah.id = id;
        parah.innerHTML = "hello i am sparsh";
        parah.style.position = 'absolute';
        parah.draggable = true;
        parah.addEventListener('dragstart',(e)=>{
            drag_start(e)
        })
        parah.addEventListener('dblclick',(e)=>{
            e.target.draggable = false;
            e.target.contentEditable = true
        })
        parah.addEventListener('focusout',(e)=>{
            e.target.contentEditable = false;
            e.target.draggable = true;
        }) 
        parah.addEventListener('mouseover',(e)=>{
            e.target.style.outline = '2px solid -webkit-focus-ring-color';
        })

        parah.addEventListener('mouseleave',(e)=>{
            e.target.style.outline = 'none';
        })
        return parah;
    }

    const create = (e)=>{
        var parent = e.target.parentNode;
        var newId = 'drag'+elementId; 
        console.log(typeof(newId));
        setElementId(1+elementId);
        var ele = element(newId);
        parent.appendChild(ele);
    }


    
    return (
        <div className="body" onDragOver={(e)=>{drag_over(e)}} onDrop={(e)=>drop(e)}>
            <button onClick={(e)=>create(e)}>Create Element</button>
        </div>
    )
}

export default CreateElement
