import { shallowMount } from '@vue/test-utils';
import Test from '../../src/components/Test.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Test);
    expect(wrapper.vm.text).toBe('');
  });
});
