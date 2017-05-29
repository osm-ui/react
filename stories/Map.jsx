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


const mapPosition = [ 51.505, -0.09 ];
const mapStyle = { height: 450 };


storiesOf('Map', module)
.addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Map',
        height: 450,
    }))
    .addWithInfo('Default state', () => (
        <DefaultTheme>
            <ReactLeafletAlert />
            <Map center={mapPosition} zoom={13} style={mapStyle}>
                <Map.TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        </DefaultTheme>
    ))
    .addWithInfo('With locate control', () => (
        <DefaultTheme>
            <ReactLeafletAlert />
            <Map center={mapPosition} zoom={13} style={mapStyle} locate>
                <Map.TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        </DefaultTheme>
    ))
    .addWithInfo('Playground', () => {
        const zoom = number('Zoom', 13, {
            range: true,
            min: 1,
            max: 18,
            step: 1,
        });
        const locate = boolean('Locate control');

        return (
            <DefaultTheme>
                <ReactLeafletAlert />
                <KnobsAlert />
                <Map
                    center={mapPosition}
                    zoom={zoom}
                    locate={locate}
                    style={mapStyle}
                >
                    <Map.TileLayer
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Map>
            </DefaultTheme>
        );
    });
