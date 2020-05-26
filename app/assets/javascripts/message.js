$(function(){ 
     function buildHTML(message){
      if ( message.image ) {
        var html =
          `<div class="message">
             <div class="main_chat__messages__box__upper-info">
               <div class="main_chat__messages__box__upper-info__name">
                 ${message.user_name}
               </div>
               <div class="main_chat__messages__box__upper-info__date">
                 ${message.created_at}
               </div>
             </div>
             <div class="main_chat__messages__text">
               <p class="main_chat__messages__text__content">
                 ${message.content}
               </p>
             </div>
             <img src=${message.image} >
           </div>`
        return html;
      } else {
        var html =
          `<div class="main_chat__messages__box">
             <div class="main_chat__messages__box__upper-info">
               <div class="main_chat__messages__box__upper-info__name">
                 ${message.user_name}
               </div>
               <div class="main_chat__messages__box__upper-info__date">
                 ${message.created_at}
               </div>
             </div>
             <div class="main_chat__messages__text">
               <p class="main_chat__messages__text__content">
                 ${message.content}
               </p>
             </div>
           </div>`
        return html;
      };
    }
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.main_chat__messages').append(html);
        $('form')[0].reset();
        $('.main_chat__messages').animate({ scrollTop: $('.main_chat__messages')[0].scrollHeight });
      })
      .always(function (data) {
        $('.submit-btn').prop('disabled', false);
      })
      .fail(function () {
        alert("メッセージ送信に失敗しました");
      });

  })
});
