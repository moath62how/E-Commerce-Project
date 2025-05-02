

### **Past Test Analytics Page – SRS**

#### 1. **Introduction**

* **Purpose**:
  The Past Test Analytics Page allows users (both normal users and admins) to view insights and performance data for previously taken tests. It helps track progress, identify weak points, and understand question difficulty.

* **Scope**:
  This page will display all completed tests by the user (or all users if admin), along with detailed statistics, including scores, time taken, flagged questions, and question-by-question performance.

---

#### 2. **Functional Requirements**

##### 2.1. **Test List Display**

* Show a list of previously completed tests sorted by **date (most recent first)**.
* Each test card or row includes:

  * Test title
  * Date taken
  * Score (e.g., 8/10)
  * Time taken (e.g., 12 min 30 sec)
  * Button to **"View Analytics"**

##### 2.2. **Test Analytics View**

* On clicking “View Analytics”, show:

  * Test description and meta info (date, duration)
  * Final score and percentage
  * Time spent per question (visualized bar or list)
  * Count of:

    * Correct answers
    * Incorrect answers
    * Unanswered questions
    * Flagged questions
* Optional (if implemented): chart visualizations (bar chart, pie chart)

##### 2.3. **Question-Level Breakdown**

* List each question with:

  * Question text
  * User’s selected answer (highlighted)
  * Correct answer
  * Whether it was:

    * Correct / Incorrect / Unanswered / Flagged
* Option to filter or search questions (e.g., only show incorrect)

##### 2.4. **Role-Based View**

* **Normal User**:

  * Can only see their own test analytics.
* **Admin**:

  * Can choose a user from a dropdown or search bar.
  * View any user's past tests and analytics.

---

#### 3. **Non-Functional Requirements**

##### 3.1. **Performance**

* Load analytics data in under 3 seconds.
* Support pagination or lazy loading for large test histories.

##### 3.2. **Usability**

* Clean layout with collapsible sections or tabs for large tests.
* Use colors to visually differentiate correct (green), incorrect (red), flagged (yellow), and unanswered (gray) answers.

##### 3.3. **Security**

* Ensure normal users **cannot access** other users' analytics.
* Admin access to user analytics must be protected and logged.

##### 3.4. **Accessibility**

* Fully keyboard-navigable.
* Support for screen readers with proper labeling.

---

#### 4. **Design Constraints**

* Must follow the platform color theme: **blue, yellow, white**.
* Responsive layout (support for desktop and mobile).
* Optional charts should use a lightweight JS charting library (e.g., Chart.js or Recharts).

---

#### 5. **Dependencies**

* **Backend APIs** for:

  * Fetching test results by user ID
  * Fetching detailed question analytics
  * Admin: listing users & filtering results
* **Authentication/Authorization system** to control data visibility

---

### ✅ Summary Table

| Feature            | Description                                     |
| ------------------ | ----------------------------------------------- |
| Test List          | Sorted by date, includes score and time         |
| View Analytics     | Score breakdown, per-question performance       |
| Admin Access       | Can select and view any user's analytics        |
| Normal User Access | Can view only their own analytics               |
| Design             | Responsive, colored indicators, optional charts |
| Security           | Role-based access, data protection              |
| Dependencies       | Backend APIs, Chart Library (optional)          |


