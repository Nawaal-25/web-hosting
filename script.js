const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

let bagCount = 0;
const cartStatus = document.querySelector("#cartStatus");
const toast = document.querySelector("#toast");
let toastTimeout;

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    bagCount += 1;
    const productName = button.dataset.product;
    cartStatus.textContent = `${bagCount} item${bagCount === 1 ? "" : "s"} in your bag — looking good!`;
    toast.textContent = `${productName} added to your demo bag`;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("show"), 2400);
  });
});

document.querySelector("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.querySelector("#email");
  const message = document.querySelector("#newsletterMessage");
  message.textContent = `You're on the list! (Demo only — no email was sent.)`;
  emailInput.value = "";
});
