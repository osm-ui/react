import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

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
  Button
} from 'index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Button'
    })
  )
  .addWithInfo('Context', () => (
    <DefaultTheme>
      <Button context="default" onClick={action('onClick default')}>
        Default
      </Button>{' '}
      <Button context="primary" onClick={action('onClick primary')}>
        Primary
      </Button>{' '}
      <Button context="success" onClick={action('onClick success')}>
        Success
      </Button>{' '}
      <Button context="info" onClick={action('onClick info')}>
        Info
      </Button>{' '}
      <Button context="warning" onClick={action('onClick warning')}>
        Warning
      </Button>{' '}
      <Button context="danger" onClick={action('onClick danger')}>
        Danger
      </Button>{' '}
      <Button context="link" onClick={action('onClick link')}>
        Link
      </Button>
    </DefaultTheme>
  ))
  .addWithInfo('Type', () => (
    <DefaultTheme>
      <Button type="button" onClick={action('onClick button')}>
        Button (default)
      </Button>{' '}
      <Button type="submit" onClick={action('onClick submit')}>
        Submit button
      </Button>{' '}
      <Button type="reset" onClick={action('onClick reset')}>
        Reset button
      </Button>{' '}
      <Button type="anchor" href="#" onClick={action('onClick anchor')}>
        Anchor button
      </Button>
    </DefaultTheme>
  ))
  .addWithInfo('Shape', () => (
    <DefaultTheme>
      <Button shape="round" onClick={action('onClick round')}>
        Round (default)
      </Button>{' '}
      <Button shape="square" onClick={action('onClick square')}>
        Square
      </Button>
    </DefaultTheme>
  ))
  .addWithInfo('Size', () => (
    <DefaultTheme>
      <Button size="lg" onClick={action('onClick lg')}>
        Large button
      </Button>{' '}
      <Button size="md" onClick={action('onClick md')}>
        Medium button (default)
      </Button>{' '}
      <Button size="sm" onClick={action('onClick sm')}>
        Small button
      </Button>{' '}
      <Button size="xs" onClick={action('onClick xs')}>
        Extra small button
      </Button>
    </DefaultTheme>
  ))
  .addWithInfo('Block', () => (
    <DefaultTheme>
      <Button
        block
        size="lg"
        context="primary"
        onClick={action('onClick primary')}
      >
        Block level button
      </Button>
      <Button block size="lg" onClick={action('onClick default')}>
        Block level button
      </Button>
    </DefaultTheme>
  ))
  .addWithInfo('State', () => (
    <DefaultTheme>
      <Button active onClick={action('onClick')}>
        Active
      </Button>{' '}
      <Button disabled>Disabled</Button>
    </DefaultTheme>
  ))
  .addWithInfo('Playground', () => {
    const label = text('Label', 'Hello world!');
    const block = boolean('Block');
    const active = boolean('Active');
    const disabled = boolean('Disabled');
    const shape = select('Shape', ['round', 'square'], 'round');
    const size = select('Size', ['lg', 'md', 'sm', 'xs'], 'md');
    const type = select(
      'Type',
      ['button', 'submit', 'reset', 'anchor'],
      'button'
    );
    const context = select(
      'Context',
      ['default', 'info', 'primary', 'success', 'warning', 'danger'],
      'default'
    );
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
          <Section style={{ padding: 30, display: 'inline' }}>
            <Button
              block={block}
              active={active}
              disabled={disabled}
              shape={shape}
              size={size}
              context={context}
              type={type}
              onClick={action('onClick')}
            >
              {label}
            </Button>
          </Section>
        </ThemeElement>
      </DefaultTheme>
    );
  });
