require.config({
  baseUrl: '..',
  shim: { 
          "mainApp" :{
              deps: ["scripts/vendor/angular", "scripts/app"]
          } ,
          "mainController" : {
              deps : ["scripts/controllers/main"] 
          } 
        },

  paths: {
    bootstrap : 'scripts/bootstrap',
    hm: 'vendor/hm',
    esprima: 'scripts/vendor/esprima',
    jquery: 'scripts/vendor/jquery.min' , 
    Console : 'scripts/vendor/console/console',
    underscore: 'scripts/vendor/underscore/underscore-min',
    Angular: 'scripts/vendor/angular',
    mainApp : 'scripts/app',
    mainController : 'scripts/controllers/main'
  }
});


require(
  [
    "require",
    "Angular",
    "mainApp",
    "mainController" 
  ],
  function(require){
      require(["bootstrap"],function(bootstrap){});
  }

);
 



 
