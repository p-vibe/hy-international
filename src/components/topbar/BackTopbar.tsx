import React from 'react';
import Topbar from './Topbar';
import InfoIcon from '../icons/InfoIcon';
import BackButton from '../button/BackButton';

export type Props = {
  componentId: string;
  title?: string;
};

const BackTopbar: React.FC<Omit<Props, 'iconSource' | 'iconStyle'>> = ({
  componentId,
  title
}: Props) => {
  return (
    <Topbar
      title={title}
      LeftComponent={<BackButton componentId={componentId} hitSlopSize={16} />}
      RightComponent={<InfoIcon hitSlopSize={23} />}
    />
  );
};

export default BackTopbar;
