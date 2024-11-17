import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-playarea',
  templateUrl: './playarea.component.html',
  styleUrls: ['./playarea.component.scss'],
})
export class PlayareaComponent  implements OnInit, AfterViewInit  {
  isSidebarOpen = false;
  loader = true

  showRightButton= false;
  showLeftButton= false;
  intervalId: any;
  cards = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    // { title: 'Card 3', description: 'Description for Card 3' },
    // { title: 'Card 4', description: 'Description for Card 4' },
  ];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.loader = false
    },1000)
    this.sidebarService.sidebarState$.subscribe(isOpen => this.isSidebarOpen = isOpen);
    this.intervalId = setInterval(() => {
      this.updateButtonVisibility();
    }, 200);
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null; 
    }
  }

  // scroll(direction: 'left' | 'right') {
  //   const container = document.querySelector('.cards-wrapper') as HTMLElement;
  //   const scrollAmount = 300; // Adjust this value based on your design
    
  //   if (direction === 'left') {
  //     container.scrollLeft -= scrollAmount;
  //   } else {
  //     container.scrollLeft += scrollAmount;
  //   }
  // }
  ngAfterViewInit() {
    this.updateButtonVisibility();
  }

  scroll(direction: 'left' | 'right') {
    const container = document.querySelector('.cards-wrapper') as HTMLElement;
    const scrollAmount = 300; 

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    // Update button visibility after scrolling
 
    this.updateButtonVisibility();
  }

  updateButtonVisibility() {
    const container = document.querySelector('.cards-wrapper') as HTMLElement;
    const contentWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;
    // console.log(contentWidth,  containerWidth)
    const scrollPosition = container.scrollLeft;

    // const showButtons = contentWidth > containerWidth * 1.25;

    this.showLeftButton = scrollPosition > 0;

    // this.showRightButton = scrollPosition + containerWidth < contentWidth;
    // this.showRightButton = showButtons && scrollPosition + containerWidth < contentWidth;
    this.showRightButton = contentWidth > containerWidth && scrollPosition + containerWidth < contentWidth;

  }
}
