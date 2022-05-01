image2 = "";
status = "";
objects = [];

function preload()
{
    image2 = loadImage("bedroom.webp");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    cocossd = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelloaded()
{
    console.log("Model Is Loaded!");
    status = true;
    cocossd.detect(image2, gotResults);
}

function gotResults(error, results)
{
    if(results == error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}


function draw()
{
    image(image2, 0, 0, 640, 420);
    if(status != "")
    {
      for(i = 0; i < objects.length; i++)
      {
          document.getElementById("status").innerHTML = "Status: Objects Detected!";
          document.getElementById("noofobj").innerHTML = "There are 5 big objects and CocoSSD detected 2 objects";
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 10);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
}

function back()
{
    window.location.href = "index.html";
}
