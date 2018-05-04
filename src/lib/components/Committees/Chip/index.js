import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Chip from 'material-ui/Chip';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import Committees from '../';
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
        avatar={
          <CommitteeAvatar
            className={classes.avatarRoot}
            committee={committee.alias.toLowerCase()}
          />
        }
        label={
          <Typography variant="body1" style={{ color: committee.textColor }}>
            {committee.alias}
          </Typography>
        }
        className={classes.chip}
        style={{ backgroundColor: committee.bgColor }}
      />
    </Tooltip>
  );
};

CommitteeChip.propTypes = {
  classes: PropTypes.object.isRequired,
  committee: PropTypes.string.isRequired,
};

export default withStyles(styles)(CommitteeChip);
