module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
            main: {
                files: [
                {expand: true, cwd: 'src/', src:["index.html"], dest: 'web/'},
                {expand: true, cwd: 'src/js', src: ['**'], dest: 'web/js'},
                ],
            },
        },
        image: {
            static: {
                options: {
                    pngquant: true,
                    optipng: true,
                    advpng: true,
                    zopflipng: true,
                    pngcrush: true,
                    pngout: true,
                    mozjpeg: true,
                    jpegRecompress: true,
                    jpegoptim: true,
                    gifsicle: true,
                    svgo: true,
                },
            },
            dynamic: {
            files: [{
              expand: true,
              cwd: 'src/', 
              src: ['**/*.{png,jpg,gif,svg}'],
              dest: 'web/'
            }]
        }
        },
        sass:{
        	dist:{
        		options:{
        			style: "expanded",
        		},
        		files: {
        			"web/css/main.css" : "src/sass/main.scss",
        		},
        	},
        },
		autoprefixer:{
			dist:{
				files:{
					'web/css/main.css':'web/css/main.css'
				}
			}
		},
        watch: {
            html:{
                files: ['src/index.html'],
                tasks:["copy"],
            },
        	css:{
        		files: ["src/sass/main.scss"],
        		tasks: ["sass", 'autoprefixer'],
        		options: {
                spawn: false
            	}
        	},
        	js:{
        		files: ['src/js/**/*js'],
        		tasks: ['copy'],
        	},
            image:{
                files: ["src/assets/**"],
                task: ["image"]
            }
        },
    });

    // Task require Calls
    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask("default", ["watch", "copy", "sass", "autoprefixer", "image"]);
};