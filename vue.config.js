module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dspinfo" : "/",
  outputDir: "dist",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "北京邮电大学数字信号处理课程网站";
      return args;
    });
  },
};
