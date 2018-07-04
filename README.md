# extend-widgets
react-jsonschema-form-extensions

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

