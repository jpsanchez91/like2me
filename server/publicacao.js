Meteor.publish('usuario', function() {
  return Usuario.find();
});

Meteor.publish('pictures', function() {
  return Picture.find();
});

Meteor.publish('curtidas', function() {
  return Curtidas.find();
});

Meteor.publish('Usadas', function() {
  return Usadas.find();
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'services': 1}});
  } else {
    this.ready();
  }
});