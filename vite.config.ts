import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  server: {
    proxy: {
        '/api': {
            target: 'http://34.203.228.146:8080',
            secure: false, 
            rewrite: (path) => path.replace(/^\/api/, ''),
        }
    }
  }
});
