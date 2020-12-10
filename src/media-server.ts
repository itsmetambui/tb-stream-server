const NodeMediaServer = require('node-media-server'); // node-media-server doesn't have Typescript support
import config from './rtmp.config';

const nms = new NodeMediaServer(config);

nms.on('prePublish', async (id: string, StreamPath: string, args: object) => {
  let stream_key = getStreamKeyFromStreamPath(StreamPath);
  console.log(
    '[NodeEvent on prePublish]',
    `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`,
  );
});

const getStreamKeyFromStreamPath = path => {
  let parts = path.split('/');
  return parts[parts.length - 1];
};

export default nms;
