import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { IconSnackbarContent } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const variantRows = [
  [{ variant: 'default' }, { variant: 'primary' }],
  [{ variant: 'secondary' }, { variant: 'info', key: 'noAction' }],
  [{ variant: 'success' }, { variant: 'warning' }],
  [{ variant: 'error' }, { variant: 'info', key: 'noIcon' }],
];

const Showcase = ({ classes }) => (
  <React.Fragment>
    {variantRows.map(row => (
      <Grid container key={row[0].key || row[0].variant}>
        {row.map(snackbar => (
          <Grid
            key={snackbar.key || snackbar.variant}
            className={classes.gridItem}
            item
            xs={12}
            md={6}
          >
            <IconSnackbarContent
              variant={snackbar.variant}
              message={`Snackbar variant: ${snackbar.variant}`}
              disableAction={snackbar.key === 'noAction'}
              disableIcon={snackbar.key === 'noIcon'}
            />
          </Grid>
        ))}
      </Grid>
    ))}
  </React.Fragment>
);

Showcase.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
};

export default withStyles(styles)(Showcase);
