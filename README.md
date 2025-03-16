# NTNU CSIE Camp Site 2025

Welcome to the NTNU CSIE Camp Site project for 2025! This guide will help you get started quickly.

## 🚀 Getting Started

### Step 1: Set Up Your Environment

First, you'll need to set up your development environment:

1. **Install PNPM** (Package Manager):

   - Visit: <https://pnpm.io/installation>
   - Follow the instructions for your operating system

2. **Install Node.js using PNPM**:

   ```bash
   pnpm env use -g lts
   ```

3. **Install Project Dependencies**:

   ```bash
   pnpm install
   ```

### Step 2: Development Workflow

To start working on the project:

1. **Launch the Development Server**:

   ```bash
   pnpm dev
   ```

   This will start a local server, typically at <http://localhost:5173> (check your terminal for the exact URL)

2. **Make Changes**:
   - The site will automatically update when you make changes to the code
   - Check the terminal for any errors if something doesn't work

> Tip: Server-side errors and logs will be displayed in the **terminal**, while client-side errors will appear in the **browser console**. I've seen many people miss this, so be sure to check both!

## 🏗️ Building for Production

When you're ready to create a production version:

```bash
pnpm build
```

This will generate optimized files in the `build` directory.

## 💡 Need Help?

If you encounter any issues or have questions:

- Check the project's issue tracker for known problems
- Refer to the documentation for the tools you're using
  - [PNPM Documentation](https://pnpm.io/pnpm-cli)
  - [Node.js Documentation](https://nodejs.org/en/docs/)
  - [SvelteKit Documentation](https://kit.svelte.dev/docs)
  - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
  - [Flowbite Svelte Documentation](https://flowbite-svelte.com/docs/pages/introduction)
  - [Threlte Documentation](https://threlte.xyz/)
- Ask a team member or the mentor for guidance

Happy coding! 🎉
