const app = Vue.createApp({
data() {
  return {
    output: '',
    output2: ''
  };
},
methods: { 
  daftar() { 
    alert('Assalaamu`alaikum ^_^ Selamat , Tombol telah Sukses di tekan!!!'); 
  }, 
  inputText(event) { 
    this.output = event.target.value; 
  },
  inputText2(event) { 
    this.output2 = event.target.value;
    this.output = this.output2;
  }
}

});
app.mount('#assignment');
