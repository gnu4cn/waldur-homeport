import { isFeatureVisible } from '@waldur/features/connect';

import { getDefaultResourceTabs } from './constants';
import { ResourceTab } from './types';

class Store {
  private tabs: Record<string, () => ResourceTab[]>;

  constructor() {
    this.tabs = {};
  }

  register(type: string, tabs: () => ResourceTab[]) {
    this.tabs[type] = tabs;
  }

  get(resource) {
    const config =
      this.tabs[resource.resource_type]() || getDefaultResourceTabs();
    return config
      .filter(tab => isFeatureVisible(tab.feature))
      .filter(tab => !tab.isVisible || tab.isVisible(resource));
  }
}

export const ResourceTabsConfiguration = new Store();
