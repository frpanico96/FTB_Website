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

    addObserver = (notifName, observer, callback) => {
        let obs = observers[notifName];
        if(!obs){
            observers[notifName] = [];
        }
        let obj = {observer: observer, callback: callback};
        observers[notifName].push(obj);
    }

    removeObserver = (notifName, observer) => {
        let obs = observers[notifName];
        if(obs){
            for(var x = 0; x < obs.length; ++x){
                if(observer === obs[x].observer){
                    obs.splice(x, 1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }
}

export default NotificationService;