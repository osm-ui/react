import * as ReactLeaflet from 'react-leaflet';
import Map from './Map';

const reactLeafletComponents = [
    'AttributionControl',
    'Circle',
    'CircleMarker',
    'FeatureGroup',
    'GeoJSON',
    'GridLayer',
    'ImageOverlay',
    'LayerGroup',
    'LayersControl',
    'MapComponent',
    'MapControl',
    'MapLayer',
    'Marker',
    'Pane',
    'Path',
    'Polygon',
    'Polyline',
    'Popup',
    'Rectangle',
    'ScaleControl',
    'TileLayer',
    'Tooltip',
    'WMSTileLayer',
    'ZoomControl',
];

for (const componentName of reactLeafletComponents) {
    Map[componentName] = ReactLeaflet[componentName];
}

export default Map;
