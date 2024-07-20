const cl = console.log;

const sweetAlert = (msg, iconStr)=>{
    Swal.fire({
        title:msg,
        timer:2500,
        icon:iconStr
    })
}

const hr = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false:true;
            if(!err){
                resolve("Candidate is shortlisted for First Tech Interview")
            }else{
                reject("Looking for a candidate!!!")
            }
        }, 2500);
    })
}


const firstInt = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false:true;
            if(!err){
                resolve("Candidate is shortlisted for second Tech Interview")
            }else{
                reject("Candidate is very bad in basics!!!")
            }
        }, 2000);
    })
}

const secondInt = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false:true;
            if(!err){
                resolve("Candidate is shortlisted for third Tech Interview")
            }else{
                reject("Candidate is not able to write code!!!")
            }
        }, 1500);
    })
}

const thirdInt = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false:true;
            if(!err){
                resolve("Candidate is shortlisted for given profile")
            }else{
                reject("Candidate is not selected!!!")
            }
        }, 1000);
    })
}
hr()
    .then((res)=>{
        cl(res)
        return firstInt();
    })
    .then((res)=>{
        cl(res)
        return secondInt();
    })
    .then((res)=>{
        cl(res)
        return thirdInt();
    })
    .then((res)=>{
        cl(res)
        sweetAlert(res, "success")
    })
    .catch(err=>{
        cl(err)
        sweetAlert(err, "error")
    })