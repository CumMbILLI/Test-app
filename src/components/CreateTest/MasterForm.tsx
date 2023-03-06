import React, { useState } from 'react';

import Button from 'components/Button/Button';
import NameStep from './NameStep';
import GradeStep from './GradeStep';
import QuestionStep from './QuestionStep';

import { ReactComponent as ArrowSVG } from 'assets/arrow.svg';

const MasterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => ++prev);
  const prevStep = () => setCurrentStep((prev) => --prev);

  return (
    <div>
      <div className='flex justify-around mt-5'>
        <div className='w-8'>
          {currentStep > 1 && (
            <ArrowSVG className='w-8 cursor-pointer' onClick={prevStep} />
          )}
        </div>

        <div className='w-[1000px] text-center '>
          <span className='text-3xl select-none'>Крок {currentStep}</span>
          <div className='mt-5'>
            {currentStep === 1 && <NameStep setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <GradeStep setCurrentStep={setCurrentStep} />}
            {currentStep === 3 && (
              <QuestionStep setCurrentStep={setCurrentStep} />
            )}
          </div>

          <Button
            color='primary'
            form='example'
            type='submit'
            className='!w-60 h-12 self-center mt-8'
          >
            Продовжити
          </Button>
        </div>

        <div className='w-8'>
          {currentStep < 4 && (
            <ArrowSVG
              className='w-8 rotate-180 cursor-pointer'
              onClick={nextStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MasterForm;
