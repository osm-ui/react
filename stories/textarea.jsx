import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { Form } from 'semantic-ui-react';

import defaultHostOptions from './defaultHostOptions';
import Textarea from '../components/textarea';


storiesOf('Textarea', module)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Textarea',
    }))
    .addWithInfo('Default state', () => (
        <Form>
            <Textarea placeholder="A placeholder" />
        </Form>
    ))
    .addWithInfo('Automatic height', () => (
        <Form>
            <Textarea placeholder="A placeholder" autoHeight />
        </Form>
    ));
