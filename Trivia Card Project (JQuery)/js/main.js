$(document).ready(() =>{
    $('.hint-box').on('click', () => {
     $('.hint').slideToggle(1000)
    });
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut('slow')
      $('.frown').show()
    });
     $('.wrong-answer-two').on('click', () => {
       $('.wrong-text-two').fadeOut('fast')
       $('.frown').show()
    });
     $('.wrong-answer-three').on('click', () => {
       $('.wrong-text-three').fadeOut()
       $('.frown').show()
    });
     $('.correct-answer').on('click', () => {
       $('.frown').hide()
       $('.smiley').show()
       $('.wrong-answer-one').fadeOut('fast')
       $('.wrong-answer-two').fadeOut('fast')
       $('.wrong-answer-three').fadeOut('fast')
     
     })
    $('.reset').on('click', () => {
      $('.wrong-answer-one').fadeIn('fast')
      $('.wrong-answer-two').fadeIn('fast')
      $('.wrong-answer-three').fadeIn('fast')
      $('.wrong-text-one').fadeIn('fast')
      $('.wrong-text-two').fadeIn('fast')
      $('.wrong-text-three').fadeIn('fast')
      $('.frown').hide()
      $('.smiley').hide()
    })
   });