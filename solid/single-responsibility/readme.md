# Single Responsibility Principle

- This is a crucial component of the SOLID principles.
- It essentially asserts that a class should have a single responsibility.
- What it means is that every functionality should have a separated and isolated component, so that changes in one component (class) do not affect the others.

## Benefits:
- Employing this principle in code ensures less regression, as an isolated component is less likely to impact other components.
- It boosts code readability by reducing the overhead of information that a component has. For example, if you have a database class whose sole purpose is to interact with the database, you will not have to worry about any other component's functionality apart from this.
- Helps prevent unexpected issues by separating scope.
