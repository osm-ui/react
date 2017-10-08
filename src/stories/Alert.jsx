import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';

import { DefaultTheme, Alert } from '../index';

storiesOf('Alert')
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Alert'
    })
  )
  .addWithInfo('Context', () => (
    <DefaultTheme>
      <Alert context="success">
        Hi! This is a <u>success</u> alert!
      </Alert>
      <Alert context="info">
        Hi! This is a <u>info</u> alert!
      </Alert>
      <Alert context="warning">
        Hi! This is a <u>warning</u> alert!
      </Alert>
      <Alert context="danger">
        Hi! This is a <u>danger</u> alert!
      </Alert>
    </DefaultTheme>
  ));
