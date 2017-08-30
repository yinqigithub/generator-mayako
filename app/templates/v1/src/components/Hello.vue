<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">面板1</a>
            <div class="mui-collapse-content">
                <p>面板1子内容</p>
                <a class="mui-action-back  mui-icon mui-icon mui-icon-videocam"></a>
                <a class="icon iconfont icon_span fl icon-bianji"></a>
                <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left mui-icon mui-icon-phone"></a>
            </div>
        </li>
        </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style scoped>
  :root {
    --mainColor: red;
    --danger-theme: {
      color: white;
      border:1px solid sienna;
    };
  }
  a{
    color: var(--mainColor);
  }
  span {
    @apply --danger-theme;
  }
</style>
