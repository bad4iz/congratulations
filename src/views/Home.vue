<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>События месяца</v-card-title>
        <v-card-text>
<!--          <ApolloQuery :query="birthdaysQuery">-->
<!--            <template slot-scope="{ result: { data, loading }, isLoading }">-->
<!--              {{ data }}-->
<!--              <div v-if="isLoading">Loading...</div>-->
<!--            </template>-->
<!--          </ApolloQuery>-->
                    <Calendar />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import Calendar from '@/components/Calendar';
  import birthdaysQuery from '@/graphql/queries/Birthdays.gql';

  export default {
    components: {
      Calendar,
    },
    data() {
      return {
        birthdaysQuery,
      };
    },
  };
</script>
