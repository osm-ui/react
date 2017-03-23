import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap } from 'react-leaflet';


const Map = props => (
    <LeafletMap {...props}>
        {props.children}
    </LeafletMap>
);


Map.propTypes = {
    ...LeafletMap.propTypes,
};


Map.defaultProps = {
    ...LeafletMap.defaultProps,
};


export default Map;
