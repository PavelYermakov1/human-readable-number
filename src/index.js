module.exports = function toReadable (number) {
    const figures = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const digits = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    const decimal = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if(number === 0) {
        return 'zero';
    }
        number = number.toString();
        let length = number.length;
        let arr = number.split(''); 
        let str = '';
        for (let i=0; i < length; i++) {
            if ((length-i) % 3 == 2) { 
                if (arr[i] == '1') {
                    str += digits[Number(arr[i+1])] + ' ';
                    i++;
                } else if (arr[i] != 0) {
                    str += decimal[arr[i] - 2] + ' ';
                }
            } else if (arr[i] != 0) { 
                str += figures[arr[i]] + ' ';
                if ((length-i) % 3 == 0) str += 'hundred ';
            }
        }
        return str.trim();
    }

