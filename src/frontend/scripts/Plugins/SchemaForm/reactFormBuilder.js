import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-jsonschema-form';
import ExtendedPasswordWidget from './widgets/extendedPasswordWidget';
import RichTextEditorWidget from './widgets/richTextEditorWidget';
import TypeaheadWidiget from './widgets/TypeaheadWidiget';

module.exports = class ReactFormBuilder {
    constructor(formConfig, formContainer = 'default-form-container', submissionHandler = null) {
        if (typeof formContainer === 'string') {
            formContainer = document.getElementById(formContainer);
        }
        this.submissionHandler = typeof submissionHandler === 'function' ? submissionHandler : this._handlerSubmission;
        this.formConfig = formConfig;
        this.formContainer = formContainer;
        this.customWidgets = {
            extendedPassword: ExtendedPasswordWidget,
            Typeahead: TypeaheadWidiget,
            extendedEditor: RichTextEditorWidget
        };
    }

    //@todo This method should be filled with its functionality
    _handlerSubmission(data) {
        return data;
    }

    render() {
        ReactDOM.render(
            <div className="form-container">
                <Form
                    schema={this.formConfig.schema}
                    uiSchema={this.formConfig.uiSchema}
                    formData={this.formConfig.formData}
                    widgets={this.customWidgets}
                    onSubmit={this.submissionHandler.bind(this)}
                    ref={(form) => {
                        this.form = form;
                    }}
                >
                </Form>
            </div>,
            this.formContainer
        );
    }
};
