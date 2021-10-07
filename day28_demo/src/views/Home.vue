<template>
  <div class="home">
    <Popup
      class="addDialog"
      :showDialog="showAddDialog"
      :cancel="cancel"
      :confirm="handleAddConfirm"
      cnacelTxt="Cancel"
      confirmTxt="Confirm"
    >
      <div class="content">
        <input
          type="text"
          v-model.trim="inputMessage.name"
          placeholder="Leave your name"
        />
        <textarea
          type="text"
          v-model.trim="inputMessage.content"
          placeholder="Leave messages..."
        />
      </div>
    </Popup>
    <transition name="slide" apper>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Popup from "@/components/Popup/index.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import shortID from "shortid";

export default {
  name: "Home",
  components: {
    Popup,
  },
  mounted(){
        this.initMessages()
        this.getNow()    
  },
  computed: {
    ...mapState(["inputMessage", "showAddDialog"]),
    ...mapGetters(["DATE"]),
  },
  methods: {
    ...mapActions([
      "toggleShowAddDialog",
      "addMessage",
      "clearInput",
      "initMessages",
      "getNow",
    ]),
    handleAddConfirm() {
      if (!this.inputMessage.name || !this.inputMessage.content) {
        alert("Please enter your name and message in full!");
        return;
      }
      this.inputMessage.date = this.DATE;
      this.inputMessage.id = shortID.generate({ salts: 5, interval: 1000 });
      this.addMessage(this.inputMessage);
      this.toggleShowAddDialog();
      this.initMessages();
      this.clearInput();
    },
    cancel() {
      this.toggleShowAddDialog();
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  widows: 100%;
  overflow: hidden;
}
.home .slide-enter-active,
.home .slide-leave-active {
  transition: transform 0.5s;
}
.home .slide-enter {
  transform: translateY(0vh) translateX(-100%);
}
.home .slide-leave-to {
  transform: translateY(0vh) translateX(100%);
}
.home .dialog {
  height: 10em;
  width: 20em;
  background-color: #f1f6f9;
}
.home .dialog .content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.home .dialog .content input {
  font-family: "Noto Sans TC", sans-serif;
  padding: 0.3em;
  margin: -3em 0 1em;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid #14274e;
  color: #14274e;
}
.home .dialog .content textarea {
  font-family: "Noto Sans TC", sans-serif;
  padding: 0.5em;
  height: 8em;
  font-size: 16px;
  font-weight: 100;
  border: 1px solid #14274e;
  color: #14274e;
}
.home .dialog button {
  height: 2em;
  width: 6em;
  font-family: "Noto Sans TC", sans-serif;
  margin: 1em 0.5em 0;
  font-size: 22px;
  background-color: #14274e;
  color: #f1f6f9;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.home .dialog button:hover {
  background: #f1f6f9;
  color: #14274e;
  border: 1px solid #14274e;
}
</style>
