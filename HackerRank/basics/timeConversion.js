//This Function returns time to Military Format

//Time Example
var s = '07:10:00PM'

function timeConversion(s) {
    // Write your code here
    let hour = s.substring(0, 2)
    let convertedHour = '0'
    //AM 00: Conversion
    if(s.slice(-2) == 'AM' && hour == '12'){
        convertedHour = s.replace('12', '00');
        return convertedHour.substring(0, 8)
    }
    //PM Conversion
    if(s.slice(-2) == 'PM' && Number(hour >= 1) && Number(hour <= 12)){
        switch (hour) {
            case '01':
                convertedHour = s.replace('01:', '13:');
                break
            case '02':
                convertedHour = s.replace('02:', '14:');
                break
            case '03':
                convertedHour = s.replace('03:', '15:');
                break
            case '04':
                convertedHour = s.replace('04:', '16:');
                break
            case '05':
                convertedHour = s.replace('05:', '17:');
                break
            case '06':
                convertedHour = s.replace('06:', '18:');
                break
            case '07':      
                convertedHour = s.replace('07:', '19:');
                break
            case '08':
                convertedHour = s.replace('08:', '20:');
                break
            case '09':
                convertedHour = s.replace('09:', '21:');
                break
            case '10':
                convertedHour = s.replace('10:', '22:');
                break
            case '11':
                convertedHour = s.replace('11:', '23:');
                break
            case '12':
                convertedHour = s.replace('12:', '12:');
                break
            default:
                console.log(`Sorry, we are out of ${s.slice(-2)}.`);
        }
        //PM
        return convertedHour.substring(0, 8)
    }
    //AM - No need to conversion
    return s.substring(0, 8)
}

console.log(timeConversion(s))


