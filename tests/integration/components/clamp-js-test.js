import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('clamp-js', 'Integration | Component | clamp js', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{clamp-js}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#clamp-js}}
      template block text
    {{/clamp-js}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
