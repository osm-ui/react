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
    SkyTheme,
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
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                    <Toolbar.Item icon="location-arrow" />
                </Toolbar>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Position', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppRowStyle}>
                <Toolbar opened position="left-top">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="center-top">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="right-top">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="right-center">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="right-bottom">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="center-bottom">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="left-bottom">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="left-center">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="center-center">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Directions', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppRowStyle}>
                <Toolbar opened position="left-top" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="center-top" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="right-top" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="right-center" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="right-bottom" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="center-bottom" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="left-bottom" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="left-center" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
                <Toolbar opened position="center-center" direction="row">
                    <Toolbar.Item icon="bars" />
                    <Toolbar.Item icon="search" />
                </Toolbar>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Theme', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <BlueTheme>
                    <Toolbar opened position="left-top">
                        <Toolbar.Item icon="bars" />
                        <Toolbar.Item icon="search" />
                        <Toolbar.Item icon="location-arrow" />
                    </Toolbar>
                </BlueTheme>
                <GreenTheme>
                    <Toolbar opened position="right-top">
                        <Toolbar.Item icon="bars" />
                        <Toolbar.Item icon="search" />
                        <Toolbar.Item icon="location-arrow" />
                    </Toolbar>
                </GreenTheme>
                <RoseTheme>
                    <Toolbar opened position="right-bottom">
                        <Toolbar.Item icon="bars" />
                        <Toolbar.Item icon="search" />
                        <Toolbar.Item icon="location-arrow" />
                    </Toolbar>
                </RoseTheme>
                <OrangeTheme>
                    <Toolbar opened position="left-bottom">
                        <Toolbar.Item icon="bars" />
                        <Toolbar.Item icon="search" />
                        <Toolbar.Item icon="location-arrow" />
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
                        <Toolbar.Item icon="bars" />
                        <Toolbar.Item icon="search" />
                        <Toolbar.Item icon="location-arrow" />
                    </Toolbar>
                </BlueTheme>
                <OrangeTheme>
                    <Toolbar opened position="left-bottom">
                        <Toolbar.Item icon="bars" shape="round" />
                        <Toolbar.Item icon="search" shape="square" />
                        <Toolbar.Item icon="location-arrow" shape="round" />
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
                        <Toolbar.Item icon="bars" />
                        <Toolbar.Item icon="search" />
                        <Toolbar.Item icon="location-arrow" />
                    </Toolbar>
                    <Toolbar opened position="left-bottom">
                        <Toolbar.Item icon="bars" size="lg" />
                        <Toolbar.Item icon="bars" size="md" />
                        <Toolbar.Item icon="bars" size="sm" />
                        <Toolbar.Item icon="bars" size="xs" />
                    </Toolbar>
                </BlueTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Inactive', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <BlueTheme>
                    <Toolbar opened>
                        <Toolbar.Item inactive icon="bars" />
                        <Toolbar.Item inactive icon="search" />
                        <Toolbar.Item inactive icon="location-arrow" />
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
                        <Toolbar.Item icon="bars" />
                        <Toolbar.Item icon="search" loading />
                        <Toolbar.Item icon="location-arrow" />
                    </Toolbar>
                </BlueTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Opacity', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <AnthraciteTheme>
                    <Toolbar opened size="sm" position="left-center" opacity={0.6}>
                        <Toolbar.Item icon="chevron-left" />
                    </Toolbar>
                    <Toolbar opened size="sm" position="right-center" opacity={0.6}>
                        <Toolbar.Item icon="chevron-right" />
                    </Toolbar>
                </AnthraciteTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Group', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <DefaultTheme>
                    <Toolbar opened>
                        <Toolbar.Group shape="square">
                            <Toolbar.Item icon="plus" />
                            <Toolbar.Item icon="minus" />
                            <Toolbar.Item inactive>14</Toolbar.Item>
                        </Toolbar.Group>
                        <Toolbar.Group>
                            <Toolbar.Item icon="search" shape="square" />
                            <Toolbar.Item icon="location-arrow" />
                        </Toolbar.Group>
                    </Toolbar>
                </DefaultTheme>
                <BlueTheme>
                    <Toolbar opened position="right-top">
                        <Toolbar.Item icon="bars" />
                        <Toolbar.Group>
                            <Toolbar.Item icon="user" />
                            <Toolbar.Item icon="share-alt" />
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
                                <Toolbar.Item icon="plus" />
                                <Toolbar.Item icon="minus" />
                                <Toolbar.Item inactive>14</Toolbar.Item>
                            </Toolbar.Group>
                            <Toolbar.Item icon="search" />
                            <Toolbar.Item icon="location-arrow" />
                        </Toolbar.Collapse>
                    </Toolbar>
                </BlueTheme>
                <OrangeTheme>
                    <Toolbar opened position="right-bottom" direction="row">
                        <Toolbar.Collapse
                            opened
                            icon="bars"
                            onOpen={action('onOpen')}
                            onClose={action('onClose')}
                        >
                            <Toolbar.Item icon="user" />
                            <Toolbar.Item icon="pencil" />
                            <Toolbar.Item icon="share-alt" />
                            <Toolbar.Item icon="sign-out" />
                        </Toolbar.Collapse>
                    </Toolbar>
                </OrangeTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Playground', () => {
        const position = select('Position', [
            'left-top',
            'center-top',
            'right-top',
            'right-center',
            'right-bottom',
            'center-bottom',
            'left-bottom',
            'left-center',
        ], 'left-top');
        const direction = select('Direction', ['column', 'row'], 'column');
        const size = select('Size', ['xs', 'sm', 'md', 'lg'], 'md');
        const container = select('Container', ['parent', 'root'], 'parent');
        const opened = boolean('Opened', true);
        const loading = boolean('Loading');
        const type = select('Item type', ['button', 'anchor'], 'button');
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
            'Sky',
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
            SkyTheme,
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
                                    <Toolbar.Item
                                        icon="search"
                                        loading={loading}
                                        type={type}
                                        onClick={action('onClick search')}
                                    />
                                    <Toolbar.Item
                                        icon="location-arrow"
                                        loading={loading}
                                        type={type}
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
