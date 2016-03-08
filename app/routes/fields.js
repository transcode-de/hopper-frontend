/* jshint undef: true, unused: true */

import Ember from 'ember';

export default Ember.Route.extend({

    setupController: function(controller, model) {
        Ember.$(window).on('beforeunload', function (e) {
            e = e || window.event;

            // For IE and Firefox prior to version 4
            if (e) {
                e.returnValue = 'Sure?';
            }

            // For Safari
            return 'Sure?';
        });
        controller.set('model', model);
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
                elementType: formElementInfo['type'],
                weight: formElementInfo['weight'],
                placeholder: formElementInfo['placeholder'],
                values: values,
                maxlength: formElementInfo['maxlength'],
                default: formElementInfo['default'],
                required: formElementInfo['required'] || false,
                immutable: formElementInfo['immutable'] || false,
                checked: formElementInfo['checked'] || false,
                multiple: formElementInfo['multiple'] || false,
            });
            parent.get('formElements').pushObject(formElement);
            if(typeof(formElementInfo.elements) !== 'undefined') {
                self.createFormElements(formElement, formElementInfo.elements);
            }
        }
    },

    model: function() {
        var self = this;
        if (self.store.peekAll('form').get('length')) {
            return self.store.find('form', 'fixture-0');
        }
        var app = self.container.lookup('application:main');
        if (typeof(app.form_id) === 'undefined') {
          var queryStrings = app.getQueryStrings();
          app.form_id = queryStrings['form_id'];
        }
        return Ember.$.ajax({
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            url: app.getDataUrl()
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
