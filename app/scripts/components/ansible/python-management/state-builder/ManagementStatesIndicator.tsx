import * as React from 'react';

import { commonStateIndicatorBuilder } from '@waldur/ansible/python-management/state-builder/StateIndicatorBuilder';
import { ManagementRequestState } from '@waldur/ansible/python-management/types/ManagementRequestState';
import { ResourceStateIndicator } from '@waldur/resource/state/ResourceState';

interface ManagementStateProps {
  managementState: ManagementRequestState;
}

export const PureManagementStatesIndicator = (props: ManagementStateProps) => {
  return (
        <ResourceStateIndicator {...commonStateIndicatorBuilder.buildStateIndicator(props.managementState)}/>
  );
};
