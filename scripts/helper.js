
class Helper {
  playPauseAndUpdate(song){
    const duration = player.prettyTime(song.duration);
    $('#time-control .total-time').text(duration);
    player.playPause(song);
  }
};
const helper = new Helper();
