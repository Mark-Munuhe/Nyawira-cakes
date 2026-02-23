function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

function submitForm() {
  const inputs = document.querySelectorAll(
    "#formContent input[required], #formContent select[required]",
  );
  let valid = true;

  inputs.forEach(function (inp) {
    if (!inp.value) {
      inp.style.borderColor = "red";
      valid = false;
    } else {
      inp.style.borderColor = "";
    }
  });

  if (!valid) {
    alert("Please fill in all requiered fields.");
    return;
  }
  const name = document.getElementById("FullName").value;
  const phone = document.getElementById("phoneNumber").value;
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value || "Not specified";
  const cakeType = document.getElementById("type").value;
  const flavour = document.getElementById("flavours").value || "Not specified";
  const notes = document.getElementById("notes").value || "None";
  const delivery = document.getElementById("delivery").value;

  const msg = `Hello, I would like to place an order.
    Name: ${name}
Phone: ${phone}
Event Date: ${date}
Number of Guests: ${guests}
Cake Type: ${cakeType}
Flavour: ${flavour}
Pickup or Delivery: ${delivery}
Additional Notes: ${notes}`;

  const encoded = encodeURIComponent(msg);
  const waURL = "https://wa.me/254738605077?text=" + encoded;

  document.getElementById("formContent").style.display = "none";
  document.getElementById("successMsg").style.display = "block";

  window.open(waURL, "_blank");
}
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add("visible");
        }, i * 90);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);

reveals.forEach(function (el) {
  observer.observe(el);
});
