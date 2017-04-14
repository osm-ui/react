import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { Label } from 'semantic-ui-react';

import defaultHostOptions from './defaultHostOptions';

import DefaultTheme from '../themes/default';
import Form from '../components/form';
import Textarea from '../components/textarea';


storiesOf('Textarea', module)
    .addDecorator(withKnobs)
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
                <Textarea placeholder="A placeholder" label="Hey there! I can help you filling that field!" labelPosition="bottom" />
            </Form>
        </DefaultTheme>
    ))
    .add('More', () => (
        <div>
            <p>
                OSM UI for React is based on the awesome <a href="http://react.semantic-ui.com" target="_blank" rel="noopener noreferrer">Semantic UI React</a> library.
            </p>
            <p>
                You can find all the available <Label color="blue" horizontal basic>Text Area</Label> options <a href="http://react.semantic-ui.com/elements/text-area" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
        </div>
    ));
