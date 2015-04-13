import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:form', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('route model', function (assert) {
  assert.expect(2);
  var route = this.subject();

  // stubbing the store object
  route.store = {
    find: function(model, formId){
      assert.equal(model, 'form');
      return {id: formId};
    }
  };

  assert.equal(route.model().id, 'fixture-0');
});
