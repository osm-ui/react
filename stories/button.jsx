import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { host } from 'storybook-host';
import { Label } from 'semantic-ui-react';

import defaultHostOptions from './defaultHostOptions';

import DefaultTheme from '../themes/default';

import Button from '../components/button';


storiesOf('Button', module)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Button',
    }))
    .addWithInfo('Default', () => (
        <DefaultTheme>
            <Button onClick={action('onClick')}>Default</Button>
            <Button color="red" onClick={action('onClick')}>Red</Button>
            <Button color="orange" onClick={action('onClick')}>Orange</Button>
            <Button color="yellow" onClick={action('onClick')}>Yellow</Button>
            <Button color="olive" onClick={action('onClick')}>Olive</Button>
            <Button color="green" onClick={action('onClick')}>Green</Button>
            <Button color="teal" onClick={action('onClick')}>Teal</Button>
            <Button color="blue" onClick={action('onClick')}>Blue</Button>
            <Button color="violet" onClick={action('onClick')}>Violet</Button>
            <Button color="purple" onClick={action('onClick')}>Purple</Button>
            <Button color="pink" onClick={action('onClick')}>Pink</Button>
            <Button color="brown" onClick={action('onClick')}>Brown</Button>
            <Button color="grey" onClick={action('onClick')}>Grey</Button>
            <Button color="black" onClick={action('onClick')}>Black</Button>
        </DefaultTheme>
    ))
    .addWithInfo('Basic', () => (
        <DefaultTheme>
            <Button basic onClick={action('onClick')}>Default</Button>
            <Button basic color="red" onClick={action('onClick')}>Red</Button>
            <Button basic color="orange" onClick={action('onClick')}>Orange</Button>
            <Button basic color="yellow" onClick={action('onClick')}>Yellow</Button>
            <Button basic color="olive" onClick={action('onClick')}>Olive</Button>
            <Button basic color="green" onClick={action('onClick')}>Green</Button>
            <Button basic color="teal" onClick={action('onClick')}>Teal</Button>
            <Button basic color="blue" onClick={action('onClick')}>Blue</Button>
            <Button basic color="violet" onClick={action('onClick')}>Violet</Button>
            <Button basic color="purple" onClick={action('onClick')}>Purple</Button>
            <Button basic color="pink" onClick={action('onClick')}>Pink</Button>
            <Button basic color="brown" onClick={action('onClick')}>Brown</Button>
            <Button basic color="grey" onClick={action('onClick')}>Grey</Button>
            <Button basic color="black" onClick={action('onClick')}>Black</Button>
        </DefaultTheme>
    ))
    .addWithInfo('More', () => (
        <div>
            <p>
                OSM UI for React is based on the awesome Semantic-UI-React library.
            </p>
            <p>
                You can find all the available <Label color="blue" horizontal basic>Button</Label> options <a href="http://react.semantic-ui.com/elements/button" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
        </div>
    ));
