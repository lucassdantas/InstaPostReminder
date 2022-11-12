import {Notifyer} from './Notifyer.js'
import {Timer} from './Timer.js'
import {Emitter} from './Emitter.js' 
const App = {
    async start() {
        try{
            await Notifyer.init()
            Emitter.on('countdown-start', () => {
                Notifyer.notify({
                    title:'Hora de postar',
                    body:'Está na hora de criar um new post'
                })
            })
            Timer.init()
        }
        catch(err){
            console.log(err.message)
        }
    }
}

export {App}