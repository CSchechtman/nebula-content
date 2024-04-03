# Flexbox Practice Exercise: Responsive Card Layout

## Objective
Create a responsive card layout that adjusts to the browser width using Flexbox. This exercise will help you understand and apply Flexbox properties to build responsive designs without media queries.

## Starter Files
- `index.html`: HTML file with a basic structure.
- `styles.css`: CSS file where you will add your Flexbox styles.

## Exercise Instructions

### 1. Initialize Styles
In `styles.css`, reset the default browser styling and set the `box-sizing` property to ensure consistency across browsers.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

2. Create Flex Container
Convert .cards-container into a Flexbox container that will organize its children (card elements) in a row. Also, enable the wrapping of items and center them vertically.

```css
.cards-container {
  display: flex; /* Establishes a Flexbox layout */
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  justify-content: space-around; /* Spaces out items evenly with space around them */
  align-items: center; /* Centers items vertically within the container */
}
```

3. Card Styling
Give each .card a border, padding, fixed height, and margin. Also, establish a flexible basis for the width.

```css
.card {
  border: 1px solid #ccc; /* Adds a light grey border */
  padding: 20px; /* Adds space inside the card */
  margin: 10px; /* Adds space outside the card */
  height: 300px; /* Sets a fixed height for each card */
  flex-basis: 200px; /* Sets the initial width before growing or shrinking */
  flex-grow: 1; /* Allows the card to grow to fill available space */
  text-align: center; /* Centers text horizontally within each card */
}
```

4. Spacing Cards
Apply justify-content to the .cards-container to manage the spacing of the .card elements within the container.

5. Centering Cards Vertically
Use the align-items property on .cards-container to center the cards vertically, especially when they wrap onto multiple lines.

6. Card Content
Populate each .card with an h2 element for the title, a p element for a description, and a button for actions in your index.html.

7. Responsive Flex Items
Make sure each .card can expand by setting the flex-grow property, allowing them to fill the available horizontal space in .cards-container.

8. Final Touches
Enhance the user experience by adding a hover effect to the .card, changing the border color or shadow for interactivity.

9. Testing Responsiveness
Test the responsiveness of your card layout by adjusting the browser width and observing the behavior of the flex items.