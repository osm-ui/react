import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Loader from 'components/Loader';
import SidebarTitle from './Title';

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
  box-shadow: ${props => props.theme.sidebar.boxShadow};

  &.scroll-content {
    display: flex;
    flex-direction: column;
    overflow-y: none;
  }

  &.container-parent {
    position: absolute;
  }
  &.container-root {
    position: fixed;
  }

  &.xs {
    width: 15rem;
  }
  &.sm {
    width: 25rem;
  }
  &.md {
    width: 40rem;
  }
  &.lg {
    width: 60rem;
  }
  &.maximized {
    width: 100%;
  }

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

  .back-btn,
  .close-btn {
    color: ${props => props.theme.controlColor};
    background: transparent;
    border-width: 0;
    width: 5rem;
    height: 5rem;
    padding: 0;

    &:hover {
      color: ${props => props.theme.hoverControlColor};
    }
  }

  .back-btn {
    float: left;
    margin-right: 0.5rem;
  }

  .close-btn {
    float: right;
    margin-left: 0.5rem;
  }

  &.scroll-content .header {
    margin-bottom: 2rem;
  }

  .content {
    margin-top: 3rem;
    padding: 2rem;
  }

  &.scroll-content .content {
    overflow-y: auto;
    margin: 0;
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 1px 0 1px 0;

    &::after {
      content: '';
      margin-top: 2rem;
      display: block;
    }
  }

  .content.loading {
    display: none;
  }

  &.scroll-content .footer {
    margin-top: 2rem;
  }
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: true
    };
  }

  componentDidMount() {
    if (this.props.onOpen) this.props.onOpen();

    if (this.props.maximized === true) {
      this.props.onMaximize();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.maximized !== nextProps.maximized) {
      if (nextProps.maximized === true) this.props.onMaximize();
      else this.props.onUnmaximize();
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) this.props.onClose();
  }

  _handleBackClick() {
    if (this.props.onClickBack) this.props.onClickBack();
  }

  _handleCloseClick() {
    this.setState({ opened: false });

    if (this.props.onClickClose) this.props.onClickClose();
    if (this.props.onClose) this.props.onClose();
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
      'scroll-content': scrollContent
    });

    const contentClasses = classnames({
      content: true,
      loading
    });

    const transitionStyles = {
      entered: {
        transform: 'translate(0,0)'
      }
    };

    return (
      <Transition in={this.state.opened} appear timeout={250}>
        {state => (
          <StyledAside
            key="sidebar"
            className={asideClasses}
            style={transitionStyles[state]}
            {...rest}
          >
            <header className="header">
              {this.props.onClickBack && (
                <button
                  className="back-btn"
                  onClick={() => this._handleBackClick()}
                >
                  <FontAwesome name="chevron-left" size="lg" />
                </button>
              )}
              <button
                className="close-btn"
                onClick={() => this._handleCloseClick()}
              >
                <FontAwesome name="close" size="lg" />
              </button>
              {title && <SidebarTitle inHeader>{title}</SidebarTitle>}
              <div className="clearfix" />
              {!loading && header && header}
            </header>

            <div className={contentClasses}>{children}</div>

            {!loading && footer && footer}

            {loading && <Loader centered label={loaderLabel} />}
          </StyledAside>
        )}
      </Transition>
    );
  }
}

Sidebar.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  loading: PropTypes.bool,
  loaderLabel: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
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
  children: PropTypes.node.isRequired
};

Sidebar.defaultProps = {
  title: '',
  header: '',
  footer: '',
  loading: false,
  loaderLabel: '',
  position: 'left',
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
  className: ''
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
