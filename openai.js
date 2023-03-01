const apiKey = "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";
const { Configuration,OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey:apiKey,
});
const openai = new OpenAIApi(configuration);

/*
// 模型请求
const response = async ()=> { return await openai.listModels();}
response().then((res)=>{
    console.log(res.data)
});
*/

/*
// 请求 —— 检索模块 
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
*/

/*
// 创建完成
const response = openai.createCompletion({
    // 参数
    model:"text-davinci-001",// 创建的模型，这里必须是模型ID
    prompt:"Say this is a test",// 提示
    max_tokens:7,// 最大值，整数
    temperature:0.// 温度,值越小越稳定
})
response.then((res)=>{
    let { data:data } = res
    console.log(data);
})
*/

/*
// 创建编辑
const response = openai.createEdit({
    model:'text-davinci-edit-001',
    input:"What day of the week is it?",
    instruction:"Fix the spelling mistakes",
    // temperature:0,
    // n:1,
});
response.then((res)=>{
    let {data:data} = res
    console.log(data)
})
*/


/*
// 图像编辑
const response = openai.createImage({
    prompt: "树下老人",
    n: 2,
    size: "1024x1024",
});
*/




const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: "写一个短视频脚本.",
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

response.then((res)=>{
    let { data:data } = res
    console.log(data)
})



















