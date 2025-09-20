

Expense Tracker SaaS (Front-End)

A simple responsive front-end prototype for a SaaS Expense Tracker application.
Built with HTML5, CSS3, and JavaScript — no backend required.

🚀 Features

Reusable Navigation: Same navigation bar across all pages, with active link highlighting.

Home Page (index.html):

Product overview.

Features section.

Pricing section.

Plan Details (plan-details.html):

Detailed information about available plans.

Feedback Page (feedback.html):

Contact form with Name, Email, Subject, and Message.

Profile Page (profile.html):

Simulated logged-in user dashboard.

Search form to filter dummy expense data (assets/js/data.js).

Responsive results table styled with Flex/Grid.

Add Expense form (with HTML5 validation).

Add User (add-user.html):

Form with multiple input types (text, email, password, date, select, checkbox).

Demonstrates HTML5 validation.

Add Plan (add-plan.html):

Form with inputs (text, number, select, textarea, checkbox).

Demonstrates HTML5 validation.


🛠️ Technologies Used

HTML5: Semantic structure (header, main, section, footer, table).

CSS3:

Variables for colors and font sizes.

Flexbox for 1D layouts (nav, stats row).

CSS Grid for 2D layouts (pricing cards, responsive table).

Media queries for responsiveness.

JavaScript:

Dummy data stored in data.js.

Search/filtering with live update.

DOM manipulation for tables and forms.

HTML5 form validation.

📖 Pages & Forms

Navigation: Present on every page, consistent styling.

Forms:

Add User (add-user.html) → text, email, password, date, select, checkbox.

Add Plan (add-plan.html) → text, number, select, textarea, checkbox.

Contact (feedback.html) → text, email, text, textarea.

Add Expense (profile.html) → date, text, number.

Validation: All forms use required, min, max, pattern, etc.

📱 Responsiveness

Works on mobile, tablet, desktop.

Navigation collapses into vertical stack on small screens.

Tables reflow into mobile-friendly grid rows.

Pricing/features use CSS Grid for flexible columns


📌 Future Improvements

Add real backend integration (Node/Express + database).

User authentication.

Persistent storage (localStorage or APIs).

Better accessibility (ARIA labels, keyboard nav).
