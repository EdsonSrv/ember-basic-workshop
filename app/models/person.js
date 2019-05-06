import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
  age: DS.attr('number'),
  admin: DS.attr('boolean')
});

//let person = this.get('store').findRecord('person', 1); // => GET /persons/1 by Path Variable

//let person = this.get('store').findRecord('person', {"username":"carlogilmar"}); // => GET by Query Params

//let people = this.get('store').findAll('person'); // => GET /persons

/*
let newPerson = this.get('store').createRecord('person', {
  name: 'Gamaliel',
  age: 26,
  admin: false
});

newPerson.save();  //=> POST to '/persons'
*/
