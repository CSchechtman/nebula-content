# Instructor-Led Flexbox Activity

## Activity Overview

In this interactive activity, students will explore Flexbox properties by building a responsive web page layout, seeing firsthand how different property values alter the design.

## Initial Setup

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Activity</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="container">
        <header class="header">Header</header>
        <nav class="nav">Navigation</nav>
        <main class="main">Main Content</main>
        <aside class="sidebar">Sidebar</aside>
        <footer class="footer">Footer</footer>
    </div>

</body>
</html>
```

**CSS:**

```css
/* General styles for all elements */
.container, .header, .nav, .main, .sidebar, .footer {
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    text-align: center;
}

.header {
    background-color: #FFD700; /* Gold */
    color: #333;
}

.nav {
    background-color: #87CEFA; /* Light Blue */
    color: white;
}

.main {
    background-color: #90EE90; /* Light Green */
    color: #333;
}

.sidebar {
    background-color: #FFB6C1; /* Light Pink */
    color: #333;
}

.footer {
    background-color: #DDA0DD; /* Plum */
    color: white;
}

.container {
    display: flex;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```

## Step 1: Creating a Flex Container

**Task**:
```css
.container {
    display: flex;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```

**Additional Example**: Change to `inline-flex`.
```css
.container {
    display: inline-flex;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```
*Explanation*: `inline-flex` makes the container behave like an inline element, affecting how it interacts with surrounding content.

## Step 2: Implementing `flex-direction`

**Task**:
```css
.container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```

**Additional Example**: Change to `column`.
```css
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```
*Explanation*: `flex-direction: column` arranges the child elements in a vertical stack.

## Step 3: Using `justify-content` and `align-items`

**Task**:
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```

**Additional Example**: Change `justify-content` to `space-between` and `align-items` to `flex-start`.
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```
*Explanation*: `justify-content: space-between` creates equal spacing between items, and `align-items: flex-start` aligns them to the start of the cross axis.

## Step 4: Handling Multiple Lines with `flex-wrap`

**Task**:
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```

**Additional Example**: Change `flex-wrap` to `nowrap`.
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```
*Explanation*: `flex-wrap: nowrap` forces all items to stay in a single line, potentially causing overflow.

## Step 5: Aligning Multiple Lines with `align-content`

**Task**:
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```

**Additional Example**: Try `align-content: stretch`.
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    align-content: stretch;
    gap: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
}
```
*Explanation*: `align-content: stretch` makes wrapped lines stretch to take up the available space in the container.
