import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import {
  withKnobs,
  text,
  number,
  boolean,
  select
} from '@storybook/addon-knobs';
import Lorem from 'react-lorem-component';

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
  Sidebar,
  Button
} from '../index';

storiesOf('Sidebar', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Sidebar'
    })
  )
  .addWithInfo('Default state', () => (
    <DefaultTheme>
      <FakeApp>
        <Sidebar opened title="A sidebar title">
          <Lorem count={2} />
        </Sidebar>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Detached title', () => (
    <DefaultTheme>
      <FakeApp>
        <Sidebar opened>
          <Sidebar.Title>A sidebar title</Sidebar.Title>
          <Lorem count={2} />
        </Sidebar>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Theme', () => (
    <DefaultTheme>
      <FakeApp>
        <RedTheme>
          <Sidebar opened>
            <Sidebar.Title>A sidebar title</Sidebar.Title>
            <Lorem count={2} />
          </Sidebar>
        </RedTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('More content', () => (
    <DefaultTheme>
      <FakeApp>
        <RedTheme>
          <Sidebar opened>
            <Sidebar.Title>A sidebar title</Sidebar.Title>
            <Lorem />
          </Sidebar>
        </RedTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Header and footer', () => (
    <DefaultTheme>
      <FakeApp>
        <RedTheme>
          <Sidebar
            opened
            title="A sidebar title"
            scrollContent
            header={
              <Sidebar.Header>
                <h3 style={{ margin: 0 }}>A header content</h3>
              </Sidebar.Header>
            }
            footer={
              <Sidebar.Footer>
                <Button context="primary" block>
                  A footer button
                </Button>
              </Sidebar.Footer>
            }
          >
            <Lorem />
          </Sidebar>
        </RedTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Loading', () => (
    <DefaultTheme>
      <FakeApp>
        <RedTheme>
          <Sidebar opened title="A sidebar title" loading>
            <Lorem count={2} />
          </Sidebar>
        </RedTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Nav', () => (
    <DefaultTheme>
      <FakeApp>
        <RedTheme>
          <Sidebar opened title="A sidebar title">
            <Sidebar.Nav>
              <ul>
                <li>
                  <a href="">A nav item</a>
                </li>
                <li>
                  <a href="">Another one</a>
                </li>
                <li>
                  <a href="">One more here</a>
                </li>
                <li>
                  <a href="">With a very very very very very very long title</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Another list of items</a>
                </li>
                <li>
                  <a href="">With other links</a>
                </li>
              </ul>
            </Sidebar.Nav>
          </Sidebar>
        </RedTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('On the right', () => (
    <DefaultTheme>
      <FakeApp>
        <RedTheme>
          <Sidebar opened title="A sidebar title" position="right">
            <Lorem count={2} />
          </Sidebar>
        </RedTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Larger', () => (
    <DefaultTheme>
      <FakeApp>
        <RedTheme>
          <Sidebar opened title="A sidebar title" position="right" width="lg">
            <Lorem count={2} />
          </Sidebar>
        </RedTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Playground', () => {
    const title = text('Title', 'A sidebar title');
    const paragraphs = number('Paragraphs', 2);
    const position = select('Position', ['left', 'right'], 'left');
    const width = select('Width', ['xs', 'sm', 'md', 'lg'], 'md');
    const container = select('Container', ['parent', 'root'], 'parent');
    const opened = boolean('Opened', true);
    const maximized = boolean('Maximized');
    const scrollContent = boolean('Scroll content only');
    const loading = boolean('Loading');
    const loaderLabel = text('Loader label');
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
      'Red'
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
        <FakeApp>
          <ThemeElement>
            <Sidebar
              title={title}
              opened={opened}
              loading={loading}
              loaderLabel={loaderLabel}
              position={position}
              width={width}
              maximized={maximized}
              scrollContent={scrollContent}
              container={container}
              onOpen={action('onOpen')}
              onClose={action('onClose')}
              onClickClose={action('onClickClose')}
              onClickBack={action('onClickBack')}
              onMaximize={action('onMaximize')}
              onUnmaximize={action('onUnmaximize')}
            >
              <Lorem count={paragraphs} />
            </Sidebar>
          </ThemeElement>
        </FakeApp>
      </DefaultTheme>
    );
  });
