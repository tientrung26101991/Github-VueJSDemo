<template>
  <div class="design">
    <h1>Design by:{{ name }}</h1>
    <input type="text" v-model="name" />
  </div>
</template>

<script>

export default {
  name: "footer",

  data() {
    return {
      name: null,
    };
  },

  components: {
  },

  methods: {
    click() {
      this.name = name;
    },
  },
};
</script>

<style>

.design h1{
  background-color: lightgray;
}
</style>
