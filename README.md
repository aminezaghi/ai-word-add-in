# Gemini AI in Word Add-in

This project demonstrates how to use the Gemini AI API within a Microsoft Word Add-in to ask questions and create documents dynamically. The add-in allows users to interact with Gemini AI to get responses to questions or generate content based on user instructions.

## Features

- **Word Add-in Integration**: Interacts directly with Microsoft Word to insert generated content.
- **Gemini AI API**: Uses Google’s Gemini AI API to generate responses to user input (either questions or instructions).
- **Document Creation**: For instructions, the generated content is inserted into a Word document.
- **Question Answering**: For questions, Gemini AI provides detailed answers that are displayed within the Word Add-in.

## Requirements

- **Node.js**: Ensure that you have [Node.js](https://nodejs.org/) installed.
- **Microsoft Word**: This add-in works within the Microsoft Word environment.
- **Google Gemini API Key**: You will need a valid Gemini API key to interact with Google’s Gemini API.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/gemini-ai-word-addin.git
   cd ai-word-add-in
   
2. Install Dependencies: Make sure to have the necessary packages installed:

bash
Copy code
npm install

3. API Key Configuration:

Open Home.js and replace the placeholder API key with your own Gemini API key:
javascript
Copy code
const apiKey = "YOUR_GOOGLE_GEMINI_API_KEY";

4. Run the Add-in: You can test the Word add-in by running it locally. Ensure that you have Office Add-in enabled and use the following command to run it:

bash
Copy code
npm start
This will launch the add-in within Microsoft Word, allowing you to interact with Gemini AI.
