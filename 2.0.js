var followers = 563;
var followcountele = document.getElementById("followcount");
if(followers >= 600) {
    followcountele.innerHTML = "Please wait for a update";
} else {
    followcountele.innerHTML = (followers + "/600");
}
function myLoop() { 
    setTimeout(function() { 
        if(followers >= 600) {
            followcountele.innerHTML = "Please wait for a update";
        } else {
            followcountele.innerHTML = (followers + "/600");
        }
        console.log("FOLLOW COUNT UPDATED");
        myLoop();
    }, 5000);
  };
myLoop();