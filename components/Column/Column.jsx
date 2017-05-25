import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import ColumnTitle from './Title';
import Loader from '../Loader';


const StyledAside = styled.aside`
    z-index: 1000;
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
    box-shadow: ${props => props.theme.boxShadow};

    &.scroll-content {
        display: flex;
        flex-direction: column;
        overflow-y: none;
    }

    &.container-parent { position: absolute; }
    &.container-root   { position: fixed; }

    &.xs { width: 150px; }
    &.sm { width: 250px; }
    &.md { width: 400px; }
    &.lg { width: 600px; }
    &.maximized { width: 100%; }

    &.left,
    &.left.transition-appear {
        left: 0;
        transform: translate(-150%, 0);
        border-right-width: ${props => props.theme.borderWidth};
    }

    &.right,
    &.right.transition-appear {
        right: 0;
        transform: translate(150%, 0);
        border-left-width: ${props => props.theme.borderWidth};
    }

    &.left.maximized,
    &.right.maximized {
        border-width: 0;
    }

    &.opened,
    &.opened.transition-appear.transition-appear-active {
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

    &.scroll-content .header {
        margin-bottom: 20px;
    }

    .content {
        margin-top: 30px;
        padding: 20px;
    }

    &.scroll-content .content {
        overflow-y: auto;
        margin: 0;
        border-color: ${props => props.theme.borderColor};
        border-style: ${props => props.theme.borderStyle};
        border-width: 1px 0 1px 0;

        &::after {
            content: '';
            margin-top: 20px;
            display: block;
        }
    }

    .content.loading {
        display: none;
    }

    &.scroll-content .footer {
        margin-top: 20px;
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
            const callback = this.props[name];

            switch (name) {
                case 'onClickClose':
                case 'onClose':
                    setTimeout(callback, 250);
                    break;
                default:
                    callback();
            }
        }
    }

    _handleBackClick() {
        this._triggerCallback('onClickBack');
    }

    _handleCloseClick() {
        this.setState({ opened: false });
        this._triggerCallback('onClickClose');
        this._triggerCallback('onClose');
    }

    render() {
        const {
            title,
            header,
            footer,
            children,
            loading,
            loaderLabel,
            position,
            width,
            maximized,
            container,
            scrollContent,
            className,
            ...rest
        } = this.props;

        const asideClasses = classnames(className, {
            [position]: true,
            [width]: true,
            opened: this.state.opened,
            maximized,
            [`container-${container}`]: true,
            'scroll-content': scrollContent,
        });

        const contentClasses = classnames({
            content: true,
            loading,
        });

        return (
            <CSSTransitionGroup
                transitionName="transition"
                transitionAppear
                transitionAppearTimeout={250}
                transitionEnter={false}
                transitionLeave={false}
            >
                <StyledAside key="column" className={asideClasses} {...rest}>
                    <header className="header">
                        {this.props.onClickBack && (
                            <button className="back-btn" onClick={() => this._handleBackClick()}>
                                <FontAwesome name="chevron-left" size="lg" />
                            </button>
                        )}
                        <button className="close-btn" onClick={() => this._handleCloseClick()}>
                            <FontAwesome name="close" size="lg" />
                        </button>
                        {title && <ColumnTitle inHeader>{title}</ColumnTitle>}
                        <div className="clearfix" />
                        {!loading && header && header}
                    </header>

                    <div className={contentClasses}>
                        {children}
                    </div>

                    {!loading && footer && footer}

                    {loading && <Loader centered label={loaderLabel} />}
                </StyledAside>
            </CSSTransitionGroup>
        );
    }
}


Column.propTypes = {
    title: PropTypes.string,
    header: PropTypes.node,
    footer: PropTypes.node,
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
    scrollContent: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onClickClose: PropTypes.func,
    onClickBack: PropTypes.func,
    onMaximize: PropTypes.func,
    onUnmaximize: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Column.defaultProps = {
    title: '',
    header: '',
    footer: '',
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
    scrollContent: false,
    onOpen: null,
    onClickClose: null,
    onClose: null,
    onClickBack: null,
    onMaximize: null,
    onUnmaximize: null,
    className: '',
};

Column.displayName = 'Column';

export default Column;
