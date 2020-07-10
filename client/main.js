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
      judul: "si kucing",
      nama: "tom"
    },
    {
      id: 2,
      judul: "kata tambahan",
      nama: "and"
    },
    {
      id: 3,
      judul: "si tikus",
      nama: "jerry"
    },
    {
      id: 4,
      judul: "si beruang",
      nama: "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    }
  ]


  $("#content-card").empty()

  // LOOPING DATA HASIL FETCH
  // el.nama buat masukin konten
  // el.id buat nentuin cerita nya
  // el.judul buat judul

  tesData.forEach(el => {
    $("#content-card").append(`
    <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header" style="text-align: center;">Header</div>
    <div class="card-body">
    <h5 class="card-title">${el.judul}</h5>
    <p class="card-text">${el.nama}</p>
    <input type="textarea" value="${el.nama}" hidden class="${el.id}">
    <button onclick="ngomongKek($('.${el.id}').val())" type="button" value="Play" class="btn btn-warning">Play</button>
    </div>
    </div>
    `)
  })
}

function ngomongKek(text) {
  responsiveVoice.speak(text)
}