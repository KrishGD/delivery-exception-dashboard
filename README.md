# delivery-exception-dashboard
Frontend-only Delivery Exception Management Dashboard using HTML, CSS, and JavaScript
<img width="1024" height="1536" alt="image" src="https://github.com/user-attachments/assets/19784cff-6d69-4b2e-9426-7776c23995b0" />

📌 **Project Overview**

The Delivery Exception Management Dashboard is a browser-based internal tool that enables structured recording and management of delivery-related issues such as:

- Address Not Found

- Customer Not Available

- Payment Issue

- Package Damaged

The application is built entirely using HTML, CSS, and Vanilla JavaScript, without any frameworks, backend services, APIs, or external libraries.

All functionality is implemented using pure DOM manipulation and in-memory state management.

✨ **Key Features**

✅ Add new delivery exception records

✅ Client-side form validation

✅ Dynamic dashboard table updates

✅ Filter by issue type

✅ Filter by status (Open / Resolved)

✅ Resolve issues with visual feedback

✅ Delete records with confirmation dialog

✅ Real-time open and resolved issue counters

✅ Clean corporate-style UI

🛠️ **Technologies Used**

HTML5 – Semantic page structure

CSS3 – Responsive layout and styling

JavaScript (ES6) – Application logic

DOM Manipulation

Event Handling & Event Delegation

No frameworks, libraries, or backend systems were used.


**Concepts Demonstrated**

This project demonstrates strong understanding of:

- Client-side state management using in-memory arrays

- Dynamic element creation (createElement, appendChild)

- Event delegation for scalable action handling

- Form validation using JavaScript

- Conditional rendering using classList and inline styles

- Clean separation of concerns (HTML / CSS / JS)

  **PROJECT STRUCTURE**

  delivery-exception-management-dashboard/
│
├── index.html      # Application structure
├── style.css       # Styling and layout
├── script.js       # Application logic
└── README.md

🔄 **How It Works**

1.User fills out the delivery exception form.

2.JavaScript validates required fields.

3.A new issue object is created and stored in an in-memory issues array.

4.A new row is dynamically added to the dashboard table.

5.Users can:

- Mark an issue as resolved

- Delete an issue

- Filter by issue type or status

6.Dashboard metrics update automatically

**DATA MODEL**
{
  id: uniqueId,
  deliveryId: string,
  customerName: string,
  issueType: string,
  priority: string,
  notes: string,
  status: "Open" | "Resolved"
}

🎨 **UI / UX Highlights**

- Corporate-themed layout

- Clean two-column form design

- Striped and hover-highlighted table rows

- High-priority issues styled in red

- Resolved issues styled with green background

- Disabled resolve button after completion

= Confirmation before delete for safety

⚠️ **Current Limitations**

- Data is stored only in memory

- Refreshing the page clears all records

- Notes are stored but not displayed in the main table

- No backend or persistent storage

  🚀 **Future Enhancements**

- LocalStorage or backend API integration

- Sorting by priority or date

- Detailed modal view for each issue

- Authentication system

- Role-based access control

- Analytics dashboard with charts

👨‍💻 **Author**

Giridharan R
B.Tech – Information Technology
