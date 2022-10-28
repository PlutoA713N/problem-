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

//Take as much time to understand question everything is interlinked, else you gonna end up writing inefficient code n wasting time on planning n thinking
function timeInWords(h, m){
    let num = ("zero,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fiftenn,sixteen,seventeen,eighteen,nineteen,twenty,twentyone,twentytwo,twentythree,twentyfour,twentyfive,twentysix,twentyseven,twentyeight, twentynine").split(",")
   let s = m == 0 ? `${num[h]} o' clock`: m == 15 ? `quarter past ${num[h]}`: m == 30 ? `half past ${num[h]}`: m == 45 ? `quarter to ${num[h+1]}`: m < 30 ? `${num[m]} minutes past ${num[h]}`: m > 30 ? `${num[60-m]} minutes to ${num[h]}` : 0;
   return s;
}
timeInWords(7,47)
