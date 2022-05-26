import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog"
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  posts: Array<any> = new Array();
  totalLength: any;
  page: number = 1;

  searchPosts: any;
  constructor(
    private postsService: PostsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarPosts();
  }

  listarPosts(){
    this.postsService.listarPosts().subscribe((posts) => {
      this.posts = posts;
      this.totalLength = posts.length;
    },err  =>{
      console.log("Erro ao listar Posts: ",err);
    })
  }

  openModal(title: string, body: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '550px',
      data: {title: title, body: body},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  search(){
    if(this.searchPosts == ""){
      this.ngOnInit();
    }else{
        this.posts = this.posts.filter(res => {
            return res.title.toLocaleLowerCase().match(this.searchPosts.toLocaleLowerCase());
        })
        this.totalLength = this.posts.length
        this.page = 1
        if(this.posts.length == 0){
          this.posts = [{title: "Post não encontrado"}]
        }
  }


}



}