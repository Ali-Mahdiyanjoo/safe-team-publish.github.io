import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/esn-nancy.github.io/safe-team-publish.github.io/',
});
