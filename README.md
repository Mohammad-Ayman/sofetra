# User Dashboard with Next.js and GitHub Integration

## Overview

This project demonstrates how to build a user dashboard using **Next.js** with integration to the **GitHub API**. It focuses on creating a seamless user experience, optimized performance, and clean code practices.

---

## Requirements

### Homepage

- Create a homepage featuring a **Login** button.  
  *(Note: No real authentication is required; mock the user.)*

---

### User Dashboard

After login, redirect the user to `/dashboard`, where the following features are available:

1. **Repository List**  
   Fetch and display a list of GitHub repositories using the [GitHub API Docs](https://docs.github.com/en/rest).  
   
2. **Search Bar**  
   Filter repositories by name in real-time.

---

### Styling

- Utilize **TailwindCSS** for a modern and responsive design.

---

### Optimizations

- Use `<Image />` for rendering user avatars retrieved from the GitHub API.
- Leverage `dynamic()` from Next.js for **lazy loading** the dashboard page.

---

## GitHub Workflow

- Commit the project to a GitHub repository.
- Push the repository and share the link for review.

---

## Extras (Optional)

- Add a **custom 404 page** for an improved user experience.
- Deploy the project on **Vercel** for public access.

---

## Evaluation Criteria

1. **Code Quality**  
   - Clean, modular, and adheres to best practices.

2. **Functionality**  
   - Fulfills the listed requirements and handles edge cases effectively.

3. **Git Workflow**  
   - Well-structured commits with clear messages and an organized repository.

4. **Time Management**  
   - Completed or mostly completed within **45 minutes**.

5. **Bonus Points**  
   - Deployed to Vercel and/or extras implemented.

