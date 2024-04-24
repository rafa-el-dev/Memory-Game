# UCL Memory Game

[View live project here on GitHub](https://rafa-el-dev.github.io/Memory-Game/)

Welcome to the UEFA Champions League Memory Game! This is a simple web-based memory game where you can test your memory skills by matching football team logos.

<details open>
<summary> Login Home Page Screenshot</summary>

![Captura de tela de 2024-04-24 02-38-12](https://github.com/rafa-el-dev/Memory-Game/assets/109827006/27f25e31-b366-4211-98bf-4611a2cfc98c)

</details>

<details open>
<summary>In Game Screenshot</summary>
   
![Captura de tela de 2024-04-24 02-44-46](https://github.com/rafa-el-dev/Memory-Game/assets/109827006/dd496c0b-d5c8-411e-bb95-a398e953e66a)

</details>

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [UX/UI Design](#uxui-design)
- [Colors](#colors)
- [Responsiveness and Performance](#responsiveness-and-performance)
- [Suggestions](#suggestions)
- [License](#license)

## Description

The UCL Memory Game is a single-page web application built with HTML, CSS, and JavaScript. It utilizes modern web technologies and follows best practices for web development to create an engaging and interactive gaming experience. The game challenges players to match pairs of football team logos within a specified time limit and move count.

## Features

- **User-Friendly Interface:** The game features an intuitive user interface with clear instructions and visual cues to guide players through the gameplay.

- **Responsive Design:** Utilizing CSS media queries and flexible layout techniques, the game adapts seamlessly to different screen sizes and orientations, providing a consistent experience across devices.

- **Username Input with Local Storage:** Players can enter their username before starting the game. The username is stored locally using the browser's `localStorage` API, allowing for personalized gameplay experiences and persistent user data.

- **Dynamic Timer and Move Counter:** The game includes a dynamic timer that tracks the elapsed time from the start of the game and a move counter that keeps track of the number of attempts made by the player to match pairs of logos.

- **CSS Transitions and Animations:** Smooth transitions and animations enhance the visual appeal of the game, providing feedback to the player's interactions and adding to the overall gaming experience.

## Installation

To install and run the UCL Memory Game locally, follow these steps:

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/rafa-el-dev/Memory-Game

2. **Navigate to the project directory:**
   
   ```bash
   cd ucl-memory-game

3. **Open the index.html file in your web browser.**


## Usage

1. **Enter Your Username:**
   
   Enter your username in the provided input field before starting the game. This username will be displayed during gameplay and stored for future sessions.

2. **Start the Game:**
   
   Click the "Play" button to start the game. Once started, the timer will begin counting, and you can start matching pairs of football team logos.

3. **Match Pairs:**
   
   Click on the cards to reveal their logos. Try to match pairs of logos by remembering their positions. The move counter will increase with each move.

4. **Complete the Game:**
   
   Continue matching pairs until all logos are revealed. Try to complete the game with the fewest moves and in the shortest time possible.

5. **Enjoy the Game!**

## Technologies Used

- **HTML5:** The structure and content of the game are defined using HTML5, the latest version of the Hypertext Markup Language. The HTML code is validated using the W3C Markup Validation Service to ensure compliance with HTML standards.

- **CSS3:** Cascading Style Sheets (CSS3) are used to style and layout the game elements, including fonts, colors, backgrounds, and animations. The CSS code is validated using the W3C CSS Validation Service to ensure compliance with CSS standards.

- **JavaScript (ES6+):** The game logic and interactivity are implemented using JavaScript, including event handling, DOM manipulation, and game mechanics. The JavaScript code is validated and checked for potential errors using JSHint, a static code analysis tool for JavaScript.

## UX/UI Design

The user experience (UX) and user interface (UI) of the UCL Memory Game have been carefully designed to provide an enjoyable and immersive gaming experience. Key aspects of the UX/UI design include:

- **Intuitive Layout:** The game interface is designed to be intuitive and easy to navigate, with clear visual cues and interactive elements that guide the player through the gameplay process.

- **Visual Feedback:** The game provides visual feedback to the player's actions, such as card flipping animations and color changes, to enhance engagement and reinforce gameplay mechanics.

- **Responsive Design:** The game is designed to be responsive across a wide range of devices and screen sizes, ensuring a consistent experience for players regardless of their chosen platform.

- **Typography and Color Scheme:** Thoughtful selection of typography and color scheme enhances the aesthetic appeal of the game while maintaining readability and accessibility for all players.

## Colors

### Color Scheme
A color scheme consisting primarily of blue and purple tones is used in both code snippets. These colors, along with white, black, and soft blue accents, evoke a sense of sophistication and professionalism while maintaining readability and visual appeal. The layout is in line with the UEFA Champions League theme, providing an immersive and enjoyable experience for users.

![Captura de tela de 2024-04-24 02-22-59](https://github.com/rafa-el-dev/Memory-Game/assets/109827006/d9de6946-fa3c-457b-b4d2-94b434bd725c)

## Responsiveness and Performance

- **Responsive Design:** The game is optimized for responsiveness across various devices and screen sizes, ensuring a consistent and enjoyable experience for players accessing the game from desktops, laptops, tablets, and smartphones.

- **Performance Optimization:** The game code is optimized for performance to ensure smooth gameplay and fast loading times. Techniques such as lazy loading of assets, minimizing render-blocking resources, and efficient DOM manipulation are employed to enhance performance.

  Furthermore, to further improve the game's responsiveness and performance, the following tools and test used:

  ## Testing  

    ### **Initial testing plan**

    This site is designed to provide an accessible and intuitive experience on any device. The responsive layout ensures fluid and readable navigation on screens of all sizes. With an intuitive menu and clear organization, users can find the 
    information they need quickly and with just a few clicks.

    ### **Testing**    

    I perform rigorous testing throughout site development, using developer tools in Chrome and on real devices. I tested on several popular browsers, including:
    - Chrome  
    - Firefox  
    - Edge  
    - Safari  


    ### **Lighthouse scores via Chrome Developer Tools**   
  
    For Desktop   
    <details open>
    <summary>Lighthouse audit for Index page</summary>  

    ![Captura de tela de 2024-04-24 00-31-01](https://github.com/rafa-el-dev/Memory-Game/assets/109827006/09b77d94-d1d3-4ad4-9206-04f3a68ee1fb)

    ![Captura de tela de 2024-04-24 00-31-55](https://github.com/rafa-el-dev/Memory-Game/assets/109827006/26ba0ebf-fbda-4cef-99c2-778b14f1e910)

    </details> 

    <br>
  
    For Mobile   
    <details >
    <summary>Lighthouse audit for Index page - Mobile</summary>
   
    ![Captura de tela de 2024-04-24 00-30-21](https://github.com/rafa-el-dev/Memory-Game/assets/109827006/50c28ff3-3318-4c5d-b916-5ac06b5371c4)

    ![Captura de tela de 2024-04-24 00-25-43](https://github.com/rafa-el-dev/Memory-Game/assets/109827006/3543a504-f27f-4cb0-8315-eccd89c20d8f)

    </details> 

## Validations

- **HTML Validation:** The HTML code is validated using the W3C Markup Validation Service to ensure compliance with HTML standards and best practices.

- **CSS Validation:** The CSS code is validated using the W3C CSS Validation Service to ensure compliance with CSS standards and best practices.

- **JavaScript Validation:** The JavaScript code is validated and checked for potential errors using JSHint, a static code analysis tool for JavaScript.

- **Tiny PNG:** To compress images and reduce their size, the Tiny PNG tool is used, which helps to improve the game's loading speed.

- **Google Dev Tools:** Google Developer Tools are used to debug and test game responsiveness across different devices and screen sizes, ensuring a consistent experience for all users.

- **Google Lighthouse:** Google Lighthouse is used to audit your website, providing insights and suggestions for improving performance, accessibility, SEO best practices, and more.

## Suggestions

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or create a pull request. For major changes, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the MIT License.
