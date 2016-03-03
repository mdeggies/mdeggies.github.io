'use strict';

$(document).ready(function() {
  blueimp.Gallery(
    document.getElementById('links').getElementsByTagName('a'),
    {
      container: '#blueimp-gallery-carousel',
      carousel: true
      /*UNCOMMENT TO MAKE DESCRIPTIONS VISIBLE,
      onslide: function (index, slide) {
        var text = this.list[index].getAttribute('data-description'),
        node = this.container.find('.description');
        node.empty();
        if (text) {
          node[0].innerHTML = text;
        }
      }*/
    }
  );
});
