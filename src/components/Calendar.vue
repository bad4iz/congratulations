<template>
  <v-row>
    <v-col>
      <v-sheet>
        <v-calendar :events="events" :weekdays="weekday" locale="ru-RU">
          <template v-slot:event="{event }">
            <div class="ml-2">
              <template v-if="event.type === 'birthday'">
                <v-avatar color="primary" size="15">
                  <img
                    :src="event.avatar || `https://freesvg.org/img/abstract-user-flat-4.png`"
                    :alt="event.name"
                  />
                </v-avatar>
              </template>
              {{event.name}}
            </div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<!--              https://freesvg.org/img/abstract-user-flat-4.png-->

<script>
  export default {
    name: 'Calendar',
    data: () => ({
      weekday: [1, 2, 3, 4, 5, 6, 0],
      events: [
        {
          name: 'Weekly Meeting',
          start: '2021-03-07',
          end: '2021-03-10',
          type: 'meeting',
          color: 'grey darken-1',
        },
        {
          name: 'Weekly Birthday',
          start: '2021-03-07',
          end: '2021-03-07',
          type: 'birthday',
          color: 'green',
        },
        {
          name: `Thomas' Birthday`,
          start: '2021-03-10',
          type: 'birthday',
          color: 'green',
        },
        {
          name: 'Mash Birthday',
          start: '2021-03-09',
          end: '2021-03-09',
          type: 'birthday',
          color: 'green',
        },
        {
          name: 'Jon Dou Birthday',
          start: '2021-03-22',
          end: '2021-03-22',
          type: 'birthday',
          color: 'green',
        },
      ],
    }),
  };
</script>

<style></style>
