import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';


import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { BindingAssignmentComponent } from './binding-assignment/binding-assignment.component';
import { GameControlComponent } from './binding-assignment/game-control/game-control.component';
import { OddComponent } from './binding-assignment/odd/odd.component';
import { EvenComponent } from './binding-assignment/even/even.component';
import { ServicesAssignmentComponent } from './services-assignment/services-assignment.component';
import { UsersComponent } from './services-assignment/users/users.component';
import { UserListComponent } from './services-assignment/users/user-list/user-list.component';
import { ActiveUserComponent } from './services-assignment/users/user-list/active-user/active-user.component';
import { InactiveUserComponent } from './services-assignment/users/user-list/inactive-user/inactive-user.component';
import { LoggingService } from './logging.service';
import { ShoppingListService } from './shopping/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BindingAssignmentComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ServicesAssignmentComponent,
    UsersComponent,
    UserListComponent,
    ActiveUserComponent,
    InactiveUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggingService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
