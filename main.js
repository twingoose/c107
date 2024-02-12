function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true });
classifier = ml5.soundClassifier( "https://teachablemachine.withgoogle.com/models/.json"
,modelReady )  ;  

}

function modelReady()
{

classifier.classify(gotResults);

}

function gotResult(error,results)
    {
if (error) {
console.error.(error);
} else
{
console.log(results);
ramdom_number_r = Math.floor(Math.ramdon() * 225) +1;
ramdom_number_g = Math.floor(Math.ramdon() * 225) +1;
ramdom_number_b = Math.floor(Math.ramdon() * 225) +1;
}

document.getElementById("result_label").innerHTML = "ican hear -"+
result[0].label;
document.getElementById("result_confidence").innerHTML = "Accuray -"+
(result[0].confidence*100).toFixed(2)+"%"
document.getElementById("result_label").style.color = "rbg("
+random_number_r+","+ramdom_number_g+","+ramdom_number_r+")"
document.getElementById("result_confidence").style.color = "rbg("
+random_number_r+","+ramdom_number_g+","+ramdom_number_r+")"


img = document.getElementById('alien1')
img1 = document.getElementById('alien2')
img2 = document.getElementById('alien3')
img3 = document.getElementById('alien4')


if (result[0].label == "Clap"  )
{
img.src = 'aliens-01.gif';
img1.src = 'aliens-02.png';
img2.src = 'aliens-03.png';
img3.src = 'aliens-04.png';

} 

else if (result[0].label == "bell"  )
{
img.src = 'aliens-01.png';
img1.src = 'aliens-02.gif';
img2.src = 'aliens-03.png';
img3.src = 'aliens-04.png';
}
else if (result[0].label == "Snapping"  )
{
img.src = 'aliens-01.png';
img1.src = 'aliens-02.png';
img2.src = 'aliens-03.gif';
img3.src = 'aliens-04.png';

} else  {
img.src = 'aliens-01.png';
img1.src = 'aliens-02.png';
img2.src = 'aliens-03.png';
img3.src = 'aliens-04.gif';

}

}
