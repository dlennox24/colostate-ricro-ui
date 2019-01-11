import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import React from 'react';
import CloseableDialog from '../CloseableDialog';
import ProfileStructure from './ProfileStructure';

const UserProfile = ({ onClose, open, user, variant = 'default' }) => {
  return variant === 'dialog' ? (
    <CloseableDialog header="Account" onClose={onClose} open={open} keepMounted>
      <DialogContent>
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
