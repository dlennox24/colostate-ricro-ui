import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import MdiOpenInApp from 'mdi-material-ui/OpenInApp';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AppFrame from '../AppFrame';
import ApiTable from './index';

const columnData = [
  { id: 'id', label: 'ID' },
  { id: 'alias', label: 'Alias' },
  { id: 'description', label: 'Description' },
  { id: 'userCount', label: 'Number of Users', tableCellProps: { align: 'right' } },
  { id: 'actions', label: 'Actions', disableSort: true, tableCellProps: { align: 'center' } },
];
const searchKeys = columnData.filter(data => {
  return data.id !== 'actions' ? { id: data.id, label: data.label } : null;
});

test('renders with required props', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame>
      <ApiTable
        ariaTableId="user-group-types-table"
        columnData={columnData}
        disableAdd
        endpoint="/nucleus/groups/"
        orderBy={searchKeys[0].id}
        title="User Group Types"
        searchKeys={searchKeys}
      >
        {({ row }) => {
          return (
            <TableRow hover>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.alias}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">{row.userCount}</TableCell>
              <TableCell align="center">
                <Tooltip title={`View ${row.id}`}>
                  <IconButton component={Link} to={'/'}>
                    <MdiOpenInApp />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          );
        }}
      </ApiTable>
    </AppFrame>,
    div,
  );
});
