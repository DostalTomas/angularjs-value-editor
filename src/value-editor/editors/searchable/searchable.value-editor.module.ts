import './searchable.value-editor.less';
import register from '@kpsys/angularjs-register';
import SearchableValueEditorComponent from './searchable.value-editor.component';
import SearchableValueEditorConfigurationServiceProvider, {SEARCHABLE_VALUE_EDITOR_DEFAULT_OPTIONS} from './searchable-value-editor-configuration.provider';
import SearchableValueEditorLocalizationsServiceProvider, {SEARCHABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS} from './searchable-value-editor-localization.provider';

/**
 * @ngdoc module
 * @name angularjs-value-editor.searchable
 * @module angularjs-value-editor.searchable
 *
 * @description
 *
 */

export default register('angularjs-value-editor.searchable')
    .constant('searchableValueEditorDefaultOptions', SEARCHABLE_VALUE_EDITOR_DEFAULT_OPTIONS)
    .constant('searchableValueEditorDefaultLocalizations', SEARCHABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS)
    .provider(SearchableValueEditorConfigurationServiceProvider.providerName, SearchableValueEditorConfigurationServiceProvider)
    .provider(SearchableValueEditorLocalizationsServiceProvider.providerName, SearchableValueEditorLocalizationsServiceProvider)
    .component(SearchableValueEditorComponent.componentName, SearchableValueEditorComponent)
    .name();
