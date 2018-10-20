import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers: [LoggingService]
})
export class ServerComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  displayDetails: boolean = false;
  serverCreationStatus: string;
  serverName: string = 'teste';
  serverStatus: string;
  servers = [["TestServer", "online"], ['AnotherServer', 'offline']];
  constructor(private loggingService: LoggingService) {
    setInterval(()=>{
      this.serverCreated = false;
      this.allowNewServer = true;
      this.serverCreationStatus = "Please enter new server name";
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    setTimeout(()=>{
      this.allowNewServer = false;
      this.serverCreationStatus = "Server created. Server name " + this.serverName;
      this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
      this.serverCreated = true
      this.servers.push([this.serverName,this.serverStatus]);
      this.serverName = "";
      this.loggingService.log(this.servers);
    }, 1000);
  }

  onDetails(){
    this.displayDetails = !this.displayDetails;
  }

}
