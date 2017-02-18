FlowRouter.route( '/', {
  action: function() {
    // Do whatever we need to do when we visit http://app.com/terms.
    BlazeLayout.render( 'homePage' );
    console.log( "Now displaying homePage." );
  },
  name: 'homePage' // Optional route name.
});

FlowRouter.route( '/signUp', {
  action: function() {
    BlazeLayout.render( 'signUp' );
    console.log( "Now displaying signUp." );
  },
  name: 'signUp'
});

FlowRouter.route( '/filmSubmission', {
  action: function() {
    BlazeLayout.render( 'filmSubmission' );
    console.log( "Now displaying filmSubmission." );
  },
  name: 'filmSubmission'
});

FlowRouter.route( '/filmReview', {
  action: function() {
    BlazeLayout.render( 'filmReview' );
    console.log( "Now displaying filmReview." );
  },
  name: 'filmReview'
});

FlowRouter.route( '/filmQueue', {
  action: function() {
    BlazeLayout.render( 'filmQueue' );
    console.log( "Now displaying filmQueue." );
  },
  name: 'filmQueue'
});

FlowRouter.route( '/filmBookingDetails', {
  action: function() {
    BlazeLayout.render( 'filmBookingDetails' );
    console.log( "Now displaying filmBookingDetails." );
  },
  name: 'filmBookingDetails'
});

FlowRouter.route( '/filmBooking', {
  action: function() {
    BlazeLayout.render( 'filmBooking' );
    console.log( "Now displaying filmBooking." );
  },
  name: 'filmBooking'
});

FlowRouter.route( '/adminPageUsers', {
  action: function() {
    BlazeLayout.render( 'adminPageUsers' );
    console.log( "Now displaying adminPageUsers." );
  },
  name: 'adminPageUsers'
});

FlowRouter.route( '/adminPageSubmissionsMgt', {
  action: function() {
    BlazeLayout.render( 'adminPageSubmissionsMgt' );
    console.log( "Now displaying adminPageSubmissionsMgt." );
  },
  name: 'adminPageSubmissionsMgt'
});

FlowRouter.route( '/adminPageSchedule', {
  action: function() {
    BlazeLayout.render( 'adminPageSchedule' );
    console.log( "Now displaying adminPageSchedule." );
  },
  name: 'adminPageSchedule'
});

FlowRouter.route( '/adminPageBookingsMgt', {
  action: function() {
    BlazeLayout.render( 'adminPageBookingsMgt' );
    console.log( "Now displaying adminPageBookingsMgt." );
  },
  name: 'adminPageBookingsMgt'
});