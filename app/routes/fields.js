import Ember from 'ember';

export default Ember.Route.extend({

    possibleTypes: {
        'fieldset': 'Fieldset',
        'input': 'Charfield',
        'textarea': 'Textfield',
        'select': 'Select',
        'radio': 'Radiobuttons',
        'multiselect': 'Multiselect',
        'checkbox': 'Checkboxfield',
        'date': 'Datefield',
        'datetime': 'Datetimefield',
        'file': 'Uploadfield',
        'integer': 'Integerfield',
        'mail': 'Mailfield',
        'url': 'Urlfield',
        'password': 'Passwordfield',
        'hidden': 'Hiddenfield',
    },

    createFormElements: function(parent, elements) {
        var self = this;
        for (var element in elements) {
            var formElementInfo = elements[element];
            var values = formElementInfo['value'] || formElementInfo['choices'];
            if (typeof(values) === 'object') {
                values = values.join('\n');
            }
            var formElement = self.store.createRecord('formElement', {
                label: formElementInfo['label'],
                elementType: self.possibleTypes[formElementInfo['type']],
                weight: formElementInfo['weight'],
                placeholder: formElementInfo['placeholder'],
                values: values,
                maxlength: formElementInfo['maxlength'],
                default: formElementInfo['default'],
                required: formElementInfo['required'] || false,
                immutable: formElementInfo['immutable'] || false,
                checked: formElementInfo['checked'] || false,
            });
            parent.get('formElements').pushObject(formElement);
            if(typeof(formElementInfo.elements) !== 'undefined') {
                self.createFormElements(formElement, formElementInfo.elements);
            }
        }
    },

    model: function() {
        var self = this;
        if (self.store.all('form').get('length')) {
            return self.store.find('form', 'fixture-0');
        }
        var app = self.container.lookup('application:main');
        return Ember.$.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: app.HOPPER_DATA_URL,
            beforeSend: function (request) {
                for (var heading in app.HOPPER_EXTRA_HEADERS) {
                    request.setRequestHeader(heading, app.HOPPER_EXTRA_HEADERS[heading]);
                }
            }
        }).done(function (data) {
            var formData = data.form;
            var form = self.store.createRecord('form', {
                'method': formData.method,
                'action': formData.action,
                'enctype': formData.enctype,
                'title': formData.title,
                'formClasses': formData.css_classes,
                'fieldClasses': formData.elements_css_classes
            });
            self.createFormElements(form, formData.elements);
            self.refresh();
        });
    },
});
