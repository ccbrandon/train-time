var firebaseConfig = {
    apiKey: "AIzaSyAXTtcQopqRucnrPH4Hy1UUWTIiExODvjk",
    authDomain: "christ-training.firebaseapp.com",
    databaseURL: "https://christ-training.firebaseio.com",
    projectId: "christ-training",
    storageBucket: "",
    messagingSenderId: "821612736085",
    appId: "1:821612736085:web:c508d914ecfe657e"

  };
 firebase.initializeApp(firebaseConfig);

 var database = firebase.database();


$("#submit").on("click", function(event){
  event.preventDefault();

      var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var firstTrain = $('#first-train-input').val().trim();
    var trainInfo = {name:trainName, dest: destination, freq:frequency, first:firstTrain};
  database.ref().push(trainInfo)
});

database.ref().on('child_added', function(response){

  console.log(response.val())

var tbody = $("#info-input");
var tr = $("<tr>");
var trainName = $('<td>').text(response.val().name)
var trainDest = $('<td>').text(response.val().dest)
var trainFreq = $('<td>').text(response.val().freq)
var trainFirst = $('<td>').text(response.val().first)
  tr.append(trainName, trainDest, trainFreq, trainFirst);
  tbody.append(tr)

})


