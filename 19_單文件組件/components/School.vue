/*
    認真來說: 當前的這個.vue文件, 並不是一個組件, 而是一個組件的所有配置
*/

/* 配置模板結構*/
<template>
  <div>
    <h2 class="title">學校名: {{ name }}</h2>
    <h2 class="info" @click="showAddress">學校地址: {{ address }}</h2>
  </div>
</template>

/* 配置組件數據、交互、事件等等 */
<script>

// 此處只是暴露了一個組件的配置, 並沒有去創建組件, 因為沒有調用Vue.extend
    export default {
        data(){
            return {
                name:'atguigu',
                address:'北七家鎮-洪福科技園'
            }
        },
        methods:{
            showAddress(){
                alert(this.address)
            }
        }
    }
</script>


/* 配置組件樣式 */
<style>
.title{
    background-color: orange;
}
.info{
    background-color: pink;
}
</style>