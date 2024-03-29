import React, { useState } from 'react';
import cn from 'classnames';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { ReactComponent as DoneSVG } from 'assets/done.svg';

interface Props<T extends FieldValues> {
  className?: string;
  label?: string;
  name?: Path<T>;
  register?: UseFormRegister<T>;
  onChange?: VoidFunction;
}

const CheckBox = <T extends FieldValues>({
  className,
  label,
  onChange,
  register,
  name,
}: Props<T>) => {
  const [checked, setChecked] = useState(false);

  const changeState = () => {
    setChecked((prev) => !prev);
    if (onChange) onChange();
  };

  if (register) {
    return (
      <input
        {...register(name as Path<T>)}
        type='checkbox'
        className={cn('cursor-pointer w-4 h-4', className)}
      />
    );
  }

  return (
    <div className='flex'>
      <div
        className={cn(
          'relative border borded-1 border-black w-6 h-6 rounded bg-white',
          className,
          { '!bg-green-500': checked }
        )}
      >
        <input
          type='checkbox'
          className='appearance-none cursor-pointer w-full h-full'
          onChange={changeState}
        />
        {checked && (
          <DoneSVG className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none' />
        )}
      </div>
      {label && <span className='ml-4'>{label}</span>}
    </div>
  );
};

export default CheckBox;
