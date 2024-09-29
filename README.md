QR Code Generator
Overview
The QR Code Generator is a straightforward Node.js application that enables users to input a URL, which is then converted into a QR code image. Additionally, the application saves the entered URL in a text file for easy future reference.

Features
User-Friendly Command Line Interface: Simple input through the terminal.
QR Code Generation: Automatically creates a QR code image from the provided URL.
Persistent Storage: Saves the entered URL in a text file for convenient access later.
Getting Started
Prerequisites
Ensure you have Node.js installed on your machine.

Installation
Clone the Repository:

bash
Copy code

    git clone https://github.com/RamanRed/hacktoberfest-5.git
cd qr-code-generator
Install Required Packages:

bash
Copy code

    npm install inquirer qr-image
Running the Application
To execute the QR Code Generator, run the following command:

bash
Copy code
node index.js
User Instructions
When prompted, enter the URL you wish to convert into a QR code.
After inputting the URL, a QR code image will be generated and saved as userdata.png.
The entered URL will also be saved in a text file named userdata.txt.
Hints for Common Errors
As you explore the code, you might encounter intentional faults designed to enhance your learning experience. Here are some hints to guide you:

Variable Naming: Ensure the variable name used to access the URL in the promise matches the defined name.
File Write Operations: Consider how the file write operation functions. Are there any potential asynchronous issues or errors during file operations?
Error Handling: Review the error handling logic. Does it effectively manage different error types that may arise during user input or file operations?
Prompt Rendering: If you encounter issues with the prompt not displaying, check if the environment supports command-line prompts correctly.
