SET DAYS 2026 - EVENT INFORMATION WEBSITE
WEB PROGRAMMING ASSIGNMENT 2

1. STUDENT INFORMATION
----------------------
Name:       John Ray Cacananta
Section:    IT-252
Email:      cacanantajrp@students.nu-fairview.edu.ph
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
An editorial, university-style event website inspired by the official
National University website (https://www.nu.edu.ph/).

- Colors: NU navy (#082F79), brand blue (#0757C8), and gold (#FFC400) on
  white and light gray (#F7F8FA). Text is #172033 with #526176 for
  secondary text.
- Typography: Plus Jakarta Sans for headings, Inter for body text, with
  Arial as the fallback. Body text is 17-18px and section headings are
  36-42px and the hero heading scales from 44px (mobile) to 76px (desktop).
- Layout: a university-event-program style. The hero sets "SET Days 2026"
  beside the dates (DEC 02-04, 2026) as large type, followed by an
  editorial About spread, a numbered two-column activity program, a
  schedule table, venue guide, highlights, guidelines, and a letterhead-style
  announcement, in a 1280px-wide single page with five navigation links.
- Responsive CSS Grid and Flexbox with breakpoints at 768px and 1024px.
  No photographs are used.


4. TECHNOLOGIES USED
--------------------
- HTML5
- CSS3
- A short vanilla JavaScript file (script.js), no libraries or frameworks.

The website is fully readable without JavaScript. script.js only adds:
1. A Menu button for the navigation on small screens (aria-expanded,
   closes on link click or Escape).
2. Day filter buttons (All Days, December 2, 3, 4) that hide the other
   days' <tbody> groups of the existing schedule table.
3. Recalculation of the image-map <area> coordinates from their original
   values when the venue image is resized.


5. WEBSITE SECTIONS
-------------------
Navigation (Home, About, Activities, Schedule, Contact) links to:

- Home          Title, tagline, short introduction, and key facts.
- About         Three paragraphs on the event, its purpose, and participants.
- Activities    Six proposed activities, steps to join, and key terms.
- Schedule      Table covering December 2, 3, and 4, 2026, with day filters.
- Venue         Venue description and an image map with two clickable zones.
- Highlights    Three consistent proposed features: faculty (Ms. Kris P.
                Garcia, WebProg instructor, unconfirmed), student
                organization, and exhibition.
- Participation Guidelines
                Steps to join, an external link, and a sample announcement.
- Contact       Footer with the student contact (name, section, subject,
                email link), the proposed fictional organizing committee,
                and the disclaimer.


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
- Horizontal rule (hr): between the About and Activities sections.
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

Photography: no National University campus photographs are used. The NU
Terms & Conditions (https://www.nu.edu.ph/terms-and-conditions) allow
personal, non-commercial viewing and downloading but prohibit
reproducing or distributing site content, including images, without
written permission, and no reuse license was found on
https://www.nu.edu.ph/nu-fairview. The photographs were therefore not
copied into this project. If written permission is obtained, they can be
added with the credit "Photo: National University".

Assets and fonts:
- images/nu-logo.png: National University crest, supplied by the student.
  Property of National University; used here only as an identifier in a
  non-commercial academic project.
- images/event-guide.svg: light two-zone venue guide (Zone A Main
  Auditorium, Zone B SET Laboratories) written as SVG for this project,
  used with the HTML image map. It is illustrative only, not a photograph
  or a real floor plan.
- Fonts: Inter and Plus Jakarta Sans, loaded from Google Fonts,
  https://fonts.google.com/

AI assistance: the final revision of index.html, style.css, script.js, and this README
was prepared with the help of an AI coding assistant (Claude Code). This is
disclosed here because the assignment restricts AI-generated work; the
student is responsible for confirming this with the instructor.

Academic disclaimer: this website was created for WEB PROGRAMMING
ASSIGNMENT 2. All activities, schedules, speakers, venues, organizations,
organizing committee details, and the sample announcement are fictional or proposed
unless officially confirmed. This is not an official National University
event announcement.

Testing performed: layouts were checked from headless Microsoft Edge
screenshots at 1440px, 768px, 430px, 375px and 320px widths. The day
filter, menu button, Escape key, link-click close, and image-map scaling
were checked with a scripted DOM test in Edge. 1920px, 1366px and 1024px
were not inspected, and real-device, screen-reader, and keyboard-only
testing was not performed.
