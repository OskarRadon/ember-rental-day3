
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
    save3(params) {
      console.log('save 3');
      var newRental = this.store.createRecord('rental', params);
      var city = params.city;
      console.log(params.city);
      city.get('rentals').addObject(newRental);
      newRental.save().then(function() {
        return city.save();
      });
    this.transitionTo('city', params.city);
    }
  }
});
