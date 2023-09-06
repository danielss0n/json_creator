import { dataConfig } from "./config.js"
import fs from 'fs';
const dataObj = createObj(dataConfig)
createFile(dataObj)
//used in the createObj function:
function processData(dataConfig){
    //delete spaces and numbers:
    const processData = dataConfig.data.replace(/\s+/g, '').replace(/\d/g, "")
    //split the data and create an array:
    const arrayData = processData.split(/(?=[A-Z])/)
    return arrayData
}
//used in dataObj const:
function createObj(dataConfig){
    const dataObject = {}
    const arrayData = processData(dataConfig)
    dataObject.column = dataConfig.column //give an unique value to the obj
    dataObject["data"] = arrayData //give an array value to the obj
    return dataObject
}
//last function:
function createFile(dataObj){
    const processedDataObj = JSON.stringify(dataObj)
    const dir = './jsons'
    //create the dir
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
    fs.writeFile(`./${dir}/${dataObj.column}.json`, processedDataObj, () => { console.log('Json created!' )})
}
