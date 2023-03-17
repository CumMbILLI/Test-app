import React, { FC, SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';

import FormSteps from 'components/FormSteps/FormSteps';
import { cancelTestCreation } from 'redux/createTest/action';

import { ReactComponent as ArrowSVG } from 'assets/arrow.svg';
import { ReactComponent as CloseSVG } from 'assets/close.svg';
import { useSearchParams } from 'react-router-dom';

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

const MasterForm: FC<Props> = ({ fieldsForm, finalStep }) => {
  const dispatch = useAppDispatch();

  const [queryParam, setQueryParam] = useSearchParams();

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(
    () => setQueryParam({ step: `${currentStep}` }),
    [currentStep, setCurrentStep, setQueryParam]
  );

  const prevStep = () => setCurrentStep((prev) => --prev);

  const handleCancel = () => {
    const isCancel = window.confirm('Бажаєте вийти?\n(Дані будуть втрачені)');

    if (isCancel) dispatch(cancelTestCreation());
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
          Number(queryParam.get('step')) === step ? (
            <Component key={step} setCurrentStep={setCurrentStep} />
          ) : null
        )}
      </div>

      <div className='w-8'>
        {currentStep < finalStep ? (
          <button className='w-full' type='submit' form='createTest'>
            <ArrowSVG className='rotate-180 cursor-pointer' />
          </button>
        ) : (
          <CloseSVG onClick={handleCancel} className='cursor-pointer' />
        )}
      </div>
    </div>
  );
};

export default MasterForm;
