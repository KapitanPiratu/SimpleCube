<template>
  <p id="current-time-display">{{currentTime}}</p>
</template>

<script>
  export default {
    name: 'TimerClock',
    data() {
      return {
        currentTime: 0
      }
    },
  }
</script>

<style>
  #current-time-display{
    font-size: 7rem;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>