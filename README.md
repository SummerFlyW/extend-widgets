# extend-widgets</br>
react-jsonschema-form-extensions</br>

将代码下载到本地后，使用npm install安装依赖包</br>
npm run styles 编译scss文件</br>
npm run scripts 编译js文件</br>
npm run image 编译图片</br>
手动解压src文件夹下的ckeditor.zip文件。</br>

react-jsonschema-form : https://github.com/mozilla-services/react-jsonschema-form</br>

密码样式扩展：</br>
extendedPassword ui-schema:{
"ui:widget": "extendedPassword",
  "ui:options": {
    "confirm":false,
    "visual":true
  }
}

confirm和visual都为false，只显示单个的密码框，没有确认密码框和查看密码按钮</br>
confirm为true，visual为false；显示确认密码框，没有查看密码按钮</br>
confirm为false，visual为true；显示查看密码按钮，没有确认密码框</br>
confirm和visual都为true，显示查看密码按钮，没有确认密码框。</br>

react-bootstrap-typeahead扩展：</br>

react-jsonschema-form中的select不支持搜索功能，搜索功能使用Typeahead实现，</br>
所需的react-jsonschema-form的UI设置如下：</br>
"ui:widget": "Typeahead", 
"ui:placeholder": "Choose a state...",
"ui:options": {
    "labelKey": "value",
    "limitSearch":10  //数据大于10条时有搜索功能，少于十条没有搜索功能
 }
 
 ckeditor扩展：</br>
 
"ui:widget": "extendedEditor",
"ui:options": {
"editor": {
"name": "CKEditor"
},
"toolbar": [
{
"name": "document",
"items": [
"Source",
 "-",
"Save",
"Preview"
]
}
]
}

ui options中的toolbar是自定义配置编辑器的toolbar，具体配置可参考ckeditor4工具栏.docx</br>

![Image text](https://github.com/SummerFlyW/extend-widgets/blob/master/src/frontend/images/form.png)   

