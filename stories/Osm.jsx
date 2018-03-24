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
  Editor
} from '../src/index';

import {
  osmData
} from './mocks';

storiesOf('Osm', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Osm'
    })
  )
  .addWithInfo('Field', () => (
    <DefaultTheme>
      <Editor.Field tag='original' value='Value is unchanged' />
      <Editor.Field tag='changed' status='mod' value='Value has changed' />
      <Editor.Field tag='new' status='add' value='Field is new' />
      <Editor.Field tag='removed' status='del' value='Field has been removed' />
      <Editor.Field tag='emptyTag' />
    </DefaultTheme>
  ))
  .addWithInfo('Editor', () => (
    <DefaultTheme>
      <Editor
        original={osmData.original}
        fixed={osmData.fixed}
      />
    </DefaultTheme>
  ));
