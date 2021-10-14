import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { BodyComponent } from './parts/body/body.component';
import { FooterComponent } from './parts/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from './components/panel/panel.component';
import { ActivityPanelComponent } from './components/activity-panel/activity-panel.component';
import { ChannelPanelComponent } from './components/channel-panel/channel-panel.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent, PanelComponent, ActivityPanelComponent, ChannelPanelComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
