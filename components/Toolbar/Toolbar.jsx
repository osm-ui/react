import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledAside = styled.aside`
    transition: all 0.1s ease-out;

    display: flex;

    &.direction-row { flex-direction: row; }
    &.direction-column { flex-direction: column; }

    &.container-parent { position: absolute; }
    &.container-root   { position: fixed; }

    &.top {
        top: 0;
        margin-top: ${props => props.theme.toolbar.margin};
    }

    &.bottom {
        bottom: 0;
        margin-bottom: ${props => props.theme.toolbar.margin};
    }

    &.left {
        left: 0;
        margin-left: ${props => props.theme.toolbar.margin};
        transform: translate(-150%, 0);
    }

    &.right {
        right: 0;
        margin-right: ${props => props.theme.toolbar.margin};
        transform: translate(150%, 0);
    }

    &.opened {
        transform: translate(0, 0);
    }


    &.direction-column > * {
        margin-bottom: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-row > * {
        margin-right: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-column :last-child,
    &.direction-row :last-child {
        margin: 0;
    }
`;


class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: props.opened,
        };
    }

    componentDidMount() {
        if (this.props.opened === true) {
            this._triggerCallback('onOpen');
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            opened: nextProps.opened,
        });

        if (this.props.opened !== nextProps.opened) {
            if (nextProps.opened === true) {
                this._triggerCallback('onOpen');
            }
            else {
                this._triggerCallback('onClose');
            }
        }
    }

    _triggerCallback(name) {
        if (this.props[name] !== null) {
            this.props[name]();
        }
    }

    render() {
        const {
            top,
            right,
            bottom,
            left,
            direction,
            size,
            shape,
            container,
            className,
            children,
            ...rest
        } = this.props;

        const asideClasses = classnames(className, {
            top: top || !bottom,
            right,
            bottom,
            left: left || !right,
            [`direction-${direction}`]: true,
            [`container-${container}`]: true,
            opened: this.state.opened,
        });

        const childrenProps = {
            direction,
        };

        if (size) {
            childrenProps.size = size;
        }

        if (shape) {
            childrenProps.shape = shape;
        }

        return (
            <StyledAside className={asideClasses} {...rest}>
                {
                    React.Children.map(children,
                        child => React.cloneElement(child, childrenProps),
                    )
                }
            </StyledAside>
        );
    }
}


Toolbar.propTypes = {
    top: PropTypes.bool,
    right: PropTypes.bool,
    bottom: PropTypes.bool,
    left: PropTypes.bool,
    direction: PropTypes.oneOf(['row', 'column']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    shape: PropTypes.oneOf(['round', 'square']),
    container: PropTypes.oneOf(['parent', 'root']),
    opened: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
};

Toolbar.defaultProps = {
    top: false,
    right: false,
    bottom: false,
    left: false,
    direction: 'column',
    size: '',
    shape: '',
    container: 'parent',
    opened: false,
    onOpen: null,
    onClose: null,
    className: '',
    children: '',
};

Toolbar.displayName = 'Toolbar';

export default Toolbar;
