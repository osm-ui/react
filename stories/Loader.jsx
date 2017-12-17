import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';
import FakeApp from './components/FakeApp';

import { DefaultTheme, Loader } from 'index';

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Loader'
    })
  )
  .addWithInfo('Default state', () => (
    <DefaultTheme>
      <Loader />
    </DefaultTheme>
  ))
  .addWithInfo('Size', () => (
    <DefaultTheme>
      <Loader spinnerSize={20} strokeSize={2} />
      <Loader spinnerSize={40} strokeSize={3} />
      <Loader spinnerSize={60} strokeSize={4} />
    </DefaultTheme>
  ))
  .addWithInfo('Label', () => (
    <DefaultTheme>
      <Loader label="Custom label" />
    </DefaultTheme>
  ))
  .addWithInfo('Centered', () => (
    <DefaultTheme>
      <FakeApp fakeText dimmed>
        <Loader centered label="Custom label" />
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Playground', () => {
    const spinnerSize = number('Spinner size', 40);
    const label = text('Label', 'Custom label');

    return (
      <DefaultTheme>
        <KnobsAlert />
        <Loader label={label} spinnerSize={spinnerSize} />
      </DefaultTheme>
    );
  });
