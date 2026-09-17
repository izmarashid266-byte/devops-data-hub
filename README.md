# DevOps Data Hub

A full-stack DevOps project built using React, Flask, PostgreSQL, and AWS.

## Project Overview

DevOps Data Hub is a cloud-based full-stack application deployed on AWS.

The project demonstrates how a React frontend communicates with a Flask backend API, which stores application data in PostgreSQL.

The infrastructure is designed using an AWS VPC with public and private subnets to separate the frontend from backend and database resources.

## Architecture
                         Internet
                            |
                            v
                   +------------------+
                   | Internet Gateway |
                   +------------------+
                            |
                            v
                 +----------------------+
                 |    Public Subnet     |
                 |                      |
                 |  Frontend EC2        |
                 |  React + Nginx       |
                 +----------------------+
                            |
                            | API Requests
                            v
                 +----------------------+
                 |    Private Subnet    |
                 |                      |
                 |  Backend EC2         |
                 |  Flask API :5000     |
                 |         |            |
                 |         v            |
                 |  Database EC2        |
                 |  PostgreSQL :5432    |
                 +----------------------+

                 AWS VPC: 10.0.0.0/16


## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Backend

* Python
* Flask
* REST API

### Database

* PostgreSQL

### Cloud & DevOps

* Amazon EC2
* Amazon VPC
* Public and Private Subnets
* Internet Gateway
* NAT Gateway
* Route Tables
* Security Groups
* Nginx
* Git
* GitHub

## AWS Infrastructure

The application is deployed inside an AWS VPC.

### VPC

* CIDR: `10.0.0.0/16`

### Public Subnet

* CIDR: `10.0.1.0/24`
* Contains the frontend EC2 instance
* Connected to the Internet through an Internet Gateway

### Private Subnet

* CIDR: `10.0.2.0/24`
* Contains the backend and database EC2 instances
* Backend and database resources are not directly exposed to the public internet

## Application Flow

1. A user accesses the React frontend through the public EC2 instance.
2. Nginx receives incoming HTTP requests.
3. Frontend API requests are forwarded to the Flask backend.
4. Flask processes the request.
5. The backend communicates with PostgreSQL.
6. PostgreSQL stores or retrieves the requested data.
7. The response is returned through the backend to the frontend.

## Security

Security Groups are used to control communication between the different layers.

* Frontend allows HTTP traffic.
* Backend API access is restricted to the frontend security group.
* PostgreSQL access is restricted to the backend security group.
* Backend and database servers are placed in the private subnet.

## Project Structure

devops-data-hub/
│
├── public/
├── src/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## Frontend

The frontend is developed using React.

It provides the user interface for viewing and submitting data.

The frontend communicates with the Flask backend through API requests.

## Backend

The backend is developed using Flask and exposes API endpoints for handling application data.

The Flask application communicates with PostgreSQL for database operations.

## Database

PostgreSQL is used as the application's relational database.

The database server runs separately from the frontend and backend and is placed inside the private subnet.

## Nginx

Nginx is used as a reverse proxy on the frontend EC2 instance.

It forwards:

* Frontend requests to the React application
* `/api/` requests to the Flask backend

## Git & GitHub

Git is used for version control and GitHub is used to store the project source code.

The project follows a basic Git workflow:


Local Development
       |
       v
      Git
       |
       v
    GitHub

## Security Considerations

Sensitive information is intentionally excluded from this repository.

The following should never be committed to GitHub:

* Private SSH keys
* Passwords
* API tokens
* Database credentials
* `.env` files containing secrets
* AWS access keys

## Future Improvements

* Deploy the React production build using Nginx
* Add HTTPS using SSL/TLS
* Add CI/CD using GitHub Actions
* Add application monitoring
* Improve database security
* Add automated testing
* Add centralized logging

## Author

**Izma Khan**

Built as a hands-on AWS, DevOps, and full-stack learning project.
