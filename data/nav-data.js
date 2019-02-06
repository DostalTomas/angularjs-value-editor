angular.module('docApp').constant('DOCS_NAVIGATION', {
  "api": {
    "id": "api",
    "href": "api",
    "name": "API",
    "navGroups": [
      {
        "name": "angularjs-value-editor",
        "type": "groups",
        "href": "api/angularjs-value-editor",
        "navItems": [
          {
            "name": "component",
            "type": "section",
            "href": "api/angularjs-value-editor/component",
            "navItems": [
              {
                "name": "kpValueEditor",
                "type": "component",
                "href": "api/angularjs-value-editor/component/kpValueEditor"
              },
              {
                "name": "textValueEditor",
                "type": "component",
                "href": "api/angularjs-value-editor/component/textValueEditor"
              }
            ]
          },
          {
            "name": "type",
            "type": "section",
            "href": "api/angularjs-value-editor/type",
            "navItems": [
              {
                "name": "TextValueEditorOptions",
                "type": "type",
                "href": "api/angularjs-value-editor/type/TextValueEditorOptions"
              },
              {
                "name": "TextValueEditorValidations",
                "type": "type",
                "href": "api/angularjs-value-editor/type/TextValueEditorValidations"
              },
              {
                "name": "ValueEditorOptions",
                "type": "type",
                "href": "api/angularjs-value-editor/type/ValueEditorOptions"
              },
              {
                "name": "ValueEditorValidations",
                "type": "type",
                "href": "api/angularjs-value-editor/type/ValueEditorValidations"
              }
            ]
          }
        ]
      }
    ]
  }
});
