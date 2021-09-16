import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, value}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div 
        className="tile"
      ref={drag}
      width="50px"
    >{value}</div>
  );
}

export default Picture;