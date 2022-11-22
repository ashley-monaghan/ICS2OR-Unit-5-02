// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-5-02/sw.js", {
    scope: "/ICS2OR-Unit-5-02/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  let buttonPositiveChecked = document.getElementById("positive").checked

  if (buttonPositiveChecked == true) {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    document.getElementById("radio-button-value").innerHTML =
      "Value is: " + randomNumber
  } else {
    let randomNumber = Math.floor(Math.random() * -6) - 1
    document.getElementById("radio-button-value").innerHTML =
      "Value is: " + randomNumber
  }
}
