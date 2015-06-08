 var api = {

   getRepors(username) {
     username = username.toLowerCase().trim();
     var url = `https://api.github.com/users/${username}/repos`;
   }


 };

 module.exports = api;
