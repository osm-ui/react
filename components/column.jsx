import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledAside = styled.aside`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.2s ease-out;

    color: ${props => props.theme.color};
    background: ${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 0;

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

    &.visible {
        transform: translate(0, 0);
    }
`;


class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: props.visible,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible,
        });

        if (this.props.maximized !== nextProps.maximized) {
            this.props.onMaximize();
        }

        if (this.props.visible !== nextProps.visible && nextProps.visible === false) {
            this.props.onClose();
        }
    }

    _handleBackClick() {
        this.props.onBack();
    }

    _handleCloseClick() {
        this.setState({ visible: false });
        this.props.onClose();
    }

    render() {
        const {
            title,
            children,
            // loading,
            position,
            width,
            maximized,
            ...rest
        } = this.props;

        const classes = classnames({
            'form-group': true,
            [position]: true,
            [width]: true,
            visible: this.state.visible,
            maximized,
        });

        return (
            <StyledAside className={classes} {...rest}>
                <h2 className="title">{title}</h2>
                <button className="back-btn" onClick={() => this._handleBackClick()}>
                    <i className="fa fa-chevron-left" />
                </button>
                <button className="close-btn" onClick={() => this._handleCloseClick()}>
                    <i className="fa fa-close" />
                </button>
                <div className="content">
                    {children}
                </div>
            </StyledAside>
        );
    }
}


Column.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    visible: PropTypes.bool,
    // loading: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right']),
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    maximized: PropTypes.bool,
    onClose: PropTypes.func,
    onBack: PropTypes.func,
    onMaximize: PropTypes.func,
};

Column.defaultProps = {
    visible: false,
    // loading: false,
    position: 'left',
    width: 'md',
    maximized: false,
    onClose: () => {},
    onBack: () => {},
    onMaximize: () => {},
};

Column.displayName = 'Column';

export default Column;
