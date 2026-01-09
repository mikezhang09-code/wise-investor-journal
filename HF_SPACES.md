# HuggingFace Spaces Deployment

## Overview

This project is configured to deploy on HuggingFace Spaces with proper routing and asset path handling.

## Configuration

### Vite Config (`vite.config.ts`)

The project uses environment variables to set the base path for HuggingFace Spaces:

```typescript
const basePath = process.env.VITE_BASE_PATH || './';
```

- `VITE_BASE_PATH`: Sets the base path for assets and router (e.g., `/proxy/4173/`)
- `VITE_ROUTER_BASE`: Sets the React Router basename (same value as `VITE_BASE_PATH`)

### React Router (`src/App.tsx`)

The `BrowserRouter` uses the environment variable:

```tsx
<BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE || '/'}>
```

## Scripts (`package.json`)

```json
{
  "build:space": "VITE_BASE_PATH=/proxy/4173/ VITE_ROUTER_BASE=/proxy/4173/ vite build",
  "preview:space": "vite preview --host 0.0.0.0 --port 4173"
}
```

## Deployment Steps

### For HuggingFace Spaces

1. Build with correct paths:
   ```bash
   npm run build:space
   ```

2. Start preview server:
   ```bash
   npm run preview:space
   ```

### For Local Development

1. Regular build (assets at root):
   ```bash
   npm run build
   ```

2. Preview locally:
   ```bash
   npm run preview
   ```

## How It Works

1. **`VITE_BASE_PATH`**: Prepends this path to all asset references in `index.html` (CSS, JS files)
2. **`VITE_ROUTER_BASE`**: Sets React Router's basename so routes work correctly under the proxy path
3. **`--host 0.0.0.0`**: Makes the preview server accessible externally (required for HF Spaces)
4. **`preview.allowedHosts`**: Configured in `vite.config.ts` to allow the HF Spaces hostname

## Port Configuration

| Environment | Port |
|------------|------|
| Local dev | 5173 (Vite default) |
| HF Spaces preview | 4173 |
| Server | 8080 |

## Applying to Other Projects

To add HF Spaces support to another project:

1. Update `vite.config.ts`:
   - Add `base: process.env.VITE_BASE_PATH || './'` to the config
   - Add `preview.allowedHosts` with your HF Spaces hostname
   - Set `server.host: "0.0.0.0"` and `preview.host: "0.0.0.0"`

2. Update `src/App.tsx`:
   - Add basename to `BrowserRouter`: `basename={import.meta.env.VITE_ROUTER_BASE || '/'}`

3. Update `package.json` scripts:
   - Add `build:space` script with env vars
   - Add `preview:space` script with `--host 0.0.0.0 --port <port>`
