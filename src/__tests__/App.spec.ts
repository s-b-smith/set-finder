import App from '@/App.vue';
import { mount } from '@vue/test-utils';

describe('App', () => {
  it('renders', () => {
    const wrapper = mount(App);

    const componentText = wrapper.text();

    expect(componentText.includes('THE HEADER')).toBeTruthy();
    expect(componentText.includes('A BODY I GUESS')).toBeTruthy();
  });
});
