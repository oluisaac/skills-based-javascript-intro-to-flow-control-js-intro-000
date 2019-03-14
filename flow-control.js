'use strict'

var basicTeenager = "age";
var teenager      = "age";
var ageChecker    = "age";
var ternaryTeenager = "age";

function basicTeenager(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!";
  }
}

function teenager(age){
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!");
  } else {
    return ("You are not a teenager!");
  }

function ageChecker(age){
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!");
  } else if (age < 13) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }

function ternaryTeenager(age){
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"

}

}

function switchAge(age){
  switch (age) {
    case 14:
          return "you're a teenager"
      case 15:
          return "you're still a teenager"
      default:
          return "you're probably to old to be asking if you're a teenager"
   }

}
