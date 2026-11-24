const bookingForm = document.querySelector("#booking-inquiry");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(bookingForm);
  const details = [
    ["Name", "name"],
    ["Reply email", "email"],
    ["Venue or event", "event"],
    ["City and state", "location"],
    ["Proposed date", "date"],
    ["Event details", "details"],
  ];
  const body = details.map(([label, key]) =>
    label + ": " + (fields.get(key).trim() || "To be confirmed")).join("\r\n\r\n");
  const subject = encodeURIComponent("Booking inquiry for Skunk Draggin’");
  bookingForm.querySelector(".form-status").textContent =
    "Send the draft from your email app, or use the band’s direct email link.";
  window.location.href = "mailto:SkunkDraggin@gmail.com?subject=" + subject + "&body=" + encodeURIComponent(body);
});

bookingForm.querySelector('button[type="submit"]').disabled = false;
