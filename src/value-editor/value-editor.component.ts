import {IFormController, INgModelController, IOnChanges, IOnInit, IScope} from 'angular';
import NgModelConnector from './editors/ng-model-connector';
import {generateUuid} from './utils/uuid-generator';

export type TValueEditorType = 'text' | 'number' | 'text-area' | 'rich-textarea';

export const EVENTS = Object.freeze({
    disabled: 'value-editor:disabled'
});

export abstract class ValueEditorComponentController<MODEL = any, EDITOROPTS extends ValueEditorOptions = ValueEditorOptions, EDITORVALIDATIONS extends ValueEditorValidations = ValueEditorValidations>
    extends NgModelConnector<MODEL>
    implements ValueEditorBindings<EDITOROPTS, EDITORVALIDATIONS>, IOnInit, IOnChanges {

    /* Bindings */
    public editorId: string;
    public name: string;
    public type: TValueEditorType;
    public placeholder: string;
    public disabled: boolean;
    public visible: boolean;
    public validations: EDITORVALIDATIONS;
    public options: EDITOROPTS;
    /* Internal */
    public form: IFormController;

    public get status() {
        return this.form[this.name];
    }

    public set status(s) {
        //
    }

    /*@ngInject*/
    constructor(private $scope: IScope) {
        super();
    }

    public $onInit(): void {
        super.$onInit();

        if (!this.name) {
            this.name = this.generateEditorName();
        }
    }

    public $onChanges(onChangesObj: angular.IOnChangesObject): void {
        if (onChangesObj.disabled) {
            this.$scope.$broadcast(EVENTS.disabled, {disabled: onChangesObj.disabled.currentValue});
        }
    }

    private generateEditorName(): string {
        return this.editorId || `${this.type}_${generateUuid()}`;
    }
}

/**
 * @ngdoc component
 * @name kpValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 *
 * @param {string} editorId Input id.
 * @param {string} name Input name.
 * @param {string} placeholder Placeholder.
 * @param {string} type ValueEditor type. <.
 * @param {boolean} disabled If input is disabled. <.
 * @param {boolean} visible If input is visible. <.
 * @param {ValueEditorValidations} validations ValueEditor validations. <.
 * @param {ValueEditorOptions} options ValueEditor options. Type depends on ValueEditor type.
 * @param {ng.type.ngModel.NgModelController} status Status of input.
 *
 * @description
 * Generic value editor depends on type:
 *
 * - `text`, `textarea`, `rich-textarea`: {@link component:textValueEditor}
 */
export default class ValueEditorComponent {
    public static componentName = 'kpValueEditor';

    public require = {
        ngModelController: 'ngModel'
    };

    public bindings = {
        editorId: '@?',
        name: '@?',
        placeholder: '@?',
        type: '<',
        disabled: '<?',
        visible: '<?',
        validations: '<?',
        options: '<?',
        status: '=?'
    };

    public controller = ValueEditorComponentController;

    public templateUrl = require('./value-editor.tpl.pug');
}

export interface ValueEditorValidations {
    required?: boolean;
}

export interface ValueEditorOptions {
    cssClasses?: string[];
}

export interface ValueEditorBindings<EDITOROPTS extends ValueEditorOptions = ValueEditorOptions, EDITORVALIDATIONS extends ValueEditorValidations = ValueEditorValidations> {
    editorId?: string;
    name?: string;
    type?: TValueEditorType;
    placeholder?: string;
    disabled?: boolean;
    visible?: boolean;
    validations?: EDITORVALIDATIONS;
    options?: EDITOROPTS;
    status?: INgModelController;
}

/**
 * @ngdoc type
 * @name ValueEditorValidations
 * @module angularjs-value-editor
 *
 * @property {boolean=} required Optional required validation.
 */

/**
 * @ngdoc type
 * @name ValueEditorOptions
 * @module angularjs-value-editor
 *
 * @property {string[]} [cssClasses] Optional additional CSS classes
 */
