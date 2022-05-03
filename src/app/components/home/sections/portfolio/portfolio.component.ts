import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Work } from '../../models';

@Component({
  selector: 'hd-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  works: Work[] = [];
  categories: string[] = [];
  chosenCategory: string = 'all';

  works$ = new BehaviorSubject<Work[]>([]);

  constructor(private httpService: HttpService) {}

  chooseCategory(category: string) {
    console.log(category);
    this.chosenCategory = category;
  }

  goTo(link: string) {
    window.location.href = link;
  }

  ngOnInit(): void {
    this.httpService.getWorksFromfile().subscribe((res: any) => {
      console.log(res);
      const categoriesTmp = res.map((work: Work) => {
        return work.category.name;
      });

      this.categories = categoriesTmp.filter(
        (category: string, index: number) => {
          return categoriesTmp.indexOf(category!) === index;
        }
      );

      this.works = res;
      this.works.forEach((work: Work, index: number) => {
        this.works[index].links = JSON.parse(work.link);
      });

      // this.works = res;
      this.works$.next(res);
    });

    // Temporary
    // const categoriesTmp = this.works.map((work: Work) => {
    //   return work.category.name;
    // });

    // this.categories = categoriesTmp.filter(
    //   (category: string, index: number) => {
    //     return categoriesTmp.indexOf(category!) === index;
    //   }
    // );

    // this.works.forEach((work: Work, index: number) => {
    //   console.log(work.link);
    //   this.works[index].links = JSON.parse(work.link);
    // });
    // console.log(this.works);

    // this.works$.next(this.works);
  }
}
