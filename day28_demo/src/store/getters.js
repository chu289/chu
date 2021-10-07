
import state from './state'

export const DATE = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months[state.timeNow.month] + ", " + state.timeNow.day
}

export const MESSAGES = () => {
    if(state.isMark === true) {
        return state.messages.filter((message) => {
            return message.mark
        })
    }else if(state.isMark === false){
        return state.messages.filter((message) => {
            return !message.mark
        })
    }
}

