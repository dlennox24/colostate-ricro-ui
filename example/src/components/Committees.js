import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { SectionContainer, Committees, CommitteeChip, CommitteeAvatar } from 'colostate-ricro-ui';

const styles = () => ({
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const CommitteeEx = props => {
  const { classes } = props;

  return (
    <div>
      <SectionContainer title="Committee Chips" fullWidth>
        <div className={classes.row}>
          {Committees.keys.map(committee => (
            <CommitteeChip key={committee} committee={committee} />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer title="Committee Avatars" fullWidth>
        <div className={classes.row}>
          {Committees.keys.map((committee, i) => (
            <CommitteeAvatar key={committee} size={0.75 * i + 0.75} committee={committee} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

CommitteeEx.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(CommitteeEx);
