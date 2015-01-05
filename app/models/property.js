import DS from 'ember-data';

var Property = DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  amount: DS.attr('number'),
  bathrooms: DS.attr('number'),
  bedrooms: DS.attr('number'),
  sqft: DS.attr('number'),
  createdAt: DS.attr('date')
});

Property.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Property One',
      slug: 'one',
      amount: '100000',
      bathrooms: '2',
      bedrooms: '3',
      sqft: '1800',
      createdAt: new Date()
    },
    {
      id: 2,
      name: 'Property Two',
      slug: 'two',
      amount: '200000',
      bathrooms: '3',
      bedrooms: '4',
      sqft: '2800',
      createdAt: new Date()
    },
    {
      id: 3,
      name: 'Property Three',
      slug: 'three',
      amount: '300000',
      bathrooms: '4',
      bedrooms: '5',
      sqft: '3800',
      createdAt: new Date()
    }
  ]
});

export default Property;
