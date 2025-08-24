# Simple Quiz

The Simple Quiz is an entertaining, instructive, and easy-to-learn game that uses multiple choice questions to assess and broaden your general knowledge. It is appropriate for kids, teens, and adults of all ages.

Greetings from your new favorite quiz site! In addition to testing your knowledge, our game teaches you in an interesting and dynamic way. Every question is designed to be both educational and amusing, allowing players to have fun while expanding their knowledge.

This quiz is the ideal place to start if you want to push yourself, discover new information, or have a fun game of rivalry with loved ones. Our objective is to transform curiosity into a joyful experience by making learning rewarding and pleasurable.

You can access our platform through <a href="https://maryangelle.github.io/simplequiz/" target="_blank" rel="noopener">General Knowledge Quiz</a>

<div align="center">
  <img src="assets\readme-images\mockupImages.jpg" style="background-color: white" alt="Quiz website mockup on mobile, desktop and Ipad">
</div>

<a id="contents"></a>

## Contents

- [**User Experience UX**](#user-experience-ux)
  - [**User Stories**](#user-stories)
  - [**Wireframes**](#wireframes)
  - [**Design Choices**](#design-choices)
  - [**Typography**](#typography)
  - [**Color Scheme**](#colour-scheme)
- [**Features**](#features)
  - [**Home**](#navigation-menu)
  - [**Quiz**](#quiz)
  - [**Instruction**](#instruction)
  - [**Sound Effects**](#sound-effect)
  - [**Score**](#score)
  - [**Timer**](#timer)
  - [**High Score**](#highest-score)
  - [**Highlight**](#highlight-answer)
- [**Testing**](#testing)
- [**Technology Used**](#technology-used)
- [**Deployment**](#deployment)
- [**Credit**](#credit)
- [**Acknowledgment**](#acknowledgment)

# User Experience UX

The quiz game provides a personalized and interactive experience. Players enter their username, which is displayed throughout the game and on the final score page, giving a sense of ownership and connection.

Each game consists of 10 randomly shuffled questions. The questions are different each time, so players can enjoy a new experience on every play. The game currently has one difficulty level, but the randomized questions ensure variety and replay ability.

An instructions page is provided to help players understand how to play, the expected game duration, and what the game is about.

<div align="center">
  <img src="assets\readme-images\instruction-page.png" style="background-color: blue" alt="Instruction page">
</div>


- ## User Stories

Privacy

- A player’s username is only visible during their session and is not stored or collected, ensuring privacy and security.

- The final score page shows only the current player’s score, without displaying any previous players’ usernames.

Users Demands

- As a user, I want to see instructions on how to play the game.

- As a user, I want to know how long the game will take.

- As a user, I want to see my username displayed throughout the game for a personalized experience.

- As a user, I want the questions to be randomized so that each game feels unique.

- As a user, I want to see my final score at the end of the game.


[Back to top](#contents)

- ## Wireframes

Wireframes and mockups were created to help visualize the layout and user interface (UI) of the quiz website before development. The initial wireframes for the quiz platform were designed using Balsamiq. Below are the early designs for the main sections of the website.


<div align="center">
  <img src="assets\readme-images\wireframes.jpg" style="background-color: blue" alt="Mockup image created in order to build user friendly website">
</div>

- ## Design Choices

- Design Philosophy
The design of the Simple Quiz is centered around simplicity and clarity, using minimal visual elements to ensure that users can focus on the quiz content itself. By reducing distractions and keeping the interface clean, the quiz becomes easy to navigate and intuitive to use, following the principle that less is more.

Layout

- The layout is minimal and straightforward, designed to prioritize content and interactivity:
- Header / Question Area: Displays the current question clearly at the top.
- Answer Buttons: Large, easily clickable buttons that change color based on correctness.
- Responsive Design: The layout adapts seamlessly to mobile, tablet, and desktop screens, ensuring consistent usability on any device.

By keeping the interface uncluttered and feedback immediate, the Simple Quiz encourages engagement and makes learning or testing knowledge an enjoyable and efficient experience.

- ## Typography

- Font Family: Sans-serif for a clean, modern look across all pages.

- Headings: h1 for main titles, large and bold; h2 for sections like instructions or feedback.

- Questions: Bold and responsive for easy readability.

- Answer Buttons: Medium bold text, white on dynamic backgrounds (green for correct, red for incorrect), with hover effects for interactivity.

- Instructions & Feedback: Dark grey text on light backgrounds for clarity.

- Consistency & Accessibility: Typography is uniform across pages with high contrast to ensure readability and accessibility.

- ## Color Scheme

- The color palette of the Simple Quiz is intentionally minimalistic to enhance clarity, usability, and immediate feedback. Each color choice was made to guide the user’s attention naturally while maintaining a clean and readable interface.
- Correct Answer: Green (#4caf50) with white text. This color provides clear positive reinforcement when a user selects the right answer, creating an immediate and intuitive signal of success.
- Incorrect Answer: Red (#e53935) with white text. Red is used to indicate errors, giving instant visual feedback to the user and highlighting the need to try again.
- Neutral Backgrounds: Various shades of blue (#9dc2ed, #c8e3f6) and soft greys (#eceff1) are used for containers, buttons, and status bars. These neutral tones create a calm, uncluttered environment that keeps the user’s focus on the questions and answers.
- Primary Text Colors: Dark grey (#333) is used for most text to ensure readability against lighter backgrounds, while accent colors like blue (#3498db) and orange (#fb8c00) are applied to highlight important elements such as question numbers, scores, and timers.
- Interactive Elements: Buttons and controls have hover states with subtle color shifts (#a0d4f1, #45a049) and scale effects to provide tactile feedback without overwhelming the user. Disabled buttons are faded and non-interactive to signal their state clearly.
- This carefully considered palette ensures that the interface is visually accessible, intuitive, and responsive, allowing users to quickly distinguish between correct and incorrect answers, navigate the quiz, and remain engaged throughout the experience. The use of consistent colors across different elements creates a unified and professional look, enhancing the overall user experience.

<div align="center">
  <img src="assets\readme-images\color-palette.png" style="background-color: multiple-colors" alt="color-palette for Simple quiz">
</div>

[Back to top](#contents)

# Features

Below are the key features of my quiz game project, along with their purpose and value in enhancing the user experience.

- ## Home-page
User Welcome & Username Entry
- Users are welcomed and prompted to enter a username. This personalizes the quiz experience and allows tracking of scores on that device.

Quiz Icon
- A visual icon is included to make the layout visually engaging, create brand recognition, and enhance the overall user experience.

“How to Play” Button
- Provides clear instructions about the game mechanics. Helps users understand rules and expectations before starting, improving usability and accessibility.

“Start Quiz” Button
- A clear call-to-action that allows users to start the quiz seamlessly. The button encourages intuitive interaction and a smooth transition into gameplay.

Button Colors
- Start Quiz: Green, representing freshness and excitement.
- How to Play: Blue, conveying trust and reliability.
- These colors enhance engagement and provide an emotional connection with the game.

<div align="center">
  <img src="assets\readme-images\home-page.png" style="background-color: blue" alt="Simple quiz Home page">
</div>

* ## Quiz-page

Question Display & Answer Choices

Question Presentation
- Questions are displayed one at a time, each with four answer options. Users select the answer they believe is correct.

Answer Feedback
Correct: Yellow
Incorrect: Red

Hover Effects
- Before selecting an answer, hovering over the options visually highlights them to indicate interactivity. After an answer is selected, hover effects are disabled for the remaining options, ensuring users cannot change their choice and reinforcing the feedback.

Educational Purpose
- If a user selects the wrong answer, the correct option is clearly highlighted. This allows users to learn as they play, reinforcing knowledge through immediate feedback while maintaining an engaging and interactive experience.

<div align="center">
  <img src="assets\readme-images\quiz-page.png" style="background-color: blue" alt="Simple quiz page">
</div>

<div align="center">
  <img src="assets\readme-images\true-falseAnswer.png" style="background-color: red and green" alt="True, false answer and next button">
</div>


- ## End Page

The end of the quiz provides a clear and rewarding closure for users, enhancing their overall experience:

Thank You Message
- A friendly message acknowledges the user’s participation, making them feel valued and appreciated.

Final Score Display
- Shows the total number of correct answers out of 10. This motivates users to replay and improve their performance.

Dynamic Feedback Message
Based on the user’s score:

8–10 correct: “Well done!”

5–7 correct: “Good try!”

0–4 correct: “Better luck next time!”
This adds a personalized touch and encourages continued learning.

High Score Display
- Shows the highest score achieved on the device, stored locally. Users can see their progress over time and are encouraged to beat their previous best.

Play Again & Navigation Buttons
- Users can immediately start another round using the Play Again button or return to the home page. This encourages replay ability and keeps users engaged with the quiz.

<div align="center">
  <img src="assets\readme-images\quiz-endPage.png" style="background-color: blue" alt="End of the quiz message">
</div>
  

  * ## Sound Effects

Answer Feedback Sounds:
The quiz game includes distinct audio feedback for correct and incorrect answers:

- Correct answer: Plays a positive sound, giving users a sense of achievement and reinforcing learning.

- Incorrect answer: Plays a gentle alert sound, signaling the mistake and helping users remember the correct choice.
This combination of visual and audio cues enhances engagement and supports an educational experience.

Volume Control (Soundbar)
- Users can adjust the volume of all game sounds using a slider. This allows players to tailor audio levels to their preference or environment. The slider provides real-time control, so changes are heard immediately.

Mute / Unmute Button
- A mute/unmute button is available for users who prefer to play in silence. When muted, the slider sets the volume to 0, and clicking the button again restores the previous volume. This gives players full control over their audio experience.

Accessibility & Inclusivity
- These features make the quiz more accessible for users who may rely on auditory feedback or need to adjust sound due to their surroundings. It ensures that all players, regardless of preference or ability, can enjoy a smooth and engaging experience.

<div align="center">
  <img src="assets\readme-images\sound-bar-mute.png" style="background-color: blue" alt="sound effect and control">
</div>


[Back to top](#contents)

- ## Future Features
  To further enhance the user experience, the following features could be added to the quiz game in the future:

* Multiple Difficulty Levels: Let players choose between beginner, intermediate, or advanced levels for a more tailored challenge.

* Category Selection: Allow players to pick topics they’re interested in, such as science, history, or pop culture.

* Score Tracking & Leaderboards: Players can track their progress, compare scores with friends, and aim for high scores.

* Enhanced Personalization: Remember player preferences locally (without storing personal data) for a more personalized experience across sessions.

* Accessibility Improvements: Further refine labels, ARIA roles, and instructions to make the game fully accessible.

* Performance Optimizations: Improve load times and mobile performance for smoother gameplay on all devices.

[Back to top](#contents)

# Testing

Testing and validation was used to ensure quality and correct coding in order to create a functioning quiz for our users experience.

- Html Validator: The HTML code has been validated using the [W3 Markip Validation Service] (<https://validator.w3.org/#validate_by_input>)
- JavaScript Validator: The JavaScript code has been validated using the [Esprima] (https://esprima.org/demo/validate.html)
- CSS Validator: The CSS code has been validated using the [W3 CSS Validation Service] (<https://jigsaw.w3.org/css-validator/>)

Please refer to [**_here_**](TESTING.md) for more information on testing the Quiz.

[Back to top](#contents)

# Technology Used

Technologies:
- HTML5: structure and content of the website
- CSS: styling and layout
- JavaScript: interactivity and dynamic content

- Design & Planning Tools:
 - Balsamiq: wireframing
 - Gitpod: deploying the website
 - GitHub: hosting and version control
 - VS Code Extensions / Developer Tools:
 - Prettier: automatic code formatting
 - Auto Close Tag: automatically closes HTML tags
 - Live Server: preview your website in the browser with auto-refresh
 - Visual assets / mockups created with Canva
 - Code Spell Checker (VS Code Extension): Used to review and improve spelling and grammar in this README and project documentation. [VS Code Marketplace link](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)


[Back to top](#contents)

# Deployment

### Local Deployment

- Choose an IDE that you work on which will be connected to your Github for further deployment.
- We chose the Github workspace: https://github.com/features/codespaces
- Ensure that your local development environment is properly set up with all necessary dependencies and configurations.
- Consider using a version control system like Git to manage changes locally before pushing them to Github.
- Open terminal on your workspace.
- Use 'git clone' command followed by the URL of the repository in order to deploy the project locally: such as, git clone 'https://github.com/MaryanGelle/simplequiz'

### Github Deployment

<div align="center">
  <img src="assets\readme-images\deployment.jpg" style="background-color: black" alt="Deployment Github page">
</div>

Requirements:

- A valid GitHub account.
- Familiarity with basic Git commands for version control.

1. Sign in to your GitHub account.
2. Go to https://github.com/MaryanGelle.
3. You can create a new repository.
4. On your Workspace use 'git add', 'git commit', and 'git push' to push changes to your GitHub repository.
5. GitHub Pages automatically updates from the master branch by default.
6. Open the Settings page of your repository.
7. Scroll down to the GitHub Pages section.
8. Select the Master Branch as the source and confirm your selection.
9. Confirm your selection.
10. Wait a moment for the changes to propagate. Your website should be live shortly.

[Back to top](#contents)

# Credit

Below you will find credit references to my sources for content, media and feedback.

Fonts

- Lato Font from Google Fonts: https://www.fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap

Design & Planning

- Wireframes and mockups were created using Balsamiq, which helped visualize the layout and user interface (UI) before development began. Wireframe: https://balsamiq.com/
- Visual assets / mockups created with Canva: https://www.canva.com/
- Color palette was selected with the help of Canva: https://www.canva.com/

Sound Effects

- Correct sound effect from Pixabay: https://pixabay.com/sound-effects/search/correct/

- Wrong sound effect from Pixabay: https://pixabay.com/sound-effects/search/incorrect/

Icons

- Icons from Flaticon: https://www.flaticon.com/search?word=knowledge

Code Quality & Formatting Tools

- JSHint: JavaScript validation: https://jshint.com/

- CSS Validator: CSS validation: https://jigsaw.w3.org/css-validator/validator

- HTML Validator: HTML validation: https://validator.w3.org/nu/#textarea

- Prettier: automatic code formatting for better performance: https://prettier.io/
- Code Spell Checker (VS Code Extension): https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker


Performance & Accessibility

- PageSpeed Insights: performance and accessibility testing: https://pagespeed.web.dev/

- WebAIM Contrast Checker: check color contrast for accessibility: https://webaim.org/resources/contrastchecker/

Responsiveness Testing

- Responsive Design Checker: verify responsiveness across devices: https://www.responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fmaryangelle.github.io%2Fsimplequiz%2F&width=1400&height=700

Feedback

- Feedback and guidance were provided by my mentor Precious at Code Institute.

[Back to top](#contents)

# Acknowledgment

This Website quiz game was made by Maryan Gelle (Developer) as a Project 2 JavaScript for my Full Stack programme at Code Institute in 2025.

[Back to top](#contents)
