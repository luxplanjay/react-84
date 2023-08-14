import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid black;
`;

export const StyledField = styled(Field)`
  font: inherit;
`;

export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
