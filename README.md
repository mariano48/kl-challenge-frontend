# SF Movie Locations UI

This project is part of the Kindalab code challenge. It is a user interface for displaying movie filming locations in San Francisco.

### Tools:

- Typescript
- React
- React query

## Installation

Follow these steps to get the project up and running:

1. Clone the repository:

```bash
  git clone https://github.com/mariano48/kl-challenge-frontend.git
```

2. Navigate to the project directory:

```
cd kl-challenge-frontend
```

3. Install dependencies:

```
npm install
```

## Running the application

To start the development server, run:

```
npm run dev
```

This will start the app in development mode. Open http://localhost:8000 to view it in your browser.

## Environment variables

The following environment variables must be set:

| Variable Name         | Description              | Default Value           | Required |
| --------------------- | ------------------------ | ----------------------- | -------- |
| `API_BASE_URL`        | The base URL for the API | `http://localhost:9000` | Yes      |
| `GOOGLE_MAPS_API_KEY` | Google Maps API Key      |                         | Yes      |

You can create a `.env` file at the root of the project:

```
API_BASE_URL=http://localhost:9000
GOOGLE_MAPS_KEY=your-google-maps-api-key
```

## Scripts

- Start dev server: `npm run dev`
- Run tests: `npm run test`
