import React from 'react';
import mantraList from "../data/SaladMantra.json";

const SaladMantra = () => {
  return (
    <>
      <h3>Salads have 7 main components.</h3>
      <ol className="list-decimal">
        {mantraList.map(item => (
          <li>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
    </>
  )
};

export default SaladMantra