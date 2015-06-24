module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			sass: {
				files: ['public/css/*.scss'],
				tasks: ['sass']
			},
			cssmin: {
				files: ['public/css/main.css'],
				tasks: ['cssmin']
			},
			uglify: {
				files: ['public/js/*.js'],
				tasks: ['uglify']
			}
		},

		sass: {
		    dist: {
				files: {
					'public/css/main.css': 'public/css/main.scss'
				}
		    }
		},

		
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			target: {
				files: [{
					expand: true,
					cwd: 'public/css',
					src: 'main.css',
					dest: 'public/css',
					ext: '.min.css'
				}]
			}
		},

		uglify: {
			options: {
				mangle: false,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['!public/js/<%= pkg.name %>.min.js', 'public/js/*.js'],
				dest: 'public/js/<%= pkg.name %>.min.js'
			}
		}

	});
	
	// load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// default task
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('dev', 'watchDev');


};