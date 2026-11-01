import {
  enableAutoUnmount,
  mount,
  shallowMount,
  VueWrapper,
  type ComponentMountingOptions,
  type MountingOptions,
} from '@vue/test-utils';
import { Button } from 'primevue';
import type { ComponentInstance } from 'vue';

type GlobalMountOptions = MountingOptions<object>['global'];

enableAutoUnmount(afterEach);

export default function setup<T>(
  component: T,
  mountOptions?: MountingOptions<object, object>,
): VueWrapper<ComponentInstance<T>> {
  const global: GlobalMountOptions = {
    ...mountOptions?.global,
    components: {
      ...mountOptions?.global?.components,
      Button,
    },
  };

  // Create a unique container for this wrapper instance
  const container = document.createElement('div');
  document.body.appendChild(container);

  const options: ComponentMountingOptions<unknown> = {
    ...mountOptions,
    attachTo: container,
    global,
  };

  const mnt = mountOptions?.shallow ? shallowMount : mount;
  return mnt(component, options) as VueWrapper<ComponentInstance<T>>;
}
