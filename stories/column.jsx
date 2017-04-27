import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import Lorem from 'react-lorem-component';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './knobsAlert';

import {
    DefaultTheme,
    RedTheme,
    Column,
} from '../index';
import FakeApp from '../components/fakeApp';


storiesOf('Column', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Column',
    }))
    .addWithInfo('Default state', () => (
        <DefaultTheme>
            <FakeApp>
                <Column
                    opened
                    title="A column title"
                >
                    <Lorem count={2} />
                </Column>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('With a theme', () => (
        <RedTheme>
            <FakeApp>
                <Column
                    opened
                    title="A column title"
                >
                    <Lorem count={2} />
                </Column>
            </FakeApp>
        </RedTheme>
    ))
    .addWithInfo('With more content', () => (
        <RedTheme>
            <FakeApp>
                <Column
                    opened
                    title="A column title"
                >
                    <Lorem />
                </Column>
            </FakeApp>
        </RedTheme>
    ))
    .addWithInfo('Loading', () => (
        <RedTheme>
            <FakeApp>
                <Column
                    opened
                    title="A column title"
                    loading
                >
                    <Lorem count={2} />
                </Column>
            </FakeApp>
        </RedTheme>
    ))
    .addWithInfo('On the right', () => (
        <RedTheme>
            <FakeApp>
                <Column
                    opened
                    title="A column title"
                    position="right"
                >
                    <Lorem count={2} />
                </Column>
            </FakeApp>
        </RedTheme>
    ))
    .addWithInfo('Larger', () => (
        <RedTheme>
            <FakeApp>
                <Column
                    opened
                    title="A column title"
                    position="right"
                    width="lg"
                >
                    <Lorem count={2} />
                </Column>
            </FakeApp>
        </RedTheme>
    ))
    .addWithInfo('Playground', () => {
        const title = text('Title', 'A column title');
        const position = select('Position', ['left', 'right'], 'left');
        const width = select('Width', ['xs', 'sm', 'md', 'lg'], 'md');
        const container = select('Container', ['parent', 'root'], 'parent');
        const opened = boolean('Opened', true);
        const maximized = boolean('Maximized');
        const loading = boolean('Loading');
        const loaderLabel = text('Loader label');
        const theme = select('Theme', ['Default', 'Red'], 'Red');
        const themes = {
            DefaultTheme,
            RedTheme,
        };
        const ThemeElement = themes[`${theme}Theme`];

        return (
            <ThemeElement>
                <KnobsAlert />
                <FakeApp>
                    <Column
                        title={title}
                        opened={opened}
                        loading={loading}
                        loaderLabel={loaderLabel}
                        position={position}
                        width={width}
                        maximized={maximized}
                        container={container}
                        onOpen={action('onOpen')}
                        onClose={action('onClose')}
                        onBack={action('onBack')}
                        onMaximize={action('onMaximize')}
                        onUnmaximize={action('onUnmaximize')}
                    >
                        <Lorem count={2} />
                    </Column>
                </FakeApp>
            </ThemeElement>
        );
    });
