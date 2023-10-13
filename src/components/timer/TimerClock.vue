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
        inspectionRunning: false,
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
      wait(ms){
        return new Promise(resolve => this.timeoutid = setTimeout(resolve, ms));
      },
      async startInspection(){
        this.timerStatus = 'inspection';
        this.currentTime = 15;
        this.inspectionRunning = true
        let i = 0;
        while (i < 17 && this.inspectionRunning){
          await this.wait(1000)
          .then(() => {
            if (i <= 13) this.currentTime--;
          });
          if (i > 5) {
            this.timerStatus = 'orange';
          }
          if (i > 13){
            this.currentTime = '+2';
          }
          if (i > 15) {
            this.currentTime = 'DNF';
            this.timerStatus = 'red'
          }
          i++;
        }
      },
      readyToSolve(){
        this.timerStatus = 'ready';
      },
      startTimer(){
        this.timeStart = Date.now();
        this.timerStatus = 'solving';
        this.currentTime = 'solving';
        this.inspectionRunning = false;
        clearTimeout(this.timeoutid);
      },
      stopTimer(){
        this.timeEnd = Date.now();
        this.currentTime = (this.timeEnd - this.timeStart) / 1000;
        this.$emit('addTime', {td: this.currentTime.toString(), t: this.currentTime}); // time format: {td: "time display", t:"time in miliseconds",st: "status", s:"scramble"}
        this.timerStatus = 'neutral'
      },
      handleStep(type, e){
        if (e.code != 'Space') return; //allow only space for now

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
      window.addEventListener('keydown', (e) => this.handleStep('down', e));
      window.addEventListener('keyup', (e) => this.handleStep('up', e));
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

  .orange{
    color: orange;
  }

  .red{
    color: red;
  }
</style>