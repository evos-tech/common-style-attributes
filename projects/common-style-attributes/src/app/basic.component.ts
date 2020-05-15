import { Component, ChangeDetectionStrategy } from '@angular/core'
import { basicDocs } from './docs/basicDocs'

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent {
  docs = basicDocs
}
