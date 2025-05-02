

### **Admin Dashboard Page SRS**

#### 1. **Introduction**

* **Purpose**: The Admin Dashboard is used by system administrators to manage and monitor platform activities, such as user management, test creation, and reviewing test analytics.
* **Scope**: The dashboard is only accessible to users with the **admin role** after logging in. It provides administrative tools and data insights in a structured layout based on the [Bootstrap 5 Dashboard Example](https://getbootstrap.com/docs/5.3/examples/dashboard/), customized to match the project use case.

---

#### 2. **Functional Requirements**

##### 2.1. **Authentication & Access Control**

* Only authenticated users with the **admin** role can access the dashboard.
* Unauthorized access attempts must redirect the user to the login page with an error message.

##### 2.2. **Dashboard Layout**

* Based on Bootstrap’s example dashboard, modified with the following sections:

  **Sidebar Navigation Menu (Left):**

  * Dashboard (Home/Overview)
  * Users Management
  * Tests Management
  * Test Submissions
  * Past Test Analytics
  * Logout

  **Top Bar:**

  * Admin name/email display
  * Optional: Notifications, settings, or search bar

  **Main Content Area:**

  * Shows key stats (e.g., number of users, tests created, completed tests)
  * Summary cards for recent activity
  * Charts/graphs (optional, powered by Chart.js or similar)
  * All design will match the blue, yellow, and white color scheme

##### 2.3. **Users Management**

* View a list of all registered users.
* Sort/filter by registration date, name, or activity.
* Delete user accounts.
* View user details (e.g., email, phone number, number of tests taken).

##### 2.4. **Tests Management**

* Create, update, or delete tests.
* Assign questions and options to each test.
* Set the duration and description for each test.
* Schedule a test for specific dates.

##### 2.5. **Test Submissions**

* View submitted test results.
* Sort submissions by user, date, or score.
* View individual user answers and flagged questions.

##### 2.6. **Past Test Analytics**

* Redirect to the Past Test Analytics Page.
* Show insights like number of participants, most missed questions, average scores, etc.

##### 2.7. **Logout**

* A button or menu option to securely log the admin out and redirect to the login page.

---

#### 3. **Non-Functional Requirements**

##### 3.1. **Performance**

* Page load time should be ≤ 3 seconds under normal conditions.
* Admin actions (e.g., delete user, create test) should respond within 2 seconds.

##### 3.2. **Usability**

* All features should be accessible within 2–3 clicks from the dashboard.
* Forms must have labels and proper validation/error messages.

##### 3.3. **Security**

* Admin access must be verified by role in the backend.
* Sensitive operations like delete or create must be protected (CSRF, authorization).
* Use HTTPS for all communications.

##### 3.4. **Accessibility**

* All interactive elements must be accessible by keyboard and screen readers.

---

#### 4. **Design Constraints**

* Follow Bootstrap 5.3 UI structure and components.
* Match project color theme (blue, yellow, white).
* Ensure responsiveness for all screen sizes.
* Use icons (FontAwesome or Bootstrap Icons) for intuitive navigation.

---

#### 5. **Dependencies**

* Backend admin role check and user management APIs.
* Test and analytics services.
* Charting library (optional) for data visualization.
* Bootstrap CSS/JS and icon libraries.

---

### Summary of Admin Dashboard SRS

| Feature               | Details                                                       |
| --------------------- | ------------------------------------------------------------- |
| Access                | Admins only, authenticated                                    |
| Layout                | Sidebar + top bar + main content                              |
| User Management       | View, delete, inspect user details                            |
| Test Management       | Create, update, delete, schedule tests                        |
| Test Submissions      | View submitted answers and scores                             |
| Analytics             | Access Past Test Analytics page                               |
| Design Framework      | Based on Bootstrap 5 Dashboard, themed with blue/yellow/white |
| Security & Validation | Role-based access, secure operations, CSRF protection         |
| Responsiveness        | Mobile-friendly, screen reader accessible                     |

