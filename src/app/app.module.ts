import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './tutorial/header.component';
import { FooterComponent } from './tutorial/footer.component';

import { UserComponent } from './example/user.component'; // Add an import to the component pointing to the place where it was created
import { PieComponent } from './pie/pie.component';
import { DonutComponent } from './donut/donut.component';
import { HalfDonutComponent } from './half-donut/half-donut.component';
import { HalfdonutSliderComponent } from './halfdonut-slider/halfdonut-slider.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    PieComponent,
    HalfDonutComponent,
    HalfdonutSliderComponent,
    DonutComponent, // Add the components name to the module declarations
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
