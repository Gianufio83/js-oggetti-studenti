// alert('Ciao');
// una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.
$(document).ready(function () {
  $('.invia').click(function () {
    var data = new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var time = hours +':'+ minutes;
    var risposta = {
      'answer' : 'Ti chiamo più tardi',
      'time'  : time
    };
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var html = template(risposta);
    $('#received-message').append(html);
  });

});
