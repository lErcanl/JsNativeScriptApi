var observableModule = require("tns-core-modules/data/observable");
function MainViewModel () {
    
    var viewModel=observableModule.fromObject({
        item:[],
        onItemTap: function (args) {
          const frame = global.variable(args);
                  const navEntryWithContext = {
                      moduleName: "episodePage/episode-page",
                      context: {
                          id: args.index+1,
                      
                      }
                  };
                  frame.navigate(navEntryWithContext);

            }
    })
   
    fetch("https://rickandmortyapi.com/api/episode?page=1")
    .then((response) => global.err(response))
    .then((data) => {
          // make sure you are getting the value 
        viewModel.item=data.results;
         fetch(data.info.next)
         .then((response) => global.err(response))
         .then((data) => {
               // make sure you are getting the value 
               viewModel.item= viewModel.item.concat(data.results);
               fetch(data.info.next)    
               .then((response) => global.err(response))
               .then((data) => {
                     // make sure you are getting the value 
                     viewModel.item =  viewModel.item.concat(data.results);
     })
})

})
return viewModel;

}
module.exports = MainViewModel;