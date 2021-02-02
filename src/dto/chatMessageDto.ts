import {IMessage} from 'react-native-gifted-chat';

export class ChatMessageDto {
  // todo: check 위험!
  private constructor(
    id: string,
    createdAt: Date,
    chatRoomId: string,
    senderId: string,
    body: string,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.chatRoomId = chatRoomId;
    this.senderId = senderId;
    this.body = body;
  }

  readonly id: string;

  readonly createdAt: Date;

  readonly chatRoomId: string;

  readonly senderId: string;

  readonly body: string;

  static of(
    id: string,
    createdAt: Date,
    chatRoomId: string,
    senderId: string,
    body: string,
  ) {
    return new ChatMessageDto(id, createdAt, chatRoomId, senderId, body);
  }

  static fromMessage(message: IMessage) {
    return new ChatMessageDto(
      message._id as string,
      new Date(),
      // todo: remove hard coding
      '110841e3-e6fb-4191-8fd8-5674a5107c33',
      message.user._id as string,
      message.text,
    );
  }

  serialize(): string {
    return JSON.stringify(this);
  }
}
