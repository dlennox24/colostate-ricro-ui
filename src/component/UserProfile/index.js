import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import React from 'react';
import ProfileStructure from '../../core/UserProfileStructure';
import CloseableDialog from '../CloseableDialog';

const UserProfile = ({ onClose, open, user, variant = 'default' }) => {
  return variant === 'dialog' ? (
    <CloseableDialog header="Account" onClose={onClose} open={open} keepMounted>
      <DialogContent style={{ padding: 0 }}>
        <ProfileStructure user={user} />
      </DialogContent>
    </CloseableDialog>
  ) : (
    <ProfileStructure user={user} />
  );
};

const requireDialogPropsErrorCheck = type => (props, propName, componentName) => {
  const typeofProp = typeof props[propName];
  if (props.variant === 'dialog' && (props[propName] === undefined || typeofProp !== type)) {
    return new Error(
      `${componentName}: \`${propName}\` is required to be a function when \`dialog\` is \`true\``,
    );
  }
  return null;
};

UserProfile.propTypes = {
  onClose: requireDialogPropsErrorCheck('function'),
  open: requireDialogPropsErrorCheck('boolean'),
  user: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['dialog', 'default']),
};

export default UserProfile;
