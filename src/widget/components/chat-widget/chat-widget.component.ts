import { Component, input, model, OnInit, output, signal } from '@angular/core';
import { WidgetConfigs } from '../../models/WidgetConfigs';
import { DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.scss',
})
export class ChatWidgetComponent implements OnInit {
  message = model('');
  isChatOpen = false;
  messages = signal([
    {
      sender: 0,
      text: 'Hello! How can I assist you today?',
      time: new Date(),
    },
    {
      sender: 1,
      text: 'Hi! I have a question about my order status.',
      time: new Date(),
    },
    {
      sender: 0,
      text: 'What is your order number?',
      time: new Date(),
    },
    {
      sender: 1,
      text: "Here's it: 123456789",
      time: new Date(),
    },
    {
      sender: 0,
      text: 'Is there anything else I can assist you with?',
      time: new Date(),
    },
  ]);

  readonly configs = input.required<WidgetConfigs>();
  close = output<boolean>();
  send = output<string>();

  constructor() {}

  ngOnInit(): void {
    console.log('ChatWidgetComponent', this.configs());
  }

  sendMessage() {
    this.messages().push({
      sender: 1,
      text: this.message(),
      time: new Date(),
    });
    this.send.emit(this.message());
    this.message.set('');
  }
}
