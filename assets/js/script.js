/* Descrizione:
Rifare l’esercizio dello slider come fatto assieme in classe.
Bonus:
Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */

const app = new Vue({

  el:'#app',
  data:{

    positionPhoto: 0,
    //creo questa variabile per ridare il via allo scorrere delle immagini isRunning
    isRunning:false,
    photos:[
      'assets/img/im1.jpg',
      'assets/img/im6.jpg',
      'assets/img/im8.jpg',
      'assets/img/im9.jpg'
    ],

  },
  //funziona anche così
  /* mounted:function(){
        setInterval(this.nextPhoto, 3000)
      }, */

  //mounted è una parte del ciclo vitale di vue consultare sul sito ufficiale (lifecycle diagram) il diagramma per vedere in che posizione opera.In ogni caso lui opera quando l'applicazione si è caricata del tutto facendo prima altre fasi di preparazione
  mounted(){
    //do una variabile timer che servirà per fermare lo slider
    this.timer = setInterval(()=>{
      this.nextPhoto();
      //aggiungo ciò che mi serve per far ripartire lo scorrere
      this.isRunning = true;
    },3000)
  },    
        
  methods:{

    prevPhoto(){
      this.positionPhoto--;
      if(this.positionPhoto < 0) this.positionPhoto = this.photos.length - 1;
    },
    nextPhoto(){
      this.positionPhoto++;
      if(this.positionPhoto === this.photos.length) this.positionPhoto = 0;
    },
    //creo una funzione che ferma lo scorrere dell'immagini con la variabile creata sopra nel mouted da attivar con un @clickc ad un bottone
    stopSlider(){
      clearInterval(this.timer);
      //aggiungo ciò che mi serve per far ripartire lo scorrere
      this.isRunning = false;
    },
    //creiamo una funzione startSlide per far ripartire lo scorrere automatico da asssegnare poi ad un bottone con @click
    startSlide(){
      //aggiungo ciò che mi serve per far ripartire lo scorrere
      this.isRunning = true;
      //do una variabile timer che servirà per fermare lo slider
      this.timer = setInterval(()=>{
        this.nextPhoto();
      },3000)
    }
  },
  
})