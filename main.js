
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

    $('#toName').html(name)

    $('#nameModal').modal('hide')
  }

  $(document).ready(function () {
    
  })