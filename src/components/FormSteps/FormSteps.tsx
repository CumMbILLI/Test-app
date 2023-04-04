import React, { FC } from 'react';
import cn from 'classnames';

import { arrayRange } from 'utils/arrayRange';

interface Props {
  finalStep: number;
  currentStep: number;
}

const FormSteps: FC<Props> = ({ finalStep, currentStep }) => {
  const stepArray = arrayRange(1, finalStep, 1);

  return (
    <div className='w-full flex justify-center mb-10'>
      {stepArray.map((value) => (
        <div
          className={cn('w-full flex items-center', {
            '!w-auto': value === finalStep,
          })}
          key={value}
        >
          <div
            className={cn(
              'text-xl border-[3px] border-gray-400 font-bold rounded-full w-14 h-14 flex justify-center items-center ease-linear duration-300 select-none shrink-0',
              {
                '!border-green-500 !bg-green-500 text-white':
                  currentStep === value,
                '!border-green-500': value <= currentStep,
              }
            )}
          >
            {value}
          </div>
          {value < finalStep && (
            <div
              className={cn(
                'w-full h-1 bg-gray-400 top-1/2 -translate-y-1/2 z-0 text-gray-400 ease-linear duration-300 mx-3',
                {
                  '!text-black !bg-green-500': value < currentStep,
                }
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormSteps;
