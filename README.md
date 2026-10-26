# Scoreboard

I built this simple scoreboard with HTML, CSS, and JavaScript
to practice using functions and updating a webpage.

It keeps track of scores for a home team and a guest team.

## What it does

- Add 1, 2, or 3 points to either team.
- Reset each team's score separately.
- Show the new score each time a button is clicked.

Refreshing the page resets both scores to zero.

## How I built it

Each team has a variable that holds its score. The buttons
call separate functions to add points and update the score
on the page.

The reset buttons set that team's score back to zero
without changing the other team's score.

I used CSS to style the scoreboard, buttons, and number display.

## How to run it

There are three ways to open the project.

### Open it in your browser

Download the project and open index.html in your browser.

### Use Live Server

Open the project folder in VS Code. If you have the
Live Server extension installed, right-click index.html
and choose "Open with Live Server."

### Use Vite

Vite runs a local development server. You’ll need
Node.js and npm installed to use it.

Open a terminal in the project folder and run:

bash
npm install


Then start the server:

bash
npm start


Open the Local link that appears in the terminal.
Press Ctrl + C in the terminal when you want to stop it.

To create a production build, run:

bash
npm run build


Vite puts the built files in a folder called dist.
To preview that build locally, run:

bash
npm run preview


Open the Local link shown in the terminal.

## What was practiced

- Writing and calling JavaScript functions.
- Keeping track of scores with variables.
- Making buttons update the page.
- Styling a page with CSS.
- Installing dependencies and running a project with Vite.