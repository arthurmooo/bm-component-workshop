import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
 plugins:[react()],
 build:{outDir:'lib',lib:{entry:'src/design-system/index.ts',formats:['es'],fileName:'index',cssFileName:'style'},rollupOptions:{external:['react','react-dom','react/jsx-runtime','motion/react']}},
});
