/**
 * @file 事件总线
 * @author mayako(freedom21126@gmail.com)
 */

import Vue from 'vue';

// 全局事件总线
let vm = new Vue({
	data(){
		return {
			randomx:0
		}
	},
	created() {
		this.$on(`detail:click-h`, (data) => {
			console.log(data)
			this.randomx = data;

		});
	}
})
export default vm;


