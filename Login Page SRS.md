### **Login Page SRS**

#### 1. **Introduction**

* **Purpose**: The Login Page allows users (both regular and admin) to authenticate themselves before gaining access to the platform. The login process will use an email and password for authentication.
* **Scope**: This page will allow users to log in by entering their email and password. Once authenticated, users will be directed to the Home Page. The same login process is used for both regular users and admin users.

#### 2. **Functional Requirements**

1. **User Authentication**:

   * **Email Field**:

     * A field where users input their email.
     * **Validation**: The email must be in a valid email format (e.g., [user@example.com](mailto:user@example.com)).
     * **Error Message**: Display an error if the email format is invalid.
   * **Password Field**:

     * A field for users to input their password.
     * **Validation**: The password must be between 8 and 22 characters long.
     * **Error Message**: Display an error if the password is empty or doesn't meet the required length.
   * **Submit Button**:

     * A button to submit the email and password for authentication.
     * When clicked, it will validate the input fields and authenticate the user.
     * If authentication fails, show an error message ("Invalid email or password").
     * If authentication succeeds, the user is redirected to the Home Page.
2. **Error Handling**:

   * If either the **email** or **password** field is empty, the user should be shown a specific error message indicating the missing field.
   * If **authentication fails**, display an error message such as "Invalid email or password."
3. **Authentication for Both Users and Admins**:

   * The **login system** is the same for both regular users and admins.
   * After successful login, the system will direct the user to the **Home Page**.
   * **Admin users** will see extra options (e.g., **Past Test Analytics**) based on their role, while **regular users** will see a simpler navigation.
4. **Password Security**:

   * The system should ensure that passwords are securely handled (hashed and stored in the database).
   * Use **HTTPS** to secure the transmission of user credentials.
5. **Forgot Password**:

   * Include a **"Forgot Password?"** link below the login form.
   * Clicking the link will redirect the user to a password recovery page where they can reset their password.

#### 3. **Non-Functional Requirements**

1. **Performance**:

   * The Login Page should load within 2 seconds under normal internet conditions.
2. **Usability**:

   * The login form should be easy to use with clearly labeled fields.
   * The layout should be simple and minimalistic, with no unnecessary distractions.
   * **Responsive Design**: The login form should be functional on both desktop and mobile devices.
3. **Security**:

   * User credentials must be transmitted over **HTTPS** to prevent interception.
   * The password must be securely stored (e.g., hashed) in the backend database.
4. **Accessibility**:

   * Ensure all form fields are labeled correctly for screen readers.
   * The page should support keyboard navigation.

#### 4. **Design Constraints**

1. **Layout**:

   * The login form should be centered on the page for easy visibility and access.
   * Use a simple design with a **blue, yellow, and white** color scheme to match the project’s branding.
2. **Error Messages**:

   * Error messages should be displayed in a noticeable and clear format, preferably in red or another color that stands out.
   * Messages should be concise, such as "Please enter a valid email" or "Password must be between 8 and 22 characters."

#### 5. **Dependencies**

* **Authentication System**: The login functionality requires a working authentication system that verifies user credentials against the database.
* **Backend System**: The backend should securely handle login requests and return a valid user session or token upon successful authentication.
* **Password Recovery System**: If the "Forgot Password?" link is implemented, the backend should support a password recovery mechanism.

---

### Summary of Login Page SRS:

1. **Purpose**: To authenticate users (both regular and admin) through an email and password-based login system.
2. **Functional Requirements**:

   * **Email and Password Fields** with validation.
   * **Submit Button** to authenticate and navigate to the Home Page.
   * **Error Handling** for invalid inputs and failed authentication.
   * **Password Security**: Use HTTPS and store passwords securely.
   * **Forgot Password Link** for password recovery.
3. **Non-Functional Requirements**:

   * Performance (load time ≤ 2 seconds).
   * Usability (intuitive form with clear labels).
   * Security (encrypted password transmission and storage).
   * Accessibility (keyboard and screen reader support).
4. **Design Constraints**:

   * Clear, minimalistic layout with proper error message handling.
   * Consistent blue, yellow, and white color scheme.
5. **Dependencies**:

   * Authentication system for credential validation.
   * Backend system for user verification and session management.

