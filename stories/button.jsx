import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './knobsAlert';

import DefaultTheme from '../themes/default';
import {
    Button,
} from '../index';


storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Button',
    }))
    .addWithInfo('Context', () => (
        <DefaultTheme>
            <Button context="default" onClick={action('onClick default')}>Default</Button>
            {' '}
            <Button context="primary" onClick={action('onClick primary')}>Primary</Button>
            {' '}
            <Button context="success" onClick={action('onClick success')}>Success</Button>
            {' '}
            <Button context="info" onClick={action('onClick info')}>Info</Button>
            {' '}
            <Button context="warning" onClick={action('onClick warning')}>Warning</Button>
            {' '}
            <Button context="danger" onClick={action('onClick danger')}>Danger</Button>
            {' '}
            <Button context="link" onClick={action('onClick link')}>Link</Button>
        </DefaultTheme>
    ))
    .addWithInfo('Types', () => (
        <DefaultTheme>
            <Button type="button" onClick={action('onClick button')}>Button (default)</Button>
            {' '}
            <Button type="submit" onClick={action('onClick submit')}>Submit button</Button>
            {' '}
            <Button type="reset" onClick={action('onClick reset')}>Reset button</Button>
            {' '}
            <Button type="anchor" href="#" onClick={action('onClick anchor')}>Anchor button</Button>
        </DefaultTheme>
    ))
    .addWithInfo('Sizes', () => (
        <DefaultTheme>
            <Button size="lg" onClick={action('onClick lg')}>Large button</Button>
            {' '}
            <Button size="md" onClick={action('onClick md')}>Medium button (default)</Button>
            {' '}
            <Button size="sm" onClick={action('onClick sm')}>Small button</Button>
            {' '}
            <Button size="xs" onClick={action('onClick xs')}>Extra small button</Button>
        </DefaultTheme>
    ))
    .addWithInfo('Block', () => (
        <DefaultTheme>
            <Button block size="lg" context="primary" onClick={action('onClick primary')}>Block level button</Button>
            <Button block size="lg" onClick={action('onClick default')}>Block level button</Button>
        </DefaultTheme>
    ))
    .addWithInfo('States', () => (
        <DefaultTheme>
            <Button active onClick={action('onClick')}>Active</Button>
            {' '}
            <Button disabled>Disabled</Button>
        </DefaultTheme>
    ))
    .addWithInfo('Playground', () => {
        const label = text('Label', 'Hello world!');
        const block = boolean('Block');
        const active = boolean('Active');
        const disabled = boolean('Disabled');
        const size = select('Size', ['lg', 'md', 'sm', 'xs'], 'md');
        const context = select('Context', ['default', 'info', 'primary', 'success', 'warning', 'danger'], 'default');
        const type = select('Type', ['button', 'submit', 'reset', 'anchor'], 'button');

        return (
            <DefaultTheme>
                <KnobsAlert />
                <Button
                    block={block}
                    active={active}
                    disabled={disabled}
                    size={size}
                    context={context}
                    type={type}
                    onClick={action('onClick')}
                >
                    {label}
                </Button>
            </DefaultTheme>
        );
    });
