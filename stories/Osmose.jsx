import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';
import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';

import {
  DefaultTheme,
  RedTheme,
  Osmose
} from '../src/index';

import fixData from './mocks/osmose_fix.json';
import newData from './mocks/osmose_add.json';

storiesOf('Osmose', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Osmose'
    })
  )
  .addWithInfo('Data to fix', () => (
    <DefaultTheme>
      <Osmose data={fixData} handleSuggestion={action('suggestion')}/>
    </DefaultTheme>
  ))
  .addWithInfo('New data', () => (
    <DefaultTheme>
      <Osmose data={newData} handleSuggestion={action('suggestion')}/>
    </DefaultTheme>
  ));
