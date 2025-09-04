This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To set up the project, run the **CLI wizard** using the command below. You'll be presented with a series of questions to configure your project, such as choosing your preferred linter, styling framework, and directory structure.

```bash
npx create-next-app@latest
```

You'll be asked to configure your project with the following options:

- **Would you like to use TypeScript?** `No / Yes`
- **Which linter would you like to use?** `ESLint`
- **Would you like to use Tailwind CSS?** `No / Yes`
- **Would you like your code inside a `src/` directory?** `No / Yes`
- **Would you like to use App Router?** `No / Yes`
- **Would you like to use Turbopack?** `No / Yes`
- **Would you like to customize the import alias?** `No / Yes`

## Installation & Setup

To get started, first, install the core `shadcn/ui` library in your project by running the following command in your terminal. This will set up the necessary configuration files.

```bash
npx shadcn-ui@latest init
```

### Adding Components

After initialization, you can add individual components to your project. Use the command below, replacing the list with the specific components you need.

```bash
npx shadcn-ui@latest add [component-1] [component-2] [component-3]
```

For convenience, here are the commands to add a comprehensive list of common components:

```bash
npx shadcn-ui@latest add button alert-dialog avatar badge breadcrumb card chart checkbox collapsible dialog drawer dropdown-menu form input-otp input label progress select separator sheet skeleton sonner table tabs textarea toggle-group toggle tooltip
```

### Component Documentation

Below is a categorized list of the available components, with direct links to their official documentation. You can use these links to learn more about each component's usage, props, and examples.

#### **Basic & Navigation Components**

1.  **button:** A command button that triggers an action. [https://ui.shadcn.com/docs/components/button](https://ui.shadcn.com/docs/components/button)
2.  **alert-dialog:** A modal dialog that interrupts the user with an important message. [https://ui.shadcn.com/docs/components/alert-dialog](https://ui.shadcn.com/docs/components/alert-dialog)
3.  **avatar:** A user profile image or initials. [https://ui.shadcn.com/docs/components/avatar](https://ui.shadcn.com/docs/components/avatar)
4.  **badge:** A small count or label. [https://ui.shadcn.com/docs/components/badge](https://ui.shadcn.com/docs/components/badge)
5.  **breadcrumb:** Indicates the current page's location within a navigational hierarchy. [https://ui.shadcn.com/docs/components/breadcrumb](https://ui.shadcn.com/docs/components/breadcrumb)
6.  **card:** A flexible container for displaying related content. [https://ui.shadcn.com/docs/components/card](https://ui.shadcn.com/docs/components/card)
7.  **chart:** Displays data in a visual format. [https://ui.shadcn.com/docs/components/chart](https://ui.shadcn.com/docs/components/chart)
8.  **collapsible:** A component that can be expanded or collapsed to show or hide content. [https://ui.shadcn.com/docs/components/collapsible](https://ui.shadcn.com/docs/components/collapsible)
9.  **dropdown-menu:** A menu that appears when a button is clicked. [https://ui.shadcn.com/docs/components/dropdown-menu](https://ui.shadcn.com/docs/components/dropdown-menu)
10. **tabs:** A set of layered sections of content. [https://ui.shadcn.com/docs/components/tabs](https://ui.shadcn.com/docs/components/tabs)
11. **toggle-group:** A set of interactive toggle buttons. [https://ui.shadcn.com/docs/components/toggle-group](https://ui.shadcn.com/docs/components/toggle-group)
12. **toggle:** A two-state button that can be either on or off. [https://ui.shadcn.com/docs/components/toggle](https://ui.shadcn.com/docs/components/toggle)
13. **tooltip:** A popover that displays a brief description when a user hovers over an element. [https://ui.shadcn.com/docs/components/tooltip](https://ui.shadcn.com/docs/components/tooltip)

#### **Input & Form Components**

14. **checkbox:** A control that allows the user to select one or more options. [https://ui.shadcn.com/docs/components/checkbox](https://ui.shadcn.com/docs/components/checkbox)
15. **form:** A container for input fields. [https://ui.shadcn.com/docs/components/form](https://ui.shadcn.com/docs/components/form)
16. **input-otp:** An input field for One-Time Passcodes (OTP). [https://ui.shadcn.com/docs/components/input-otp](https://ui.shadcn.com/docs/components/input-otp)
17. **label:** A label for an input field. [https://ui.shadcn.com/docs/components/label](https://ui.shadcn.com/docs/components/label)
18. **select:** A dropdown list for selecting a single option. [https://ui.shadcn.com/docs/components/select](https://ui.shadcn.com/docs/components/select)
19. **textarea:** A multiline text input field. [https://ui.shadcn.com/docs/components/textarea](https://ui.shadcn.com/docs/components/textarea)

#### **UI & Indicators**

20. **progress:** A bar that indicates the completion status of a process. [https://ui.shadcn.com/docs/components/progress](https://ui.shadcn.com/docs/components/progress)
21. **separator:** A visual divider to separate content. [https://ui.shadcn.com/docs/components/separator](https://ui.shadcn.com/docs/components/separator)
22. **skeleton:** A placeholder component used to indicate a loading state. [https://ui.shadcn.com/docs/components/skeleton](https://ui.shadcn.com/docs/components/skeleton)
23. **sonner:** A toast notification for displaying alerts and messages. [https://ui.shadcn.com/docs/components/sonner](https://ui.shadcn.com/docs/components/sonner)
24. **table:** A component for displaying data in a table format. [https://ui.shadcn.com/docs/components/table](https://ui.shadcn.com/docs/components/table)

#### **Overlay & Modal Components**

25. **dialog:** A floating dialog box that displays content on top of the main screen. [https://ui.shadcn.com/docs/components/dialog](https://ui.shadcn.com/docs/components/dialog)
26. **drawer:** A panel that slides in from the edge of the screen. [https://ui.shadcn.com/docs/components/drawer](https://ui.shadcn.com/docs/components/drawer)
27. **sheet:** A dialog that slides in from the side of the screen. [https://ui.shadcn.com/docs/components/sheet](https://ui.shadcn.com/docs/components/sheet)

---

**NOTE:** This project uses components from [**neobrutalism.dev**](https://www.neobrutalism.dev/), not `shadcn/ui`, although the installation process and component structure are similar.

## UI Login

This project includes a **Login UI** page, which is a basic user interface without any authentication logic. The page is organized within a route group to manage authentication-related pages..

### Project Structure

```
app/
├── (auth)/
│   │── login/
│   │   └── page.jsx
│   └── layout.tsx
├── globals.css
├── layout.jsx
└── page.jsx
```

- `app/(auth)/login/page.jsx`: This is the Login UI component. The`(auth)` folder is a route group that helps organize authentication-related pages without affecting the URL path.

- `app/page.jsx`: The main landing page of the application.
