import React, { FC, SetStateAction, useState } from 'react';

import Button from 'components/Button/Button';

import { ReactComponent as ArrowSVG } from 'assets/arrow.svg';

interface FieldProps {
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
}

interface FieldFormItem {
  step: number;
  component: ({ setCurrentStep }: FieldProps) => JSX.Element;
}

interface Props {
  fieldsForm: FieldFormItem[];
  finaleStep: number;
}

const MasterForm: FC<Props> = ({ fieldsForm, finaleStep }) => {
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
        {fieldsForm.map(({ step, component: Component }) =>
          currentStep === step ? (
            <Component key={step} setCurrentStep={setCurrentStep} />
          ) : null
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
        {currentStep < finaleStep && (
          <ArrowSVG className='rotate-180 cursor-pointer' onClick={nextStep} />
        )}
      </div>
    </div>
  );
};

export default MasterForm;
