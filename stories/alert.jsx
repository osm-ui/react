import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import defaultHostOptions from './defaultHostOptions';

import DefaultTheme from '../themes/default';
import {
    Alert,
} from '../index';


storiesOf('Alert', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Alert',
    }))
    .addWithInfo('Context', () => (
        <DefaultTheme>
            <Alert context="success">Hi! This is a <u>success</u> alert!</Alert>
            <Alert context="info">Hi! This is a <u>info</u> alert!</Alert>
            <Alert context="warning">Hi! This is a <u>warning</u> alert!</Alert>
            <Alert context="danger">Hi! This is a <u>danger</u> alert!</Alert>
        </DefaultTheme>
    ));
