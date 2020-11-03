import Vue from 'vue';
import MessageComponent from './main.vue';

const MessageConstructor = Vue.extend(MessageComponent);

class Message {
    /**
     * @private
     */
    instance = new MessageConstructor();

    constructor() {
      this.instance.$mount();
      document.body.appendChild(this.instance.$el);
    }

    /**
     * @public
     * @param { string } title
     * @param { string } text
     */
    message(title, text) {
      this.instance.handleOpen(title, text);
    }

    close() {
      this.instance.handleClick();
    }
}

export default new Message();
