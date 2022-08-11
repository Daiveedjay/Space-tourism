"use strict";

const destinationButton = document.querySelectorAll(".destination_list-item");

const destinationButtonContainer = document.querySelector(".destination_list");

const seclectedDestination = document.querySelectorAll(".selected_destination");

const destinationContent = document.querySelectorAll(".destination_content");

const destinationStats = document.querySelectorAll(".destination_stats");

const destinationImage = document.querySelectorAll(".destination_image");

destinationButtonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".destination_list-item");
  // Guard clause
  if (!clicked) return;

  // Remove active classes
  destinationButton.forEach((e) =>
    e.classList.remove("destination_list--active")
  );
  destinationContent.forEach((e) =>
    e.classList.remove("destination_content--active")
  );
  seclectedDestination.forEach((e) =>
    e.classList.remove("destination--active")
  );

  destinationStats.forEach((e) =>
    e.classList.remove("destination_stats--active")
  );

  destinationImage.forEach((e) =>
    e.classList.remove("destination_image--active")
  );

  // Activate tab
  clicked.classList.add("destination_list--active");

  document
    .querySelector(`.destination--${clicked.dataset.destination}`)
    .classList.add("destination--active");
  document
    .querySelector(`.destination_content--${clicked.dataset.destination}`)
    .classList.add("destination_content--active");
  document
    .querySelector(`.destination_stats--${clicked.dataset.destination}`)
    .classList.add("destination_stats--active");
  document
    .querySelector(`.destination_image--${clicked.dataset.destination}`)
    .classList.add("destination_image--active");
});
