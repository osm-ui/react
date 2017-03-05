import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap } from 'react-leaflet';


const Map = props => (
    <LeafletMap {...props}>
        {props.children}
    </LeafletMap>
);


Map.propTypes = {
    children: React.PropTypes.element.isRequired,
};


export default Map;
