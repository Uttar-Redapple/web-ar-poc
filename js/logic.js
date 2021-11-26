
AFRAME.registerComponent('modify-materials', { 
   init: function() {   
    console.log("init Called",this.el);
    // this.el.object3D.position.x = 20;
    // console.log("x co-ordinate : ",this.el.object3D.position.x)
    let angle = 0;
    let torso = 90;

    setInterval(()=>{
      angle +=1;
      if(angle == 360){
        angle = 0;
      }
      let px = 5 * Math.sin(angle * (Math.PI/180));
      let pz = 5 * (1-(Math.cos(angle * (Math.PI/180))));
      console.log("angle : ",angle)
      console.log("co-ordinate : ",this.el.object3D.position)
      console.log("rotation : ",this.el.object3D.rotation.y)
      this.el.object3D.position.x =  px;
      this.el.object3D.position.z =  -(pz + 10);
      //this.el.object3D.rotation.y += angle * (Math.PI/180);
      this.el.setAttribute('rotation', {x: 0, y: torso + angle, z: 0});
      
    },10)   
   } });