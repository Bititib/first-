
const { Configuration, OpenAIApi } = require("openai"); 
const configuration = new Configuration({ apiKey: "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", }); 
const openai = new OpenAIApi(configuration); 
async function getModels() {
     try { 
        const response = await openai.listModels();
        console.log(response.data); 
        } 
    catch (error) 
    { console.error(error); }
 } 
getModels();