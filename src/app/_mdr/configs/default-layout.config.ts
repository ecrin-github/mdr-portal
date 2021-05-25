export const DefaultLayoutConfig = {
  demo: 'mdr-portal-layout-v.0.5.1',
  js: {
    breakpoints: {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    },
    colors: {
      theme: {
        base: {
          white: '#ffffff',
          primary: '#3699FF',
          secondary: '#E5EAEE',
          success: '#1BC5BD',
          info: '#8950FC',
          warning: '#FFA800',
          danger: '#F64E60',
          light: '#E4E6EF',
          dark: '#181C32',
          'primary-ecrin': '#22568b',
        },
        light: {
          white: '#ffffff',
          primary: '#E1F0FF',
          secondary: '#EBEDF3',
          success: '#C9F7F5',
          info: '#EEE5FF',
          warning: '#FFF4DE',
          danger: '#FFE2E5',
          light: '#F3F6F9',
          dark: '#D6D6E0',
          'primary-ecrin': '#E1E9FF',
        },
        inverse: {
          white: '#ffffff',
          primary: '#ffffff',
          secondary: '#3F4254',
          success: '#ffffff',
          info: '#ffffff',
          warning: '#ffffff',
          danger: '#ffffff',
          light: '#464E5F',
          dark: '#ffffff',
          'primary-ecrin': '#ffffff',
        }
      },
      gray: {
        'gray-100': '#F3F6F9',
        'gray-200': '#EBEDF3',
        'gray-300': '#E4E6EF',
        'gray-400': '#D1D3E0',
        'gray-500': '#B5B5C3',
        'gray-600': '#7E8299',
        'gray-700': '#5E6278',
        'gray-800': '#3F4254',
        'gray-900': '#181C32'
      }
    },
    fontFamily: 'Poppins'
  },
  self: {
    layout: 'default'
  },
  pageLoader: {
    type: ''
  },
  header: {
    self: {
      display: true,
      width: 'fluid',
      theme: 'light',
      fixed: {
        desktop: true,
        mobile: false
      }
    },
    menu: {
      self: {
        display: true,
        static: true,
        layout: 'default',
        rootArrow: false,
        iconStyle: 'duotone'
      },
      desktop: {
        arrow: true,
        toggle: 'click',
        submenu: {
          theme: 'light',
          arrow: true
        }
      },
      mobile: {
        submenu: {
          theme: 'light',
          accordion: true
        }
      }
    }
  },
  content: {
    width: 'fixed'
  },
  brand: {
    self: {
      theme: 'light'
    }
  },
  footer: {
    display: true,
    width: 'fluid',
    fixed: true
  },
  extras: {
    filtersPanel: {
      display: true,
      layout: 'dropdown',
      dropdown: {
        style: 'dark'
      },
      offcanvas: {
        direction: 'right'
      }
    },
    languages: {
      display: true
    },
    quickPanel: {
      display: true,
      offcanvas: {
        direction: 'right'
      }
    },
    toolbar: {
      display: true
    },
    scrolltop: {
      display: true
    }
  }
};
