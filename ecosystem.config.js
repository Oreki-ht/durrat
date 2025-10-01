module.exports = {
  apps: [{
    name: 'durrat',
    script: 'server.js',
    max_memory_restart: '150M',
    restart_delay: 3000,
    exp_backoff_restart_delay: 100,
    min_uptime: 10000,
    instances: 1,
    exec_mode: 'fork'
  }]
};