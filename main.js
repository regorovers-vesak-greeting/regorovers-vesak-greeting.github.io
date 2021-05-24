
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
  }

  view_card = () => {

    let name = $('#name').val()
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