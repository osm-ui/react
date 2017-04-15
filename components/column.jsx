import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledSidebar = styled.aside`
    color: ${props => props.theme.color};
    background: ${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 0;

    .left {
        border-right-width: ${props => props.theme.borderWidth};
    }

    .right {
        border-left-width: ${props => props.theme.borderWidth};
    }
`;


export default class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: props.visible,
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            visible: props.visible,
        });
    }

    handleCloseClick() {
        this.setState({
            visible: !this.state.visible,
        });
    }

    render() {
        const {
            title,
            loading,
            children,
            visible,
            ...rest
        } = this.props;

        return ({
            // <StyledSidebar as={Segment} visible={this.state.visible} basic {...rest}>
            //     <Button.Group>
            //         <Header as="h2">{title}</Header>
            //         <Button attached="right" onClick={() => this.handleCloseClick()}>
            //             <Icon name="close" />
            //         </Button>
            //     </Button.Group>
            //     <Divider hidden />
            //     <Segment basic compact loading={loading} className="content">
            //         {children}
            //     </Segment>
            // </StyledSidebar>
        });
    }
}


Column.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    loading: PropTypes.bool,
    visible: PropTypes.bool,
};

Column.defaultProps = {
    loading: false,
    visible: false,
    width: 'very wide',
    animation: 'overlay',
};
