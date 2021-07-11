var firebaseConfig = {

    apiKey: "AIzaSyCXyLelGhJD2F4IpUXouJp8GZeq8rZKR0U",

    authDomain: "love-calc-abin.firebaseapp.com",

    databaseURL: "https://love-calc-abin-default-rtdb.firebaseio.com",

    projectId: "love-calc-abin",

    storageBucket: "love-calc-abin.appspot.com",

    messagingSenderId: "530983451208",

    appId: "1:530983451208:web:1696563e4e8145a171367d"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

window.onload = get()

function get(){

var ref = firebase.database().ref("users");

ref.once("value")

  .then(function(snapshot) {

    let number = snapshot.numChildren();

    console.log(number)    

    document.getElementById("numChild").innerHTML=number;

    

            

    for (let i = 1; i < number+1; i++) {

 firebase.database().ref("users/"+i).on('value', function(snapshot){ 

 var data = snapshot.val() 

var dp = data.UName;

console.log(i)

var dn= data.LName;

 console.log(i)

//var table = document.createElement("table")

var tr = document.createElement("tr"); 

var td1 = document.createElement("td"); 

var td2 = document.createElement("td"); 

            var text1 =  

                document.createTextNode(dp); 

                var text2 =  

                document.createTextNode(dn); 

 

      //  table.appendChild(tr);

 

const element = document.getElementById("table");

            tr.appendChild(td1); 

            tr.appendChild(td2);

        

            td1.appendChild(text1)

            td2.appendChild(text2)

            

element.appendChild(tr);

});

}

});

}

