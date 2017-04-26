'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
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

            done();  //进入下一个生命周期阶段
        }.bind(this));
    },

    writing: {  //生成目录结构阶段
        app: function () {      //默认源目录就是生成器的templates目录，目标目录就是执行`yo example`时所处的目录。调用this.template用Underscore模板语法去填充模板文件
            this.template('_package.json', 'package.json');  //
            this.copy('build/build.js', 'build/build.js');
            this.copy('build/check-versions.js', 'build/check-versions.js');
            this.copy('build/dev-client.js', 'build/dev-client.js');
            this.copy('build/dev-server.js', 'build/dev-server.js');
            this.copy('build/utils.js', 'build/utils.js');
            this.copy('build/webpack.base.conf.js', 'build/webpack.base.conf.js');
            this.copy('build/webpack.dev.conf.js', 'build/webpack.dev.conf.js');
            this.copy('build/webpack.prod.conf.js', 'build/webpack.prod.conf.js');
            this.copy('config/dev.env.js', 'config/dev.env.js');
            this.copy('config/index.js', 'config/index.js');
            this.copy('config/prod.env.js', 'config/prod.env.js');
            this.copy('src/main.js', 'src/main.js');
            this.copy('src/components/Hello.vue', 'src/components/Hello.vue');
            this.copy('src/main.vue', 'src/main.vue');
            this.copy('src/assets/i/favicon.png', 'src/assets/i/favicon.png');
            this.copy('src/assets/css/app.css', 'src/assets/css/app.css');
            this.copy('src/assets/i/app-icon72x72@2x.png', 'src/assets/i/app-icon72x72@2x.png');
            this.copy('static/css/app.css', 'static/css/app.css');
            this.copy('index.html', 'index.html');
            this.copy('.babelrc', '.babelrc');
            this.copy('.editorconfig', '.editorconfig');
            this.copy('.eslintignore', '.eslintignore');
            this.copy('.gitignore', '.gitignore');
            this.copy('.eslintrc.js', '.eslintrc.js');
            this.copy('README.md', 'README.md');

        }
    },

    install: function () {
        var done = this.async();
        this.spawnCommand('npm', ['install'])  //安装项目依赖
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