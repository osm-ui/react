import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import ToolbarButton from './Button';


const Container = styled.div`
    display: flex;

    &.direction-row { flex-direction: row; }
    &.direction-column { flex-direction: column; }
`;

const Collapse = styled.div`
    transition: all 0.1s ease-out;

    display: flex;

    &.direction-row { flex-direction: row; }
    &.direction-column { flex-direction: column; }

    &.direction-column.position-top-left > *,
    &.direction-column.position-top-right > * {
        margin-top: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-column.position-bottom-left > *,
    &.direction-column.position-bottom-right > * {
        margin-bottom: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-row.position-top-left > *,
    &.direction-row.position-bottom-left > * {
        margin-left: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-row.position-top-right > *,
    &.direction-row.position-bottom-right > * {
        margin-right: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-column {
        &.position-top-left,
        &.position-bottom-left {
            transform: translate(-150%, 0);
        }

        &.position-top-right,
        &.position-bottom-right {
            transform: translate(150%, 0);
        }
    }

    &.direction-row {
        &.position-top-left,
        &.position-top-right {
            transform: translate(0, -150%);
        }

        &.position-bottom-left,
        &.position-bottom-right {
            transform: translate(0, 150%);
        }
    }

    &.direction-column, &.direction-row {
        &.position-top-left,
        &.position-top-right,
        &.position-bottom-right,
        &.position-bottom-left {
            &.opened {
                transform: translate(0, 0);
            }
        }
    }
`;


class ToolbarCollapse extends React.Component {
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

    _handleClick() {
        const newState = !this.state.opened;

        this.setState({
            opened: newState,
        });

        if (newState === true) {
            this._triggerCallback('onOpen');
        }
        else {
            this._triggerCallback('onClose');
        }
    }

    render() {
        const {
            position,
            direction,
            icon,
            size,
            shape,
            className,
            children,
            ...rest
        } = this.props;

        const classes = classnames(className, {
            [`position-${position}`]: true,
            [`direction-${direction}`]: true,
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

        const elements = [
            <ToolbarButton key="button" icon={icon} onClick={e => this._handleClick(e)} />,
            (
                <Collapse key="collpase" className={classes} {...rest}>
                    {
                        React.Children.map(children,
                            child => React.cloneElement(child, childrenProps),
                        )
                    }
                </Collapse>
            ),
        ];

        if (
            (direction === 'column' && ['bottom-left', 'bottom-right'].indexOf(position) > -1)
            || (direction === 'row' && ['top-right', 'bottom-right'].indexOf(position) > -1)
        ) {
            elements.reverse();
        }

        return (
            <Container className={classes}>{elements}</Container>
        );
    }
}


ToolbarCollapse.propTypes = {
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-right', 'bottom-left']),
    direction: PropTypes.oneOf(['row', 'column']),
    icon: PropTypes.string,
    size: PropTypes.oneOf(['', 'xs', 'sm', 'md', 'lg']),
    shape: PropTypes.oneOf(['', 'round', 'square']),
    opened: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

ToolbarCollapse.defaultProps = {
    position: 'top-left',
    direction: 'column',
    icon: 'bars',
    size: '',
    shape: '',
    opened: false,
    onOpen: null,
    onClose: null,
    className: '',
};

ToolbarCollapse.displayName = 'Toolbar.Collapse';

export default ToolbarCollapse;
