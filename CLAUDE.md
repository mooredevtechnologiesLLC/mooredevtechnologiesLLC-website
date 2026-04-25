# CLAUDE.md

## Tech Stack
- React webapp
- TypeScript
- Styling: scss
- Testing: Vitest + React Testing Library
- Type Safety: TypeScript in strict mode
- Formatting/Linting: Use Prettier and Eslint for formatting. Follow the established lint/formatting rules.

## Coding Style
- Use functional components and React hooks (avoid class components)
- Use scss for styling and avoid in-line styling
- Use scoped scss to simplify class names (do not use BEM)
- Add documentation to all functions, components, interfaces, types, props, and parameters
- Create unit tests for each component/function aim for 80-100% coverage.
- Add inline comments explaining complex logic
- Use descriptive variable names
- Use async/await for asynchronous code, avoid the use of callbacks
- Prefer using the established scripts in `package.json` for build and development
- Avoid magic number and hardcoded values. Assign them to a constant above the function/component or if likely to be widely used, in a global/higher-level constants file.
