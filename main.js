
  var video = document.getElementById("myVideo");
  // var audio = document.getElementById("player");
 
  myFunction = () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
      // audio.pause();
    }
  }

  // var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  // if (!isChrome){
  //     $('#iframeAudio').remove()
  // }
  // else {
  //     $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  // }

  onload = () => {
    $('#nameModal').modal('show')
    // $('.content').removeClass('d-none')
    // audio.play();
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
      play_audio()
      $('#toName').html(name)

      $('#nameModal').modal('hide')
    }

  }

  play_audio = () => {
    var audio = document.getElementById("audio");
    audio.currentTime=4
    audio.play();
  }

  $(document).ready(function () {
    
  })