import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Loader from './loader';


const StyledAside = styled.aside`
    top: 0;
    max-width: 100%;
    height: 100%;
    overflow-y: auto;
    transition: all 0.25s ease-out;

    color: ${props => props.theme.color};
    background: ${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 0;

    &.container-parent { position: absolute; }
    &.container-root   { position: fixed; }

    &.xs { width: 150px; }
    &.sm { width: 250px; }
    &.md { width: 400px; }
    &.lg { width: 600px; }
    &.maximized { width: 100%; }

    &.left {
        left: 0;
        transform: translate(-150%, 0);
        border-right-width: ${props => props.theme.borderWidth};
    }

    &.right {
        right: 0;
        transform: translate(150%, 0);
        border-left-width: ${props => props.theme.borderWidth};
    }

    &.left.maximized,
    &.right.maximized {
        border-width: 0;
    }

    &.opened {
        transform: translate(0, 0);
    }

    .back-btn,
    .close-btn {
        color: ${props => props.theme.controlColor};
        background: transparent;
        border-width: 0;
        width: 50px;
        height: 50px;
        padding: 0;

        &:hover {
            color: ${props => props.theme.hoverControlColor};
        }
    }

    .back-btn {
        float: left;
        margin-right: 5px;
    }

    .close-btn {
        float: right;
        margin-left: 5px;
    }

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 0 30px;
    }

    .content {
        position: relative;
        padding: 15px 20px;
    }

    .content.loading {
        display: none;
    }

    .loader {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        margin-top: -25px;
        text-align: center;
        visibility: visible;
    }
`;


class Column extends React.Component {
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

        if (this.props.maximized === true) {
            this.props.onMaximize();
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

    _handleBackClick() {
        this._triggerCallback('onBack');
    }

    _handleCloseClick() {
        this.setState({ opened: false });
        this._triggerCallback('onClose');
    }

    render() {
        const {
            title,
            children,
            loading,
            loaderLabel,
            position,
            width,
            maximized,
            container,
            ...rest
        } = this.props;

        const asideClasses = classnames({
            [position]: true,
            [width]: true,
            opened: this.state.opened,
            maximized,
            [`container-${container}`]: true,
        });

        const contentClasses = classnames({
            content: true,
            loading,
        });

        return (
            <StyledAside className={asideClasses} {...rest}>
                {this.props.onBack && (
                    <button className="back-btn" onClick={() => this._handleBackClick()}>
                        <FontAwesome name="chevron-left" size="lg" />
                    </button>
                )}
                <button className="close-btn" onClick={() => this._handleCloseClick()}>
                    <FontAwesome name="close" size="lg" />
                </button>
                <div className="clearfix" />

                <div className={contentClasses}>
                    {title && <h2 className="title">{title}</h2>}
                    {children}
                </div>
                {loading && <Loader className="loader" label={loaderLabel} />}
            </StyledAside>
        );
    }
}


Column.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
    opened: PropTypes.bool,
    loading: PropTypes.bool,
    loaderLabel: PropTypes.node,
    position: PropTypes.oneOf(['left', 'right']),
    // animation: PropTypes.oneOf(['linear', 'bubble', 'bubble-inverse']),
    // show-animation: PropTypes.oneOf(['linear', 'bubble', 'bubble-inverse']),
    // close-animation: PropTypes.oneOf(['linear', 'bubble', 'bubble-inverse']),
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    maximized: PropTypes.bool,
    container: PropTypes.oneOf(['parent', 'root']),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onBack: PropTypes.func,
    onMaximize: PropTypes.func,
    onUnmaximize: PropTypes.func,
};

Column.defaultProps = {
    title: '',
    opened: false,
    loading: false,
    loaderLabel: '',
    position: 'left',
    // animation: 'linear',
    // show-animation: 'linear',
    // close-animation: 'linear',
    width: 'md',
    maximized: false,
    container: 'parent',
    onOpen: null,
    onClose: null,
    onBack: null,
    onMaximize: null,
    onUnmaximize: null,
};

Column.displayName = 'Column';

export default Column;
