<template>
  <section class="container">
    <vue-user-photo></vue-user-photo>
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li class="btn"><nuxt-link to="/mobile/user">手机版</nuxt-link></li>
      <li class="btn"><nuxt-link to="/pc">pc版</nuxt-link></li>
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    async asyncData() {
      const {data} = await axios.get('/api/users')
      return {users: data}
    },
    head() {
      return {
        title: 'Users'
      }
    },
    components: {

    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";
  .container{
    text-align: center;
    padding-top: px2rem(60px);
  }
  .logo {
    width: 100%;
    height: auto;
    max-width: px2rem(800px);
    max-height: px2rem(578px);
  }

  .title {
    margin: px2rem(60px) 0;
  }

  .users {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .user {
    margin: px2rem(20px) 0;
  }
  .btn {
    line-height: 2;
    border: px2rem(2px) solid $disabled;
    border-radius: 999px;
    margin-top: px2rem(24px);
    a {
      color: $primary;
    }
  }
</style>
