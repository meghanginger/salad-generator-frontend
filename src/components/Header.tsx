import React from 'react';
import SaladMantra from "../components/SaladMantra";

export default function Header<RC> () {
  return (
    <div className="pb-8" >
      <h1>Salads don't have to suck.</h1>
      <h3>Now you don't need to think about it. We'll make one for you and tell you what to buy!</h3>
      <button>Skip to the salad</button>
      <SaladMantra />
    </ div>
  )
}