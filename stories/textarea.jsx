import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';

import defaultHostOptions from './defaultHostOptions';

import DefaultTheme from '../themes/default';
// import RedTheme from '../themes/red';

import Form from '../components/form';
import Textarea from '../components/textarea';


storiesOf('Textarea', module)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Textarea',
    }))
    .addWithInfo('Default state', () => (
        <DefaultTheme>
            <Form>
                <Textarea placeholder="A placeholder" />
            </Form>
        </DefaultTheme>
    ))
    .addWithInfo('With a default value', () => (
        <DefaultTheme>
            <Form>
                <Textarea placeholder="A placeholder" defaultValue="The quick brown fox jumps over the lazy dog" />
            </Form>
        </DefaultTheme>
    ))
    .addWithInfo('Automatic height', () => (
        <DefaultTheme>
            <Form>
                <Textarea placeholder="A placeholder" autoHeight />
            </Form>
        </DefaultTheme>
    ))
    .addWithInfo('With a bottom label', () => (
        <DefaultTheme>
            <Form>
                <Textarea placeholder="A placeholder" bottomLabel="Hey there! I can help you filling that field!" />
            </Form>
        </DefaultTheme>
    ));
