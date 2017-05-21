import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledHeader = styled.header`
    transition: all 0.1s ease-out;

    left: 0;
    right: 0;
    color: ${props => props.theme.titlebar.color};
    border-color: ${props => props.theme.titlebar.borderColor};
    border-style: ${props => props.theme.titlebar.borderStyle};
    border-width: 0;
    background: ${props => props.theme.titlebar.backgroundColor};
    text-align: center;

    &.container-parent { position: absolute; }
    &.container-root   { position: fixed; }

    &.position-top {
        top: 0;
        border-bottom-width: ${props => props.theme.titlebar.borderWidth};
    }

    &.position-bottom {
        bottom: 0;
        border-top-width: ${props => props.theme.titlebar.borderWidth};
    }

    &.xs {
        height: ${props => props.theme.titlebar.xsHeight};
        font-size: ${props => props.theme.titlebar.xsFontSize};
        line-height: ${props => props.theme.titlebar.xsHeight};
    }

    &.sm {
        height: ${props => props.theme.titlebar.smHeight};
        font-size: ${props => props.theme.titlebar.smFontSize};
        line-height: ${props => props.theme.titlebar.smHeight};
    }

    &.md {
        height: ${props => props.theme.titlebar.mdHeight};
        font-size: ${props => props.theme.titlebar.mdFontSize};
        line-height: ${props => props.theme.titlebar.mdHeight};
    }

    &.lg {
        height: ${props => props.theme.titlebar.lgHeight};
        font-size: ${props => props.theme.titlebar.lgFontSize};
        line-height: ${props => props.theme.titlebar.lgHeight};
    }

    &.maximized {
        height: 100%;
        top: 0;
        bottom: 0;
        border-width: 0;
    }
`;


class Titlebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            maximized: props.maximized,
        };
    }

    componentDidMount() {
        if (this.props.maximized === true) {
            this._triggerCallback('onMaximize');
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            maximized: nextProps.maximized,
        });

        if (this.props.maximized !== nextProps.maximized) {
            if (nextProps.maximized === true) {
                this._triggerCallback('onMaximize');
            }
            else {
                this._triggerCallback('onUnmaximize');
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
            size,
            container,
            className,
            children,
            ...rest
        } = this.props;

        const asideClasses = classnames(className, {
            [size]: true,
            [`position-${position}`]: true,
            [`container-${container}`]: true,
            maximized: this.state.maximized,
        });

        return (
            <StyledHeader className={asideClasses} {...rest}>
                {children}
            </StyledHeader>
        );
    }
}


Titlebar.propTypes = {
    position: PropTypes.oneOf(['top', 'bottom']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    container: PropTypes.oneOf(['parent', 'root']),
    maximized: PropTypes.bool,
    onMaximize: PropTypes.func,
    onUnmaximize: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
};

Titlebar.defaultProps = {
    position: 'top',
    size: 'md',
    container: 'parent',
    maximized: false,
    onMaximize: null,
    onUnmaximize: null,
    className: '',
    children: '',
};

Titlebar.displayName = 'Titlebar';

export default Titlebar;
