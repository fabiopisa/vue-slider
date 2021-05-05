/* Descrizione:
Rifare l’esercizio dello slider come fatto assieme in classe.
Bonus:
Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */

const app = new Vue({

  el:'#app',
  data:{

    positionPhoto: 0,
    photos:[
      'assets/img/im1.jpg',
      'assets/img/im6.jpg',
      'assets/img/im8.jpg',
      'assets/img/im9.jpg'
    ],

  },
  methods:{

    prevPhoto(){
      this.positionPhoto--;
      if(this.positionPhoto < 0) this.positionPhoto = this.photos.length - 1;
    },
    nextPhote(){
      this.positionPhoto++;
      if(this.positionPhoto === this.photos.length) this.positionPhoto = 0;
    }
  }
})