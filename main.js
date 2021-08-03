function preload(){

}


function setup(){


    canvas = createCanvas(400,400)
    canvas.center();
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose' ,gotResult)

}

function draw(){
image(video,0,0,400,400)
}

function take_picture(){

    save("C-115.png")
}

function modelLoaded(){

    console.log("poseNet Is Working Sucessfuly!")
}
function gotResult(result){

    if(result.length<0){

        console.log(result)
        console.log("Nose x =" +reuslt[0].pose.nose.x)
        console.log("Nose y = "+ result[0].pose.nose.y)
    }
    
}



