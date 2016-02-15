module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		uglify :{
			options : {
				manage : false,
			},
			my_target : {
				files : {
					'builds/js/main.min.js' : ['builds/js/main.js'] 
				}
			}
		},

		concat: {	
			js : {
				src: [
					'lib/vendors/jquery/jquery.min.js',
					'lib/vendors/jquery/angular.min.js',
					'js/*.js'
				],
				dest: 'builds/js/main.js'
			}
		},
/*
		sass : {
			dist : {
				files : {
					'builds/css/main.min.css' : 'css/main.scss'
				}
			}
		},
*/
		connect : {
			options : {
				port : 8000,
				hostname : 'localhost',
				livereload : true
			}
		},

		watch : {
			options : {
				livereload : true
			}, 

			jsClient : {
				files : ['js/*.js'],
				tasks: ['concat','uglify']
			},

			htmlClient : {
				files : ['index.html'],
			},

			cssClient : {
				files : ['css/main.css'],
			//	tasks: ['sass']
			}			
		}

	});
	
	grunt.registerTask('default', ['concat', 'watch','connect']);

	grunt.loadNpmTasks('grunt-contrib-concat');
//	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
}
