## Lab 1 - First Web API using ASP.NET Core

### Objective
Create a simple ASP.NET Core Web API project and test the GET endpoint using Swagger UI.

### Steps Performed
- Created an ASP.NET Core Web API project.
- Built the project using `dotnet build`.
- Ran the application using `dotnet run`.
- Opened Swagger UI.
- Executed the GET `/weatherforecast` endpoint.
- Verified that the API returned JSON data with HTTP Status Code 200k.

### Output
The GET endpoint returned WeatherForecast data in JSON format successfully.



Lab 5 – JWT Authentication & Authorization (Theory)
Objective

To implement secure authentication and authorization in ASP.NET Core Web API using JSON Web Token (JWT). JWT is used to verify the identity of the user before allowing access to protected API endpoints.

JWT (JSON Web Token)

JWT is a secure token used for authenticating users. After successful login, the server generates a token and sends it to the client. The client includes this token in the Authorization header (Bearer <token>) for every protected API request.

Authentication

Authentication verifies the identity of the user. In this lab, JWT Bearer Authentication is configured using:

AddAuthentication()
AddJwtBearer()
UseAuthentication()
Authorization

Authorization determines whether the authenticated user has permission to access a resource. The [Authorize] attribute is applied to the EmployeeController so that only authenticated users can access its APIs.

AuthController

An AuthController is created to generate JWT tokens. The token contains user claims such as:

User ID
User Role (Admin)

The token is signed using a secret key and has an expiration time.
