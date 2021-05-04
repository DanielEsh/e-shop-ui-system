import React from 'react'
import { Story, Meta } from '@storybook/react';

import Colors from './color-themes/Colors'

export default {
  title: 'Colors/colors',
  component: Colors,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template = (args) => <Colors {...args} />;

export const Primary = Template.bind({});
