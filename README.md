# Pokémon Encounter Site Team Project

Welcome to the coolest Pokémon site! This project uses React and JavaScript to create an engaging application where users can explore locations and encounter random Pokémon. The data is fetched from the PokéApi.This was a group project created by Melani Horváth [Melani Horváth](https://github.com/melanihorvath) and [Gergő Fazekas](https://github.com/gergofazekas92).

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Learnings](#learnings)
- [Future Improvements](#future-improvements)
- [Acknowledgments](#acknowledgments)

## Overview
This project aims to create an interactive Pokémon site where users can:
1. Explore various locations.
2. Encounter random Pokémon.
3. Engage in Pokémon battles.

## Features
### 1. Display Locations
- The site displays the first 20 locations fetched from the PokéApi.

### 2. Pokémon Encounters
- When a user clicks on a location, a random Pokémon encounter begins.
- If the location has no Pokémon, a message is displayed, and the user can retry.

### 3. Pokémon Battles
- Users can choose from a hardcoded list of their own Pokémon to battle.
- The battle system includes turn-based attacks until one Pokémon's HP reaches zero.
- The damage formula uses the Pokémon's stats fetched from the API.


## Installation
To run this project locally, follow these steps:

1. Clone the repository

2. Navigate to the project directory:
    ```sh
    cd client
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage
1. Open the application in your browser.
2. Explore the available locations.
3. Click on a location to encounter a random Pokémon.
4. Choose one of your own Pokémon to battle.
5. Engage in a turn-based battle until one Pokémon's HP reaches zero.

## Learnings
In this project, I learned:
- How to handle API requests and responses using fetch.
- How to manage state in a React application.
- How to implement a simple battle system with turn-based mechanics.
- How to dynamically update the UI based on API data.



## Acknowledgments
- [PokéApi](https://pokeapi.co/) for providing the Pokémon data.
- [React](https://reactjs.org/) for the front-end library.
