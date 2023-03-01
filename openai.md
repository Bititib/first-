# OpenAI
## 创建一个node项目
npm init -y
## 在项目中引入openai
npm install openai

## 项目搭建
1、在项目中参创建一个 index.js 文件

### 在index文件中引入openai
const { Configuration,OpenAIAPI } = require("openai");
··整代码··
```js
    const { Configuration,OpenAIAPI } = require("openai");
    const configuration = new Configuration({
        apiKEY:"YOUR_OPENAI_API_KEY",
    });
    const openai = new OpenAIAPI(configuration);
```

### 以下是 请求模型 的响应
```js
    // 列出当前可用的模型，并提供有关每个模型的基本信息，例如所有者和可用性
   
    const response =  openai.listModels();// Promise <pendding>
    response.then((res)=>{
        console.log(res)
    })
```
 
### 以下是 请求 —— 检索模块
检索模型实例，提供有关模型的基本信息，例如所有者和权限。
```js
 async function getResponse(){
    try {
        const res = await openai.retrieveModel("text-davinci-003");
        const { data:data } = res;
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
};
getResponse()
```

### 以下是创建 

```js
// 创建完成
const response = openai.createCompletion({
    // 参数
    model:"text-davinci-003",// 创建的模型，这里必须是模型ID
    prompt:"Say this is a test",// 提示
    max_tokens:7,// 最大值，整数
    temperature:0.// 温度,值越小越稳定
})
response.then((res)=>{
    let { data:data } = res
    console.log(data);
})
```
*** openai.createCompletion *** 的参数{
  "model": "text-davinci-003", 模型ID
  "prompt": "Say this is a test", 提示
  "max_tokens": 7, 最大值
  "temperature": 0, 温度
  "top_p": 1, 使用温度采样的替代方法称为核心采样
  "n": 1, 为每个提示生成的完成次数
  "stream": false,是否流式传输回部分进度
  "logprobs": null,包括最可能的令牌的日志概率，以及所选令牌
  "stop": "\n", 最多 4 个序列，其中 API 将停止生成更多令牌 
} 
 