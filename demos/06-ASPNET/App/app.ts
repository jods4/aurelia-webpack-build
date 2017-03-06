export class AppViewModel {
  time = "n/a";

  fetchTime() {
    fetch("/api/Time")
      .then<any>(response => response.json())
      .then(obj => this.time = obj.time);
  }
}