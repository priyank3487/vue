const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // debugger;
      this.message = this.currentUserInput;
      // console.log('message');
    },
  },
});

app.mount('#app');





// ................
const data = {
  message = 'hello'
};
const heandeler = {
  set(target, key, value){
    console.log(target);
    console.log(key);
    console.log(value);
  }
};
const proxy = new Proxy(data, heandeler);
proxy.message = "hello!!!";