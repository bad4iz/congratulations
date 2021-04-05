<template>
  <div class="posts">
    <h1>PostsView</h1>
    <div v-html="parseMarkdown()"></div>
  </div>
</template>

<script>
  import { markdown } from 'markdown';

  export default {
    data: () => ({
      md: 'asdfsafd',
    }),
    methods: {
      parseMarkdown() {
        return markdown.toHTML(
          'Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it.'
        );
      },
    },
  };
</script>
