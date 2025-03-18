
# Interface-Segregation Principle (ISP)

- This principle states that interfaces which are extended by classes shouldn't contain redundant method signatures.
- If an interface contains method signature to cater several unrelated classes (essentially getting bloated), that can lead to
issues wherein each class will have to implement the method no matter if that class has a use for it or not.
- To follow ISP, we must split interface accordingly to usage scope so as to keep it specific, and short.
