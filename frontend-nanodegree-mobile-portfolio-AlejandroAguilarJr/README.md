Website Optimization
===============================

Project Objectives:
- index.html achieves a PageSpeed score of at least 90 for Mobile and Desktop.
- Optimizations made to views/js/main.js make views/pizza.html render with a consistent frame-rate at 60fps when scrolling.
- Time to resize pizzas is less than 5 ms using the pizza size slider on the views/pizza.html page. Resize time is shown in the browser developer tools.

How to Run:
1) Download Zip file or clone git repo. 
2) Open Index.html with a web browser.
3) Enjoy!

Optimizing index.html:
-Biggest change was making pizzeria image smaller and compress it.
-made css styling inline
-made perfmatters async
-added media tag to print css
-Also found redirecting to my existing projects were a bad way of doing it so I went ahead and made the files available locally

Optimizing views/js/main.js:
-Debounced Scroll Events using: http://www.html5rocks.com/en/tutorials/speed/animations/#debouncing-scroll-events