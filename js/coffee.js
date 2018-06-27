"use strict";

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    // console.log(e);
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (e === 'all') {
        coffees.forEach(function(coffee) {
            filteredCoffees.push(coffee);
        })
    } else coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

// create a new function to actually search through the coffees
function searchCoffees(value) {
    var filteredCoffees = [];
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            // console.log(coffees[i].name);
            filteredCoffees.push(coffees[i]);
        }
    }
    div.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    var coffee = {
        id: '',
        name: '',
        roast: ''
    };
    coffee.id = coffees.length + 1;
    coffee.name = document.getElementById('add-coffee-name').value;
    coffee.roast = document.getElementById('add-coffee-roast-select').value;
    coffees.push(coffee);
    // coffees.splice(coffee[i].name.value(coffee.roast), 0, coffee);
    arrangeCoffees();
    div.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

function arrangeCoffees() {
    coffees.sort(function(a, b){return a.roast - b.roast});
    coffees.reverse();
}

coffees.reverse();
var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#add-coffee');
var roastSelection = document.querySelector('#roast-selection');

div.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);