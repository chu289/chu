<script>
import { mapState, mapGetters, mapActions } from "vuex"

export default {
    computed:{
        ...mapState([
            'isMark',
        ]),
        ...mapGetters([
            'MESSAGES',
        ]),
    },
    methods:{
        ...mapActions([
            'deleteMessage',
            'editeMessage',
            'toggleMark',
        ]),
        destroyHandler(message) {
            if(confirm(`Would you delete the message "${message.content}" from ${message.name}?`))
            this.deleteMessage(message.id)
        },
        markHandler(message){
            message.mark = !message.mark
            const zipData = [message.name, message.content, message.date  ,message.mark, message.id] 
            this.editeMessage(zipData)
        },
        select(event, message) {
            if(event.target.value === "1") {
                 this.markHandler(message)
                 event.target.value = null
                //console.log(event.target.value);
            }else if(event.target.value === "2"){
                this.destroyHandler(message)
                event.target.value = null
            }
        }
    }
}
</script>

<template src="./template.html"></template>
<style src="./style.css"></style>