import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import L from 'leaflet';
import { Map as LeafletMap } from 'react-leaflet';
import 'leaflet.locatecontrol';

const StyledMap = styled.div`
  .leaflet-bar {
    border: none;
  }

  .leaflet-bar a {
    color: ${props => props.theme.map.controlColor};
    background: ${props => props.theme.map.controlBackgroundColor};
    border: none;
    width: 50px;
    height: 50px;
    line-height: 50px;
    transition: all 0.1s ease-out;

    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.map.hoverControlColor};
      background: ${props => props.theme.map.hoverControlBackgroundColor};
    }

    &:active {
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
  }
`;

class Map extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.locate === true) {
      this.locateControl = L.control.locate();
      this.map.addControl(this.locateControl);
    } else if (this.locateControl) {
      this.map.removeControl(this.locateControl);
    }
  }

  handleRef(map) {
    if (map !== null) {
      this.map = map.leafletElement;
    }
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <StyledMap>
        <LeafletMap ref={map => this.handleRef(map)} {...rest}>
          {children}
        </LeafletMap>
      </StyledMap>
    );
  }
}

Map.propTypes = {
  locate: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Map.defaultProps = {
  locate: false
};

Map.displayName = 'Map';

export default Map;
