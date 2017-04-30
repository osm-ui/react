import PropTypes from 'prop-types';
import L from 'leaflet';
import { Map as LeafletMap } from 'react-leaflet';
import 'leaflet.locatecontrol';


class Map extends LeafletMap {
    componentDidMount() {
        super.componentDidMount();

        if (this.props.locate === true) {
            L.control.locate().addTo(this.leafletElement);
        }
    }
}


Map.propTypes = {
    ...LeafletMap.propTypes,
    locate: PropTypes.bool,
};


Map.defaultProps = {
    ...LeafletMap.defaultProps,
    locate: false,
};

Map.displayName = 'Map';

export default Map;
