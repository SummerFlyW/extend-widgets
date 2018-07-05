# extend-widgets
react-jsonschema-form-extensions

将代码下载到本地后，使用npm install安装依赖包
npm run styles 编译scss文件
npm run scripts 编译js文件
npm run image 编译图片

react-jsonschema-form : https://github.com/mozilla-services/react-jsonschema-form

密码样式扩展：
extendedPassword ui-schema:{
"ui:widget": "extendedPassword",
  "ui:options": {
    "confirm":false,
    "visual":true
  }
}

confirm和visual都为false，只显示单个的密码框，没有确认密码框和查看密码按钮
confirm为true，visual为false；显示确认密码框，没有查看密码按钮
confirm为false，visual为true；显示查看密码按钮，没有确认密码框
confirm和visual都为true，显示查看密码按钮，没有确认密码框。

react-bootstrap-typeahead扩展：

react-jsonschema-form中的select不支持搜索功能，搜索功能使用Typeahead实现，
所需的react-jsonschema-form的UI设置如下：
"ui:widget": "Typeahead", 
"ui:placeholder": "Choose a state...", 
"ui:options": {
    "labelKey": "value",
    "limitSearch":10  //数据大于10条时有搜索功能，少于十条没有搜索功能
 }

