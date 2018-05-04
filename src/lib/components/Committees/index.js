import { lightGreen, cyan, deepPurple, grey, blue, yellow, red } from 'material-ui/colors';
import {
  faBalanceScale,
  faFlask,
  faGlobe,
  faPaw,
  faCheckCircle,
  faUsers,
} from '@fortawesome/fontawesome-free-solid';
import CommitteeAvatar from './Avatar';
import CommitteeChip from './Chip';

export { CommitteeAvatar, CommitteeChip };

export default {
  keys: ['excon', 'iacuc', 'ibc', 'irb', 'qa', 'rcr'],
  excon: {
    name: 'Export Control',
    alias: 'ExCon',
    textColor: '#000',
    bgColor: blue[500],
    iconColor: grey[50],
    iconBgColor: blue[800],
    icon: faGlobe,
  },
  iacuc: {
    name: 'Institutional Animal Care and Use Committee',
    alias: 'IACUC',
    textColor: '#000',
    bgColor: red[500],
    iconColor: grey[50],
    iconBgColor: red[800],
    icon: faPaw,
  },
  ibc: {
    name: 'Institutional Biosafety Committee',
    alias: 'IBC',
    textColor: grey[900],
    bgColor: lightGreen[500],
    iconColor: grey[50],
    iconBgColor: lightGreen[800],
    icon: faFlask,
  },
  irb: {
    name: 'Institutional Review Board',
    alias: 'IRB',
    textColor: grey[50],
    bgColor: deepPurple[500],
    iconColor: grey[50],
    iconBgColor: deepPurple[800],
    icon: faUsers,
  },
  qa: {
    name: 'Quality Assurance',
    alias: 'QA',
    textColor: grey[900],
    bgColor: cyan[300],
    iconColor: grey[50],
    iconBgColor: cyan[800],
    icon: faCheckCircle,
  },
  rcr: {
    name: 'Responsible Conduct of Research',
    alias: 'RCR',
    textColor: grey[900],
    bgColor: yellow[500],
    iconColor: grey[900],
    iconBgColor: yellow[800],
    icon: faBalanceScale,
  },
};
