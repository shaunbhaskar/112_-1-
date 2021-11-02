Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function take_snapshot()
    { Webcam.snap(function(data_uri)
    { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); }
    
    console.log('ml5 version:', ml5.version );
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R-cjDknwA/model.json',modelLoaded);
    
    function modelLoaded(){
    console.log('Model Loaded');
    }
    
    function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The Prediction is " + prediction;
    var utterthis = new SpeechSynthesisUtterance (speak_data_1);
    synth.speak(utterThis);
    }
    
    function check(){
        img=document.getElementById('captured_image');
        classifier.classify(img,gotResult);
        }
        
        function gotResult(error,results){
        if(error){
        console.error(error);
        }
        else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        prediction=results[0].label;
    
        speak();
        if(results[0].label == "Victory") 
        { document.getElementById("update_gesture").innerHTML = "&#9996;"; }
        if(results[0].label == "Thumbsup") 
        { document.getElementById("update_gesture").innerHTML = "&#128077;"; }
        if(results[0].label == "Hi") 
        { document.getElementById("update_gesture").innerHTML = "&#128400;"; }
        if(results[0].label == "Pointing finger") 
        { document.getElementById("update_gesture").innerHTML = "&#128070;"; }
        if(results[0].label == "Super") 
        { document.getElementById("update_gesture").innerHTML = "&#128076;"; }
        if(results[0].label == "2 Finger combined Hi") 
        { document.getElementById("update_gesture").innerHTML = "&#128406;"; }
        if(results[0].label == "Yo") 
        { document.getElementById("update_gesture").innerHTML = "&#129304;"; }
        
        }}