import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { TileLayer } from 'react-leaflet';

import defaultHostOptions from './defaultHostOptions';
import Map from '../components/map';


storiesOf('Map', module)
.addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Map',
        height: 450,
    }))
    .addWithInfo('Default state', () => {
        const position = [ 51.505, -0.09 ];
        const style = { height: 450 };

        return (
            <Map center={position} zoom={13} style={style}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        );
    });
