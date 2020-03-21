function(properties, context) {
    
window.onbeforeunload = null;
    
let value = properties.clientid + "&scope=" + properties.scope

window.open("https://slack.com/oauth/v2/authorize?client_id=" + value ,"_self")

}
