# Reflective Questions

---

**Q1: Why is separating concerns (routes, controllers, models, middleware) important in backend development?**  
**A1:**  
Separating concerns makes the codebase easier to understand, maintain, and scale. Each part of the application has a clear responsibility, reducing complexity and making it easier to debug or update specific features without affecting unrelated code.

---

**Q2: What challenges did you face when refactoring the monolithic server.js into multiple files?**  
**A2:**  
Common challenges include managing import/export syntax, ensuring correct file paths, and understanding how to properly organize logic between files. It can also be tricky to debug issues caused by missing or incorrect exports and to maintain consistent naming conventions.

---

**Q3: How does moving business logic into controllers improve the readability and testability of your code?**  
**A3:**  
Controllers isolate business logic from routing, making each file simpler and more focused. This separation allows for easier unit testing of logic without involving HTTP request/response objects and improves overall code readability.

---

**Q4: If this project were to grow to support authentication, database integration, and logging, how would this folder structure help manage that growth?**  
**A4:**  
A modular folder structure allows new features (like authentication or database logic) to be added as separate modules or middleware without cluttering existing code. This organization makes it easier to scale, maintain, and collaborate on the project as it grows.

---