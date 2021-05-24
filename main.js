
  var video = document.getElementById("myVideo");
 
  myFunction = () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  onload = () => {
    $('#nameModal').modal('show')
    // $('.content').removeClass('d-none')
  }

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  view_card = () => {
    $('.content').removeClass('d-none')
    let name = $('#name').val().capitalize()
    $('.invalid-feedback').hide()
    if (name == '' || name == null){
      
      $('#errname').html('<strong>Please Enter Your Name</strong>')
      $('.invalid-feedback').show()
    }else{      
      $('#toName').html(name)

      $('#nameModal').modal('hide')
    }

  }

  $(document).ready(function () {
    
  })