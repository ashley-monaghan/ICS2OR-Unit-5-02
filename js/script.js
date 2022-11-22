// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML-Slider-Example/",
    }
  )
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
  buttonOnChecked = document.getElementById("Show Value").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button").innerHTML = "<p>Value is: On</p>"
  } else {
    document.getElementById("radio-button").innerHTML = "<p>Value is: Off</p>"
  }
}
