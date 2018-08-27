import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';

import { DefaultTheme, ColorPicker } from 'index';

storiesOf('ColorPicker', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'ColorPicker'
    })
  )
  .addWithInfo('Default state', () => (
    <DefaultTheme>
      <ColorPicker onChange={action('color')}/>
    </DefaultTheme>
  ));
