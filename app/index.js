'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var utils = require('./utils.js');

module.exports = generators.Base.extend({
    initializing: function () {    //初始化准备工作
    },

    prompting: function () {  //接受用户输入
        var done = this.async(); //当处理完用户输入需要进入下一个生命周期阶段时必须调用这个方法

        //yeoman-generator 模块提供了很多内置的方法供我们调用，如下面的this.log , this.prompt , this.template , this.spawnCommand 等

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the groundbreaking ' + chalk.red('example') + ' generator!'
        ));
        this.name = path.basename(process.cwd());
        this.description = '';
        this.author = '';
        this.mode=1;
        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'name of app:', default: this.name
            },
            {
                type: 'input',
                name: 'description',
                message: 'description:', default: this.description
            },
            {
                type: 'input',
                name: 'author',
                message: 'author:', default: this.author
            },
            {
       			type: 'list',
        		name: 'mode',
        		message: 'Select a template type:',
        		choices: ['Vue&&Mui', 'Vue&&Mui&&PWA']
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

            done();  //进入下一个生命周期阶段
        }.bind(this));
    },

    writing: {  //生成目录结构阶段
        app: function () { 
        	
        	if(this.mode=='Vue&&Mui&&PWA'){
        		this.log('准备中')
        		this.template('v2/_package.json', 'package.json');  //
        		this.copy('v2/_.gitignore', '.gitignore');
        		const sourceDir = path.join('./templates/v2', '/');
      			const filePaths = utils.read(sourceDir);
      			filePaths.forEach((i)=>{
      				if(i!='_package.json'&&i!='_.gitignore')
      				this.copy('v2/' + i,'/'+i)
      			})
      			this.copy('v2/.babelrc', '.babelrc');
            	this.copy('v2/.editorconfig', '.editorconfig');
            	this.copy('v2/.eslintignore', '.eslintignore');
           		this.copy('v2/.fecsrc', '.fecsrc');
           		this.copy('v2/.fecsignore', '.fecsignore');
           		this.copy('v2/.postcssrc.js', '.postcssrc.js');
            	this.copy('v2/.eslintrc.js', '.eslintrc.js');
            	this.copy('v2/README.md', 'README.md');
        	}else{
        		this.template('v1/_package.json', 'package.json');  //
            this.copy('v1/build/build.js', 'build/build.js');
            this.copy('v1/build/check-versions.js', 'build/check-versions.js');
            this.copy('v1/build/dev-client.js', 'build/dev-client.js');
            this.copy('v1/build/dev-server.js', 'build/dev-server.js');
            this.copy('v1/build/utils.js', 'build/utils.js');
            this.copy('v1/build/vue-loader.conf.js', 'build/vue-loader.conf.js');
            this.copy('v1/build/webpack.base.conf.js', 'build/webpack.base.conf.js');
            this.copy('v1/build/webpack.dev.conf.js', 'build/webpack.dev.conf.js');
            this.copy('v1/build/webpack.prod.conf.js', 'build/webpack.prod.conf.js');
            this.copy('v1/config/dev.env.js', 'config/dev.env.js');
            this.copy('v1/config/index.js', 'config/index.js');
            this.copy('v1/config/prod.env.js', 'config/prod.env.js');
            this.copy('v1/src/main.js', 'src/main.js');
            this.copy('v1/src/components/Hello.vue', 'src/components/Hello.vue');
            this.copy('v1/src/main.vue', 'src/main.vue');
            this.copy('v1/src/assets/i/favicon.png', 'src/assets/i/favicon.png');
            this.copy('v1/src/assets/css/app.css', 'src/assets/css/app.css');
            this.copy('v1/src/assets/i/app-icon72x72@2x.png', 'src/assets/i/app-icon72x72@2x.png');
            this.copy('v1/static/css/app.css', 'static/css/app.css');
            this.copy('v1/index.html', 'index.html');
            this.copy('v1/.babelrc', '.babelrc');
            this.copy('v1/.editorconfig', '.editorconfig');
            this.copy('v1/.eslintignore', '.eslintignore');
            this.copy('v1/_.gitignore', '.gitignore');
            this.copy('v1/.eslintrc.js', '.eslintrc.js');
            this.copy('v1/README.md', 'README.md');
        	}
        	//默认源目录就是生成器的templates目录，目标目录就是执行`yo example`时所处的目录。调用this.template用Underscore模板语法去填充模板文件
        }
    },

    install: function () {
        var done = this.async();
        console.log('构建完成准备安装，因网络原因默认采用cnpm安装');
        this.spawnCommand('cnpm', ['install'])  //安装项目依赖
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
