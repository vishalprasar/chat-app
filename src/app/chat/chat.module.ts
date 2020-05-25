import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';
import { RemoveSpecialCharPipe } from '../shared/pipe/remove-special-char.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    RouterModule.forChild([
      {path:'chat',component:ChatBoxComponent,pathMatch:'full'}
    ]),
    SharedModule,
    ]
})
export class ChatModule { 
}
