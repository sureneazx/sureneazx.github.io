/* global AFRAME */
AFRAME.registerComponent('play-on-click', 
{
  init: function () {
    this.onClick = this.onClick.bind(this);
    this.entryVideoUrl = "/resources/intro.mp4";
    this.loopVideUrl = "/resources/loop.mp4";
    this.endVideoLoop = "/resources/endloop.mp4";
    this.state = 0;
  },
  play: function () {
    window.addEventListener('click', this.onClick);
  },
  pause: function () {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function (evt) {
    var videoEl = this.el.getAttribute('material').src;
    if (!videoEl) { return; }
    switch(this.state)
    {
      case 0:
        videoEl.src = this.entryVideoUrl;
        this.state = 1;
        break;
      case 1:
        videoEl.src = this.loopVideUrl;
        this.state = 2;
        break;
      case 2:
        videoEl.src = this.endVideoLoop;
        this.state = 3;
        break;
    }
    this.el.object3D.visible = true;
    videoEl.play();
  }
});
