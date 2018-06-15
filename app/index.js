'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var utils = require('./utils.js');

module.exports = generators.Base.extend({
	initializing: function () { //初始化准备工作
	},

	prompting: function () { //接受用户输入
		var done = this.async(); //当处理完用户输入需要进入下一个生命周期阶段时必须调用这个方法

		//yeoman-generator 模块提供了很多内置的方法供我们调用，如下面的this.log , this.prompt , this.template , this.spawnCommand 等

		// Have Yeoman greet the user.
		this.log(yosay('Welcome to the groundbreaking ' + chalk.red('example') + ' generator!'));
		this.name = path.basename(process.cwd());
		this.description = '';
		this.author = '';
		this.mode = 1;
		var prompts = [{
				type: 'input',
				name: 'name',
				message: 'name of app:',
				default: this.name
			},
			{
				type: 'input',
				name: 'description',
				message: 'description:',
				default: this.description
			},
			{
				type: 'input',
				name: 'author',
				message: 'author:',
				default: this.author
			},
			{
				type: 'list',
				name: 'mode',
				message: 'Select a template type:',
				choices: ['Vue&&Mui', 'Vue&&Mui&&PWA', 'Vue&&SSR']
			}

		];
		this.prompt(prompts, function (props) {
			this.name = props.name;
			this.pkgName = props.name;
			this.kissy = props.kissy;
			this.repo = props.repo;
			this.license = props.license;
			this.author = props.author;
			this.description = props.description;
			this.mode = props.mode;

			done(); //进入下一个生命周期阶段
		}.bind(this));
	},

	writing: { //生成目录结构阶段
		app: function () {

			if (this.mode == 'Vue&&Mui&&PWA') {
				this.log('准备中')
				this.template('v2/_package.json', 'package.json'); //
				this.copy('v2/_.gitignore', '.gitignore');
				const sourceDir = path.join('./templates/v2', '/');
				const filePaths = utils.read(sourceDir);
				filePaths.forEach((i) => {
					if (i != '_package.json' && i != '_.gitignore')
						this.copy('v2/' + i, '/' + i)
				})
				this.copy('v2/.babelrc', '.babelrc');
				this.copy('v2/.editorconfig', '.editorconfig');
				this.copy('v2/.eslintignore', '.eslintignore');
				this.copy('v2/.fecsrc', '.fecsrc');
				this.copy('v2/.fecsignore', '.fecsignore');
				this.copy('v2/.postcssrc.js', '.postcssrc.js');
				this.copy('v2/.eslintrc.js', '.eslintrc.js');
				this.copy('v2/README.md', 'README.md');
			} else if (this.mode == 'Vue&&Mui') {
				this.template('v1/_package.json', 'package.json'); //
				const sourceDir = path.join('./templates/v1', '/');
				const filePaths = utils.read(sourceDir);
				filePaths.forEach((i) => {
					if (i != '_package.json' && i != '_.gitignore')
						this.copy('v1/' + i, '/' + i)
				})
				this.copy('v1/.babelrc', '.babelrc');
				this.copy('v1/.editorconfig', '.editorconfig');
				this.copy('v1/.eslintignore', '.eslintignore');
				this.copy('v1/_.gitignore', '.gitignore');
				this.copy('v1/.eslintrc.js', '.eslintrc.js');

			} else if (this.mode == 'Vue&&SSR') {
				this.log('准备中')
				this.template('v3/_package.json', 'package.json'); //
				this.copy('v3/_.gitignore', '.gitignore');
				this.copy('v3/_package-lock.json', 'package-lock.json');
				const sourceDir = path.join('./templates/v3', '/');
				const filePaths = utils.read(sourceDir);
				filePaths.forEach((i) => {
					if (i != '_package.json' && i != '_.gitignore'&&i != '_package-lock.json')
						this.copy('v3/' + i, '/' + i)
				})
				this.copy('v3/.editorconfig', '.editorconfig');
				this.copy('v3/babel.config.js', 'babel.config.js');
				this.copy('v3/vue.config.js', 'vue.config.js');
				this.copy('v3/READMECN.md', 'READMECN.md');
				this.copy('v3/.postcssrc.js', '.postcssrc.js');
				this.copy('v3/.eslintrc.js', '.eslintrc.js');
				this.copy('v3/README.md', 'README.md');
			}
			//默认源目录就是生成器的templates目录，目标目录就是执行`yo example`时所处的目录。调用this.template用Underscore模板语法去填充模板文件
		}
	},

	install: function () {
		var done = this.async();
		console.log('构建完成准备安装，因网络原因默认采用cnpm安装');
		this.spawnCommand('cnpm', ['install']) //安装项目依赖
			.on('exit', function (code) {
				if (code) {
					done(new Error('code:' + code));
				} else {
					done();
				}
			})
			.on('error', done);
	},
	end: function () {
		var done = this.async();
		// this.spawnCommand('gulp')   //生成器退出前运行gulp，开启watch任务
		//     .on('exit', function (code) {
		//         if (code) {
		//             done(new Error('code:' + code));
		//         } else {
		//             done();
		//         }
		//     })
		//     .on('error', done);
	}
});