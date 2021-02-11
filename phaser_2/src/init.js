const config = {
    width: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
          default: "arcade",
           arcade: {
           gravity: {
           y: 500
              }
       }
    }
}
/*    title: "JuegoPublico",
    version: "0.0.1",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#e67e22",
    pixelArt: true,
    scene: [
        Bootloader 
    ]
};*/
var game = new Phaser.Game(config);

function preload(){
    this.load.image("pajaro", "./assets/pok.png");
}
function create(){
    this.pajaro=this.physics.add.image(80,100,"pajaro");
    //this.pajaro=setScale(2);//se hace más grande el personaje
    this.pajaro.flipX=false;//Se gira el pájaro
    this.pajaro.setOrigin(0.5);
     //Propiedades Fisicas
    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(0.3);//Rebote
    this.pajaro.setAcceleration(50,0);//el personaje acelera cada vez mas
    //this.pajaro.setVelocity(50.0);//la velocidad constante del personaje

}
function update(time, delta){
    //this.pajaro.angle++;
}

