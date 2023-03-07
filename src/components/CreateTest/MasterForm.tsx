import React, { FC, useState } from 'react';

import Button from 'components/Button/Button';

import { ReactComponent as ArrowSVG } from 'assets/arrow.svg';

interface Props {
  fieldsForm: {
    step: number;
    component: (props: any) => JSX.Element;
  }[];
}

const MasterForm: FC<Props> = ({ fieldsForm }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => ++prev);
  const prevStep = () => setCurrentStep((prev) => --prev);

  return (
    <div className='flex justify-around mt-5'>
      <div className='w-8'>
        {currentStep > 1 && (
          <ArrowSVG className='cursor-pointer' onClick={prevStep} />
        )}
      </div>

      <div className='w-[1000px] text-center '>
        <span className='text-3xl select-none'>Крок {currentStep}</span>
        {fieldsForm.map(
          ({ step, component: Component }) =>
            currentStep === step && (
              <Component key={step} setCurrentStep={setCurrentStep} />
            )
        )}
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
          <ArrowSVG className='rotate-180 cursor-pointer' onClick={nextStep} />
        )}
      </div>
    </div>
  );
};

export default MasterForm;
