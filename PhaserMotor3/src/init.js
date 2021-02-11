const config = {
    width: 320,
    height: 180,
    parent: "container",
    type: Phaser.AUTO,
    
    scene: {
        preload: preload,
        create:create,
        update: update,
    }
}
//    title: "JuegoPublico",
//    version: "0.0.1",
//    
//    scale: {
//        
//       
//        mode: Phaser.Scale.FIT,
//        autoCenter: Phaser.Scale.CENTER_BOTH
//    },
//    backgroundColor: "#e67e22",
//    pixelArt: true,
//    physics: {
//        default: "arcade",
//        "arcade": {
//            gravity: {
//                y: 500
//            }
//        }
//    },
//    scene: [
//        Bootloader
//    ]
//};
var game = new Phaser.Game(config);


function preload(){
    console.log("Soy preload");
}
function create(){
    console.log("Soy create");
}
function update(time, delta){
    console.log(delta);
}

