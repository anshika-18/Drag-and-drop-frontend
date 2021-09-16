import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "./App.css";
import { useDrag } from "react-dnd";
import "./drop.css"
import Modal from './modal.js'
import Button from "react-bootstrap/Button";
import axios from 'axios';

const PictureList = [
  {
    id: 1,
    value:'A'
  },
  {
    id: 2,
    value:'B'
  },
  {
    id: 3,
    value:'C'
  },
  {
    id: 4,
    value:'D'
  },
  {
    id: 5,
    value:'E'
  },
  {
    id: 6,
    value:'F'
  },
  {
    id: 7,
    value:'G'
  },
  {
    id: 8,
    value:'H'
  },
  {
    id: 9,
    value:'I'
  },
  {
    id: 10,
    value:'J'
  },
  {
    id: 11,
    value:'K'
  },
  {
    id: 12,
    value:'L'
  },
  {
    id: 13,
    value:'M'
  },
  {
    id: 14,
    value:'N'
  },
  {
    id: 15,
    value:'O'
  },
  {
    id: 16,
    value:'P'
  },
  {
    id: 17,
    value:'Q'
  },
  {
    id: 18,
    value:'R'
  },
  {
    id: 19,
    value:'S'
  },
  {
    id: 20,
    value:'T'
  },
  {
    id: 21,
    value:'U'
  },
  {
    id: 22,
    value:'V'
  },
  {
    id: 23,
    value:'W'
  },
  {
    id: 24,
    value:'X'
  },
  {
    id: 25,
    value:'Y'
  },
  {
    id: 26,
    value:'Z'
  },
  {
      id:100,
      value:'-'
  }
  
];

function DragDrop() {
  const [board, setBoard] = useState({value:'-',id:'100'});
    const [sign,setSign]=useState({value:'-',id:'0'})
    const [integer,setInteger]=useState(0)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const submit=()=>{
    axios.get(`https://drag-and-drop-anshika-backend.herokuapp.com/filter/${board.value}/${integer}/${sign.value}`)
        .then(res=>{
            console.log(res.data)
            var x=res.data;
            let div=document.getElementById('result');
            let mini=document.createElement('div')
            mini.id='result'
            for(var i=0;i<x.length;i++)
            {
                let y=document.createElement('div')
                y.className="y";
                let a=document.createElement('div')
                let b=document.createElement('div')
                a.innerHTML=x[i].value;
                b.innerHTML=x[i].char;
                y.appendChild(b);
                y.appendChild(a);
                y.style.display='flex';
                mini.appendChild(y);
            }
            div.replaceWith(mini)
        })


  }


 

  const addImageToBoard = (id) => {
    console.log(id)
      if(id==='100')
      {
        setSign({id:'100',value:'>'})
        return;
      }
      else if(id==='99')
      {
          setSign({id:'99',value:'<'})
          return;
      }
      else
      {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        console.log(pictureList);
        setBoard(pictureList[0]);
        console.log(board)
      }
  };

  const setChar=()=>{
      setBoard({value:'-',id:'100'})
  }
  console.log(integer)
  return (
    <>
    <div className="head">Let's Drag and Drop</div>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture value={picture.value} id={picture.id} />;
        })}
      </div>
      <div className="flex">
      <div className="sign">
      <Picture value='<' id='99' />
      <Picture value='>' id='100' />
      </div>
        <Modal setInteger={setInteger}></Modal>
        </div>
      <div className="Board" ref={drop}>
          <div>Drag and Drop here</div>
          <Picture value={board.value} id={board.id} />
          <button onClick={()=>{setChar()}} className="exit">x</button>
          <Picture value={sign.value} id={sign.id} />
          <button onClick={()=>{setSign({value:'-',id:'0'})}} className="exit">x</button>
          <div className="tile">{integer}</div>
          <button onClick={()=>{setInteger(0)}} className="exit">x</button>
      </div>
      <Button className="butt" variant="success" onClick={()=>{submit()}}>Submit</Button>
      <div className="head">RESULT</div>
      <div id="result">
          
      </div>
    </>
  );
}

export default DragDrop;