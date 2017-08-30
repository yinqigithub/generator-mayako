<template>
  <div class="detail-wrapper">
    <h1>{{ msg }}</h1>
    <header class="mui-bar mui-bar-nav mui-bar-transparent" style="top: 62px;">
	<h1 class="mui-title">标题</h1>
</header>
<v-icon>home</v-icon>
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">面板1</a>
            <div class="mui-collapse-content">
                <p>面板1子内容</p>
                <a class="mui-action-back  mui-icon mui-icon mui-icon-videocam"></a>
                <span class="icon iconfont icon_span fl">&#xe701;</span>
                <a class="icon iconfont icon_span fl icon-bianji"></a>
                <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left mui-icon mui-icon-phone"></a>
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
	import {mapActions} from 'vuex';
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
   methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'hideBottomNav'
        ])
    },
    created() {
        this.setAppHeader({
            show: true,
            title: 'Lavas',
            showMenu: false,
            showBack: true,
            showLogo: false,
            actions: [
                {
                    icon: 'home',
                    route: {
                        name: 'home'
                    }
                }
            ]
        });
        this.hideBottomNav();
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
  .icon{
  	color: var(--mainColor);
  	border: none;
  }
  a{
    color: var(--mainColor);
  }
  span {
    @apply --danger-theme;
  }
</style>
