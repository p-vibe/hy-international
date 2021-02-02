import _ from 'lodash';

const getHitSlop = (iconSize?: number) => {
  if (iconSize === undefined) {
    return undefined;
  }
  const divisionValue = 2;
  const extendSize = _.floor(iconSize / divisionValue);

  return {
    bottom: extendSize,
    left: extendSize,
    right: extendSize,
    top: extendSize,
  };
};

export default getHitSlop;
