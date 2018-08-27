import React from 'react';
import styled from 'styled-components';
import { Alert } from 'index';


const StyledAlert = styled(Alert)`
  margin-bottom: 2rem;
`

const KnobsAlert = () => (
  <StyledAlert context="info">
    Don&rsquo;t forget to play with the <em>Knobs</em> in the right column!
  </StyledAlert>
);

KnobsAlert.displayName = 'KnobsAlert';

export default KnobsAlert;
