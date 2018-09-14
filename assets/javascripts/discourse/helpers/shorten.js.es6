import { registerUnbound } from 'discourse-common/lib/helpers';

registerUnbound('shorten',function(title) {
  var changed_title = "DEFAULT TITLE";
  var min   = 0;
  var max   = 40;
  if(title.length > min && title.length < max && title.length==max){
    changed_title = title;
  }
  else{
    if(title.length > max){
        changed_title = title.replace(/^(.{limit-3}[^\s]*).*/, "$1") + "..."; 
    }
    else{
      changed_title = title;
    }
   return new Handlebars.SafeString("<span>" + changed_title + "</span>");
  }
});






