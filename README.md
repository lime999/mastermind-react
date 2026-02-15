# Mastermind React

A modern, web-based implementation of the classic Mastermind code-breaking game, built with React and Next.js.

## 🚀 Features

- **Classic Gameplay**: Guess the 4-color secret code in 10 attempts.
- **Interactive Board**: Easy-to-use UI for selecting colors and verifying guesses.
- **Instant Feedback**: Intelligent logic provides precise feedback on your guesses.
- **Win/Loss States**: Clear notifications and the ability to view the secret solution.
- **Fully Responsive**: Playable on desktops and mobile devices.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library**: [React 19+](https://reactjs.org/)
- **Styling**: [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Testing**: [Jest](https://jestjs.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

- `src/app`: Page components and global styles.
- `src/components`: Reusable UI components (Pins, Rows, Popups).
- `src/lib`: Core game logic and utility functions (pure and testable).

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lime999/mastermind-react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mastermind-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To run the development server:
```bash
npm run dev
```
Open [http://localhost:3000/mastermind-react](http://localhost:3000/mastermind-react) to view it in your browser.

## 🧪 Testing

This project emphasizes test-driven development for core game logic.

To run the test suite:
```bash
npm test
```

## 📝 License

This project is open-source and available under the MIT License.