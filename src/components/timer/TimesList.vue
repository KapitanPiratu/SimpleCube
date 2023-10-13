<template>
    <div class="table">
        <div class="table-list">
            <div v-for="(time, index) in timeslist" :key="index" class="list-row">
                <span class="span-index">{{timeslist.length - index}}.</span>
                <span class="span-time"> {{time.td }} </span>
                <span class="span-ok" @click="changeTime(index, 'ok')"> ok </span>
                <span class="span-2" @click="changeTime(index, '+2')"> +2 </span>
                <span class="span-dnf" @click="changeTime(index, 'dnf')"> DNF </span>
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'TimesList',
        props: ['timeslist'],
        mounted(){
            console.log(this.timeslist)
        } 
    }
</script>

<style scoped>

.times-list p{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition-duration: 500ms;
    opacity: 0;
    font-size: 2rem;
}
 
.times-list p.shown{
    transform: translateX(-50%) translateY(1rem);
    display: block;
    opacity: 100%;
    background-color: #3d2c47;
    padding: 0.5rem;
    border-radius: 16px;
    display: none; /* temporary - fix it later ;D */
}

.times-list .table{
    display: flex;
    flex-direction: column;
    height: 40vh;
}

.times-list .table-list{
    flex: 1;
    overflow: auto;
}

.times-list .list-row{
    position: relative;
    height: 3vh;
    margin: 0.5rem;
    margin-left: 1rem;
}

.times-list .list-row:first-child{
    margin-top: 1rem;
}

/*.times-list tr:first-child{
    font-size: 2.1rem;
}*/

.times-list div{
    font-size: 1.5rem;
}

.times-list span{
    position: absolute;
    cursor: pointer;
}

.span-index{
    color: #b69fc4;
    font-size: 1.3rem;
    text-align: right;
    cursor: default !important;
    left: 0;
}

.span-time{
    left: 5rem;
}

.span-ok{
    right: 7rem;
}

.span-ok:hover{
    color: rgb(0, 145, 0);
}

.span-2{
    right: 4.5rem;
}

.span-2:hover{
    color: rgb(255, 153, 0);
}

.span-dnf{
    right: 0.7rem;
}

.span-dnf:hover{
    color: red;
}
</style>