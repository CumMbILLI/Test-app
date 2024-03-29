import React from 'react';

import MasterForm from 'components/MasterForm/MasterForm';
import NameStep from 'components/CreateTest/NameStep';
import GradeStep from 'components/CreateTest/GradeStep';
import QuestionStep from 'components/CreateTest/QuestionStep';
import FinishStep from 'components/CreateTest/FinishStep';

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
    component: () => <FinishStep />,
  },
];

const CreateTest = () => {
  return <MasterForm finalStep={4} fieldsForm={FIELDS_FORM} />;
};

export default CreateTest;
