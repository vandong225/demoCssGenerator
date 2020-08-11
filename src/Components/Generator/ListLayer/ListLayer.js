import React from "react";
import { ReactSortable } from "react-sortablejs";
import "./ListLayer.css";
import { BsThreeDotsVertical, BsFillTrashFill } from "react-icons/bs";

const ListLayer = (props) => {
  const ar = props.list.map((item, id) => {
    return { id: id, value: item };
  });

  return (
    <div className="list">
      <ReactSortable
        list={ar}
        setList={(newArr) => {
          let index = newArr.findIndex((x) => x.id === props.layoutSelected);
          if (index === -1) {
            index = 0;
          }
          const arr = newArr.map((x) => x.value);
          props.onSwapSelect(arr, index);
        }}
      >
        {ar.map((x, id) => {
          return (
            <div
              style={{
                backgroundColor:
                  x.id === props.layoutSelected ? "#5c6ac4" : "white",
                color: x.id === props.layoutSelected ? "white" : "black",
                width: "100%",
                padding: "10px 0px",
                cursor: "move",
              }}
              key={x.id}
              className="list-item"
            >
              <span
                style={{ width: "90%" }}
                onClick={() => props.onChangeLayout(x.id)}
              >
                {" "}
                <BsThreeDotsVertical />
                <BsThreeDotsVertical />
                {`rgba(${x.value.shadowColor.rgb.r},${
                  x.value.shadowColor.rgb.g
                },${x.value.shadowColor.rgb.b},${
                  x.value.shadowColor.opacity / 100
                }) ${x.value.shadowColor.shiftRight}px ${
                  x.value.shadowColor.shiftDown
                }px ${x.value.shadowColor.blur}px`}
              </span>

              <span
                onClick={() => {
                  if (props.list.length !== 1) {
                    const a = ar.filter((y) => y.id !== id);
                    const newa = a.map((y) => y.value);
                    if (id !== 0) {
                      props.onSwapSelect(newa, id - 1);
                    } else {
                      props.onSwapSelect(newa, 0);
                    }
                  }
                }}
              >
                <BsFillTrashFill />
              </span>
            </div>
          );
        })}
      </ReactSortable>
    </div>
  );
};

export default ListLayer;
