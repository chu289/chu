export const addMessage = ({ commit }, data) =>{
    commit('ADD_MESSAGE', data)
}

export const deleteMessage = ({commit}, id) => {
    commit('DELETE_MESSAGE', id)
}

export const editeMessage = ({ commit }, data) => {
    commit('EDDIT_MESSAGE', data)
}

export const initMessages =  ({commit}) => {
    commit('SET_MESSAGES')
}

export const getNow = ({commit}) => {
    commit('GET_NOW')
}

export const toggleMark = ({commit}) => {
    commit('TOOGLE_MARK')
}

export const toggleShowAddDialog = ({commit}) => {
    commit('TOGGLE_SHOW_ADDDIALOG')
}

export const clearInput = ({commit}) => {
    commit('CLEAR_INPUT')
}