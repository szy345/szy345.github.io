import { defineConfig } from 'astro/config';

export default defineConfig({
  // 用户页（szy345.github.io），部署在根路径
  site: 'https://szy345.github.io',
  markdown: {
    shikiConfig: {
      // 代码高亮主题，跟随暗色科技风
      theme: 'github-dark',
    },
  },
});
