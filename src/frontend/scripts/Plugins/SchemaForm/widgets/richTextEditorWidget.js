import createCKEditor from '../../Editor/createCKEditor';
import React from "react";
import PropTypes from "prop-types";

module.exports = class RichTextEditorWidget extends React.Component {
    static propTypes = {// eslint-disable-line no-undef
        id: PropTypes.string.isRequired,
        registry: PropTypes.object,
        options: PropTypes.object,
        value: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let editorName = this.props.options.editor.name;
        switch (editorName) {
            case "CKEditor":
                createCKEditor(this.props, this.updateTextareaValue.bind(this));
                break;
        }
    }

    updateTextareaValue(data, callback) {
        this.setState({textareaValue: data}, callback);
    }

    render() {
        const {TextareaWidget} = this.props.registry.widgets;
        return (
            <TextareaWidget {...this.props}/>
        );
    }
};

