<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ApolloQuery :query="booksBirthdays">
      <template slot-scope="{ result: { data, loading }, isLoading }">
        <div v-if="isLoading">Loading...</div>
          {{data}}

      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import booksBirthdays from '@/graphql/queries/Birthdays.gql'
export default {
  name: "HelloWorld",
  data() {
    return {
      booksBirthdays,
    }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
