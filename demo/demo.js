Users = new Meteor.Collection('users');

if(Meteor.isClient){
    Template.inc.events({
	'click h1': function(){
	    var user = {name: 'test'};
  	    Users.insert(user);
	}
    });

    Template.inc.count = function(){
	return Users.find().count();
    };
}
