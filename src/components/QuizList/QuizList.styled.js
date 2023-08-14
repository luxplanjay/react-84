import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 32px) / 3);
`;
