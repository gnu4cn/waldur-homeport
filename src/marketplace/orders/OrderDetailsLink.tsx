import { connect } from 'react-redux';

import { Link } from '@waldur/core/Link';
import { getWorkspace } from '@waldur/workspace/selectors';
import {
  OuterState,
  ORGANIZATION_WORKSPACE,
  PROJECT_WORKSPACE,
  SUPPORT_WORKSPACE,
} from '@waldur/workspace/types';

const PureOrderDetailsLink = (props) => (
  <Link
    state={props.state}
    params={{ ...props.params, order_uuid: props.order_uuid }}
    className={props.className}
    onClick={props.onClick}
  >
    {props.children}
  </Link>
);

interface StateProps {
  state: string;
}

interface OwnProps {
  order_uuid: string;
  customer_uuid?: string;
  project_uuid?: string;
  className?: string;
  onClick?: () => void;
}

const connector = connect<StateProps, {}, OwnProps, OuterState>(
  (state, ownProps) => {
    const workspace = getWorkspace(state);
    if (workspace === ORGANIZATION_WORKSPACE) {
      return {
        state: 'marketplace-order-details-customer',
      };
    } else if (workspace === PROJECT_WORKSPACE) {
      return {
        state: 'marketplace-order-details',
        params: {
          uuid: ownProps.project_uuid,
        },
      };
    } else if (workspace === SUPPORT_WORKSPACE) {
      return {
        state: 'marketplace-order-details-customer',
        params: {
          uuid: ownProps.customer_uuid,
        },
      };
    }
  },
);

export const OrderDetailsLink = connector(PureOrderDetailsLink);
