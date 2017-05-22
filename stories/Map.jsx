import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, number, boolean } from '@kadira/storybook-addon-knobs';

import defaultHostOptions from '../.storybook/defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';
import ReactLeafletAlert from './components/ReactLeafletAlert';

import {
    DefaultTheme,
    Map,
} from '../index';


storiesOf('Map', module)
.addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Map',
        height: 450,
    }))
    .addWithInfo('Default state', () => {
        const position = [ 51.505, -0.09 ];

        return (
            <DefaultTheme>
                <ReactLeafletAlert />
                <Map center={position} zoom={13} style={{ height: 450 }}>
                    <Map.TileLayer
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Map>
            </DefaultTheme>
        );
    })
    .addWithInfo('With locate control', () => {
        const position = [ 51.505, -0.09 ];
        const style = { height: 450 };

        return (
            <DefaultTheme>
                <ReactLeafletAlert />
                <Map center={position} zoom={13} style={style} locate>
                    <Map.TileLayer
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Map>
            </DefaultTheme>
        );
    })
    .addWithInfo('Playground', () => {
        const zoom = number('Zoom', 13, {
            range: true,
            min: 1,
            max: 18,
            step: 1,
        });
        const locate = boolean('Locate control');
        const position = [ 51.505, -0.09 ];

        return (
            <DefaultTheme>
                <ReactLeafletAlert />
                <KnobsAlert />
                <Map
                    center={position}
                    zoom={zoom}
                    locate={locate}
                    style={{ height: 450 }}
                >
                    <Map.TileLayer
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Map>
            </DefaultTheme>
        );
    });
