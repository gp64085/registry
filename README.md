# 📦 NPM Registry Explorer

> A modern React application for exploring and discovering NPM packages with an intuitive interface.

## ✨ Features

- 🏠 **Featured Packages** - Discover popular packages on the homepage
- 🔍 **Smart Search** - Find packages by name with real-time results
- 📋 **Package Details** - View comprehensive package information
- 🏷️ **Keywords & Tags** - Browse packages by categories
- 📱 **Responsive Design** - Works seamlessly on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd registry

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:5173` to see the app in action!

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **React Router** | Navigation & Routing |
| **Tailwind CSS** | Styling |
| **Vite** | Build Tool |
| **React Icons** | Icon Library |

## 📁 Project Structure

```
src/
├── api/
│   ├── queries/
│   │   ├── getFeaturedPackages.ts    # Featured packages API
│   │   ├── getPackages.ts            # Package details API
│   │   └── searchPackages.ts         # Search functionality
│   └── types/
│       ├── packageDetails.ts         # Package detail types
│       └── packageSummary.ts         # Package summary types
├── components/
│   ├── Header.tsx                    # Navigation header
│   ├── KeywordList.tsx              # Package keywords display
│   ├── PackageListItem.tsx          # Search result item
│   └── SearchInput.tsx              # Search form component
├── pages/
│   ├── details/
│   │   ├── DetailsPage.tsx          # Package detail view
│   │   └── detailsLoader.ts         # Data loader
│   ├── home/
│   │   ├── HomePage.tsx             # Landing page
│   │   └── homeLoader.ts            # Featured packages loader
│   ├── search/
│   │   ├── SearchPage.tsx           # Search results page
│   │   └── searchLoader.ts          # Search data loader
│   └── Root.tsx                     # Layout wrapper
└── App.tsx                          # Router configuration
```

## 🎯 Key Features Explained

### 🏠 Homepage
- Displays 4 featured packages: React, TypeScript, Vite, React Router DOM
- Shows package name, description, and maintainer count
- Quick navigation to package details

### 🔍 Search Functionality
- Real-time search using NPM Registry API
- Displays package name, description, and keywords
- Direct links to detailed package information

### 📋 Package Details
- Complete package information including:
  - Description and license
  - Author and maintainers
  - Keywords and tags
  - Installation instructions

## 🌐 API Integration

The app integrates with the official NPM Registry API:

- **Search**: `https://registry.npmjs.org/-/v1/search?text={term}`
- **Package Details**: `https://registry.npmjs.org/{packageName}`

## 📱 Responsive Design

Built with Tailwind CSS for a mobile-first approach:
- Grid layouts that adapt to screen size
- Responsive typography and spacing
- Touch-friendly interface elements

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 🎨 UI Components

### SearchInput
- Form-based search with navigation
- Integrated with React Router for URL updates

### PackageListItem
- Reusable component for search results
- Displays package metadata and keywords

### KeywordList
- Tag-style display for package keywords
- Responsive grid layout

## 🔧 Development

### Adding New Features
1. Create components in `src/components/`
2. Add pages in `src/pages/`
3. Update routing in `App.tsx`
4. Add API calls in `src/api/queries/`

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using React and TypeScript**