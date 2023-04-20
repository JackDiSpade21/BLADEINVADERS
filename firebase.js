//firebase needs thses to figure out on how we r connecting to database
//configuring the app on the front end to link with our firebase which we created on website
var firebaseConfig = {
    apiKey: "AIzaSyBGO_YJMMtO23swkn9oWjj2iArgkK6l3UQ",
    authDomain: "funkoshooter-42a9f.firebaseapp.com",
    projectId: "funkoshooter-42a9f",
    storageBucket: "funkoshooter-42a9f.appspot.com",
    messagingSenderId: "1079368324387",
    appId: "1:1079368324387:web:263fb7aa5f1e0c155fe896",
    measurementId: "G-J0ZC08KGNS"
};



// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

const analytics = firebase.analytics();

db.collection("finale").orderBy("score", "desc").limit(5)
.get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
                            <td>${data.name}</td>
                            <td>${data.score}</td>
                      </tr>`;
            let table = document.getElementById('myTable')
            table.innerHTML += row
        })
})
.catch(err=>{
    console.log(`Error: ${err}`)
}); 


function display(){
          document.getElementById('table').style.display = "block";
}

window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
