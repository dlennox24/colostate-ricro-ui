import React, {
  Component,
} from 'react';
import {
  withStyles,
} from 'material-ui/styles';

import Committees from '../../lib/components/Committees';
import SectionContainer from '../../lib/components/SectionContainer';
import {
  CommitteeChip
} from '../../lib/components/Committees';
import CommitteeAvatar from '../../lib/components/Committees/Avatar';

const styles = theme => ({
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

class CommitteeEx extends Component {
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

export default withStyles(styles)(CommitteeEx);