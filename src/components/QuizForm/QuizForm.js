import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StyledForm, StyledField, StyledError, Label } from './QuizForm.styled';

const schema = Yup.object().shape({
  topic: Yup.string().min(1, 'Too Short!').required('Required'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('Required'),
  time: Yup.number()
    .positive('Must be >0')
    .min(10, 'Not enough time!')
    .required('Required'),
  questions: Yup.number()
    .positive('Must be >0')
    .min(3, 'Min 3 q!')
    .required('Required'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        topic: '',
        level: 'beginner',
        time: 0,
        questions: 0,
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Topic
          <StyledField name="topic" placeholder="Quiz topic..." />
          <StyledError name="topic" component="div" />
        </Label>

        <Label>
          Level
          <StyledField as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </StyledField>
          <StyledError name="level" component="div" />
        </Label>

        <Label>
          Time
          <StyledField name="time" type="number" />
          <StyledError name="time" component="div" />
        </Label>

        <Label>
          Questions
          <StyledField name="questions" type="number" />
          <StyledError name="questions" component="div" />
        </Label>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
