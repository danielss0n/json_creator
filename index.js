const config = require('./config.js');
const fs = require('fs');

const DIR_BUILD_NAME = "json"
iniciate(config)

function iniciate(config) {

    const data_obj_array = []
    const data_array = processData(config)
    const config_object_length = Object.values(config).length


    for (var i = 0; i < config_object_length; i++) {
        const data_obj = {
            name: Object.values(config)[i].name,
            data: data_array[i]
        }

        data_obj_array.push(data_obj)
    }

    createFile(data_obj_array)

}

function processData(config) {

    const columns_qty = Object.keys(config).length
    const columns_data_values = Object.values(config)
    var array_modifing = []
    var data_array = []

    for (let i = 0; i < columns_qty; i++) {
        array_modifing = characters_modifier(columns_data_values, i)
        data_array.push(array_modifing)
    }

    //data_array.splice(0, data_array.length - 1)

    return data_array

}

function characters_modifier(obj_data, i) {

    const regex = /[º!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    if (obj_data[i].operations.includes(1)) {
        //remove blank spaces
        obj_data[i].data = obj_data[i].data
            .replace(/\s+/g, "")
    }

    if (obj_data[i].operations.includes(2)) {
        //remove numbers
        obj_data[i].data = obj_data[i].data
            .replace(/\d/g, "")
    }

    if (obj_data[i].operations.includes(3)) {
        //remove special characters
        obj_data[i].data = obj_data[i].data
            .replace(regex, '')
    }

    //split by upper case  
    obj_data[i].data = obj_data[i].data
        .split(/(?=[A-Z])/)

    return obj_data[i].data

}

function createFile(data_obj_array) {

    const processed_json = JSON.stringify(data_obj_array)

    if (!fs.existsSync(`./${DIR_BUILD_NAME}`)) {
        fs.mkdirSync(`./${DIR_BUILD_NAME}`)
    }

    fs.writeFile(`./${DIR_BUILD_NAME}/build.json`, processed_json, () => {
        console.log(`Json created on /${DIR_BUILD_NAME}/build.json`)
    })

}