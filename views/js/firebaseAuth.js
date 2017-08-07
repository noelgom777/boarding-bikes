
function signUpWithEmailAndPassword() {
    var email = document.getElementById("signupemail").value
    var password = document.getElementById("signuppassword").value
    var confirmPassword = document.getElementById("confirm-password").value
    
    if(password == "" || email == "" || confirmPassword == ""){
            alert('Please finish entering sign up information.')
    } else {
        
        if(password.length < 6){
            alert('Password cannot be less than 6 characters.')
        } else {
            
            if (password != confirmPassword) {
                alert('Both passwords must be the same.')
            } else {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then( res => console.log(res))
                .catch(console.error)
                window.location.href = '/user'
                // document.getElementById("signUpWithEmailAndPassword").setAttribute(href, "/user")
            }
        }
    }
}

function logInWithEmailAndPassword() {
    var email = document.getElementById("loginemail").value
    var password = document.getElementById("loginpassword").value
    
    if(password == "" || email == ""){
        alert('Please finish entering login information.')
    } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( res => {
            console.log(res)
            window.location.href = '/user'
        })
        .catch(function(err) {
            window.location.href = '/'
            alert('User doesnt exist yet. Please sign up.')
        })
        
    }
}

function signOut() {
    firebase.auth().signOut()
    .catch(function (err) {
        
     });

}