import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap } from 'react-leaflet';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';
import 'font-awesome/css/font-awesome.css';
import 'leaflet.locatecontrol';


class Map extends LeafletMap {
	componentDidMount() {
		super.componentDidMount();
		
		if(this.props.locate === true) {
			L.control.locate().addTo(this.leafletElement);
		}
	}
}


Map.propTypes = {
    ...LeafletMap.propTypes,
	locate: React.PropTypes.bool
};


Map.defaultProps = {
    ...LeafletMap.defaultProps,
	locate: false
};


export default Map;
