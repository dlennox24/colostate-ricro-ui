import Collapse from '@material-ui/core/Collapse';
import withStyles from '@material-ui/core/styles/withStyles';
import { Code } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Source = ({
  anchorHorz,
  anchorVert,
  autoHideDuration,
  classes,
  customIcon,
  isActionDisabled,
  isIconDisabled,
  isSourceOpen,
  message,
  variant,
}) => {
  const snackbarOptions =
    autoHideDuration <= 0 ? '' : `\n\t\tautoHideDuration = {${autoHideDuration * 1000}}`;
  const iscOptions =
    `${customIcon !== 'none' ? '\n\t\t\ticon={Icon} // imported mdi-material-ui icon' : ''}` +
    `${isActionDisabled ? '\n\t\t\tdisableAction' : ''}` +
    `${isIconDisabled ? '\n\t\t\tdisableIcon' : ''}`;
  const source = `
<Portal>
  <Snackbar
    anchorOrigin={{ vertical: "${anchorVert}", horizontal: "${anchorHorz}" }}
    open={isOpen} // from component state
    onClose={this.handleToggleSnackbarOpen}${snackbarOptions}
  >
    <IconSnackbarContent
      variant="${variant}"
      onClose={this.handleToggleSnackbarOpen} // component method
      message="${message}"${iscOptions}
    />
  </Snackbar>
</Portal>`;

  return (
    <div className={classes.gridItem}>
      <Collapse in={isSourceOpen}>
        <Code code={source} lang="jsx" />
      </Collapse>
    </div>
  );
};

Source.propTypes = {
  anchorHorz: PropTypes.string,
  anchorVert: PropTypes.string,
  autoHideDuration: PropTypes.number,
  classes: PropTypes.object.isRequired, // MUI withStyles()
  customIcon: PropTypes.node,
  isActionDisabled: PropTypes.bool,
  isIconDisabled: PropTypes.bool,
  isSourceOpen: PropTypes.bool,
  message: PropTypes.string,
  variant: PropTypes.string,
};

export default withStyles(styles)(Source);
