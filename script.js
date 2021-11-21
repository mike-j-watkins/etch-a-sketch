"use strict";

const container = document.querySelector(".container");
const clearBtn = document.querySelector(".btn");

const clearBoard = function () {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => row.remove());
};

const tileGenerator = function () {
  clearBoard();
  let dimension;
  dimension = prompt();
  while (!dimension || dimension > 100 || dimension <= 0) {
    console.log(dimension);
    dimension = prompt("number must be whole number maximum 100");
  }

  for (let i = 0; i < dimension; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < dimension; j++) {
      const tile = document.createElement("div");
      tile.style.cssText = `width: ${800 / dimension}px; height: ${
        800 / dimension
      }px; border: solid black 1px;`;
      tile.classList.add("tile");
      row.appendChild(tile);
    }
    container.appendChild(row);
  }
};

container.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("tile")) return;
  e.target.style.backgroundColor = "red";
});

clearBtn.addEventListener("click", tileGenerator);
