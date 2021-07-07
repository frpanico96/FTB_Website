export const NOTIF_RENDER = "notif_render";

let instance = null;
var observers = {};

class NotificationService{
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        for(var x = 0; x < obs.length; ++x){
            var obj = obs[x];
            obj.callback(data);
        }
    }

    
}

export default NotificationService;