$( document ).ready(function() {
    // if (localStorage.token) {
    //     afterLogin()
    // } else {
    //     beforeLogin()
    // }
});

function afterLogin () {
    $("#register-form").hide()
    $("#login-form").hide()
    $("#logout").show()

    $("#content-card").show()
    $("#form-add").hide()
    $("#add-button").show()
    
    $('#add-error').hide()

    getStorify()
}

function beforeLogin () {
    $("#register-form").hide()
    $("#login-form").show()
    $("#logout").hide()

    $("#content-card").hide()
    $("#form-add").hide()
    $("#add-button").hide()
    
    $('#add-error').hide()
}

// Google-OAuth-Part
function processLogout(event){
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
        data : {id_token}
    })
    .done( todos => {
        localStorage.token = todos.access_token
    })
    .fail ( err => {
        console.log(err)
    })
    .always ( () => {
    })
  }

