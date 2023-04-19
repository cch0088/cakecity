# Cake City
Personalized Cake Ordering App

# App Design Features
This app features a few design considerations:
- The app is usable on both a smart phone and a desktop because it implements responsive design
- The cake menu screen has a filter to narrow the choices of cakes
- The recent orders page will show orders specific to the user that is logged in
- The app menu system is meant to be quick and intuitive to use without needing a hamburger menu
- The back end uses a hashed password system to securely store account passwords
- The app was designed to work with either a static JSON DB file or a dynamic web framework, in this case Flask
- The server side seed file will use the static db.json file to seed the back end database

# Toggle site between states
Changing the staticSite state from false to true in App.js will toggle the size to run from a framework instead of a static file.

# Future possible upgrades
- Inclusion of administrator portal to check all orders
- Ability to log in with e-mail or username instead of only username
- Dynamically update pictures depending on options selected
- Payment screen for selecting payment type
