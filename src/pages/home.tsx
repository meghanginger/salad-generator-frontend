import React from 'react';
import Header from "../components/Header";
import ChooseDietaryRequirements from "../components/ChooseDietaryRequirements";
import ChosenSalad from "../components/ChosenSalad";
import ScrollAnchor from "../components/ScrollAnchor";

export default function homePage<RC> () {
  return (
    <>
      <div className="container mx-auto py-8">
        <div>
          <Header />
          <ScrollAnchor linkId="setRequirements" />
          <ChooseDietaryRequirements />
          <ScrollAnchor linkId="chosenSalad" />
          <ChosenSalad />
        </ div>
      </div>
    </>
  )
}