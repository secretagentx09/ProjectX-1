import { Meteor } from 'meteor/meteor'; // Disable these if not needed
import { Template } from 'meteor/templating';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// TODO: Need to import Bert?

// Load template itself
import './profilePage.html';
// Load templates used inside this template
import '../components/filmPlayer.js';
import '../components/profilePagePrivateMessageReply.js';
import '../components/footer.js'; // TODO remove this once template-ized
import '../../api/filmManagement/privateMessages/privateMessages.js';
import '../../api/filmManagement/users/users.js';
import '../../api/filmManagement/films/films.js';

Template.profilePage.onCreated(function() {
    let self = this;
    self.autorun(() => {
        self.subscribe('privateMessages.all');
        self.subscribe('users.all');
        self.subscribe('files.films.all');
    });
});
Template.profilePage.helpers({
    privateMessageConversations: function() {
        if (Meteor.userId()) {
            return PrivateMessages.find({ to: Meteor.userId() }, { sort: { "date": -1 } });
        } else {
            return undefined;
        }
    },
    formatTime: function(myTime) {
        const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const time = new Date(myTime);
        return weekday[time.getDay()] + ' ' + month[time.getMonth()] + ' ' + time.getDate() + ', ' + time.getFullYear() + ' ' + time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    },
    conversationDetails: function(userId) {
        return Users.findOne({ _id: userId });
    },
    optionsGenres: function() {
        let options = [
            { value: "Action/Adventure", selected: "" },
            { value: "Comedy", selected: "" },
            { value: "Coming of Age", selected: "" },
            { value: "Culinary", selected: "" },
            { value: "Dark Comedy", selected: "" },
            { value: "Documentary", selected: "" },
            { value: "Drama", selected: "" },
            { value: "Family Film", selected: "" },
            { value: "Fantasy", selected: "" },
            { value: "Galway is Film 2017", selected: "" },
            { value: "Horror", selected: "" },
            { value: "Human Rights", selected: "" },
            { value: "New Irish Cinema", selected: "" },
            { value: "Period Piece", selected: "" },
            { value: "Romance", selected: "" },
            { value: "SciFi", selected: "" },
            { value: "Silent Film", selected: "" },
            { value: "Thriller/Suspense", selected: "" },
            { value: "World Cinema", selected: "" },
            { value: "Women in Film", selected: "" },
        ];
        const self = this;
        options.forEach(function(item) {
            if (item.value == self.genre) {
                item.selected = "selected";
            }
        });
        return options;
    },
    optionsLength: function() {
        let options = [
            { value: "short", text: "Short Film", selected: "" },
            { value: "feature", text: "Feature Film", selected: "" },
        ];
        const self = this;
        options.forEach(function(item) {
            if (item.value == self.length) {
                item.selected = "selected";
            }
        });
        return options;
    },
    thumbRef: function() {
        if (this.fileId) {
            let film = Films.collection.findOne({ _id: this.fileId});
            return film;
        }
    }
});
Template.profilePage.events({
    'submit #filmEditForm': function(e) {
        e.preventDefault();

        let frm = e.target;
        let filmData = {
            title: frm.filmTitle.value,
            genre: frm.filmGenre.value,
            length: frm.filmLength.value,
            description: frm.filmDescription.value,
        };

        Meteor.call('filmUpdate', filmData, function(error, result) {
            if (error) {
                Bert.alert("Film update failed: " + error.reason, 'danger', 'growl-top-right');
            } else {
                Bert.alert("Film has been updated", 'success', 'growl-top-right');
            }
        });
    }
});
