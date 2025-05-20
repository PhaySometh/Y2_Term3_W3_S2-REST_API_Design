# Reflective Questions

---

**Q1: How do sub-resource routes (e.g., /journalists/:id/articles) improve the organization and clarity of your API?**  
**A1:**  
Sub-resource routes clearly express relationships between resources, making the API more intuitive and easier to navigate. They help clients understand how data is connected (e.g., which articles belong to which journalist) and support RESTful principles by structuring endpoints in a logical, hierarchical way.

---

**Q2: What are the pros and cons of using in-memory dummy data instead of a real database during development?**  
**A2:**  
*Pros:*  
- Fast and easy to set up  
- No external dependencies  
- Great for prototyping and learning  
*Cons:*  
- Data is lost when the server restarts  
- Not suitable for production  
- Cannot handle large datasets or concurrent access

---

**Q3: How would you modify the current structure if you needed to add user authentication for journalists to manage only their own articles?**  
**A3:**  
I would add authentication middleware (e.g., JWT) to verify journalist identity on protected routes. Controllers would check the authenticated journalist’s ID against the `journalistId` in articles to ensure only the owner can create, update, or delete their articles.

---

**Q4: What challenges did you face when linking related resources (e.g., matching journalistId in articles), and how did you resolve them?**  
**A4:**  
Challenges included ensuring IDs matched correctly and handling cases where related resources did not exist. I resolved them by validating IDs, checking for existence before linking, and returning appropriate error responses if a related resource was missing.

---

**Q5: If your API were connected to a front-end application, how would RESTful design help the frontend developer understand how to interact with your API?**  
**A5:**  
RESTful design uses predictable, resource-based URLs and standard HTTP methods, making it easier for frontend developers to understand how to fetch, create, update, or delete data. Clear endpoint naming and consistent responses improve developer experience and reduce confusion.

---