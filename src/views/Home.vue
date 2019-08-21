<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div @click="changeName">1212</div>
    <input type="text" v-model="value" @change="valChange" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      msg: "lisi"
    };
  },
  created() {
    // console.log(this.$store.state.name);
  },
  updated() {},
  methods: {
    changeName() {
      this.$store.commit("changeName", this.msg);
      console.log(this.$store.state.name);
    },
    valChange() {
      console.log(this.$store.state.value);
    }
  },
  computed: {
    value: {
      get() {
        return this.$store.state.value;
      },
      set(value) {
        this.$store.commit("changeVal", value);
      }
    }
  }
};
</script>
