import ValueEditorComponent, {ValueEditorBindings} from '../../value-editor.component';
import * as angular from 'angular';
import {IInterpolateService, ITemplateCacheService} from 'angular';
import {
    ObjectValueEditorConfigurationService,
    ObjectValueEditorOptions
} from './object-value-editor-configuration.provider';
import {ObjectValueEditorLocalizationsService} from './object-value-editor-localization.provider';
import AbstractTemplateValueEditor from '../../common/abstract-template-value-editor';
import {AbstractMetaValueEditorComponentController} from '../abstract-meta-value-editor.component';
import {OptionsChangeDetection} from '../../common/abstract-value-editor';
import {generateUuid} from '../../utils/uuid-generator';

const TEMPLATE_NAME_PREFIX = 'value-editor.objectValueEditor';

export class ObjectValueEditorComponentController<MODEL> extends AbstractMetaValueEditorComponentController<MODEL, ObjectValueEditorOptions> {
    public static readonly TEMPLATE_URL = require('./object.value-editor.tpl.pug');

    /*@ngInject*/
    constructor(
        $interpolate: IInterpolateService,
        $templateCache: ITemplateCacheService,
        objectValueEditorConfigurationService: ObjectValueEditorConfigurationService,
        objectValueEditorLocalizationsService: ObjectValueEditorLocalizationsService
    ) {
        super(
            ObjectValueEditorComponentController.TEMPLATE_URL,
            TEMPLATE_NAME_PREFIX,
            $interpolate,
            $templateCache,
            objectValueEditorConfigurationService,
            objectValueEditorLocalizationsService);
    }

    public transformField(field: ValueEditorBindings): ValueEditorBindings {
        if (typeof this.options.attributesTransformation === 'function') {
            field = this.options.attributesTransformation(field);
        }

        if (!field.editorId) {
            field.editorId = generateUuid();
        }

        return field;
    }

    protected onOptionsChange(newOptions: ObjectValueEditorOptions, oldOptions: ObjectValueEditorOptions | undefined, optionsChangeDetection: OptionsChangeDetection<ObjectValueEditorOptions> | undefined) {
        super.onOptionsChange(newOptions, oldOptions, optionsChangeDetection);

        if (optionsChangeDetection.labelsWidth) {
            this.updateTemplate();
        }
    }

    protected getTemplateModel(): {} {
        return Object.assign({
            labelsWidth: this.options.labelsWidth,
            inputsWidth: 12 - this.options.labelsWidth
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
 *                          type: 'text',
 *                          editorName: 'text'
 *                      },
 *                      {
 *                          label: 'Number',
 *                          type: 'number',
 *                          editorName: 'number'
 *                      },
 *                      {
 *                          label: 'Data',
 *                          type: 'list',
 *                          editorName: 'dates',
 *                          options: {
 *                              subEditorType: 'date',
 *                              newItemPrototype: ''
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
        valueEditorController: `^${ValueEditorComponent.componentName}`
    };

    public template = AbstractTemplateValueEditor.COMPONENT_TEMPLATE;

    public controller = ObjectValueEditorComponentController;
}

export interface ObjectValueEditorBindings extends ValueEditorBindings<ObjectValueEditorOptions> {
}
