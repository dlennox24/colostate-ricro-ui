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

const CommitteeChip = ({ classes, committee }) => {
  const committeeObj = Committees[committee];
  return (
    <Tooltip title={committeeObj.name}>
      <Chip
        className={classes.chip}
        style={{ backgroundColor: committeeObj.bgColor }}
        avatar={
          <CommitteeAvatar
            className={classes.avatarRoot}
            committee={committeeObj.alias.toLowerCase()}
          />
        }
        label={
          <Typography style={{ color: committeeObj.textColor }} variant="body1">
            {committeeObj.alias}
          </Typography>
        }
      />
    </Tooltip>
  );
};

CommitteeChip.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withSTyles()
  committee: PropTypes.string.isRequired,
};

export default withStyles(styles)(CommitteeChip);
