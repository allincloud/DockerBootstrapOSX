var config = {};
config.development = true;
config.debug = false;
config.faketld = "docker";
config.pollinterval = 17 * 1000;
config.dockers  = [{ dockerode: { socketPath: '/docker.sock' } }];
config.node_named = { port: 53, bindip: '0.0.0.0' };
module.exports = config;
