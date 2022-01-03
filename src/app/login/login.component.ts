import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  userData = [
    {
      "password": "195146",
      "lircno": "Kodavati Ajay",
      "Books": [
       {
          "bookname" : "Data Communication and Networking",
          "img" : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.mhhe.com%2Fforouzan&psig=AOvVaw2XZiawlmyxD3y-uqfv_R0S&ust=1641098724977000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKC_v6jfj_UCFQAAAAAdAAAAABAJ",
          "issuedate" : "2021-10-10",
          "returndate" : "2021-10-25"
       },
       {
          "bookname" : "Computer Networks",
          "img" : "https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780128182000.jpg",
          "issuedate" : "2021-09-10",
          "returndate" : "2021-09-25"
        },
       {
          "bookname" : "Operating System",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81eF-RxjuaL.jpg",
          "issuedate" : "2021-11-10",
          "returndate" : "2021-11-25"
       },
       {
          "bookname" : "Unix Concepts",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81e8ChMj6yL.jpg",
          "issuedate" : "2021-12-10",
          "returndate" : "2021-12-25"
       },
      ],
       "Depatment": "Computer Science",
       "CardExpiryDate": "2023"
    },
   
    {
      "password": "195147",
      "lircno": "Surepally Yahaswini",
      "Books": [
       {
          "bookname" : "Data Communication and Networking",
          "img" : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.mhhe.com%2Fforouzan&psig=AOvVaw2XZiawlmyxD3y-uqfv_R0S&ust=1641098724977000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKC_v6jfj_UCFQAAAAAdAAAAABAJ",
          "issuedate" : "2021-10-10",
          "returndate" : "2021-10-25"
       },
       {
          "bookname" : "Computer Networks",
          "img" : "https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780128182000.jpg",
          "issuedate" : "2021-09-10",
          "returndate" : "2021-09-25"
       },
       {
          "bookname" : "Operating System",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81eF-RxjuaL.jpg",
          "issuedate" : "2021-11-10",
          "returndate" : "2021-11-25"
       },
       {
          "bookname" : "Unix Concepts",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81e8ChMj6yL.jpg",
          "issuedate" : "2021-12-10",
          "returndate" : "2021-12-25"
       },
      ],
       "Depatment": "Computer Science",
       "CardExpiryDate": "2023"
   },
   
    {
        "password": "195148",
        "lircno": "Mannem Alekhya Lakshmi",
      "Books": [
       {
          "bookname" : "Data Communication and Networking",
          "img" : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.mhhe.com%2Fforouzan&psig=AOvVaw2XZiawlmyxD3y-uqfv_R0S&ust=1641098724977000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKC_v6jfj_UCFQAAAAAdAAAAABAJ",
          "issuedate" : "2021-10-10",
          "returndate" : "2021-10-25"
       },
       {
          "bookname" : "Computer Networks",
          "img" : "https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780128182000.jpg",
          "issuedate" : "2021-09-10",
          "returndate" : "2021-09-25"
       },
       {
          "bookname" : "Operating System",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81eF-RxjuaL.jpg",
          "issuedate" : "2021-11-10",
          "returndate" : "2021-11-25"
       },
       {
          "bookname" : "Unix Concepts",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81e8ChMj6yL.jpg",
          "issuedate" : "2021-12-10",
          "returndate" : "2021-12-25"
       },
      ],
       "Depatment": "Computer Science",
       "CardExpiryDate": "2023"
   },
   {
        "password": "195149",
        "lircno": "B Avinash ",
      "Books": [
       {
          "bookname" : "Data Communication and Networking",
          "img" : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.mhhe.com%2Fforouzan&psig=AOvVaw2XZiawlmyxD3y-uqfv_R0S&ust=1641098724977000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKC_v6jfj_UCFQAAAAAdAAAAABAJ",
          "issuedate" : "2021-10-10",
          "returndate" : "2021-10-25"
       },
       {
          "bookname" : "Computer Networks",
          "img" : "https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780128182000.jpg",
          "issuedate" : "2021-09-10",
          "returndate" : "2021-09-25"
       },
       {
          "bookname" : "Operating System",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81eF-RxjuaL.jpg",
          "issuedate" : "2021-11-10",
          "returndate" : "2021-11-25"
       },
       {
          "bookname" : "Unix Concepts",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81e8ChMj6yL.jpg",
          "issuedate" : "2021-12-10",
          "returndate" : "2021-12-25"
       },
      ],
       "Depatment": "Computer Science",
       "CardExpiryDate": "2023"
   },
   {
      "password": "195150",
      "lircno": "Abhinav Reddy",
      "Books": [
       {
          "bookname" : "Data Communication and Networking",
          "img" : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.mhhe.com%2Fforouzan&psig=AOvVaw2XZiawlmyxD3y-uqfv_R0S&ust=1641098724977000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKC_v6jfj_UCFQAAAAAdAAAAABAJ",
          "issuedate" : "2021-10-10",
          "returndate" : "2021-10-25"
       },
       {
          "bookname" : "Computer Networks",
          "img" : "https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780128182000.jpg",
          "issuedate" : "2021-09-10",
          "returndate" : "2021-09-25"
       },
       {
          "bookname" : "Operating System",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81eF-RxjuaL.jpg",
          "issuedate" : "2021-11-10",
          "returndate" : "2021-11-25"
       },
       {
          "bookname" : "Unix Concepts",
          "img" : "https://images-na.ssl-images-amazon.com/images/I/81e8ChMj6yL.jpg",
          "issuedate" : "2021-12-10",
          "returndate" : "2021-12-25"
       },
      ],
       "Depatment": "Computer Science",
       "CardExpiryDate": "2023"
   },
]
  constructor(private rout:Router) { }
  user:String = '';
  pass:String = '';
  isUser:boolean = false;
  ngOnInit(): void {
  }
  fun() {
    console.log(this.user);
    console.log(this.pass);
    let userObj={username:this.user,password:this.pass}

    for(let i = 0; i < this.userData.length; i++){
      if(this.userData[i].lircno == this.user && this.userData[i].password == this.pass){
            this.isUser = true;
            break;
      }
    }
    console.log(this.isUser);
  }
  

}
