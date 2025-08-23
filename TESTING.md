## Testing

- ## Testing and Code Validation Evidence
- To increase user experience, conduct testing for HTML and CSS...
- HTML validation I used the [W3C HTML Validator](https://validator.w3.org/).

feedback on result came back all clear for all the three html pages.

   <div align="center">
  <img src="assets\readme-images\html-validation-homepage.png" style="background-color: white" alt="html validation for Home page">
</div>

<div align="center">
  <img src="assets\readme-images\html-validation-instructions.png" style="background-color: white" alt="html validation for Instruction page">
</div>

<div align="center">
  <img src="assets\readme-images\html-validation-quiz.png" style="background-color: white" alt="html validation for quiz page">
</div>

- CSS validation, I used the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

feedback on result for Css for the quiz came all clear and good result no error or warnings to show.

<div align="center">
  <img src="assets\readme-images\css-validation.png" style="background-color: white" alt="css validation for the quiz">
</div>

- JavaScript Code validation, I used the [JS Hint Validator](https://jshint.com/).

Feedback on result for Java Script both form and the rest of the quiz came all clear and good result no error or warnings to show.

<div align="center">
  <img src="assets\readme-images\javascript-validation-form.png" style="background-color: black" alt="Java Script validation for the quiz form">
</div>

<div align="center">
  <img src="assets\readme-images\javaScript-validation-quiz.png" style="background-color: black" alt="Java Script validation for the quiz form">
</div>

- Page speed Insight
  For Accessibility testing for both mobile and desktop device, I used the [PageSpeed](https://pagespeed.web.dev/).

Mobile and desktop performance result from Google's PageSpeed Insights for the site:

Desktop:

- Performance: 100%

- SEO: 100%

- Accessibility: 92%

- Best Practices: 100%

<div align="center">
  <img src="assets\readme-images\pageSpeed-desktop.png" style="background-color: white" alt="pageSpeed insight>
</div>

Mobile:

- Performance: 94%

- SEO: 100%

- Accessibility: 92%

- Best Practices: 100%


<div align="center">
  <img src="assets\readme-images\pageSpeed-mobile.png" style="background-color: white" alt="pageSpeed insight>
</div>


You can also see the full results on [Google PageSpeed Insights](https://pagespeed.web.dev/analysis/https-maryangelle-github-io-simplequiz/dox930yg5c?form_factor=desktop).

- ## Responsivness test

Tested manually using Chrome DevTools and Responsive Design Checker.

Mobile S	Mobile M	Mobile L	iPad	Laptop	Desktop
Layout	Pass	Pass	Pass	Pass	Pass	Pass
Images	Pass	Pass	Pass	Pass	Pass	Pass
Links	Pass	Pass	Pass	Pass	Pass	Pass

Summary: Layouts adapt smoothly, images scale correctly, and all links work across all devices and screen sizes.| Pass    | Pass    |

- ## Browser Compatability

- Browsers tested:

Chrome ✅

Firefox ✅

Safari ✅

Edge ✅

Summary: The site adapts smoothly to all screen sizes, images scale correctly, links work as expected, and functionality is consistent across major browsers.

- ## Bugs

For Accessibility: 

- Form elements without associated labels: For example, the volume slider (#volumeSlider) does not have a label, which may affect how screen readers announce the control.

- Opportunities to improve semantic markup: Some interactive controls could be enhanced with proper ARIA roles and labels to improve support for assistive technologies.

- Manual accessibility checks recommended: While automated tests pass most audits, some items still require manual review, such as logical tab order, keyboard focus behavior, and use of HTML5 landmark elements.

- Accessibility score: 92/100: overall good, but there are areas to improve for a fully accessible experience.

