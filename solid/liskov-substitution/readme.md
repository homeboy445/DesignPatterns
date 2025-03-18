
# Liskov-Substitution Principle

- This states that the superclass and the base class should be able to be used interchangeably.
- In simpler terms, a child class should be usable whereever its parent class is, without breaking any functionality.
- This means that the parent and child class should be closely related and should logically be the same, e.g. if a parent class Mamals exist, and class Human inherits it, this breaks Liskov-substitution since if Mamals implements method called 'canBreathUnderwater', then Human can't possibly use it, since Humans can't breath underwater ;D.

The principle defines that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. That requires the objects of your subclasses to behave in the same way as the objects of your superclass. You can achieve that by following a few rules, which are pretty similar to the design by contract concept defined by Bertrand Meyer.

An overridden method of a subclass needs to accept the same input parameter values as the method of the superclass. That means you can implement less restrictive validation rules, but you are not allowed to enforce stricter ones in your subclass. Otherwise, any code that calls this method on an object of the superclass might cause an exception, if it gets called with an object of the subclass.

Similar rules apply to the return value of the method. The return value of a method of the subclass needs to comply with the same rules as the return value of the method of the superclass. You can only decide to apply even stricter rules by returning a specific subclass of the defined return value, or by returning a subset of the valid return values of the superclass.
