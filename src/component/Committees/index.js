import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import IconAccountMultiple from 'mdi-material-ui/AccountMultiple';
import IconEarth from 'mdi-material-ui/Earth';
import IconFlask from 'mdi-material-ui/Flask';
import IconPaw from 'mdi-material-ui/Paw';
import IconScaleBalance from 'mdi-material-ui/ScaleBalance';
import IconShieldCheck from 'mdi-material-ui/ShieldCheck';
import React from 'react';

const committees = {
  iacuc: {
    name: 'Institutional Animal Care and Use Committee',
    alias: 'IACUC',
    textColor: '#000',
    bgColor: red[500],
    iconColor: grey[50],
    iconBgColor: red[800],
    icon: <IconPaw />,
  },
  ibc: {
    name: 'Institutional Biosafety Committee',
    alias: 'IBC',
    textColor: grey[900],
    bgColor: lightGreen[500],
    iconColor: grey[50],
    iconBgColor: lightGreen[800],
    icon: <IconFlask />,
  },
  irb: {
    name: 'Institutional Review Board',
    alias: 'IRB',
    textColor: grey[50],
    bgColor: deepPurple[500],
    iconColor: grey[50],
    iconBgColor: deepPurple[800],
    icon: <IconAccountMultiple />,
  },
  qa: {
    name: 'Quality Assurance',
    alias: 'QA',
    textColor: grey[900],
    bgColor: cyan[300],
    iconColor: grey[50],
    iconBgColor: cyan[800],
    icon: <IconShieldCheck />,
  },
  rcr: {
    name: 'Responsible Conduct of Research',
    alias: 'RCR',
    textColor: grey[900],
    bgColor: yellow[500],
    iconColor: grey[900],
    iconBgColor: yellow[800],
    icon: <IconScaleBalance />,
  },
  xc: {
    name: 'Export Control',
    alias: 'XC',
    textColor: '#000',
    bgColor: blue[500],
    iconColor: grey[50],
    iconBgColor: blue[800],
    icon: <IconEarth />,
  },
};

const iacuc = committees.iacuc;
const ibc = committees.ibc;
const irb = committees.irb;
const qa = committees.qa;
const rcr = committees.rcr;
const xc = committees.xc;

export default committees;
export { iacuc, ibc, irb, qa, rcr, xc };
