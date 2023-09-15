## First Question : Add at least 3 Project features

- Allow students to browse available courses and select in the ones they want to attend.
- create a card and cart then design.
- when click card(select) then course add and show will in cart section
- Display appropriate error messages if a student tries to enroll in a course that's already full or overlaps with their existing schedule.
- Implement validation to prevent removal if the course has already started.
##
## Second Question: Discuss how you managed the state in your assignment project.

Managing state in a course registration project is crucial for tracking course availability, student enrollments, and other important data.
- Identify the Types of State : This includes information about each course, such as its name, course details, course credit and course price.Tracking which students are enrolled in which courses and managing waitlists.
- Choose a State Management Approach : There are two types of state. i use local local component state management ,which is provided by most front-end frameworks (React's useState).
- State Initialization : Initialize state variables with default values or empty arrays/dictionaries.
- State Updates : Define actions, reducers (for Redux), or methods (for Vue.js) to update the state and Implement logic for adding, removing, or modifying courses, students, and enrollments and Ensure that state updates are consistent and that they maintain data integrity.
- Data Binding : Bind the state to the user interface components that need to display or interact with it.
- Event Handling : Implement event handling to respond to user interactions (when a student enrolls in a course).
- Data Persistence : Implement functions or APIs to fetch and update data from the database, ensuring that changes are reflected in the state.
- Testing : Write unit tests to verify that  state management functions and methods work as expected.
- Code Review and Optimization : Optimize state management for performance as the project grows. Consider techniques like memoization or pagination for large datasets.
- Error Handling : Create meaningful error messages for each error type. Error messages should be clear and concise, providing information about what went wrong and, if possible, how to resolve it.