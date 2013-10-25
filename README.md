# grunt-particles

Invoke Scatter/Particles services from Grunt (and dynamically control its configuration)

[![NPM](https://nodei.co/npm/grunt-particles.png?downloads=true)](https://nodei.co/npm/grunt-particles/)

[![Build Status](https://travis-ci.org/mariocasciaro/grunt-particles.png)](https://travis-ci.org/mariocasciaro/grunt-particles)
[![Dependency Status](https://david-dm.org/mariocasciaro/grunt-particles.png)](https://david-dm.org/mariocasciaro/grunt-particles)


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-particles --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-particles');
```

## The "particles" task

### Overview
In your project's Gruntfile, add a section named `scatter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  particles: {
    options: {
      // Task-specific options go here.
    }
  },
})
```

### Options

#### options.runServices
Type: `Array`
Default value: None (Option Required)

#### options.appRoot
Type: `String`
Default value: None (Option Required)

#### options.configDir
Type: `String`
Default value: `'config'`

#### options.configNamespace
Type: `String`
Default value: `'particles:app'`


## Config parameters

In the context of `options.configNamespace`:

#### particles
Type: `Array`
Default value: `[]`

#### nodeModulesDir
Type: `String`
Default value: `''`


## Usage Examples

```js
grunt.initConfig({
  scatter: {
    options: {
      runServices: "svc|sequence!aService/toRun",
      appRoot: __dirname,
      configDir: __dirname + "/test/config"
    }
  }
})
```



```js
{
  "particles": {
    "app": {
      "particles": ["${appRoot}/aParticle/root"]
    }
  }
}
```

# License

MIT

-----

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mariocasciaro/grunt-particles/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
