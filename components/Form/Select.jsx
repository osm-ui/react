import React from 'react';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import VirtualizedSelect from 'react-virtualized-select';


const StyledSelect = styled(VirtualizedSelect)`
    .Select-control {
        font-size: 14px;
        opacity: ${props => props.theme.form.input.opacity};
        background-color: ${props => props.theme.form.input.backgroundColor};
        border-color: ${props => props.theme.form.input.borderColor};
        border-width: ${props => props.theme.form.input.borderWidth};
        border-radius: ${props => props.theme.form.input.borderRadius};
        box-shadow: none;
    }

    &.is-focused .Select-control,
    &.is-focused:not(.is-open) > .Select-control {
        opacity: ${props => props.theme.form.input.focusOpacity};
        background-color: ${props => props.theme.form.input.focusBackgroundColor};
        border-color: ${props => props.theme.form.input.focusBorderColor};
        box-shadow: none;
    }

    .Select-placeholder {
        padding-left: 15px;
    }

    .Select-input > input {
        padding: 0;
        line-height: 34px;
    }

    .Select-menu-outer {
        margin-top: 0;
        border-top-width: 0;
    }

    .VirtualizedSelectOption {
        cursor: default;
        padding: 5px 10px;
    }

    .VirtualizedSelectFocusedOption {
        color: ${props => props.theme.form.select.optionColor};
        background-color: ${props => props.theme.form.select.optionBackgroundColor};
    }
`;


class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <StyledSelect
                    onChange={selectValue => this.setState({ selectValue })}
                    value={this.state.selectValue}
                    {...this.props}
                />
            </div>
        );
    }
}


Select.propTypes = {
    ...VirtualizedSelect.PropTypes,
};

Select.defaultProps = {
    ...VirtualizedSelect.defaultProps,
};

Select.displayName = 'Form.Select';

export default Select;
