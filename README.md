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
# Build and run with default profile (dev)
mvn spring-boot:run

# Run with specific Maven profile
mvn spring-boot:run -Pdev      # Development environment
mvn spring-boot:run -Pstaging  # Staging environment
mvn spring-boot:run -Pprod     # Production environment

# Build with specific profile
mvn clean package -Pdev
mvn clean package -Pstaging
mvn clean package -Pprod

# The API will be available at:
# - Development: http://localhost:8080
# - Staging: http://localhost:8081
# - Production: http://localhost:8080
```

## Maven Profiles

The project includes three Maven profiles for different environments:

### Development (`dev`)
- **Port**: 8080
- **Database**: H2 in-memory database
- **Logging**: DEBUG level for application, console output
- **Features**: H2 console enabled, detailed SQL logging
- **Tests**: Enabled
- **Active by default**

### Staging (`staging`)
- **Port**: 8081
- **Database**: MySQL
- **Logging**: INFO level, reduced verbosity
- **Features**: Limited management endpoints
- **Tests**: Enabled

### Production (`prod`)
- **Port**: 8080
- **Database**: MySQL with environment variables
- **Logging**: WARN/ERROR level only
- **Features**: Minimal management endpoints, security hardened
- **Tests**: Skipped for faster builds

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