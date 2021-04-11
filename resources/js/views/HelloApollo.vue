<template>
    <div>
    <h1>Hello Apollo!</h1>
        <ApolloQuery :query="UsersQuery">
            <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">Loading...</div>

                <!-- Error -->
                <div v-else-if="error" class="error apollo">An error occurred</div>

                <!-- Result -->
                <div v-else-if="data" class="result apollo">{{ data }}</div>

                <!-- No result -->
                <div v-else class="no-result apollo">No result :(</div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script>
import UsersQuery from '@/graphql/queries/Users.gql';

export default {
    name: 'HelloApollo',
    data: () => ({
        UsersQuery,
    })
};
</script>

<style scoped>

</style>
