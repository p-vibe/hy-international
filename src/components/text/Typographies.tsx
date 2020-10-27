import styled from 'styled-components/native';
import RNText from './RNText';

const Bold = styled(RNText).attrs({ fontType: 'BOLD' })``;

const Bold18 = styled(Bold)`
  font-size: 18px;
  line-height: 26px;
`;

export default Bold18;
