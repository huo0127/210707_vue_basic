/* 配置組件的結構 */
<template>
<div>
    <h2>我是app, 我有一台{{car}}</h2>
    <School/>
</div>
</template>

/* 配置組件數據、交互、事件等等 */
<script>
    //引入School組件
    import School from './components/School'

    export default{
        data(){
            return {
                car:'C180',
            }
        },
        components:{School},
    }
</script>