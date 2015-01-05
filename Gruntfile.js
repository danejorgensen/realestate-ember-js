module.exports = function(grunt) {
  grunt.initConfig({
    env: grunt.file.readJSON('.env'),
    aws_s3: {
      options: {
        accessKeyId: '<%= env.AWS_ACCESS_KEY_ID %>',
        secretAccessKey: '<%= env.AWS_SECRET_ACCESS_KEY %>',
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
      },
      development: {
        options: {
          bucket: '<%= env.AWS_BUCKET %>',
          differential: true // true == Only uploads the files that have changed
        },
        files: [
          {expand: true, cwd: 'dist/assets/', src: ['**'], dest: 'assets'},
          {expand: true, cwd: 'dist/resources/', src: ['**'], dest: 'resources'},
          {expand: true, cwd: 'dist/', src: ['incl.*'], dest: ''},
          {dest: '/', cwd: 'dist/', exclude: 'promote/**/*', action: 'delete'}
        ]
      }
    },
    shell: {
      development: {
        command: 'ember build --environment=development'
      }
    }
  });
  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('development', ['gitinfo', 'shell:development', 'aws_s3:development']);
};
