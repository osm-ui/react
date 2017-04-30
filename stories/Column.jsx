import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, text, number, boolean, select } from '@kadira/storybook-addon-knobs';
import Lorem from 'react-lorem-component';

import defaultHostOptions from '../.storybook/defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';
import FakeApp from './components/FakeApp';

import {
    DefaultTheme,
    RedTheme,
    Column,
    Button,
} from '../index';


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
    .addWithInfo('Detached title', () => (
        <DefaultTheme>
            <FakeApp>
                <Column
                    opened
                >
                    <Column.Title>A column title</Column.Title>
                    <Lorem count={2} />
                </Column>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Theme', () => (
        <RedTheme>
            <FakeApp>
                <Column
                    opened
                >
                    <Column.Title>A column title</Column.Title>
                    <Lorem count={2} />
                </Column>
            </FakeApp>
        </RedTheme>
    ))
    .addWithInfo('More content', () => (
        <RedTheme>
            <FakeApp>
                <Column
                    opened
                >
                    <Column.Title>A column title</Column.Title>
                    <Lorem />
                </Column>
            </FakeApp>
        </RedTheme>
    ))
    .addWithInfo('Header and footer', () => (
        <RedTheme>
            <FakeApp>
                <Column
                    opened
                    title="A column title"
                    scrollContent
                    header={(
                        <Column.Header>
                            <h3 style={{ margin: 0 }}>A header content</h3>
                        </Column.Header>
                    )}
                    footer={(
                        <Column.Footer>
                            <Button context="primary" block>A footer button</Button>
                        </Column.Footer>
                    )}
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
        const paragraphs = number('Paragraphs', 2);
        const position = select('Position', ['left', 'right'], 'left');
        const width = select('Width', ['xs', 'sm', 'md', 'lg'], 'md');
        const container = select('Container', ['parent', 'root'], 'parent');
        const opened = boolean('Opened', true);
        const maximized = boolean('Maximized');
        const scrollContent = boolean('Scroll content only');
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
                        scrollContent={scrollContent}
                        container={container}
                        onOpen={action('onOpen')}
                        onClose={action('onClose')}
                        onBack={action('onBack')}
                        onMaximize={action('onMaximize')}
                        onUnmaximize={action('onUnmaximize')}
                    >
                        <Lorem count={paragraphs} />
                    </Column>
                </FakeApp>
            </ThemeElement>
        );
    });
