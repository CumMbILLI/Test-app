import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: 'primary' | 'secondary';
  type: 'button' | 'submit';
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
        'p-2 text-white font-bold rounded-lg hover:opacity-80 duration-300 w-full',
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
