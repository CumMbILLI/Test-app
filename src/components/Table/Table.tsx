import classNames from 'classnames';
import React, { FC } from 'react';

export interface TableHeaderProps {
  name: string;
  field: string;
  className?: string;
}

interface Props {
  header: TableHeaderProps[];
  data: any;
}

const Table: FC<Props> = ({ header, data }) => {
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
        {data?.map((item: any, index: number) => (
          <tr key={index}>
            {header.map(({ field }) => (
              <td key={field} className='border border-black h-12'>
                <span className='flex justify-center'>{item?.[field]}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
