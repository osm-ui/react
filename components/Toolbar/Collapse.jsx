import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import ToolbarItem from './Item';


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

    &.direction-column.position-left-center > *,
    &.direction-column.position-left-top > *,
    &.direction-column.position-center-top > *,
    &.direction-column.position-right-top > *,
    &.direction-column.position-right-center > * {
        margin-top: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-column.position-left-bottom > *,
    &.direction-column.position-center-bottom > *,
    &.direction-column.position-right-bottom > * {
        margin-bottom: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-row.position-center-top > *,
    &.direction-row.position-left-top > *,
    &.direction-row.position-left-center > *,
    &.direction-row.position-left-bottom > *,
    &.direction-row.position-center-bottom > * {
        margin-left: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-row.position-right-top > *,
    &.direction-row.position-right-center > *,
    &.direction-row.position-right-bottom > * {
        margin-right: ${props => props.theme.toolbar.childrenMargin};
    }

    &.direction-column {
        &.position-left-top,
        &.position-left-center,
        &.position-left-bottom {
            transform: translate(-150%, 0);
        }

        &.position-center-top {
            transform: translate(0, -200%);
        }

        &.position-center-bottom {
            transform: translate(0, 200%);
        }

        &.position-right-top,
        &.position-right-center,
        &.position-right-bottom {
            transform: translate(150%, 0);
        }
    }

    &.direction-row {
        &.position-left-top,
        &.position-center-top,
        &.position-right-top {
            transform: translate(0, -150%);
        }

        &.position-left-center {
            transform: translate(-200%, 0);
        }

        &.position-right-center {
            transform: translate(200%, 0);
        }

        &.position-left-bottom,
        &.position-center-bottom,
        &.position-right-bottom {
            transform: translate(0, 150%);
        }
    }

    &.direction-column, &.direction-row {
        &.position-left-top,
        &.position-center-top,
        &.position-right-top,
        &.position-right-center,
        &.position-right-bottom,
        &.position-center-bottom,
        &.position-left-bottom,
        &.position-left-center {
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
            <ToolbarItem key="button" icon={icon} onClick={e => this._handleClick(e)} />,
            (
                <Collapse key="collapse" className={classes} {...rest}>
                    {
                        React.Children.map(children,
                            child => React.cloneElement(child, childrenProps),
                        )
                    }
                </Collapse>
            ),
        ];

        if (
            (direction === 'column' && ['left-bottom', 'center-bottom', 'right-bottom'].indexOf(position) > -1)
            || (direction === 'row' && ['right-top', 'right-center', 'right-bottom'].indexOf(position) > -1)
        ) {
            elements.reverse();
        }

        return (
            <Container className={classes}>{elements}</Container>
        );
    }
}


ToolbarCollapse.propTypes = {
    position: PropTypes.oneOf([
        'left-top',
        'center-top',
        'right-top',
        'right-center',
        'right-bottom',
        'center-bottom',
        'left-bottom',
        'left-center',
    ]),
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
    position: 'left-top',
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
