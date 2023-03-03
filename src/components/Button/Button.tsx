import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: 'primary' | 'secondary';
  className?: string;
  onClick?: VoidFunction;
}

const Button: FC<Props> = ({
  children,
  form,
  type,
  color,
  className,
  onClick,
}) => {
  return (
    <button
      form={form}
      type={type}
      onClick={onClick}
      className={cn(
        'p-2 text-white font-bold rounded-lg opacity-80 hover:opacity-100 duration-300 w-full',
        className,
        {
          'bg-green-500': color === 'primary',
          'bg-neutral-500': color === 'secondary',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
