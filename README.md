# library
Library - The Odin Project
<br>
<br>

## Goal
---
Recreate a simple library web application that takes a user's input and displays a card using the user's inputs. 

Additionally, the main goal of this project was to utilize Objects and constructing objects. 
<br>
<br>

## Process of Creating the Library 
---

1. The general layout and design of the library was created.

2. Styling of the layout was next, utilizing Flexbox and CSS Grid. Flexbox for the header and CSS Grid for when the cards were to be displayed.

3. Writing the JS code, which consist of creating a library array which would store the book objects `myLibrary`, creating a Book Object constructor that contained the title, author, pages, and read values `function Book(title, author, pages, read)` and creating a card function that would create cards based on the Book Objects stored in the library array. 
<br>
<br>

## Problems
1. Transitions and Animations - as the project (up to this point) has not discuss about the use of animation, it took a lot of time to research and find how to animate simple elements (e.g. hovering a button, having an element fade in and fade out, etc...)

2. Creating a Modal - again, the project had not discussed about this, however, after some thorough search to create a decent looking form, the man, Kevin Powell's Youtube videos helped me out considerably.

3. Design, Design, Design - figuring out how the look and feel of the library web application was difficult, honestly, took the most time as I was trying to resolve color palattes and best typefonts. 

4. Writing the code to function and display the cards. It was difficult trying to resolve the issue of changing the read button and removing the card once clicked. Solution to read was having an event listener within the create card function and making sure to update the read value associated to the book object in the library. Similarly, the remove button operated the same.
<br>
<br>

## Credits
---
- Website color template based on 
https://hookagency.com/blog/website-color-schemes/
        
        2. Hot Orange – Bonjour Paris Website Color Scheme
- Type font designed by Sebastian Kosch and located on Google Fonts
https://fonts.google.com/specimen/Crimson+Text

- Plus icon located on Google Material icons
https://fonts.google.com/icons?icon.query=close&icon.set=Material+Icons

- Create Modal Box
    
    1. From w3schools
    https://www.w3schools.com/howto/howto_css_modals.asp

    2. The man himself, <b>Kevin Powell</b>
    https://www.youtube.com/watch?v=TAB_v6yBXIE&t=485s