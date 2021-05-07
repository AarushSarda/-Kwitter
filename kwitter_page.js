//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC0A-FdLOGcYeb4Ok1-W6dXPgf1FBVp6i0",
      authDomain: "kwitter-9aa3b.firebaseapp.com",
      databaseURL: "https://kwitter-9aa3b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9aa3b",
      storageBucket: "kwitter-9aa3b.appspot.com",
      messagingSenderId: "691459726427",
      appId: "1:691459726427:web:eafeb6db0b1e980a8bb37e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name ,
            message : msg ,
            Like : 0
 });
 document.getElementById("msg").value = "" ;
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
