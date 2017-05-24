import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledAside = styled.aside`
    z-index: 1000;
    transition: all 0.1s ease-out;

    display: flex;

    &.direction-row { flex-direction: row; }
    &.direction-column { flex-direction: column; }

    &.container-parent { position: absolute; }
    &.container-root   { position: fixed; }

    &.position-top-left,
    &.position-top-right {
        top: 0;
        margin-top: ${props => props.theme.toolbar.margin};
    }

    &.position-bottom-left,
    &.position-bottom-right {
        bottom: 0;
        margin-bottom: ${props => props.theme.toolbar.margin};
    }

    &.position-top-left,
    &.position-bottom-left {
        left: 0;
        margin-left: ${props => props.theme.toolbar.margin};
    }

    &.position-top-right,
    &.position-bottom-right {
        right: 0;
        margin-right: ${props => props.theme.toolbar.margin};
    }

    &.direction-column {
        &.position-top-left,
        &.position-top-left.transition-appear,
        &.position-bottom-left,
        &.position-bottom-left.transition-appear {
            transform: translate(-150%, 0);
        }

        &.position-top-right,
        &.position-top-right.transition-appear,
        &.position-bottom-right,
        &.position-bottom-right.transition-appear {
            transform: translate(150%, 0);
        }
    }

    &.direction-row {
        &.position-top-left,
        &.position-top-left.transition-appear,
        &.position-top-right,
        &.position-top-right.transition-appear {
            transform: translate(0, -150%);
        }

        &.position-bottom-left,
        &.position-bottom-left.transition-appear,
        &.position-bottom-right,
        &.position-bottom-right.transition-appear {
            transform: translate(0, 150%);
        }
    }

    &.direction-column, &.direction-row {
        &.position-top-left,
        &.position-top-right,
        &.position-bottom-right,
        &.position-bottom-left {
            &.opened,
            &.opened.transition-appear.transition-appear-active {
                transform: translate(0, 0);
            }
        }
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
            position,
            direction,
            size,
            shape,
            container,
            className,
            children,
            ...rest
        } = this.props;

        const asideClasses = classnames(className, {
            [`position-${position}`]: true,
            [`direction-${direction}`]: true,
            [`container-${container}`]: true,
            opened: this.state.opened,
        });

        const childrenProps = {
            direction,
            position,
        };

        if (size) {
            childrenProps.size = size;
        }

        if (shape) {
            childrenProps.shape = shape;
        }

        return (
            <CSSTransitionGroup
                transitionName="transition"
                transitionAppear
                transitionAppearTimeout={100}
                transitionEnter={false}
                transitionLeave={false}
            >
                <StyledAside className={asideClasses} {...rest}>
                    {
                        React.Children.map(children,
                            child => React.cloneElement(child, childrenProps),
                        )
                    }
                </StyledAside>
            </CSSTransitionGroup>
        );
    }
}


Toolbar.propTypes = {
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-right', 'bottom-left']),
    direction: PropTypes.oneOf(['row', 'column']),
    size: PropTypes.oneOf(['', 'xs', 'sm', 'md', 'lg']),
    shape: PropTypes.oneOf(['', 'round', 'square']),
    container: PropTypes.oneOf(['parent', 'root']),
    opened: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
};

Toolbar.defaultProps = {
    position: 'top-left',
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
