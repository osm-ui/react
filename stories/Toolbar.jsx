import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, boolean, select } from '@kadira/storybook-addon-knobs';

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
    Toolbar,
    Alert,
} from '../index';


const fakeAppRowStyle = {
    padding: '60px 100px',
};

const fakeAppColumnStyle = {
    paddingLeft: '100px',
    paddingRight: '100px',
};

storiesOf('Toolbar', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Toolbar',
    }))
    .addWithInfo('Default state', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <Toolbar opened>
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Positions', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <Toolbar opened position="top-left">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened position="top-right">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened position="bottom-right">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened position="bottom-left">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Directions', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppRowStyle}>
                <Toolbar opened position="top-left" direction="row">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened position="top-right" direction="row">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened position="bottom-right" direction="row">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened position="bottom-left" direction="row">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Theme', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <BlueTheme>
                    <Toolbar opened position="top-left">
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </BlueTheme>
                <GreenTheme>
                    <Toolbar opened position="top-right">
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </GreenTheme>
                <RoseTheme>
                    <Toolbar opened position="bottom-right">
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </RoseTheme>
                <OrangeTheme>
                    <Toolbar opened position="bottom-left">
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </OrangeTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Shape', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <BlueTheme>
                    <Toolbar opened shape="square">
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </BlueTheme>
                <OrangeTheme>
                    <Toolbar opened position="bottom-left">
                        <Toolbar.Button icon="bars" shape="round" />
                        <Toolbar.Button icon="search" shape="square" />
                        <Toolbar.Button icon="location-arrow" shape="round" />
                    </Toolbar>
                </OrangeTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Size', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <BlueTheme>
                    <Toolbar opened size="lg">
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                    <Toolbar opened position="bottom-left">
                        <Toolbar.Button icon="bars" size="lg" />
                        <Toolbar.Button icon="bars" size="md" />
                        <Toolbar.Button icon="bars" size="sm" />
                        <Toolbar.Button icon="bars" size="xs" />
                    </Toolbar>
                </BlueTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Loading', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <BlueTheme>
                    <Toolbar opened>
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" loading />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </BlueTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Group', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <DefaultTheme>
                    <Toolbar opened>
                        <Toolbar.Group shape="square">
                            <Toolbar.Button icon="plus" />
                            <Toolbar.Button icon="minus" />
                        </Toolbar.Group>
                        <Toolbar.Group>
                            <Toolbar.Button icon="search" shape="square" />
                            <Toolbar.Button icon="location-arrow" />
                        </Toolbar.Group>
                    </Toolbar>
                </DefaultTheme>
                <BlueTheme>
                    <Toolbar opened position="top-right">
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Group>
                            <Toolbar.Button icon="user" />
                            <Toolbar.Button icon="share-alt" />
                        </Toolbar.Group>
                    </Toolbar>
                </BlueTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Collapse', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <Alert context="info">Click on the <em>bars</em> buttons</Alert>
                <BlueTheme>
                    <Toolbar opened>
                        <Toolbar.Collapse
                            opened
                            icon="bars"
                            onOpen={action('onOpen')}
                            onClose={action('onClose')}
                        >
                            <Toolbar.Group>
                                <Toolbar.Button icon="plus" />
                                <Toolbar.Button icon="minus" />
                            </Toolbar.Group>
                            <Toolbar.Button icon="search" />
                            <Toolbar.Button icon="location-arrow" />
                        </Toolbar.Collapse>
                    </Toolbar>
                </BlueTheme>
                <OrangeTheme>
                    <Toolbar opened position="bottom-right" direction="row">
                        <Toolbar.Collapse
                            opened
                            icon="bars"
                            onOpen={action('onOpen')}
                            onClose={action('onClose')}
                        >
                            <Toolbar.Button icon="user" />
                            <Toolbar.Button icon="pencil" />
                            <Toolbar.Button icon="share-alt" />
                            <Toolbar.Button icon="sign-out" />
                        </Toolbar.Collapse>
                    </Toolbar>
                </OrangeTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Playground', () => {
        const position = select('Position', ['top-left', 'top-right', 'bottom-right', 'bottom-left'], 'top-left');
        const direction = select('Direction', ['column', 'row'], 'column');
        const size = select('Size', ['xs', 'sm', 'md', 'lg'], 'md');
        const container = select('Container', ['parent', 'root'], 'parent');
        const opened = boolean('Opened', true);
        const loading = boolean('Loading');
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
        ], 'Turquoise');
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
                <FakeApp style={{ ...fakeAppColumnStyle, ...fakeAppRowStyle }}>
                    <ThemeElement>
                        <Toolbar
                            opened={opened}
                            position={position}
                            direction={direction}
                            container={container}
                            size={size}
                            onOpen={action('onOpen toolbar')}
                            onClose={action('onClose toolbar')}
                        >
                            <Toolbar.Collapse
                                opened
                                icon="bars"
                                onOpen={action('onOpen toolbar collapse')}
                                onClose={action('onClose toolbar collapse')}
                            >
                                <Toolbar.Group>
                                    <Toolbar.Button
                                        icon="search"
                                        loading={loading}
                                        onClick={action('onClick search')}
                                    />
                                    <Toolbar.Button
                                        icon="location-arrow"
                                        loading={loading}
                                        onClick={action('onClick location arrow')}
                                    />
                                </Toolbar.Group>
                            </Toolbar.Collapse>
                        </Toolbar>
                    </ThemeElement>
                </FakeApp>
            </DefaultTheme>
        );
    });
