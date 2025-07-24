# LinkedOut - A Satirical LinkedIn Clone

A humorous, satirical take on LinkedIn built with React, TypeScript, and Sass. This project mimics the look and feel of LinkedIn while featuring fake posts that poke fun at typical LinkedIn content.

## Features

- **LinkedIn-style UI**: Authentic look and feel matching LinkedIn's design
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Fake Posts**: Satirical content that parodies common LinkedIn posts
- **Interactive Elements**: Like, comment, share, and send buttons (visual only)
- **Modern Tech Stack**: Built with React 18, TypeScript, and Sass

## Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Sass**: Advanced CSS with nesting and variables
- **Create React App**: Zero-configuration build setup

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linkedout
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Navigation header
│   ├── Feed/           # Main feed container
│   ├── Post/           # Individual post component
│   └── index.ts        # Component exports
├── data/               # Static data
│   └── posts.json      # Fake LinkedIn posts
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── App.tsx             # Main app component
├── App.scss            # Main app styles
└── index.tsx           # App entry point
```

## Features in Detail

### Header Component
- LinkedIn-style navigation bar
- Search functionality (visual only)
- Responsive design with mobile optimization
- Profile picture and navigation items

### Post Component
- Author information with avatar
- Post content with support for text and images
- Engagement metrics (likes, comments, shares)
- Interactive action buttons
- Timestamp display

### Feed Component
- Scrollable feed layout
- Proper spacing and typography
- Mobile-responsive design

## Data Structure

Posts are stored in `src/data/posts.json` with the following structure:

```typescript
interface Post {
  id: number;
  author: {
    name: string;
    title: string;
    avatar: string;
    company: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  image: string | null;
}
```

## Styling

The project uses Sass with BEM methodology for maintainable CSS:
- Modular component styles
- Responsive design with mobile-first approach
- LinkedIn color scheme and typography
- Custom scrollbars and focus states

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is for educational and entertainment purposes only. It is not affiliated with LinkedIn Corporation.

## Acknowledgments

- Inspired by the humorous side of LinkedIn culture
- Built with modern web technologies
- Designed for learning and entertainment
