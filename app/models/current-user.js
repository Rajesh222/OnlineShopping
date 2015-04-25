import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  name: DS.attr('string'),
  address: DS.attr('string')
}).reopenClass({
	FIXTURES: [
		{
			id:1,
			user: 1
		}
	]
});
