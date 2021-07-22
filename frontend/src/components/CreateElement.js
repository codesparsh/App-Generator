import React,{useEffect, useState} from 'react'

function CreateElement(drag_start,canvasRefs) {
    const [textElement,setTextElement] = useState([]);
    const [elementId,setElementId] = useState(0);

   
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
            e.target.style.outline = '2px solid blue';
        })

        parah.addEventListener('mouseleave',(e)=>{
            e.target.style.outline = 'none';
        })
        return parah;
    }

    const create = (e)=>{
        console.log(canvasRefs.current);
        var parent = e.target.parentNode;
        var newId = 'drag'+elementId; 
        console.log(typeof(newId));
        setElementId(1+elementId);
        var ele = element(newId);
        parent.appendChild(ele);
    }


    
    return (
        <div className="text-center">
            <button onClick={(e)=>create(e)}>Create Element</button>

        </div>
        // <div onDragOver={(e)=>{drag_over(e)}} onDrop={(e)=>drop(e)}>
        // </div>
    )
}

export default CreateElement
