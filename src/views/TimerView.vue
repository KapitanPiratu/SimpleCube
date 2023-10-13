<template>
  <div>
    <TimerClock @addTime="addTime" />
    <TimesList :timeslist="timeslist" class="times-list" />
  </div>
</template>

<script>
import TimerClock from '@/components/timer/TimerClock.vue';
import TimesList from '@/components/timer/TimesList.vue';

export default {
  name: 'TimerView',
  components: {
    TimerClock,
    TimesList
  },
  data(){
    return {
      timeslist: []
    }
  },
  methods: {
    addTime(time){
      this.timeslist.unshift(time);
    }
  }
}
</script>

<style>
  .times-list{
      background-color: #4B3757;
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      max-width: 20vw;
      min-width: 20vw;
      max-height: 40vh;
      min-height: 40vh;
      border-radius: 4px;
  }
</style>