AFRAME.registerComponent('modify-materials', { 
   init: function() {   
    //   this.el.addEventListener('touchend', handleClickEvent);  
      this.el.addEventListener('click', (evt) => {
        console.log('This 3D element was clicked!');
      }); 
   } });