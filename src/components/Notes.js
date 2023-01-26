import React from "react";

export default function Notes({ data }) {
  return (
    <ul className="Note-list">
      {
        data.map((value) => (<li className="Note-item">{value}</li>))
      }
    </ul>
  )
}
