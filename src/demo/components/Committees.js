import React, {
  Component,
} from 'react';
import {
  withStyles,
} from 'material-ui/styles';

import Committees from '../../lib/Committees';
import SectionContainer from '../../lib/SectionContainer';
import CommitteeChip from '../../lib/Committees/Chip';
import CommitteeAvatar from '../../lib/Committees/Avatar';

const styles = theme => ({
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

class SnackbarTest extends Component {
  render() {
    const {
      classes
    } = this.props;

    return (
      <div>
        <SectionContainer title='Committee Chips' fullWidth>
          <div className={classes.row}>
            {Committees.keys.map(committee => (
              <CommitteeChip key={committee} committee={committee}/>
            ))}
          </div>
        </SectionContainer>
        <SectionContainer title='Committee Avatars' fullWidth>
          <div className={classes.row}>
            {Committees.keys.map((committee,i) => (
              <CommitteeAvatar key={i} size={.75*i+.75} committee={committee}/>
            ))}
          </div>
        </SectionContainer>
      </div>
    );
  }
}

export default withStyles(styles)(SnackbarTest);