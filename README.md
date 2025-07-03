# Versioning Example Project

A Spring Boot REST API project demonstrating version control concepts and semantic versioning.

## Project Structure

```
versioning_example/
├── pom.xml
├── README.md
└── src/
    ├── main/
    │   ├── java/com/example/calculator/
    │   │   ├── VersioningExampleApplication.java
    │   │   ├── controller/
    │   │   │   └── CalculatorController.java
    │   │   └── service/
    │   │       └── CalculatorService.java
    │   └── resources/
    │       └── application.properties
    └── test/
        └── java/com/example/calculator/
```

## Features

- Spring Boot REST API
- Calculator service with basic operations
- RESTful endpoints for arithmetic operations
- Semantic versioning examples

## Usage

```bash
# Build and run the application
mvn spring-boot:run

# The API will be available at http://localhost:8080
```

## API Endpoints

- `GET /api/calculator/add?a=10&b=5` - Addition
- `GET /api/calculator/subtract?a=10&b=5` - Subtraction
- `GET /api/calculator/multiply?a=10&b=5` - Multiplication
- `GET /api/calculator/divide?a=10&b=5` - Division
- `GET /api/calculator/version` - Get API version

## Version History

This project demonstrates version control through:
- Initial project setup (v1.0.0)
- Feature additions and bug fixes
- Semantic versioning practices

## Development

This project serves as an example for understanding:
- Git workflow
- Commit message conventions
- Version numbering
- Spring Boot architecture