import { ENV, $http } from '@waldur/core/services';

import { Fetcher } from './types';

export function createFetcher(endpoint: string): Fetcher {
  return request => {
    const url = `${ENV.apiEndpoint}api/${endpoint}/`;
    const params = {
      page: request.currentPage,
      page_size: request.pageSize,
      ...request.filter,
    };
    return $http({
      method: 'GET',
      url,
      params,
    }).then(response => {
      const resultCount = parseInt(response.headers()['x-result-count'], 10);
      return {
        rows: Array.isArray(response.data) ? response.data : [],
        resultCount,
      };
    });
  };
}

export const createFakeFetcher = (fakeEndpoint: string) => {
  const images = [
    {
      uuid: 'dawk25lhd',
      image_name: 'Image name 1',
      running_instances_count: 44,
      created_instances_count: 23,
    },
    {
      uuid: '7awk25lhl',
      image_name: 'Image name 2',
      running_instances_count: 40,
      created_instances_count: 53,
    },
  ];

  const flavors = [
    {
      uuid: 'dawk25lhd',
      flavor_name: 'Flavor name 1',
      running_instances_count: 44,
      created_instances_count: 23,
    },
    {
      uuid: '7awk25lhl',
      flavor_name: 'Flavor name 2',
      running_instances_count: 40,
      created_instances_count: 53,
    },
  ];

  const fakeEndpoints = {
    'vm-images': images,
    'vm-flavors': flavors,
  };
  return () => {
    return {
      rows: fakeEndpoints[fakeEndpoint],
      resultCount: 2,
    };
  };
};
