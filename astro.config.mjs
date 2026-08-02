import { defineConfig } from 'astro/config';

export default defineConfig({
  // 部署到用户页（yourname.github.io）用这个；若是项目页改成 https://yourname.github.io 并加 base: '/blog/'
  site: 'https://yourname.github.io',
  markdown: {
    shikiConfig: {
      // 代码高亮主题，跟随暗色科技风
      theme: 'github-dark',
    },
  },
});
