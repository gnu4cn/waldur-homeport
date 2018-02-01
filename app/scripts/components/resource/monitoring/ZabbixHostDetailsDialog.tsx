import * as React from 'react';
import * as Tab from 'react-bootstrap/lib/Tab';
import * as Tabs from 'react-bootstrap/lib/Tabs';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { LoadingSpinner } from '@waldur/core/LoadingSpinner';
import { withTranslation, TranslateProps } from '@waldur/i18n';
import { CloseDialogButton } from '@waldur/modal/CloseDialogButton';
import { ModalDialog } from '@waldur/modal/ModalDialog';
import { connectAngularComponent } from '@waldur/store/connect';

import { fetchZabbixHost } from './actions';
import { getMonitoringState } from './selectors';
import { ZabbixHostDeleteButton } from './ZabbixHostDeleteButton';
import { ZabbixHostSummary } from './ZabbixHostSummary';

interface ZabbixHostDetailsDialogProps extends TranslateProps {
  resolve: {
    resource: any;
  };
  loading: boolean;
  erred: boolean;
  onFetch: () => void;
  host?: any;
}

class ZabbixHostDetailsDialog extends React.Component<ZabbixHostDetailsDialogProps> {
  render() {
    const { translate, host, loading, erred } = this.props;
    return (
      <ModalDialog title={translate('Monitoring details')} footer={<CloseDialogButton/>}>
        {loading && <LoadingSpinner/>}
        {erred && translate('Unable to load Zabbix host details')}
        {host && (
          <Tabs defaultActiveKey={1} id="monitoringDetails">
            <Tab eventKey={1} title={translate('Details')}>
              <div className="row m-t-md">
                <dl className="dl-horizontal resource-details-table col-sm-12">
                  <ZabbixHostSummary resource={host}/>
                  <ZabbixHostDeleteButton resource={host}/>
                </dl>
              </div>
            </Tab>
            <Tab eventKey={2} title={translate('Charts')}>
              TODO.
            </Tab>
          </Tabs>
        )}
      </ModalDialog>
    );
  }

  componentWillMount() {
    this.props.onFetch();
  }
}

const mapStateToDispatch = (dispatch, ownProps) => ({
  onFetch: () => dispatch(fetchZabbixHost(ownProps.resource.uuid)),
});

const enhance = compose(
  connect(getMonitoringState, mapStateToDispatch),
  withTranslation,
);

export default connectAngularComponent(enhance(ZabbixHostDetailsDialog), ['resolve']);
