import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';

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
  Section,
  List
} from 'index';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'List'
    })
  )
  .addWithInfo('Default', () => (
    <DefaultTheme>
      <List>
        <List.Item>An item</List.Item>
        <List.Item>Another item</List.Item>
        <List.Item>Another one</List.Item>
        <List.Item>And so on...</List.Item>
      </List>
    </DefaultTheme>
  ))
  .addWithInfo('Playground', () => {
    const size = select('Size', ['lg', 'md', 'sm', 'xs'], 'md');
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
      'Default'
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
        <ThemeElement>
          <Section style={{ padding: 30 }}>
            <List>
              <List.Item>An item</List.Item>
              <List.Item>Another item</List.Item>
              <List.Item>Another one</List.Item>
              <List.Item>And so on...</List.Item>
            </List>
          </Section>
        </ThemeElement>
      </DefaultTheme>
    );
  });
