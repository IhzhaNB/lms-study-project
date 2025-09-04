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
[https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

#### **Basic & Navigation Components**

1.  [**button**](https://ui.shadcn.com/docs/components/button): A command button that triggers an action.
2.  [**alert-dialog**](https://ui.shadcn.com/docs/components/alert-dialog): A modal dialog that interrupts the user with an important message.
3.  [**avatar**](https://ui.shadcn.com/docs/components/avatar): A user profile image or initials.
4.  [**badge**](https://ui.shadcn.com/docs/components/badge): A small count or label.
5.  [**breadcrumb**](https://ui.shadcn.com/docs/components/breadcrumb): Indicates the current page's location within a navigational hierarchy.
6.  [**card**](https://ui.shadcn.com/docs/components/card): A flexible container for displaying related content.
7.  [**chart**](https://ui.shadcn.com/docs/components/chart): Displays data in a visual format.
8.  [**collapsible**](https://ui.shadcn.com/docs/components/collapsible): A component that can be expanded or collapsed to show or hide content.
9.  [**dropdown-menu**](https://ui.shadcn.com/docs/components/dropdown-menu): A menu that appears when a button is clicked.
10. [**tabs**](https://ui.shadcn.com/docs/components/tabs): A set of layered sections of content.
11. [**toggle-group**](https://ui.shadcn.com/docs/components/toggle-group): A set of interactive toggle buttons.
12. [**toggle**](https://ui.shadcn.com/docs/components/toggle): A two-state button that can be either on or off.
13. [**tooltip**](https://ui.shadcn.com/docs/components/tooltip): A popover that displays a brief description when a user hovers over an element.

---

#### **Input & Form Components**

14. [**checkbox**](https://ui.shadcn.com/docs/components/checkbox): A control that allows the user to select one or more options.
15. [**form**](https://ui.shadcn.com/docs/components/form): A container for input fields.
16. [**input-otp**](https://ui.shadcn.com/docs/components/input-otp): An input field for One-Time Passcodes (OTP).
17. [**label**](https://ui.shadcn.com/docs/components/label): A label for an input field.
18. [**select**](https://ui.shadcn.com/docs/components/select): A dropdown list for selecting a single option.
19. [**textarea**](https://ui.shadcn.com/docs/components/textarea): A multiline text input field.

---

#### **UI & Indicators**

20. [**progress**](https://ui.shadcn.com/docs/components/progress): A bar that indicates the completion status of a process.
21. [**separator**](https://ui.shadcn.com/docs/components/separator): A visual divider to separate content.
22. [**skeleton**](https://ui.shadcn.com/docs/components/skeleton): A placeholder component used to indicate a loading state.
23. [**sonner**](https://ui.shadcn.com/docs/components/sonner): A toast notification for displaying alerts and messages.
24. [**table**](https://ui.shadcn.com/docs/components/table): A component for displaying data in a table format.

---

#### **Overlay & Modal Components**

25. [**dialog**](https://ui.shadcn.com/docs/components/dialog): A floating dialog box that displays content on top of the main screen.
26. [**drawer**](https://ui.shadcn.com/docs/components/drawer): A panel that slides in from the edge of the screen.
27. [**sheet**](https://ui.shadcn.com/docs/components/sheet): A dialog that slides in from the side of the screen.

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
