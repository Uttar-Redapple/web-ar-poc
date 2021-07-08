AFRAME.registerComponent('modify-materials', { 
   init: function() {   
    //   this.el.addEventListener('touchend', handleClickEvent);  
      this.el.addEventListener('click', (evt) => {
        alert('This 3D element was clicked!');
      }); 
   } });