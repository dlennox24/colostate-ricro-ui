import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { CommitteeAvatar, CommitteeChip, committees } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const CommitteesPage = ({ classes }) => (
  <React.Fragment>
    <Typography variant="h3">Committee Avatars</Typography>
    <Divider />
    <div className={classes.row}>
      {Object.keys(committees).map((committee, i) => (
        <CommitteeAvatar key={committee} size={0.75 * i + 0.75} committee={committee} />
      ))}
    </div>
    <Typography variant="h3">Committee Chips</Typography>
    <Divider />
    <div className={classes.row}>
      {Object.keys(committees).map(committee => (
        <CommitteeChip key={committee} committee={committee} />
      ))}
    </div>
  </React.Fragment>
);

CommitteesPage.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(CommitteesPage);
