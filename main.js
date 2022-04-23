noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(220,230)

    canvas=createCanvas(550,500);
    canvas.position(900,230);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}
function draw(){
    Name=document.getElementById("name").value;
    background(172, 255, 255);
    stroke(247, 62, 96);
    fill(255, 145, 173);

    text(Name,noseX,noseY);
    textSize(difference)
    document.getElementById("fontSize").innerHTML="font size of the text= "+difference+" px";
}
function modelLoaded(){
    console.log('posenet is initialised');
}
function gotResults(results){
    if (results.length>0){
        console.log(gotResults);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+" noseY= "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("rightWristX= "+rightWristX+" leftWristX= "+leftWristX);

        difference=floor(leftWristX-rightWristX);
        console.log("difference= "+difference);
    }
}

