module.exports = function(grunt) {

	var config = {
		theme: 'appfolder'
	};

    grunt.initConfig({

	    config: config,

        pkg: grunt.file.readJSON('package.json'),

	    compass: {
            dist: {
                options: {
                    sassDir: '<%= config.theme %>/styles',
                    cssDir: '<%= config.theme %>/styles',
                    environment: 'production'
                }
            }
        },

        uglify: {
            main: {
                options: {
                    mangle: false
                },
                files: {
                    '<%= config.theme %>/js/main.min.js': [
	                    '<%= config.theme %>/js/main.js'
                    ]
                }
            },
            plugins: {
                options: {
                    mangle: false
                },
                files: {
                    '<%= config.theme %>/js/vendor.js': [
												'bower_components/jquery/jquery.min.js',
	                    	'bower_components/jquery-smartresize/jquery.throttledresize.js',
	                    	'bower_components/superfish/dist/js/superfish.min.js',
												'bower_components/jquery.customSelect/jquery.customSelect.min.js',
                    ]
                }
            }
        },

	    autoprefixer: {
		    options: {
			    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
		    },
		    files: {
			    expand: true,
			    src: '<%= config.theme %>/styles/*.css'
		    }
	    },

        watch: {
            css: {
                files: '<%= config.theme %>/styles/**/*.scss',
                tasks: ['compass', 'autoprefixer'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: '<%= config.theme %>/js/*.js',
                tasks: ['uglify:main'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');


	grunt.registerTask('build', [
		'compass',
		'uglify',
		'autoprefixer'
	]);

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
