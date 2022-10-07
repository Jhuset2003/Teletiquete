import React from 'react';
import "../../Styles/Modals/Bus.scss";

import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';

export const Bus = ({datos=[],step={}}) => {
  return (
    <div className='BusSteaps_container' >
      <div className="StepsContainer">
          <div className='steps'>
            {step === 1 ? <Step1 /> : ""}
            {step === 2 ? <Step2/> : ""}
            {step === 3 ? <Step3/> : ""}
          </div>
          
      </div>
    </div>
  )
}
