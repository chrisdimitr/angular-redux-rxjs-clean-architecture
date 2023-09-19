### Angular Redux RxJs Clean Architecture

An Angular project leveraging the Clean Architecture and Redux/RxJs design pattern.

## Project Architecture

The project is being developed leveraging the <u>Clean Architecture</u> structure & design principles on par with
<u>Screaming Architecture</u> and <u>DDD (Domain-Driven Design)</u>. It has been popularized by Robert C. Martin (Uncle Bob) and is a software architectural
approach that emphasizes the separation of concerns and the independence of the business logic from the technical implementation details.

Official page: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

This documentation aims to provide an analysis of the Clean Architecture and its key principles, benefits, and components.

### Overview of the Clean Architecture:

The Clean Architecture is an architectural pattern that promotes the creation of systems with high modularity,
maintainability, and testability. The architecture is guided by four essential principles:

- Separation of Concerns
- Dependency Rule
- Use Cases
- Boundaries (Ports and Adapters)

The Clean Architecture divides the system into layers, namely the <u>Entity</u>, <u>Use Case</u>, <u>Interface</u>, and <u>Infrastructure</u> layers.
The architecture enforces a unidirectional dependency flow, with the inner layers being independent of the outer layers.

### Key Components of the Clean Architecture

- #### Entity Layer:

  Represents the enterprise-wide business rules and core models.
  Independent of any specific framework or technology.
  Typically consists of plain data structures and business objects.
  This where we define the 'domain' folder.

- #### Use Case Layer:

  Contains application-specific business rules and logic.
  Encapsulates the use cases or application-specific operations.
  Orchestrates the flow of data between the different layers.
  The flow dictates that the point of entry to the UseCase is through
  the input Ports and the exit point through the output Ports accordingly.
  The Interactor in general implements the input Ports. This is where we define
  the 'ports' folder that consist of 'in' and 'out' folders. As we are using
  redux state management, this is also where we define the 'store' folder.

- #### Interface Layer:

  Defines the interfaces that allow the interaction between the application and external actors (Gateways).
  Includes user interfaces, web APIs, and external systems integration points.
  Should be implemented using platform-specific frameworks and technologies.
  The Gateways in general implement the output Ports and consider to be the Adapters.
  This is where we define the 'gateways' folder that consist of the 'backend' and 'view' folders.

- #### Infrastructure Layer:

  Implements the technical details and frameworks required for the system to work.
  Deals with databases, external services, frameworks, drivers and tools.
  Must depend on the inner layers but not vice versa.
  This is the where we define the 'config' folder for the whole app or inside each business object.

### Benefits of the Clean Architecture:

- #### Maintainability:

  The separation of concerns and clear layer boundaries make it easier to modify or extend the system without affecting other parts.

- #### Testability:

  The architecture promotes unit testing and enables the isolation of business logic, leading to comprehensive test coverage.

- #### Independence:

  The business rules and use cases are independent of the UI, database, or any specific technology, allowing for flexibility and adaptability.

- #### Scalability:

  The clean separation of concerns enables scaling individual components without impacting the entire system.

### Implementation Considerations:

- #### Use of SOLID Principles:

  The Clean Architecture aligns well with the SOLID principles, particularly the Single Responsibility Principle and the Dependency Inversion Principle.

- #### Tooling and Frameworks:

  While the architecture itself is technology-agnostic, selecting appropriate frameworks and tools can simplify development and integration.

- #### Trade-offs:

  The Clean Architecture introduces additional complexity and abstraction, which may not be suitable for small or straightforward projects.

### Conclusion:

The Clean Architecture, introduced by Uncle Bob, provides a powerful approach to designing robust, maintainable,
and scalable software systems. By enforcing a clear separation of concerns and maintaining a unidirectional dependency flow,
the architecture promotes modularity, testability, and adaptability. Understanding and applying the principles of the
Clean Architecture can greatly contribute to the success of software projects, especially those that prioritize
long-term maintainability and flexibility.
