import { registerHelper } from 'discourse/lib/helpers';

registerHelper('shorten', function(params) {
  var title = params[0];
  if(params.length > 1){
     var limit = params[1];
  }
  else{
    var limit = 40;
  }
  if(title.length > 0 && title.length < limit && title.length==limit){
    return title;
  }
  else{
    if(title.length > limit){
        return title.replace(/^(.{limit-3}[^\s]*).*/, "$1") + "..."; 
    }
    return "Default Thread Title";
  }
});
