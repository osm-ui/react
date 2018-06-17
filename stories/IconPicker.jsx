import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';

import { RedTheme, IconPicker } from 'index';

storiesOf('IconPicker', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'IconPicker'
    })
  )
  .addWithInfo('Context', () => (
    <RedTheme>
      <IconPicker onChoose={action('suggestion')}/>
    </RedTheme>
  ));
