import React from 'react';
import {observable} from 'mobx';
import Zone from 'src/model/zone';
import ChatApi from 'src/api/chatApi';
import ZoneApi from 'src/api/zoneApi';

class Store {
  @observable chatApi: ChatApi = new ChatApi();

  @observable zoneApi: ZoneApi = new ZoneApi();

  // todo: 캐싱
  @observable chatRooms: Zone[] = [];
}

const store = new Store();

const ApplicationContext = React.createContext(store);

export default ApplicationContext;
