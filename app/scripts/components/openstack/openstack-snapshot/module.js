import openstackSnapshotsService from './openstack-snapshots-service';
import { openstackSnapshotSummary } from './openstack-snapshot-summary';
import openstackSnapshotsList from './openstack-snapshots-list';
import restoredVolumesList from './openstack-restored-volumes-list';

export default module => {
  module.config(tabsConfig);
  module.service('openstackSnapshotsService', openstackSnapshotsService);
  module.component('openstackSnapshotSummary', openstackSnapshotSummary);
  module.component('openstackSnapshotsList', openstackSnapshotsList);
  module.component('restoredVolumesList', restoredVolumesList);
  module.config(actionConfig);
  module.config(stateConfig);
};

// @ngInject
function actionConfig(ActionConfigurationProvider, DEFAULT_EDIT_ACTION) {
  ActionConfigurationProvider.register('OpenStackTenant.Snapshot', {
    order: [
      'edit',
      'pull',
      'restore',
      'destroy',
    ],
    options: {
      edit: angular.merge({}, DEFAULT_EDIT_ACTION, {
        successMessage: 'Snapshot has been updated'
      }),
      pull: {
        title: 'Synchronise'
      },
    }
  });
}

// @ngInject
function stateConfig(ResourceStateConfigurationProvider) {
  ResourceStateConfigurationProvider.register('OpenStackTenant.Snapshot', {
    error_states: [
      'error'
    ]
  });
}

// @ngInject
function tabsConfig(ResourceTabsConfigurationProvider, DEFAULT_RESOURCE_TABS) {
  ResourceTabsConfigurationProvider.register('OpenStackTenant.Snapshot', {
    order: [
      ...DEFAULT_RESOURCE_TABS.order,
      'restored',
    ],
    options: angular.merge({}, DEFAULT_RESOURCE_TABS.options, {
      restored: {
        heading: 'Restored volumes',
        component: 'restoredVolumesList',
      },
    })
  });
}
