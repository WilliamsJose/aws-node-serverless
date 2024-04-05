"use strict";

const algumArray = [];

module.exports.getCustomers = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  const localDateTime = [
    new Date().toDateString(),
    new Date().toLocaleTimeString(),
  ].join(" ");

  algumArray.push(localDateTime);

  return algumArray;
};
