//4 Errors
function timeInWords(h, m) {
    // Write your code here
  let num = ('one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen, eighteen,nineteen,twenty').split(',')
    let double_digits = ['twenty']
    let fixed = `${'o\'\ clock'}`
    let before = 'past', after = 'to', min = 'minutes'
    let divd = ('quarter,half').split(','),s = '',u = ''
    if(m >= 40 && m <= 59){
       let d = 60 - m
       console.log(num[d])
       u +=`${num[d-1]} ${min} ${after} ${num[h]}`
       return u;
    }
    if (m == 15) return s += (`${divd[0]} ${before} ${num[h-1]}`)
    if(m == 30) return s += `${divd[1]} ${before} ${num[h-1]}`
    if(m == 0) return s += `${num[h-1]} ${fixed}`
    if(m == 45) return s += (`${divd[0]} ${after} ${h}`)
    if(m >= 1 < 20) return s += (`${num[m-1]} ${min} ${before} ${num[h-1]}`)
    if(m >= 20 && m <= 29){
        let i = m.toString().split("")
        return s += (`${double_digits[0]} ${num[i[1]-1]} ${before} ${num[h-1]}`)
    }

    if(m >= 31 && m <= 39){
        let d = 60 - m;
        let i = d.toString().split("")
        return s += (`${double_digits[0]} ${num[i[1]-1]} ${min} ${after} ${num[h]}`)
    }
  }
