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