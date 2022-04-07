import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  installEvent: any = null;

  @HostListener('window: beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }
  installByUser() {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice
        .then((rta: any) => {
          if (rta.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
        });
    }
  }
}
