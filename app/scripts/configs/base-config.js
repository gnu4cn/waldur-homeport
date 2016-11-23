'use strict';

angular.module('ncsaas')
  .constant('ENV', {
    // general config
    name: '',
    apiEndpoint: 'http://localhost:8080/',
    modePageTitle: 'Waldur | Cloud Service Management',
    shortPageTitle: 'Waldur',

    // Social login config
    googleClientId: 'google client id',
    googleEndpointUrl: 'api-auth/google/',
    facebookClientId: 'facebook client id',
    facebookEndpointUrl: 'api-auth/facebook/',

    // JIRA config
    supportProjectUUID: 'support project UUID',

    pageSizes: [5, 10, 20, 50],
    pageSize: 10,
    topMenuCustomersCount: 50,
    serviceIcon: '/static/images/icons/icon_openstack_small.png',
    defaultCustomerIcon: '/static/images/logo.png',
    topMenuCustomersCacheTime: 60 * 10, // seconds
    topMenuProjectsCacheTime: 60 * 10, // seconds
    dashboardEventsCacheTime: 60, // seconds
    listControlPanelShow: false,
    currentCustomerUuidStorageKey: 'currentCustomerUuid',
    currentProjectUuidStorageKey: 'currentProjectUuid',
    showImport: false,
    resourceOfflineStatus: 'Offline',
    resourceOnlineStatus: 'Online',
    defaultErrorMessage: 'Reason unknown, please contact support',

    // build version
    buildId: 'develop',

    currency: '€',

    offerings: [
      {
        label: "IT Transformation Service",
        description: "Hosting in highly secured data center.",
        key: "transformation",
        icon: "fa-building",
        state: "appstore.offering"
      },
      {
        label: "Devops-as-a-Service platform",
        description: "Enforce best-practices of application delivery.",
        key: "devops",
        icon: "fa-gears",
        state: "appstore.offering"
      },
      {
        label: "Disaster Recovery site",
        description: "Planning for business continuity under all conditions.",
        key: "recovery",
        icon: "fa-get-pocket",
        state: "appstore.offering"
      },
      {
        label: "Managed applications",
        description: "Full monitoring and application support",
        key: "managed_apps",
        icon: "fa-gears",
        state: "appstore.offering"
      },
      {
        label: "Virtual machines",
        icon: "fa-desktop",
        feature: "vms",
        key: "vms",
        state: "appstore.store",
        description: "OpenStack instances and DigitalOcean droplets."
      },
      {
        label: "Private clouds",
        icon: "fa-cloud",
        feature: "private_clouds",
        key: "private_clouds",
        state: "appstore.store",
        description: "OpenStack tenants and Amazon VPC.",
        requireStaffOwnerManager: true
      },
      {
        label: "Storage",
        icon: "fa-hdd-o",
        feature: "storage",
        key: "storages",
        state: "appstore.store",
        description: "Block devices, object store spaces and other persistency services."
      },
      {
        label: "Applications",
        icon: "fa-database",
        feature: "apps",
        key: "apps",
        state: "appstore.store",
        description: "Oracle database and SugarCRM."
      },
      {
        label: "Support",
        icon: "fa-wrench",
        key: "support",
        feature: "premiumSupport",
        state: "appstore.store",
        description: "Premium support service."
      },
      {
        label: "netHSM",
        icon: "fa-get-pocket",
        key: "nethsm",
        state: "appstore.offering"
      },
      {
        label: "X-Road security server",
        icon: "fa-get-pocket",
        key: "xroad",
        state: "appstore.offering"
      }
    ],

    offeringCategories: [
      {
        label: 'IaaS',
        items: ['private_clouds', 'vms', 'storages', 'support']
      },
      {
        label: 'Security',
        items: ['nethsm', 'xroad']
      },
      {
        label: 'Platforms',
        items: []
      },
      {
        label: 'Applications',
        items: []
      },
      {
        label: 'Turnkey solutions',
        items: ['transformation', 'devops', 'recovery', 'managed_apps']
      }
    ],

    futureCategories: ['nethsm', 'xroad'],

    appStoreLimitChoices: 10,

    // Index of category inside of appStoreCategories
    AllResources: -1,
    VirtualMachines: 0,
    PrivateClouds: 1,
    Applications: 2,
    Storages: 3,

    appStoreCategories: [
      {
        name: 'Virtual machines',
        type: 'provider',
        icon: 'desktop',
        key: 'vms',
        services: ['DigitalOcean', 'Azure', 'Amazon', 'OpenStackTenant']
      },
      {
        name: 'Private clouds',
        type: 'provider',
        icon: 'cloud',
        key: 'private_clouds',
        services: ['OpenStack'],
        requireStaffOwnerManager: true
      },
      {
        name: 'Applications',
        icon: 'database',
        type: 'provider',
        key: 'apps',
        services: ['Oracle', 'GitLab']
      },
      {
        name: 'Storages',
        type: 'provider',
        key: 'storages',
        services: ['OpenStackTenant'],
      }
    ],
    serviceCategories: [
      {
        name: 'Virtual machines',
        services: ['Amazon', 'Azure', 'DigitalOcean', 'OpenStack'],
      },
      {
        name: 'Applications',
        services: ['Oracle', 'GitLab']
      }
    ],
    resourceCategory: {
        "Amazon.Instance": "vms",
        "SaltStack.SharepointTenant": "apps",
        "GitLab.Project": "apps",
        "SugarCRM.CRM": "apps",
        "Azure.VirtualMachine": "vms",
        "IaaS.Instance": "vms",
        "JIRA.Project": "apps",
        "DigitalOcean.Droplet": "vms",
        "OpenStack.Instance": "vms",
        "SaltStack.ExchangeTenant": "apps",
        "OpenStack.Tenant": "private_clouds",
        "OpenStackTenant.Instance": "vms",
        "OpenStackTenant.Volume": "storages",
        "OpenStackTenant.Snapshot": "storages",
        "GitLab.Group": "apps",
        "Zabbix.Host": "apps",
        "Zabbix.ITService": "apps",
        "OpenStack.Volume": "storages",
        "OpenStack.Snapshot": "storages"
    },
    showCompare: [
      'Virtual machines'
    ],
    IntercomAppId: 'xfbbcxck',
    defaultListCacheTime: 60 * 10,
    optionsCacheTime: 10 * 1000,
    dashboardHelp: {
      alertsList: {
        type: 'alertsList',
        name: 'alerts',
        title: 'Alerts'
      },
      eventsList: {
        type: 'eventsList',
        name: 'events',
        title: 'Events'
      }
    },
    profileHelp: {
      sshKeys: {
        type: 'sshKeys',
        name: 'keys',
        title: 'How to generate SSH key'
      }
    },
    helpList: [
      {
        type: 'providers',
        key: 'Azure',
        name: 'Azure provider',
        link: null
      },
      {
        type: 'providers',
        key: 'Amazon',
        name: 'Amazon EC2 provider',
        link: 'http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html'
      },
      {
        type: 'providers',
        key: 'DigitalOcean',
        name: 'DigitalOcean provider',
        link: 'https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-api-v2'
      }
    ],
    toBeFeatures: [
      'openStackPrivateCloud',
      'resources',
      'pricelistsCompare',
      'prePaid',
      'support',
      'monitoring',
      'users',
      'templates',
      'invoices',
      'payments',
      'services:provider:uuid',
      'password',
      'premiumSupport',
      'localSignup',
      'notifications',
      'sizing',
      'alerts',
    ],
    resourcesTypes: {
      vms: 'vms',
      applications: 'apps',
      privateClouds: 'private_clouds'
    },
    featuresVisible: false,

    requestTimeout: 1000 * 20,
    countsCacheTime: 60, // seconds
    enablePurchaseCostDisplay: true,
    entityCreateLink: {
      'services.create': 'service',
      'project-create': 'project',
      'appstore.store':  'resource',
      'import.import':   'resource'
    },

    resourcesTimerInterval: 7, // seconds
    countersTimerInterval: 7, // seconds
    providersTimerInterval: 7, // seconds

    resourceStateColorClasses: {
      'OK': 'online',
      'Creation Scheduled': 'processing',
      'Creating': 'processing',
      'Update Scheduled': 'processing',
      'Updating': 'processing',
      'Online': 'online',
      'Offline': 'offline',
      'Erred': 'erred',
      'Starting Scheduled': 'processing',
      'Stopping Scheduled': 'processing',
      'Restarting Scheduled': 'processing',
      'Starting': 'processing',
      'Stopping': 'processing',
      'Restarting': 'processing',
      'Provisioning Scheduled': 'processing',
      'Provisioning': 'processing',
      'Deletion Scheduled': 'processing',
      'Deleting': 'processing',
      'Resizing Scheduled': 'processing',
      'Resizing': 'processing'
    },

    servicesStateColorClasses: {
      'OK': 'online',
      'Erred': 'erred',
      'In Sync': 'online',
      'Creation Scheduled': 'processing',
      'Creating': 'processing',
      'Update Scheduled': 'processing',
      'Updating': 'processing',
      'Deletion Scheduled': 'processing',
      'Deleting': 'processing'
    },
    ownerCanManageCustomer: true,

    roles: {
      owner: 'Organization owner',
      manager: 'Project manager',
      admin: 'System administrator'
    },
    invitationStorageToken: 'ncInvitationToken',
    invitationRedirectTime: 5000,
    invitationsEnabled: true,
    userMandatoryFields: [
      'full_name',
      'email'
    ],

    dashboardQuotas: {
      nc_app_count: {
        title: 'Applications',
        feature: 'apps'
      },
      nc_vm_count: {
        title: 'Virtual machines',
        feature: 'vms'
      },
      nc_private_cloud_count: {
        title: 'Private clouds',
        feature: 'private_clouds',
      },
      nc_storage_count: {
        title: 'Storage',
        feature: 'storage'
      },
      nc_user_count: {
        title: 'Team size',
        feature: 'users'
      }
  },

  projectDashboardQuotas: [
    'nc_app_count',
    'nc_vm_count',
    'nc_private_cloud_count',
    'nc_storage_count'
  ],

  organizationDashboardQuotas: [
    'nc_app_count',
    'nc_vm_count',
    'nc_private_cloud_count',
    'nc_storage_count',
    'nc_user_count'
  ]
});
