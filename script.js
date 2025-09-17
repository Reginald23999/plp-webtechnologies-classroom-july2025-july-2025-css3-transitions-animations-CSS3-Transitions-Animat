let globalMessage = "Hello from Global Scope!";

function multiply(a, b) {
  let product = a * b; // local variable
  return product;
}

function showResult() {
  let result = multiply(4, 5); // reusing the function
  document.getElementById("result").textContent = 
    `${globalMessage} The product is: ${result}`;
}

// ===== Part 3: CSS + JS Integration =====

// Add/remove a class to trigger CSS transitions
const magicBox = document.querySelector(".magic-box");
const animateBtn = document.getElementById("animate-btn");

animateBtn.addEventListener("click", () => {
  magicBox.classList.toggle("active"); // toggle the animation
});