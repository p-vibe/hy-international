import React from 'react';
import Topbar, { Props } from './Topbar';
import icons from '../../../assets/icons';
import InfoIcon from '../icons/InfoIcon';

const BackTopbar: React.FC<Omit<Props, 'iconSource' | 'iconStyle'>> = ({
  title
}: Props) => {
  return (
    <Topbar
      title={title}
      iconSource={icons.backButton}
      iconStyle={{
        width: 8,
        height: 16
      }}
      RightComponent={<InfoIcon hitSlopSize={23} />}
    />
  );
};

export default BackTopbar;
