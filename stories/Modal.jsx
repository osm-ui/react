import React from 'react';
import ReactPlaceholder from 'react-placeholder';
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
import styled from 'styled-components';
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
  Button,
  Modal
} from 'index';

/*
  *** WARNING ***
  The following import is for Sidebar.Title, Sidebar.Header, Sidebar.Footer
  In the future,
    * either add Title, Header and Footer for Modal
    * or make them separate components to be used in different contexts
*/
import Sidebar from 'components/Sidebar';

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  border: 1px solid black;
  padding: 15px;
`;

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Modal'
    })
  )
  .addWithInfo('Default state', () => (
    <DefaultTheme>
      <FakeApp>
        <Modal>
          <Lorem count={2} />
        </Modal>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Loading', () => (
    <DefaultTheme>
      <FakeApp>
        <Modal loading/>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Theme', () => (
    <DefaultTheme>
      <FakeApp>
        <RedTheme>
          <Modal>
            <Sidebar.Title>A modal title</Sidebar.Title>
            <Lorem count={2} />
          </Modal>
        </RedTheme>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('More content', () => (
    <DefaultTheme>
      <FakeApp>
        <Modal>
          <Sidebar.Title>A modal title</Sidebar.Title>
          <Lorem count={10} />
        </Modal>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Header and footer', () => (
    <DefaultTheme>
      <FakeApp>
        <Modal
          title="A modal title"
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
        </Modal>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Inside a div', () => (
    <DefaultTheme>
      <FakeApp>
        <StyledDiv>
          <ReactPlaceholder ready={false} type="text" rows={5}>
            {' '}
          </ReactPlaceholder>
          <Modal>
            <Lorem count={2} />
          </Modal>
        </StyledDiv>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Playground', () => {
    const title = text('Title', 'A modal title');
    const paragraphs = number('Paragraphs', 2);
    const container = select('Container', ['parent', 'root'], 'parent');
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
            <Modal
              title={title}
              loading={loading}
              loaderLabel={loaderLabel}
              scrollContent={scrollContent}
              container={container}
              onOpen={action('onOpen')}
              onClose={action('onClose')}
            >
              <Lorem count={paragraphs} />
            </Modal>
          </ThemeElement>
        </FakeApp>
      </DefaultTheme>
    );
  });
