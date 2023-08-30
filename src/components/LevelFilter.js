import Select from 'react-select';
import styled from 'styled-components';
import { useQueryParams } from 'hooks/useQueryParams';

const StyledSelect = styled(Select)`
  width: 200px;
`;

const options = [
  { value: 'all', label: 'All' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

export const LevelFilter = () => {
  const { level, changeLevel } = useQueryParams();
  const defaultOption = options.find(option => option.value === level);

  return (
    <StyledSelect
      options={options}
      value={defaultOption}
      onChange={option => changeLevel(option.value)}
    />
  );
};
