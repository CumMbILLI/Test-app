import React, { FC, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as DoneSVG } from 'assets/done.svg';

interface Props {
  className?: string;
  changeMultiAnswer?: VoidFunction;
}

const CheckBox: FC<Props> = ({ className, changeMultiAnswer }) => {
  const [checked, setChecked] = useState(false);

  const changeState = () => {
    setChecked((prev) => !prev);
    if (changeMultiAnswer !== undefined) changeMultiAnswer();
  };

  return (
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
  );
};

export default CheckBox;
