import classNames from 'classnames';
import React from 'react';

export interface TableHeaderProps<K> {
  name: string;
  field: K;
  className?: string;
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
          {header.map(({ name, className }) => (
            <th
              key={name}
              className={classNames(
                'border border-black text-lg h-16',
                className
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
            {header.map(({ field }, index) => (
              <td key={index} className='border border-black h-12'>
                <span className='flex justify-center'>
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
