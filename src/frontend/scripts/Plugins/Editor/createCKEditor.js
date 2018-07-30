/**
 * Copyright (c) 2014-present, San Wei Ju Yuan Tech Ltd. <https://www.3vjuyuan.com>
 * This file is part of swim-reformer
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
 * @author Team fancy <fancy@3vjuyuan.com>
 */

const createCKEditor = (props, updateCallback) => {
    const {
        id,
        value,
        onChange,
        options
    } = props;
    const CKEditor = CKEDITOR.replace(id, {// eslint-disable-line no-undef
        toolbar: options.toolbar
    });
    if (CKEDITOR.status === 'loaded') {// eslint-disable-line no-undef
        value && CKEditor.setData(value);
    }

    CKEDITOR.instances[id].on("instanceReady", function () {// eslint-disable-line no-undef
        this.document.on("keyup", () => {
            let data = CKEditor.getData();
            updateCallback(data, () => onChange(data));
        });
        this.document.on("click", () => {
            let data = CKEditor.getData();
            updateCallback(data, () => onChange(data));
        });
    });
};

export default createCKEditor;
