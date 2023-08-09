import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
`;

export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
`;
