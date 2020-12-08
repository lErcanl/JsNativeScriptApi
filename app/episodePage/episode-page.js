const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = fromObject({
        item: [],
        characters:[],
        name:'',
        air_date:'',
        episode:'',
        onItemTap: function (args) {
            const frame = global.variable(args);
                const navEntryWithContext = {
                    moduleName: "characterPage/character-page",
                    context: {
                        url: viewModel.characters[args.index].url
                    
                    }
                };
            
                frame.navigate(navEntryWithContext);

          }
    });
    const context = args.context;

    fetch("https://rickandmortyapi.com/api/episode/" + context.id)
    .then((response) => global.err(response))
    .then((data) => {
   viewModel.item = data;
   viewModel.name= viewModel.item.name;
   viewModel.air_date=viewModel.item.air_date;
   viewModel.episode=viewModel.item.episode;
   for (let i = 0; i < viewModel.item.characters.length; i++) {
    fetch(viewModel.item.characters[i])
      .then((response) => global.err(response))
      .then((data) => {
        viewModel.characters=viewModel.characters.concat(data);

      });
  }

});
    page.bindingContext = viewModel;


}
exports.onNavigatingTo = onNavigatingTo;

