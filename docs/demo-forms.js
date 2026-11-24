for (const form of document.querySelectorAll("[data-demo-form]")) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.querySelector(".form-status").textContent =
      "Preview complete. Nothing was sent or uploaded.";
  });
  form.querySelector('button[type="submit"]').disabled = false;
}
