import ReactFormBuilder from './SchemaForm/reactFormBuilder';

const setupCreationForm = () => {
    let creationFormConfigsNode = document.getElementsByName('creation-form-configs').item(0),
        creationFormBuilder;
    if (creationFormConfigsNode) {
        let formConfig = JSON.parse(creationFormConfigsNode.innerHTML);

        creationFormBuilder = new ReactFormBuilder(
            formConfig,
            'creation-form',
        );
        creationFormBuilder.render();
    }
};

export {setupCreationForm,};
