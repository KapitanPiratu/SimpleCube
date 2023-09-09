<template>
  <p id="current-time-display" :class="timerStatus">{{currentTime}}</p>
</template>

<script>
  export default {
    name: 'TimerClock',
    data() {
      return {
        currentTime: 0,
        timeStart: null,
        timeEnd: null,
        timerStatus: 'neutral',
        step: 0,
        Steps: [
          {
            name: 'idling',
            nextEventType: 'down',
            func: () => this.readyToInspect()
          },
          {
            name: 'ready to inspect',
            nextEventType: 'up',
            func: () => this.startInspection()
          },
          {
            name: 'inspecting',
            nextEventType: 'down',
            func: () => this.readyToSolve()
          },
          {
            name: 'ready to solve',
            nextEventType: 'up',
            func: () => this.startTimer()
          },
          {
            name: 'solving',
            nextEventType: 'down',
            func: () => this.stopTimer()
          }
        ]
      }
    },
    methods: {
      readyToInspect(){
        this.timerStatus = 'ready';
      },
      startInspection(){
        this.timerStatus = 'inspection';
        this.currentTime = 'inspection';
      },
      readyToSolve(){
        this.timerStatus = 'ready';
      },
      startTimer(){
        this.timeStart = Date.now();
        this.timerStatus = 'solving'
        this.currentTime = 'solving'
      },
      stopTimer(){
        this.timeEnd = Date.now();
        this.currentTime = (this.timeEnd - this.timeStart) / 1000;
        this.timerStatus = 'neutral'
      },
      handleStep(type){
        if (this.Steps[this.step].nextEventType == type){
          this.Steps[this.step].func();
          if (this.step < 4){
            this.step ++;
          }else{
            this.step = 0;
          }
        }
      }
    },
    mounted() {
      window.addEventListener('keydown', () => this.handleStep('down'));
      window.addEventListener('keyup', () => this.handleStep('up'));
    },
  }
</script>

<style scoped>
  #current-time-display{
    font-size: 7rem;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ready{
    color: green;
  }

  .inspection{
    color: white
  }
</style>