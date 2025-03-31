# Dependency Inversion Principle (DIP)

- This principle basically states that high level modules shouldn't depend upon low level modules, i.e both of these modules should be loosely coupled.
- The high & low level should only communicate via a common interface(abstration).
- A high level module is where the bussiness logic of the app resides, example:- Notification service.
- A low level module is where the core logic resides, example:- EmailService, Telephone service etc. which the Notification service will use.

Issues without it:
- Not using DPI and tightly coupling high & low level modules, can lead to issues like:-
  - Less flexibility & modularity when it comes to extending the high level module to other low level modules.
  - Difficulty in Unit testing high level module, due to inability to stub the low level module code.

Benefits:
- Flexibility & modularity, leading to easier extensibilty and ease in unit testing.
