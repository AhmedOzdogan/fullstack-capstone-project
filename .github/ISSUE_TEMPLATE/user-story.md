---
name: User Story
about: This template defines a user story
title: ''
labels: ''
assignees: ''

---

## User Story 1 – User Registration and Authentication

**As a** new user  
**I need to** register and log into GiftLink securely  
**So that I can** access personalized features and participate in the community  

### Details and Assumptions
* The backend must support JWT-based authentication.  
* Passwords should be hashed using a secure algorithm (e.g., bcrypt).  
* The frontend should provide a clean and responsive login/signup interface.  

### Acceptance Criteria
Given a user is on the registration page
When they provide valid information and submit
Then a new account is created, and they are redirected to the dashboard

---

## User Story 2 – User Profile Management

**As a** registered user  
**I need to** view and edit my profile information  
**So that I can** keep my personal details up to date  

### Details and Assumptions
* Users can update their name, profile photo, and bio.  
* The backend API should validate all input fields.  
* Changes must reflect immediately on the frontend UI.  

### Acceptance Criteria
Given a logged-in user
When they edit their profile and save changes
Then the system updates the profile and shows a success message


---

## User Story 3 – Gift Posting

**As a** community member  
**I need to** post gifts I want to offer or exchange  
**So that** other users can see and request them  

### Details and Assumptions
* Each gift post includes title, description, photo, and category.  
* The backend should store posts in a scalable database (e.g., PostgreSQL).  
* Images are uploaded via a secure file storage service (e.g., AWS S3).  

### Acceptance Criteria
Given a logged-in user
When they create a new gift post
Then the system saves the post and displays it in the public feed


---

## User Story 4 – Gift Search and Filtering

**As a** user  
**I need to** search and filter available gifts  
**So that** I can find items that match my interests  

### Details and Assumptions
* Filters include category, location, and date added.  
* Backend must implement efficient search queries with pagination.  
* The frontend should display real-time search results.  

### Acceptance Criteria
Given a user is on the gift list page
When they use the search bar or filters
Then the system shows relevant results instantly

---

## User Story 5 – Secure API and Performance

**As a** developer on the GiftLink team  
**I need** the backend APIs to be secure and performant  
**So that** user data is protected, and the app scales with growth  

### Details and Assumptions
* Use Django REST Framework for API structure.  
* Implement authentication, rate limiting, and input validation.  
* Optimize queries and enable caching for frequent requests.  

### Acceptance Criteria
Given an authenticated API request
When the system handles it
Then the response should be secure, accurate, and returned within optimal time limits
