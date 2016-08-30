$(document).foundation();

$.getJSON("https://spreadsheets.google.com/feeds/list/1if2DUb2debGvFFV_rQvRqyYYo-M2FNXEEivqNy6y6aQ/od6/public/basic?alt=json", function(data) {
  for (var i = 0; i < data.feed.entry.length; i++) {
    var entry = data.feed.entry[i];
    document.getElementById('chat_s').innerHTML += '<div class="chat"><div class="chat_message">' + entry.gsx$message.$t + '</div><div class="chat_name">' + entry.gsx$name.$t + '</div></div>';
  }
  var x = document.getElementsByClassName("chat_name");
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].innerHTML !== "John" && x[i].innerHTML !== "Dave") {
      x[i].parentNode.classList.add('chat_other');
      x[i].innerHTML = 'Anonymous';
    }
  }
});

function add() {
  document.getElementById('chat_s').innerHTML += '<div class="chat chat_other"><div class="chat_message">' + document.querySelector('#chat input').value + '</div><div class="chat_name">' + 'Anonymous' + '</div></div>';
}