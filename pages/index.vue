<template>
  <section class="container">
        {{data}}
  </section>
</template>

<script>
// import axios from '~/plugins/axios'
export default {
  async asyncData () {
     const result = await new Promise(resolve=>{
         resolve ({ data:"test" })
     })
    return result
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>

</style>
