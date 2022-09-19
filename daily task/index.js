
//1.For the given JSON iterate over all for loops(for, for in, for of, forEach)


var arr=[{"name":"Gunal",
          "age" :"22",
          "gender": "Male",
          "phoneno":"9789556677"
          },
          {
          "name"  :"Ajith",
          "age"   :"24",
          "gender":"Male",
          "phoneno" : "9755334678"
          }];     
for(var i=0;i<arr.length;i++){
console.log(arr[i]);
}
for( var n in arr){
    console.log(arr[n].name); 
   }


//2.Create your own resume data in JSON format:

var myResume={
    "basics": [{
      "name": "GUNAL N",
      "email": "gunalnandakumar@gamil.com",
      "phone": "9849294878",
      "degree": "B.E",
      "location": {
        "address": "46,nethaji street",
        "postalCode": "602001",
        "city": "Thiruvallur",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles":
        {
          "github":"https://github.com/gunal15"
        }
    
    }],
    
    "education": [
      {
        "institution": "JEPPIAAR MAAMALLAN ENGINEERING COLLEGE",
        "department": "CIVIL ENGINEERING",
        "studyType": "fulltime",
        "batch start year": 2016,
        "batch end year": 2020,
        "gpa": 6.34,
      }
    ],
    "skills": [
      {
        "name": "C,javascript",
        "level": "beginner",
        
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    
  }
  console.log(myResume);

//3.Read about the difference between Window,screen and document in JAVASCRIPT:



Window:
      * The JavaScript window object sits at the top of the JavaScript Object hierarchy and represents the browser window. 
      * The window object is supported by all browsers. All global JavaScript objects , functions, and variables automatically become members of the window object.
      * The window is the first thing that gets loaded into the browser . 
      * This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more.
      * The window object represents the current browsing context 
      * It holds things like window.location, window.history, window.screen, window.status, or the window.document . Each browser tab has its own top-level window object.
      * Each of these windows gets its own separate global object.
      * window.window always refers to window, but window.parent and window.top might refer to enclosing windows, giving access to other execution contexts. 
      * The window property of a window object points to the window object itself. 
      
 So the following statements all return the same window object:

                            window.window
                            window.window.window
                            window.window.window.window

Document:
      * The Document interface represents any web page loaded in the browser and serves as an entry point into the web page’s content, which is the DOM tree.
      * When an HTML document is loaded into a web browser , it becomes a document object.
      * It is the root node of the HTML document. 
      * The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc. 
      * HTML documents, served with the “text/html” content type, also implement the HTMLDocument interface, whereas XML and SVG documents implement the XMLDocument interface.

Screen:   
      * Screen is a small information object about physical screen dimensions .
      * It can be used to display screen width, height, colorDepth, pixelDepth etc. 
      * It is not mandatory to write window prefix with screen object. 
      * It can be written without window prefix.

Properties:
            screen.width
            screen.height
            screen.availWidth
            screen.availHeight
            screen.colorDepth
            screen.pixelDepth



