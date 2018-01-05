import React, {
  Component,
} from 'react';
import classnames from 'classnames';
import {
  withStyles,
} from 'material-ui/styles';

import {
  Committees,
  CommitteeAvatar,
  CommitteeChip,
  SectionContainer,
} from 'ricro-app-template';

const styles = theme => ({
  row: {
    display: 'flex',
    flexWrap: 'wrap',
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
          <div className={classnames('justify-content-center',classes.row)}>
            {Committees.keys.map(committee => (
              <CommitteeChip key={committee} committee={committee}/>
            ))}
          </div>
        </SectionContainer>
        <SectionContainer title='Committee Avatars' fullWidth>
          <div className={classnames('justify-content-center',classes.row)}>
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