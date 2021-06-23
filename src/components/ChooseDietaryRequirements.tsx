import React from 'react';
import DRButtons from "./DietaryRequirementButtons";

export default function ChooseDietaryRequirements<RC> () {
  return (
    <div className="pb-8">
      <h3> It's time to choose your dietary requirements</h3>
      <p>Check all that apply - all options are vegetarian by default</p>
      <DRButtons />
    </ div>
  )
}