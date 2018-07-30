/**
 * Copyright (c) 2014-present, San Wei Ju Yuan Tech Ltd. <https://www.3vjuyuan.com>
 * This file is part of swim-Pinna
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * For more details:
 * https://www.3vjuyuan.com/licenses.html
 *
 * @author Team Delta <delta@3vjuyuan.com>
 */

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
