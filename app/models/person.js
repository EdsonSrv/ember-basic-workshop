import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
  age: DS.attr('number'),
  admin: DS.attr('boolean')
});

//Finding Models
//let person = this.get('store').findRecord('person', 1); // => GET /persons/1 by Path Variable

//let person = this.get('store').findRecord('person', {"username":"carlogilmar"}); // => GET by Query Params

//let people = this.get('store').findAll('person'); // => GET /persons

/* Create Models
let newPerson = this.get('store').createRecord('person', {
  name: 'Gamaliel',
  age: 26,
  admin: false
});

newPerson.save();  //=> POST to '/persons'
*/

/* Update Models
this.get('store').findRecord('person', 1).then(function(person) {

  person.get('name'); // => "carlogilmar"

  person.set('name', 'Carlo Gilmar Padilla Santana');

  person.save(); // => PATCH to '/person/1'

});
*/

/* Delete Models
this.get('store').findRecord('person', 1).then(function(person) {

  person.deleteRecord();

  person.get('isDeleted'); // => true

  person.save(); // => DELETE to /persons/1

});
*/
