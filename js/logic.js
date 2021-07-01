AFRAME.registerComponent('modify-materials', {
    init: function () {
      this.el.sceneEl.addEventListener('model-loaded', () => {
         console.log('model-loaded!!');
         const obj = this.el.getObject3D('mesh');
         console.log('obj',obj);
         const aEntity = document.querySelector("#animated-model");
         aEntity.addEventListener('click',()=>{
          el.object3D.rotation.x += Math.PI;
         })
      });
  }
  });