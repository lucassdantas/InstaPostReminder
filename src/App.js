import {Notifyer} from './Notifyer.js'
import {Timer} from './Timer.js'
import {View} from './View.js'
const App = {
    async start() {
        Timer.init()
        try{
            await Notifyer.init()
        }
        catch(err){
            console.log(err.message)
        }
    }
}

export {App}