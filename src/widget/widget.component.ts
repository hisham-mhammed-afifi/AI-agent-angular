import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';
import { WidgetConfigs } from './models/WidgetConfigs';

@Component({
  selector: 'chat-root',
  standalone: true,
  imports: [ChatWidgetComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent implements OnInit, OnChanges {
  configs: WidgetConfigs = <WidgetConfigs>{};
  @Input('id') id: string = '';
  @Input('title') title: string = '';
  @Input('lang') lang: string = 'en';
  @Input('theme') theme: string = 'light';
  @Input('position') position: string = 'bottom-right';
  @Input('direction') direction: string = 'ltr';
  @Input('myInputProp') inputProp: string = '';

  @Output('message') message = new EventEmitter<string>();
  @Output('close') close = new EventEmitter<boolean>();

  constructor() {}

  ngOnChanges(changes: any): void {
    console.log('Widget changed', changes);
  }

  ngOnInit(): void {
    this.configs = {
      id: this.id,
      title: this.title,
      lang: this.lang,
      theme: this.theme,
      position: this.position,
      direction: this.direction,
    };

    console.log('Widget initialized', this.configs);
  }
}
