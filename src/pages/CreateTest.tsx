import React from 'react';

import MasterForm from 'components/CreateTest/MasterForm';
import NameStep from 'components/CreateTest/NameStep';
import GradeStep from 'components/CreateTest/GradeStep';
import QuestionStep from 'components/CreateTest/QuestionStep';

const FIELDS_FORM = [
  {
    step: 1,
    component: (props: any) => <NameStep {...props} />,
  },
  {
    step: 2,
    component: (props: any) => <GradeStep {...props} />,
  },
  {
    step: 3,
    component: (props: any) => <QuestionStep {...props} />,
  },
  {
    step: 4,
    component: (props: any) => <div>Finish form</div>,
  },
];

const CreateTest = () => {
  return <MasterForm finaleStep={4} fieldsForm={FIELDS_FORM} />;
};

export default CreateTest;
