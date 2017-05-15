import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, text, number, boolean, select } from '@kadira/storybook-addon-knobs';

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
                <Toolbar opened top left>
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened top right>
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened bottom right>
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened bottom left>
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
                <Toolbar opened top left direction="row">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened top right direction="row">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened bottom right direction="row">
                    <Toolbar.Button icon="bars" />
                    <Toolbar.Button icon="search" />
                    <Toolbar.Button icon="location-arrow" />
                </Toolbar>
                <Toolbar opened bottom left direction="row">
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
                    <Toolbar opened top left>
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </BlueTheme>
                <GreenTheme>
                    <Toolbar opened top right>
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </GreenTheme>
                <RoseTheme>
                    <Toolbar opened bottom right>
                        <Toolbar.Button icon="bars" />
                        <Toolbar.Button icon="search" />
                        <Toolbar.Button icon="location-arrow" />
                    </Toolbar>
                </RoseTheme>
                <OrangeTheme>
                    <Toolbar opened bottom left>
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
                    <Toolbar opened>
                        <Toolbar.Button icon="bars" shape="square" />
                        <Toolbar.Button icon="search" shape="square" />
                        <Toolbar.Button icon="location-arrow" shape="square" />
                    </Toolbar>
                </BlueTheme>
            </FakeApp>
        </DefaultTheme>
    ))
    .addWithInfo('Size', () => (
        <DefaultTheme>
            <FakeApp style={fakeAppColumnStyle}>
                <BlueTheme>
                    <Toolbar opened>
                        <Toolbar.Button icon="bars" size="xs" />
                        <Toolbar.Button icon="bars" size="sm" />
                        <Toolbar.Button icon="bars" size="md" />
                        <Toolbar.Button icon="bars" size="lg" />
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
    .addWithInfo('Playground', () => {
        const vPosition = select('Vertical position', ['top', 'bottom'], 'top');
        const hPosition = select('Horizontal position', ['left', 'right'], 'left');
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
        const top = vPosition === 'top';
        const bottom = vPosition === 'bottom';
        const left = hPosition === 'left';
        const right = hPosition === 'right';

        return (
            <DefaultTheme>
                <KnobsAlert />
                <FakeApp style={{ ...fakeAppColumnStyle, ...fakeAppRowStyle }}>
                    <ThemeElement>
                        <Toolbar
                            opened={opened}
                            top={top}
                            bottom={bottom}
                            left={left}
                            right={right}
                            direction={direction}
                            container={container}
                        >
                            <Toolbar.Button
                                icon="bars"
                                loading={loading}
                                size={size}
                            />
                            <Toolbar.Button
                                icon="search"
                                loading={loading}
                                size={size}
                            />
                            <Toolbar.Button
                                icon="location-arrow"
                                loading={loading}
                                size={size}
                            />
                        </Toolbar>
                    </ThemeElement>
                </FakeApp>
            </DefaultTheme>
        );
    });
