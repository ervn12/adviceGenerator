'use strict';

let btn = document.querySelector('.image');

document.querySelector('button').addEventListener('click', getFetch);

function generateRandomID() {
  return Math.floor(Math.random() * 244) + 1;
}

document.querySelector('.image').addEventListener('click', rotate);

function rotate() {
  btn.classList.add('onclick');
}

function getFetch() {
  const url = `https://api.adviceslip.com/advice/${generateRandomID()}`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('h3').innerText = `advice #${data.slip.id}`;
      document.querySelector('p').innerText = `"${data.slip.advice}"`;
      btn.classList.remove('onclick');
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

// On Load function
window.onload = function () {
  const url = `https://api.adviceslip.com/advice`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('h3').innerText = `advice #${data.slip.id}`;
      document.querySelector('p').innerText = `"${data.slip.advice}"`;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
};
