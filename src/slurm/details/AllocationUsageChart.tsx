import { useMemo } from 'react';

import { EChart } from '@waldur/core/EChart';
import { getEChartOptions } from '@waldur/slurm/details/utils';

export const AllocationUsageChart = ({ chart, usages, userUsages }) => {
  const options = useMemo(() => getEChartOptions(chart, usages, userUsages), [
    chart,
    usages,
    userUsages,
  ]);
  return <EChart options={options} height="350px" />;
};
