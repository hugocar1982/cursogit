function funo(){

    setTimeout(()=>{
        return("funo")
    },1500)
    
}



function fdos(){
    return("fdos")
}

async function main(){

    console.time("r1");
    console.log("hola");
    const res =  await funo();

    console.log(res)
    console.log(fdos());
    
    console.timeEnd("r1");

}


main()