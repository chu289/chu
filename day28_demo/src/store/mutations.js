const LocalStorage = {
    load(){
      return JSON.parse(localStorage.getItem('messages') || '[]')
    },
    save(data){
      localStorage.setItem('messages',JSON.stringify(data))
    }
  }

export const ADD_MESSAGE = (state, data) =>{
    state.messages.push(data)
    LocalStorage.save(state.messages)
}

export const DELETE_MESSAGE = (state, id) => {
    for(let i=0; i<state.messages.length; i ++){
        if(state.messages[i].id === id){
            state.messages.splice(i, 1)
            LocalStorage.save(state.messages)
        }
    }
}

export const EDDIT_MESSAGE = (state, data) => {
    for(let i=0; i<state.messages.length; i ++){
        if(state.messages[i].id === data[4]){
            state.messages[i].name = data[0]
            state.messages[i].content = data[1]
            state.messages[i].date = data[2]
            state.messages[i].mark = data[3]      
            LocalStorage.save(state.messages)
        }
    }
}

export const SET_MESSAGES = (state) => {
    const results = LocalStorage.load()
    if(results.length === 0){
        state.messages = [
            {
                id: '1',
                name: 'Default',
                content:'DefaultLorem',
                date: 'Sep, 28',
                mark: false,
            },
            {
                id: '2',
                name: 'DefaultMark',
                content:'DefaultLorem',
                date: 'Sep, 28',
                mark: true,
            }
        ]
    }else{
        state.messages = results
    }
}

export const GET_NOW = (state) => {
    const today = new Date();
    state.timeNow.month = today.getMonth();
    state.timeNow.day = today.getDate();
}

export const TOOGLE_MARK = (state) => {
    state.isMark = !state.isMark
}

export const TOGGLE_SHOW_ADDDIALOG = (state) => {
    state.showAddDialog = !state.showAddDialog
}

export const CLEAR_INPUT = (state) => {
    state.inputMessage.id = ''
    state.inputMessage.name = ''
    state.inputMessage.content = ''
    state.inputMessage.date = ''
    state.inputMessage.mark = false 
}