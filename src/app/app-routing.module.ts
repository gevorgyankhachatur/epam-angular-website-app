import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponent } from './service/service.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
  { path: '/home', component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/services', component: ServiceComponent },
  { path: '/news', component: NewsComponent },
  { path: '/trainer', component: TrainerComponent },
  { path: '/gallery', component: GalleryComponent },
  { path: '/contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
