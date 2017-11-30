module.exports = {
  apps: [
    {
      name: "gene-v3",
      script: "./build/main.js",
      max_memory_restart: "256M",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      error_file: "/tmp/error.log",
      out_file: "/tmp/out.log",
      env: {
        "NODE_ENV": "production",
      }
    }
  ]
}
