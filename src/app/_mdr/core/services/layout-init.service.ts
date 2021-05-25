import { Injectable } from '@angular/core';
import { LayoutService } from './layout.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutInitService {
  constructor(private layout: LayoutService) {
  }

  init() {
    this.layout.initConfig();

    this.preInitLayout();
    // init base layout
    this.initLayout();
    this.initLoader();

    // init header and subheader menu
    this.initHeader();

    // init content
    this.initContent();

    // init footer
    this.initFooter();

    this.initSkins();
  }

  // init base layout
  private preInitLayout() {
    const config = this.layout.getConfig();
    const updatedConfig = Object.assign({}, config);
    this.layout.setConfigWithoutLocalStorageChanges(updatedConfig);
  }

  private initLayout() {
    const selfBodyBackgroundImage = this.layout.getProp(
      'self.body.background-image'
    );
    if (selfBodyBackgroundImage) {
      document.body.style.backgroundImage = `url("${selfBodyBackgroundImage}")`;
    }

    const selfBodyClass = (
      this.layout.getProp('self.body.class') || ''
    ).toString();
    if (selfBodyClass) {
      const bodyClasses: string[] = selfBodyClass.split(' ');
      bodyClasses.forEach((cssClass) => document.body.classList.add(cssClass));
    }
  }

  private initLoader() { }

  // init header and subheader menu
  private initHeader() {
    // Fixed header
    const headerSelfFixedDesktop = this.layout.getProp(
      'header.self.fixed.desktop'
    );
    if (headerSelfFixedDesktop) {
      document.body.classList.add('header-fixed');
      this.layout.setCSSClass('header', 'header-fixed');
    } else {
      document.body.classList.add('header-static');
    }

    const headerSelfFixedMobile = this.layout.getProp(
      'header.self.fixed.mobile'
    );
    if (headerSelfFixedMobile) {
      document.body.classList.add('header-mobile-fixed');
      this.layout.setCSSClass('header_mobile', 'header-mobile-fixed');
    }

    // Menu
    const headerMenuSelfDisplay = this.layout.getProp(
      'header.menu.self.display'
    );
    const headerMenuSelfLayout = this.layout.getProp('header.menu.self.layout');
    if (headerMenuSelfDisplay) {
      this.layout.setCSSClass(
        'header_menu',
        `header-menu-layout-${headerMenuSelfLayout}`
      );

      if (this.layout.getProp('header.menu.self.rootArrow')) {
        this.layout.setCSSClass('header_menu', 'header-menu-root-arrow');
      }
    }

    if (this.layout.getProp('header.self.width') === 'fluid') {
      this.layout.setCSSClass('header_container', 'container-fluid');
    } else {
      this.layout.setCSSClass('header_container', 'container');
    }
  }

  // init content
  private initContent() {
    if (this.layout.getProp('content.fit-top')) {
      this.layout.setCSSClass('content', 'pt-0');
    }

    if (this.layout.getProp('content.fit-bottom')) {
      this.layout.setCSSClass('content', 'pb-0');
    }

    if (this.layout.getProp('content.width') === 'fluid') {
      this.layout.setCSSClass('content_container', 'container-fluid');
    } else {
      this.layout.setCSSClass('content_container', 'container');
    }
  }

  // init footer
  private initFooter() {
    // Fixed header
    if (this.layout.getProp('footer.fixed') === true) {
      document.body.classList.add('footer-fixed');
    }

    if (this.layout.getProp('footer.width') === 'fluid') {
      this.layout.setCSSClass('footer_container', 'container-fluid');
    } else {
      this.layout.setCSSClass('footer_container', 'container');
    }
  }

  /**
   * Set the body class name based on page skin options
   */
  private initSkins() {
    const headerSelfTheme = this.layout.getProp('header.self.theme') || '';
    const brandSelfTheme = this.layout.getProp('brand.self.theme') || '';
    const asideSelfDisplay = this.layout.getProp('aside.self.display');
    if (asideSelfDisplay === false) {
      document.body.classList.add(`brand-${headerSelfTheme}`);
    } else {
      document.body.classList.add(`brand-${brandSelfTheme}`);
    }
  }
}
