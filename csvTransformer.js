//  função base credita a http://techslides.com/convert-csv-to-json-in-javascript

const { clear } = require('console');
const fs = require('fs');
const basePoints = 'base_pois_def.csv'
const vehiclesPositions = 'posicoes.csv'

const converterCSV = (arquivo) => {
    csv = fs.readFileSync(arquivo);
    
    const array = csv.toString().split('\n');
    const myarray = array.toString().split('\r,')    
    const result = [];    
    const headers=myarray[0].split(",");
    
    for(let i=1;i<myarray.length;i++){
    
        const obj = {};
        const currentline=myarray[i].split(",");
    
        for(let j=0;j<headers.length;j++){  
            if (headers[j] === 'data_posicao') {
                obj.data_posicao = convertDatePickerTimeToMySQLTime(currentline[j]);
            } 
            else if (headers[j] === 'ignicao') {
                obj.ignicao = (currentline === 'true');
            }
            else {
                obj[headers[j]] = currentline[j]; 
            }          
        }
        if (obj[headers[0]] !== "" ) {
            result.push(obj);   
        }
    }    
           return result

    // return JSON.stringify(result);
};


//  https://stackoverflow.com/questions/6291225/convert-date-from-thu-jun-09-2011-000000-gmt0530-india-standard-time-to

function convertDatePickerTimeToMySQLTime(str) {
    var month, day, hours, minutes, seconds;
    var date = new Date(str),
        month = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    hours = ("0" + date.getHours()).slice(-2);
    minutes = ("0" + date.getMinutes()).slice(-2);
    seconds = ("0" + date.getSeconds()).slice(-2);

    var mySQLDate = [date.getFullYear(), month, day].join("-");
    var mySQLTime = [hours, minutes, seconds].join(":");
    return [mySQLDate, mySQLTime].join(" ");
}

module.exports = converterCSV;
// console.log(converterCSV('posicoes.csv'));
// console.log(converterCSV('base_pois_def.csv'));

// console.log(convertDatePickerTimeToMySQLTime('Wed Dec 12 2018 00:04:03 GMT-0200 (Hora oficial do Brasil)'));