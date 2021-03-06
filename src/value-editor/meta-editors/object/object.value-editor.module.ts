import './object.value-editor.less';
import register from '@kpsys/angularjs-register';
import ObjectValueEditorComponent from './object.value-editor.component';
import ObjectValueEditorConfigurationServiceProvider, {OBJECT_VALUE_EDITOR_DEFAULT_OPTIONS} from './object-value-editor-configuration.provider';

/**
 * @ngdoc module
 * @name angularjs-value-editor.object
 * @module angularjs-value-editor.object
 *
 * @description
 *
 */

export default register('angularjs-value-editor.object')
    .constant('objectValueEditorDefaultOptions', OBJECT_VALUE_EDITOR_DEFAULT_OPTIONS)
    .provider(ObjectValueEditorConfigurationServiceProvider.providerName, ObjectValueEditorConfigurationServiceProvider)
    .component(ObjectValueEditorComponent.componentName, ObjectValueEditorComponent)
    .name();
