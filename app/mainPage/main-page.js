var MainViewModel = require('./main-view-model');
var mainViewModel = new MainViewModel();

exports.onLoaded = args =>{
    var page = args.object;
    page.bindingContext= mainViewModel;
}