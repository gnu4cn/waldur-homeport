import * as React from 'react';

import { NestedListActions } from '@waldur/resource/actions/NestedListActions';
import { ResourceName } from '@waldur/resource/ResourceName';
import { ResourceState } from '@waldur/resource/state/ResourceState';
import { connectAngularComponent } from '@waldur/store/connect';
import { Table, connectTable, createFetcher } from '@waldur/table-react';

const TableComponent = props => {
  const { translate } = props;
  return (
    <Table
      {...props}
      columns={[
        {
          title: translate('Name'),
          render: ({ row }) => <ResourceName resource={row} />,
        },
        {
          title: translate('Charset'),
          render: ({ row }) => row.charset || 'N/A',
        },
        {
          title: translate('State'),
          render: ({ row }) => <ResourceState resource={row} />,
        },
      ]}
      verboseName={translate('databases')}
      actions={<NestedListActions resource={props.resource} tab="databases" />}
    />
  );
};

const TableOptions = {
  table: 'azure-sql-databases',
  fetchData: createFetcher('azure-sql-databases'),
  mapPropsToFilter: props => ({
    server_uuid: props.resource.uuid,
  }),
};

const DatabasesList = connectTable(TableOptions)(TableComponent);

export default connectAngularComponent(DatabasesList, ['resource']);