
# Liskov-Substitution Principle

- This states that the superclass and the base class should be able to be used interchangeably.
- In simpler terms, a child class should be usable whereever its parent class is, without breaking any functionality.
- This means that the parent and child class should be closely related and should logically be the same, e.g. if a parent class Mamals exist, and class Human inherits it, this breaks Liskov-substitution since if Mamals implements method called 'canBreathUnderwater', then Human can't possibly use it, since Humans can't breath underwater ;D.
