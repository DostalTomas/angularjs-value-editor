import KpValueEditorComponent, {ValueEditorBindings} from '../../kp-value-editor/kp-value-editor.component';
import * as angular from 'angular';
import {IFormController, IInterpolateService, IOnInit, ITemplateCacheService} from 'angular';
import {
    ObjectValueEditorConfigurationService,
    ObjectValueEditorOptions,
    UndocumentedObjectValueEditorInternalOptions
} from './object-value-editor-configuration.provider';
import AbstractTemplateValueEditor from '../../common/abstract-template-value-editor';
import {AbstractMetaValueEditorComponentController} from '../abstract-meta-value-editor.component';
import {generateUuid} from '../../utils/uuid-generator';
import {PropertyChangeDetection} from '../../utils/equals';

const TEMPLATE_NAME_PREFIX = 'value-editor.objectValueEditor';

export class ObjectValueEditorComponentController<MODEL> extends AbstractMetaValueEditorComponentController<MODEL, ObjectValueEditorOptions> implements IOnInit {
    public static readonly TEMPLATE_URL = require('./object.value-editor.tpl.pug');

    private formController: IFormController | undefined;

    /*@ngInject*/
    constructor(
        $interpolate: IInterpolateService,
        $templateCache: ITemplateCacheService,
        objectValueEditorConfigurationService: ObjectValueEditorConfigurationService
    ) {
        super(
            ObjectValueEditorComponentController.TEMPLATE_URL,
            TEMPLATE_NAME_PREFIX,
            $interpolate,
            $templateCache,
            objectValueEditorConfigurationService);
    }

    public $onInit() {
        super.$onInit();

        if ((this.options as UndocumentedObjectValueEditorInternalOptions).__withoutNgForm) {

            if (this.formController) {
                this.form = this.formController;
            } else {
                // @ts-ignore Init form with anything
                this.form = {};
            }
        }
    }

    public transformFieldEditor(fieldEditor: ValueEditorBindings, fieldName: string): ValueEditorBindings {
        if (typeof this.options.attributesTransformation === 'function') {
            fieldEditor = this.options.attributesTransformation(fieldEditor);
        }

        if (!fieldEditor.editorId) {
            fieldEditor.editorId = generateUuid();
        }

        if (!fieldEditor.editorName && fieldName) {
            fieldEditor.editorName = fieldName;
        }

        if (this.options.forceShowErrors) {
            if (!fieldEditor.options) {
                fieldEditor.options = {};
            }

            fieldEditor.options.forceShowErrors = true;
        }

        return fieldEditor;
    }

    protected onOptionsChange(newOptions: ObjectValueEditorOptions, oldOptions: ObjectValueEditorOptions | undefined, optionsChangeDetection: PropertyChangeDetection<ObjectValueEditorOptions> | undefined) {
        super.onOptionsChange(newOptions, oldOptions, optionsChangeDetection);

        if (optionsChangeDetection.labelsWidth) {
            this.updateTemplate();
        }
    }

    protected getTemplateModel(): {} {
        return Object.assign({
            labelsWidth: this.options.labelsWidth,
            inputsWidth: 12 - this.options.labelsWidth,
            withoutNgForm: (this.options as UndocumentedObjectValueEditorInternalOptions).__withoutNgForm
        }, super.getTemplateModel());
    }
}

/**
 * @ngdoc component
 * @name objectValueEditor
 * @module angularjs-value-editor.object
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for object input.
 *
 * Supported options: {@link type:ObjectValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="objectValueEditorExample" module="objectValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'object'" ng-model="model"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
 *         angular.module('objectValueEditorExample', ['angularjs-value-editor'])
 *          .config(['objectValueEditorConfigurationServiceProvider', function(objectValueEditorConfigurationServiceProvider) {
 *              objectValueEditorConfigurationServiceProvider.setConfiguration({
 *                  fields: [
 *                      {
 *                          label: 'Text',
 *                          fieldName: 'text',
 *                          editor: {
 *                              type: 'text',
 *                              editorName: 'texttext'
 *                          }
 *                      },
 *                      {
 *                          label: 'Number',
 *                          fieldName: 'number',
 *                          editor: {
 *                              type: 'number',
 *                          }
 *                      },
 *                      {
 *                          label: 'Data',
 *                          fieldName: 'dates',
 *                          editor: {
 *                              type: 'list',
 *                              editorName: 'dates',
 *                              options: {
 *                                  subEditorType: 'date',
 *                                  newItemPrototype: ''
 *                              }
 *                          }
 *                      }
 *                  ]
 *              });
 *          }]);
 *     </file>
 * </example>
 */
export default class ObjectValueEditorComponent {
    public static componentName = 'objectValueEditor';

    public require = {
        ngModelController: 'ngModel',
        valueEditorController: `^${KpValueEditorComponent.componentName}`,
        formController: '^^?form'
    };

    public template = AbstractTemplateValueEditor.COMPONENT_TEMPLATE;

    public controller = ObjectValueEditorComponentController;
}

export interface ObjectValueEditorBindings extends ValueEditorBindings<ObjectValueEditorOptions> {
}
