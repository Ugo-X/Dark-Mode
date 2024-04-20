## Dark Mode
* This project implements a simple dark mode toggle functionality for web pages using JavaScript. By clicking a designated button, users can switch between light and dark themes effortlessly. The project provides a lightweight solution for enhancing user experience by offering a customizable interface. Additionally, it includes functionality to iterate over a list of articles, although further development is needed to integrate this feature seamlessly.




#### HTML Structure

- main tags
  - nav
    - div.nav-center
      - span 'overreacted'
      - button.btn 'toggle'
  - section.articles
    - article.post
      - h2 'post title'
      - div.post-info
        - span 'date'
        - span 'read time'
      - p 'content'

#### Toggle - JS

- select button
- add click event listener

#### Toggle - CSS

- create .dark-theme class

#### Toggle - JS

- select root element (html), toggle .dark-theme

#### Import Data

#### Display Articles

- select articles
- iterate over, return article.post for each article

#### Format Date

- import moment.js library (typically formats dates)
- format date
