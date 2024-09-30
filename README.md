
---

# QR Code Generator

## Overview
The **QR Code Generator** is a simple Node.js application that allows users to input a URL, which is then converted into a QR code image. Additionally, the application saves the entered URL in a text file for future reference.

---

## Features
- **User-Friendly Command Line Interface**: Easily input a URL through the terminal.
- **QR Code Generation**: Automatically creates a QR code image from the provided URL.
- **Persistent Storage**: Saves the entered URL in a text file for convenient access later.

---

## Getting Started

### Prerequisites
- **Node.js** must be installed on your machine.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/RamanRed/hacktoberfest-5.git
 
   ```

2. **Install Required Packages**:

   ```bash
   npm install inquirer qr-image
   ```

---

## Running the Application

To execute the QR Code Generator, run the following command:

```bash
node index.js
```

---

## User Instructions

1. When prompted, enter the **URL** you wish to convert into a QR code.
2. After inputting the URL, a QR code image will be generated and saved as `userdata.png`.
3. The entered URL will also be saved in a text file named `userdata.txt`.

---

## Hints for Common Errors

As you explore the code, you may encounter intentional faults designed to enhance your learning. Below are some hints to help troubleshoot common issues:

- **Variable Naming**: Ensure the variable name used to access the URL in the promise matches the defined name.
- **File Write Operations**: Pay attention to the file write operation. Are there potential asynchronous issues or errors during file operations?
- **Error Handling**: Review the error handling logic. Does it effectively manage different error types that may arise during user input or file operations?
- **Prompt Rendering**: If the prompt doesn't display, check whether your environment supports command-line prompts correctly.

---
