---
# Code Structure and Conventions

This document outlines the coding standards and structure rules for this Next.js application to ensure consistency, readability, and maintainability across the codebase.
---

## **General JavaScript/TypeScript Conventions**

1. **Variable Naming**: Use `camelCase` for variable and function names.
   ```javascript
   const userName = 'John';
   function fetchData() {}
   ```
2. **Constants**: Use `UPPER_SNAKE_CASE` for constants.
   ```javascript
   const API_BASE_URL = 'https://example.com/api';
   ```
3. **Class Names**: Use `PascalCase` for React components and classes.
   ```javascript
   class UserProfile {}
   export default function UserCard() {}
   ```
4. **File Names**: Use `camelCase` for file names.
   ```bash
   components/userCard.js
   pages/dashboard.js
   ```

---

## **Folder Structure**

Organize the project into the following structure:

```
src/
├── app/                 # Application routing and layout structure
│   ├── api/             # API routes
│   │   ├── [route]/     # Dynamic API routes
│   │   └── route.js     # API route definitions
│   ├── layout.js        # Root layout component
│   ├── page.js          # Homepage (default route)
│   ├── [slug]/          # Dynamic route folder
│   │   ├── page.js      # Page for the dynamic route
│   │   ├── layout.js    # Layout specific to this route (optional)
│   │   └── loading.js   # Loading state for the route (optional)
│   └── dashboard/       # Nested route folder (e.g., `/dashboard`)
│       ├── page.js      # Dashboard main page
│       └── settings/    # Nested sub-route (e.g., `/dashboard/settings`)
│           └── page.js  # Settings page
├── components/          # Reusable UI components with stories
│   ├── Button/          # Folder for the Button component
│   │   ├── Button.tsx   # Button component implementation
│   │   ├── Button.stories.tsx # Storybook stories for Button
│   │   ├── Button.types.ts    # Type definitions for Button
│   ├── Card/            # Folder for the Card component
│   │   ├── Card.tsx     # Card component implementation
│   │   ├── Card.stories.tsx   # Storybook stories for Card
│   │   ├── Card.types.ts      # Type definitions for Card
│   ├── Input/           # Folder for the Input component
│   │   ├── Input.tsx    # Input component implementation
│   │   ├── Input.stories.tsx  # Storybook stories for Input
│   │   ├── Input.types.ts     # Type definitions for Input
│   └── index.ts         # Barrel file for exporting components
├── styles/              # Global and component-specific styles
├── hooks/               # Custom React hooks
├── public/              # Static assets like images, icons, and fonts
├── types/               # TypeScript type definitions


```

---

## **Component-Specific Rules**

1. **Functional Components**: Use functional components over class components.
   ```javascript
   const UserCard = () => {
     return <div>User Card</div>;
   };
   export default UserCard;
   ```
2. **Component Files**: Each file should contain one component. Name the file after the component (e.g., `UserCard` → `user-card.js`).
3. **Props**: Destructure props in function arguments for clarity.
   ```javascript
   const UserCard = ({ name, age }) => (
     <div>
       {name}, {age}
     </div>
   );
   ```

---

## **CSS/Styling**

1. Use **Tailwind CSS** for styling wherever possible:
   ```html
   <div className="p-4 bg-gray-100 rounded-md"></div>
   ```
2. For custom CSS, follow the **BEM methodology** or use `camelCase` for class names:
   ```css
   .user-card__title {
     font-size: 16px;
   }
   ```

---

## **TypeScript (if applicable)**

1. Use `PascalCase` with `i` at the start for types and interfaces.
   ```typescript
   interface iUserProfile {
     id: number;
     name: string;
   }
   ```
2. Store all type definitions in a `types/` folder.

---

## **Linting and Formatting**

1. Use **Prettier** for code formatting.
2. Extend the configuration with VSCode settings:

   ```json
   // .vscode/settings.json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```

---

## **Dynamic Imports**

Use dynamic imports for heavy components or libraries to optimize performance.

```javascript
const Chart = dynamic(() => import('../components/Chart'), { ssr: false });
```

---

## **Alias Imports**

Set up aliases in `tsconfig.json` or `jsconfig.json` for cleaner imports:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

Usage:

```javascript
import UserCard from '@/components/usercard';
```

---

By following these conventions, the codebase will remain clean, maintainable, and easy to navigate for all contributors. For further clarifications or updates to these rules, refer to the contributing guidelines.
# Story-Book-POC
# story-book
