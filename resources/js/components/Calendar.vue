<template>
  <v-row>
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Сегодня
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>День</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Неделя</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Месяц</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet>
        <v-calendar
          ref="calendar"
          :events="events"
          :type="type"
          :weekdays="weekday"
          locale="ru-RU"
          v-model="focus"
          @change="updateRange"
        >
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

<script>
  const data = new Date();
  const monthCurrent = data.getMonth() + 1;

  export default {
    name: 'CalendarViews',
    data: () => ({
      weekday: [1, 2, 3, 4, 5, 6, 0],
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Месяц',
        week: 'Неделя',
        day: 'День',
      },
      events: [],
    }),
    mounted() {
      this.$refs.calendar.checkChange();
    },
    methods: {
      viewDay({ date }) {
        this.focus = date;
        this.type = 'day';
      },
      getEventColor(event) {
        return event.color;
      },
      setToday() {
        this.focus = '';
      },
      prev() {
        this.$refs.calendar.prev();
      },
      next() {
        this.$refs.calendar.next();
      },
      showEvent({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event;
          this.selectedElement = nativeEvent.target;
          setTimeout(() => {
            this.selectedOpen = true;
          }, 10);
        };

        if (this.selectedOpen) {
          this.selectedOpen = false;
          setTimeout(open, 10);
        } else {
          open();
        }

        nativeEvent.stopPropagation();
      },
      updateRange() {
        const events = [
          {
            name: 'Weekly Meeting',
            start: `2021-${monthCurrent}-07`,
            end: `2021-${monthCurrent}-10`,
            type: 'meeting',
            color: 'grey darken-1',
          },
          {
            name: 'Weekly Birthday',
            start: `2021-${monthCurrent}-07`,
            type: 'birthday',
            color: 'green',
          },
          {
            name: `Thomas' Birthday`,
            start: `2021-${monthCurrent}-10`,
            type: 'birthday',
            color: 'green',
          },
          {
            name: 'Mash Birthday',
            start: `2021-${monthCurrent}-09`,
            type: 'birthday',
            color: 'green',
          },
          {
            name: 'Jon Dou Birthday',
            start: `2021-${monthCurrent}-22`,
            type: 'birthday',
            color: 'green',
          },
        ];


        this.events = events;
      },
      rnd(a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a;
      },
    },
  };
</script>

<style scoped></style>
