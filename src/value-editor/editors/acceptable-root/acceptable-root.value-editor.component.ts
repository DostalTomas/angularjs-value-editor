/* istanbul ignore file */ // neni cas... :-(

import {OptionsChangeDetection} from '../abstract-value-editor';
import ValueEditorComponent, {ValueEditorBindings, ValueEditorValidations} from '../../value-editor.component';
import {
    AcceptableRootValueEditorConfigurationService,
    AcceptableRootValueEditorOptions
} from './acceptable-root-value-editor-configuration.provider';
import {AcceptableRootValueEditorLocalizationsService} from './acceptable-root-value-editor-localization.provider';
import {IInterpolateService, IOnInit, ITemplateCacheService} from 'angular';
import {AngularTreeControlOptions} from './tree-control/angular-tree-control';
import bind from 'bind-decorator';
import AbstractTemplateValueEditor from '../abstract-template-value-editor';

export interface Childrenable {
    children?: Childrenable[];
}

const TEMPLATE_NAME_PREFIX = 'value-editor.acceptableRootValueEditor';

export class AcceptableRootValueEditorComponentController<VALUE extends Childrenable> extends AbstractTemplateValueEditor<{} | {}[], AcceptableRootValueEditorOptions<VALUE>> implements IOnInit {
    private static readonly TEMPLATE_URL = require('./acceptable-root.value-editor.tpl.pug');
    private static readonly TREECONTROL_TEMPLATE_URL = require('./treecontrol-custom-template.tpl.html');

    public expandedNodes: VALUE[];
    public internalAcceptableValues: [VALUE];
    private treeOptions: Partial<AngularTreeControlOptions<VALUE>>;

    /*@ngInject*/
    constructor(acceptableRootValueEditorConfigurationService: AcceptableRootValueEditorConfigurationService<VALUE>,
                acceptableRootValueEditorLocalizationsService: AcceptableRootValueEditorLocalizationsService,
                $interpolate: IInterpolateService,
                $templateCache: ITemplateCacheService) {
        super(
            AcceptableRootValueEditorComponentController.TEMPLATE_URL,
            TEMPLATE_NAME_PREFIX,
            $interpolate,
            $templateCache,
            acceptableRootValueEditorConfigurationService,
            acceptableRootValueEditorLocalizationsService);
    }

    public $onInit(): void {
        super.$onInit();

        if (this.options.multiselect && !Array.isArray(this.model)) {
            this.model = [];
        }

        this.internalAcceptableValues = [this.options.acceptableValue];
        this.treeOptions = {
            nodeChildren: 'children',
            equality: this.options.equalityComparator,
            multiSelection: this.options.multiselect,
            templateUrl: AcceptableRootValueEditorComponentController.TREECONTROL_TEMPLATE_URL,
            isSelectable: this.isSelectable
        };
        // expanded is always first level
        this.expandedNodes = [this.options.acceptableValue];
    }

    @bind
    public isSelectable(node: VALUE): boolean {
        return !this.options.disabledItems.some((disabledItem) => this.options.equalityComparator(disabledItem, node));
    }

    protected onOptionsChange(newOptions: AcceptableRootValueEditorOptions<VALUE>, oldOptions, whatChanged: OptionsChangeDetection<AcceptableRootValueEditorOptions<VALUE>>) {
        if (whatChanged.optionsTemplate) {
            this.updateTemplate();
        }
    }

    protected getTemplateModel(): {} {
        return {
            optionsTemplate: this.options.optionsTemplate
        };
    }
}

/**
 * @ngdoc component
 * @name acceptableRootValueEditor
 * @module angularjs-value-editor.acceptable-root
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for tree selection.
 *
 * It has two aliases:
 *
 *  - `single-acceptable-root`
 *  - `multiple-acceptable-root`
 *
 * Supported options: {@link type:AcceptableRootValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="acceptableRootValueEditorExample" module="acceptableRootValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="ctrl as $ctrl">
 *              <kp-value-editor type="'multiple-acceptable-root'" ng-model="model" options="{acceptableValue: $ctrl.acceptableValue, optionsTemplate: '{{$node.text}}'}"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('acceptableRootValueEditorExample', ['angularjs-value-editor'])
 *          .controller('ctrl', class {
 *              acceptableValue = {
 *                  text: '0',
 *                  children: [
 *                      {
 *                          text: '1'
 *                      },
 *                      {
 *                          text: '2',
 *                          children: [
 *                              {
 *                                  text: '2-1'
 *                              },
 *                              {
 *                                  text: '2-2'
 *                              }
 *                          ]
 *                      }
 *                  ]
 *              };
 *          });
 *     </file>
 * </example>
 */
export default class AcceptableRootValueEditorComponent {
    public static componentName = 'acceptableRootValueEditor';

    public require = {
        ngModelController: 'ngModel',
        valueEditorController: `^${ValueEditorComponent.componentName}`
    };

    public template = `
        <ng-include src="$ctrl.templateName"></ng-include>
    `;

    public controller = AcceptableRootValueEditorComponentController;
}

export interface AcceptableRootValueEditorBindings<MODEL extends Childrenable> extends ValueEditorBindings<AcceptableRootValueEditorOptions<MODEL>, ValueEditorValidations> {
}
