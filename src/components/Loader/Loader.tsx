import React, { FC } from 'react';
import cn from 'classnames';
import { LOADER_SIZES } from './constants';

interface Props {
  className?: string;
  size?: LOADER_SIZES;
}

const Loader: FC<Props> = ({ className, size = LOADER_SIZES.M }) => (
  <div className='w-full flex items-center justify-center'>
    <div
      className={cn(
        'animate-spin border border-gray-300 border-t-black rounded-full',
        size
      )}
    />
  </div>
);

export default Loader;
