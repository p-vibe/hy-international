import React from 'react';
import Topbar, { Props } from './Topbar';
import InfoIcon from '../icons/InfoIcon';
import BackIcon from '../icons/BackIcon';

const BackTopbar: React.FC<Omit<Props, 'iconSource' | 'iconStyle'>> = ({
  title
}: Props) => {
  return (
    <Topbar
      title={title}
      LeftComponent={<BackIcon hitSlopSize={16} />}
      RightComponent={<InfoIcon hitSlopSize={23} />}
    />
  );
};

export default BackTopbar;
