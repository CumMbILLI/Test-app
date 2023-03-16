import React, { FC, SetStateAction, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';

import Button from 'components/Button/Button';
import FormSteps from 'components/FormSteps/FormSteps';
import { history } from 'services/history';
import { cancelCreateTest } from 'redux/createTest/action';

import { ReactComponent as ArrowSVG } from 'assets/arrow.svg';
import { ReactComponent as CloseSVG } from 'assets/close.svg';

interface FieldProps {
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
}

interface FieldFormItem {
  step: number;
  component: ({ setCurrentStep }: FieldProps) => JSX.Element;
}

interface Props {
  fieldsForm: FieldFormItem[];
  finalStep: number;
}

const BUTTON_TEXT = {
  DEFAULT: 'Продовжити',
  FINISH: 'Завершити',
};

const MasterForm: FC<Props> = ({ fieldsForm, finalStep }) => {
  const dispatch = useAppDispatch();

  const [currentStep, setCurrentStep] = useState(1);

  const prevStep = () => setCurrentStep((prev) => --prev);

  const clickCancel = () => {
    dispatch(cancelCreateTest());
    history.push('/');
  };

  return (
    <div className='flex justify-between mt-10 mx-24'>
      <div className='w-8'>
        {currentStep > 1 && (
          <ArrowSVG className='cursor-pointer' onClick={prevStep} />
        )}
      </div>

      <div className='w-[1000px] text-center '>
        <FormSteps finalStep={finalStep} currentStep={currentStep} />

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
          {currentStep !== finalStep ? BUTTON_TEXT.DEFAULT : BUTTON_TEXT.FINISH}
        </Button>
      </div>

      <div className='w-8'>
        {currentStep < finalStep ? (
          <button className='w-full' type='submit' form='example'>
            <ArrowSVG className='rotate-180 cursor-pointer' />
          </button>
        ) : (
          <CloseSVG onClick={clickCancel} className='cursor-pointer' />
        )}
      </div>
    </div>
  );
};

export default MasterForm;
