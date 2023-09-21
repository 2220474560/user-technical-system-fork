import service from '@/utils/request'

export function sign1 (data) {
  const formData = new FormData()
  formData.append('email', data.input1)// 假设你的数据对象中有 email 字段
  formData.append('username', data.input2) // 假设你的数据对象中有 password 字段
  formData.append('class', data.input3)
  formData.append('position', data.value)
  formData.append('password', data.input5)

  return service({
    url: 'http://dev-cn.your-api-server.com/api/register',
    method: 'post',
    data: formData // 传递 FormData 数据对象
  })
}
