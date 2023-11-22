import { withCustomWebpackConfig } from "@medusajs/admin"

export default withCustomWebpackConfig((config, webpack) => {
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