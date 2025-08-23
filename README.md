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
  - [**Design Choises**](#design-choices)
  - [**Typography**](#typography)
  - [**Colour Scheme**](#colour-scheme)
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
- [**Aknowledgment**](#aknowledgment)

# User Experience UX

The quiz game provides a personalized and interactive experience. Players enter their username, which is displayed throughout the game and on the final score page, giving a sense of ownership and connection.

Each game consists of 10 randomly shuffled questions. The questions are different each time, so players can enjoy a new experience on every playthrough. The game currently has one difficulty level, but the randomized questions ensure variety and replayability.

An instructions page is provided to help players understand how to play, the expected game duration, and what the game is about.

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

- ## Design Choises

- Design Philosophy
The design of the Simple Quiz is centered around simplicity and clarity, using minimal visual elements to ensure that users can focus on the quiz content itself. By reducing distractions and keeping the interface clean, the quiz becomes easy to navigate and intuitive to use, following the principle that less is more.

Layout

- The layout is minimal and straightforward, designed to prioritize content and interactivity:
- Header / Question Area: Displays the current question clearly at the top.
- Answer Buttons: Large, easily clickable buttons that change color based on correctness.
- Responsive Design: The layout adapts seamlessly to mobile, tablet, and desktop screens, ensuring consistent usability on any device.

By keeping the interface uncluttered and feedback immediate, the Simple Quiz encourages engagement and makes learning or testing knowledge an enjoyable and efficient experience.

- ## Typography

- ## Colour Scheme

- The color palette of the Simple Quiz is intentionally minimalistic to enhance clarity, usability, and immediate feedback. Each color choice was made to guide the user’s attention naturally while maintaining a clean and readable interface.
- Correct Answer: Green (#4caf50) with white text. This color provides clear positive reinforcement when a user selects the right answer, creating an immediate and intuitive signal of success.
- Incorrect Answer: Red (#e53935) with white text. Red is used to indicate errors, giving instant visual feedback to the user and highlighting the need to try again.
- Neutral Backgrounds: Various shades of blue (#9dc2ed, #c8e3f6) and soft greys (#eceff1) are used for containers, buttons, and status bars. These neutral tones create a calm, uncluttered environment that keeps the user’s focus on the questions and answers.
- Primary Text Colors: Dark grey (#333) is used for most text to ensure readability against lighter backgrounds, while accent colors like blue (#3498db) and orange (#fb8c00) are applied to highlight important elements such as question numbers, scores, and timers.
- Interactive Elements: Buttons and controls have hover states with subtle color shifts (#a0d4f1, #45a049) and scale effects to provide tactile feedback without overwhelming the user. Disabled buttons are faded and non-interactive to signal their state clearly.
- This carefully considered palette ensures that the interface is visually accessible, intuitive, and responsive, allowing users to quickly distinguish between correct and incorrect answers, navigate the quiz, and remain engaged throughout the experience. The use of consistent colors across different elements creates a unified and professional look, enhancing the overall user experience.

<div align="center">
  <img src="assets\readme-images\color-palatte.png" style="background-color: multiple-colors" alt="color-palatte for Simple quiz">
</div>

[Back to top](#contents)

# Features

Below you will find the features used in my quiz game project. The value the features in my project and why its useful function for the quiz game.

## Existing Features

- ## Home-page
  - Welcoming users to the page and request to choose a username for the game.
  - An icon for the quiz. To enhance user experience through visual appeal in order to add visual interest. It also serves the purpose to create a layout that is visually enganging. It creates a brand and recognition to lift up General Knowledge Quiz.
  - Username Entry is required upon the players to set a unique username in order to personlise the game experience.
  - A button "how to play" that instructs the user with information about the game and how to play. It allows a better user experience sinze the players gain an understanding for the game mechanics. The users also get familiar with the rules and expectations.
  - A start button "start Quiz" creates a benefit to the users as a seamless invitation to click the button for an easy smooth transition to the game. It creates intuitive user interaction by pressing the button it creates a call-to-action to start the game.

<div align="center">
  <img src="assets\readme-images\home-page.jpg" style="background-color: black" alt="Quiz Home page">
</div>

- Button colors for "start quiz" and "how to play" have been picked out as vibrant button colors as they play significant role in enhancing user experience and adding value to the quiz game. The colors create an emotional respone to the users as they have the ability to evoke emotions. Green color creates emotions of "fresh" and "new" and thus was picked to make the users excited to try out the game. "Blue" was used for "how to play" button since blue color is conveys a trusting sence. We want our users to feel that they can trust our game and trust to find the information they need to successfully play the quiz.

* ## Quiz-page

Answer Feedback colors has been created that is associated with the users choice of answer. It is interactive with the users input of choice. Distinct colors of "yellow" and "red" to provide feedback on the true or false answer. It provides clear visial differentiation for the users to identity their answers either as wrong or wright. The colors sends an immidiete feedback to the users and reinforces them to remember the correct and incorrect answers for future references.

![Answer](assets/images/right.answer.png)

![Answer](assets/images/wrong.answer.png)

- Next button's function only appears after the players have choicen and clicked an answer. It serves as a progression controll, it provides strucure and controlled game experience. It inceases users engagement as it also a form to make the users engaged and interactive in the game, pushing them to take action to procees the game's next question. It also serves to push the learning experience of the users as it allows the users to reflect their answer before moving to next question automatically.

  Below you will find images of the same question before and after appearance of the "next button".

![Next button](assets/images/without.png)

![Next button](assets/images/with.png)

- ## End Page

  The end of the quiz game features several functions and component that contribute to closure to the game and users final experience.

  - A thank you text to thank the users for their engagement. It serves the purpose to make the users feel valued for their time and aknowledged for participating.
  - A score text which allows users to see their final score for the game. It serves the purpose to motivate users to play again and if needed to score better next time.
  - A play again button is created to offer users the ability to play again and restart the game. It encourages replaybility for users to play again and an opportunity for continued learning.

  * ## Sound Effects

  - Sound effect for answer feedback has been integrated to create a sound effect for right and wrong answer. In order to enhance overall users experience. It serves as an audio feedback for the users to reflect their answers. Correct answer has a positive sound which create a sense of achievement and encouragement for our users. It serves as inclusive function for our users who perhaps need an audio feedback instead of a visual feedback. This promotes accessbility for all our users.

- ## Score

- ## Timer

- ## High Score

- ## Highlight

![score](assets/images/final.png)

- ## Instruction Page

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

Performance & Accessibility

- PageSpeed Insights: performance and accessibility testing: https://pagespeed.web.dev/

- WebAIM Contrast Checker: check color contrast for accessibility: https://webaim.org/resources/contrastchecker/

Responsiveness Testing

- Responsive Design Checker: verify responsiveness across devices: https://www.responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fmaryangelle.github.io%2Fsimplequiz%2F&width=1400&height=700

Feedback

- Feedback and guidance were provided by my mentor Precious at Code Institute.

[Back to top](#contents)

# Acknowledgment

This Website quiz game was made by Maryan Gelle (Developer) as a Project 2 JavaScript for my Full Stack programe at Code Institue in 2025.

[Back to top](#contents)
