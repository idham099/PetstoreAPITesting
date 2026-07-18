# 🐾 Petstore API Automation Test: Postman & Newman

This project contains a series of automated tests (Automation Testing) for the **Petstore Swagger API** using **Postman** as a Test Runner and **Newman** for execution via the Command Line Interface (CLI) and reporting.

<img width="1918" height="1023" alt="api0" src="https://github.com/user-attachments/assets/884305b0-c4f9-4fff-ab16-0f58a43d0f37" />

<img width="1919" height="1079" alt="api1" src="https://github.com/user-attachments/assets/834d98c2-92b3-4074-adfe-fca169f19141" />

<img width="1919" height="1079" alt="Api2" src="https://github.com/user-attachments/assets/d85f9faf-cab2-497f-9e3e-0cc191db0d1b" />

<img width="1919" height="1022" alt="Api3" src="https://github.com/user-attachments/assets/cc2e03ef-21a1-4668-a92d-512992c5322a" />


## 🚀 Testing Scope
This project includes 15 test cases consisting of positive and negative scenarios, including:
- **API Chaining:** Using data from one API response (Pet ID) for use in the next API (Update/Delete).
- **Positive Testing:** Adding, searching, updating, and deleting pet data.
- **Negative Testing:** Incorrect input validation, missing ID, and incorrect data format.
- **Assertions:** Validating the status code and JSON response body.

## 🛠️ Prerequisites
Before running the test, make sure you have installed:
1. [Node.js](https://nodejs.org/) (Latest version recommended).
2. Newman:
   ```bash
   npm install -g newman
   ```
   
   ```bash
   npx newman run Petstore_Test.json -r "cli,htmlextra"
   ```
