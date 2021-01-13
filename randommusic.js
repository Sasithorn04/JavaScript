function random(){
    let num = Math.floor(Math.random() * 10)
    console.log(num)
    if (num == 0){
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/lFsXixn7PGY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else if (num == 1){
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/CpMnEJwk0TU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else if (num == 4){
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/HGkASBMiTkM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else if (num == 2){
        document.getElementById("yt").innerHTML = '<iframe  width="250" height="140" src="https://www.youtube.com/embed/fS1wLTOGu5A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else if (num == 3){
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/dJ9uVVNWClk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else if (num == 5){
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/PBZFGmJKgAo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else if (num == 6){
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/AbEjhYLarSc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else if (num == 7){
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/gDTDFz0PL78" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else if (num == 8){
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/2KS3C7LHw_c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    else {
        document.getElementById("yt").innerHTML = '<iframe width="250" height="140" src="https://www.youtube.com/embed/V9fZ7gA_aDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
}
