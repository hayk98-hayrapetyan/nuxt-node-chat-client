import BaseIcon from './BaseIcon';

export default {
  title: 'Atoms/BaseIcon',
  component: BaseIcon,
  argTypes: {
    name: '',
    colour: '',
    stroke: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseIcon },
  template: `<BaseIcon :name="$props.name" />`,
});

export const Example = Template.bind({});
Example.args = {
  name: 'logo',
};
