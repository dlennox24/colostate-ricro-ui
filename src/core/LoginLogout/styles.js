import navItemStyles from '../Nav/SubNavList/styles';

const styles = theme => ({
  dropDown: {
    ...navItemStyles.dropDown,
  },
  profileAvatar: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3,
  },
});

export default styles;
