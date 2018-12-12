import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Committees from '..';
import CommitteeAvatar from '../Avatar';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 3,
  },
  avatarRoot: {
    marginRight: -1 * (theme.spacing.unit / 2),
  },
});

const CommitteeChip = props => {
  const { classes } = props;
  const committee = Committees[props.committee];
  return (
    <Tooltip title={committee.name}>
      <Chip
        className={classes.chip}
        style={{ backgroundColor: committee.bgColor }}
        avatar={
          <CommitteeAvatar
            className={classes.avatarRoot}
            committee={committee.alias.toLowerCase()}
          />
        }
        label={
          <Typography style={{ color: committee.textColor }} variant="body1">
            {committee.alias}
          </Typography>
        }
      />
    </Tooltip>
  );
};

CommitteeChip.propTypes = {
  classes: PropTypes.object.isRequired,
  committee: PropTypes.string.isRequired,
};

export default withStyles(styles)(CommitteeChip);
