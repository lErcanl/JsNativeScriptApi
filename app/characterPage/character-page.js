const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;
    const context = args.context;

    const viewModel = fromObject({
        character: [],
        name:'',
        type:'None',
        gender:'',
        status:'',
        species:'',
        image:'',
        origin:'',
        location:'',
        episode:[]
        
    });
    fetch(context.url) // fetching character api
    .then((response) => response.json())
    .then((data) => {
      viewModel.character = data;
      viewModel.name=viewModel.character.name;
      if(viewModel.character.type){
viewModel.type=viewModel.character.type;
      }
     
      viewModel.status=viewModel.character.status;
      viewModel.species=viewModel.character.species;
      viewModel.image=viewModel.character.image;
      viewModel.gender=viewModel.character.gender;
      viewModel.origin=viewModel.character.origin.name;
      viewModel.location=viewModel.character.location.name;
      viewModel.episodes=viewModel.character.episode;
      for(let i=0;i<viewModel.character.episode.length;i++){
       viewModel.episode = viewModel.episode.concat(viewModel.character.episode[i].slice(40,42));
       if(viewModel.episode.length>19){
        viewModel.episode="Almost All Episodes";
        break;
    }
      }
     
    })
    page.bindingContext = viewModel;

}
exports.onNavigatingTo = onNavigatingTo;