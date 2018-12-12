import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Committees, CommitteeChip, CommitteeAvatar } from 'colostate-ricro-ui';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const CommitteeEx = ({ classes }) => (
  <React.Fragment>
    <Typography variant="h3">Committee Avatars</Typography>
    <Divider />
    <div className={classes.row}>
      {Committees.keys.map((committee, i) => (
        <CommitteeAvatar key={committee} size={0.75 * i + 0.75} committee={committee} />
      ))}
    </div>
    <Typography variant="h3">Committee Chips</Typography>
    <Divider />
    <div className={classes.row}>
      {Committees.keys.map(committee => (
        <CommitteeChip key={committee} committee={committee} />
      ))}
    </div>
  </React.Fragment>
);

CommitteeEx.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(CommitteeEx);
