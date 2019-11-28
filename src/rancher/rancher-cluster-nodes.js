const rancherClusterNodes = {
  templateUrl: 'views/partials/filtered-list.html',
  controller: RancherClusterNodesListController,
  controllerAs: 'ListController',
  bindings: {
    resource: '<'
  }
};

export default rancherClusterNodes;

// @ngInject
function RancherClusterNodesListController(baseResourceListController) {
  let controllerScope = this;
  let ResourceController = baseResourceListController.extend({
    getTableOptions: function() {
      let options = this._super();
      options.noDataText = gettext('There are no Kubernetes nodes yet.');
      options.noMatchesText = gettext('No Kubernetes nodes found matching filter.');
      return options;
    },
    getFilter: function() {
      return {
        cluster_uuid: controllerScope.resource.uuid,
      };
    },
  });
  controllerScope.__proto__ = new ResourceController();
}
