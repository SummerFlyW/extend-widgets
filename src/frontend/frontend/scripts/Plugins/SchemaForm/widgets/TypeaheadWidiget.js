import React from "react";
import {Typeahead} from 'react-bootstrap-typeahead';
import PropTypes from "prop-types";

module.exports = class TypeaheadWidiget extends React.Component {
    static propTypes = {// eslint-disable-line no-undef
        onChange: PropTypes.func,
        schema: PropTypes.object.isRequired,
        options: PropTypes.object,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        registry: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: ['']
        };
    }

    _handleChange(selectedItems) {
        selectedItems.length > 0 &&
        this.setState({
            selectValue: selectedItems[0].value
        }, () => this.props.onChange(this.state.selectValue));
    }

    render() {
        const {SelectWidget} = this.props.registry.widgets,
            {labelKey, enumOptions, limitSearch} = this.props.options,
            {placeholder} = this.props;
        return (
            this.props.schema.enum.length > limitSearch ?
                <Typeahead
                    labelKey={labelKey}
                    options={enumOptions}
                    placeholder={placeholder}
                    onChange={this._handleChange.bind(this)}
                /> : <SelectWidget {...this.props}/>
        );
    }
};




