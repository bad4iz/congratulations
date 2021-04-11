<template>
  <v-row>
    <v-col>
      <calendar/>
    </v-col>
    <v-col>
      <CreateEvent/>
    </v-col>
  </v-row>
</template>

<script>
  import Calendar from '@/components/Calendar';
  import CreateEvent from '@/components/forms/CreateEvent';

  export default {
    name: 'CalendarViews',
    components: {
      Calendar,
      CreateEvent
    },
    data: () => ({  }),

  };
</script>

<style scoped></style>
