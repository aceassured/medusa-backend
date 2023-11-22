const  withCustomWebpackConfig = require("@medusajs/admin").withCustomWebpackConfig

module.exports =  withCustomWebpackConfig((config, webpack) => {
  config.plugins.push(
    new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
      API_URL: 
        JSON.stringify("https://medusa-backend-production-3774.up.railway.app"),
    },
    })
  )
  
  return config
})