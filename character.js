

class part{
    constructor(img_src, parent){
        this.img = img_src
        this.flip = false


        let map = new THREE.TextureLoader().load(this.img);
        map.magFilter = THREE.NearestFilter;
        
        let material = new THREE.SpriteMaterial( { 
            map: map,
            //color:0xff00ff 
        } );
        //material.sizeAttenuation = false

        this.sprite = new THREE.Sprite( material );
        
        this.sprite.center.x = 0.5

        parent.add( this.sprite );
    }

    p(x, y){
        this.sprite.position.x = x
        this.sprite.position.y = y
    }

    r(degree){
        this.sprite.material.rotation = ((degree/180*Math.PI % 360) + 360) % 360
    }

    c(x, y){
        this.sprite.center.x = x
        this.sprite.center.y = y
    }

    s(x, y){
        this.sprite.scale.set( x, y, 1 );
    }

    f(){
        if (this.flip){
            this.sprite.material.map.repeat.set( 1, 1 );
            this.sprite.material.map.offset.set(0, 0)
            this.flip = false
        }else{
            this.sprite.material.map.repeat.set( - 1, 1 );
            this.sprite.material.map.offset.set(1, 0)
            this.flip = true
        }
    }

    add(child){
        this.sprite.add(child)
    }
}


class human{
    constructor(scene){
        this.body = new part('./img/parts/body.png', scene)
        this.body.s(0.7, 1)

        this.head = new part('./img/parts/head.png', this.body)

        this.arml1 = new part('./img/parts/arm1.png', this.body)
        this.arml2 = new part('./img/parts/arm2.png', this.arml1)
/*
        this.armr1 = new part('./img/parts/arm1.png', this.body)
        this.armr2 = new part('./img/parts/arm2.png', this.armr1)

        this.legl1 = new part('./img/parts/leg1.png', this.body)
        this.legl2 = new part('./img/parts/leg2.png', this.legl1)

        this.legr1 = new part('./img/parts/leg1.png', this.body)
        this.legr2 = new part('./img/parts/leg2.png', this.legr1)
*/


        this.head.p(0, .5)
        this.head.s(.7, 0.5)
        this.head.c(0.5, 0)


        this.arml1.p(.4,.45)
        this.arml1.s(0.3, .7)
        this.arml1.c(0.5, 1)

        this.arml2.p(0, -.8)
        this.arml2.s(0.8, 1)
        this.arml2.c(0.5, 1)




        this.neck = 0
        this.shoulderl = 0
        this.elbowl = 0
    }

    gesture(){
        this.head.r(this.neck)
        this.arml1.r(this.shoulderl)
        this.arml2.r(this.elbowl)
    }

    p(x, y){
        this.body.p(x, y)
    }
}