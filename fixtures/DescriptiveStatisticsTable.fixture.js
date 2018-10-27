import DescriptiveStatisticsTable from '../src/DescriptiveStatisticsTable';

const statistics = [
  {
    label: 'alpha',
    min: 0,
    max: 0.7,
    median: 0.4,
    mean: 0.3,
    standardDeviation: 0.1,
    variance: 0.02,
    n: 298
  },
  {
    label: 'gamma',
    min: 0,
    max: 0.72348234932,
    median: 0.41234152,
    mean: 0.331259014512,
    standardDeviation: 0.113581235,
    variance: 0.02123125321,
    n: 298
  }
];

export default [
  {
    component: DescriptiveStatisticsTable,
    name: 'Precision default',
    props: {
      statistics
    }
  },
  {
    component: DescriptiveStatisticsTable,
    name: 'Precision 10000',
    props: {
      precision: 10000,
      statistics
    }
  }
];
