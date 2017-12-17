import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';
import FakeApp from './components/FakeApp';

import {
  DefaultTheme,
  WhiteTheme,
  LightGrayTheme,
  DarkGrayTheme,
  AnthraciteTheme,
  YellowTheme,
  OrangeTheme,
  BrownTheme,
  RedTheme,
  RoseTheme,
  PurpleTheme,
  BlueTheme,
  SkyTheme,
  TurquoiseTheme,
  GreenTheme,
  Titlebar
} from 'index';

const fakeAppStyle = {
  paddingTop: '70px',
  paddingBottom: '70px'
};

storiesOf('Titlebar', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Titlebar'
    })
  )
  .addWithInfo('Default state', () => (
    <DefaultTheme>
      <FakeApp style={fakeAppStyle}>
        <Titlebar>Application title</Titlebar>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Position', () => (
    <DefaultTheme>
      <FakeApp style={fakeAppStyle}>
        <Titlebar position="top">Application header</Titlebar>
        <Titlebar position="bottom">Application footer</Titlebar>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Theme', () => (
    <DefaultTheme>
      <FakeApp style={fakeAppStyle}>
        <BlueTheme>
          <Titlebar>Application header</Titlebar>
        </BlueTheme>
        <OrangeTheme>
          <Titlebar position="bottom">Application footer</Titlebar>
        </OrangeTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Size', () => (
    <DefaultTheme>
      <FakeApp style={fakeAppStyle}>
        <BlueTheme>
          <Titlebar size="lg">Application header</Titlebar>
          <Titlebar size="sm" position="bottom">
            Application footer
          </Titlebar>
        </BlueTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Playground', () => {
    const position = select('Position', ['top', 'bottom'], 'top');
    const size = select('Size', ['xs', 'sm', 'md', 'lg'], 'md');
    const container = select('Container', ['parent', 'root'], 'parent');
    const maximized = boolean('Maximized', false);
    const theme = select(
      'Theme',
      [
        'Default',
        'White',
        'LightGray',
        'DarkGray',
        'Anthracite',
        'Yellow',
        'Orange',
        'Brown',
        'Red',
        'Rose',
        'Purple',
        'Blue',
        'Sky',
        'Turquoise',
        'Green'
      ],
      'Rose'
    );
    const themes = {
      DefaultTheme,
      WhiteTheme,
      LightGrayTheme,
      DarkGrayTheme,
      AnthraciteTheme,
      YellowTheme,
      OrangeTheme,
      BrownTheme,
      RedTheme,
      RoseTheme,
      PurpleTheme,
      BlueTheme,
      SkyTheme,
      TurquoiseTheme,
      GreenTheme
    };
    const ThemeElement = themes[`${theme}Theme`];

    return (
      <DefaultTheme>
        <KnobsAlert />
        <FakeApp style={fakeAppStyle}>
          <ThemeElement>
            <Titlebar
              maximized={maximized}
              position={position}
              container={container}
              size={size}
              onMaximize={action('onMaximize titlebar')}
              onUnmaximize={action('onUnmaximize titlebar')}
            >
              Application title
            </Titlebar>
          </ThemeElement>
        </FakeApp>
      </DefaultTheme>
    );
  });
