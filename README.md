# Attendance Checker

Attendance Checker is a web application built with Angular (frontend) and Laravel (backend) to manage and track attendance on the web.

## Features
- Manage groups
- Manage members
- Track attendance
- Keep track of group tasks

## Installation

### Prerequisites
- Docker & Docker Compose
- Node.js & npm
- Composer

### Setup with Docker
1. Clone the repository:
   ```sh
   git clone https://github.com/jeromy97/attendance-checker.git
   cd attendance-checker
   ```
2. Create a `.env` file in the root directory and configure your environment variables:
   ```sh
   cp .env.example .env
   ```
3. Start the application:
   ```sh
   docker-compose up --build
   ```
4. Run database migrations:
   ```sh
   docker exec -it attendance-checker-backend php artisan migrate
   ```

## Usage
1. Access the frontend at `http://localhost:4200`
2. Login with your credentials (or register if applicable)
3. Manage attendance via the dashboard

## License
This project is licensed under the MIT License.
