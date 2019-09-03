import navItemStyles from '../Nav/SubNavList/styles';

const styles = theme => ({
  dropDown: {
    ...navItemStyles.dropDown,
  },
  profileAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
});

export default styles;
