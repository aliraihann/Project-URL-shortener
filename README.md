# API Project: URL Shortener

This is the boilerplate code for the URL Shortener Microservice project which is part of the FreeCodeCamp Back End Course Certification.

The details of the required test can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.

## User Stories
- Users can input a URL into the application and it will return a JSON response consisting of the original and the shortened URL.
- When users visit the shortened URL by adding the shortened URL to the current URL then the application will redirect to the requested URL.
- If users an invalid URL that doesn't follow http(s)://www.example.com(/more/routes) format then the application will return error messages.

# Link to The Application
https://get-your-url-shortened.glitch.me

Example of Usage:
Input https://www.google.com/ into https://get-your-url-shortened.glitch.me/

{"original_url": "https://www.google.com/", "short_url": 662 }

visit https://get-your-url-shortened.glitch.me/api/shorturl/662 will redirect you to www.google.com

