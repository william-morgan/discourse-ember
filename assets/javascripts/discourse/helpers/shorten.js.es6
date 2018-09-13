import { registerHelper } from 'discourse/lib/helpers';

registerHelper('shorten', function(params) {
  var title = params[0];
  if(title.length > 0 && title.length < 40 && title.length==40){
    return title;
  }
  else{
    if(title.length > 40){
        return title.replace(/^(.{37}[^\s]*).*/, "$1") + "..."; 
    }
    return "Default Thread Title";
  }
});
