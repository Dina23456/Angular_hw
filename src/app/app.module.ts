import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users-component/users/users.component';
import {UserComponent} from './components/users-component/user/user.component';
import {PostComponent} from './components/posts-component/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {FullUserComponent} from './components/users-component/full-user/full-user.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/user/resolve/user-resolve.service';
import {PostsComponent} from './components/posts-component/posts/posts.component';
import {FullPostComponent} from './components/posts-component/full-post/full-post.component';
import {PostResolveService} from './services/post/post-resolve/post-resolve.service';


const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
    children: [{path: ':id', component: FullUserComponent}]
  },
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService},
    children: [{path: ':id', component: FullPostComponent}]
  },
  {path: '', redirectTo: 'posts', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostComponent,
    FullUserComponent,
    PostsComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
