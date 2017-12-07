import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import classnames from 'classnames';
import styled from 'styled-components';

import Title from '../Sidebar/Title';
import Loader from '../Loader';

const StyledAside = styled.aside`
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10%;
  background: ${props => props.theme.modal.backgroundColor};
  color: ${props => props.theme.modal.color};
  overflow-y: auto;

  &.transition-appear {
    opacity: 0;
  }

  &.transition-appear.transition-appear-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }

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

class Modal extends React.Component {
  componentDidMount() {
    this._triggerCallback('onOpen');
  }

  componentWillUnmount() {
    this._triggerCallback('onClose');
  }

  _triggerCallback(name) {
    if (this.props[name] !== null) {
      this.props[name]();
    }
  }

  render() {
    const {
      container,
      scrollContent,
      className,
      title,
      loading,
      loaderLabel,
      header,
      footer,
      children,
      ...rest
    } = this.props;

    const asideClasses = classnames(className, {
      [`container-${container}`]: true,
      'scroll-content': scrollContent
    });

    const contentClasses = classnames({
      content: true,
      loading
    });

    return (
      <CSSTransitionGroup
        transitionName="transition"
        transitionAppear
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}
      >
        <StyledAside key="modal" className={asideClasses} {...rest}>
          <header className="header">
            {title && <Title inHeader>{title}</Title>}
            {!loading && header && header}
          </header>

          <div className={contentClasses}>{children}</div>

          {!loading && footer && footer}

          {loading && <Loader centered label={loaderLabel} />}
        </StyledAside>
      </CSSTransitionGroup>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  loading: PropTypes.bool,
  loaderLabel: PropTypes.node,
  container: PropTypes.oneOf(['parent', 'root']),
  scrollContent: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

Modal.defaultProps = {
  title: '',
  header: '',
  footer: '',
  loading: false,
  loaderLabel: '',
  container: 'root',
  scrollContent: false,
  onOpen: null,
  onClose: null,
  className: '',
  children: ''
};

Modal.displayName = 'Modal';

export default Modal;
