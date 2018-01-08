import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

class SectionContainer extends Component {
  render() {
    const {
      children,
      className,
      fullWidth,
      id,
      title,
      type,
      disablePadding,
    } = this.props;

    console.log('SectionContainer', this.props);

    return (
      <div id={id ? id : title.toLowerCase().replace(/ /g,'-')} className={classnames(className,'my-2')}>
        <div className='my-2'>
          <Typography type={type ? type : 'display1'}>{title}</Typography>
          <Divider/>
          <div className={classnames(fullWidth ? '' : 'col-md-8 mx-auto', disablePadding ? '' : 'p-3')}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

SectionContainer.propTypes = {
  className: PropTypes.string,
  disablePadding: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default (SectionContainer);
