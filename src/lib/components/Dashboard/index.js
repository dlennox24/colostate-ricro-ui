import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  withStyles
} from 'material-ui/styles';
import Card, {
  CardContent,
  CardHeader,
  CardActions
} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const TabContainer = props =>
  <div>
  {props.children}
</div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  cardHeaderRoot: {
    backgroundColor: theme.palette.primary[500],
  },
  cardHeaderContent: {
    color: theme.palette.common.white,
  },
  flex: {
    flex: 1,
  },
  content: {
    overflowX: 'auto',
  },
  fullWidth: {
    width: '100%',
  },
});

class Dashboard extends Component {
  state = {
    index: 1,
  };
  handleChange = (event, index) => {
    this.setState({
      index
    });
  };
  handleChangeIndex = index => {
    this.setState({
      index
    });
  };
  render() {
    const {
      alignCARight,
      cardActions,
      children,
      classes,
      fullWidth,
      title,
    } = this.props;
    const cardHeaderClasses = {
      root: classes.cardHeaderRoot,
      content: classes.cardHeaderContent,
    }
    return (
      <Card className={classnames(fullWidth ? classes.fullWidth : '')}>
        <CardHeader title={
            <Typography type='headline' className={classes.cardHeaderContent}>
              {title}
            </Typography>
          } classes={cardHeaderClasses} color='inherit'
          />
        <CardContent className={classes.content}>{children}</CardContent>
        {cardActions ?
          <CardActions>
            {alignCARight && <div className={classes.flex}/>}
            {cardActions}
          </CardActions>
          : null
        }
      </Card>
    );
  }
}

Dashboard.propTypes = {
  alignCARight: PropTypes.bool,
  cardActions: PropTypes.node,
  classes: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Dashboard);