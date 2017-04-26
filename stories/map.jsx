import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, number } from '@kadira/storybook-addon-knobs';
import { TileLayer } from 'react-leaflet';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './knobsAlert';

import DefaultTheme from '../themes/default';
import Map from '../components/map';


storiesOf('Map', module)
.addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Map',
        height: 450,
    }))
    .addWithInfo('Default state', () => {
        const zoom = number('Zoom', 13, {
            range: true,
            min: 1,
            max: 18,
            step: 1,
        });
        const position = [ 51.505, -0.09 ];

        return (
            <DefaultTheme>
                <KnobsAlert />
                <Map center={position} zoom={zoom} style={{ height: 450 }}>
                    <TileLayer
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
			<Map center={position} zoom={13} style={style} locate={true}>
				<TileLayer
					url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
			</Map>
		);
	});
