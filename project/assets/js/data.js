function checkUser() {
  const users = [
    {
      name: "Aishwarya",
      username: "aishwarya",
      password: "20bci001",
    },
    {
      name: "Ajay",
      username: "ajay",
      password: "20bci002",
    },
    {
      name: "Arunachalam",
      username: "arunachalam",
      password: "20bci003",
    },
    {
      name: "Arun Kanth",
      username: "arunkanth",
      password: "20bci004",
    },
    {
      name: "Aswathy",
      username: "aswathy",
      password: "20bci005",
    },
    {
      name: "Bershi",
      username: "bershi",
      password: "20bci006",
    },
    {
      name: "Dinesh",
      username: "dinesh",
      password: "20bci007",
    },
    {
      name: "Gokul",
      username: "gokul",
      password: "20bci008",
    },
    {
      name: "Gopal",
      username: "gopal",
      password: "20bci009",
    },
    {
      name: "Gowtham",
      username: "gowtham",
      password: "20bci010",
    },
    {
      name: "Harish",
      username: "harish",
      password: "20bci011",
    },
    {
      name: "Haswini",
      username: "haswini",
      password: "20bci012",
    },
    {
      name: "Hena Kousar",
      username: "henakousar",
      password: "20bci013",
    },
    {
      name: "Indhuja",
      username: "indhuja",
      password: "20bci014",
    },
    {
      name: "Ishwarya",
      username: "ishwarya",
      password: "20bci015",
    },
    {
      name: "Jeevaamritham",
      username: "jeevaamritham",
      password: "20bci016",
    },
    {
      name: "Jenifer Thangapushpam",
      username: "jenifer",
      password: "20bci017",
    },
    {
      name: "Joyson",
      username: "joyson",
      password: "20bci018",
    },
    {
      name: "Karthik",
      username: "karthik",
      password: "20bci019",
    },
    {
      name: "Karthikeyan",
      username: "karthikeyan",
      password: "20bci020",
    },
    {
      name: "Maanas",
      username: "maanas",
      password: "20bci021",
    },
    {
      name: "Manoj",
      username: "manoj",
      password: "20bci022",
    },
    {
      name: "Mohammed Bakir",
      username: "bakir",
      password: "20bci023",
    },
    {
      name: "Mohanapriya",
      username: "mohanapriya",
      password: "20bci024",
    },
    {
      name: "Mythili",
      username: "mythili",
      password: "20bci025",
    },
    {
      name: "Ragalathika",
      username: "ragalathika",
      password: "20bci026",
    },
    {
      name: "Rajkumar",
      username: "rajkumar",
      password: "20bci027",
    },
    {
      name: " Ram Vinodh",
      username: "ramvinodh",
      password: "20bci028",
    },
    {
      name: "Robin",
      username: "robin",
      password: "20bci030",
    },
    {
      name: "Sadham Hussain",
      username: "sadhamhussain",
      password: "20bci031",
    },
    {
      name: "Sanjay Kumar",
      username: "sanjaykumar",
      password: "20bci033",
    },
    {
      name: "Sanjay",
      username: "sanjay",
      password: "20bci034",
    },
    {
      name: "Sarumathi",
      username: "sarumathi",
      password: "20bci035",
    },
    {
      name: "Sasi Kumar",
      username: "sasikumar",
      password: "20bci036",
    },
    {
      name: "Selciya",
      username: "selciya",
      password: "20bci037",
    },
    {
      name: "Shibi Chakaravathi",
      username: "shibi",
      password: "20bci038",
    },
    {
      name: "Srihari",
      username: "srihari",
      password: "20bci039",
    },
    {
      name: "Surya",
      username: "surya",
      password: "20bci040",
    },
    {
      name: "Swarnalatha",
      username: "swarnalatha",
      password: "20bci041",
    },
    {
      name: "Swetha",
      username: "swetha",
      password: "20bci042",
    },
    {
      name: "Thilagavathy",
      username: "thilagavathy",
      password: "20bci043",
    },
    {
      name: "Varshini",
      username: "varshini",
      password: "20bci044",
    },
    {
      name: "Varun Kumar",
      username: "varunkumar",
      password: "20bci045",
    },
    {
      name: "Veerandra Kumar",
      username: "veera",
      password: "20bci046",
    },
    {
      name: "Vishnu",
      username: "vishnu",
      password: "20bci047",
    },
    {
      name: "Praveen Kumar",
      username: "praveen",
      password: "20bcir01",
    },
    {
      name: "Latha Mam",
      username: "latha",
      password: "20bci050",
    },
    {
      name: "Francina Mam",
      username: "francina",
      password: "20bci051",
    },
    {
      name: "Rukshana Begam Mam",
      username: "rukshana",
      password: "20bci052",
    },
    {
      name: "Mani Varma Sir",
      username: "manivarma",
      password: "20bci053",
    },
  ];
   
  var uName=document.getElementById("username").value;
  var pWord=document.getElementById("password").value;
  console.log(uName,pWord);


  if(uName!=""&&pWord!=""){
    // 1) take the length of array-done
    // 2) create a for loop with above length and array-done
    // 3) inside a for loop create another if condition-done
    // 4) condition([array username==uName&& array password==pWord ])-done
    // 5) if condition true means set a localstorage variable(username)-done
    // 6) window.redirect to album page-done
    var uNameLen=users.length;
    for(var i=0;i<uNameLen;i++){
        //console.log(users[i]);
        if(users[i].username==uName&&users[i].password==pWord){
            console.log("valid");
            sessionStorage.setItem("currentUser",users[i].name);
            window.location.replace("../project/albumpg.html");
        }
    }
  }else{
    swal("Note!", "Enter a Valid Username/Password", "error");
  }
}
