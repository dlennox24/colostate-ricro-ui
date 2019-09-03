import colorToRgba from '../../../utils/colorToRgba';

const size = 200;
const round = size / 2;

const styles = theme => ({
  dragRoot: { borderRadius: round },
  editImageContainer: {
    borderRadius: round,
    '&:hover': {
      '& > div:first-child': {
        alignItems: 'center',
        borderRadius: round,
        background: colorToRgba(theme.palette.csu.primary.green.light, 0.75),
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: size,
        justifyContent: 'center',
        position: 'absolute',
        width: size,
        zIndex: 1,
      },
      '& > div:last-child': {
        filter: 'blur(2px)',
      },
    },
  },
  fileListContainer: { width: '100%' },
  profileImage: {
    borderRadius: round,
    boxShadow: theme.shadows[3],
    height: size,
    width: size,
  },
  profileImageCover: {
    borderRadius: round,
    filter: 'blur(0)',
  },
  profileImageEdit: {
    // borderRadius: round,
    display: 'none',
  },
  uploadInstructions: {
    textAlign: 'center',
    padding: theme.spacing(1, 0),
  },
});

export default styles;
