import React from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import Button from 'components/Button/Button';
import { Input } from 'components/FormField/Input';

interface PrecentAnswer {
  estimates: PrecentItem[];
}

interface PrecentItem {
  id: number;
  name: string;
  result: string[];
  placeholder?: string;
}

const INITIAL_VALUES = [
  {
    id: 1,
    placeholder: 'Мудрець',
  },
  {
    id: 2,
    placeholder: 'Знавець',
  },
  {
    id: 3,
    placeholder: 'Невдаха',
  },
];

const PrecentCurrentAnswer = () => {
  const { register, control, handleSubmit } = useForm<PrecentAnswer>({
    defaultValues: {
      estimates: INITIAL_VALUES,
    },
  });
  const { remove, fields, append } = useFieldArray({
    control,
    name: 'estimates',
  });

  const onSubmit: SubmitHandler<PrecentAnswer> = (data) =>
    console.log(
      Object.assign(
        [],
        data.estimates.map(({ id, name, placeholder, result }) => ({
          id,
          name,
          result,
        }))
      )
    );

  const isLengthCheck = (index: number) => fields.length < index + 1;

  const createFieldForm = () =>
    append({
      id: fields.length + 1,
      name: '',
      result: [],
      placeholder: 'Назва',
    });

  const removeField = (_id: number) => {
    remove(_id);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full h-full bg-gray-300 mt-20 p-5'
    >
      {fields.map(({ id, placeholder }, index) => (
        <div key={id} className='flex w-full'>
          <div className='w-1/2 p-5 border-r-2 border-black flex justify-between'>
            <div className='w-full'>
              <Input
                name={`estimates.${index}.name`}
                register={register}
                placeholder={placeholder}
                required={true}
              />
            </div>
            {isLengthCheck(index) && (
              <div
                onClick={() => removeField(index)}
                className='w-10 flex justify-center items-center text-[24px]'
              >
                -
              </div>
            )}
          </div>
          <div className='w-1/2 h-max p-5 flex items-center justify-center'>
            <span className='mx-2 text-lg'>від</span>
            <Input
              register={register}
              name={`estimates.${index}.result.${0}`}
            />
            <span className='mx-2 text-lg'>до</span>
            <Input
              register={register}
              name={`estimates.${index}.result.${1}`}
            />
          </div>
        </div>
      ))}
      <div className='flex gap-10 px-5'>
        <Button onClick={createFieldForm} color='secondary'>
          Создать
        </Button>
        <Button color='primary' type='submit'>
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default PrecentCurrentAnswer;
