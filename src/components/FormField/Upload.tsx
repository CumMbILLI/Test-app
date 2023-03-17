import React, { ChangeEvent, useState } from 'react';
import cn from 'classnames';
import { Path, PathValue, UseFormSetValue } from 'react-hook-form';
import { ReactComponent as DownloadSVG } from 'assets/download.svg';
import { ReactComponent as CloseSVG } from 'assets/close.svg';

interface Props<T extends Record<string, any>> {
  name: Path<T>;
  setValue: UseFormSetValue<T>;
  placeholder?: string;
  className?: string;
  imageString?: string;
}

const Upload = <T extends Record<string, any>>({
  name,
  placeholder = 'Виберіть файл',
  setValue,
  className,
  imageString,
}: Props<T>) => {
  const [imageURL, setImageURL] = useState<string | undefined>(imageString);

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
      fileBase64(e.target.files[0]).then((data) => {
        setImageURL(data);
        setValue(name, data as PathValue<T, Path<T>>);
      });
  };

  const removeImg = () => {
    setImageURL('');
    setValue(name, '' as PathValue<T, Path<T>>);
  };

  return (
    <div
      className={cn(
        'w-full h-full flex justify-center items-center relative duration-200 bg-sky-600/80 hover:bg-sky-600/100 rounded border-2 border-white border-dashed cursor-pointer',
        className
      )}
    >
      {imageURL ? (
        <div className='w-full h-full flex justify-center relative'>
          <CloseSVG
            onClick={removeImg}
            className='absolute z-10 top-1 right-2 w-7 duration-200 cursor-pointer fill-stone-300 hover:fill-stone-200'
          />
          <img src={imageURL} alt='' className='h-full object-contain z-0' />
        </div>
      ) : (
        <div className='h-full flex flex-col justify-center items-center gap-2'>
          <DownloadSVG className='w-16' />
          <span className='text-white font-bold'>{placeholder}</span>
        </div>
      )}
      <input
        onChange={dropFile}
        type='file'
        className='w-full h-full left-0 top-0 opacity-0 p-5 cursor-pointer absolute z-9'
      />
    </div>
  );
};

export default Upload;
