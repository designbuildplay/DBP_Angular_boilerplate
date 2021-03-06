var dest = "./www";
var src = './app';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },

  compass: {
    src: src + "/scss/*.scss",
    dest: dest + "/css"
  },

  images: {
    src: src + "/imgs/**",
    dest: dest + "/imgs"
  },
  markup: {
    src: src + "/*.html",
    dest: dest
  },

  templates: {
    src: src + "/templates/**",
    dest: dest + "/partials"
  },

  data:{
    src: src + "/data/**",
    dest: dest + "/data"
  },

  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    //extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './app/js/app.js',
      dest: dest + "/js",
      outputName: 'app.js'
    }]
  }
};
