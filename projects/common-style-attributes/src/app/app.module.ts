import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import typescript from 'highlight.js/lib/languages/typescript'
import scss from 'highlight.js/lib/languages/scss'
import xml from 'highlight.js/lib/languages/xml'
import { SafeHtmlPipe } from './safe-html-pipe'
import { FlexCellComponent } from './flex-cell.component'
import { ColorsComponent } from './colors.component'
import { BoxComponent } from './box.component'
import { SizeComponent } from './size.component'
import { TypographyComponent } from './typography.component'
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs'
import { MatChipsModule } from '@angular/material/chips'
import { BasicComponent } from './basic.component'

export function hljsLanguages () {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    BoxComponent,
    ColorsComponent,
    FlexCellComponent,
    SizeComponent,
    TypographyComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    HighlightModule,
    MatChipsModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages()
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
