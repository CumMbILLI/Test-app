import cn from 'classnames';
import React from 'react';

export interface TableHeaderProps<K> {
  name: string;
  field: K;
  tHeaderClassName?: string;
  tBodyClassName?: string;
}

interface Props<T, K extends keyof T> {
  header: TableHeaderProps<K>[];
  data: Array<T>;
}

const Table = <T, K extends keyof T>({ header, data }: Props<T, K>) => {
  return (
    <table className='w-full border border-black'>
      <thead className='border border-black'>
        <tr>
          {header.map(({ name, tHeaderClassName }) => (
            <th
              key={name}
              className={cn(
                'border border-black text-lg text-center h-16',
                tHeaderClassName
              )}
            >
              <span>{name}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            {header.map(({ field, tBodyClassName }) => (
              <td
                key={field as string}
                className='border border-black h-12 px-4'
              >
                <span className={cn('flex justify-center', tBodyClassName)}>
                  {field === 'index' && index + 1}
                  {item[field] as string}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
