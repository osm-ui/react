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
    WhiteTheme,
    LightGrayTheme,
    DarkGrayTheme,
    AnthraciteTheme,
    YellowTheme,
    OrangeTheme,
    BrownTheme,
    RedTheme,
    RoseTheme,
    PurpleTheme,
    BlueTheme,
    TurquoiseTheme,
    GreenTheme,
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
        <DefaultTheme>
            <FakeApp>
                <RedTheme>
                    <Column
                        opened
                    >
                        <Column.Title>A column title</Column.Title>
                        <Lorem count={2} />
                    </Column>
                </RedTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('More content', () => (
        <DefaultTheme>
            <FakeApp>
                <RedTheme>
                    <Column
                        opened
                    >
                        <Column.Title>A column title</Column.Title>
                        <Lorem />
                    </Column>
                </RedTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Header and footer', () => (
        <DefaultTheme>
            <FakeApp>
                <RedTheme>
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
                </RedTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Loading', () => (
        <DefaultTheme>
            <FakeApp>
                <RedTheme>
                    <Column
                        opened
                        title="A column title"
                        loading
                    >
                        <Lorem count={2} />
                    </Column>
                </RedTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Nav', () => (
        <DefaultTheme>
            <FakeApp>
                <RedTheme>
                    <Column
                        opened
                        title="A column title"
                    >
                        <Column.Nav>
                            <ul>
                                <li><a href="">A nav item</a></li>
                                <li><a href="">Another one</a></li>
                                <li><a href="">One more here</a></li>
                                <li><a href="">With a very very very very very very long title</a></li>
                            </ul>
                        </Column.Nav>
                    </Column>
                </RedTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('On the right', () => (
        <DefaultTheme>
            <FakeApp>
                <RedTheme>
                    <Column
                        opened
                        title="A column title"
                        position="right"
                    >
                        <Lorem count={2} />
                    </Column>
                </RedTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Larger', () => (
        <DefaultTheme>
            <FakeApp>
                <RedTheme>
                    <Column
                        opened
                        title="A column title"
                        position="right"
                        width="lg"
                    >
                        <Lorem count={2} />
                    </Column>
                </RedTheme>
            </FakeApp>
        </DefaultTheme>
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
        const theme = select('Theme', [
            'Default',
            'White',
            'LightGray',
            'DarkGray',
            'Anthracite',
            'Yellow',
            'Orange',
            'Brown',
            'Red',
            'Rose',
            'Purple',
            'Blue',
            'Turquoise',
            'Green',
        ], 'Red');
        const themes = {
            DefaultTheme,
            WhiteTheme,
            LightGrayTheme,
            DarkGrayTheme,
            AnthraciteTheme,
            YellowTheme,
            OrangeTheme,
            BrownTheme,
            RedTheme,
            RoseTheme,
            PurpleTheme,
            BlueTheme,
            TurquoiseTheme,
            GreenTheme,
        };
        const ThemeElement = themes[`${theme}Theme`];

        return (
            <DefaultTheme>
                <KnobsAlert />
                <FakeApp>
                    <ThemeElement>
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
                    </ThemeElement>
                </FakeApp>
            </DefaultTheme>
        );
    });
