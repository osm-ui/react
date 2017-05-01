import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Map as LeafletMap } from 'react-leaflet';
import 'leaflet.locatecontrol';


class Map extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.locate === true) {
            this.locateControl = L.control.locate();
            this.map.addControl(this.locateControl);
        }
        else if (this.locateControl) {
            this.map.removeControl(this.locateControl);
        }
    }

    handleRef(map) {
        if (map !== null) {
            this.map = map.leafletElement;
        }
    }

    render() {
        const {
            children,
            ...rest
        } = this.props;

        return (
            <LeafletMap
                ref={map => this.handleRef(map)}
                {...rest}
            >
                {children}
            </LeafletMap>
        );
    }
}


Map.propTypes = {
    locate: PropTypes.bool,
    children: PropTypes.node.isRequired,
};


Map.defaultProps = {
    locate: false,
};

Map.displayName = 'Map';

export default Map;
