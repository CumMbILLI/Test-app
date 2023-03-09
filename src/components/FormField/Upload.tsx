import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import {
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { ReactComponent as DownloadSVG } from 'assets/download.svg';

interface Props<T extends Record<string, any>> {
  name: Path<T>;
  setValue: UseFormSetValue<T>;
  register?: UseFormRegister<T>;
  placeholder?: string;
  className?: string;
}

const Upload = <T extends Record<string, any>>({
  name,
  placeholder = 'Виберіть файл',
  setValue,
  className,
}: Props<T>) => {
  const fileBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = (error) => reject(error);
    });
  };

  const dropFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null)
      fileBase64(e.target.files[0]).then((data) =>
        setValue(name, data as PathValue<T, Path<T>>)
      );
  };

  return (
    <div
      className={cn(
        'w-full h-full duration-200 bg-sky-600/80 hover:bg-sky-600/100 rounded border-2 border-white border-dashed cursor-pointer flex flex-col justify-center items-center relative',
        className
      )}
    >
      <DownloadSVG className='w-16 absolute top-7 left-1/2 -translate-x-1/2' />
      <span className='text-white font-bold absolute bottom-5 z-0'>
        {placeholder}
      </span>
      <input
        onChange={dropFile}
        type='file'
        className='w-full h-full opacity-0 p-5 cursor-pointer'
      />
    </div>
  );
};

export default Upload;
