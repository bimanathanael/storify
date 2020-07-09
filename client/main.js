$(document).ready(function () {
  if (!localStorage.token) {
    getStorify()
    afterLogin()
  } else {
    beforeLogin()
  }
});

function afterLogin() {
  $("#register-form").hide()
  $("#login-form").hide()
  $("#logout").show()

  $("#content-card").show()
  $("#form-add").hide()
  $("#add-button").show()

  $('#add-error').hide()

  getStorify()
}

function beforeLogin() {
  $("#register-form").hide()
  $("#login-form").show()
  $("#logout").hide()

  $("#content-card").hide()
  $("#form-add").hide()
  $("#add-button").hide()

  $('#add-error').hide()
}

// Google-OAuth-Part
function processLogout(event) {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/googleSignin",
    data: { id_token }
  })
    .done(todos => {
      localStorage.token = todos.access_token
    })
    .fail(err => {
      console.log(err)
    })
    .always(() => {
    })
}

// Text to speech
// function playSound() {
//   var text = document.getElementById("text-input").value;
//   responsiveVoice.speak(text);
// }

function getStorify() {
  let tesInput = "Some quick example text to build on the card title and make up the bulk of the card's content."

  let tesData = [
    {
      id: 1,
      nama: "tom"
    },
    {
      id: 2,
      nama: "and"
    },
    {
      id: 3,
      nama: "jerry"
    }
  ]

  $("#content-card").empty()

  // LOOPING DATA HASIL FETCH 

  tesData.forEach(el => {
    $("#content-card").append(`
    <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header" style="text-align: center;">Header</div>
    <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">${el.nama}</p>
    <input type="text" value=${el.nama} hidden class="${el.id}">
    <button onclick="ngomongKek($('.${el.id}').val())" type="button" value="Play">Play</button>
    </div>
    </div>
    `)
  })
}

function ngomongKek(text) {
  responsiveVoice.speak(text)
}