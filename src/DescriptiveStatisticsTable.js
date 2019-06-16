import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Trans } from '@lingui/macro';

const round = (value, precision = 100) =>
  Math.round(value * precision) / precision;

class DescriptiveStatisticsTable extends React.Component {
  render() {
    const { statistics, precision } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Trans>Min</Trans>
            </TableCell>
            <TableCell>
              <Trans>Max</Trans>
            </TableCell>
            <TableCell>
              <Trans>Mean</Trans>
            </TableCell>
            <TableCell>
              <Trans>Median</Trans>
            </TableCell>
            <TableCell>
              <Trans>SD</Trans>
            </TableCell>
            <TableCell>
              <Trans>Var</Trans>
            </TableCell>
            <TableCell>
              <Trans>N</Trans>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map(statistic => (
            <TableRow key={statistic.label}>
              <TableCell>{statistic.label}</TableCell>
              <TableCell>{round(statistic.min, precision)}</TableCell>
              <TableCell>{round(statistic.max, precision)}</TableCell>
              <TableCell>{round(statistic.mean, precision)}</TableCell>
              <TableCell>{round(statistic.median, precision)}</TableCell>
              <TableCell>
                {round(statistic.standardDeviation, precision)}
              </TableCell>
              <TableCell>{round(statistic.variance, precision)}</TableCell>
              <TableCell>{round(statistic.n, precision)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

DescriptiveStatisticsTable.propTypes = {
  precision: PropTypes.number,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      mean: PropTypes.number.isRequired,
      median: PropTypes.number.isRequired,
      standardDeviation: PropTypes.number.isRequired,
      variance: PropTypes.number.isRequired,
      n: PropTypes.number.isRequired
    })
  )
};

DescriptiveStatisticsTable.defaultProps = {
  precision: 100,
  statistics: []
};

export default DescriptiveStatisticsTable;
