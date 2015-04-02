import DS from 'ember-data';
import FormElementsMixin from 'hopper-frontend/mixins/form-elements-mixin';


var FormElement = DS.Model.extend(FormElementsMixin, {
    label: DS.attr('string'),
    immutable: DS.attr('bool'),
    required: DS.attr('required'),
    elementType: DS.attr('string'),
    weight: DS.attr('integer'),
    formElements: DS.hasMany('formElement', { async: true }),
    placeholder: DS.attr('string'),
    description: DS.attr('string'),
    values: DS.attr('string'),
    maxlength: DS.attr('integer'),
    default: DS.attr('string'),
    checked: DS.attr('bool'),

    name: function() {
        var name = '';
        if (typeof(this.get('label')) !== 'undefined') {
            name = this.get('label').toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        }
        return name;
    }.property('label')
});

FormElement.reopenClass({
    FIXTURES: [
        { id: "1", label: 'Director', immutable: true, elementType: 'fieldset', formElements: [2, 3]},
        { id: "2", label: 'Last Name', required: true, immutable: false, elementType: 'Charfield', weight: 2},
        { id: "3", label: 'First Name', required: false, immutable: true, elementType: 'Charfield', weight: 1},
    ]
});

export default FormElement;
