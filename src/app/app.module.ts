import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RentownComponent } from './rentown/rentown.component';
import { DatasheetsComponent } from './datasheets/datasheets.component';
import { SupportComponent } from './support/support.component';
import { NewsComponent } from './news/news.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SlidebarComponent } from './home/slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    RentownComponent,
    DatasheetsComponent,
    SupportComponent,
    NewsComponent,
    PartnersComponent,
    AboutComponent,
    ContactComponent,
    SlidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'product',
          component: ProductComponent
        },
        {
          path: 'rentown',
          component: RentownComponent
        },
        {
          path: 'datasheets',
          component: DatasheetsComponent
        },
        {
          path: 'support',
          component: SupportComponent
        },
        {
          path: 'news',
          component: NewsComponent
        },
        {
          path: 'partners',
          component: PartnersComponent
        },
        {
          path: 'about',
          component: AboutComponent
        },
        {
          path: 'contact',
          component: ContactComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
