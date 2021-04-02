<template>
  <v-row>
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
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
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
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
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      events: [
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
      ],
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
      updateRange({ start, end }) {
        const events = [];

        const min = new Date(`${start.date}T00:00:00`);
        const max = new Date(`${end.date}T23:59:59`);
        const days = (max.getTime() - min.getTime()) / 86400000;
        const eventCount = this.rnd(days, days + 20);

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0;
          const firstTimestamp = this.rnd(min.getTime(), max.getTime());
          const first = new Date(firstTimestamp - (firstTimestamp % 900000));
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
          const second = new Date(first.getTime() + secondTimestamp);

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          });
        }

        this.events = events;
      },
      rnd(a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a;
      },
    },
  };
</script>

<style scoped></style>
