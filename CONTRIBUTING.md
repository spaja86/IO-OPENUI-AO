# Contributing Guidelines

Thank you for your interest in contributing to the **IO-OPENUI-AO** repository! By participating in this project, you agree to abide by the following guidelines:

## Git Workflow using Feature Branches

1. **Feature Branches**: Always create a new branch for each feature or bugfix. Use a naming convention that includes the type of change:
   - Feature branches: `feature/*`
   - Bugfix branches: `bugfix/*`

   For example, if you're adding a new login feature, you might name your branch `feature/login`.  If you're fixing a bug in the login feature, you might use `bugfix/login-bug`.

2. **Branch Protection Rules for `main`**: 
   - Do not push directly to the `main` branch. All changes must be made via pull requests.
   - Ensure that the `main` branch is protected in the repository settings to enforce these rules.

## Commit Message Guidelines
- Write clear, concise commit messages that describe the changes made.
- Use the following structure for commit messages:
  - **Title**: A brief summary of the changes (50 characters or less).
  - **Body**: An optional detailed explanation of the changes.

Example format:
```
TYPE: Subject

Body of the message explaining the changes.
```

## Pull Request Requirements  
- When opening a pull request, make sure to:
  - Include a description of the changes and the reasons for them.
  - Link any relevant issues or feature requests.
  - Ensure that your pull request passes all tests and checks before requesting a review.
  - Assign at least one reviewer from the team. 

## Code Review Process
- All pull requests will be reviewed by at least one team member. 
- Reviewers will provide feedback, and you may need to make additional changes based on their suggestions.
- Once approved, the pull request can be merged into the `main` branch.

Thank you for contributing to the **IO-OPENUI-AO** project! Your efforts are greatly appreciated.