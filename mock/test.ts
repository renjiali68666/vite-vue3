import Mock from 'mockjs'
import { MockOptions } from 'vite-plugin-mock-dev-server'
export const test: MockOptions = [
  {
    url: '/api/test',
    method: 'GET',
    body: {
      code: 2000,
      ...Mock.mock({
        'list|1-100': [
          {
            index: /S20201228115950[0-9][0-9][0-9]/,
            pdName: 'Macbook',
            pdNum: 'p_tmp_60a637cd0d',
            'purchaseNum|1-100': 100,
            adminName: '财务部111',
            updateTime: '2020-05-20@date("HH:mm:ss")',
            pdType: '电子产品'
          },
          {
            index: /S20201228115950[0-9][0-9][0-9]/,
            pdName: 'Macbook',
            pdNum: 'p_tmp_60a637cd0d',
            'purchaseNum|1-100': 100,
            adminName: '财务部',
            updateTime: '2020-05-20@date("HH:mm:ss")'
          }
        ]
      })
    }
  }
]
