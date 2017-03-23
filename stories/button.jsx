import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { host } from 'storybook-host';

import defaultHostOptions from './defaultHostOptions';

import DefaultTheme from '../themes/default';

import Button from '../components/button';


storiesOf('Button', module)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Button',
    }))
    .addWithInfo('Default state', () => (
        <DefaultTheme>
            <Button onClick={action('Button clicked!')}>Click me!</Button>
        </DefaultTheme>
    ));
