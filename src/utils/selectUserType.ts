import { UserType } from '@planet-sdk/common';

/**
 * Returns translated value of `type`
 * Default value = `tpo`
 */

export const selectUserType = (type: UserType, t: Function) => {
  let name;
  switch (type) {
    case 'individual':
      name = t('editProfile:individual');
      break;
    case 'tpo':
      name = t('editProfile:tpo');
      break;
    case 'education':
      name = t('editProfile:education');
      break;
    case 'organization':
      name = t('editProfile:organization');
      break;
    default:
      name = t('editProfile:tpo');
      break;
  }
  return name;
};
