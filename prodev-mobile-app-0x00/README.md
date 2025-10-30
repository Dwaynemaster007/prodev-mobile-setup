# Creating My First Expo app

The objective of this project was to set up my first Expo app using the Expo router template.
The application is a React Native application built using Typescript.

## Scaffolding Process

- Open the terminal and navigte to where you want your project directory to be
  ```bash
   cd prodev-mobile-app-0x00/
  ```
- Run the following command to initialize the app
  ```bash
     npx create-expo-app@latest .
  ```
- Once installation has finised open the directory on VS code
  ```bash
  code .
  ```
- Start the development server
   ```bash
   npx expo start
   ```
Scan the QR code generated using the Expo Go App on you mobile phone.

## Observation After Reset
When you run:
 ```bash
npm run reset-project
 ```
 ### What happens:

All current code in the app/ directory is archived into app-example/
A fresh, clean app/ directory is created with only:

_layout.tsx
(tabs)/index.tsx


This resets the project to a minimal starter state, ideal for beginning a new task.

This behavior ensures you always start from a known, clean template that is perfect for learning and debugging.
