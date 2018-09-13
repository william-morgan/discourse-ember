import { registerUnbound } from "discourse-common/lib/helpers";

registerUnbound("shorten",function(title) {
  var limit = 40;
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
