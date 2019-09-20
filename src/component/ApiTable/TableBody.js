import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React from 'react';

const lower = value => (typeof value === 'string' ? value.toLowerCase() : value);

const getSorting = (order, orderBy) =>
  order === 'asc'
    ? (a, b) => (lower(a[orderBy]) > lower(b[orderBy]) ? -1 : 1)
    : (a, b) => (lower(a[orderBy]) < lower(b[orderBy]) ? -1 : 1);

const EnhancedTableBody = props => {
  const { rootData } = props.enhancedTable;
  const { uniqueDataKey } = props.enhancedTable.rootProps;
  const { order, orderBy } = props.enhancedTable.rootState;

  const { page, rowsPerPage } = props.enhancedTable.rootState.pagination;
  const TableRowRenderer = props.enhancedTable.rootProps.children;

  const renderData = rootData.search
    .sort(getSorting(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableBody>
      {renderData.map(row => (
        <TableRow hover key={row[uniqueDataKey]}>
          {React.Children.map(TableRowRenderer({ row: row || {} }).props.children, tableCell =>
            React.cloneElement(tableCell, { row, variant: 'body', ...tableCell.props }),
          )}
        </TableRow>
      ))}
    </TableBody>
  );
};

EnhancedTableBody.defaultProps = {};

EnhancedTableBody.propTypes = {
  defaults: PropTypes.shape({
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
  }),
  enhancedTable: PropTypes.shape({
    rootData: PropTypes.shape({ search: PropTypes.array.isRequired }),
    rootProps: PropTypes.shape({
      children: PropTypes.func.isRequired,
      uniqueDataKey: PropTypes.string.isRequired,
    }),
    rootState: PropTypes.shape({
      order: PropTypes.string.isRequired,
      orderBy: PropTypes.string.isRequired,
      pagination: PropTypes.shape({
        page: PropTypes.number.isRequired,
        rowsPerPage: PropTypes.number.isRequired,
      }),
    }),
  }),
};

export default EnhancedTableBody;
