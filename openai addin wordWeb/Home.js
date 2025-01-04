async function askGoogleAI() {
    const userInput = document.getElementById("user-input").value;
    const responseDiv = document.getElementById("response");

    // Check if input is empty
    if (userInput.trim() === "") {
        responseDiv.innerHTML = "Please enter a question.";
        return;
    }

    // Display loading message
    responseDiv.innerHTML = '<div class="loading">Loading...</div>';

    try {
        // Send the POST request to Google's Gemini API
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBqq0zZvVzk-BbqCWvpAOPA6Dqk-B0sGcI", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: userInput // Use user input in the API request
                            }
                        ]
                    }
                ]
            })
        });

        // Check if the response is OK (status 200)
        if (!response.ok) {
            responseDiv.innerHTML = `Error: ${response.statusText} (HTTP ${response.status})`;
            return;
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Check if we received a valid response from the Gemini API
        if (data.candidates && data.candidates.length > 0) {
            // Extract the content from the nested response structure
            const generatedText = data.candidates[0].content.parts[0].text;
            responseDiv.innerHTML = `<b>Google Gemini says:</b> ${generatedText}`;
        } else {
            responseDiv.innerHTML = "No response from Google AI. Please try again.";
        }
    } catch (error) {
        // Catch and display any errors during the request
        responseDiv.innerHTML = `Error: ${error.message}`;
    }
}
