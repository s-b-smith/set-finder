import App from '@/App.vue';
import setup from '@/__tests__/setup';
import { Button } from 'primevue';

describe('App', () => {
  it('renders', () => {
    const wrapper = setup(App);

    const componentText = wrapper.text();
    const showMoneyButton = wrapper.findComponent(Button);

    expect(componentText.includes('THE HEADER')).toBeTruthy();
    expect(componentText.includes('A BODY I GUESS')).toBeTruthy();
    expect(showMoneyButton.exists()).toBeTruthy();
    expect(showMoneyButton.text()).toBe('Show me the MONEY');
    expect(wrapper.text().includes('$$$$')).toBeFalsy();
  });

  it('renders money if button clicked', async () => {
    const wrapper = setup(App);
    const showMoneyButton = wrapper.getComponent(Button);

    await showMoneyButton.trigger('click');

    expect(wrapper.text().includes('$$$$')).toBeTruthy();
  });
});
