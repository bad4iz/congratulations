<template>
  <v-card>
    <v-card-text>
      <div>Создать событие - день рождения</div>
    </v-card-text>
    <v-card-text>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="День рождения"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="date"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          locale="ru"
          first-day-of-week="1"
          @change="save"
        ></v-date-picker>
      </v-menu>
      <ApolloQuery :query="UsersQuery">
        <template slot-scope="{ result: { data:{users}, loading }, isLoading }">
          <div v-if="isLoading">Loading...</div>
          <v-autocomplete
            v-else
            v-model="user"
            :disabled="isUpdating"
            :items="users.data"
            filled
            chips
            label="Пользователь"
            item-text="name"
            item-value="id"
          >
            <template v-slot:selection="data">
              <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close
                @click="data.select"
                @click:close="remove(data.item)"
              >
                <v-avatar left>
                  <v-img :src="data.item.avatar || `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F34574810%3Fs%3D400%26v%3D4&f=1&nofb=1`" />
                </v-avatar>
                {{ data.item.name }}
              </v-chip>
            </template>
            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-item-content v-text="data.item"></v-list-item-content>
              </template>
              <template v-else>
                <v-list-item-avatar>
                  <img :src="data.item.avatar || `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F34574810%3Fs%3D400%26v%3D4&f=1&nofb=1`" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    v-html="data.item.name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="data.item.email"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </template>
          </v-autocomplete>
        </template>
      </ApolloQuery>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn>отмена</v-btn>
      <v-btn color="primary" @click="addBirthDay" :disabled="!user || !date"
        >создать</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
  import UsersQuery from '@/graphql/queries/Users.gql';
  import AddBirthDayMutation from '@/graphql/mutations/AddBirthDay.gql';

  export default {
    name: 'CreateEvent',
    data: () => ({
      UsersQuery,
      user: null,
      isUpdating: false,
      date: null,
      menu: false,
    }),
    watch: {
      menu(val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'));
      },
    },
    methods: {
      remove() {
        this.friends = null;
      },
      save(date) {
        this.$refs.menu.save(date);
      },
      addBirthDay() {
        console.log(this.date);
        const [, month, day] = this.date.split('-');

        this.$apollo
          .mutate({
            // Query
            mutation: AddBirthDayMutation,
            // Parameters
            variables: {
              // title: 'sdfa',
              // description: 'ssdf',
              user_id: +this.user,
              day,
              month,
              start_date: this.date,
            },
          })
          .then((data) => {
            // Result
            this.user = null;
            this.date = null;
            console.log(data);
          })
          .catch((error) => {
            // Error
            console.error(error);
            // We restore the initial user input
            // this.newTag = newTag;
          });
      },
    },
  };
</script>

<style scoped></style>
