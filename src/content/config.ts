---
import Layout from '../layouts/Layout.astro';
import { getEntry } from 'astro:content';

// 這行指令會去把我們剛剛寫的筆記抓出來
const entry = await getEntry('promise', 'my-promise');
const { Content } = await entry.render();
---

<Layout>
  <div class="content">
    <Content />
    
    <a href="/Jasmine.memory" class="back-link">回到夢境時光</a>
  </div>
</Layout>

<style>
  .content { 
    text-align: center; 
    max-width: 600px; 
    margin: 0 auto; 
    padding-top: 10vh; 
    color: white; 
    line-height: 1.8; /* 讓文字行距舒服一點，像書一樣 */
  }
  .back-link { color: #ffd1dc; }
</style>