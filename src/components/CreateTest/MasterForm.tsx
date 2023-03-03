import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import PrecentCurrentAnswer from './GradeStep';
import NameStep from './NameStep';
import GradeStep from './GradeStep';

import { ReactComponent as ArrowSVG } from '../../assets/arrow.svg';
import Button from 'components/Button/Button';
import QuestionStep from './QuestionStep';

const MasterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => ++prev);
  const prevStep = () => setCurrentStep((prev) => --prev);

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='bg-gray-200 rounded'>
        <div className='flex w-full h-8 bg-gray-400 rounded' />

        <div className='px-10'>
          <div className='grid grid-cols-3 items-center mt-8'>
            {currentStep > 1 && (
              <ArrowSVG className='w-8 cursor-pointer' onClick={prevStep} />
            )}
            <span className='text-3xl col-start-2 justify-self-center select-none'>
              Крок {currentStep}
            </span>
            {currentStep < 4 && (
              <ArrowSVG
                className='w-8 rotate-180 cursor-pointer justify-self-end'
                onClick={nextStep}
              />
            )}
          </div>
          <div className='w-full h-full grid py-10'>
            {currentStep === 1 && <NameStep setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <PrecentCurrentAnswer />}
            {currentStep === 3 && <QuestionStep />}

            <Button
              color='primary'
              form='example'
              type='submit'
              className='!w-80 h-14 justify-self-center self-center'
            >
              Продовжити
            </Button>
          </div>
        </div>
      </div>
    </div>

    // <div className='w-full h-full flex flex-col items-center mt-40'>
    //   <div className='bg-gray-200 w-[800px] h-[350px] rounded'>
    //     <div className='flex w-full h-8 bg-gray-400 rounded' />

    //     <div className='px-10'>
    //       <div className='grid grid-cols-3 items-center mt-8'>
    //         {currentStep > 1 && (
    //           <ArrowSVG className='w-8 cursor-pointer' onClick={prevStep} />
    //         )}
    //         <span className='text-3xl col-start-2 justify-self-center select-none'>
    //           Крок {currentStep}
    //         </span>
    //         {currentStep < 3 && (
    //           <ArrowSVG
    //             className='w-8 rotate-180 cursor-pointer justify-self-end'
    //             onClick={nextStep}
    //           />
    //         )}
    //       </div>

    //       <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
    //         <div>
    //           {currentStep === 1 && (
    //             <NameStep register={register} name='test.nameTest' />
    //           )}
    //         </div>
    //         <Button color='primary' className='w-100 justify-self-center'>
    //           Продовжити
    //         </Button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MasterForm;
