/**
 * Created by Brandon on 10/5/2016.
 */
module.exports = function(grunt){
	require('load-grunt-tasks')(grunt)

	aws = {
		'AWSAccessKeyId': 'AKIAJ6BMXAF44U4OO6SA',
		'AWSSecretKey': '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'
	};

	grunt.initConfig({
		aws:aws,
		aws_s3:{
			options:{
				accessKeyId:'<%= aws.AWSAccessKeyId %>',
				secretAccessKey: '<%= aws.AWSSecretKey %>',
				uploadConcurrency: 5,
				downloadConcurrency: 5,
				differential: true,
				displayChangesOnly: true
			},
			production:{
				options:{
					bucket:'news.brandonkhademi.com'
				},
				files:[
				{expand:true, cwd:'dist', src:['**'], dest:'/'}
				]
			}
		},

		watch:{
			check_for_less:{
				files: ['css/**/*.less'],
				tasks:['less']
			}
		},

		less:{
			dev:{
				files: {
					'css/custom.css': 'css/**/*.less'
				}
			}
		}
	});
	grunt.registerTask('publish', ['aws_s3']);
	grunt.registerTask('default', ['watch']);

};