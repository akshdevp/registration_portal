# registration_portal
Simple Registration and login portal after authentication redirects to dashboard. This application is demo for understanding MEAN Stack. 



#firstly install node server

next do npm -g gulp bower

     //creating a folder
 create a folder front-end
 
 in the folder front-end do
 
 -> yo gulp-angular my-message-front
 
 and there will be some questions answer that one
 
 and again in that folder do
 
-> gulp 

and next do

->gulp serve 

a web page will be displayed

//Make a Angular post form in main.html//

<div class="container">

  <div class="panel panel-default">
  
  <div class="panel-heading">Post A Message</div>
  
    <div class="panel-body">
    
      <div class="input-group">
      
        <textarea class="form-control custom-control" rows=3 style="resize: none" ng-model="main.message"></textarea>
        
        <span class="input-group-addon btn btn-primary" ng-click="main.postMessage()">post</span>
        
      </div>
      
      </div>
    
    </div>
  
  <div class="panel panel-default">
  
    <div class="panel-heading"> Messages</div>
    
    <div class="panel-body">
    
      <ul class="list-group">
      
        <li class="list-group-item" ng-repeat="message in main.messages">
        
          {{message.msg}} {{message.user.email}}
          
        </li>
        
      </ul>
      
    </div>
    
  </div>
  
</div>









