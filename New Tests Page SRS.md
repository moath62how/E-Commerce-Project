
### **New Test Page SRS**

#### 1. **Introduction**

* **Purpose**: The New Test Page allows the user to create and start a new test. It includes a form to input test details and options to start the test immediately once created.
* **Scope**: This page will handle the creation of new tests, including specifying test details such as title, description, duration, and test type. Once created, users will be directed to the test-taking interface.

#### 2. **Functional Requirements**

1. **Test Creation Form**:

   * **Test Title**:

     * A field for the user to input the test’s title.
     * **Validation**: The title must be a non-empty string.
   * **Test Description**:

     * A field for the user to add an optional description of the test.
   * **Test Duration**:

     * A field to input the test’s time limit (e.g., 30 minutes, 1 hour).
     * **Validation**: The input must be a valid numeric value within the acceptable range (e.g., 1 to 180 minutes).
   * **Test Type**:

     * A dropdown or radio buttons to select the test category (e.g., math, science, etc.).
     * **Validation**: A valid selection must be made.
   * **Create Test Button**:

     * A button to submit the form and create the new test.
     * On click, it will validate the fields and, if successful, create the test and navigate the user to the test-taking interface.
   * **Start Test Button**:

     * A button that immediately starts the test after creation.
     * Once clicked, the user will be redirected to the test interface to begin answering questions.

2. **Test Interface (Post-Creation)**:

   * Once the user clicks **Start Test**, the user will be navigated to the test-taking interface.
   * The test-taking interface will display questions, time remaining, options to mark questions for review, and navigation to the next or previous question.

#### 3. **Non-Functional Requirements**

1. **Performance**:

   * The New Test Page should load within 3 seconds under normal internet conditions.
2. **Usability**:

   * The layout should be intuitive and easy to navigate.
   * The form should be clearly labeled with appropriate field descriptions.
   * **Error messages** should be clear, concise, and informative (e.g., "Test title cannot be empty").
   * **Responsive Design**: The page should be fully functional and accessible on both desktop and mobile devices.
3. **Security**:

   * Only authenticated users should be able to create new tests.
   * The page must prevent unauthorized users from submitting test data.
4. **Accessibility**:

   * Ensure that all form fields are properly labeled for accessibility.
   * The page must support keyboard navigation and be screen-reader friendly.

#### 4. **Design Constraints**

1. **Layout**:

   * The form for creating a new test should be clean and organized with clearly labeled fields.
   * Use the **blue, yellow, and white** color scheme to maintain consistency with the rest of the site.
2. **Validation**:

   * Display error messages in a non-intrusive manner, e.g., below the respective field.
   * The error messages should be displayed in red with clear instructions for correction.

#### 5. **Dependencies**

* **Authentication System**: The New Test Page will require an existing authentication system to ensure only logged-in users can create a test.
* **Backend System**: The page needs to be connected to a backend to save the test data and retrieve it during the test-taking process.

---

### Summary of New Test Page SRS:

1. **Purpose**: To create a new test, including specifying the test title, description, duration, and type.
2. **Functional Requirements**:

   * Test creation form with fields for title, description, duration, and type.
   * Validation for all fields.
   * **Create Test** and **Start Test** buttons.
   * Navigation to the test-taking interface upon starting the test.
3. **Non-Functional Requirements**:

   * Performance (load time ≤ 3 seconds).
   * Usability (intuitive form with proper error messages).
   * Security (authenticated users only).
   * Accessibility (support for screen readers and keyboard navigation).
4. **Design Constraints**:

   * Clear form layout with field descriptions and error message display.
   * Consistent blue, yellow, and white color scheme.
5. **Dependencies**:

   * Authentication system for user validation.
   * Backend system for storing and retrieving test data.

