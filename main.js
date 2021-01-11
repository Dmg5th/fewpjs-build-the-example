// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector("#modal")
const heartsArray = document.querySelectorAll(".like-glyph")


for (const heart of heartsArray) {
  heart.addEventListener("click", (e) => {
    mimicServerCall()
    .then(data => {
      if (heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.className = "activated-heart"
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.className = "like-glyph"
      }
    })
    .catch(error => {
      modal.hidden = false
      const modalMessage = document.querySelector("#modal-message")
      modalMessage.innerText = error
      setInterval(() => {
        modal.hidden = true
      }, 5000)
    })
  })
}












// for (const heart of heartsArray ) {
//   heart.addEventListener("click", (e) => {
//     mimicServerCall()
//     .then(data => {
//       if (heart.innerHTML === EMPTY_HEART) {
//         heart.innerHTML = FULL_HEART
//         heart.className = "activated-heart"
//       } else{
//         heart.innerHTML = EMPTY_HEART
//         heart.className = "like-glyph"
//       }
//     })
//   })
// }












//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
