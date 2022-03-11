<!-- Please remove this file from your project -->
<template>
  <b-tabs pills card vertical>
      <b-tab title="1" active><exercise-1/></b-tab>
      <b-tab title="2"><exercise-2/></b-tab>
      <b-tab title="3"><exercise-3/></b-tab>
      <b-tab title="4"><exercise-4/></b-tab>
      <b-tab title="5"><exercise-5/></b-tab>
      <b-tab title="6"><exercise-6/></b-tab>
  </b-tabs>
</template>

<script>
import Exercise1 from '@/components/exercises/ex-1/Exercise1.vue'
import Exercise2 from '@/components/exercises/ex-2/Exercise2.vue'
import Exercise3 from '@/components/exercises/ex-3/Exercise3.vue'
import Exercise4 from '@/components/exercises/ex-4/Exercise4.vue'
import Exercise5 from '@/components/exercises/ex-5/Exercise5.vue'
import Exercise6 from '@/components/exercises/ex-6/Exercise6.vue'

export default {
  components: {
    Exercise1,
    Exercise2,
    Exercise3,
    Exercise4,
    Exercise5,
    Exercise6
  }
}
</script>
