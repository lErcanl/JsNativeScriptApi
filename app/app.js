const app= require('tns-core-modules/application');

app.run({moduleName:'app-root'});
global.err = function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
    }
    global.variable=function(args){
        const button = args.object;
        const page = button.page;
        const frame = page.frame;
        return frame;
    }