SET DAYS 2026 - EVENT INFORMATION WEBSITE
WEB PROGRAMMING ASSIGNMENT 2

1. STUDENT INFORMATION
----------------------
Name:       John Ray Cacananta
Section:    IT-252
Professor:  Ms. Kris P. Garcia
Subject:    WebProg
University: National University - Fairview


2. PROJECT OVERVIEW
-------------------
This is an informational website for SET Days 2026, a proposed three-day
event of the School of Engineering and Technology (SET) at National
University - Fairview, scheduled for December 2-4, 2026. The website was
made for WEB PROGRAMMING ASSIGNMENT 2 to present the event's purpose,
activities, schedule, venue, highlights, participation steps, and contact
details.


3. WEBSITE CONCEPT AND THEME
----------------------------
A minimalist, university-style event website inspired by the official
National University website (https://www.nu.edu.ph/).

- Colors: NU navy (#082F79), brand blue (#0757C8), and restrained gold
  (#FFC400) on white.
- Typography: Plus Jakarta Sans for headings, Inter for body text, with
  Arial as the fallback.
- Layout: a typography-led navy hero, plain text sections separated by
  horizontal rules, and a single-page structure with five navigation links.
- The design uses flexible CSS Grid and Flexbox layouts and one media query
  (max-width: 800px) to stack two-column sections.


4. TECHNOLOGIES USED
--------------------
- HTML5
- CSS3

No JavaScript, frameworks, or animation libraries are used.


5. WEBSITE SECTIONS
-------------------
Navigation (Home, About, Activities, Schedule, Contact) links to:

- Home          Title, tagline, dates, location, and short introduction.
- About         Three paragraphs on the event, its purpose, and participants.
- Activities    Six proposed activities, steps to join, and key terms.
- Schedule      Table covering December 2, 3, and 4, 2026.
- Venue         Venue description and an image map with two clickable zones.
- Highlights    Three proposed highlights.
- Participation Guidelines
                Steps to join, an external link, and a sample announcement.
- Contact       Footer with committee details, email link, and disclaimer.


6. HTML ELEMENTS DEMONSTRATED
-----------------------------
- Headings (h1-h3), paragraphs (p), and line breaks (br).
- Links (a): internal links by id, an external link, and a mailto: link.
- Images (img) with alt text; the venue image uses usemap.
- Image map (map and area): two rectangular regions linking to #schedule
  and #activities.
- Unordered list (ul): the six featured activities.
- Ordered lists (ol): how to join an activity, and participation steps.
- Description list (dl, dt, dd): three key terms.
- Table (table, thead, tbody, tr, th, td): the three-day schedule, grouped
  by day with rowspan.
- Preformatted text (pre): the sample participation announcement.
- Horizontal rules (hr): between major sections.
- Division and span (div, span): grouping and labelling content.
- Semantic structure: header, nav, main, section, figure, footer.


7. HOW TO OPEN THE WEBSITE
--------------------------
1. Extract the ZIP file.
2. Open the Cacananta_WEBPROG_SETDays2026 folder.
3. Open index.html in a modern web browser.
4. Use the navigation links to browse the sections.

No installation, server, or build step is needed. An internet connection
is only needed to load the Google Fonts; without it the page falls back
to Arial.


8. REFERENCES AND ACADEMIC DISCLAIMER
-------------------------------------
Design and learning references (consulted for ideas and syntax, not copied
as implementation):
- National University official website: https://www.nu.edu.ph/
- W3Schools HTML Tutorial: https://www.w3schools.com/html/
- W3Schools CSS Tutorial: https://www.w3schools.com/css/
- freeCodeCamp: https://www.freecodecamp.org/learn/
- MDN Web Docs: https://developer.mozilla.org/

Assets and fonts:
- images/nu-logo.png: National University crest, supplied by the student.
- images/event-guide.svg: simple labelled venue guide written as SVG for
  this project. It is illustrative only, not a photograph or a real floor
  plan.
- Icons: two inline SVG icons (calendar and map pin) from Lucide,
  https://lucide.dev/
- Fonts: Inter and Plus Jakarta Sans, loaded from Google Fonts,
  https://fonts.google.com/

AI assistance: the final revision of index.html, style.css, and this README
was prepared with the help of an AI coding assistant (Claude Code). This is
disclosed here because the assignment restricts AI-generated work; the
student is responsible for confirming this with the instructor.

Academic disclaimer: this website was created for WEB PROGRAMMING
ASSIGNMENT 2. All activities, schedules, speakers, venues, organizations,
contact details, and the sample announcement are fictional or proposed
unless officially confirmed. This is not an official National University
event announcement.
