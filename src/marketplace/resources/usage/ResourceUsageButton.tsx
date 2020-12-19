import { FunctionComponent } from 'react';
import { ButtonGroup } from 'react-bootstrap';

import { Resource } from '@waldur/marketplace/resources/types';

import { ResourceCreateUsageButton } from './ResourceCreateUsageButton';
import { ResourceShowUsageButton } from './ResourceShowUsageButton';

interface Props {
  row: Pick<
    Resource,
    | 'state'
    | 'plan'
    | 'is_usage_based'
    | 'uuid'
    | 'offering_uuid'
    | 'name'
    | 'customer_name'
    | 'project_name'
    | 'backend_id'
  >;
}

export const ResourceUsageButton: FunctionComponent<Props> = ({ row }) => {
  if (!row.is_usage_based || !row.plan || row.state === 'Creating') {
    return 'N/A';
  }
  const disabled = !['OK', 'Updating', 'Terminating'].includes(row.state);
  return (
    <ButtonGroup>
      <ResourceShowUsageButton
        offeringUuid={row.offering_uuid}
        resourceUuid={row.uuid}
      />
      <ResourceCreateUsageButton
        offering_uuid={row.offering_uuid}
        resource_uuid={row.uuid}
        resource_name={row.name}
        customer_name={row.customer_name}
        project_name={row.project_name}
        backend_id={row.backend_id}
        disabled={disabled}
      />
    </ButtonGroup>
  );
};
