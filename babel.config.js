module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: false
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
}
