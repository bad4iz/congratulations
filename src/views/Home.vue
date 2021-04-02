<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>События месяца</v-card-title>
        <v-card-text>
          <Calendar />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import Calendar from '@/components/Calendar';

  export default {
    components: {
      Calendar,
    },
  };
</script>
