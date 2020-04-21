import actionsModule from './actions/module';
import resourceBreadcrumbsModule from './breadcrumbs/module';
import filtersModule from './filters';
import monitoringModule from './monitoring/module';
import resourceHeader from './resource-header';
import resourceDetails from './ResourceDetails';
import resourceName from './ResourceName';
import resourcesService from './resources-service';
import resourceRoutes from './routes';
import resourceStateModule from './state/module';
import resourceSummaryModule from './summary/module';
import supportModule from './support/module';
import './events';

export default module => {
  module.component('resourceDetails', resourceDetails);
  module.component('resourceHeader', resourceHeader);
  module.component('resourceName', resourceName);
  module.config(resourceRoutes);
  module.service('resourcesService', resourcesService);
  resourceSummaryModule(module);
  resourceBreadcrumbsModule(module);
  resourceStateModule(module);
  monitoringModule(module);
  actionsModule(module);
  filtersModule(module);
  supportModule(module);
};
