const img= document.getElementsByTagName('img')[0]
const div= document.getElementsByTagName('div')[0]

timer= setInterval(fun, 50)
counter=0
counter2=100
function fun(){
    counter++
if(img.complete){
    if(counter<=100 ){
      
    div.innerText=`${counter}%`
    console.log(counter)
    }

    if(counter2>=0){
        
        img.style.filter = `blur(${counter2}px)`
        counter2--
    }   
}
}

