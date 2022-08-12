"use strict";

// CONSTANT DECLARATIONS

// Destination page constants
const destinationButton = document.querySelectorAll(".destination_list-item");
const destinationButtonContainer = document.querySelector(".destination_list");

const seclectedDestination = document.querySelectorAll(".selected_destination");

const destinationContent = document.querySelectorAll(".destination_content");

const destinationStats = document.querySelectorAll(".destination_stats");

const destinationImage = document.querySelectorAll(".destination_image");

if (destinationButtonContainer) {
  // DESTINATION PAGE EVENT LISTENER
  document
    .querySelector(".destination_list")
    .addEventListener("click", function (e) {
      const clicked = e.target.closest(".destination_list-item");
      // Guard clause
      if (!clicked) return;

      // Remove all active classes
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

      // Activate active destination
      clicked.classList.add("destination_list--active");

      // Adding active class with respect to data destination number
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
}

// Crew page constants
const crewButton = document.querySelectorAll(".crew_button");

const crewButtonContainer = document.querySelector(".crew_buttons");

const crewPosition = document.querySelectorAll(".crew_position");

const crewName = document.querySelectorAll(".crew_name");

const crewBio = document.querySelectorAll(".crew_bio");

const crewImage = document.querySelectorAll(".crew_image");

if (crewButtonContainer) {
  // CREW PAGE EVENT LISTENER
  crewButtonContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".crew_button");

    // Guard clause
    if (!clicked) return;

    // Remove all active classes
    crewButton.forEach((e) => e.classList.remove("crew_button--active"));

    crewPosition.forEach((e) => e.classList.remove("crew_position--active"));

    crewName.forEach((e) => e.classList.remove("crew_name--active"));

    crewBio.forEach((e) => e.classList.remove("crew_bio--active"));

    crewImage.forEach((e) => e.classList.remove("crew_image--active"));

    // Activate active crew
    clicked.classList.add("crew_button--active");

    // Adding active class with respect to data destination number
    document
      .querySelector(`.crew_position--${clicked.dataset.crew}`)
      .classList.add("crew_position--active");
    document
      .querySelector(`.crew_name--${clicked.dataset.crew}`)
      .classList.add("crew_name--active");
    document
      .querySelector(`.crew_bio--${clicked.dataset.crew}`)
      .classList.add("crew_bio--active");
    document
      .querySelector(`.crew_image--${clicked.dataset.crew}`)
      .classList.add("crew_image--active");
  });
}

// Technology page constants
const techButton = document.querySelectorAll(".technology_list");

const techButtonContainer = document.querySelector(".technology_lists");

const techHeader = document.querySelectorAll(".technology_lead-header");

const techInfo = document.querySelectorAll(".technology_info");

const techImage = document.querySelectorAll(".technology_image");

if (techButtonContainer) {
  //TECHNOLOGY PAGE EVENT LISTENER
  techButtonContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".technology_list");
    // Guard clause
    if (!clicked) return;

    // Remove all active classes
    techButton.forEach((e) => e.classList.remove("technology_list--active"));

    techHeader.forEach((e) =>
      e.classList.remove("technology_lead-header--active")
    );
    techInfo.forEach((e) => e.classList.remove("technology_info--active"));

    techImage.forEach((e) => e.classList.remove("technology_image--active"));
    // Activate active crew
    clicked.classList.add("technology_list--active");

    // Adding active class with respect to data destination number
    document
      .querySelector(`.technology_lead-header--${clicked.dataset.tech}`)
      .classList.add("technology_lead-header--active");
    document
      .querySelector(`.technology_info--${clicked.dataset.tech}`)
      .classList.add("technology_info--active");
    document
      .querySelector(`.technology_image--${clicked.dataset.tech}`)
      .classList.add("technology_image--active");
  });
}
