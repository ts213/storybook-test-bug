<template>
  <div>test content Page.vue</div>
</template>

<script>

export default {
  name: 'my-page',

  mounted() {
    fetch('/test/');
  },

  data() {
    return {
      user: null,
    };
  },

  methods: {
    onLogin() {
      this.user = { name: 'Jane Doe' };
    },
    onLogout() {
      this.user = null;
    },
    onCreateAccount() {
      this.user = { name: 'Jane Doe' };
    },
  },
};
</script>
