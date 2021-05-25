import {MatPaginatorIntl} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import {Injectable} from '@angular/core';

const ITEMS_PER_PAGE = 'Items per page:';
const NEXT_PAGE = 'Next page';
const PREV_PAGE = 'Previous page';
const FIRST_PAGE = 'First page';
const LAST_PAGE = 'Last page';

@Injectable({providedIn: 'root'})
export class CustomPaginator extends MatPaginatorIntl {
  public constructor(private translate: TranslateService) {
    super();

    this.translate.onLangChange.subscribe((e: Event) => {
      this.getAndInitTranslations();
    });

    this.getAndInitTranslations();
  }

  public getRangeLabel = (page: number, pageSize: number, length: number): string => {
    let rangeLabel = 'of';

    this.translate.get('PAGINATOR.RANGE').subscribe((translation: string) => {
      rangeLabel = translation;
    });

    if (length === 0 || pageSize === 0) {
      return `0 ${rangeLabel} ${length}`;
    }

    length = Math.max(length, 0);

    const startIndex: number = page * pageSize;
    const endIndex: number = startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} ${rangeLabel} ${length}`;
  };

  public getAndInitTranslations(): void {
    this.translate.get([
      'PAGINATOR.ITEMS-PER-PAGE',
      'PAGINATOR.NEXT-PAGE',
      'PAGINATOR.PREVIOUS-PAGE',
      'PAGINATOR.FIRST-PAGE',
      'PAGINATOR.LAST-PAGE',
    ])
      .subscribe((translation: any) => {
        this.itemsPerPageLabel = translation['PAGINATOR.ITEMS-PER-PAGE'];
        this.nextPageLabel = translation['PAGINATOR.NEXT-PAGE'];
        this.previousPageLabel = translation['PAGINATOR.PREVIOUS-PAGE'];
        this.firstPageLabel = translation['PAGINATOR.FIRST-PAGE'];
        this.lastPageLabel = translation['PAGINATOR.LAST-PAGE'];

        this.changes.next();
      });
  }
}
