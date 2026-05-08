# ProjectVault
A minimalist project showcase built for the modern developer.

ProjectVault is a clean, responsive dashboard designed to manage and display development projects. It features real-time search, category filtering, and a toggle system for project descriptions to maintain a clean interface.

## Key Features
- Dynamic Gallery: Renders image previews for every project.
- Expandable Details: Toggle system to view project descriptions without breaking the grid layout.
- Instant Search: Multi-field filtering by Title, Category, and Description.
- Validation: Browser-level URL validation for image inputs.
- WSL Optimized: Developed and tested within the Windows Subsystem for Linux (Ubuntu) environment.

## Tech Stack
- React + Vite
- Tailwind CSS (Styling and Grid)
- Lucide React (Iconography)
- Shadcn UI (Component Architecture)

## Setup and Installation

1. Install dependencies:
```
   npm install
```   

2. Start the development server:
```
   npm run dev
```

3. Build for production:
```
   npm run build
```  

## Usage Instructions
1. Add Projects: Use the form to input project metadata. Use valid image URLs for thumbnails.
2. View Info: Click the chevron icon on any card to expand or collapse the project description.
3. Search: Use the search bar to filter the vault instantly.

## Known Limitations
- State Persistence: Projects reset on page refresh as localStorage integration is pending.
- Static Assets: Currently supports external image URLs only; direct file uploads are not supported.

---
Developed with React in WSL.
















