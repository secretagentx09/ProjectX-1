console.log("DEBUG: ran register-apis.js");

// TODO: properly separate out methods, use "export" syntax. look at: https://github.com/meteor/todos/blob/master/imports/api/lists/lists.js
console.log("DEBUG: next log should be: users/methods.js");
import '../../api/filmManagement/users/methods.js';
console.log("DEBUG: next log should be: users/publications.js");
import '../../api/filmManagement/users/server/publications.js';
// TODO: do these additional files have a place in some other files? probably...
import '../../api/filmManagement/users/server/create-user.js';
import '../../api/filmManagement/users/server/send-verification-link.js';

// TODO: these, too:
console.log("DEBUG: next log should be: comments/methods.js");
import '../../api/filmManagement/comments/methods.js';
console.log("DEBUG: next log should be: comments/publications.js");
import '../../api/filmManagement/comments/server/publications.js';

import '../../api/filmManagement/films/methods.js';
import '../../api/filmManagement/films/server/publications.js';

import '../../api/filmManagement/privateMessages/methods.js';
import '../../api/filmManagement/privateMessages/server/publications.js';
