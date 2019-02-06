import NgModelConnector from '../ng-model-connector';
import ValueEditorComponent, {
    ValueEditorBindings,
    ValueEditorComponentController,
    ValueEditorOptions,
    ValueEditorValidations
} from '../../value-editor.component';
import {IPostLink} from 'angular';

const DEFAULT_OPTIONS: TextValueEditorOptions = {
    type: 'text'
};

export class TextValueEditorComponentController extends NgModelConnector<string> implements IPostLink {
    public valueEditorController: ValueEditorComponentController<string, TextValueEditorOptions, TextValueEditorValidations>;
    public options: TextValueEditorOptions;

    public $postLink(): void {
        this.options = Object.assign({}, this.valueEditorController.options, DEFAULT_OPTIONS);
    }
}

/**
 * @ngdoc component
 * @name textValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for text input.
 * Depending on type are four versions:
 * - `text`
 *
 *      Common text input.
 *
 * - `number`
 *
 *      Value editor for numbers.
 *
 * - `textarea`
 *
 *      Textarea value editor.
 *
 * - `rich-textarea`.
 *
 *      [ACE editor](https://ace.c9.io).
 *
 * @example
 * <example name="textValueEditorExample" module="textValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'text'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('textValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */
export default class TextValueEditorComponent {
    public static componentName = 'textValueEditor';

    public require = {
        ngModelController: 'ngModel',
        valueEditorController: `^${ValueEditorComponent.componentName}`
    };

    public templateUrl = require('./text.value-editor.tpl.pug');

    public controller = TextValueEditorComponentController;
}

type TTextValueEditorType = 'text' | 'number' | 'textarea' | 'rich-textarea';

export interface TextValueEditorOptions extends ValueEditorOptions {
    type?: TTextValueEditorType;
}
export interface TextValueEditorValidations extends ValueEditorValidations {
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
}

export interface TextValueEditorBindings extends ValueEditorBindings<TextValueEditorOptions, TextValueEditorValidations> {}

/**
 * @ngdoc type
 * @name TextValueEditorOptions
 * @module angularjs-value-editor
 *
 * @property {string} type Input type. Possible values are `text`, `number`, `textarea`, `rich-textarea`.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 */

/**
 * @ngdoc type
 * @name TextValueEditorValidations
 * @module angularjs-value-editor
 *
 * @property {number=} minlength Min length.
 * @property {number=} maxlength Max length.
 * @property {string=} pattern Regexp pattern.
 *
 * @description
 * Extends {@link type:ValueEditorValidations}
 */
