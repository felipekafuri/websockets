import { httpServer } from './http';
import './websocket'

httpServer.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
})