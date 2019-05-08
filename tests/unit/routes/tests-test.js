import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tests', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tests');
    assert.ok(route);
  });
});
