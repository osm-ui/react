import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs } from '@storybook/addon-knobs';
import Lorem from 'react-lorem-component';
import styled from 'styled-components';
import { select } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';

import KnobsAlert from './components/KnobsAlert';
import { RedTheme, DefaultTheme, Scrollable } from 'index';

const StyledDiv = styled.div`
  position: relative;
  height: 40rem;
`;

storiesOf('Scrollable', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Scrollable'
    })
  )
  .addWithInfo('Context', () => (
    <DefaultTheme>
      <StyledDiv>
        <Scrollable className='content'>
          <Lorem count={10} />
        </Scrollable>
      </StyledDiv>
    </DefaultTheme>
  ))
  .addWithInfo('Playground', () => {
    const position = select('Position', ['right', 'left'], 'left');

    return (
      <DefaultTheme>
        <KnobsAlert />
        <StyledDiv>
          <Scrollable className='content' position={position}>
            <Lorem count={10} />
          </Scrollable>
        </StyledDiv>
      </DefaultTheme>
    );
  });;
