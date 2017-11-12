import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';
import ReactLeafletAlert from './components/ReactLeafletAlert';

import { DefaultTheme, Map } from '../src/index';

const mapPosition = [44.834769665310445, -0.5757522583007814];
const mapStyle = { height: 500 };
const mapZoom = 12;

storiesOf('Map', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Map',
      height: 450
    })
  )
  .addWithInfo('Default state', () => (
    <DefaultTheme>
      <ReactLeafletAlert />
      <Map center={mapPosition} zoom={mapZoom} style={mapStyle}>
        <Map.TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </DefaultTheme>
  ))
  .addWithInfo('With locate control', () => (
    <DefaultTheme>
      <ReactLeafletAlert />
      <Map center={mapPosition} zoom={mapZoom} style={mapStyle} locate>
        <Map.TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </DefaultTheme>
  ))
  .addWithInfo('Marker icon', () => (
    <DefaultTheme>
      <ReactLeafletAlert />
      <Map center={mapPosition} zoom={mapZoom} style={mapStyle}>
        <Map.TileLayer
          url="http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
          attribution="Tiles <a href=&quot;http://stamen.com&quot;>Stamen Design</a> under <a href=&quot;http://creativecommons.org/licenses/by/3.0&quot;>CC BY 3.0</a> - Data &copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a>"
        />
        <Map.Marker
          position={[44.83542161363759, -0.5201339721679689]}
          theme="green"
          shape="pointerClassic"
          icon="recycle"
        />
        <Map.Marker
          position={[44.8641429890617, -0.6245040893554689]}
          theme="yellow"
          shape="pointerClassicThin"
          icon="star"
        />
        <Map.Marker
          position={[44.805467985427924, -0.6021881103515626]}
          theme="blue"
          shape="pointerCirclePin"
          icon="info"
        />
        <Map.Marker
          position={[44.85343499821067, -0.6928253173828125]}
          theme="purple"
          shape="pointerCirclePin"
        />
        <Map.Marker
          position={[44.79377454332171, -0.5002212524414064]}
          theme="red"
          shape="pointerClassic"
          icon="plus"
        />
        <Map.Marker
          position={[44.86049276135611, -0.5249404907226564]}
          theme="rose"
          shape="basicCircle"
        />
        <Map.Marker
          position={[44.792312696427096, -0.6399536132812501]}
          theme="turquoise"
          shape="basicSquare"
        />
        <Map.Marker
          position={[44.88336370243942, -0.6811523437500001]}
          theme="lightGray"
          shape="basicDiamond"
        />
        <Map.Marker
          position={[44.815941348210835, -0.5585861206054689]}
          theme="orange"
          shape="basicUpTriangle"
        />
        <Map.Marker
          position={[44.82884776001609, -0.4452896118164063]}
          theme="brown"
          shape="basicLeftTriangle"
        />
        <Map.Marker
          position={[44.79718537540685, -0.7206344604492189]}
          theme="anthracite"
          shape="basicRightTriangle"
        />
        <Map.Marker
          position={[44.84248158415813, -0.6039047241210939]}
          theme="sky"
          shape="basicDownTriangle"
        />
      </Map>
    </DefaultTheme>
  ))
  .addWithInfo('Playground', () => {
    const zoom = number('Zoom', mapZoom, {
      range: true,
      min: 1,
      max: 18,
      step: 1
    });
    const locate = boolean('Locate control');

    return (
      <DefaultTheme>
        <ReactLeafletAlert />
        <KnobsAlert />
        <Map center={mapPosition} zoom={zoom} locate={locate} style={mapStyle}>
          <Map.TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </Map>
      </DefaultTheme>
    );
  });
