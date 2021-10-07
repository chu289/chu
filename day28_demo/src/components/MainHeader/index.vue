<script>
import { mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([
            'toggleShowAddDialog'
        ])
    }
}
</script>

<template src="./template.html"></template>
<style src="./style.css"></style>