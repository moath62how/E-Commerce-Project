

### **Test Interface Page – SRS**

#### 1. **Introduction**

* **Purpose**:
  The Test Interface is where users actively solve questions during a test. It provides a focused layout with a timer, navigation, answer selection, and a question status overview to help users manage their time and responses.

* **Scope**:
  This interface opens when a user starts a test. It supports answering, flagging, navigating through questions, and submitting the test. It is designed to reduce distractions and guide the user through the test-taking process smoothly.

---

#### 2. **Functional Requirements**

##### 2.1. **Question Display**

* Display **one question at a time**.
* Each question includes:

  * Question text
  * Four multiple-choice options (A, B, C, D) with radio buttons
  * A "Mark/Flag for Review" toggle button

##### 2.2. **Navigation Controls**

* **Next** and **Previous** buttons:

  * Navigate between questions
  * On the **last question**, the "Next" button turns into **"Finish"**

* **Finish Button Behavior**:

  * Shows a **confirmation dialog**: "Are you sure you want to submit the test?"
  * On confirmation, the test is submitted, and the user is redirected to the results page or summary.

##### 2.3. **Timer**

* Display a **countdown timer** showing the time remaining.
* Automatically submits the test when time runs out.

##### 2.4. **Question Status Overview (Hamburger Menu)**

* A **hamburger icon** toggles a side panel or modal with:

  * A grid/list of question numbers
  * Each question is color-coded:

    * **Gray**: Not visited
    * **Blue**: Visited but unanswered
    * **Yellow**: Flagged for review
    * **Green**: Answered
* Clicking a number in the list navigates to that question

##### 2.5. **Answer Selection**

* Selecting an option marks the question as "answered"
* User can change their selection before submission

##### 2.6. **Flagging Questions**

* The “Mark for Review” button toggles a flag state
* Flagged questions are highlighted in the overview

##### 2.7. **Autosave (Optional, Backend Support Needed)**

* Answers and flags should be saved in real time or on navigation to prevent data loss

---

#### 3. **Non-Functional Requirements**

##### 3.1. **Performance**

* Page transitions and UI updates should feel instant (< 100ms)
* Timer must update every second without lag

##### 3.2. **Usability**

* Designed for full focus: clean, minimal distractions
* Large, clearly labeled buttons and fonts
* Keyboard shortcuts (optional): next (`→`), previous (`←`), flag (`F`)

##### 3.3. **Security**

* Users should **not be able to reload and change time or questions**
* Timer and answers must be synced with the backend periodically (if implemented)
* Submission should be locked after time is up

##### 3.4. **Accessibility**

* All elements should be navigable with keyboard
* ARIA labels and semantic elements for screen reader support

---

#### 4. **Design Constraints**

* The interface must match the platform color theme (blue, yellow, white)
* Mobile and desktop responsive
* Minimal distractions: full-screen test-taking mode preferred
* Dialogs (e.g., confirmation) use modal components (Bootstrap/Custom)

---

#### 5. **Dependencies**

* Backend APIs for:

  * Fetching questions
  * Saving answers and flags
  * Submitting final test
* Timer sync logic (local + backend)
* CSS/JS for modal, hamburger menu, and UI transitions

---

### ✅ Summary Table

| Feature                | Description                                   |
| ---------------------- | --------------------------------------------- |
| Question Display       | One question at a time with 4 options         |
| Timer                  | Countdown, auto-submit on expiry              |
| Navigation             | Next, Previous, Finish button                 |
| Flag for Review        | Toggle to mark uncertain questions            |
| Question Overview Menu | Hamburger menu with color-coded question list |
| Submission             | Confirm on finish, auto-submit when time ends |
| Accessibility          | Keyboard-friendly, screen reader support      |
| Design                 | Clean layout, theme-colored, responsive       |

